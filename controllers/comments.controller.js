const Comment = require('../models/comment.model')
const Post = require('../models/blog.model')
const {ApiError} = require('../utils/ApiError')
const {ApiResponse} = require('../utils/ApiResponse')

exports.createComment = async(req,res) => { 
     try {
          const {post,user,body} = req.body;

          const response = await Comment.create({post,user,body})

          const updatedPost = await Post.findByIdAndUpdate(post , {$push: {comments:response._id} }, {new:true} ).populate("comments").exec();

          res.status(200).json(
               new ApiResponse(201, updatedPost,"Comment Created Successfully")
          )

     } catch (error) {
          throw new ApiError(400,"Not able to create Comment")
     }
}