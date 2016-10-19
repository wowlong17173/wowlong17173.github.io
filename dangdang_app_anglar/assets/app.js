var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function($routeProvice){
    $routeProvice
        .when('/', {
            templateUrl: '..l/index.html',
            controller: ''
        })
        .when('/blog', {
            templateUrl: '..l/blog.html',
            controller: ''
        })
        .when('/book', {
            templateUrl: '..l/book.html',
            controller: 'bookController'
        })
        .when('/about_me', {
            templateUrl: '..tpl/about_me.html',
            controller: ''
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
