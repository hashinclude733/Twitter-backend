const {tweetRepository}=require('../repository/tweet-repository')
  const  {hashtagRepository}=require('../repository/hashtag-repository')

  class TweetService{
    constructor(){
        this.tweetRepository=new tweetRepository();
        this.hashtagRepository=new hashtagRepository();
    }
async create(data){
    const content=data.content
    const tags=content.match(/#+[a-zA-Z0-9(_)]+/g).map((tag)=>tag.substring(1).toLowerCase())
    const tweet=this.tweetRepository.create(data)
    let alredyPresentTags=this.hashtagRepository.getHashtagByName(tags)
    let textOFPresentTags=alredyPresentTags.map((tags)=>{tags.text})
    let newTags=alredyPresentTags.filter((tag)=>{!textOFPresentTags.includes(tag)})
    newTags=newTags.map((tag)=>{
        return {
            text:tag,
            tweets:[tweet.id],
        }
    })
    await this.hashtagRepository.bulkCreate(newTags);
    alredyPresentTags.foreach((tag)=>{
        tag.tweet.push(tweet.id)
        tag.save()
    })
    return tweet;
}

async getTweet(tweetId){
    const tweet = await this.tweetRepository.getTweet(tweetId);
}


  }
  module.exports={TweetService};