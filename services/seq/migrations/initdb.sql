CREATE TABLE Transaction (
		id int NOT NULL,
		machine_id int NOT NULL,
		status varchar,
		created_at timestamp,
		PRIMARY KEY (id)
);

CREATE TABLE Machine (
		id int NOT NULL,
		merchant_id int,
		serial_number varchar NOT NULL,
		price DECIMAL(13,2),
		status varchar,
		created_at timestamp,
		PRIMARY KEY (id)
);
-- SS 
CREATE TABLE Client (
		id SERIAL,
		full_name varchar,
		email varchar NOT NULL,
		email_confirmation boolean DEFAULT false,
		password varchar,
		password_salt varchar,
		status varchar,
		is_vendor boolean DEFAULT false,
		country_code int,
		last_loggin timestamp,
		created_at timestamp,
		updated_at timestamp,
		PRIMARY KEY (id)
);
CREATE TABLE Customer(
		cpf int,
		gender varchar,
		date_of_birth date
) INHERITS (client);

CREATE TABLE Merchant (
		id int NOT NULL,
		admin_id int,
		merchant_name varchar,
		merchant_status varchar,
		created_at timestamp,
		PRIMARY KEY (id)
);

CREATE TABLE Impersonate (
		id int NOT NULL,
		user_id int,
		merchant_id int,
		status varchar,
		created_at timestamp,
		PRIMARY KEY (id)
);

CREATE TABLE Countrie (
  code int,
  name varchar,
		PRIMARY KEY(code)
);
CREATE TABLE City(
		code int,
		name varchar,
		PRIMARY KEY(code)
);
CREATE TYPE category AS ENUM('someCategory','anotherCategory');

CREATE TABLE Company (

		id int NOT NULL,
		cnpj int,
		category_id category ,
		PRIMARY KEY (id)
) INHERITS (client);

ALTER TABLE machine ADD FOREIGN KEY (merchant_id) REFERENCES merchant (id);

ALTER TABLE client ADD FOREIGN KEY (country_code) REFERENCES countrie (code);


ALTER TABLE transaction ADD FOREIGN KEY (machine_id) REFERENCES machine (id);

ALTER TABLE impersonate ADD FOREIGN KEY (user_id) REFERENCES client  (id);
ALTER TABLE impersonate ADD FOREIGN KEY (merchant_id) REFERENCES client (id);


