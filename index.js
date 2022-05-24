const express = require('express')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const morgan = require('morgan')
const connectDB = require('./config/mongoDb')
const dotenv = require('dotenv')

dotenv.config()
connectDB()

const app = express()
app.use(express.json())

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.send('server')
})

app.use('/products', productRoutes)

app.use('/users', userRoutes)

// Error Handling
app.use((req, res, next) => {
  const err = new Error('Not found')
  err.status(404)
  next(err)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error,
    message: 'Not Found'
  })
})

const PORT = process.env.PORT || 3003
app.listen(PORT, console.log(`Server running on port ${PORT} `))
