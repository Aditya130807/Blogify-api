const express = require("express");

const router = express.Router();

const controller = require("C:/git/Blogify-api/src/controllers/posts.controller.js");

router.get("/", controller.getAllPosts);

router.get("/:id", controller.getPostById);

module.exports = router;
