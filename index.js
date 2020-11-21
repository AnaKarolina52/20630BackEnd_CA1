const express = require('express');
const mongoose = require('mongoose');
const{ MONGO_URI} = require('./config');
const app = express();
const bodyParser = require('body-parser')

/*home page route(testing)
app.get('/', (req,res) => {res.send('Hello World');});*/

//Routes
const booksRoutes = require('./routes/api/book');


//BodyParser Middleware
app.use(express.json());

//Connect to MongoDB

mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('MongoDB right connected!!'))
.catch(err => console.log(err));


//User routes
app.use('/api/book', booksRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server is running at the Port: ' +PORT));

 