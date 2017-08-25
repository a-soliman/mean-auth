let User = require('../models/user')

module.exports = function(router) {
	router.post('/users', function(req, res) {
		let user = new User();
		user.firstName = req.body.firstName;
		user.lastName = req.body.lastName;
		user.username = req.body.username;
		user.password = req.body.password;
		user.email = req.body.email;
		user.desk = req.body.desk;

		if(req.body.username == "" || req.body.username == null || req.body.email == "" || req.body.email == null || req.body.password == "" || req.body.password == null) {
			res.send('Ensure username, email and password are provided')
		} else {
			user.save(function(err) {
				if(err) {
					res.send('Username or email already exist')
				} else {
					res.send('user created');
				}
			});
		}
	})
	return router;
}