# optimized
select name as 'Customers' FROM customers 
where id not in (SELECT customerid from orders);

