const app = require('./app')
//Porta da API
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is up o port ${port}`);
})