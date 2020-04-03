CREATE DATABASE IF NOT EXISTS ctrdb;
use ctrdb;

CREATE TABLE if not exists `country_sales` (
  `country` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `sales` int(11) NOT NULL
);

/*INSERT INTO `country_sales` VALUES ('india' , 'mumbai' ,100);
INSERT INTO `country_sales` VALUES ('india' , 'pune' ,80);
INSERT INTO `country_sales` VALUES ('uk' , 'london' ,1000);
INSERT INTO `country_sales` VALUES ('uk' , 'manchester' ,140);
INSERT INTO `country_sales` VALUES ('india' , 'delhi' ,50);
INSERT INTO `country_sales` VALUES ('india' , 'goa' ,20);*/

-- select * from country_sales;

select country , city, max(sales) from country_sales group by country;

