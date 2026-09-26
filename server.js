const express = require('express')

const app = express();
const PORT = 3000;

app.get('/' , (request , response) => {
    response.send('Bem-vindo ao servidor da Chicola.M!')
});

app.get('/sobre', (req, res) => {
    res.send('Chicola.M Tecnologia & Serviços - Arrendamento de motorizadas e viaturas em Luanda. Segurança, Mobilidade e Confiança.');
});

app.listen(PORT, () => {
    console.log(`Servidor a correr em http://localhost:${PORT}`)
})