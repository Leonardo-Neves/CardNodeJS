module.exports.index = function (application, req, res) {
	res.render('card');
};
module.exports.view1 = function (application, req, res) {
	res.render('view1');
};
module.exports.view2 = function (application, req, res) {
	res.render('view2');
};

module.exports.view1Cadastro = function (application, req, res) {

	var dadosForm = req.body;

	req.assert('email', 'Email é Obrigatório').notEmpty();
	req.assert('senha', 'Senha é Obrigatório').notEmpty();

	var erros = req.validationErrors();

	if(erros)
	{
		res.render('card');
		return;
	}

	var connection = application.config.dbConnection;
	var CardDAO = new application.app.models.CardDAO(connection);

	CardDAO.cadastrarDadosView1(dadosForm, req, res);
};
module.exports.view2Cadastro = function (application, req, res) {
	var dadosForm = req.body;

	req.assert('nome', 'Nome é Obrigatório').notEmpty();
	req.assert('endereco', 'Endereço é Obrigatório').notEmpty();

	var erros = req.validationErrors();

	if(erros)
	{
		res.render('card');
		return;
	}

	var connection = application.config.dbConnection;
	var CardDAO = new application.app.models.CardDAO(connection);

	CardDAO.cadastrarDadosView2(dadosForm, req, res);
};
