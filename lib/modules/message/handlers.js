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


const create = (options) =>async(request, _h) => {

    let result = await messageRepository().create(request.payload);
    if(result) {
        return { success: true, message: 'ok' }
    }else {
        return { success: false, message: 'something was wrong' }
    }
};

const update = (options) =>async(request, _h) => {
    let result = await messageRepository().update(request.params.guid, request.payload);
    if(result) {
        return { success: true, message: 'ok' }
    }else {
        return { success: false, message: 'something was wrong on update message' }
    }
};

module.exports = (options) => {
    return {
        create: create(options),
        list: list(options),
        update: update(options),
    };
};
