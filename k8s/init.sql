CREATE TABLE accounts(
id SERIAL PRIMARY KEY,
name TEXT,
balance INT
);

CREATE TABLE transactions(
id SERIAL PRIMARY KEY,
sender INT,
receiver INT,
amount INT
);CREATE TABLE accounts(
id SERIAL PRIMARY KEY,
name TEXT,
balance INT
);

CREATE TABLE transactions(
id SERIAL PRIMARY KEY,
sender INT,
receiver INT,
amount INT
);