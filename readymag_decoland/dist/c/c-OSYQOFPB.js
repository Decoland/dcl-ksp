import{a as C}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-IFNIQOEY.js";import{a as V,b as Z,d as I}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-JPR5YHB4.js";var de,U,M,k,pe,z,N,H,K,ye,_,F,$,ee,B,te,G=V(()=>{"use strict";de=Symbol(),U=Symbol(),M="a",k="w",pe=(e,r)=>new Proxy(e,r),z=Object.getPrototypeOf,N=new WeakMap,H=e=>e&&(N.has(e)?N.get(e):z(e)===Object.prototype||z(e)===Array.prototype),K=e=>typeof e=="object"&&e!==null,ye=e=>{if(Array.isArray(e))return Array.from(e);let r=Object.getOwnPropertyDescriptors(e);return Object.values(r).forEach(u=>{u.configurable=!0}),Object.create(z(e),r)},_=e=>e[U]||e,F=(e,r,u,f)=>{if(!H(e))return e;let i=f&&f.get(e);if(!i){let y=_(e);i=(t=>Object.values(Object.getOwnPropertyDescriptors(t)).some(d=>!d.configurable&&!d.writable))(y)?[y,ye(y)]:[y],f?.set(e,i)}let[n,s]=i,c=u&&u.get(n);return c&&c[1].f===!!s||(c=((y,t)=>{let d={f:t},O=!1,p=(g,h)=>{if(!O){let S=d[M].get(y);if(S||(S={},d[M].set(y,S)),g===k)S[k]=!0;else{let w=S[g];w||(w=new Set,S[g]=w),w.add(h)}}},m={get:(g,h)=>h===U?y:(p("k",h),F(Reflect.get(g,h),d[M],d.c,d.t)),has:(g,h)=>h===de?(O=!0,d[M].delete(y),!0):(p("h",h),Reflect.has(g,h)),getOwnPropertyDescriptor:(g,h)=>(p("o",h),Reflect.getOwnPropertyDescriptor(g,h)),ownKeys:g=>(p(k),Reflect.ownKeys(g))};return t&&(m.set=m.deleteProperty=()=>!1),[m,d]})(n,!!s),c[1].p=pe(s||n,c[0]),u&&u.set(n,c)),c[1][M]=r,c[1].c=u,c[1].t=f,c[1].p},$=(e,r,u,f)=>{if(Object.is(e,r))return!1;if(!K(e)||!K(r))return!0;let i=u.get(_(e));if(!i)return!0;if(f){let s=f.get(e);if(s&&s.n===r)return s.g;f.set(e,{n:r,g:!1})}let n=null;try{for(let s of i.h||[])if(n=Reflect.has(e,s)!==Reflect.has(r,s),n)return n;if(i[k]===!0){if(n=((s,c)=>{let y=Reflect.ownKeys(s),t=Reflect.ownKeys(c);return y.length!==t.length||y.some((d,O)=>d!==t[O])})(e,r),n)return n}else for(let s of i.o||[])if(n=!!Reflect.getOwnPropertyDescriptor(e,s)!=!!Reflect.getOwnPropertyDescriptor(r,s),n)return n;for(let s of i.k||[])if(n=$(e[s],r[s],u,f),n)return n;return n===null&&(n=!0),n}finally{f&&f.set(e,{n:r,g:n})}},ee=e=>H(e)&&e[U]||null,B=(e,r=!0)=>{N.set(e,r)},te=(e,r,u)=>{let f=[],i=new WeakSet,n=(s,c)=>{if(i.has(s))return;K(s)&&i.add(s);let y=K(s)&&r.get(_(s));if(y){var t,d;if((t=y.h)==null||t.forEach(p=>{let m=`:has(${String(p)})`;f.push(c?[...c,m]:[m])}),y[k]===!0){let p=":ownKeys";f.push(c?[...c,p]:[p])}else{var O;(O=y.o)==null||O.forEach(p=>{let m=`:hasOwn(${String(p)})`;f.push(c?[...c,m]:[m])})}(d=y.k)==null||d.forEach(p=>{u&&!("value"in(Object.getOwnPropertyDescriptor(s,p)||{}))||n(s[p],c?[...c,p]:[p])})}else c&&f.push(c)};return n(e),f}});function We(e={}){return me(e)}function Ve(e){let r=b.get(e);return r?.[1]()}function re(e,r,u){let f=b.get(e);(import.meta.env?import.meta.env.MODE:void 0)!=="production"&&!f&&console.warn("Please use proxy object");let i,n=[],s=f[3],c=!1,t=s(d=>{if(n.push(d),u){r(n.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,c&&r(n.splice(0))}))});return c=!0,()=>{c=!1,t()}}function Q(e,r){let u=b.get(e);(import.meta.env?import.meta.env.MODE:void 0)!=="production"&&!u&&console.warn("Please use proxy object");let[f,i,n]=u;return n(f,i(),r)}function Ke(e){return A.add(e),e}var J,b,A,he,me,X=V(()=>{"use strict";G();J=e=>typeof e=="object"&&e!==null,b=new WeakMap,A=new WeakSet,he=(e=Object.is,r=(t,d)=>new Proxy(t,d),u=t=>J(t)&&!A.has(t)&&(Array.isArray(t)||!(Symbol.iterator in t))&&!(t instanceof WeakMap)&&!(t instanceof WeakSet)&&!(t instanceof Error)&&!(t instanceof Number)&&!(t instanceof Date)&&!(t instanceof String)&&!(t instanceof RegExp)&&!(t instanceof ArrayBuffer),f=t=>{switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:throw t}},i=new WeakMap,n=(t,d,O=f)=>{let p=i.get(t);if(p?.[0]===d)return p[1];let m=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));return B(m,!0),i.set(t,[d,m]),Reflect.ownKeys(t).forEach(g=>{if(Object.getOwnPropertyDescriptor(m,g))return;let h=Reflect.get(t,g),{enumerable:S}=Reflect.getOwnPropertyDescriptor(t,g),w={value:h,enumerable:S,configurable:!0};if(A.has(h))B(h,!1);else if(h instanceof Promise)delete w.value,w.get=()=>O(h);else if(b.has(h)){let[T,L]=b.get(h);w.value=n(T,L(),O)}Object.defineProperty(m,g,w)}),Object.preventExtensions(m)},s=new WeakMap,c=[1,1],y=t=>{if(!J(t))throw new Error("object required");let d=s.get(t);if(d)return d;let O=c[0],p=new Set,m=(l,a=++c[0])=>{O!==a&&(O=a,p.forEach(o=>o(l,a)))},g=c[1],h=(l=++c[1])=>(g!==l&&!p.size&&(g=l,w.forEach(([a])=>{let o=a[1](l);o>O&&(O=o)})),O),S=l=>(a,o)=>{let E=[...a];E[1]=[l,...E[1]],m(E,o)},w=new Map,T=(l,a)=>{if((import.meta.env?import.meta.env.MODE:void 0)!=="production"&&w.has(l))throw new Error("prop listener already exists");if(p.size){let o=a[3](S(l));w.set(l,[a,o])}else w.set(l,[a])},L=l=>{var a;let o=w.get(l);o&&(w.delete(l),(a=o[1])==null||a.call(o))},ae=l=>(p.add(l),p.size===1&&w.forEach(([o,E],R)=>{if((import.meta.env?import.meta.env.MODE:void 0)!=="production"&&E)throw new Error("remove already exists");let D=o[3](S(R));w.set(R,[o,D])}),()=>{p.delete(l),p.size===0&&w.forEach(([o,E],R)=>{E&&(E(),w.set(R,[o]))})}),q=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t)),x=r(q,{deleteProperty(l,a){let o=Reflect.get(l,a);L(a);let E=Reflect.deleteProperty(l,a);return E&&m(["delete",[a],o]),E},set(l,a,o,E){let R=Reflect.has(l,a),D=Reflect.get(l,a,E);if(R&&(e(D,o)||s.has(o)&&e(D,s.get(o))))return!0;L(a),J(o)&&(o=ee(o)||o);let W=o;if(o instanceof Promise)o.then(P=>{o.status="fulfilled",o.value=P,m(["resolve",[a],P])}).catch(P=>{o.status="rejected",o.reason=P,m(["reject",[a],P])});else{!b.has(o)&&u(o)&&(W=y(o));let P=!A.has(W)&&b.get(W);P&&T(a,P)}return Reflect.set(l,a,W,E),m(["set",[a],o,D]),!0}});s.set(t,x);let le=[q,h,n,ae];return b.set(x,le),Reflect.ownKeys(t).forEach(l=>{let a=Object.getOwnPropertyDescriptor(t,l);"value"in a&&(x[l]=t[l],delete a.value,delete a.writable),Object.defineProperty(q,l,a)}),x})=>[y,b,A,e,r,u,f,i,n,s,c],[me]=he()});var se=Z(ne=>{"use strict";var j=C();function we(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var ge=typeof Object.is=="function"?Object.is:we,Oe=j.useState,ve=j.useEffect,Ee=j.useLayoutEffect,Se=j.useDebugValue;function be(e,r){var u=r(),f=Oe({inst:{value:u,getSnapshot:r}}),i=f[0].inst,n=f[1];return Ee(function(){i.value=u,i.getSnapshot=r,Y(i)&&n({inst:i})},[e,u,r]),ve(function(){return Y(i)&&n({inst:i}),e(function(){Y(i)&&n({inst:i})})},[e]),Se(u),u}function Y(e){var r=e.getSnapshot;e=e.value;try{var u=r();return!ge(e,u)}catch{return!0}}function Pe(e,r){return r()}var Re=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Pe:be;ne.useSyncExternalStore=j.useSyncExternalStore!==void 0?j.useSyncExternalStore:Re});var ce=Z((ze,oe)=>{"use strict";oe.exports=se()});function _e(e,r){let u=r?.sync,f=(0,v.useRef)(),i=(0,v.useRef)(),n=!0,s=je((0,v.useCallback)(t=>{let d=re(e,t,u);return t(),d},[e,u]),()=>{let t=Q(e,ie);try{if(!n&&f.current&&i.current&&!$(f.current,t,i.current,new WeakMap))return f.current}catch{}return t},()=>Q(e,ie));n=!1;let c=new WeakMap;(0,v.useEffect)(()=>{f.current=s,i.current=c}),(import.meta.env?import.meta.env.MODE:void 0)!=="production"&&De(s,c);let y=(0,v.useMemo)(()=>new WeakMap,[]);return F(s,c,y,Me)}var v,fe,ie,je,De,Me,ue=V(()=>{"use strict";v=I(C(),1);G();fe=I(ce(),1);X();({use:ie}=v.default),{useSyncExternalStore:je}=fe.default,De=(e,r)=>{let u=(0,v.useRef)();(0,v.useEffect)(()=>{u.current=te(e,r,!0)}),(0,v.useDebugValue)(u.current)},Me=new WeakMap});var ke=V(()=>{"use strict";X();ue()});export{We as a,Ve as b,re as c,Q as d,Ke as e,X as f,_e as g,ke as h};