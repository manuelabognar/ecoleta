import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json([
    'Maria', 
    'José', 
    'Pedro',
    'Ana'
  ]);
});

app.listen(3333);