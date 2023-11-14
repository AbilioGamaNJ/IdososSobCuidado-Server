const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./src/queries')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended:true
  })
)

app.get('/',(request,response) => {
  response.json({info:'API REST running with success!'})
})

app.listen(PORT, () => {
  console.log(`Server is runing in http://localhost:${PORT}`)})

app.post('/login/pessoa', routes.getPessoa)
app.get('/pessoa/:idpessoa', routes.getPessoaById)
app.post('/pessoa', routes.createPessoa)
app.put('/pessoa/:idpessoa', routes.updatePessoa)
app.post('/login/empresa', routes.getEmpresa)
app.get('/empresa/:idempresa', routes.getEmpresaById)
app.post('/empresa', routes.createEmpresa)
app.put('/empresa/:idempresa', routes.updateEmpresa)
app.get('/postagem', routes.getPostagem)
app.get('/postagem/:idpostagem', routes.getPostagemById)
app.post('/postagem/', routes.createPostagem)
app.put('/postagem/:idpostagem', routes.updatePostagem)
app.delete('/postagem/:idpostagem', routes.deletePostagem)
app.post('/perfil', routes.getPerfil)
app.get('/perfil/:idPerfil', routes.getPerfilById)
app.post('/perfil/', routes.createPerfil)
app.put('/perfil/:idPerfil', routes.updatePerfil)