const response = require('../utils/response');
const Jogos = require('../repositories/jogos');

const jogosPorRodada = async (ctx) => {
	const { rodada = null } = ctx.params;
	if (rodada >=1 && rodada <= 38) {
		const result = await Jogos.jogosPorRodada(rodada);
		if (result) {
			return response(ctx, 200, result);
		}
		return response(ctx, 404, { message: 'Rodada não encontrada' });
	}

	return response(ctx, 400, { message: 'Mal formatado' });
};

module.exports = { 
	jogosPorRodada, 
};