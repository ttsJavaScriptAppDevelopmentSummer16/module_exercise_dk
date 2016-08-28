var Moment = require('moment');

var TimeStamp = {
	getTime: function() {
		console.log(new Moment().format("h:mm:ss a"));
	}
}

module.exports = TimeStamp;