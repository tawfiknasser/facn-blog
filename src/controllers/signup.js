const express = require('express');
const bodyParser = require('body-parser');
const queries = require('../../database/queries/sql.js');
//const app = express();

//app.use(bodyParser.json());
//
// app.route('/signup')
//   .get('/signup', (request, response, next) => {
//   console.log("GET is: " + request.body);
//   response.redirect('/posts');
// })
//
// app.route('/signup')
//   .post('/signup', (request, response, next) => {
//   console.log("POST is: " + request.body);
// })


exports.get = (request, response) => {
  queries.selectUserByName(request.body.username, (error, result) => {
    if (error) console.log('Error');
    result.redirect('/posts')
  })
}

exports.post = (request, response) => {
  console.log(request.body.name);
  console.log("The response is: " + response);

  queries.selectUserByName(request.body.username, (error, result) => {
    console.log(result);
    if(error) console.log(error);
    if (result.rows[0].count > 0) {
      console.log('Sorry, that name is already taken');
      response.redirect('/signup');
    } else {
      console.log(request.body.name);
      console.log(request.body.username);
      console.log(request.body.password);
      //call function here to add username and password to DB
      queries.addNewUser(request.body.name, request.body.username, request.body.password,(err,res)=> {

        if (err) {
          console.log(err);
        } else {
          console.log('New account created');
        }
      });
      response.redirect('/posts')
    }
  });
}

//module.exports = app
