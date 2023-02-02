const {CustomAPIError} = require('../errors/custom-error')


const errorHandlerMiddleware = (err, req, res, next) => {
    console.log("Entered")
    console.log(err)
    if(err instanceof CustomAPIError) {
        console.log("Entered to the if block")
        return res.status(err.statusCode).json({ msg: err.message})
    }
    return res.status(500).json({ msg: err})
}

module.exports = errorHandlerMiddleware