const express = require('express');


const { connectDB } = require('./db')
const userRoutes = require('./src/routes/users')
const { PORT } = require('./confi.js')
const cors = require('cors')
// yess1234

connectDB()

const app = express();

// CORS
app.use(cors())

// middelware
app.use(express.json())
app.use('/api',userRoutes);


// routes
app.get('/api/prueba', (req, res)=> {
    res.json({ name: 'Yessi', age: 33 })
})


app.listen( process.env.PORT || 3000 )
console.log( 'server on port 4002', process.env.PORT);