import{a as d,b as w}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-XL4YWYSH.js";import{a,b as _}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-NXGZLQEY.js";import{a as l,b}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-OOK62FBD.js";import{c as s,d as u}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-BJERVUPP.js";import{a as f}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-5NXMLTLE.js";import{b as c}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-USIQRDD3.js";import{a as n,b as m}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-APCK7IAZ.js";import{a as p,d as h}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-JPR5YHB4.js";var g,r,x,k,$=p(()=>{g=h(f()),r=h(c());_();w();b();u();m();x=a.extend(d.prototype).extend({mailchimpMatcher:/__rm_mailchimp_(.+)/i,anchorRegexp:/__rm_anchor/i,shareRegexp:/^share\.(facebook|twitter|pinterest|gplus|linkedin|email)\.(mag|page)$/i,render:function(){if(this.makeBox("widget-shape"),this.hasHoverAnimation&&this.$el.addClass("has-onhover-animation"),this.rendered=!0,this.requiresImageLoad()){if(!this.rasterUrl&&!this.b64url)return this.widgetIsLoaded(),this;this.$el.addClass("icon"),this.antialiasRotation=!0;let e=(0,g.default)("<img>");e.on("load",r.default.bind(function(){this.$el.html(e),this.widgetIsLoaded()},this)).on("error",this.widgetIsLoaded),this.alt&&e.attr("alt",r.default.escape(this.alt)),e.attr("src",Modernizr.retina||l.isOnForRatio(this.page.pageViewport,this.page.scale,this.mag.viewOpts)?this.raster3xUrl||this.raster2xUrl||this.rasterUrl||this.b64url||"":this.rasterUrl||this.b64url||"")}else this.redrawSVG(),this.widgetIsLoaded();return this.checkLink(),this},start:function(){a.prototype.start.call(this),Modernizr.firefox&&!this.requiresImageLoad()&&this.borders>0&&this.redrawSVG()},redrawSVG:function(){let e=this,o={id:e._id,get:function(t){return t==="w"&&e.is_full_width?e.page.mag.getContainerSizeCached().width/e.page.scale-e.full_width_margin*2:t==="h"&&e.is_full_height&&e.fixed_position?e.page.mag.getContainerSizeCached().windowClientHeight/e.page.scale-e.full_height_margin*2:e[t]}};if(this.tp==="rectangle"&&this.opacity===1&&!this.radius_rect_independent&&(!n.isDesktop||this.borders===0)){let t=s.hex2rgb(this.bg_color),i=s.hex2rgb(this.color);t&&t.push(this.bg_opacity),this.$el.css({"background-color":t?"rgba("+t.join(",")+")":"transparent","border-color":i?"rgb("+i.join(",")+")":"transparent","border-radius":this.radius||0,"border-style":"solid","border-width":this.borders,"box-sizing":"border-box"}),this.$el.attr("role","img"),this.alt&&this.$el.attr("aria-label",r.default.escape(this.alt)),this.$el.addClass("div-instead-of-svg")}else{let t=this.generateShapeSVG("viewer-"+s.generateUUID(),o,o.get("w"),o.get("h"));this.$el.html(t);let i=this.$el.find("svg");i.attr("role","img"),this.alt&&i.attr("aria-label",r.default.escape(this.alt))}},requiresImageLoad:function(){return this.tp==="icon"},canRenderImmediately:function(){return!this.requiresImageLoad()},onPageResize:function(){a.prototype.onPageResize.apply(this,arguments),this.requiresImageLoad()||this.redrawSVG()}}),k=x});export{k as a,$ as b};