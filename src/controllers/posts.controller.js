const getAllPosts = (req, res) => {
  const posts = [
    { id: 1, title: "Post1" },
    { id: 2, title: "Post2" },
  ];
  res.json(posts);
};

module.exports = {
  getAllPosts,
};
