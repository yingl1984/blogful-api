const knex = require('knex')
//This is your server object
const app = require('./app')

const { PORT, DATABASE_URL } = require('./config')
//Create a knex dataase object
const db = knex({
  client: 'pg',
  connection: DATABASE_URL,
})
app.set('db', db);
app.set('username', 'admin');

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})