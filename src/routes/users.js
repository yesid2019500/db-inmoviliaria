const express =  require('express')

const router = express.Router()
const HomeSchema = require('../models/home')
// 
router.post('/inmo', (req, res)=>{
    console.log( req.body );
   const home = HomeSchema(req.body)
    
   home.save()
   .then((data) => res.json(data))
   .catch((err)=> res.json({message:err}))

})

// get
router.get('/inmo', (req, res)=>{
    HomeSchema.find()

   .then((data) => res.json(data))
   .catch((err)=> res.json({message:err}))
})

// get one

router.get('/inmo/:id', (req, res)=>{

    const {id } = req.params

    HomeSchema.findById(id)
   .then((data) => res.json(data))
   .catch((err)=> res.json({message:err}))
})

module.exports =  router 