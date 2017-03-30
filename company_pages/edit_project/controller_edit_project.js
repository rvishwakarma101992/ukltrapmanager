(function () {	'use strict';

angular
.module('inspinia')
.controller('controller_edit_project', ['$scope', 'service_ukl_traps_projects','$state', controller_edit_project])
;
function controller_edit_project($scope, service_ukl_traps_projects, $state){

	$scope.reset_form = function(){
		$scope.new_trap = {
			"tag_number": "",
			"customer_name": "",
			"unit": "",
			"area": "",
			"make_of_trap": "",
			"model_number": "",
			"size_nb": "",
			"inlet_pressure_in_bar": "",
			"outlet_pressure_in_bar": "",
			"bypass_open_close": "",
			"audit_date": "",
			"type": "",
			"connection": "",
			"in_temp_read": "",
			"out_temp_read": "",
			"bypass_exists": "",
			"application": ""
		};
	};
	$scope.reset_form();

	$scope.update_project = function(coming_id,coming_object){
		service_ukl_traps_projects.update_by_id(coming_id, coming_object)
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
			    	$state.go('company_pages.all_projects');
				}, 
				function on_error(response){
					console.log(response);
					console.log("ON ERROR: " + response.statusText);
				}
			);
	}


	// $(function(){
	// 	$('#audit_date').datepicker({
	// 		format: 'dd-M-yyyy',
	// 		autoclose: true,
	// 		maxDate: '+0d'
			
	// 	});
	// });
	

	$scope.page_meta_data = {
		"has_header" : true,
		"page_header_title" : "Create Project",	
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
				"label" : "Create Project",
				"class" : "active",
				"is_active" : true
			}
		]

	};
	
}

})();
