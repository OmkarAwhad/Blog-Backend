const Post = require('../models/blog.model')
const {ApiError} = require('../utils/ApiError')
const {ApiResponse} = require('../utils/ApiResponse')

exports.createPost = async(req,res) => {
     try {
          const {title,body} = req.body;

          const response = await Post.create({title,body})

          // const updatedLike = await Like.find

          res.status(200).json(
               new ApiResponse(201, response,"Post Created Successfully")
          )

     } catch (error) {
          res.status(400).json(new ApiError(400, "Not able to create Post"));
     }
}

exports.getPosts = async(req,res) => {
     try {
          const response = await Post.find({}).populate("likes").populate("comments").exec();
          res.status(201).json({
               response
          });
     } catch (error) {
          res.status(400).json(new ApiError(400, "Not able to create Post"));
     }
}