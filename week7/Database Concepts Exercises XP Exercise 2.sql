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

-- We will use the newly installed dvdrental database.

-- In the dvdrental database write a query to select all the columns from the “customer” table.
select * from customer
-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.
select first_name as full_name, last_name as full_name from customer
-- Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
select distinct create_date from customer
-- Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
select * from customer order by first_name desc
-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
select film_id,title,description,release_year,rental_rate from film order by rental_rate asc
-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
select address,phone from address where district like '%Texas%'
-- Write a query to retrieve all movie details where the movie id is either 15 or 150.
select * from film where film_id = 15 or film_id = 150
-- Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
select film_id,title,description,length,rental_rate from film where title like '%Shawshank Redemption%'
-- No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
select film_id,title,description,length,rental_rate from film where title like 'Sh%'
-- Write a query which will find the 10 cheapest movies.
select * from film order by rental_rate asc limit 10
-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.
SELECT film_id, title, rental_rate
FROM (
    SELECT film_id, title, rental_rate,
           ROW_NUMBER() OVER (ORDER BY rental_rate ASC) AS row_num
    FROM film
) sub
WHERE row_num > 10 AND row_num <= 20;
--the nested query allows us to use the "as" to label row_num as a variable and then to dictate the range that we are searching in (10-20)
-- Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
select customer.first_name,customer.last_name,payment.amount,payment.payment_date
from customer
inner join payment
on payment.customer_id = customer.customer_id
order by payment_id
-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
select film.film_id,film.title
from film
inner join inventory
on inventory.film_id = film.film_id
where inventory_id is null
-- Write a query to find which city is in which country.
select city.city,country.country
from city
inner join country 
on country.country_id = city.country_id
-- Bonus You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
select customer.customer_id,customer.first_name,customer.last_name,payment.amount,payment.payment_date
from customer
inner join payment on customer.customer_id = payment.customer_id
order by payment.staff_id