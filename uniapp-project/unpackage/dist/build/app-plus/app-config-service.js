
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/follow/follow","pages/self/self","pages/search/search","pages/userInfo/login/login","pages/labelAdmin/labelAdmin","pages/articleDetail/articleDetail","pages/commentList/commentList"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"脱发神器","navigationBarBackgroundColor":"#f25037","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#666","selectedColor":"#f25037","backgroundColor":"#fff","list":[{"pagePath":"pages/index/index","iconPath":"static/img/home.png","selectedIconPath":"static/img/home-active.png","text":"首页"},{"pagePath":"pages/follow/follow","iconPath":"static/img/follow.png","selectedIconPath":"static/img/follow-active.png","text":"关注"},{"pagePath":"pages/self/self","iconPath":"static/img/my.png","selectedIconPath":"static/img/my-active.png","text":"我的"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"脱发俱乐部","compilerVersion":"4.07","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/follow/follow","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"关注","enablePullDownRefresh":false}},{"path":"/pages/self/self","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"用户信息","enablePullDownRefresh":false}},{"path":"/pages/search/search","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/userInfo/login/login","meta":{},"window":{"navigationBarTitleText":"用户登录","enablePullDownRefresh":false}},{"path":"/pages/labelAdmin/labelAdmin","meta":{},"window":{"navigationBarTitleText":"标签管理","enablePullDownRefresh":false}},{"path":"/pages/articleDetail/articleDetail","meta":{},"window":{"navigationBarTitleText":"文章详情","enablePullDownRefresh":false}},{"path":"/pages/commentList/commentList","meta":{},"window":{"navigationBarTitleText":"评论列表","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
