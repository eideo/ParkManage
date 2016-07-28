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

        data.id;
        data.parkingmgcode;
        data.mastnum;
        for(var i=1;i<=data.mastnum;i++){
          if(i<10){
            i='00'+i;
          }else if(10<i<100){
            i='0'+i;
          }
          vm.data = {
            parkingno:data.parkingmgcode+i,
            parkingmgid:data.id
          }
          $sails.post("/pparking", vm.data)
              .success(function(data){

              }).error(function(data) {

              });

        }


        // vm.jsondata = {
        //   parkingno:"",
        //   // pparkingstatus:"1",
        //   parkingmgid:""
        // };
        // vm.addseat = function(){
        //   if($scope.myForm.$valid){
        //     vm.jsondata.parkingno = $scope.carparking.parkingmgcode + $scope.parkingno;
        //     vm.jsondata.parkingmgid = $scope.carparking.id;
        //     $sails.post("/pparking", vm.jsondata)
        //     .success(function(data){
        //       $scope.closeThisDialog(data);
        //     }).error(function(data) {
        //       dialog.notify(data.msg, 'error');
        //     });
        //   }
        //   $scope.myForm.submitted = true;
        // }

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
