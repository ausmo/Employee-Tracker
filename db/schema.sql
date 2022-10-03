DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
  id INT NOT NULL auto_increment primary key,
  name VARCHAR(30) NOT NULL
);
CREATE TABLE role(
id INT NOT NULL auto_increment primary key,
title varchar(30) not null,
salary decimal not null,
department_id int not null
);
CREATE TABLE employee(
id int not null auto_increment primary key,
first_name varchar(30) not null,
last_name varchar(30) not null,
role_id int not null,
manager_id int not null
);


insert into department(name) values
('Administration'),
('RnD'),
('Sales'),
('HR'),
('Customer Service'),
('Accounting');

insert into role(salary, title, department_id) values
(400,000.00, 'President','1'),
(200,000.00, 'RnD','2'),
(300,000.00, 'VP_Sales','3'),
(100,000.00, 'HR_Rep','4'),
(50,000.00, 'Customer_Service_Rep','5'),
(200,000.00, 'Accountant','6');

insert  into employee(first_name, last_name, role_id, manager_id)
 values 
('Diane','Murphy','1','1'),
('Mary','Patterson','2','1'),
('Jeff','Firrelli','3','2'),
('William','Patterson','4','3'),
('Gerard','Bondur','5','4'),
('Anthony','Bow','6','5');
