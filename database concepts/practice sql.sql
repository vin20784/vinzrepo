CREATE DATABASE IF NOT EXISTS sql_hr;
USE sql_hr;
-- show databases;

CREATE TABLE IF NOT EXISTS `offices`(
`office_id` int(11) NOT NULL,
`address` varchar(50) NOT NULL,
`city` varchar(50) NOT NULL,
`state` varchar(50) NOT NULL,
PRIMARY KEY (`office_id`));

-- INSERT INTO `offices` VALUES (1,'katepuram','pune','MH');
-- INSERT INTO `offices` VALUES (2,'bastora','mapusa','GA');
-- INSERT INTO `offices` VALUES (3,'mandovi','panjim','GA');
-- INSERT INTO `offices` VALUES (4,'tbilisi','tbilisi','GE');
-- INSERT INTO `offices` VALUES (5,'ulanbator','ulanbator','MO');
-- INSERT INTO `offices` VALUES (6,'katepuram ph2 ','pune','MH');

-- drop table employees;

/*CREATE TABLE IF NOT EXISTS `employees`(
`employee_id` int(11) NOT NULL,
`first_name` varchar(50) NOT NULL,
`lastname` varchar(50) NOT NULL,
`job_title` varchar(50) NOT NULL,
`salary` int(11) NOT NULL,
`reports_to` int(11) NOT NULL,
`office_id` int(11) NOT NULL,
PRIMARY KEY (employee_id),
FOREIGN KEY (office_id) references offices(office_id)
);*/


/*select * from offices;
select * from employees;*/

CREATE TABLE employees (
  employee_id int(11) NOT NULL,
  first_name varchar(50) NOT NULL,
  last_name varchar(50) NOT NULL,
  job_title varchar(50) NOT NULL,
  salary int(11) NOT NULL,
  reports_to int(11) DEFAULT NULL,
  office_id int(11) NOT NULL,
  PRIMARY KEY (employee_id),
  KEY fk_employees_offices_idx (office_id),
  KEY fk_employees_employees_idx (reports_to),
  CONSTRAINT fk_employees_managers FOREIGN KEY (reports_to) REFERENCES employees (employee_id),
  CONSTRAINT fk_employees_offices FOREIGN KEY (office_id) REFERENCES offices (office_id) ON UPDATE CASCADE  
  );
  
INSERT INTO employees VALUES (37270,'Yovonnda','Magrannell','Executive Secretary',63996,NULL,10);
INSERT INTO employees VALUES (33391,'D\'arcy','Nortunen','Account Executive',62871,37270,1);
INSERT INTO employees VALUES (37851,'Sayer','Matterson','Statistician III',98926,37270,1);
INSERT INTO employees VALUES (40448,'Mindy','Crissil','Staff Scientist',94860,37270,1);
INSERT INTO employees VALUES (56274,'Keriann','Alloisi','VP Marketing',110150,37270,1);
INSERT INTO employees VALUES (63196,'Alaster','Scutchin','Assistant Professor',32179,37270,2);
INSERT INTO employees VALUES (67009,'North','de Clerc','VP Product Management',114257,37270,2);
INSERT INTO employees VALUES (67370,'Elladine','Rising','Social Worker',96767,37270,2);
INSERT INTO employees VALUES (68249,'Nisse','Voysey','Financial Advisor',52832,37270,2);
INSERT INTO employees VALUES (72540,'Guthrey','Iacopetti','Office Assistant I',117690,37270,3);
INSERT INTO employees VALUES (72913,'Kass','Hefferan','Computer Systems Analyst IV',96401,37270,3);
INSERT INTO employees VALUES (75900,'Virge','Goodrum','Information Systems Manager',54578,37270,3);
INSERT INTO employees VALUES (76196,'Mirilla','Janowski','Cost Accountant',119241,37270,3);
INSERT INTO employees VALUES (80529,'Lynde','Aronson','Junior Executive',77182,37270,4);
INSERT INTO employees VALUES (80679,'Mildrid','Sokale','Geologist II',67987,37270,4);
INSERT INTO employees VALUES (84791,'Hazel','Tarbert','General Manager',93760,37270,4);
INSERT INTO employees VALUES (95213,'Cole','Kesterton','Pharmacist',86119,37270,4);
INSERT INTO employees VALUES (96513,'Theresa','Binney','Food Chemist',47354,37270,5);
INSERT INTO employees VALUES (98374,'Estrellita','Daleman','Staff Accountant IV',70187,37270,5);
INSERT INTO employees VALUES (115357,'Ivy','Fearey','Structural Engineer',92710,37270,5);

