import{a as V,b as at}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-W3VGP5M2.js";import{a as c,b as A}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-NXGZLQEY.js";import{d as U,e as st}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-I3R4F7CZ.js";import{a as S,b as J}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-C25CDSVT.js";import{Bb as it,Q as D,R as Y,ea as P,f as X,fa as et,ka as O}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-6BD5TTOJ.js";import{d as I,e as F,g as tt}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-HJ6CUHFE.js";import{a as o,b as M}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-OOK62FBD.js";import{a as T,b as q}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-BJERVUPP.js";import{a as G}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-55VHH3PS.js";import{a as Q}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-5YHS57LW.js";import{D as b,F as R}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-U4GS6NTD.js";import{b as L,c as K}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-DHS3XUYJ.js";import{a as B}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-5NXMLTLE.js";import{b as Z}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-USIQRDD3.js";import{a as _,b as j}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-APCK7IAZ.js";import{a as k,d as g}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-JPR5YHB4.js";var z,W=k(()=>{"use strict";J();z={"template-viewer-widget-text":S`
	<%var cc = column_count == 1 ? 'auto' : column_count;%>
	<div style=" -webkit-nbsp-mode:normal; -webkit-line-break:after-white-space; white-space:<%=isNotChrome ? 'normal' : 'pre-wrap'%>; column-count:<%=cc%>;-webkit-column-count:<%=cc%> !important;-moz-column-count:<%=cc%>;column-gap:<%=column_gap%>px;-webkit-column-gap:<%=column_gap%>px !important;-moz-column-gap:<%=column_gap%>px;background:<%-bg%>"><%=text%></div>
`}});var r,H,ot,vt,rt=k(()=>{"use strict";r=g(B()),H=g(Z());A();K();q();at();W();j();M();ot=c.extend({DO_NOT_WAIT_FOR_PRELOAD:!0,antialiasRotation:!0,mailchimpMatcher:/__rm_mailchimp_(.+)/i,anchorRegexp:/__rm_anchor/i,shareRegexp:/^share\.(facebook|twitter|pinterest|gplus|linkedin|email)\.(mag|page)$/i,render:function(){this.makeBox("text"),this.hasHoverAnimation&&this.$el.addClass("has-onhover-animation"),this.rendered=!0,this.bg_color=this.bg_color==null?"ffffff":this.bg_color,this.bg_opacity=this.bg_opacity==null?0:this.bg_opacity,this.column_count=this.column_count==null?1:this.column_count,this.column_gap=this.column_gap==null?16:this.column_gap;let t=[parseInt(this.bg_color.substring(0,2),16),parseInt(this.bg_color.substring(2,4),16),parseInt(this.bg_color.substring(4,6),16)];this.bg_opacity>.99?this.bg="rgb("+t[0]+","+t[1]+","+t[2]+")":this.bg="rgba("+t[0]+","+t[1]+","+t[2]+", "+this.bg_opacity+")",this.text=V.switchTextToViewport(this.text,this.insideHotspot?"default":this.page.pageViewport);let i=this.mag.model.attributes&&this.mag.model.attributes.edit_params&&this.mag.model.attributes.edit_params.paragraph_styles||[],s=r.default.parseHTML(this.text);s=s.map(function(e){let d=(0,r.default)(e),h=d.attr("class");if(h){let p=i.find(function(w){return w._name.toLowerCase()===h.toLowerCase()});if(p&&p.tag&&p.tag!=="p"&&L.AVAILABLE_TEXT_TAGS.includes(p.tag))return(0,r.default)("<"+p.tag+' class="'+h+'" style="'+(d.attr("style")||"")+'" />').append(d.contents())[0].outerHTML}return e.outerHTML}).filter(e=>e),this.text=s.join(""),this.isNotChrome=!(Modernizr.webkit&&!Modernizr.safari&&!Modernizr.safari5)&&this.text.includes("justify");let u=z["template-viewer-widget-text"],m=(0,r.default)(u(this));this.seamlessFontsShow(function(){this.$el.removeClass("fonts-pending")}.bind(this),function(){this.$el.addClass("fonts-pending")}.bind(this)),o.isOn(this.mag.getViewportWidth(this.page.pageViewport))&&o.isCSSZoom()&&this.transformInsteadOfZoom(m),this.$el.append(m),this.$content=m,this.$el.on(_.isDesktop?"mouseenter":"touchstart","a",this.onLinkMouseEnter),this.$el.on(_.isDesktop?"mouseleave":"touchend","a",this.onLinkMouseLeave),this.$el.on("click","a",this.onLinkClick),m.addClass("v"+(this.version||1));let a=this;return this.$el.find("a").each(function(){let e=(0,r.default)(this),d=e.attr("data-pid"),h=e.attr("href"),p,w=/^back\sto\stop$/i,l=d,x=!1;try{p=decodeURIComponent(h)}catch(n){console.error(n)}(w.test(h)||w.test(p))&&(l=a.page._id);let v=h&&a.page.mag.matchSameDomainLink(h);if((v==e.attr("href")||l)&&(v=void 0),l=l||v,l){let n=a.page.mag.getPageNum(l),f=n&&a.page.mag.getPageUri?`/${a.page.mag.getPageUri(l)}`:"javascript:void(0)";if(n){e.addClass("maglink").attr("target","");let $=document.querySelector("base");if(RM.common.isDownloadedSource&&$){let y=$.getAttribute("href");y!=="/"&&e.attr("href",`${y}${f.substring(1)}`).data("link",f)}else e.attr("href",f)}else e.removeAttr("href");l==a.page._id&&(e.addClass("back-to-top"),d&&(a.is_global||a.hasGlobalParent)&&e.addClass("current"))}else if(/^__rm_goback$/i.test(e.attr("href")))e.attr("href","javascript:void(0)").addClass("goback-link");else if(a.mailchimpMatcher.test(e.attr("href"))){let n=e.attr("href").match(a.mailchimpMatcher)[1];e.attr("href","javascript:void(0)").attr("data-mailchimp",n).addClass("mailchimp-link"),T.initMailchimpAPI()}else if(a.shareRegexp.test(e.attr("href"))){let n=e.attr("href").match(a.shareRegexp);e.attr("href","javascript:void(0)").attr("data-share-provider",n[1]).attr("data-share-type",n[2]).addClass("share-link")}else if(a.anchorRegexp.test(e.attr("href"))){e.attr("href","javascript:void(0)").addClass("anchor-link");let n=e.attr("data-page-uri"),f=H.default.findWhere(a.mag.pages,{_id:n})||a.page;e.attr("data-page-uri",f.uri||f.num)}else x=!0,e.addClass("external-link");e.attr("href")&&(e.attr("href").indexOf("mailto")==0||e.attr("href").indexOf("tel")==0)&&e.attr("target",""),!x&&RM.screenshot&&e.removeAttr("href")}),RM.screenshot&&!this.insideHotspot?this.waitForUsedFontsLoad():this.widgetIsLoaded(),this.$el.find("span.soundcite").each(function(e,d){RM.screenshot||import("https://st-p.rmcdn.net/2ec2f837/dist/c/c-7KEQQCDX.js").then(({default:h})=>{h.createPlayer(d)})}),o.isDesktopDefault(this.mag.viewport)&&o.isScaleLayout(this.mag.viewOpts)&&o.isCSSZoom()&&this.listenTo(this.page,"resize",this.onScaleChange),this},onScaleChange(){this.transformInsteadOfZoom(this.$content)},transformInsteadOfZoom(t){let i=this.page.scale;o.isOnForRatio(this.page.pageViewport,i,this.mag.viewOpts)&&o.isCSSZoom()&&t.css({zoom:1/i,transform:`scale(${i})`,width:`${1/i*100}%`,height:`${1/i*100}%`,"transform-origin":"left top"})},isValid:function(){let t=(0,r.default)("<div>").html(this.text).text();return r.default.trim(t)!=""},hasFontsToLoad:function(){return!0},start:function(){return this.started=!0,Modernizr.chrome&&this.$el.addClass("force-repaint-content"),this},stop:function(){return this.started=!1,this.$el.removeClass("force-repaint-content"),!RM.screenshot&&!this.destroyed&&this.rendered&&this.$el&&this.$el.find("span.soundcite").each(function(t,i){import("https://st-p.rmcdn.net/2ec2f837/dist/c/c-7KEQQCDX.js").then(({default:s})=>{s.pausePlayer(i)})}),this},destroy:function(){return this.$el&&this.$el.find("span.soundcite").each(function(t,i){import("https://st-p.rmcdn.net/2ec2f837/dist/c/c-7KEQQCDX.js").then(({default:s})=>{s.destroyPlayer(i)})}),c.prototype.destroy.apply(this,arguments)},waitForUsedFontsLoad:function(){this.hasFontsToLoad()?this.page.addFontsToLoad(this,this.widgetIsLoaded):this.widgetIsLoaded()},checkLink:function(){if(this.is_global||this.hasGlobalParent){let t=this.$el.find("a[data-pid]");t.removeClass("current back-to-top"),this.page&&t.filter('[data-pid="'+this.page._id+'"]').addClass("current back-to-top").removeClass("hovered")}c.prototype.checkLink.apply(this,arguments)},onLinkMouseEnter:function(t){let i=(0,r.default)(t.currentTarget).attr("data-uuid");this.$el.find("a[data-uuid='"+i+"']").addClass("hovered")},onLinkMouseLeave:function(t){let i=(0,r.default)(t.currentTarget).attr("data-uuid");this.$el.find("a[data-uuid='"+i+"']").removeClass("hovered")},onLinkClick:function(t){if(t.which==2||t.metaKey||t.ctrlKey)return;let i=(0,r.default)(t.currentTarget),s=r.default.trim(i.attr("href")),u=s.match(/\/start\-with\-template\/(\d+)$/i),m=u&&u[1];m&&RM.viewerRouter&&RM.viewerRouter.createMagFromTemplate&&(t.preventDefault(),RM.viewerRouter.createMagFromTemplate("template-link",m))}}),vt=ot});var C,N,E,nt,Mt,ht=k(()=>{"use strict";C=g(G()),N=g(Q());A();tt();Y();M();it();et();E=g(X());st();R();nt=c.extend({antialiasRotation:!0,initialize:function(t,i,s){this.model=new C.default.Model(t),c.prototype.initialize.apply(this,[t,i,s])},render:function(){this.makeBox("widget-text-v3"),this.propsModel=new C.default.Model({page:this.page,currentPage:this.mag.currentPage||this.page,scale:this.page.scale,viewport:this.page.pageViewport,viewerOptions:this.mag.viewOpts,mag:this.mag});let t=E.EditorState.createWithContent(O(this.model),P);return this.model["editorState"+this.page.pageViewport]=t,F({component:()=>b(I,{context:D,model:this.propsModel,children:b(U,{editorState:t})}),domElement:this.$el[0],model:this.model,onDestroy:()=>{let s=this.$el[0];N.default.unmountComponentAtNode(s),s&&s.parentNode&&s.parentNode.removeChild(s)}}),this.rendered=!0,window.RM.screenshot&&!this.insideHotspot?this.waitForUsedFontsLoad():this.widgetIsLoaded(),this.seamlessFontsShow(()=>{this.$el.removeClass("fonts-pending")},()=>{this.$el.addClass("fonts-pending")}),o.isDesktopDefault(this.mag.viewport)&&o.isScaleLayout(this.mag.viewOpts)&&o.isCSSZoom()&&this.listenTo(this.page,"resize",this.onScaleChange),this},hasFontsToLoad:()=>!0,updatePage:function(i){let s=this.page;(!s||i&&s.num!==i.num)&&(this.page=i,this.propsModel.set({currentPage:i}))},onScaleChange:function(){this.propsModel.set({scale:this.page.scale})},waitForUsedFontsLoad:function(){this.hasFontsToLoad()?this.page.addFontsToLoad(this,this.widgetIsLoaded):this.widgetIsLoaded()},destroy:function(...t){return this.stopListening(this.page,"resize",this.onScaleChange),c.prototype.destroy.apply(this,t)}}),Mt=nt});export{vt as a,rt as b,Mt as c,ht as d};