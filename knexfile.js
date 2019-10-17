module.exports = {

    development: {
        migrations: {
            tableName: 'knex_migrations',
            directory: 'db/migrations'
        },
        seeds: {
            tableName: './seeds',
            directory: 'db/seeds'
        },
        client: 'postgres',
        connection: {

            host: 'localhost',

            user: 'postgres',
            password: 'postgres',

            database: 'hapi_start_crud',
            charset: 'utf8'

        }

    }

};
