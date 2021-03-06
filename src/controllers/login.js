const ppcookie = require("cookie");
const { sign, verify } = require("jsonwebtoken");
const queries = require("../database/queries/sql.js");
const utils = require("../utils/utils");

exports.post = (req, res) => {
  queries.getUserPass(req.body.username, (err, resu) => {
    if (err) {
      console.log("Error in validating the username and password");
    } else {
      if (resu.rowCount === 0) {
        res.render("login");
      } else if (resu.rowCount > 0) {
        utils.comparePasswords(
          req.body.password,
          resu.rows[0].password,
          (er, success) => {
            if (er) console.log(er);
            else {
              if (success) {
                const uDetails = {
                  "content-type": "application/json",
                  uUser: req.body.username
                };
                const cookie = sign(uDetails, process.env.SECRET);
                const options = {
                  httpOnly: true
                };
                res.cookie("uDetails", cookie, options);
                res.redirect("/posts");
              } else {
                console.log("Invalid user name or password");
              }
            }
            // res.redirect('login');
          }
        );
      } else {
        console.log("invalid user");
        res.redirect("/");
      }
    }
  });
};


exports.get = (req, res) => {
  res.render("login");
};
