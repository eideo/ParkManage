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


  vm.vehicletypelist = [];

  vm.queryData = {
    page: 1,
    rows: 10
  };

  vm.getvehicletypelist = function(){
    // vm.queryData.page = $scope.paginationConf.currentPage;
    //     if (vm.queryData.page <= 0) {
    //         vm.queryData.page = 1;
    //     }

    $sails.get("/pcartype")
            .success(function (data) {
                vm.vehicletypelist = data;
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
    $scope.status = "新建";
    dialog.open({
      template : 'app/parking/views/settings/vehicleType/update.html',
      scope : $scope,//将scope传给test.html,以便显示地址详细信息
      preCloseCallback : function(data) {
        // if(confirm('Are you sure you want to close without saving your changes?')) {
        //   return true;
        // }
        // return false;
        if(data != null){
          vm.getvehicletypelist();
          dialog.notify('添加成功！', 'success');
        }
      }
    });
  }

  vm.clickToEdit = function (vehicletype) {
    $scope.vehicletype = vehicletype;
    $scope.status = "编辑";
    dialog.open({
      template : 'app/parking/views/settings/vehicleType/update.html',
      scope : $scope,//将scope传给test.html,以便显示地址详细信息
      preCloseCallback : function(data) {
        // if(confirm('Are you sure you want to close without saving your changes?')) {
        //   return true;
        // }
        // return false;
        if(data != null ){
          vm.getvehicletypelist();
          dialog.notify('编辑成功！', 'success');
        }
      }
    });
  }

  vm.clickToDelete = function (vehicletype) {
    dialog.confirmDialog('确认是否要删除[' + vehicletype.cartype + ']?').then(function (data) {
      if (data) {
        $sails.delete("/pcartype/" + vehicletype.id)
        .success(function (data) {
          vm.getvehicletypelist();
            dialog.notify('删除成功！', 'success');
        })
        .error(function (data) {
          alert('error');
        });
      }
    });
  }

  //初始化查询
  // vm.getvehicletypelist();
  // 通过$watch currentPage和itemperPage 当他们一变化的时候，重新获取数据条目
  $scope.$watch('paginationConf.currentPage', vm.getvehicletypelist);
}]);
