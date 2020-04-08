function CardDAO(connection)
{
	this._connection = connection();
}

CardDAO.prototype.cadastrarDadosView1 = function (dadosForm, req, req) {
	this._connection.open(function(err, mongoclient){
        mongoclient.collection("login", function(err, collection){
            collection.insert(dadosForm);

            res.redirect('/');
            mongoclient.close();
        });
    });
}
CardDAO.prototype.cadastrarDadosView2 = function (dadosForm, req, req) {
	this._connection.open(function(err, mongoclient){
        mongoclient.collection("information", function(err, collection){
            collection.insert(dadosForm);

            res.redirect('/');
            mongoclient.close();
        });
    });
}