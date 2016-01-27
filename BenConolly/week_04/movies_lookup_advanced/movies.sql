CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  year INTEGER,
  runtime TEXT,
  genre TEXT,
  director TEXT,
  writer TEXT,
  awards TEXT,
  metascore INTEGER,
  poster TEXT
);

INSERT INTO movies (title, year, runtime, genre, director, awards, metascore, poster) VALUES ('Argo', 2012, '120 min', "Drama, History, Thriller", 'Ben Affleck', "Won 3 Oscars. Another 83 wins & 144 nominations.", 8.6, "http://ia.media-imdb.com/images/M/MV5BMTc3MjI0MjM0NF5BMl5BanBnXkFtZTcwMTYxMTQ1OA@@._V1_SX300.jpg");


-- Start with an SQL database, export it into a db file, then start writing everything else.