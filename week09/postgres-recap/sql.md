-- `Common data types:`

-- Integer Types: SMALLINT, INTEGER, BIGINT
-- Serial Types: SMALLSERIAL, SERIAL, BIGSERIAL
-- Numeric Types: NUMERIC, REAL, DOUBLE PRECISION
-- Character Types: CHAR(n), VARCHAR(n), TEXT
-- Date/Time Types: DATE, TIME, TIMESTAMP
-- Boolean Type: BOOLEAN
-- JSON Types: JSON, JSONB


-- `DATES can be inserted in a few ways - it can be useful to do the TO_DATE function to handle this`

INSERT INTO your_table_name (your_date_column) VALUES (TO_DATE('March 5, 2023', 'Month DD, YYYY'));

-- Can also be useful to do the Current date sometimes 

INSERT INTO your_table_name (your_date_column) VALUES (CURRENT_DATE);



-- Sometimes, you need to run multiple sql queries when something happens on your 'front-end'. Thats ok! If you're using vercel sql, just do one after the other. 

-- Personally, I'd stick with pg, so you can use transactions

-- If all the operations in the transaction succeed, the transaction is committed, making all changes permanent. If any operation within the transaction fails, the entire transaction is rolled back, and none of the changes are applied to the database.

BEGIN;
INSERT INTO students (name, enrollment_date, gpa, is_full_time) VALUES ('Alice Wonderland', '2023-02-28', 3.7, true);
UPDATE students SET gpa = 3.9 WHERE name = 'Alice Wonderland';
COMMIT;

-- Rollbacks allow you to hit 'undo' in case of an error
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

-- If there's an error, such as the second account not existing:
ROLLBACK;


-- Create table 
-- NOT NULL is to say - hey, this column cant 
CREATE TABLE table_name (
    id SERIAL PRIMARY KEY,
    other_column VARCHAR(255) NOT NULL,

);

-- Delete table 
DROP TABLE table_name;


-- Insert statement

-- Need to specify the columns going in. by ()
-- can insert multiple things by just doing another set of values in ()'s seperated by a comma

INSERT INTO table_name (column1, column2) VALUES (value1, value2),  (value3, value4);

-- can also RETURN id after inserts incase you need it later.
INSERT INTO table_name (column1, column2) VALUES (value1, value2) RETURNING id;

-- Select everything 

SELECT * FROM table_name

-- can do something called a 'clause' (like a condition) by using WHERE

SELECT name, gpa FROM students WHERE is_full_time = true;

-- can also just get all info from columsn

SELECT name, gpa from students;

-- UPDATE 

UPDATE table_name SET column_name = newValue WHERE id = 1


-- DELETE DATA 

DELETE FROM table_name WHERE column_name = 1

CREATE TABLE enrollments (
    enrollment_id SERIAL PRIMARY KEY, 
    student_id INT REFERENCES students (id), 
    course_id INT REFERENCES courses (course_id),
    enrollment_date DATE, 
    UNIQUE(student_id, course_id)
);

-- When we do joins, we're trying to read data from multiple tables 
-- So it's always on a SELECT statement

courses 
students 
enrollments 

SELECT students.name, courses.name FROM enrollments 
JOIN students ON enrollments.student_id = students.id
JOIN courses ON enrollments.course_id = courses.course_id
WHERE students.id = 1; 

table_1
table_2
junction_table