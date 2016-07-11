'use strict';

app.controller('parkingadd',['$scope','$http', 'dialog',function ($scope, $http, dialog) {
  $scope.parkingsave = function(){
    var jsondata = {
      isbn: "1", 
      title: "2",
      year: "2015"
    };
    $http.post('/api/parkingadd', jsondata)
    .success(function(data){
      $scope.closeThisDialog(data);
    }).error(function(data) {
      dialog.notify(data.msg, 'error');
    });
  }

  $scope.Cancel = function(){
    $scope.closeThisDialog(null);
  }
}]);