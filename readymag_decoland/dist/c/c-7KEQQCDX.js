import{a as D,b as z}from"https://st-p.rmcdn.net/2ec2f837/dist/c/c-JPR5YHB4.js";var N=z(()=>{"use strict";(function(h,d){var m={update_playing_element:function(t,e,i){var s="rgba("+i.r+", "+i.g+", "+i.b+", "+.2*i.a+")",n="rgba("+i.r+", "+i.g+", "+i.b+", "+.1*i.a+")";t.style.cssText+="background: -webkit-linear-gradient(left, "+s+e+"%, "+n+(e+.1)+"%);background: linear-gradient(to right, "+s+e+"%, "+n+(e+.1)+"%);"}};for(var A in h.SOUNDCITE_CONFIG)m[A]=h.SOUNDCITE_CONFIG[A];var o=h.soundcite={};/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?o.mobile=!0:o.mobile=!1;var E=d.head||d.getElementsByTagName("head").item(0)||d.documentElement.childNodes[0],a=[],x,C,p="none",b="none",y=[],g=[];function k(t){var e={r:0,g:0,b:0,a:1};if(d.defaultView&&d.defaultView.getComputedStyle){var i=d.defaultView.getComputedStyle(t,null);if(i){var s=i.getPropertyValue("color").toLowerCase(),n=/\s*rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)\s*/,S=/\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/,f=s.match(n)||s.match(S);f?e={r:f[1]-0,g:f[2]-0,b:f[3]-0,a:f[4]!==void 0?f[4]-0:1}:(s=s.replace("#",""),e={r:parseInt(s.substring(0,2),16),g:parseInt(s.substring(2,4),16),b:parseInt(s.substring(4,6),16),a:1})}}return e}var _=function(t,e){var i=Array.prototype.slice,s=i.call(arguments,2);return function(){return t.apply(e,s.concat(i.call(arguments)))}};function P(t,e){for(var i=t.split("."),s=e.split("."),n=0;n<Math.min(i.length,s.length);n++){var S=parseInt(i[n]),f=parseInt(s[n]),I=S-f;if(I)return I}return i.length-s.length}function T(t,e){var i=h.SC,s;if(p="loading",!i||!i.Dialog||P(t,i._version)>0||e(i,p="loaded")){var n=d.createElement("script");n.type="text/javascript",n.src="//connect.soundcloud.com/sdk-2.0.0.js",n.onload=n.onreadystatechange=function(){p=="loading"&&(!(s=this.readyState)||s=="loaded"||s=="complete")&&(e(h.SC,p="loaded"),E.removeChild(n))},E.appendChild(n)}}function v(t,e){for(var i=t.className,s=0,n=e.match(/\S+/g);s<n.length;s++)i=i.replace(new RegExp("(?:^|\\s)"+n[s]+"(?!\\S)"),"");t.className=i}function u(t,e){for(var i=t.className,s=0,n=e.match(/\S+/g);s<n.length;s++)i.match(new RegExp("(?:^|\\s)"+n[s]+"(?!\\S)"))||(i+=" "+n[s]);t.className=i}function O(t){for(var e=0;e<a.length;e++)a[e].playing&&(!t||t.el!==a[e].el)&&a[e].pause()}function r(t){this.el=t,this.start=t.hasAttribute("data-start")?t.getAttribute("data-start"):0,this.end=t.hasAttribute("data-end")?t.getAttribute("data-end"):null,this.plays=t.hasAttribute("data-plays")?parseInt(t.getAttribute("data-plays")):1,this.plays_left=this.plays,this.playing=!1,this.sound=null,this.click_handler_binded=_(this.click_handler,this),a.push(this)}r.prototype.generateUUID=function(){var t=new Date().getTime(),e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(i){var s=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(i=="x"?s:s&3|8).toString(16)});return e},r.prototype.sound_loaded=function(){this.el.addEventListener("click",this.click_handler_binded),v(this.el,"soundcite-initializing"),this.el.style.display="none",this.el.offsetHeight,this.el.style.display="",u(this.el,"soundcite-loaded soundcite-play")},r.prototype.pause=function(){v(this.el,"soundcite-pause"),u(this.el,"soundcite-play"),this.playing=!1,this.pause_sound()},r.prototype.stop=function(){v(this.el,"soundcite-pause"),u(this.el,"soundcite-play"),this.playing=!1,this.plays_left=this.plays,this.stop_sound()},r.prototype.track_progress=function(){var t=this.end-this.start,e=this.sound_position(),i=e-this.start,s=i*100/t;this.color||(this.color=k(this.el)),m.update_playing_element(this.el,s,this.color)},r.prototype.click_handler=function(t){t.preventDefault(),O(this),this.playing?this.pause():this.play()},r.prototype.destroy=function(t){this.destroyed=!0,this.playing&&this.pause(),this.el&&v(this.el,"soundcite-loaded soundcite-initializing soundcite-loading soundcite-play soundcite-pause"),this.el&&this.el.removeEventListener("click",this.click_handler_binded)};function c(t){r.apply(this,Array.prototype.slice.call(arguments)),this.id=t.getAttribute("data-id"),p!=="initialized"&&(x.initialize({client_id:"5ba7fd66044a60db41a97cb9d924996a"}),p="initialized"),x.stream(this.id,_(function(e){if(this.destroyed){e._player.kill&&e._player.kill();return}this.sound=e,this.sound._player.on("positionChange",_(function(i){this.track_progress(),this.playing&&(i<this.start&&this.sound.seek(this.start),i>=this.end&&(this.plays?(this.plays_left--,this.plays_left>0?this.play():this.stop()):this.play(),this.track_progress()),this.prevPos=i)},this)),this.end===null&&(this.end=this.sound.getDuration()),this.sound_loaded()},this))}c.prototype=Object.create(r.prototype),c.prototype.sound_position=function(){return this.sound.getCurrentPosition()},c.prototype.pause_sound=function(){this.sound.pause()},c.prototype.stop_sound=function(){this.sound.stop()},c.prototype.play=function(){var t=this.sound_position();(t<this.start||t>=this.end)&&this.sound.seek(this.start),v(this.el,"soundcite-play"),u(this.el,"soundcite-pause"),this.sound.play(),this.playing=!0,this.prevPos=-1},c.prototype.destroy=function(){this.sound&&this.sound._player.kill&&this.sound._player.kill(),r.prototype.destroy.apply(this,arguments)};function l(t){r.apply(this,Array.prototype.slice.call(arguments)),this.id="soundcite-audio-"+this.generateUUID(),this.url=t.getAttribute("data-url"),this.start=Math.floor(this.start/1e3),this.end!==null&&(this.end=Math.floor(this.end/1e3)),b!="initialized"&&(o.audio_container=d.createElement("div"),u(o.audio_container,"soundcite-audio"),d.getElementsByTagName("body")[0].appendChild(o.audio_container),b="initialized"),this.audio=d.createElement("audio"),this.audio.id=this.id,this.audio.setAttribute("src",this.url),this.audio.setAttribute("preload","none"),o.mobile=!0,o.audio_container.appendChild(this.audio),this.sound=C("#"+this.id,{frameAnimation:!0}),this.sound.on("loadeddata",_(function(){this.end===null&&(this.end=this.sound.duration()),o.mobile||this.sound_loaded()},this)),o.mobile?this.sound_loaded():this.sound.readyState()>1&&this.sound_loaded()}l.prototype=Object.create(r.prototype),l.prototype.sound_position=function(){return this.sound.currentTime()},l.prototype.pause_sound=function(){this.sound.pause(),this.sound.off("timeupdate")},l.prototype.stop_sound=function(){this.sound.off("timeupdate"),this.sound.pause()},l.prototype._play_sound=function(){v(this.el,"soundcite-loading soundcite-play"),u(this.el,"soundcite-pause"),this.sound.play(),this.playing=!0,this.sound.on("timeupdate",_(function(){this.track_progress(),this.playing&&this.sound.currentTime()>=this.end&&(this.plays?(this.plays_left--,this.plays_left>0?this.play_sound():this.stop()):this.play_sound(),this.track_progress())},this))},l.prototype.play_sound=function(){var t=this.sound.currentTime();t<this.start||t>=this.end?(this.sound.on("seeked",_(function(){this.sound.off("seeked"),this._play_sound()},this)),this.sound.currentTime(this.start)):this._play_sound()},l.prototype.play=function(){/soundcite\-loading/.test(this.el.className)||(o.mobile?(v(this.el,"soundcite-play"),u(this.el,"soundcite-loading"),this.startedLoading?this.play_sound():(this.sound.on("canplaythrough",_(function(){this.play_sound()},this)),d.getElementById(this.id).load()),this.startedLoading=!0):this.play_sound())},l.prototype.destroy=function(){this.sound&&C.destroy(this.sound),this.audio&&o.audio_container.removeChild(this.audio),r.prototype.destroy.apply(this,arguments)},o.createPlayer=function(t){u(t,"soundcite-initializing"),u(t,"soundcite-force-bg-color"),m.update_playing_element(t,0,k(t)),t.getAttribute("data-url")&&(b=="none"?(g.push(t),import("https://st-p.rmcdn.net/2ec2f837/dist/c/c-PLBWNSIH.js").then(({default:e})=>{e(h,h.document),C=h.Popcorn;for(var i=0;i<g.length;i++)new l(g[i])})):b=="loading"?g.push(t):new l(t)),t.getAttribute("data-id")&&(p=="none"?(y.push(t),T("2.0.0",function(e){x=e;for(var i=0;i<y.length;i++)new c(y[i])})):p=="loading"?y.push(t):new c(t))},o.destroyPlayer=function(t){for(var e=a.length-1;e>=0;e--)a[e].el==t&&(a[e].destroy(),a.splice(e,1));for(var e=g.length-1;e>=0;e--)g[e]==t&&g.splice(e,1);for(var e=y.length-1;e>=0;e--)y[e]==t&&y.splice(e,1)},o.pausePlayer=function(t){for(var e=0;e<a.length;e++)t==a[e].el&&a[e].playing&&a[e].pause()},o.setElementsColor=function(t){m.update_playing_element(t,0,k(t))}})(window,document)});var M,B,U=D(()=>{N();M=window.soundcite;delete window.soundcite;B=M});U();export{B as default};
