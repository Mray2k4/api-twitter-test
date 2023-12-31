const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const path = require('path');

console.log(axios.isCancel('something'));


app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/index.html'));
})

app.get('/api/tweets', function(req, res){
   // res.send(character);
   const tweets = `https://api.twitter.com/2/tweets/${id}`

   axios.get('https://swapi.dev/api/people/1')
  .then(function (response) {
    // handle success
    res.send(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    res.sendStatus(500)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
