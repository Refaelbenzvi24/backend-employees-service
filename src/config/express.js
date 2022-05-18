import express    from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes     from '../api/routes/v1'

// Create express app
const app = express()

// parse body params and attached them to req.body
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// mount api v1 routes
app.use("/v1", routes)

export default app
