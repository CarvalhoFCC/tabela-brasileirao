const response = require('../utils/response');
const Classificacao = require('../repositories/classificacao');


const classificacao = async (ctx) => {
	const result = await Classificacao.classificacao();
	
	const final = [];
	const times = [];

	/**
	 * Adiciona os times
	 */
	for(jogo of result){
		let check = times.some( (t) => t === jogo["time_casa"]);
		if(!check) times.push(jogo["time_casa"])
	};

	/**
	 * Preenche a tabela
	*/
	for(item of times){
		let nome, pontos = 0, jogos= 0, vitorias = 0, derrotas = 0, empates = 0, golsFeitos = 0, golsSofridos = 0;

		for(jogo of result){
			nome = item;

			if(jogo["time_casa"] === item) {
				jogos++;
				golsFeitos += jogo["gols_casa"];
				golsSofridos += jogo["gols_visitante"];
				
				if(jogo["gols_casa"] > jogo["gols_visitante"]){
					pontos += 3;
					vitorias++;
				}else if (jogo["gols_casa"] < jogo["gols_visitante"]) derrotas++;
				else{
					pontos += 1;
					empates++;
				}				
			};
			
			if(jogo["time_visitante"] === item) {
				jogos++;
				golsFeitos += jogo["gols_visitante"];
				golsSofridos += jogo["gols_casa"];
				
				if(jogo["gols_visitante"] > jogo["gols_casa"]){
					pontos += 3;
					vitorias++;
				}else if (jogo["gols_visitante"] < jogo["gols_casa"]) derrotas++;
				else{
					pontos += 1;
					empates++;
				}				
			}
		};
		const timeComClassificacoes = { nome, pontos, jogos, vitorias, derrotas, empates, golsFeitos, golsSofridos }

		final.push(timeComClassificacoes);
	};

	if (result) {
		return response(ctx, 200, final);
	}

	return response(ctx, 400, { message: 'Mal formatado' });
};

module.exports = { 
	classificacao, 
};