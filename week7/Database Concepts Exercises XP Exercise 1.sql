-- Database: public

-- DROP DATABASE IF EXISTS public;

CREATE DATABASE public
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Hebrew_Israel.1252'
    LC_CTYPE = 'Hebrew_Israel.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- 🌟 Exercise 1 : Items And Customers
-- Instructions
-- We will work on the public database that we created yesterday.

-- Use SQL to get the following from the database:
-- All items, ordered by price (lowest to highest).
select * from items order by price asc
-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
select * from items where price > 80 order by price desc
-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
select first_name,last_name from customers order by first_name asc limit 3
-- All last names (no other columns!), in reverse alphabetical order (Z-A)
select last_name from customers order by last_name desc
