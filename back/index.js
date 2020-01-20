const connection = require('./config/conf');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // npm i morgan
const app = express();
const multer = require('multer'); // npm install --save multer
const fs = require('fs');
const cors = require('cors'); // npm install cors
const passport = require('passport'); // npm install passport
const LocalStrategy = require('passport-local');
const jwt = require('jsonwebtoken'); // npm install jsonwebtoken
const JwtStrategy = require('passport-jwt').Strategy; // npm install passport-jwt
const ExtractJwt = require('passport-jwt').ExtractJwt; // npm install passport-local
const verifyToken = require('./verifyToken');
const key = require('./key');
const bcrypt = require('bcrypt'); // npm install bcrypt
const port = 8000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname  +  '/public'));
app.use(cors())

app.use((req, res, next)=> {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// PASSEPORT CONFIG STRATEGY
passport.use(new LocalStrategy(
  {
      usernameField: 'email',
      passwordField: 'password',
      session: false
  },
  function (email, password, cb) {
    console.log('hello toto')
    connection.query('SELECT email, password FROM users WHERE email = ?', email , function (err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (bcrypt.compareSync(password, user[0].password)!=true) { return cb(null, false); }
      return cb(null, user);
  })
})
)

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: key
},
function (jwtPayload, cb) {
  console.log(jwtPayload)
  return cb(null, jwtPayload);
}
));

// TEST
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

app.get('/api/users/:userID', (req, res) => {
  const idUser = req.params.userID;
  connection.query('SELECT * from users WHERE userID = ?', [idUser], (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des utilisateurs");
    } else {
      res.json(results);
    }
  });
});

//POST USERS
app.post('/api/users', (req, res) => {
  const {lastname, firstname, sex, password, birthday, country, city, email, phone_number, description}  = req.body
  const hash = bcrypt.hashSync(password, 10, (err, hash) => {
    return hash
  });
  formData = {lastname, firstname, sex, password: hash, birthday, country, city, email, phone_number, description};
  console.log(formData)
    connection.query('INSERT INTO users (lastname, firstname, sex, password, birthday, country, city, email, phone_number, description, avatar) VALUES (?,?,?,?,?,?,?,?,?,?,?)', [formData.lastname, formData.firstname, formData.sex, formData.password, formData.birthday, formData.country, formData.city, formData.email, formData.phone_number, formData.description, formData.avatar], (err, results) => {
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
      res.status(500).send('Erreur lors de la modification d\'un utilisateur');
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
      res.status(500), send('Erreur lors de la suppression d\'un utilisateur');
    } else {
      res.sendStatus(200);
    }
  })
})


// GET TRAVEL
app.get('/api/travels', passport.authenticate('jwt', { session:  false }), (req, res) => {
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
  connection.query('INSERT INTO travels (destination, start_date, end_date, number_of_travelers_max, description, citypic) VALUES (?,?,?,?,?,?)', [formData.destination, formData.start_date, formData.end_date, formData.number_of_travelers_max, formData.description, formData.cityPic], (err, results) => {

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

// DELETE TRAVEL
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

// LOGIN & TOKEN

app.post('/api/login', function(req, res)  {
  passport.authenticate('local',(err, users, info) => {
    if(err)
      return res.status(500).send(err)
    if (!users)
      return res.status(400).json({flash: 'erreur de login'});

    const {email} = users[0];
    const token = jwt.sign({email}, key, {expiresIn: 1*60});
    console.log(token)
    return res.json({
      user: {email},
      token
    })
 })(req, res)
})




// UPLOAD FILE
const upload = multer({ dest: 'tmp/',
limits: {
  files: 1, // allow only 1 file per request,
  fieldSize: 3* 1024 * 1024 // 3 MB (max file size)
},
fileFilter: (req, file, cb) => {
  // allow jpg jpeg png gif svg only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
    return cb(('Only images are allowed.'), false);
  }
  cb(null, true);
} 
});

app.post('/uploaddufichier', upload.single('file'), function (req, res, next) {
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
