const endpoints = require('../config/endpoints');
const queryModule = require("../controllers/queryModule");

const handleRequest = (req, res) => {
    const endpoint = endpoints.find((e) => e.path === req.url && e.method === req.method);

    if (endpoint)
    {
        queryModule.queryResult(endpoint.table, endpoint.fields, (error, results) => {
            if (error)
            {
                res.statusCode = 500;
                res.end('Internal Server Error');
                console.error('Помилка запиту:', error);
            }
            else
            {
                console.log('******************************');
                console.log('Результати запиту:', results);
                res.setHeader('Content-Type', 'application/json');
                res.write('******************************');
                res.end(JSON.stringify(results));
            }
        });

    }
    else
    {
        res.statusCode = 404;
        res.end('Not Found');
    }
};


module.exports = handleRequest;