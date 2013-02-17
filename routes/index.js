
/*
 * GET home page.
 */

exports.index = function(req, res){
  var data = { 
	"title": 'Express with backbone bootstrap less ' + 
             req.app.get('view engine') 
  };
  res.render('index', data);
};