express = require('express')
mongoose = require('mongoose')
bodyParser = require('body-parser')

app = express()
notesRoutes = require('./routes/notes')

mongoose.connect('mongodb+srv://dbAdmin:12345654321@notes.ow4y8.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(console.log('db connected'))
    .catch(console.log('db connection error'))

allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain) 

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())    
app.use('/api/', notesRoutes)

module.exports = app