webpackJsonp([0xd2a57dc1d883],{102:function(e,t,n){"use strict";function o(e,t,n){var o=a.map(function(n){if(n.plugin[e]){var o=n.plugin[e](t,n.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:n?[n]:[]}function r(e,t,n){return a.reduce(function(n,o){return o.plugin[e]?n.then(function(){return o.plugin[e](t,o.options)}):n},Promise.resolve())}t.__esModule=!0,t.apiRunner=o,t.apiRunnerAsync=r;var a=[{plugin:n(405),options:{plugins:[],trackingId:"UA-123728910-1",head:!0}}]},269:function(e,t,n){"use strict";t.components={"component---src-pages-404-js":n(397),"component---src-pages-colors-js":n(398),"component---src-pages-index-js":n(399)},t.json={"layout-index.json":n(400),"404.json":n(401),"colors.json":n(403),"index.json":n(404),"404-html.json":n(402)},t.layouts={"layout---index":n(396)}},270:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(1),s=o(c),l=n(2),f=o(l),p=n(185),d=o(p),h=n(79),g=o(h),m=n(102),v=n(576),y=o(v),R=function(e){var t=e.children;return s.default.createElement("div",null,t())},_=function(e){function t(n){r(this,t);var o=a(this,e.call(this)),u=n.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;if(this.state.location.pathname!==e.location.pathname){var n=d.default.getResourcesForPathname(e.location.pathname);if(n)this.setState({location:e.location,pageResources:n});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){t.setState({location:o,pageResources:e})})}}},t.prototype.componentDidMount=function(){var e=this;g.default.on("onPostLoadPageResources",function(t){d.default.getPage(e.state.location.pathname)&&t.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:t.pageResources})})},t.prototype.shouldComponentUpdate=function(e,t){return!t.pageResources||(!(this.state.pageResources||!t.pageResources)||(this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||(!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath&&!t.pageResources.page.path)||(0,y.default)(this,e,t)))))},t.prototype.render=function(){var e=(0,m.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),t=e[0];return this.props.page?this.state.pageResources?t||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?t||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:R,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},t}(s.default.Component);_.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},t.default=_,e.exports=t.default},79:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(475),a=o(r),u=(0,a.default)();e.exports=u},271:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(99),a=n(186),u=o(a),i={};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var o=decodeURIComponent(n),a=(0,u.default)(o,t);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var c=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return c=e,i[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return c=e,i[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return c=e,i[a]=e,!0}return!1}),c}}},272:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(225),a=o(r),u=n(102),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,a.default)();e.exports=s},402:function(e,t,n){n(31),e.exports=function(e){return n.e(0xa2868bfb69fc,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(469)})})}},401:function(e,t,n){n(31),e.exports=function(e){return n.e(0xe70826b53c04,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(470)})})}},403:function(e,t,n){n(31),e.exports=function(e){return n.e(0x94eb784f4752,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(471)})})}},404:function(e,t,n){n(31),e.exports=function(e){return n.e(0x81b8806e4260,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(472)})})}},400:function(e,t,n){n(31),e.exports=function(e){return n.e(60335399758886,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(156)})})}},396:function(e,t,n){n(31),e.exports=function(e){return n.e(0x67ef26645b2a,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(273)})})}},185:function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.publicLoader=void 0;var r=n(1),a=(o(r),n(271)),u=o(a),i=n(79),c=o(i),s=n(186),l=o(s),f=void 0,p={},d={},h={},g={},m={},v=[],y=[],R={},_="",P=[],w={},x=function(e){return e&&e.default||e},j=void 0,b=!0,E=[],O={},C={},N=5;j=n(274)({getNextQueuedResources:function(){return P.slice(-1)[0]},createResourceDownload:function(e){L(e,function(){P=P.filter(function(t){return t!==e}),j.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){j.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){j.onPostLoadPageResources(e)});var k=function(e,t){return w[e]>w[t]?1:w[e]<w[t]?-1:0},S=function(e,t){return R[e]>R[t]?1:R[e]<R[t]?-1:0},L=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[t])e.nextTick(function(){n(null,g[t])});else{var o=void 0;o="component---"===t.slice(0,12)?d.components[t]:"layout---"===t.slice(0,9)?d.layouts[t]:d.json[t],o(function(e,o){g[t]=o,E.push({resource:t,succeeded:!e}),C[t]||(C[t]=e),E=E.slice(-N),n(e,o)})}},A=function(t,n){m[t]?e.nextTick(function(){n(null,m[t])}):C[t]?e.nextTick(function(){n(C[t])}):L(t,function(e,o){if(e)n(e);else{var r=x(o());m[t]=r,n(e,r)}})},D=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var t=E.find(function(e){return e.succeeded});return!!t},T=function(e,t){console.log(t),O[e]||(O[e]=t),D()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},U=1,F={empty:function(){y=[],R={},w={},P=[],v=[],_=""},addPagesArray:function(e){v=e,_="/portfolio",f=(0,u.default)(e,_)},addDevRequires:function(e){p=e},addProdRequires:function(e){d=e},dequeue:function(){return y.pop()},enqueue:function(e){var t=(0,l.default)(e,_);if(!v.some(function(e){return e.path===t}))return!1;var n=1/U;U+=1,R[t]?R[t]+=1:R[t]=1,F.has(t)||y.unshift(t),y.sort(S);var o=f(t);return o.jsonName&&(w[o.jsonName]?w[o.jsonName]+=1+n:w[o.jsonName]=1+n,P.indexOf(o.jsonName)!==-1||g[o.jsonName]||P.unshift(o.jsonName)),o.componentChunkName&&(w[o.componentChunkName]?w[o.componentChunkName]+=1+n:w[o.componentChunkName]=1+n,P.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||P.unshift(o.componentChunkName)),P.sort(k),j.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:P,resourcesCount:w}},getPages:function(){return{pathArray:y,pathCount:R}},getPage:function(e){return f(e)},has:function(e){return y.some(function(t){return t===e})},getResourcesForPathname:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};b&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(t)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var t=e,n=Array.isArray(t),o=0,t=n?t:t[Symbol.iterator]();;){var r;if(n){if(o>=t.length)break;r=t[o++]}else{if(o=t.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),b=!1;if(O[t])return T(t,'Previously detected load failure for "'+t+'"'),n();var o=f(t);if(!o)return T(t,"A page wasn't found for \""+t+'"'),n();if(t=o.path,h[t])return e.nextTick(function(){n(h[t]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:h[t]})}),h[t];c.default.emit("onPreLoadPageResources",{path:t});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){h[t]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};n(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return A(o.componentChunkName,function(e,t){e&&T(o.path,"Loading the component for "+o.path+" failed"),r=t,i()}),A(o.jsonName,function(e,t){e&&T(o.path,"Loading the JSON for "+o.path+" failed"),a=t,i()}),void(o.layoutComponentChunkName&&A(o.layout,function(e,t){e&&T(o.path,"Loading the Layout for "+o.path+" failed"),u=t,i()}))},peek:function(e){return y.slice(-1)[0]},length:function(){return y.length},indexOf:function(e){return y.length-y.indexOf(e)-1}};t.publicLoader={getResourcesForPathname:F.getResourcesForPathname};t.default=F}).call(t,n(157))},473:function(e,t){e.exports=[{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-colors-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"colors.json",path:"/colors/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},274:function(e,t){"use strict";e.exports=function(e){var t=e.getNextQueuedResources,n=e.createResourceDownload,o=[],r=[],a=function(){var e=t();e&&(r.push(e),n(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(t){return t!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(t){return t!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(102),u=n(1),i=o(u),c=n(12),s=o(c),l=n(99),f=n(410),p=n(382),d=o(p),h=n(38),g=n(272),m=o(g),v=n(79),y=o(v),R=n(473),_=o(R),P=n(474),w=o(P),x=n(270),j=o(x),b=n(269),E=o(b),O=n(185),C=o(O);n(301),window.___history=m.default,window.___emitter=y.default,C.default.addPagesArray(_.default),C.default.addProdRequires(E.default),window.asyncRequires=E.default,window.___loader=C.default,window.matchPath=l.matchPath;var N=w.default.reduce(function(e,t){return e[t.fromPath]=t,e},{}),k=function(e){var t=N[e];return null!=t&&(m.default.replace(t.toPath),!0)};k(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&c!==!1||(window.___history=e,c=!0,e.listen(function(e,t){k(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:t})},0)}))}function t(e,t){var n=t.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===n)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&n(275);var o=function(e,t){function n(e){e.page.path===C.default.getPage(r).path&&(y.default.off("onPostLoadPageResources",n),clearTimeout(c),i(o))}var o=(0,h.createLocation)(e,null,null,m.default.location),r=o.pathname,a=N[r];a&&(r=a.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var i=t?window.___history.replace:window.___history.push,c=setTimeout(function(){y.default.off("onPostLoadPageResources",n),y.default.emit("onDelayedLoadPageResources",{pathname:r}),i(o)},1e3);C.default.getResourcesForPathname(r)?(clearTimeout(c),i(o)):y.default.on("onPostLoadPageResources",n)}};window.___push=function(e){return o(e,!1)},window.___replace=function(e){return o(e,!0)},window.___navigateTo=window.___push,(0,a.apiRunner)("onRouteUpdate",{location:m.default.location,action:m.default.action});var c=!1,p=(0,a.apiRunner)("replaceRouterComponent",{history:m.default})[0],g=function(e){var t=e.children;return i.default.createElement(l.Router,{history:m.default},t)},v=(0,l.withRouter)(j.default);C.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,u.createElement)(p?p:g,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:t},(0,u.createElement)(v,{layout:!0,children:function(t){return(0,u.createElement)(l.Route,{render:function(n){e(n.history);var o=t?t:n;return C.default.getPage(o.location.pathname)?(0,u.createElement)(j.default,r({page:!0},o)):(0,u.createElement)(j.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:n},n)[0],c=(0,a.apiRunner)("replaceHydrateFunction",void 0,s.default.render)[0];(0,d.default)(function(){return c(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},474:function(e,t){e.exports=[]},275:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(79),a=o(r),u="/";u="/portfolio/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var t=e.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},186:function(e,t){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,t.length)===t?e.slice(t.length):e},e.exports=t.default},382:function(e,t,n){!function(t,n){e.exports=n()}("domready",function(){var e,t=[],n=document,o=n.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return a||n.addEventListener(r,e=function(){for(n.removeEventListener(r,e),a=1;e=t.shift();)e()}),function(e){a?setTimeout(e,0):t.push(e)}})},31:function(e,t,n){"use strict";function o(){function e(e){var t=o.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(e,0)})}var t,o=document.querySelector("head"),r=n.e,a=n.s;n.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(n,e),u=null)};return!a&&t&&t[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(t||(t={}),t[o]=!0),s(!0))}))))}}o()},405:function(e,t,n){"use strict";t.onRouteUpdate=function(e){var t=e.location;if("function"==typeof ga){if(t&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(e){return e.test(t.pathname)}))return;window.ga("set","page",t?t.pathname+t.search+t.hash:void 0),window.ga("send","pageview")}}},226:function(e,t){"use strict";function n(e,t,f){if("string"!=typeof t){if(l){var p=s(t);p&&p!==l&&n(e,p,f)}var d=u(t);i&&(d=d.concat(i(t)));for(var h=0;h<d.length;++h){var g=d[h];if(!(o[g]||r[g]||f&&f[g])){var m=c(t,g);try{a(e,g,m)}catch(e){}}}return e}return e}var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,u=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,l=s&&s(Object);e.exports=n},475:function(e,t){function n(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}}e.exports=n},576:function(e,t){"use strict";function n(e,t){for(var n in e)if(!(n in t))return!0;for(var o in t)if(e[o]!==t[o])return!0;return!1}t.__esModule=!0,t.default=function(e,t,o){return n(e.props,t)||n(e.state,o)},e.exports=t.default},397:function(e,t,n){n(31),e.exports=function(e){return n.e(0x9427c64ab85d,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(289)})})}},398:function(e,t,n){n(31),e.exports=function(e){return n.e(0x7c0504c2413e,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(290)})})}},399:function(e,t,n){n(31),e.exports=function(e){return n.e(35783957827783,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(291)})})}}});
//# sourceMappingURL=app-2a57fb7b58a8a8304bc6.js.map