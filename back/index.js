const connection = require('./conf');
const express = require('express');
const app = express();
const port = 8000;

app.get('/', (request, response) => {
  response.send('Bienvenue sur Express');
});

app.get('/api/users', (req, res) => {
  connection.query('SELECT * from users', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des users');
    } else {
      res.json(results);
    }
  });
});


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
