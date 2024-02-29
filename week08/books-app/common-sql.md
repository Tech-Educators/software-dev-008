I've used ID in most of the where conditions, but use what you like.

## Get 

```
SELECT * from tablename
```

## Get by condition

```
SELECT * FROM tablename WHERE id=${id}
```

## Get something specific by condition

```
SELECT column_1, column_2 FROM tablename WHERE id=${id};
```

## Alter a table structure

```
ALTER TABLE table_name
ADD column_name datatype;
```

## Delete a table 

```
DROP TABLE table_name;
```

## Insert values

```
INSERT INTO table_name (column_1, column_2) VALUES (value1, value2);
```

## Delete a row

```
DELETE FROM table_name WHERE id=${id};
```

# Joins

## (inner) join

```
SELECT table_1.column_1, table_1.column_2, table_2.column_2 
FROM table_1 
INNER JOIN table_2 
ON table_1.column2 = table_2.column1
```

// outer/left/right joins follow the same structure but still also show entries that dont have a matching 'pair' in the other table. 


## Making a genre table 

```
CREATE TABLE genres (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);
```


## Many to Many

Because a book can have many genres, and a genre can have many books, I'm going to use a junction table to associate a book and its genres. If you only have a one to many relationship, you dont need to do this - just use foriegn keys.

```
CREATE TABLE books (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    description TEXT,
    quote TEXT,
    released DATE,
    img_url VARCHAR(255)
);
```


```
CREATE TABLE genres (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);
```


```
CREATE TABLE book_genres (
    book_id INT,
    genre_id INT,
    PRIMARY KEY (book_id, genre_id),
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,
    FOREIGN KEY (genre_id) REFERENCES genres(id) ON DELETE CASCADE
);
```


The ON DELETE CASCADE option ensures that when a book or genre is deleted, its corresponding entries in the BooksGenres table are also automatically deleted. So that nothing referes to something it shouldn't anymore. 