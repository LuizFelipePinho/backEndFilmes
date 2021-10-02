const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json())
app.use(cors())


const rotaFilmes = require('./routers/rotas');
app.use('/filmes', rotaFilmes);

app.get('/', (req, res) => {
    res.send('Página inicial')
} )

const port = 3000;  

app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`);
})