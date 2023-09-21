// required the mongoose package
const mongoose = require('mongoose');
// connected to the database
mongoose.connect('mongodb://localhost:27017/crud');
// accesing the database Acquire the connection to check if it is successfull
const db = mongoose.connection;

// Error
db.on('error', console.error.bind(console, 'error connecting to db'));


// For create the data entry as a sample
// const Cat = mongoose.model('Cat', { name: String });
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

// If conection is success
db.once('open', function(){
    console.log('Successfully connected to the database');
});