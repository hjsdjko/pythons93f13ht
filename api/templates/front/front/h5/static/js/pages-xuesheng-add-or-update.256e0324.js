(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xuesheng-add-or-update"],{"05f6":function(e,t,i){var r=i("51aa");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("6b6459dc",r,!0,{sourceMap:!1,shadowMode:!1})},1304:function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("28a5"),i("96cf");var n=r(i("3b8d")),a=r(i("e2b1")),o=r(i("064f")),s=r(i("bd56")),u={data:function(){return{cross:"",ruleForm:{xuehao:"",mima:"",xingming:"",xingbie:"",shouji:"",touxiang:"",zhuanye:"",nianling:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{xuehao:!1,mima:!1,xingming:!1,xingbie:!1,shouji:!1,touxiang:!1,zhuanye:!1,nianling:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var i,r,n,a,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:if(r=e.sent,this.user=r.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("appUserid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=14;break}return this.ruleForm.id=t.id,e.next=12,this.$api.info("xuesheng",this.ruleForm.id);case 12:r=e.sent,this.ruleForm=r.data;case 14:if(this.cross=t.cross,!t.cross){e.next=54;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 18:if((e.t1=e.t0()).done){e.next=54;break}if(a=e.t1.value,"xuehao"!=a){e.next=24;break}return this.ruleForm.xuehao=n[a],this.ro.xuehao=!0,e.abrupt("continue",18);case 24:if("mima"!=a){e.next=28;break}return this.ruleForm.mima=n[a],this.ro.mima=!0,e.abrupt("continue",18);case 28:if("xingming"!=a){e.next=32;break}return this.ruleForm.xingming=n[a],this.ro.xingming=!0,e.abrupt("continue",18);case 32:if("xingbie"!=a){e.next=36;break}return this.ruleForm.xingbie=n[a],this.ro.xingbie=!0,e.abrupt("continue",18);case 36:if("shouji"!=a){e.next=40;break}return this.ruleForm.shouji=n[a],this.ro.shouji=!0,e.abrupt("continue",18);case 40:if("touxiang"!=a){e.next=44;break}return this.ruleForm.touxiang=n[a].split(",")[0],this.ro.touxiang=!0,e.abrupt("continue",18);case 44:if("zhuanye"!=a){e.next=48;break}return this.ruleForm.zhuanye=n[a],this.ro.zhuanye=!0,e.abrupt("continue",18);case 48:if("nianling"!=a){e.next=52;break}return this.ruleForm.nianling=n[a],this.ro.nianling=!0,e.abrupt("continue",18);case 52:e.next=18;break;case 54:this.styleChange(),this.$forceUpdate(),uni.getStorageSync("raffleType")&&null!=uni.getStorageSync("raffleType")&&(uni.removeStorageSync("raffleType"),setTimeout((function(){o.onSubmitTap()}),300));case 57:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i,r,n,a,o,s,u,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.xuehao){e.next=3;break}return this.$utils.msg("学号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=9;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 9:if(!this.cross){e.next=26;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=26;break}if(t||(t=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=22;break}for(s in t)s==a&&(t[s]=o);return u=uni.getStorageSync("crossTable"),e.next=20,this.$api.update("".concat(u),t);case 20:e.next=26;break;case 22:i=Number(uni.getStorageSync("appUserid")),r=t["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 26:if(!r||!i){e.next=49;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=r,l={page:1,limit:10,crossuserid:i,crossrefid:r},e.next=32,this.$api.list("xuesheng",l);case 32:if(d=e.sent,!(d.data.total>=n)){e.next=39;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 39:if(!this.ruleForm.id){e.next=44;break}return e.next=42,this.$api.update("xuesheng",this.ruleForm);case 42:e.next=46;break;case 44:return e.next=46,this.$api.add("xuesheng",this.ruleForm);case 46:this.$utils.msgBack("提交成功");case 47:e.next=57;break;case 49:if(!this.ruleForm.id){e.next=54;break}return e.next=52,this.$api.update("xuesheng",this.ruleForm);case 52:e.next=56;break;case 54:return e.next=56,this.$api.add("xuesheng",this.ruleForm);case 56:this.$utils.msgBack("提交成功");case 57:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,i=t.getFullYear(),r=t.getMonth()+1,n=t.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),r=r>9?r:"0"+r,n=n>9?n:"0"+n,"".concat(i,"-").concat(r,"-").concat(n)},toggleTab:function(e){if(this.ro[e])return!1;this.$refs[e].show()}}};t.default=u},"51aa":function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-687e5810]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},"86c3":function(e,t,i){"use strict";var r,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{style:{minHeight:"100vh",width:"100%",padding:"24rpx",position:"relative",background:"#f2f2f2",height:"auto"}},[i("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx",borderRadius:"0px",background:"#fff",display:"block",height:"auto"}},[i("v-uni-view",{style:{padding:"0px 24rpx",margin:"0 0 24rpx 0",borderColor:"#eee",alignItems:"center",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("学号")]),i("v-uni-input",{style:{border:"2rpx solid #fff",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255,255,255,.6)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.xuehao,placeholder:"学号",type:"text"},model:{value:e.ruleForm.xuehao,callback:function(t){e.$set(e.ruleForm,"xuehao",t)},expression:"ruleForm.xuehao"}})],1),i("v-uni-view",{style:{padding:"0px 24rpx",margin:"0 0 24rpx 0",borderColor:"#eee",alignItems:"center",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("密码")]),i("v-uni-input",{style:{border:"2rpx solid #fff",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255,255,255,.6)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.mima,placeholder:"密码",type:"text"},model:{value:e.ruleForm.mima,callback:function(t){e.$set(e.ruleForm,"mima",t)},expression:"ruleForm.mima"}})],1),i("v-uni-view",{style:{padding:"0px 24rpx",margin:"0 0 24rpx 0",borderColor:"#eee",alignItems:"center",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("姓名")]),i("v-uni-input",{style:{border:"2rpx solid #fff",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255,255,255,.6)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名",type:"text"},model:{value:e.ruleForm.xingming,callback:function(t){e.$set(e.ruleForm,"xingming",t)},expression:"ruleForm.xingming"}})],1),i("v-uni-view",{staticClass:" select",style:{padding:"0px 24rpx",margin:"0 0 24rpx 0",borderColor:"#eee",alignItems:"center",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("性别")]),i("v-uni-picker",{style:{border:"2rpx solid #fff",width:"100%",padding:"0 24rpx",flex:"1",background:"rgba(255,255,255,.6)",height:"auto"},attrs:{disabled:e.ro.xingbie,value:e.xingbieIndex,range:e.xingbieOptions},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.xingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#666"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1),i("v-uni-view",{style:{padding:"0px 24rpx",margin:"0 0 24rpx 0",borderColor:"#eee",alignItems:"center",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("手机")]),i("v-uni-input",{style:{border:"2rpx solid #fff",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255,255,255,.6)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.shouji,placeholder:"手机",type:"text"},model:{value:e.ruleForm.shouji,callback:function(t){e.$set(e.ruleForm,"shouji",t)},expression:"ruleForm.shouji"}})],1),i("v-uni-view",{style:{padding:"0px 24rpx",margin:"0 0 24rpx 0",borderColor:"#eee",alignItems:"center",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.touxiangTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("头像")]),e.ruleForm.touxiang?i("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.ruleForm.touxiang.split(",")[0],mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),i("v-uni-view",{style:{padding:"0px 24rpx",margin:"0 0 24rpx 0",borderColor:"#eee",alignItems:"center",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("专业")]),i("v-uni-input",{style:{border:"2rpx solid #fff",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255,255,255,.6)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.zhuanye,placeholder:"专业",type:"text"},model:{value:e.ruleForm.zhuanye,callback:function(t){e.$set(e.ruleForm,"zhuanye",t)},expression:"ruleForm.zhuanye"}})],1),i("v-uni-view",{style:{padding:"0px 24rpx",margin:"0 0 24rpx 0",borderColor:"#eee",alignItems:"center",borderWidth:"0 0 2rpx",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("年龄")]),i("v-uni-input",{style:{border:"2rpx solid #fff",padding:"0px 24rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255,255,255,.6)",fontSize:"28rpx",height:"80rpx"},attrs:{disabled:e.ro.nianling,placeholder:"年龄",type:"text"},model:{value:e.ruleForm.nianling,callback:function(t){e.$set(e.ruleForm,"nianling",t)},expression:"ruleForm.nianling"}})],1),i("v-uni-view",{staticClass:"btn",style:{width:"100%",flexWrap:"wrap",justifyContent:"center",display:"flex",height:"auto"}},[i("v-uni-button",{staticClass:"bg-red",style:{border:"0",padding:"0 40rpx",margin:"0 20rpx 40rpx",color:"#fff",borderRadius:"40rpx",background:"#ff5f15",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",minWidth:"200rpx",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}))},ddd7:function(e,t,i){"use strict";var r=i("05f6"),n=i.n(r);n.a},f19e:function(e,t,i){"use strict";i.r(t);var r=i("86c3"),n=i("f2c1");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("ddd7");var o,s=i("f0c5"),u=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"687e5810",null,!1,r["a"],o);t["default"]=u.exports},f2c1:function(e,t,i){"use strict";i.r(t);var r=i("1304"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a}}]);