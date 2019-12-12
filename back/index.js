const connection = require('./config/conf');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer'); // npm install --save multer
const fs = require('fs');
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

//GET USERS
app.get('/api/users', (req, res) => {
  connection.query('SELECT * from users', (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des utilisateurs");
    } else {
      res.json(results);
    }
  });
});

//POST USERS
app.post('/api/users', (req, res) => {
  const formData = req.body
  console.log(req.body)
    connection.query('INSERT INTO users (lastname, firstname, password, birthday, address, email, phone_number, description) VALUES (?,?,?,?,?,?,?,?)', [formData.lastname, formData.firstname, formData.password, formData.birthday, formData.address, formData.email, formData.phone_number, formData.description], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un utilisateur");
    } else {
      res.sendStatus(200);
    }
  });
});

//UPDATE USERS
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

//DELETE USERS
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


// GET TRAVEL
app.get('/api/travels', (req, res) => {
  connection.query('SELECT * from travels', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des voyages');
    } else {
      res.json(results);
    }
  });
});


// POST TRAVEL
app.post('/api/travels', (req, res) => {
  const formData = req.body
  console.log(formData)
  connection.query('INSERT INTO travels (destination, description) VALUES (?,?)', [formData.destination,formData.description], (err, results) => {

    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un voyage");
    } else {
      res.sendStatus(200);
    }
  });
});

// UPDATE TRAVEL
app.put('/api/travels/:travelID', (req, res) => {
  const idTravel = req.body.travelID;
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

app.delete('/api/travels/:travelID', (req, res) => {
  const idTravel = req.params.travelID;
  connection.query('DELETE FROM travels WHERE travelID = ?', [idTravel], err => {
    if (err) {
       console.log(err);
      res.status(500).send("Error deleting a travel");
    } else {
      res.sendStatus(200);
    }
  });
});


//UPLOAD PICS

const upload = multer({ dest: 'tmp/',
limits: {
  files: 1, // allow only 1 file per request,
  fieldSize: 3* 1024 * 1024 // 3 MB (max file size)
},
fileFilter: (req, file, cb) => {
  // allow png only
  if (!file.originalname.match(/\.(png)$/)) {
      return cb(('Only image png are allowed.'), false);
  }
  cb(null, true);
} 
});

app.post('/uploaddufichier', upload.single('uploadfile'), function (req, res, next) {
  fs.rename(req.file.path, 'img/' + req.file.originalname, function(err){
    if (err) {res.redirect(targetUrl)
        res.send('problème durant le transfert');
    } else {
        res.send('Fichier transféré avec succès');
    }
  });
})

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
	}
	console.log(`Server is listening on ${port}`);
});
