const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./src/queries')
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (request, response) => {
  response.json({ info: 'API REST running with success' })
});

app.post('/registerWorker', routes.registerWorker)
app.post('/login', routes.authenticate)
app.get('/services', routes.getServices)
app.get('/getWorkersByServiceId', routes.getWorkersByServiceId)
app.post('/registerPerson', routes.postPerson)
app.delete('/person/:id', routes.deleteUser)

app.listen(3000, () => {
  console.log("API REST rodando em http://localhost:3000")
})