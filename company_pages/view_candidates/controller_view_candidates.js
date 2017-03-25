(function () {	'use strict';

angular
.module('inspinia')
.controller('controller_view_candidates', ['$scope','service_vswf', '$state', 'DTColumnDefBuilder','$rootScope', controller_view_candidates])
;
function controller_view_candidates($scope, service_vswf, $state, DTColumnDefBuilder,$rootScope){

	// $scope.table_folded = true;

	// $scope.fetch_all_traps = function(){

	// 	service_ukl_traps.fetch_full_list()
	// 	.then(
	// 		function on_success(response){
	// 	    	console.log("ON SUCCESS: " + response.data);
	// 	    	$scope.list_traps = response.data;
	// 		}, 
	// 		function on_error(response){
	// 			console.log("ON ERROR: " + response.statusText);
	// 		}
	// 	);
	// };
	// $scope.fetch_all_traps();

	// $scope.delete_trap = function(coming_id){
	// 	service_ukl_traps.delete_by_id(coming_id)
	// 	.then(
	// 		function on_success(response){
	// 	    	console.log("ON SUCCESS: " + response.data);
	// 	    	$scope.fetch_all_traps();
	// 		}, 
	// 		function on_error(response){
	// 			console.log("ON ERROR: " + response.statusText);
	// 		}
	// 	);
	// };

	$scope.fetch_data = function(){
		service_vswf.fetch_full_list()
		.then(
			function on_success(response){
		    	console.log("ON SUCCESS: " + response.data);
		    	$scope.list_all_candidates = response.data;
			}, 
			function on_error(response){
				console.log("ON ERROR: " + response.statusText);
			}
		);
	}

	$scope.fetch_data();

	$scope.edit_candidate = function (coming_email) {
		// alert("in edit");
		$rootScope.object_for_edit = coming_email;
		$state.go("company_pages.edit_candidate");
	}


	$scope.delete_candidate = function (coming_id) {
		// alert("in delete: " + coming_id);
		swal({
				title: "Are you sure?",
				text: "You want to delete Candidates details!",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Yes, delete it!",
				closeOnConfirm: false
			

				},function(){

  				swal("Deleted!", "Candidates details has been deleted.", "success");

				// alert("in delete: " + coming_id);
				service_vswf.delete_by_id(coming_id)
				.then(
						function on_success(response){
				    	console.log("ON SUCCESS: " + response.data);
				    	$scope.fetch_data();
					 }, 
						function on_error(response){
						console.log("ON ERROR: " + response.statusText);
					}
				);

		});
	}
	// $scope.dtColumnDefs = [
 //        DTColumnDefBuilder.newColumnDef(0),   //tag_number
 //        DTColumnDefBuilder.newColumnDef(1),						//customer_name
 //        DTColumnDefBuilder.newColumnDef(2),                     //unit
 //        DTColumnDefBuilder.newColumnDef(3),	//area
 //        DTColumnDefBuilder.newColumnDef(4),	//make_of_trap
 //        DTColumnDefBuilder.newColumnDef(5),						//model_number
 //        DTColumnDefBuilder.newColumnDef(6),						//size_nb
 //        DTColumnDefBuilder.newColumnDef(7),	//inlet_pressure_in_bar
 //        DTColumnDefBuilder.newColumnDef(8),	//outlet_pressure_in_bar
 //        DTColumnDefBuilder.newColumnDef(9),	//bypass_open_close
 //        DTColumnDefBuilder.newColumnDef(10),					//audit_date
 //        DTColumnDefBuilder.newColumnDef(11),					//type
 //        DTColumnDefBuilder.newColumnDef(12),					//connection
 //        DTColumnDefBuilder.newColumnDef(13),	//in_temp_read
 //        DTColumnDefBuilder.newColumnDef(14),	//out_temp_read
 //        DTColumnDefBuilder.newColumnDef(15),	//bypass_exists
 //        DTColumnDefBuilder.newColumnDef(16),					//application
 //        DTColumnDefBuilder.newColumnDef(17)
 //    ];

	// $scope.dtOptions = DTOptionsBuilder
 //        .newOptions()
 //        .withPaginationType('full_numbers')
 //        .withOption('responsive', true)
 //        .withDisplayLength(20)
 //        .withButtons([
 //            // 'columnsToggle',
 //            // 'colvis',
 //           // 'copy',
 //            //'print',
 //           // 'excel',
 //            // {
 //            //     text: 'Some button',
 //            //     key: '1',
 //            //     action: function (e, dt, node, config) {
 //            //         alert('Button activated');
 //            //     }
 //            // }
 //        ])
 //        ;


	$scope.page_meta_data = {
		"has_header" : true,
		"page_header_title" : "All Candidates",	
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
				"label" : "All Candidates",
				"class" : "active",
				"is_active" : true
			}
		]

	};
	
}

})();
