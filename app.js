const express = require('express');


const port = 8000;


const app = express();


app.get('/', (req, res) => {
    res.send('<h2>sd</h2>');
})





app.listen(port, function(err){
    if(err){
        console.log('Error occured during running the server', err);
    }
    console.log('My Express server running on the port :', port);
});