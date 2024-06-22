-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

CREATE DATABASE "Hollywood"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Hebrew_Israel.1252'
    LC_CTYPE = 'Hebrew_Israel.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

create table customer (
	id serial primary key,
	first_name varchar(50),
	last_name varchar(50) not null
);

create table CustomerProfile (
	id serial primary key,
	isLoggedIn boolean default false,
	customer_id int unique,
	foreign key (customer_id) references customer(id)
);

insert into customer (first_name,last_name)
values
('John','Doe'),
('Jerome','Lalu'),
('Lea','Rive')

INSERT INTO CustomerProfile (isLoggedIn, customer_id) 
VALUES (true, (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe'));

INSERT INTO CustomerProfile (isLoggedIn, customer_id) 
VALUES (false, (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));

--the 2 above statements are the correct subqueries to use as they pinpoint
--to the columns of customer profile and they pinpoint at the query to pinpoint 
--the customer id

-- Use the relevant types of Joins to display:

-- The first_name of the LoggedIn customers
select customer.first_name
from customer
inner join CustomerProfile on customer.id = CustomerProfile.id
where isLoggedIn = true
-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
select customer.first_name,COALESCE(CustomerProfile.isLoggedIn, false) AS isLoggedIn
from customer
left join CustomerProfile on customer.id = CustomerProfile.id
--left joining in this instance allows us to see ALL of the rows even Lea
-- The number of customers that are not LoggedIn
select count(*)
from customer
left join CustomerProfile on customer.id = CustomerProfile.id
where isLoggedIn = false or isLoggedIn is null