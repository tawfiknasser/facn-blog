BEGIN;

DROP TABLE IF EXISTS users
CASCADE;
DROP TABLE IF EXISTS blogs
CASCADE;

CREATE TABLE
IF NOT EXISTS users
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(60) NOT NULL,
  username VARCHAR(60) NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE
IF NOT EXISTS blogs
(
   id SERIAL PRIMARY KEY,
   writer_id INTEGER NOT NULL,
   title VARCHAR NOT NULL,
   description VARCHAR NOT NULL,
   likes INTEGER NOT NULL DEFAULT 0
 );


INSERT INTO users(name,username,password)
VALUES
  ('tamer','tamer', 'nopass'),
  ('majd', 'majd','okpass'),
  ('john', 'john','okpass'),
  ('obyda','obyda', 'passpass');

INSERT INTO blogs(writer_id,title,description,likes)
VALUES
  (1, 'tamer', 'nopass', 8),
  (2, 'majd', 'okpass', 104),
  (3, 'majd', 'okpass', 53),
  (4, 'obyda', 'passpass', 9000);


COMMIT;
