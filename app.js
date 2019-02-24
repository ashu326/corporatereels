const path = require('path') ;
const http = require('http') ;

const express = require('express') ;
const bodyParser = require('body-parser');

const app = express() ;

app.set('view engine', 'ejs') ;
app.set('views', 'views') ;

//app.use(express.static(path.join(__dirname, 'public'))) ;

const homeRoutes = require('./routes/home');

app.use(homeRoutes);

//app.use(errorControllers.get404Page); 

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port....${port}`));