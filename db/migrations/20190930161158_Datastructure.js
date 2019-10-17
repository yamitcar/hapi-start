exports.up = function(knex) {

    return knex
        .schema
        .createTable( 'users', function( usersTable ) {

            // Primary Key
            usersTable.increments();

            // Data
            usersTable.string( 'name', 50 ).notNullable();
            usersTable.string( 'username', 50 ).notNullable().unique();
            usersTable.string( 'email', 250 ).notNullable().unique();
            usersTable.string( 'password', 128 ).notNullable();
            usersTable.string( 'guid', 50 ).notNullable().unique();

            usersTable.timestamp( 'created_at' ).notNullable();

        } )

        .createTable( 'messages', function( messagesTable ) {

            // Primary Key
            messagesTable.increments();
            messagesTable.string( 'owner', 36 ).references( 'guid' ).inTable( 'users' );
            messagesTable.string( 'name', 250 ).notNullable();
            messagesTable.string( 'text', 250 ).notNullable();
            messagesTable.string( 'picture_url', 250 ).notNullable();
            messagesTable.string( 'guid', 36 ).notNullable().unique();
            messagesTable.boolean( 'isPublic' ).notNullable().defaultTo( true );
            messagesTable.timestamp( 'created_at' ).notNullable();

        } );

};

exports.down = function(knex) {
    return knex
        .schema
        .dropTableIfExists( 'messages' )
        .dropTableIfExists( 'users' );
};
