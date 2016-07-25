'use strict';

app.controller('vehicletypeupdate',['$scope','$http', 'dialog','$sails',function ($scope, $http, dialog,$sails) {
  var vm = this;

  vm.jsondata = {
    id:"",            //主键，新增时会自动生成
    cartypecode:"",   //类型编号
    cartype:"",       //车辆类型
    remark:""        //备注
  };

  vm.jsondata = $scope.vehicletype;
  vm.status = $scope.status;


  vm.update = function(){
    if($scope.myForm.$valid){

      if($scope.vehicletype){
        $sails.put("/pcartype/"+vm.jsondata.id,vm.jsondata)
                .success(function (data) {
                  if(data){
                    $scope.closeThisDialog(data);
                  }
                  else{
                    dialog.notify(data.msg, 'error');
                  }
                })
                .error(function (data) {
                  dialog.notify(data.msg, 'error');
                });
      }else{
        $sails.post("/pcartype",vm.jsondata)
                .success(function (data) {
                  if(data){
                    $scope.closeThisDialog(data);
                  }
                  else{
                    dialog.notify(data.msg, 'error');
                  }
                })
                .error(function (data) {
                  dialog.notify(data.msg, 'error');
                });
      }


    }
    $scope.myForm.submitted = true;
  }

  vm.cancel = function(){
    $scope.closeThisDialog(null);
  }
}]);
