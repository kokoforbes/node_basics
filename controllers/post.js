const Post = require("../models/post");

exports.getPosts = (req, res) => {
  const posts = Post.find()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createPost = (req, res) => {
  console.log(req.body);
  const { title, content } = req.body;

  const newPost = new Post({ title, content });

  newPost
    .save()
    .then((post) => res.json(post))
    .catch((err) => res.json(err));
};
