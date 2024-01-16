const mongoose = require('mongoose');


const  connectDb=async ()=>{
    const url = 'mongodb+srv://nikhilesh:0001@cluster0.gnp24oe.mongodb.net/'; // Replace with your MongoDB server URL and database name

// Options to pass to mongoose.connect to avoid deprecation warnings
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
   await mongoose.connect(url, options)
   
  }
  module.exports={connectDb};
// Connect to MongoDB
