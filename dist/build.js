!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i=e();for(var s in i)("object"==typeof exports?exports:t)[s]=i[s]}}(this,function(){return function(t){function e(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=3)}([function(t,e){t.exports=function(t,e,i,s,n,a){var o,c=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(o=t,c=t.default);var l="function"==typeof c?c.options:c;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),i&&(l.functional=!0),n&&(l._scopeId=n);var u;if(a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=u):s&&(u=s),u){var h=l.functional,d=h?l.render:l.beforeCreate;h?(l._injectStyles=u,l.render=function(t,e){return u.call(e),d(t,e)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:o,exports:c,options:l}}},function(t,e,i){"use strict";e.a={data:function(){return{autoHistoryBack:!0}},watch:{show:function(t){t?this.pushHistory():(window.removeEventListener("popstate",this.onPopState),this.autoHistoryBack?history.back():this.autoHistoryBack=!0)}},methods:{onPopState:function(){this.autoHistoryBack=!1,this.show=!1},pushHistory:function(t){history.pushState(t||{type:this.$options.name},null),window.addEventListener("popstate",this.onPopState)}}}},function(t,e,i){"use strict";e.a={}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(4),n=i(7),a=i(10),o=i(13),c=i(16),r=i(19),l=i(22),u=i(25),h=i(2);i.d(e,"Header",function(){return s.a}),i.d(e,"Toast",function(){return n.a}),i.d(e,"Carousel",function(){return a.a}),i.d(e,"Loading",function(){return o.a}),i.d(e,"NumberKeyboard",function(){return c.a}),i.d(e,"SingleSelect",function(){return r.a}),i.d(e,"MultipleSelect",function(){return l.a}),i.d(e,"DistrictSelect",function(){return u.a});var d=function t(e){t.installed||(e.component(s.a.name,s.a),e.component(n.a.name,n.a),e.component(a.a.name,a.a),e.component(o.a.name,o.a),e.component(c.a.name,c.a),e.component(r.a.name,r.a),e.component(l.a.name,l.a),e.component(u.a.name,u.a),e.prototype.$toast=function(){return h.a.toast},e.prototype.$loading=function(){return h.a.loading})};e.default={install:d}},function(t,e,i){"use strict";var s=i(5),n=i(6),a=i(0),o=a(s.a,n.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";e.a={name:"zm-header",props:{back:{type:[Boolean,String],default:void 0},inline:{type:Boolean,default:!1},btn:{type:Object,default:null},leftBtn:{type:Object,default:null}},data:function(){return{}},methods:{headerBack:function(){"boolean"==typeof this.back?history.back():"string"==typeof this.back&&this.$emit(this.back)}}}},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zm-header",class:{inline:t.inline}},[t.back?i("div",{staticClass:"zm-header-back",on:{click:t.headerBack}}):t._e(),t._v(" "),t.btn?i("div",{staticClass:"zm-header-btn",on:{click:function(e){t.$emit(t.btn.emit)}}},[t._v(t._s(t.btn.text))]):t._e(),t._v(" "),t.leftBtn?i("div",{staticClass:"zm-header-btn left",on:{click:function(e){t.$emit(t.leftBtn.emit)}}},[t._v(t._s(t.leftBtn.text))]):t._e(),t._v(" "),t._t("default")],2)},n=[],a={render:s,staticRenderFns:n};e.a=a},function(t,e,i){"use strict";var s=i(8),n=i(9),a=i(0),o=a(s.a,n.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";var s=i(2);e.a={LENGTH_SHORT:1e3,LENGTH_NORMAL:3e3,LENGTH_LONG:5e3,name:"zm-toast",data:function(){return{text:"",showing:!1,timer:null}},mounted:function(){s.a.toast={show:this.show}},methods:{show:function(t,e){var i=this;this.text=t,this.showing=!0,this.timer&&clearInterval(this.timer),this.timer=setTimeout(function(){i.showing=!1},e||this.$options.LENGTH_NORMAL)}}}},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"zm-toast"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showing,expression:"showing"}],staticClass:"zm-toast"},[i("div",{staticClass:"zm-toast-text"},[t._v(t._s(t.text))])])])},n=[],a={render:s,staticRenderFns:n};e.a=a},function(t,e,i){"use strict";var s=i(11),n=i(12),a=i(0),o=a(s.a,n.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";function s(t){t.preventDefault()}function n(t){if(!o)return t.clientX;if(t.touches||t.changedTouches)return(t.touches[0]||t.changedTouches[0]).clientX}function a(t){if(!o)return t.clientY;if(t.touches||t.changedTouches)return(t.touches[0]||t.changedTouches[0]).clientY}var o="ontouchstart"in window;e.a={name:"zm-carousel",props:{list:{type:Array,default:[]},auto:{type:Number,default:0}},data:function(){return{winWidth:window.innerWidth,page:0,manualOffset:0,startX:0,startY:0,moveStartTime:0,slideParams:{startMoveDistance:20,minMoveDistance:40,minMoveSpeed:150}}},computed:{transformObj:function(){var t=-1*this.winWidth*this.page+this.manualOffset,e="translate3d("+t+"px, 0, 0)",i={"-webkit-transform":e,transform:e};return 0!=this.manualOffset&&(i.transition="none"),i}},methods:{slideNext:function(){this.page<this.list.length-1&&this.page++},slidePrev:function(){this.page>0&&this.page--},sliderTo:function(t){this.page=t},swipeStartMouse:function(t){o||this.swipeStart(t)},swipeStart:function(t){this.startX=n(t),this.startY=a(t),this.autoPlayPause()},swipeMoveMouse:function(t){o||this.swipeMove(t)},swipeMove:function(t){if(this.startX){o||t.preventDefault();var e=n(t),i=a(t),c=e-this.startX,r=i-this.startY,l=this.slideParams.startMoveDistance;Math.abs(c)<l||Math.abs(c)<2*Math.abs(r)||(this.manualOffset=c-l*(c/Math.abs(c)),this.moveStartTime||(this.moveStartTime=Date.now()),document.addEventListener("touchmove",s))}},swipeEndMouse:function(t){o||this.swipeEnd(t)},swipeEnd:function(t){document.removeEventListener("touchmove",s);var e=n(t),i=e-this.startX,a=Math.abs(i),o=Math.abs(Date.now()-this.moveStartTime),c=a/(o/1e3);0==this.manualOffset&&this.carouselClick(),this.manualOffset=0,this.startX=0,this.moveStartTime=0,a>this.slideParams.minMoveDistance&&c>this.slideParams.minMoveSpeed&&(i<0?this.slideNext():this.slidePrev()),this.autoPlay()},autoPlay:function(){var t=this;this.auto&&!this.autoPlayTimer&&(this.autoPlayTimer=setInterval(function(){t.page=(t.page+1)%t.list.length},parseInt(this.auto)))},autoPlayPause:function(){this.autoPlayTimer&&(clearInterval(this.autoPlayTimer),this.autoPlayTimer=null)},carouselClick:function(){var t=this.list[this.page];t.href?location.href=t.href:this.$emit("carousel-click",t)}},mounted:function(){var t=this;this.autoPlay(),window.addEventListener("resize",function(){t.winWidth=window.innerWidth})}}},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zm-carousel",on:{touchstart:t.swipeStart,touchmove:t.swipeMove,touchend:t.swipeEnd,mousedown:t.swipeStartMouse,mousemove:t.swipeMoveMouse,mouseup:t.swipeEndMouse}},[i("div",{staticClass:"zm-carousel-list",style:t.transformObj},t._l(t.list,function(t){return i("div",{staticClass:"zm-carousel-img-wrap"},[i("img",{staticClass:"zm-carousel-img",attrs:{src:t.url,alt:""}})])})),t._v(" "),i("div",{staticClass:"zm-carousel-points"},t._l(t.list.length,function(e){return i("div",{staticClass:"zm-carousel-point-wrap",on:{click:function(i){i.stopPropagation(),t.sliderTo(e-1)}}},[i("div",{staticClass:"zm-carousel-point",class:{highlight:t.page==e-1}})])}))])},n=[],a={render:s,staticRenderFns:n};e.a=a},function(t,e,i){"use strict";var s=i(14),n=i(15),a=i(0),o=a(s.a,n.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";var s=i(2);e.a={name:"zm-loading",data:function(){return{text:"",showing:!1,isModal:!1}},mounted:function(){s.a.loading={show:this.show,hide:this.hide}},methods:{show:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.text=t||"加载中",this.isModal=e,this.showing=!0},hide:function(){this.showing=!1}}}},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"zm-loading"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showing,expression:"showing"}],staticClass:"zm-loading",class:{modal:t.isModal}},[i("div",{staticClass:"zm-loading-main"},[i("div",{staticClass:"zm-loading-icon"}),t._v(" "),i("div",{staticClass:"zm-loading-text"},[t._v(t._s(t.text))])])])])},n=[],a={render:s,staticRenderFns:n};e.a=a},function(t,e,i){"use strict";var s=i(17),n=i(18),a=i(0),o=a(s.a,n.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";var s=i(1);e.a={name:"zm-number-keyboard",mixins:[s.a],props:{maxValue:{type:Number,default:Number.MAX_VALUE},maxDecimal:{type:Number,default:2}},data:function(){return{show:!1,value:""}},watch:{value:function(t){this.$emit("input",t)}},methods:{open:function(t){this.value=String(t||""),this.show=!0},append:function(t){var e=this.value+String(t);if(parseFloat(e)>this.maxValue)return void this.$toast().show("最大值限制为"+this.maxValue);var i=e.indexOf(".");if(i>=0&&e.length-1-i>this.maxDecimal)return void this.$toast().show("最大小数位为"+this.maxDecimal);this.value=e},point:function(){-1===this.value.indexOf(".")&&(this.value+=".")},backSpace:function(){this.value&&(this.value=this.value.substring(0,this.value.length-1))},hide:function(){this.show=!1},cancel:function(){this.$emit("cancel",this.value),this.hide()},ok:function(){this.$emit("ok",this.value),this.hide()}}}},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",{attrs:{name:"zm-enter-from-bottom"}},[t.show?i("div",{staticClass:"zm-number-keyboard",on:{click:function(t){t.stopPropagation()}}},[t._t("default"),t._v(" "),i("table",{staticClass:"zm-keyboard-table"},[i("tbody",[i("tr",[i("td",{on:{click:function(e){t.append(1)}}},[t._v("1")]),t._v(" "),i("td",{on:{click:function(e){t.append(2)}}},[t._v("2")]),t._v(" "),i("td",{on:{click:function(e){t.append(3)}}},[t._v("3")]),t._v(" "),i("td",{staticClass:"zm-keyboard-delete",attrs:{rowspan:"2"},on:{click:t.backSpace}})]),t._v(" "),i("tr",[i("td",{on:{click:function(e){t.append(4)}}},[t._v("4")]),t._v(" "),i("td",{on:{click:function(e){t.append(5)}}},[t._v("5")]),t._v(" "),i("td",{on:{click:function(e){t.append(6)}}},[t._v("6")])]),t._v(" "),i("tr",[i("td",{on:{click:function(e){t.append(7)}}},[t._v("7")]),t._v(" "),i("td",{on:{click:function(e){t.append(8)}}},[t._v("8")]),t._v(" "),i("td",{on:{click:function(e){t.append(9)}}},[t._v("9")]),t._v(" "),i("td",{staticClass:"zm-keyboard-ok",attrs:{rowspan:"2"},on:{click:t.ok}},[t._v("确定")])]),t._v(" "),i("tr",[i("td",{on:{click:t.point}},[t._v(".")]),t._v(" "),i("td",{on:{click:function(e){t.append(0)}}},[t._v("0")]),t._v(" "),i("td",{staticClass:"zm-keyboard-cancel",on:{click:t.cancel}})])])])],2):t._e()]),t._v(" "),i("transition",{attrs:{name:"zm-shadow"}},[t.show?i("div",{staticClass:"zm-shadow",on:{click:t.cancel}}):t._e()])],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},function(t,e,i){"use strict";var s=i(20),n=i(21),a=i(0),o=a(s.a,n.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";var s=i(1);e.a={name:"zm-single-select",mixins:[s.a],props:{options:{type:Array,default:[]},textKey:{type:String,default:""},valueKey:{type:String,default:""}},data:function(){return{show:!1,selected:null}},methods:{open:function(t){var e=this;this.show=!0;var i=this.options.filter(function(i){return(e.valueKey?i[e.valueKey]:i)==t});i.length&&(this.selected=i[0])},ok:function(){this.show=!1,this.$emit("value",this.selected)},cancel:function(){this.show=!1},chooseOption:function(t){this.selected=t},getOptionText:function(t){return t?this.textKey?t[this.textKey]:t:null}}}},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zm-single-select"},[i("transition",{attrs:{name:"zm-enter-from-bottom"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"zm-single-select-main"},[i("div",{staticClass:"zm-single-select-header"},[i("div",{staticClass:"zm-single-select-current"},[t._v(t._s(t.getOptionText(t.selected)||"请选择"))]),t._v(" "),i("button",{staticClass:"zm-single-select-ok",attrs:{disabled:!t.selected},on:{click:t.ok}},[t._v("确定")])]),t._v(" "),i("div",{staticClass:"zm-single-select-list"},t._l(t.options,function(e){return i("div",{staticClass:"zm-single-select-item",class:{selected:t.selected==e},on:{click:function(i){t.chooseOption(e)}}},[t._v("\n                    "+t._s(t.getOptionText(e))+"\n                ")])}))])]),t._v(" "),i("transition",{attrs:{name:"zm-shadow"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"zm-shadow",on:{click:t.cancel}})])],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},function(t,e,i){"use strict";var s=i(23),n=i(24),a=i(0),o=a(s.a,n.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";var s=i(1);e.a={name:"zm-multiple-select",mixins:[s.a],props:{title:{type:String,default:"请选择"},options:{type:Array,default:function(){return[]}},textKey:{type:String,default:""},valueKey:{type:String,default:""},maxSelected:{type:Number,default:1e4},readonly:{type:Boolean,default:!1}},data:function(){return{show:!1,selectedList:[]}},methods:{open:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.show=!0,this.selectedList=this.options.filter(function(i){var s=t.valueKey?i[t.valueKey]:i;return-1!==e.indexOf(s)})},ok:function(){this.show=!1,this.$emit("value",JSON.parse(JSON.stringify(this.selectedList)))},cancel:function(){this.show=!1},toggleOption:function(t){if(!this.readonly){var e=this.selectedList.indexOf(t);-1===e?this.selectedList.length>=this.maxSelected?this.$toast&&this.$toast().show("最多可选"+this.maxSelected+"项",1500):this.selectedList.push(t):this.selectedList.splice(e,1)}},isSelected:function(t){return-1!==this.selectedList.indexOf(t)},getOptionText:function(t){return t?this.textKey?t[this.textKey]:t:null}}}},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zm-multiple-select"},[i("transition",{attrs:{name:"zm-enter-from-right"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"zm-multiple-select-main"},[i("zm-header",{attrs:{inline:!0,btn:t.readonly?null:{text:"确定",emit:"ok"},"left-btn":{text:"取消",emit:"cancel"}},on:{ok:t.ok,cancel:t.cancel}},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"zm-multiple-select-list"},t._l(t.options,function(e){return i("div",{staticClass:"zm-multiple-select-item",class:{selected:t.isSelected(e)},on:{click:function(i){t.toggleOption(e)}}},[t._v(t._s(t.getOptionText(e)))])}))],1)]),t._v(" "),i("transition",{attrs:{name:"zm-shadow"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"zm-shadow",on:{click:function(e){t.show=!1}}})])],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},function(t,e,i){"use strict";var s=i(26),n=i(27),a=i(0),o=a(s.a,n.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var n=i(1);e.a={name:"zm-district-select",mixins:[n.a],props:{options:{type:Array,default:[]},textKey:{type:String,default:"text"},valueKey:{type:String,default:"id"},childrenKey:{type:String,default:"children"}},data:function(){return{show:!1,province:null,city:null,county:null,level:0}},computed:{isSelectFinish:function(){return this.province&&this.city&&this.county&&3==this.level}},methods:{open:function(){this.show=!0},ok:function(){var t;this.show=!1,this.$emit("value",(t={},s(t,this.valueKey,this.county[this.valueKey]),s(t,"district",[this.province[this.textKey],this.city[this.textKey],this.county[this.textKey]]),t))},chooseProvince:function(t){var e=this;t!==this.province&&(this.city=null,this.county=null),this.province=t,this.level=1,1===this.province[this.childrenKey].length&&this.chooseCity(this.province[this.childrenKey][0]),this.$nextTick(function(){e.$refs.citySelectColumn.style.width=e.$refs.cityListColumn.offsetWidth+"px",e.$refs.cityListColumn.scrollTop=0})},chooseCity:function(t){var e=this;t!==this.city&&(this.county=null),this.city=t,this.level=2,this.$nextTick(function(){e.$refs.countySelectColumn.style.width=e.$refs.countyListColumn.offsetWidth+"px",e.$refs.countyListColumn.scrollTop=0})},chooseCounty:function(t){this.county=t,this.level=3}}}},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zm-single-select"},[i("transition",{attrs:{name:"zm-enter-from-bottom"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"zm-single-select-main"},[i("div",{staticClass:"zm-single-select-header"},[i("div",{staticClass:"zm-district-select-current-list"},[i("div",{staticClass:"zm-district-select-current-wrap"},[i("div",{staticClass:"zm-district-select-current",class:{selected:1==t.level}},[t._v(t._s(t.province&&t.province[t.textKey]||"所在省"))])]),t._v(" "),i("div",{ref:"citySelectColumn",staticClass:"zm-district-select-current-wrap"},[i("div",{staticClass:"zm-district-select-current",class:{selected:2==t.level}},[t._v(t._s(t.city&&t.city[t.textKey]||"所在市"))])]),t._v(" "),i("div",{ref:"countySelectColumn",staticClass:"zm-district-select-current-wrap"},[i("div",{staticClass:"zm-district-select-current",class:{selected:3==t.level}},[t._v(t._s(t.county&&t.county[t.textKey]||"所在县"))])])]),t._v(" "),i("button",{staticClass:"zm-single-select-ok",attrs:{disabled:!t.isSelectFinish},on:{click:t.ok}},[t._v("确定")])]),t._v(" "),i("div",{staticClass:"zm-district-select-list"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.level>=0,expression:"level >= 0"}],staticClass:"zm-district-select-list-column"},t._l(t.options,function(e){return i("div",{staticClass:"zm-district-select-item",class:{selected:t.province==e},on:{click:function(i){t.chooseProvince(e)}}},[t._v(t._s(e[t.textKey]))])})),t._v(" "),t.province&&t.province[t.childrenKey]?i("div",{directives:[{name:"show",rawName:"v-show",value:t.level>=1,expression:"level >= 1"}],ref:"cityListColumn",staticClass:"zm-district-select-list-column"},t._l(t.province[t.childrenKey],function(e){return i("div",{staticClass:"zm-district-select-item",class:{selected:t.city==e},on:{click:function(i){t.chooseCity(e)}}},[t._v(t._s(e[t.textKey]))])})):t._e(),t._v(" "),t.city&&t.city[t.childrenKey]?i("div",{directives:[{name:"show",rawName:"v-show",value:t.level>=2,expression:"level >= 2"}],ref:"countyListColumn",staticClass:"zm-district-select-list-column"},t._l(t.city[t.childrenKey],function(e){return i("div",{staticClass:"zm-district-select-item",class:{selected:t.county==e},on:{click:function(i){t.chooseCounty(e)}}},[t._v(t._s(e[t.textKey]))])})):t._e()])])]),t._v(" "),i("transition",{attrs:{name:"zm-shadow"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"zm-shadow",on:{click:function(e){t.show=!1}}})])],1)},n=[],a={render:s,staticRenderFns:n};e.a=a}])});