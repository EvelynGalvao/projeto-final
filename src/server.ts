import express from 'express';

import routes from './routes';

const app = express();

app.use(routes);

app.listen(3003,() =>console.log("servidor inicializado na porta 3003"));


