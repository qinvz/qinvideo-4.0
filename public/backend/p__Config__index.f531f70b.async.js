(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{Txvc:function(e,a,t){"use strict";t.r(a);t("T2oS");var n,i,l,r=t("W9HT"),c=(t("IzEo"),t("bx4M")),o=(t("+L6B"),t("2/Rp")),m=(t("giR+"),t("fyUT")),s=(t("7Kak"),t("9yH6")),f=(t("BoS7"),t("Sdc0")),g=(t("/zsF"),t("PArb")),d=(t("nRaC"),t("5RzL")),u=(t("14J3"),t("BMrR")),p=(t("jCWc"),t("kPKH")),b=(t("5NDa"),t("5rEg")),x=(t("y8nQ"),t("Vl3Y")),h=t("jehZ"),E=t.n(h),j=(t("Znn+"),t("ZTPi")),M=(t("miYZ"),t("tsqr")),y=t("2Taf"),O=t.n(y),v=t("vZ4D"),I=t.n(v),w=t("l4Ni"),C=t.n(w),k=t("ujKo"),V=t.n(k),P=t("MhPg"),A=t.n(P),N=t("q1tI"),R=t.n(N),D=t("MuoO"),S=t("LLXN"),L=(t("Q9mQ"),t("diRs")),T=(t("+BJd"),t("mr32")),q=t("WFjJ"),F=function(e){function a(){var e,t;O()(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=C()(this,(e=V()(a)).call.apply(e,[this].concat(i))),t.handleChangeComplete=function(e){var a=t.props.onChange;a(e.hex)},t}return A()(a,e),I()(a,[{key:"render",value:function(){var e=this.props.value,a=["#f5222d","#fa541c","#ffad14","#13c2c2","#52c41a","#1890ff","#2f54eb","#722ed1","#f47373","#697689","#2CCCE4","#555555","#dce775","#ff8a65","#ba68c8"];return R.a.createElement("span",null,R.a.createElement(L["a"],{placement:"bottom",content:R.a.createElement(q["BlockPicker"],{color:e,colors:a,onChangeComplete:this.handleChangeComplete}),trigger:"click"},R.a.createElement(T["a"],{color:e,style:{width:"90px",height:"30px",textAlign:"center",lineHeight:"30px"}},e)))}}]),a}(N["Component"]),B=F,U=t("v99g"),H=t("zX7x"),K=(t("Pwec"),t("CtXQ")),z=function(e){function a(){var e,t;O()(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=C()(this,(e=V()(a)).call.apply(e,[this].concat(i))),t.eposide={add:function(){var e=t.props,a=e.onChange,n=e.value;n.push({title:"",link:""}),a(n)},remove:function(e){return function(){var a=t.props,n=a.onChange,i=a.value;i.splice(e,1),n(i)}},setTitle:function(e){return function(a){var n=t.props,i=n.onChange,l=n.value;l[e].title=a.target.value,i(l)}},setLink:function(e){return function(a){var n=t.props,i=n.onChange,l=n.value;l[e].link=a.target.value,i(l)}}},t}return A()(a,e),I()(a,[{key:"render",value:function(){var e=this,a=this.props.value,t=void 0===a?[]:a;return R.a.createElement(u["a"],null,t.map(function(a,t){return R.a.createElement(u["a"],{type:"flex",justify:"start",align:"middle"},R.a.createElement(p["a"],{span:10},R.a.createElement(b["a"],{value:a.title,placeholder:Object(S["formatMessage"])({id:"config.menu.title.tips"}),onChange:e.eposide.setTitle(t)})),R.a.createElement(p["a"],{span:10,offset:1},R.a.createElement(b["a"],{value:a.link,placeholder:Object(S["formatMessage"])({id:"config.menu.link.tips"}),onChange:e.eposide.setLink(t,t)})),R.a.createElement(p["a"],{span:1,offset:1},R.a.createElement(K["a"],{type:"close-circle",onClick:e.eposide.remove(t)})))}),R.a.createElement(u["a"],{type:"flex",justify:"center",align:"middle"},R.a.createElement(o["a"],{type:"dashed",onClick:this.eposide.add},R.a.createElement(K["a"],{type:"plus"})," ",Object(S["formatMessage"])({id:"config.menu.add"}))))}}]),a}(N["Component"]),J=z,Z=function(e){function a(){var e,t;O()(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=C()(this,(e=V()(a)).call.apply(e,[this].concat(i))),t.add=function(){var e=t.props,a=e.onChange,n=e.value,i={level:0,prefix:"",key:"",expired:3600};n.push(i),a(n)},t.remove=function(e){return function(){var a=t.props,n=a.onChange,i=a.value;i.splice(e,1),n(i)}},t.setLevel=function(e){return function(a){var n=t.props,i=n.onChange,l=n.value;l[e].level=a,i(l)}},t.setPrefix=function(e){return function(a){var n=t.props,i=n.onChange,l=n.value;l[e].prefix=a.target.value,i(l)}},t.setKey=function(e){return function(a){var n=t.props,i=n.onChange,l=n.value;l[e].key=a.target.value,i(l)}},t.setExpired=function(e){return function(a){var n=t.props,i=n.onChange,l=n.value;l[e].expired=a.target.value,i(l)}},t}return A()(a,e),I()(a,[{key:"render",value:function(){var e=this,a=(b["a"].Search,this.props.value),t=void 0===a?[]:a,n=t.map(function(a,t){return R.a.createElement("span",null,R.a.createElement(u["a"],{type:"flex",justify:"start",align:"top"},R.a.createElement(p["a"],{md:3,style:{display:"flex",alignItems:"center"}},R.a.createElement(m["a"],{value:a.level,placeholder:Object(S["formatMessage"])({id:"config.player.level"}),size:"large",onChange:e.setLevel(t),style:{width:"100%"}})),R.a.createElement(p["a"],{md:1,style:{display:"flex",justifyContent:"center",alignItems:"center",height:"40px"}},R.a.createElement(K["a"],{type:"close-circle",onClick:e.remove(t)})),R.a.createElement(p["a"],{md:20,style:{borderLeft:"dashed 1px rgba(0,0,0,0.2)",paddingLeft:"16px"}},R.a.createElement(u["a"],null,R.a.createElement(p["a"],{span:10},R.a.createElement(b["a"],{value:a.prefix,placeholder:Object(S["formatMessage"])({id:"config.player.prefix"}),onChange:e.setPrefix(t)})),R.a.createElement(p["a"],{span:6,offset:1},R.a.createElement(b["a"],{value:a.key,placeholder:Object(S["formatMessage"])({id:"config.player.key"}),onChange:e.setKey(t)})),R.a.createElement(p["a"],{span:6,offset:1},R.a.createElement(b["a"],{value:a.expired,placeholder:Object(S["formatMessage"])({id:"config.player.expired"}),onChange:e.setExpired(t)}))))),R.a.createElement(g["a"],null))});return R.a.createElement("div",null,n,R.a.createElement(u["a"],{type:"flex",justify:"center",align:"middle"},R.a.createElement(o["a"],{type:"dashed",onClick:this.add,style:{width:"160px",height:"40px",marginBottom:"16px"}},R.a.createElement(K["a"],{type:"plus"})," ",Object(S["formatMessage"])({id:"config.jiexi.add"}))))}}]),a}(N["Component"]),Q=Z,W=t("+n12"),X=function(e){function a(){var e,t;O()(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=C()(this,(e=V()(a)).call.apply(e,[this].concat(i))),t.add=function(){var e=t.props,a=e.onChange,n=e.value,i={pattern:"",prefix:""};n.push(i),a(n)},t.remove=function(e){return function(){var a=t.props,n=a.onChange,i=a.value;i.splice(e,1),n(i)}},t.setPattern=function(e){return function(a){var n=t.props,i=n.onChange,l=n.value;l[e].pattern=a.target.value,i(l)}},t.setPrefix=function(e){return function(a){var n=t.props,i=n.onChange,l=n.value;l[e].prefix=a.target.value,i(l)}},t}return A()(a,e),I()(a,[{key:"render",value:function(){var e=this,a=this.props.value,t=void 0===a?[]:a,n=t.map(function(a,t){return R.a.createElement("span",null,R.a.createElement(u["a"],{type:"flex",justify:"start",align:"top"},R.a.createElement(p["a"],{md:10},R.a.createElement(b["a"],{value:a.pattern,placeholder:Object(S["formatMessage"])({id:"config.jiexi.pattern"}),onChange:e.setPattern(t)})),R.a.createElement(p["a"],{md:12,offset:1},R.a.createElement(b["a"],{value:a.prefix,placeholder:Object(S["formatMessage"])({id:"config.jiexi.url"}),onChange:e.setPrefix(t)})),R.a.createElement(p["a"],{md:1,style:{display:"flex",justifyContent:"center",alignItems:"center",height:"40px"}},R.a.createElement(K["a"],{type:"close-circle",onClick:e.remove(t)}))),R.a.createElement(g["a"],null))});return R.a.createElement("div",null,n,R.a.createElement(u["a"],{type:"flex",justify:"center",align:"middle"},R.a.createElement(o["a"],{type:"dashed",onClick:this.add,style:{width:"160px",height:"40px",marginBottom:"16px"}},R.a.createElement(K["a"],{type:"plus"})," ",Object(S["formatMessage"])({id:"config.jiexi.add"}))))}}]),a}(N["Component"]),Y=X,G=(n=Object(D["connect"])(function(e){var a=e.config,t=e.category,n=e.loading;return{config:a,category:t,loading:n.models.config}}),n((l=function(e){function a(){var e,t;O()(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=C()(this,(e=V()(a)).call.apply(e,[this].concat(i))),t.handleSubmit=function(e){e.preventDefault();var a=t.props,n=a.dispatch,i=a.form;i.validateFields(function(e,a){e||n({type:"config/postConfig",payload:{data:a}}).then(function(e){e&&(M["a"].success(Object(S["formatMessage"])({id:"config.post.success"})),t.initData())})})},t.initData=function(){var e=t.props.dispatch;e({type:"config/getConfig",payload:{query:{}}})},t}return A()(a,e),I()(a,[{key:"componentDidMount",value:function(){this.initData()}},{key:"render",value:function(){var e=j["a"].TabPane,a=this.props.form.getFieldDecorator,t=this.props,n=t.loading,i=t.config.data,l=t.category.all,h=Object(W["c"])(l,"akind"),M=Object(W["c"])(l,"ckind"),y=Object(W["c"])(l,"pkind"),O=[{title:Object(S["formatMessage"])({id:"config.menu.text.1"}),key:"init",value:"init1639732",disabled:!0,children:[{title:Object(S["formatMessage"])({id:"config.menu.text.2"}),key:"newIndexPlayAnimate",value:"newIndexPlayAnimate"},{title:Object(S["formatMessage"])({id:"config.menu.text.3"}),key:"newIndexRateAnimate",value:"newIndexRateAnimate"},{title:Object(S["formatMessage"])({id:"config.menu.text.4"}),key:"newIndexNewAnimate",value:"newIndexNewAnimate"},{title:Object(S["formatMessage"])({id:"config.menu.text.5"}),key:"newIndexRandomAnimate",value:"newIndexRandomAnimate"},{title:Object(S["formatMessage"])({id:"config.menu.text.6"}),key:"newIndexPlayComic",value:"newIndexPlayComic"},{title:Object(S["formatMessage"])({id:"config.menu.text.7"}),key:"newIndexRateComic",value:"newIndexRateComic"},{title:Object(S["formatMessage"])({id:"config.menu.text.8"}),key:"newIndexNewComic",value:"newIndexNewComic"},{title:Object(S["formatMessage"])({id:"config.menu.text.9"}),key:"newIndexRandomComic",value:"newIndexRandomComic"}]},{title:Object(S["formatMessage"])({id:"config.menu.text.10"}),key:"animate",value:"init1639733",disabled:!0,children:h},{title:Object(S["formatMessage"])({id:"config.menu.text.11"}),key:"comic",value:"init1639734",disabled:!0,children:M}],v=[{title:Object(S["formatMessage"])({id:"config.menu.text.1"}),key:"init",value:"init1639732",disabled:!0,children:[{title:Object(S["formatMessage"])({id:"config.menu.text.2"}),key:"newIndexPlayAnimate",value:"newIndexPlayAnimate"},{title:Object(S["formatMessage"])({id:"config.menu.text.3"}),key:"newIndexRateAnimate",value:"newIndexRateAnimate"},{title:Object(S["formatMessage"])({id:"config.menu.text.4"}),key:"newIndexNewAnimate",value:"newIndexNewAnimate"},{title:Object(S["formatMessage"])({id:"config.menu.text.5"}),key:"newIndexRandomAnimate",value:"newIndexRandomAnimate"}]},{title:Object(S["formatMessage"])({id:"config.menu.text.10"}),key:"animate",value:"init1639733",disabled:!0,children:h}],I=[{title:Object(S["formatMessage"])({id:"config.menu.text.1"}),key:"init",value:"init1639732",disabled:!0,children:[{title:Object(S["formatMessage"])({id:"config.menu.text.6"}),key:"newIndexPlayComic",value:"newIndexPlayComic"},{title:Object(S["formatMessage"])({id:"config.menu.text.7"}),key:"newIndexRateComic",value:"newIndexRateComic"},{title:Object(S["formatMessage"])({id:"config.menu.text.8"}),key:"newIndexNewComic",value:"newIndexNewComic"},{title:Object(S["formatMessage"])({id:"config.menu.text.9"}),key:"newIndexRandomComic",value:"newIndexRandomComic"}]},{title:Object(S["formatMessage"])({id:"config.menu.text.11"}),key:"comic",value:"init1639734",disabled:!0,children:M}],w=[{title:Object(S["formatMessage"])({id:"config.menu.text.12"}),key:"post",value:"init1639735",disabled:!0,children:y}],C={labelCol:{lg:{span:2}},wrapperCol:{lg:{span:18,offset:1},xl:{span:14,offset:1},xxl:{span:10,offset:1}}},k={xs:24,sm:24,md:24,lg:24,xl:12},V={labelCol:{span:4},wrapperCol:{span:18,offset:1}};return R.a.createElement(U["a"],null,R.a.createElement(r["a"],{tip:"Loading...",spinning:!!n},R.a.createElement(x["a"],{onSubmit:this.handleSubmit},R.a.createElement(c["a"],{bordered:!1},R.a.createElement(j["a"],{defaultActiveKey:"1"},R.a.createElement(e,{tab:Object(S["formatMessage"])({id:"common.baseinfo"}),key:"1"},R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.color"}),extra:Object(S["formatMessage"])({id:"config.color.extra"})}),a("color",{initialValue:i.color||"#22194d"})(R.a.createElement(B,null))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.name"}),extra:Object(S["formatMessage"])({id:"config.name.extra"})}),a("name",{initialValue:i.name})(R.a.createElement(b["a"],{placeholder:Object(S["formatMessage"])({id:"config.name"})}))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.slogan"}),extra:Object(S["formatMessage"])({id:"config.slogan.extra"})}),a("slogan",{initialValue:i.slogan})(R.a.createElement(b["a"],{placeholder:Object(S["formatMessage"])({id:"config.slogan"})}))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.information"}),extra:Object(S["formatMessage"])({id:"config.information.extra"})}),a("information",{initialValue:i.information})(R.a.createElement(b["a"],{placeholder:Object(S["formatMessage"])({id:"config.information"})}))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.tongji"}),extra:Object(S["formatMessage"])({id:"config.tongji.extra"})}),a("tongji",{initialValue:i.tongji})(R.a.createElement(b["a"],{placeholder:Object(S["formatMessage"])({id:"config.tongji"})}))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.qq"})}),a("qq",{initialValue:i.qq})(R.a.createElement(b["a"],{placeholder:Object(S["formatMessage"])({id:"config.qq"})}))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.email"})}),a("email",{initialValue:i.email})(R.a.createElement(b["a"],{placeholder:Object(S["formatMessage"])({id:"config.email"})}))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.app"})}),a("app",{initialValue:i.app})(R.a.createElement(b["a"],{placeholder:Object(S["formatMessage"])({id:"config.app"})})))),R.a.createElement(e,{tab:Object(S["formatMessage"])({id:"config.image.setting"}),key:"2"},R.a.createElement(u["a"],null,R.a.createElement(p["a"],k,R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.favicon"}),extra:Object(S["formatMessage"])({id:"config.favicon.extra"})}),a("favcion",{initialValue:i.favcion})(R.a.createElement(H["a"],{type:"config"}))),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.logo"}),extra:Object(S["formatMessage"])({id:"config.logo.extra"})}),a("logo",{initialValue:i.logo})(R.a.createElement(H["a"],{type:"config",width:200,height:100}))),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.pc.headimg"}),extra:Object(S["formatMessage"])({id:"config.pc.headimg.extra"})}),a("headimg",{initialValue:i.headimg})(R.a.createElement(H["a"],{type:"config",width:400,height:160}))),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.pc.loginimg"}),extra:Object(S["formatMessage"])({id:"config.pc.loginimg.extra"})}),a("loginimg",{initialValue:i.loginimg})(R.a.createElement(H["a"],{type:"config",width:400,height:200}))),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.newAnimate"}),extra:Object(S["formatMessage"])({id:"config.newAnimate.extra"})}),a("newAnimate",{initialValue:i.newAnimate})(R.a.createElement(H["a"],{type:"config",width:400,height:160}))),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.newComic"}),extra:Object(S["formatMessage"])({id:"config.newComic.extra"})}),a("newComic",{initialValue:i.newComic})(R.a.createElement(H["a"],{type:"config",width:400,height:160}))),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.allPost"}),extra:Object(S["formatMessage"])({id:"config.allPost.extra"})}),a("allPost",{initialValue:i.allPost})(R.a.createElement(H["a"],{type:"config",width:400,height:160})))),R.a.createElement(p["a"],k,R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.user.avatar"}),extra:Object(S["formatMessage"])({id:"config.user.avatar.extra"})}),a("avatar",{initialValue:i.avatar})(R.a.createElement(H["a"],{type:"config"}))),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.user.background"}),extra:Object(S["formatMessage"])({id:"config.user.background.extra"})}),a("background",{initialValue:i.background})(R.a.createElement(H["a"],{type:"config",width:400,height:160}))),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.mobile.headimg"}),extra:Object(S["formatMessage"])({id:"config.mobile.headimg.extra"})}),a("mobleimg",{initialValue:i.mobleimg})(R.a.createElement(H["a"],{type:"config",width:200,height:300}))),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.allAnimate"}),extra:Object(S["formatMessage"])({id:"config.allAnimate.extra"})}),a("allAnimate",{initialValue:i.allAnimate})(R.a.createElement(H["a"],{type:"config",width:400,height:160}))),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.allComic"}),extra:Object(S["formatMessage"])({id:"config.allComic.extra"})}),a("allComic",{initialValue:i.allComic})(R.a.createElement(H["a"],{type:"config",width:400,height:160}))),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.dplayer"}),extra:Object(S["formatMessage"])({id:"config.dplayer.extra"})}),a("dplayer",{initialValue:i.dplayer})(R.a.createElement(H["a"],{type:"config",width:400,height:240})))))),R.a.createElement(e,{tab:Object(S["formatMessage"])({id:"config.page.setting"}),key:"3"},R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.header.pc.menu"}),extra:Object(S["formatMessage"])({id:"config.header.pc.menu.extra"})}),a("pcMenu",{initialValue:i.pcMenu||[]})(R.a.createElement(J,null))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.index.pc.menu"}),extra:Object(S["formatMessage"])({id:"config.index.pc.menu.extra"})}),a("pcIndex",{initialValue:i.pcIndex||[]})(R.a.createElement(d["a"],{treeData:O,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,allowClear:!0,multiple:!0,placeholder:Object(S["formatMessage"])({id:"config.header.menu.select"})}))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.header.h5.menu"}),extra:Object(S["formatMessage"])({id:"config.header.h5.menu.extra"})}),a("h5Menu",{initialValue:i.h5Menu||[]})(R.a.createElement(J,null))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.index.h5.menu"}),extra:Object(S["formatMessage"])({id:"config.index.h5.menu.extra"})}),a("h5Index",{initialValue:i.h5Index||[]})(R.a.createElement(d["a"],{treeData:O,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,allowClear:!0,multiple:!0,placeholder:Object(S["formatMessage"])({id:"config.header.menu.select"})}))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.index.aboutus"}),extra:Object(S["formatMessage"])({id:"config.index.aboutus.extra"})}),a("aboutus",{initialValue:i.aboutus||""})(R.a.createElement(b["a"],{placeholder:Object(S["formatMessage"])({id:"config.index.aboutus"})})))),R.a.createElement(e,{tab:Object(S["formatMessage"])({id:"config.page.anime"}),key:"4"},R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.header.anime.menu"}),extra:Object(S["formatMessage"])({id:"config.header.anime.menu.extra"})}),a("animateMenu",{initialValue:i.animateMenu||[]})(R.a.createElement(J,null))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.index.anime.menu"}),extra:Object(S["formatMessage"])({id:"config.index.anime.menu.extra"})}),a("animateIndex",{initialValue:i.animateIndex||[]})(R.a.createElement(d["a"],{treeData:v,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,allowClear:!0,multiple:!0,placeholder:Object(S["formatMessage"])({id:"config.header.menu.select"})}))),R.a.createElement(g["a"],null),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.player.limit"}),extra:Object(S["formatMessage"])({id:"config.player.limit.extra"})}),a("playLimit",{initialValue:i.playLimit||[]})(R.a.createElement(Q,null))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.player.jiexi"}),extra:Object(S["formatMessage"])({id:"config.player.jiexi.extra"})}),a("jiexi",{initialValue:i.jiexi||[]})(R.a.createElement(Y,null))),R.a.createElement(g["a"],null),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.animate.dplayer.picture"}),extra:Object(S["formatMessage"])({id:"config.animate.dplayer.picture.extra"})}),a("usePicInterface",{initialValue:i.usePicInterface||!1,valuePropName:"checked"})(R.a.createElement(f["a"],null))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.animate.dplayer.picture.url"}),extra:Object(S["formatMessage"])({id:"config.animate.dplayer.picture.url.extra"})}),a("picInterface",{initialValue:i.picInterface||""})(R.a.createElement(b["a"],{placeholder:Object(S["formatMessage"])({id:"config.animate.dplayer.picture.url.tips"})})))),R.a.createElement(e,{tab:Object(S["formatMessage"])({id:"config.page.comic"}),key:"5"},R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.header.comic.menu"}),extra:Object(S["formatMessage"])({id:"config.header.comic.menu.extra"})}),a("comicMenu",{initialValue:i.comicMenu||[]})(R.a.createElement(J,null))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.index.comic.menu"}),extra:Object(S["formatMessage"])({id:"config.index.comic.menu.extra"})}),a("comicIndex",{initialValue:i.comicIndex||[]})(R.a.createElement(d["a"],{treeData:I,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,allowClear:!0,multiple:!0,placeholder:Object(S["formatMessage"])({id:"config.header.menu.select"})}))),R.a.createElement(g["a"],null),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.player.limit"}),extra:Object(S["formatMessage"])({id:"config.player.limit.extra"})}),a("comicLimit",{initialValue:i.comicLimit||[]})(R.a.createElement(Q,null)))),R.a.createElement(e,{tab:Object(S["formatMessage"])({id:"config.page.post"}),key:"6"},R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.header.post.menu"}),extra:Object(S["formatMessage"])({id:"config.header.post.menu.extra"})}),a("postMenu",{initialValue:i.postMenu||[]})(R.a.createElement(J,null))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.index.post.menu"}),extra:Object(S["formatMessage"])({id:"config.index.post.menu.extra"})}),a("postIndex",{initialValue:i.postIndex||[]})(R.a.createElement(d["a"],{treeData:w,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,allowClear:!0,multiple:!0,placeholder:Object(S["formatMessage"])({id:"config.header.menu.select"})}))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.index.message"}),extra:Object(S["formatMessage"])({id:"config.index.message.extra"})}),a("message",{initialValue:i.message||void 0})(R.a.createElement(d["a"],{treeData:w,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,allowClear:!0,placeholder:Object(S["formatMessage"])({id:"config.header.menu.select"})})))),R.a.createElement(e,{tab:Object(S["formatMessage"])({id:"config.email.setting"}),key:"9"},R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.email.type"}),extra:Object(S["formatMessage"])({id:"config.email.type.extra"})}),a("emailType",{initialValue:i.emailType||"smtp"})(R.a.createElement(s["a"].Group,null,R.a.createElement(s["a"],{value:"smtp"},"smtp"),R.a.createElement(s["a"],{value:"sendgrid"},"sendgrid")))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.email.name"})}),a("emailName",{initialValue:i.emailName||""})(R.a.createElement(b["a"],{placeholder:Object(S["formatMessage"])({id:"config.email.name"})}))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.email.sender"})}),a("emailSender",{initialValue:i.emailSender||""})(R.a.createElement(b["a"],{placeholder:Object(S["formatMessage"])({id:"config.email.sender"})}))),R.a.createElement(u["a"],{type:"flex"},R.a.createElement(p["a"],{xs:23,lg:11},R.a.createElement(g["a"],{orientation:"left"},"smtp"),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.smtp.port"})}),a("smtpPort",{initialValue:i.smtpPort||465})(R.a.createElement(m["a"],{placeholder:"port"}))),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.smtp.secure"})}),a("smtpSecure",{initialValue:i.smtpSecure||!1,valuePropName:"checked"})(R.a.createElement(f["a"],null))),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.smtp.host"}),extra:Object(S["formatMessage"])({id:"config.smtp.host.extra"})}),a("smtpHost",{initialValue:i.smtpHost||""})(R.a.createElement(b["a"],{placeholder:"host"}))),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.smtp.user.name"})}),a("smtpUser",{initialValue:i.smtpUser||""})(R.a.createElement(b["a"],{placeholder:Object(S["formatMessage"])({id:"config.smtp.user.name"})}))),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.smtp.user.pass"})}),a("smtpPass",{initialValue:i.smtpPass||""})(R.a.createElement(b["a"],{type:"password",placeholder:Object(S["formatMessage"])({id:"config.smtp.user.pass"})})))),R.a.createElement(p["a"],{xs:23,lg:11,offset:1},R.a.createElement(g["a"],{orientation:"left"},"sendgrid"),R.a.createElement(x["a"].Item,E()({},V,{label:Object(S["formatMessage"])({id:"config.sendgrid.key"})}),a("sendgrid",{initialValue:i.sendgrid||""})(R.a.createElement(b["a"],{placeholder:"key"})))))),R.a.createElement(e,{tab:Object(S["formatMessage"])({id:"config.others.setting"}),key:"10"},R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.comment.vefiry"}),extra:Object(S["formatMessage"])({id:"config.comment.vefiry.extra"})}),a("commentVerify",{initialValue:i.commentVerify||!1,valuePropName:"checked"})(R.a.createElement(f["a"],null))),R.a.createElement(x["a"].Item,E()({},C,{label:Object(S["formatMessage"])({id:"config.autoUpdate"}),extra:Object(S["formatMessage"])({id:"config.autoUpdate.extra"})}),a("autoUpdate",{initialValue:i.autoUpdate||!1,valuePropName:"checked"})(R.a.createElement(f["a"],null))))),R.a.createElement(g["a"],null),R.a.createElement(u["a"],{type:"flex",justify:"center",align:"middle"},R.a.createElement(o["a"],{type:"primary",htmlType:"submit"},Object(S["formatMessage"])({id:"config.save"})))))))}}]),a}(N["Component"]),i=l))||i);a["default"]=x["a"].create()(G)}}]);