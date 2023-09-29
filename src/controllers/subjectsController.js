// Виконання SQL-запиту на вибірку даних
const dbConnection = require("../config/database");

const getSubjects = (req, res) => {

const sqlQuery = 'SELECT * FROM subjects';
dbConnection.query(sqlQuery, (error, results, fields) => {
    if (error) {
        console.error('Помилка виконання запиту:', error);
        throw error;
    }

    // Результати запиту


    console.log('Результати запиту:', results);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(results));


    // Закриття з'єднання з базою даних
    dbConnection.end();
    // ////////////////////////////////

});
};

module.exports = {
    getSubjects,
};