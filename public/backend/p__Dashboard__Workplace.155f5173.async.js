(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"t/hC":function(a,n,t){"use strict";t.r(n);var e,r,o,l=t("2Taf"),i=t.n(l),u=t("vZ4D"),c=t.n(u),d=t("l4Ni"),p=t.n(d),s=t("ujKo"),f=t.n(s),h=t("MhPg"),v=t.n(h),y=t("q1tI"),k=t.n(y),w=t("MuoO"),D=t("v99g"),g=t("xqX8"),m=k.a.lazy(function(){return Promise.all([t.e(0),t.e(50)]).then(t.bind(null,"CneN"))}),b=(e=Object(w["connect"])(function(a){var n=a.data,t=a.loading;return{data:n,loading:t.effects["data/queryWorkData"]}}),e((o=function(a){function n(){var a,t;i()(this,n);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return t=p()(this,(a=f()(n)).call.apply(a,[this].concat(r))),t.query={},t.initData=function(){var a=t.props.dispatch;a({type:"data/queryWorkData",payload:{}})},t}return v()(n,a),c()(n,[{key:"componentDidMount",value:function(){this.initData()}},{key:"render",value:function(){var a=this.props,n=a.loading,t=a.data.workData;return k.a.createElement(D["a"],null,k.a.createElement(y["Suspense"],{fallback:k.a.createElement(g["default"],null)},k.a.createElement(m,{loading:n,allData:t})))}}]),n}(y["Component"]),r=o))||r);n["default"]=b}}]);