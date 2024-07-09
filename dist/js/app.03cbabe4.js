(()=>{"use strict";var e={431:(e,t,a)=>{a.d(t,{Z:()=>u});var i=function(){var e=this,t=e._self._c;return t("div",{class:["recipe-preview",{viewed:e.recipe.viewed}]},[t("div",{staticClass:"recipe-body"},[t("router-link",{attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}},nativeOn:{click:function(t){return e.markAsViewed.apply(null,arguments)}}},[t("div",{staticClass:"image-container"},[t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}}),t("div",{staticClass:"overlay"},[t("span",[e._v("View Recipe")])])])])],1),t("div",{staticClass:"recipe-footer"},[t("div",{staticClass:"recipe-info"},[t("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),t("div",{staticClass:"recipe-time"},[e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes ")])]),t("ul",{staticClass:"recipe-overview"},[t("li",[t("span",[e._v("Vegetarian:")]),t("div",{staticClass:"check-box"},[e.recipe.vegetarian?t("span",{staticClass:"check-mark"},[e._v("✓")]):e._e()])]),t("li",[t("span",[e._v("Vegan:")]),t("div",{staticClass:"check-box"},[e.recipe.vegan?t("span",{staticClass:"check-mark"},[e._v("✓")]):e._e()])]),t("li",[t("span",[e._v("Gluten Free:")]),t("div",{staticClass:"check-box"},[e.recipe.glutenFree?t("span",{staticClass:"check-mark"},[e._v("✓")]):e._e()])])]),t("div",{staticClass:"likes"},[t("span",[e._v(e._s(e.recipe.aggregateLikes)+" likes")])]),t("div",{staticClass:"icon-container"},[t("button",{staticClass:"favorite-btn",on:{click:e.toggleFavorite}},[e.isFavorite?t("span",{staticClass:"favorite-icon",style:{fontSize:e.favoriteIconSize+"px"}},[e._v("★")]):t("span",{staticClass:"favorite-icon",style:{fontSize:e.favoriteIconSize+"px"}},[e._v("☆")])]),t("span",{staticClass:"view-icon",class:{filled:e.recipe.viewed}},[e._v("👁")])])])])},n=[],r=(a(5212),a(1539),a(4830));const s={props:{recipe:{type:Object,required:!0}},data:function(){return{isFavorite:!1,favoriteIconSize:35}},mounted:function(){this.image_load=!0,this.checkFavorite()},methods:{markAsViewed:function(){this.recipe.viewed=!0,this.$emit("update-recipe",this.recipe),console.log(recipe.viewed)},toggleFavorite:function(){(0,r.a3)(this.recipe),this.isFavorite=!0},checkFavorite:function(){var e=this,t=(0,r._l)();this.isFavorite=t.some((function(t){return t.id===e.recipe.id}))}}},o=s;var c=a(1001),l=(0,c.Z)(o,i,n,!1,null,"483e1a46",null);const u=l.exports},8498:(e,t,a)=>{a.d(t,{Z:()=>u});var i=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",{staticClass:"text-center mb-4"},[e._v(" "+e._s(e.title)+" ")]),t("b-row",{staticClass:"justify-content-center"},e._l(e.recipes,(function(a){return t("b-col",{key:a.id,staticClass:"d-flex justify-content-center mb-3",attrs:{cols:"12",md:"6"}},[t("RecipePreview",{attrs:{recipe:a},on:{"update-recipe":e.updateRecipe}})],1)})),1)],1)},n=[],r=(a(4553),a(431));const s={name:"RecipePreviewList",components:{RecipePreview:r.Z},props:{title:{type:String,required:!0},recipes:{type:Array,required:!0}},methods:{updateRecipe:function(e){var t=this.recipes.findIndex((function(t){return t.id===e.id}));-1!==t&&this.$set(this.recipes,t,e)}}},o=s;var c=a(1001),l=(0,c.Z)(o,i,n,!1,null,"9647d7e0",null);const u=l.exports},2049:(e,t,a)=>{a(6992),a(8674),a(9601),a(7727),a(9554),a(1539),a(4747);var i=a(144),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{staticClass:"nav-link",attrs:{exact:"",to:{name:"main"}}},[e._v("Main Page")]),t("router-link",{staticClass:"nav-link",attrs:{to:{name:"search"}}},[e._v("Search")]),t("router-link",{staticClass:"nav-link",attrs:{to:{name:"about"}}},[e._v("About")]),e.$root.store.username?t("span",{staticClass:"user-info"},[t("span",{staticClass:"nav-text"},[e._v("Hello "+e._s(e.$root.store.username))]),t("b-button",{class:["custom-nav-link"],on:{click:function(t){e.showNewRecipeModal=!0}}},[e._v("Add New Recipe")]),t("div",{staticClass:"dropdown",on:{mouseenter:e.openDropdown,mouseleave:e.closeDropdown}},[t("button",{staticClass:"nav-link"},[e._v("Personal")]),e.dropdownOpen?t("div",{staticClass:"dropdown-content"},[t("router-link",{staticClass:"dropdown-link",attrs:{to:{name:"favorites"}}},[e._v("My Favorite Recipes")]),t("router-link",{staticClass:"dropdown-link",attrs:{to:{name:"familyrecipes"}}},[e._v("My Family Recipes")]),t("router-link",{staticClass:"dropdown-link",attrs:{to:{name:"myrecipes"}}},[e._v("My Recipes")])],1):e._e()]),t("button",{staticClass:"nav-link",on:{click:e.Logout}},[e._v("Logout")])],1):t("span",{staticClass:"user-info"},[t("span",{staticClass:"nav-text"},[e._v("Hello Guest")]),t("router-link",{staticClass:"nav-link",attrs:{to:{name:"register"}}},[e._v("Register")]),t("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"}}},[e._v("Login")])],1)],1),t("router-view"),t("NewRecipeModal",{attrs:{show:e.showNewRecipeModal},on:{recipeCreated:e.fetchRecipes,close:function(t){e.showNewRecipeModal=!1}}})],1)},r=[],s=(a(7658),a(9753),a(2222),a(7042),function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{title:"Create New Recipe"},on:{close:function(t){return e.$emit("close")}},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submitRecipe.apply(null,arguments)}}},[t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"title"}},[e._v("Title")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.title,expression:"newRecipe.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",required:""},domProps:{value:e.newRecipe.title},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"title",t.target.value)}}})]),t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"image"}},[e._v("Image URL")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.image,expression:"newRecipe.image"}],staticClass:"form-control",attrs:{type:"url",id:"image",required:""},domProps:{value:e.newRecipe.image},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"image",t.target.value)}}})]),t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"readyInMinutes"}},[e._v("Ready in Minutes")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.readyInMinutes,expression:"newRecipe.readyInMinutes"}],staticClass:"form-control",attrs:{type:"number",id:"readyInMinutes",required:""},domProps:{value:e.newRecipe.readyInMinutes},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"readyInMinutes",t.target.value)}}})]),t("div",{staticClass:"form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.vegetarian,expression:"newRecipe.vegetarian"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"vegetarian"},domProps:{checked:Array.isArray(e.newRecipe.vegetarian)?e._i(e.newRecipe.vegetarian,null)>-1:e.newRecipe.vegetarian},on:{change:function(t){var a=e.newRecipe.vegetarian,i=t.target,n=!!i.checked;if(Array.isArray(a)){var r=null,s=e._i(a,r);i.checked?s<0&&e.$set(e.newRecipe,"vegetarian",a.concat([r])):s>-1&&e.$set(e.newRecipe,"vegetarian",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.newRecipe,"vegetarian",n)}}}),t("label",{staticClass:"form-check-label",attrs:{for:"vegetarian"}},[e._v("Vegetarian")])]),t("div",{staticClass:"form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.vegan,expression:"newRecipe.vegan"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"vegan"},domProps:{checked:Array.isArray(e.newRecipe.vegan)?e._i(e.newRecipe.vegan,null)>-1:e.newRecipe.vegan},on:{change:function(t){var a=e.newRecipe.vegan,i=t.target,n=!!i.checked;if(Array.isArray(a)){var r=null,s=e._i(a,r);i.checked?s<0&&e.$set(e.newRecipe,"vegan",a.concat([r])):s>-1&&e.$set(e.newRecipe,"vegan",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.newRecipe,"vegan",n)}}}),t("label",{staticClass:"form-check-label",attrs:{for:"vegan"}},[e._v("Vegan")])]),t("div",{staticClass:"form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.glutenFree,expression:"newRecipe.glutenFree"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"glutenFree"},domProps:{checked:Array.isArray(e.newRecipe.glutenFree)?e._i(e.newRecipe.glutenFree,null)>-1:e.newRecipe.glutenFree},on:{change:function(t){var a=e.newRecipe.glutenFree,i=t.target,n=!!i.checked;if(Array.isArray(a)){var r=null,s=e._i(a,r);i.checked?s<0&&e.$set(e.newRecipe,"glutenFree",a.concat([r])):s>-1&&e.$set(e.newRecipe,"glutenFree",a.slice(0,s).concat(a.slice(s+1)))}else e.$set(e.newRecipe,"glutenFree",n)}}}),t("label",{staticClass:"form-check-label",attrs:{for:"glutenFree"}},[e._v("Gluten-Free")])]),t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"ingredients"}},[e._v("Ingredients")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.ingredientsInput,expression:"ingredientsInput"}],staticClass:"form-control",attrs:{id:"ingredients",rows:"3",placeholder:"Enter ingredients, each on a new line",required:""},domProps:{value:e.ingredientsInput},on:{input:function(t){t.target.composing||(e.ingredientsInput=t.target.value)}}})]),t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{for:"instructions"}},[e._v("Instructions")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.instructionsInput,expression:"instructionsInput"}],staticClass:"form-control",attrs:{id:"instructions",rows:"3",placeholder:"Enter instructions, each on a new line",required:""},domProps:{value:e.instructionsInput},on:{input:function(t){t.target.composing||(e.instructionsInput=t.target.value)}}})]),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")])])])}),o=[];a(3843),a(3710),a(1249),a(8862);const c={props:["show"],data:function(){return{showModal:this.show,newRecipe:{id:Date.now(),isUserCreated:!0,title:"",image:"",readyInMinutes:0,aggregateLikes:0,vegetarian:!1,vegan:!1,glutenFree:!1,extendedIngredients:[],instructions:[]},ingredientsInput:"",instructionsInput:""}},watch:{show:function(e){this.showModal=e},showModal:function(e){e||this.$emit("close")}},methods:{submitRecipe:function(){this.newRecipe.extendedIngredients=this.ingredientsInput.split("\n").map((function(e,t){return{id:t,original:e}})),this.newRecipe.analyzedInstructions=[{name:"Instructions",steps:this.instructionsInput.split("\n").map((function(e,t){return{number:t+1,step:e}}))}],console.log("New Recipe Data:",this.newRecipe);var e=JSON.parse(localStorage.getItem("recipes")||"[]");e.push(this.newRecipe),localStorage.setItem("recipes",JSON.stringify(e)),this.showModal=!1,this.$emit("recipeCreated",this.newRecipe),this.$emit("close")}}},l=c;var u=a(1001),p=(0,u.Z)(l,s,o,!1,null,"a4a523c8",null);const d=p.exports,m={name:"App",components:{NewRecipeModal:d},data:function(){return{dropdownOpen:!1,showNewRecipeModal:!1}},methods:{openDropdown:function(){this.dropdownOpen=!0},closeDropdown:function(){this.dropdownOpen=!1},Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.dropdownOpen=!1,this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))},fetchRecipes:function(){this.$root.store.fetchRecipes()}}},g=m;var h=(0,u.Z)(g,n,r,!1,null,null,null);const f=h.exports;var v=a(1939),b=a.n(v),w=a(9669),y=a.n(w),k=a(5002),C=(a(7024),a(8783),a(3948),function(){var e=this,t=e._self._c;return t("div",{staticClass:"container text-center"},[t("h1",{staticClass:"title my-4"},[e._v("Main Page")]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6 mb-4 d-flex flex-column align-items-center"},[t("RecipePreviewList",{attrs:{recipes:e.randomRecipes,title:"Explore these recipes:"}}),t("button",{staticClass:"btn btn-primary mt-3 refresh-button",on:{click:e.getRandomRecipes}},[e._v("Refresh Recipes")])],1),t("div",{staticClass:"col-md-6 mb-4 d-flex flex-column align-items-center justify-content-start"},[t("div",{staticClass:"mt-0 w-100"},[e.$root.store.username?t("div",[t("RecipePreviewList",{attrs:{recipes:e.lastWatchedRecipes,title:"Last watched recipes:"}})],1):t("div",[t("form",{staticClass:"login-form text-center",on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"username"}},[e._v("Username")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"password"}},[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),t("button",{staticClass:"btn btn-primary mt-2",attrs:{type:"submit"}},[e._v("Login")])]),t("p",{staticClass:"mt-2"},[e._v(" Do not have an account yet? "),t("router-link",{attrs:{to:"/register"}},[e._v("Register here")])],1)])])])])])}),R=[],_=a(5957),S=a(124),x=a(8534),I=a(8498),L=a(4830),P=a(9239);const F={components:{RecipePreviewList:I.Z},data:function(){return{allRecipes:[],randomRecipes:[],lastWatchedRecipes:[],username:"",password:""}},mounted:function(){var e=this;return(0,x.Z)((0,S.Z)().mark((function t(){return(0,S.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAllRecipes();case 2:e.getRandomRecipes(),e.getLastWatchedRecipes();case 4:case"end":return t.stop()}}),t)})))()},methods:{fetchAllRecipes:function(){var e=this;return(0,x.Z)((0,S.Z)().mark((function t(){var a;return(0,S.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{a=(0,L.ij)(10),e.allRecipes=a.data.recipes}catch(i){console.error(i)}case 1:case"end":return t.stop()}}),t)})))()},getRandomRecipes:function(){this.randomRecipes=this.getRandomItems(this.allRecipes,3)},getLastWatchedRecipes:function(){var e=(0,L.ij)(3);this.lastWatchedRecipes=e.data.recipes},getRandomItems:function(e,t){for(var a=(0,_.Z)(e),i=a.length-1;i>0;i--){var n=Math.floor(Math.random()*(i+1)),r=[a[n],a[i]];a[i]=r[0],a[n]=r[1]}return a.slice(0,t)},login:function(){var e=this;return(0,x.Z)((0,S.Z)().mark((function t(){var a;return(0,S.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{a=!0,(0,P.sD)(e.username,e.password,a),a?(e.$root.store.login(e.username),e.username="",e.password="",e.$router.go()):e.form.submitError="Login failed"}catch(i){console.log(i),e.form.submitError="Login failed"}case 1:case"end":return t.stop()}}),t)})))()}}},j=F;var M=(0,u.Z)(j,C,R,!1,null,"662c7166",null);const N=M.exports;var T=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",[e._v("Four Oh Four you didn't")]),t("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},O=[],A={},$=(0,u.Z)(A,T,O,!1,null,null,null);const D=$.exports;var Z=[{path:"/",name:"main",component:N},{path:"/register",name:"register",component:function(){return a.e(202).then(a.bind(a,6202))}},{path:"/login",name:"login",component:function(){return a.e(139).then(a.bind(a,4139))}},{path:"/search",name:"search",component:function(){return a.e(5).then(a.bind(a,1005))}},{path:"/recipe/:recipeId",name:"recipe",component:function(){return a.e(416).then(a.bind(a,2416))}},{path:"*",name:"notFound",component:D},{path:"/about",name:"about",component:function(){return a.e(742).then(a.bind(a,9742))}},{path:"/addrecipe",name:"addrecipe",component:function(){return a.e(21).then(a.bind(a,8021))}},{path:"/favorites",name:"favorites",component:function(){return a.e(126).then(a.bind(a,4126))}},{path:"/myrecipes",name:"myrecipes",component:function(){return a.e(26).then(a.bind(a,1026))}},{path:"/familyrecipes",name:"familyrecipes",component:function(){return a.e(509).then(a.bind(a,7509))}}];const B=Z;var E=a(8345),G=a(8620),q=a(508),z=a(7563),J=a(7419),U=a(1869),H=a(295),V=a(3090),W=a(794),Q=a(4063),Y=a(8793),K=a(7772);i["default"].use(E.ZP);var X=new E.ZP({routes:B});i["default"].use(k.ZPm),[q.E,z.w6,J.g,U.SY,H.xL,V.u3,W.v5,Q.F,Y.m$,K.A6].forEach((function(e){return i["default"].use(e)})),i["default"].use(G.ZP),y().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),y().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),i["default"].use(b(),y()),i["default"].config.productionTip=!1;var ee={server_domain:"http://localhost:3000",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(ee),new i["default"]({router:X,data:function(){return{store:ee}},methods:{toast:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:a,solid:!0,appendToast:i,autoHideDelay:3e3})}},render:function(e){return e(f)}}).$mount("#app")},9239:(e,t,a)=>{function i(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t)throw{status:409,response:{data:{message:"A user is already logged in",success:!1}}};return{status:200,response:{data:{message:"login succeeded",success:!0}}}}function n(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t)throw{status:409,response:{data:{message:"Username taken",success:!1}}};return{status:200,response:{data:{message:"user created",success:!0}}}}a.d(t,{Ge:()=>n,sD:()=>i})},4830:(e,t,a)=>{a.d(t,{a3:()=>m,Te:()=>p,_l:()=>g,iG:()=>l,ij:()=>c,J1:()=>u});var i=a(124),n=a(8534);a(7042),a(9826),a(1539),a(1058),a(7327),a(6699),a(2023),a(5212),a(7658),a(8862);const r=JSON.parse('[{"id":716432,"image":"https://www.allrecipes.com/thmb/XKubY0z2cSv0c0LTGJISzoJyoZI=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-21398-banana-pudding-ddmfs-4x3-beauty-e33f07af31724ccb9b3912f58eb84ab7.jpg","title":"Banana Pudding","readyInMinutes":70,"aggregateLikes":80,"vegetarian":true,"vegan":false,"glutenFree":false,"summary":"A banana pudding with cream cheese, condensed milk, and vanilla wafers that\'s quick and easy to make. Enjoy!"},{"id":716433,"image":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F31%2F11679-homemade-mac-and-cheese-chef-mo-3x2-1.jpg&q=60&c=sc&poi=auto&orient=true&h=512","title":"Homemade Mac and Cheese","readyInMinutes":20,"aggregateLikes":200,"vegetarian":true,"vegan":false,"glutenFree":false,"summary":"This mac and cheese recipe with a buttered bread crumb topping is creamy and comforting. It\'s easy to make the cheese sauce from scratch on your stovetop, starting with a roux and adding milk, Cheddar, and Parmesan, resulting in a rich, decadent sauce that coats every nook and cranny of the noodles."},{"id":716434,"image":"https://www.allrecipes.com/thmb/fCEfdizjzlWRGPKH5RPeehUSakU=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8650250_Roast-Beef-and-Cheddar-Sliders_Dotdash-Meredith-Food-Studios_4x3-3e2bc4bca7c54420877f936dc64dbdd4.jpg","title":"Roast Beef and Cheddar Sliders","readyInMinutes":85,"aggregateLikes":150,"vegetarian":true,"vegan":false,"glutenFree":false,"summary":"These roast beef and Cheddar sliders are so easy to put together, bake in just a few minutes, and are just as delicious as the fast-food favorite from your favorite roast beef restaurant. And you don\'t have to leave home."},{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":true,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>."},{"id":716430,"image":"https://www.allrecipes.com/thmb/ixtJjxqjwI-NR9s_eO5v7vO-vzE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/970837-376e87fe0b594d9ea7993ef61a503791.jpg","title":"Easy Asian Pasta Salad","readyInMinutes":60,"aggregateLikes":109,"vegetarian":true,"vegan":false,"glutenFree":true,"summary":"Cool pasta salad on a hot summer day is the perfect BBQ side dish. It is always one of the first things to go."},{"id":716431,"image":"https://www.allrecipes.com/thmb/sXvCPNr6s0jYrtgFX4RgjvQyZRY=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/70208_AmeliasTunaMacaroniSalad_ddmfs_4x3_2351-3ed4fab787fe497a8464674df8a592ad.jpg","title":"Tuna Macaroni Salad","readyInMinutes":40,"aggregateLikes":300,"vegetarian":true,"vegan":false,"glutenFree":false,"summary":"This tuna macaroni salad is easy to make with cooked pasta, celery, peas, relish, and mayonnaise. It will remind you of Grandma\'s! Enjoy this basic comfort food when the weather is warm."}]'),s=JSON.parse('[{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>.","analyzedInstructions":[{"name":"Preparation","steps":[{"number":1,"step":"In a large bowl, sift all-purpose flour, milk powder, baking powder, baking soda and salt. Stir in whole wheat flour. In a small bowl, combine sugar, eggs, water, butter and vinegar. Make a well in the flour mixture, and pour in the egg mixture. Mix until smooth."},{"number":2,"step":"Heat a lightly oiled griddle or frying pan over medium heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Cook until pancakes are golden brown on both sides; serve hot."}]}],"instructions":"","extendedIngredients":[{"id":1001,"aisle":"Milk, Eggs, Other Dairy","image":"butter-sliced.jpg","consistency":"SOLID","name":"butter","nameClean":"butter","original":"1 tbsp butter","originalName":"butter","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":10011135,"aisle":"Produce","image":"cauliflower.jpg","consistency":"SOLID","name":"cauliflower florets","nameClean":"cauliflower florets","original":"about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces","originalName":"about frozen cauliflower florets, thawed, cut into bite-sized pieces","amount":2,"unit":"cups","meta":["frozen","thawed","cut into bite-sized pieces"],"measures":{"us":{"amount":2,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":200,"unitShort":"g","unitLong":"grams"}}},{"id":1038,"aisle":"Cheese","image":"parmesan.jpg","consistency":"SOLID","name":"cheese","nameClean":"pecorino romano","original":"2 tbsp grated cheese (I used romano)","originalName":"grated cheese (I used romano)","amount":2,"unit":"tbsp","meta":["grated","(I used romano)"],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":1034053,"aisle":"Oil, Vinegar, Salad Dressing","image":"olive-oil.jpg","consistency":"LIQUID","name":"extra virgin olive oil","nameClean":"extra virgin olive oil","original":"1-2 tbsp extra virgin olive oil","originalName":"extra virgin olive oil","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":11215,"aisle":"Produce","image":"garlic.png","consistency":"SOLID","name":"garlic","nameClean":"garlic","original":"5-6 cloves garlic","originalName":"garlic","amount":5,"unit":"cloves","meta":[],"measures":{"us":{"amount":5,"unitShort":"cloves","unitLong":"cloves"},"metric":{"amount":5,"unitShort":"cloves","unitLong":"cloves"}}},{"id":10720420,"aisle":"Pasta and Rice","image":"spaghetti.jpg","consistency":"SOLID","name":"pasta","nameClean":"linguine","original":"6-8 ounces pasta (I used linguine)","originalName":"pasta (I used linguine)","amount":6,"unit":"ounces","meta":["(I used linguine)"],"measures":{"us":{"amount":6,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":170.097,"unitShort":"g","unitLong":"grams"}}},{"id":1032009,"aisle":"Spices and Seasonings","image":"red-pepper-flakes.jpg","consistency":"SOLID","name":"couple of pepper flakes","nameClean":"red pepper flakes","original":"couple of pinches red pepper flakes, optional","originalName":"couple of red pepper flakes, optional","amount":2,"unit":"pinches","meta":["red"],"measures":{"us":{"amount":2,"unitShort":"pinches","unitLong":"pinches"},"metric":{"amount":2,"unitShort":"pinches","unitLong":"pinches"}}},{"id":1102047,"aisle":"Spices and Seasonings","image":"salt-and-pepper.jpg","consistency":"SOLID","name":"salt and pepper","nameClean":"salt and pepper","original":"salt and pepper, to taste","originalName":"salt and pepper, to taste","amount":2,"unit":"servings","meta":["to taste"],"measures":{"us":{"amount":2,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":2,"unitShort":"servings","unitLong":"servings"}}},{"id":11291,"aisle":"Produce","image":"spring-onions.jpg","consistency":"SOLID","name":"scallions","nameClean":"spring onions","original":"3 scallions, chopped, white and green parts separated","originalName":"scallions, chopped, white and green parts separated","amount":3,"unit":"","meta":["white","green","separated","chopped"],"measures":{"us":{"amount":3,"unitShort":"","unitLong":""},"metric":{"amount":3,"unitShort":"","unitLong":""}}},{"id":14106,"aisle":"Alcoholic Beverages","image":"white-wine.jpg","consistency":"LIQUID","name":"white wine","nameClean":"dry white wine","original":"2-3 tbsp white wine","originalName":"white wine","amount":2,"unit":"tbsp","meta":[],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":99025,"aisle":"Pasta and Rice","image":"breadcrumbs.jpg","consistency":"SOLID","name":"bread crumbs","nameClean":"whole wheat breadcrumbs","original":"1/4 cup whole wheat bread crumbs (I used panko)","originalName":"whole wheat bread crumbs (I used panko)","amount":0.25,"unit":"cup","meta":["whole wheat","(I used panko)"],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":27,"unitShort":"g","unitLong":"grams"}}}],"servings":2}]'),o=JSON.parse('[{"id":1,"name":"Monica\'s Thanksgiving Turkey","character":"Monica Geller","occasion":"Thanksgiving","image":"https://deadline.com/wp-content/uploads/2020/11/MonicaFriends.jpeg","ingredients":["1 whole turkey","Salt and pepper to taste","1/2 cup butter, melted","1 onion, chopped","1 carrot, chopped","1 stalk celery, chopped","1 cup chicken broth"],"instructions":["Preheat oven to 325°F (165°C).","Season the turkey with salt and pepper inside and out.","Brush the turkey with melted butter.","Place onion, carrot, and celery inside the turkey cavity.","Place the turkey on a roasting rack in a roasting pan.","Pour chicken broth into the pan.","Roast the turkey for about 3 hours, or until the internal temperature reaches 165°F (75°C).","Let the turkey rest for 20 minutes before carving."]},{"id":2,"name":"Chandler\'s Cheesecake","character":"Chandler Bing","occasion":"Special Treat","image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjXWKAbUyCkUEggNlQf_sQJW3Ib9S1q6s9g&s","ingredients":["2 cups graham cracker crumbs","1/2 cup melted butter","4 packages (8 ounces each) cream cheese, softened","1 cup granulated sugar","1 teaspoon vanilla extract","4 large eggs","1 cup sour cream","1/4 cup all-purpose flour"],"instructions":["Preheat oven to 325°F (165°C).","Mix graham cracker crumbs and melted butter; press onto bottom of 9-inch springform pan.","Beat cream cheese, sugar, and vanilla with mixer until blended. Add eggs, 1 at a time, mixing on low speed after each just until blended. Add sour cream and flour; mix well.","Pour over crust.","Bake 55 minutes or until center is almost set. Run knife around rim of pan to loosen cake; cool before removing rim.","Refrigerate cheesecake 4 hours."]},{"id":3,"name":"Rachel\'s Trifle","character":"Rachel Green","occasion":"Dessert","image":"https://pyxis.nymag.com/v1/imgs/59e/3bc/3564ff52fb45976183eafb0a845c202bf7-16-friends-rachel-trifle.rsquare.w400.jpg","ingredients":["1 package of ladyfingers","1/2 cup sherry","1 cup raspberry jam","1 cup custard","1 cup whipped cream","1 cup sliced bananas","1 cup strawberries"],"instructions":["Layer the ladyfingers in a trifle dish.","Sprinkle sherry over the ladyfingers.","Spread raspberry jam over the ladyfingers.","Layer custard on top of the jam.","Add sliced bananas and strawberries.","Top with whipped cream.","Refrigerate for at least 2 hours before serving."]},{"id":4,"name":"Joey\'s Meatball Sub","character":"Joey Tribbiani","occasion":"Lunch","image":"https://people.com/thmb/4sPChlIOS5rQ503ZtrBttR-4q0s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(639x0:641x2)/joey-meatball-sub-4b4e13ee8ebd4c54af2d7c64d1149b95.jpg","ingredients":["1 sub roll","4 meatballs","1 cup marinara sauce","1/2 cup mozzarella cheese, shredded"],"instructions":["Preheat oven to 375°F (190°C).","Place meatballs in a sub roll.","Pour marinara sauce over the meatballs.","Sprinkle with mozzarella cheese.","Bake for 10-15 minutes, or until the cheese is melted and bubbly."]},{"id":5,"name":"Phoebe\'s Grandma\'s Cookies","character":"Phoebe Buffay","occasion":"Family Gathering","image":"https://i.redd.it/tiqli3cjom5a1.jpg","ingredients":["1 cup butter, softened","1 cup white sugar","1 cup brown sugar","2 eggs","1 tsp vanilla extract","2 cups all-purpose flour","1 tsp baking soda","1/2 tsp salt","2 cups semisweet chocolate chips"],"instructions":["Preheat oven to 350°F (175°C).","Cream together butter and sugars until smooth.","Beat in eggs one at a time, then stir in vanilla.","Combine flour, baking soda, and salt; gradually blend into the butter mixture.","Stir in chocolate chips.","Drop by spoonfuls onto ungreased cookie sheets.","Bake for 8-10 minutes, or until edges are nicely browned."]},{"id":6,"name":"Ross\'s Moist Maker Sandwich","character":"Ross Geller","occasion":"Post-Thanksgiving","image":"https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/05/15/14/mysandwich.jpg?width=1200&height=1200&fit=crop","ingredients":["3 slices of bread","Leftover turkey","Leftover stuffing","Leftover cranberry sauce","Leftover gravy"],"instructions":["Heat leftover turkey, stuffing, and gravy.","Layer one slice of bread with turkey and stuffing.","Top with a second slice of bread spread with cranberry sauce.","Add another layer of turkey and stuffing.","Top with the third slice of bread.","Pour leftover gravy over the top of the sandwich before serving."]}]');function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=Math.min(e,r.length);return{data:{recipes:r.slice(0,t)}}}function l(e){console.log("Searching for recipe ID:",e);var t=null,a=JSON.parse(localStorage.getItem("recipes")||"[]");return t=a.find((function(t){return t.id===parseInt(e)})),t||(t=s.find((function(t){return t.id===parseInt(e)}))),t?(console.log("Recipe found:",t),{data:{recipe:t}}):(console.log("Recipe not found"),{data:{recipe:null}})}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=r.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())})),i=Math.min(t,a.length);return{data:{recipes:a.slice(0,i)}}}function p(){return d.apply(this,arguments)}function d(){return d=(0,n.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){e(o)})));case 1:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function m(e){var t=JSON.parse(localStorage.getItem("favorites"))||[];t.some((function(t){return t.id===e.id}))||(t.push(e),localStorage.setItem("favorites",JSON.stringify(t)))}function g(){return JSON.parse(localStorage.getItem("favorites"))||[]}}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,a),r.exports}a.m=e,(()=>{var e=[];a.O=(t,i,n,r)=>{if(!i){var s=1/0;for(u=0;u<e.length;u++){for(var[i,n,r]=e[u],o=!0,c=0;c<i.length;c++)(!1&r||s>=r)&&Object.keys(a.O).every((e=>a.O[e](i[c])))?i.splice(c--,1):(o=!1,r<s&&(s=r));if(o){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[i,n,r]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,i)=>(a.f[i](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{5:"e981367e",21:"1c7338ba",26:"791d703c",126:"3c8eef23",139:"c7f3de67",202:"1da72db2",416:"93d3df05",509:"ede582df",742:"f57021c0"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+e+"."+{5:"20bb87f0",26:"d3561e82",126:"307329a4",139:"cca8a643",202:"b409dbe1",416:"c737d57c",509:"c0a84a8b",742:"63a2b06a"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";a.l=(i,n,r,s)=>{if(e[i])e[i].push(n);else{var o,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==i||p.getAttribute("data-webpack")==t+r){o=p;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+r),o.src=i),e[i]=[n];var d=(t,a)=>{o.onerror=o.onload=null,clearTimeout(m);var n=e[i];if(delete e[i],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(a))),t)return t(a)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),c&&document.head.appendChild(o)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,a,i,n)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=a=>{if(r.onerror=r.onload=null,"load"===a.type)i();else{var s=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=o,r.parentNode&&r.parentNode.removeChild(r),n(c)}};return r.onerror=r.onload=s,r.href=t,a?a.parentNode.insertBefore(r,a.nextSibling):document.head.appendChild(r),r},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var n=a[i],r=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(r===e||r===t))return n}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){n=s[i],r=n.getAttribute("data-href");if(r===e||r===t)return n}},i=i=>new Promise(((n,r)=>{var s=a.miniCssF(i),o=a.p+s;if(t(s,o))return n();e(i,o,null,n,r)})),n={143:0};a.f.miniCss=(e,t)=>{var a={5:1,26:1,126:1,139:1,202:1,416:1,509:1,742:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=i(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}}})(),(()=>{var e={143:0};a.f.j=(t,i)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var r=new Promise(((a,i)=>n=e[t]=[a,i]));i.push(n[2]=r);var s=a.p+a.u(t),o=new Error,c=i=>{if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var r=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",o.name="ChunkLoadError",o.type=r,o.request=s,n[1](o)}};a.l(s,c,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,[s,o,c]=i,l=0;if(s.some((t=>0!==e[t]))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(c)var u=c(a)}for(t&&t(i);l<s.length;l++)r=s[l],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},i=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=a.O(void 0,[998],(()=>a(2049)));i=a.O(i)})();
//# sourceMappingURL=app.03cbabe4.js.map