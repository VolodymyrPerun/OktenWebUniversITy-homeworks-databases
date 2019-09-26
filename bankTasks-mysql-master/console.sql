# 1. +Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
SELECT * from client where  LENGTH(FirstName) < 6;

# 2. +Вибрати львівські відділення банку.+
SELECT * from department where DepartmentCity='Lviv';

# 3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
SELECT * from client where Education='high' order by FirstName;

# 4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
SELECT * FROM application order by idApplication desc limit 5;

# 5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
SELECT * FROM client where LastName like '%OV' or '%OVA';

# 6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.
SELECT * FROM client
inner join application on client.idClient = application.Client_idClient
where City='Kyiv';

# 7. +Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.
SELECT FirstName, Passport FROM client GROUP BY FirstName;

# 8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
SELECT * from client
inner join application on client.idClient = application.Client_idClient
where Sum > 5000 and Currency='Gryvnia' and CreditState='Not returned';

# 9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
SELECT COUNT(idClient) FROM client;

SELECT COUNT(idClient) FROM client where Department_idDepartment=2;

# 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
SELECT max(Sum), Client_idClient
FROM bank.application
group by Client_idClient ;

#11. Визначити кількість заявок на кредит для кожного клієнта.
SELECT COUNT(CreditState) countOfCreditState, idClient, FirstName, LastName
from client
join application  on client.idClient = application.Client_idClient
group by idClient, FirstName, LastName;

# 12. Визначити найбільший та найменший кредити.
SELECT max(Sum), min(Sum) from application;

#13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.

SELECT count(CreditState) countOfCreditState, idClient, FirstName, LastName
from client
join application  on client.idClient = application.Client_idClient
where Education='high'
group by idClient, FirstName, LastName;