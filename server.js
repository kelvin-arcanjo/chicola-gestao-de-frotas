const express = require('express')

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

    console.log(request.body);
    response.status(201).send('Candidatura recebida com sucesso!');
})

app.listen(PORT, () => {
    console.log(`Servidor a correr em http://localhost:${PORT}`)
})