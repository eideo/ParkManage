'use strict';

app.controller('vehileparkaddseat',['$scope','$http', 'dialog',function ($scope, $http, dialog) {
  var vm = this;

  vm.jsondata = {
    parkingno:"",
    // pparkingstatus:"1",
    parkingmgid:"",
    datasource:"1"
  };
  vm.addseat = function(){
    if($scope.myForm.$valid){
      vm.jsondata.parkingno = $scope.carparking.parkingmgcode + $scope.parkingno;
      vm.jsondata.parkingmgid = $scope.carparking.id;
      $http.post(lpt_host + '/zeus/ws/parking/pparking/saveorupdate', vm.jsondata)
      .success(function(data){
        $scope.closeThisDialog(data);
      }).error(function(data) {
        dialog.notify(data.msg, 'error');
      });
    }
    $scope.myForm.submitted = true;
  }

  vm.cancel = function(){
    $scope.closeThisDialog(null);
  }
}]);
