const express = require('express')
const app = express()
const port = 3001
const config = {
  host: 'db',
  user: 'root',
  password: '123',
  database: 'nodedb',
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
  const sql = `INSERT INTO people(name) values ('Marcos Pereira')`
  connection.query(sql)
  connection.query('SELECT * from people', function (error, result, fields) {
    if(error) throw error;
    res.send(`<h1>${result[0].name}</h1>`)
  })
  connection.end()
})

app.listen(port, () => {
  console.log('rodando...')
})