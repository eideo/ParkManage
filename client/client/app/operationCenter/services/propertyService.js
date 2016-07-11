'use strict';

var propertyService = angular.module('opCenterApp').factory('propertyService', ['$http', function ($http) {
  return {
    getDoorplateList: function (data) {
      var result = $http.get(lpt_host + '/zeus/ws/property/doorplate/getlist',{ params: data}).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    getDoorplateInfo: function (data) {
      var result = $http.get(lpt_host + '/zeus/ws/property/doorplate/getDoor/' + data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    getDictListByParentDictCode: function (data) {
      var result = $http.get(lpt_host + '/zeus/ws/system/sysDict/getDictListByParentDictCode/' + data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    getDictListByPcodes: function (data) {
      var result = $http.get(lpt_host + '/zeus/ws/system/sysDict/getDictListByPcodes/' + data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    facadeAdd: function (data) {
      var result = $http.post(lpt_host + '/zeus/ws/property/doorplate/save', data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    facadeEdit: function (data) {
      var result = $http.post(lpt_host + '/zeus/ws/property/doorplate/update', data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    facadeDelete: function (data) {
      var result = $http.delete(lpt_host + '/zeus/ws/property/doorplate/delete/' + data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    getMLeaseList: function (data) {
      var result = $http.get(lpt_host + '/zeus/ws/property/mLease/getlist',{ params: data}).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    getMLeaseInfo: function (data) {
      var result = $http.get(lpt_host + '/zeus/ws/property/mLease/getmLease/' + data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    getDoorMRentInfo: function (data) {
      var result = $http.get(lpt_host + '/zeus/ws/property/mRent/getDoorMRentInfo',{ params: data}).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    mLeaseAdd: function (data) {
      var result = $http.post(lpt_host + '/zeus/ws/property/mLease/save', data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    mLeaseEdit: function (data) {
      var result = $http.post(lpt_host + '/zeus/ws/property/mLease/update', data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    mLeaseCheck: function (data) {
      var result = $http.post(lpt_host + '/zeus/ws/property/mLease/review', {id:data}).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    mLeaseDelete: function (data) {
      var result = $http.delete(lpt_host + '/zeus/ws/property/mLease/delete/' + data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    getMRentList: function (data) {
      var result = $http.get(lpt_host + '/zeus/ws/property/mRent/getlist',{ params: data}).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    meterAdd: function (data) {
      var result = $http.post(lpt_host + '/zeus/ws/property/mRent/save', data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    meterEdit: function (data) {
      var result = $http.post(lpt_host + '/zeus/ws/property/mRent/update', data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    mRentDelete: function (data) {
      var result = $http.delete(lpt_host + '/zeus/ws/property/mRent/delete/' + data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    meterReview: function (data) {
      var result = $http.post(lpt_host + '/zeus/ws/property/mRent/review', data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    getmRentInfo: function (data) {
      var result = $http.get(lpt_host + '/zeus/ws/property/mRent/getmRent/' + data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    getPayRent: function (data) {
      var result = $http.get(lpt_host + '/zeus/ws/property/mRent/getPayRent/' + data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    getServiceMeter: function (data) {
      var result = $http.get(lpt_host + '/zeus/ws/property/mLease/getServiceMeter',{ params: data}).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    getEnterpriseList: function (data) {
      var result = $http.get(lpt_host + '/zeus/ws/cl/clEnterpriseManage/getList',{ params: data}).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
    getMeterList: function (data) {
      var result = $http.get(lpt_host + '/zeus/ws/property/doorplate/getMeterList/' + data).then(
        function (response) {
          return response;
        },
        function (response) {
          return response;
        }
      );
      return result;
    },
  }
}]);
