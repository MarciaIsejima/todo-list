const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('../../db/db')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {

  const todoItem = await ctx.request.body
 
  const item = await updateStatus(todoItem)
  
  ctx.body = item
})

async function updateStatus(item) {
  try {
    
    const myQuery = `UPDATE todoList 
    SET todoStatus=${item.todoStatus}
    WHERE todoId=${item.todoId}`

    const itemData = await pool.query(myQuery)
    return itemData
    
  } catch (error) {
    console.log(error)
  }
}

 module.exports = app.callback()
// app.listen(3000);
// console.log("Listening on port 3000...");