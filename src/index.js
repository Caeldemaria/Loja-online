require('dotenv').config()
const pool = require('./conexao')
const express= require('express');
const {cadastrar}= require('./controladores/usuarios')
const app= express()
app.use(express.json());

app.post('/usuarios',cadastrar)

const port= process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`api funcionando perfeitamente na porta ${port}`);
})