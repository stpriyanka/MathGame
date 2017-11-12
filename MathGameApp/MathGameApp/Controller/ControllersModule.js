angular.module("ControllersModule", [])

	.controller("MathGameController", ["$rootScope", "$scope", function ($rootScope, $scope) {

		$scope.questions = [];
		//$scope.level1Questions = [];

		$scope.isStartPage = true;
		$scope.currentPlayer = null;

		$scope.currentScore = 0;


		(function () {

			//$scope.questions = $rootScope.allQuestions;
			for (var i = 0; i < $rootScope.allQuestions.length; i++) {
				$scope.questions.push($rootScope.allQuestions[i]);
			}

		})();

		$scope.addPlayer = function () {

			$rootScope.players.push($scope.currentPlayer);
			$scope.isStartPage = false;
		}

		$scope.updateAnswer=function(index, answer) {
			$scope.questions[index].yourAns = answer;
		}

		$scope.finishGame = function () {

			//$rootScope.players.reduce($scope.currentPlayer);
			$scope.isStartPage = true;
		}


		$scope.ShowHide = function () {

			$scope.isStartPage = true;
		}


	

		$scope.selectAnswer = function (index, ans) {
			var item = $scope.itemLists[index];

			if (ans === "YES") {
				item.userAns = "YES";
			}

			if (ans === "NO") {
				item.userAns = "NO";
			}
			item.IsSelectNoVisible = false;
			item.IsSelectYesVisible = false;


			//verify user answer
			if (item.result === item.userAns) {
				item.yourResult = "OK";

				//current player score update
				$scope.currentScore++;
			}
			else
			{
				item.yourResult = "FAILED";
			}
		};


	}]).controller("Test2Controller", ["$rootScope", "$scope", function ($rootScope, $scope) {
		$scope.name = "Arif2";

	}]);