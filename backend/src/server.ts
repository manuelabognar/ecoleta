import express from 'express';

const app = express();

app.use(express.json());

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações no back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualização de informações

// Knex: Permite esquecer SQL no formato javascript, auxiliando numa migração de banco futura
// SELECT * users WHERE name = 'Manuela'
// knex('users').where('name','Manuela').select('*')


const users = [
  'Maria', 
  'José', 
  'Pedro',
  'Ana'
];

app.get('/users', (request, response) => {
  const search = String(request.query.search);
  
  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

  return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.post('/users', (request, response) => {
  const data = request.body;

  console.log(data);

  const user = {
    name: data.name,
    email: data.email
  };

  return response.json(user);
});

app.listen(3333);