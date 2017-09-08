module.exports = function(app, router,){

	router.get('/', function(req, res) {
        res.sendFile(__dirname + '/mainchat.html');
	});

	// views_router.get([
	// 	'/css/login.css',
	// 	'/login/css/login.css'],
	// 	function(req, res) {
	// 	res.sendFile(__dirname + '/css/login.css');
	// });
	//
	// views_router.get([
	// 	'/js/login.js',
	// 	'/login/js/login.js'],
	// 	function(req, res) {
	// 	res.sendFile(__dirname + '/js/login.js');
	// });
};
