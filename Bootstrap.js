(function(){

	var app = angular.module('customerOrderDetails', ['ui.bootstrap']);

	app.factory('Data', function(){
		return {
			clientDetails: [
			{
				personalInfo: {
					firstName: 'John',
					lastName: 'Doe',
					address: 'Chennai',
					state: 'Tamil Nadu',
					city: 'Chennai',
					pincode: 600097,
					phone: 442579652,
					email: 'Sivarama92@gmail.com'
				},
				orderDetails: [
				{
					bookCode: 'BK01',
					nameoftheBook: 'Harry Potter and the...',
					quantity: 10
				},
				{
					bookCode: 'BK02',
					nameoftheBook: 'Do Androids Dream of Electric Sheep?',
					quantity: 5
				},
				{
					bookCode: 'BK03',
					nameoftheBook: 'The Hitchhiker\'s Guide to the Galaxy (Hitchhiker\'s Guide to the Galaxy, #1)',
					Quantity: 3
				},
				{
					bookCode: 'BK04',
					nameoftheBook: 'I Was Told There\'d Be Cake ',
					quantity: 2
				}
				]
			},
			{
				personalInfo: {
					firstName: 'Sathish',
					lastName: 'Prabahkar',
					address: 'Vellore',
					state: 'Tamil Nadu',
					city: 'Chennai',
					pincode: 29414,
					phone: 442579652,
					email: 'Sathish@gmail.com'
				},
				orderDetails: [
				{
					bookCode: 'BK05',
					nameoftheBook: 'The Curious Incident of the Dog in the Night-Time',
					quantity: 5
				},
				{
					bookCode: 'BK06',
					nameoftheBook: 'The Hollow Chocolate Bunnies of the Apocalypse',
					quantity: 5
				},
				{
					bookCode: 'BK07',
					nameoftheBook: 'To Kill a Mockingbird ',
					quantity: 5
				},
				{
					bookCode: 'BK08',
					nameoftheBook: '\tThe Man Without Qualities ',
					quantity: 5
				}
				]
			},
			{
				personalInfo: {
					firstName: 'Pown',
					lastName: 'Kumar',
					address: 'Chennai',
					state: 'Tamil Nadu',
					city: 'Chennai',
					pincode: 600097,
					phone: 54561514,
					email: 'pownkumar@gmail.com'
				},
				orderDetails: [
				{
					bookCode: 'BK01',
					nameoftheBook: 'Table 21 ',
					quantity: 10
				},
				{
					bookCode: 'BK02',
					nameoftheBook: 'How to Talk About Books You Haven not Read',
					quantity: 5
				},
				{
					bookCode: 'BK03',
					nameoftheBook: 'Tinker, Tailor, Soldier, Spy',
					Quantity: 3
				},
				{
					bookCode: 'BK04',
					nameoftheBook: 'The Importance of Being Earnest',
					quantity: 2
				}
				]
			}
			]
		};
	});

	app.controller('customerItemsController', function( $scope, $uibModal, Data){
// var $scope =this;
// 		$scope.customerInfoDetails=Data;
		// $scope.items= searchBoxValue;
		$scope.print = function() {
		console.log($scope.searchBoxValue);	// body...
		}
		

		$scope.open = function() {

			var customerHelps = $uibModal.open({
				templateUrl: 'C:/Development/Angular_Learning-master/Template/Pop-up.html',
				controller: 'customerHelpsController',
				resolve: {
					
					searchValue: function () {
						return $scope.items;
					}
				}
			});
		};
	});

	app.controller('customerHelpsController', function( $uibModalInstance, items ){


	});


})();