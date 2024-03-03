import{a as o,b as x}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-DYZTW7WS.js";import{b as p,e as h}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-YO7WEKGL.js";import{v as I}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-KYPTAB4E.js";import{a as w,b as v}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-HHYXIBPX.js";import{c as f}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-MJ34YYKA.js";import{D as r,E as n,F as g}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-U4GS6NTD.js";import{a as L}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-IFNIQOEY.js";import{b as y,c as B}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-DHS3XUYJ.js";import{a as c,d as $}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-JPR5YHB4.js";function T({url:i,label:a,color:l="white"}){let[s,e]=(0,S.useState)(!1);return r(p,{onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),as:"a",href:i,color:s?"orange":l,fontFamily:"Graphik",fontWeight:400,fontSize:16,letterSpacing:-.04,lineHeight:"24px",display:"inline-block",textDecoration:"none",fontStyle:"normal",children:a})}function m({items:i,width:a,title:l,isMobile:s,linkColor:e="white",listTitleColor:t="darkGray"}){return n(o,{width:a,children:[r(o,{borderBottom:"1px solid rgba(128, 128, 128, 0.24)",paddingBottom:"1.5rm",marginBottom:"1.5rm",children:r(p,{fontFamily:"Graphik",fontWeight:400,fontSize:16,letterSpacing:-.04,lineHeight:"24px",color:t,fontStyle:"normal",children:l})}),r(o,{...i.length>1&&!s?{display:"flex",alignItems:"flex-start",justifyContent:"space-between"}:{},children:i.map((d,b)=>r(o,{marginBottom:s&&d.mobileSeparator?36:void 0,children:d.items.map((u,C)=>r(o,{marginRight:i.length-1===b&&!s?30:void 0,children:r(T,{color:e,url:u.url,label:u.label})},`ul-${b}-li-${C}`))},`ul-${b}`))})]})}var S,k=c(()=>{"use strict";x();h();S=$(L());g()});function U({isFullSize:i=!1,linkColor:a,listTitleColor:l="darkGray",style:s}){let e=y.readymag_host,t=!i;return n(o,{backgroundColor:"rgb(40, 40, 40)",height:"100%",width:"100%",css:f`
        ${s}
      `,children:[r("style",{dangerouslySetInnerHTML:{__html:G}}),n(o,{margin:"0 auto",width:"100%",maxWidth:t?"none":1024,height:"100%",padding:t?"36px 20px 36px":"58px 20px 36px",children:[n(o,{alignItems:"flex-start",justifyContent:"space-between",display:t?"block":"flex",children:[r(m,{linkColor:a,listTitleColor:l,title:"company",isMobile:t,width:t?"100%":185,items:[{mobileSeparator:!0,items:[{label:"about",url:`${e}/about/`},{label:"reviews",url:`${e}/reviews/`},{label:"terms of service",url:`${e}/readymag/terms-and-privacy/`},{label:"privacy policy",url:`${e}/readymag/terms-and-privacy/2/`},{label:"cookie policy",url:`${e}/readymag/terms-and-privacy/cookie_policy/`},{label:"we are hiring",url:`${e}/readymag/we-are-hiring/`}]}]}),r(m,{linkColor:a,listTitleColor:l,title:"product",isMobile:t,width:t?"100%":185,items:[{mobileSeparator:!0,items:[{label:"product updates",url:"https://blog.readymag.com/tag/updates/"},{label:"referral program",url:`${e}/referral/`},{label:"integrations",url:"https://readymag.com/readymag/integrations/"},{label:"community",url:"https://forum.readymag.com/"},{label:"help",url:"https://help.readymag.com/"}]}]}),r(m,{linkColor:a,listTitleColor:l,title:"case studies",isMobile:t,width:t?"100%":185,items:[{mobileSeparator:!0,items:[{label:"design studio",url:`${e}/no-code-website-builder-designers`},{label:"customer stories",url:`${e}/customers/main`},{label:"portfolio",url:`${e}/portfolio`},{label:"editorial",url:`${e}/editorial`},{label:"presentations",url:`${e}/presentations`}]}]}),r(m,{linkColor:a,listTitleColor:l,title:"readymag editorials",isMobile:t,width:t?"100%":185,items:[{mobileSeparator:!0,items:[{label:"design almanac",url:`${e}/almanac`},{label:"design stories",url:`${e}/designstories`},{label:"enso",url:"https://enso.readymag.com/"},{label:"designing women",url:"https://designingwomen.readymag.com/"},{label:"websites of the year",url:`${e}/websites-of-the-year/`},{label:"web specials",url:`${e}/special-projects/`}]}]}),r(m,{linkColor:a,listTitleColor:l,title:"explore",isMobile:t,width:t?"100%":185,items:[{mobileSeparator:!0,items:[{label:"newsletter",url:"https://readymag.com/subscribe"},{label:"youtube",url:"https://www.youtube.com/channel/UCz3Ylsb-JuM76cS1nsfyCLw"},{label:"blog",url:"https://blog.readymag.com"},{label:"tiktok",url:"https://www.tiktok.com/@readymag"},{label:"instagram",url:"https://www.instagram.com/readymag/"},{label:"twitter",url:"https://twitter.com/readymag"},{label:"pinterest",url:"https://www.pinterest.com/readymagpins/boards/"},{label:"are.na",url:"https://www.are.na/readymag"},{label:"dribbble",url:"https://dribbble.com/readymag"}]}]})]}),r(o,{alignItems:"flex-start",display:t?"block":"flex",children:r(o,{width:t?"100%":252,children:n(p,{fontFamily:"Graphik",color:l,fontWeight:400,fontSize:12,letterSpacing:-.04,lineHeight:t?"1":"24px",children:["\xA9 ",new Date().getFullYear()," Readymag Inc."]})})})]})]})}var G,M=c(()=>{"use strict";x();h();I();v();B();k();g();G=w(`
  @font-face {
    font-family: "Graphik";
    src:  url("/fonts/typetoday/GraphikLC-Regular-Web.woff2?domain=readymag.com&md5=mGllDsB7vCzTn-Q_QTQHVQ") format("woff2"),
          url("/fonts/typetoday/GraphikLC-Regular-Web.woff?domain=readymag.com&md5=-1ost7inN1p8byIBXUq0rQ") format("woff");
    font-style: normal;
    font-weight: 400;
  }
`)});export{U as a,M as b};
