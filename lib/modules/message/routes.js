'use strict';

const Schemas = require('./schemas');

module.exports = (message) => [
    {
        method: 'GET',
        path: '/api/v1/messages',
        config: {
            handler: message.list,
            auth: false
        }
    }
];
