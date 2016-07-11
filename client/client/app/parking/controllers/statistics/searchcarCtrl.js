'use strict';

angular.module('parkingApp').controller('searchcarctrl', ['$scope','$http','searchService', function($scope,$http,searchService){
	//LIST数据获取
	 $scope.carlist=[];
	 $scope.carstatus=1;
	  var postData = {
                page: 1,
                rows: 10,
                vehiclenumber:"",
                telephonenumber:"",
                parkestate:"",
                order:"entrytime"
            };
	$scope.searchcar= function(){
	postData = {
		                page:$scope.paginationConf.totalItems==0?1:$scope.paginationConf.currentPage,
		                rows: $scope.paginationConf.itemsPerPage,
		                vehiclenumber:$scope.carcode==undefined?"":$scope.carcode,
		                telephonenumber:$scope.carphone==undefined?"":$scope.carphone,
		                parkestate:$scope.carstatus==undefined?"":$scope.carstatus,
		                order:"entrytime"

		            };
		searchService.getParkingCar(postData).then(function (response) {
			if (response.data.code==200) {
			   // $scope.stallList = response.data;
			   var list =[] ;
			    $scope.carlist=[];
			   // $scope.carlist=response.data[0].body.data;
			   for (var i =0;i< response.data.body.data.length; i++) {
			   			list=response.data.body.data[i]
			   			var numend=list.parkestate==1?'':$scope.totalDateTime(list.entrytime,list.outtime);
			   			if(numend!=''){
			   				// if(!isNaN(numend)){
							   list.timedif = numend;
							// }
			   			}
			   			$scope.carlist.push(list);
			   };
			   		$scope.paginationConf.totalItems = response.data.body.totalRecords;
			   		}else{
			  	 	//暂无数据。
			  	 };
			  });
	};
	//分页处理
 // 重新获取数据条目
        var reGetProducts = function(){
            // 发送给后台的请求数据
        	var postDate = {
      			page: $scope.paginationConf.totalItems==0?1:$scope.paginationConf.currentPage,
                rows: $scope.paginationConf.itemsPerPage,
                vehiclenumber:$scope.carcode==undefined?"":$scope.carcode,
                telephonenumber:$scope.carphone==undefined?"":$scope.carphone,
                parkestate:$scope.carstatus==undefined?"":$scope.carstatus,
                order:"entrytime" 
            };
			searchService.getParkingCar(postDate).then(function (response) {
				if (response.data.code==200) {
				   // $scope.stallList = response.data;
				  var list =[];
				   $scope.carlist=[];
				   // $scope.carlist=response.data[0].body.data;
				   for (var i =0;i<response.data.body.data.length; i++) {
				   			list=response.data.body.data[i]
				   			var numend=list.parkestate==1?'':$scope.totalDateTime(list.entrytime,list.outtime);
				   			if(numend!=''){
				   				// if(!isNaN(numend)){
								   list.timedif = numend;
								// }
				   			}
				   			$scope.carlist.push(list);
				   };
				   $scope.paginationConf.totalItems = response.data.body.totalRecords;
				 }else{
				 	//暂无数据。
				 };
			});
            // $http.post('http://demo.miaoyueyue.com/php/demo/1/getProducts.php', postData).success(function(data){
            //     // 变更分页的总数
            //     $scope.paginationConf.totalItems = data.total;
            //     // 变更产品条目
            //     $scope.products = data.items;
            // });
        };

        $scope.ResetQuery = function(){
        	$scope.carcode = "";
        	$scope.carphone = "";
        	$scope.carstatus = "";
        	$scope.paginationConf.currentPage = 1;
        	reGetProducts();

        }

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
            // currentPage: 1,
            itemsPerPage: 10
            //以下实际应用中可注释
           // totalItems:800
        };
 
        // 通过$watch currentPage和itemperPage 当他们一变化的时候，重新获取数据条目
        $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', reGetProducts);
 
        
}]);