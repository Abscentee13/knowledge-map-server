const endpoints = require('../config/endpoints');
const queryModule = require("../controllers/queryModule");
const tokenLength = 32;



const handleRequest = (req, res) => {

    console.log(req.url, '      url');

    const requestBody = req.url.substring(0, req.url.indexOf("token=") - 1);
    const tokenBody = req.url.substring(req.url.indexOf("token=") + 5, req.url.indexOf("token=") + tokenLength);
    const requestParam = req.url.substring(req.url.indexOf("token=") + tokenLength + 6);

console.log(tokenBody, ' ----- ', requestBody, '*');




    const endpoint = endpoints.find((e) => e.path === requestBody && e.method === req.method);

    console.log(endpoint, '   endpoint');


console.log(endpoint);
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
                res.write('******************************\n');
                res.end(JSON.stringify(results).replaceAll("},", "}, \n"));
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