//il nostro import
const express = require('express')


//creazione della route per esposrtarla
const router = express.Router()


//la logica di cio che avviene

router.get('/', (req, res) => {
  res.send('OHH BENVENUTI nel nostro blog')
})

router.get('/posts', function (req, res) {
res.send('Elenco con tutti i post');
});
// show
router.get('/posts/:id', function (req, res) {
res.send(`Dettagli del post ${req.params.id}`);
});
// store
router.post('/posts', function (req, res) {
res.send('Creazione di un nuovo post');
});
// update
router.put('/posts/:id', function (req, res) {
res.send(`Modifica totale tombale, definitiva del post ${req.params.id} `);
});
// modify
router.patch('/posts/:id', function (req, res) {
res.send(`Modifica piccolina del post ${req.params.id}`);
});
// destroy
router.delete('/a posts/:id', (req, res)=>{
  res.send(`Addio soldato: ${req.params.id}`)
})


//il mio return ()
module.exports = router