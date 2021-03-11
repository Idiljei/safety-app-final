DROP TABLE IF EXISTS text_messages ON CASCADE;

CREATE TABLE text_messages (
  id SERIAL PRIMARY KEY NOT NULL,
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  message VARCHAR(255) NOT NULL
);