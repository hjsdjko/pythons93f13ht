(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pingcedajuan-detail"],{1282:function(t,i,e){var n=e("287f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("5d21dc5e",n,!0,{sourceMap:!1,shadowMode:!1})},"12cb":function(t,i,e){"use strict";e.r(i);var n=e("3b6c"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},"287f":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-12b69964]{--animate-duration:1s;--animate-delay:1s;--animate-repeat:1}.content[data-v-12b69964]{min-height:calc(100vh - 44px);box-sizing:border-box}.seat-list[data-v-12b69964]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;margin:%?20?%;border-radius:%?20?%;padding:%?20?%;font-size:%?30?%}.seat-list .seat-item[data-v-12b69964]{width:33.33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.seat-list .seat-item .seat-icon[data-v-12b69964]{width:%?50?%;height:%?50?%;margin-bottom:%?10?%}uni-audio[data-v-12b69964]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.audio[data-v-12b69964] .uni-audio-default{width:inherit}',""]),t.exports=i},"3b6c":function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("a481"),e("28a5"),e("ac6a"),e("f559"),e("55dd"),e("96cf");var a=n(e("3b8d")),r={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null,title:""}},components:{},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(i){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(e);case 3:n=t.sent,this.user=n.data,this.id=i.id,i.userid&&(this.userid=i.userid),this.init();case 8:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),onUnload:function(){this.timer&&clearInterval(this.timer)},onShow:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(i){var e,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(e);case 3:if(n=t.sent,this.user=n.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),a=uni.getStorageSync("crossCleanType"),!a){t.next=14;break}return uni.removeStorageSync("crossCleanType"),t.next=11,this.$api.info("pingcedajuan",this.id);case 11:n=t.sent,this.detail=n.data,this.title=this.detail.ceshimingcheng;case 14:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),destroyed:function(){},methods:{callClick:function(t){uni.makePhoneCall({phoneNumber:t})},onPayTap:function(){if(!this.user)return!1;uni.setStorageSync("paytable","pingcedajuan"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(t){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(t.id,"&userid=")+this.userid)},onAcrossTap:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(i,e,n,a,r,o){var s,l,d=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(d.length>6&&void 0!==d[6]?d[6]:1,this.user){t.next=3;break}return t.abrupt("return",!1);case 3:if(uni.setStorageSync("crossTable","pingcedajuan"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",a),uni.setStorageSync("statusColumnValue",o),uni.setStorageSync("tips",r),""==a||a.startsWith("[")){t.next=18;break}s=uni.getStorageSync("crossObj"),t.t0=regeneratorRuntime.keys(s);case 11:if((t.t1=t.t0()).done){t.next=18;break}if(l=t.t1.value,l!=a||s[l]!=o){t.next=16;break}return this.$utils.msg(r),t.abrupt("return");case 16:t.next=11;break;case 18:this.$utils.jump("../".concat(i,"/add-or-update?cross=true"));case 19:case"end":return t.stop()}}),t,this)})));function i(i,e,n,a,r,o){return t.apply(this,arguments)}return i}(),init:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var i,e,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=n.length>0&&void 0!==n[0]?n[0]:1,this.timer&&clearInterval(this.timer),t.next=4,this.$api.info("pingcedajuan",this.id);case 4:if(e=t.sent,this.detail=e.data,this.title=this.detail.ceshimingcheng,this.swiperList=this.detail.fengmian?this.detail.fengmian.split(","):[],this.detail.huifuneirong=this.detail.huifuneirong.replace(/img src/gi,'img style="width:100%;" src'),2!=i){t.next=13;break}return this.detail.discussnum++,t.next=13,this.$api.update("pingcedajuan",this.detail);case 13:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i.endSuccess(i.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var i=this;t=i.$base.url+t,uni.downloadFile({url:t,success:function(e){200===e.statusCode&&(i.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")}}};i.default=r},6509:function(t,i,e){"use strict";var n=e("1282"),a=e.n(n);a.a},"66bb":function(t,i,e){"use strict";e.r(i);var n=e("db08"),a=e("12cb");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("6509");var o,s=e("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"12b69964",null,!1,n["a"],o);i["default"]=l.exports},db08:function(t,i,e){"use strict";var n={"mescroll-uni":e("f05e").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption},on:{init:function(i){arguments[0]=i=t.$handleEvent(i),t.mescrollInit.apply(void 0,arguments)},down:function(i){arguments[0]=i=t.$handleEvent(i),t.downCallback.apply(void 0,arguments)},up:function(i){arguments[0]=i=t.$handleEvent(i),t.upCallback.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"container",style:{minHeight:"100vh",width:"100%",padding:"0",position:"relative",background:"#f2f2f2",height:"auto"}},[e("v-uni-swiper",{staticClass:"swiper",style:{width:"100%",background:"none",height:"480rpx"},attrs:{"indicator-dots":!0,autoplay:!0,circular:!0,"indicator-active-color":"#ff9400","indicator-color":"rgba(0, 0, 0, .3)",duration:600,interval:9e3,vertical:!1}},t._l(t.swiperList,(function(i,n){return e("v-uni-swiper-item",{key:n,style:{width:"100%",background:"none",height:"100%"}},["http"==i.substring(0,4)?e("v-uni-image",{style:{width:"100%",objectFit:"contain",background:"none",display:"block",height:"100%"},attrs:{mode:"aspectFill",src:i}}):e("v-uni-image",{style:{width:"100%",objectFit:"contain",background:"none",display:"block",height:"100%"},attrs:{mode:"aspectFill",src:t.baseUrl+i}})],1)})),1),e("v-uni-view",{staticClass:"detail-content",style:{padding:"0 0 80rpx",flexWrap:"wrap",background:"none",display:"flex",width:"100%",justifyContent:"space-between",height:"auto"}},[e("v-uni-view",{staticClass:"detail-list-item title",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 0px 0",background:"#fff",display:"flex",width:"calc(100% - 0px)",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 10rpx 0 0",color:"#333",textAlign:"left",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",fontWeight:"500"}},[t._v("测试名称：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.ceshimingcheng))])],1),e("v-uni-view",{staticClass:"detail-list-item title",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 0px 0",background:"#fff",display:"flex",width:"calc(100% - 0px)",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 10rpx 0 0",color:"#333",textAlign:"left",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",fontWeight:"500"}},[t._v("测试类别：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.ceshileibie))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 0px 0",background:"#fff",display:"flex",width:"calc(100% - 0px)",borderStyle:"solid",height:"auto"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.download(t.detail.datiwenjian)}}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 10rpx 0 0",color:"#333",textAlign:"left",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",fontWeight:"500"}},[t._v("答题文件：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v("下载文件")])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 0px 0",background:"#fff",display:"flex",width:"calc(100% - 0px)",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 10rpx 0 0",color:"#333",textAlign:"left",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",fontWeight:"500"}},[t._v("学号：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.xuehao))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 0px 0",background:"#fff",display:"flex",width:"calc(100% - 0px)",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 10rpx 0 0",color:"#333",textAlign:"left",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",fontWeight:"500"}},[t._v("姓名：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.xingming))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 0px 0",background:"#fff",display:"flex",width:"calc(100% - 0px)",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 10rpx 0 0",color:"#333",textAlign:"left",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",fontWeight:"500"}},[t._v("提交时间：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.tijiaoshijian))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 0px 0",background:"#fff",display:"flex",width:"calc(100% - 0px)",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 10rpx 0 0",color:"#333",textAlign:"left",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",fontWeight:"500"}},[t._v("教师工号：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.jiaoshigonghao))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 0px 0",background:"#fff",display:"flex",width:"calc(100% - 0px)",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{padding:"0 10rpx 0 0",color:"#333",textAlign:"left",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",fontWeight:"500"}},[t._v("教师姓名：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.jiaoshixingming))])],1),e("v-uni-view",{staticClass:"detail-list-item rich",style:{padding:"0 24rpx",margin:"0 auto 12rpx",borderColor:"#d8d8d8",borderWidth:"0 0 0px 0",background:"#fff",display:"flex",width:"calc(100% - 0px)",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 10rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",textAlign:"left"}},[t._v("回复内容：")]),e("v-uni-view",{staticClass:"rich-text",style:{width:"auto",padding:"0px 24rpx 24rpx 0",margin:"0",lineHeight:"48rpx",color:"#666",flex:"1"}},[e("v-uni-rich-text",{attrs:{nodes:t.detail.huifuneirong}})],1)],1),e("v-uni-view",{staticClass:"bottom-content bg-white tabbar border shop",style:{padding:"24rpx 24rpx 12rpx",margin:"0 auto",bottom:"0",display:"flex",borderRadius:"0px",flexWrap:"wrap",left:"0",background:"#fff",width:"100%",position:"fixed",height:"auto",order:"90",zIndex:"9"}},[t.userid&&t.isAuth("pingcedajuan","评测报告")?e("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",style:{border:"0",padding:"0 20rpx",margin:"0 3% 20rpx 0",color:"#fff",borderRadius:"40rpx",background:"#ff9400",width:"auto",fontSize:"28rpx",minWidth:"21%",lineHeight:"80rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onAcrossTap("pingcebaogao","","","","")}}},[t._v("评测报告")]):t._e(),!t.userid&&t.isAuthFront("pingcedajuan","评测报告")?e("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",style:{border:"0",padding:"0 20rpx",margin:"0 3% 20rpx 0",color:"#fff",borderRadius:"40rpx",background:"#ff9400",width:"auto",fontSize:"28rpx",minWidth:"21%",lineHeight:"80rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onAcrossTap("pingcebaogao","","","","")}}},[t._v("评测报告")]):t._e()],1)],1)],1)],1)],1)],1)},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}))}}]);