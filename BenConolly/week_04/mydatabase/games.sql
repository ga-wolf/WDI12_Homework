CREATE TABLE games (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  studio TEXT,
  cover TEXT,
  genre TEXT,
  score INTEGER,
  recommend BOOLEAN
);

INSERT INTO games (name, studio, genre, score, recommend) VALUES ('Bioshock', '2k games', 'horror', 9, 1);