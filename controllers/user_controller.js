const User = require('../models/User');

// initialize the cookie-parser
const cookieParser = require('cookie-parser');


module.exports.register = (req, res) => {
    
    console.log(req.body);

    User.create({
        username:   req.body.username,
        email   :   req.body.email,
        name    :   req.body.name,
        password:   req.body.password
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

module.exports.profile = (req, res) => {
    
    return res.render('backend/profile');
}

module.exports.login = (req, res) => {

    console.log(req.body);
    
    User.findOne({
        username   :   req.body.username
    })
    .then(newUser => {
        console.log('@@@@@@@', newUser.username);

        cookieParser({email : newUser.username });

        return res.redirect('/user/profile');
    })
    .catch(err => {
        console.log('error occurs :', err);
        return res.status(500).send(`Internal Server Error = > ${err}`); // Handle the error as needed
    });
}