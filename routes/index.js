
/*
 * GET home page.
 */

exports.index = function(req, res){
  var data = {
    "title": 'Express with backbone bootstrap less ' + 
             req.app.get('view engine'),
    "apps": [
    	{ "name": "Home" },
    	{ "name": "Profile" },
    	{ "name": "Chatroom" },
  	]
  };

  if (req.app.get('env') === 'development') {
    data['dev'] = true;
  }
  res.render('index', data);
};