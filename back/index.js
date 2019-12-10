const connection = require('./config/conf');
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req, res, next)=> {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.send('Bienvenue sur Express');
});

app.get('/api/users', (req, res) => {
  connection.query('SELECT * from users', (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des utilisateurs");
    } else {
      res.json(results);
    }
  });
});

app.post('/api/users', (req, res) => {
  const formData = req.body;
  console.log(req.body)
    connection.query('INSERT INTO users SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un utilisateur");
    } else {
      res.sendStatus(200);
    }
  });
});

app.put('/api/users/:userID', (req, res) => {
  const idUser = req.params.userID;
  const formData = req.body;
  connection.query('UPDATE users SET ? WHERE userID = ?', [formData, idUser], err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la modification d'un utilisateur");
    } else { 
      res.sendStatus(200);
    }
  });
});

app.delete('/api/users/:userID', (req, res) => {
  const idUser = req.params.userID;
  connection.query('DELETE FROM users WHERE userID = ?', [idUser], err => {
    if (err) {
      console.log(err);
      res.status(500), send("Erreur lors de la suppression d'un utilisateur");
    } else {
      res.sendStatus(200);
    }
  })
})

app.get('/api/travels', (req, res) => {
  connection.query('SELECT * from travels', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des voyages');
    } else {
      res.json(results);
    }
  });
});

app.post('/api/travels', (req, res) => {
  const formData = req.body;
  console.log(req.body)
  connection.query('INSERT INTO travels SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un voyage");
    } else {
      res.sendStatus(200);
    }
  });
});

app.put('/api/travels/:travelID', (req, res) => {
  const idTravel = req.params.travelID;
  const formData = req.body;
  connection.query('UPDATE travels SET ? WHERE travelID = ?', [formData, idTravel], err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la modification d'un voyage");
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});
