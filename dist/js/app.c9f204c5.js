(function(e){function t(t){for(var o,r,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"cd88f76f"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"1074d25c"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===o||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"visibility-change",rawName:"v-visibility-change",value:e.visibilityChange,expression:"visibilityChange"}],attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("b0c0"),n("5530")),s=n("2f62"),c={created:function(){document.title=this.$route.name,this.load()},methods:Object(i["a"])({},Object(s["b"])(["load"]),{visibilityChange:function(e,t){t||this.load()}}),watch:{$route:function(e){document.title=e.name||"Coronavirus Info"}}},u=c,l=(n("5c0b"),n("2877")),f=Object(l["a"])(u,r,a,!1,null,null,null),d=f.exports,p=n("9af4"),h=n.n(p),m=n("9483");Object(m["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),window.location.reload(!0)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var v=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("h1",{staticClass:"title"},[e._v("Coronavirus Info")]),n("main",{staticClass:"main"},[n("a",{staticClass:"link link--main",attrs:{href:"/counter"},on:{click:function(t){return e.goTo(t,"counter")}}},[e._v(" Live counter "),n("span",{staticClass:"blinking"},[e._v("🔴")])])]),n("section",{staticClass:"secondary"},[n("a",{staticClass:"link link--secondary",attrs:{href:"/info"},on:{click:function(t){return e.goTo(t,"info")}}},[e._v("Che cos'è?")]),n("a",{staticClass:"link link--secondary",attrs:{href:"/transmission"},on:{click:function(t){return e.goTo(t,"transmission")}}},[e._v("Come si trasmette?")]),n("a",{staticClass:"link link--secondary",attrs:{href:"/prevention"},on:{click:function(t){return e.goTo(t,"prevention")}}},[e._v("Come proteggersi?")])])])},b=[],y={methods:{goTo:function(e,t){e.preventDefault(),this.$router.push("/".concat(t))}}},w=y,k=(n("a9b0"),Object(l["a"])(w,g,b,!1,null,"1dcdff92",null)),C=k.exports;o["a"].use(v["a"]);var j=[{path:"/",name:"Home",component:C},{path:"/info",name:"Info",component:function(){return n.e("about").then(n.bind(null,"2469"))}},{path:"/prevention",name:"Prevention",component:function(){return n.e("about").then(n.bind(null,"2f63"))}},{path:"/transmission",name:"Transmission",component:function(){return n.e("about").then(n.bind(null,"986b"))}},{path:"/counter",name:"Counter",component:function(){return n.e("about").then(n.bind(null,"80d5"))}}],O=new v["a"]({mode:"history",base:"/",routes:j}),_=O,T=(n("96cf"),n("1da1")),x=n("bc3a"),D=n.n(x),S="https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json",E="https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json";o["a"].use(s["a"]);var N=new s["a"].Store({state:{nationalData:null,regionsData:null},mutations:{setNewStats:function(e,t){e.nationalData=t.nationalData,e.regionsData=t.regionsData}},actions:{load:function(e){var t=e.commit;return Object(T["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D.a.get(S);case 2:return n=e.sent.data,e.next=5,D.a.get(E);case 5:o=e.sent.data,t("setNewStats",{nationalData:n,regionsData:o});case 7:case"end":return e.stop()}}),e)})))()}},modules:{}}),P=n("0284"),A=n.n(P);o["a"].use(h.a),o["a"].use(A.a,{id:"UA-158983279-1",router:_}),o["a"].config.productionTip=!1,new o["a"]({router:_,store:N,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"9c0c":function(e,t,n){},a9b0:function(e,t,n){"use strict";var o=n("f2f1"),r=n.n(o);r.a},f2f1:function(e,t,n){}});
//# sourceMappingURL=app.c9f204c5.js.map