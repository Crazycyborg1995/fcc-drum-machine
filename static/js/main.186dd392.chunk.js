(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),c=a.n(o),i=a(1),s=a(2),m=a(4),d=a(3),u=a(5),l=(a(14),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(e){var t=e.currentTarget.getAttribute("data-key");a.props.playAudio(t)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.keynotes,t=e.keyCode,a=e.keyTrigger,r=e.url,o=e.name;return n.a.createElement("div",{"data-key":t,id:o,className:"drum-pad",onClick:this.handleClick},n.a.createElement("kbd",null,a),n.a.createElement("audio",{src:r,className:"clip","data-key":t,id:a}))}}]),t}(r.Component)),p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).keynotes=[{keyCode:81,keyTrigger:"Q",name:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",name:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",name:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",name:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",name:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",name:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",name:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",name:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",name:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],a.state=a.keynotes,a.removeTransition=function(e){"transform"===e.propertyName&&e.target.classList.remove("animator")},a.playAudio=function(e){var t=document.querySelector('audio[data-key="'.concat(e,'"]')),a=document.querySelector('div[data-key="'.concat(e,'"]')),r=document.getElementById("display");t&&(r.textContent=a.getAttribute("id"),setTimeout(function(){r.textContent=""},500),a.classList.add("animator"),t.currenTime=0,t.play())},a.keyListener=function(e){e.stopPropagation();var t=e.keyCode;a.playAudio(t)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("keydown",this.keyListener,!1),Array.from(document.querySelectorAll(".drum-pad")).forEach(function(t){return t.addEventListener("transitionend",e.removeTransition)})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"drum-machine"},n.a.createElement("div",{id:"display"}),this.state.map(function(t,a){return n.a.createElement(l,{key:a,playAudio:e.playAudio,keynotes:t})}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.186dd392.chunk.js.map