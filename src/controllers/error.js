//// TODO:  error layout instead of serving html
const path=require("path")
exports.clientError = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..','..', 'public', '404.html'));
};

exports.serverError = (err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, '..','..', 'public', '500.html'));
}
