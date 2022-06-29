CREATE TABLE bs_client.sites (
	id INT auto_increment NOT NULL,
	name varchar(100) NOT NULL,
	category varchar(100) NOT NULL,
	owner varchar(100) NOT NULL,
	country varchar(100) NOT NULL,
	description VARCHAR(100) NOT NULL,
	CONSTRAINT sites_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb3
COLLATE=utf8mb3_general_ci;