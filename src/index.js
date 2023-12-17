require('dotenv').config()
const express= require('express');
const app= express()
app.use(express.json());

app.get('/teste',async (req,res)=>{
   
})
const port= process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`api funcionando perfeitamente na porta ${port}`);
})