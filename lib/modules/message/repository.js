'use strict';

const db = require("../../../db/db");
const uuidv5 = require('uuid/v5');

const list  = (options) => async () => {
    return await db( 'messages' ).where( {
        isPublic: true
    } ).select( 'guid','name', 'text', 'picture_url' )
        .then( ( results ) => {
            return results;
        } ).catch( ( err ) => {
            console.log(err);
            return 'server-side error';
        } );
};

const create  = (options) => async (message) => {
    message.isPublic = true;
    message.guid = uuidv5(new Date().getTime()+"", uuidv5.URL);
    message.created_at = db.fn.now();

    return await db( 'messages' ).insert( message )
        .then( ( results ) => {
            return true;
        } ).catch( ( err ) => {
            console.log(err);
            return false;
        } );
};

const update  = (options) => {
    return async (guid, message) => {
        message.guid = guid;
        return await db('messages').where('guid', guid).update(message)
            .then((numberOfUpdatedRows) => {
                return !!numberOfUpdatedRows;
            }).catch((err) => {
                console.log(err);
                return false;
            });
    };
};

module.exports = (options) => {

    return {
        list: list(options),
        create: create(options),
        update: update(options)
    };
};
