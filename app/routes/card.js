module.exports = function (application) {
	application.get('/', function(req, res) {
		application.app.controllers.views.index(application, req, res);
	});
	application.get('/view1', function(req, res) {
		application.app.controllers.views.view1(application, req, res);
	});
	application.get('/view2', function(req, res) {
		application.app.controllers.views.view2(application, req, res);
	});

	application.post('/view1', function(req, res) {
		application.app.controllers.views.view1Cadastro(application, req, res);
	});
	application.post('/view2', function(req, res) {
		application.app.controllers.views.view1Cadastro(application, req, res);
	});
}