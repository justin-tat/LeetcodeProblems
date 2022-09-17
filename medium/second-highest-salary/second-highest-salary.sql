# Write your MySQL query statement below
SELECT MAX(salary) AS SecondHighestSalary 
FROM employee 
WHERE salary != ( 
    SELECT max(salary) FROM employee
);