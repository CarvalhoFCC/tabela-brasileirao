const Router = require('koa-router');
const router = new Router();

const Jogos = require('./controllers/jogos');
const Classificacao = require('./controllers/classificacao');

router.get('/jogos/:rodada', Jogos.jogosPorRodada);

router.get('/classificacao', Classificacao.classificacao);


module.exports = router;