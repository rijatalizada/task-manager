const express = require('express')
require('dotenv').config()
const app = express()
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


// middleware
app.use(express.json())

app.use('/api/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = 5000

app.listen(port, () => {
    connectDb(process.env.TASK_MANAGER)
    console.log(`App is listening to port ${port}`)
})