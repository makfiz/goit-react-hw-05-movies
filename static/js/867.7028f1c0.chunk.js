"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[867],{4655:function(n,e,t){t.d(e,{AH:function(){return l},Ai:function(){return p},oJ:function(){return f},q0:function(){return d},wr:function(){return s}});var r=t(5861),a=t(7757),o=t.n(a),i=t(1044),c="e4c439da3c1d90110fb4595b6236c9fe",u="en";i.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r,a,s=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:1,t=s.length>1?s[1]:void 0,n.prev=2,n.next=5,(0,i.ZP)("trending/movie/day",{signal:t,params:{api_key:c,language:u,page:e}});case 5:return r=n.sent,a=r.data,n.abrupt("return",a);case 10:throw n.prev=10,n.t0=n.catch(2),new Error(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.ZP)("search/movie",{signal:t,params:{api_key:c,query:e,language:u,page:1}});case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.ZP)("movie/".concat(e),{params:{api_key:c,language:u}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.ZP)("movie/".concat(e,"/credits"),{params:{api_key:c,language:u}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.ZP)("movie/".concat(e,"/reviews"),{params:{api_key:c,language:u}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},1074:function(n,e,t){t.d(e,{Z:function(){return g}});var r,a,o,i,c=t(168),u=t(6444),s=t(6731),p=u.ZP.ul(r||(r=(0,c.Z)(["\n display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 16px 0 0 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),l=u.ZP.img(a||(a=(0,c.Z)(["\n    width: 150px;\n    margin-bottom:10px;\n"]))),d=(0,u.ZP)(s.rU)(o||(o=(0,c.Z)(["\n    display: flex;\n    flex-direction:column;\n    align-items:center;\n    text-decoration:none;\n    text-align: center;\n    color:black;\n    max-width:200px;\n    \n"]))),f=u.ZP.li(i||(i=(0,c.Z)(["\n    margin: 0 auto;\n"]))),h=t(184),g=function(n){var e=n.Movies,t=n.location;return(0,h.jsx)(p,{children:e.length>0&&e.map((function(n){return(0,h.jsx)(f,{children:(0,h.jsxs)(d,{to:"/movies/".concat(n.id),state:{from:t},children:[(0,h.jsx)(l,{src:null===n.poster_path?"https://dummyimage.com/400x600/7d7d7d/fff.jpg&text=image+not+found":"https://image.tmdb.org/t/p/w400/".concat(n.poster_path),alt:n.title}),n.title]})},n.id)}))})}},5867:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,o,i,c=t(5861),u=t(885),s=t(7757),p=t.n(s),l=t(2791),d=t(6731),f=t(7689),h=t(4655),g=t(5705),m=t(168),v=t(6444),x=v.ZP.div(r||(r=(0,m.Z)(["\n  display:flex;\n  justify-content:center;\n"]))),w=(0,v.ZP)(g.l0)(a||(a=(0,m.Z)(["\n  margin: 20px 0;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border:",";\n  border-radius: 3px;\n  overflow: hidden;\n  "])),(function(n){return n.theme.borders.profile})),b=(0,v.ZP)(g.gN)(o||(o=(0,m.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n}\n  "]))),Z=v.ZP.button(i||(i=(0,m.Z)(["\n display: inline-block;\n  width: 35px;\n  height: 35px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  outline: none;\n"]))),y=t(8494),k=t(184),j=function(n){var e=n.onChange,t=n.searchedMovie,r=function(n){e(n)};return(0,k.jsx)(g.J9,{initialValues:{search:""},children:(0,k.jsx)(x,{children:(0,k.jsxs)(w,{autoComplete:"off",onChange:function(n){return r(n.target.value)},children:[(0,k.jsx)(b,{name:"search",type:"text",autoFocus:!0,placeholder:"Search movies",value:t}),(0,k.jsx)(Z,{disabled:!0,children:(0,k.jsx)(y.Yfv,{})})]})})})},P=t(1074),_=function(){var n,e=(0,l.useState)([]),t=(0,u.Z)(e,2),r=t[0],a=t[1],o=(0,l.useState)(!1),i=(0,u.Z)(o,2),s=i[0],g=i[1],m=(0,d.lr)(),v=(0,u.Z)(m,2),x=v[0],w=v[1],b=null!==(n=x.get("query"))&&void 0!==n?n:"",Z=(0,f.TH)();(0,l.useEffect)((function(){if(b){var n=new AbortController;return function(){e.apply(this,arguments)}(),function(){return n.abort()}}function e(){return(e=(0,c.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.Ai)(b,n.signal);case 3:t=e.sent,console.log(t),a(t),0===t.length&&g(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}}),[b]);return(0,k.jsxs)(k.Fragment,{children:["   ",(0,k.jsxs)(l.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading subpage..."}),children:[(0,k.jsx)(j,{onChange:function(n){console.log(n),w(""!==n?{query:n.trim()}:{})},searchedMovie:b,responseEmpty:s}),(0,k.jsx)(P.Z,{Movies:r,location:Z}),s&&(0,k.jsxs)("h1",{style:{textAlign:"center"},children:["No results were found for ",b]})]})]})}}}]);
//# sourceMappingURL=867.7028f1c0.chunk.js.map