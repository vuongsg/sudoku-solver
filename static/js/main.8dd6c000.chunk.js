(this["webpackJsonpsudoku-solver"]=this["webpackJsonpsudoku-solver"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},29:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);for(var a=n(0),r=n.n(a),o=n(5),i=n.n(o),l=(n(20),n(21),n(9)),c=n.n(l),u=n(11),s=n(2),d=n(4),v=(n(29),n(7)),h=Array(9),f=0;f<9;f++)h[f]=Array(9).fill("");var p=Object(v.b)({name:"sudoku",initialState:h,reducers:{changeBoard:function(t,e){return e.payload}}}),b=p.actions.changeBoard,g=p.reducer,j=n(13),M=n(14),O=n(15),y=function(){function t(e){Object(M.a)(this,t),this.board=void 0,this.rowMap=void 0,this.colMap=void 0,this.cellMap=void 0,this.board=e,this.rowMap=new Map,this.colMap=new Map,this.cellMap=new Map;for(var n=this.board.length,a=this.board[0].length,r=0;r<n;r++)for(var o=0;o<a;o++){var i=this.board[r][o];if(""!==i){var l,c,u;this.rowMap.has(r)||this.rowMap.set(r,[]),this.colMap.has(o)||this.colMap.set(o,[]);var d=3*Math.floor(r/3)+Math.floor(o/3);this.cellMap.has(d)||this.cellMap.set(d,[]),this.rowMap.set(r,[].concat(Object(s.a)(null!==(l=this.rowMap.get(r))&&void 0!==l?l:[]),[i])),this.colMap.set(o,[].concat(Object(s.a)(null!==(c=this.colMap.get(o))&&void 0!==c?c:[]),[i])),this.cellMap.set(d,[].concat(Object(s.a)(null!==(u=this.cellMap.get(d))&&void 0!==u?u:[]),[i]))}}}return Object(O.a)(t,[{key:"solve",value:function(){return this.tryNext(0,0,this.board.length,this.board[0].length),this.board}},{key:"tryNext",value:function(t,e,n,a){var r=this;if(e===a&&(++t,e=0),t===n)return!0;for(;""!==this.board[t][e];)if(++e===a&&(++t,e=0),t===n)return!0;var o,i=Object(j.a)("123456789");try{var l=function(){var i=o.value;if(r.isValid(t,e,i)){var l,c,u,d,v,h,f,p;if(r.board[t][e]=i,r.rowMap.has(t))r.rowMap.set(t,[].concat(Object(s.a)(null!==(f=r.rowMap.get(t))&&void 0!==f?f:[]),[i]));else r.rowMap.set(t,[i]);if(r.colMap.has(e))r.colMap.set(e,[].concat(Object(s.a)(null!==(p=r.colMap.get(e))&&void 0!==p?p:[]),[i]));else r.colMap.set(e,[i]);var b,g=3*Math.floor(t/3)+Math.floor(e/3);if(r.cellMap.has(g))r.cellMap.set(g,[].concat(Object(s.a)(null!==(b=r.cellMap.get(g))&&void 0!==b?b:[]),[i]));else r.cellMap.set(g,[i]);if(r.tryNext(t,e+1,n,a))return{v:!0};r.board[t][e]="",r.rowMap.set(t,null!==(l=null===(c=r.rowMap.get(t))||void 0===c?void 0:c.filter((function(t){return t!==i})))&&void 0!==l?l:[]),r.colMap.set(e,null!==(u=null===(d=r.colMap.get(e))||void 0===d?void 0:d.filter((function(t){return t!==i})))&&void 0!==u?u:[]),r.cellMap.set(g,null!==(v=null===(h=r.cellMap.get(g))||void 0===h?void 0:h.filter((function(t){return t!==i})))&&void 0!==v?v:[])}};for(i.s();!(o=i.n()).done;){var c=l();if("object"===typeof c)return c.v}}catch(u){i.e(u)}finally{i.f()}return!1}},{key:"isValid",value:function(t,e,n){var a,r,o;if(this.rowMap.has(t)&&-1!==(null===(a=this.rowMap.get(t))||void 0===a?void 0:a.indexOf(n)))return!1;if(this.colMap.has(e)&&-1!==(null===(r=this.colMap.get(e))||void 0===r?void 0:r.indexOf(n)))return!1;var i=3*Math.floor(t/3)+Math.floor(e/3);return!this.cellMap.has(i)||-1===(null===(o=this.cellMap.get(i))||void 0===o?void 0:o.indexOf(n))}}]),t}(),x=n(1),m=function(){var t=Object(d.c)((function(t){return t.sudoku}));Object(a.useEffect)((function(){document.title="Sudoku solver"}),[]),Object(a.useEffect)((function(){!function(){for(var e,n,a=null!==(e=null===(n=document.querySelector("#board-div"))||void 0===n?void 0:n.getElementsByTagName("div"))&&void 0!==e?e:[],r=0,o=0,i=t.length,l=t[0].length,c=0,u=a.length;c<u;c++){var s=a[c];if(null!==s&&"num-cell"===s.className&&(s.innerHTML=t[r][o++],o===l&&(++r,o=0),r===i))return}}()}),[t]);for(var e=Object(d.b)(),n=function(t){t.dataTransfer.setData("text/plain",t.target.value)},o=function(t){t.preventDefault()},i=function(t){t.preventDefault();var e=t.dataTransfer.getData("text/plain");t.target.innerHTML=e},l=function(t){t.preventDefault(),t.key>="1"&&t.key<="9"?t.target.innerHTML=t.key:8!==t.keyCode&&46!==t.keyCode||(t.target.innerHTML="")},v=[],h=0;h<9;h++){for(var f=[],p=0;p<9;p++)f.push(r.a.createElement("div",{className:"num-cell",tabIndex:0,onDragOver:o,onDrop:i,onKeyDown:l}));v.push(r.a.createElement("div",{className:"row"},f))}var g=function(){for(var e,n,a=null!==(e=null===(n=document.querySelector("#board-div"))||void 0===n?void 0:n.getElementsByTagName("div"))&&void 0!==e?e:[],r=[],o=t[0].length,i=0,l=[],c=0,u=a.length;c<u;c++){var d=a[c];if(null!==d&&"num-cell"===d.className){if(l.push(d.innerHTML),i===o-1){var v=Object(s.a)(l);r.push(v)}++i===o&&(i=0,l=[])}}return r},j=function(){var t=Object(u.a)(c.a.mark((function t(){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=g(),a=new y(n),t.next=4,a.solve();case 4:n=t.sent,e(b(n));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"main",children:[Object(x.jsxs)("section",{id:"numbers-div",children:[Object(x.jsx)("input",{type:"button",value:"1",draggable:"true",onDragStart:n}),Object(x.jsx)("input",{type:"button",value:"2",draggable:"true",onDragStart:n}),Object(x.jsx)("input",{type:"button",value:"3",draggable:"true",onDragStart:n}),Object(x.jsx)("input",{type:"button",value:"4",draggable:"true",onDragStart:n}),Object(x.jsx)("input",{type:"button",value:"5",draggable:"true",onDragStart:n}),Object(x.jsx)("input",{type:"button",value:"6",draggable:"true",onDragStart:n}),Object(x.jsx)("input",{type:"button",value:"7",draggable:"true",onDragStart:n}),Object(x.jsx)("input",{type:"button",value:"8",draggable:"true",onDragStart:n}),Object(x.jsx)("input",{type:"button",value:"9",draggable:"true",onDragStart:n})]}),Object(x.jsx)("section",{id:"board-div",children:v}),Object(x.jsxs)("section",{id:"control-table",children:[Object(x.jsx)("input",{type:"button",value:"Clear board",onClick:function(){for(var n=Array(t.length),a=t[0].length,r=0,o=t.length;r<o;r++)n[r]=Array(a).fill("");e(b(n))}}),Object(x.jsx)("input",{type:"button",value:"Give me the answer",onClick:j})]})]})};var w=function(){return Object(x.jsx)(m,{})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),o(t),i(t)}))},D=(n(31),function(){return Object(x.jsx)("header",{id:"main-header",children:Object(x.jsx)("h1",{children:"Sudoku Solver"})})}),S=(n(32),function(){return Object(x.jsx)("footer",{id:"main-footer",children:Object(x.jsx)("h3",{children:"Created by Vuong Nguyen \xa9 2021"})})}),N=Object(v.a)({reducer:{sudoku:g}});i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsxs)(d.a,{store:N,children:[Object(x.jsx)(D,{}),Object(x.jsx)(w,{}),Object(x.jsx)(S,{})]})}),document.getElementById("root")),k()}},[[33,1,2]]]);
//# sourceMappingURL=main.8dd6c000.chunk.js.map