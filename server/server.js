const express = require('express')
const bodyParser = require ('body-parser')



const PORT = 3000
const api = require('./routes/api')
const app=express()

app.use(bodyParser.json())

app.use('/api',api)
app.get('/', (req, res) => {
   res.send('heloo from server'); 
});
app.listen(PORT, function() {
    console.log(`Server started on port:` + PORT);
});
