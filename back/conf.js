const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
password :  'Hasselblad3', // le mot de passe
database :  'tuktuktravel', // le nom de la base de données
});
module.exports = connection;