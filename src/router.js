const endpoints = require('./config/endpoints');

const handleRequest = (req, res) => {
    const endpoint = endpoints.find((e) => e.path === req.url && e.method === req.method);

    if (endpoint) {
        const controller = endpoint.controller;
        controller(req, res);
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
};


module.exports = handleRequest;