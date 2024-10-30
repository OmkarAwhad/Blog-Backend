const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000

const blogRoutes = require('./routes/blog.routes')
app.use(express.json())
app.use('/api/v1', blogRoutes)

app.listen(PORT, ()=> console.log(`Server running at port ${PORT}`))

const dbConnect = require('./config/mongoose')
dbConnect()

