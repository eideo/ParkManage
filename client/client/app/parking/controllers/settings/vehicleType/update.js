'use strict';

app.controller('vehicletypeupdate',['$scope','$http', 'dialog',function ($scope, $http, dialog) {
  var vm = this;

  vm.jsondata = {
    id:"",            //主键，新增时会自动生成
    cartypecode:"",   //类型编号
    cartype:"",       //车辆类型
    carload:0,        //载重
    carlen:0,         //车长
    remark:"",        //备注
    datasource:""     //数据来源   
  };

  vm.jsondata = $scope.vehicletype;

  vm.update = function(){
    if($scope.myForm.$valid){
      $http.post(lpt_host + '/zeus/ws/parking/pcartype/saveorupdate', vm.jsondata)
      .success(function(data){
        if(data.code == "200"){
          $scope.closeThisDialog(data);
        }
        else{
          dialog.notify(data.msg, 'error');
        }
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