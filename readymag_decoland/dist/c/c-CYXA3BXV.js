import{a as A,b as Z}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-5JO3MCTM.js";import{a as D,d as Q}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-7YX7KLXS.js";import{b as g,c as k}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-DHS3XUYJ.js";import{a as C}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-JPR5YHB4.js";var T,$,H,y,S,N,x,q,J,K,ee,te,j,z,re,ae,ne,oe,Y,_=C(()=>{"use strict";T=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],$=e=>{let t=0;for(let r=0;r<e.length;r++){let a=e[r],n=T.indexOf(a);t=t*83+n}return t},H=(e,t)=>{var r="";for(let a=1;a<=t;a++){let n=Math.floor(e)/Math.pow(83,t-a)%83;r+=T[Math.floor(n)]}return r},y=e=>{let t=e/255;return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},S=e=>{let t=Math.max(0,Math.min(1,e));return t<=.0031308?Math.trunc(t*12.92*255+.5):Math.trunc((1.055*Math.pow(t,.4166666666666667)-.055)*255+.5)},N=e=>e<0?-1:1,x=(e,t)=>N(e)*Math.pow(Math.abs(e),t),q=class extends Error{constructor(e){super(e),this.name="ValidationError",this.message=e}},J=e=>{if(!e||e.length<6)throw new q("The blurhash string must be at least 6 characters");let t=$(e[0]),r=Math.floor(t/9)+1,a=t%9+1;if(e.length!==4+2*a*r)throw new q(`blurhash length mismatch: length is ${e.length} but it should be ${4+2*a*r}`)},K=e=>{let t=e>>16,r=e>>8&255,a=e&255;return[y(t),y(r),y(a)]},ee=(e,t)=>{let r=Math.floor(e/361),a=Math.floor(e/19)%19,n=e%19;return[x((r-9)/9,2)*t,x((a-9)/9,2)*t,x((n-9)/9,2)*t]},te=(e,t,r,a)=>{J(e),a=a|1;let n=$(e[0]),h=Math.floor(n/9)+1,s=n%9+1,d=($(e[1])+1)/166,l=new Array(s*h);for(let o=0;o<l.length;o++)if(o===0){let i=$(e.substring(2,6));l[o]=K(i)}else{let i=$(e.substring(4+o*2,6+o*2));l[o]=ee(i,d*a)}let u=t*4,m=new Uint8ClampedArray(u*r);for(let o=0;o<r;o++)for(let i=0;i<t;i++){let f=0,U=0,P=0;for(let p=0;p<h;p++)for(let c=0;c<s;c++){let b=Math.cos(Math.PI*i*c/t)*Math.cos(Math.PI*o*p/r),M=l[c+p*s];f+=M[0]*b,U+=M[1]*b,P+=M[2]*b}let L=S(f),R=S(U),B=S(P);m[4*i+0+o*u]=L,m[4*i+1+o*u]=R,m[4*i+2+o*u]=B,m[4*i+3+o*u]=255}return m},j=te,z=4,re=(e,t,r,a)=>{let n=0,h=0,s=0,d=t*z;for(let u=0;u<t;u++){let m=z*u;for(let o=0;o<r;o++){let i=m+o*d,f=a(u,o);n+=f*y(e[i]),h+=f*y(e[i+1]),s+=f*y(e[i+2])}}let l=1/(t*r);return[n*l,h*l,s*l]},ae=e=>{let t=S(e[0]),r=S(e[1]),a=S(e[2]);return(t<<16)+(r<<8)+a},ne=(e,t)=>{let r=Math.floor(Math.max(0,Math.min(18,Math.floor(x(e[0]/t,.5)*9+9.5)))),a=Math.floor(Math.max(0,Math.min(18,Math.floor(x(e[1]/t,.5)*9+9.5)))),n=Math.floor(Math.max(0,Math.min(18,Math.floor(x(e[2]/t,.5)*9+9.5))));return r*19*19+a*19+n},oe=(e,t,r,a,n)=>{if(a<1||a>9||n<1||n>9)throw new q("BlurHash must have between 1 and 9 components");if(t*r*4!==e.length)throw new q("Width and height must match the pixels array");let h=[];for(let o=0;o<n;o++)for(let i=0;i<a;i++){let f=i==0&&o==0?1:2,U=re(e,t,r,(P,L)=>f*Math.cos(Math.PI*i*P/t)*Math.cos(Math.PI*o*L/r));h.push(U)}let s=h[0],d=h.slice(1),l="",u=a-1+(n-1)*9;l+=H(u,1);let m;if(d.length>0){let o=Math.max(...d.map(f=>Math.max(...f))),i=Math.floor(Math.max(0,Math.min(82,Math.floor(o*166-.5))));m=(i+1)/166,l+=H(i,1)}else m=1,l+=H(0,1);return l+=H(ae(s),4),d.forEach(o=>{l+=H(ne(o,m),2)}),l},Y=oe});function he(e,t={}){let{dprSet:r=[2,3],...a}=t,n=[];if((r||[]).forEach(s=>{a.dpr=s;let d=O(e,a);d!==n[n.length-1]?.url&&n.push({dpr:s,url:d})}),t.asArray)return n;let h=n.map(s=>`${s.url} ${s.dpr}x`);return h.length>1?h.join(", "):void 0}function F(e){return Math.floor(Math.log10(e)*10)}var se,v,I,W,G,le,V,ie,X,O,ue,ce,de,E,me,Pe,fe=C(()=>{"use strict";Q();k();Z();_();se=!!(typeof window<"u"&&window.viewerConfig&&window.viewerConfig.homepageRewrite),v=!!(typeof window<"u"&&window.viewerConfig&&window.viewerConfig.isDownloadedSource)&&!se,I=e=>g.allowedLambdaExt.includes(e),W=e=>!!(!v&&e&&e.lambdaUrl&&I(e.type)),G=(e,t)=>{switch(t){case"video":case"slideshow":return!!(!v&&e&&e.url&&I(e.type));case"background":return!!(!v&&e&&(e.url||e.finalUrl)&&I(e.type));default:return!!(!v&&e&&(e.unscaledUrl||e.unscaledOptimizedUrl)&&I(e.type))}},le=e=>!!(e&&e.lqipUrl||W(e)),V=(e={})=>{let{width:t,height:r,cropX:a,cropY:n,cropW:h,cropH:s,originalW:d=9999,originalH:l=9999,quality:u,ext:m,scale:o,animationScale:i,isStretched:f,dpr:U,lossless:P,nearLossless:L,fit:R="none"}=e,B=typeof window<"u"&&window.devicePixelRatio||g.minDpr,p=U||(B<g.minDpr?g.minDpr:B),c=[],b=Math.max(o||1,1),M=i||1;if(!f&&t){let w=Math.min(Math.round(t*p*b*M),d);w<d&&c.push(`w=${w}`)}if(!f&&!t&&r){let w=Math.min(Math.round(r*p*b*M),l);w<l&&c.push(`h=${w}`)}if(u&&c.push(`q=${u}`),m&&c.push(`e=${m}`),P&&c.push("ll=true"),L&&c.push("nll=true"),R==="auto"&&t&&r){let w=Math.min(Math.round(r*p*b*M),l);w<l&&c.push(`h=${w}`)}return a!==void 0&&n!==void 0&&h&&s&&(h!==d||s!==l)&&(c.push(`cX=${a}`),c.push(`cY=${n}`),c.push(`cW=${h}`),c.push(`cH=${s}`)),c.length?`?${c.join("&")}`:""},ie=e=>{if(!e)return"";try{let t=new URL(e.unscaledUrl||e.url||e.unscaledOptimizedUrl||e.finalUrl||"");return`${g.readymag_lambda_host}${t.pathname}`}catch{return""}},X=e=>e?`${e.lambdaUrl||ie(e)}`:"",O=(e,t={})=>{if(!e)return"";let r={...t};return G(e)&&!W(e)&&(r.cropX=void 0,r.cropY=void 0,r.cropW=t.originalW,r.cropH=t.originalH),A.isSupported("webp")&&(r.ext="webp",e.type==="png"&&(r.nearLossless=!0)),`${X(e)}${V(r)}`};ue=(e,t={})=>{if(!e)return"";if(e.lqipUrl)return e.lqipUrl;let r={dpr:1,width:g.lqipWidth,quality:g.lqipQuality,...t};return O(e,r)},ce=(e,t={})=>{if(!e)return"";let r={width:g.THUMB_SIZE,height:g.THUMB_SIZE,quality:g.THUMB_QUALITY,fit:"auto",...t};return O(e,r)},de=async e=>{let t=new Image;t.src=e,await t.decode();let r=F(t.width),a=Math.floor(t.height*(r/t.width)),n=D.createElement("canvas");n.width=r,n.height=a;let h=n.getContext("2d");h?.drawImage(t,0,0,r,a);let s=h?.getImageData(0,0,r,a);return s?Y(s.data,s.width,s.height,4,4):""},E=new Map,me=(e,t,r)=>{let a=F(t),n=Math.floor(r*(a/t)),h=j(e,a,n);if(E.has(e))return E.get(e);let s=D.createElement("canvas");s.width=a,s.height=n;let d=s.getContext("2d"),l=d?.createImageData(a,n);if(!l)return"";l?.data.set(h),d?.putImageData(l,0,0);let u=s.toDataURL("image/jpeg");return E.set(e,u),u};Pe={isDownloadedSource:v,allowedLambdaExt:I,useLambdaUrl:W,useLambdaUrlOldProjects:G,useLqipUrl:le,getLambdaUrl:O,getOriginalLambdaUrl:X,getLambdaParams:V,getSrcset:he,getLqipUrl:ue,getThumbnailUrl:ce,encodeBlurHash:de,decodeBlurHash:me}});export{Pe as a,fe as b};