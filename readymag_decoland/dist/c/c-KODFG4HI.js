import{a as st,b as Bt}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-2ZCUOARI.js";import{A as Dt,C as k,D as $,F as nt,G as it,I as N,J as Rt,d as G,e as Pt,f as j,h as K,i as R,j as J,k as Q,m as Z,n as tt,p as et,q as ot,u as It,x as g}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-5U7VAUQ6.js";import{b as B}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-H3ILHJQN.js";import{c as V,f as Y,i as q,n as X,t as U}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-LCYIYNO6.js";import{a as Nt}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-SQKOFC7D.js";import{a as rt,c as Ct}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-SHDW6QEL.js";import{a as lt,b as Ut}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-HHYXIBPX.js";import{a as vt}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-5YHS57LW.js";import{D as L,F as I}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-U4GS6NTD.js";import{a as W}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-IFNIQOEY.js";import{a as m,b as D}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-ZACCG5AA.js";import{b as E,c as Tt}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-DHS3XUYJ.js";import{a as h,d as P}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-JPR5YHB4.js";var at,ct,Wt,O,pt=h(()=>{"use strict";D();at=({userId:t})=>m.get(`/api/list-styles/global/${t}`),ct=({projectId:t})=>m.get(`/api/list-styles/project/${t}`),Wt=({userId:t,styles:n})=>m.put(`/api/list-styles/global/${t}`,{styles:n}),O=({projectId:t,styles:n})=>m.put(`/api/list-styles/project/${t}`,{styles:n})});var yt,dt,Vt,A,St=h(()=>{"use strict";D();yt=({userId:t})=>m.get(`/api/link-styles/global/${t}`),dt=({projectId:t})=>m.get(`/api/link-styles/project/${t}`),Vt=({userId:t,styles:n})=>m.put(`/api/link-styles/global/${t}`,{styles:n}),A=({projectId:t,styles:n})=>m.put(`/api/link-styles/project/${t}`,{styles:n})});var mt,gt,Xt,z,ft=h(()=>{"use strict";D();mt=({userId:t})=>m.get(`/api/text-styles/global/${t}`),gt=({projectId:t})=>m.get(`/api/text-styles/project/${t}`),Xt=({userId:t,styles:n})=>m.put(`/api/text-styles/global/${t}`,{styles:n}),z=({projectId:t,styles:n})=>m.put(`/api/text-styles/project/${t}`,{styles:n})});function H(){return Ot.map(t=>({...t,name:`style-${st()}`}))}var Ot,te,ut=h(()=>{"use strict";Bt();R();Ot=[{label:"H1",tag:"h1",cssProperties:{color:"22222264",fontFamily:"Roboto",fontStyle:"normal",textAlign:"left",fontSize:48,fontWeight:700,letterSpacing:0,lineHeight:60,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}},{label:"H2",tag:"h2",cssProperties:{color:"22222264",fontFamily:"Georgia",fontStyle:"normal",textAlign:"left",fontSize:24,fontWeight:400,letterSpacing:0,lineHeight:30,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}},{label:"Text",tag:"p",cssProperties:{color:"22222264",fontFamily:"Georgia",fontStyle:"normal",textAlign:"left",fontSize:18,fontWeight:400,letterSpacing:0,lineHeight:23,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}},{label:"Caption",tag:"p",cssProperties:{color:"22222232",fontFamily:"Georgia",fontStyle:"italic",textAlign:"left",fontSize:14,lineHeight:18,letterSpacing:0,fontWeight:400,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}}];te=[{label:"List item",cssProperties:{color:"22222264",fontFamily:j.fontFamily,fontStyle:j.fontStyle,textAlign:"left",fontSize:j.fontSize,fontWeight:Number(j.fontWeight),letterSpacing:0,lineHeight:j.lineHeight,paddingRight:0,paddingLeft:0,width:26}}]});var _,xt=h(()=>{"use strict";U();_=(t,n)=>t?`${t}${V(typeof n=="number"?n:100)}`:""});var M,ht,kt,$t=h(()=>{"use strict";Ct();R();B();U();Tt();xt();M=(t,n)=>{let i=s=>{switch(s){case"none":return"None";case"dotted":return"Dotted";case"dashed":return"Dashed";case"solid":return"Solid";default:break}},o=s=>n?`${n}-${s}`:s,p=typeof t[o("color")]<"u"?t[o("color")]:t.color,l=typeof t[o("opacity")]<"u"?t[o("opacity")]:t.opacity,y=typeof t[o("u-color")]<"u"?t[o("u-color")]:t["u-color"],f=typeof t[o("u-opacity")]<"u"?t[o("u-opacity")]:t["u-opacity"],x=typeof t[o("u-size")]<"u"?t[o("u-size")]:t["u-size"],d=typeof t[o("u-offset")]<"u"?t[o("u-offset")]:t["u-offset"],w=typeof t[o("u-style")]<"u"?t[o("u-style")]:t["u-style"];return{textColor:_(String(p==="inherit"?t.color:p),Number(l==="inherit"?t.opacity:l)),color:_(String(y==="inherit"?t["u-color"]:y),Number(f==="inherit"?t["u-opacity"]:f)),size:Number(x==="inherit"?t["u-size"]:x),padding:Number(d==="inherit"?t["u-offset"]:d),type:i(w)}},ht=t=>t.map(i=>{let{_name:o,_caption:p}=i,l=M(i),y=M(i,"hover"),f=M(i,"current");return{name:o,label:p,style:{link:l,hover:y,current:f}}}),kt=t=>{let n=["none",0,"baseline"],i=["opacity"];return t.map(o=>{let{_name:p,_caption:l,tag:y,_sort:f,...x}=o,d=Object.keys(x).reduce((s,c)=>{let a=rt(c),r=x[c];if(i.includes(c)||n.includes(r))return{...s};if(a==="textAlign"&&r==="start")r="left";else if(a==="color"){let e=Number(x.opacity),S=e>0?parseFloat((e/100).toFixed(2)):1,u=X(String(r),S);r=q(u)}else a.includes("padding")?r=Number(r):a==="fontWeight"&&r==="normal"&&(r=j.fontWeight);return{...s,[a]:r}},{});return d.paddingLeft=d.paddingLeft||0,d.paddingRight=d.paddingRight||0,d.paddingTop=d.paddingTop||0,d.paddingBottom=d.paddingBottom||0,{name:p,label:l,tag:y||E.AVAILABLE_TEXT_TAGS[0],cssProperties:d}})}});var C,bt=h(()=>{"use strict";Pt();it();R();C={...G,...nt,...K}});function zt(t){if(!t)return L("div",{style:{width:"100%"}});let n=(0,wt.useMemo)(()=>T(t),[t.type,t.size,t.color,t.padding]);return L("div",{style:{...n,width:"100%"}})}var wt,T,Le,Lt=h(()=>{"use strict";wt=P(W());U();B();I();T=t=>{let{type:n="None",color:i="00000064",size:o=1,padding:p=0}=t||{},{r:l,g:y,b:f,a:x}=Y(i),d=`rgba(${l}, ${y}, ${f}, ${x})`,w="repeat-x",s=o+p,c=s>0?"0 100%":`0 ${100+s}%`,a={textDecoration:"none",paddingBottom:Math.max(0,s)};switch(n){case"Solid":return{...a,background:`linear-gradient(to right, ${d} 0%, ${d} 100%) ${c}/1px ${o}px ${w}`};case"Dotted":return{...a,background:`linear-gradient(to right, ${d} 0%, ${d} 50%, transparent 50%, transparent 100%) ${c}/${o*2}px ${o}px ${w}`};case"Dashed":return{...a,background:`linear-gradient(to right, ${d} 0%, ${d} 66.6666%, transparent 66.6666%, transparent 100%) ${c}/${o*3}px ${o}px ${w}`};default:return{...a,background:"none"}}};Le=zt});function jt({mode:t}){let[n,i]=J(),[o,p]=Z(),[l,y]=et();(0,b.useEffect)(()=>{if(t==="constructor"){let s=[],c=[],a=[];if(!n.project.length){let e=window.ServerData.textStyles,S=H();if(!e||!e.project||!e.project.length){let u=window.ServerData?.editParams?.paragraph_styles;u&&u.length&&(S=kt(u))}s=e?.project&&e?.project.length?e.project:S,i({global:e?.global||[],project:s})}if(!o.project.length){let e=window.ServerData.linkStyles,S=[N];if(!e||!e.project||!e.project.length){let u=window.ServerData.editParams&&window.ServerData.editParams.link_styles;u&&u.length&&(S=ht(u))}c=e?.project&&e.project.length?e.project:S,p({global:e?.global||[],project:c})}if(!l.project.length){let e=window.ServerData.listStyles;a=e?.project&&e?.project.length?e.project:[],y({global:e?.global||[],project:a})}let r=[];s.length&&!(0,v.default)(s,window.ServerData.textStyles?.project||[])&&r.push(z({styles:s,projectId:window.ServerData.projectId})),c.length&&!(0,v.default)(c,window.ServerData.linkStyles?.project||[])&&r.push(A({styles:c,projectId:window.ServerData.projectId})),a.length&&!(0,v.default)(a,window.ServerData.listStyles?.project||[])&&r.push(O({styles:a,projectId:window.ServerData.projectId})),r.length&&Promise.all(r)}if(t==="viewer"||t==="screenshoter"){let s=t==="viewer",c=s?window.ServerData?.mags?.mag?.textStyles||window.RM?.viewerRouter?.mag?.textStyles:window.ServerData?.mag?.textStyles;c&&i({global:c?.global?.length?c.global:[],project:c?.project?.length?c.project:[]});let a=s?window.ServerData?.mags?.mag?.linkStyles||window.RM?.viewerRouter?.mag?.linkStyles:window.ServerData?.mag?.linkStyles;a&&p({global:a?.global?.length?a.global:[],project:a?.project?.length?a.project:[]});let r=s?window.ServerData?.mags?.mag?.listStyles||window.RM?.viewerRouter?.mag?.listStyles:window.ServerData?.mag?.listStyles;r&&y({global:r?.global?.length?r.global:[],project:r?.project?.length?r.project:[]})}},[]);let f=(0,b.useMemo)(()=>Object.keys(C).map(c=>C[c].style).join(" "),[C]),x=(0,b.useMemo)(()=>{let s=r=>{let e=Mt(r.cssProperties);return`${e.textAlign}`==="justify"&&(e.whiteSpace="normal"),` .${r.name} { ${g(e)} } `},c=n.global.map(s),a=n.project.map(s);return[...c,...a].join(" ")},[n]),d=(0,b.useMemo)(()=>{let s=e=>{let S={...e.cssProperties};return typeof S.width=="number"&&(S.minWidth=S.width),S.lineHeight&&delete S.lineHeight,`
        .${e.name}-preview {
          ${g(e.cssProperties)}
        }
        .${e.name}.edit-mode .editor-block-wrapper {
          display: ${!e.listPosition||e.listPosition==="inside"?"block":"flex"};
        }
        .${e.name}.edit-mode .editor-block-wrapper:before, .${e.name}.edit-mode div[data-offset-key]:before {
          display: inline-block;
          ${g(S)}
          ${!e.listPosition||e.listPosition==="inside"?"line-height: 1;":""}
          ${e.baselineShift?`transform: translateY(${e.baselineShift}px);`:""}
        }
        .${e.name}.view-mode {
          display: ${!e.listPosition||e.listPosition==="inside"?"list-item":"flex"};
        }
        .${e.name}.view-mode:before {
          display: inline-block;
          ${g(S)}
          ${!e.listPosition||e.listPosition==="inside"?"line-height: 1;":""}
          ${e.baselineShift?`transform: translateY(${e.baselineShift}px);`:""}
        }

        .unordered-list-item.${e.name}.edit-mode div[data-offset-key]:before {
          content: "${e.markerContent||"\u2022"}\\00a0";
          display: ${!e.listPosition||e.listPosition==="inside"?"inline-block":"none"};
          white-space: nowrap;
        }
        .unordered-list-item.${e.name}.edit-mode .editor-block-wrapper:before {
          content: "${e.markerContent||"\u2022"}\\00a0";
          display: ${e.listPosition&&e.listPosition==="outside"?"inline-block":"none"};
          white-space: nowrap;
        }

        .ordered-list-item.${e.name}.edit-mode div[data-offset-key]:before {
          counter-increment: ${k};
          content: counter(${k})".";
          display: ${!e.listPosition||e.listPosition==="inside"?"inline-block":"none"};
          white-space: nowrap;
        }

        .ordered-list-item.${e.name}.edit-mode .editor-block-wrapper:before {
          counter-increment: ${k};
          content: counter(${k})".";
          display: ${e.listPosition&&e.listPosition==="outside"?"inline-block":"none"};
          white-space: nowrap;
        }

        .unordered-list-item .${e.name}.view-mode:before {
          content: "${e.markerContent||"\u2022"}\\00a0";
        }`},c=`
      .${$}.edit-mode .editor-block-wrapper {
        display: flex;
      }
      .${$}.view-mode {
        display: flex;
      }
      .${$}.view-mode:before {
        display: inline-block;
      }

      .unordered-list-item.${$}.edit-mode .editor-block-wrapper:before {
        content: "\u2022\\00a0";
        display: inline-block;
      }
      .unordered-list-item.${$}.edit-mode div[data-offset-key]:before {
        content: "\u2022\\00a0";
        display: none;
      }

      .ordered-list-item.${$}.edit-mode .editor-block-wrapper:before {
        counter-increment: ${k};
        content: counter(${k})".";
        display: inline-block;
        white-space: nowrap;
      }
      .ordered-list-item.${$}.edit-mode div[data-offset-key]:before {
        counter-increment: ${k};
        content: counter(${k})".";
        display: none;
        white-space: nowrap;
      }

      .unordered-list-item .${$}.view-mode:before {
        content: "\u2022\\00a0";
      }`,a=l.global.map(s),r=l.project.map(s);return[c,...a,...r].join(" ")},[l]),w=(0,b.useMemo)(()=>{let s=r=>{let e=r.style?.link?`
        .${r.name} {
          ${g(T(r.style.link))}
          ${g({color:r.style.link.textColor})}
        }

        .${r.name} * {
          ${g({color:r.style.link.textColor})}
        }`:"",S=r.style?.hover?`
        .${r.name} .hover, .${r.name}:hover {
          ${g(T(r.style.hover))}
          ${g({color:r.style.hover.textColor},!0)}
        }

        .${r.name} .hover *, .${r.name}:hover * {
            ${g({color:r.style.hover.textColor},!0)}
        }`:"",u=r.style?.current?`
        .${r.name}.current {
          ${g(T(r.style.current))}
          ${g({color:r.style.current.textColor})}
        }

        .${r.name}.current * {
          ${g({color:r.style.current.textColor})}
        }`:"";return`
        ${e}
        ${S}
        ${u}
      `},c=o.global.map(s),a=o.project.map(s);return[...c,...a].join(" ")},[o]);return L(_t,{blockStyles:f,textStyleSheet:x,linkStyleSheet:w,listStyleSheet:d})}var b,v,F,Ht,_t,Mt,Ke,Ve,Ft=h(()=>{"use strict";b=P(W()),v=P(Nt()),F=P(vt());Ut();pt();St();ft();ut();$t();Rt();It();bt();Dt();Lt();B();it();I();Ht=async()=>{let t=window.RM.constructorRouter.mag.get("_id"),n=window.RM.constructorRouter.me&&window.RM.constructorRouter.me.get("_id");if(!t||!n)throw new Error("Cannot load text styles");let[{data:i},{data:o},{data:p},{data:l},{data:y},{data:f}]=await Promise.all([gt({projectId:t}),mt({userId:n}),dt({projectId:t}),yt({userId:n}),ct({projectId:t}),at({userId:n})]);return{textStyles:{global:o&&o.length?o:[],project:i&&i.length?i:H()},linkStyles:{global:l&&l.length?l:[],project:p&&p.length?p:[N]},listStyles:{global:f&&f.length?f:[],project:y&&y.length?y:[]}}},_t=(0,b.memo)(t=>L("style",{dangerouslySetInnerHTML:{__html:lt(`
          ${t.blockStyles}
          ${t.textStyleSheet}
          ${t.linkStyleSheet}
          ${t.listStyleSheet}
        `)}}),(t,n)=>(0,v.default)(t,n)),Mt=t=>Object.keys(t).reduce((n,i)=>{let o=t[i];return typeof o=="string"&&`${o}`.includes("(")&&!String(o).includes(")")&&(o=`${o})`),o&&i==="opacity"&&parseInt(String(o))>1&&(o=parseInt(`${o}`)/100),{...n,[i]:o}},{});Ke=t=>{let n="text-global-styles",i=document.querySelector(`#${n}`);i?F.default.render(L(jt,{mode:t}),i):(i=document.createElement("div"),i.id=n,document.body.appendChild(i),F.default.render(L(jt,{mode:t}),i))},Ve=async({newTextStyles:t,newLinkStyles:n,newListStyles:i})=>{let o=await Ht();if(t&&t.length){let p=t.filter(l=>!o.textStyles.project.some(y=>y.name===l.name));if(p.length){let l=[...o.textStyles.project,...p];Q({global:o.textStyles.global,project:l}),z({styles:l,projectId:window.ServerData.projectId})}}if(i&&i.length){let p=i.filter(l=>!o.listStyles.project.some(y=>y.name===l.name));if(p.length){let l=[...o.listStyles.project,...p];ot({global:o.listStyles.global,project:l}),O({styles:l,projectId:window.ServerData.projectId})}}if(n&&n.length){let p=n.filter(l=>!o.linkStyles.project.some(y=>y.name===l.name));if(p.length){let l=[...o.linkStyles.project,...p];tt({global:o.linkStyles.global,project:l}),A({styles:l,projectId:window.ServerData.projectId})}}}});export{Xt as a,z as b,ft as c,Wt as d,O as e,pt as f,Vt as g,A as h,St as i,_ as j,xt as k,ht as l,kt as m,$t as n,Le as o,Lt as p,Ht as q,jt as r,Ke as s,Ve as t,Ft as u};
