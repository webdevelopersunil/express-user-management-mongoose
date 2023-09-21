module.exports.home = (req, res) => {
    const metadata = {
        title : "HomePage" 
    };
    return res.render('homepage');
} 

module.exports.login = (req, res) => {
    const metadata = {
        title : "Login"
    };
    return res.render('auth/login');
}

module.exports.register = (req, res) => {
    const metadata = {
        title : "Register" 
    };
    return res.render('auth/register');
}

module.exports.forgot_password = (req, res) => {
    const metadata = {
        title : "Forgot Password" 
    };
    return res.render('auth/forgot-password');
}