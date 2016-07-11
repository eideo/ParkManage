/**
 * Created by libinqi on 2015/5/26.
 */
'use strict';

var parkingApp = angular.module('parkingApp').factory('StallService', ['$http', function ($http) {
  return {
    getStall: function (q) {
      var stallList = $http.get('/api/stallList').then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );

      return stallList;
    }
  }
}]);
//Mock.mockjax(parkingApp);
//出入园查询
var parkingSearch = angular.module('parkingApp').factory('searchService', ['$http', function ($http) {
  return {
    getParkingCar: function (q) {
      var stallList = $http.get(lpt_host+ '/zeus/ws/parking/pcarentry/getlist',{params: q}).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );

      return stallList;
    }
  }
}]);
//Mock.mockjax(parkingSearch);
//上班打卡
var AtworkService = angular.module('parkingApp').factory('commuteService', ['$http', function ($http) {
  return {
    postAtwork: function (q) {
      var stallList = $http.post(lpt_host+ '/zeus/ws/parking/precord/atwork', q).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );

      return stallList;
    },
     getOffduty: function (q) {
      var stallList = $http.post(lpt_host+ '/zeus/ws/parking/precord/offduty',q).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );

      return stallList;
    },
    getRecordInfo: function (q) {
      var stallList = $http.post(lpt_host+ '/zeus/ws/parking/precord/getRecordInfo',q).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );

      return stallList;
    },
        getStatusByUserId: function (q) {
      var stallList = $http.get(lpt_host+ '/zeus/ws/parking/precord/getDutyStatus/'+q).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );

      return stallList;
    },
     getcarentrylist: function (q) {
      var stallList = $http.get(lpt_host+ '/zeus/ws/parking/parkio/carentrylist',{params: q}).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );

      return stallList;
    }
  }
}]);
//Mock.mockjax(AtworkService);
