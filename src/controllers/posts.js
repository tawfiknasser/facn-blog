const queries = require("../../database/queries/sql");

exports.get = (req, res) => {
  queries.selectAllFrom("blogs", (err, result) => {
    if (err) console.log("ERRROR");
    res.render("posts", {
      blogs: result.rows
    });
  });
};

exports.addPost = (req, res) => {
  let id = req.body.id;
  let title = req.body.title;
  let desc = req.body.desc;
  queries.addNewPost(id, title, desc, (err, result) => {
    if (err) console.log(err);
    res.redirect("/posts");
  });
};

exports.editPost = (req, res) => {
  const { id, title, desc } = req.body;
  queries.updatePost(id, title, desc, (err, result) => {
    if (err) console.log(err);
    res.redirect("/posts");
  });
};

exports.deleteBlog = (req, res) => {
  queries.deleteByIdFrom(req.body.id, "blogs", (err, result) => {
    if (err) console.log(err);
    res.redirect("/posts");
  });
};

// exports.post = (req, res) => {
//   console.log(req.body.name, req.body.image_url);
//   res.redirect('/fruit');
// };

// const addNewPost = (writer_id, title, description, likes, cb) =>
//   query.insert(
//     "INSERT INTO user (writer_id,title,description,likes) VALUES ($1,$2,$3,$4);",
//     [writer_id, title, description, likes],
//     cb
//   );
