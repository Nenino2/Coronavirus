(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"visibility-change",rawName:"v-visibility-change",value:e.visibilityChange,expression:"visibilityChange"}],attrs:{id:"app"}},[e._m(0),n("p",{staticClass:"caption"},[e._v("Total world’s infected")]),n("h2",{staticClass:"number"},[e._v(e._s(e.infectedTotal))]),n("p",{staticClass:"caption"},[e._v("Total world’s deaths")]),n("h2",{staticClass:"number"},[e._v(e._s(e.deathsTotal))]),n("p",{staticClass:"caption"},[e._v("Italy’s infected")]),n("h2",{staticClass:"number"},[e._v(e._s(e.infectedItaly))]),n("p",{staticClass:"caption"},[e._v("Italy’s deaths")]),n("h2",{staticClass:"number"},[e._v(e._s(e.deathsItaly))])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"title"},[e._v(" Coronavirus "),n("br"),e._v("Live stats ")])}],i=(n("d3b7"),n("498a"),n("96cf"),n("1da1")),s=new DOMParser,c={name:"App",data:function(){return{infectedTotal:0,deathsTotal:0,infectedItaly:0,deathsItaly:0}},created:function(){this.load()},methods:{visibilityChange:function(e,t){t||this.load()},load:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a,i,c,l,u,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://cors-anywhere.herokuapp.com/https://www.worldometers.info/coronavirus/");case 2:return n=t.sent,t.next=5,n.text();case 5:r=t.sent,o=s.parseFromString(r,"text/html"),a=o.querySelectorAll(".maincounter-number span"),e.infectedTotal=a[0].innerText,e.deathsTotal=a[1].innerText,i=o.querySelectorAll("#table3 tbody tr"),c=0;case 12:if(!(c<i.length)){t.next=23;break}if(l=i[c],u=l.querySelectorAll("td"),f=u[0].innerText,"Italy"!==f.trim()){t.next=20;break}return e.infectedItaly=u[1].innerText,e.deathsItaly=u[3].innerText,t.abrupt("break",23);case 20:c++,t.next=12;break;case 23:case"end":return t.stop()}}),t)})))()}}},l=c,u=(n("5c0b"),n("2877")),f=Object(u["a"])(l,o,a,!1,null,null,null),d=f.exports,p=n("9af4"),h=n.n(p),v=n("9483");Object(v["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].use(h.a),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.e1733923.js.map