const queries = require('../../database/queries/sql');

exports.post = (req, res) => {
  const id = req.body.like;
  queries.updateLikes(id, (err, result) => {
    console.log(result);
    if (err) console.log('i\'m here');
    res.redirect('/posts');
  });
};
