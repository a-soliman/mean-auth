angular.module('userControllers', [])


.controller('regCtrl', function($scope, $http) {
	$scope.regUser = function(regData) {
		console.log(regData);

		let req = {
			method: 'POST',
			url: '/users',
			data: regData
		}

		$http(req).then(function(data) {
			console.log(data)
		}).catch(function() {
			console.log('something went wrong')
		})
	}


	
})