import{a as j,b as ct}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-C25CDSVT.js";import{Bb as ut,Qa as I}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-6BD5TTOJ.js";import{r as J,u as dt}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-5U7VAUQ6.js";import{c as B,d as lt}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-BJERVUPP.js";import{a as K,h as ft}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-DUOY7Q5L.js";import{b as A,c as st}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-DHS3XUYJ.js";import{a as ot}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-5NXMLTLE.js";import{b as nt}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-USIQRDD3.js";import{a as H,c as rt}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-WPVKPCDO.js";import{j as _,k as at}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-3WKB4E5O.js";import{b as it}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-4GXLZQJD.js";import{a as $,b as et,d as G}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-JPR5YHB4.js";var Y=et((R,U)=>{"use strict";(function(n,e){if(typeof define=="function"&&define.amd)define(["exports","module"],e);else if(typeof R<"u"&&typeof U<"u")e(R,U);else{var s={exports:{}};e(s.exports,s),n.fetchJsonp=s.exports}})(R,function(n,e){"use strict";var s={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function a(){return"jsonp_"+Date.now()+"_"+Math.ceil(Math.random()*1e5)}function i(r){try{delete window[r]}catch{window[r]=void 0}}function p(r){var t=document.getElementById(r);t&&document.getElementsByTagName("head")[0].removeChild(t)}function l(r){var t=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],c=r,m=t.timeout||s.timeout,y=t.jsonpCallback||s.jsonpCallback,f=void 0;return new Promise(function(d,b){var w=t.jsonpCallbackFunction||a(),o=y+"_"+w;window[w]=function(h){d({ok:!0,json:function(){return Promise.resolve(h)}}),f&&clearTimeout(f),p(o),i(w)},c+=c.indexOf("?")===-1?"?":"&";var u=document.createElement("script");u.setAttribute("src",""+c+y+"="+w),t.charset&&u.setAttribute("charset",t.charset),t.nonce&&u.setAttribute("nonce",t.nonce),t.referrerPolicy&&u.setAttribute("referrerPolicy",t.referrerPolicy),t.crossorigin&&u.setAttribute("crossorigin","true"),u.id=o,document.getElementsByTagName("head")[0].appendChild(u),f=setTimeout(function(){b(new Error("JSONP request to "+r+" timed out")),i(w),p(o),window[w]=function(){i(w)}},m),u.onerror=function(){b(new Error("JSONP request to "+r+" failed")),i(w),p(o),f&&clearTimeout(f)}})}e.exports=l})});var X,q=$(()=>{"use strict";ct();X={"template-export-pdf-typekit-substitution-news-gothic":j`
<style id="export-pdf-typekit-substitution">
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/News Gothic Bold Italic/c6f4e54e-1d69-4559-b813-e2fc4ff29160-3.woff") format("woff"),
		 url("/fonts/webtype/News Gothic Bold Italic/c6f4e54e-1d69-4559-b813-e2fc4ff29160-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 700;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/News Gothic Bold/9aab62b7-bc6f-405a-ad75-227bcf89d9dc-3.woff") format("woff"),
		 url("/fonts/webtype/News Gothic Bold/9aab62b7-bc6f-405a-ad75-227bcf89d9dc-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 700;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/News Gothic Italic/6327ba72-bfd5-4038-9658-e3a4a95a5c98-3.woff") format("woff"),
		 url("/fonts/webtype/News Gothic Italic/6327ba72-bfd5-4038-9658-e3a4a95a5c98-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 400;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/News Gothic/915b0ec4-cd16-40de-883e-1d77c3d07840-3.woff") format("woff"),
		 url("/fonts/webtype/News Gothic/915b0ec4-cd16-40de-883e-1d77c3d07840-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 400;
}
</style>
`,"template-export-pdf-typekit-substitution-georgia-pro":j`
<style id="export-pdf-typekit-substitution">
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro Black/4ec59c91-f66b-4751-8456-e114e9e14673-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro Black/4ec59c91-f66b-4751-8456-e114e9e14673-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 900;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro Bold Italic/6f283590-c3c2-416a-95c2-ca67d04aa929-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro Bold Italic/6f283590-c3c2-416a-95c2-ca67d04aa929-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 700;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro Bold/6f633c58-c751-4d08-9cea-2b27f74f37de-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro Bold/6f633c58-c751-4d08-9cea-2b27f74f37de-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 700;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro Italic/e3bc0ad4-bdaa-4467-82a0-d90f697b7266-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro Italic/e3bc0ad4-bdaa-4467-82a0-d90f697b7266-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 400;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro SemiBold Italic/0e025df5-ba54-4bbb-84b4-c5b337a5b55b-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro SemiBold Italic/0e025df5-ba54-4bbb-84b4-c5b337a5b55b-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 600;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro SemiBold/60fe12ce-0223-4a9a-8e5c-b3e7bd381bc4-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro SemiBold/60fe12ce-0223-4a9a-8e5c-b3e7bd381bc4-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 600;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Georgia Pro/b97bef32-c0cb-4ad3-b724-1204d229731c-3.woff") format("woff"),
		 url("/fonts/webtype/Georgia Pro/b97bef32-c0cb-4ad3-b724-1204d229731c-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 400;
}
</style>
`,"template-export-pdf-typekit-substitution-nitti":j`
<style id="export-pdf-typekit-substitution">
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Nitti Light Italic/15aba0ec-4ceb-49e2-985c-a95134a60aed-3.woff") format("woff"),
		 url("/fonts/webtype/Nitti Light Italic/15aba0ec-4ceb-49e2-985c-a95134a60aed-4.svg#web") format("svg");
	font-style: italic;
	font-weight: 300;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Nitti Light/6fd7c5e9-3131-4cb6-a99e-da74343b1253-3.woff") format("woff"),
		 url("/fonts/webtype/Nitti Light/6fd7c5e9-3131-4cb6-a99e-da74343b1253-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 300;
}
@font-face {
	font-family: "<%=id%>";
	src: url("/fonts/webtype/Nitti Medium/9054f262-2d2d-480f-9360-4560f110243b-3.woff") format("woff"),
		 url("/fonts/webtype/Nitti Medium/9054f262-2d2d-480f-9360-4560f110243b-4.svg#web") format("svg");
	font-style: normal;
	font-weight: 500;
}
</style>
`}});var x,g,Z,Q,pt,W,S,Pt,mt=$(()=>{"use strict";x=G(ot()),g=G(nt()),Z=G(Y());st();lt();at();q();rt();ut();dt();it();ft();Q=100,pt=1e4,W=3500,S={STYLE_PREFIXES:{paragraph:{viewer:[".used-fonts-test p",".rmwidget.text div p"],editor:["p"],constructor:[".used-fonts-test p",".block.block-text .text-preview p",".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption"]},"header-h1":{viewer:[".used-fonts-test h1",".rmwidget.text div h1"],editor:["h1"],constructor:[".used-fonts-test h1",".block.block-text .text-preview h1",".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption"]},"header-h2":{viewer:[".used-fonts-test h2",".rmwidget.text div h2"],editor:["h2"],constructor:[".used-fonts-test h2",".block.block-text .text-preview h2",".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption"]},"header-h3":{viewer:[".used-fonts-test h3",".rmwidget.text div h3"],editor:["h3"],constructor:[".used-fonts-test h3",".block.block-text .text-preview h3",".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption"]},"header-h4":{viewer:[".used-fonts-test h4",".rmwidget.text div h4"],editor:["h4"],constructor:[".used-fonts-test h4",".block.block-text .text-preview h4",".controls .control.text_styles .panel .resizable-scroll-wrapper .resizable-content-wrapper .resizable-content .paragraph-style .style-caption"]},link:{viewer:[".rmwidget.text div a"],editor:["a"],constructor:[".block.block-text .text-preview a"]}},fontsShortList:{},fontCustomVariationNames:{},generateStylesStr:function(n){let e="",s,a,i,p=n.style,l=n.indentation?"	":"",r=";"+(n.lineBreaks?`
`:""),t=n.attrPrefix||"";return n.tp=="paragraph"&&(e+=l+"font-family: "+c("font-family")+r,e+=l+"font-style: "+c("font-style")+r,e+=l+"font-weight: "+c("font-weight")+r,e+=l+"font-size: "+m(c("font-size"))+r,e+=l+"letter-spacing: "+m(c("letter-spacing"))+r,e+=l+"line-height: "+m(c("line-height"))+r,e+=l+"text-align: "+c("text-align")+r,e+=l+"text-decoration: "+c("text-decoration")+r,e+=l+"text-transform: "+c("text-transform")+r,e+=l+"color: "+B.getRGBA(c("color"),c("opacity")/100)+r,e+=l+"padding-top: "+m(c("padding-top"))+r,e+=l+"padding-right: "+m(c("padding-right"))+r,e+=l+"padding-bottom: "+m(c("padding-bottom"))+r,e+=l+"padding-left: "+m(c("padding-left"))+r),n.tp=="link"&&(e+=l+"text-decoration: none"+r,e+=l+"color: "+B.getRGBA(c("color"),c("opacity")/100)+r,c("u-style")!="none"?(s=B.getRGBA(c("u-color"),c("u-opacity")/100),a=parseInt(c("u-size"),10),i=parseInt(c("u-offset"),10)+a,e+=l+"padding-bottom: "+m(Math.max(i,0))+r,c("u-style")=="solid"&&(e+=l+"background: linear-gradient(to right, "+s+" 0%, "+s+" 100%)"+r,e+=l+"background-size: 1px "+m(a)+r),c("u-style")=="dotted"&&(e+=l+"background: linear-gradient(to right, "+s+" 0%, "+s+" 50%, transparent 50%,transparent 100%)"+r,e+=l+"background-size: "+m(a*2)+" "+m(a)+r),c("u-style")=="dashed"&&(e+=l+"background: linear-gradient(to right, "+s+" 0%, "+s+" 66.6666%, transparent 66.6666%,transparent 100%)"+r,e+=l+"background-size: "+m(a*3)+" "+m(a)+r),i<0?e+=l+"background-position: 0 "+(100+i)+"%"+r:e+=l+"background-position: 0 100%"+r,e+=l+"background-repeat: repeat-x"+r):e+=l+"background: none"+r),e;function c(y){let f=p[t+y];return f=="inherit"&&t&&(f=p[y]),f}function m(y){return y+(/px/i.test(y)?"":"px")}},generateCSS:function(n,e,s,a,l){if(!a)return;var p=this.STYLE_PREFIXES[n][e],l=l||{},r=this,t="";g.default.each(a,function(y){n=="paragraph"&&(y.tag&&y.tag!=="p"&&A.AVAILABLE_TEXT_TAGS.includes(y.tag)&&(p=[].concat(r.STYLE_PREFIXES["header-"+y.tag][e],r.STYLE_PREFIXES[n][e]).filter(function(f,d,b){return b.indexOf(f)===d})),t+=g.default.map(p,function(f){return f+"."+y._name}).join(`,
`)+` {
`,t+=r.generateStylesStr({tp:n,style:y,indentation:!0,lineBreaks:!0}),t+=`}

`),n=="link"&&(l.forcePseudoState&&l.forcePseudoClass==y._name?(t+=g.default.map(p,function(f){return f+"."+y._name}).join(`,
`)+` {
`,t+=r.generateStylesStr({tp:n,style:y,attrPrefix:l.forcePseudoState+"-",indentation:!0,lineBreaks:!0}),t+=`}

`):(t+=g.default.map(p,function(d){return d+"."+y._name}).join(`,
`)+` {
`,t+=r.generateStylesStr({tp:n,style:y,indentation:!0,lineBreaks:!0}),t+=`}

`,g.default.find(g.default.keys(y),function(d){return/^current/.test(d)})&&(t+=g.default.map(p,function(d){return d+".current."+y._name}).join(`,
`)+` {
`,t+=r.generateStylesStr({tp:n,style:y,attrPrefix:"current-",indentation:!0,lineBreaks:!0}),t+=`}

`),t+=g.default.map(p,function(d){return d+".hovered."+y._name}).join(`,
`)+` {
`,t+=r.generateStylesStr({tp:n,style:y,attrPrefix:"hover-",indentation:!0,lineBreaks:!0}),t+=`}

`),t+=g.default.map(p,function(f){return f+"."+y._name+" *"}).join(`,
`)+` {
`,t+=`	color: inherit !important;
`,t+=`	text-decoration: none !important;
`,t+=`}

`)}),s=s||document;let c="text_styles_"+n+"_"+e;(0,x.default)("#"+c,s).remove();let m=s.createElement("style");m.type="text/css",m.id=c,m.className="text_styles",m.appendChild(s.createTextNode(t)),s.getElementsByTagName("head")[0].appendChild(m)},appendFontsCssToDocument:function(n,e){window.TypekitPreview&&window.TypekitPreview.setup&&window.TypekitPreview.setup({auth_id:A.TYPEKIT_ID,auth_token:A.TYPEKIT_TOKEN,default_subset:"all"});let s=(0,x.default)("link.fonts, style.fonts"),a=[],i=[],p=[],l={};s.each(function(){let f=(0,x.default)(this),d=f.attr("data-provider"),b=f.attr("data-fonts-and-variations").split("||");g.default.each(b,function(w){a.push(d+"|"+w)})}),g.default.each(n.fonts,function(f){g.default.each(f.used_variations||f.variations,function(d){i.push(f.provider+"|"+f.css_name+"|"+d)})}),p=g.default.difference(i,a);let r={};g.default.each(p,function(f){let d=f.split("|"),b=d[0],w=d[1],o=d[2],u=b+"|"+w;r[u]=r[u]||[],r[u].push(o)});let t=[];g.default.each(r,function(f,d){let b=d.split("|"),w=b[0],o=b[1],u=f;t.push({provider:w,css_name:o,variations:u})}),g.default.each(t,function(f){let d=f.provider,b,w=f.css_name+"|"+f.variations.join("||"+f.css_name+"|");if(l[d]||(l[d]=[]),d=="google"){let o=x.default.map(f.variations,function(u){return(u.substr(1,1)-0)*100+(u.substr(0,1)=="n"?"":"italic")});b={fontAndVariations:w,data:f.css_name.split(" ").join("+")+":"+o.join(",")}}if(d=="webtype"&&(b={fontAndVariations:w,data:f.css_name+":"+f.variations.join(",")}),d=="typetoday"&&(b={fontAndVariations:w,data:f.css_name+":"+f.variations.join(",")}),d=="custom"){let o=g.default.findWhere(n.fonts,{provider:"custom",css_name:f.css_name});o&&o.css_url&&(b={fontAndVariations:w,data:{css_name:f.css_name,css_url:o.css_url,signed_css_url:o.signed_css_url}})}d=="typekit"&&(b={fontAndVariations:w,data:{id:f.css_name,variations:f.variations}}),b&&l[d].push(b)});let c=RM.screenshot&&K("pdf")=="true";c&&this.loadTypekitSubstitutionFonts(l.typekit);let m=g.default.has(l,"custom");g.default.each(l,function(f,d){let b=d=="custom"?1:d=="google"?22:f.length,w=Math.ceil(f.length/b),o,u,h,k,v,F,V=0;for(o=0;o<w;o++){let T=function(P){P.addClass("fonts").attr("data-id",B.generateUUID()).attr("data-provider",d).attr("data-fonts-and-variations",F.join("||"))};var N=T;if(u=o*b,h=Math.min((o+1)*b,f.length),k=f.slice(u,h),v=g.default.pluck(k,"data"),F=g.default.pluck(k,"fontAndVariations"),(0,x.default)("link, style").addClass("existing"),d=="google"){var C=(A.IS_FILE_PROTOCOL?"http://":"//")+"fonts.googleapis.com/css?family=",z=v.join("%7C"),L="&subset=latin,vietnamese,khmer,cyrillic-ext,greek-ext,greek,devanagari,latin-ext,cyrillic";y(C+z+L)}if(d=="typekit"){if(n.version=="edit"&&!c)try{window.TypekitPreview&&window.TypekitPreview.load(v)}catch{}n.version=="published"&&n.typekit_url&&(typeof Typekit<"u"&&(Typekit=void 0),(0,x.default)("style.typekit-kit").remove(),x.default.getScript(n.typekit_url,function(){try{Typekit.load({active:function(){let P=(0,x.default)("style").filter(function(O,tt){return/typekit/i.test(tt.innerHTML)});P.addClass("typekit-kit"),T(P)}})}catch{}}))}let D=A.readymag_viewer_host;if(d=="webtype"){var C=RM.common.isDownloadedSource?D:"";if(!(0,x.default)('link.fonts[data-provider="webtype"]').length){var M=window.ServerData&&window.ServerData.fonts&&window.ServerData.fonts.webtype;y(C+M)}}if(d=="typetoday"&&!c){var C=RM.common.isDownloadedSource?D:"";if(!(0,x.default)('link.fonts[data-provider="typetoday"]').length){var M=window.ServerData&&window.ServerData.fonts&&window.ServerData.fonts.typetoday;y(C+M)}}if(d=="custom"){var E=v[0].signed_css_url||v[0].css_url;/^\/api\/fonts\//i.test(E)?function(){let P=(0,x.default)("<style>").attr("type","text/css");(0,x.default)("head").append(P),x.default.get(E,function(O){P.text(O),V++,V>=f.length&&g.default.isFunction(e)&&e()})}():y(E)}T((0,x.default)("link:not(.existing), style:not(.existing)")),(0,x.default)("link, style").removeClass("existing")}}),!m&&g.default.isFunction(e)&&e();function y(f){let d=(0,x.default)("<link>").attr("type","text/css").attr("rel","stylesheet").attr("href",f);(0,x.default)("head").append(d)}},loadTypekitSubstitutionFonts:function(n){!n||!n.length||g.default.each(n,function(e){let s=e.data.id,a=g.default.findWhere(S.fontsShortList.typekit,{id:s});a=a&&a.browse_info,a=a&&a.classification;let i=a&&a.length&&a[0]||"sans-serif",p={"sans-serif":"news-gothic",decorative:"news-gothic",handmade:"news-gothic",blackletter:"news-gothic",script:"news-gothic","slab-serif":"news-gothic",serif:"georgia-pro",monospaced:"nitti"},l="template-export-pdf-typekit-substitution-"+(p[i]||p["sans-serif"]),r=X[l],t=r({id:s});(0,x.default)("head").append(t)})},appendFontsCssToIFrame:function(n){let e=(0,x.default)("link.fonts, style.fonts"),s=(0,x.default)("link.fonts, style.fonts",n),a={},i=(0,x.default)("head",n);s.each(function(){a[(0,x.default)(this).attr("data-id")]=!0}),e.each(function(){let p=(0,x.default)(this),l=this.href;if(!a[p.attr("data-id")]){let r=p.clone();l&&Modernizr.safari&&r.attr("href",l+"&edit_mode=true"),r.appendTo(i)}})},isFastFontLoadCheckAvailable:function(){return!!(document.fonts&&window.Promise)},fastWaitForFontLoad:function(n,e,s){let a;if(document.fonts){let i=s+(e?" "+e:"")+" 12px "+n,p=(c,m)=>{for(let y of document.fonts)if(y.family===c)return y.loaded;return m>Date.now()-W?new Promise(y=>{setTimeout(()=>{y(p(c,m))},50)}):Promise.resolve(!1)},l=!document.fonts.check(i),r=H("viewer.enhancedFontLoadCheck")&&!l?document.fonts.load(i).then(()=>p(n,Date.now())):document.fonts.load(i).then(()=>document.fonts.check(i)?i:this.fontLoadedTimeoutCheck(i)),t=new window.Promise(function(c,m){setTimeout(m.bind(null,i),W)});a=window.Promise.race([r,t])}else a=window.Promise.reject();return a},exactWaitForFontLoad:function(n,e,s,a){let i=s+" "+e+" 12px "+n+", Arial",p=s+" "+e+" 12px Arial",l=20,r=20,t=(0,x.default)('<canvas width="'+l+'" height="'+r+'"></canvas>'),c=t[0],m=c.getContext("2d"),y="",f="",d=+new Date;t.appendTo("body").css({position:"absolute",left:0,top:"-999px"}),b();function b(){let o=+new Date-d>pt,u=w();if(u||o){m=void 0,t.remove(),a(u,n,e,s);return}setTimeout(b,Q)}function w(){let o=i;m.clearRect(0,0,l,r),y||(y=c.toDataURL("image/png"),o=p),m.font=o,m.fillStyle="000",m.fillText("a1-&q",0,20);let u=c.toDataURL("image/png");return f||(f=u),u!=y&&u!=f}},fontLoadedTimeoutCheck:function(n){let e=Date.now();var s=function(a,i){let p=Date.now()-e;document.fonts.check(n)?a(n):p<W?setTimeout(s.bind(null,a,i),Q):i(n)};return new window.Promise(function(a,i){s(a,i)})},getHotspotTextModels:function(n){let e=[];return n.widgets_collection&&n.widgets_collection.length?e=n.widgets_collection.filter(function(s){return s.get("type")==="text"&&(n.get?n.get("wids"):n.wids).indexOf(s.get("_id"))>-1}):n._nestedWidgetsJSON&&n._nestedWidgetsJSON.length?e=g.default.filter(n._nestedWidgetsJSON,function(s){return s.type==="text"}):n.wids&&n.wids.length&&(e=g.default.filter(n.wids,function(s){return s.type==="text"})),e},getUsedFontsFromWidgetsModels:function(n){let e={},s={},a={},i={},p={},l={},r=n.models;function t(w,o){return typeof w.get=="function"?w.get(o):w[o]}for(let w=0;w<r.length;w++){let o=r[w];if(t(o,"type")==="slideshow"){if(t(o,"version")===2){let u=t(o,"pictures");t(o,"theme_data").captions&&u?.length&&u.forEach(k=>{k.caption?.blocks&&g.default.extend(s,I(k.caption,n.activeViewports))})}else if(t(o,"text_style")){let u=t(o,"text_style");u["font-family"]&&u["font-weight"]&&u["font-style"]&&(s[u["font-family"]+"|"+u["font-style"]+"|"+u["font-weight"]]=1)}}if(t(o,"type")==="button"){!t(o,"hidden")&&t(o,"font-family")&&t(o,"font-weight")&&t(o,"font-style")&&(a[t(o,"font-family")+"|"+t(o,"font-style")+"|"+t(o,"font-weight")]=1);for(let u=0;u<_.viewports.length;u++){let h=o["viewport_"+_.viewports[u].name];h&&!h.hidden&&(a[h["font-family"]+"|"+h["font-style"]+"|"+h["font-weight"]]=1)}}if(t(o,"type")==="ecommercecart"&&(t(o,"font-family")&&t(o,"font-weight")&&t(o,"font-style")&&(p[t(o,"font-family")+"|"+t(o,"font-style")+"|"+t(o,"font-weight")]=1),t(o,"bar-font-family")&&t(o,"bar-font-weight")&&t(o,"bar-font-style")&&(p[t(o,"bar-font-family")+"|"+t(o,"bar-font-style")+"|"+t(o,"bar-font-weight")]=1)),t(o,"type")==="addtocart"&&(t(o,"font-family")&&t(o,"font-weight")&&t(o,"font-style")&&(l[t(o,"font-family")+"|"+t(o,"font-style")+"|"+t(o,"font-weight")]=1),t(o,"attrs-font-family")&&t(o,"attrs-font-weight")&&t(o,"attrs-font-style")&&(l[t(o,"attrs-font-family")+"|"+t(o,"attrs-font-style")+"|"+t(o,"attrs-font-weight")]=1)),t(o,"type")==="form"){if(!t(o,"hidden")){let u=t(o,"style-"+t(o,"style")+"-fields"),h=g.default.clone(t(o,"style-"+t(o,"style")+"-button-default"));g.default.isEmpty(h)||(h["font-family"]=h["font-family"]=="inherit"?u["font-family"]:h["font-family"],h["font-style"]=h["font-style"]=="inherit"?u["font-style"]:h["font-style"],h["font-weight"]=h["font-weight"]=="inherit"?u["font-weight"]:h["font-weight"]),i[u["font-family"]+"|"+u["font-style"]+"|"+u["font-weight"]]=1,h&&(i[h["font-family"]+"|"+h["font-style"]+"|"+h["font-weight"]]=1)}for(let u=0;u<_.viewports.length;u++){let h=o["viewport_"+_.viewports[u].name];if(h&&!h.hidden){let k=h["style-"+h.style+"-fields"]||t(o,"style-"+h.style+"-fields"),v=g.default.clone(h["style-"+h.style+"-button-default"]);g.default.isEmpty(v)||(v["font-family"]=v["font-family"]=="inherit"?k["font-family"]:v["font-family"],v["font-style"]=v["font-style"]=="inherit"?k["font-style"]:v["font-style"],v["font-weight"]=v["font-weight"]=="inherit"?k["font-weight"]:v["font-weight"]),k&&(i[k["font-family"]+"|"+k["font-style"]+"|"+k["font-weight"]]=1),v&&(i[v["font-family"]+"|"+v["font-style"]+"|"+v["font-weight"]]=1)}}}if(t(o,"type")==="text"&&t(o,"version")===3){t(o,"hidden")||g.default.extend(e,I(o,n.activeViewports));for(let u=0;u<_.viewports.length;u++){let h=o["viewport_"+_.viewports[u].name];h&&!h.hidden&&g.default.extend(e,I({blocks:t(o,"blocks"),...h},n.activeViewports))}}t(o,"type")==="text"&&t(o,"text")&&t(o,"version")!==3&&g.default.extend(e,this.scanTextForFontsAndVariationsRaw(t(o,"text"),t(o,"version"),n.excludeUnusedDefault,n.activeViewports)),t(o,"type")==="hotspot"&&g.default.each(this.getHotspotTextModels(o),g.default.bind(function(u){t(u,"version")===3?g.default.extend(e,I(u,n.activeViewports)):t(u,"text")&&g.default.extend(e,this.scanTextForFontsAndVariationsRaw(t(u,"text"),t(u,"version"),n.excludeUnusedDefault))},this))}let c=g.default.extend({},e,s,a,i,p,l),m={};if(n.onlyFontsNames){let w=[];return g.default.each(c,(o,u)=>{let h=u.split("|"),k=h[0];k&&w.push(k)}),w}let y={bold:700,normal:400};g.default.each(c,function(w,o){let u=o.split("|"),h=u[0],k=u[1].toLowerCase(),v=u[2].toLowerCase(),F=v in y?y[v]:v;m[h]=m[h]||[],m[h].push(F==="variable"?"v":(k==="italic"?"i":"n")+Math.floor(F/100))});let f=[],d,b=this;return g.default.each(m,function(w,o){(d=g.default.findWhere(S.fontsShortList.webtype,{name:o}))?f.push({provider:"webtype",css_name:d.name,name:d.name,variations:d.variations,used_variations:b.calcBrowserUsedVariation(w,d.variations)}):(d=g.default.findWhere(S.fontsShortList.typetoday,{name:o}))?f.push({provider:"typetoday",css_name:d.name,name:d.name,variations:d.variations,used_variations:b.calcBrowserUsedVariation(w,d.variations)}):(d=g.default.findWhere(S.fontsShortList.google,{family:o}))?f.push({provider:"google",css_name:d.family,name:d.family,variations:d.variations,used_variations:b.calcBrowserUsedVariation(w,d.variations)}):(d=g.default.findWhere(S.fontsShortList.typekit,{id:o}))?f.push({provider:"typekit",css_name:d.id,name:d.name,variations:d.variations,used_variations:b.calcBrowserUsedVariation(w,d.variations)}):n.includeCustom&&(d=g.default.findWhere(n.customList,{css_name:o}))&&f.push({provider:"custom",css_name:d.css_name,css_url:d.css_url,name:d.name,variations:d.variations,used_variations:b.calcBrowserUsedVariation(w,d.variations)})}),f.filter(w=>w.used_variations&&w.used_variations.length>0)},getStylesFromText3Model:function(n,e){function s(i,p){return typeof i.get=="function"?i.get(p):i[p]}let a=new Set;if(e==="link"&&s(n,"entityMap")){let i=s(n,"entityMap");g.default.isEmpty(i)||g.default.each(i,p=>{p.type==="LINK"&&p.data?.linkStyle&&a.add(p.data?.linkStyle)})}else if(s(n,"blocks")&&s(n,"blocksMeta")){let i=s(n,"blocks")||[],p=s(n,"blocksMeta");i.forEach(l=>{let t=(p?p.find(m=>m.key===l.key):l)?.data,c=e==="paragraph"?"textStyle":"listStyle";t?.[c]&&a.add(t[c])})}return a},getStylesFromText:function(n="",e){let s=new Set,a=e||RM.constructorRouter.workspace.mag.edit_params.get("paragraph_styles");if(n)for(let i=0;i<a.length;i++){let p=a[i];n.indexOf(p._name)>=0&&s.add(p)}return s},getUsedStylesFromWidgetsModels:function(n,e="paragraph",s=!1){let a=e==="paragraph"?RM.constructorRouter.workspace.mag.edit_params.get("paragraph_styles"):e==="list"?J()?.project:[],i=new Set,p="";function l(r,t){return typeof r.get=="function"?r.get(t):r[t]}for(let r=0;r<n.length;r++){let t=n[r];if(l(t,"type")==="text"&&l(t,"version")===3){let c=this.getStylesFromText3Model(t,e);c.size&&c.forEach(m=>i.add(m)),_.viewports.forEach(m=>{let y=`viewport_${m.name}`;if(t[y]?.blocksMeta){let f=t[y].blocks||l(t,"blocks"),d=this.getStylesFromText3Model({...t[y],blocks:f},e);d.size&&d.forEach(b=>i.add(b))}})}if(!s&&l(t,"type")==="text"&&l(t,"version")!==3&&l(t,"text")&&(p+=l(t,"text")),l(t,"type")==="slideshow"&&l(t,"version")===2){let c=l(t,"pictures");c?.length&&c.forEach(m=>{if(m.caption?.blocks&&m.caption?.blocksMeta){let y=this.getStylesFromText3Model(m.caption,e);y.size&&y.forEach(f=>i.add(f))}})}l(t,"type")==="hotspot"&&g.default.each(this.getHotspotTextModels(t),c=>{if(l(c,"version")===3){let m=this.getStylesFromText3Model(c,e);m.size&&m.forEach(y=>i.add(y))}else!s&&l(c,"text")&&(p+=l(c,"text"))})}if(!s){let r=this.getStylesFromText(p,a);r.size&&r.forEach(t=>i.add(t))}return i},getUsedParagraphStylesFromWidgetsModels:function(n,e){let s="",a,i;for(a=0;a<n.length;a++)i=n[a],r(i,"type")=="text"&&r(i,"text")&&(s+=r(i,"text")),r(i,"type")=="hotspot"&&g.default.each(this.getHotspotTextModels(i),g.default.bind(function(t){s+=r(t,"text")||""},this));let p=[],l=e.edit_params.get("paragraph_styles");if(s)for(a=0;a<l.length;a++){let t=l[a];s.indexOf(t._name)>=0&&p.push(t)}function r(t,c){return typeof t.get=="function"?t.get(c):t[c]}return p},getUsedLinkStylesFromWidgetsModels:function(n,e){let s="",a,i;for(a=0;a<n.length;a++)i=n[a],r(i,"type")=="text"&&r(i,"text")&&(s+=r(i,"text")),r(i,"type")=="hotspot"&&g.default.each(this.getHotspotTextModels(i),g.default.bind(function(t){s+=r(t,"text")||""},this));let p=[],l=e.edit_params.get("link_styles");if(s)for(a=0;a<l.length;a++){let t=l[a];s.indexOf(t._name)>=0&&p.push(t)}function r(t,c){return typeof t.get=="function"?t.get(c):t[c]}return p},sortFontsByProvider(n){let e={custom:[],google:[],typekit:[],typetoday:[],webtype:[]};for(let s of n){let a=s.provider;e[a]=e[a]||[],s.provider==="custom"?e[a].push(s.css_name):e[a].push({id:s.css_name,variations:s.used_variations})}return{used_custom_fonts:e.custom,used_google_fonts:e.google,used_typekit_fonts:e.typekit,used_typetoday_fonts:e.typetoday,used_webtype_fonts:e.webtype}},scanTextForFontsAndVariationsRaw:function(n,e,s,a){let i={},p={},l=[],r=document.defaultView.getComputedStyle,t,c,m,y,f,d,b,w,o,u,h;for(t=0;t<_.viewports.length;t++)if(n.split("-"+_.viewports[t].name).length>1){if(a&&a.indexOf(_.viewports[t].name)===-1)continue;l.push(_.viewports[t].name)}m=(0,x.default)(".used-fonts-test"),m.length||(m=(0,x.default)("<div>").addClass("used-fonts-test").css({position:"absolute",display:"none !important",left:-9999,width:999}).appendTo("body")),m.removeClass("v1 v2").addClass("v"+(e||1)),c=m[0],c.innerHTML=n,d=c.querySelectorAll("span,p,a"),b=d.length,f=r(c,null);let k=f.fontFamily+"|"+f.fontStyle+"|"+f.fontWeight;i[k]=1;let v,F=!1,V=function(L){return g.default.findIndex(L.childNodes,function(M){return M.nodeType===Node.TEXT_NODE&&M.textContent.replace(/\r?\n/g,"").length})!==-1},C=g.default.filter(d,V);for(let L=0;L<C.length;L++)f=r(C[L],null),v=f.fontFamily+"|"+f.fontStyle+"|"+f.fontWeight,F=F||v===k,i[f.fontFamily+"|"+f.fontStyle+"|"+f.fontWeight]=1;let z=V(c);for(t=0;t<l.length;t++)if(u=l[t],u!="default"){for(y=0;y<b;y++)h=d[y],(w=h.getAttribute("data-style-"+u))&&(w=="empty"?h.removeAttribute("style"):h.setAttribute("style",w)),(o=h.getAttribute("data-class-"+u))&&(o=="empty"?h.removeAttribute("class"):h.setAttribute("class",o)),V(h)&&(f=r(h,null),v=f.fontFamily+"|"+f.fontStyle+"|"+f.fontWeight,F=F||v===k,i[v]=1);t<l.length-1&&(c.innerHTML=n,d=c.querySelectorAll("span,p,a"),b=d.length)}return s&&!F&&!z&&delete i[k],g.default.each(i,function(L,M){let E=M.split("|"),N=E[0],D=E[1].toLowerCase(),T=E[2].toLowerCase();N=N.split(",")[0],N=N.replace(/'|"/g,""),T=T.replace(/normal/g,"400"),T=T.replace(/regular/g,"400"),T=T.replace(/bold/g,"700"),p[N+"|"+D+"|"+T]=1}),p},calcBrowserUsedVariation:function(n,e){let s={};for(let y=0;y<n.length;y++){var a=n[y],i=a.substr(1,1),p=a.substr(0,1),l=99999,r="",t,c,m;for(let f=0;f<e.length;f++)t=e[f].substr(1,1)-0,c=e[f].substr(0,1),i<4&&(m=Math.abs(t-i)*10+(c==p?0:1e3)+(t<=i?0:100)),i>5&&(m=Math.abs(t-i)*10+(c==p?0:1e3)+(t>=i?0:100)),i==4&&(t==5?m=0+(c==p?0:1e3)+0:m=Math.abs(t-i)*10+(c==p?0:1e3)+(t<=i?0:100)),i==5&&(m=Math.abs(t-i)*10+(c==p?0:1e3)+(t<=i?0:100)),i==t&&p==c&&(m=0),m<l&&(l=m,r=e[f]);s[r]=1}return g.default.keys(s).filter(y=>!!y)},getVeryShortList:function(n){let e={google:[],typekit:[],webtype:[],typetoday:[]};return g.default.each(n,function(s){let a=s.provider,i;switch(a){case"google":i={provider:a,family:s.name,variations:s.variations};break;case"typekit":i={provider:a,id:s.css_name,name:s.name,variations:s.variations};break;case"webtype":i={provider:a,name:s.name,variations:s.variations};break;case"typetoday":i={provider:a,name:s.name,variations:s.variations};break}e[a]&&e[a].push(i)}),e},getCustomVariationNameByFVD:function(n,e){return(S.fontCustomVariationNames[n]||{})[e]},setShortList:function(n){S.fontsShortList=n||{},S.fontCustomVariationNames={},g.default.each(S.fontsShortList,function(e,s){g.default.each(e,function(a){if(a.custom_variation_names){let i;switch(s){case"google":i=a.family;break;case"typekit":case"webtype":case"typetoday":i=a.name;break}S.fontCustomVariationNames[i]=a.custom_variation_names}})})},preloadShortList:async function(){let n=new Date,e=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear();try{let s=await(0,Z.default)(`${A.fontslist_short}?timestamp=${e}`,{jsonpCallback:"callback",jsonpCallbackFunction:"fontsShortListCallback"}).then(a=>a.json());S.setShortList(s)}catch{console.error("Cannot preload fontslist")}}},Pt=S});export{Pt as a,mt as b};
