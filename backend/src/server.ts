import express from 'express';
import { response } from 'express';

const app =  express();

app.use(express.json());

app.get('/users', (request, response) => {
  return response.json({ message: 'Hello NLW!' })
  
});

app.listen(3333);

