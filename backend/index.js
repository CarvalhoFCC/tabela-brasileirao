const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const router = require('./src/routes');
const server = new Koa();

server.use(bodyparser());
server.use(router.routes()); 

server.use( async (ctx) => {
	ctx.body = "Padrão";
});

server.listen(8081, () => console.log('Rodando...'));