!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var n in i)("object"==typeof exports?exports:t)[n]=i[n]}}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=4)}([function(t,e){t.exports=function(t,e,i,n,s,a){var o,c=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,c=t.default);var r="function"==typeof c?c.options:c;e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns,r._compiled=!0),i&&(r.functional=!0),s&&(r._scopeId=s);var u;if(a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},r._ssrRegister=u):n&&(u=n),u){var d=r.functional,h=d?r.render:r.beforeCreate;d?(r._injectStyles=u,r.render=function(t,e){return u.call(e),h(t,e)}):r.beforeCreate=h?[].concat(h,u):[u]}return{esModule:o,exports:c,options:r}}},function(t,e,i){"use strict";e.a={data:function(){return{autoHistoryBack:!0}},watch:{show:function(t){t?this.pushHistory():(window.removeEventListener("popstate",this.onPopState),this.autoHistoryBack?history.back():this.autoHistoryBack=!0)}},methods:{onPopState:function(){this.autoHistoryBack=!1,this.show=!1},pushHistory:function(t){history.pushState(t||{type:this.$options.name},null),window.addEventListener("popstate",this.onPopState)}}}},function(t,e,i){"use strict";e.a={}},function(t,e,i){"use strict";e.a={data:function(){return{lowAndroidFallback:!1}},mounted:function(){var t=navigator.userAgent;if(/android/i.test(t)){var e=void 0;t.replace(/Android ((\d|\.)+)/i,function(t,i){e=i}),parseInt(e)<5&&(this.lowAndroidFallback=!0)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(5),s=i(8),a=i(11),o=i(14),c=i(17),l=i(20),r=i(23),u=i(26),d=i(29),h=i(32),m=i(2);i.d(e,"Header",function(){return n.a}),i.d(e,"Toast",function(){return s.a}),i.d(e,"Carousel",function(){return a.a}),i.d(e,"Loading",function(){return o.a}),i.d(e,"NumberKeyboard",function(){return c.a}),i.d(e,"SingleSelect",function(){return l.a}),i.d(e,"MultipleSelect",function(){return r.a}),i.d(e,"DistrictSelect",function(){return u.a}),i.d(e,"Navigation",function(){return d.a}),i.d(e,"Modal",function(){return h.a});var v=function t(e){t.installed||(e.component(n.a.name,n.a),e.component(s.a.name,s.a),e.component(a.a.name,a.a),e.component(o.a.name,o.a),e.component(c.a.name,c.a),e.component(l.a.name,l.a),e.component(r.a.name,r.a),e.component(u.a.name,u.a),e.component(d.a.name,d.a),e.component(h.a.name,h.a),e.prototype.$toast=function(){return m.a.toast},e.prototype.$loading=function(){return m.a.loading},e.prototype.$alert=function(){return m.a.alert.apply(m.a,arguments)},e.prototype.$confirm=function(){return m.a.confirm.apply(m.a,arguments)},e.prototype.$prompt=function(){return m.a.prompt.apply(m.a,arguments)})};e.default={install:v}},function(t,e,i){"use strict";var n=i(6),s=i(7),a=i(0),o=a(n.a,s.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";e.a={name:"zm-header",props:{back:{type:[Boolean,String],default:void 0},inline:{type:Boolean,default:!1},btn:{type:Object,default:null},leftBtn:{type:Object,default:null}},data:function(){return{}},methods:{headerBack:function(){"boolean"==typeof this.back?history.back():"string"==typeof this.back&&this.$emit(this.back)}}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zm-header",class:{inline:t.inline}},[t.back?i("div",{staticClass:"zm-header-back",on:{click:t.headerBack}}):t._e(),t._v(" "),t.btn?i("div",{staticClass:"zm-header-btn",on:{click:function(e){t.$emit(t.btn.emit)}}},[t._v(t._s(t.btn.text))]):t._e(),t._v(" "),t.leftBtn?i("div",{staticClass:"zm-header-btn left",on:{click:function(e){t.$emit(t.leftBtn.emit)}}},[t._v(t._s(t.leftBtn.text))]):t._e(),t._v(" "),t._t("default")],2)},s=[],a={render:n,staticRenderFns:s};e.a=a},function(t,e,i){"use strict";var n=i(9),s=i(10),a=i(0),o=a(n.a,s.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";var n=i(2);e.a={LENGTH_SHORT:1e3,LENGTH_NORMAL:3e3,LENGTH_LONG:5e3,name:"zm-toast",data:function(){return{text:"",showing:!1,timer:null}},mounted:function(){n.a.toast={show:this.show}},methods:{show:function(t,e){var i=this;this.text=t,this.showing=!0,this.timer&&clearInterval(this.timer),this.timer=setTimeout(function(){i.showing=!1},e||this.$options.LENGTH_NORMAL)}}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"zm-toast"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showing,expression:"showing"}],staticClass:"zm-toast"},[i("div",{staticClass:"zm-toast-text"},[t._v(t._s(t.text))])])])},s=[],a={render:n,staticRenderFns:s};e.a=a},function(t,e,i){"use strict";var n=i(12),s=i(13),a=i(0),o=a(n.a,s.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";function n(t){t.preventDefault()}function s(t){if(!o)return t.clientX;if(t.touches||t.changedTouches)return(t.touches[0]||t.changedTouches[0]).clientX}function a(t){if(!o)return t.clientY;if(t.touches||t.changedTouches)return(t.touches[0]||t.changedTouches[0]).clientY}var o="ontouchstart"in window;e.a={name:"zm-carousel",props:{list:{type:Array,default:[]},auto:{type:Number,default:0}},data:function(){return{winWidth:window.innerWidth,page:0,manualOffset:0,startX:0,startY:0,moveStartTime:0,slideParams:{startMoveDistance:20,minMoveDistance:40,minMoveSpeed:150}}},computed:{transformObj:function(){var t=-1*this.winWidth*this.page+this.manualOffset,e="translate3d("+t+"px, 0, 0)",i={"-webkit-transform":e,transform:e};return 0!=this.manualOffset&&(i.transition="none"),i}},methods:{slideNext:function(){this.page<this.list.length-1&&this.page++},slidePrev:function(){this.page>0&&this.page--},sliderTo:function(t){this.page=t},swipeStartMouse:function(t){o||this.swipeStart(t)},swipeStart:function(t){this.startX=s(t),this.startY=a(t),this.autoPlayPause()},swipeMoveMouse:function(t){o||this.swipeMove(t)},swipeMove:function(t){if(this.startX){o||t.preventDefault();var e=s(t),i=a(t),c=e-this.startX,l=i-this.startY,r=this.slideParams.startMoveDistance;Math.abs(c)<r||Math.abs(c)<2*Math.abs(l)||(this.manualOffset=c-r*(c/Math.abs(c)),this.moveStartTime||(this.moveStartTime=Date.now()),document.addEventListener("touchmove",n))}},swipeEndMouse:function(t){o||this.swipeEnd(t)},swipeEnd:function(t){document.removeEventListener("touchmove",n);var e=s(t),i=e-this.startX,a=Math.abs(i),o=Math.abs(Date.now()-this.moveStartTime),c=a/(o/1e3);0==this.manualOffset&&this.carouselClick(),this.manualOffset=0,this.startX=0,this.moveStartTime=0,a>this.slideParams.minMoveDistance&&c>this.slideParams.minMoveSpeed&&(i<0?this.slideNext():this.slidePrev()),this.autoPlay()},autoPlay:function(){var t=this;this.auto&&!this.autoPlayTimer&&(this.autoPlayTimer=setInterval(function(){t.page=(t.page+1)%t.list.length},parseInt(this.auto)))},autoPlayPause:function(){this.autoPlayTimer&&(clearInterval(this.autoPlayTimer),this.autoPlayTimer=null)},carouselClick:function(){var t=this.list[this.page];t.href?location.href=t.href:this.$emit("carousel-click",t)}},mounted:function(){var t=this;this.autoPlay(),window.addEventListener("resize",function(){t.winWidth=window.innerWidth})}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zm-carousel",on:{touchstart:t.swipeStart,touchmove:t.swipeMove,touchend:t.swipeEnd,mousedown:t.swipeStartMouse,mousemove:t.swipeMoveMouse,mouseup:t.swipeEndMouse}},[i("div",{staticClass:"zm-carousel-list",style:t.transformObj},t._l(t.list,function(t){return i("div",{staticClass:"zm-carousel-img-wrap"},[i("img",{staticClass:"zm-carousel-img",attrs:{src:t.url,alt:""}})])})),t._v(" "),i("div",{staticClass:"zm-carousel-points"},t._l(t.list.length,function(e){return i("div",{staticClass:"zm-carousel-point-wrap",on:{click:function(i){i.stopPropagation(),t.sliderTo(e-1)}}},[i("div",{staticClass:"zm-carousel-point",class:{highlight:t.page==e-1}})])}))])},s=[],a={render:n,staticRenderFns:s};e.a=a},function(t,e,i){"use strict";var n=i(15),s=i(16),a=i(0),o=a(n.a,s.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";var n=i(2);e.a={name:"zm-loading",data:function(){return{text:"",showing:!1,isModal:!1}},mounted:function(){n.a.loading={show:this.show,hide:this.hide}},methods:{show:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.text=t||"加载中",this.isModal=e,this.showing=!0},hide:function(){this.showing=!1}}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"zm-loading"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showing,expression:"showing"}],staticClass:"zm-loading",class:{modal:t.isModal}},[i("div",{staticClass:"zm-loading-main"},[i("div",{staticClass:"zm-loading-icon"}),t._v(" "),i("div",{staticClass:"zm-loading-text"},[t._v(t._s(t.text))])])])])},s=[],a={render:n,staticRenderFns:s};e.a=a},function(t,e,i){"use strict";var n=i(18),s=i(19),a=i(0),o=a(n.a,s.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";var n=i(1),s=i(3);e.a={name:"zm-number-keyboard",mixins:[n.a,s.a],props:{maxValue:{type:Number,default:Number.MAX_VALUE},maxDecimal:{type:Number,default:2}},data:function(){return{show:!1,value:""}},watch:{value:function(t){this.$emit("input",t)}},methods:{open:function(t){this.value=String(t||""),this.show=!0},append:function(t){var e=this.value+String(t);if(parseFloat(e)>this.maxValue)return void this.$toast().show("最大值限制为"+this.maxValue);var i=e.indexOf(".");if(i>=0&&e.length-1-i>this.maxDecimal)return void this.$toast().show("最大小数位为"+this.maxDecimal);this.value=e},point:function(){-1===this.value.indexOf(".")&&(this.value+=".")},backSpace:function(){this.value&&(this.value=this.value.substring(0,this.value.length-1))},hide:function(){this.show=!1},cancel:function(){this.$emit("cancel",this.value),this.hide()},ok:function(){this.$emit("ok",this.value),this.hide()}}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",{attrs:{name:"zm-enter-from-bottom"}},[t.show?i("div",{staticClass:"zm-number-keyboard",on:{click:function(t){t.stopPropagation()}}},[t._t("default"),t._v(" "),i("table",{staticClass:"zm-keyboard-table"},[i("tbody",[i("tr",[i("td",{on:{click:function(e){t.append(1)}}},[t._v("1")]),t._v(" "),i("td",{on:{click:function(e){t.append(2)}}},[t._v("2")]),t._v(" "),i("td",{on:{click:function(e){t.append(3)}}},[t._v("3")]),t._v(" "),i("td",{staticClass:"zm-keyboard-delete",attrs:{rowspan:"2"},on:{click:t.backSpace}})]),t._v(" "),i("tr",[i("td",{on:{click:function(e){t.append(4)}}},[t._v("4")]),t._v(" "),i("td",{on:{click:function(e){t.append(5)}}},[t._v("5")]),t._v(" "),i("td",{on:{click:function(e){t.append(6)}}},[t._v("6")])]),t._v(" "),i("tr",[i("td",{on:{click:function(e){t.append(7)}}},[t._v("7")]),t._v(" "),i("td",{on:{click:function(e){t.append(8)}}},[t._v("8")]),t._v(" "),i("td",{on:{click:function(e){t.append(9)}}},[t._v("9")]),t._v(" "),i("td",{staticClass:"zm-keyboard-ok",attrs:{rowspan:"2"},on:{click:t.ok}},[t._v("确定")])]),t._v(" "),i("tr",[i("td",{on:{click:t.point}},[t._v(".")]),t._v(" "),i("td",{on:{click:function(e){t.append(0)}}},[t._v("0")]),t._v(" "),i("td",{staticClass:"zm-keyboard-cancel",on:{click:t.cancel}})])])])],2):t._e()]),t._v(" "),i("transition",{attrs:{name:"zm-shadow"}},[t.show?i("div",{staticClass:"zm-shadow",class:{"no-transition":t.lowAndroidFallback},on:{click:t.cancel}}):t._e()])],1)},s=[],a={render:n,staticRenderFns:s};e.a=a},function(t,e,i){"use strict";var n=i(21),s=i(22),a=i(0),o=a(n.a,s.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";var n=i(1),s=i(3);e.a={name:"zm-single-select",mixins:[n.a,s.a],props:{options:{type:Array,default:[]},textKey:{type:String,default:""},valueKey:{type:String,default:""}},data:function(){return{show:!1,selected:null}},methods:{open:function(t){var e=this;this.show=!0;var i=this.options.filter(function(i){return(e.valueKey?i[e.valueKey]:i)==t});i.length&&(this.selected=i[0])},ok:function(){this.show=!1,this.$emit("value",this.selected)},cancel:function(){this.show=!1},chooseOption:function(t){this.selected=t},getOptionText:function(t){return t?this.textKey?t[this.textKey]:t:null}}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zm-single-select"},[i("transition",{attrs:{name:"zm-enter-from-bottom"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"zm-single-select-main"},[i("div",{staticClass:"zm-single-select-header"},[i("div",{staticClass:"zm-single-select-current"},[t._v(t._s(t.getOptionText(t.selected)||"请选择"))]),t._v(" "),i("button",{staticClass:"zm-single-select-ok",attrs:{disabled:!t.selected},on:{click:t.ok}},[t._v("确定")])]),t._v(" "),i("div",{staticClass:"zm-single-select-list"},t._l(t.options,function(e){return i("div",{staticClass:"zm-single-select-item",class:{selected:t.selected==e},on:{click:function(i){t.chooseOption(e)}}},[t._v("\n                    "+t._s(t.getOptionText(e))+"\n                ")])}))])]),t._v(" "),i("transition",{attrs:{name:"zm-shadow"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"zm-shadow",class:{"no-transition":t.lowAndroidFallback},on:{click:t.cancel}})])],1)},s=[],a={render:n,staticRenderFns:s};e.a=a},function(t,e,i){"use strict";var n=i(24),s=i(25),a=i(0),o=a(n.a,s.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";var n=i(1),s=i(3);e.a={name:"zm-multiple-select",mixins:[n.a,s.a],props:{title:{type:String,default:"请选择"},options:{type:Array,default:function(){return[]}},textKey:{type:String,default:""},valueKey:{type:String,default:""},maxSelected:{type:Number,default:1e4},readonly:{type:Boolean,default:!1}},data:function(){return{show:!1,selectedList:[]}},methods:{open:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.show=!0,this.selectedList=this.options.filter(function(i){var n=t.valueKey?i[t.valueKey]:i;return-1!==e.indexOf(n)})},ok:function(){this.show=!1,this.$emit("value",JSON.parse(JSON.stringify(this.selectedList)))},cancel:function(){this.show=!1},toggleOption:function(t){if(!this.readonly){var e=this.selectedList.indexOf(t);-1===e?this.selectedList.length>=this.maxSelected?this.$toast&&this.$toast().show("最多可选"+this.maxSelected+"项",1500):this.selectedList.push(t):this.selectedList.splice(e,1)}},isSelected:function(t){return-1!==this.selectedList.indexOf(t)},getOptionText:function(t){return t?this.textKey?t[this.textKey]:t:null}}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zm-multiple-select"},[i("transition",{attrs:{name:"zm-enter-from-right"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"zm-multiple-select-main"},[i("div",[i("zm-header",{attrs:{inline:!0,btn:t.readonly?null:{text:"确定",emit:"ok"},"left-btn":{text:"取消",emit:"cancel"}},on:{ok:t.ok,cancel:t.cancel}},[t._v(t._s(t.title))])],1),t._v(" "),i("div",{staticClass:"zm-multiple-select-list"},t._l(t.options,function(e){return i("div",{staticClass:"zm-multiple-select-item",class:{selected:t.isSelected(e)},on:{click:function(i){t.toggleOption(e)}}},[t._v(t._s(t.getOptionText(e)))])}))])]),t._v(" "),i("transition",{attrs:{name:"zm-shadow"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"zm-shadow",class:{"no-transition":t.lowAndroidFallback},on:{click:function(e){t.show=!1}}})])],1)},s=[],a={render:n,staticRenderFns:s};e.a=a},function(t,e,i){"use strict";var n=i(27),s=i(28),a=i(0),o=a(n.a,s.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var s=i(1),a=i(3);e.a={name:"zm-district-select",mixins:[s.a,a.a],props:{options:{type:Array,default:[]},textKey:{type:String,default:"text"},valueKey:{type:String,default:"id"},childrenKey:{type:String,default:"children"}},data:function(){return{show:!1,province:null,city:null,county:null,level:0}},computed:{isSelectFinish:function(){return this.province&&this.city&&this.county&&3==this.level}},methods:{open:function(){this.show=!0},ok:function(){var t;this.show=!1,this.$emit("value",(t={},n(t,this.valueKey,this.county[this.valueKey]),n(t,"district",[this.province[this.textKey],this.city[this.textKey],this.county[this.textKey]]),t))},chooseProvince:function(t){var e=this;t!==this.province&&(this.city=null,this.county=null),this.province=t,this.level=1,1===this.province[this.childrenKey].length&&this.chooseCity(this.province[this.childrenKey][0]),this.$nextTick(function(){e.$refs.citySelectColumn.style.width=e.$refs.cityListColumn.offsetWidth+"px",e.$refs.cityListColumn.scrollTop=0})},chooseCity:function(t){var e=this;t!==this.city&&(this.county=null),this.city=t,this.level=2,this.$nextTick(function(){e.$refs.countySelectColumn.style.width=e.$refs.countyListColumn.offsetWidth+"px",e.$refs.countyListColumn.scrollTop=0})},chooseCounty:function(t){this.county=t,this.level=3}}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zm-single-select"},[i("transition",{attrs:{name:"zm-enter-from-bottom"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"zm-single-select-main"},[i("div",{staticClass:"zm-single-select-header"},[i("div",{staticClass:"zm-district-select-current-list"},[i("div",{staticClass:"zm-district-select-current-wrap"},[i("div",{staticClass:"zm-district-select-current",class:{selected:1==t.level}},[t._v(t._s(t.province&&t.province[t.textKey]||"所在省"))])]),t._v(" "),i("div",{ref:"citySelectColumn",staticClass:"zm-district-select-current-wrap"},[i("div",{staticClass:"zm-district-select-current",class:{selected:2==t.level}},[t._v(t._s(t.city&&t.city[t.textKey]||"所在市"))])]),t._v(" "),i("div",{ref:"countySelectColumn",staticClass:"zm-district-select-current-wrap"},[i("div",{staticClass:"zm-district-select-current",class:{selected:3==t.level}},[t._v(t._s(t.county&&t.county[t.textKey]||"所在县"))])])]),t._v(" "),i("button",{staticClass:"zm-single-select-ok",attrs:{disabled:!t.isSelectFinish},on:{click:t.ok}},[t._v("确定")])]),t._v(" "),i("div",{staticClass:"zm-district-select-list"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.level>=0,expression:"level >= 0"}],staticClass:"zm-district-select-list-column"},t._l(t.options,function(e){return i("div",{staticClass:"zm-district-select-item",class:{selected:t.province==e},on:{click:function(i){t.chooseProvince(e)}}},[t._v(t._s(e[t.textKey]))])})),t._v(" "),t.province&&t.province[t.childrenKey]?i("div",{directives:[{name:"show",rawName:"v-show",value:t.level>=1,expression:"level >= 1"}],ref:"cityListColumn",staticClass:"zm-district-select-list-column"},t._l(t.province[t.childrenKey],function(e){return i("div",{staticClass:"zm-district-select-item",class:{selected:t.city==e},on:{click:function(i){t.chooseCity(e)}}},[t._v(t._s(e[t.textKey]))])})):t._e(),t._v(" "),t.city&&t.city[t.childrenKey]?i("div",{directives:[{name:"show",rawName:"v-show",value:t.level>=2,expression:"level >= 2"}],ref:"countyListColumn",staticClass:"zm-district-select-list-column"},t._l(t.city[t.childrenKey],function(e){return i("div",{staticClass:"zm-district-select-item",class:{selected:t.county==e},on:{click:function(i){t.chooseCounty(e)}}},[t._v(t._s(e[t.textKey]))])})):t._e()])])]),t._v(" "),i("transition",{attrs:{name:"zm-shadow"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"zm-shadow",class:{"no-transition":t.lowAndroidFallback},on:{click:function(e){t.show=!1}}})])],1)},s=[],a={render:n,staticRenderFns:s};e.a=a},function(t,e,i){"use strict";var n=i(30),s=i(31),a=i(0),o=a(n.a,s.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";e.a={name:"zm-navigation",props:{list:{type:Array,default:[]},defaultIndex:{type:Number,default:0},itemFlex:{type:Boolean,default:!1},height:{type:Number,default:60}},data:function(){return{selected:null}},methods:{chooseItem:function(t){this.selected=t,this.$emit("change",JSON.parse(JSON.stringify(this.selected)))}},mounted:function(){this.selected=this.list[this.defaultIndex]}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zm-navigation",style:{height:t.height+"px"}},t._l(t.list,function(e){return i("div",{staticClass:"zm-navigation-item-wrap",on:{click:function(i){t.chooseItem(e)}}},[i("div",{staticClass:"zm-navigation-item",class:{flex:t.itemFlex,selected:t.selected==e}},[i("div",[t._v(t._s(e.main))]),t._v(" "),null!=e.sub?i("div",[t._v(t._s(e.sub))]):t._e()])])}))},s=[],a={render:n,staticRenderFns:s};e.a=a},function(t,e,i){"use strict";var n=i(33),s=i(34),a=i(0),o=a(n.a,s.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";var n=i(2),s=i(1),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.a={name:"zm-modal",mixins:[s.a],data:function(){return{show:!1,type:"",message:"",slot:null,title:"",callback:null,input:"",inputType:"text"}},methods:{modal:function(t,e){"string"==typeof t?(this.message=t,this.slot=null):"object"===(void 0===t?"undefined":a(t))&&t.slot&&(this.slot=t.slot),this.title=e,this.callback=null,this.input="",this.show=!0},modalAlert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.type="alert",this.modal(t.message,t.title||"提示"),this.callback=t.callback},modalConfirm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.type="confirm",this.modal(t.message,t.title||"确认"),this.callback=t.callback},modalPrompt:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.type="prompt",this.modal(e.message,e.title||"输入"),this.callback=e.callback,this.inputType=e.options.inputType||"text",this.$nextTick(function(){t.$refs.input.focus()})},ok:function(){var t=this;this.show=!1,setTimeout(function(){t.callback&&t.callback("prompt"!=t.type||t.input)},0)},cancel:function(){var t=this;this.show=!1,setTimeout(function(){t.callback&&t.callback("prompt"==t.type&&void 0)},0)},onSubmitForm:function(t){return t.preventDefault(),this.ok(),!1}},mounted:function(){var t=this;n.a.alert=function(e,i,n){"function"==typeof i&&(n=i,i=void 0),t.modalAlert({message:e,title:i,callback:n})},n.a.confirm=function(e,i,n){"function"==typeof i&&(n=i,i=void 0),t.modalConfirm({message:e,title:i,callback:n})},n.a.prompt=function(e,i,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};"function"==typeof i&&(s=n||{},n=i,i=void 0),t.modalPrompt({message:e,title:i,callback:n,options:s})}}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"zm-modal"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"zm-modal"},[i("div",{staticClass:"zm-modal-dialog"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"zm-modal-title"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"zm-modal-body"},[t._v("\n                "+t._s(t.message)+"\n                "),"prompt"==t.type?[i("form",{staticClass:"zm-modal-prompt-form",on:{submit:t.onSubmitForm}},["text"==t.inputType?i("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"input",staticClass:"zm-modal-input",attrs:{type:"text"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}):t._e(),t._v(" "),"number"==t.inputType?i("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"input",staticClass:"zm-modal-input",attrs:{type:"number",step:"0.01"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}):t._e()])]:t._e()],2),t._v(" "),i("div",{staticClass:"zm-modal-footer"},[i("button",{directives:[{name:"show",rawName:"v-show",value:"confirm"==t.type||"prompt"==t.type,expression:"type == 'confirm' || type == 'prompt'"}],staticClass:"zm-modal-btn slave",on:{click:function(e){t.cancel()}}},[t._v("取消")]),t._v(" "),i("button",{directives:[{name:"show",rawName:"v-show",value:t.type,expression:"type"}],staticClass:"zm-modal-btn primary",on:{click:function(e){t.ok()}}},[t._v("确定")])])])])])},s=[],a={render:n,staticRenderFns:s};e.a=a}])});