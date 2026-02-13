const getAllPosts = (req, res) => {
  const posts = [
    { id: 1, title: "Post1" },
    { id: 2, title: "Post2" },
  ];
  res.status(200).json({
  "success": true,
  "data": posts
})
};

const getPostById = (req,res) => {
  const postId= req.params.id;
  res.status(200).json({
     
  "success": true,
  "data": {postId}
 })
}

module.exports = {
  getAllPosts,
  getPostById
};
