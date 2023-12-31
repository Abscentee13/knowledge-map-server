/// node C:\Users\User\source\repos\knowledge-map-server\src\server.js


require('dotenv').config();

const handleRequest = require('./routes/endpointRouter');
const http = require('http');
const dbConnection = require("./config/database");
const server = http.createServer(handleRequest);
const port = 3000;// process.env.PORT

server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

process.on('SIGINT', () => {
    dbConnection.end();
    console.log('Сервер зупинено');
    server.close(() => {
        process.exit(0);
    });
});


