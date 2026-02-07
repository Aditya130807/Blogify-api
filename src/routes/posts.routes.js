const express = require('express');

const router = express.Router()

const controller = require('C:/git/Blogify-api/src/controllers/posts.controller.js')

router.get("/",controller.getAllPosts)

module.exports=router
