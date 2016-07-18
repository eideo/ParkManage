/**
 * Created by libinqi on 2015/5/26.
 */

'use strict';
// if (!window.user) {
//   window.user = userService.getUser();
//   if (!window.user) {
//     window.location.href = '/app/common/views/login.html';
//   } else if (window.user.username != 'admin') {
//     if (!window.user.permissions
//       || !window.user.permissions.application
//       || window.user.permissions.application.length == 0) {
//       window.location.href = '/app/common/views/unAudit.html';
//     }
//   }
// }

angular.module('commonApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .run(['$rootScope', '$filter', '$location', '$timeout', function($rootScope, $filter, $location, $timeout) {

    // 加载当前登录用户
    $rootScope.user = window.user;
    // systemAppService.userService.userInfo = window.user;

    // $timeout(function() {
    //   systemAppService.appService.getAppList();
    //   systemAppService.dictService.getDicts();
    //   if (systemAppService.userService.userInfo&&systemAppService.userService.userInfo.username!='admin') {
    //     var orderBy = $filter('orderBy');
    //     var app = orderBy(systemAppService.userService.userInfo.permissions.application, 'apporder', false)[0];
    //
    //     if (app && app.applicationname != '停车管理') {
    //       var menus = [];
    //       var menu = {};
    //       for (var n in systemAppService.userService.userInfo.permissions.menu) {
    //         menu = systemAppService.userService.userInfo.permissions.menu[n];
    //         if (menu.applicationid == app.applicationid) {
    //           menus.push(menu);
    //         }
    //       }
    //       menu = orderBy(menus, 'menuorder', false)[0];
    //       if (menu) {
    //         var params = menu.menuparam.split('.');
    //         var url = '';
    //         for (var n in params) {
    //           url += '/' + params[n];
    //         }
    //         $location.path(url);
    //       }
    //     } else {
    //       $location.path('/parking');
    //     }
    //   } else {
    //     $location.path('/parking');
    //   }
    // //            $rootScope.$on('appService.apps.load', function (event) {
    // //                systemAppService.menuService.getMenuList();
    // //            });
    // });


  }]);
