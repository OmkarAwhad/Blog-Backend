const Post = require('../models/blog.model')
const Like = require('../models/like.model')
const {ApiError} = require('../utils/ApiError')
const {ApiResponse} = require('../utils/ApiResponse')

exports.likePost = async(req,res) => {
     try {
          const {post,user} = req.body;
          const response = await Like.create({post,user})

          const updatedPost = await Post.findByIdAndUpdate(post, {$push :{likes:response._id}}, {new:true}).populate("likes").exec();

          res.status(200).json( new ApiResponse(201,updatedPost,"Liked"))
     } catch (error) {
          console.log(error)
          throw new ApiError(400,"Error in liking")
     }
}

exports.unlikePost = async(req,res) => {
     try {
          const {post,likeId} = req.body;
          const response = await Like.findOneAndDelete({post:post, _id:likeId})

          const updatedPost = await Post.findByIdAndUpdate(post, {$pull:{likes:response._id}},{new:true})

          res.status(200).json(new ApiResponse(201,updatedPost,"Unliked"))
     } catch (error) {
          console.log(error)
          throw new ApiError(400,"Error in unliking")
     }
}