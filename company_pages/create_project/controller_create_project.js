(function () {	'use strict';

angular
.module('inspinia')
.controller('controller_create_project', ['$scope', 'service_ukl_traps','$state', controller_create_project])
;
function controller_create_project($scope, service_ukl_traps, $state){

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

	

	$scope.submit_form = function(coming_object){
		alert(JSON.stringify(coming_object));

		// var M = coming_object.outlet_pressure_in_bar;
		// var L = coming_object.bypass_open_close;
		// var N = coming_object.out_temp_read;
		// var op = coming_object.in_temp_read;
		// var status;


		// console.log( M +""+ L +""+ N +""+ op);

		
		

		// if(L == "Open")
		// {
		// 	if(op == "")
		// 	{
		// 		status = "Null";
		// 	}
			

		// 			else if(N >= 77 && N <= 103)
		// 			{
		// 				 status = "Trap Ok";
		// 			}
		// 			else if(N >= 103 && N <= 110)
		// 			{
		// 				status = "PARTIAL LEAK";
		// 			}
		// 			else if(N >= 110.1 && N <= 124.9)
		// 			{
		// 				status = "MEDIUM PASSING";
		// 			}	
		// 			else if(N >= 125)
		// 			{
		// 				status = "HEAVY PASSING";
		// 			}
		// 			else if(N >= 70 && N <=77)
		// 			{
		// 				status = "PARTIAL CHOCKED";
		// 			}
		// 			else
		// 			{
		// 				status = "CHOCKED";
		// 			}

			
		// if(M == 1)
		// 	{
		// 		if(N >= 96 && N <= 120)
		// 		{
		// 			status = "TRAK OK";
		// 		}	
		// 		else if(N >= 120.1 && 127)
		// 		{
		// 			status = "PARTIAL PASSING"
		// 		}
		// 		else if(N >= 127.1 && N <= 135)
		// 		{
		// 			status = "MEDIUM PASS";
		// 		}
		// 		else if(N >= 136 )
		// 		{
		// 			status = "HEAVY PASSING";
		// 		}
		// 		else if(N >= 99 && N <= 95)
		// 		{
		// 			status = "PARTIAL CHOCKED";
		// 		}
		// 		else
		// 		{
		// 			status= "CHOCKED";
		// 		}

		// 		if(M == 2)

		// 			{
		// 				if(N >= 97 && N <= 139.2)
		// 				{
		// 					status = "TRAK OK";
		// 				}
		// 				else if(N >= 133 && N <= 140)
		// 				{
		// 					status = "PARTIAL PASS";
		// 				}
		// 				else if(N >= 140.1 && N <= 145)
		// 				{
		// 					status = "MEDIUM PASS";
		// 				}
		// 				else if(N >= 145.1 )
		// 				{
		// 					status = "HEAVY PASSING";
		// 				}
		// 				else if(N >= 90 && N <= 97)
		// 				{
		// 					status = "PARTIAL CHOCKED";
		// 				}
		// 				else 
		// 				{
		// 					status = "CHOCKED";
		// 				}


		// 				if(M == 3)
		// 				{
		// 					if(N >= 98 && N <= 142.9)
		// 					{
		// 						status = "TRAK OK";
		// 					}
		// 					else if(N >= 143 && N <= 148)
		// 					{
		// 						status = "PARTIAL PASS";
		// 					}
		// 					else if(N >= 148.1 && N <= 150)
		// 					{
		// 						status = "MEDIUM PASS";
		// 					}
		// 					else if(N >= 150.1 )
		// 					{
		// 						status = "HEAVY PASSING";
		// 					}
		// 					else if(N >= 90 && N <= 97)
		// 					{
		// 						status = "PARTIAL CHOCKED";
		// 					}
		// 					else 
		// 					{
		// 						status = "CHOCKED";

		// 					}	


		// 						if(M==4)
		// 						{
		// 							if(N >= 99 && N <= 151.9)
		// 							{
		// 								status = "TRAK OK";
		// 							}
		// 							else if(N >= 152 && N <= 155)
		// 							{
		// 								status = "PARTIAL PASS";
		// 							}
		// 							else if(N >= 155.1 && N <= 160)
		// 							{
		// 								status = "MEDIUM PASS";
		// 							}
		// 							else if(N >= 160.1 )
		// 							{
		// 								status = "HEAVY PASSING";
		// 							}
		// 							else if(N >= 92 && N <= 100)
		// 							{
		// 								status = "PARTIAL CHOCKED";
		// 							}
		// 							else 
		// 							{
		// 								status = "CHOCKED";
		// 							}

		// 								if(M == 5)
		// 								{
		// 									if(N >= 100 && N <= 159)
		// 									{
		// 										status = "TRAK OK";
		// 									}
		// 									else if(N >= 159.1 && N <= 165)
		// 									{
		// 										status = "PARTIAL PASS";
		// 									}
		// 									else if(N >= 165.1 && N <= 170)
		// 									{
		// 										status = "MEDIUM PASS";
		// 									}
		// 									else if(N >= 170.1 )
		// 									{
		// 										status = "HEAVY PASSING";
		// 									}
		// 									else if(N >= 90 && N <= 95)
		// 									{
		// 										status = "PARTIAL CHOCKED";
		// 									}
		// 									else 
		// 									{
		// 										status = "CHOCKED";
		// 									}	
		// 								}
		// 								else
		// 								{
		// 									status = "Check Pressure"
		// 								}
		// 						}
		// 				}

		// 			}

		// 	}



		// }	
		
		// 	console.log(status);

		// 	var my_object = {
				
		// 	"customer_name": coming_object.customer_name,
		// 	"unit": coming_object.unit,
		// 	"tag_number": coming_object.tag_number,
		// 	"area": coming_object.area,
		// 	"make_of_trap": coming_object.make_of_trap,
		// 	"model_number": coming_object.model_number,
		// 	"size_nb": coming_object.size_nb,
		// 	"inlet_pressure_in_bar": coming_object.inlet_pressure_in_bar,
		// 	"outlet_pressure_in_bar": coming_object.outlet_pressure_in_bar,
		// 	"bypass_open_close": coming_object.bypass_open_close,
		// 	"audit_date": coming_object.audit_date,
		// 	"type": coming_object.type,
		// 	"connection": coming_object.connection,
		// 	"in_temp_read": coming_object.in_temp_read,
		// 	"out_temp_read": coming_object.out_temp_read,
		// 	"bypass_exists": coming_object.bypass_exists,
		// 	"application": coming_object.application,
		// 	"status": status
		
		// 	};

		
		

		service_ukl_traps.create(coming_object)
		.then(
			function on_success(response){
				swal({
					title: "Success!", 
					text: "Record created successfully!", 
					type: "success"
				});
				$state.go("company_pages.all_traps");
		    	console.log("ON SUCCESS: " + response.data);

		    	$scope.reset_form();
		    	$state.go("company_pages.all_projects");

			}, 
			function on_error(response){
				console.log("ON ERROR: " + response.statusText);
			}
		);
	};
	// $scope.submit_form();


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
