-- write your queries here

SELECT * FROM owners o LEFT JOIN vehicles v ON o.id = v.owner_id;
SELECT o.first_name, o.last_name, COUNT(v.owner_id) FROM owners o JOIN vehicles v ON o.id = v.owner_id GROUP BY o.id ORDER BY o.first_name asc;
SELECT o.first_name, o.last_name, ROUND(AVG(v.price)) AS average_price, COUNT(v.owner_id) AS count FROM owners o JOIN vehicles v ON o.id = v.owner_id GROUP BY o.id HAVING AVG(v.price) > 10000 AND COUNT(v.owner_id) > 1 ORDER BY o.first_name desc;