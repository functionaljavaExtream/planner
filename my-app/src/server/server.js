const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const {Client} = require('pg')
const bodyparser = require('body-parser')
const  cors = require('cors')

const client = new Client({
    host : 'localhost',
    user : 'postgres',
    password : '890kim@jp',
    database : 'planner',
    port: 5432
})


client.connect()
app.use(bodyparser.json())
app.use(cors())

app.post('/init', (req, res) => {
    console.log('init is start')
    const query = `SELECT * FROM hello.todolist`
    client.query(query, (err, result) => {
        if(!err) {
            res.send({resultData: result.rows})
        }else {
            console.log(err)
            res.send({result: 'failure'})
        }
    })
    return
})


app.post('/init', (req, res) => {
    console.log('init is start')
    const query = `SELECT * FROM hello.todolist`
    client.query(query, (err, result) => {
        if(!err) {
            res.send({resultData: result.rows})
        }else {
            console.log(err)
            res.send({result: 'failure'})
        }
    })
    return
})


app.delete('/delete/:id', (req, res, next) => {
    console.log('delete is start')
    const query = `DELETE FROM hello.todolist WHERE "todolistCd" = ${req.params.id}`
    client.query(query, (err, result) => {
        if(!err) {
            res.send({resultData: result.rows})
        }else {
            console.log(err)
            res.send({result: 'failure'})
        }
    })
    return
})


app.get('/api/products', (req, res) => {
    client.query(`SELECT * FROM hello.TodoList`, (err, data) => {
        if(!err) res.sendStatus({ products : data });
        else res.sendStatus(err);
    })
})


const insertQuery = (data) => {
  const title = data.title
  const writer = data.writer
  const eta = data.eta
  const todo = data.todo
  const query = `INSERT INTO hello.todolist("todolistTitle","todolistWriter", "todolistETA", "todolistTodo") VALUES('${title}','${writer}',${eta},'${todo}')`
  return query
}

app.post('/save', (req, res) => {
    const data = req.body
    const query = insertQuery(data)
    client.query(query, (err, result) => {
        if(!err) {
             res.send({result: 'success'})
        }else {
          console.log(err)
          res.send({result: 'failure'})
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})