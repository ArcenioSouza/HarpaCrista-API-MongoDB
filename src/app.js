import express from 'express'
import db from './config/dbConnect.js'
import routes from './routes/index.js'

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

db.on("error", () => console.log("Connection error"))
db.once("open", () => console.log("Connected to the database successfully"))


routes(app)

export default app;