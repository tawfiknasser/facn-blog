exports.post = (req, res) => {
  console.log(req.body);
  res.redirect('/login');
};

exports.get = (req, res) => {
  res.render('login');
};
