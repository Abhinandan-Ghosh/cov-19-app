const URL = 'https://covid19.mathdro.id/api';

let app = angular.module('MyApp', []);

app.controller('MyCtrl', ($scope, $http) => {
	//This is controller
	$scope.title = 'Stay Home Stay Safe';

	//Calling API
	$http.get(URL).then(
		(response) => {
			//Success
			console.log(response.data);
			$scope.all_data = response.data;
		},
		(error) => {
			//Error
		}
	);
	//get country
	$scope.get_c_data = () => {
		let country = $scope.c;

		if (country == '') {
			$scope.c_data = '';
			return;
		}

		let c_url = `${URL}/countries/${country}`;
		console.log(c_url);
		$http.get(c_url).then(
			(response) => {
				//success
				$scope.c_data = response.data;
				console.log($scope.c_data);
			},
			(error) => {
				//error
				console.log(error);
			}
		);
	};
});
