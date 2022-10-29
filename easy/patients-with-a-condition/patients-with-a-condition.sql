-- # Write your MySQL query statement below
SELECT patient_id, patient_name, conditions 
from patients 
where conditions LIKE "% DIAB1%" or SUBSTRING(conditions, 1, 5) LIKE "DIAB1";

-- First condition is for when DIAB1 is not the first condition, second accounts for when DIAB1 is the second element