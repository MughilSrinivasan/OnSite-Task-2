const express = require( 'express' )
const { getTests, createTest } = require( '../controller/testController' )
const authCheck = require( '../middleware/auth' )

const router = express.Router()

router.use(authCheck)

router.get( "/tests", getTests )

router.post('/create', createTest)

module.exports = router