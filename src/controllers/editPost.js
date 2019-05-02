const url = require("url");
const queries = require("../database/queries/sql");

exports.get = (req, res) => {
  let id = url.parse(req.url).query.split("=")[1];
  queries.selectByIdFrom(id, "blogs", (err, result) => {
    if (err) console.log("err");
    res.render("editpost", {
      blog: result.rows[0]
    });
  });
};

exports.saveChanges = (req, res) => {
  const { id, title, desc } = req.body;
  queries.updatePost(id, title, desc, (err, result) => {
    if (err) console.log(err);
    res.redirect("/posts");
  });
};
