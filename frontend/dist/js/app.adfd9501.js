(function(e){function t(t){for(var n,s,o=t[0],r=t[1],u=t[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&m.push(l[s][0]),l[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);c&&c(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var r=a[o];0!==l[r]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},l={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=r;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),l=a.n(n);l.a},2494:function(e,t,a){},4534:function(e,t,a){"use strict";var n=a("a89e"),l=a.n(n);l.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),l=a("8c4f"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}},[a("MessageBoard")],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"message-board"}},[a("el-container",{staticStyle:{height:"100%",border:"1px solid #eee"}},[a("el-header",{staticStyle:{"text-align":"right","font-size":"10px"}},[a("el-button",{staticStyle:{display:"inline-block","margin-right":"15px"},on:{click:function(t){e.postDialog.dialogVisible=!0}}},[a("i",{staticClass:"el-icon-edit"},[e._v("发表")])]),a("el-button",{staticStyle:{display:"inline-block","margin-right":"15px"}},[a("i",{staticClass:"el-icon-refresh",staticStyle:{"object-fit":"fill"}},[e._v("刷新")])]),a("el-dropdown",{attrs:{trigger:"click"}},[a("el-button",[a("i",{staticClass:"el-icon-user",staticStyle:{"object-fit":"contain"}},[e.state.username_valid?a("span",[e._v(e._s(e.state.username))]):a("span",[e._v("匿名")])])]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e.state.username_valid?a("el-dropdown-item",[a("a",{on:{click:function(t){return e.clearUserName()}}},[e._v("注销")])]):e._e(),e.state.username_valid?a("el-dropdown-item",[a("a",{on:{click:function(t){e.loginDialog.dialogVisible=!0}}},[e._v("修改")])]):e._e(),e.state.username_valid?e._e():a("el-dropdown-item",[a("a",{on:{click:function(t){e.loginDialog.dialogVisible=!0}}},[e._v("设置")])])],1)],1)],1),a("el-main",[a("MessageList")],1),a("el-footer",[e._v("@CST2021SE")])],1),a("PostDialog"),a("LoginDialog"),a("el-dialog",{staticStyle:{"text-align":"center"},attrs:{title:e.alertDialog.text,visible:e.alertDialog.dialogVisible,width:"40%"},on:{"update:visible":function(t){return e.$set(e.alertDialog,"dialogVisible",t)}}})],1)},r=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"message-list"}},[a("MessageBlock")],1)},c=[],d=(a("cb29"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-menu",{staticStyle:{background:"#b0c7e7","border-radius":"4px",margin:"5px"},attrs:{"default-openeds":[]}},[a("el-submenu",{staticStyle:{"text-align":"left"},attrs:{index:"view"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-chat-square"})]),a("div",{staticStyle:{display:"flex","margin-top":"3px","font-size":"small",color:"grey"}},[a("span",{staticClass:"messageblock-datetime",staticStyle:{padding:"4px"}}),a("span",{staticClass:"messageblock-user",staticStyle:{padding:"4px"}},[e._v(e._s(e.user))])]),a("div",{staticClass:"messageblock-content"},[e._v(e._s(e.message))])],2)],1)}),m=[],f=(a("a9e3"),{name:"MessageBlock",props:{title:{type:String,default:function(){return"unknown title"}},message:{type:String,default:function(){return"unknown content"}},user:{type:String,default:function(){return"unknown user"}},timestamp:{type:Number,default:function(){return 0}}},computed:{datetime:function(){var e=new Date;return e.setTime(this.timestamp),e.toLocaleString()}}}),g=f,p=(a("4534"),a("2877")),b=Object(p["a"])(g,d,m,!1,null,"32b608b9",null),v=b.exports,_={name:"MessageList",components:{MessageBlock:v},props:{messageList:{type:Array,default:function(){return new Array(5).fill({title:"Hello",message:"Hello World!",user:"unknown",timestamp:(new Date).getTime()})}}}},h=_,y=Object(p["a"])(h,u,c,!1,null,null,null),x=y.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticStyle:{"text-align":"center"},attrs:{title:"发表",visible:e.dialogVisible,"show-close":!1,width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"标题"}},[a("el-input",{attrs:{placeholder:"title"}})],1),a("el-form-item",{attrs:{label:"内容"}},[a("el-input",{attrs:{type:"textarea",placeholder:"message"}})],1),a("el-form-item",{attrs:{label:"发帖名"}},[e.state.username_valid?a("el-input",{attrs:{disabled:!0,value:e.state.username}}):e._e(),!1===e.state.username_valid?a("span",{staticStyle:{color:"red"}},[e._v("请在主页右上设置名字!")]):e._e()],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",[e._v("取 消")]),a("el-button",{attrs:{type:"primary",disabled:!1===e.state.username_valid}},[e._v("确 定")])],1)],1)},S=[],k={name:"PostDialog",props:{dialogVisible:{type:Boolean,default:function(){return!0}},state:{type:Object,default:function(){return{username:"",username_valid:!1}}}},data:function(){return{}},methods:{}},D=k,j=Object(p["a"])(D,w,S,!1,null,null,null),O=j.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticStyle:{"text-align":"center"},attrs:{title:"设置发帖名",visible:e.loginDialog.dialogVisible,width:"40%"},on:{"update:visible":function(t){return e.$set(e.loginDialog,"dialogVisible",t)}}},[a("span",[e._v("这里不做登录校验，仅仅演示一个设置功能")]),a("el-form",{attrs:{model:e.loginDialog.form,"label-width":"80px"}},[""!==e.loginDialog.dialogError?a("span",{staticStyle:{color:"red"}},[e._v(e._s(e.loginDialog.dialogError))]):e._e(),e.state.username_valid?a("el-form-item",{attrs:{label:"原用户名"}},[a("el-input",{attrs:{disabled:"",value:e.state.username}})],1):e._e(),a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{attrs:{"aria-placeholder":e.state},model:{value:e.loginDialog.form.username,callback:function(t){e.$set(e.loginDialog.form,"username",t)},expression:"loginDialog.form.username"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.loginDialog.dialogVisible=!1}}},[e._v("返回")]),a("el-button",{attrs:{type:"primary",disabled:e.state.username_valid&&e.state.username===e.loginDialog.form.username},on:{click:e.setUserName}},[e.state.username_valid?a("span",[e._v("修改")]):a("span",[e._v("设置")])])],1)],1)},E=[],V={name:"LoginDialog",props:{loginDialog:{type:Object,default:function(){return{dialogVisible:!1,dialogError:"",form:{username:""}}}},state:{type:Object,default:function(){return{username:"",username_valid:!1}}},updateUsername:{type:Object,default:function(){return function(){}}}},methods:{setUserName:function(){}}},$=V,L=Object(p["a"])($,M,E,!1,null,"8bad56a2",null),C=L.exports,P={name:"MessageBoard",components:{LoginDialog:C,MessageList:x,PostDialog:O},data:function(){return{postDialog:{dialogVisible:!1},loginDialog:{dialogVisible:!1,dialogError:"",form:{username:""}},alertDialog:{text:"",dialogVisible:!1},state:{username:"",username_valid:!1},messageList:[]}},methods:{clearUserName:function(){}},watch:{"state.username":{handler:function(e){this.state.username_valid=/^[A-Za-z\u4e00-\u9fa5][-A-Za-z0-9\u4e00-\u9fa5_]*$/.test(e)}}}},B=P,T=(a("fa64"),Object(p["a"])(B,o,r,!1,null,"9d37de88",null)),A=T.exports,z={name:"Home",components:{MessageBoard:A}},N=z,U=Object(p["a"])(N,i,s,!1,null,null,null),H=U.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"stage1"}},[a("MessageBlock")],1)},J=[],q={name:"Stage1",components:{MessageBlock:v}},G=q,R=Object(p["a"])(G,Z,J,!1,null,null,null),W=R.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"stage2"}},[a("MessageList")],1)},I=[],K={name:"Stage2",components:{MessageList:x}},Q=K,X=Object(p["a"])(Q,F,I,!1,null,null,null),Y=X.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"stage3"}},[a("MessageList"),a("PostDialog")],1)},te=[],ae=(a("4d63"),a("ac1f"),a("25f0"),a("466d"),{getCookie:function(e,t){var a=new RegExp("(?:^|(?:; ))"+e+"=([^;]*)"),n=document.cookie.match(a);return console.log(n),n?unescape(n[1]):t},setCookie:function(e,t,a){var n=new Date;n.setTime(n.getTime()+a),document.cookie=e+"="+escape(t)+";expires="+n.toGMTString()}}),ne=ae,le={name:"Stage3",components:{MessageList:x,PostDialog:O},mounted:function(){ne.setCookie("username","Alice",1e9),this.state.username="Alice"},data:function(){return{messageList:[],dialogVisible:!0,state:{username:"",username_valid:!1}}},methods:{},watch:{"state.username":{handler:function(e){this.state.username_valid=/^[A-Za-z\u4e00-\u9fa5][-A-Za-z0-9\u4e00-\u9fa5_]*$/.test(e)}}}},ie=le,se=Object(p["a"])(ie,ee,te,!1,null,null,null),oe=se.exports;n["default"].use(l["a"]);var re=[{path:"/",name:"Home",component:H},{path:"/stage1",name:"Stage1",component:W},{path:"/stage2",name:"Stage2",component:Y},{path:"/stage3",name:"Stage3",component:oe}],ue=new l["a"]({mode:"history",routes:re}),ce=ue,de=a("5c96"),me=a.n(de),fe=(a("0fae"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)}),ge=[],pe=(a("034f"),{}),be=Object(p["a"])(pe,fe,ge,!1,null,null,null),ve=be.exports;n["default"].use(me.a),n["default"].config.productionTip=!1,new n["default"]({router:ce,render:function(e){return e(ve)}}).$mount("#app")},"85ec":function(e,t,a){},a89e:function(e,t,a){},fa64:function(e,t,a){"use strict";var n=a("2494"),l=a.n(n);l.a}});
//# sourceMappingURL=app.adfd9501.js.map