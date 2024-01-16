const Tweet = require("../models/tweet");

class tweetRepository{
   
   async create(data){ try {
     const tweet=   await Tweet.create(data)
        return tweet;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async getallTweets(data){ 
    
    try {
    const tweets=   await Tweet.find();
       return tweets;
   } catch (error) {
       console.log(error);
       throw error;
   }
}

async getTweet(id)
{ 
    
    try {
    const tweet=   await Tweet.findById(id);
       return tweet;
   } catch (error) {
       console.log(error);
       throw error;
   }
}


async deleteTweet(data)
{ 
    
    try {
    const tweet=   await Tweet.deleteOne(data);
       return tweet;
   } catch (error) {
       console.log(error);
       throw error;
   }
}


}
module.exports= {tweetRepository};