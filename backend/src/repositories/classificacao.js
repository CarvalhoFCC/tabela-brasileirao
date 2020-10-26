const database = require('../utils/database');

const classificacao = async () => {
	const query = `SELECT * FROM jogos`;
	const result = await database.query(query);

	return result.rows;
};

module.exports = {
	classificacao,
};