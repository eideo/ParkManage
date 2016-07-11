/**
 * Created by libinqi on 2015/5/26.
 */
'use strict';

angular.module('parkingApp').controller('StallCtrl', ['$scope', '$http', 'StallService', function ($scope, $http, stallService) {
  $scope.stallList = [];
  stallService.getStall().then(function (response) {
    $scope.stallList = response.data;
  });
}]);
