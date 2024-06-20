-- Database: dvd_rental

-- DROP DATABASE IF EXISTS dvd_rental;

CREATE DATABASE dvd_rental
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Hebrew_Israel.1252'
    LC_CTYPE = 'Hebrew_Israel.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- 🌟 Exercise 1: DVD Rental
-- Instructions
-- Get a list of all the languages, from the language table.
select * from language 
-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
select film.title,film.description,language.name as language
from film
inner join language
on film.language_id = language.language_id
-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
select film.title,film.description,language.name
from language
left join film
on language.language_id = film.language_id
-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
create table new_film (
	id serial primary key,
	name varchar(50)
)

insert into new_film (id,name)
values 
(123,'Aaron'),
(321,'Ben')
-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
create table customer_review (
	review_id serial primary key,
	film_id int,
	language_id int,
	title varchar(50),
	score int check (score between 1 and 10),
	review_text text,
	last_update date,
	foreign key (film_id) references new_film(id),
	foreign key (language_id) references language(language_id)
)
	select* from customer_review
-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
insert into customer_review 
(review_id,film_id,language_id,title,score,review_text,last_update)
values
(123,123,1,'hello',1,'best review','2/11/2021'),
(456,321,2,'bye',2,'not great review','3/12/2023')
select * from language
select * from new_film
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
delete from new_film where id = 123
--does not allow me to commit the action of deleting as the value exists on the other table and violates the foreign key constraint

-- 🌟 Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
update language
set name = 'Italian'
where language_id = 3 or language_id = 4
-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
select * from customer
--address_id is the referenced foreign key that are defined within the table (not sure how to certify that information though) and it affects 
--the table because when you attempt to delete one of the records it will not allow you as it is tied to another table

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
drop table customer_review
-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
select count(*) from rental where return_date is null
-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
select film.title,film.rental_rate,rental.return_date
from film
inner join inventory
on film.film_id = inventory.film_id
inner join rental
on rental.inventory_id = inventory.inventory_id
where return_date is null
order by film.rental_rate desc limit 30
-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
select film.title,actor.first_name,actor.last_name,film.fulltext
from film
inner join film_actor on film.film_id = film_actor.film_id
inner join actor on actor.actor_id = film_actor.actor_id
where actor.first_name = 'Penelope' and actor.last_name = 'Monroe'
and film.fulltext @@ to_tsquery('english','sumo')
-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
select title from film
where length < 60 and rating = 'R'
-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
select film.title, customer.first_name,customer.last_name,rental.return_date,payment.amount
from film
inner join inventory on inventory.film_id = film.film_id
inner join rental on rental.inventory_id = inventory.inventory_id
inner join customer on rental.customer_id = customer.customer_id
inner join payment on payment.rental_id = rental.rental_id
where payment.amount > 4.00 
and customer.first_name = 'Matthew'
and customer.last_name = 'Mahan'
and return_date between '2005-07-28' and '2005-08-01' 
-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
select customer.first_name,customer.last_name,customer.customer_id,film.title,film.description,payment.amount
from film
inner join inventory on inventory.film_id = film.film_id
inner join rental on rental.inventory_id = inventory.inventory_id
inner join payment on payment.rental_id = rental.rental_id
inner join customer on customer.customer_id = payment.customer_id
where customer.first_name = 'Matthew'
and customer.last_name = 'Mahan'
and (film.title @@ to_tsquery('english','boat') or film.description @@ to_tsquery('english','boat'))
order by payment.amount desc