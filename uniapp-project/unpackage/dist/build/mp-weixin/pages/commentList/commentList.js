(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/commentList/commentList"],{5871:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={CommentBox:function(){return n.e("components/CommentBox/CommentBox").then(n.bind(null,"357d"))},uniLoadMore:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-load-more/components/uni-load-more/uni-load-more")]).then(n.bind(null,"4bce"))},CommentMasker:function(){return n.e("components/CommentMasker/CommentMasker").then(n.bind(null,"bb9f"))}},o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.showPopup=t})},a=[]},"5b86":function(e,t,n){"use strict";n.r(t);var r=n("5871"),o=n("c1d0");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("ef1a");var i=n("f0c5"),c=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);t["default"]=c.exports},7745:function(e,t,n){},a8df:function(e,t,n){"use strict";(function(e,t){var r=n("4ea4");n("0d76"),n("a9ff");r(n("66fd"));var o=r(n("5b86"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},c1d0:function(e,t,n){"use strict";n.r(t);var r=n("e799"),o=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},e799:function(e,t,n){"use strict";(function(e){var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("2eee")),a=r(n("9523")),i=r(n("448a")),c=r(n("c973"));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={onLoad:function(e){this.articleId=e.articleId,this._getCommentList()},onReachBottom:function(){"noMore"!==this.isLoad&&"loading"!==this.isLoad&&(this.page++,this._getCommentList())},data:function(){return{articleId:"",commentList:[],pageSize:5,page:1,isLoad:"more",showPopup:!1,replyData:{}}},methods:{_getCommentList:function(){var e=this;return(0,c.default)(o.default.mark((function t(){var n,r;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoad="loading",t.next=3,e.$http.get_comment_list({articleId:e.articleId,pageSize:e.pageSize,page:e.page});case 3:n=t.sent,n.length<e.pageSize?e.isLoad="noMore":e.isLoad="more",r=JSON.parse(JSON.stringify(e.commentList)),r.push.apply(r,(0,i.default)(n)),e.commentList=r;case 8:case"end":return t.stop()}}),t)})))()},_sendCommentData:function(t){var n=this;return(0,c.default)(o.default.mark((function r(){var a;return o.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.$http.add_comment(s({userId:n.userInfo._id,articleId:n.articleId,content:t},n.replyData));case 2:a=r.sent,e.showToast({title:a.msg,mask:!0}),n.showPopup=!1,n.replyData={},n.page=1,n.commentList=[],n.isLoad="more",n._getCommentList();case 10:case"end":return r.stop()}}),r)})))()},commentReply:function(e){this.replyData={comment_id:e.comment.comment_id,is_reply:e.isReply},e.comment.reply_id&&(this.replyData.reply_id=e.comment.reply_id),this.openMaskerComment()},openMaskerComment:function(){var e=this;return(0,c.default)(o.default.mark((function t(){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.checkedIsLogin();case 2:e.showPopup=!0;case 3:case"end":return t.stop()}}),t)})))()}}};t.default=d}).call(this,n("543d")["default"])},ef1a:function(e,t,n){"use strict";var r=n("7745"),o=n.n(r);o.a}},[["a8df","common/runtime","common/vendor"]]]);