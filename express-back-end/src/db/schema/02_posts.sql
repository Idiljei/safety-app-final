DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE posts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  incident_type_id INTEGER REFERENCES incident_types(id) ON DELETE CASCADE,
  address VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  date DATE NOT NULL
);