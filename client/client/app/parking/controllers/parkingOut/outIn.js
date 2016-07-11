'use strict';

var app = angular.module('parkingApp');

app.controller('parkingoutin', ['$document','$rootScope', '$scope', '$http', '$window', '$location','dialog', 'commuteService', function($document,$rootScope, $scope, $http,$window, $location, dialog, commuteService) {
  var vm = this;

  vm.inParkState = "0";
  vm.outParkState = "0";
  //读卡标识
  vm.isReadCardNo = "0";
  // vm.feescalelist = [];
  //当日入园车辆数
  vm.dayenterParkSum = 0;
  //当日出园车辆数
  vm.outParkSum = 0;
  //在园车辆数
  vm.enterParkSum = 0;
  //车辆信息数据
  vm.vehicleinfo = {
    contactname: "", //司机姓名
    vehiclenumber: "", //车辆牌照
    telephonenumber: "", //联系电话
    chargeid: "", //车辆类型id
    cartype: "", //车辆类型名称
    vehiclelength: null, //车长
    vehicleclassificationcode: "", //车型
    vehicletonnage: null, //载重
    parking_id: "", //车位表ID
    card_id: "", //停车卡号
    sprovincecode: "", //始发地省CODE
    sprovincename: "", //始发地省NAME
    scitycode: "", //始发地市CODE
    scityname: "", //始发地市NAME
    scountycode: "", //始发地县CODE
    scountyname: "", //始发地县NAME
    eprovincecode: "", //目的地省CODE
    eprovincename: "", //目的地省NAME
    ecitycode: "", //目的地市CODE
    ecityname: "", //目的地市NAME
    ecountycode: "", //目的地县CODE
    ecountyname: "", //目的地县NAME
    placeofdeparture: "", //始发地
    destination: "", //目的地
    nightdays: null, //过夜天数
    nightfees: null, //夜班费
    roominfo: "", //入住房间
    receivable: null, //应收费用
    freeamt: null, //免费金额
    realamt: null, //实收费用
    iostate: "", //入出园状态
    ismonthlyticket: "" //月卡车辆出园 0:非月卡用户;1：月卡用户
  };
  $scope.Vparams = {
    outputVehicleModel: null,
    open: false
  // inputVehicleModel:['湘','A','12345']
  };

  $scope.params = {
    outputModel: null,
    open: false
  // inputModel:""
  // inputModel:['湖南','长沙','岳麓']
  }

  $scope.search = {
    startCity: []
  };

  //字符串固定长度，不够后面补'0'
  vm.PrefixInteger = function(num, length) {
    return (num + Array(length).join('0')).slice(0, length);
  }

  //查询车辆类型
  vm.getvehicletypelist = function() {
    $http.get(lpt_host + '/zeus/ws/parking/pcartype/getlist', {
      params: {
        page: 1,
        rows: 10
      }
    }).success(function(data) {
      if (data.code == "200") {
        $scope.cartype = data.body.data;
      }
    });
  }

  vm.carTypeChange = function() {
    for (var i = 0; i < $scope.cartype.length; i++) {
      if ($scope.cartype[i].cartypecode == vm.vehicleinfo.chargeid) {
        // vm.vehicleinfo.chargeid = $scope.cartype[i].id;
        vm.vehicleinfo.cartype = $scope.cartype[i].cartype;
        vm.vehicleinfo.vehiclelength = $scope.cartype[i].carlen;
        vm.vehicleinfo.vehicletonnage = $scope.cartype[i].carload;
        vm.getLeisureParking();
        break;
      }
    }
  }

  //车牌号查询
  vm.vehiclenumberChange = function() {
    if (vm.vehicleinfo.vehiclenumber != null && vm.vehicleinfo.vehiclenumber.length > 6) {
      vm.getVehicleByNumber(vm.vehicleinfo.vehiclenumber);
    }
  }

  //获取当天入园车辆数
  vm.getDayEnterParkSum = function() {
    $http.get(lpt_host + '/zeus/ws/parking/pstatistic/getDayEnterParkSum/null').success(function(data) {
      if (data.code == "200") {
        vm.dayenterParkSum = data.body;
      }
    });
  }

  //获取当天出园车辆数
  vm.getDayOutParkSum = function() {
    $http.get(lpt_host + '/zeus/ws/parking/pstatistic/getDayOutParkSum/null').success(function(data) {
      if (data.code == "200") {
        vm.outParkSum = data.body;
      }
    });
  }

  //获取在园车辆数
  vm.getEnterParkSum = function() {
    $http.get(lpt_host + '/zeus/ws/parking/pstatistic/getEnterParkSum').success(function(data) {
      if (data.code == "200") {
        vm.enterParkSum = data.body;
      }
    });
  }

  //获取空余车辆数
  vm.getLeisureParkingNum = function() {
    $http.get(lpt_host + '/zeus/ws/parking/pstatistic/getLeisureParkingNum').success(function(data) {
      if (data.code == "200") {
        vm.leisureParkingNum = data.body;
      }
    });
  }


  //根据车型获取车位
  vm.getLeisureParking = function() {
    $http.get(lpt_host + '/zeus/ws/parking/parkio/getLeisureParking/' + vm.vehicleinfo.chargeid).success(function(data) {
      if (data.code == "200") {
        vm.vehicleinfo.parking_id = data.body.id;
        vm.vehicleinfo.parkingno = data.body.parkingno;
      // vm.enterParkSum = data.body;
      }
    });
  }

  //根据车牌号码查询车辆状态
  vm.getVehicleByNumber = function(vehiclenumber) {
    $http.get(lpt_host + '/zeus/ws/parking/parkio/getVehicle/' + vehiclenumber).success(function(data) {
      if (data.code == "200" || data.code == "500") {
        if (data.code == "500") {
          dialog.notify(data.msg, 'error');
        }
        vm.vehicleinfo = data.body;
        if (vm.vehicleinfo.iostate == "1") {
          vm.vehicleinfo.vehiclenumber = vehiclenumber;
          vm.getLeisureParking();
          $scope.search.startCity.id = '';
          $scope.search.startCity.cn = [];
          $scope.search.startCity.zip = '';
        }else if(vm.vehicleinfo.iostate == "2"){
          vm.getMaxSerialNumber();
          if(vm.vehicleinfo.sprovincename){
            $scope.search.startCity.cn[0] = vm.vehicleinfo.sprovincename;
            if(vm.vehicleinfo.scityname){
              $scope.search.startCity.cn[1] = vm.vehicleinfo.scityname;
              if(vm.vehicleinfo.scountyname){
                $scope.search.startCity.cn[2] = vm.vehicleinfo.scountyname;
              }
            }
          }
        }
      }
    });
  }

  //根据出园单据流水号
  vm.getMaxSerialNumber = function() {
    $http.get(lpt_host + '/zeus/ws/parking/pcarentry/getMaxSerialNumber').success(function(data) {
      if (data.code == "200") {
        vm.vehicleinfo.pcode = data.body;
      }
    });
  }

  //根据车牌号码查询车辆状态
  vm.getVehicleByCardno = function() {

    vm.vehicleinfo.card_id = window.wrcard.getCardId(window.comPort);
    // alert(vm.vehicleinfo.card_id);
    if (vm.vehicleinfo.card_id != null && vm.vehicleinfo.card_id != "") {
      vm.isReadCardNo = "1";
      // var strCardno = vm.vehicleinfo.card_id;
      // vm.vehicleinfo.card_id = strCardno;
      $http.get(lpt_host + '/zeus/ws/parking/parkio/getVehicleByCardno/' + vm.vehicleinfo.card_id).success(function(data) {
        if (data.code == "200") {
          if (data.body != null) {
            vm.vehicleinfo = data.body;
            if (vm.vehicleinfo.vehiclenumber != null && vm.vehicleinfo.vehiclenumber != "") {
              $scope.Vparams.outputVehicleModel.province = [];
              $scope.Vparams.outputVehicleModel.city = [];
              $scope.Vparams.outputVehicleModel.district = [];
              $scope.Vparams.outputVehicleModel.vcnul = [];
              $scope.Vparams.outputVehicleModel.province.push('');
              $scope.Vparams.outputVehicleModel.province.push(vm.vehicleinfo.vehiclenumber.substr(0, 1));
              $scope.Vparams.outputVehicleModel.city.push('');
              $scope.Vparams.outputVehicleModel.city.push(vm.vehicleinfo.vehiclenumber.substr(1, 1));
              $scope.Vparams.outputVehicleModel.vcnul = vm.vehicleinfo.vehiclenumber.substr(2);
            }
          }
        } else {
          dialog.notify(data.msg, 'error');
        }
        vm.isReadCardNo = "0";
      });
    }
  }

  //车辆入园
  vm.inpark = function() {
    vm.inParkState = "1";
    // vm.jsondata.cartypecode = $scope.cartype.cartypecode;
    // vm.jsondata.cartypename = $scope.cartype.cartype;
    if ($scope.search.startCity.cn && $scope.search.startCity.cn.length >= 0) {
      vm.vehicleinfo.sprovincename = '';
      vm.vehicleinfo.scityname = '';
      vm.vehicleinfo.scountyname = '';

      if($scope.search.startCity.cn.length > 0){
        vm.vehicleinfo.sprovincename = $scope.search.startCity.cn[0];
      }
      if($scope.search.startCity.cn.length > 1){
        vm.vehicleinfo.scityname = $scope.search.startCity.cn[1];
      }
      if($scope.search.startCity.cn.length > 2){
        vm.vehicleinfo.scountyname = $scope.search.startCity.cn[2];
      }
    }
    $http.post(lpt_host + '/zeus/ws/parking/parkio/inpark', vm.vehicleinfo)
      .success(function(data) {
        if (data.code == "200") {
          dialog.notify("入园成功!", 'success');
          vm.getDayEnterParkSum();
          vm.getDayOutParkSum();
          vm.getEnterParkSum();
          vm.getLeisureParkingNum();
          vm.audioPlayIn();
          vm.reset();
        } else {
          dialog.notify(data.msg, 'error');
        }
        vm.inParkState = "0";
      }).error(function(data) {
      vm.inParkState = "0";
      dialog.notify(data.msg, 'error');
    });
  }

  //车辆出园
  vm.outpark = function() {
    vm.outParkState = "1";
    // vm.jsondata.cartypecode = $scope.cartype.cartypecode;
    // vm.jsondata.cartypename = $scope.cartype.cartype;
    $http.post(lpt_host + '/zeus/ws/parking/parkio/outpark', vm.vehicleinfo)
      .success(function(data) {
        if (data.code == "200") {
          vm.printData();
          vm.getDayEnterParkSum();
          vm.getDayOutParkSum();
          vm.getEnterParkSum();
          vm.getLeisureParkingNum();
          dialog.notify("出园成功!", 'success');
          vm.audioPlayOut();
          vm.reset();
        } else {
          dialog.notify(data.msg, 'error');
        }
        vm.outParkState = "0";
      }).error(function(data) {
      vm.outParkState = "0";
      dialog.notify(data.msg, 'error');
    });
  }

  vm.update = function() {
    if(!vm.vehicleinfo.card_id){
      dialog.notify("请读取入园卡!", 'error');
      return;
    }

    if ($scope.myForm.$valid) {
      vm.vehicleinfo.operuserid = user.userid;
      vm.vehicleinfo.operusername = user.realname;
      if (vm.vehicleinfo != null && vm.vehicleinfo.iostate == "1") {
        vm.inpark();
      } else if (vm.vehicleinfo != null && vm.vehicleinfo.iostate == "2") {
        vm.outpark();
      }
    }
    $scope.submitted = true;
  }

  //重置界面
  vm.reset = function() {
    //车辆信息数据
    vm.vehicleinfo = {
      contactname: "", //司机姓名
      vehiclenumber: "", //车辆牌照
      telephonenumber: "", //联系电话
      chargeid: "", //车辆类型id
      cartype: "", //车辆类型名称
      vehiclelength: null, //车长
      vehicleclassificationcode: "", //车型
      vehicletonnage: null, //载重
      parking_id: "", //车位表ID
      card_id: "", //停车卡号
      sprovincecode: "", //始发地省CODE
      sprovincename: "", //始发地省NAME
      scitycode: "", //始发地市CODE
      scityname: "", //始发地市NAME
      scountycode: "", //始发地县CODE
      scountyname: "", //始发地县NAME
      eprovincecode: "", //目的地省CODE
      eprovincename: "", //目的地省NAME
      ecitycode: "", //目的地市CODE
      ecityname: "", //目的地市NAME
      ecountycode: "", //目的地县CODE
      ecountyname: "", //目的地县NAME
      placeofdeparture: "", //始发地
      destination: "", //目的地
      nightdays: null, //过夜天数
      nightfees: null, //夜班费
      roominfo: "", //入住房间
      receivable: null, //应收费用
      freeamt: null, //免费金额
      realamt: null, //实收费用
      iostate: "", //入出园状态
      ismonthlyticket: "" //月卡车辆出园 0:非月卡用户;1：月卡用户
    };
    $scope.Vparams.outputVehicleModel.province = null;
    $scope.Vparams.outputVehicleModel.city = null;
    $scope.Vparams.outputVehicleModel.district = null;
    $scope.Vparams.outputVehicleModel.vcnul = null;

    $scope.search.startCity.id = '';
    $scope.search.startCity.cn = [];
    $scope.search.startCity.zip = '';

    $scope.submitted = false;
  }

  var loginId, realHandleId, canvas, context,carPicBox;
  var dahua_client = window.dahua_client;
  var w = angular.element($window);

  vm.load = function() {
    canvas = $document.find('#videoCanvas')[0];
  	carPicBox = $document.find('#carPicBox')[0];
    canvas.width=554;
    canvas.height=320;

    if(dahua_client){
      loginId = dahua_client.init(window.deviceIP, window.devicePort, window.deviceName, window.devicePassword, function(data) {
        loginId = 0;
        console.log('设备已断开');
      });

      if (loginId != 0) {
        try {
          vm.startRealPlay();
          var result = dahua_client.subscribeCarNumber(loginId, function(carNumber,carPic) {
            if (carNumber) {
              // var div = document.createElement("div");
              // div.innerHTML = new Date() + '：' + carNumber;
              // carNumberContent.appendChild(div);
              $scope.Vparams.outputVehicleModel.province = [];
              $scope.Vparams.outputVehicleModel.city = [];
              $scope.Vparams.outputVehicleModel.district = [];
              $scope.Vparams.outputVehicleModel.vcnul = [];
              $scope.Vparams.outputVehicleModel.province.push('');
              $scope.Vparams.outputVehicleModel.province.push(carNumber.substr(0, 1));
              $scope.Vparams.outputVehicleModel.city.push('');
              $scope.Vparams.outputVehicleModel.city.push(carNumber.substr(1, 1));
              $scope.Vparams.outputVehicleModel.vcnul = carNumber.substr(2);
              $scope.$broadcast('readCardNo', $scope.Vparams.outputVehicleModel);
              // alert(carNumber);
              // console.log(new Date() + '：' + carNumber);
      			  if (carPic) {
      				 DHPlayer.convertCanvasToImage(carPic,carPicBox);
      			  }
            }
          });
          // console.log(result);
        } catch (ex) {
          console.log(ex);
          // alert(ex);
        }
      }
    }
  }

  $scope.$on('readCardNo', function(event,outputVehicleModel){
    if (outputVehicleModel != null && outputVehicleModel.province != null && outputVehicleModel.city != null && outputVehicleModel.vcnul != null && vm.isReadCardNo == "0") {
       vm.vehicleinfo.vehiclenumber = outputVehicleModel.province[1] + outputVehicleModel.city[1] + outputVehicleModel.vcnul;
       vm.vehiclenumberChange();
     }
  });

  // //监听车牌变动change事件
  // $scope.$watch('Vparams.outputVehicleModel', function(newVal, oldVal) {
  //   // $scope.Vparams.inputVehicleModel=['湘','A','12345'];
  //   //读取卡号时，不触发车牌变更事件
  //   if (newVal != null && newVal.province != null && newVal.city != null && newVal.vcnul != null && vm.isReadCardNo == "0") {
  //     vm.vehicleinfo.vehiclenumber = newVal.province[1] + newVal.city[1] + newVal.vcnul;
  //     vm.vehiclenumberChange();
  //   }
  // }, true);

  vm.startRealPlay = function() {
    if (loginId && loginId != 0) {
      try {
        var player = DHPlayer.load(canvas);
        realHandleId = dahua_client.startRealPlay(loginId,function(bufSize, bufData) {
          if (bufData && bufData.length > 0) {
            //  console.log(bufSize);
            player.play(bufData);
          }
        });
        console.log(realHandleId);
      } catch (ex) {
        console.log(ex);
      }
    }
  }

  vm.stopRealPlay = function(callback) {
    if (realHandleId && realHandleId != 0) {
      try {
        var result = dahua_client.stopRealPlay(realHandleId);
        if(result&&callback)
        {
          callback();
        }
        // console.log(result);
      } catch (ex) {
        console.log(ex);
        // alert(ex);
      }
    }
  }

  vm.checkWorking = function(){
    commuteService.getStatusByUserId(user.userid).then(function(datafr){
      if (datafr.status==200&&datafr.data.code==200) {
        if (datafr.data.body.dutystatus!=true) {
          alert("尚未登记上班，请点击上班后再进行入园/出园操作!");
          $location.path("/parking/commute");
          return;
        }
      };
    });
  }

  vm.audioPlayIn = function(){
    var audioIn = $document.find('#audioIn')[0];
    audioIn.play();
  }

  vm.audioPlayOut = function(){
    var audioOut = $document.find('#audioOut')[0];
    audioOut.play();
  }

  vm.printData = function(){
    if(vm.vehicleinfo.ismonthlyticket != "1"){
      var LODOP=getLodop();
      LODOP.PRINT_INITA("");
      LODOP.SET_PRINT_PAGESIZE(1,800,1200,"");
      LODOP.SET_PRINT_STYLE("FontColor","#0000FF");
      LODOP.ADD_PRINT_TEXT(12,102,150,25,"NO：" + vm.vehicleinfo.pcode);
      LODOP.ADD_PRINT_TEXT(39,13,200,30,"雁城物流园停车收费单");
      LODOP.SET_PRINT_STYLEA(0,"FontSize",12);
      LODOP.SET_PRINT_STYLEA(0,"Bold",1);
      LODOP.ADD_PRINT_TEXT(67,1,300,20,"---------------------------------");
      LODOP.ADD_PRINT_TEXT(89,2,300,25,"车    牌：" + vm.vehicleinfo.vehiclenumber);
      LODOP.ADD_PRINT_TEXT(114,2,300,25,"入住房间：" + vm.vehicleinfo.roominfo);
      LODOP.ADD_PRINT_TEXT(140,2,300,25,"联系电话：" + vm.vehicleinfo.telephonenumber);
      LODOP.ADD_PRINT_TEXT(166,2,300,25,"车    型：" + vm.vehicleinfo.cartype);
      LODOP.ADD_PRINT_TEXT(191,2,300,25,"入场时间：" + vm.vehicleinfo.entrytime);
      LODOP.ADD_PRINT_TEXT(216,2,300,25,"出场时间：" + vm.vehicleinfo.outtime);
      LODOP.ADD_PRINT_TEXT(240,2,300,25,"停留时间：" + vm.vehicleinfo.stayhours);
      LODOP.ADD_PRINT_TEXT(264,2,300,25,"停车收费：" + vm.vehicleinfo.parkfees);
      LODOP.ADD_PRINT_TEXT(289,2,300,25,"过 夜 费：" + vm.vehicleinfo.nightfees);
      LODOP.ADD_PRINT_TEXT(314,2,300,25,"优惠金额：" + vm.vehicleinfo.freeamt);
      LODOP.ADD_PRINT_TEXT(338,2,300,25,"合    计：" + vm.vehicleinfo.realamt);
      LODOP.ADD_PRINT_TEXT(362,2,300,25,"制 单 人：" + user.username);
      LODOP.PREVIEW();
      // LODOP.PRINT();
    }
  }

  $scope.submitted = false;
  vm.checkWorking();
  vm.getvehicletypelist();
  vm.getDayEnterParkSum();
  vm.getDayOutParkSum();
  vm.getEnterParkSum();
  vm.getLeisureParkingNum();
  vm.load();

  //监听车牌变动change事件
  $scope.$watch('Vparams.outputVehicleModel', function(newVal, oldVal) {
    // $scope.Vparams.inputVehicleModel=['湘','A','12345'];
    //读取卡号时，不触发车牌变更事件
    if (newVal != null && newVal.province != null && newVal.city != null && newVal.vcnul != null && vm.isReadCardNo == "0") {
      vm.vehicleinfo.vehiclenumber = newVal.province[1] + newVal.city[1] + newVal.vcnul;
      vm.vehiclenumberChange();
    }
  }, true);

  // 离开当前视图时,关闭视频监控
  $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl){
    if(oldUrl.indexOf('parking/outIn')>0)
    {
      vm.stopRealPlay();
    }
  });

}]);
