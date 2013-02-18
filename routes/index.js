
/*
 * GET home page.
 */

exports.index = function(req, res){
  var data = {
    "title": 'Express with backbone bootstrap less ' + 
             req.app.get('view engine'),
    "nav": [
      { 
        "name": "Home",
        "href": "http://www.peoi.org/"
      },
      { 
        "name": "Tasks",
        "href": "#"
      },
      { 
        "name": "Settings",
        "href": "#"
      },
      { 
        "name": "Logout",
        "href": "#"
      },
    ],
    "apps": [
    	{ 
        "name": "Profile",
        "href": "#"
      },
      { 
        "name": "Workspace",
        "href": "https://www.google.com"
      },
      { 
        "name": "Group",
        "href": "#"
      },
    	{ 
        "name": "Chatroom",
        "href": "#",
        "stat": "Beta"
      },
      { 
        "name": "Discussion",
        "href": "#"
      },
  	]
  };

  if (req.app.get('env') === 'development') {
    data['dev'] = true;
  }
  res.render('index', data);
};