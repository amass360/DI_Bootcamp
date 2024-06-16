alter table items 
	add number_id serial primary key,
	add product VARCHAR (50) NOT NULL,
	add price int not null 


alter TABLE customers
	add number_id serial primary key,
	add first_name VARCHAR (50) NOT NULL,
	add last_name VARCHAR (50) NOT NULL


INSERT INTO items(number_id, product, price)
values (1,'small desk',100)

select * from items

INSERT INTO items(number_id, product, price)
values (2,'large desk',300)

INSERT INTO items(number_id, product, price)
values (3,'fan',80)

INSERT INTO customers(number_id, first_name, last_name)
values (1,'Greg','Jones')

INSERT INTO customers(number_id, first_name, last_name)
values (2,'Sandra','Jones')

INSERT INTO customers(number_id, first_name, last_name)
values (3,'Scott','Scott')

INSERT INTO customers(number_id, first_name, last_name)
values (4,'Trevor','Green')

INSERT INTO customers(number_id, first_name, last_name)
values (5,'Melanie','Johnson')

select * from customers, items

select * from items where price > 80

select * from items where price < 300

select * from customers where last_name like '%Smith%'

select * from customers where last_name like '%Jones%'

select * from customers where first_name not like '%Scott%'