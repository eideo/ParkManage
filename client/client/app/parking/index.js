/**
 * Created by libinqi on 2015/5/26.
 */

'use strict';

angular.module('parkingApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'ngDialog',
    'tm.pagination',
    'ngNotify',
    'w5c.validator',
    'commonApp',
    'ngVehicleNum'
])
    .constant('parkingRoutes', [{
        name: 'parking',
        url: '/parking',
        templateUrl: '/app/parking/index.html',
        menu: '停车管理',
        childMenus: [
            {
                name: 'parking.outIn',
                url: '/outIn',
                templateUrl: '/app/parking/views/parkingOut/outIn.html',
                menu: '车辆出入'
            },
            {
                name: 'parking.vehilePark',
                url: '/vehilePark',
                templateUrl: '/app/parking/views/settings/vehilePark/list.html',
                menu: '车位设置'
            },
            {
                name: 'parking.feeScale',
                url: '/feeScale',
                templateUrl: '/app/parking/views/settings/feeScale/list.html',
                menu: '收费标准'
            },
            {
                name: 'parking.vehicleType',
                url: '/vehicleType',
                templateUrl: '/app/parking/views/settings/vehicleType/list.html',
                menu: '车辆类型'
            },
            {
                name: 'parking.searchcar',
                url: '/searchcar',
                templateUrl: '/app/parking/views/statistics/searchCar.html',
                menu: '在园车辆'
            },
            {
                name: 'parking.commute',
                url: '/commute',
                templateUrl: '/app/parking/views/commute/commute.html',
                menu: '上班下班'
            },
            {
                name: 'parking.preferential',
                url: '/preferential',
                templateUrl: '/app/parking/views/preferential/setUp.html',
                menu: '停车优惠'
            }
        ]
    }]
)
    .config(['$stateProvider', '$urlRouterProvider', 'parkingRoutes', function ($stateProvider, $urlRouterProvider, parkingRoutes) {
        var menu, childMenu;
        for (var n in  parkingRoutes) {
            menu = parkingRoutes[n];
            $stateProvider.state(menu.name, {
                url: menu.url,
                templateUrl: menu.templateUrl,
                menu: menu.menu
            });
            if (menu.childMenus.length > 0) {
                for (var c in  menu.childMenus) {
                    childMenu = menu.childMenus[c];
                    $stateProvider.state(childMenu.name, {
                        url: childMenu.url,
                        templateUrl: childMenu.templateUrl,
                        menu: childMenu.menu
                    });
                }
            }
        }

//        $urlRouterProvider.otherwise('');
    }])
    .run(['$rootScope', '$filter', 'parkingRoutes', function ($rootScope, $filter, parkingRoutes) {
        /**
         * 应用模块第一次加载的时候，进行应用和菜单的注册
         */
        $rootScope.$on('appService.apps.init', function () {
            var appModel = {
                applicationid: '',
                applicationname: '停车管理',
                appurl: '/parking',
                appicon: 'parking',
                apporder: '2',
                descn: '停车管理应用模块',
                status: '1'
            };
            var initMenus = function (app) {
                for (var n in parkingRoutes) {
                    var menu = parkingRoutes[n];
                    var rootMenuModel = {
                        menuid: '',//菜单ID（修改时为必填）
                        menuname: menu.menu,//菜单名称
                        pmenuid: '0',//上级菜单ID
                        menuurl: menu.url,//菜单页面链接
                        menuorder: '',//菜单排序
                        menudesc: menu.templateUrl,//菜单描述
                        menuparam: menu.name,
                        status: 1, //菜单状态
                        applicationid: app.applicationid,//所属应用ID
                        applicationname: app.applicationname
                    };

                }
            };

        });

        /**
         * 应用模块加载
         */
        (function () {
            var currentAppModule = null;
            $rootScope.parkingMenus = [];

            var loadAppModule = function () {
                var currentAppMenus = [];
                // 获取本应用模块菜单
                var loadAppMenus = function () {
                    var menu, n;
                    for (n in currentAppMenus) {
                        menu = currentAppMenus[n];
                        if (menu.menuparam.indexOf('.') > 0) {
                            $rootScope.parkingMenus.push({
                                href: '/' + menu.menuparam.split('.')[0] + '/' + menu.menuparam.split('.')[1],
                                name: menu.menuparam.split('.')[1],
                                menu: menu.menuname
                            });
                        }
                    }
                }
            }
        })();
    }])
    .controller('parkingIndexCtrl', ['$scope', '$location', 'commuteService', function ($scope, $location, commuteService) {
        function locationChange(){
            if ($location.path() == '/parking') {
                if ($scope.parkingMenus && $scope.parkingMenus.length > 0) {
                    commuteService.getStatusByUserId(user.userid).then(function(datafr){
                        if (datafr.status==200&&datafr.data.code==200) {
                            if (datafr.data.body.dutystatus!=true) {
                                $location.path("/parking/commute");
                                return;
                            }
                        }
                        $location.path($scope.parkingMenus[0].href);
                    });
                }
            }
        }
        locationChange();

        $scope.$on('$locationChangeSuccess',locationChange);

        $scope.navs = $scope.parkingMenus;

        $scope.isActive = function (route) {
            return route === $location.path();
        };
    }]);
