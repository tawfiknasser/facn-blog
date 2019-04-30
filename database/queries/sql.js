const query = require("./queries.js");

const selectAllFrom = (table, cb) =>
  query.select(`SELECT * from ${table};`, cb);

const selectByIdFrom = (id, table, cb) =>
  query.select(`SELECT * from '${table}' where id = ${id};`, cb);

const selectUserByName = (name, cb) =>
  query.select(`SELECT * from users where name = ${name};`, cb);

const deleteByIdFrom = (id, table, cb) =>
  query.select(`DELETE FROM ${table} WHERE id = ${id};`, cb);

const deleteUserByName = (name, cb) =>
  query.select(`DELETE FROM users WHERE name = '${name}';`, cb);

const deleteBlogByTitle = (title, cb) =>
  query.select(`DELETE FROM blogs WHERE title = '${title}';`, cb);

const addNewUser = (name, username, password, cb) =>
  query.insert(
    "INSERT INTO user (name,username,password) VALUES ($1,$2,$3);",
    [name, username, password],
    cb
  );

const addNewPost = (writer_id, title, description, cb) =>
  query.insert(
    "INSERT INTO blogs (writer_id,title,description) VALUES ($1,$2,$3);",
    [writer_id, title, description],
    cb
  );

const updatePost = (id, title, description, cb) =>
  query.insert(
    `UPDATE blogs 
      SET title = '${title}',
      description = '${description}'
       WHERE blogs.id = '${id}';`,
    cb
  );

const trueUser = (username, password, cb) =>
  query.select(
    `SELECT count(id) from users where username = '${username}' AND password = '${password}';`,
    cb
  );

module.exports = {
  selectAllFrom,
  selectByIdFrom,
  selectUserByName,
  deleteByIdFrom,
  deleteUserByName,
  deleteBlogByTitle,
  addNewUser,
  addNewPost,
  updatePost,
  trueUser
};
