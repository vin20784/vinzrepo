use `sql_hr`;

Select * from Employees;

Select last_name from Employees;

Select * from Employees
order by Employee_ID ASC;

select * from Orders;
Select * from order_items;

SELECT 
    order_id,     
    product_id,
    quantity, unit_price    
FROM
    order_items
ORDER BY 
   quantity * unit_price DESC;
   
   SELECT 
    order_id,     
    product_id,
    quantity, unit_price as Subtotal
FROM
    order_items
ORDER BY 
   quantity * unit_price DESC;
   