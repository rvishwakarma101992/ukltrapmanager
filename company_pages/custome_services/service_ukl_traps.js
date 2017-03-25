(function () {	'use strict';

angular
.module('inspinia')
// .constant('ENDPOINT_UKL_TRAPS', 'https://mod2.herokuapp.com/')
// .constant('ENDPOINT_UKL_TRAPS', 'https://salty-beach-69424.herokuapp.com/')
.constant('ENDPOINT_UKL_TRAPS', 'http://localhost:5000/')
.service('service_ukl_traps', ['$http', 'ENDPOINT_UKL_TRAPS', service_ukl_traps])
;

function service_ukl_traps($http, ENDPOINT_UKL_TRAPS){
	var service = this;
	
	var path = 'ukl_traps/';
		
	function get_url(){
		return ENDPOINT_UKL_TRAPS + path;
	}
	
	function get_url_for_id(item_id){
		return get_url(path) + item_id;
	}


//	for fetch_full_list
	service.fetch_full_list = function(){
		return $http.get(get_url());
	};
	
			// service_ukl_traps.fetch_full_list()
			// .then(
			// 	function on_success(response){
			//     	console.log("ON SUCCESS: " + response.data);
			//     	$scope.ARRAY_to_store_in = response.data;
			// 	}, 
			// 	function on_error(response){
			// 		console.log("ON ERROR: " + response.statusText);
			// 	}
			// );
	

//	for create
	service.create = function(item,item_status){
		// alert(JSON.stringify(item));
		return $http.post(get_url(), item);
	};

			// service_ukl_traps.create(item)
			// .then(
			// 	function on_success(response){
			// 		swal({
			// 			title: "Success!", 
			// 			text: "Record created successfully!", 
			// 			type: "success"
			// 		});
			//     	console.log("ON SUCCESS: " + response.data);
			// 	}, 
			// 	function on_error(response){
			// 		console.log("ON ERROR: " + response.statusText);
			// 	}
			// );


	service.fetch_by_tag_number = function(tag_number){
		console.log("Inside HERE fetch_by_tag_number");
		return $http.get(get_url() + "by_tag_number/" + tag_number);
	};
	
//	for get_one_by_id	
	service.fetch_by_id = function(item_id){
		// return $http.get(get_url() + "by_id/" + item_id);
		// return $http.get(get_url_for_id(item_id));
				return $http.get(ENDPOINT_UKL_TRAPS + "ukl_traps/" + "get_by_id/" + item_id);

	};

			// service_ukl_traps.fetch_by_id(item_id)
			// .then(
			// 	function on_success(response){
			//     	console.log("ON SUCCESS: " + response.data);
			//     	$scope.object_to_store_in = response.data;
			// 	}, 
			// 	function on_error(response){
			// 		console.log("ON ERROR: " + response.statusText);
			// 	}
			// );


//	for delete_by_id
	service.delete_by_id = function(item_id){
		return $http.delete(get_url_for_id(item_id));
	};

			// service_ukl_traps.delete_by_id(item_id)
			// .then(
			// 	function on_success(response){
			//     	console.log("ON SUCCESS: " + response.data);
			// 	}, 
			// 	function on_error(response){
			// 		console.log("ON ERROR: " + response.statusText);
			// 	}
			// );

//	for update_by_id
	service.update_by_id = function(item_id, item){
		// return $http.put(get_url_for_id(item_id), item);
		return $http.put(ENDPOINT_UKL_TRAPS + "ukl_traps/" + "update_fully/" + item_id, item);
	};

			// service_ukl_traps.update_by_id(item_id, item_object)
			// .then(
			// 	function on_success(response){
			// 		swal({
			// 			title: "Success!", 
			// 			text: "Record updated successfully!", 
			// 			type: "success"
			// 		});
			//     	console.log("ON SUCCESS: " + response.data);
			// 	}, 
			// 	function on_error(response){
			// 		console.log("ON ERROR: " + response.statusText);
			// 	}
			// );

	service.update_rectification = function(item_id, item){
		return $http.put(ENDPOINT_UKL_TRAPS + "ukl_traps/" + "update_rectification/" + item_id, item);
	};



}


})();
