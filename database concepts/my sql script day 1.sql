-- CREATE database day1sql;
-- connect to db 
use day1sql;
-- create a table PRIMARY
 /*create table categories(
 categoryId int auto_increment primary key, 
 categoryName varchar(100) not null) ;*/

 /*INSERT into categories (categoryName)
 VALUES
 ('SmartPhones'),('SmartWatches');

INSERT into categories (categoryName)
VALUES
('GOPICHANDAN');*/




/*alter table categories

add column changedate datetime default NULL,add column useraction varchar(50) default NULL;*/
-- SELECT * from categories;

/*Delimiter $$
create trigger before_cat_upd
before update on categories 
for each row

begin
	set new.changedate = now();
	set new.useraction = 'record updated';
end $$
Delimiter ;*/

/*create table category_log
(
id INT,
category_name varchar(50),
user_name varchar(50),
deletedata datetime
);

Delimiter $$
create trigger before_del_cat
before delete on categories 
for each row
begin
	insert into category_log values(old.categoryId,old.categoryName,user(),now());
end $$
Delimiter ;*/

-- update categories set categoryName = 'new gopi' where categoryId = 3;

-- delete from categories where categoryId = 2;

create function CUSTOMERGIFT
(
 points int
)
returns varchar(20)
deterministic 
begin
declare customergift varchar(20);

if points > 1500 then 
set customergift - 'mac laptop'
elseif (points >= 800 and points<1500)


end






 SELECT * from categories;
 SELECT * from category_log;
