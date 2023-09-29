//const userController = require('./controllers/userController');
const subjectsController = require('../controllers/subjectsController');

const endpoints = [
    {
        path: '/api/users',
        method: 'GET',
      //  controller: userController.getUsers,
        controller: subjectsController.getSubjects,///////////
    },
    {
        path: '/api/users',
        method: 'POST',
      //  controller: userController.createUser,
        controller: subjectsController.getSubjects,/////////
    },
    {
        path: '/api/subjects',
        method: 'GET',
        controller: subjectsController.getSubjects,
    },
    // Додавайте сюди інші ендпоїнти
];

module.exports = endpoints;