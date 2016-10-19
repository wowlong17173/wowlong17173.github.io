app.controller('mainController',['$scope','commonService',function($scope,c_service){
  c_service.getDate('ertong',function(res){
    console.dir(res);
  });
}]);
