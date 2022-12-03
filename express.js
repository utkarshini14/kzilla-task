const express = require('express')
const { connectToDb, getDb } = require('./db')

const app = express()

let db
connectToDb((err) => {
    if (!err) {
        app.app.listen(3000, () => {
            console.log('server listening on port 3000')
        })
        db=getDb()
    }
})


app.get("/healthcheck", (req,res) => {
    res.send(200);
})

