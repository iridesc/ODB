(function(e){function r(r){for(var o,n,i=r[0],l=r[1],c=r[2],u=0,p=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(t,n)&&t[n]&&p.push(t[n][0]),t[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(r);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,r=0;r<s.length;r++){for(var a=s[r],o=!0,i=1;i<a.length;i++){var l=a[i];0!==t[l]&&(o=!1)}o&&(s.splice(r--,1),e=n(n.s=a[0]))}return e}var o={},t={app:0},s=[];function n(r){if(o[r])return o[r].exports;var a=o[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=o,n.d=function(e,r,a){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(a,o,function(r){return e[r]}.bind(null,o));return a},n.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=r,i=i.slice();for(var c=0;c<i.length;c++)r(i[c]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,r,a){e.exports=a("56d7")},"034f":function(e,r,a){"use strict";var o=a("85ec"),t=a.n(o);t.a},"56d7":function(e,r,a){"use strict";a.r(r);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("a593"),t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",["loginPage"==e.location?a("div",{attrs:{id:"app"}},[a("b-card",{staticClass:"speace shadow",attrs:{header:"OrderManager","header-border-variant":"info","border-variant":"info",align:"center"}},[a("b-row",[a("b-col"),a("b-col",[a("h4",[e._v("账户")]),a("b-input",{model:{value:e.username,callback:function(r){e.username=r},expression:"username"}}),a("h4",[e._v("密码")]),a("b-input",{attrs:{type:"password"},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}}),a("br"),a("b-button",{attrs:{variant:"success"},on:{click:e.login}},[e._v("login")])],1),a("b-col")],1)],1)],1):"workBench"==e.location?a("div",{attrs:{id:"app"}},[a("WorkBench",{attrs:{username:e.username,makeToast:e.makeToast,role:e.role}})],1):e._e()])},s=[],n=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",[a("h4",{staticClass:"textCenter"},[e._v(" 你好，"+e._s(e.username)+"！ "),a("b-badge",{attrs:{size:"sm",variant:"success"},on:{click:e.logout}},[e._v("登出")])],1),a("br"),"store"!=e.role?a("b-card",{staticClass:"speace shadow",attrs:{header:"添加订单","header-border-variant":"info","border-variant":"info",align:"center"}},[a("div",[a("b-row",[a("b-col",[a("b-card",{staticClass:"shadow",attrs:{"border-variant":"danger"}},[a("b-form-group",{attrs:{label:"重量"}},[a("b-form-radio-group",{attrs:{options:e.mass,plain:"",name:"plain-inline1"},model:{value:e.selectedmass,callback:function(r){e.selectedmass=r},expression:"selectedmass"}})],1)],1)],1),a("b-col",[a("b-card",{staticClass:"shadow",attrs:{"border-variant":"danger"}},[a("b-form-group",{attrs:{label:"大小"}},[a("b-form-radio-group",{attrs:{options:e.size,plain:"",name:"plain-inline2"},model:{value:e.selectedsize,callback:function(r){e.selectedsize=r},expression:"selectedsize"}})],1)],1)],1),a("b-col",[a("b-card",{staticClass:"shadow",attrs:{"border-variant":"danger"}},[a("b-form-group",{attrs:{label:"包装"}},[a("b-form-radio-group",{attrs:{options:e.packaging,plain:"",name:"plain-inline3"},model:{value:e.selectedpackaging,callback:function(r){e.selectedpackaging=r},expression:"selectedpackaging"}})],1)],1)],1)],1)],1),a("br"),a("b-card",{staticClass:"shadow",attrs:{"border-variant":"danger"}},[e._v(" 收件信息（收件人，电话，地址）： "),a("b-input",{model:{value:e.orderInfo,callback:function(r){e.orderInfo=r},expression:"orderInfo"}})],1),a("b-badge",{attrs:{variant:"primary "},on:{click:e.addOrder}},[e._v("提交订单")])],1):e._e(),a("br"),a("b-table",{attrs:{fields:e.fields,striped:"",hover:"",items:e.orders},scopedSlots:e._u([{key:"cell(edit)",fn:function(r){return[a("b-badge",{attrs:{size:"sm",variant:"primary "},on:{click:function(a){return e.rowEdit(r)}}},[e._v(" "+e._s(r.detailsShowing?"取消":"修改")+" ")])]}},{key:"row-details",fn:function(r){return[a("b-card",[e._v(" 规格选择: "),a("div",[a("b-row",[a("b-col",[a("b-form-group",{attrs:{label:"重量"}},[a("b-form-radio-group",{attrs:{options:e.mass,plain:"",name:"plain-inline1",disabled:"store"==e.role},model:{value:e.selectedmass,callback:function(r){e.selectedmass=r},expression:"selectedmass"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{label:"大小"}},[a("b-form-radio-group",{attrs:{options:e.size,plain:"",name:"plain-inline2",disabled:"store"==e.role},model:{value:e.selectedsize,callback:function(r){e.selectedsize=r},expression:"selectedsize"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{label:"包装"}},[a("b-form-radio-group",{attrs:{options:e.packaging,plain:"",name:"plain-inline3",disabled:"store"==e.role},model:{value:e.selectedpackaging,callback:function(r){e.selectedpackaging=r},expression:"selectedpackaging"}})],1)],1)],1)],1),e._v(" 收件信息： "),a("b-input",{attrs:{disabled:"store"==e.role},model:{value:e.orderInfo,callback:function(r){e.orderInfo=r},expression:"orderInfo"}}),e._v(" 快递单号： "),a("b-input",{attrs:{disabled:"saler"==e.role},model:{value:e.nowexpnum,callback:function(r){e.nowexpnum=r},expression:"nowexpnum"}}),a("b-badge",{attrs:{size:"sm"},on:{click:function(a){return e.updateOrder(r.item.id)}}},[e._v("保存")])],1)]}},{key:"cell(info)",fn:function(r){return[a("p",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:r.item.info,expression:"row.item.info",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}]},[e._v(" "+e._s(r.item.info)+" ")])]}},{key:"cell(expnum)",fn:function(r){return[""!=r.item.expnum?a("p",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:r.item.expnum,expression:"row.item.expnum",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}]},[e._v(" "+e._s(r.item.expnum)+" ")]):a("b-badge",{attrs:{variant:"danger"}},[e._v(" 等待发货 ")])]}}])})],1)},i=[],l=(a("4160"),a("ac1f"),a("1276"),a("159b"),{name:"WorkBench",props:["username","makeToast","role"],created:function(){var e=this;this.getOrders(),console.log(this.username),setInterval((function(){e.getOrders()}),12e4)},methods:{makeProduct:function(){this.product=this.selectedsize+"-"+this.selectedmass+"-"+this.selectedpackaging},rowEdit:function(e){if(!e.detailsShowing){var r=e.item,a=r.product.split("-");this.selectedsize=a[0],this.selectedmass=a[1],this.selectedpackaging=a[2],this.orderInfo=r.info,this.nowexpnum=r.expnum,console.log(this.selectedsize),console.log(this.selectedmass),console.log(this.selectedpackaging),console.log(this.orderInfo),console.log(this.nowexpnum)}e.toggleDetails()},onCopy:function(){this.makeToast("Success!","复制成功！","success")},onError:function(){this.makeToast("Error!","复制失败！请手动复制！","danger")},logout:function(){this.$cookies.remove("userStatus"),location.reload()},getOrders:function(){var e=this;this.axios.post("/api/",JSON.stringify({reason:"getOrders",username:this.username})).then((function(r){var a=r.data;console.log(a),a.suc?(e.orders=a.orders,e.orders=[],a.orders.forEach((function(r){var a=new Date(1e3*r.addtime);r.addtime=a.getMonth()+"/"+a.getDay()+"/"+a.getHours(),r._rowVariant="info",e.orders.push(r)}))):e.makeToast("Error!","订单载入出错！！！！","danger")}))},addOrder:function(){var e=this;this.makeProduct(),this.axios.post("/api/",JSON.stringify({reason:"addOrder",saler:this.username,info:this.orderInfo,product:this.product})).then((function(r){var a=r.data;console.log(a),a.suc?(e.makeToast("Success!","添加成功！","success"),e.getOrders()):e.makeToast("Error!","订单添加出错！！！！\n"+a.reason,"danger")}))},updateOrder:function(e){var r=this;this.makeProduct();var a={reason:"updateOrder",orderId:e,expnum:this.nowexpnum,product:this.product,info:this.orderInfo};this.axios.post("/api/",JSON.stringify(a)).then((function(e){var a=e.data;console.log(a),a.suc?(r.makeToast("Success!","保存成功！","success"),r.getOrders()):r.makeToast("Error!","保存出错！！！\n"+a.reason,"danger")}))}},data:function(){return{mass:[{text:"5斤",value:"5斤"},{text:"10斤",value:"10斤"}],packaging:[{text:"非礼盒",value:"非礼盒"},{text:"礼盒",value:"礼盒"}],size:[{text:"大",value:"大"},{text:"中",value:"中"},{text:"小",value:"小"}],selectedmass:"",selectedsize:"",selectedpackaging:"",orderInfo:"",product:"",nowexpnum:"",noworderid:"",fields:[{key:"addtime",sortable:!0,variant:"primary"},{key:"saler",sortable:!0,variant:"primary"},{key:"info",sortable:!0,variant:"primary"},{key:"product",sortable:!0,variant:"primary"},{key:"expnum",sortable:!0,variant:"primary"},{key:"edit",variant:"primary"}],orders:[]}}}),c=l,d=a("2877"),u=Object(d["a"])(c,n,i,!1,null,"4d1b03f4",null),p=u.exports,m={name:"App",components:{WorkBench:p},created:function(){if(document.querySelector("body").setAttribute("class","bg textColor"),console.log(this.location),console.log(this.$cookies.isKey("userStatus")),console.log(this.$cookies.get("userStatus")),this.$cookies.isKey("userStatus")){var e=this.$cookies.get("userStatus");e.username&&(this.logined=e.logined,this.username=e.username,this.password=e.password,this.role=e.role,this.location=e.location,this.makeToast("Success!","自动登陆成功！","success"))}},methods:{login:function(){var e=this;this.axios.post("/api/",JSON.stringify({reason:"login",username:this.username,password:this.password})).then((function(r){var a=r.data;console.log(a),a.suc?(e.logined=!0,e.location="workBench",e.$cookies.set("userStatus",{logined:e.logined,username:e.username,password:e.password,role:e.role,location:e.location}),e.makeToast("Notice!","登陆成功！")):e.makeToast("Notice!","登陆出错！！！！")}))},makeToast:function(e,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(r,{title:e,variant:a,solid:!0})}},data:function(){return{logined:!1,username:"",password:"",role:"",location:"loginPage"}}},f=m,b=(a("034f"),Object(d["a"])(f,t,s,!1,null,null,null)),g=b.exports,v=a("bc3a"),h=a.n(v),k=a("a7fe"),w=a.n(k),y=a("3aae"),x=a.n(y),_=a("05b9"),O=(a("f4cd"),a("fa68"),a("9306")),S=a.n(O);o["default"].use(S.a),o["default"].use(x.a),o["default"].use(w.a,h.a),o["default"].use(_["a"]),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,r,a){}});
//# sourceMappingURL=app.1f516a0d.js.map