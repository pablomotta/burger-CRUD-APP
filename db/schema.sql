
CREATE DATABASE vdzkcoifm8t3bt19; --burgers_db
USE vdzkcoifm8t3bt19; -- burgers_db

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
