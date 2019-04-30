const queries = require('../../database/queries/sql.js')
exports.post = (req, res) => {
  queries.trueUser(req.body.username, req.body.password, (err, res) => {
      console.log(res);
      if (err) {
        console.log("Invalid")
      } else {
        if (resu.rows[0].count > 0) {
          console.log("Logged in");
          res.redirect('/posts');
        } else {
          console.log('invalid user');
          res.redirect('/login')
        }
      }
    })
}



exports.get = (req, res) => {
  res.render('login');
};
