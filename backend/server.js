require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const issueRoutes = require('./routes/issues')
const cors = require('cors')


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.error(error)
  })
  .finally(() => console.log('mongo_URI><><><><><', process.env.MONGO_URI))



app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  next()
})

// Routes
app.use('/api/issues', issueRoutes)


app.use(express.static(path.join(__dirname, '../frontend/build')))
app.get("*", (req, res) =>
  res.sendFile(
    path.resolve(__dirname, "../", 'frontend', 'build')
  )
)

/* 
app.use(express.static(path.join(__dirname, '../frontend/next')))
app.get("*", (req, res) =>
  res.sendFile(
    path.resolve(__dirname, "../", 'frontend', 'build', 'index.html')
  )
)
*/