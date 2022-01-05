const express = require('express')
const app = express();
const port = 3000;


var mysql = require('mysql')
var con = mysql.createConnection({
  host: '2001:648:2ffc:1227:a800:ff:fea3:3ecf',
  user: 'user',
  password: 'User123456!',
  database: 'pay2win'
})





//za vse igre
app.get('/games', function(req, res) {
  let sql = `SELECT * FROM Game`;
  con.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json(
      data
    )
  })
});

// za vse tourtamente 
app.get('/tourtaments', function(req, res) {
  let sql = `SELECT * FROM tourtament`;
  con.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json(
      data
    )
  })
});


//za vse userje
app.get('/users', function(req, res) {
  let sql = `SELECT * FROM user`;
  con.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json(
      data
    )
  })
});










app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});