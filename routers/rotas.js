const express = require('express');
const router = express.Router();

const identificadoAleatorio = () => Math.floor(Math.random() * 1000);

const filmes = [
    {
        nome: 'Matrix',
        imagem: 'https://static.wixstatic.com/media/c43ed8_5c2df17605ae40828b9863e64b435541~mv2.png/v1/fit/w_758%2Ch_760%2Cal_c/file.png',
        genero: 'Sci-fi',
        nota: '10',
        // id: identificadoAleatorio()
        id: 1
    },
    {
        nome: 'Matrix',
        imagem: 'https://static.wixstatic.com/media/c43ed8_5c2df17605ae40828b9863e64b435541~mv2.png/v1/fit/w_758%2Ch_760%2Cal_c/file.png',
        genero: 'Sci-fi',
        nota: '10',
        // id: identificadoAleatorio()
        id: 2
    }
]



router.get('/', (req, res) => {
    res.send(filmes)
})


router.get('/:id', (req, res) => {
    const id = req.params.id

    const elementoPesquisa = filmes.filter( filme => filme.id == id)
    res.send(elementoPesquisa)

});



router.post('/add', (req, res) => {
    const filme = req.body;
    filme.id = identificadoAleatorio()
    console.log(filme);
    filmes.push(filme)
    res.status(201).send({
        message: 'Filme adicionado com sucesso',
        data: filme
    });
})


router.put('/:id', (req, res) => {
   
    const editaFilme = req.body;
    const id = req.params.id;
    let filmeAtual = filmes.find( (filme) => filme.id == id)

    filmeAtual.nome = editaFilme.nome;
    filmeAtual.imagem = editaFilme.imagem;
    filmeAtual.genero = editaFilme.genero;
    filmeAtual.nota = editaFilme.nota;

    res.send({
        message: `Filme ${filmeAtual.nome} atualizado com sucesso!`,
        data: filmeAtual
    })
})



router.delete('/:id', (req,res) => {
    const id = req.params.id;
    const i = filmes.findIndex( (elemento) => elemento.id == id);
    filmes.splice(i, 1);
    res.send({
        message: `filme excluido com sucesso!`
    })
})


module.exports = router;