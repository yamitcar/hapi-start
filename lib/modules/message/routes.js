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
                payload: Schemas.message
            },
            auth: false
        }
    },
    {
        method: 'PUT',
        path: '/api/v1/messages/{guid}',
        config: {
            handler: message.update,
            validate: {
                params: Schemas.inputs.guid,
                payload: Schemas.message
            },
            auth: false
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/messages/{guid}',
        config: {
            handler: message.delete,
            validate: {
                params: Schemas.inputs.guid
            },
            auth: false
        }
    }
];
