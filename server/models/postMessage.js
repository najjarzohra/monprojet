import mongoose from 'mongoose';

const postSchema =mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    name:String,
    tags:[String],
    selectedFile:String,
    likeCount:{         
        type :[string], //array of id
        default:[],
    },
    createdAt:{
type:Date,
default:new Date()
    }
});

const PostMessage =mongoose.model('PostMessage',postSchema);

export default PostMessage;