import{a as D,b as ce}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-LVCOVV6I.js";import{a as N,b as le}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-OOK62FBD.js";import{c as J,d as ae}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-BJERVUPP.js";import{a as ie}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-55VHH3PS.js";import{c as k,e as fe}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-7DXJRK74.js";import{q as z,s as B,v as oe}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-SU2NNAPL.js";import{g as b,z as se}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-45DYIENQ.js";import{a as te}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-5NXMLTLE.js";import{b as X}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-USIQRDD3.js";import{a as L,c as ne}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-WPVKPCDO.js";import{j as C,k as re}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-3WKB4E5O.js";import{a as x,b as ee}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-APCK7IAZ.js";import{a as Q,b as Z,d as $,f as _}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-JPR5YHB4.js";var Y=Z((ve,K)=>{"use strict";var he=4,ue=.001,de=1e-7,me=10,T=11,O=1/(T-1),pe=typeof Float32Array=="function";function q(e,i){return 1-3*i+3*e}function F(e,i){return 3*i-6*e}function U(e){return 3*e}function I(e,i,t){return((q(i,t)*e+F(i,t))*e+U(i))*e}function V(e,i,t){return 3*q(i,t)*e*e+2*F(i,t)*e+U(i)}function ye(e,i,t,s,o){var r,c,d=0;do c=i+(t-i)/2,r=I(c,s,o)-e,r>0?t=c:i=c;while(Math.abs(r)>de&&++d<me);return c}function ge(e,i,t,s){for(var o=0;o<he;++o){var r=V(i,t,s);if(r===0)return i;var c=I(i,t,s)-e;i-=c/r}return i}function Se(e){return e}K.exports=function(i,t,s,o){if(!(0<=i&&i<=1&&0<=s&&s<=1))throw new Error("bezier x values must be in [0, 1] range");if(i===t&&s===o)return Se;for(var r=pe?new Float32Array(T):new Array(T),c=0;c<T;++c)r[c]=I(c*O,i,s);function d(h){for(var n=0,a=1,l=T-1;a!==l&&r[a]<=h;++a)n+=O;--a;var m=(h-r[a])/(r[a+1]-r[a]),u=n+m*O,S=V(u,i,s);return S>=ue?ge(h,u,i,s):S===0?u:ye(h,n,n+O,i,s)}return function(n){return n===0?0:n===1?1:I(d(n),t,o)}}});var j,R,g,G,H,W,v,M,p,P,Ee,Ce,_e=Q(()=>{"use strict";j=$(te()),R=$(ie()),g=$(X()),G=$(Y());le();ae();ee();re();se();ne();fe();ce();oe();H=(e=[])=>!!e.find((t,s)=>t.use_rotate&&(s===0&&t.from_rotate!==0||t.rotate!==0)),W=(e=[])=>!!e.find((t,s)=>t.use_scale&&(s===0&&t.from_scale!==100||t.scale!==100)),v={LOOP_TYPES:{swing:"swing",repeat:"repeat"},EVENT_TYPES:["load","scroll","hover","click"],POINTER_EVENTS:["click","hover","hold","tap"],EXTERNAL_TRIGGER_BLOCK_EXCLUDE:["facebook","twitter","form","gmaps","slideshow","audio","video"],ANIMATION_BLOCK_EXCLUDE:["facebook","twitter"],POINTER_EVENTS_BLOCK_EXCLUDE:["form","gmaps","slideshow","audio","video"],DEFAULT_LOOP_TYPE:"swing",ACTIVE_TRIGGER_CLASS:"active-trigger",ACTIVE_TRIGGER_REMOVE_CLASS:"active-trigger-remove",ACTIVE_TRIGGER_HIGHLIGHT_CLASS:"active-trigger-highlight",ANIMATIONS_PLAYED_STORAGE_KEY:"animationsPlayed",DEG_TO_RAD:Math.PI/180,ANIMATION_PROPERTIES:typeof window>"u"?{}:function(){let e=!1,i="animation",t="AnimationIteration",s="AnimationEnd",o="animation-timing-function",r="@keyframes",c="transform",d="transform",h="Webkit Moz O ms Khtml".split(" "),n="webkit moz o MS \u043Ahtml".split(" "),a=document.createElement("div");if(a.style.animationName!=null)e=!0,t=t.toLowerCase(),s=s.toLowerCase();else for(var l=0;l<h.length;l++)if(a.style[h[l]+"AnimationName"]!=null){i=h[l]+"Animation",t=n[l]+t,s=n[l]+s,o="-"+h[l].toLowerCase()+"-"+o,r="@-"+h[l].toLowerCase()+"-keyframes",e=!0;break}if(a.style.transform==null){for(var l=0;l<h.length;l++)if(a.style[h[l]+"Transform"]!=null){c=h[l]+"Transform",d="-"+h[l].toLowerCase()+"-transform";break}}return a=null,{animationSupported:e,animationJS:i,animationIterationJS:t,animationEndJS:s,animationTimingFunctionCSS:o,keyframeCSS:r,transformJS:c,transformCSS:d}}(),createAnimationTimeline:function(e){return new Ee(e)},getNormalizedAnimation:function(e,i,t,s,o,r,c,d,h=!1){let n={dx:0,dy:0,from_opacity:100,opacity:100,from_rotate:0,rotate:0,from_scale:100,scale:100},a={use_move:["dx","dy"],use_opacity:["from_opacity","opacity"],use_rotate:["from_rotate","rotate"],use_scale:["from_scale","scale"]},l=g.default.extend({},b(e)),m=l.loop;l.loop=!1,l.steps=[];let u={dx:0,dy:0};for(let E=0;E<e.steps.length;E++){let f=g.default.extend({},b(e.steps[E]));!f.use_move&&f.use_bezier&&(f.use_bezier=!1),(!f.use_bezier||f.use_bezier&&!f.curve)&&(f.curve={}),h&&!f.curve.c1&&(f.curve.c1={x:n.dx??0,y:n.dy??0}),g.default.each(a,g.default.bind(function(y,A){f[A]?(n[y[0]]=f[y[0]],n[y[1]]=f[y[1]]):(f[y[0]]=n[y[0]],f[y[1]]=n[y[1]])},this)),h&&!f.curve.c2&&(f.curve.c2={x:f.dx??0,y:f.dy??0}),t&&(f.dx=0,f.rotate=0,f.from_rotate=0),s&&(f.dy=0,f.rotate=0,f.from_rotate=0),l.type=="scroll"&&!i&&E==0&&(f.delay_px=0),o!=1&&i&&(f.dx*=o,f.dy*=o,["x","y"].forEach(y=>{f.curve.c1&&(f.curve.c1[y]*=o),f.curve.c2&&(f.curve.c2[y]*=o)})),l.type=="scroll"?(f.calcedDuration=S(f,u),f.calcedDelay=f.delay_px?f.delay_px*N.normalize(o,void 0,r,c,d):0):(f.calcedDuration=f.duration||.001,f.calcedDelay=f.delay||0),f.acceleration=f.acceleration||"none",l.type==="scroll"?f.loop=!1:m&&E===0&&(f.loop=m),l.steps.push(f),u=f}return l.trigger=e.trigger&&!g.default.isArray(e.trigger)?[e.trigger]:g.default.clone(e.trigger)||[],l;function S(E,f){let y=E.dx-f.dx,A=E.dy-f.dy,w;return y!=0||A!=0?w=Math.pow(y*y+A*A,.5)/E.speed:w=300/E.speed,Math.ceil(w)}},normalizeLoopValue:function(e){return e?this.LOOP_TYPES[e]||this.DEFAULT_LOOP_TYPE:!1},isExternalTriggerAllowed:function(e){return this.isPointerEvent(e)},normalizeAnimationTriggers:function(e){return e&&!g.default.isArray(e)?[e]:g.default.clone(e)||[]},normalizeAnimations(e){return e&&!g.default.isArray(e)?[e]:e||[]},isEmpty(e){return!e||!e.type||e.type==="none"||!e.steps||!e.steps.length},isMoveOnly(e={}){return e.steps&&e.steps.length&&e.steps.every(i=>i.use_move&&!i.use_scale&&!i.use_rotate)},isNonMove(e={}){return e.steps&&e.steps.length&&e.steps.every(i=>!i.use_move)},getUuidHash(e=[]){return e.map(i=>i.UUID).filter(i=>i).sort().join(",")},isPointerEvent:function(e){return this.POINTER_EVENTS.indexOf(e)!==-1},canHaveAnimation:function(e){let i=e.attributes||e.model&&e.model.attributes||{};return i.type&&this.ANIMATION_BLOCK_EXCLUDE.indexOf(i.type)===-1},arePointerEventsAllowed:function(e){let i=e.attributes||e.model&&e.model.attributes||{};return i.type&&this.POINTER_EVENTS_BLOCK_EXCLUDE.indexOf(i.type)===-1},getTriggers(e={}){return[...this.normalizeAnimations(e.animation).reduce((t,s)=>s.trigger?[...t,...v.normalizeAnimationTriggers(s&&s.trigger)]:t,[]),...e.triggers||[]]},getBlocksContainingTriggers:function(e){let i=e.map(t=>t.id||t._id);return e.reduce((t,s)=>{let o=s instanceof R.default.View?s.model.toJSON():s;return C.viewport_listall.forEach(r=>{let c=r==="viewport_default"?o:o[r],d=v.getTriggers(c);if(d.length&&g.default.intersection(i,d).length){let h=s.id?s.id:s._id;t.indexOf(h)<0&&t.push(h)}}),t},[])},restoreTriggers:function(e,i,t){let s=[];return g.default.each(e,function(o){let r=i[o],c=g.default.find(t,{id:r});C.viewports.map(n=>n.name).forEach(n=>{let a=c.model.getAnimations(n);a.length!==0&&a.forEach(l=>{if(l.trigger.length>0){let m=this.normalizeAnimationTriggers(l&&l.trigger);l.trigger=m.reduce((u,S)=>i[S]?u.push(i[S])&&u:u,[])}})});let h=c.model.get("triggers");h&&c.model.set("triggers",h.reduce((n,a)=>i[a]?n.push(i[a])&&n:n,[]))}.bind(this)),s},isScaleUp:function(e){return!!g.default.find(e&&e.steps,function(i,t){return i.use_scale&&(t===0&&i.from_scale>100||i.scale>100)})},maxScaleAnimation:function(e){return!e||!e.steps||!e.steps.length?0:e.steps.reduce((i,t)=>Math.max(i,t.from_scale||0,t.scale||0),0)},canBeAccelerated:function(e){return!x.isDesktop||!this.isScaleUp(e)},getPermanentAnimationId:function(e,i){return e.fixed_position||e.is_full_width||e.is_full_height||e.sticked?e._id:i},getAnimationsPlayed:function(){if(g.default.isUndefined(this._animationsPlayed))try{let e=Modernizr.localstorage?window.localStorage.getItem(this.ANIMATIONS_PLAYED_STORAGE_KEY):z(this.ANIMATIONS_PLAYED_STORAGE_KEY),i=e&&JSON.parse(e);this._animationsPlayed=g.default.isArray(i)?i:[]}catch{this._animationsPlayed=[]}return this._animationsPlayed},persistHasPlayed:function(e){if(!this.hasPlayed(e))try{let i=JSON.stringify([].concat(this.getAnimationsPlayed(),e));Modernizr.localstorage?window.localStorage.setItem(this.ANIMATIONS_PLAYED_STORAGE_KEY,i):B(this.ANIMATIONS_PLAYED_STORAGE_KEY,i),delete this._animationsPlayed}catch{}},hasPlayed:function(e){return e&&this.getAnimationsPlayed().indexOf(e)!==-1},hasExpired:function(e){let i=this.normalizeAnimations(e.animation);return!!i.length&&i.every(t=>{let s=this.getPermanentAnimationId(e,t.UUID);return t.playOnce&&this.hasPlayed(s)})},isOffsetPathEnabled(e=[]){let i=L("viewer.offsetDistanceMove"),t=CSS.supports('(offset-path: path("M 0,0")) and (offset-rotate: 0deg) and (offset-distance: 1px)'),s=Modernizr["safari<=15"];return!i||!t?!1:s?!H(e)&&!W(e):!0}},M=0,p=v.ANIMATION_PROPERTIES,P=class e{constructor({id:i,steps:t,initialStep:s,force3d:o,hasScale:r,hasRotation:c,offsetPathEnabled:d}){_(this,"name");_(this,"duration");_(this,"iterationCount");_(this,"fillMode","none");_(this,"css");_(this,"offsetPathEnabled",!0);_(this,"hasRotation",!0);_(this,"hasScale",!0);_(this,"force3d");_(this,"loop");this.name=`animation_${i}`;let h=t.find(n=>n.loop);this.loop=h?v.normalizeLoopValue(h.loop):!1,this.iterationCount=this.loop?"infinite":1,this.force3d=o,this.hasRotation=c,this.hasScale=r,this.offsetPathEnabled=d,this.duration=t.reduce((n,a)=>n+a.calcedDelay+a.calcedDuration,0),this.css=e.getKeyframes({id:i,steps:t,duration:this.duration,hasRotation:this.hasRotation,hasScale:this.hasScale,force3d:this.force3d,initialStep:s,offsetPathEnabled:this.offsetPathEnabled})}getDirection(i=!1){return i?this.loop===v.LOOP_TYPES.repeat?"reverse":"alternate-reverse":this.loop===v.LOOP_TYPES.repeat?"normal":"alternate"}static setMoveOffsetDistanceFrames(i){let t=0,s={x:0,y:0};for(let o of i){if(o.use_move&&o.curve){let r={x:o.dx,y:o.dy},c=D.estimateCubicBezierLength(s,o.curve.c1,o.curve.c2,r);t+=c,s=r}o.offsetDistance=t}}static createEasing(i){return Array.isArray(i)?`cubic-bezier(${i.join(", ")})`:{none:"linear","ease-in":"ease-in","ease-out":"ease-out","ease-both":"ease-in-out"}[i]}static getKeyframes({id:i,steps:t,duration:s,hasRotation:o,hasScale:r,force3d:c,initialStep:d,offsetPathEnabled:h}={}){let n=0,a=[[0]],l=t.length;for(let u=0;u<l;u++){let S=t[u].calcedDelay/s,E=t[u].calcedDuration/s;S>=1e-4?a[a.length-1].push(n+S):S=0,n+=S+E,u==l-1&&(n=1),a.push([n])}let m=`${p.keyframeCSS} animation_${i} {
`;m+=this.getKeyframe({percents:a[0],step:{dx:d?d.dx:0,dy:d?d.dy:0,opacity:d?d.opacity:t[0].from_opacity,rotate:d?d.rotate:t[0].from_rotate,scale:d?d.scale:t[0].from_scale},easing:this.createEasing(t[0].acceleration),hasRotation:o,hasScale:r,force3d:c,offsetDistance:d?d.offsetDistance:0,offsetPathEnabled:h});for(let u=0;u<l;u++)m+=this.getKeyframe({percents:a[u+1],step:t[u],easing:t[u+1]?this.createEasing(t[u+1].acceleration):void 0,hasRotation:o,hasScale:r,force3d:c,offsetDistance:t[u].offsetDistance,offsetPathEnabled:h});return m+=`}
`,m}static getKeyframe({percents:i,step:t,easing:s,hasRotation:o,hasScale:r,force3d:c,offsetDistance:d,offsetPathEnabled:h}={}){let n="	";n+=g.default.map(i,function(l){return l*100+"%"}).join(", ")+" {";let a=this.getTransformString({x:t.dx,y:t.dy,angle:t.rotate,scale:t.scale/100,hasRotation:o,hasScale:r,isKeyframe:!0,force3d:c,offsetPathEnabled:h});return a&&(n+=`${p.transformCSS}: ${a}; `),n+="opacity: "+(t.opacity===0?0:t.opacity/100)+"; ",h&&(n+=`offset-distance: ${d}px; `),s&&(n+=p.animationTimingFunctionCSS+": "+s),n+=`}
`,n}static getTransformString({x:i,y:t,angle:s,scale:o,hasRotation:r,hasScale:c,isKeyframe:d,force3d:h,offsetPathEnabled:n}){if(n)return r||c?k({rotate:s,scale:o},h):"";let a;if(o<.001&&(o=.001),r&&d)h?a=`translate3d(${i}px, ${t}px, 0) rotate(${s}deg) scale(${o})`:a=`translate(${i}px, ${t}px) rotate(${s}deg) scale(${o})`;else{let l=o,m=0,u=",";if(s&&(s*=v.DEG_TO_RAD,l=Math.cos(s)*o,m=Math.sin(s)*o),l=Math.abs(l)<1e-6?0:l,m=Math.abs(m)<1e-6?0:m,Modernizr.edge){let y=window.RM.viewerRouter?.mag;y&&(t*=N.getRatio(y.getViewportWidth(y.viewport)))}let S=l+u+m,E=-m+u+l,f=i+u+t;h?a=`matrix3d(${S},0,0,${E},0,0,0,0,1,0,${f},0,1)`:a=`matrix(${S}${u}${E}${u}${f})`}return a}},Ee=R.default.View.extend({offsetPathEnabled:!0,hasRotation:!0,hasScale:!0,initialize:function(e){g.default.bindAll(this),g.default.extend(this,e),p.animationSupported&&(this.active=!1,this.reversed=!1,this.$el.toggleClass("force3d",!!this.force3d),this.offsetPathEnabled=v.isOffsetPathEnabled(e.steps),this.hasRotation=H(e.steps),this.hasScale=W(e.steps),this.offsetPathEnabled&&this.createOffsetPath(this.centerPoint),this.type!=="scroll"?(this.offsetPathEnabled&&P.setMoveOffsetDistanceFrames(this.steps),this.generateKeyframeAnimation(),this.duration=this.sequences.reduce((i,t)=>i+t.duration,0)):(this.duration=this.steps.reduce((i,t)=>i+t.calcedDelay+t.calcedDuration,0),this.generateFrameByFrameAnimation()))},createOffsetPath:function(e){let i=[],t=e,s={x:0,y:0};for(let r of this.steps){let c={x:r.dx??0,y:r.dy??0};r.use_move&&r.curve?(i.push(D.getBezierPath(s,r.curve.c1,r.curve.c2,c,t)),s=c):i.push(`M ${s.x+t.x} ${s.y+t.y}`)}let o=i.length?`path('${i.join(" ")}')`:void 0;this.$el[0].style.setProperty("offset-path",o),this.$el[0].style.setProperty("offset-rotate","0deg")},generateKeyframeAnimation:function(){M=M+1,this.id=M,this.sequences=this.steps.reduce((e,i,t)=>{let s=this.steps.slice(t+1),o=s.findIndex(r=>r.loop);return(t===0||i.loop)&&e.push(new P({id:`${this.id}_${e.length+1}`,steps:[i,...s.slice(0,o!==-1?o:s.length)],force3d:this.force3d,initialStep:e.length?this.steps[t-1]:void 0,hasRotation:this.hasRotation,hasScale:this.hasScale,offsetPathEnabled:this.offsetPathEnabled})),e},[]),this.loop=this.sequences.map(e=>e.loop).find(e=>e),this.isFullLoop=this.sequences.length===1&&!!this.sequences[0].loop,this.keyframesStyle=document.createElement("style"),this.keyframesStyle.innerHTML=this.sequences.reduce((e,i)=>e+i.css,""),this.$el.append(this.keyframesStyle),this.$el.on(p.animationIterationJS,e=>{e.stopPropagation();let i=this.sequences.find(t=>t.name===e.originalEvent.animationName);i&&this.onAnimationIteration(e,i)}),this.$el.on(p.animationEndJS,e=>{e.stopPropagation();let i=this.sequences.find(s=>s.name===e.originalEvent.animationName),t=this.reversed?[...this.sequences].reverse():this.sequences;i&&i.name===t[t.length-1].name&&this.onAnimationEnd(e,i)}),this.applyStepState(this.screenshotMode&&this.type==="load"?this.steps.length-1:"initial",!0)},generateFrameByFrameAnimation:function(){let e=0,i=0,t={dx:0,dy:0,opacity:this.steps[0].from_opacity,rotate:this.steps[0].from_rotate,scale:this.steps[0].from_scale,offsetDistance:0};this.frames=[],this.frames.push({ind:0,isDelay:!1,params:t});let s={x:0,y:0};for(let o=0;o<this.steps.length;o++){let r=this.steps[o];if(r.calcedDelay&&(this.frames.push({ind:e+1,isDelay:!0,params:t}),e+=r.calcedDelay),r.use_move&&r.curve&&this.offsetPathEnabled){let c={x:r.dx,y:r.dy},d=D.estimateCubicBezierLength(s,r.curve.c1,r.curve.c2,c);i+=d,s=c}t={dx:r.dx,dy:r.dy,opacity:r.opacity,rotate:r.rotate,scale:r.scale,acceleration:r.acceleration,offsetDistance:i},this.frames.push({ind:e+1,isDelay:!1,params:t}),e+=r.calcedDuration}this.seek(0)},applyStepState:function(e,i){this.$el.removeClass("invisible");let t;if(e==="initial"){let r=P.getTransformString({x:0,y:0,angle:this.steps[0].from_rotate,scale:this.steps[0].from_scale/100,hasRotation:this.hasRotation,hasScale:this.hasScale,isKeyframe:i,force3d:this.force3d,offsetPathEnabled:this.offsetPathEnabled});r&&(this.$el[0].style[p.transformJS]=r),t=this.steps[0].from_opacity,this.$el[0].style.opacity=t===0?0:t/100,this.offsetPathEnabled&&this.$el[0].style.setProperty("offset-distance","0")}else{let r=this.steps[e],c=P.getTransformString({x:r.dx,y:r.dy,angle:r.rotate,scale:r.scale/100,hasRotation:this.hasRotation,hasScale:this.hasScale,isKeyframe:i,force3d:this.force3d,offsetPathEnabled:this.offsetPathEnabled});c&&(this.$el[0].style[p.transformJS]=c),t=r.opacity,this.$el[0].style.opacity=t===0?0:t/100,this.offsetPathEnabled&&this.$el[0].style.setProperty("offset-distance",`${r.offsetDistance}px`)}let s=this.type==="hover"&&this.animationTrigger.length>0&&!this.selfTriggered,o=this.type!=="hover"&&(e!=="initial"||this.animationTrigger.length>0);t===0&&(s||o)&&this.$el.addClass("invisible")},play:function(){if(this.screenshotMode||!p.animationSupported)return;let e=p.animationJS;this.stop(),this.$el.removeClass("invisible"),this.$el.outerHeight(),Promise.race([new Promise(t=>window.requestAnimationFrame(t)),new Promise(t=>setTimeout(t,1e3/60))]).then(()=>{this.$el[0].style[e+"Name"]=this.sequences.map(t=>t.name).join(", "),this.$el[0].style[e+"Duration"]=this.sequences.map(t=>t.duration+"s").join(", "),this.$el[0].style[e+"Delay"]=this.sequences.reduce((t,s,o)=>{let r=this.sequences[o-1];return t.push(r?`${r.duration}s`:"0s")&&t},[]).join(", "),this.$el[0].style[e+"IterationCount"]=this.sequences.map(t=>t.iterationCount).join(", "),this.$el[0].style[e+"Direction"]=this.sequences.map(t=>t.getDirection()).join(", "),this.$el[0].style[e+"FillMode"]=this.sequences.map(t=>t.fillMode).join(", "),this.$el[0].style[e+"PlayState"]=""}),this.active=!0,this.reversed=!1},reverse:function(){if(this.screenshotMode||!p.animationSupported)return;let e=p.animationJS;this.stop(),this.$el.removeClass("invisible"),this.$el.outerHeight();let i=[...this.sequences].reverse().filter(t=>t.loop!==v.LOOP_TYPES.swing);this.$el[0].style[e+"Name"]=i.map(t=>t.name).join(", "),this.$el[0].style[e+"Duration"]=i.map(t=>t.duration+"s").join(", "),this.$el[0].style[e+"Delay"]=i.reduce((t,s,o)=>{let r=i[o-1];return t.push(r?`${r.duration}s`:"0s")&&t},[]).join(", "),this.$el[0].style[e+"IterationCount"]=i.map(()=>1).join(", "),this.$el[0].style[e+"Direction"]=i.map(t=>t.getDirection(!0)).join(", "),this.$el[0].style[e+"FillMode"]=i.map(t=>t.fillMode).join(", "),this.$el[0].style[e+"PlayState"]="",this.active=!0,this.reversed=!0},stop:function(){this.$el.removeClass("invisible"),this.$el[0].style[p.animationJS]="",this.active=!1,this.reversed=!1},onAnimationEnd:function(){this.reversed=!this.reversed,this.active=!1,this.$el[0].style[p.animationJS]="",J.forceRepaint(this.$el),this.applyStepState(this.reversed?this.steps.length-1:"initial",!0),this.trigger("full-cycle-end")},onAnimationIteration:function(e,i){this.loop===v.LOOP_TYPES.swing?Math.round(e.originalEvent.elapsedTime/i.duration)%2?this.reversed=!0:(this.reversed=!1,this.trigger("full-cycle-end")):this.trigger("full-cycle-end")},resume:function(){this.screenshotMode||p.animationSupported&&(x.isDesktop?this.$el[0].style[p.animationJS+"PlayState"]="running":this.play(),this.active=!0)},pause:function(){p.animationSupported&&(x.isDesktop?this.$el[0].style[p.animationJS+"PlayState"]="paused":this.stop(),this.active=!1)},seek:function(e){if(!p.animationSupported)return;e=Math.max(Math.min(e,this.duration),0);let i=this.frames.length,t;for(t=0;t<i&&!(this.frames[t].ind>e);t++);t--;let s,o,r;this.frames[t].isDelay?s=d(this.frames[t].params,this.frames[t].params,0,1):(o=t?this.frames[t].ind-1:0,r=t==i-1?this.duration:this.frames[t+1].ind-1,s=d(this.frames[t?t-1:0].params,this.frames[t].params,e-o,r-o+1));let c=P.getTransformString({x:s.dx,y:s.dy,angle:s.rotate,scale:s.scale/100,hasRotation:this.hasRotation,hasScale:this.hasScale,isKeyframe:!1,force3d:this.force3d,offsetPathEnabled:this.offsetPathEnabled});c&&(this.$el[0].style[p.transformJS]=c),this.offsetPathEnabled&&this.$el[0].style.setProperty("offset-distance",`${s.offsetDistance}px`),this.$el[0].style.opacity=s.opacity==0?0:s.opacity/100,this.$el.toggleClass("invisible",s.opacity==0);function d(n,a,l,m){if(l==0)return n;if(l==m-1)return a;let u=l/(m-1);return{dx:n.dx===a.dx?n.dx:h(n.dx,a.dx,u,a.acceleration),dy:n.dy===a.dy?n.dy:h(n.dy,a.dy,u,a.acceleration),opacity:n.opacity===a.opacity?n.opacity:h(n.opacity,a.opacity,u,a.acceleration),rotate:n.rotate===a.rotate?n.rotate:h(n.rotate,a.rotate,u,a.acceleration),scale:n.scale===a.scale?n.scale:h(n.scale,a.scale,u,a.acceleration),offsetDistance:n.offsetDistance===a.offsetDistance?n.offsetDistance:h(n.offsetDistance,a.offsetDistance,u,a.acceleration)}}function h(n,a,l,m){let u;return Array.isArray(m)?u=(0,G.default)(...m)(l):!m||m==="none"?u=l:m==="ease-in"?u=l*l:m==="ease-out"?u=l*(2-l):u=l<.5?l*l*2:2*l*(2-l)-1,n+(a-n)*u}},destroy:function(){this.$el.off(p.animationIterationJS,this.onAnimationIteration),this.$el.off(p.animationEndJS,this.onAnimationEnd),this.$el[0].style[p.animationJS]="",this.$el[0].style[p.transformJS]="",this.$el[0].style.opacity="",this.$el.removeClass("force3d"),this.keyframesStyle&&(0,j.default)(this.keyframesStyle).remove(),this.reversed=!1,this.active=!1}}),Ce=v});export{Ce as a,_e as b};
