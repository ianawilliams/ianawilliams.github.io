(function(){"use strict";var t={9409:function(t,e,s){var i=s(2856),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("Recipe Auto Complete")]),e("div",{staticClass:"main-item"},[e("div",{staticClass:"main-item__label"},[t._v(" Absolute: ")]),e("AutoCompleteVue",{attrs:{absolute:"",options:t.list,"place-holder":"find something..."}})],1),e("div",{staticClass:"main-item"},[e("div",{staticClass:"main-item__label"},[t._v(" Relative: ")]),e("AutoCompleteVue",{attrs:{options:t.list,"place-holder":"find something..."}})],1),e("div",{staticClass:"main-item"},[e("div",{staticClass:"main-item__label"},[t._v(" Absolute - Suggest All: ")]),e("AutoCompleteVue",{attrs:{absolute:"",suggestAll:"",options:t.list,"place-holder":"find something..."}})],1)])},a=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"auto-complete",class:{"auto-complete--active":t.showDropdown,"auto-complete--absolute":t.absolute}},[e("SearchBar",{attrs:{"place-holder":t.placeHolder,dropdownActive:t.showDropdown},on:{focus:function(e){t.searchActive=!0},blur:function(e){t.searchActive=!1}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t.showDropdown?e("div",{staticClass:"auto-complete__dropdown"},[t._t("default",(function(){return[e("ResultsList",{attrs:{list:t.results},on:{"select-item":t.selectItem}})]}))],2):t._e()],1)},r=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-bar",class:{"search-bar--active":t.active}},[e("div",{staticClass:"search-bar__input"},[e("label",[e("span",{staticClass:"material-icons search-bar__icon"},[t._v("search")]),e("input",{attrs:{type:"text",placeholder:t.placeHolder},domProps:{value:t.value},on:{input:t.updateVal,focus:function(e){return t.activate(!0)},blur:function(e){return t.activate(!1)}}})])]),t.clearable?[e("button",{staticClass:"btn--icon btn--clear",class:{hidden:!t.showClear},on:{click:function(e){return t.$emit("input","")}}},[e("span",{staticClass:"material-icons"},[t._v("close")])])]:t._e()],2)},u=[],c={name:"SearchBar",props:{value:{type:String},placeHolder:{default:"Search...",type:String},clearable:{default:!0,type:Boolean},dropdownActive:{default:!1,type:Boolean}},data(){return{active:!1}},computed:{showClear(){return this.value&&this.value.length>0}},methods:{updateVal(t){this.$emit("input",t.target.value)},activate(t){this.active=t,this.$emit(t?"focus":"blur")}}},p=c,d=s(1656),h=(0,d.A)(p,o,u,!1,null,"3bfe271a",null),f=h.exports,v=function(){var t=this,e=t._self._c;return e("div",[t.loading?e("div",{staticClass:"result-list__msg"},[t._m(0)]):t.list.length>0?t._l(t.list,(function(s,i){return e("ResultItem",{key:i,attrs:{item:s},on:{"select-item":function(e){return t.$emit("select-item",s)}}})})):e("div",{staticClass:"result-list__msg"},[t._v(" "+t._s(t.emptyMsg)+" ")])],2)},m=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"lds-ellipsis"},[e("div"),e("div"),e("div"),e("div")])}],_=function(){var t=this,e=t._self._c;return e("div",[e("button",{staticClass:"btn-result btn--unstyled",on:{click:function(e){return t.$emit("select-item",t.item)}}},[t._v(" "+t._s(t.item)+" ")])])},g=[],b={name:"ResultList",props:{item:{type:String},searchTerm:{type:String}}},C=b,y=(0,d.A)(C,_,g,!1,null,"00af261e",null),A=y.exports,w={name:"ResultList",components:{ResultItem:A},props:{emptyMsg:{default:"No Results",type:String},searchTerm:{type:String},loading:{type:Boolean,default:!1},list:{type:Array,default:()=>[]}}},S=w,k=(0,d.A)(S,v,m,!1,null,"5b24d3ce",null),x=k.exports,R={name:"AutoComplete",components:{SearchBar:f,ResultsList:x},props:{placeHolder:{default:"Search...",type:String},absolute:{type:Boolean,default:!1},suggestAll:{type:Boolean,default:!1},options:{type:Array,default:()=>[]}},data(){return{value:"",searchActive:!1}},computed:{hasValue(){return this.value&&this.value.length>0},showDropdown(){return this.suggestAll&&this.searchActive||this.hasValue},results(){return this.hasValue&&this.options.length>0?this.options.filter((t=>t.toLowerCase().includes(this.value.toLowerCase()))):this.suggestAll?this.options:[]}},methods:{selectItem(t){this.value=t}}},O=R,B=(0,d.A)(O,l,r,!1,null,"a55cd0f4",null),V=B.exports,P={name:"App",components:{AutoCompleteVue:V},data(){return{searchTerm:"",list:["Ratatouille","Pizza","Pasta","Pie","Burger","Ramen","Fries","Spaghetti","Chicken Nuggets","Shrimp","Tamale","Chicken cordon bleu","Chicken Parm","Fried Rice","Fried Chicken"]}}},T=P,j=(0,d.A)(T,n,a,!1,null,null,null),L=j.exports;i.Ay.config.productionTip=!1,new i.Ay({render:t=>t(L)}).$mount("#app")}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,i,n,a){if(!i){var l=1/0;for(c=0;c<t.length;c++){i=t[c][0],n=t[c][1],a=t[c][2];for(var r=!0,o=0;o<i.length;o++)(!1&a||l>=a)&&Object.keys(s.O).every((function(t){return s.O[t](i[o])}))?i.splice(o--,1):(r=!1,a<l&&(l=a));if(r){t.splice(c--,1);var u=n();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[i,n,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,a,l=i[0],r=i[1],o=i[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(o)var c=o(s)}for(e&&e(i);u<l.length;u++)a=l[u],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(c)},i=self["webpackChunkauto_complete"]=self["webpackChunkauto_complete"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[504],(function(){return s(9409)}));i=s.O(i)})();
//# sourceMappingURL=app.4405ff02.js.map