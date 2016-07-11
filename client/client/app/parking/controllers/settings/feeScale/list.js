'use strict';

var app=angular.module('parkingApp');

app.controller('feescalelist',['$scope','$http','dialog',function ($scope, $http, dialog) {
  var vm = this;

  // 配置分页基本参数
  $scope.paginationConf = {
    currentPage: 1,
    itemsPerPage: 10,
    //以下实际应用中可注释
    totalItems:0
  };

  vm.feescalelist = [];

  vm.querydata = {
    page: 1, 
    rows: 10
  };

  vm.getfeescalelist = function(){
    if($scope.paginationConf.currentPage > 0){
      vm.querydata.page= $scope.paginationConf.currentPage;
      vm.querydata.rows= $scope.paginationConf.itemsPerPage;
      $http.get(lpt_host + '/zeus/ws/parking/pcharges/getlist',{ params: vm.querydata}).success(function(data) {
        if(data.code="200")
        {
          vm.feescalelist = data.body.data;
          // 变更分页的总数
          $scope.paginationConf.totalItems = data.body.totalRecords;
          // // 变更产品条目
          // $scope.products = data.items;
        }
      });
    }
  }

  vm.querylist = function(){
    $scope.paginationConf.currentPage =1;
  }

  vm.clickToAdd = function () {
    $scope.feescale = null;
    dialog.open({ 
      template : 'app/parking/views/settings/feeScale/update.html',
      scope : $scope,//将scope传给test.html,以便显示地址详细信息  
      preCloseCallback : function(data) {
        // if(confirm('Are you sure you want to close without saving your changes?')) {
        //   return true;
        // }
        // return false;
        if(data != null && data.code=="200"){
          vm.getfeescalelist();
          dialog.notify('添加成功！', 'success');
        }
      }
    });
  }

  vm.clickToEdit = function (feescale) {
    $scope.feescale = feescale;
    dialog.open({ 
      template : 'app/parking/views/settings/feeScale/update.html',
      scope : $scope,//将scope传给test.html,以便显示地址详细信息  
      preCloseCallback : function(data) {
        // if(confirm('Are you sure you want to close without saving your changes?')) {
        //   return true;
        // }
        // return false;
        if(data != null && data.code=="200"){
          vm.getfeescalelist();
          dialog.notify('编辑成功！', 'success');
        }
      }
    });
  }

  vm.clickToDelete = function (feescale) {
    dialog.confirmDialog('确认是否要删除[' + feescale.cartypename + ']?').then(function (data) {
      if (data) {
      $http.delete(lpt_host + '/zeus/ws/parking/pcharges/delete/' + feescale.id)
      .success(function(data){
        if(data != null && data.code=="200"){
          vm.getfeescalelist();
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
  // vm.getfeescalelist();
  // 通过$watch currentPage和itemperPage 当他们一变化的时候，重新获取数据条目
  $scope.$watch('paginationConf.currentPage', vm.getfeescalelist);
}]);