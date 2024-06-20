-- Database: neondb

-- DROP DATABASE IF EXISTS neondb;

CREATE DATABASE neondb
    WITH
    OWNER = neondb_owner
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

GRANT TEMPORARY, CONNECT ON DATABASE neondb TO PUBLIC;

GRANT ALL ON DATABASE neondb TO neon_superuser;

GRANT ALL ON DATABASE neondb TO neondb_owner;

drop table products;
drop table products_desc;

CREATE TABLE products (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 )  NOT NULL,
	price integer NOT NULL
);

INSERT INTO 
    products (price, name)
VALUES
    (700, 'iPad'),
    (800,'iPhone'),
    (600,'iWatch'),
    (900,'iCar');
	
-- delete from table
delete from products where id = 4;

-- delete all rows
delete from products;
truncate table products;

-- foriegn key
-- set null
CREATE TABLE products_desc (
	id serial PRIMARY KEY,
	description VARCHAR (500) default value 'bla bla bla',
	product_id integer,
	CONSTRAINT fk_products
		FOREIGN KEY (product_id)
			REFERENCES products(id)
				ON DELETE SET NULL
);

INSERT INTO 
    products_desc (description, product_id)
VALUES
	('Amazing iPad' ,5),	
	('Great iPhone' ,6),
	('Best iWatch' ,7),
	('Fastest car ever iCar' ,8);

select * from products;
select * from products_desc;

delete from products where id = 5 


-- cascade 
alter table products_desc
drop constraint fk_products

alter table products_desc
add constraint fk_products
 foreign key (product_id)
  references products(id)
-- on delete / update
-- set null 
-- cascade
-- no action
-- set default

delete from products where id = 6;

--one to one

create table user2 (
	user_id serial primary key,
	email varchar(200) unique not null,
	password varchar(500) not null
)

create table user_info (
	id serial primary key,
	first_name varchar(50),
	last_name varchar(50),
	address varchar(255),
	user_email varchar(100) unique not null references user2(email)
)

insert into user2 (email,password)
values ('aaa@aaa.aaa','123456'),
('bbb@bbb.bbb','123456'),
('ccc@ccc.ccc','123456')

select * from user2

insert into user_info(first_name,last_name,address,user_email)
values('aaa','bbbb','cccc','ccc@ccc.ccc')

select user2.email,
user_info.first_name,
user_info.last_name,
user_info.address
from user2
full join user_info
on user2.email = user_info.user_email

--one to many
create table author (
	author_id serial primary key,
	author_name not unique not null,
	author_email varchar(100) unique not null
)

create table article (
	
)