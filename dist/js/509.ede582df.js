(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[509],{7509:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>m});r(8309);var n=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"page-title"},[t._v("Friends Recipes")]),e("img",{staticClass:"page-image",attrs:{src:"https://www.hollywoodreporter.com/wp-content/uploads/2020/11/FriendsThanksgiving-1606447619.jpg?w=1296",alt:"Friends Thanksgiving"}}),t.recipes.length?e("div",{staticClass:"recipes-container"},t._l(t.recipes,(function(r){return e("div",{key:r.id,staticClass:"recipe-card"},[e("img",{staticClass:"recipe-image",attrs:{src:r.image,alt:"recipe image"}}),e("h2",{staticClass:"recipe-title"},[t._v(t._s(r.name))]),e("p",{staticClass:"recipe-info"},[t._v("By: "+t._s(r.character))]),e("p",{staticClass:"recipe-info"},[t._v("Occasion: "+t._s(r.occasion))]),e("button",{on:{click:function(e){return t.toggleDetails(r.id)}}},[t._v(" "+t._s(r.showDetails?"Show Less":"Show More")+" ")]),r.showDetails?e("div",{staticClass:"recipe-details"},[e("h3",[t._v("Ingredients:")]),e("ul",t._l(r.ingredients,(function(r){return e("li",{key:r},[t._v(t._s(r))])})),0),e("h3",[t._v("Instructions:")]),e("ol",t._l(r.instructions,(function(r){return e("li",{key:r},[t._v(t._s(r))])})),0)]):t._e()])})),0):e("div",[e("p",[t._v("No recipes found")])])])},i=[],s=r(124),a=(r(7941),r(2526),r(7327),r(1539),r(5003),r(7658),r(9554),r(4747),r(9337),r(3321),r(9070),r(3336));r(6649),r(6078),r(1817),r(1703),r(6647),r(9653);function o(t,e){if("object"!==(0,a.Z)(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==(0,a.Z)(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function c(t){var e=o(t,"string");return"symbol"===(0,a.Z)(e)?e:String(e)}function u(t,e,r){return e=c(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=r(8534),v=(r(1249),r(9826),r(4830));const g={data:function(){return{recipes:[]}},methods:{loadRecipes:function(){var t=this;return(0,p.Z)((0,s.Z)().mark((function e(){var r;return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,v.Te)();case 2:r=e.sent,t.recipes=r.map((function(t){return f(f({},t),{},{showDetails:!1})}));case 4:case"end":return e.stop()}}),e)})))()},toggleDetails:function(t){var e=this.recipes.find((function(e){return e.id===t}));e.showDetails=!e.showDetails}},mounted:function(){this.loadRecipes()}},h=g;var b=r(1001),d=(0,b.Z)(h,n,i,!1,null,"2c687e3a",null);const m=d.exports},8709:(t,e,r)=>{"use strict";var n=r(9670),i=r(2140),s=TypeError;t.exports=function(t){if(n(this),"string"===t||"default"===t)t="string";else if("number"!==t)throw s("Incorrect hint");return i(this,t)}},863:(t,e,r)=>{var n=r(1702);t.exports=n(1..valueOf)},6078:(t,e,r)=>{var n=r(2597),i=r(8052),s=r(8709),a=r(5112),o=a("toPrimitive"),c=Date.prototype;n(c,o)||i(c,o,s)},9653:(t,e,r)=>{"use strict";var n=r(2109),i=r(1913),s=r(9781),a=r(7854),o=r(857),c=r(1702),u=r(4705),l=r(2597),f=r(9587),p=r(7976),v=r(2190),g=r(7593),h=r(7293),b=r(8006).f,d=r(1236).f,m=r(3070).f,w=r(863),_=r(3111).trim,y="Number",O=a[y],N=o[y],j=O.prototype,I=a.TypeError,P=c("".slice),E=c("".charCodeAt),k=function(t){var e=g(t,"number");return"bigint"==typeof e?e:D(e)},D=function(t){var e,r,n,i,s,a,o,c,u=g(t,"number");if(v(u))throw I("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=_(u),e=E(u,0),43===e||45===e){if(r=E(u,2),88===r||120===r)return NaN}else if(48===e){switch(E(u,1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+u}for(s=P(u,2),a=s.length,o=0;o<a;o++)if(c=E(s,o),c<48||c>i)return NaN;return parseInt(s,n)}return+u},S=u(y,!O(" 0o1")||!O("0b1")||O("+0x1")),C=function(t){return p(j,t)&&h((function(){w(t)}))},T=function(t){var e=arguments.length<1?0:O(k(t));return C(this)?f(Object(e),this,T):e};T.prototype=j,S&&!i&&(j.constructor=T),n({global:!0,constructor:!0,wrap:!0,forced:S},{Number:T});var F=function(t,e){for(var r,n=s?b(e):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),i=0;n.length>i;i++)l(e,r=n[i])&&!l(t,r)&&m(t,r,d(e,r))};i&&N&&F(o[y],N),(S||i)&&F(o[y],O)},3321:(t,e,r)=>{var n=r(2109),i=r(9781),s=r(6048).f;n({target:"Object",stat:!0,forced:Object.defineProperties!==s,sham:!i},{defineProperties:s})},5003:(t,e,r)=>{var n=r(2109),i=r(7293),s=r(5656),a=r(1236).f,o=r(9781),c=!o||i((function(){a(1)}));n({target:"Object",stat:!0,forced:c,sham:!o},{getOwnPropertyDescriptor:function(t,e){return a(s(t),e)}})},9337:(t,e,r)=>{var n=r(2109),i=r(9781),s=r(3887),a=r(5656),o=r(1236),c=r(6135);n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),i=o.f,u=s(n),l={},f=0;while(u.length>f)r=i(n,e=u[f++]),void 0!==r&&c(l,e,r);return l}})},7941:(t,e,r)=>{var n=r(2109),i=r(7908),s=r(1956),a=r(7293),o=a((function(){s(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(t){return s(i(t))}})},6649:(t,e,r)=>{var n=r(6800),i=r(6532);n("toPrimitive"),i()}}]);
//# sourceMappingURL=509.ede582df.js.map