(this["webpackJsonpcollaborative-text-editor"]=this["webpackJsonpcollaborative-text-editor"]||[]).push([[0],{30:function(e,t,n){e.exports=n(73)},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},69:function(e,t){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),c=n.n(o),i=(n(35),n(36),n(3));n(37),n(38);var s=function(e){return r.a.createElement("div",{className:"user"},r.a.createElement("h2",{className:e.presenting?"presenting":"normal"},e.presenting?e.name+" (presenting)":e.name))},l=n(29),u=n.n(l)()();var m=function(e){u.on("activeusers",(function(e){c(e)}));var t=Object(a.useState)([]),n=Object(i.a)(t,2),o=n[0],c=n[1];return r.a.createElement("div",{className:"userArea"},r.a.createElement("h1",{className:"heading"},"Active Users"),r.a.createElement("div",{className:"userList"},o.map((function(e){return r.a.createElement(s,{name:e.username,presenting:e.isPresenting})}))))};n(72);var d=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)(!1),l=Object(i.a)(s,2),m=l[0],d=l[1];return u.on("editorvaluechange",(function(e){c(e)})),u.on("unlockEditor",(function(){d(!1)})),u.on("lockEditor",(function(){d(!0)})),r.a.createElement("div",{className:"editorContainer"},r.a.createElement("textarea",{value:o,cols:"100",rows:"30",disabled:m,onInput:function(e){c(e.target.value),u.emit("editorvaluechange",e.target.value)},onFocus:function(){u.emit("focus")},onBlur:function(){u.emit("blur")},placeholder:"write your text here..."}))};var v=function(){for(var e="";""===e;)e=window.prompt("please enter your name");return function(e){u.emit("addnewuser",e)}(e),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"editorArea"},r.a.createElement(d,null)),r.a.createElement("div",{className:"displayUsersArea"},r.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.b46092fb.chunk.js.map