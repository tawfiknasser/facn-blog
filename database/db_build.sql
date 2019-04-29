BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS blogs CASCADE;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(60) NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS blogs (
   id SERIAL PRIMARY KEY,
   writer_id INTEGER NOT NULL,
   title VARCHAR NOT NULL,
   description VARCHAR NOT NULL,
   likes INTEGER NOT NULL
 );


INSERT INTO users (username,password) VALUES
 ('tamer','nopass'),
 ('majd','okpass'),
 ('obyda','passpass');

INSERT INTO blogs (writer_id,title,description,likes) VALUES
 (1,'tamer','nopass',8),
 (2,'majd','okpass',14),
 (3,'obyda','passpass',9000);

 
 COMMIT;
