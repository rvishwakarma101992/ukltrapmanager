(function () {	'use strict';

angular
.module('inspinia')
//.constant('ENDPOINT', 'http://localhost:3000/api/')
.constant('ENDPOINT', 'https://salty-beach-69424.herokuapp.com/')
.service('service_vswf', ['$http', 'ENDPOINT', service_vswf])
;

function service_vswf($http, ENDPOINT){
	var service = this;
	
	var path = 'vswf_list/';
		
	function get_url(){
		return ENDPOINT + path;
	}
	
	function get_url_for_id(item_id){
		return get_url(path) + item_id;
	}


//	for fetch_full_list
	service.fetch_full_list = function(){
		return $http.get(get_url());
	};
	
			// service_vswf.fetch_full_list()
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
	service.create = function(item){
		// alert(JSON.stringify(item));
		return $http.post(get_url(), item);
	};

			// service_vswf.create(item)
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


//	for get_one_by_id	
	service.fetch_by_email_id = function(email){
		// return $http.get(get_url_for_id(item_id));
		return $http.get(ENDPOINT + "vswf_list/" + "get_by_email/" + email);
	};

			// service_vswf.fetch_by_id(item_id)
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
		// return $http.delete(get_url_for_id(item_id));

		return $http.delete(ENDPOINT + "vswf_list/" + item_id);
	};

			// service_vswf.delete_by_id(item_id)
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
		console.log("dsdsadsa"+item_id);
		console.log("adasdsadas"+item);;
		return $http.put(ENDPOINT + "vswf_list/" + "update_fully/" + item_id, item);
	};

			// service_vswf.update_by_id(item_id, item_object)
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
}


})();
