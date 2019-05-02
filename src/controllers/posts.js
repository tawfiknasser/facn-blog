const queries = require("../../database/queries/sql");

exports.get = (req, res) => {
  queries.selectAllFrom("blogs", (err, result) => {
    if (err) console.log("ERRROR");
    let userId = 12;
    res.render("posts", {
      blogs: result.rows
        .sort(function(a, b) {
          return a.id - b.id;
        })
        .map(blog => {
          if (blog.writer_id === userId) blog.isOwner = true;
          else blog.isOwner = false;
          return blog;
        })
    });
  });
};

exports.addPostGet = (req, res) => {
  res.render("addpost");
};

exports.addPost = (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const desc = req.body.desc;
  queries.addNewPost(id, title, desc, (err, result) => {
    if (err) console.log(err);
    res.redirect("/posts");
  });
};

exports.editPost = (req, res) => {
  const { id, title, desc } = req.body;
  queries.updatePost(id, title, desc, (err, result) => {
    if (err) console.log(err);
    res.redirect("/editpost");
  });
};

exports.deleteBlog = (req, res) => {
  queries.deleteByIdFrom(req.body.id, "blogs", (err, result) => {
    if (err) console.log(err);
    if (result) console.log(result);
    res.redirect("/posts");
  });
};
