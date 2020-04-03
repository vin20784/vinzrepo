-- CREATE database day2sql;
-- connect to db 
use day2sql;

/*CREATE TABLE Emp
(
  EmpID Int,
    EmpName varchar(10),
    DeptID Int
);

Insert into Emp values
  (1, 'Abhay', 10),
    (2, 'Bhavna', 10),
    (3, 'Kartik', 20),
    (4, 'Dinesh', 20),
    (5, 'Eric', 30),
    (6, 'Raju',0);
    
Select * from Emp;

CREATE TABLE Dept
(
  DeptID Int,
    Dept varchar(10)
);

Insert into Dept values
  (10, 'Accounts'),
    (20, 'HR'),
    (30, 'IT'),
  (40, 'Admin');
    */
 Select * from Emp;
 Select * from Dept;

-- innner join
/*SELECT Emp.EmpID , Emp.EmpName , Dept.Dept
from Emp 
inner join Dept 
on Emp.DeptID = Dept.DeptID;

SELECT Emp.EmpID , Emp.EmpName , Dept.Dept
from Dept 
inner join Emp 
on Emp.DeptID = Dept.DeptID;*/

-- left join 
SELECT Emp.EmpID , Emp.EmpName , Dept.Dept
from Dept 
left join Emp 
on Emp.DeptID = Dept.DeptID;

SELECT Emp.EmpID , Emp.EmpName , Dept.Dept
from Emp 
left join Dept 
on Emp.DeptID = Dept.DeptID;

-- right join
SELECT Emp.EmpID , Emp.EmpName , Dept.Dept
from Dept 
right join Emp 
on Emp.DeptID = Dept.DeptID;

SELECT Emp.EmpID , Emp.EmpName , Dept.Dept
from Emp 
right join Dept 
on Emp.DeptID = Dept.DeptID;

-- cartasian join
SELECT Emp.EmpID , Emp.EmpName , Dept.Dept
from Dept 
join Emp ;

SELECT Emp.EmpID , Emp.EmpName , Dept.Dept
from Emp 
cross join Dept 






