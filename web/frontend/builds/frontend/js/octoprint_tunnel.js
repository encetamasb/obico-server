(function(t){function e(e){for(var r,o,c=e[0],s=e[1],u=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={octoprint_tunnel:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static/frontend/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([6,"chunk-vendors"]),n()})({"052b":function(t,e,n){"use strict";var r=n("df60"),a=n.n(r);a.a},1807:function(t,e,n){"use strict";n("99af"),n("a15b");var r=n("0b49"),a=n.n(r),i=n("dd61"),o=n.n(i);e["a"]={printShotFeedback:function(t,e){return"/api/v1/printshotfeedbacks/".concat(t,"/?print_id=").concat(e)},print:function(t){return"/api/v1/prints/".concat(t,"/")},prints:function(){return"/api/v1/prints/"},printsBulkDelete:function(){return"/api/v1/prints/bulk_delete/"},printAlertOverwrite:function(t){return"/api/v1/prints/".concat(t,"/alert_overwrite/")},printers:function(){return"/api/v1/printers/"},printer:function(t){return"/api/v1/printers/".concat(t,"/")},printerAction:function(t,e){return"/api/v1/printers/".concat(t).concat(e)},pubPrinter:function(){return"/api/v1p/printer/"},gcodes:function(t,e){return"/api/v1/gcodes/?page=".concat(t,"&page_size=").concat(e||24)},gcode:function(t){return"/api/v1/gcodes/".concat(t,"/")},tunnelUsage:function(){return"/api/v1/tunnelusage/"},verificationCode:function(){return"/api/v1/onetimeverificationcodes/"},user:function(){return"/api/v1/users/me/"},sharedResources:function(t){return"/api/v1/sharedresources/?"+o()(a()(t),(function(t){return t.join("=")})).join("&")},sharedResource:function(t){return"/api/v1/sharedresources/".concat(t,"/")},printerDiscovery:function(){return"/api/v1/printer_discovery/"},printerControl:function(t){return"/printers/".concat(t,"/control/")},printerWebSocket:function(t){return"/ws/web/".concat(t,"/")},printerSharedWebSocket:function(t){return"/ws/share_token/web/".concat(t,"/")},printerWizard:function(t){return"/printers/wizard/?printerId=".concat(t)}}},"3ad4":function(t,e,n){},"3c33":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var r=n("90b9"),a=function(t,e){var n=Object(r["a"])()?localStorage.getItem(t):null,a=n||e;try{return JSON.parse(a)}catch(i){return a}},i=function(t,e){Object(r["a"])()&&localStorage.setItem(t,e)}},"4f95":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return o}));var r=function(){return JSON.parse(document.querySelector("#app-platform-json").text)["platform"]},a=function(){return""!==r()},i=function(){return JSON.parse(document.querySelector("#user-json").text)},o=function(){return JSON.parse(document.querySelector("#settings-json").text)}},"502a":function(t,e,n){"use strict";n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return g}));n("caad"),n("2532");var r=n("f3f3"),a=n("c1df"),i=n.n(a),o=n("9b02"),c=n.n(o),s=n("49d5"),u=n.n(s),l=function(t){return t?i()(t):null},p=function(t){return t.ended_at=l(t.cancelled_at||t.finished_at),t.started_at=l(t.started_at),t.uploaded_at=l(t.uploaded_at),t.has_alerts=Boolean(t.alerted_at),t},d=function(t){return t.created_at=l(t.created_at),t.updated_at=l(t.updated_at),t.deleted=l(t.deleted),t.filesize=u()(t.num_bytes),t},f=function(t,e){var n={createdAt:function(){return l(this.created_at)},isOffline:function(){return null===c()(this,"status",null)},isPaused:function(){return c()(this,"status.state.flags.paused",!1)},isIdle:function(){return"Operational"===c()(this,"status.state.text","")},isDisconnected:function(){return c()(this,"status.state.flags.closedOrError",!0)},isPrinting:function(){return!this.isDisconnected()&&"Operational"!==c()(this,"status.state.text","")},inTransientState:function(){return!this.hasError()&&c()(this,"status.state.text","").includes("ing")&&!c()(this,"status.state.text","").includes("Printing")},hasError:function(){return c()(this,"status.state.flags.error")||c()(this,"status.state.text","").toLowerCase().includes("error")},alertUnacknowledged:function(){return c()(this,"current_print.alerted_at")&&i()(c()(this,"current_print.alerted_at")).isAfter(i()(c()(this,"current_print.alert_acknowledged_at")||0))}};return e?(c()(e,"status._ts",-1)>c()(t,"status._ts",c()(e,"status._ts",0))&&delete t.status,Object(r["a"])(Object(r["a"])(Object(r["a"])({},e),t),n)):Object(r["a"])(Object(r["a"])({},t),n)},g=function(t,e,n){var r=Math.round(t.length*e),a=n?"p":"fields.normalized_p";return c()(t[r],"".concat(a),0)}},6:function(t,e,n){t.exports=n("6368")},6368:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),a=n("f357"),i=n("785f"),o=n("b1ef"),c=n("5f5b"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",{staticClass:"justify-content-center"},[n("b-col",{staticClass:"mt-3",attrs:{lg:"8"}},[n("div",[n("div",{staticClass:"text-center"},[n("svg",{attrs:{viewBox:"0 0 1965 240",width:"232",height:"28.34"}},[n("use",{attrs:{href:"#svg-navbar-brand"}})])]),n("div",[n("h4",{staticClass:"text-center my-5"},[t._v("OctoPrint Tunnel Access Authorization")]),n("p",{staticClass:"lead"},[n("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.appName))]),t._v(" is requesting to access the OctoPrint Tunnel.")]),n("p",{staticClass:"text-muted small"},[n("a",{attrs:{href:"https://www.thespaghettidetective.com/docs/octoprint-tunneling/"}},[t._v("OctoPrint Tunnel")]),t._v(" is a secure way provided by The Spaghetti Detective to securely access your OctoPrint. With the OctoPrint Tunnel, you can use "+t._s(t.appName)+" to access your OctoPrint from anywhere.")]),t.user&&!t.user.is_pro?n("b-alert",{staticClass:"my-3",attrs:{variant:"warning",dismissible:"",show:""}},[n("div",[n("i",{staticClass:"fas fa-exclamation-triangle"}),t._v(" Tunnel usage of a free account is "),n("a",{attrs:{href:"https://www.thespaghettidetective.com/docs/octoprint-tunneling/#why-is-the-limit-on-free-account-only-50mb"}},[t._v("capped at 50MB per month")]),t._v(". You can "),n("a",{attrs:{href:"http://app.thespaghettidetective.com/ent/pricing/"}},[t._v("upgrade to The Spaghetti Detective Pro plan for 1 Starbucks a month")]),t._v(" to enjoy unlimited tunnel usage. ")])]):t._e(),t.user?n("div",{staticClass:"mt-5"},[n("p",{staticClass:"lead"},[t._v("Tunnel access by "),n("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.appName))]),t._v(" (make sure you trust it): ")]),0===t.printersToShow.length?n("h5",[t._v("You have 0 active printers")]):1===t.printersToShow.length?n("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.printersToShow[0].name))]):t.printersToShow.length>1?n("select",{directives:[{name:"model",rawName:"v-model",value:t.printerToAuthorize,expression:"printerToAuthorize"}],staticClass:"custom-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.printerToAuthorize=e.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:"",disabled:""},domProps:{value:null}},[t._v("Please select a printer")]),t._l(t.printersToShow,(function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2):t._e(),t.printersToShow.length?n("div",{staticClass:"d-flex mt-4 mb-3"},[n("button",{staticClass:"btn btn-primary",staticStyle:{flex:"1"},attrs:{disabled:!t.printerToAuthorize},on:{click:t.authorize}},[t._v("Authorize")]),n("button",{staticClass:"btn btn-outline-secondary ml-2",staticStyle:{flex:"1"}},[t._v("Cancel")])]):t._e(),n("a",{attrs:{href:"#"}},[t._v("Manage authorized apps")])]):n("div",[n("div",[t._v(" Please "),n("a",{staticClass:"link",attrs:{href:t.loginUrl}},[t._v("sign in to your The Spaghetti Detective account")]),t._v(" to continue, or "),n("a",{staticClass:"link",attrs:{href:t.signupUrl}},[t._v("sign up for an free account")]),t._v(" if you don't have one. ")])])],1),n("div",{staticClass:"mt-4"},[n("p",{staticClass:"text-muted small mb-1"},[t._v(" Security notes: ")]),n("ul",{staticClass:"text-muted small pl-4"},[n("li",[t._v("The app can only access the tunnel, not your The Spaghetti Detective account info such as your email address.")]),n("li",[t._v("The access remains valid until explicitly revoked. You can revoke the access by going to Preferences -> Authorized Apps.")])])])])])],1)],1)},u=[],l=(n("4de4"),n("4160"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("841c"),n("159b"),n("ddb0"),n("2b3d"),n("bc3a")),p=n.n(l),d=n("1807"),f=n("502a"),g=n("4f95"),h={name:"NewOctoPrintTunnelPage",components:{},data:function(){return{user:null,printers:[],printerId:null,printerToAuthorize:null}},created:function(){this.user=Object(g["d"])(),this.fetchPrinters(),this.printerId=new URLSearchParams(window.location.search).get("printer_id")},computed:{printersToShow:function(){var t=this;return this.printerId?this.printers.filter((function(e){return e.id==t.printerId})):this.printers},loginUrl:function(){return"/accounts/login/?hide_navbar=true&next=".concat(encodeURIComponent(window.location.pathname+window.location.search))},signupUrl:function(){return"/accounts/signup/?hide_navbar=true&next=".concat(encodeURIComponent(window.location.pathname+window.location.search))},appName:function(){return new URLSearchParams(window.location.search).get("app")||"Unknown App"}},methods:{fetchPrinters:function(){var t=this;return p.a.get(d["a"].printers()).then((function(e){e.data.forEach((function(e){t.printers.push(Object(f["d"])(e))})),1==t.printersToShow.length&&(t.printerToAuthorize=t.printersToShow[0].id)}))},authorize:function(){var t=this;this.printersToShow.length&&p.a.post("/api/v1/tunnels/",{app_name:this.appName,printer_id:this.printerToAuthorize||this.printersToShow[0].id}).then((function(t){var e=t.data.tunnel_endpoint;window.location.replace("/tunnels/succeeded/?tunnel_endpoint=".concat(e))})).catch((function(e){t.$swal.Reject.fire({title:"Oops",text:e.message})}))}}},b=h,m=(n("fa8f"),n("2877")),v=Object(m["a"])(b,s,u,!1,null,"2974017b",null),_=v.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isPro?t._e():n("div",{staticClass:"floating-panel text-center pb-2"},[t._m(0),n("div",{class:t.usageClass},[t._v(t._s(t.usageMTD)+"/"+t._s(t.humanizedUsageCap))]),t.overage?n("div",[t._v("Your month-to-date tunneling usage is over the Free plan limit. "),n("a",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button",href:"/ent_pub/pricing/"}},[t._v("Get Unlimited Tunneling")])]):t._e()]),n("div",[t.printerId?n("iframe",{staticClass:"tunnel-iframe",attrs:{src:t.iframeUrl()+"#temp"}}):t._e()])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-muted"},[t._v("Month-To-Date Usage/Free Limit("),n("a",{attrs:{href:"https://www.thespaghettidetective.com/docs/octoprint-tunneling/#is-octoprint-tunneling-free-to-all-users"}},[t._v("?")]),t._v(")")])}],y=(n("fb6a"),n("6625")),j=n.n(y),k=n("49d5"),T=n.n(k),D=n("90b9"),S={name:"OctoPrintTunnelPage",components:{},data:function(){return{bytesMTD:null,usageCap:null,isPro:!0,printerId:null}},computed:{usageClass:function(){return{"text-success":this.bytesMTD<.8*this.usageCap,"text-warning":this.bytesMTD>=.8*this.usageCap&&this.bytesMTD<this.usageCap,"text-danger":this.bytesMTD>=this.usageCap}},usageMTD:function(){return T()(this.bytesMTD)},humanizedUsageCap:function(){return T()(this.usageCap)},overage:function(){return this.bytesMTD>=this.usageCap}},created:function(){this.isPro=Object(g["d"])().is_pro,this.printerId=j()(window.location.pathname,"/").slice(-2,-1).pop()},mounted:function(){var t=Object(D["a"])()?localStorage.getItem("skip-tunneling-warning"):null;"yes"!==t&&this.$swal.Prompt.fire({html:'\n          <h4 class="text-center p-2">\n            <svg class="menu-icon" fill="currentColor" viewBox="0 0 346.26 368.59" style="height: 1.1em;margin-right: 0.75em;">\n              <use href="#svg-octoprint-tunneling" />\n            </svg>\n            OctoPrint Secure Tunnel\n          </h4>\n          <div class="p-1">\n            It may take long time for OctoPrint page to load as it is securely tunneled via The Spaghetti Detective server.\n          </div>\n          <div class="p-1">\n            <a target="_blank" href="https://www.thespaghettidetective.com/docs/octoprint-tunneling/#is-octoprint-tunneling-free-to-all-users">\n            Learn more about OctoPrint Tunneling\'s security and page load speed.\n            <i class="fas fa-external-link-alt"></i>\n          </a>\n        </div>\n        ',input:"checkbox",inputPlaceholder:"Don't show again"},"octoprint-tunnel.warning").then((function(t){t.isConfirmed&&t.value&&Object(D["a"])()&&localStorage.setItem("skip-tunneling-warning","yes")}));var e=this,n=function(){p.a.get(d["a"].tunnelUsage()).then((function(t){e.bytesMTD=t.data.total,e.usageCap=t.data.monthly_cap}))};setInterval(n,15e3),setTimeout(n,4e3)},methods:{iframeUrl:function(){return"/octoprint/".concat(this.printerId,"/")}}},x=S,C=(n("052b"),n("e345"),Object(m["a"])(x,O,w,!1,null,"6b77e8de",null)),P=C.exports;Object(o["c"])(),Object(i["a"])(r["default"]),r["default"].use(a["a"]),r["default"].use(c["a"]),document.getElementById("new-octoprint-tunnel-mount")&&new r["default"]({components:{NewOctoPrintTunnelPage:_}}).$mount("#new-octoprint-tunnel-mount"),document.getElementById("octoprint-tunnel-mount")&&new r["default"]({components:{OctoPrintTunnelPage:P}}).$mount("#octoprint-tunnel-mount")},"785f":function(t,e,n){"use strict";n("99af"),n("fb6a"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("5319");var r=n("0122"),a=/(?:^|[-_/])(\w)/g,i="root",o="anonymous component",c=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/,s=function(t){var e=c.exec(t);return e?e.slice(1):[]},u=function(t,e){var n=s(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},l=function(t){if(!t)return o;if(t.$root===t)return i;if(!t.$options)return o;if(t.$options.name)return t.$options.name;if(t.$options._componentTag)return t.$options._componentTag;if(t.$options.__file){var e=t.$options.__file.replace(/^[a-zA-Z]:/,"").replace(/\\/g,"/"),n=u(e,".vue");return n.replace(a,(function(t,e){return e?e.toUpperCase():""}))}return o},p=function t(e,n,a,i,o,c){var s=0;for(var u in n){if(s+=1,s>c)break;"object"==Object(r["a"])(n[u])?o>i&&t(e,n[u],a+"."+u,i+1,o,c):e[a+"."+u]=n[u]}},d=function(t){var e=t.config.errorHandler;t.config.errorHandler=function(n,r,a){if(window.Sentry){var i={},o=r;if(r._original&&(o=r._original),o)try{i.componentName=l(o),p(i,JSON.parse(JSON.stringify(o.$options.propsData)),"props",0,2,10)}catch(c){console.log("Unable to extract metadata from Vue component.")}a&&(i.lifecycleHook=a),setTimeout((function(){window.Sentry.getCurrentHub().withScope((function(t){t.setContext("vue",i),window.Sentry.getCurrentHub().captureException(n)}))}))}"function"===typeof e&&e.call(t,n,r,a),t.util&&t.util.warn("Error in ".concat(a,': "').concat(n.toString(),'"'),r),console.error(n)}};e["a"]=d},"90b9":function(t,e,n){"use strict";function r(){try{var t="__random_key_we_are_not_going_to_use__";return localStorage.setItem(t,t),localStorage.removeItem(t),!0}catch(e){return!1}}n.d(e,"a",(function(){return r}))},ad56:function(t,e,n){},b1ef:function(t,e,n){"use strict";n.d(e,"a",(function(){return E})),n.d(e,"e",(function(){return R})),n.d(e,"b",(function(){return W})),n.d(e,"c",(function(){return q})),n.d(e,"d",(function(){return H}));n("4160"),n("b0c0"),n("d3b7"),n("159b"),n("ddb0");var r,a,i,o,c,s,u,l,p,d,f,g,h,b,m,v,_,O,w,y,j,k,T,D,S,x,C,P,L,$,I,M,z=n("fc11"),A=n("a026"),U=n("90b9"),E={Light:"Light",Dark:"Dark",System:"System"},N=[{name:"primary-hover",values:(r={},Object(z["a"])(r,E.Light,"rgb(178 137 248)"),Object(z["a"])(r,E.Dark,"rgb(154 106 239)"),r)},{name:"primary",values:(a={},Object(z["a"])(a,E.Light,"rgb(153 101 244)"),Object(z["a"])(a,E.Dark,"rgb(165 123 238)"),a)},{name:"on-primary",values:(i={},Object(z["a"])(i,E.Light,"rgb(255 255 255)"),Object(z["a"])(i,E.Dark,"rgb(255 255 255)"),i)},{name:"secondary",values:(o={},Object(z["a"])(o,E.Light,"rgb(40 48 58)"),Object(z["a"])(o,E.Dark,"rgb(235 235 235)"),o)},{name:"on-secondary",values:(c={},Object(z["a"])(c,E.Light,"rgb(235 235 235)"),Object(z["a"])(c,E.Dark,"rgb(40 48 58)"),c)},{name:"success",values:(s={},Object(z["a"])(s,E.Light,"rgb(92 184 92)"),Object(z["a"])(s,E.Dark,"rgb(92 184 92)"),s)},{name:"success-hover",values:(u={},Object(z["a"])(u,E.Light,"rgb(76 174 76)"),Object(z["a"])(u,E.Dark,"rgb(76 174 76)"),u)},{name:"on-success",values:(l={},Object(z["a"])(l,E.Light,"rgb(255 255 255)"),Object(z["a"])(l,E.Dark,"rgb(255 255 255)"),l)},{name:"danger",values:(p={},Object(z["a"])(p,E.Light,"rgb(217 83 79)"),Object(z["a"])(p,E.Dark,"rgb(217 83 79)"),p)},{name:"danger-hover",values:(d={},Object(z["a"])(d,E.Light,"rgb(194 65 61)"),Object(z["a"])(d,E.Dark,"rgb(194 65 61)"),d)},{name:"on-danger",values:(f={},Object(z["a"])(f,E.Light,"rgb(255 255 255)"),Object(z["a"])(f,E.Dark,"rgb(255 255 255)"),f)},{name:"warning",values:(g={},Object(z["a"])(g,E.Light,"rgb(240 173 78)"),Object(z["a"])(g,E.Dark,"rgb(240 173 78)"),g)},{name:"warning-hover",values:(h={},Object(z["a"])(h,E.Light,"rgb(219 154 63)"),Object(z["a"])(h,E.Dark,"rgb(219 154 63)"),h)},{name:"on-warning",values:(b={},Object(z["a"])(b,E.Light,"rgb(255 255 255)"),Object(z["a"])(b,E.Dark,"rgb(255 255 255)"),b)},{name:"on-warning-2",values:(m={},Object(z["a"])(m,E.Light,"rgb(0 0 0)"),Object(z["a"])(m,E.Dark,"rgb(0 0 0)"),m)},{name:"background",values:(v={},Object(z["a"])(v,E.Light,"rgb(235 235 235)"),Object(z["a"])(v,E.Dark,"rgb(35 49 65)"),v)},{name:"surface-primary",values:(_={},Object(z["a"])(_,E.Light,"rgb(255 255 255)"),Object(z["a"])(_,E.Dark,"rgb(72 91 113)"),_)},{name:"surface-secondary",values:(O={},Object(z["a"])(O,E.Light,"rgb(245 245 245)"),Object(z["a"])(O,E.Dark,"rgb(45 62 79)"),O)},{name:"overlay",values:(w={},Object(z["a"])(w,E.Light,"rgb(245 245 245 / .8)"),Object(z["a"])(w,E.Dark,"rgb(0 0 0 / .8)"),w)},{name:"hover",values:(y={},Object(z["a"])(y,E.Light,"rgb(102 102 102 / .075)"),Object(z["a"])(y,E.Dark,"rgb(255 255 255 / .075)"),y)},{name:"divider",values:(j={},Object(z["a"])(j,E.Light,"rgb(171 182 194)"),Object(z["a"])(j,E.Dark,"rgb(106 123 138)"),j)},{name:"text-primary",values:(k={},Object(z["a"])(k,E.Light,"rgb(40 48 58)"),Object(z["a"])(k,E.Dark,"rgb(235 235 235)"),k)},{name:"text-secondary",values:(T={},Object(z["a"])(T,E.Light,"rgb(138 148 162)"),Object(z["a"])(T,E.Dark,"rgb(170 172 176)"),T)},{name:"text-help",values:(D={},Object(z["a"])(D,E.Light,"rgb(76 155 232)"),Object(z["a"])(D,E.Dark,"rgb(76 155 232)"),D)},{name:"input-background",values:(S={},Object(z["a"])(S,E.Light,"rgb(226 232 237)"),Object(z["a"])(S,E.Dark,"rgb(66 86 107)"),S)},{name:"input-placeholder",values:(x={},Object(z["a"])(x,E.Light,"rgb(40 48 58 / .5)"),Object(z["a"])(x,E.Dark,"rgb(235 235 235 / .5)"),x)},{name:"table-accent",values:(C={},Object(z["a"])(C,E.Light,"rgb(227 227 227)"),Object(z["a"])(C,E.Dark,"rgb(40 56 72)"),C)},{name:"icon-tunneling-1",values:(P={},Object(z["a"])(P,E.Light,"rgb(78 93 108)"),Object(z["a"])(P,E.Dark,"rgb(234 234 234)"),P)},{name:"icon-tunneling-2",values:(L={},Object(z["a"])(L,E.Light,"rgb(29 41 53)"),Object(z["a"])(L,E.Dark,"rgb(205 205 205)"),L)}],B=[{name:"logo-bg",values:($={},Object(z["a"])($,E.Light,'url("/static/img/logo-bg/logo-bg_light.svg")'),Object(z["a"])($,E.Dark,'url("/static/img/logo-bg/logo-bg_dark.svg")'),$)},{name:"tail-spin",values:(I={},Object(z["a"])(I,E.Light,'url("/static/img/tail-spin/tail-spin_light.svg")'),Object(z["a"])(I,E.Dark,'url("/static/img/tail-spin/tail-spin_dark.svg")'),I)}],J=[{name:"top-nav",values:(M={},Object(z["a"])(M,E.Light,"0px 2px 10px rgb(0 0 0 / .1)"),Object(z["a"])(M,E.Dark,"0px 2px 10px rgb(0 0 0 / .3)"),M)}],R=A["default"].observable({value:(Object(U["a"])()?localStorage.getItem("colorTheme"):E.Dark)||E.Dark});function W(){return R.value===E.System?"not all"!==window.matchMedia("(prefers-color-scheme)").media&&window.matchMedia("(prefers-color-scheme: light)").matches?E.Light:E.Dark:R.value}function q(){var t=W();N.forEach((function(e){if(document.documentElement.style.setProperty("--color-".concat(e.name),e.values[t]),"surface-secondary"===e.name){var n=document.querySelector('meta[name="theme-color"]');n.content=e.values[t]}})),B.forEach((function(e){document.documentElement.style.setProperty("--url-".concat(e.name),e.values[t])})),J.forEach((function(e){document.documentElement.style.setProperty("--shadow-".concat(e.name),e.values[t])}))}function H(t){R.value=t,Object(U["a"])()&&localStorage.setItem("colorTheme",R.value),q()}},df60:function(t,e,n){},e345:function(t,e,n){"use strict";var r=n("ad56"),a=n.n(r);a.a},f357:function(t,e,n){"use strict";var r=n("f3f3"),a=n("a026"),i=n("5886"),o=n("3c33"),c=function(t,e,n){var i=document.createElement("div"),o=new a["default"]({render:function(n){return n(t,{props:e})}}).$mount(i);return a["default"].swal(Object(r["a"])(Object(r["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(t){t.querySelector("#replace-here").replaceWith(o.$el)},onDestroy:function(){o.$destroy(),i.remove()}}))},s=function(t,e,n){return a["default"].swal(Object(r["a"])(Object(r["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(e){e.querySelector("#replace-here").replaceWith(t)}}))},u=function(t,e){t.use(i["a"],e);var n=t.swal.mixin({title:"Are you sure?",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",customClass:{container:"dark-backdrop"}}),a=t.swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3}),u=t.swal.mixin({icon:"error",customClass:{container:"dark-backdrop"}}),l=t.swal.mixin({customClass:{container:"dark-backdrop"}}),p=function(e,n){if(!Object(o["a"])(n,!1)){var a=Object(r["a"])(Object(r["a"])({},e),{},{position:"top-end",confirmButtonText:"Gotcha! Don't show this again."});return t.swal(a).then((function(t){t.value&&(Object(o["b"])(n,!0),console.log(t))}))}};t.prototype.$swal["openModalWithComponent"]=c,t.prototype.$swal["openModalWithElement"]=s,t.prototype.$swal["Confirm"]=n,t.prototype.$swal["Toast"]=a,t.prototype.$swal["DismissableToast"]=p,t.prototype.$swal["Reject"]=u,t.prototype.$swal["Prompt"]=l};e["a"]={install:u}},fa8f:function(t,e,n){"use strict";var r=n("3ad4"),a=n.n(r);a.a}});
//# sourceMappingURL=octoprint_tunnel.js.map