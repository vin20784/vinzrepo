-- CREATE database day1sql;
-- connect to db 
use day1sql;

CREATE TABLE if not exists products(
    productId INT AUTO_INCREMENT PRIMARY KEY,
    productName varchar(100) not null,
    categoryId INT,
    CONSTRAINT fk_category
    FOREIGN KEY (categoryId) 
        REFERENCES categories(categoryId) 
        on update cascade 
        on delete cascade
);

-- select * from categories;

/*INSERT INTO products(productName, categoryId)
VALUES('iPhone',1);

INSERT INTO products(productName, categoryId)
 VALUES('Android 7',3);*/


/*INSERT INTO products(productName, categoryId)
 VALUES('Android 10',8);*/
 
 /*drop table categories;
 Error Code: 3730. Cannot drop table 'categories' referenced by a foreign key constraint 'fk_category' on table 'products'.*/

/*UPDATE categories
SET categoryId = 18
WHERE categoryId = 1;*/

DELETE from categories 
where categoryId = 3;



 select * from products;
 select * from categories;