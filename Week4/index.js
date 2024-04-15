
const express = require('express')
var cors = require('cors')
const app = express()
const fs = require('fs')
const port = 3000

app.use(cors())

// Serve static files from the 'public' directory
// app.use('/public', express.static('public'));    // it worked without this

// Asynchronously read the JSOn data from animals.json
const getAnimalData = () =>  {
  return new Promise((resolve, reject) => {
    fs.readFile('animals.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
};

app.get('/sound/:name', async (req, res) => {
  const {name} = req.params;
  try {
    const animals = await getAnimalData(); // Await the asynchronous read data
    const animalData = animals[name];
    console.log(animalData);
    if (animalData) {
      res.json(animalData);
    } else {
      res.json({'sound': '알 수 없슴'})
    }
  } catch (error) {
    console.error('Error reading animal data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, ()=> {
  console.log(`Example app listening on port ${port}`)
})
