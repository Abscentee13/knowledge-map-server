require('dotenv').config();
//const endpoints = require('./config/endpoints');
const handleRequest = require('./router');

const http = require('http');


// const server = http.createServer((req, res) => {
//   // Обробка запитів тут
//   if (req.url === '/api/users' && req.method === 'GET') {
//
//           // Отримання списку користувачів з бази даних
//           const users = []; // Приклад пустого списку користувачів, якщо дані відсутні
//           res.setHeader('Content-Type', 'application/json');
//           res.end(JSON.stringify(users)); // Відправлення списку користувачів у форматі JSON
//
//
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end('Привіт, це мій сервер!');
//
//         }
//   else {
//           res.statusCode = 404;
//           res.end('Not Found');
//         }
// });

const server = http.createServer(handleRequest);

const port = process.env.PORT


server.listen(port, () => {
      console.log(`Server is running on port ${port}`);


    });


//////////////////////
//const dbConnection = require('./config/database.js');


// // Виконання SQL-запиту на вибірку даних
// const sqlQuery = 'SELECT * FROM subjects';
// dbConnection.query(sqlQuery, (error, results, fields) => {
//     if (error) {
//         console.error('Помилка виконання запиту:', error);
//         throw error;
//     }
//
//     // Результати запиту
//     console.log('Результати запиту:', results);
//
//     // Закриття з'єднання з базою даних
//     dbConnection.end();
//     // ////////////////////////////////
//
// });

////// EXIT
process.on('SIGINT', () => {
    console.log('Сервер зупинено');
    server.close(() => {
        process.exit(0);
    });
});

