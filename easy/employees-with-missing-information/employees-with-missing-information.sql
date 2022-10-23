-- # Write your MySQL query statement below
SELECT employee_id FROM employees 
    WHERE employees.employee_id NOT IN (
    SELECT employee_id FROM salaries)
    
UNION

SELECT employee_id FROM salaries
    WHERE salaries.employee_id NOT IN (
    SELECT employee_id FROM employees
)
ORDER BY employee_id