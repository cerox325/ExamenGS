const express = require('express');
const app = express();
const morgan = require("morgan")
const path = require('path')
const {moongose} = require('./database')
//Config
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())


//Routes
app.use('/api/credito',require('./routes/credito.routes'))
app.use('/api/plazo',require('./routes/plazo.routes'))
app.use('/api/',require('./routes/product.routes'))



//Static files
app.use(express.static(path.join(__dirname, 'public')))

//Run server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});


