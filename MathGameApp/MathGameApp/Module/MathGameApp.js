angular.module("MathGameModule", ["ControllersModule"])
	.run(function ($rootScope) {

		$rootScope.players=[];

		$rootScope.allQuestions =
			   [{
			   	round: 1,
			   	equation: "10*2=20",
			   	userAns: null,
			   	result: true
			   },
			   {
			   	round: 2,
			   	equation: "10-2=5",
			   	userAns: null,
			   	result: false
			   },
			   {
			   	round: 3,
			   	equation: "16/8=2",
			   	userAns: null,
			   	result: true
			   },
			   {
			   	round: 4,
			   	equation: "10-2=8",
			   	userAns: null,
			   	result: true
			   },
			   {
			   	round: 5,
			   	equation: "4*6=16",
			   	userAns: null,
			   	result: false
			   }];

		$rootScope.itemLists =
				   [{
				   	id: 1,
				   	equation: "10*2=20",
				   	result: "YES",
				   	userAns: null,
				   	yourResult: null,
				   	IsSelectYesVisible: true,
				   	IsSelectNoVisible: true

				   },
				   {
				   	id: 2,
				   	equation: "10-2=5",
				   	result: "NO",
				   	userAns: null,
				   	yourResult: null,
				   	IsSelectYesVisible: true,
				   	IsSelectNoVisible: true
				   }
				   ,
				   {
				   	id: 3,
				   	equation: "16/8=2",
				   	result: "YES",
				   	userAns: null,
				   	yourResult: null,
				   	IsSelectYesVisible: true,
				   	IsSelectNoVisible: true
				   },
				   {
				   	id: 4,
				   	equation: "10-2=8",
				   	result: "YES",
				   	userAns: null,
				   	yourResult: null,
				   	IsSelectYesVisible: true,
				   	IsSelectNoVisible: true
				   },
				   {
				   	id: 5,
				   	equation: "4*6=16",
				   	result: "NO",
				   	userAns: null,
				   	yourResult: null,
				   	IsSelectYesVisible: true,
				   	IsSelectNoVisible: true
				   }
				   ];

	});
