CREATE TABLE characters (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  age INTEGER,
  gender TEXT,
  occupation TEXT,
  aliases TEXT,
  image TEXT
);

INSERT INTO characters (first_name, last_name, age, gender, occupation, aliases, image) VALUES ('Walter', 'White', 50, 'male', 'Cofounder Gray Matter Technologies, chemist at Sandia Labs, Chemistry teacher (J.P. Wynne High School, Co-owner A1A car wash, Crystal Meth manufacturer, Drug Kingpin', 'Heisenberg, Mr White, Mr Lambert, Walt Jackson, Mr Mayhew, David Lynn', 'http://assets.rollingstone.com/assets/images/story/why-audiences-still-root-for-walter-white-20130927/092713-bb-623-1380292976.jpg');