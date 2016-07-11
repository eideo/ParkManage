/**
 * Created by libinqi on 2015/5/26.
 */

'use strict';
var opCenterApp = angular.module('opCenterApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ui.tree',
    'ui.tree-filter',
    'ui.highlight',
    'commonApp',
    'tm.pagination',
    'chart.js',
    'ngFileUpload'
])
    .constant('opCenterRoutes',
    [{
        name: 'opCenter', url: '/opCenter', templateUrl: '/app/operationCenter/home.html', menu: '运营中心',
        childMenus: [{
            name: 'opCenter.setting',
            url: '/setting',
            templateUrl: '/app/operationCenter/index.html',
            menu: '系统设置',
            icon: 'fa-cog',
            childMenus: [
                {
                    name: 'opCenter.setting.department',
                    url: '/department',
                    templateUrl: '/app/operationCenter/views/systemSetting/department.html',
                    menu: '部门设置'
                },
                {
                    name: 'opCenter.setting.role',
                    url: '/role',
                    templateUrl: '/app/operationCenter/views/systemSetting/roleSetting.html',
                    menu: '岗位设置'
                },
                {
                    name: 'opCenter.setting.menu',
                    url: '/menu',
                    templateUrl: '/app/operationCenter/views/systemSetting/menuSetting.html',
                    menu: '菜单设置'
                },
                {
                    name: 'opCenter.setting.dictionary',
                    url: '/dictionary',
                    templateUrl: '/app/operationCenter/views/systemSetting/dictionary.html',
                    menu: '字典设置'
                }
            ]
        },
            {
                name: 'opCenter.property',
                url: '/property',
                templateUrl: '/app/operationCenter/index.html',
                menu: '物业管理',
                icon: 'fa-building',
                childMenus: [
                    {
                        name: 'opCenter.property.facadeSet',
                        url: '/facadeSet',
                        templateUrl: '/app/operationCenter/views/propertyManage/facadeSet/facadeSet.html',
                        menu: '铺面信息'
                    },
                    // {
                    //     name: 'opCenter.property.hydropowerData',
                    //     url: '/hydropowerData',
                    //     templateUrl: '/app/operationCenter/views/propertyManage/hydropowerData/hydropowerData.html',
                    //     menu: '水电数据'
                    // },
                    {
                        name: 'opCenter.property.leaseManage',
                        url: '/leaseManage',
                        templateUrl: '/app/operationCenter/views/propertyManage/leaseManage/leaseManage.html',
                        menu: '租赁信息'
                    },
                    {
                        name: 'opCenter.property.meterReading',
                        url: '/meterReading',
                        templateUrl: '/app/operationCenter/views/propertyManage/meterReading/meterReading.html',
                        menu: '抄表信息'
                    },
                    {
                        name: 'opCenter.property.paymentManage',
                        url: '/paymentManage',
                        templateUrl: '/app/operationCenter/views/propertyManage/paymentManage/paymentManage.html',
                        menu: '缴费信息'
                    }]
            },
            {
                name: 'opCenter.customersCenter',
                url: '/customersCenter',
                templateUrl: '/app/operationCenter/index.html',
                menu: '客服管理',
                icon: 'fa-headphones',
                childMenus: [
                     {
                         name: 'opCenter.customersCenter.customersServe',
                         url: '/customersServe',
                         templateUrl: '/app/operationCenter/views/customersCenter/customersServe/customersServe.html',
                         menu: '园区服务'
                     },
                    {
                        name: 'opCenter.customersCenter.clientUnlock',
                        url: '/clientUnlock',
                        templateUrl: '/app/operationCenter/views/customersCenter/clientUnlock.html',
                        menu: '解锁操作'
                    },
                    {
                        name: 'opCenter.customersCenter.inExamination',
                        url: '/inExamination',
                        templateUrl: '/app/operationCenter/views/customersCenter/inExamination.html',
                        menu: '入园审批'
                    },
                    {
                        name: 'opCenter.customersCenter.messageCenter',
                        url: '/messageCenter',
                        templateUrl: '/app/operationCenter/views/customersCenter/messageCenter.html',
                        menu: '园区消息'
                    },
                    {
                        name: 'opCenter.customersCenter.ticketManage',
                        url: '/ticketManage',
                        templateUrl: '/app/operationCenter/views/customersCenter/ticketManage.html',
                        menu: '月卡信息'
                    }]
            },
            {
                name: 'opCenter.customersManage',
                url: '/customersManage',
                templateUrl: '/app/operationCenter/index.html',
                menu: '客户管理',
                icon: 'fa-group',
                childMenus: [
                    {
                        name: 'opCenter.customersManage.enterpriseList',
                        url: '/enterpriseList',
                        templateUrl: '/app/operationCenter/views/customersManage/enterprise/enterpriseList.html',
                        menu: '企业信息'
                    },
                    {
                        name: 'opCenter.customersManage.shipperList',
                        url: '/shipperList',
                        templateUrl: '/app/operationCenter/views/customersManage/goodsOwner/shipperList.html',
                        menu: '货主管理'
                    },
                    {
                        name: 'opCenter.customersManage.addressBook',
                        url: '/addressBook',
                        templateUrl: '/app/operationCenter/views/customersManage/addressBook.html',
                        menu: '友商名录'
                    },
                    {
                        name: 'opCenter.customersManage.messageValidate',
                        url: '/messageValidate',
                        templateUrl: '/app/operationCenter/views/customersManage/messageManage/messageValidate.html',
                        menu: '验证信息'
                    }
                    // {
                    //     name: 'opCenter.customersManage.driverManage',
                    //     url: '/driverManage',
                    //     templateUrl: '/app/operationCenter/views/customersManage/driver/driverManage.html',
                    //     menu: '司机信息'
                    // }
                    ]
            },
            {
                name: 'opCenter.humanResource',
                url: '/humanResource',
                templateUrl: '/app/operationCenter/index.html',
                menu: '员工管理',
                icon: 'fa-user',
                childMenus: [
                    {
                        name: 'opCenter.humanResource.workAttendance',
                        url: '/workAttendance',
                        templateUrl: '/app/operationCenter/views/humanResource/workAttendance.html',
                        menu: '员工考勤'
                    },
                    {
                        name: 'opCenter.humanResource.jobManage',
                        url: '/jobManage',
                        templateUrl: '/app/operationCenter/views/humanResource/jobManage.html',
                        menu: '员工招聘'
                    }]
            },
            {
                name: 'opCenter.auditManage',
                url: '/auditManage',
                templateUrl: '/app/operationCenter/index.html',
                menu: '审核管理',
                icon: 'fa-legal',
                childMenus: [
                    {
                        name: 'opCenter.auditManage.leaveAudit',
                        url: '/leaveAudit',
                        templateUrl: '/app/operationCenter/views/auditManage/leaveAudit.html',
                        menu: '请假审批'
                    }]
            },
            {
                name: 'opCenter.dataCenter',
                url: '/dataCenter',
                templateUrl: '/app/operationCenter/index.html',
                menu: '运营数据',
                icon: 'fa-comment',
                childMenus: [
                    {
                        name: 'opCenter.dataCenter.parkingData',
                        url: '/parkingData',
                        templateUrl: '/app/operationCenter/views/dataCenter/parkingData.html',
                        menu: '停车数据'
                    },
                    {
                        name: 'opCenter.dataCenter.roomData',
                        url: '/roomData',
                        templateUrl: '/app/operationCenter/views/dataCenter/roomData.html',
                        menu: '客房数据'
                    },
                    {
                        name: 'opCenter.dataCenter.propertyData',
                        url: '/propertyData',
                        templateUrl: '/app/operationCenter/views/dataCenter/propertyData.html',
                        menu: '物业数据'
                    }
                ]
            },
            {
                name: 'opCenter.honesty',
                url: '/honesty',
                templateUrl: '/app/operationCenter/index.html',
                menu: '诚信公示',
                icon: 'fa-comment',
                childMenus: [
                    {
                        name: 'opCenter.honesty.enterpriseHonesty',
                        url: '/enterpriseHonesty',
                        templateUrl: '/app/operationCenter/views/honesty/enterpriseHonesty.html',
                        menu: '企业公示'
                    },
                    {
                        name: 'opCenter.honesty.driverHonesty',
                        url: '/driverHonesty',
                        templateUrl: '/app/operationCenter/views/honesty/driverHonesty.html',
                        menu: '司机公示'
                    }
                ]
            }
        ]}
    ])
    .config(['$stateProvider', '$urlRouterProvider', 'opCenterRoutes', function ($stateProvider, $urlRouterProvider, opCenterRoutes) {
        $stateProvider.state(opCenterRoutes[0].name, {
            url: opCenterRoutes[0].url,
            templateUrl: opCenterRoutes[0].templateUrl,
            menu: opCenterRoutes[0].menu
        });

        var menu, childMenu;
        for (var n in  opCenterRoutes[0].childMenus) {
            menu = opCenterRoutes[0].childMenus[n];
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
    .run(['$rootScope', '$filter', 'opCenterRoutes', 'systemAppService', function ($rootScope, $filter, opCenterRoutes, systemAppService) {
        /**
         * 应用模块第一次加载的时候，进行应用和菜单的注册
         */
        $rootScope.$on('appService.apps.init', function () {
            var appModel = {
                applicationid: '',
                applicationname: '运营中心',
                appurl: '/opCenter',
                appicon: 'yunying',
                apporder: '1',
                descn: '运营中心应用模块',
                status: '1'
            };
            var initMenus = function (app) {
                var menu = opCenterRoutes[0];
                // 插入父节点
                var rootMenuModel = {
                    menuid: '',//菜单ID（修改时为必填）
                    menuname: menu.menu,//菜单名称
                    pmenuid: '0',//上级菜单ID
                    menuurl: menu.url,//菜单页面链接
                    menuorder: '',//菜单排序
                    menudesc: menu.templateUrl,//菜单描述
                    menuicon: menu.icon, //菜单图标
                    menuparam: menu.name,
                    status: 1, //菜单状态
                    applicationid: app.applicationid,//所属应用ID
                    applicationname: app.applicationname
                };

                systemAppService.menuService.registerMenu(rootMenuModel, function (rootMenu) {
                    if (menu.childMenus.length > 0) {
                        insertChildMenus(rootMenu, menu.childMenus);
                    }
                });
                // 插入2级节点
                var insertChildMenus = function (rootMenu, childMenus) {
                    if (childMenus.length > 0) {
                        for (var c in childMenus) {
                            var childMenu = childMenus[c];
                            var menuModel = {
                                menuid: '',//菜单ID（修改时为必填
                                menuname: childMenu.menu,//菜单名称
                                pmenuid: rootMenu.menuid,//上级菜单ID
                                menuurl: childMenu.url,//菜单页面链接
                                menuorder: '',//菜单排序
                                menudesc: childMenu.templateUrl,//菜单描述
                                menuicon: childMenu.icon, //菜单图标
                                menuparam: childMenu.name, //菜单图标
                                status: 1, //菜单状态
                                applicationid: app.applicationid,//所属应用ID
                                applicationname: app.applicationname
                            };
                            (function (childMenu, menuModel) {
                                systemAppService.menuService.registerMenu(menuModel, function (rootMenu) {
                                    if (childMenu.childMenus.length > 0) {
                                        insertGrandMenus(rootMenu, childMenu.childMenus);
                                    }
                                });
                            })(childMenu, menuModel);
                        }
                    }
                };

                // 插入3级节点
                var insertGrandMenus = function (rootMenu, grandMenus) {
                    if (grandMenus.length > 0) {
                        for (var c in grandMenus) {
                            var grandMenu = grandMenus[c];
                            var menuModel = {
                                menuid: '',//菜单ID（修改时为必填
                                menuname: grandMenu.menu,//菜单名称
                                pmenuid: rootMenu.menuid,//上级菜单ID
                                menuurl: grandMenu.url,//菜单页面链接
                                menuorder: '',//菜单排序
                                menudesc: grandMenu.templateUrl,//菜单描述
                                menuparam: grandMenu.name, //菜单图标
                                status: 1, //菜单状态
                                applicationid: app.applicationid,//所属应用ID
                                applicationname: app.applicationname
                            };
                            systemAppService.menuService.registerMenu(menuModel);
                        }
                    }
                };
            }

            systemAppService.appService.registerApp(appModel, initMenus);
        });

        /**
         * 应用模块加载
         */
        $rootScope.opCenterMenus = [];
        var currentAppModule = {};
        var currentAppMenus = [];

        // 获取本应用模块
        systemAppService.appService.getAppByName('运营中心').then(function (response) {
            if (response.data && response.data.code == "200") {
                currentAppModule = response.data.body.data[0];
                if (currentAppModule && currentAppModule.status == "1") {
                    loadAppModule();
                }
            }
        });

        var loadAppModule = function () {
            // 获取本应用模块菜单
            systemAppService.menuService.getMenusByAppId(currentAppModule.applicationid, function (data) {
                if (data && data.length > 0) {
                    currentAppMenus = data;
                    loadAppMenus();
                }
            });

            var loadAppMenus = function () {
                var menu, n;
                for (n in currentAppMenus) {
                    menu = currentAppMenus[n];
                    $rootScope.opCenterMenus.push({
                        href: menu.menuurl,
                        name: menu.menuparam,
                        icon: menu.menuicon,
                        menu: menu.menuname,
                        menuid: menu.menuid,
                        pmenuid: menu.pmenuid
                    });
                }
                $rootScope.$broadcast('appService.menus.update');
            }
        }

    }])
    .
    controller('opCenterIndexCtrl', ['$scope', '$timeout', '$location','customersCenterService', 'homeManageService', function ($scope, $timeout, $location, customersCenterService, homeManageService) {
        $scope.navs = [];
        $scope.parentMenus = [];
        $scope.rootMenu = {};
        $scope.currentMenu = {};
        $scope.isMain = false;

        $scope.loadMenus = function () {
            for (var n in $scope.opCenterMenus) {
                var menu = $scope.opCenterMenus[n];
                if (menu.pmenuid == '0') {
                    $scope.rootMenu = menu;
                }
            }

            for (var n in $scope.opCenterMenus) {
                var menu = $scope.opCenterMenus[n];
                if (menu.pmenuid == $scope.rootMenu.menuid) {
                    menu.href = '/' + menu.name.split('.')[0] + '/' + menu.name.split('.')[1];
                    $scope.parentMenus.push(menu);
                    if ($location.path().indexOf(menu.href) != -1) {
                        $scope.currentMenu = menu;
                    }
                }
            }

            for (var n in $scope.opCenterMenus) {
                var menu = $scope.opCenterMenus[n];
                if (menu.pmenuid == $scope.currentMenu.menuid) {
                    $scope.navs.push({
                        name: menu.name,
                        href: '/' + menu.name.split('.')[0] + '/' + menu.name.split('.')[1] + '/' + menu.name.split('.')[2],
                        menu: menu.menu
                    });
                }
            }

            if ($location.path() == $scope.currentMenu.href) {
                if ($scope.navs && $scope.navs.length > 0) {
                    $location.path($scope.navs[0].href);
                }
            }

            if ($location.path() == $scope.rootMenu.href) {
                $scope.isMain = true;
            }
            else {
                $scope.isMain = false;
            }
        }

        if ($scope.opCenterMenus && $scope.opCenterMenus.length > 0) {
            $scope.loadMenus();
        }

        $scope.$on('appService.menus.update', function (event) {
            $scope.loadMenus();
        });

        $scope.isActive = function (route) {
            return route === $location.path();
        };
        $scope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                if (toState.url == $scope.rootMenu.href) {
                    $scope.isMain = true;
                }
                else {
                    $scope.isMain = false;
                }
            });


        //园区公告查询
        $scope.messageList = {
            currentPage: 1,
            itemsPerPage: 1,
            totalItems: 0,
            query: {
                msgtype: 'dict201505281908900002',
                content: ''
            },
            items: []
        };
        $scope.getMessageList = function () {
            customersCenterService.getMessageList($scope.messageList.totalItems == 0 ? 1 : $scope.messageList.currentPage,
                $scope.messageList.itemsPerPage,
                $scope.messageList.query.msgtype,
                $scope.messageList.query.content).then(function (response) {
                    if (response.data && response.data.code == "200") {
                        $scope.messageList.items = response.data.body.data;
                        if ($scope.messageList.items.length > 0) {
                            $scope.messageList.totalItems = response.data.body.totalRecords;
                        }
                        else {
                            $scope.messageList.totalItems = 0;
                        }
                    }
                });
        };

        //获取最近的货源信息以及意向数量
        $scope.getGoodsWithIntentNum = function() {
          homeManageService.getGoodsWithIntentNum(user.permissions.parkid).then(function(response) {
            if (response.data.code == "200") {
              $scope.goodsWithIntentList = response.data.body;
            }
          });
        }

        //获取最近的车源信息以及意向数量
        $scope.getVehicleWithIntentNum = function() {
          homeManageService.getVehicleWithIntentNum(user.permissions.parkid).then(function(response) {
            if (response.data.code == "200") {
              $scope.getVehicleWithIntentList = response.data.body;
            }
          });
        }

        //获取最近的货源信息以及意向数量
        $scope.countUndealInfo = function() {
          homeManageService.countUndealInfo(user.permissions.parkid).then(function(response) {
            if (response.data.code == "200") {
              $scope.countUndealInfoCount = response.data.body;
            }
          });
        }

        //获取最近的货源信息以及意向数量
        $scope.countApplication = function() {
          homeManageService.countApplication(user.permissions.parkid).then(function(response) {
            if (response.data.code == "200") {
              $scope.countApplicationCount = response.data.body;
            }
          });
        }

        //统计未处理的货源信息数量
        $scope.countGoodsUndealInfo = function() {
          homeManageService.countApplication(user.permissions.parkid).then(function(response) {
            if (response.data.code == "200") {
              $scope.countGoodsUndealCount = response.data.body;
            }
          });
        };

        $scope.getNowDate = function(){        
            var now = new Date();
            var year = now.getFullYear();       //年
            var month = now.getMonth() + 1;     //月
            var day = now.getDate();            //日
            var clock = year + "-";
            if(month < 10) clock += "0";
            clock += month + "-";
            if(day < 10) clock += "0";
            clock += day;
            $scope.nowDate = clock;
        }

        $scope.getGoodsWithIntentNum();
        $scope.getVehicleWithIntentNum();
        $scope.countUndealInfo();
        $scope.countApplication();
        $scope.countGoodsUndealInfo();
        $scope.getMessageList();
        $scope.getNowDate();
}]);