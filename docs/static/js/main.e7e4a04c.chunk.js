(this.webpackJsonpdashboard_reactjs=this.webpackJsonpdashboard_reactjs||[]).push([[0],{18:function(e,t,c){},30:function(e,t,c){},33:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(21),a=c(2),s=c(19),i=c.n(s),l=(c(29),c(30),c(0)),o=function(){return Object(l.jsxs)("div",{id:"navBar",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:"Home"})}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"containerItem",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{})}),Object(l.jsx)("h5",{className:"itemNavBar",children:"Inform"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{})}),Object(l.jsx)("h5",{className:"itemNavBar",children:"GIF Viewer"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{})}),Object(l.jsx)("h5",{className:"itemNavBar",children:"Others"})]}),Object(l.jsx)("div",{})]})]}),Object(l.jsx)("div",{})]})},j=c(7),d=c(23),u=function(e){var t=e.setCategories,c=e.limit,r=Object(n.useState)(""),a=Object(j.a)(r,2),s=a[0],i=a[1],o=Object(n.useState)(1),u=Object(j.a)(o,2),b=u[0],h=u[1],m=Object(n.useState)(4),O=Object(j.a)(m,2),x=O[0],f=O[1];return Object(l.jsx)("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),""===s.trim())return null;t((function(e){return[s].concat(Object(d.a)(e))})),c.current=x*b,i("")}(e)},children:Object(l.jsxs)("div",{className:"formRow",children:[Object(l.jsxs)("div",{className:"form-floating col-md-3",children:[Object(l.jsx)("input",{type:"text",className:"form-control",id:"inCategory",onChange:function(e){i(e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1))},value:s}),Object(l.jsx)("label",{for:"inCategory",children:"Category"})]}),Object(l.jsxs)("div",{className:"form-floating col-md-2",children:[Object(l.jsxs)("select",{className:"form-select",id:"selRows",value:b,onChange:function(e){h(e.target.value)},children:[Object(l.jsx)("option",{value:"1",children:"1"}),Object(l.jsx)("option",{value:"2",children:"2"})]}),Object(l.jsx)("label",{for:"selRows",children:"Number of rows"})]}),Object(l.jsxs)("div",{className:"form-floating col-md-2",children:[Object(l.jsxs)("select",{className:"form-select",id:"selNumberImgs",value:x,onChange:function(e){f(e.target.value)},children:[Object(l.jsx)("option",{value:"4",children:"2-4"}),Object(l.jsx)("option",{value:"6",children:"3-6"})]}),Object(l.jsx)("label",{for:"selNumberImgs",children:"Images per row"})]}),Object(l.jsx)("div",{className:"d-grid gap-2 col-md-3",children:Object(l.jsx)("button",{type:"submit",className:"btn btn-lg btn-outline-success",children:"Search"})})]})})},b=c(24),h=(c(18),function(e){var t=e.id,c=e.title,n=e.url,r="large"===e.size?"card-large":"card-medium";return console.log(r),Object(l.jsxs)("div",{className:r+" card animate__bounce",children:[Object(l.jsx)("img",{src:n,alt:c,className:"cardImg"},t),Object(l.jsx)("p",{className:"cardDescription",children:c})]})}),m=c(20),O=c(12),x=c.n(O),f=c(15),g=function(){var e=Object(f.a)(x.a.mark((function e(t,c,n,r,a){var s,i,l,o,j;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="https://api.giphy.com/v1/gifs/search?api_key=S6KJyAUUatdC1UyULrMkRDlmyUyrZ76K&q=".concat(encodeURI(t),"&limit=").concat(n,"&offset=").concat(c,"&rating=").concat(r,"&lang=").concat(a,"&random_id=e826c9fc5c929e0d6c6d423841a282aa"),e.next=3,fetch(s);case 3:return i=e.sent,e.next=6,i.json();case 6:return l=e.sent,o=l.data,j=o.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized.url,height:e.images.downsized.height,width:e.images.downsized.width,size:e.images.downsized.width/e.images.downsized.height>1.5?"large":"medium"}})),e.abrupt("return",j);case 10:case"end":return e.stop()}}),e)})));return function(t,c,n,r,a){return e.apply(this,arguments)}}(),v=function(){var e=Object(f.a)(x.a.mark((function e(t,c,n){var r,a,s,i,l,o,j,d=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=d.length>3&&void 0!==d[3]?d[3]:"g",a=d.length>4&&void 0!==d[4]?d[4]:"en",console.log("limite es: "+JSON.stringify(n)),e.next=5,g(t,c,n,r,a);case 5:s=e.sent,i=[],l=Object(m.a)(s),e.prev=8,l.s();case 10:if((o=l.n()).done){e.next=19;break}if(j=o.value,!(n<1)){e.next=16;break}return e.abrupt("break",19);case 16:1!==n&&5!==n||"large"!==j.size?("large"===j.size?n-=2:n-=1,i.push(j)):n--;case 17:e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(8),l.e(e.t0);case 24:return e.prev=24,l.f(),e.finish(24);case 27:return e.abrupt("return",i);case 28:case"end":return e.stop()}}),e,null,[[8,21,24,27]])})));return function(t,c,n){return e.apply(this,arguments)}}(),p=function(e){var t=e.category,c=function(e,t,c){var r=Object(n.useState)({data:[],loading:!0}),a=Object(j.a)(r,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){v(e,t,c).then((function(e){i({data:e,loading:!1})}))}),[]),s}(t,0,e.limit.current),r=c.data,a=c.loading;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{className:"category",children:t}),a&&Object(l.jsx)("h3",{className:"msgLoading",children:"Loading"}),Object(l.jsx)("div",{id:"gridContainer",children:r.map((function(e){return Object(l.jsx)(h,Object(b.a)({},e),e.id)}))})]})},N=function(){var e=Object(n.useState)(["Invincible"]),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useRef)(4);return Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("h2",{id:"heading",children:"GIFViewer"}),Object(l.jsx)(u,{setCategories:r,limit:a}),c.map((function(e){return console.log("en viewer"+a.current),Object(l.jsx)(p,{category:e,limit:a},e)}))]})},w=(c(33),Object(l.jsxs)(r.a,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{path:"/home",children:Object(l.jsx)(N,{})}),Object(l.jsx)(a.a,{path:"/",children:Object(l.jsx)(N,{})})]})]})),y=document.querySelector("#root");i.a.render(w,y)}},[[42,1,2]]]);
//# sourceMappingURL=main.e7e4a04c.chunk.js.map