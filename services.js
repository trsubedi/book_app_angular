angular.module('bookApp').service('Book', function($resource) {
  return $resource('http://daretodiscover.herokuapp.com/books/:id');
});