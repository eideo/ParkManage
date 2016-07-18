/**
 * Created by libinqi on 2015/6/16.
 */
'use strict';

var commonApp = angular.module('commonApp');
commonApp.controller('loginCtrl', ['$scope', '$location', function ($scope, $location) {
    var vm = this;
    vm.username = 'liwow';
    vm.password = '123456';
    vm.error = '';

    $scope.login = function () {

    }
}]);
