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
    },
    {
        method: 'POST',
        path: '/api/v1/messages',
        config: {
            handler: message.create,
            validate: {
                payload: Schemas.inputs.create
            },
            auth: false
        }
    }
];
