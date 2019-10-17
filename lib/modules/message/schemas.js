'use strict';

const Joi = require('@hapi/joi');

module.exports = {
    inputs: {
        hello: {
            language: Joi.string().valid(['en', 'es']),
            subject: Joi.string().regex(/^[a-zA-Z\s]*$/).max(20).default('world')
        },
        create: {
            name: Joi.string().max(20),
            text: Joi.string().max(140).default('no message'),
            picture_url: Joi.string().uri()
        }
    },
    outputs: {
        hello: Joi.string(),
        //TODO how to response when 200 or error.
    }
};
