(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73aad73c"],{"269a":function(t,e){t.exports=function(t,e){var a="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var n in"function"===typeof t.exports&&(a.directives=t.exports.options.directives),a.directives=a.directives||{},e)a.directives[n]=a.directives[n]||e[n]}},"6b03":function(t,e,a){"use strict";var n=a("a47b"),r=a.n(n);r.a},"794e":function(t,e,a){"use strict";var n=a("ba0e"),r=a.n(n);r.a},"7f16":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("Navbar"),a("Transition",[a("router-view")],1),a("Footer",{directives:[{name:"show",rawName:"v-show",value:"/"!=t.$route.path,expression:"$route.path != '/'"}]})],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{class:{"header-custo":!0,"background-1":t.typeMenu,"background-2":!t.typeMenu}},[a("nav",{staticClass:"navbar elevation-8"},[a("div",{staticClass:"container text-center"},[a("v-row",{attrs:{cols:"12",align:"center"}},[a("v-col",{directives:[{name:"ripple",rawName:"v-ripple"}]},[a("a",{staticStyle:{color:"#fff","text-decoration":"none"},attrs:{href:"/#/"}},[a("span",{staticClass:"logo"},[t._v("Abismo Studios")])])]),a("v-col",[a("div",{staticClass:"menuLinks"},t._l(t.menu,(function(e,n){return a("a",{key:n,class:{active:t.$route.path==e.href},attrs:{href:"#"+e.href}},[t._v(t._s(e.title))])})),0)])],1)],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:"/"!=t.$route.path,expression:"$route.path != '/'"}],staticClass:"space"})])},i=[],s={name:"Navbar",mounted:function(){console.log(this.$route.path)},data:function(){return{menu:[{title:"Inicio",href:"/"},{title:"Projetos",href:"/project"},{title:"Equipe",href:"/team"},{title:"Contato",href:"/contact"}]}},computed:{typeMenu:function(){return"/"!=this.$route.path}}},c=s,u=(a("6b03"),a("2877")),l=a("6544"),f=a.n(l),v=a("62ad"),d=a("0fd9"),h=a("269a"),p=a.n(h),m=a("5607"),b=Object(u["a"])(c,o,i,!1,null,null,null),w=b.exports;f()(b,{VCol:v["a"],VRow:d["a"]}),p()(b,{Ripple:m["a"]});var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"space"}),a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("v-row",{staticClass:"text-left",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{sm:"8"}},[a("div",[t._v(" Abismo Studios - © Todos os direitos reservados ")])]),a("v-col",{attrs:{sm:"4"}},[a("div",{staticClass:"text-left"},[t._v(" Obrigado por fazer parte da melhor comunidade web para Macacos Criativos! ")])])],1)],1)])])},y=[],x={name:"Footer"},C=x,_=(a("794e"),Object(u["a"])(C,g,y,!1,null,null,null)),$=_.exports;f()(_,{VCol:v["a"],VRow:d["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transitionName,mode:"out-in"},on:{beforeLeave:t.beforeLeave,enter:t.enter,afterEnter:t.afterEnter}},[t._t("default")],2)},E=[],j=(a("b0c0"),"fade"),k={data:function(){return{prevHeight:0,transitionName:j}},created:function(){var t=this;this.$router.beforeEach((function(e,a,n){var r=e.meta.transitionName;"DashboardPage"==e.name?"HomePage"!=a.name&&(t.transitionName="slide-right"):t.transitionName=r||j,n()}))},methods:{beforeLeave:function(t){document.body.style.overflow="hidden",this.prevHeight=getComputedStyle(t).height},enter:function(t){var e=getComputedStyle(t),a=e.height;t.style.height=this.prevHeight,setTimeout((function(){t.style.height=a}))},afterEnter:function(t){document.body.style.overflow="auto",t.style.height="auto"}}},O=k,S=(a("b254"),Object(u["a"])(O,N,E,!1,null,null,null)),H=S.exports,L={name:"",components:{Transition:H,Navbar:w,Footer:$},data:function(){return{}}},M=L,T=(a("cd0e"),Object(u["a"])(M,n,r,!1,null,null,null));e["default"]=T.exports},9856:function(t,e,a){},a47b:function(t,e,a){},b254:function(t,e,a){"use strict";var n=a("ed69"),r=a.n(n);r.a},ba0e:function(t,e,a){},cd0e:function(t,e,a){"use strict";var n=a("9856"),r=a.n(n);r.a},ed69:function(t,e,a){}}]);
//# sourceMappingURL=chunk-73aad73c.48523504.js.map