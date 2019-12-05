const connection = require('./config/conf');
const express = require('express');
const app = express();
const port = 8000;



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

app.get('/api/travels', (req, res) => {
  connection.query('SELECT * from travels', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des travels');
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
