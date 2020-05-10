const mysql = require('mysql');

// accessible database connection for every page
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0781459239',
    database: 'MERNauthentication'
  });
  conn.connect((err) => {
    if (err){
      throw err;
      console.log('error during connection')
    } else{
      console.log('Connected!');
    }
  });

module.exports = conn