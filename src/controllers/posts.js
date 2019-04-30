const queries = require('../../database/queries/sql');

exports.get = (req, res) => {
  queries.selectAllFrom("blogs", (err, result) => {
    if (err) console.log("ERRROR");
    res.render('posts', {
      blogs: result.rows
    })
  })
}

exports.post = (req, res) => {
  queries.addNewPost()
}
