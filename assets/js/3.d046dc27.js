(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{431:function(t,r,i){},478:function(t,r,i){"use strict";i(431)},482:function(t,r,i){"use strict";i.r(r);i(102),i(223),i(224);var s={name:"Img",props:{src:String,name:String,h:{type:String,default:"250"},w:String,align:{type:String,default:"center"}},data:function(){return{showError:!1,baseUrl:""}},computed:{binds:function(){var t={};return this.h&&(t.height=this.h),this.w&&(t.width=this.w),t},imgUrl:function(){return this.src?this.src:this.baseUrl?this.baseUrl+this.name:""}},created:function(){try{this.baseUrl=window.location.href.includes("localhost")?"http://127.0.0.1:8090/tech-blog/":"https://gcore.jsdelivr.net/gh/GuoLiBin6/images/tech-blog/"}catch(t){}},methods:{handleImgError:function(t){this.showError=!0}}},n=(i(478),i(20)),e=Object(n.a)(s,(function(){var t=this.$createElement,r=this._self._c||t;return r("div",{attrs:{align:this.align}},[r("img",this._b({class:{"g-img":!0,error:this.showError},attrs:{src:this.imgUrl},on:{error:this.handleImgError}},"img",this.binds,!1))])}),[],!1,null,"00c1afd2",null);r.default=e.exports}}]);