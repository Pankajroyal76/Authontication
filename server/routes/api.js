 const express = require('express')
 const router = express.Router()



 const mongoose =  require('mongoose')
 const db ="mongodb://userpankaj:pankuxolo786@ds113019.mlab.com:13019/eventsdb"
mongoose.connect(db,err =>{

    if (err){
        console.log('Eroor!'+ err)
    } else {
        console.log('Connected to mongodb')
    }
})
 router.get('/', (req, res) => {
     res.send('from API route')
 })

 module.exports = router