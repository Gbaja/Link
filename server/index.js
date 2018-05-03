const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();
const routes = require("./routes/index");

if (process.env.NODE_ENV !== "production") {
  require("env2")(".env");
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cookieSession({
    name: "session",
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 27 * 60 * 60 * 1000 }
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("/app/build/index.html"));
  });
}

app.disabled("x-powered-by");

module.exports = app;
