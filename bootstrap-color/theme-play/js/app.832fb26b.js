(function(t){function e(e){for(var a,o,l=e[0],i=e[1],u=e[2],c=0,f=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},s=[];function o(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-2d0e2153":"4df46aaf","chunk-2d215fad":"bb02a986","chunk-2d225bf3":"ff184f9f"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=o(t);var u=new Error;s=function(e){i.onerror=i.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,n[1](u)}r[t]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="https://bum.github.io/bootstrap-color/theme-play/",l.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Sidebar",{attrs:{routes:t.routes}},[n("router-view")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex"},[n("nav",{staticClass:"sidebar bg-primary navbar-dark"},[n("ul",{staticClass:"sidebar-nav navbar-nav"},t._l(t.routes,(function(e,a){return n("router-link",{key:a,staticClass:"nav-item",attrs:{to:e.path,tag:"li"}},[n("a",{staticClass:"nav-link"},[t._v(t._s(e.label))])])})),1)]),n("div",{staticClass:"sidebar-page flex-fill"},[t._t("default")],2)])},l=[],i={props:["routes"]},u=i,c=n("2877"),d=Object(c["a"])(u,o,l,!1,null,null,null),f=d.exports,b=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"mt-3"},[n("field-set",{attrs:{legend:"Button"}},t._l(t.contextuals,(function(e,a){return n("button",{key:a,class:"btn btn-"+e+" mr-2"},[t._v(t._s(e))])})),0),n("field-set",{attrs:{legend:"Button outline"}},t._l(t.contextuals,(function(e,a){return n("button",{key:a,class:"btn btn-outline-"+e+" mr-2"},[t._v(t._s(e))])})),0),n("field-set",{attrs:{legend:"Button group"}},t._l(t.contextuals,(function(e,a){return n("div",{key:a,staticClass:"btn-group mr-2 mb-3",attrs:{role:"group","aria-label":"Menu"}},t._l(t.labels,(function(a,r){return n("button",{key:r,class:"btn btn-"+e},[t._v(" "+t._s(a)+" ")])})),0)})),0),n("field-set",{attrs:{legend:"Button radio & Checkbox"}},t._l(t.contextuals,(function(e,a){return n("div",{key:a},[n("div",{staticClass:"mr-3 mb-2 btn-group btn-group-toggle",attrs:{"data-toggle":"buttons"}},t._l(3,(function(a){return n("label",{key:a,class:["btn btn-"+e,{active:1==a}]},[n("input",{attrs:{type:"radio",name:"options"},domProps:{checked:1===a}}),t._v(" Radio ")])})),0),n("div",{staticClass:"mr-3 mb-2 btn-group btn-group-toggle",attrs:{"data-toggle":"buttons"}},t._l(3,(function(a){return n("label",{key:a,class:["btn btn-"+e,{active:1==a}]},[n("input",{attrs:{type:"checkbox",name:"options"},domProps:{checked:1===a}}),t._v(" Checkbox ")])})),0)])})),0),n("field-set",{attrs:{legend:"Badge"}},t._l(t.contextuals,(function(e,a){return n("div",{key:a,class:"badge badge-"+e+" mr-2"},[t._v(t._s(e))])})),0),n("field-set",{attrs:{legend:"Alert"}},t._l(t.contextuals,(function(e,a){return n("div",{key:a,class:"alert alert-"+e+"  fade in alert-dismissible show"},[n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),n("strong",[t._v(" "+t._s(e)+"! ")]),t._v(" This alert box indicates a successful or positive action. ")])})),0),n("field-set",{attrs:{legend:"Navbar"}},t._l(t.contextuals,(function(e,a){return n("nav",{key:a,staticClass:"navbar navbar-expand-sm  mb-3",class:["bg-"+e,"light"===e?"navbar-light":"navbar-dark"]},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v(" Brand ")]),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar-0","aria-controls":"navbar-0","aria-expanded":"false","aria-label":"Toggle Navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})]),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar-0"}},[n("div",{staticClass:"navbar-nav"},t._l(t.labels,(function(e,a){return n("a",{key:a,staticClass:"nav-item nav-link",class:{active:1==a},attrs:{href:"#"}},[t._v(" "+t._s(e)+" ")])})),0),n("div",{staticClass:"navbar-nav ml-auto"},[n("a",{staticClass:"nav-item nav-link",attrs:{href:"#"}},[t._v(" Contact Us ")])])])])})),0)],1)])},v=[],g=(n("ac1f"),n("1276"),n("be96")),m=n("6912"),h={components:{FieldSet:g["a"]},computed:{contextuals:function(){return m["a"]},labels:function(){return"File Edit View History Help".split(" ")}}},_=h,y=Object(c["a"])(_,p,v,!1,null,null,null),k=y.exports;a["a"].use(b["a"]);var C=[{path:"/",name:"home",label:"Home",component:k},{path:"/card",name:"card",label:"Card",component:function(){return n.e("chunk-2d0e2153").then(n.bind(null,"7cd5"))}},{path:"/progress",name:"progress",label:"Progress",component:function(){return n.e("chunk-2d225bf3").then(n.bind(null,"e65a"))}},{path:"/form",name:"form",label:"Form",component:function(){return n.e("chunk-2d215fad").then(n.bind(null,"c109"))}}],x=new b["a"]({routes:C,linkExactActiveClass:"active"}),w=x,j={components:{Sidebar:f},computed:{routes:function(){return C}}},O=j,P=Object(c["a"])(O,r,s,!1,null,null,null),E=P.exports;a["a"].config.productionTip=!1,new a["a"]({router:w,render:function(t){return t(E)}}).$mount("#app")},6875:function(t,e,n){},6912:function(t,e,n){"use strict";n("ac1f"),n("1276"),n("6875");n.d(e,"a",(function(){return a}));var a="primary secondary success danger warning info light dark".split(" ")},be96:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fieldset",{staticClass:"mb-4"},[t.legend?n("legend",[t._v(t._s(t.legend))]):t._e(),n("div",{staticClass:"control-group"},[t._t("default")],2)])},r=[],s={props:["legend"]},o=s,l=n("2877"),i=Object(l["a"])(o,a,r,!1,null,null,null);e["a"]=i.exports}});
//# sourceMappingURL=app.832fb26b.js.map