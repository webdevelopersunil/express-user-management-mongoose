const express = require('express');

// require the path module from the express
const path = require('path');

const db = require('./config/mongoose.js');

// Set the port for runnung the server
const port = 8000;
// calling express here as a function, This app function will have the all functionality which needed to run a Server.
const app = express();

// Cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// middleware for parsing the form data
app.use(express.json())
app.use(express.urlencoded());

const expresslayouts = require('express-ejs-layouts');
// to tell Server to use this layouts
app.use(expresslayouts);
// Extract styles and script from sub-pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// Middleware for static files like (css,js,images and js libraries)
app.use(express.static('assets'));

// set the deffault template engine


app.set('view engine','ejs');

// setting here the views folder path
app.set('views', path.join(__dirname,'views'));




// Routes Start



app.use('/',require('./routes/home'));
app.use('/user',require('./routes/auth.js'));
app.use('/post',require('./routes/post.js'));

app.use(function(req, res, next) {
    res.status(404).render('error/404');
});



// Routes End



app.listen(port, function(err){
    if(err){
        console.log('Error occured during running the server', err);
    }
    console.log('My Express server running on the port :', port);
});