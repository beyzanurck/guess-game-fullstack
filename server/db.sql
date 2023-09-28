--
-- PostgreSQL database dump
--

-- Open your terminal

-- Run psql
psql

-- Create DB
CREATE DATABASE guesgamedb;

-- View all databases
\l

-- Quit current db
\q

-- Connect to the project db
psql guesgamedb;

-- Create table
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    nickname VARCHAR(255) NOT NULL,
    score VARCHAR(50)
);

-- View all tables
\dt

-- Insert rows into table
INSERT INTO players (nickname, score) 
VALUES 
('Beyza', '0');

-- View the list
SELECT * FROM players;


--
-- PostgreSQL database dump complete
--