const{TweetService}=require('../services/tweet-service')
const tweetService=new TweetService();
 const createTweet=async (req,res)=>{

try{
const data=req.body;
const response=await tweetService.create(data);
return res.status(200).json({
    message:"success",
    data:response
})
}
catch(error){
    res.status(500).json({
        message:"failed",
        err:error,
    })

}
}
 const getTweet=async(req,res)=>{

    try{
       const id=req.param.id;
        const response=await tweetService.getTweet(id);
        return res.status(200).json({
            message:"success",
            data:response
        })
        }
        catch(error){
            res.status(500).json({
                message:"failed",
                err:error,
            })
        
        }
}
module.exports={createTweet,getTweet};