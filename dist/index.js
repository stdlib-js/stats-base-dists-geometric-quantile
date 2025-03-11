"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=u(function(j,t){
var a=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-log1p/dist'),f=require('@stdlib/math-base-special-ceil/dist'),l=require('@stdlib/math-base-special-max/dist'),N=require('@stdlib/math-base-special-ln/dist'),x=require('@stdlib/constants-float64-pinf/dist');function y(r,e){return a(e)||a(r)||e<0||e>1||r<0||r>1?NaN:r===1?x:l(0,f(N(1-r)/s(-e)-(1+1e-12)))}t.exports=y
});var c=u(function(k,v){
var m=require('@stdlib/utils-constant-function/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-log1p/dist'),g=require('@stdlib/math-base-special-ceil/dist'),I=require('@stdlib/math-base-special-max/dist'),P=require('@stdlib/math-base-special-ln/dist'),d=require('@stdlib/constants-float64-pinf/dist');function O(r){if(q(r)||r<0||r>1)return m(NaN);return e;function e(i){return q(i)||i<0||i>1?NaN:i===1?d:I(0,g(P(1-i)/F(-r)-(1+1e-12)))}}v.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=n(),b=c();R(o,"factory",b);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
