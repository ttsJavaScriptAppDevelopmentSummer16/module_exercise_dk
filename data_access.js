var Request = require('request-promise');

var DataAccess = {
	getPost: function(PostID){
		Request(PostID)
		.then(function(test) {
			console.log(test);
		})
	}
}

module.exports = DataAccess;