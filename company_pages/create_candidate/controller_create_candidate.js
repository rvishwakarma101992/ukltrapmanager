(function () {	'use strict';

angular
.module('inspinia')
.controller('controller_create_candidate', ['$scope', '$state', 'service_vswf', controller_create_candidate])
;
function controller_create_candidate($scope, $state, service_vswf){

	$scope.reset = function(){

		$scope.matrimony= {};
		$scope.matrimony.preferences = [
			{
				"name" : "sutar",
				"title" : "Sutar",
				"state" : false
			},
			{
				"name" : "sonar",
				"title" : "Sonar",
				"state" : false
			},
			{
				"name" : "lohar",
				"title" : "Lohar",
				"state" : false
			},
			{
				"name" : "shilpkar",
				"title" : "Shilpkar",
				"state" : false
			},
			{
				"name" : "tamrakar",
				"title" : "Tamrakar",
				"state" : false
			}
		];



		
	}
	$scope.reset();

	// $scope.fetch_data = function(){
	// 	service_vswf.fetch_full_list()
	// 	.then(
	// 		function on_success(response){
	// 	    	console.log("ON SUCCESS: " + response.data);
	// 	    	$scope.list_all_candidates = response.data;
	// 		}, 
	// 		function on_error(response){
	// 			console.log("ON ERROR: " + response.statusText);
	// 		}
	// 	);
	// }
	// $scope.fetch_data();

	$scope.create_new_candidate = function(coming_object){
		service_vswf.create(coming_object)
		.then(
			function on_success(response){
				 swal({
				 	title: "Success!", 
				 	text: "Record created successfully!", 
					type: "success"
				});
		    	console.log("ON SUCCESS: " + response.data);
		    	$scope.reset();
		    	$state.go('company_pages.view_candidates');
			}, 
			function on_error(response){
				console.log("ON ERROR: " + response.statusText);
			}
		);
	}

	$(function(){
		$('#birth_date').datepicker({
			format: 'dd-M-yyyy'
		});
	});

	$(function(){
		$('#birth_time').timepicker();
	});



	// $scope.fetch_a_candidate = function(item_id){
	// 	service_vswf.fetch_by_id(item_id)
	// 	.then(
	// 		function on_success(response){
	// 	    	console.log("ON SUCCESS: " + response.data);
	// 	    	$scope.matrimony = response.data;
	// 		}, 
	// 		function on_error(response){
	// 			console.log("ON ERROR: " + response.statusText);
	// 		}
	// 	);
	// }
	// $scope.fetch_a_candidate('58b6d81f2cbfd81b5472b6fc');

	
	$scope.list_blood_group=["A","B","AB","O"];
	$scope.list_colors=["very fair","fair","average","dark"];
	$scope.list_height_foot=["0","1","2","3","4","5","6","7"];
	$scope.list_height_inches=["0","1","2","3","4","5","6","7","8","9","10","11"];
	$scope.list_zodiac = [
		'capricorn',
		'aquarius',
		'pisces',
		'aries',
		'taurus',
		'gemini',
		'cancer',
		'leo',
		'virgo',
		'libra',
		'scorpio',
		'sagittarius'
	];



	$scope.page_meta_data = {
		"has_header" : true,
		"page_header_title" : "Create Candidate",	
		"breadcrumb_data" : [
			{
				"link" : "index.html",
				"label" : "Home",
				"class" : "",
				"is_active" : false
			},
			// {
			// 	"link" : "/",
			// 	"label" : "Account",
			// 	"class" : "",
			// 	"is_active" : false
			// },
			{
				"link" : "/",
				"label" : "Create Candidate",
				"class" : "active",
				"is_active" : true
			}
		]

	};
	
}

})();
