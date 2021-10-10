const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const seedDB = require("./seed");
const productRoutes = require("./routes/productRoutes");
const session = require("express-session");
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');


mongoose
  .connect("mongodb://localhost:27017/shop-db")
  .then((m) => console.log("DB Connected"))
  .catch((e) => console.log(e));

// seedDB();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const sessionConfig = {
  secret: "Weneedsomebettersecert",
  resave: false,
  saveUninitialized : true
}


app.use(session(sessionConfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');

  next();
})

// app.use('flash()');
app.get("/", (req, res) => {
  res.send("Connected");
});

app.use(productRoutes);

app.listen(3000, (req, res) => {
  console.log("Sever is listening at port 3000");
});
