const express = require('express')

const { loginUser, signupUser } = require('../controller/userController')
// const authCheck = require( '../middleware/authCheck' )

const router = express.Router()

router.post('/login', loginUser)

router.post( '/signup', signupUser )

router.get( "/", ( req, res ) => {
    res.send("hello user")
})

module.exports = router