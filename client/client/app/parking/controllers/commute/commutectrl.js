'use strict';

angular.module('parkingApp').controller('commutectrl', ['$scope','$http','commuteService','$rootScope','dialog',function($scope,$http,commuteService,$rootScope,dialog){
	//LIST数据获取
	 $scope.carlist=[];
	 $scope.sumecar=0;
	 $scope.sumocar=0;
	 $scope.sumamt=0;
	 $scope.carstatus=1;
	  $scope.userid=$rootScope.user.userid;
 	 $scope.username=$rootScope.user.username;
	var  postData = {
                page:1,
                rows: 10,
                userid:user.userid,
                order:"entrytime"
            };
     $scope.Isatwork=true;
	$scope.Isoffwork=false;
	$scope.isworktime=false;
	//分页处理
 // 重新获取数据条目
        var reGetProducts = function(){
        	 postData = {
                page: $scope.paginationConf.totalItems==0?1:$scope.paginationConf.currentPage,
                rows: $scope.paginationConf.itemsPerPage,
                userid:user.userid,
                order:"entrytime"
            };
            var datastr={"userid":$scope.userid};
            // 发送给后台的请求数据
            commuteService.getRecordInfo(datastr).then(function(data){
            	 $scope.sumecar=data.data.body.innum;
				 $scope.sumocar=data.data.body.outnum;
				 $scope.sumamt=data.data.body.amt;
            });
			 commuteService.getcarentrylist(postData).then(function (response) {
		 		if (response.status==200) {
				  var list =[];
				   $scope.carlist=[];
				   for (var i = 0;i< response.data.body.data.length ; i++) {
				   			list=response.data.body.data[i]
				   			list.timedif=list.parkestate==1?'':$scope.totalDateTime(list.entrytime, list.outtime);
				   			$scope.carlist.push(list);
				   };
				   $scope.paginationConf.totalItems = response.data.body.totalRecords;
				}else{

				};
			});

			commuteService.getStatusByUserId($scope.userid).then(function(datafr){
				if (datafr.status==200&&datafr.data.code==200) {
			 		if (datafr.data.body.dutystatus==true) {
		 				document.getElementById("is1atwork").style.display="none";
						document.getElementById("is1offwork").style.display="block";
						$scope.isworktime=true;
						$scope.worktime=datafr.data.body.startdate;

			 		}else{
						document.getElementById("is1offwork").style.display="none";
						document.getElementById("is1atwork").style.display="block";
			 		}
			 	}
			});
        };

		$scope.totalDateTime = function(startDate,endDate){
			var dtStart = new Date(startDate);
			var dtend = new Date(endDate);
			var date3=dtend.getTime()-dtStart.getTime();  //时间差的毫秒数
			//计算出相差天数
			var days=Math.floor(date3/(24*3600*1000));
			//计算出小时数
			var leave1=date3%(24*3600*1000);    //计算天数后剩余的毫秒数
			var hours=Math.floor(leave1/(3600*1000));
			//计算相差分钟数
			var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
			var minutes=Math.floor(leave2/(60*1000));
			//计算相差秒数
			var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
			var seconds=Math.round(leave3/1000);
			var rtn = "";
			if(days>0){
				rtn += days + "天 ";
			}
			if(hours>0){
				rtn += hours + "小时 ";
			}
			if(minutes>0){
				rtn += minutes + "分钟 ";
			}
			if(seconds>0){
				rtn += seconds + "秒 ";
			}
			return rtn;
		}
 
        // 配置分页基本参数
        $scope.paginationConf = {
            currentPage: 1,
            itemsPerPage: 10,
            //以下实际应用中可注释
           // totalItems:800
        };
 		//上班
 		$scope.atwork=function(){
			commuteService.postAtwork({"userid":$scope.userid,"username":$scope.username}).then(function (response){
				if(response.data.code==200){
					document.getElementById("is1atwork").style.display="none";
					document.getElementById("is1offwork").style.display="block";
					$scope.isworktime=true;
					$scope.worktime=response.data.body.startdate;
					$scope.offtime="";
					dialog.notify('欢迎上班！', 'success');
				}else if(response.data.code==500){
					dialog.notify(response.data.msg, 'error');
				}
			});
 		};
 		//下班
 		$scope.offwork=function(){
			commuteService.getOffduty({"userid":$scope.userid,"username":$scope.username}).then(function (response){
				if(response.data.code==200){ 
					document.getElementById("is1offwork").style.display="none";
					document.getElementById("is1atwork").style.display="block";
					$scope.isworktime=true;
						$scope.offtime=response.data.body.enddate;
					dialog.notify('辛苦了，下班愉快！', 'success');
				}else if(response.data.code==500){
					dialog.notify(response.data.msg, 'error');
				}
			});
 		};
        // 通过$watch currentPage和itemperPage 当他们一变化的时候，重新获取数据条目
        $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', reGetProducts);
 
        
}]);