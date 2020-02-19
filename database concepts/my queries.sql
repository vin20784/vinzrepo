/*select * from  employees 
order by office_id;*/

-- select * from 
-- select * from order_items;
/*select * from employees where job_title='Account Executive' 
AND office_id=1;*/

/*select order_id , product_id, quantity , unit_price ,(quantity*unit_price ) as Sales from order_items;*/


/*select * from employees where job_title='Account Executive' 
AND office_id=1 order by job_title, office_id;*/


/*select * from employees where office_id between 1 and 4
order by office_id;*/

/*select * from employees where first_name like 'a%'
order by office_id;*/

/*select * from employees where reports_to is not NULL;*/

/*select * from orders 
where order_date between cast('2018-01-01' as date) and cast('2018-12-01' as date);*/
-- select * from order_items where quantity >5

/*select concat(' ',last_name, first_name ) as fullname from employees;
select concat_ws(' ,',last_name, first_name ) as fullname from employees;
select max(quantity) from order_items
group by order_id;*/


/*select max(quantity) from order_items
where quantity < 
(select max (quantity) as order_total from order_items);*/
use `sql_hr`;

/*select count(distinct quantity)
from order_items o1
where o1.quantity <= o.quantity;*/

select order_id , quantity 
from order_items o 
where 3 = (select count(distinct quantity)
from order_items o1
where o1.quantity <= o.quantity );
-- select order_id, quantity *unit_price as Sales from order_items where (quantity * unit_price) >50;

/*select * from orders 
where 
order_id  in 
( select order_id from order_items where (quantity * unit_price) >50);*/

/*select count(*) from 
(select * from orders 
where 
order_id in 
( select order_id from order_items where (quantity * unit_price) >50)) as a;*/

/*select * from orders 
where 
order_id in 
( select order_id from order_items group by order_id having sum(quantity*unit_price) >50);*/

/*select * from order_items;
select order_id , quantity from order_items;

select * from order_items from table1.order_id , order_items*/

-- select table1.order_id , table2.order_id from order_items table1 , order_items table2;
-- m*n records returned

-- select distinct quantity from order_items order by quantity;



-- order bywhere 3 = 
-- select count (distinct quantity) from order_items order by quantity;

