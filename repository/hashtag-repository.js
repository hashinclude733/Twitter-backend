const   Hashtag = require("../models/hashtag");

class hashtagRepository{
  
   
   async create(data){ try {
     const hashtag=   await Hashtag.create(data)
        return hashtag;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async bulkCreate(data){ 
    
    try {
    const tags=   await Hashtag.insertMany();
       return tags;
   } catch (error) {
       console.log(error);
       throw error;
   }
}

async getHashtagByName(text)
{ 
    
    try {
    const hashtag=   await Hashtag.find({
        text:text
    });
       return hashtag;
   } catch (error) {
       console.log(error);
       throw error;
   }
}

async getHashtag(id)
{ 
    
    try {
    const hashtag=   await Hashtag.findById(id);
       return hashtag;
   } catch (error) {
       console.log(error);
       throw error;
   }
}


async deleteHashtag(data)
{ 
    
    try {
    const hashtag=   await Hashtag.deleteOne(data);
       return hashtag;
   } catch (error) {
       console.log(error);
       throw error;
   }
}


}
module.exports= {hashtagRepository};