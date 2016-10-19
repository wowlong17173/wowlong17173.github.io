app.factory('commonService',['$http',function($http){
  var service = {};
  service.getDate = function(type,callback){
    $http({
      url:'/dangdang_app_anglar/data/book_'+type+'.json',method:'get'
    })
    .then(function(res){
      console.log('获取数据成功...');
      callback(res);
    },function(err){
      console.dir(err);
    });
  };
  return service;
}]);
