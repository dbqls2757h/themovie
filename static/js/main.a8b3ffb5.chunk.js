(this.webpackJsonpthemovie=this.webpackJsonpthemovie||[]).push([[0],{50:function(n,e,t){},88:function(n,e,t){"use strict";t.r(e);var i,c,a,r,o,s,d,x,b,j,p,h,l,O,g,u,m,f,v,w,y,k,z,S,_,C,R,D=t(0),I=t.n(D),B=t(51),E=t.n(B),F=t(33),P=t(18),q=t(11),U=t(4),K=t(3),N=t(53),T="#1d1d1d",V="#fff",X="600",J="0 30px",L="16px",M="14px",Q=Object(K.a)(i||(i=Object(U.a)(["\n    ","\n\n    *{\n        box-sizing: border-box;\n    }\n\n    a\n    {\n        color: #fff;\n        text-decoration: none;\n    }\n\n    body{\n        font-family:  'Noto Sans KR', sans-serif;\n        background-color: ",";\n        color: ",";\n        word-break: break-all;\n        letter-spacing: -1px;\n    }\n"])),N.a,T,V),W=t(10),Y="/",A="/detail/:id",G="/search",H=t(1),Z=K.c.div(c||(c=Object(U.a)(["\n  width: 100%;\n  height: 60px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n  padding: 0 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n  transition-duration: 0.5s;\n  @media screen and (max-width: 500px) {\n    padding: ",";\n  }\n"])),(function(n){return n.bgColor}),J),$=K.c.ul(a||(a=Object(U.a)(["\n  font-size: 25px;\n  font-weight: 600;\n  a {\n    color: crimson;\n  }\n"]))),nn=K.c.li(r||(r=Object(U.a)(["\n  display: flex;\n"]))),en=K.c.div(o||(o=Object(U.a)(["\n  &:nth-child(1) {\n    margin-right: 50px;\n    @media screen and (max-width: 500px) {\n      margin-right: 20px;\n    }\n  }\n  font-weight: ",";\n"])),X),tn=function(){var n=Object(D.useState)(),e=Object(W.a)(n,2),t=e[0],i=e[1];return window.addEventListener("scroll",(function(){var n=window.pageYOffset;i(n>=200?"rgba(0,0,0,0.7)":"")})),Object(H.jsx)("div",{children:Object(H.jsxs)(Z,{bgColor:t,children:[Object(H.jsx)($,{children:Object(H.jsx)(P.b,{to:Y,children:"the Movie"})}),Object(H.jsxs)(nn,{children:[Object(H.jsx)(en,{children:Object(H.jsx)(P.b,{to:Y,children:"\ud648"})}),Object(H.jsx)(en,{children:Object(H.jsx)(P.b,{to:G,children:"\uc601\ud654\uac80\uc0c9"})})]})]})})},cn=t(8),an=t.n(cn),rn=t(13),on=t(57),sn=t.n(on).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"aefbb555316db9bc7c281aac3b51a2bc",language:"ko-KR"}}),dn=function(){return sn.get("movie/now_playing")},xn=function(){return sn.get("movie/upcoming")},bn=function(){return sn.get("movie/popular")},jn=function(){return sn.get("movie/top_rated")},pn=function(n){return sn.get("movie/".concat(n))},hn=function(n){return sn.get("movie/".concat(n,"/videos"))},ln=function(n){return sn.get("search/movie",{params:{query:encodeURIComponent(n)}})},On=K.c.div(s||(s=Object(U.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),gn=Object(K.d)(d||(d=Object(U.a)(["\n100%{\n    transform: rotate(360deg)\n}\n"]))),un=K.c.div(x||(x=Object(U.a)(["\n  width: 100px;\n  height: 100px;\n  border: 10px solid crimson;\n  border-radius: 50%;\n  border-color: crimson transparent transparent transparent;\n  animation: "," 1.5s infinite;\n"])),gn),mn=function(){return Object(H.jsx)(On,{children:Object(H.jsx)(un,{})})},fn=t(20),vn=t(19),wn=K.c.div(b||(b=Object(U.a)(["\n  height: 80vh;\n  background-size: cover;\n  background-position: center;\n  padding: 240px 80px;\n  position: relative;\n  @media screen and (max-width: 500px) {\n    padding: 200px 30px;\n  }\n"]))),yn=K.c.div(j||(j=Object(U.a)(["\n  width: 100%;\n  height: 80vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background: linear-gradient(rgba(29, 29, 29, 0), rgba(29, 29, 29, 1));\n  @media screen and (max-width: 500px) {\n    font-size: 45px;\n    margin-bottom: 15px;\n  }\n"]))),kn=K.c.div(p||(p=Object(U.a)(["\n  width: 100%;\n  position: relative;\n  z-index: 2;\n"]))),zn=K.c.div(h||(h=Object(U.a)(["\n  max-width: 600px;\n  width: 100%;\n  font-size: 70px;\n  font-weight: ",";\n  line-height: 1.2em;\n  margin-bottom: 25px;\n  text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);\n  @media screen and (max-width: 500px) {\n    font-size: 45px;\n    margin-bottom: 15px;\n  }\n"])),X),Sn=K.c.div(l||(l=Object(U.a)(["\n  max-width: 600px;\n  width: 100%;\n  font-size: 18px;\n  opacity: 0.9;\n  line-height: 1.4em;\n  text-shadow: 0 0 15px rgba(0, 0, 0, 1);\n  @media screen and (max-width: 500px) {\n    font-size: ",";\n  }\n"])),L),_n=K.c.button(O||(O=Object(U.a)(["\n  all: unset;\n  width: 160px;\n  height: 40px;\n  border: 1px solid #fff;\n  margin-top: 30px;\n  font-weight: ",";\n  cursor: pointer;\n  text-align: center;\n  transition-duration: 0.3s;\n  position: relative;\n  &:hover {\n    background-color: ",";\n    color: ",";\n    span {\n      margin-left: 20px;\n    }\n  }\n  span {\n    transition-duration: 0.2s;\n  }\n  @media screen and (max-width: 500px) {\n    display: none;\n  }\n"])),X,V,T),Cn=K.c.div(g||(g=Object(U.a)(["\n  width: 0;\n  height: 40px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  @media screen and (max-width: 500px) {\n    animation: none;\n  }\n"]))),Rn=K.c.section(u||(u=Object(U.a)(["\n  width: 100%;\n  /* height: 80vh; */\n  height: ",";\n  background-color: #111;\n  margin-top: 100px;\n  padding-left: 80px;\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  transition: 0.3s;\n  @media screen and (max-width: 500px) {\n    margin-top: 20px;\n  }\n"])),(function(n){return n.height})),Dn=K.c.div(m||(m=Object(U.a)(["\n  width: 30%;\n"]))),In=K.c.div(f||(f=Object(U.a)(["\n  font-size: 70px;\n  font-weight: ",";\n  line-height: 1.2em;\n  margin: 50px 0 30px 0;\n"])),X),Bn=K.c.div(v||(v=Object(U.a)(["\n  max-width: 600px;\n  width: 100%;\n  font-size: 18px;\n  opacity: 0.9;\n  line-height: 1.8em;\n  text-shadow: 0 0 15px rgba(0, 0, 0, 0.9);\n"]))),En=K.c.div(w||(w=Object(U.a)(["\n  width: 65%;\n  background-size: cover;\n  background-position: top;\n"]))),Fn=K.c.div(y||(y=Object(U.a)(["\n  font-size: 30px;\n  float: right;\n  margin: 30px;\n"]))),Pn=function(n){var e=n.now,t=n.num,i=Object(D.useState)(0),c=Object(W.a)(i,2),a=c[0],r=c[1],o=Object(D.useState)(0),s=Object(W.a)(o,2),d=s[0],x=s[1];return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(wn,{style:{backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(e["".concat(t)].backdrop_path,")")},children:[Object(H.jsx)(yn,{}),Object(H.jsxs)(kn,{children:[Object(H.jsx)(zn,{children:e["".concat(t)].title}),Object(H.jsx)(Sn,{children:e["".concat(t)].overview.slice(0,100)+"..."}),Object(H.jsxs)(_n,{onClick:function(){0===d?(r("80vh"),window.scrollTo({top:700,left:0,behavior:"smooth"}),x(d+1)):1===d&&(r("0"),x(d-1))},children:["\ub354\ubcf4\uae30 ",Object(H.jsx)("span",{children:"+"}),Object(H.jsx)(Cn,{})]})]})]}),Object(H.jsxs)(Rn,{height:a,children:[Object(H.jsxs)(Dn,{children:[Object(H.jsx)(In,{children:e["".concat(t)].title}),Object(H.jsx)(Bn,{children:e["".concat(t)].overview.slice(0,250)+"..."})]}),Object(H.jsx)(En,{style:{backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(e["".concat(t)].backdrop_path,")")},children:Object(H.jsx)(Fn,{onClick:function(){r("0"),x(d-1)},children:Object(H.jsx)(vn.a,{icon:fn.f})})})]})]})},qn=t(25),Un=t(93),Kn=t(91),Nn=t(92),Tn=t(90),Vn=(t(50),K.c.h3(k||(k=Object(U.a)(["\n  font-weight: ",";\n  font-size: 35px;\n  margin: 80px 0 30px 0;\n  @media screen and (max-width: 500px) {\n    font-size: 25px;\n    margin: 50px 0 20px 0;\n  }\n"])),X)),Xn=K.c.div(z||(z=Object(U.a)(["\n  height: 300px;\n  background-position: center;\n  background-size: cover;\n  border-radius: 10px;\n  @media screen and (max-width: 500px) {\n    height: 220px;\n  }\n"]))),Jn=K.c.div(S||(S=Object(U.a)(["\n  position: absolute;\n  bottom: 15px;\n  left: 10px;\n"]))),Ln=K.c.h4(_||(_=Object(U.a)(["\n  padding: 20px 0 0 10px;\n  font-size: 14px;\n  text-shadow: 0 0 15px rgba(0, 0, 0, 1);\n  @media screen and (max-width: 500px) {\n    font-size: ",";\n    padding-top: 10px;\n  }\n"])),M),Mn=K.c.h4(C||(C=Object(U.a)(["\n  font-size: 18px;\n  margin-bottom: 5px;\n  text-shadow: 0 0 15px rgba(0, 0, 0, 1);\n  @media screen and (max-width: 500px) {\n    font-size: ",";\n  }\n"])),M),Qn=K.c.h4(R||(R=Object(U.a)(["\n  font-size: 14px;\n  font-weight: 200;\n  text-shadow: 0 0 15px rgba(0, 0, 0, 1);\n"])));Nn.a.use([Tn.a]);var Wn,Yn,An,Gn,Hn,Zn,$n,ne,ee,te,ie,ce,ae,re,oe,se,de,xe,be,je,pe,he,le,Oe,ge=function(n){var e=n.movieData,t=n.title;return Object(H.jsxs)("div",{children:[Object(H.jsx)(Vn,{children:t}),Object(H.jsx)(Un.a,Object(qn.a)(Object(qn.a)({modules:[Tn.a],navigation:!0},{breakpoints:{1024:{slidesPerView:4.1,spaceBetween:20},320:{slidesPerView:2,spaceBetween:10}}}),{},{children:e.map((function(n){return Object(H.jsx)(Kn.a,{children:Object(H.jsx)(P.b,{to:"detail/".concat(n.id),children:Object(H.jsxs)(Xn,{style:{backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(n.backdrop_path,")")},children:[Object(H.jsxs)(Ln,{children:[Object(H.jsx)(vn.a,{icon:fn.d,style:{marginRight:"5px"}}),n.vote_average," /10"]}),Object(H.jsxs)(Jn,{children:[Object(H.jsx)(Mn,{children:n.title}),Object(H.jsx)(Qn,{children:n.release_date.slice(0,4)})]})]})})},n.id)}))}))]})},ue=K.c.section(Wn||(Wn=Object(U.a)(["\n  padding: 0 80px;\n  height: 100%;\n  @media screen and (max-width: 500px) {\n    padding: ",";\n  }\n"])),J),me=function(n){var e=n.children;return Object(H.jsx)(ue,{children:e})},fe=function(n){var e=n.title;return Object(H.jsx)(F.a,{children:Object(H.jsxs)("title",{children:[e," | the movie"]})})},ve=K.c.div(Yn||(Yn=Object(U.a)([""]))),we=K.c.section(An||(An=Object(U.a)(["\n  margin-bottom: 80px;\n"]))),ye=function(){var n=Object(D.useState)(),e=Object(W.a)(n,2),t=e[0],i=e[1],c=Object(D.useState)(),a=Object(W.a)(c,2),r=a[0],o=a[1],s=Object(D.useState)(),d=Object(W.a)(s,2),x=d[0],b=d[1],j=Object(D.useState)(),p=Object(W.a)(j,2),h=p[0],l=p[1],O=Object(D.useState)(!0),g=Object(W.a)(O,2),u=g[0],m=g[1];return Object(D.useEffect)((function(){var n=function(){var n=Object(rn.a)(an.a.mark((function n(){var e,t,c,a,r,s,d,x;return an.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,dn();case 3:return e=n.sent,t=e.data.results,i(t),n.next=8,xn();case 8:return c=n.sent,a=c.data.results,o(a),n.next=13,bn();case 13:return r=n.sent,s=r.data.results,b(s),n.next=18,jn();case 18:d=n.sent,x=d.data.results,l(x),m(!1),n.next=27;break;case 24:n.prev=24,n.t0=n.catch(0),console.log(n.t0);case 27:case"end":return n.stop()}}),n,null,[[0,24]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),console.log("\ud604\uc7ac\uc0c1\uc601\uc601\ud654",t),console.log("\uac1c\ubd09\uc608\uc815\uc601\ud654",r),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(fe,{title:"\ud648"}),u?Object(H.jsx)(mn,{}):Object(H.jsxs)(ve,{children:[t&&Object(H.jsx)(Pn,{now:t,num:1}),Object(H.jsx)(we,{children:Object(H.jsxs)(me,{children:[Object(H.jsx)(ge,{movieData:t,title:"\ud604\uc7ac \uc0c1\uc601 \uc601\ud654"}),Object(H.jsx)(ge,{movieData:r,title:"\uac1c\ubd09 \uc608\uc815 \uc601\ud654"}),Object(H.jsx)(ge,{movieData:x,title:"\uc778\uae30 \uc601\ud654"}),Object(H.jsx)(ge,{movieData:h,title:"\uc0c1\uc601 \uc21c\uc704"})]})})]})]})},ke=function(){return Object(H.jsx)("div",{children:"PageNotFound"})},ze=K.c.div(Gn||(Gn=Object(U.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin: 80px 0;\n"]))),Se=K.c.div(Hn||(Hn=Object(U.a)(["\n  width: 100%;\n  height: 80vh;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n"]))),_e=K.c.div(Zn||(Zn=Object(U.a)(["\n  width: 100%;\n  height: 80vh;\n  background: radial-gradient(\n    rgba(0, 0, 0, 0.2),\n    rgba(0, 0, 0, 0.4),\n    rgba(0, 0, 0, 1)\n  );\n  position: absolute;\n"]))),Ce=K.c.div($n||($n=Object(U.a)(["\n  max-width: 900px;\n  width: 100%;\n  position: relative;\n  z-index: 9;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 200px 80px;\n  @media screen and (max-width: 500px) {\n    padding: 30px;\n  }\n"]))),Re=K.c.div(ne||(ne=Object(U.a)(["\n  width: 100%;\n  font-size: 50px;\n  margin-bottom: 10px;\n  font-weight: ",";\n  text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);\n  @media screen and (max-width: 500px) {\n    font-size: 30px;\n  }\n"])),X),De=K.c.div(ee||(ee=Object(U.a)(["\n  width: 100%;\n  margin-bottom: 40px;\n  font-size: 28px;\n  font-weight: 300;\n  opacity: 0.7;\n  text-shadow: 0 0 15px rgba(0, 0, 0, 0.8);\n  @media screen and (max-width: 500px) {\n    font-size: ",";\n    margin-bottom: 20px;\n  }\n"])),L),Ie=K.c.div(te||(te=Object(U.a)(["\n  width: 100%;\n  margin-top: 10px;\n  opacity: 0.9;\n  text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);\n  @media screen and (max-width: 500px) {\n    font-size: 14px;\n  }\n"]))),Be=K.c.div(ie||(ie=Object(U.a)(["\n  margin-top: 20px;\n  font-weight: 300;\n  line-height: 1.6em;\n  opacity: 0.9;\n  text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);\n  @media screen and (max-width: 500px) {\n    font-size: 14px;\n  }\n"]))),Ee=K.c.button(ce||(ce=Object(U.a)(["\n  all: unset;\n  margin-top: 30px;\n  width: 160px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  cursor: pointer;\n  margin-right: 20px;\n  @media screen and (max-width: 500px) {\n    width: 140px;\n    height: 35px;\n    border: 0.5px solid #fff;\n    border-radius: 5px;\n    margin-top: 10px;\n    font-size: 14px;\n  }\n"]))),Fe=Object(K.d)(ae||(ae=Object(U.a)(["\n  100%{\n    width: 160px;\n    background-color: rgba(255,255,255,0.5)\n    }\n"]))),Pe=K.c.div(re||(re=Object(U.a)(["\n  position: absolute;\n  left: 0;\n  width: 0;\n  height: 40px;\n  border-radius: 5px;\n  animation: "," 5s 0.5s forwards;\n  @media screen and (max-width: 500px) {\n    animation: none;\n  }\n"])),Fe),qe=K.c.div(oe||(oe=Object(U.a)(["\n  width: 100%;\n  padding: 100px 0;\n"]))),Ue=K.c.iframe(se||(se=Object(U.a)(["\n  width: 100%;\n  height: 80vh;\n"]))),Ke=function(){var n=Object(q.g)().id,e=Object(D.useState)(),t=Object(W.a)(e,2),i=t[0],c=t[1],a=Object(D.useState)(!0),r=Object(W.a)(a,2),o=r[0],s=r[1],d=Object(D.useState)(),x=Object(W.a)(d,2),b=x[0],j=x[1];Object(D.useEffect)((function(){var e=function(){var e=Object(rn.a)(an.a.mark((function e(){var t,i,a,r;return an.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pn(n);case 3:return t=e.sent,i=t.data,c(i),e.next=8,hn(n);case 8:a=e.sent,r=a.data.results,j(r[0]),s(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);return Object(H.jsx)("div",{children:o?Object(H.jsx)(mn,{}):Object(H.jsxs)("div",{children:[i&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(fe,{title:"\uc601\ud654 \ub9ac\ubdf0"}),Object(H.jsx)(ze,{children:Object(H.jsxs)(Se,{style:{backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(i.backdrop_path,")")},children:[Object(H.jsx)(_e,{}),Object(H.jsxs)(Ce,{children:[Object(H.jsx)(Re,{children:i.title}),Object(H.jsx)(De,{children:i.original_title}),Object(H.jsxs)(Ie,{children:[Object(H.jsx)(vn.a,{icon:fn.a,style:{marginRight:"8px"}}),i.release_date]}),Object(H.jsxs)(Ie,{children:[Object(H.jsx)(vn.a,{icon:fn.e,style:{marginRight:"8px"}}),i.genres.map((function(n){return n.name+","}))]}),Object(H.jsxs)(Ie,{children:[Object(H.jsx)(vn.a,{icon:fn.b,style:{marginRight:"8px"}}),i.runtime+"\ubd84"]}),Object(H.jsx)(Be,{children:i.overview}),Object(H.jsxs)(Ee,{onClick:function(){var n=document.querySelector(".video_wrap").offsetTop;window.scroll({top:n,left:0,behavior:"smooth"})},children:[Object(H.jsx)(vn.a,{icon:fn.c,style:{marginRight:"8px"}}),"\uc608\uace0\uc601\uc0c1",Object(H.jsx)(Pe,{})]})]})]})})]}),Object(H.jsx)(me,{children:Object(H.jsx)(qe,{className:"video_wrap",children:Object(H.jsx)(Ue,{src:"https://www.youtube.com/embed/".concat(b.key)})})})]})})},Ne=t(58),Te=K.c.form(de||(de=Object(U.a)(["\n  margin-top: 120px;\n"]))),Ve=K.c.input(xe||(xe=Object(U.a)(["\n  all: unset;\n  width: 100%;\n  height: 60px;\n  border: 1px solid #555;\n  box-sizing: border-box;\n  padding: 10px 20px;\n  font-size: 18px;\n  &::placeholder {\n    font-size: 18px;\n  }\n"]))),Xe=K.c.div(be||(be=Object(U.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  row-gap: 30px;\n  column-gap: 30px;\n  margin-top: 50px;\n  @media screen and (max-width: 500px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"]))),Je=K.c.div(je||(je=Object(U.a)([""]))),Le=K.c.div(pe||(pe=Object(U.a)(["\n  height: 180px;\n"]))),Me=K.c.div(he||(he=Object(U.a)(["\n  margin-top: 10px;\n"]))),Qe=K.c.div(le||(le=Object(U.a)(["\n  padding: 50px 0;\n"]))),We=function(){var n=Object(D.useState)(),e=Object(W.a)(n,2),t=e[0],i=e[1],c=Object(D.useState)(),a=Object(W.a)(c,2),r=a[0],o=a[1],s=Object(D.useState)(!1),d=Object(W.a)(s,2),x=d[0],b=d[1],j=Object(D.useState)(""),p=Object(W.a)(j,2),h=p[0],l=p[1],O=Object(Ne.a)({mode:"onChange"}),g=O.register,u=O.getValues,m=O.handleSubmit,f=function(){var n=Object(rn.a)(an.a.mark((function n(){var e,t,c,a;return an.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u(),t=e.term,o(!0),n.prev=2,n.next=5,ln(t);case 5:c=n.sent,(a=c.data.results).length<=0?l("\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4\ud83d\ude25"):(l(""),i(a)),i(a),o(!1),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),b(!0);case 15:case"end":return n.stop()}}),n,null,[[2,12]])})));return function(){return n.apply(this,arguments)}}();return console.log(t),Object(H.jsxs)("div",{children:[Object(H.jsx)(fe,{title:"\uc601\ud654\uac80\uc0c9"}),Object(H.jsxs)(me,{children:[Object(H.jsx)(Te,{onSubmit:m(f),children:Object(H.jsx)(Ve,Object(qn.a)(Object(qn.a)({},g("term",{required:"true"})),{},{type:"text",placeholder:"\uac80\uc0c9..."}))}),x?Object(H.jsx)(ke,{}):Object(H.jsx)("div",{children:r?Object(H.jsx)(mn,{}):Object(H.jsx)(Xe,{children:""===h&&t?t.map((function(n){return Object(H.jsx)(P.b,{to:"/detail/".concat(n.id),children:Object(H.jsxs)(Je,{children:[Object(H.jsx)(Le,{style:{background:"url(".concat(n.backdrop_path?"https://image.tmdb.org/t/p/original".concat(n.backdrop_path):"https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo=",") center/cover")}}),Object(H.jsx)(Me,{children:n.title})]})},n.id)})):Object(H.jsx)(Qe,{children:h})})})]})]})},Ye=K.c.footer(Oe||(Oe=Object(U.a)(["\n  width: 100%;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px solid #555;\n  font-size: 14px;\n  color: gray;\n"]))),Ae=function(){return Object(H.jsx)(Ye,{children:"\xa9 copyright UbCoding"})},Ge=function(){var n=Object(q.f)();return Object(D.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[n]),null};var He=function(){return Object(H.jsx)(F.b,{children:Object(H.jsxs)(P.a,{children:[Object(H.jsx)(Q,{}),Object(H.jsx)(Ge,{}),Object(H.jsx)(tn,{}),Object(H.jsxs)(q.c,{children:[Object(H.jsx)(q.a,{path:Y,exact:!0,children:Object(H.jsx)(ye,{})}),Object(H.jsx)(q.a,{path:A,children:Object(H.jsx)(Ke,{})}),Object(H.jsx)(q.a,{path:G,children:Object(H.jsx)(We,{})}),Object(H.jsx)(q.a,{children:Object(H.jsx)(ke,{})})]}),Object(H.jsx)(Ae,{})]})})};E.a.render(Object(H.jsx)(I.a.StrictMode,{children:Object(H.jsx)(He,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.a8b3ffb5.chunk.js.map