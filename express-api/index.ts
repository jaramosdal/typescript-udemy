import express from 'express';
// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.status(401).json({
    ok: false,
    msg: 'No hay token en la petición.'
  });

  res.json({ 
    ok: true,
    msg: 'Todo salió bien!'
   })
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})