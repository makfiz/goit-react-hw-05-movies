"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[378],{4655:function(n,e,r){r.d(e,{AH:function(){return l},Ai:function(){return p},oJ:function(){return f},q0:function(){return d},wr:function(){return u}});var t=r(5861),a=r(7757),o=r.n(a),i=r(1044),s="e4c439da3c1d90110fb4595b6236c9fe",c="en";i.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,t.Z)(o().mark((function n(){var e,r,t,a,u=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u.length>0&&void 0!==u[0]?u[0]:1,r=u.length>1?u[1]:void 0,n.prev=2,n.next=5,(0,i.ZP)("trending/movie/day",{signal:r,params:{api_key:s,language:c,page:e}});case 5:return t=n.sent,a=t.data,n.abrupt("return",a);case 10:throw n.prev=10,n.t0=n.catch(2),new Error(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(e,r){var t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.ZP)("search/movie",{signal:r,params:{api_key:s,query:e,language:c,page:1}});case 3:return t=n.sent,a=t.data,n.abrupt("return",a.results);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.ZP)("movie/".concat(e),{params:{api_key:s,language:c}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.ZP)("movie/".concat(e,"/credits"),{params:{api_key:s,language:c}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.ZP)("movie/".concat(e,"/reviews"),{params:{api_key:s,language:c}});case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},9378:function(n,e,r){r.r(e),r.d(e,{default:function(){return C}});var t,a,o,i,s,c,u,p,l=r(5861),d=r(885),f=r(7757),v=r.n(f),m=r(2791),h=r(7689),x=r(168),g=r(6444),b=r(6731),w=(0,g.ZP)(b.rU)(t||(t=(0,x.Z)(["\n    margin: 10px 0;\n    text-decoration: none;\n  display: inline-block;\n  padding: 5px 10px;\n  position: relative;\n  overflow: hidden;\n  border: 2px solid red;\n  border-radius: 8px;\n  font-family: 'Montserrat', sans-serif;\n  color: red;\n  transition: .2s ease-in-out;\n\n    &:before {\n    content: \"\";\n    background: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5));\n    height: 50px;\n    width: 50px;\n    position: absolute;\n    top: -8px;\n    left: -75px;\n    transform: skewX(-45deg);\n    }\n\n    &:hover {\n    background: red;\n    color: #fff;\n    }\n\n    &:hover:before {\n    left: 150px;\n    transition: .5s ease-in-out;\n    }\n"]))),Z=g.ZP.div(a||(a=(0,x.Z)(["\n    display:flex;\n"]))),j=g.ZP.img(o||(o=(0,x.Z)(["\n    width: 250px;\n"]))),k=g.ZP.div(i||(i=(0,x.Z)(["\n    margin-left:30px;\n"]))),y=(g.ZP.div(s||(s=(0,x.Z)(["\n    margin-top:30px;\n    margin-bottom:10px;\n    border-bottom:",";\n    border-top:",";\n    display:flex;\n    flex-direction:column;\n    padding-bottom:20px;\n"])),(function(n){return n.theme.borders.profile}),(function(n){return n.theme.borders.profile})),(0,g.ZP)(b.rU)(c||(c=(0,x.Z)(["\n    margin-left:30px;\n    margin-top:10px;\n"]))),g.ZP.div(u||(u=(0,x.Z)(["\n    margin-top:30px;\n    margin-bottom:10px;\n    border-bottom:",";\n    border-top:",";\n    display:flex;\n    flex-direction:column;\n    padding-bottom:20px;\n"])),(function(n){return n.theme.borders.profile}),(function(n){return n.theme.borders.profile}))),P=(0,g.ZP)(b.rU)(p||(p=(0,x.Z)(["\n    margin-left:30px;\n    margin-top:10px;\n"]))),_=r(184),E=function(n){var e=n.location;return(0,_.jsxs)(y,{children:[(0,_.jsx)("span",{children:"Additional information"}),(0,_.jsx)(P,{to:"cast",state:{from:e},children:"Cast"}),(0,_.jsx)(P,{to:"reviews",state:{from:e},children:"Reviews"})]})},U=function(n){var e,r,t,a,o=n.movie,i=n.location;if(console.log("ya zarenderilsya"),o){var s=o.title,c=o.release_date,u=o.vote_average,p=o.overview,l=o.genres,d=o.poster_path,f=null===d?"https://dummyimage.com/400x600/7d7d7d/fff.jpg&text=image+not+found":"https://image.tmdb.org/t/p/w400/".concat(d);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(w,{to:null!==(e=null===i||void 0===i||null===(r=i.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies",children:"\u25c4 Go back"}),(0,_.jsxs)(Z,{children:[(0,_.jsx)(j,{src:f,alt:s}),(0,_.jsxs)(k,{children:[(0,_.jsxs)("h1",{children:[s," (",c.split("-")[0],")"]}),(0,_.jsxs)("span",{children:["User Score: ",Math.round(10*u),"%"]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h2",{children:"Overview"}),(0,_.jsx)("span",{children:p})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h3",{children:"Genres"}),(0,_.jsx)("span",{children:l.map((function(n){return"".concat(n.name," ")}))})]})]})]}),(0,_.jsx)(E,{location:null!==(t=null===i||void 0===i||null===(a=i.state)||void 0===a?void 0:a.from)&&void 0!==t?t:"/movies"})]})}},A=r(4655),C=function(){var n=(0,m.useState)(null),e=(0,d.Z)(n,2),r=e[0],t=e[1],a=(0,h.UO)().movieId,o=(0,h.TH)();return(0,m.useEffect)((function(){function n(){return(n=(0,l.Z)(v().mark((function n(){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,A.AH)(a);case 3:e=n.sent,t(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[a]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(U,{movie:r,location:o}),(0,_.jsx)("div",{children:(0,_.jsx)(h.j3,{})})]})}}}]);
//# sourceMappingURL=378.6d44d508.chunk.js.map