(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{kS3o:function(e,n,t){e.exports=t.p+"static/level.367681e1.png"},ued4:function(e,n,t){"use strict";t.r(n);t("T2oS");var a=t("W9HT"),i=t("mrSG"),r=t("q1tI"),l=t.n(r),c=t("MuoO"),o=(t("IzEo"),t("bx4M")),s=(t("+L6B"),t("2/Rp")),m=(t("5Dmo"),t("3S7+")),p=t("qIgq"),d=t.n(p),u=t("fFZ8"),g=t.n(u),h=t("vOnD"),f=t("Gwa3"),v=t("LLXN"),b=t("yDSA"),E=t("zz3R"),x=t("wd/R"),y=t.n(x),w=t("xEAY");function O(){var e=g()(["\n  margin: 0 20px;\n\n  .head {\n    height: 30px;\n    line-height: 30px;\n    display: grid;\n    grid-template-columns: 50px 1fr 60px;\n    font-size: 0.9em;\n    opacity: 0.6;\n    font-weight: 700;\n  }\n\n  .main {\n    .list {\n      line-height: 24px;\n      display: grid;\n      grid-template-columns: 50px 170px 60px;\n      font-size: 0.8em;\n      opacity: 0.6;\n      cursor: pointer;\n\n      span:nth-child(2) {\n        font-weight: 500;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: pre;\n        word-break: keep-all;\n      }\n\n      span:nth-child(3) {\n        text-align: center;\n      }\n\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n"]);return O=function(){return e},e}var j=e=>{var n=Math.floor(e/60),t=Math.floor(e%60);return"".concat(Object(w["b"])(n),":").concat(Object(w["b"])(t))},k=h["a"].div(O(),e=>e.color),N=e=>{var n=e.id,t=Object(r["useContext"])(f["a"]),i=Object(r["useMemo"])(()=>t,[t]),c=Object(r["useState"])([]),o=d()(c,2),s=o[0],m=o[1],p=Object(r["useState"])(!0),u=d()(p,2),g=u[0],h=u[1];return Object(r["useEffect"])(()=>{n&&E["a"].queryDanmu({query:{id:n}}).then(e=>{m(e.data.list),h(!1)})},[n]),l.a.createElement(k,{color:i},l.a.createElement("div",{className:"head"},l.a.createElement("span",null,Object(v["formatMessage"])({id:"danmu.time"})),l.a.createElement("span",null,Object(v["formatMessage"])({id:"danmu.content"})),l.a.createElement("span",null,Object(v["formatMessage"])({id:"danmu.created"}))),l.a.createElement(a["a"],{spinning:g},l.a.createElement("div",{className:"main"},s.map(e=>l.a.createElement("div",{className:"list",key:e._id},l.a.createElement("span",null,j(e.time)),l.a.createElement("span",null,e.text),l.a.createElement("span",null,y()(e.createdAt).format("MM-DD")))))))},M=N,D=t("DNCa"),S=t("YO1i"),z=t("3a4m"),q=t.n(z),I=t("qHAN"),C=t("xK/y"),L=t.n(C),A=t("ulZh"),P=t.n(A),R=e=>{var n=e.info,t=n.id,a=n.link,i=n.danmu,c=n.type,o=n.preview,s=n.subtitle,m=Object(r["useContext"])(f["a"]),p=Object(r["useMemo"])(()=>m,[m]);window.Hls=P.a;var d=()=>{var e,n=window.config.usePicInterface?window.config.picInterface:window.config.dplayer;if(a&&a.length>1){var r=a.map(e=>({name:e.name,url:e.value,type:"auto"}));e={quality:r,defaultQuality:0,pic:n}}else{var l=a&&a[0]&&a[0].value||"";e={url:l,pic:n,type:"m3u8"===c?"hls":"auto"}}o&&o.length>0&&(e.thumbnails=o[0]);var m={container:document.getElementById("dplayer"),autoplay:!0,theme:p,screenshot:!1,hotkey:!0,preload:"auto",volume:.7,mutex:!0,video:e,danmaku:{id:t,api:"/api/v2/danmus",maximum:1e4,bottom:"15%",unlimited:!0,addition:i?["https://api.prprpr.me/dplayer/v3/bilibili?aid=".concat(i)]:[]}};s&&s.length>0&&(m.subtitle={url:s[0].value,type:"webvtt"}),o&&new L.a(m)};return Object(r["useEffect"])(()=>{"php"!==c&&a&&d()},[t]),l.a.createElement(l.a.Fragment,null,"php"===c?l.a.createElement("iframe",{style:{width:"100%",height:"100%",border:"none"},src:a}):l.a.createElement("div",{id:"dplayer"}))},F=R,H=t("qki9"),T=t("kS3o"),B=t.n(T);function G(){var e=g()(["\n  padding: 60px;\n  min-height: 100vh;\n  .container {\n    display: grid;\n    grid-template-columns: 1fr 320px;\n    grid-gap: 20px;\n\n    .player {\n      background-color: rgba(0, 0, 0, 0.01);\n\n      .levelLimit {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n\n        span {\n          font-size: 16px;\n          margin-top: 20px;\n          color: #1890ff;\n        }\n      }\n    }\n\n    .sidebar {\n      background-color: white;\n      padding: 5px 20px 0px 20px;\n\n      .header {\n        height: 40px;\n\n        span {\n          display: inline-block;\n          width: 50%;\n          height: 40px;\n          line-height: 40px;\n          cursor: pointer;\n          text-align: center;\n          border-bottom: solid 2px transparent;\n\n          &.active {\n            border-bottom-color: ",";\n          }\n        }\n      }\n\n      .content {\n        height: calc(100% - 50px);\n        overflow-y: scroll;\n        margin: 5px -20px;\n\n        .eposide,\n        .danmu {\n          display: none;\n        }\n\n        .eposide.active,\n        .danmu.active {\n          display: block;\n        }\n      }\n    }\n\n    .comment {\n      .report {\n        padding: 24px;\n        background-color: white;\n        border-radius: 2px;\n        margin-bottom: 20px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        .title {\n          span {\n            margin-right: 30px;\n\n            i {\n              margin-right: 5px;\n            }\n          }\n        }\n\n        .btn .ant-btn.ant-btn-primary {\n          font-size: 12px;\n        }\n      }\n    }\n\n    .info {\n      .info-main {\n        .cover {\n          width: 112px;\n          height: 144px;\n          border-radius: 2px;\n          background-color: rgba(0, 0, 0, 0.05);\n          margin: 0 auto;\n          box-shadow: 0 3px 14px 0 hsla(22, 4%, 52%, 0.4);\n          background-size: cover;\n          background-position: center;\n          cursor: pointer;\n        }\n        .title {\n          font-size: 1.2em;\n          height: 50px;\n          line-height: 60px;\n          width: 100%;\n          text-align: center;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          white-space: keep-all;\n        }\n        .introduce {\n          color: #515a6e;\n          word-wrap: break-word;\n        }\n      }\n    }\n  }\n"]);return G=function(){return e},e}var J=h["a"].div(G(),e=>e.color),V=e=>{var n=e.play,t=Object(r["useContext"])(f["a"]),a=Object(r["useMemo"])(()=>t,[t]),i=Object(r["useState"])(0),c=d()(i,2),p=c[0],u=c[1],g=Object(r["useState"])(200),h=d()(g,2),x=h[0],y=h[1],w=Object(r["useRef"])(null),O=Object(r["useRef"])(null);return Object(r["useEffect"])(()=>{y(.5625*w.current.clientWidth),n.eposides.some((e,t)=>{if(e.id===n.id)return O.current.scrollTop=80*t,!0})}),l.a.createElement(J,{color:a},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"player",ref:w},n.levelLimit?l.a.createElement("div",{className:"levelLimit"},l.a.createElement("img",{src:B.a,alt:""}),l.a.createElement("span",null,Object(v["formatMessage"])({id:"animate.play.level.limit"}))):l.a.createElement(F,{info:n})),l.a.createElement("div",{className:"sidebar",style:{height:x}},l.a.createElement("div",{className:"header"},["eposide","danmu"].map((e,n)=>l.a.createElement("span",{className:p===n?"active":"",onClick:()=>{u(n)},key:n},Object(v["formatMessage"])({id:"animate.play.tabs.".concat(e)})))),l.a.createElement("div",{className:"content",ref:O},l.a.createElement("div",{className:0===p?"eposide active":"eposide"},l.a.createElement(b["a"],{id:n.id,cover:n.target.coverVertical,eposide:n.eposides})),l.a.createElement("div",{className:1===p?"danmu active":"danmu"},l.a.createElement(M,{id:n.id})))),l.a.createElement("div",{className:"comment"},l.a.createElement("div",{className:"report"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,n.target.title," - ",n.title),l.a.createElement(m["a"],{placement:"top",title:Object(v["formatMessage"])({id:"animate.info.play"})},l.a.createElement("span",null,l.a.createElement(S["a"],{type:"icon-youtube"}),n.countPlay)),l.a.createElement(m["a"],{placement:"top",title:Object(v["formatMessage"])({id:"animate.info.comment"})},l.a.createElement("span",null,l.a.createElement(S["a"],{type:"icon-comment1"}),n.countComment)),l.a.createElement(m["a"],{placement:"top",title:Object(v["formatMessage"])({id:"animate.info.danmu"})},l.a.createElement("span",null,l.a.createElement(S["a"],{type:"icon-pinglun"}),n.countDanmu))),l.a.createElement("div",{className:"btn"},l.a.createElement(H["a"],null,l.a.createElement(I["a"],{type:"Animate",onModel:"Eposide",target:n.id,api:E["a"]},l.a.createElement(s["a"],{type:"primary",shape:"round"},Object(v["formatMessage"])({id:"report.question"})))))),l.a.createElement(D["a"],{target:n.id,api:E["a"],onModel:"Eposide"})),l.a.createElement("div",{className:"info"},l.a.createElement(o["a"],{bordered:!1,className:"info-main"},l.a.createElement("div",{className:"cover",style:{backgroundImage:"url(".concat(n.target.coverVertical,")")},onClick:()=>{q.a.push("/slug/".concat(n.target.slug))}}),l.a.createElement("div",{className:"title"},n.target.title),l.a.createElement("div",{className:"introduce"},n.target.introduce)))))},W=V,Y=class extends r["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.id,n=this.props.dispatch;n({type:"animate/getPlayInfo",payload:{params:{id:e}}}).then(e=>{e&&this.setState({info:e.data})})}),this.state={id:e.match.params.id,info:{link:[],eposides:[],target:{}}}}static getDerivedStateFromProps(e,n){return e.match.params.id!==n.id?{id:e.match.params.id}:null}componentDidMount(){this.initData()}componentDidUpdate(e,n){n.id!==this.state.id&&this.initData()}render(){var e=this.props.loading,n=this.state.info;return l.a.createElement(l.a.Fragment,null,l.a.createElement(a["a"],{spinning:e,size:"large"},l.a.createElement(W,{play:n})))}};Y=Object(i["a"])([Object(c["connect"])(e=>{var n=e.animate,t=e.loading;return{animate:n,loading:t.effects["animate/getPlayInfo"]}})],Y);n["default"]=Y}}]);