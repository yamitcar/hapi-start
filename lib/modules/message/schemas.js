'use strict';

const Joi = require('@hapi/joi');

module.exports = {
    message: {
        name: Joi.string().max(20),
        text: Joi.string().max(140).default('no message'),
        picture_url: Joi.string().uri()
    },
    inputs: {
        guid: {
            guid: Joi.string().required(),
        }
    },
    outputs: {
        hello: Joi.string(),
        //TODO how to response when 200 or error.
    }
};
