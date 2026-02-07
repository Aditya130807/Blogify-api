const getAllPosts = (req, res) => {
  const posts = [
    { id: 1, title: "Post1" },
    { id: 2, title: "Post2" },
  ];
  res.json(posts);
};

const getPostById = (req,res) => {
  const postId= req.params.id;
  res.status(200).json({
     "message": "Fetching data for post with ID: " + postId
  })
}

module.exports = {
  getAllPosts,
  getPostById
};
