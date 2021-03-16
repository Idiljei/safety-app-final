DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR (255) NOT NULL,
  phone_number CHAR(10) NOT NULL,
  date_of_birth DATE NOT NULL,
  email VARCHAR(255) NOT NULL,
  pin VARCHAR(4) NOT NULL
);

GRANT ALL PRIVILEGES ON TABLE users TO spice;
grant all on sequence posts_id_seq to spice;