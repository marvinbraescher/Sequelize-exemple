const express = require('express')
const app = express()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'gtpop123', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(
    () => {
        console.log('Conectado com sucesso parcero, parabéns! ')
    }
).catch(
    (erro) => {
        console.log('Falha em se conectar: ' + erro)
    }
)

/*
app.get('/', (req, res) => {
    res.send('TESTE')
})

app.listen(8081, () => {
    console.log('Server running on port 8081')
})
*/