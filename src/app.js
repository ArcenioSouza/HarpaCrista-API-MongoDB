import express from 'express'
import db from './config/dbConnect.js'
import routes from './routes/index.js'

const app = express()
db.on("error", () => console.log("Erro de conexão"))
db.once("open", () => console.log("Conectado com sucesso"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

routes(app)

export default app;