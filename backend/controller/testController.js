const Test = require('../models/testModel')

const getTests = async ( req, res ) => {
  const username = req.user.username
    const test = await Test.find( { author :  username  }).sort({createdAt: -1})

  res.status(200).json(test)
}


const createTest = async (req, res) => {
    const {author , paragraph , score} = req.body
    try {
        //const username = req.user.username
        const testData = await Test.create( { author, paragraph, score } )
        res.status(200).json(testData)
    } catch ( error ) {
        res.status(400).json({ error: error.message })
    }
}   

module.exports = {
    getTests,
    createTest
}