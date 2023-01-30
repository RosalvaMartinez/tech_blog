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
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        // Get all posts and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });


        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));


        // Pass serialized data and session flag into template
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                // {
                //     model: Comment,
                //     attributes: ['comment'],

                // }
            ],
        });

        const post = postData.get({ plain: true });

        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });
        console.log(user)
        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

// router.get('/', async (req, res) => {
//     try {
//         const posts = await Post.findAll();
//         console.log("posts")
//         res.render('homepage', {
//             post: posts

//         })
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/dashboard', async (req, res) => {
//     try {

//         res.render('dashboard', {
//             name: 'goose'
//         })
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/post', async (req, res) => {
//     try {

//         res.render('post')
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/login', async (req, res) => {
//     try {

//         res.render('login')
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/signup', async (req, res) => {
//     try {

//         res.render('signup')
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;