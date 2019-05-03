//// TODO:  error layout instead of serving html
exports.clientError = (req, res) => {
  response.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
};

exports.serverError = (err, req, res, next) => {
  response.status(500).sendFile(path.join(__dirname, '..', 'public', '500.html'));
}
