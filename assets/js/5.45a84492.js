(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{63:function(t,n,s){},64:function(t,n,s){},65:function(t,n,s){"use strict";var e={props:["menus"]},a=(s(66),s(19)),i=Object(a.a)(e,function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"dropdown"},[t._t("default"),t._v(" "),s("div",{staticClass:"main"},[s("ul",t._l(t.menus,function(n){return s("li",[s("a",{attrs:{href:n.url||"javascript:void(0);"}},[t._v(t._s(n.title))])])}))])],2)},[],!1,null,"2821b24b",null);i.options.__file="dropdown.vue";var o={data:function(){return{menus:[{url:"/",title:"首页"},{url:"/archive/",title:"归档"}]}},components:{Dropdown:i.exports}},c=(s(68),Object(a.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"navbar flex-row space-between"},[n("a",{staticClass:"logo",attrs:{href:"/"}}),this._v(" "),n("div",{staticClass:"menu"},[n("dropdown",{attrs:{menus:this.menus}},[n("i",{staticClass:"iconfont icon-ic_menu"})])],1)])},[],!1,null,"778de508",null));c.options.__file="navbar.vue";n.a=c.exports},66:function(t,n,s){"use strict";var e=s(63);s.n(e).a},68:function(t,n,s){"use strict";var e=s(64);s.n(e).a},72:function(t,n,s){},79:function(t,n,s){"use strict";var e=s(72);s.n(e).a},84:function(t,n,s){"use strict";s.r(n);var e={components:{Navbar:s(65).a},mounted:function(){console.log(this.$page)}},a=(s(79),s(19)),i=Object(a.a)(e,function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"container"},[s("navbar"),t._v(" "),s("div",{staticClass:"main flex-col col-center"},[s("div",{staticClass:"post"},[s("div",{staticClass:"date"},[t._v(t._s(t._f("date")(t.$page.lastUpdated)))]),t._v(" "),s("h1",{staticClass:"title"},[t._v(t._s(t.$page.title))]),t._v(" "),s("Content",{staticClass:"content"})],1)])],1)},[],!1,null,"0bca84e4",null);i.options.__file="post.vue";n.default=i.exports}}]);