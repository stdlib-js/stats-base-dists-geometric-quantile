// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t,r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||f.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=c):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,n.get),p&&u&&u.call(t,r,n.set),t};var c=t;function l(t){return t!=t}var y,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,v=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"";y=p&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,o,i;if(null==t)return b.call(t);n=t[d],i=d,r=null!=(o=t)&&v.call(o,i);try{t[d]=void 0}catch(r){return b.call(t)}return e=b.call(t),r?t[d]=n:delete t[d],e}:function(t){return b.call(t)};var A,_=y,m="function"==typeof Uint32Array,w="function"==typeof Uint32Array?Uint32Array:null,s="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var t,r,n;if("function"!=typeof w)return!1;try{r=new w(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(m&&n instanceof Uint32Array||"[object Uint32Array]"===_(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?s:function(){throw new Error("not implemented")};var N,U=A,h="function"==typeof Float64Array,j="function"==typeof Float64Array?Float64Array:null,g="function"==typeof Float64Array?Float64Array:void 0;N=function(){var t,r,n;if("function"!=typeof j)return!1;try{r=new j([1,3.14,-3.14,NaN]),n=r,t=(h&&n instanceof Float64Array||"[object Float64Array]"===_(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?g:function(){throw new Error("not implemented")};var S,E=N,F="function"==typeof Uint8Array,T="function"==typeof Uint8Array?Uint8Array:null,I="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var t,r,n;if("function"!=typeof T)return!1;try{r=new T(r=[1,3.14,-3.14,256,257]),n=r,t=(F&&n instanceof Uint8Array||"[object Uint8Array]"===_(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?I:function(){throw new Error("not implemented")};var O,P=S,x="function"==typeof Uint16Array,V="function"==typeof Uint16Array?Uint16Array:null,G="function"==typeof Uint16Array?Uint16Array:void 0;O=function(){var t,r,n;if("function"!=typeof V)return!1;try{r=new V(r=[1,3.14,-3.14,65536,65537]),n=r,t=(x&&n instanceof Uint16Array||"[object Uint16Array]"===_(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?G:function(){throw new Error("not implemented")};var k,Y={uint16:O,uint8:P};(k=new Y.uint16(1))[0]=4660;var q=52===new Y.uint8(k.buffer)[0],C=!0===q?1:0,M=new E(1),z=new U(M.buffer);function B(t){return M[0]=t,z[C]}var D=!0===q?1:0,H=new E(1),J=new U(H.buffer);function K(t,r){return H[0]=t,J[D]=r>>>0,H[0]}var L=Number.POSITIVE_INFINITY,Q=Number.NEGATIVE_INFINITY,R=1023,W=.6931471803691238,X=1.9082149292705877e-10;function Z(t){var r,n,e,o,i,u,a,f,c,y;if(t<-1||l(t))return NaN;if(-1===t)return Q;if(t===L)return t;if(0===t)return t;if(y=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(y=0,o=t,n=1)}return 0!==y&&(e<9007199254740992?(i=(y=((n=B(c=1+t))>>20)-R)>0?1-(c-t):t-(c-1),i/=c):(y=((n=B(c=t))>>20)-R,i=0),(n&=1048575)<434334?c=K(c,1072693248|n):(y+=1,c=K(c,1071644672|n),n=1048576-n>>2),o=c-1),r=.5*o*o,0===n?0===o?y*W+(i+=y*X):y*W-((f=r*(1-.6666666666666666*o))-(y*X+i)-o):(f=(a=(u=o/(2+o))*u)*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))}(a),0===y?o-(r-u*(r+f)):y*W-(r-(u*(r+f)+(y*X+i))-o))}var $=Math.ceil;function tt(t){return 0===t&&1/t===L}function rt(t,r){var n,e,o,i;if(2===(n=arguments.length))return l(t)||l(r)?NaN:t===L||r===L?L:t===r&&0===t?tt(t)?t:r:t>r?t:r;for(e=Q,i=0;i<n;i++){if(l(o=arguments[i])||o===L)return o;(o>e||o===e&&0===o&&tt(o))&&(e=o)}return e}var nt=.6931471803691238,et=1.9082149292705877e-10,ot=1048575;function it(t){var r,n,e,o,i,u,a,f,c,y,p,b;return 0===t?Q:l(t)||t<0?NaN:(i=0,(n=B(t))<1048576&&(i-=54,n=B(t*=0x40000000000000)),n>=2146435072?t+t:(i+=(n>>20)-R|0,i+=(f=614244+(n&=ot)&1048576|0)>>20|0,a=(t=K(t,n|1072693248^f))-1,(ot&2+n)<3?0===a?0===i?0:i*nt+i*et:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*nt-(u-i*et-a)):(f=n-398458|0,c=440401-n|0,o=(p=(b=(y=a/(2+a))*y)*b)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(p),e=b*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(p),u=e+o,(f|=c)>0?(r=.5*a*a,0===i?a-(r-y*(r+u)):i*nt-(r-(y*(r+u)+i*et)-a)):0===i?a-y*(a-u):i*nt-(y*(a-u)-i*et-a))))}function ut(t,r){return l(r)||l(t)||r<0||r>1||t<0||t>1?NaN:1===t?L:rt(0,$(it(1-t)/Z(-r)-(1+1e-12)))}return c(ut,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(t){return l(t)||t<0||t>1?(r=NaN,function(){return r}):function(r){return l(r)||r<0||r>1?NaN:1===r?L:rt(0,$(it(1-r)/Z(-t)-(1+1e-12)))};var r}}),ut},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).quantile=r();
//# sourceMappingURL=browser.js.map
