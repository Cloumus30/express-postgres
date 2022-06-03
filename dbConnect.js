require('dotenv').config();
const { Pool } = require('pg');

const dbUser = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const dbName = process.env.DB_NAME;

// const url = `postgres://${dbUser}:${password}@${host}:${port}/${dbName}` || process.env.DATABASE_URL;
// console.log(url);
// console.log('dana');
const pool = new Pool({
    user: dbUser,
    host: host,
    database: dbName,
    password: password,
    port: port,
});

module.exports = pool;