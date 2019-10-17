'use strict';

const messageRepository = require('./repository');

//TODO use something more expressive, domain, services, actions...

const list = (options) => async (request, h) => {
    let results = await messageRepository().list();
    if (!results || results.length === 0) {
        return {
            error: true,
            errMessage: 'no public messages found'
        };
    }else {
        return {
            dataCount: results.length,
            data: results,
        }
    }
};


const sayHello = (options) => (request, _h) => { // eslint-disable-line

    const { language, subject } = request.query;

    const greeting = options[language].hello;

    return `${greeting} ${subject}!`;
};

module.exports = (options) => {

    return {
        sayHello: sayHello(options),
        list: list(options)
    };
};
