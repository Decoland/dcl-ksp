import{a as I,b as Q}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-NXGZLQEY.js";import{a as g,b as C}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-C25CDSVT.js";import{A as J,x as E}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-5U7VAUQ6.js";import{c as w,d as q}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-BJERVUPP.js";import{a as j}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-55VHH3PS.js";import{a as S}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-5NXMLTLE.js";import{b as U}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-USIQRDD3.js";import{a as F,c as K}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-WPVKPCDO.js";import{a as b,b as X}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-APCK7IAZ.js";import{a as p,d as v}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-JPR5YHB4.js";var z,H=p(()=>{"use strict";C();z={"template-common-button-widget":g`

    <div class="common-button" data-id="<%-data._id%>">

        <div class="icon"></div>

    </div>

`}});var W,N=p(()=>{"use strict";C();W={"template-constructor-block-button":g`

    <input class="text"
           value="<%-data.text%>"
           type="text"
           autocapitalize="off"
           autocorrect="off"
           autocomplete="off"
           spellcheck="false"/>

`}});var P,D=p(()=>{"use strict";C();P={"template-viewer-widget-button":g`
    <div class="text"><%-data.text%></div>
`}});var k,h,Z,x,A=p(()=>{"use strict";k=v(S()),h=v(U());J();q();K();Z={STYLE_PREFIXES:{viewer:[".rmwidget.widget-button .common-button"],viewerCurrentLink:[".maglink.current .widget-button .common-button"],constructor:[".block.button .common-button"]},generateIndividualStyleCSS:function(t){let i=this.STYLE_PREFIXES[t.env],e=t.model,r=e.tp,n=this,o,s=function(a){a=a||"default";let _={default:"",hover:"hovered",current:"current"},y={default:"",hover:"hover-",current:"current-"},f=h.default.isUndefined(_[a])?_.default:_[a],c=h.default.isUndefined(y[a])?y.default:y[a],$=h.default.map(i,m=>t.env==="constructor"&&t.viewport&&F("constructor.splitView")?`[data-viewport="${t.viewport}"] ${m}[data-id="${e._id}"] ${f?"."+f:""}`:m+'[data-id="'+e._id+'"]'+(f?"."+f:"")).join(`,
`);o=$+` {
`,o+=n.generateStylesStr({model:e,attrPrefix:c,indentation:!0,lineBreaks:!0,env:t.env,state:a,withoutHoverCursor:t.withoutHoverCursor}),o+=`}

`;let R=a==="default"?e.baselineShift:a==="current"?e["current-baselineShift"]:null;if(typeof R=="number"){let m={transform:`translateY(${R}px)`},G=`${$} .text, ${$} .icon { ${E(m)} }`;o+=`

${G}

`}return t.env==="viewer"&&(a==="current"&&n.isNeedCurrentStyle(e)&&(o+=n.STYLE_PREFIXES.viewerCurrentLink+'[data-id="'+e._id+`"] {
`,o+=n.generateStylesStr({model:e,attrPrefix:c,indentation:!0,lineBreaks:!0}),o+=`}

`),(r==="icon"||r==="text_and_icon")&&(o+=h.default.map(i,function(m){return m+'[data-id="'+e._id+'"]'+(f?"."+f:"")+" .icon"}).join(`,
`)+` {
`,o+='	 background-image: url("'+(Modernizr.retina?e[c+"icon_raster2xUrl"]||e[c+"icon_b64url"]:e[c+"icon_rasterUrl"]||e[c+"icon_b64url"])+`");
`,o+=`}

`,a==="current"&&n.isNeedCurrentStyle(e)&&(o+=n.STYLE_PREFIXES.viewerCurrentLink+'[data-id="'+e._id+`"] .icon {
`,o+='	 background-image: url("'+(Modernizr.retina?e[c+"icon_raster2xUrl"]||e[c+"icon_b64url"]:e[c+"icon_rasterUrl"]||e[c+"icon_b64url"])+`");
`,o+=`}

`))),o};o=s("default"),h.default.find(h.default.keys(e),function(a){return/^current/.test(a)})&&(o+=s("current")),o+=s("hover");let l="individual_button_style_"+e._id+"_"+t.env+"_"+t.viewport;(0,k.default)("#"+l).remove();let d=document.createElement("style");d.type="text/css",d.id=l,d.className="button_styles",d.appendChild(document.createTextNode(o)),document.getElementsByTagName("head")[0].appendChild(d)},generateStylesStr:function(t){let i="",e=t.model,r=t.indentation?"	":"",n=";"+(t.lineBreaks?`
`:""),o=t.attrPrefix||"";return i+=r+"background-color: "+w.getRGBA(s("background-color"),s("background-color-opacity")/100)+n,i+=r+"border-radius: "+u(s("border-radius"))+n,i+=r+"border-width: "+u(s("border-width"))+n,i+=r+"border-color: "+w.getRGBA(s("border-color"),s("border-color-opacity")/100)+n,i+=r+"font-family: "+s("font-family")+n,i+=r+"font-weight: "+s("font-weight")+n,i+=r+"font-style: "+s("font-style")+n,i+=r+"color: "+w.getRGBA(s("color"),s("color-opacity")/100)+n,i+=r+"font-size: "+u(s("font-size"))+n,i+=r+"letter-spacing: "+u(s("letter-spacing"))+n,e["hover-tansition-duration"]&&(i+=r+`transition: ${e["hover-tansition-duration"]}s`+n),!t.withoutHoverCursor&&t.env&&t.state&&t.env==="viewer"&&t.state==="hover"&&e["hover-cursor"]&&(i+=r+`cursor: ${e["hover-cursor"]}`+n),i;function s(l){let d=e[o+l];return(d==="inherit"&&o||d===void 0)&&(d=e[l]),l==="border-color"&&o==="hover-"?e["hover-border-width"]==0&&(d=e["border-color"]):l==="border-color"&&o!=="current-"&&e["border-width"]==0&&(d=e["hover-border-color"]),l==="border-color-opacity"&&o==="hover-"?e["hover-border-width"]==0&&(d=e["border-color-opacity"]):l==="border-color-opacity"&&e["border-width"]==0&&(d=e["hover-border-color-opacity"]),d}function u(l){return l+(/px/i.test(l)?"":"px")}},destroyIndividualStyleCSS:function(t){let i=t.model,e="individual_button_style_"+i._id+"_"+t.env;(0,k.default)("#"+e).remove()},isNeedCurrentStyle:function(t){let i=t.clickLink;return!i||!t.is_global||/^http(s?)\:\/\//i.test(i)||/^mailto\:/i.test(i)||/^tel\:/i.test(i)?!1:!!t.mag.getPageUri(i)}},x=Z});var L,O,B,T,tt,V,Y=p(()=>{"use strict";L=v(S()),O=v(j()),B=v(U());H();N();D();A();T={...z,...W,...P},tt=O.default.View.extend({MIN_ICON_MARGIN:8,initialize:function(t){t&&(B.default.bindAll(this),this.block=t.block,this.model=t.block&&t.block.model,this.model=t.model,this.$container=t.$container,this.environment=t.environment,this.mag=t.mag,this.withoutHoverCursor=t.withoutHoverCursor,B.default.extend(this.model,{env:this.environment}),this.generateIndividualStyleCSS({env:this.environment,model:this.model,withoutHoverCursor:this.withoutHoverCursor,viewport:t.viewport}),this.template=T["template-common-button-widget"],this.environment==="constructor"?this.text_template=T["template-constructor-block-button"]:this.text_template=T["template-viewer-widget-button"],this.render())},render:function(){let t=x.generateStylesStr({model:this.model});this.setElement((0,L.default)(this.template({data:this.model}))),(0,L.default)(this.text_template({data:this.model})).appendTo(this.$el),this.$text=this.$(".text"),this.$icon=this.$(".icon"),this.$button=this.$text.closest(".common-button"),this.$button.attr("style",t),this.applyButtonType(this.model.tp),this.model.form==="circle"&&this.applyCircleRadius(this.model.w),this.applyTextContainerSize(this.model),this.applyIconContainerSize(this.model),this.applyIconPosition(this.model),this.environment==="viewer"&&this.$container.css("border-radius",this.$button.css("border-radius")),this.$el.appendTo(this.$container),this.renderFinishTimeout=setTimeout(function(){let i=["background-color","background-color-opacity","border-width","border-color","border-color-opacity","font-family","font-style","font-weight","color","color-opacity","font-size","letter-spacing"];this.model.form!=="circle"&&i.push("border-radius"),i.forEach(function(e){this.$button.css(e,"")}.bind(this)),this.applyTransition()}.bind(this),500)},renderButtonText:function(t){this.$el.find(".text").text(t)},renderButtonTextWithSizes:function(t,i){i&&this.applyTextContainerSize(i),this.$el.find(".text").text(t).css({display:t?"block":"none"})},applyTransition:function(){this.environment==="viewer"&&!Modernizr.touch&&(this.model.transition||this.model.transitionTime)&&this.$button.addClass("transition").css("transition",`all ${this.model.transitionTime}s ease 0s`)},applyButtonType:function(t){let i="inline-block";t==="text"?(this.$text.css("display",i),this.$icon.css("display","none")):t==="icon"?(this.$icon.css("display",i),this.$text.css("display","none")):t==="text_and_icon"&&this.$icon.add(this.$text).css("display",i)},applyCircleRadius:function(){this.$button.css("border-radius","100%")},applyTextContainerSize:function(t,i=!1){let e=this.environment==="viewer",r=e?x.isNeedCurrentStyle(this.model):!1,n=i||r?t["current-text_w"]:t.text_w,o=i||r?t["current-text_h"]:t.text_h,s=i||r?t["current-letter-spacing"]:t["letter-spacing"],u=0,l=0;s>0?u=s:s<0&&(l=s),this.$text.css({width:e?"auto":`${n}px`,"padding-left":`${u}px`,"text-indent":`${l}px`,height:this.environment==="viewer"?`${t.h}px`:`${o}px`,"line-height":this.environment==="viewer"?`${t.h}px`:`${t.text_h}px`})},applyIconContainerSize:function(t){let i=t.tp,e=t.icon_w,r=t.icon_h,n=t.icon_pos,o=0,s=0;i==="text_and_icon"&&(n==="left"?s=8:n==="right"&&(o=8)),this.$icon.css({width:e+"px",height:r+"px","margin-right":s+"px","margin-left":o+"px"})},calcIconMarginFromText:function(t){return Math.ceil(t/4)},calcIconTopBottomMargin:function(t){return Math.ceil(t/3)},calcTextTopBottomMargin:function(t){return Math.ceil(t/6)},applyIconPosition:function(t){let i=t.icon_pos;i==="left"?this.$button.css({"flex-direction":"row","-webkit-flex-direction":"row"}):i==="right"&&this.$button.css({"flex-direction":"row-reverse","-webkit-flex-direction":"row-reverse"})},generateIndividualStyleCSS:function(t){x.generateIndividualStyleCSS({env:t.env,model:t.model,viewport:t.viewport,withoutHoverCursor:t.withoutHoverCursor})},destroy:function(){clearTimeout(this.renderFinishTimeout),x.destroyIndividualStyleCSS({env:this.environment,model:this.model}),this.$el&&this.$el.remove()}}),V=tt});var M,et,_t,it=p(()=>{M=v(S());Q();Y();X();et=I.extend({DO_NOT_WAIT_FOR_PRELOAD:!0,antialiasRotation:!0,mailchimpMatcher:/__rm_mailchimp_(.+)/i,anchorRegexp:/__rm_anchor/i,shareRegexp:/^share\.(facebook|twitter|pinterest|gplus|linkedin|email)\.(mag|page)$/i,render:function(){this.preloadIconImage({default:!0});let t;return this.makeBox("widget-button"),this.hasHoverAnimation&&this.$el.addClass("has-onhover-animation"),this.rendered=!0,this.seamlessFontsShow(function(){this.$el.removeClass("fonts-pending")}.bind(this),function(){this.$el.addClass("fonts-pending")}.bind(this)),t={model:this,$container:this.$el,environment:"viewer",mag:this.page&&this.page.mag,block:null},arguments?.[0]?.withoutHoverCursor&&(t.withoutHoverCursor=!0),this.buttonWidget=new V(t),this.preloadIconImage({hover:!0}),this.$el.on(b.isDesktop?"mouseenter":"touchstart",this.onButtonHover),this.$el.on(b.isDesktop?"mouseleave":"touchend",this.onButtonHoverOut),this.$el.on("click",this.onButtonClick),this.checkLink(),RM.screenshot?(this.waitForIconImageLoad(),this.waitForUsedFontsLoad()):this.widgetIsLoaded(),this},renderButtonText:function(t){this.buttonWidget.renderButtonText(t)},renderButtonTextWithSizes:function(t,i){this.buttonWidget.renderButtonTextWithSizes(t,{...this,...i})},hasFontsToLoad:function(){return this.tp==="text"||this.tp==="text_and_icon"},onButtonHover:function(){this.$(".common-button").addClass("hovered")},onButtonHoverOut:function(){this.$(".common-button").removeClass("hovered")},onButtonClick:function(t){if(t.which===2||t.metaKey||t.ctrlKey)return;let i=this.$el.closest("a"),e=M.default.trim(i.attr("href")),r=e.match(/\/start-with-template\/(\d+)$/i),n=r&&r[1];n&&RM.viewerRouter&&RM.viewerRouter.createMagFromTemplate&&(t.preventDefault(),RM.viewerRouter.createMagFromTemplate("template-link",n));let o=this.text?this.text:this.tp==="icon"?"icon":"empty";RM.analytics&&RM.analytics.sendEvent("Button Click",o)},preloadIconImage:function(t){t=t||{};let i=this.tp;if(i==="icon"||i==="text_and_icon"){if(t.default){let e=new Image;e.src=Modernizr.retina?this.icon_raster2xUrl||this.icon_rasterUrl:this.icon_rasterUrl}if(t.hover){let e=new Image;e.src=Modernizr.retina?this["hover-icon_raster2xUrl"]||this["hover-icon_rasterUrl"]:this["hover-icon_rasterUrl"]}}},_widgetIsLoaded:function(){this.loaded||this.destroyed||(RM.screenshot?this.iconImageLoaded&&this.fontLoaded&&this.widgetIsLoaded():this.widgetIsLoaded())},waitForIconImageLoad:function(){this.iconImageLoaded=!1,(this.tp==="icon"||this.tp==="text_and_icon")&&this.icon_rasterUrl?(0,M.default)("<img>").on("load",this.onIconImageLoaded).on("error",this.onIconImageLoaded).attr("src",Modernizr.retina?this.icon_raster2xUrl||this.icon_rasterUrl||"":this.icon_rasterUrl||""):this.onIconImageLoaded()},onIconImageLoaded:function(){this.iconImageLoaded=!0,this._widgetIsLoaded()},waitForUsedFontsLoad:function(){this.fontLoaded=!1,this.hasFontsToLoad()?this.page.addFontsToLoad(this,this.onFontLoaded):this.onFontLoaded()},onFontLoaded:function(){this.fontLoaded=!0,this._widgetIsLoaded()},destroy:function(){return this.buttonWidget&&this.buttonWidget.destroy(),this.buttonWidget=null,this.$el.off(b.isDesktop?"mouseenter":"touchstart",this.onButtonHover),this.$el.off(b.isDesktop?"mouseleave":"touchend",this.onButtonHoverOut),this.$el.off("click",this.onButtonClick),I.prototype.destroy.apply(this,arguments)}}),_t=et});export{V as a,Y as b,_t as c,it as d};
