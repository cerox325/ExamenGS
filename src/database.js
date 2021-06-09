const moongose = require('mongoose')
const Uri = 'mongodb://localhost/examen-gs'
moongose.set('useUnifiedTopology', true);
moongose.connect(Uri,{ useNewUrlParser: true })
.then(db => console.log("connect DB"))
.catch(err => console.log(err))

module.exports = moongose