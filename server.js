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
   const apiUrl = `https://api.twitter.com/2/tweets/1742229265599344708`
   const token = 'AAAAAAAAAAAAAAAAAAAAAPly9QAAAAAAQP4Qf6PfN0NeU4L5keo%2B7kae%2Fs0%3DEQIp2W7jkVldFBLvOOFtSJXl2vWEe3f1J1STKMTyWEbsogNYfE'
   const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

   axios.get(apiUrl, config)
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
