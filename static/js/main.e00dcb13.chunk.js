(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),i=(n(13),n(4)),s=n(2),l=n(3),u=n(1),d=[{id:1,title:"col 1",cards:[{id:1,text:"foo"},{id:2,text:"bar"}]},{id:2,title:"col 2",cards:[{id:3,text:"test"},{id:4,text:"fourth thing"},{id:5,text:"blah"},{id:6,text:"dfdsf"}]},{id:3,title:"col 3",cards:[{id:7,text:"xsdfdsf"},{id:8,text:"sfsdff"},{id:9,text:"test3"}]}],f=[{id:1,title:"Change me!",cards:[{id:1,text:"..."}]}],m=[],b=function(e){return new Promise(function(t,n){"default"===e?localStorage.setItem("board",JSON.stringify(d)):"empty"===e?localStorage.setItem("board",JSON.stringify(f)):n({Status:"Could not reset board"}),t({Status:"Board reset"})})},g=function(e){return new Promise(function(t,n){var a=!1;m=m.map(function(t){return t.id===e.id&&(t=Object(u.a)({},e),a=!0),t}),a?(localStorage.setItem("board",JSON.stringify(m)),t({Status:"Updated List"})):n({Status:"Could not update"})})},h=function(){return new Promise(function(e){var t=-1;m.forEach(function(e){e.cards.forEach(function(e){t<=e.id&&(t=e.id+1)})}),e(t)})},v=function(e){var t=e.data,n=Object(a.useState)(t),r=Object(s.a)(n,2),c=r[0],i=r[1],d=Object(a.useState)(!1),f=Object(s.a)(d,2),b=f[0],g=f[1],h=function(){var e;g(!1),(e=c,new Promise(function(t,n){var a=!1;m=m.map(function(t){var n=t.cards.map(function(t){return t.id===e.id&&(t=Object(u.a)({},e),a=!0),t});return Object(u.a)({},t,{cards:n})}),a?(localStorage.setItem("board",JSON.stringify(m)),t({Status:"Updated Card"})):n({Status:"Could not update"})})).then(function(e){console.log(e)})};return o.a.createElement("div",{className:"card",onClick:function(){return g(!0)},onBlur:function(){return h()}},b?o.a.createElement("input",{type:"text",name:"text",autoFocus:!0,value:c.text,onChange:function(e){i(Object(u.a)({},c,Object(l.a)({},e.target.name,e.target.value)))},onKeyPress:function(e){"Enter"===e.key&&h()}}):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"card-header"},t.id),o.a.createElement("p",{className:"card-body"},t.text)))},p=function(e){var t=Object(a.useState)(e.list),n=Object(s.a)(t,2),r=n[0],c=n[1],d=Object(a.useState)(!1),f=Object(s.a)(d,2),m=f[0],b=f[1],p=function(){b(!1),g(r).then(function(e){console.log(e)}).catch(function(e){return console.error(e)})};return o.a.createElement("div",{className:"list"},m?o.a.createElement("input",{type:"text",name:"title",autoFocus:!0,value:r.title,onChange:function(e){return c(Object(u.a)({},r,Object(l.a)({},e.target.name,e.target.value)))},onBlur:function(){return p()},onKeyPress:function(e){"Enter"===e.key&&p()}}):o.a.createElement("p",{className:"list-title",onClick:function(){return b(!0)}},r.title),e.cards.map(function(e){return o.a.createElement(v,{key:e.id,data:e})}),o.a.createElement("button",{className:"btn add-card",onClick:function(){h().then(function(t){var n=[].concat(Object(i.a)(e.cards),[{id:t,text:"..."}]);c(Object(u.a)({},r,{cards:n})),g(Object(u.a)({},r,{cards:n})).then(function(e){console.log(e)})})}},"Add a new Card"))},w=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)(function(){new Promise(function(e,t){localStorage.getItem("board")?m=JSON.parse(localStorage.getItem("board")):(m=d,localStorage.setItem("board",JSON.stringify(d))),e(m)}).then(function(e){r(e)})},[n]),o.a.createElement("div",{className:"board-container"},n&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"text-center",style:{marginTop:"0"}},"This is the board"),o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{className:"btn",onClick:function(){window.confirm("Are you sure?")&&b("default").then(function(e){return console.log(e)})}},"Reset the Board")," ",o.a.createElement("button",{className:"btn",onClick:function(){window.confirm("Are you sure?")&&b("empty").then(function(e){return console.log(e)})}},"Clear the Board")),o.a.createElement("hr",null),o.a.createElement("button",{className:"btn",onClick:function(){h().then(function(e){new Promise(function(e){var t=-1;m.forEach(function(e){t<=e.id&&(t=e.id+1)}),e(t)}).then(function(t){var a,o={id:t,title:"Change me!",cards:[{id:e,text:"..."}]};(a=[].concat(Object(i.a)(n),[o]),new Promise(function(e){localStorage.setItem("board",JSON.stringify(a)),e({Status:"Updated Board"})})).then(function(e){console.log(e)})})})}},"Add a Column"),o.a.createElement("div",{className:"board"},n.map(function(e){return o.a.createElement(p,{key:e.id,cards:e.cards,list:e})}))))},E=function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("p",null,"Copywrite \xa92019 Sebastian Safari"),o.a.createElement("a",{href:"https://github/com/ssebs"},"GitHub"))};var S=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,null),o.a.createElement(E,null))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(S,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ssebs-kanban",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/ssebs-kanban","/service-worker.js");O?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):y(t,e)})}}()},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.e00dcb13.chunk.js.map