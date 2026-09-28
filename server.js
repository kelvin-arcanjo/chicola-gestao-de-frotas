const express = require('express');
const connection = require('./db');

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/' , (request , response) => {
    response.send('Bem-vindo ao servidor da Chicola.M!')
});

app.get('/sobre', (req, res) => {
    res.send('Chicola.M Tecnologia & Serviços - Arrendamento de motorizadas e viaturas em Luanda. Segurança, Mobilidade e Confiança.');
});

app.post('/candidaturas' , (request , response) => {
    const { name, phone, vehicle_type } = request.body;

    if (!name || !phone || !vehicle_type) {
        response.status(400).send('Faltam campos obrigatórios!');
        return;
    }

    const sql = 'INSERT INTO drivers (name , phone , vehicle_type) VALUES (? , ? , ?)' ;
    connection.query(sql , [name , phone , vehicle_type] , (err , results) => {
        if (err) {
           console.log(err);
           response.status(500).send('Erro ao guardar Cancdidatura.');
           
           return;
        }
        response.status(201).send('Candidatura guardada com sucesso na base de dados!');
    })
})

app.listen(PORT, () => {
    console.log(`Servidor a correr em http://localhost:${PORT}`)
})