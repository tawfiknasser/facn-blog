const queries = require('../../database/queries/sql.js')
exports.post = (req, res) => {
  if(queries.trueUser(req.body.username,req.body.password,(err,res)=>{
    console.log(res);
    if(err) {
      console.log("Invalid")
    }else{
      if(res.rows[0].count>0){
      console.log("Logged in");
    }else{
      console.log('invalid user');
    }
    }
  }))
  res.redirect('/posts');
};

exports.get = (req, res) => {
  res.render('login');
};
