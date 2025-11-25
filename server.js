const express = require('express')
const app = express()
const PORT = 3000
const posts = require('./posts')

app.listen(PORT, ()=>{
  console.log(`Server running on http://localhost:${PORT}`);  
})

app.get('/', (req, res) => {
  res.send('OHH BENVENUTI nel nostro blog')
})

app.get('/posts', function (req, res) {
res.send('Elenco con tutti i post');
});
// show
app.get('/posts/:id', function (req, res) {
res.send(`Dettagli del post ${req.params.id}`);
});
// store
app.post('/posts', function (req, res) {
res.send('Creazione di un nuovo post');
});
// update
app.put('/posts/:id', function (req, res) {
res.send(`Modifica totale tombale, definitiva del post ${req.params.id} `);
});
// modify
app.patch('/posts/:id', function (req, res) {
res.send(`Modifica piccolina del post ${req.params.id}`);
});
// destroy
app.delete('/a posts/:id', (req, res)=>{
  res.send(`Addio soldato: ${req.params.id}`)
})