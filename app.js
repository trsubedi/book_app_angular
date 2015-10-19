var app = angular.module('bookApp', ['ngRoute','ngResource']);


app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: "views/books-index.html",
		controller: "BookCtrl"
	})
	.when('/new', {
		templateUrl: "views/books-create.html",
		controller: "BookCtrl"
	})

	$locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });
});
app.controller('ResourceController',function($scope, Book) {
    $scope.book = Book.get({ id: 1303 }, function(data) {
      console.log(data);
    }); // get() returns a single book

    $scope.allBooks = Book.query(function(data) {
      console.log(data);
    }); //query() returns all the books

    // add a new book
    $scope.newBook = {"title":"JavaScript: The Good Parts","author":"Douglas Crockford","image":"","release_date":"May 11, 2008"};

    Book.save($scope.newBook, function(data) {
      console.log(data);
    });

    // delete a book
    Book.delete({id:200});

});

app.controller('BookCtrl', function($scope, Book) {
	$scope.books = [];
	// $scope.books = Book.query();
	$scope.allBooks = Book.query(function(data) {
		$scope.books = data;
		console.log(data);
	})
	
})