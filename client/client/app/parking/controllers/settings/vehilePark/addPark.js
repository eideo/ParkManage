'use strict';

app.controller('vehileparkaddpark',['$scope','$http', 'dialog','$sails',function ($scope, $http, dialog,$sails) {
  var vm = this;

  vm.jsondata = {
    parkingmgcode:"",  //停车场编码
    parkname:"",          //停车场名称
    realnum:0,            //实际停车位数
    mastnum:0,            //最大车位数
    parkingsort:0        //停车场顺序
    // remark:"",         //备注
    // create_by:"admin",     //创建人
    // create_name:"admin",   //创建人名称
    // update_by:"admin",     //修改人
    // update_name:"admin"    //修改人名称
  };
  vm.addpark = function(){
    if($scope.myForm.$valid){
      $sails.post("/pparkingmg", vm.jsondata)
      .success(function(data){
        // alert("添加成功!");
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
