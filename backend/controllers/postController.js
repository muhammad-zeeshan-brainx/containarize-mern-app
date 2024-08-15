const PostModel = require('../models/Post');

const getPosts = async (req, res) => {
  try {
    console.log('getPosts', req.body);

    const posts = await PostModel.find();

    res.status(200).json({
      posts,
      message: 'posts fetch successfully v1',
    });
  } catch (error) {
    console.log('error->>', error);
    res.status(500).json({ error: 'something went wrong' });
  }
};

const addPost = async (req, res) => {
  try {
    console.log('add post', req.body);
    const { title, description } = req.body;

    const post = await PostModel.create({ title, description });
    res.status(200).json({
      post,
      message: 'posts created successfully',
    });
  } catch (error) {
    console.log('error->>', error);
    res.status(500).json({ error: 'something went wrong' });
  }
};

module.exports = {
  getPosts,
  addPost,
};
