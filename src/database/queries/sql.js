const query = require('./queries.js');

const selectAllFrom = (table, cb) =>
  query.select(`SELECT * from ${table};`, cb);

const selectByIdFrom = (id, table, cb) =>
  query.select(`SELECT * from ${table} where id = ${id};`, cb);

const selectUserByName = (name, cb) =>
  query.select(`SELECT count(id) from users where name = '${name}';`, cb);

const deleteByIdFrom = (id, table, cb) =>
  query.select(`DELETE FROM ${table} WHERE id = ${id};`, cb);

const deleteUserByName = (name, cb) =>
  query.select(`DELETE FROM users WHERE name = '${name}';`, cb);

const deleteBlogByTitle = (title, cb) =>
  query.select(`DELETE FROM blogs WHERE title = '${title}';`, cb);

const addNewUser = (name, username, password, cb) =>
  query.insert(
    'INSERT INTO users (name,username,password) VALUES ($1,$2,$3);',
    [name, username, password],
    cb
  );

const addNewPost = (writerId, title, description, cb) =>
  query.insert(
    'INSERT INTO blogs (writer_id,title,description) VALUES ($1,$2,$3);',
    [writerId, title, description],
    cb
  );

const updateLikes = (id, cb) => {
  let data;
  selectByIdFrom(id, 'blogs', (err, result) => {
    if (err) console.log('update error');
    data = result.rows;
    query.update(`UPDATE blogs SET likes = $2 WHERE id = $1;`,
      [data[0].id, data[0].likes += 1],
      cb
    );
  })
}

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

const getUserPass = (username, cb) =>
  query.select(`SELECT password from users where username ='${username}'`, cb);

module.exports = {
  selectAllFrom,
  selectByIdFrom,
  selectUserByName,
  deleteByIdFrom,
  deleteUserByName,
  deleteBlogByTitle,
  addNewUser,
  addNewPost,
  updateLikes,
  updatePost,
  trueUser,
  getUserPass,
};
