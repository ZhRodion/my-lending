$(document).ready((function(){let t=0;const n=$(".slider-container"),r=$(".slider-track"),i=$(".slider-item"),o=i.width(),s=n.width(),c=i.length*o-s,e=$(".arrow-left"),a=$(".arrow-right");e.on("click",(function(){t+=o,t>0&&(t=0),r.css("transform",`translateX(${t}px`),l()})),a.on("click",(function(){t-=o,t<-c&&(t=-c),r.css("transform",`translateX(${t}px`),l()}));const l=()=>{0==t?e.hide():e.show(),t==-c?a.hide():a.show()};l()}));