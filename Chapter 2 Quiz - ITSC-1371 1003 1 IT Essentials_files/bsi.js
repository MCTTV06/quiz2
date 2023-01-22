!function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=function(t){return t&&t.Math==Math&&t},n=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||function(){return this}()||Function("return this")(),r={},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),u=a,c=Function.prototype.call,f=u?c.bind(c):function(){return c.apply(c,arguments)},l={},s={}.propertyIsEnumerable,d=Object.getOwnPropertyDescriptor,p=d&&!s.call({1:2},1);l.f=p?function(t){var e=d(this,t);return!!e&&e.enumerable}:s;var v,m,y=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},b=a,g=Function.prototype,h=g.call,w=b&&g.bind.bind(h,h),S=b?w:function(t){return function(){return h.apply(t,arguments)}},O=S,j=O({}.toString),E=O("".slice),C=function(t){return E(j(t),8,-1)},L=C,T=S,P=function(t){if("Function"===L(t))return T(t)},D=o,A=C,F=Object,R=P("".split),W=D((function(){return!F("z").propertyIsEnumerable(0)}))?function(t){return"String"==A(t)?R(t,""):F(t)}:F,x=function(t){return null==t},I=x,M=TypeError,N=function(t){if(I(t))throw M("Can't call method on "+t);return t},k=W,_=N,z=function(t){return k(_(t))},G="object"==typeof document&&document.all,q={all:G,IS_HTMLDDA:void 0===G&&void 0!==G},B=q.all,H=q.IS_HTMLDDA?function(t){return"function"==typeof t||t===B}:function(t){return"function"==typeof t},U=H,X=q.all,K=q.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:U(t)||t===X}:function(t){return"object"==typeof t?null!==t:U(t)},V=n,Y=H,$=function(t){return Y(t)?t:void 0},J=function(t,e){return arguments.length<2?$(V[t]):V[t]&&V[t][e]},Q=P({}.isPrototypeOf),Z=n,tt=J("navigator","userAgent")||"",et=Z.process,nt=Z.Deno,rt=et&&et.versions||nt&&nt.version,ot=rt&&rt.v8;ot&&(m=(v=ot.split("."))[0]>0&&v[0]<4?1:+(v[0]+v[1])),!m&&tt&&(!(v=tt.match(/Edge\/(\d+)/))||v[1]>=74)&&(v=tt.match(/Chrome\/(\d+)/))&&(m=+v[1]);var it=m,at=o,ut=!!Object.getOwnPropertySymbols&&!at((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&it&&it<41})),ct=ut&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ft=J,lt=H,st=Q,dt=Object,pt=ct?function(t){return"symbol"==typeof t}:function(t){var e=ft("Symbol");return lt(e)&&st(e.prototype,dt(t))},vt=String,mt=H,yt=function(t){try{return vt(t)}catch(t){return"Object"}},bt=TypeError,gt=function(t){if(mt(t))return t;throw bt(yt(t)+" is not a function")},ht=gt,wt=x,St=f,Ot=H,jt=K,Et=TypeError,Ct={exports:{}},Lt=n,Tt=Object.defineProperty,Pt=function(t,e){try{Tt(Lt,t,{value:e,configurable:!0,writable:!0})}catch(n){Lt[t]=e}return e},Dt=Pt,At="__core-js_shared__",Ft=n[At]||Dt(At,{}),Rt=Ft;(Ct.exports=function(t,e){return Rt[t]||(Rt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.26.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Wt=N,xt=Object,It=function(t){return xt(Wt(t))},Mt=It,Nt=P({}.hasOwnProperty),kt=Object.hasOwn||function(t,e){return Nt(Mt(t),e)},_t=P,zt=0,Gt=Math.random(),qt=_t(1..toString),Bt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+qt(++zt+Gt,36)},Ht=n,Ut=Ct.exports,Xt=kt,Kt=Bt,Vt=ut,Yt=ct,$t=Ut("wks"),Jt=Ht.Symbol,Qt=Jt&&Jt.for,Zt=Yt?Jt:Jt&&Jt.withoutSetter||Kt,te=function(t){if(!Xt($t,t)||!Vt&&"string"!=typeof $t[t]){var e="Symbol."+t;Vt&&Xt(Jt,t)?$t[t]=Jt[t]:$t[t]=Yt&&Qt?Qt(e):Zt(e)}return $t[t]},ee=f,ne=K,re=pt,oe=function(t,e){var n=t[e];return wt(n)?void 0:ht(n)},ie=function(t,e){var n,r;if("string"===e&&Ot(n=t.toString)&&!jt(r=St(n,t)))return r;if(Ot(n=t.valueOf)&&!jt(r=St(n,t)))return r;if("string"!==e&&Ot(n=t.toString)&&!jt(r=St(n,t)))return r;throw Et("Can't convert object to primitive value")},ae=TypeError,ue=te("toPrimitive"),ce=function(t,e){if(!ne(t)||re(t))return t;var n,r=oe(t,ue);if(r){if(void 0===e&&(e="default"),n=ee(r,t,e),!ne(n)||re(n))return n;throw ae("Can't convert object to primitive value")}return void 0===e&&(e="number"),ie(t,e)},fe=pt,le=function(t){var e=ce(t,"string");return fe(e)?e:e+""},se=K,de=n.document,pe=se(de)&&se(de.createElement),ve=function(t){return pe?de.createElement(t):{}},me=ve,ye=!i&&!o((function(){return 7!=Object.defineProperty(me("div"),"a",{get:function(){return 7}}).a})),be=i,ge=f,he=l,we=y,Se=z,Oe=le,je=kt,Ee=ye,Ce=Object.getOwnPropertyDescriptor;r.f=be?Ce:function(t,e){if(t=Se(t),e=Oe(e),Ee)try{return Ce(t,e)}catch(t){}if(je(t,e))return we(!ge(he.f,t,e),t[e])};var Le={},Te=i&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Pe=K,De=String,Ae=TypeError,Fe=function(t){if(Pe(t))return t;throw Ae(De(t)+" is not an object")},Re=i,We=ye,xe=Te,Ie=Fe,Me=le,Ne=TypeError,ke=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,ze="enumerable",Ge="configurable",qe="writable";Le.f=Re?xe?function(t,e,n){if(Ie(t),e=Me(e),Ie(n),"function"==typeof t&&"prototype"===e&&"value"in n&&qe in n&&!n.writable){var r=_e(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:Ge in n?n.configurable:r.configurable,enumerable:ze in n?n.enumerable:r.enumerable,writable:!1})}return ke(t,e,n)}:ke:function(t,e,n){if(Ie(t),e=Me(e),Ie(n),We)try{return ke(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Ne("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Be=Le,He=y,Ue=i?function(t,e,n){return Be.f(t,e,He(1,n))}:function(t,e,n){return t[e]=n,t},Xe={exports:{}},Ke=i,Ve=kt,Ye=Function.prototype,$e=Ke&&Object.getOwnPropertyDescriptor,Je=Ve(Ye,"name"),Qe={EXISTS:Je,PROPER:Je&&"something"===function(){}.name,CONFIGURABLE:Je&&(!Ke||Ke&&$e(Ye,"name").configurable)},Ze=H,tn=Ft,en=P(Function.toString);Ze(tn.inspectSource)||(tn.inspectSource=function(t){return en(t)});var nn,rn,on,an=tn.inspectSource,un=H,cn=n.WeakMap,fn=un(cn)&&/native code/.test(String(cn)),ln=Ct.exports,sn=Bt,dn=ln("keys"),pn=function(t){return dn[t]||(dn[t]=sn(t))},vn={},mn=fn,yn=n,bn=K,gn=Ue,hn=kt,wn=Ft,Sn=pn,On=vn,jn="Object already initialized",En=yn.TypeError,Cn=yn.WeakMap;if(mn||wn.state){var Ln=wn.state||(wn.state=new Cn);Ln.get=Ln.get,Ln.has=Ln.has,Ln.set=Ln.set,nn=function(t,e){if(Ln.has(t))throw En(jn);return e.facade=t,Ln.set(t,e),e},rn=function(t){return Ln.get(t)||{}},on=function(t){return Ln.has(t)}}else{var Tn=Sn("state");On[Tn]=!0,nn=function(t,e){if(hn(t,Tn))throw En(jn);return e.facade=t,gn(t,Tn,e),e},rn=function(t){return hn(t,Tn)?t[Tn]:{}},on=function(t){return hn(t,Tn)}}var Pn={set:nn,get:rn,has:on,enforce:function(t){return on(t)?rn(t):nn(t,{})},getterFor:function(t){return function(e){var n;if(!bn(e)||(n=rn(e)).type!==t)throw En("Incompatible receiver, "+t+" required");return n}}},Dn=o,An=H,Fn=kt,Rn=i,Wn=Qe.CONFIGURABLE,xn=an,In=Pn.enforce,Mn=Pn.get,Nn=Object.defineProperty,kn=Rn&&!Dn((function(){return 8!==Nn((function(){}),"length",{value:8}).length})),_n=String(String).split("String"),zn=Xe.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!Fn(t,"name")||Wn&&t.name!==e)&&(Rn?Nn(t,"name",{value:e,configurable:!0}):t.name=e),kn&&n&&Fn(n,"arity")&&t.length!==n.arity&&Nn(t,"length",{value:n.arity});try{n&&Fn(n,"constructor")&&n.constructor?Rn&&Nn(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=In(t);return Fn(r,"source")||(r.source=_n.join("string"==typeof e?e:"")),t};Function.prototype.toString=zn((function(){return An(this)&&Mn(this).source||xn(this)}),"toString");var Gn=H,qn=Le,Bn=Xe.exports,Hn=Pt,Un={},Xn=Math.ceil,Kn=Math.floor,Vn=Math.trunc||function(t){var e=+t;return(e>0?Kn:Xn)(e)},Yn=function(t){var e=+t;return e!=e||0===e?0:Vn(e)},$n=Yn,Jn=Math.max,Qn=Math.min,Zn=Yn,tr=Math.min,er=function(t){return t>0?tr(Zn(t),9007199254740991):0},nr=function(t){return er(t.length)},rr=z,or=function(t,e){var n=$n(t);return n<0?Jn(n+e,0):Qn(n,e)},ir=nr,ar=function(t){return function(e,n,r){var o,i=rr(e),a=ir(i),u=or(r,a);if(t&&n!=n){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},ur={includes:ar(!0),indexOf:ar(!1)},cr=kt,fr=z,lr=ur.indexOf,sr=vn,dr=P([].push),pr=function(t,e){var n,r=fr(t),o=0,i=[];for(n in r)!cr(sr,n)&&cr(r,n)&&dr(i,n);for(;e.length>o;)cr(r,n=e[o++])&&(~lr(i,n)||dr(i,n));return i},vr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],mr=pr,yr=vr.concat("length","prototype");Un.f=Object.getOwnPropertyNames||function(t){return mr(t,yr)};var br={};br.f=Object.getOwnPropertySymbols;var gr=J,hr=Un,wr=br,Sr=Fe,Or=P([].concat),jr=gr("Reflect","ownKeys")||function(t){var e=hr.f(Sr(t)),n=wr.f;return n?Or(e,n(t)):e},Er=kt,Cr=jr,Lr=r,Tr=Le,Pr=o,Dr=H,Ar=/#|\.prototype\./,Fr=function(t,e){var n=Wr[Rr(t)];return n==Ir||n!=xr&&(Dr(e)?Pr(e):!!e)},Rr=Fr.normalize=function(t){return String(t).replace(Ar,".").toLowerCase()},Wr=Fr.data={},xr=Fr.NATIVE="N",Ir=Fr.POLYFILL="P",Mr=Fr,Nr=n,kr=r.f,_r=Ue,zr=function(t,e,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:e;if(Gn(n)&&Bn(n,i,r),r.global)o?t[e]=n:Hn(e,n);else{try{r.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=n:qn.f(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t},Gr=Pt,qr=function(t,e,n){for(var r=Cr(e),o=Tr.f,i=Lr.f,a=0;a<r.length;a++){var u=r[a];Er(t,u)||n&&Er(n,u)||o(t,u,i(e,u))}},Br=Mr,Hr=function(t,e){var n,r,o,i,a,u=t.target,c=t.global,f=t.stat;if(n=c?Nr:f?Nr[u]||Gr(u,{}):(Nr[u]||{}).prototype)for(r in e){if(i=e[r],o=t.dontCallGetSet?(a=kr(n,r))&&a.value:n[r],!Br(c?r:u+(f?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;qr(i,o)}(t.sham||o&&o.sham)&&_r(i,"sham",!0),zr(n,r,i,t)}},Ur=pr,Xr=vr,Kr=Object.keys||function(t){return Ur(t,Xr)},Vr=i,Yr=P,$r=Kr,Jr=z,Qr=Yr(l.f),Zr=Yr([].push),to=function(t){return function(e){for(var n,r=Jr(e),o=$r(r),i=o.length,a=0,u=[];i>a;)n=o[a++],Vr&&!Qr(r,n)||Zr(u,t?[n,r[n]]:r[n]);return u}},eo={entries:to(!0),values:to(!1)},no=eo.entries;Hr({target:"Object",stat:!0},{entries:function(t){return no(t)}});var ro=n,oo=ro.Object.entries;var io=eo.values;Hr({target:"Object",stat:!0},{values:function(t){return io(t)}});var ao=ro.Object.values;!function(t){t.exports=ao}({exports:{}});var uo=n;Hr({global:!0,forced:uo.globalThis!==uo},{globalThis:uo});var co=C,fo=Array.isArray||function(t){return"Array"==co(t)},lo=TypeError,so=gt,po=a,vo=P(P.bind),mo=fo,yo=nr,bo=function(t){if(t>9007199254740991)throw lo("Maximum allowed index exceeded");return t},go=function(t,e){return so(t),void 0===e?t:po?vo(t,e):function(){return t.apply(e,arguments)}},ho=function(t,e,n,r,o,i,a,u){for(var c,f,l=o,s=0,d=!!a&&go(a,u);s<r;)s in n&&(c=d?d(n[s],s,e):n[s],i>0&&mo(c)?(f=yo(c),l=ho(t,e,c,f,l,i-1)-1):(bo(l+1),t[l]=c),l++),s++;return l},wo=ho,So={};So[te("toStringTag")]="z";var Oo="[object z]"===String(So),jo=H,Eo=C,Co=te("toStringTag"),Lo=Object,To="Arguments"==Eo(function(){return arguments}()),Po=P,Do=o,Ao=H,Fo=Oo?Eo:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Lo(t),Co))?n:To?Eo(e):"Object"==(r=Eo(e))&&jo(e.callee)?"Arguments":r},Ro=an,Wo=function(){},xo=[],Io=J("Reflect","construct"),Mo=/^\s*(?:class|function)\b/,No=Po(Mo.exec),ko=!Mo.exec(Wo),_o=function(t){if(!Ao(t))return!1;try{return Io(Wo,xo,t),!0}catch(t){return!1}},zo=function(t){if(!Ao(t))return!1;switch(Fo(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return ko||!!No(Mo,Ro(t))}catch(t){return!0}};zo.sham=!0;var Go=!Io||Do((function(){var t;return _o(_o.call)||!_o(Object)||!_o((function(){t=!0}))||t}))?zo:_o,qo=fo,Bo=Go,Ho=K,Uo=te("species"),Xo=Array,Ko=function(t){var e;return qo(t)&&(e=t.constructor,(Bo(e)&&(e===Xo||qo(e.prototype))||Ho(e)&&null===(e=e[Uo]))&&(e=void 0)),void 0===e?Xo:e},Vo=function(t,e){return new(Ko(t))(0===e?0:e)},Yo=wo,$o=It,Jo=nr,Qo=Yn,Zo=Vo;Hr({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=$o(this),n=Jo(e),r=Zo(e,0);return r.length=Yo(r,e,e,n,0,void 0===t?1:Qo(t)),r}});var ti=wo,ei=gt,ni=It,ri=nr,oi=Vo;Hr({target:"Array",proto:!0},{flatMap:function(t){var e,n=ni(this),r=ri(n);return ei(t),(e=oi(n,0)).length=ti(e,n,n,r,0,1,t,arguments.length>1?arguments[1]:void 0),e}});var ii={},ai=i,ui=Te,ci=Le,fi=Fe,li=z,si=Kr;ii.f=ai&&!ui?Object.defineProperties:function(t,e){fi(t);for(var n,r=li(e),o=si(e),i=o.length,a=0;i>a;)ci.f(t,n=o[a++],r[n]);return t};var di,pi=J("document","documentElement"),vi=Fe,mi=ii,yi=vr,bi=vn,gi=pi,hi=ve,wi=pn("IE_PROTO"),Si=function(){},Oi=function(t){return"<script>"+t+"</"+"script>"},ji=function(t){t.write(Oi("")),t.close();var e=t.parentWindow.Object;return t=null,e},Ei=function(){try{di=new ActiveXObject("htmlfile")}catch(t){}var t,e;Ei="undefined"!=typeof document?document.domain&&di?ji(di):((e=hi("iframe")).style.display="none",gi.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Oi("document.F=Object")),t.close(),t.F):ji(di);for(var n=yi.length;n--;)delete Ei.prototype[yi[n]];return Ei()};bi[wi]=!0;var Ci=te,Li=Object.create||function(t,e){var n;return null!==t?(Si.prototype=vi(t),n=new Si,Si.prototype=null,n[wi]=t):n=Ei(),void 0===e?n:mi.f(n,e)},Ti=Le.f,Pi=Ci("unscopables"),Di=Array.prototype;null==Di[Pi]&&Ti(Di,Pi,{configurable:!0,value:Li(null)});var Ai,Fi=function(t){Di[Pi][t]=!0};Fi("flat"),Fi("flatMap"),void 0===Element.prototype.getAttributeNames&&(Element.prototype.getAttributeNames=function(){for(var t=this.attributes,e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=t[r].name;return n});var Ri=!1,Wi=!1,xi=!1;function Ii(){Ri&&Wi&&xi&&Ai()}var Mi={FontsLoaded:function(){xi=!0,Ii()},WebComponentsLoaded:function(){Ri=!0,Ii()},WCRDispatched:function(){Wi=!0,Ii()},WebComponentsReady:new Promise((function(t){Ai=t})),reset:function(){Ri=!1,xi=!1,Wi=!1,this.WebComponentsReady=new Promise((function(t){Ai=t}))}};window.addEventListener("d2l-performance-measure",(function(t){var e=/(\?|&)timingdebug=(1|0)/gi.exec(location.search);if(null!==e&&3===e.length){var n="0"!==e[2];try{n?window.sessionStorage.setItem("TimingDebug","1"):window.sessionStorage.removeItem("TimingDebug")}catch(t){}}var r=!1;try{r=null!==window.sessionStorage.getItem("TimingDebug")}catch(t){}r&&requestAnimationFrame((function(){var e=document.createElement("div"),n="paint"===t.detail.value.entryType?t.detail.value.startTime:t.detail.value.duration;e.appendChild(document.createTextNode(t.detail.value.name+": "+Math.floor(n)));var r=document.querySelector(".d2l-page-timing");null===r?((r=document.createElement("div")).className="d2l-page-timing",r.appendChild(e),document.body.appendChild(r)):r.appendChild(e)}))})),function(){if(window.performance&&window.performance.mark&&window.performance.measure&&window.performance.getEntriesByName){var t=!1,e=!1,n=!1;if("complete"===document.readyState?u():addEventListener("load",u),Mi.WebComponentsReady.then(a),"PerformanceObserver"in window){var r=new PerformanceObserver((function(t){var e=t.getEntries();void 0!==e&&e.length>0&&e.forEach((function(t){o("d2l.page."+t.name,t)}))}));try{r.observe({entryTypes:["paint"]})}catch(t){}}setTimeout(a,1e4)}function o(t,e){document.dispatchEvent(new CustomEvent("d2l-performance-measure",{bubbles:!0,detail:{name:t,value:e}}))}function i(t,e,n,r){window.performance.measure(t,e,n);var i=window.performance.getEntriesByName(t,"measure");1===i.length&&r&&o(t,i[0])}function a(){t||(t=!0,window.performance.mark("webComponentsReady"),c())}function u(){e=!0,c()}function c(){t&&e&&!n&&(n=!0,i("d2l.page.preFetch","navigationStart","fetchStart",!1),i("d2l.page.domInteractive","fetchStart","domInteractive",!1),i("d2l.page.domContentLoadedHandlers","domContentLoadedEventStart","domContentLoadedEventEnd",!1),i("d2l.page.load","fetchStart","loadEventStart",!1),i("d2l.page.server","requestStart","responseStart",!1),i("d2l.page.download","responseStart","responseEnd",!1),i("d2l.page.timeToClient","navigationStart","responseEnd",!0),i("d2l.page.webComponentsReady","navigationStart","webComponentsReady",!0))}}(),window.D2L=window.D2L||{},window.D2L.FontsLoaded=Mi.FontsLoaded,window.D2L.WebComponentsLoaded=Mi.WebComponentsLoaded,window.D2L.WCRDispatched=Mi.WCRDispatched,window.D2L.WebComponentsReady=Mi.WebComponentsReady,window.d2lWCLoaded&&Mi.WebComponentsLoaded(),window.d2lWCRDispatched&&Mi.WCRDispatched(),window.d2lFontsLoaded?Mi.FontsLoaded():setTimeout((function(){Mi.FontsLoaded()}),2e3)}();