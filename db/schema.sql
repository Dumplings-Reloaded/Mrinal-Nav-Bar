-- \c postgres

DROP DATABASE IF EXISTS newproducts;
CREATE DATABASE newproducts;
\c newproducts

DROP TABLE products;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  price INTEGER NOT NULL,
  img VARCHAR(255) NOT NULL
);

-- INSERT INTO product (name, price, img) VALUES ('test', 4, 'test');

\COPY products FROM './content.csv' DELIMITER ',' CSV HEADER;




