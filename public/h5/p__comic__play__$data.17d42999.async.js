(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{dFRu:function(e,t,n){"use strict";n.r(t);n("R9oj");var a=n("ECub"),c=(n("miYZ"),n("tsqr")),o=n("mrSG"),i=n("q1tI"),l=n.n(i),r=n("MuoO"),s=n("fFZ8"),m=n.n(s),p=(n("Znn+"),n("ZTPi")),d=n("vOnD"),u=n("XEok"),g=n("LLXN"),h=n("S+Af"),b=n("8KYf"),f=n("bdvc"),E=n("mNhR"),v=n("3a4m"),y=n.n(v),x=n("eNRF"),w=n("l61h");function j(){var e=m()(["\n  .comic {\n    margin-top: 40px;\n    z-index: 999;\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n\n  .eposide {\n    border-top: solid 6px #ebebeb;\n  }\n\n  .info {\n    border-top: solid 6px #ebebeb;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 15px;\n\n    .cover {\n      width: 90px;\n      height: 120px;\n      border-radius: 5px;\n      background-color: rgba(0, 0, 0, 0.05);\n      box-shadow: 0 3px 14px 0 hsla(22, 4%, 52%, 0.4);\n      background-size: cover;\n      background-position: center;\n      cursor: pointer;\n    }\n\n    .main {\n      width: calc(100% - 105px);\n      height: 120px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: flex-start;\n\n      .title {\n        height: 30px;\n        line-height: 30px;\n        font-weight: bold;\n        width: 100%;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: keep-all;\n      }\n      .count {\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        height: 1.5rem;\n\n        span {\n          margin-right: 20px;\n          line-height: 1.1em;\n          i {\n            margin-right: 5px;\n          }\n        }\n      }\n      .introduce {\n        color: #515a6e;\n        height: 4rem;\n        font-size: 12px;\n        line-height: 1rem;\n        overflow: hidden;\n      }\n    }\n  }\n\n  .comment {\n    border-top: solid 6px #ebebeb;\n    padding: 0 15px;\n  }\n"]);return j=function(){return e},e}var N=p["a"].TabPane,I=d["a"].div(j()),O=e=>{var t=e.play,n=("".concat(t.slug,"E").concat(t.playInfo.eposide),"E".concat(t.playInfo.eposide)),c=Object(i["useContext"])(u["a"]),o=Object(i["useMemo"])(()=>c,[c]);return l.a.createElement(I,{color:o},l.a.createElement("div",{className:"comic"},t.playInfo.list.map((e,t)=>l.a.createElement("div",{className:"img"},l.a.createElement("span",null,Object(f["a"])(t)),l.a.createElement("img",{src:e,alt:"comic"}))),0===t.playInfo.list.length&&l.a.createElement(a["a"],{style:{padding:"30px"}})),l.a.createElement("div",{className:"eposide"},l.a.createElement(h["a"],{slug:t.slug,cover:t.cover.vertical,eposide:t.season,select:parseInt(t.playInfo.eposide)})),l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"cover",style:{backgroundImage:"url(".concat(t.cover.vertical,")")},onClick:()=>{y.a.push("/comic/".concat(t.slug))}}),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"title"},t.title),l.a.createElement("div",{className:"count"},l.a.createElement("span",null,l.a.createElement(E["a"],{type:"icon-youtube"}),t.count.play),l.a.createElement("span",null,l.a.createElement(E["a"],{type:"icon-comment1"}),t.count.comment),l.a.createElement("span",null,l.a.createElement(w["a"],null,l.a.createElement(x["a"],{type:"comic",target:t._id,addon:"\u7b2c".concat(Object(f["a"])(Number.parseInt(t.playInfo.eposide)+1),"\u8bdd")},l.a.createElement(E["a"],{type:"icon-icon_report_fill"}),Object(g["formatMessage"])({id:"report.question"}))))),l.a.createElement("div",{className:"introduce"},t.information.introduce.slice(0,120)))),l.a.createElement("div",{className:"comment"},l.a.createElement(p["a"],{defaultActiveKey:"1"},l.a.createElement(N,{tab:"".concat(Object(g["formatMessage"])({id:"animate.tabs.comment"}),"(").concat(t.count.comment,")"),key:"1"},l.a.createElement(b["a"],{type:"comic",belong:t.slug,target:n})))))},k=O,D=n("Y8ry"),M=e=>{var t,n,a=e.split("E");return 2===a.length&&(t=a[0],n=Object(f["a"])(parseInt(a[1])-1)),{slug:t,eposide:n}},F=class extends i["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.data,t=this.props.dispatch,n=M(e),a=n.slug,o=n.eposide;null!==e&&null!==a&&null!==o?t({type:"comic/getPlayInfo",payload:{data:{slug:a,eposide:o}}}):c["a"].error(Object(g["formatMessage"])({id:"error.data.few"}))}),this.state={data:e.match.params.data}}static getDerivedStateFromProps(e,t){return e.match.params.data!==t.data?{data:e.match.params.data}:null}componentDidMount(){this.initData()}componentDidUpdate(e,t){t.data!==this.state.data&&this.initData()}render(){var e=this.props,t=e.comic.play,n=e.loading;return l.a.createElement(l.a.Fragment,null,n?l.a.createElement(D["a"],null):t.slug?l.a.createElement(k,{play:t}):l.a.createElement(a["a"],{description:l.a.createElement("span",null,Object(g["formatMessage"])({id:"common.empty.tips"})),style:{transform:"translateY(calc(40vh - 50%))"}}))}};F=o["a"]([Object(r["connect"])(e=>{var t=e.comic,n=e.loading;return{comic:t,loading:n.effects["comic/getPlayInfo"]}})],F);t["default"]=F}}]);