//просто додавати нові ендпоїнти, більше нікуди зміни не вносяться для нового запиту
const endpoints = [
    {
        path: '/api/users/get',
        method: 'GET',
        table: 'users',
        fields: '',
    },
    {
        path: '/api/users-create/post',
        method: 'POST',
        table: 'users',
        fields: '',
    },
    {
        path: '/api/subjects/get',
        method: 'GET',
        table: 'subjects',
        fields: '',
    },
];

module.exports = endpoints;