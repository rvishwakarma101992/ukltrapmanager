(function () {	'use strict';

angular
.module('inspinia')
.controller('controller_edit_candidate', ['$scope', '$state', 'service_vswf', '$rootScope', controller_edit_candidate])
;
function controller_edit_candidate($scope, $state, service_vswf, $rootScope){
	if($rootScope.object_for_edit == undefined){
		alert("No candidate for update");
		$state.go('company_pages.list_candidates');
	}
	console.log(JSON.stringify($rootScope.email_for_edit));

	$(function(){
		$('#birth_date').datepicker({
			format: 'dd-M-yyyy'
		});
	});

	$(function(){
		$('#birth_time').timepicker();
	});

	$scope.matrimony = $rootScope.object_for_edit;
	// $scope.matrimony.date_of_birth = new Date($rootScope.object_for_edit.date_of_birth);
	// $scope.matrimony.time_of_birth = new Date($rootScope.object_for_edit.time_of_birth);

	$scope.update_candidate_details = function(coming_id, coming_object){
		
		service_vswf.update_by_id(coming_id, coming_object)
			.then(
				function on_success(response){
					// swal({
					// 	title: "Success!", 
					// 	text: "Record updated successfully!", 
					// 	type: "success"
					// });
					console.log(response);
			    	console.log("ON SUCCESS: " + response.data);
			    	$state.go('company_pages.view_candidates');
				}, 
				function on_error(response){
					console.log(response);
					console.log("ON ERROR: " + response.statusText);
				}
			);
	}

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
		"page_header_title" : "Edit Candidate",	
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
				"label" : "Edit Candidate",
				"class" : "active",
				"is_active" : true
			}
		]

	};
	
}

})();
