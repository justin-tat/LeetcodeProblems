# Write your MySQL query statement below
select
    Department.name as 'Department',
    Employee.name as 'Employee',
    Salary
FROM 
    Employee 
        Join 
    Department on Employee.DepartmentId = Department.id
WHERE
    (Employee.DepartmentId, Salary) in 
    (   Select 
            DepartmentId, max(Salary)
        from 
            Employee
        Group by DepartmentId
    )
;