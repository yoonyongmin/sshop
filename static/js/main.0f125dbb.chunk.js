(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{46:function(e,t,n){},56:function(e,t,n){"use strict";n.d(t,"b",(function(){return w}));var c=n(27),i=n(39),r=n(2),a=n(0),o=n.n(a),s=n(102),l=n(103),d=n(101),j=n(100),h=n(61),b=(n.p,n(46),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Gray Yordan",content:"Born in the States",price:13e4}]),u=n(57),O=n.n(u),p=n(26),x=n(7),f=n(99),v=n(33);var g=Object(v.b)((function(e){return{state:e.reducer,"\uacbd\uace0\ucc3d":e.reducer2}}))((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(f.a,{responsive:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(r.jsx)("th",{children:"\uc218\ub7c9"}),Object(r.jsx)("th",{children:"\ubcc0\uacbd"})]})}),Object(r.jsx)("tbody",{children:e.state.map((function(t,n){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:n+1}),Object(r.jsx)("td",{children:e.state[n].name}),Object(r.jsx)("td",{children:e.state[n].quan}),Object(r.jsxs)("td",{children:[Object(r.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uc99d\uac00","\ub370\uc774\ud130":t.id})},children:"+"}),Object(r.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uac10\uc18c","\ub370\uc774\ud130":t.id})},children:"-"})]})]},n)}))})]}),!0===e.\uacbd\uace0\ucc3d?Object(r.jsxs)("div",{className:"my-alert2 alertbox",children:[Object(r.jsx)("p",{className:"alertText",children:"\uc9c0\uae08 \uad6c\ub9e4\ud558\uc2dc\uba74 \uc2e0\uaddc\ud560\uc778 20%"}),Object(r.jsx)("p",{className:"closebox",onClick:function(){e.dispatch({type:"\ub2eb\uae30"})},children:"X"})]}):null]})})),m=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,112))})),w=o.a.createContext();function k(e){var t=Object(a.useContext)(w),n=Object(x.f)();return Object(r.jsxs)("div",{className:"col-md-4 itembox",onClick:function(){n.push("/detail/"+e.shoes.id)},children:[Object(r.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(r.jsx)("h4",{children:e.shoes.title}),Object(r.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price]}),Object(r.jsxs)("p",{children:["\uc7ac\uace0 : ",t[e.i]]})]})}t.a=function(){var e=Object(a.useState)(b),t=Object(i.a)(e,2),n=t[0],o=t[1],u=Object(a.useState)(!1),f=Object(i.a)(u,2),v=f[0],y=f[1],S=Object(a.useState)([10,11,12]),N=Object(i.a)(S,2),C=N[0],W=N[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)(s.a,{bg:"light",expand:"lg",className:"",children:[Object(r.jsx)(s.a.Brand,{href:"#home",children:"Shoes Shop"}),Object(r.jsx)(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsx)(s.a.Collapse,{id:"basic-navbar-nav",children:Object(r.jsxs)(l.a,{className:"ml-auto",children:[Object(r.jsx)(l.a.Link,{as:p.b,to:"/",children:"Home"}),Object(r.jsx)(l.a.Link,{as:p.b,to:"/detail/0",children:"Detail"}),Object(r.jsxs)(d.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(r.jsx)(d.a.Item,{href:"#action/3.1",children:"Action"}),Object(r.jsx)(d.a.Item,{href:"#action/3.2",children:"Another action"}),Object(r.jsx)(d.a.Item,{href:"#action/3.3",children:"Something"}),Object(r.jsx)(d.a.Divider,{}),Object(r.jsx)(d.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(r.jsxs)(x.c,{children:[Object(r.jsxs)(x.a,{exact:!0,path:"/",children:[Object(r.jsxs)(j.a,{className:"background",children:[Object(r.jsx)("h1",{children:"20% Seanson OFF"}),Object(r.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(r.jsx)("p",{children:Object(r.jsx)(h.a,{variant:"primary",children:"Learn more"})})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)(w.Provider,{value:C,children:[Object(r.jsx)("div",{className:"row",children:n.map((function(e,t){return Object(r.jsx)(k,{shoes:n[t],i:t},t)}))}),!0===v?Object(r.jsx)("div",{id:"preloader",children:Object(r.jsx)("div",{id:"status",children:"\xa0"})}):null]}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(){y(!0),O.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){y(!1),o([].concat(Object(c.a)(n),Object(c.a)(e.data)))})).catch((function(){console.log("fail")}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(r.jsx)(x.a,{path:"/detail/:id",children:Object(r.jsx)(w.Provider,{value:C,children:Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)("div",{children:"\ub85c\ub529\uc804\uae4c\uc9c0 \ubcf4\uc5ec\uc904 HTML"}),children:Object(r.jsx)(m,{shoes:n,"\uc7ac\uace0":C,"\uc7ac\uace0\ubcc0\uacbd":W})})})}),Object(r.jsx)(x.a,{path:"/cart",children:Object(r.jsx)(g,{})})]})]})}},69:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(27),i=n(2),r=n(0),a=n.n(r),o=n(14),s=n.n(o),l=(n(69),n(56)),d=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,113)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var b=n(26),u=n(33),O=n(29);var p=[];var x=Object(O.c)(Object(O.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=Object(c.a)(e);if("\ud56d\ubaa9\ucd94\uac00"===t.type){var i=e.findIndex((function(e){return e.id===t.payload.id}));return i>=0?(n[i].quan++,n):(n.push(t.payload),n)}return"\uc218\ub7c9\uc99d\uac00"===t.type?(n[t.\ub370\uc774\ud130].quan++,n):"\uc218\ub7c9\uac10\uc18c"===t.type?(n[t.\ub370\uc774\ud130].quan--,0===n[t.\ub370\uc774\ud130].quan&&(alert("\ucd5c\uc18c \uc218\ub7c9\uc785\ub2c8\ub2e4"),n[t.\ub370\uc774\ud130].quan++),n):e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"\ub2eb\uae30"===t.type?e=!1:e}}));s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(b.a,{children:Object(i.jsx)(u.a,{store:x,children:Object(i.jsx)(l.a,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/deploy_test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/deploy_test","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):h(t,e)}))}}(),d()}},[[94,1,2]]]);
//# sourceMappingURL=main.0f125dbb.chunk.js.map