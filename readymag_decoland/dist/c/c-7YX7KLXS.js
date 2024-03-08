import{a as re,b as fn,d as un}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-JPR5YHB4.js";var mn,_t=re(()=>{"use strict";mn=document});var pn,ht=re(()=>{"use strict";pn=DOMParser});var Et=fn((Ce,we)=>{"use strict";(function(w,x){typeof Ce=="object"&&typeof we<"u"?we.exports=x():typeof define=="function"&&define.amd?define(x):(w=typeof globalThis<"u"?globalThis:w||self,w.DOMPurify=x())})(Ce,function(){"use strict";let{entries:w,setPrototypeOf:x,isFrozen:Rt,getPrototypeOf:Lt,getOwnPropertyDescriptor:ae}=Object,{freeze:g,seal:L,create:xe}=Object,{apply:le,construct:se}=typeof Reflect<"u"&&Reflect;g||(g=function(o){return o}),L||(L=function(o){return o}),le||(le=function(o,s,a){return o.apply(s,a)}),se||(se=function(o,s){return new o(...s)});let $=R(Array.prototype.forEach),Pe=R(Array.prototype.pop),G=R(Array.prototype.push),K=R(String.prototype.toLowerCase),ce=R(String.prototype.toString),Dt=R(String.prototype.match),W=R(String.prototype.replace),Nt=R(String.prototype.indexOf),Ot=R(String.prototype.trim),S=R(RegExp.prototype.test),B=yt(TypeError);function R(l){return function(o){for(var s=arguments.length,a=new Array(s>1?s-1:0),_=1;_<s;_++)a[_-1]=arguments[_];return le(l,o,a)}}function yt(l){return function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return se(l,s)}}function r(l,o){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:K;x&&x(l,null);let a=o.length;for(;a--;){let _=o[a];if(typeof _=="string"){let N=s(_);N!==_&&(Rt(o)||(o[a]=N),_=N)}l[_]=!0}return l}function bt(l){for(let o=0;o<l.length;o++)ae(l,o)===void 0&&(l[o]=null);return l}function b(l){let o=xe(null);for(let[s,a]of w(l))ae(l,s)!==void 0&&(Array.isArray(a)?o[s]=bt(a):a&&typeof a=="object"&&a.constructor===Object?o[s]=b(a):o[s]=a);return o}function Z(l,o){for(;l!==null;){let a=ae(l,o);if(a){if(a.get)return R(a.get);if(typeof a.value=="function")return R(a.value)}l=Lt(l)}function s(a){return console.warn("fallback value for",a),null}return s}let ke=g(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),fe=g(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ue=g(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),It=g(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),me=g(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Mt=g(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ve=g(["#text"]),Ue=g(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),pe=g(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Fe=g(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),J=g(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ct=L(/\{\{[\w\W]*|[\w\W]*\}\}/gm),wt=L(/<%[\w\W]*|[\w\W]*%>/gm),xt=L(/\${[\w\W]*}/gm),Pt=L(/^data-[\-\w.\u00B7-\uFFFF]/),kt=L(/^aria-[\-\w]+$/),He=L(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),vt=L(/^(?:\w+script|data):/i),Ut=L(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ze=L(/^html$/i);var Ge=Object.freeze({__proto__:null,MUSTACHE_EXPR:Ct,ERB_EXPR:wt,TMPLIT_EXPR:xt,DATA_ATTR:Pt,ARIA_ATTR:kt,IS_ALLOWED_URI:He,IS_SCRIPT_OR_DATA:vt,ATTR_WHITESPACE:Ut,DOCTYPE_NAME:ze});let Ft=function(){return typeof window>"u"?null:window},Ht=function(o,s){if(typeof o!="object"||typeof o.createPolicy!="function")return null;let a=null,_="data-tt-policy-suffix";s&&s.hasAttribute(_)&&(a=s.getAttribute(_));let N="dompurify"+(a?"#"+a:"");try{return o.createPolicy(N,{createHTML(P){return P},createScriptURL(P){return P}})}catch{return console.warn("TrustedTypes policy "+N+" could not be created."),null}};function We(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ft(),o=i=>We(i);if(o.version="3.0.8",o.removed=[],!l||!l.document||l.document.nodeType!==9)return o.isSupported=!1,o;let{document:s}=l,a=s,_=a.currentScript,{DocumentFragment:N,HTMLTemplateElement:P,Node:de,Element:Be,NodeFilter:Te,NamedNodeMap:Gt=l.NamedNodeMap||l.MozNamedAttrMap,HTMLFormElement:Wt,DOMParser:Bt,trustedTypes:Q}=l,ee=Be.prototype,Yt=Z(ee,"cloneNode"),Xt=Z(ee,"nextSibling"),jt=Z(ee,"childNodes"),ge=Z(ee,"parentNode");if(typeof P=="function"){let i=s.createElement("template");i.content&&i.content.ownerDocument&&(s=i.content.ownerDocument)}let h,Y="",{implementation:_e,createNodeIterator:Vt,createDocumentFragment:qt,getElementsByTagName:$t}=s,{importNode:Kt}=a,D={};o.isSupported=typeof w=="function"&&typeof ge=="function"&&_e&&_e.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:he,ERB_EXPR:Ee,TMPLIT_EXPR:Ae,DATA_ATTR:Zt,ARIA_ATTR:Jt,IS_SCRIPT_OR_DATA:Qt,ATTR_WHITESPACE:Ye}=Ge,{IS_ALLOWED_URI:Xe}=Ge,u=null,je=r({},[...ke,...fe,...ue,...me,...ve]),m=null,Ve=r({},[...Ue,...pe,...Fe,...J]),f=Object.seal(xe(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),X=null,Se=null,qe=!0,Re=!0,$e=!1,Ke=!0,k=!1,I=!1,Le=!1,De=!1,v=!1,te=!1,ne=!1,Ze=!0,Je=!1,en="user-content-",Ne=!0,j=!1,U={},F=null,Qe=r({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),et=null,tt=r({},["audio","video","img","source","image","track"]),Oe=null,nt=r({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),oe="http://www.w3.org/1998/Math/MathML",ie="http://www.w3.org/2000/svg",O="http://www.w3.org/1999/xhtml",H=O,ye=!1,be=null,tn=r({},[oe,ie,O],ce),V=null,nn=["application/xhtml+xml","text/html"],on="text/html",p=null,z=null,rn=s.createElement("form"),ot=function(e){return e instanceof RegExp||e instanceof Function},Ie=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(z&&z===e)){if((!e||typeof e!="object")&&(e={}),e=b(e),V=nn.indexOf(e.PARSER_MEDIA_TYPE)===-1?on:e.PARSER_MEDIA_TYPE,p=V==="application/xhtml+xml"?ce:K,u="ALLOWED_TAGS"in e?r({},e.ALLOWED_TAGS,p):je,m="ALLOWED_ATTR"in e?r({},e.ALLOWED_ATTR,p):Ve,be="ALLOWED_NAMESPACES"in e?r({},e.ALLOWED_NAMESPACES,ce):tn,Oe="ADD_URI_SAFE_ATTR"in e?r(b(nt),e.ADD_URI_SAFE_ATTR,p):nt,et="ADD_DATA_URI_TAGS"in e?r(b(tt),e.ADD_DATA_URI_TAGS,p):tt,F="FORBID_CONTENTS"in e?r({},e.FORBID_CONTENTS,p):Qe,X="FORBID_TAGS"in e?r({},e.FORBID_TAGS,p):{},Se="FORBID_ATTR"in e?r({},e.FORBID_ATTR,p):{},U="USE_PROFILES"in e?e.USE_PROFILES:!1,qe=e.ALLOW_ARIA_ATTR!==!1,Re=e.ALLOW_DATA_ATTR!==!1,$e=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ke=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,k=e.SAFE_FOR_TEMPLATES||!1,I=e.WHOLE_DOCUMENT||!1,v=e.RETURN_DOM||!1,te=e.RETURN_DOM_FRAGMENT||!1,ne=e.RETURN_TRUSTED_TYPE||!1,De=e.FORCE_BODY||!1,Ze=e.SANITIZE_DOM!==!1,Je=e.SANITIZE_NAMED_PROPS||!1,Ne=e.KEEP_CONTENT!==!1,j=e.IN_PLACE||!1,Xe=e.ALLOWED_URI_REGEXP||He,H=e.NAMESPACE||O,f=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&ot(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(f.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ot(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(f.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(f.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),k&&(Re=!1),te&&(v=!0),U&&(u=r({},ve),m=[],U.html===!0&&(r(u,ke),r(m,Ue)),U.svg===!0&&(r(u,fe),r(m,pe),r(m,J)),U.svgFilters===!0&&(r(u,ue),r(m,pe),r(m,J)),U.mathMl===!0&&(r(u,me),r(m,Fe),r(m,J))),e.ADD_TAGS&&(u===je&&(u=b(u)),r(u,e.ADD_TAGS,p)),e.ADD_ATTR&&(m===Ve&&(m=b(m)),r(m,e.ADD_ATTR,p)),e.ADD_URI_SAFE_ATTR&&r(Oe,e.ADD_URI_SAFE_ATTR,p),e.FORBID_CONTENTS&&(F===Qe&&(F=b(F)),r(F,e.FORBID_CONTENTS,p)),Ne&&(u["#text"]=!0),I&&r(u,["html","head","body"]),u.table&&(r(u,["tbody"]),delete X.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw B('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw B('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');h=e.TRUSTED_TYPES_POLICY,Y=h.createHTML("")}else h===void 0&&(h=Ht(Q,_)),h!==null&&typeof Y=="string"&&(Y=h.createHTML(""));g&&g(e),z=e}},it=r({},["mi","mo","mn","ms","mtext"]),rt=r({},["foreignobject","desc","title","annotation-xml"]),an=r({},["title","style","font","a","script"]),at=r({},[...fe,...ue,...It]),lt=r({},[...me,...Mt]),ln=function(e){let t=ge(e);(!t||!t.tagName)&&(t={namespaceURI:H,tagName:"template"});let n=K(e.tagName),c=K(t.tagName);return be[e.namespaceURI]?e.namespaceURI===ie?t.namespaceURI===O?n==="svg":t.namespaceURI===oe?n==="svg"&&(c==="annotation-xml"||it[c]):!!at[n]:e.namespaceURI===oe?t.namespaceURI===O?n==="math":t.namespaceURI===ie?n==="math"&&rt[c]:!!lt[n]:e.namespaceURI===O?t.namespaceURI===ie&&!rt[c]||t.namespaceURI===oe&&!it[c]?!1:!lt[n]&&(an[n]||!at[n]):!!(V==="application/xhtml+xml"&&be[e.namespaceURI]):!1},M=function(e){G(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch{e.remove()}},Me=function(e,t){try{G(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch{G(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!m[e])if(v||te)try{M(t)}catch{}else try{t.setAttribute(e,"")}catch{}},st=function(e){let t=null,n=null;if(De)e="<remove></remove>"+e;else{let T=Dt(e,/^[\r\n\t ]+/);n=T&&T[0]}V==="application/xhtml+xml"&&H===O&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");let c=h?h.createHTML(e):e;if(H===O)try{t=new Bt().parseFromString(c,V)}catch{}if(!t||!t.documentElement){t=_e.createDocument(H,"template",null);try{t.documentElement.innerHTML=ye?Y:c}catch{}}let d=t.body||t.documentElement;return e&&n&&d.insertBefore(s.createTextNode(n),d.childNodes[0]||null),H===O?$t.call(t,I?"html":"body")[0]:I?t.documentElement:d},ct=function(e){return Vt.call(e.ownerDocument||e,e,Te.SHOW_ELEMENT|Te.SHOW_COMMENT|Te.SHOW_TEXT,null)},sn=function(e){return e instanceof Wt&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof Gt)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},ft=function(e){return typeof de=="function"&&e instanceof de},y=function(e,t,n){D[e]&&$(D[e],c=>{c.call(o,t,n,z)})},ut=function(e){let t=null;if(y("beforeSanitizeElements",e,null),sn(e))return M(e),!0;let n=p(e.nodeName);if(y("uponSanitizeElement",e,{tagName:n,allowedTags:u}),e.hasChildNodes()&&!ft(e.firstElementChild)&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent))return M(e),!0;if(!u[n]||X[n]){if(!X[n]&&pt(n)&&(f.tagNameCheck instanceof RegExp&&S(f.tagNameCheck,n)||f.tagNameCheck instanceof Function&&f.tagNameCheck(n)))return!1;if(Ne&&!F[n]){let c=ge(e)||e.parentNode,d=jt(e)||e.childNodes;if(d&&c){let T=d.length;for(let E=T-1;E>=0;--E)c.insertBefore(Yt(d[E],!0),Xt(e))}}return M(e),!0}return e instanceof Be&&!ln(e)||(n==="noscript"||n==="noembed"||n==="noframes")&&S(/<\/no(script|embed|frames)/i,e.innerHTML)?(M(e),!0):(k&&e.nodeType===3&&(t=e.textContent,$([he,Ee,Ae],c=>{t=W(t,c," ")}),e.textContent!==t&&(G(o.removed,{element:e.cloneNode()}),e.textContent=t)),y("afterSanitizeElements",e,null),!1)},mt=function(e,t,n){if(Ze&&(t==="id"||t==="name")&&(n in s||n in rn))return!1;if(!(Re&&!Se[t]&&S(Zt,t))){if(!(qe&&S(Jt,t))){if(!m[t]||Se[t]){if(!(pt(e)&&(f.tagNameCheck instanceof RegExp&&S(f.tagNameCheck,e)||f.tagNameCheck instanceof Function&&f.tagNameCheck(e))&&(f.attributeNameCheck instanceof RegExp&&S(f.attributeNameCheck,t)||f.attributeNameCheck instanceof Function&&f.attributeNameCheck(t))||t==="is"&&f.allowCustomizedBuiltInElements&&(f.tagNameCheck instanceof RegExp&&S(f.tagNameCheck,n)||f.tagNameCheck instanceof Function&&f.tagNameCheck(n))))return!1}else if(!Oe[t]){if(!S(Xe,W(n,Ye,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&Nt(n,"data:")===0&&et[e])){if(!($e&&!S(Qt,W(n,Ye,"")))){if(n)return!1}}}}}}return!0},pt=function(e){return e.indexOf("-")>0},dt=function(e){y("beforeSanitizeAttributes",e,null);let{attributes:t}=e;if(!t)return;let n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:m},c=t.length;for(;c--;){let d=t[c],{name:T,namespaceURI:E,value:C}=d,q=p(T),A=T==="value"?C:Ot(C);if(n.attrName=q,n.attrValue=A,n.keepAttr=!0,n.forceKeepAttr=void 0,y("uponSanitizeAttribute",e,n),A=n.attrValue,n.forceKeepAttr||(Me(T,e),!n.keepAttr))continue;if(!Ke&&S(/\/>/i,A)){Me(T,e);continue}k&&$([he,Ee,Ae],gt=>{A=W(A,gt," ")});let Tt=p(e.nodeName);if(mt(Tt,q,A)){if(Je&&(q==="id"||q==="name")&&(Me(T,e),A=en+A),h&&typeof Q=="object"&&typeof Q.getAttributeType=="function"&&!E)switch(Q.getAttributeType(Tt,q)){case"TrustedHTML":{A=h.createHTML(A);break}case"TrustedScriptURL":{A=h.createScriptURL(A);break}}try{E?e.setAttributeNS(E,T,A):e.setAttribute(T,A),Pe(o.removed)}catch{}}}y("afterSanitizeAttributes",e,null)},cn=function i(e){let t=null,n=ct(e);for(y("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)y("uponSanitizeShadowNode",t,null),!ut(t)&&(t.content instanceof N&&i(t.content),dt(t));y("afterSanitizeShadowDOM",e,null)};return o.sanitize=function(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=null,n=null,c=null,d=null;if(ye=!i,ye&&(i="<!-->"),typeof i!="string"&&!ft(i))if(typeof i.toString=="function"){if(i=i.toString(),typeof i!="string")throw B("dirty is not a string, aborting")}else throw B("toString is not a function");if(!o.isSupported)return i;if(Le||Ie(e),o.removed=[],typeof i=="string"&&(j=!1),j){if(i.nodeName){let C=p(i.nodeName);if(!u[C]||X[C])throw B("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof de)t=st("<!---->"),n=t.ownerDocument.importNode(i,!0),n.nodeType===1&&n.nodeName==="BODY"||n.nodeName==="HTML"?t=n:t.appendChild(n);else{if(!v&&!k&&!I&&i.indexOf("<")===-1)return h&&ne?h.createHTML(i):i;if(t=st(i),!t)return v?null:ne?Y:""}t&&De&&M(t.firstChild);let T=ct(j?i:t);for(;c=T.nextNode();)ut(c)||(c.content instanceof N&&cn(c.content),dt(c));if(j)return i;if(v){if(te)for(d=qt.call(t.ownerDocument);t.firstChild;)d.appendChild(t.firstChild);else d=t;return(m.shadowroot||m.shadowrootmode)&&(d=Kt.call(a,d,!0)),d}let E=I?t.outerHTML:t.innerHTML;return I&&u["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&S(ze,t.ownerDocument.doctype.name)&&(E="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+E),k&&$([he,Ee,Ae],C=>{E=W(E,C," ")}),h&&ne?h.createHTML(E):E},o.setConfig=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ie(i),Le=!0},o.clearConfig=function(){z=null,Le=!1},o.isValidAttribute=function(i,e,t){z||Ie({});let n=p(i),c=p(e);return mt(n,c,t)},o.addHook=function(i,e){typeof e=="function"&&(D[i]=D[i]||[],G(D[i],e))},o.removeHook=function(i){if(D[i])return Pe(D[i])},o.removeHooks=function(i){D[i]&&(D[i]=[])},o.removeAllHooks=function(){D={}},o}var zt=We();return zt})});var At,dn,St=re(()=>{"use strict";At=un(Et()),dn=At.default});var Tn=re(()=>{"use strict";_t();ht();St()});export{mn as a,pn as b,dn as c,Tn as d};
