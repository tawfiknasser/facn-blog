const queries = require('../../database/queries/sql.js');
const bcrypt = require('../utils/utils.js');

exports.get = (request, response) => {
  queries.selectUserByName(request.body.username, (error, result) => {
    if (error) console.log('Error');
    console.log(result);
    response.render('signup');
  });
};

exports.post = (request, response) => {
  // console.log(request.body.name);
  // console.log(`The response is: ${response}`);
  // console.log(`Hashed password is ${bcrypt.hashPassword(request.body.password, (error, hashedPassword) => {
  //   if (error) console.log(error);
  //   else console.log(hashedPassword);
  // })}`);

  queries.selectUserByName(request.body.username, (error, result) => {
    if (error) console.log(error);
    if (result.rows[0].count > 0) {
      console.log('Sorry, that name is already taken');
      response.redirect('/signup');
    } else {
      bcrypt.hashPassword(request.body.password, (error, hashedPassword) => {
        if (error) console.log(error);
        else {
          queries.addNewUser(request.body.name, request.body.username,
            hashedPassword, (err, res) => {
              console.log(res);
              if (err) {
                console.log(err);
              } else {
                console.log('Creating new user account');
              }
            });
        }
      });
      response.redirect('/posts');
    }
  });
};
