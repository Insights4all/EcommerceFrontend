require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
var session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Initializing express
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());

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
const Shop = require("./models/shopkeeper");
const Admin = require("./models/admin");
const Cart = require("./models/cart");
const allProduct = require("./models/allproducts");

// passport.use(User.createStrategy());

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

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

const ObjectID = require("mongodb").ObjectId;

app.post("/newnewregister", async (req, res) => {
  console.log("UserRegisterBody", req.body);

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const usercre = {
    email: req.body.email,
    password: hashedPassword,
  };
  console.log(usercre);

  let newuser = new User({
    fullName: req.body.fullName,
    contact: req.body.contact,
    password: usercre.password,
    email: usercre.email,
  });
  console.log(newuser);

  newuser.save((err, result) => {
    if (err) {
      res.status(500).send();
      console.log(err);
    } else {
      console.log("Data saves");
    }
  });
  const UserEmail = {
    email: newuser.email,
  };
  User.find({ email: newuser.email }, async function (err, docs) {
    const [docsData] = docs;
    const userid = docsData.id;
    console.log("userid", userid);
  });
  const accessToken = generateAccessToken(UserEmail);
  console.log("Accesstoken", accessToken);
  const refreshToken = jwt.sign(UserEmail, process.env.REFRESH_TOKEN_SECRET);
  console.log("refreshtoken", refreshToken);
  //res.json({ accessToken: accessToken, refreshToken: refreshToken });
  res
    .status(201)
    .json({ accessToken: accessToken, refreshToken: refreshToken, id: userid });
});

app.post("/addcartdata", (req, res) => {
  console.log("cartbody", req.body);
  const data = req.body;
  const newProduct = new Cart(data);

  console.log("newcartdata", newProduct);
  newProduct.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Data saved to mongoose");
    }
  });
  res.json({
    msg: "We received your data",
  });
});

app.get("/geteachproduct/:productid", (req, res) => {
  allProduct
    .findById(ObjectID(req.params.productid))
    .then((doc) => {
      res.json(doc);
    })
    .catch((error) => {
      console.log("No data found");
    });
});
app.get("/getshop/:shopid", (req, res) => {
  console.log(req.params);
  Shop.findById(ObjectID(req.params.shopid))
    .then((doc) => {
      res.json(doc);
    })
    .catch((error) => {
      console.log("No data found");
    });
});
app.get("/getproductdata/:shopid", (req, res) => {
  allProduct
    .find({ storeid: req.params.shopid })
    .then((doc) => {
      res.json(doc);
    })
    .catch((error) => {
      console.log("No data found");
    });
});

app.get("/getproduct", (req, res) => {
  console.log("Inside gET API");

  allProduct
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("No data found");
    });
});

app.get("/allproducts", (req, res) => {
  Product.find({}, function (err, products) {
    res.send(products);
  });
});
app.post("/addproduct", (req, res) => {
  console.log("body", req.body);
  const data = req.body;
  const newProduct = new allProduct(data);
  newProduct.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Data saved to mongoose");
    }
  });
  res.json({
    msg: "We received your data",
  });
});

app.post("/shopregister", async (req, res) => {
  //console.log("shopRegisterBody", req.body);
  const arrObj = req.body;
  const newObj = arrObj.reduce(function (result, current) {
    return Object.assign(result, current);
  }, {});
  console.log("My updated object ", newObj);

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(newObj.shop_password, salt);
  const shopcre = {
    shop_email: newObj.shop_email,
    shop_password: hashedPassword,
  };
  console.log("In try block");
  console.log(shopcre);

  let newShop = new Shop({
    shopName: newObj.shop_name,
    bussinessAddress: newObj.shop_address,
    bussinessContact: newObj.shop_contact,
    bussinessInstaID: newObj.shop_insta_id,
    bussinessFacebookID: newObj.shop_facebook_id,
    shopType: newObj.shop_Type,
    aboutShop: newObj.shop_details,
    businessTagLine: newObj.shop_tagLine,
    businesslogo: newObj.businesslogo,
    fullName: newObj.owner_name,
    email: newObj.owner_email,
    contact: newObj.owner_contact,
    shopEmail: shopcre.shop_email,
    shoppassword: shopcre.shop_password,
  });
  console.log(newShop);

  newShop.save((err, result) => {
    if (err) {
      res.status(500).send();
    } else {
      console.log("Data saves");
    }
  });
  const ShopEmail = {
    shop_email: newShop.shopEmail,
  };
  const accessToken = generateAccessToken(ShopEmail);
  console.log("Accesstoken", accessToken);
  const refreshToken = jwt.sign(ShopEmail, process.env.REFRESH_TOKEN_SECRET);
  console.log("refreshtoken", refreshToken);
  //   res.json({ accessToken: accessToken, refreshToken: refreshToken });
  res
    .status(201)
    .json({ accessToken: accessToken, refreshToken: refreshToken });
});

app.post("/shoplogin", async (req, res) => {
  console.log("body is", req.body);
  Shop.find({ shopEmail: req.body.shopemail }, async function (err, docs) {
    if (err) {
      console.log("mongoose error", err);
      res.status(500).send("Mongoose error");
    } else {
      if (!docs.length) {
        return res.status(400).send("Cannot Find Shop");
      }
      const [docsData] = docs;

      const data = await bcrypt.compare(
        req.body.shoppassword,
        docsData.shoppassword
      );
      if (data) {
        try {
          const shopEmail = {
            ShopEmail: req.body.shopemail,
          };
          const accessToken = generateAccessToken(shopEmail);
          const refreshToken = jwt.sign(
            shopEmail,
            process.env.REFRESH_TOKEN_SECRET
          );
          res.status(201).json({
            accessToken: accessToken,
            refreshToken: refreshToken,
            id: docsData.id,
          });
        } catch (error) {
          res.status(500).send();
        }
      } else {
        res.status(400).send("Not allowed");
      }
    }
  });
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

app.post("/newlogin", async (req, res) => {
  // const user = users.find((user) => user.email === req.body.email);
  console.log("body is", req.body);
  User.find({ email: req.body.email }, async function (err, docs) {
    if (err) {
      console.log("mongoose error", err);
      res.status(500).send("Mongoose error");
    } else {
      if (!docs.length) {
        return res.status(400).send("Cannot Find User");
      }
      const [docsData] = docs;
      const data = await bcrypt.compare(req.body.password, docsData.password);
      if (data) {
        try {
          const User = {
            email: req.body.email,
          };
          const accessToken = generateAccessToken(User);
          const refreshToken = jwt.sign(User, process.env.REFRESH_TOKEN_SECRET);
          res.status(201).json({
            accessToken: accessToken,
            refreshToken: refreshToken,
            id: docsData.id,
          });
        } catch (error) {
          res.status(500).send();
        }
      } else {
        res.status(400).send("Not allowed");
      }
    }
  });
});

app.post("/addtocart", (req, res) => {
  console.log("req.body", req.body);

  let cart = new Cart({
    name: req.body.name,
    color: req.body.color,
    userid: req.body.userid,
  });

  cart.save((err, result) => {
    if (err) {
      res.status(500).send();
    }
    res.status(201).send("sucess");
  });
});

app.get("/cart/:userid", (req, res) => {
  const UserID = req.params.userid;
  Cart.find({ userid: UserID }, function (err, docs) {
    if (err) {
      res.json(err);
    } else {
      res.json(docs);
    }
  });
});

app.get("/authcheck", authenticateToken, (req, res) => {
  console.log(req.user.email);
  res.json("good User");
});

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
