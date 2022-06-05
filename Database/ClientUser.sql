CREATE TABLE bs_client.client_user (
	name varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	password varchar(100) NOT NULL,
	`role` varchar(100) NOT NULL,
	id INT UNSIGNED auto_increment NOT NULL,
	status varchar(100) NOT NULL,
	joined_on DATE DEFAULT CURRENT_DATE NOT NULL,
	CONSTRAINT client_user_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb3
COLLATE=utf8mb3_general_ci;
