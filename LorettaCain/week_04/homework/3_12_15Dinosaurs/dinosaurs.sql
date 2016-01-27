CREATE TABLE dinosaurs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT, 
  eon TEXT,
  era TEXT,
  period TEXT,
  extent TEXT,
  duration TEXT,
  image TEXT
);

INSERT INTO dinosaurs (name, eon, era, period, extent, duration) VALUES ('Tyrannosaurus', 'Phanerozoic', 'Mesozoic', 'Cretaceous', '145.5–66.0', '79.5');