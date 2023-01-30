//WHEN I click on any other links in the navigation
//THEN I am prompted to either sign up or sign in

//WHEN I click on the homepage option in the navigation
//THEN I am taken to the homepage and presented with existing 
//blog posts that include the post title and the date created


//WHEN I click on the dashboard option in the navigation
//THEN I am taken to the dashboard and presented with any blog posts I have already 

//WHEN I click on the button to create a new blog post
//THEN the title and contents of my post are saved and 
//I am taken back to an updated dashboard with my new blog post

//WHEN I click on one of my existing posts in the dashboard
//THEN I am able to delete or update my post and taken back to an updated dashboard

const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
