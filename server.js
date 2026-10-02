const express = require('express');
const dbPromise = require('./db');

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/' , (request , response) => {
    response.send('Bem-vindo ao servidor da Chicola.M!')
});

app.get('/sobre', (req, res) => {
    res.send('Chicola.M Tecnologia & Serviços - Arrendamento de motorizadas e viaturas em Luanda. Segurança, Mobilidade e Confiança.');
});

app.post('/candidaturas' , async (request , response) => { 
    const { name, phone, vehicle_type } = request.body;

    if (!name || !phone || !vehicle_type) {
        response.status(400).send('Faltam campos obrigatórios!');
        return;
    }

    try {
        const connection = await dbPromise;
        const sql = 'INSERT INTO drivers (name , phone , vehicle_type) VALUES (? , ? , ?)';

        await connection.query(sql, [name, phone, vehicle_type]);

        response.status(201).send('Candidatura guardada com sucesso na base de dados!');

    } catch (err) {
        console.error(err);
        response.status(500).send('Erro ao guardar candidatura na base de dados.');
    }
})

app.listen(PORT, () => {
    console.log(`Servidor a correr em http://localhost:${PORT}`)
})