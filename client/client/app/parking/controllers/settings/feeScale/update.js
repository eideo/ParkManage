'use strict';

app.controller('feescaleupdate',['$scope','$http', 'dialog','$sails',function ($scope, $http, dialog,$sails) {
  var vm = this;

  vm.jsondata = {
    id:"",            //主键，新增时会自动生成
    cartypecode:"",   //车辆类型编码
    cartypename:"",   //车辆类型名称
    parkdate1:"",     //收费时间
    price1:0          //收费金额
  };


  vm.jsondata = $scope.feescale;
  vm.status = $scope.status;

  //查询车辆类型
  vm.getvehicletypelist = function(){
    $sails.get('/pcartype').success(function(data) {
      if(data)
      {
        $scope.cartype = data;
      }
    });
  }

  //新增OR修改
  vm.update = function(){
    // vm.jsondata.cartypecode = $scope.cartype.cartypecode;
    for(var i=0; i< $scope.cartype.length; i++){
      if($scope.cartype[i].cartypecode == vm.jsondata.cartypecode) {
        vm.jsondata.cartypename = $scope.cartype[i].cartype;
        break;
      }
    }
    // vm.jsondata.cartypename = $scope.cartype.filter(vm.jsondata.cartypecode));
    if($scope.myForm.$valid){
      if($scope.feescale){
        $sails.put('/pcharges/'+vm.jsondata.id, vm.jsondata)
        .success(function(data){
          if(data){
            $scope.closeThisDialog(data);
          }
          else{
            dialog.notify(data.msg, 'error');
          }
        }).error(function(data) {
          dialog.notify(data.msg, 'error');
        });
    }else{
      $sails.post('/pcharges', vm.jsondata)
      .success(function(data){
        if(data){
          $scope.closeThisDialog(data);
        }
        else{
          dialog.notify(data.msg, 'error');
        }
      }).error(function(data) {
        dialog.notify(data.msg, 'error');
      });
    }
    }
    $scope.myForm.submitted = true;
  }

  vm.cancel = function(){
    $scope.closeThisDialog(null);
  }

  vm.getvehicletypelist();
}]);
