(function(t){function a(a){for(var s,r,o=a[0],c=a[1],l=a[2],f=0,h=[];f<o.length;f++)r=o[f],i[r]&&h.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(a);while(h.length)h.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,o=1;o<e.length;o++){var c=e[o];0!==i[c]&&(s=!1)}s&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},i={app:0},n=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var d=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},4678:function(t,a,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var a=n(t);return e(a)}function n(t){var a=s[t];if(!(a+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id="4678"},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),i=e("bb71");e("da64");s["a"].use(i["a"],{iconfont:"md"});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-start":""}},t._l(t.blockchain,function(t){return e("v-flex",{key:t.index,attrs:{xs8:""}},[e("BlocoCard",{staticStyle:{"margin-top":"50px"},attrs:{index:t.index,title:t.title,valid:t.valid,timestamp:t.timestamp,indexAnterior:t.indexAnterior,data:t.data,hashAnterior:t.hashAnterior,hash:t.hash}})],1)}),1),e("v-layout",{staticStyle:{"margin-top":"30px"},attrs:{"justify-center":""}},[e("v-flex",{attrs:{x12:"","text-xs-center":""}},[e("h2",[t._v("Blocos na rede: "+t._s(t.blockchain.length))]),e("v-btn",{attrs:{color:"primary"},on:{click:t.criarBlockchain}},[t._v("Add Novo Bloco")])],1)],1),e("Modal")],1)},r=[],o=(e("ac6a"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[e("v-card",{staticClass:"card-round"},[e("v-card-title",{attrs:{"primary-title":""}},[e("div",[e("div",{staticClass:"headline"},[t._v(t._s(t.title))]),e("div",{staticStyle:{"margin-top":"5px"}},[e("span",[t._v("Hash Anterior:")]),t.valid?e("span",{staticClass:"green--text",staticStyle:{"margin-left":"3px"}},[t._v(t._s(t.hashAnterior))]):t._e(),t.valid?t._e():e("span",{staticClass:"red--text",staticStyle:{"margin-left":"3px"}},[t._v(t._s(t.hashAnterior))])]),e("div",{staticStyle:{"margin-top":"5px"}},[e("span",[t._v("Hash:")]),t.valid?e("span",{staticClass:"green--text",staticStyle:{"margin-left":"3px"}},[t._v(t._s(t.hash))]):t._e(),t.valid?t._e():e("span",{staticClass:"red--text",staticStyle:{"margin-left":"3px"}},[t._v(t._s(t.hash))])]),e("div",{staticStyle:{"margin-top":"5px"}},[e("span",[t._v("Timestamp:")]),e("span",{staticStyle:{"margin-left":"3px"}},[t._v(t._s(t.timestamp))])]),e("div",{staticStyle:{"margin-top":"5px"}},[e("v-textarea",{attrs:{name:"input-7-1",label:"Data",value:t.data},on:{input:t.verificaHash},model:{value:t.blockData,callback:function(a){t.blockData=a},expression:"blockData"}})],1)])]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary"},on:{click:t.minerar}},[t._v("Minerar")])],1)],1)],1)],1)}),c=[],l=(e("c5f6"),{props:{index:[String,Number],title:String,timestamp:String,data:String,hashAnterior:String,indexAnterior:[String,Number],hash:String,valid:Boolean},data:function(){return{blockData:""}},computed:{},created:function(){this.blockData=this.data},methods:{verificaHash:function(){var t=null;this.blockData===this.data?(t={index:this.index,valid:!0},this.$root.$emit("validBlock",t)):(t={index:this.index,valid:!1},this.$root.$emit("validBlock",t))},minerar:function(){this.valid=!0;var t={index:this.index,blockData:this.blockData,valid:this.valid,indexAnterior:this.indexAnterior};this.$root.$emit("minerar",t),this.$root.$emit("validBlock",this.valid)}}}),d=l,f=(e("a993"),e("2877")),h=e("6544"),u=e.n(h),b=e("8336"),j=e("b0af"),v=e("99d9"),m=e("12b2"),p=e("0e8f"),x=e("a722"),k=e("9910"),g=e("a844"),y=Object(f["a"])(d,o,c,!1,null,"ba1890da",null),_=y.exports;u()(y,{VBtn:b["a"],VCard:j["a"],VCardActions:v["a"],VCardTitle:m["a"],VFlex:p["a"],VLayout:x["a"],VSpacer:k["a"],VTextarea:g["a"]});var w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-layout",{attrs:{row:"","justify-center":""}},[e("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"headline primary--text"},[t._v("Aviso")]),e("v-card-text",[t._v("Para adicionar um novo bloco, o ultimo precisa ser um bloco válido.")]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(a){t.dialog=!1}}},[t._v("Fechar")])],1)],1)],1)],1)},S=[],A={props:{title:String,content:String},data:function(){return{dialog:!1}},created:function(){this.$root.$on("showModal",this.showModal)},methods:{showModal:function(t){this.dialog=t}}},B=A,z=e("169a"),D=Object(f["a"])(B,w,S,!1,null,null,null),V=D.exports;u()(D,{VBtn:b["a"],VCard:j["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:m["a"],VDialog:z["a"],VLayout:x["a"],VSpacer:k["a"]});var $=e("d225"),C=e("6c27"),O=e.n(C),M=e("c1df"),T=e.n(M),E=function t(a,e,s,i,n,r,o){Object($["a"])(this,t),this.index=a,this.title=s,this.indexAnterior=e,this.timestamp=T()(i).format("DD-MM-YYYY h:mm:ss"),this.data=n,this.hashAnterior=r,this.valid=o,this.hash=O()(this.index+this.timestamp+this.hashAnterior)},Y={components:{BlocoCard:_,Modal:V},name:"App",data:function(){return{blockList:[],count:0,valid:!0,blockchain:[],blocoAnterior:null,index:1}},created:function(){this.blockchain=[this.criarBlockInicial()],this.blocoAnterior=this.blockchain[0],this.$root.$on("validBlock",this.validBlock),this.$root.$on("minerar",this.minerar)},methods:{counter:function(){this.count++,this.criarBlockchain(this.count)},validBlock:function(t){this.blockchain.forEach(function(a){a.index==t.index&&(a.valid=t.valid)})},verificarBlocosInvalidos:function(t){var a=this.blockchain.filter(function(a){return a.index==t});!1===a[0].valid&&this.blockchain.forEach(function(a,e){e<t||(a.valid=!1)})},minerar:function(t){this.verificarBlocosInvalidos(t.index);var a=null;a=0!=t.index?this.blockchain.filter(function(a){return a.index==t.indexAnterior}):0,this.blockchain.forEach(function(e){e.index==t.index&&(e.data=t.blockData,e.timestamp=T()(Date.now()).format("DD-MM-YYYY h:mm:ss"),e.valid=!0,e.hashAnterior=0==a?"0":a[0].hash,e.hash=O()(e.index+e.timestamp+e.hashAnterior))})},criarBlockInicial:function(){return new E(0,0,"Bloco Inicial",Date.now(),"Transação 1","0",!0)},proximoBloco:function(t,a,e){return new E(t.index+1,t.index,e,Date.now(),a,t.hash,t.valid)},criarBlockchain:function(){var t=this.blockchain.slice(-1)[0];if(t.valid){this.index++;var a=this.proximoBloco(this.blocoAnterior,"Transação nº ".concat(this.index),"Este é o bloco #".concat(this.index));this.blockchain.push(a),this.blocoAnterior=a}else this.$root.$emit("showModal",!0)}}},P=Y,I=e("7496"),L=Object(f["a"])(P,n,r,!1,null,null,null),N=L.exports;u()(L,{VApp:I["a"],VBtn:b["a"],VFlex:p["a"],VLayout:x["a"]}),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(N)}}).$mount("#app")},a233:function(t,a,e){},a993:function(t,a,e){"use strict";var s=e("a233"),i=e.n(s);i.a}});
//# sourceMappingURL=app.36927c18.js.map