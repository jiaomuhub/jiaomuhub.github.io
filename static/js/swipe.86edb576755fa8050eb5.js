webpackJsonp([6],{rX8n:function(t,i){},zQLh:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("7+uW"),s={name:"slider",props:{initialSpeed:{type:Number,default:30},initialInterval:{type:Number,default:4}},data:function(){return{sliders:[{img:"https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=b97100c78c1001e95a311c5dd9671089/95eef01f3a292df5fa43e53bbd315c6034a8731f.jpg"},{img:"https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=d1dcaf342934349b600b66d7a8837eab/ac345982b2b7d0a2f8054ab3caef76094a369ad4.jpg"},{img:"https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=d1dcaf342934349b600b66d7a8837eab/ac345982b2b7d0a2f8054ab3caef76094a369ad4.jpg"},{img:"https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=f42527abc8ea15ce55e3e85bd7695196/0df431adcbef7609bc28d0b12fdda3cc7cd99ef9.jpg"},{img:"https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=f42527abc8ea15ce55e3e85bd7695196/0df431adcbef7609bc28d0b12fdda3cc7cd99ef9.jpg"}],currentIndex:1,distance:-600,transitionEnd:!0,speed:this.initialSpeed}},computed:{containerStyle:function(){return{transform:"translate3d("+this.distance+"px, 0, 0)"}},interval:function(){return 1e3*this.initialInterval}},mounted:function(){this.init()},methods:{init:function(){this.play(),window.onblur=function(){this.stop()}.bind(this),window.onfocus=function(){this.play()}.bind(this)},move:function(t,i,e){if(this.transitionEnd){this.transitionEnd=!1,-1===i?this.currentIndex+=t/600:this.currentIndex-=t/600,this.currentIndex>5&&(this.currentIndex=1),this.currentIndex<1&&(this.currentIndex=5);var n=this.distance+t*i;this.animate(n,i,e)}},animate:function(t,i,e){var n=this;this.temp&&(window.clearInterval(this.temp),this.temp=null),this.temp=window.setInterval(function(){-1===i&&t<n.distance||1===i&&t>n.distance?n.distance+=e*i:(n.transitionEnd=!0,window.clearInterval(n.temp),n.distance=t,t<-3e3&&(n.distance=-600),t>-600&&(n.distance=-3e3))},20)},jump:function(t){var i=t-this.currentIndex>=0?-1:1,e=600*Math.abs(t-this.currentIndex),n=0===Math.abs(t-this.currentIndex)?this.speed:Math.abs(t-this.currentIndex)*this.speed;this.move(e,i,n)},play:function(){var t=this;this.timer&&(window.clearInterval(this.timer),this.timer=null),this.timer=window.setInterval(function(){t.move(600,-1,t.speed)},this.interval)},stop:function(){window.clearInterval(this.timer),this.timer=null}}},a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"slider"}},[e("div",{staticClass:"window",on:{mouseover:t.stop,mouseleave:t.play}},[e("ul",{staticClass:"container",style:t.containerStyle},[e("li",[e("img",{attrs:{src:t.sliders[t.sliders.length-1].img,alt:""}})]),t._v(" "),t._l(t.sliders,function(t,i){return e("li",{key:i},[e("img",{attrs:{src:t.img,alt:""}})])}),t._v(" "),e("li",[e("img",{attrs:{src:t.sliders[0].img,alt:""}})])],2),t._v(" "),e("ul",{staticClass:"direction"},[e("li",{staticClass:"left",on:{click:function(i){t.move(600,1,t.speed)}}},[e("svg",{staticClass:"icon",attrs:{width:"30px",height:"30.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{fill:"#ffffff",d:"M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"}})])]),t._v(" "),e("li",{staticClass:"right",on:{click:function(i){t.move(600,-1,t.speed)}}},[e("svg",{staticClass:"icon",attrs:{width:"30px",height:"30.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{fill:"#ffffff",d:"M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"}})])])]),t._v(" "),e("ul",{staticClass:"dots"},t._l(t.sliders,function(i,n){return e("li",{key:n,class:{dotted:n===t.currentIndex-1},on:{click:function(i){t.jump(n+1)}}})}))])])},staticRenderFns:[]};var c=e("VU/8")(s,a,!1,function(t){e("rX8n")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:c},template:"<App/>"})}},["zQLh"]);
//# sourceMappingURL=swipe.86edb576755fa8050eb5.js.map