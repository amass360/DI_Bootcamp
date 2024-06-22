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

-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
create table book (
	book_id serial primary key,
	title varchar(100) not null,
	author varchar(100) not null
)
-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee
insert into book (title,author)
values
('Alice In Wonderland','Lewis Carroll'),
('Harry Potter','J.K Rowling'),
('To kill a mockingbird','Harper Lee')
-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);
create table student (
	student_id serial primary key,
	name varchar(100) unique not null,
	age int check(age between 0 and 15) 
)
-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14
insert into student (name,age)
values
('John',12),
('Lera',11),
('Patrick',10),
('Bob',14)
-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table
create table library (
	book_fk_id int,
	student_id int,
	borrowed_date date,
	constraint book_fk_id
	foreign key (book_fk_id)
	references book(book_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE,
	constraint student_id
	foreign key (student_id)
	references student(student_id)
	ON DELETE CASCADE 
	ON UPDATE CASCADE,
	primary key (book_fk_id,student_id)
)
-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021
insert into library (book_fk_id,student_id,borrowed_date)
values
((select book_id from book where title like '%Alice In Wonderland%'),(select student_id from student where name like 'John'),'15/02/2022'),
((select book_id from book where title like '%To kill a mockingbird%'),(select student_id from student where name like 'Bob'),'03/03/2021'),
((select book_id from book where title like '%Alice In Wonderland%'),(select student_id from student where name like 'Lera'),'23/05/2021'),
((select book_id from book where title like '%Harry Potter%'),(select student_id from student where name like 'Bob'),'12/08/2021')


-- Display the data
-- Select all the columns from the junction table
select * from library 
-- Select the name of the student and the title of the borrowed books
select student.name,book.title 
from student
inner join library on library.student_id = student.student_id
inner join book on library.book_fk_id = book.book_id
where library.borrowed_date is not null
-- Select the average age of the children, that borrowed the book Alice in Wonderland
select avg(student.age)
from student
inner join library on library.student_id = student.student_id
inner join book on library.book_fk_id = book.book_id
where book.title like '%Alice in Wonderland%'
and library.borrowed_date is not null
	--was a bit confused why my average was coming up null
-- Delete a student from the Student table, what happened in the junction table ?
delete from student where name like '%John%'
select * from library
select * from student
--as a result of deleting a student from the student table, it took away
--his student id from the library as well as the book_id and borrow date of 
--the book he rented