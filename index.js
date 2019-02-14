const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('./db/db')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {

  const dbtitle = await ctx.request.body.title
  
  const item = await show(dbtitle)
  
  ctx.body = item
})

async function show(title) {
  try {
    
    const itemData = await pool.query(`SELECT movieTitle,  IF(movieWatched, 'Yes', 'No') movieWatched FROM movieList WHERE movieTitle = '${title}'`)

    return itemData[0].movieTitle + " - Watched: " + itemData[0].movieWatched
  } catch (error) {
    console.log(error)
  }
}

module.exports = app.callback()
//app.listen(3000);
//console.log("Listening on port 3000...");