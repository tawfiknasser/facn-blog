const express = require('express');
const bodyParser = require('body-parser');
const queries = require('../../database/queries/sql.js');
const app = express();

exports.get = (request, response) => {
  queries.selectUserByName(request.body.username, (error, result) => {
    if (error) console.log('Error');
    result.redirect('/posts')
  })
}

exports.post = (request, response) => {
  queries.selectUserByName(request.body.username, (error, response) => {
    app.use(bodyParser.json());
    console.log("The response is: " + response);
    if (response.rows[0].count > 0) {
      console.log('Sorry, that name is already taken');
      response.redirect('/signup');
    } else {
      console.log('New account created');
      //call function here to add username and password to DB
      queries.addNewUser(request.body.name, request.body.username, request.body.password);
      response.redirect('/posts')
    }
    });
}
