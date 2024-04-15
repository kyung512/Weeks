const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/',  (req, res)  => {
  res.send('Hello world');
});

app.get('/sound/:name',  (req, res)  => {
  const { name } = req.params;
  console.log(name);
  if (name==='dog'){
    res.json({'sound': '멍멍'});
  } else if (name === 'cat') {
    res.json({'sound': '야옹'});
  } else if (name == 'pig')  {
    res.json({'sound': '꿀꿀'});
  } else {
    res.json({'sound': '알수없음'});
  }
  
});

app.get('/cat',  (req, res)  => {
  res.json({'sound': '야옹'});
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});