'use strict';

const db = require("../../../db/db");

const list  = (options) =>async () => {
    console.log('hola');
    return await db( 'messages' ).where( {
        isPublic: true
    } ).select( 'name', 'text', 'picture_url' )
        .then( ( results ) => {
            console.log('resul ' + results );
            return results;
        } ).catch( ( err ) => {
            console.log(err);
            return 'server-side error';
        } );
};

module.exports = (options) => {

    return {
        list: list(options)
    };
};
