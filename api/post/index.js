const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('../../db/db')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {

  const todoItem = await ctx.request.body
 
  const item = await insertTodo(todoItem)
  
  ctx.body = item
})

async function insertTodo(item) {
  try {
    
    const myQuery = `INSERT INTO todoList 
    (todoItem, todoDateAdded, todoStatus, todoDueBy)
    VALUES ("${item.todoItem}", NOW(), ${item.todoStatus}, "${item.todoDueBy}")`

    const itemData = await pool.query(myQuery)
    return itemData
    
  } catch (error) {
    console.log(error)
  }
}

 module.exports = app.callback()
// app.listen(3000);
// console.log("Listening on port 3000...");