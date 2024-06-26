import express from 'express';
import 'dotenv/config' 
import cors from 'cors'
import morgan from 'morgan';
import path from 'path'
import { fileURLToPath } from 'url';
import './src/database/database.js'
import tareasRouter from './src/routes/tareas.routes.js'

const app = express() //seteo instancia de express
app.set('port', process.env.PORT || 4003)
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+ app.get('port'))
})

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const __filename= fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, '/public')))
console.log(path.join(__dirname, '/public'))

app.use('/api', tareasRouter)