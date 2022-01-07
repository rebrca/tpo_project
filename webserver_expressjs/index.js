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


app.get('/loby', async function(req, res) {
  let ime = req.query.ime
  console.log(ime)
  if(ime==undefined){
    res.json("")
    return;
  }
  let sql = `SELECT * FROM  game_loby 
  WHERE game_name="Counter Strike GO" AND id=${ ime } `;
  con.query(sql, function(err, data, fields) {
   
    if (err) throw err;
    res.json(
      data
    )
    
  })
  
});

app.get('/tourtament', async function(req, res) {
  let ime = req.query.ime
  console.log(ime)
  if(ime==undefined){
    res.json("")
    return;
  }
  let sql = `SELECT * FROM  tourtament 
  WHERE id=${ ime } `;
  con.query(sql, function(err, data, fields) {
   
    if (err) throw err;
    res.json(
      data
    )
    
  })
  
});

app.get('/get-cs-loby', async function(req, res) {
 
  let sql = `SELECT * FROM  game_loby 
  WHERE game_name="Counter Strike GO"`;
  con.query(sql, function(err, data, fields) {
   
    if (err) throw err;
    res.json(
      data
    )
    
  })
  
});



app.get('/get-lol-loby', async function(req, res) {
 
  let sql = `SELECT * FROM  game_loby 
  WHERE game_name="League of Legends"`;
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