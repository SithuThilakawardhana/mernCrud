const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.set('strictQuery', false);

const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());

//route middleware
app.use(postRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://sithu:sithu123@merncrud.unr7i7x.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=> console.log('DB Connection error',err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});