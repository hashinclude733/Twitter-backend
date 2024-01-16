const express = require('express')
const {connectDb}=require('./config/database.js');
const Tweet = require("./models/tweet.js");
const router=require('./routes');
const bodyParser = require('body-parser');
const app = express()
const port = 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


connectDb();
app.get('/', (req, res) => {
  res.send('Hello World!')

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})