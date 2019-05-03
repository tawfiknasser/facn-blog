const databaseConnection = require('../db_connection.js');

const selectquery = (sql, cb) => {
  databaseConnection.query(sql, (err, res) => {
    console.log('Inside selectquery');
    if (err) {
      cb(err);
    } else {
      console.log(res);
      cb(null, res);
    }
  });
};

const insertquery = (sql, args, cb) => {
  databaseConnection.query(sql, args, (err, res) => {
    console.log('Inside insertquery');
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

const updatequery = (sql, args, cb) => {
  databaseConnection.query(sql, args, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

module.exports = {
  select: selectquery,
  insert: insertquery,
  update: updatequery
};
