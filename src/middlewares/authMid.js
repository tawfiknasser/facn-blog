const ppcookie = require("cookie");
const {  verify } = require("jsonwebtoken");
exports.checkauth =  (req, res,next) => {
  if (!req.headers.cookie) res.render("login");
  else {
    let cookieCopy;
    try {
      cookieCopy = ppcookie.parse(req.headers.cookie || "No cookies at all");

    } catch (error) {
      res.render("login");
    }
    // cookieCopy.uDetails   is the JWT
      verify(cookieCopy.uDetails, process.env.SECRET, (err, cookieCopy) => {
        if (err) res.render("login");
       next()

      });

  }
};
