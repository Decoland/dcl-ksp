import{a as l,b as S}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-HHYXIBPX.js";import{g as e,h}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-UWYBG7UU.js";import{e as x}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-MJ34YYKA.js";import{D as t,E as s,F as m,y as a}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-U4GS6NTD.js";import{a as v}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-IFNIQOEY.js";import{a as i,d as u}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-JPR5YHB4.js";function n(){return t("style",{dangerouslySetInnerHTML:{__html:l(`
          html, body {
            width: 100%;
            height: 100%;
          }

          body {
            margin: 0;
            padding: 0;
            font-family: ${e.fonts.main};
            color: ${e.colors.light.textPrimary};
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            -webkit-font-smoothing: antialiased;
          }

          * ::selection {
            background-color: ${e.colors.light.gray};
          }

          a, button, label, div, span, input, *:hover {
            -webkit-tap-highlight-color: rgba(0,0,0,0);
          }

          h1, h2, h3, h4, h5 {
            margin: 0;
          }
        `)}})}var p=i(()=>{"use strict";S();h();m()});function k({defaultTheme:d,children:g,overrideTheme:c,withGlobalStyles:b=!0}){let[r,y]=(0,o.useState)(d??"light"),T=(0,o.useMemo)(()=>c??{colors:e.colors[r],breakpoints:e.breakpoints,fonts:e.fonts},[r]);return t(M.Provider,{value:{themeType:r,setThemeType:y},children:s(a,{theme:T,children:[b&&t(n,{}),g]})})}var o,M,f=i(()=>{"use strict";o=u(v());x();h();p();m();M=(0,o.createContext)({themeType:"light",setThemeType:()=>{}})});var P=i(()=>{"use strict";f()});export{k as a,P as b};
