'use strict';

// Plugins
const BasicAuth = require('@hapi/basic');

// Modules
const Auth = require('../lib/modules/auth');
const Message = require('../lib/modules/message');

module.exports = {
    options: {
        port: process.env.PORT || 3000
    },
    plugins: [
        {
            plugin: BasicAuth
        },
        {
            plugin: Auth,
            options: {
                user: process.env.API_USER || 'dontdefault',
                password: process.env.API_PASSWORD || 'password'
            }
        },
        {
            plugin: Message,
            options: {
                es: {
                    hello: 'Hola'
                },
                en: {
                    hello: 'Hello'
                }
            }
        }
    ]
};
