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

            host: process.env.DB_HOST,

            user: process.env.DB_USER,
            password: process.env.PASSWORD,

            database: process.env.DB_NAME,
            charset: 'utf8'

        }

    }

};
