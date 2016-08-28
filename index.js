var DataAccess = require('./data_access');
var TimeStamp = require('./timestamp');


setInterval(function() {
	DataAccess.getPost("http://jsonplaceholder.typicode.com/posts/1");
	TimeStamp.getTime();
},3000);
