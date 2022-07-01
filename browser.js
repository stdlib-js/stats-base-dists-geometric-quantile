// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return n({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__,l=e,y=function(t,n,r){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(a.call(t,n)||c.call(t,n)?(e=t.__proto__,t.__proto__=o,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,n,r.get),p&&f&&f.call(t,n,r.set),t},p=r()?l:y,b=function(t,n,r){p(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})},d=function(t){return t!=t},A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,m=_,w=function(t){return m.call(t)},s=Object.prototype.hasOwnProperty,v=function(t,n){return null!=t&&s.call(t,n)},N="function"==typeof Symbol?Symbol.toStringTag:"",U=v,h=N,j=_,g=w,S=function(t){var n,r,e;if(null==t)return j.call(t);r=t[h],n=U(t,h);try{t[h]=void 0}catch(n){return j.call(t)}return e=j.call(t),n?t[h]=r:delete t[h],e},E=A&&"symbol"==typeof Symbol.toStringTag?S:g,F=E,T="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,O=function(t){return T&&t instanceof Uint32Array||"[object Uint32Array]"===F(t)},P=I,x=function(){var t,n;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,4294967296,4294967297]),t=O(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},V="function"==typeof Uint32Array?Uint32Array:void 0,G=function(){throw new Error("not implemented")},k=x()?V:G,Y=E,q="function"==typeof Float64Array,C="function"==typeof Float64Array?Float64Array:null,M=function(t){return q&&t instanceof Float64Array||"[object Float64Array]"===Y(t)},z=C,B=function(){var t,n;if("function"!=typeof z)return!1;try{n=new z([1,3.14,-3.14,NaN]),t=M(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t},D="function"==typeof Float64Array?Float64Array:void 0,H=function(){throw new Error("not implemented")},J=B()?D:H,K=E,L="function"==typeof Uint8Array,Q="function"==typeof Uint8Array?Uint8Array:null,R=function(t){return L&&t instanceof Uint8Array||"[object Uint8Array]"===K(t)},W=Q,X=function(){var t,n;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,256,257]),t=R(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},tt=X()?Z:$,nt=E,rt="function"==typeof Uint16Array,et="function"==typeof Uint16Array?Uint16Array:null,ot=function(t){return rt&&t instanceof Uint16Array||"[object Uint16Array]"===nt(t)},it=et,ut=function(){var t,n;if("function"!=typeof it)return!1;try{n=new it(n=[1,3.14,-3.14,65536,65537]),t=ot(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},ft="function"==typeof Uint16Array?Uint16Array:void 0,at=function(){throw new Error("not implemented")},ct={uint16:ut()?ft:at,uint8:tt};(t=new ct.uint16(1))[0]=4660;var lt=52===new ct.uint8(t.buffer)[0],yt=k,pt=!0===lt?1:0,bt=new J(1),dt=new yt(bt.buffer),At=function(t){return bt[0]=t,dt[pt]},_t=k,mt=!0===lt?1:0,wt=new J(1),st=new _t(wt.buffer),vt=function(t,n){return wt[0]=t,st[mt]=n>>>0,wt[0]},Nt=vt,Ut=Number.POSITIVE_INFINITY,ht=Number.NEGATIVE_INFINITY,jt=d,gt=At,St=Nt,Et=Ut,Ft=ht,Tt=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))},It=.6931471803691238,Ot=1.9082149292705877e-10,Pt=function(t){var n,r,e,o,i,u,f,a,c,l;if(t<-1||jt(t))return NaN;if(-1===t)return Ft;if(t===Et)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,o=t,r=1)}return 0!==l&&(e<9007199254740992?(i=(l=((r=gt(c=1+t))>>20)-1023)>0?1-(c-t):t-(c-1),i/=c):(l=((r=gt(c=t))>>20)-1023,i=0),(r&=1048575)<434334?c=St(c,1072693248|r):(l+=1,c=St(c,1071644672|r),r=1048576-r>>2),o=c-1),n=.5*o*o,0===r?0===o?l*It+(i+=l*Ot):l*It-((a=n*(1-.6666666666666666*o))-(l*Ot+i)-o):(a=(f=(u=o/(2+o))*u)*Tt(f),0===l?o-(n-u*(n+a)):l*It-(n-(u*(n+a)+(l*Ot+i))-o))},xt=Math.ceil,Vt=Ut,Gt=function(t){return 0===t&&1/t===Vt},kt=d,Yt=ht,qt=Ut,Ct=function(t,n){var r,e,o,i;if(2===(r=arguments.length))return kt(t)||kt(n)?NaN:t===qt||n===qt?qt:t===n&&0===t?Gt(t)?t:n:t>n?t:n;for(e=Yt,i=0;i<r;i++){if(kt(o=arguments[i])||o===qt)return o;(o>e||o===e&&0===o&&Gt(o))&&(e=o)}return e},Mt=Ct,zt=At,Bt=Nt,Dt=d,Ht=ht,Jt=function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)},Kt=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))},Lt=.6931471803691238,Qt=1.9082149292705877e-10,Rt=1048575,Wt=function(t){var n,r,e,o,i,u,f,a,c,l,y;return 0===t?Ht:Dt(t)||t<0?NaN:(o=0,(r=zt(t))<1048576&&(o-=54,r=zt(t*=0x40000000000000)),r>=2146435072?t+t:(o+=(r>>20)-1023|0,o+=(f=614244+(r&=Rt)&1048576|0)>>20|0,u=(t=Bt(t,r|1072693248^f))-1,(Rt&2+r)<3?0===u?0===o?0:o*Lt+o*Qt:(i=u*u*(.5-.3333333333333333*u),0===o?u-i:o*Lt-(i-o*Qt-u)):(f=r-398458|0,a=440401-r|0,e=(l=(y=(c=u/(2+u))*c)*y)*Jt(l),i=y*Kt(l)+e,(f|=a)>0?(n=.5*u*u,0===o?u-(n-c*(n+i)):o*Lt-(n-(c*(n+i)+o*Qt)-u)):0===o?u-c*(u-i):o*Lt-(c*(u-i)-o*Qt-u))))};function Xt(t,n){return d(n)||d(t)||n<0||n>1||t<0||t>1?NaN:1===t?Ut:Mt(0,xt(Wt(1-t)/Pt(-n)-(1+1e-12)))}var Zt=function(t){return function(){return t}};return b(Xt,"factory",(function(t){return d(t)||t<0||t>1?Zt(NaN):function(n){return d(n)||n<0||n>1?NaN:1===n?Ut:Mt(0,xt(Wt(1-n)/Pt(-t)-(1+1e-12)))}})),Xt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).quantile=n();
//# sourceMappingURL=browser.js.map
