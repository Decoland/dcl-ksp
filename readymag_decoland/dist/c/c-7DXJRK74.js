import{c as b}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-SHDW6QEL.js";import{a as h,b as $}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-K3VMNJLR.js";import{a as f}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-JPR5YHB4.js";var g,d=f(()=>{"use strict";g=(p=>(p.desktopWidth="desktopWidth",p.desktopScale="desktopScale",p.phoneWidth="phoneWidth",p.phoneScale="phoneScale",p.tabletWidth="tabletWidth",p.tabletScale="tabletScale",p.viewerWidth="viewerWidth",p.viewerHeight="viewerHeight",p.pageHeight="pageHeight",p.pageOriginalHeight="pageOriginalHeight",p.pageWidth="pageWidth",p.pageScale="pageScale",p.pageTopOffset="pageTopOffset",p.pageLeftOffset="pageLeftOffset",p))(g||{})});function Y(e,...o){let t=[];for(let c=0;c<e.length;c++){let y=e[c],u=o[c];if(y.length&&t.push(y),typeof u<"u")if(typeof u=="function"){let a=u(g);Object.keys(g).includes(a)?t.push(`var(--${a})`):t.push(a)}else t.push(u)}let i=t.join(""),n=i.split("(").length-1,s=i.split(")").length-1;if(n!==s)throw new h("Invalid css calc string",{value:i});let r=i.split(/ (\+|-|\/|\*) /),x=/.*,[^\s].*/;if(!r[0].length||!r[r.length-1].length||r.some(c=>c.includes(" ")&&!c.includes(", ")||x.test(c)))throw new h("Invalid css calc string",{value:i});return r.join(" ")}function l(e){return`${e}px`}function j(e={},o=!1){let t=[],i=n=>typeof n=="string"&&n.length>0||typeof n=="number"&&!Number.isNaN(n);if(i(e.x)&&i(e.y)){let n=typeof e.x=="number"?l(e.x):e.x,s=typeof e.y=="number"?l(e.y):e.y;t.push(o?`translate3d(${n}, ${s}, 0)`:`translate(${n}, ${s})`)}else{if(i(e.x)){let n=typeof e.x=="number"?l(e.x):e.x;t.push(o?`translate3d(${n}, 0, 0)`:`translateX(${n})`)}if(i(e.y)){let n=typeof e.y=="number"?l(e.y):e.y;t.push(o?`translate3d(0, ${n}, 0)`:`translateY(${n})`)}}return i(e.rotate)&&t.push(`rotate(${typeof e.rotate=="number"?`${e.rotate}deg`:e.rotate})`),i(e.scale)?t.push(`scale(${e.scale})`):(i(e.scaleX)&&t.push(`scaleX(${typeof e.scaleX=="number"?l(e.scaleX):e.scaleX})`),i(e.scaleY)&&t.push(`scaleY(${typeof e.scaleY=="number"?l(e.scaleY):e.scaleY})`)),t.length?t.join(" "):"none"}function H(e){return e?`url('${e}')`:void 0}var k=f(()=>{"use strict";b();$();d()});export{Y as a,l as b,j as c,H as d,k as e};
