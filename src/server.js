require('dotenv').config();

const http = require('http');
const server = http.createServer((req, res) => {
  // Обробка запитів тут
  if (req.url === '/api/users' && req.method === 'GET') {

          // Отримання списку користувачів з бази даних
          const users = []; // Приклад пустого списку користувачів, якщо дані відсутні
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(users)); // Відправлення списку користувачів у форматі JSON


      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Привіт, це мій сервер!');

        }
  else {
          res.statusCode = 404;
          res.end('Not Found');
        }
});
const port = process.env.PORT


server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });


//////////////////////

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err) => {
    if (err) {
        console.error('Помилка підключення до бази даних:', err);
        throw err;
    }
    console.log('Підключено до бази даних MySQL');


});

///////////////////////////////////////////////
// Виконання SQL-запиту на вибірку даних
const sqlQuery = 'SELECT * FROM subjects';
connection.query(sqlQuery, (error, results, fields) => {
    if (error) {
        console.error('Помилка виконання запиту:', error);
        throw error;
    }

    // Результати запиту
    console.log('Результати запиту:', results);

    // Закриття з'єднання з базою даних
    connection.end();
    // ////////////////////////////////

});

////// EXIT
process.on('SIGINT', () => {
    console.log('Сервер зупинено');
    server.close(() => {
        process.exit(0);
    });
});

