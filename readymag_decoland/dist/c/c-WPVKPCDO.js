import{a as o}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-JPR5YHB4.js";function a(e){return e in n.next?n.next[e]:e in n.legacy?n.legacy[e]:null}function g(e){let t=a(e);return t?r(t)?i(e).enabled:t:!1}function i(e){let t=a(e);return!t||!r(t)?{name:"disabled",enabled:!1}:t}function s(e){e&&Object.values(e).length&&!Object.values(n.next).length&&(n.next=e)}var r,n,l=o(()=>{"use strict";r=e=>!!e?.enabled,n={legacy:typeof window<"u"&&window.ServerData?.featureFlags?window.ServerData.featureFlags:{},next:{}}});export{g as a,s as b,l as c};