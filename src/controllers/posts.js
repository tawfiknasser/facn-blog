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

// const addNewPost = (writer_id, title, description, likes, cb) =>
//   query.insert(
//     "INSERT INTO user (writer_id,title,description,likes) VALUES ($1,$2,$3,$4);",
//     [writer_id, title, description, likes],
//     cb
//   );