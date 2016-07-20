'use strict';

var app=angular.module('parkingApp');

app.controller('vehicletypelist',['$scope','$http','dialog','$sails',function ($scope, $http, dialog,$sails) {
  var vm = this;


  // 配置分页基本参数
    $scope.paginationConf = {
        currentPage: 1,
        itemsPerPage: 10,
        //以下实际应用中可注释
        totalItems: 0
    };


  $scope.vehicletypelist = [];

  vm.queryData = {
    page: 1,
    rows: 10
  };

  $scope.getvehicletypelist = function(){
    // vm.queryData.page = $scope.paginationConf.currentPage;
    //     if (vm.queryData.page <= 0) {
    //         vm.queryData.page = 1;
    //     }

    $sails.get("/pcartype")
            .success(function (data) {
                $scope.vehicletypelist = data.body;
            })
            .error(function (data) {
              alert('error');
            });

    // if($scope.paginationConf.currentPage > 0){
    //   $http.get('/pcartype')
    //         .then(function (res) {
    //           vm.vehicletypelist = res.data;
    //         });
    // }
  }

  vm.querylist = function(){
    $scope.paginationConf.currentPage =1;
  }

  vm.clickToAdd = function () {
    $scope.vehicletype = null;
    dialog.open({
      template : 'app/parking/views/settings/vehicleType/update.html',
      scope : $scope,//将scope传给test.html,以便显示地址详细信息
      preCloseCallback : function(data) {
        // if(confirm('Are you sure you want to close without saving your changes?')) {
        //   return true;
        // }
        // return false;
        if(data != null && data.code=="200"){
          vm.getvehicletypelist();
          dialog.notify('添加成功！', 'success');
        }
      }
    });
  }

  vm.clickToEdit = function (vehicletype) {
    $scope.vehicletype = vehicletype;
    dialog.open({
      template : 'app/parking/views/settings/vehicleType/update.html',
      scope : $scope,//将scope传给test.html,以便显示地址详细信息
      preCloseCallback : function(data) {
        // if(confirm('Are you sure you want to close without saving your changes?')) {
        //   return true;
        // }
        // return false;
        if(data != null && data.code=="200"){
          vm.getvehicletypelist();
          dialog.notify('编辑成功！', 'success');
        }
      }
    });
  }

  vm.clickToDelete = function (vehicletype) {
    dialog.confirmDialog('确认是否要删除[' + vehicletype.cartype + ']?').then(function (data) {
      if (data) {
        $http.delete(lpt_host + '/zeus/ws/parking/pcartype/delete/' + vehicletype.id)
        .success(function(data){
          if(data != null && data.code=="200"){
            vm.getvehicletypelist();
            dialog.notify('删除成功！', 'success');
          }
          else{
            dialog.notify(response.data.msg, 'error');
          }
        });
      }
    });
  }

  //初始化查询
  // vm.getvehicletypelist();
  // 通过$watch currentPage和itemperPage 当他们一变化的时候，重新获取数据条目
  $scope.$watch('paginationConf.currentPage', $scope.getvehicletypelist);
}]);
