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

select * from actors

-- In this exercise we will be using the actors table from todays lesson.
-- 1. Count how many actors are in the table.
select count(*) from actors
-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
insert into actors (actor_id,first_name,last_name,age,number_oscars)
values (3,'john','',21,'')

--the expression draws an error when it comes to an expression that demands an int or a date for the input