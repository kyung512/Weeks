const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
  res.send('Hello World!');
})

app.get('/dog', function(req, res) {
  res.send('멍멍');
})

app.get('/cat', function(req, res) {
  res.send({'sound': '야요'});
})

app.get('/user/:id', (req, res) => {
  console.log(req.params);
  console.log(req.params.id);
  console.log(req.query);
})

// app.listen(3000)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); 
})