(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{CNVm:function(e,t,a){"use strict";a.r(t);a("IzEo");var n,r,s,i=a("bx4M"),l=(a("g9YV"),a("wCAj")),o=(a("14J3"),a("BMrR")),c=(a("jCWc"),a("kPKH")),d=(a("+L6B"),a("2/Rp")),u=(a("/zsF"),a("PArb")),m=(a("Awhp"),a("KrTs")),f=(a("+BJd"),a("mr32")),p=(a("Telt"),a("Tckk")),g=(a("2qtc"),a("kLXV")),h=a("p0pE"),b=a.n(h),y=a("2Taf"),O=a.n(y),M=a("vZ4D"),v=a.n(M),j=a("l4Ni"),E=a.n(j),w=a("ujKo"),x=a.n(w),C=a("rlhR"),I=a.n(C),k=a("MhPg"),R=a.n(k),q=(a("5NDa"),a("5rEg")),S=a("q1tI"),D=a.n(S),K=a("MuoO"),A=a("7DNP"),z=a("LLXN"),T=a("wd/R"),V=a.n(T),B=(a("giR+"),a("fyUT")),N=(a("y8nQ"),a("Vl3Y")),L=a("jehZ"),P=a.n(L),Y=(a("OaEy"),a("2fM7")),F=a("zX7x"),J=Y["a"].Option,U=function(e){function t(){var e,a;O()(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return a=E()(this,(e=x()(t)).call.apply(e,[this].concat(r))),a.state={show:!1,data:{}},a.handleSubmit=function(){var e=a.state.data,t=a.props,n=t.form,r=t.submit;n.validateFields(function(t,a){t||r(b()({},e,a))})},a.handleCancel=function(){a.setState({show:!1,data:{}})},a.modalShow=function(e){var t=e.type,n=e.data;a.setState({show:!0,data:b()({type:t},n)})},a}return R()(t,e),v()(t,[{key:"render",value:function(){var e=this.state,t=e.show,a=e.data,n=this.props.form.getFieldDecorator,r={labelCol:{span:4},wrapperCol:{span:18}};return D.a.createElement(g["a"],{title:Object(z["formatMessage"])({id:"common.quick.edit"}),visible:t,maskClosable:!1,forceRender:"true",onOk:this.handleSubmit,onCancel:this.handleCancel,destroyOnClose:!0},D.a.createElement(N["a"],null,a.id&&D.a.createElement(N["a"].Item,P()({},r,{label:Object(z["formatMessage"])({id:"user.avatar"})}),n("avatar",{initialValue:a.id?a.avatar:null})(D.a.createElement(F["a"],{width:120,height:120}))),D.a.createElement(N["a"].Item,P()({},r,{label:Object(z["formatMessage"])({id:"user.score"})}),n("score",{initialValue:a.id?a.score:void 0})(D.a.createElement(B["a"],null))),D.a.createElement(N["a"].Item,P()({},r,{label:Object(z["formatMessage"])({id:"user.level"})}),n("level",{initialValue:a.id?a.level:void 0})(D.a.createElement(B["a"],null))),a.id&&D.a.createElement(N["a"].Item,P()({},r,{label:Object(z["formatMessage"])({id:"user.name"})}),n("name",{initialValue:a.id?a.name:null,rules:[{required:!0,message:Object(z["formatMessage"])({id:"user.tips.fill.name"})}]})(D.a.createElement(q["a"],{placeholder:Object(z["formatMessage"])({id:"user.tips.fill.name"})}))),a.id&&D.a.createElement(N["a"].Item,P()({},r,{label:Object(z["formatMessage"])({id:"user.email"})}),n("email",{initialValue:a.id?a.email:null,rules:[{required:!0,message:Object(z["formatMessage"])({id:"user.tips.fill.email"})}]})(D.a.createElement(q["a"],{placeholder:Object(z["formatMessage"])({id:"user.tips.fill.email"})}))),D.a.createElement(N["a"].Item,P()({},r,{label:Object(z["formatMessage"])({id:"animate.status"})}),n("status",{initialValue:a.status||void 0})(D.a.createElement(Y["a"],{placeholder:Object(z["formatMessage"])({id:"animate.tips.fill.status"})},D.a.createElement(J,{value:"draft"},Object(z["formatMessage"])({id:"user.inactive"})),D.a.createElement(J,{value:"publish"},Object(z["formatMessage"])({id:"user.active"})),D.a.createElement(J,{value:"reject"},Object(z["formatMessage"])({id:"user.unused"})))))))}}]),t}(S["PureComponent"]),H=N["a"].create()(U),X=a("ZeOv"),Z=q["a"].Search,_=(n=Object(K["connect"])(function(e){var t=e.user,a=e.loading;return{user:t,loading:a.models.user}}),n((s=function(e){function t(e){var a;O()(this,t),a=E()(this,x()(t).call(this,e)),a.editRef=D.a.createRef(null),a.submit=function(e){var t=a.props.dispatch,n=a.state.selectedRowKeys,r=e.type,s=r?"all"===r?[]:n:[e.id];t({type:"user/putUserBatch",payload:{data:b()({},e,{ids:s})}}).then(function(e){e&&a.editRef.handleCancel(),a.initData(),a.setState({selectedRowKeys:[]})})},a.editOne=function(e){var t={name:e.name,email:e.email,status:e.status,level:e.level,id:e._id,score:e.score};a.edit({data:t})},a.editMany=function(){a.edit({type:"many"})},a.editAll=function(){a.edit({type:"all"})},a.edit=function(e){var t=e.type,n=e.data;a.editRef.modalShow({type:t,data:n})},a.deleteMany=function(){var e=a.state.selectedRowKeys;a.destroy(e)},a.deleteAll=function(){a.destroy([])},a.deleteOne=function(e){return function(){a.destroy([e])}},a.destroy=function(e){var t=a.props.dispatch;g["a"].confirm({title:Object(z["formatMessage"])({id:"user.list.delete.user"}),content:Object(z["formatMessage"])({id:"common.delete.tips"}),okText:Object(z["formatMessage"])({id:"common.confirm"}),cancelText:Object(z["formatMessage"])({id:"common.cancel"}),onOk:function(){return t({type:"user/deleteUserBatch",payload:{data:{ids:e}}}).then(function(e){e&&(a.initData(),a.setState({selectedRowKeys:[]}))})}})},a.onSearch=function(e){a.query.title=e,a.query.page=1,a.initData()},a.onChangeTable=function(e,t,n){var r,s,i=e.current,l=e.pageSize,o=t.status?t.status[0]:null;n.order&&(r="descend"===n.order?-1:1,s=n.field),a.query=b()({},a.query,{size:l,page:i,sortBy:s,sortOrder:r,status:o}),a.initData()},a.initData=function(){var e=I()(a),t=e.query,n=a.props.dispatch;n({type:"user/queryUser",payload:{query:t}});var r=a.props,s=r.location.pathname,i=r.history;i.push({pathname:s,state:a.query})};var n=e.location.state,r=void 0===n?{}:n;return a.state={selectedRowKeys:[]},a.query={title:r.title,size:r.size?r.size:10,page:r.page?r.page:1,sortBy:r.sortBy,sortOrder:r.sortOrder,status:r.status},a}return R()(t,e),v()(t,[{key:"componentDidMount",value:function(){this.initData()}},{key:"render",value:function(){var e=this,t=this.state.selectedRowKeys,a=this.props,n=a.user,r=n.list,s=n.total,g=a.loading,h=[{title:Object(z["formatMessage"])({id:"user.avatar"}),dataIndex:"avatar",align:"center",render:function(e){return D.a.createElement(p["a"],{size:64,shape:"square",icon:"user",src:e})}},{title:Object(z["formatMessage"])({id:"user.name"}),dataIndex:"name",key:"name",sorter:!0,align:"center",render:function(e,t){return D.a.createElement(A["Link"],{to:"/user/slug/".concat(t.id)},e)}},{title:Object(z["formatMessage"])({id:"user.email"}),dataIndex:"email",sorter:!0,align:"center"},{title:Object(z["formatMessage"])({id:"user.level"}),dataIndex:"level",sorter:!0,align:"center",render:function(e){var t;return t=0===e?null:e<11?"#2db7f5":e<21?"#87d068":e<31?"#108ee9":e<41?"#33cc33":e<51?"#9966ff":e<61?"#993399":e<71?"#ff9966":e<81?"#669999":e<91?"#00cc44":e<100?"#9900cc":"#f50",D.a.createElement(f["a"],{color:t},e)}},{title:Object(z["formatMessage"])({id:"user.score"}),dataIndex:"score",sorter:!0,align:"center"},{title:Object(z["formatMessage"])({id:"user.money"}),dataIndex:"money",sorter:!0,align:"center"},{title:Object(z["formatMessage"])({id:"user.expired"}),dataIndex:"expired",sorter:!0,align:"center",render:function(e){return"".concat((e/3600/24).toFixed(2),"\u5929")}},{title:Object(z["formatMessage"])({id:"user.animate"}),dataIndex:"countAnimate",sorter:!0,align:"center"},{title:Object(z["formatMessage"])({id:"user.comic"}),dataIndex:"countComic",sorter:!0,align:"center"},{title:Object(z["formatMessage"])({id:"user.post"}),dataIndex:"countPost",sorter:!0,align:"center"},{title:Object(z["formatMessage"])({id:"user.comment"}),dataIndex:"countComment",sorter:!0,align:"center"},{title:Object(z["formatMessage"])({id:"user.status"}),dataIndex:"status",filters:Object.values(X["l"]),filterMultiple:!1,render:function(e){return D.a.createElement(m["a"],{status:X["l"][e].badge,text:X["l"][e].text})},align:"center"},{title:Object(z["formatMessage"])({id:"user.createdAt"}),dataIndex:"createdAt",sorter:!0,width:120,align:"center",render:function(e){return V()(e).format("YYYY-MM-DD HH:mm:ss")}},{title:Object(z["formatMessage"])({id:"user.option"}),key:"action",dataIndex:"id",align:"center",render:function(t,a){return D.a.createElement("span",null,D.a.createElement("a",{onClick:function(){return e.editOne(a)}},Object(z["formatMessage"])({id:"animate.option.full.edit"})),D.a.createElement(u["a"],{type:"vertical"}),D.a.createElement("a",{onClick:e.deleteOne(t)},Object(z["formatMessage"])({id:"user.option.full.delete"})))}}],b={selectedRowKeys:t,onChange:function(t){e.setState({selectedRowKeys:t})}},y=Object(X["h"])(this.query.page,this.query.size,s);return D.a.createElement(i["a"],{className:"tableList",bordered:!1},D.a.createElement(o["a"],{className:"head"},D.a.createElement(c["a"],{span:16},D.a.createElement(A["Link"],{to:"/user/create"},D.a.createElement(d["a"],{icon:"plus",type:"primary"},Object(z["formatMessage"])({id:"common.add.new"}))),t.length>0&&D.a.createElement(X["b"],{edit:this.editMany,delete:this.deleteMany}),D.a.createElement(X["a"],{edit:this.editAll,delete:this.deleteAll})),D.a.createElement(c["a"],{span:8},D.a.createElement(Z,{placeholder:Object(z["formatMessage"])({id:"user.search"}),onSearch:this.onSearch,enterButton:!0}))),D.a.createElement(o["a"],null,D.a.createElement(l["a"],{className:"longTable",loading:g,rowKey:"_id",rowSelection:b,columns:h,onChange:this.onChangeTable,dataSource:r,pagination:y})),D.a.createElement(H,{submit:this.submit,wrappedComponentRef:function(t){return e.editRef=t}}))}}]),t}(S["Component"]),r=s))||r);t["default"]=_}}]);