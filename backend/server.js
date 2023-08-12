require( 'dotenv' ).config()

const express = require( 'express' )
const mongoose = require( 'mongoose' )
const homeRoutes = require( './routes/homeRoutes' )
const userRoutes = require( './routes/userRoutes' )  

const app = express()
app.use(express.json())

app.use( '/home', homeRoutes )
app.use( '/user', userRoutes)

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
    console.log('Connected to database')
    app.listen(process.env.PORT, () => {
    console.log('listening for requests on port', process.env.PORT)
    })
    })
    .catch((error) => {
    console.log(error)
    })