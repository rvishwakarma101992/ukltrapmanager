(function () {	'use strict';

angular
.module('inspinia')
.controller('controller_rectification_trap', ['$scope', 'service_ukl_traps','$rootScope','$state', controller_rectification_trap])
;
function controller_rectification_trap($scope, service_ukl_traps, $rootScope, $state){

	$scope.object_for_edit2 = $rootScope.object_for_edit1;


	$scope.reset_form = function(){
		$scope.new_trap = {};
	};
	$scope.reset_form();

	$scope.submit_form = function(coming_object){
		// alert(JSON.stringify(coming_object));
	};

	$scope.update_trap = function(coming_id,coming_object){

			service_ukl_traps.update_by_id(coming_id, coming_object)
			.then(
				function on_success(response){
					swal({
						title: "Success!", 
						text: "Record updated successfully!", 
						type: "success"
					});
					console.log(coming_id +""+ coming_object);
					console.log(response);
			    	console.log("ON SUCCESS: " + response.data);
			    	$state.go('company_pages.all_traps');
				}, 
				function on_error(response){
					console.log(response);
					console.log("ON ERROR: " + response.statusText);
				}
			);
	}


	$(function(){
		$('#audit_date1').datepicker({
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



	

	$scope.page_meta_data = {
		"has_header" : true,
		"page_header_title" : "Edit Trap",	
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
				"label" : "Edit Trap",
				"class" : "active",
				"is_active" : true
			}
		]

	};
	
}

})();
