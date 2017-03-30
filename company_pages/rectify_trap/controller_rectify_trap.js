(function () {	'use strict';

angular
.module('inspinia')
.controller('controller_rectify_trap', ['$scope', 'service_ukl_traps','$rootScope','$state', controller_rectify_trap])
;
function controller_rectify_trap($scope, service_ukl_traps, $rootScope, $state){

	// $scope.object_for_edit2 = $rootScope.object_for_edit;


	$scope.reset_form = function(){
		$scope.object_for_edit2 = {};
	};
	$scope.reset_form();

	$scope.submit_form = function(coming_object){
		// alert(JSON.stringify(coming_object));
	};

	$scope.update_rectification = function(coming_id,coming_object){
				// alert(JSON.stringify(coming_object));


			service_ukl_traps.update_rectification(coming_id, coming_object)
			.then(
				function on_success(response){
					swal({
						title: "Success!", 
						text: "Record updated successfully!", 
						type: "success"
					});
					console.log(response);
			    	console.log("ON SUCCESS: " + response.data);
			  //   	$scope.form_add_trap.$setUntouched();
					// $scope.form_add_trap.$setPristine();
			    	$state.go('company_pages.all_traps');
				}, 
				function on_error(response){
					console.log(response);
					console.log("ON ERROR: " + response.statusText);
				}
			);
	}


	$(function(){
		$('#rectification_date').datepicker({
			format: 'dd-M-yyyy',
			autoclose: true
		});
	});

	
	// $scope.submit_form();

	// $scope.get_all_orders = function(){

	// 	service_ukl_traps.fetch_full_list()
	// 	.then(
	// 		function on_success(response){
	// 	    	$scope.new_trap = response.data;
	// 		}, 
	// 		function on_error(response){
	// 			console.log(response.statusText);
	// 		}
	// 	);
	// };

	// $scope.get_trap_by_tag_number = function(coming_tag_number){

	// 	service_ukl_traps.fetch_by_tag_number(coming_tag_number)
	// 	.then(
	// 		function on_success(response){
	// 			if(response.data == null){
	// 				swal({
	// 					title: "Error!", 
	// 					text: "There is no Tag, by this tag number!", 
	// 					type: "error"
	// 				});
	// 				$scope.new_trap = {};
	// 			}else{
	// 	    		$scope.new_trap = response.data;
	// 			}
	// 		}, 
	// 		function on_error(response){
	// 			console.log(response.statusText);
	// 		}
	// 	);
	// };
	// $scope.get_trap_by_tag_number(5);

	$scope.delete_order = function(coming_id){

		service_ukl_traps.delete_by_id(coming_id)
		.then(
			function on_success(response){
		    	console.log(response.data);
		    	$scope.get_all_orders();
			}, 
			function on_error(response){
				console.log(response.statusText);
			}
		);
	};

	

	$scope.page_meta_data = {
		"has_header" : true,
		"page_header_title" : "Rectify Trap",	
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
				"label" : "Rectify Trap",
				"class" : "active",
				"is_active" : true
			}
		]

	};
	
}

})();
