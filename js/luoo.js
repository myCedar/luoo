/**
 * Created by tarena on 2017/4/15.
 */
/***定义angular***/
var luo=angular.module('luoApp',['ng','ngRoute']);
/**Body控制器***/
luo.controller('bodyCtrl',['$scope', '$http', '$httpParamSerializerJQLike',
    function ($scope, $http, $httpParamSerializerJQLike){
    $scope.login_reg=true;
    $scope.loginAndReg=function(){
        $scope.login_reg=!$scope.login_reg;
    };
    $scope.jumpUrl=function(url){
        $location.path(url);
    };
    $scope.luooLogin=function(){
        var result = $httpParamSerializerJQLike($scope.user);
        $http.get('data/success.php?'+result).success(
            function (data) {
              console.log(data);
            }
        )
    };
    $scope.luooReg=function(){
            var reg = $httpParamSerializerJQLike($scope.reg);
            $http.get('data/success.php?'+reg).success(
                function (data) {
                    console.log(data);
                }
            )
        }

}]);
/****配置路由词典****/
luo.config(function($routeProvider){
    $routeProvider.when('/main',{
        templateUrl:"snippets/main.html",
        controller:'mainCtrl'
    }).when('/periodical',{
        templateUrl:"snippets/periodical.html"
    }).when('/singleMusic',{
        templateUrl:"snippets/singleMusic.html",
        controller:'singleMusicCtrl'
    }).when('/specialColumn',{
        templateUrl:"snippets/specialColumn.html"
    }).when('/activity',{
        templateUrl:"snippets/activity.html",
        controller:'activeCtrl'
    }).when('/luoApp',{
        templateUrl:"snippets/luoApp.html",
        controller:'luooAppCtrl'
    }).otherwise({redirectTo:"/main"})
});
//页面小型特效
luo.controller('mainCtrl',['$scope',function($scope){
        $(function($){
            $(".main_music_content").hover(function(e){
                    $(e.target).css({
                        opacity:0.3
                    }).siblings('.main_music_img').css({
                        opacity:1
                    });
                    },
                function(e){
                    $(e.target).css({
                        opacity:0
                    }).siblings('.main_music_img').css({
                        opacity:0
                    });});
        }(jQuery));
        $(function($){
            var timer1=setInterval(function(){
                $('.carousel').carousel({
                    interval: 2000
                })
            }(jQuery));
        },2000);
    }]
);
luo.controller('singleMusicCtrl',['$scope',function($scope){
        var shuishou=document.getElementById("shuishou");
        $(function($){
            $("#mediaTile").hover(function(){
                    $("#mediaTile").css({color:"red"}).children("span").css({
                        opacity:1
                    })
                    },
                function(e){if(shuishou.paused){
                    $("#mediaTile").css({color:"black"}).children("span").css({
                        opacity:0
                    });}}).click(
                function(){
                    if(shuishou.paused){
                        shuishou.play();
                    }else{
                        shuishou.pause();
                    };
                    $("#mediaTile").children("span").toggleClass("glyphicon-play").toggleClass("glyphicon-pause");
                }
            )
        }(jQuery));

    }]
);
luo.controller('luooAppCtrl',['$scope','$interval',function($scope,$interval){
        var slidePhoneImg=document.getElementById("slide_phone_img");
        var slideWight=0;
        $interval(function(){
            console.log(slidePhoneImg);
            slidePhoneImg.style.cssText="margin-left:"+slideWight+'px';
            slideWight-=190;
            if(slideWight==-1140){
                slideWight=0;
            }
        },1000)
    }]
);
luo.controller('activeCtrl',['$scope',function($scope){
        //创建地图实例
        var map = new BMap.Map("baidu_map");
        // 创建点坐标
        var point = new BMap.Point(108.948637,34.238673);
        // 初始化地图，设置中心点坐标和地图级别
        // (1~19) 缩放级别
        map.centerAndZoom(point, 15);
        //添加控件
        //鼠标滚轮
        map.enableScrollWheelZoom(true);
        //导航控件
        map.addControl(new BMap.NavigationControl());
        //缩略图
        map.addControl(new BMap.OverviewMapControl());
        //比例尺
        map.addControl(new BMap.ScaleControl());
        //地图类
        map.addControl(new BMap.MapTypeControl());
    }]
);


