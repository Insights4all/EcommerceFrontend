const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

var session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var LocalStrategy = require("passport-local").Strategy;

//Initializing express
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.urlencoded({ extended: false }));

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
app.use(morgan("tiny"));
app.listen(PORT, console.log(`Server is starting at ${PORT}`));