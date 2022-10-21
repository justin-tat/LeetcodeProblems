-- # Write your MySQL query statement below
SELECT 
  name 
FROM 
  customer 
where 
  referee_id != 2 or referee_id is null;

-- if you want null values, then you must also specify that referee is null with or clause