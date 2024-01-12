const {Pool} = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: '123',
    database: 'loja',

});
const query= async (query,params)=>{
    return await pool.query(query,params)
}
module.exports = query