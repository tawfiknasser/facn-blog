const express = require('express');
const queries = require('../../database/queries/sql.js');

exports.post = (request, response) => {
  queries.selectUserByName(request.body.username, (error, response) => {
    console.log(response);
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
