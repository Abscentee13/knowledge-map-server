//конфігурація коннекту у файлі .env у корені проекту

const mysql = require('mysql');
require('dotenv').config();

// const DB_HOST = process.env.DB_HOST;
// const DB_USER = process.env.DB_USER;
// const DB_PASSWORD = process.env.DB_PASSWORD;
// const DB_DATABASE = process.env.DB_DATABASE;

const DB_HOST = "localhost";
const DB_USER = "root";
const DB_PASSWORD ="";
const DB_DATABASE = "knowledge_map";



const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});

connection.connect((err) => {
    if (err) {
        console.error('Помилка підключення до бази даних:', err);
        //throw err;
    }
    else
    {
        console.log('Підключено до бази даних MySQL');
    }
});

module.exports = connection;