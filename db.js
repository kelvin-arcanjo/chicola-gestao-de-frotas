require('dotenv').config();
const mysql = require('mysql2/promise');

async function createConnection() {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    console.log('Conectado ao MySQL com sucesso!');
    return connection;
}
module.exports = createConnection();