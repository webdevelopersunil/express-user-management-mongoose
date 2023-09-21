const User = require('../models/User');

module.exports.register = (req, res) => {
    
    console.log(req.body);

    User.create({
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
        email   :   req.body.email
    })
    .then(newUser => {
        console.log('@@@@@@@', newUser);
        return res.redirect('/user/profile');
    })
    .catch(err => {
        console.log('error occurs :', err);
        return res.status(500).send(`Internal Server Error = > ${err}`); // Handle the error as needed
    });
}