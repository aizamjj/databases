DROP DATABASE IF EXISTS chatterfox;

CREATE DATABASE chatterfox;

USE chatterfox;

CREATE TABLE messages (
  id integer, user text, message text, date date
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

