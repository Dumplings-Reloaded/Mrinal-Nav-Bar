-- \c postgres

DROP DATABASE IF EXISTS newproducts;
CREATE DATABASE newproducts;
\c newproducts

DROP TABLE IF EXISTS productInfo;

CREATE TABLE productInfo (
  id SERIAL PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  price INTEGER NOT NULL,
  img VARCHAR(255) NOT NULL
);

INSERT INTO productInfo (name, price, img) VALUES ('test', 4, 'test');




