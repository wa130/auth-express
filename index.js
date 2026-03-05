import 'dotenv/config'
import express from 'express'

const app = express()
const port = process.env.PORT

app.use(express.json())

app.get('/testing', (req, res) => {
    res.status(200).json(
        {
            message: `succes server running in port : ${port}`
        }
    )
})

app.listen(port, () => {
    console.log('server berhasi di jalankan di port : ' + port)
})