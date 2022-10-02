const pg  =require('pg') 
const dotenv = require('dotenv')

dotenv.config()
//burada strin yaparak 
/**
 * https://node-postgres.com/ dsoc
ayroca connecting strinfg kullandik
https://hasura.io/learn/database/postgresql/installation/postgresql-connection-string/

 * 
 */

const postgresClient = new pg.Pool({
    connectionString :process.env.DB_CONNECTION
})

module.exports =postgresClient