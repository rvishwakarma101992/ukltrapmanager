(function () {	'use strict';

angular
.module('inspinia')
.controller('controller_all_projects', ['$scope', 'service_ukl_traps_projects', 'DTOptionsBuilder', 'DTColumnDefBuilder','$rootScope','$state', controller_all_projects])
;
function controller_all_projects($scope, service_ukl_traps_projects, DTOptionsBuilder, DTColumnDefBuilder, $rootScope, $state){

	$scope.table_folded = true;

	$scope.fetch_all_projects = function(){

		service_ukl_traps_projects.fetch_full_list()
		.then(
			function on_success(response){
		    	console.log("ON SUCCESS: " + response.data);
		    	$scope.list_projects = response.data;
		    			// alert(JSON.stringify(response.data));


			}, 
			function on_error(response){
				console.log("ON ERROR: " + response.statusText);
			}
		);
	};
	$scope.fetch_all_projects();

	$scope.all_traps = function(coming_project_id){
		
		var project_id = coming_project_id;

		$rootScope.project_id = coming_project_id;

		// console.log(project_id);

		$state.go('company_pages.all_traps')

	}

	$scope.add_trap = function(coming_project_id){

		var project_id = coming_project_id;

		$rootScope.project_id = coming_project_id;

		console.log(project_id);

		$state.go('company_pages.add_trap')

		
	}


	// $scope.fetch_all_traps = function(coming_id){

	// 	service_ukl_traps.fetch_full_list(coming_id)
	// 	.then(
	// 		function on_success(response){
	// 	    	console.log("ON SUCCESS: " + response.data);
	// 	    	$scope.list_traps = response.data;
	// 	    			// alert(JSON.stringify(response.data));


	// 		}, 
	// 		function on_error(response){
	// 			console.log("ON ERROR: " + response.statusText);
	// 		}
	// 	);
	// };
	// $scope.fetch_all_traps();








	// $scope.rectify_trap = function (coming_object) {
	// 	// alert("in edit");
	// 	console.log(coming_object);
	// 	$rootScope.object_for_edit = coming_object;
	// 	$state.go("company_pages.rectify_trap");
	// }

	// $scope.view_rectification_list = function(coming_id){
	// 	service_ukl_traps.fetch_by_id(coming_id)
	// 		.then(
	// 			function on_success(response){
	// 		    	console.log("ON SUCCESS: " + response.data);
	// 		    	$scope.rectification_details = response.data;

	// 			}, 
	// 			function on_error(response){
	// 				console.log("ON ERROR: " + response.statusText);
	// 			}
	// 		);

	// }
 	



	$scope.delete_trap = function(coming_id){

		swal({
				title: "Are you sure?",
				text: "You want to delete this trap details!",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Yes, delete it!",
				closeOnConfirm: false
			

				},function(){

  				swal("Deleted!", "trap details has been deleted.", "success");

		service_ukl_traps_projects.delete_by_id(coming_id)
		.then(
			function on_success(response){
		    	console.log("ON SUCCESS: " + response.data);
		    	$scope.fetch_all_projects();
			}, 
			function on_error(response){
				console.log("ON ERROR: " + response.statusText);
			}
		);

		});
	};
	
	// $scope.rectify_trap = function (coming_object) {
	// 	// alert("in edit");
	// 	console.log(coming_object);
	// 	$rootScope.object_for_edit = coming_object;
	// 	$state.go("company_pages.rectify_trap");
	// }

	$scope.edit_project = function (coming_object){

				console.log(coming_object);


		$rootScope.project_for_edit = coming_object;
		$state.go("company_pages.edit_project");


	}


	$(function(){
		$('#audit_date').datepicker({
			format: 'dd-M-yyyy'
		});
	});


	$scope.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),						//tag_number
        DTColumnDefBuilder.newColumnDef(1),						//customer_name
        DTColumnDefBuilder.newColumnDef(2).withClass('none'),	//unit
        DTColumnDefBuilder.newColumnDef(3).withClass('none'),	//area
        DTColumnDefBuilder.newColumnDef(4).withClass('none'),	//make_of_trap
        DTColumnDefBuilder.newColumnDef(5),						//model_number
        DTColumnDefBuilder.newColumnDef(6),						//size_nb
        DTColumnDefBuilder.newColumnDef(7).withClass('none'),	//inlet_pressure_in_bar
        DTColumnDefBuilder.newColumnDef(8).withClass('none'),	//outlet_pressure_in_bar
        DTColumnDefBuilder.newColumnDef(9).withClass('none'),	//bypass_open_close
        DTColumnDefBuilder.newColumnDef(10),					//audit_date
        DTColumnDefBuilder.newColumnDef(11),					//type
        DTColumnDefBuilder.newColumnDef(12),					//connection
        DTColumnDefBuilder.newColumnDef(13).withClass('none'),	//in_temp_read
        DTColumnDefBuilder.newColumnDef(14).withClass('none'),	//out_temp_read
        DTColumnDefBuilder.newColumnDef(15).withClass('none'),	//bypass_exists
        DTColumnDefBuilder.newColumnDef(16),					//application
        DTColumnDefBuilder.newColumnDef(17)
    ];

	$scope.dtOptions = DTOptionsBuilder
        .newOptions()
        .withPaginationType('full_numbers')
        .withOption('responsive', true)
        // .withDisplayLength(20)
        // .withButtons([
        //     // 'columnsToggle',
        //     // 'colvis',
        //     'copy',
        //     'print',
        //     'excel',
        //     {
        //         text: 'Some button',
        //         key: '1',
        //         action: function (e, dt, node, config) {
        //             alert('Button activated');
        //         }
        //     }
        // ])
        ;

	$scope.page_meta_data = {
		"has_header" : true,
		"page_header_title" : "All Projects",	
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
				"label" : "All Projects",
				"class" : "active",
				"is_active" : true
			}
		]

	};
	
}

})();
