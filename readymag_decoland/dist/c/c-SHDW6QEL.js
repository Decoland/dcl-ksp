import{a as d}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-JPR5YHB4.js";function p(r){let e=r.trim();e=e.replace(C,u).replace(h,u),e=e.replace(_,"\0");let t=0,c=e.length;for(;e.charAt(t)==="\0";)t++;if(t===c)return[];for(;e.charAt(c-1)==="\0";)c--;return e.slice(t,c).split(/\0/g)}function E(r){let e=p(r);for(let t=0;t<e.length;t++){let c=e[t],n=L.exec(c);if(n){let a=n.index+(n[1]??n[2]).length;e.splice(t,1,c.slice(0,a),c.slice(a))}}return e}function P(r,e){let[t,c,n]=m(r,e);return t+c.map(x(e?.locale)).join(e?.delimiter??" ")+n}function S(r,e){let[t,c,n]=m(r,e),a=x(e?.locale),s=w(e?.locale),i=e?.mergeAmbiguousCharacters?R(a,s):A(a,s);return t+c.map((l,o)=>o===0?a(l):i(l,o)).join(e?.delimiter??"")+n}function T(r,e){return P(r,{delimiter:"-",...e})}function x(r){return r===!1?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r)}function w(r){return r===!1?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r)}function R(r,e){return t=>`${e(t[0])}${r(t.slice(1))}`}function A(r,e){return(t,c)=>{let n=t[0];return(c>0&&n>="0"&&n<="9"?"_"+n:e(n))+r(t.slice(1))}}function m(r,e={}){let t=e.split??(e.separateNumbers?E:p),c=e.prefixCharacters??f,n=e.suffixCharacters??f,a=0,s=r.length;for(;a<r.length;){let i=r.charAt(a);if(!c.includes(i))break;a++}for(;s>a;){let i=s-1,l=r.charAt(i);if(!n.includes(l))break;s=i}return[r.slice(0,a),t(r.slice(a,s)),r.slice(s)]}var C,h,L,_,u,f,g=d(()=>{"use strict";C=/([\p{Ll}\d])(\p{Lu})/gu,h=/(\p{Lu})([\p{Lu}][\p{Ll}])/gu,L=/(\d)\p{Ll}|(\p{L})\d/u,_=/[^\p{L}\d]+/giu,u="$1\0$2",f=""});export{S as a,T as b,g as c};
