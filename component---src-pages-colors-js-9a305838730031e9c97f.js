webpackJsonp([0x7c0504c2413e],{8:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(1),c=a(s),f=n(2),p=a(f),h=n(12),g=n(15),b=a(g),m=n(5),y=a(m),_=n(6),v=a(_),O=n(14),E=n(42),C=a(E),I=n(3),A=a(I),x=n(20),T=A.default.BOX,k=A.default.BACKGROUND_COLOR_INDEX,N=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={mouseActive:!1},n}return l(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onClick;if(t){var n=function(){e.boxContainerRef===document.activeElement&&t()};b.default.startListeningToKeyboard(this,{enter:n,space:n})}this._setDarkBackground()}},{key:"componentWillReceiveProps",value:function(e){e.colorIndex!==this.props.colorIndex&&(e.colorIndex?this.setState({updateDarkBackground:!0}):this.setState({darkBackground:void 0}))}},{key:"componentDidUpdate",value:function(){this.props.announce&&(0,x.announce)(this.boxContainerRef.textContent),this.state.updateDarkBackground&&(this.setState({updateDarkBackground:!1}),this._setDarkBackground())}},{key:"componentWillUnmount",value:function(){this.props.onClick&&b.default.stopListeningToKeyboard(this),this._checkBackground&&this._checkBackground.stop()}},{key:"_setDarkBackground",value:function(){var e=this,t=this.props.colorIndex,n=(0,h.findDOMNode)(this.boxContainerRef);this._checkBackground&&this._checkBackground.stop(),this._checkBackground=(0,O.checkDarkBackground)(t,n,function(t){return e.setState({darkBackground:t})})}},{key:"_normalize",value:function(e){return e.replace("/","-")}},{key:"_addPropertyClass",value:function(e,t){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(a.object||this.props)[t],o=a.elementName||T,l=a.prefix||t;r&&("string"==typeof r?e.push(o+"--"+l+"-"+this._normalize(r)):"object"===("undefined"==typeof r?"undefined":u(r))?Object.keys(r).forEach(function(t){n._addPropertyClass(e,t,{object:r,prefix:l+"-"+t})}):e.push(o+"--"+this._normalize(l)))}},{key:"_backgroundContextClass",value:function(e){var t=void 0;return t=void 0===e?k+"--pending":e?k+"--dark":k+"--light"}},{key:"render",value:function(){var e=this,n=this.props,a=n.a11yTitle,r=n.appCentered,o=n.backgroundImage,l=n.children,d=n.className,s=n.colorIndex,f=n.containerClassName,p=n.focusable,h=n.full,g=n.id,b=n.onClick,m=n.onBlur,_=n.onFocus,O=n.onMouseDown,E=n.onMouseUp,I=n.pad,A=n.primary,x=n.role,N=n.size,P=n.tabIndex,R=n.tag,w=n.texture,L=this.state,S=L.darkBackground,M=L.mouseActive,B=[T],D=[T+"__container"],j=v.default.omit(this.props,Object.keys(t.propTypes));this._addPropertyClass(B,"full"),h&&void 0===h.responsive&&B.push(T+"--full-responsive"),this._addPropertyClass(B,"direction"),this._addPropertyClass(B,"justify"),this._addPropertyClass(B,"align"),this._addPropertyClass(B,"alignContent",{prefix:"align-content"}),this._addPropertyClass(B,"alignSelf",{prefix:"align-self"}),this._addPropertyClass(B,"reverse"),this._addPropertyClass(B,"responsive"),this._addPropertyClass(B,"basis"),this._addPropertyClass(B,"flex"),this._addPropertyClass(B,"pad"),this._addPropertyClass(B,"margin"),this._addPropertyClass(B,"separator"),this._addPropertyClass(B,"textAlign",{prefix:"text-align"}),this._addPropertyClass(B,"wrap"),this.props.hasOwnProperty("flex")&&(this.props.flex||B.push(T+"--flex-off")),N&&("object"===("undefined"==typeof N?"undefined":u(N))?Object.keys(N).forEach(function(t){e._addPropertyClass(B,t,{object:N})}):this._addPropertyClass(B,"size"),N&&(N.width&&N.width.max||B.push(T+"--size"),N.width&&N.width.max&&B.push(T+"--width-max"))),I&&I.between&&l&&c.default.Children.count(l)%3===0&&B.push(T+"--pad-between-thirds"),r?(this._addPropertyClass(D,"full",{elementName:T+"__container"}),s&&(D.push(k+"-"+s),D.push(this._backgroundContextClass(S))),f&&D.push(f)):s&&(B.push(k+"-"+s),B.push(this._backgroundContextClass(S)));var H={},U={};if(b&&(B.push(T+"--clickable"),U={onMouseDown:function(t){e.setState({mouseActive:!0}),O&&O(t)},onMouseUp:function(t){e.setState({mouseActive:!1}),E&&E(t)},onFocus:function(t){M===!1&&e.setState({focus:!0}),_&&_(t)},onBlur:function(t){e.setState({focus:!1}),m&&m(t)}},p)){this.state.focus&&B.push(T+"--focus");var K="undefined"!=typeof a?a:y.default.getMessage(this.context.intl,"Box");H.tabIndex=P||0,H["aria-label"]=this.props["aria-label"]||K,H.role=x||"group"}var G=void 0;if(A){var F=y.default.getMessage(this.context.intl,"Main Content");G=c.default.createElement(C.default,{label:F})}d&&B.push(d);var z={};w&&"string"==typeof w?w.indexOf("url(")!==-1?z.backgroundImage=w:z.backgroundImage="url("+w+")":o&&(z.background=o+" no-repeat center center",z.backgroundSize="cover"),z=i({},z,j.style);var X=void 0;"object"===("undefined"==typeof w?"undefined":u(w))&&(X=c.default.createElement("div",{className:T+"__texture"},w));var W=R;return r?c.default.createElement("div",i({},j,{ref:function(t){return e.boxContainerRef=t},className:D.join(" "),style:z,role:x},H,U),G,c.default.createElement(W,{id:g,className:B.join(" ")},X,l)):c.default.createElement(W,i({},j,{ref:function(t){return e.boxContainerRef=t},id:g,className:B.join(" "),style:z,role:x,tabIndex:P,onClick:b},H,U),G,X,l)}}]),t}(s.Component);N.displayName="Box",t.default=N;var P=["xsmall","small","medium","large","xlarge","xxlarge"],R=["full","1/2","1/3","2/3","1/4","3/4"],w=P.concat(R),L=["small","medium","large","none"],S=["small","medium","large","xlarge","none"];N.propTypes={a11yTitle:p.default.string,announce:p.default.bool,align:p.default.oneOf(["start","center","end","baseline","stretch"]),alignContent:p.default.oneOf(["start","center","end","between","around","stretch"]),alignSelf:p.default.oneOf(["start","center","end","stretch"]),appCentered:p.default.bool,backgroundImage:p.default.string,basis:p.default.oneOf(w),colorIndex:p.default.string,containerClassName:p.default.string,direction:p.default.oneOf(["row","column"]),focusable:p.default.bool,flex:p.default.oneOf(["grow","shrink",!0,!1]),full:p.default.oneOfType([p.default.bool,p.default.string,p.default.shape({vertical:p.default.bool,horizontal:p.default.bool,responsive:p.default.bool})]),onClick:p.default.func,justify:p.default.oneOf(["start","center","between","end","around"]),margin:p.default.oneOfType([p.default.oneOf(L),p.default.shape({bottom:p.default.oneOf(L),horizontal:p.default.oneOf(L),left:p.default.oneOf(L),right:p.default.oneOf(L),top:p.default.oneOf(L),vertical:p.default.oneOf(L)})]),pad:p.default.oneOfType([p.default.oneOf(S),p.default.shape({between:p.default.oneOf(S),horizontal:p.default.oneOf(S),vertical:p.default.oneOf(S)})]),primary:p.default.bool,reverse:p.default.bool,responsive:p.default.bool,role:p.default.string,separator:p.default.oneOf(["top","bottom","left","right","horizontal","vertical","all","none"]),size:p.default.oneOfType([p.default.oneOf(["auto","xsmall","small","medium","large","xlarge","xxlarge","full"]),p.default.shape({height:p.default.oneOfType([p.default.oneOf(w),p.default.shape({max:p.default.oneOf(P),min:p.default.oneOf(P)})]),width:p.default.oneOfType([p.default.oneOf(w),p.default.shape({max:p.default.oneOf(P),min:p.default.oneOf(P)})])})]),tag:p.default.string,textAlign:p.default.oneOf(["left","center","right"]),texture:p.default.oneOfType([p.default.node,p.default.string]),wrap:p.default.bool},N.contextTypes={intl:p.default.object},N.defaultProps={announce:!1,direction:"column",pad:"none",tag:"div",responsive:!0,focusable:!0},e.exports=t.default},42:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),d=a(u),s=n(2),c=a(s),f=n(3),p=a(f),h=p.default.SKIP_LINK_ANCHOR,g=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){var e="skip-link-"+this.props.label.toLowerCase().replace(/ /g,"_");return d.default.createElement("a",{tabIndex:"-1","aria-hidden":"true",id:e,className:h},this.props.label)}}]),t}(u.Component);g.displayName="SkipLinkAnchor",t.default=g,g.propTypes={label:c.default.node.isRequired},e.exports=t.default},20:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){var e=document.querySelector("."+d+"__announcer");e&&(e.innerHTML="")}function o(e){l(e+" page was loaded")}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"assertive",n=document.querySelector("."+d+"__announcer");n&&(n.setAttribute("aria-live","off"),n.innerHTML=e,setTimeout(r,500),n.setAttribute("aria-live",t))}Object.defineProperty(t,"__esModule",{value:!0}),t.announcePageLoaded=o,t.announce=l;var i=n(3),u=a(i),d=u.default.APP;t.default={announce:l,announcePageLoaded:o}},3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.namespace="grommetux-";t.default={ACCORDION:n+"accordion",ACCORDION_PANEL:n+"accordion-panel",ANCHOR:n+"anchor",ANIMATE:n+"animate",APP:n+"app",ARTICLE:n+"article",ATTRIBUTE:n+"attribute",BACKGROUND_COLOR_INDEX:n+"background-color-index",BOX:n+"box",BORDER_COLOR_INDEX:n+"border-color-index",BRICK:n+"brick",BUTTON:n+"button",CALENDAR:n+"calendar",CARD:n+"card",CAROUSEL:n+"carousel",CAROUSEL_CONTROLS:n+"carousel-controls",CHART:n+"chart",CHART_AXIS:n+"chart-axis",CHART_BASE:n+"chart-base",CHART_GRAPH:n+"chart-graph",CHART_GRID:n+"chart-grid",CHART_HOT_SPOTS:n+"chart-hot-spots",CHART_LAYERS:n+"chart-layers",CHART_MARKER:n+"chart-marker",CHART_MARKER_LABEL:n+"chart-marker-label",CHART_RANGE:n+"chart-range",CHECK_BOX:n+"check-box",COLLAPSIBLE:n+"collapsible",COLOR_INDEX:n+"color-index",COLUMNS:n+"columns",CONTROL_ICON:n+"control-icon",DATE_TIME:n+"date-time",DATE_TIME_DROP:n+"date-time-drop",DISTRIBUTION:n+"distribution",DROP:n+"drop",FOOTER:n+"footer",FORM:n+"form",FORM_FIELD:n+"form-field",FORM_FIELDS:n+"form-fields",HEADER:n+"header",HEADING:n+"heading",HEADLINE:n+"headline",HERO:n+"hero",IMAGE:n+"image",IMAGE_FIELD:n+"image-field",INPUT:n+"input",LABEL:n+"label",LAYER:n+"layer",LEGEND:n+"legend",LIST:n+"list",LIST_ITEM:n+"list-item",LOGIN:n+"login",LOGIN_FORM:n+"login-form",LOGO_ICON:n+"logo-icon",MAP:n+"map",MENU:n+"menu",METER:n+"meter",NAMESPACE:""+n,NOTIFICATION:n+"notification",NUMBER_INPUT:n+"number-input",OBJECT:n+"object",PARAGRAPH:n+"paragraph",PASSWORD_INPUT:n+"password-input",PULSE:n+"pulse",QUOTE:n+"quote",RADIO_BUTTON:n+"radio-button",SEARCH:n+"search",SEARCH_INPUT:n+"search-input",SECTION:n+"section",SELECT:n+"select",SIDEBAR:n+"sidebar",SKIP_LINK_ANCHOR:n+"skip-link-anchor",SKIP_LINKS:n+"skip-links",SPLIT:n+"split",SPINNING:n+"icon-spinning",STATUS_ICON:n+"status-icon",SUN_BURST:n+"sun-burst",TAB:n+"tab",TABLE:n+"table",TABLE_ROW:n+"table-row",TABS:n+"tabs",TAG:n+"tag",TAGS:n+"tags",TBD:n+"tbd",TEXT_INPUT:n+"text-input",TILE:n+"tile",TILES:n+"tiles",TIMESTAMP:n+"timestamp",TIP:n+"tip",TITLE:n+"title",TOAST:n+"toast",TOPOLOGY:n+"topology",VALUE:n+"value",VIDEO:n+"video",WORLD_MAP:n+"world-map"}},14:function(e,t){"use strict";function n(e){var t,n,a,r=0;if(0===e.length)return r;for(t=0,a=e.length;t<a;t++)n=e.charCodeAt(t),r=(r<<5)-r+n,r&=r;return r}function a(e,t){for(var n=[],a=e.parentNode;a&&a.getBoundingClientRect;){var r=a.getBoundingClientRect();t?r.width&&a.scrollWidth>r.width+10&&n.push(a):r.height&&a.scrollHeight>r.height+10&&n.push(a),a=a.parentNode}return 0===n.length&&n.push(document),n}function r(e,t){for(var n=t.parentNode;null!=n;){if(n==e)return!0;n=n.parentNode}return!1}function o(e,t){for(var n=e.parentNode;!(null==n||n.classList&&n.classList.contains(t));)n=n.parentNode;return n}function l(e){return Array.prototype.filter.call(e||[],function(e){var t=e.tagName.toLowerCase(),n=/(svg|a|area|input|select|textarea|button|iframe|div)$/,a=t.match(n)&&e.focus;return"a"===t?a&&e.childNodes.length>0&&e.getAttribute("href"):"svg"===t||"div"===t?a&&e.hasAttribute("tabindex"):a})}function i(e){var t;return Array.prototype.some.call(e||[],function(e){var n=e.tagName.toLowerCase(),a=n.match(/(input|select|textarea)$/);return!!a&&(t=e,!0)}),t||(t=this.filterByFocusable(e)[0]),t}function u(e){var t=e?e.tagName.toLowerCase():void 0;return t&&("input"===t||"textarea"===t)}function d(e){if(e&&"function"==typeof e.getAttribute){var t=void 0,a=e.getAttribute("id");if(a)t=a;else{var r=e.parentElement||e.parentNode;r&&(t=n(r.innerHTML),e.setAttribute("id",t))}return t}}function s(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}var t=""+e()+e()+("-"+e()+"-4"+e().substr(0,3))+("-"+e()+"-"+e()+e()+e()).toLowerCase();return t}function c(e){var t=!1,n=window.getComputedStyle(e).backgroundColor,a=n.match(b)||n.match(m);if(a){var r=a.slice(1).map(function(e){return parseInt(e,10)}),o=g(r,3),l=o[0],i=o[1],u=o[2],d=(299*l+587*i+114*u)/1e3;0===d?t=void 0:d<137&&(t=!0)}return t}function f(e,t,n){return setTimeout(function(){var a=c(e);void 0===a&&n.length>0?f(e,t,n):t(a)},n.shift())}function p(e,t,n){var a=void 0;return e&&("dark"===e?n(!0):y.test(e)?n(!1):t&&window.getComputedStyle&&(a=f(t,n,_))),{stop:function(){return clearTimeout(a)}}}function h(e){return e?e.offsetParent?e:h(e.parentElement):null}Object.defineProperty(t,"__esModule",{value:!0});var g=function(){function e(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&i.return&&i.return()}finally{if(r)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.findScrollParents=a,t.isDescendant=r,t.findAncestor=o,t.filterByFocusable=l,t.getBestFirstFocusable=i,t.isFormElement=u,t.generateId=d,t.generateUUID=s,t.checkDarkBackground=p,t.findVisibleParent=h;var b=/rgb\((\d+), (\d+), (\d+)\)/,m=/rgba\((\d+), (\d+), (\d+), ([\d\.]+)\)/,y=/^light/,_=[0,20,80,200]},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getMessage:function(e,t,n){return e?e.formatMessage({id:t,defaultMessage:t},n):t}},e.exports=t.default},15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),r=n(14),o={backspace:8,tab:9,enter:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,comma:188,shift:16},l={},i=[],u=!1,d=function(e){var t=e.keyCode?e.keyCode:e.which;i.slice().reverse().some(function(n){if(l[n]){var a=l[n].handlers;if(a.hasOwnProperty(t)&&a[t]&&a[t](e))return!0}return!1})};t.default={_initKeyboardAccelerators:function(e){var t=(0,r.generateId)(e);l[t]={handlers:{}}},_getKeyboardAcceleratorHandlers:function(e){var t=(0,r.generateId)(e);return l[t].handlers},_getDowns:function(e){var t=(0,r.generateId)(e);return l[t].downs},_isComponentListening:function(e){var t=(0,r.generateId)(e);return i.some(function(e){return e===t})},_subscribeComponent:function(e){var t=(0,r.generateId)(e);i.push(t)},_unsubscribeComponent:function(e){var t=(0,r.generateId)(e),n=i.indexOf(t);i.splice(n,1),delete l[t]},startListeningToKeyboard:function(e,t){var n=(0,a.findDOMNode)(e);if(n){this._initKeyboardAccelerators(n);var r=0;for(var l in t)if(t.hasOwnProperty(l)){var i=l;o.hasOwnProperty(l)&&(i=o[l]),r+=1,this._getKeyboardAcceleratorHandlers(n)[i]=t[l]}r>0&&(u||(window.addEventListener("keydown",d),u=!0),this._isComponentListening(n)||this._subscribeComponent(n))}},stopListeningToKeyboard:function(e,t){var n=(0,a.findDOMNode)(e);if(this._isComponentListening(n)){if(t)for(var r in t)if(t.hasOwnProperty(r)){var l=r;o.hasOwnProperty(r)&&(l=o[r]),delete this._getKeyboardAcceleratorHandlers(n)[l]}var s=0;for(var c in this._getKeyboardAcceleratorHandlers(n))this._getKeyboardAcceleratorHandlers(n).hasOwnProperty(c)&&(s+=1);t&&0!==s||(this._initKeyboardAccelerators(n),this._unsubscribeComponent(n)),0===i.length&&(window.removeEventListener("keydown",d),u=!1)}}},e.exports=t.default},6:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={pick:function(e,t){var n=function(t){return e.hasOwnProperty(t)},a={};return(t||[]).forEach(function(t){n(t)&&(a[t]=e[t])}),a},omit:function(e,t){var n={};return Object.keys(e).forEach(function(a){(t||[]).indexOf(a)===-1&&(n[a]=e[a])}),n}},e.exports=t.default},290:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),o=a(r),l=n(8),i=a(l),u=function(e){e.data;return o.default.createElement("div",null,o.default.createElement(i.default,{colorIndex:"brand",pad:"large"},"Brand"),o.default.createElement(i.default,{colorIndex:"accent-1",pad:"large"},"Accent-1"),o.default.createElement(i.default,{colorIndex:"accent-1-t",pad:"large"},"Accent-1-t"),o.default.createElement(i.default,{colorIndex:"accent-1-a",pad:"large"},"Accent-1-a"),o.default.createElement(i.default,{colorIndex:"accent-2",pad:"large"},"Accent-2"),o.default.createElement(i.default,{colorIndex:"accent-2-t",pad:"large"},"Accent-2-t"),o.default.createElement(i.default,{colorIndex:"accent-2-a",pad:"large"},"Accent-2-a"),o.default.createElement(i.default,{colorIndex:"accent-3",pad:"large"},"Accent-3"),o.default.createElement(i.default,{colorIndex:"accent-3-t",pad:"large"},"Accent-3-t"),o.default.createElement(i.default,{colorIndex:"accent-3-a",pad:"large"},"Accent-3-a"),o.default.createElement(i.default,{colorIndex:"neutral-1",pad:"large"},"Neutral-1"),o.default.createElement(i.default,{colorIndex:"neutral-1-t",pad:"large"},"Neutral-1-t"),o.default.createElement(i.default,{colorIndex:"neutral-1-a",pad:"large"},"Neutral-1-a"),o.default.createElement(i.default,{colorIndex:"neutral-2",pad:"large"},"Neutral-2"),o.default.createElement(i.default,{colorIndex:"neutral-2-t",pad:"large"},"Neutral-2-t"),o.default.createElement(i.default,{colorIndex:"neutral-2-a",pad:"large"},"Neutral-2-a"),o.default.createElement(i.default,{colorIndex:"neutral-3",pad:"large"},"Neutral-3"),o.default.createElement(i.default,{colorIndex:"neutral-3-t",pad:"large"},"Neutral-3-t"),o.default.createElement(i.default,{colorIndex:"neutral-3-a",pad:"large"},"Neutral-3-a"),o.default.createElement(i.default,{colorIndex:"neutral-4",pad:"large"},"Neutral-4"),o.default.createElement(i.default,{colorIndex:"neutral-4-t",pad:"large"},"Neutral-4-t"),o.default.createElement(i.default,{colorIndex:"neutral-4-a",pad:"large"},"Neutral-4-a"),o.default.createElement(i.default,{colorIndex:"light-1",pad:"large"},"Light-1"),o.default.createElement(i.default,{colorIndex:"light-2",pad:"large"},"Light-2"),o.default.createElement(i.default,{colorIndex:"light-1",pad:"large"},"Light-1"),o.default.createElement(i.default,{colorIndex:"light-2",pad:"large"},"Light-2"))};t.default=u,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-colors-js-9a305838730031e9c97f.js.map