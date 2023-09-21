const Post = require('../models/Post');

module.exports.post = (req, res) => {
    return res.render('post');
}

module.exports.create = (req, res) => {

    Post.create({
        content :   req.body.content,
        name    :   req.user.id
    })
    .then(newUser => {
        console.log('@@@@@@@', newUser);
        return res.redirect('/login');
    })
    .catch(err => {
        console.log('error occurs :', err);
        return res.status(500).send(`Internal Server Error = > ${err}`); // Handle the error as needed
    });
}