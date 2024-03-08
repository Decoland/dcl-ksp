import{Bb as re,ra as E,sa as P,ta as R}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-6BD5TTOJ.js";import{B as S,C as L,G as ee}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-5U7VAUQ6.js";import{b as te}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-H3ILHJQN.js";import{f as g,t as Y}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-LCYIYNO6.js";import{a as y,b as X}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-OOK62FBD.js";import{b as N,f as V,j as ae}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-7P3Y4BU3.js";import{a as O,b as ne}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-DYZTW7WS.js";import{a as c,e as ie}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-7DXJRK74.js";import{c as C,d as _}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-USQQUCAC.js";import{r as T,v}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-KYPTAB4E.js";import{a as D,h as oe}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-UWYBG7UU.js";import{c as B}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-MJ34YYKA.js";import{D as a,F as f}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-U4GS6NTD.js";import{a as H}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-IFNIQOEY.js";import{a as h,c as J}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-WPVKPCDO.js";import{k as I}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-3WKB4E5O.js";import{a as k,d as G}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-JPR5YHB4.js";var W,se,le,Ee,pe=k(()=>{"use strict";W=G(H());ne();v();oe();_();te();Y();X();I();J();ie();ae();f();se=4,le=(0,W.forwardRef)(({textDirection:t,autosize:r,columns:e,verticalAlign:u,bgColor:d,shouldShowSelectionBorder:x,scale:i,viewport:n,viewerOptions:m,children:U,useBaseline:j,isEditMode:z,selectionColor:s,disableSelectionHighlight:$,pointerEvents:A},F)=>{let{bg:K,selectionBg:b,selectionTextColor:w}=C(()=>{let o=d?g(d):void 0,Q=o?`rgba(${o.r}, ${o.g}, ${o.b}, ${o.a})`:void 0,l=s?.backgroundColor?g(s.backgroundColor):void 0,Z=$?"transparent":l?`rgba(${l.r}, ${l.g}, ${l.b}, ${l.a})`:void 0,p=s?.textColor?g(s.textColor):void 0,q=$?"inherit":p?`rgba(${p.r}, ${p.g}, ${p.b}, ${p.a})`:void 0;return{bg:Q,selectionBg:Z,selectionTextColor:q}},[d,$,s]);return a(O,{display:"flex",ref:F,height:!r||e&&e.count>1?"100%":"auto",flexDirection:"column",justifyContent:!u||u==="top"?"flex-start":"flex-end",backgroundColor:K,pointerEvents:A,css:B`
          // Цвет рамки выделенного блока
          --editor-border-color: ${x?D.blue:"transparent"};

          direction: ${t};

          // При включенных колонках обязательно устанавливаем hidden, чтобы большое кол-во контента
          // не выходило за пределы контейнера
          overflow: ${e&&e.count>1||!r?"hidden":"visible"};
          ${z?`padding: 0 ${se}px;`:""};

          // Для вьювера
          // Сбрасывает зум у текста, и вместо него применяет трансформ.
          // Трансформ вместо зума нужен из-за того, что если коэффициент зума * line-height = дробное число,
          // высота строки рендерится с погрешностью,
          // и через несколько строчек начинает заметно не совпадать с линейками, выставленными по высоте строки.
          // (Высота самого блока текста при этом рендерится правильно. То же самое в конструкторе)
          // При трансформе высота строки рассчитывается правильно.
          ${i&&y.isOnForRatio(n||"default",i,m||{})&&y.isCSSZoom()?`
              width: ${`${1/i*100}%`};
              height: ${`${1/i*100}%`};
              zoom: ${1/i};
              transform: ${`scale(${i})`};
              transform-origin: left top;
            `:""}

          // Same for the 'viewer.next'
          ${h("viewer.next")?N(V({width:`calc(1 / ${c`${o=>o.pageScale}`} * 100%)`,height:`calc(1 / ${c`${o=>o.pageScale}`} * 100%)`,zoom:`calc(1 / ${c`${o=>o.pageScale}`})`,transform:`scale(${c`${o=>o.pageScale}`})`,transformOrigin:"left top"})):""}

          // Колонки
          & > div {
            // т.к. обертка является флекс элементом, то колонки не будут работать на этом элементе
            // поэтому задаем стиль внутреннему компоненту (draft-root)
            ${e&&e.count>1&&`
            min-height: 100%;
            column-fill: auto;
            column-count: ${e.count};
            column-gap: ${e.gap}px;
          `}
          }

          // Custom text selection
          *::selection {
            ${w?`color: ${w};`:""}
            ${b?`background-color: ${b};`:""}
          }

          // Все что ниже: унаследовано из старого виджета
          .public-DraftEditor-content {
            white-space: normal !important;
            overflow-wrap: break-word;
          }

          .text-viewer {
            overflow-wrap: break-word;
            white-space: normal;
          }

          ${j?"":`
          .text-viewer span,
          .text-viewer a,
          & div[data-contents='true'] span,
          & div[data-contents='true'] a {
            line-height: inherit;
            vertical-align: top;
          }
        `}

          & div[data-contents='true'],
          .text-viewer {
            // Отключаем лигатуры, которые включены по-умолчанию
            font-feature-settings: 'liga' 0, 'rlig' 0, 'dlig' 0, 'hlig' 0, 'smcp' 0;
            -webkit-nbsp-mode: normal;
            -webkit-line-break: after-white-space;
            white-space: pre-wrap;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
          }
        `,children:U})}),Ee=le});function ce({children:t,type:r,...e}){return r==="ordered-list-item"?a("ol",{style:{counterReset:L},...e,children:t}):a("ul",{...e,children:t})}var Me,Ue,je,M,ze,de=k(()=>{"use strict";v();re();ee();f();Me=T(({children:t,...r})=>a(ce,{...r,children:a("li",{children:t})}))``,Ue=t=>t==="ordered-list-item"||t==="unordered-list-item",je=({editorState:t,block:r})=>{let e=E({editorState:t,block:r,key:S});return typeof e=="string"?e:""},M=({block:t,editorState:r,styleName:e})=>P({editorState:r,block:t,key:S,value:e}),ze=({style:t,currentStyle:r,editorState:e})=>R(e).reduce((x,i)=>{let n=x,m=n.getCurrentContent().getBlockForKey(i);return t===null?n=M({editorState:n,block:m,styleName:void 0}):t.name!==r&&(n=M({editorState:n,block:m,styleName:t.name})),n},e)});export{se as a,Ee as b,pe as c,ce as d,Me as e,Ue as f,je as g,ze as h,de as i};
