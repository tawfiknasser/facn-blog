const ppcookie = require("cookie");
const { decode } = require("jsonwebtoken");
const queries = require("../../database/queries/sql");

exports.get = (req, res) => {
  queries.selectAllFrom("blogs", (err, result) => {
    if (err) console.log("ERRROR");

    let decoded = decode(ppcookie.parse(req.headers.cookie).uDetails);

    queries.selectUserByUserName(decoded.uUser, (err, resu) => {
      if (err) console.log(err);
      let user = resu.rows[0];

      res.render("posts", {
        blogs: result.rows
          .sort(function(a, b) {
            return a.id - b.id;
          })
          .map(blog => {
            if (blog.writer_id === user.id) blog.isOwner = true;
            else blog.isOwner = false;
            return blog;
          }),
        user: user.name
      });
    });
  });
};

exports.addPostGet = (req, res) => {
  res.render("addpost");
};

exports.addPost = (req, res) => {
  let decoded = decode(ppcookie.parse(req.headers.cookie).uDetails);
  queries.selectUserByUserName(decoded.uUser, (err, resu) => {
    if (err) console.log(err);
    let user = resu.rows[0];

    const id = user.id;
    const title = req.body.title;
    const desc = req.body.desc;
    queries.addNewPost(id, title, desc, (err, result) => {
      if (err) console.log(err);
      res.redirect("/posts");
    });
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
    res.redirect("/posts");
  });
};
