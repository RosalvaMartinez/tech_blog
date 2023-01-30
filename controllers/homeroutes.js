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
const { Post, User, Comments } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {

        res.render('homepage')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {

        res.render('dashboard', {
            name: 'goose'
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post', async (req, res) => {
    try {

        res.render('post')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {

        res.render('login')
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;