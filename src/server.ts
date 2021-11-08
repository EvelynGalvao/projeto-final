import express from 'express';

const app = express();

app.listen(3003,() =>console.log("servidor inicializado na porta 3003"));

app.get("/", (request, response) => {
    return response.json({mensagem:"bem-vindos ao projeto inicial", ano:2021});

});