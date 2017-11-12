angular.module('GameAppServiceModule', [])

.service('Session', function ($http) {

	this.inc = function () {
		console.log("INC Called and Global is :" + this.count);
		if (this.count) {
			this.count++;
		} else {
			this.count = 0;
		}

	};

	this.get = function () {
		return this.count;
	};

});