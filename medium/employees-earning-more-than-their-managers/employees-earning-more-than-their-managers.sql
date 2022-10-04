SELECT a.Name as 'Employee' from Employee as a, Employee as b
    WHERE a.ManagerId = b.Id AND a.Salary > b.Salary;