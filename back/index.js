const connection = require('./config/conf');
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 8000;

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
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



// listen to the url "/api/travels" with the verb POST
app.post('/api/travels', (req, res) => {

  // Get the data sent
  const formData = req.body;
  console.log(req.body)

  // connection to the database, and insertion of the movie
  connection.query('INSERT INTO travels SET ?', formData, (err, results) => {

    if (err) {
      // If an error has occurred, then the user is informed of the error
      console.log(err);
      res.status(500).send("Error saving a travel");
    } else {
      // If everything went well, we send a status "ok".
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
      res.status(500).send("Error editing a travel");
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
