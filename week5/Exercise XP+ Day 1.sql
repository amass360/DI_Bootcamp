-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

CREATE DATABASE bootcamp
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Hebrew_Israel.1252'
    LC_CTYPE = 'Hebrew_Israel.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

create TABLE students (
	id serial primary key,
	first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (50) NOT NULL,
	birth_date date 
	)




-- Insert the data seen above to the students table. 
-- Find the most efficient way to insert the data.
insert into students (first_name,last_name,birth_date)
values 
('Marc','Benichou','02/11/1998'),
('Yoan','Cohen','03/12/2010'),
('Lea',	'Benichou',	'27/07/1987'),
('Amelia','Dux','07/04/1996'),
('David',	'Grez',	'14/06/2003'),
('Omer',	'Simpson',	'03/10/1980');





select * from students where first_name = 'Marc' and last_name = 'Benichou'

-- Fetch all of the data from the table.
select * from students
-- Fetch all of the students first_names and last_names.
select first_name,last_name from students
-- For the following questions, only fetch the first_names and last_names of the students.
-- Fetch the student which id is equal to 2.
select first_name,last_name from students where id = 2
-- Fetch the student whose last_name is Benichou AND first_name is Marc.
select first_name,last_name from students where first_name = 'Marc' and last_name = 'Benichou'
-- Fetch the students whose last_names are Benichou OR first_names are Marc.
select first_name,last_name from students where first_name = 'Marc' or last_name = 'Benichou'
-- Fetch the students whose first_names contain the letter a.
select first_name,last_name from students where first_name like '%a%'
-- Fetch the students whose first_names start with the letter a.
select first_name,last_name from students where first_name ilike 'a%'
-- Fetch the students whose first_names end with the letter a.
select first_name,last_name from students where first_name ilike '%a'
-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
SELECT first_name,last_name
FROM students
WHERE SUBSTRING(first_name, LENGTH(first_name) - 1, 1) = 'a';
-- Fetch the students whose id’s are equal to 1 AND 3 .
select first_name,last_name
from students
where id = 1 and id = 3
-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
select *
from students
where birth_date >= '1/01/2000'