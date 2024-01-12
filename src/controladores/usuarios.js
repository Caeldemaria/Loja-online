const query = require("../conexao");
const bcrypt= require('bcrypt')
const cadastrar= async (req,res)=>{
const {nome,cpf,telefone,email,usuario,password}= req.body;

if (!nome||!cpf||!telefone||!email||!usuario||!password){
    return res.status(409).json({mensagem:'todos os campos são obrigatórios'})
}

const checarUsuario=' SELECT * FROM usuarios  WHERE nome= $1'

const {rowCount}= await query(checarUsuario,[nome])
if(rowCount>0){
    return res.status(400).json({mensagem:'usuario ja existe'})
};

const bhash= await bcrypt.hash(password,10)
const criarUsuario= 'INSERT INTO usuarios (nome,cpf,telefone,email,usuario,password) values($1,$2,$3,$4,$5,$6)  returning *'
const inserir= await query(criarUsuario,[nome,cpf,telefone,email,usuario,bhash])

const resultado= {  ... inserir.rows[0]}
return res.status(202).json(resultado)
}

module.exports= {cadastrar
}