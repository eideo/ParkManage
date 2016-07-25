'use strict';

app.controller('vehileparkaddseat',['$scope','$http', 'dialog','$sails',function ($scope, $http, dialog,$sails) {
  var vm = this;

  vm.jsondata = {
    parkingno:"",
    // pparkingstatus:"1",
    parkingmgid:""
  };
  vm.addseat = function(){
    if($scope.myForm.$valid){
      vm.jsondata.parkingno = $scope.carparking.parkingmgcode + $scope.parkingno;
      vm.jsondata.parkingmgid = $scope.carparking.id;
      $sails.post("/pparking", vm.jsondata)
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
