require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res) => {
    res.send('22.10_Sid')
})

app.get('/login', (req,res) => {
    res.send('<h1>please login at test.com</h1>')
})

app.get('/discord', (req,res) => {
    res.send("discord.gg/octocube")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


