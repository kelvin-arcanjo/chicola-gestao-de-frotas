const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'6666',
    database:'chicola_rentals'
})

connection.connect((err) => {
    if (err) {
        console.log('Erro ao connectar ao MySQL:' , err);
        return;
    }
    console.log('Conectado ao MySQL com sucesso!');
});

module.exports = connection;