require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')
var session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

//Initializing express
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors())

app.use(express.json());
const users = [];
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use(cookieParser("secretcode"));

app.use(passport.initialize());
app.use(passport.session());
const User = require("./models/User");
const Product = require("./models/products");
const Shopkeeper = require("./models/shopkeeper");
const Admin = require("./models/admin");


passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Using Mongodb atlas
const mongodburi =
  "mongodb+srv://insights4all:insights4all@7866@ourshop.kuht5.mongodb.net/OurShop?retryWrites=true&w=majority";


  
mongoose.connect(mongodburi, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!");
});


app.get("/allproducts", (req, res) => {
  Product.find({}, function (err, products) {
    res.send(products);
  });
});



app.post("/shopregister", (req, res) => {
  console.log("shopRegisterBody", req.body);
  let shopData = req.body
  let ShopData = new Shopkeeper({ shopName: shopData.shopName });
  ShopData.save(function (err, data) {
    if (err) return console.error("error in shopkeeper",err);
    console.log(data, " saved to bookstore collection.");
  });

  res.json(shopData);
});


app.post("/register", (req, res) => {
  console.log("In register route");
  console.log(req.body);

  User.register(
    {
      fullname: req.body.fullname,
      username: req.body.username,
      address: req.body.address,
      contact: req.body.contact,
    },
    req.body.password,

    (err, user) => {
      if (err) {
        console.log(err);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, function () {
          res.json("registered successfull");
        });
      }
    }
  );
});

app.post("/login", function (req, res) {
  console.log("In login rooute");
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  console.log(req.body, "------recieved data is", req.body.username);
  req.login(user, function (err) {
    if (err) {
      console.log(err);
    } 
    // if (user == null) {
    //   res.json("aaa");
    // }
    else {
      passport.authenticate("local")(req, res, function () {
        res.json("Login Success");

        // res.status(200).json({ error: "boo:(" });
      });
    }
  });
});

app.get("/checklogin", function (req, res) {
  if (req.isAuthenticated()) {
    res.json({ status: "Yes", id: req.user.id, fullname: req.user.fullname });
  } else {
    res.json({ status: "No" });
  }
});

app.get("/logout", function (req, res) {
  req.logout();
  //console.log("Logout sucess");
  res.json({ status: "No" });
});

app.post("/newregister", async (req, res) => {
  console.log("adasdf", req.body);
  try {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const user = { email: req.body.email, password: hashedPassword };
      users.push(user);

      let newUser = new Admin({
        email: user.email,
        password:user.password
    })
      
    newUser.save((err,result)=>{
      if(err){
        res.status(500).send();
      }
    })
      const User = {
        email: req.body.email,
      };
      const accessToken = generateAccessToken(User);
      const refreshToken = jwt.sign(User, process.env.REFRESH_TOKEN_SECRET);
      //   res.json({ accessToken: accessToken, refreshToken: refreshToken });
      res
        .status(201)
        .json({ accessToken: accessToken, refreshToken: refreshToken });
    } catch (error) {
      res.status(500).send();
    }
    res.status(201).send(user);
  } catch {
    res.status(500).send();
  }
});

app.post("/newlogin", async (req, res) => {
  // const user = users.find((user) => user.email === req.body.email);
console.log("body is", req.body)
  Admin.find({ email: req.body.email }, async function (err, docs) {
    if (err) {
      console.log("mongoose error", err);
      res.status(500).send("Mongoose error")
    } else {
      if (!docs.length) {
        return res.status(400).send("Cannot Find User");
      }
      const [docsData] = docs
      const data = await bcrypt.compare(req.body.password, docsData.password)
      if (data) {
        try {
          const User = {
            email: req.body.email,
          };
          const accessToken = generateAccessToken(User);
          const refreshToken = jwt.sign(User, process.env.REFRESH_TOKEN_SECRET);
          res
            .status(201)
            .json({ accessToken: accessToken, refreshToken: refreshToken });
        } catch (error) {
          res.status(500).send();
        }
      } else {
        res.status(400).send("Not allowed");
      }
    }
  });
});



app.get("/authcheck",authenticateToken, (req,res) => {
  console.log(req.user.email)
  res.json("good User")

})

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "300s" });
};

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}  


app.listen(PORT, console.log(`Server is starting at ${PORT}`));



// if (!user) {
//   return res.status(400).send("Cannot Find User");
// }
// try {
//   if (await bcrypt.compare(req.body.password, user.password)) { //remove function from here and add it to var
//       try {
//           const User = {
//             email: req.body.email,
//           };
//           const accessToken = generateAccessToken(User);
//           const refreshToken = jwt.sign(User, process.env.REFRESH_TOKEN_SECRET);
//           res
//             .status(201)
//             .json({ accessToken: accessToken, refreshToken: refreshToken });
//         } catch (error) {
//           res.status(500).send();
//         }
//   } else {
//     res.send("Not allowed");
//   }
// } catch {
//   res.send(500).send();
// }