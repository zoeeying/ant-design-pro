(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"14J3":function(O,s,n){"use strict";var r=n("cIOH"),E=n.n(r),T=n("1GLa")},"6VBw":function(O,s,n){"use strict";var r=n("ODXe"),E=n("rePB"),T=n("Ff2n"),P=n("q1tI"),x=n("TSYQ"),A=n.n(x),t=n("VTBJ"),m=n("Qi1f"),v={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function S(o){var a=o.primaryColor,e=o.secondaryColor;v.primaryColor=a,v.secondaryColor=e||Object(m.b)(a),v.calculated=!!e}function N(){return Object(t.a)({},v)}var f=function(a){var e=a.icon,i=a.className,u=a.onClick,c=a.style,K=a.primaryColor,W=a.secondaryColor,G=Object(T.a)(a,["icon","className","onClick","style","primaryColor","secondaryColor"]),U=v;if(K&&(U={primaryColor:K,secondaryColor:W||Object(m.b)(K)}),Object(m.f)(),Object(m.g)(Object(m.c)(e),"icon should be icon definiton, but got ".concat(e)),!Object(m.c)(e))return null;var p=e;return p&&typeof p.icon=="function"&&(p=Object(t.a)(Object(t.a)({},p),{},{icon:p.icon(U.primaryColor,U.secondaryColor)})),Object(m.a)(p.icon,"svg-".concat(p.name),Object(t.a)({className:i,onClick:u,style:c,"data-icon":p.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},G))};f.displayName="IconReact",f.getTwoToneColors=N,f.setTwoToneColors=S;var R=f;function B(o){var a=Object(m.d)(o),e=Object(r.a)(a,2),i=e[0],u=e[1];return R.setTwoToneColors({primaryColor:i,secondaryColor:u})}function D(){var o=R.getTwoToneColors();return o.calculated?[o.primaryColor,o.secondaryColor]:o.primaryColor}B("#1890ff");var y=P.forwardRef(function(o,a){var e=o.className,i=o.icon,u=o.spin,c=o.rotate,K=o.tabIndex,W=o.onClick,G=o.twoToneColor,U=Object(T.a)(o,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),p=A()("anticon",Object(E.a)({},"anticon-".concat(i.name),Boolean(i.name)),{"anticon-spin":!!u||i.name==="loading"},e),V=K;V===void 0&&W&&(V=-1);var Q=c?{msTransform:"rotate(".concat(c,"deg)"),transform:"rotate(".concat(c,"deg)")}:void 0,H=Object(m.d)(G),J=Object(r.a)(H,2),X=J[0],$=J[1];return P.createElement("span",Object.assign({role:"img","aria-label":i.name},U,{ref:a,tabIndex:V,onClick:W,className:p}),P.createElement(R,{icon:i,primaryColor:X,secondaryColor:$,style:Q}))});y.displayName="AntdIcon",y.getTwoToneColor=D,y.setTwoToneColor=B;var z=s.a=y},BMrR:function(O,s,n){"use strict";var r=n("qrJ5");s.a=r.a},DnfT:function(O,s,n){O.exports={"ant-pro-grid-content":"ant-pro-grid-content",wide:"wide"}},FRQA:function(O,s,n){"use strict";var r=n("GNNt"),E=n("wEI+"),T=n("DnfT"),P=n.n(T),x=n("q1tI"),A=n.n(x),t=n("TSYQ"),m=n.n(t),v=n("jYQm"),S=function(f){var R=Object(x.useContext)(v.a),B=f.children,D=f.contentWidth,y=f.className,z=f.style,o=Object(x.useContext)(E.b.ConfigContext),a=o.getPrefixCls,e=f.prefixCls||a("pro"),i=D||R.contentWidth,u="".concat(e,"-grid-content");return A.a.createElement("div",{className:m()(u,y,{wide:i==="Fixed"}),style:z},A.a.createElement("div",{className:"".concat(e,"-grid-content-children")},B))};s.a=S},GZ0F:function(O,s,n){"use strict";var r=n("q1tI"),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},T=E,P=n("6VBw"),x=function(m,v){return r.createElement(P.a,Object.assign({},m,{ref:v,icon:T}))};x.displayName="EllipsisOutlined";var A=s.a=r.forwardRef(x)},Qi1f:function(O,s,n){"use strict";n.d(s,"g",function(){return v}),n.d(s,"c",function(){return S}),n.d(s,"a",function(){return f}),n.d(s,"b",function(){return R}),n.d(s,"d",function(){return B}),n.d(s,"e",function(){return D}),n.d(s,"f",function(){return o});var r=n("VTBJ"),E=n("U8pU"),T=n("AJpP"),P=n("q1tI"),x=n.n(P),A=n("Kwbf"),t=n("Gu+u"),m=n.n(t);function v(a,e){Object(A.a)(a,"[@ant-design/icons] ".concat(e))}function S(a){return Object(E.a)(a)==="object"&&typeof a.name=="string"&&typeof a.theme=="string"&&(Object(E.a)(a.icon)==="object"||typeof a.icon=="function")}function N(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(a).reduce(function(e,i){var u=a[i];switch(i){case"class":e.className=u,delete e.class;break;default:e[i]=u}return e},{})}function f(a,e,i){return i?x.a.createElement(a.tag,Object(r.a)(Object(r.a)({key:e},N(a.attrs)),i),(a.children||[]).map(function(u,c){return f(u,"".concat(e,"-").concat(a.tag,"-").concat(c))})):x.a.createElement(a.tag,Object(r.a)({key:e},N(a.attrs)),(a.children||[]).map(function(u,c){return f(u,"".concat(e,"-").concat(a.tag,"-").concat(c))}))}function R(a){return Object(T.generate)(a)[0]}function B(a){return a?Array.isArray(a)?a:[a]:[]}var D={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},y=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,z=!1,o=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:y;Object(P.useEffect)(function(){z||(Object(t.insertCss)(e,{prepend:!0}),z=!0)},[])}},UXoT:function(O,s,n){O.exports={iconGroup:"antd-pro-pages-dashboard-analysis-style-iconGroup",anticon:"antd-pro-pages-dashboard-analysis-style-anticon",rankingList:"antd-pro-pages-dashboard-analysis-style-rankingList",rankingItemNumber:"antd-pro-pages-dashboard-analysis-style-rankingItemNumber",active:"antd-pro-pages-dashboard-analysis-style-active",rankingItemTitle:"antd-pro-pages-dashboard-analysis-style-rankingItemTitle",salesExtra:"antd-pro-pages-dashboard-analysis-style-salesExtra",currentDate:"antd-pro-pages-dashboard-analysis-style-currentDate",salesCard:"antd-pro-pages-dashboard-analysis-style-salesCard",salesBar:"antd-pro-pages-dashboard-analysis-style-salesBar",salesRank:"antd-pro-pages-dashboard-analysis-style-salesRank",salesCardExtra:"antd-pro-pages-dashboard-analysis-style-salesCardExtra",salesTypeRadio:"antd-pro-pages-dashboard-analysis-style-salesTypeRadio",offlineCard:"antd-pro-pages-dashboard-analysis-style-offlineCard",trendText:"antd-pro-pages-dashboard-analysis-style-trendText",rankingTitle:"antd-pro-pages-dashboard-analysis-style-rankingTitle",salesExtraWrap:"antd-pro-pages-dashboard-analysis-style-salesExtraWrap"}},jCWc:function(O,s,n){"use strict";var r=n("cIOH"),E=n.n(r),T=n("1GLa")},jXcd:function(O,s,n){"use strict";n.r(s);var r=n("14J3"),E=n("BMrR"),T=n("jCWc"),P=n("kPKH"),x=n("qVdP"),A=n("jsC+"),t=n("nKUr"),m=n("lUTK"),v=n("BvKs"),S=n("1OyB"),N=n("vuIU"),f=n("Ji7U"),R=n("LK+K"),B=n("GZ0F"),D=n("q1tI"),y=n.n(D),z=n("FRQA"),o=n("9kvl"),a=n("T2oS"),e=n("W9HT"),i=function(){return Object(t.jsx)("div",{style:{paddingTop:100,textAlign:"center"},children:Object(t.jsx)(e.a,{size:"large"})})},u=n("wd/R"),c=n.n(u);function K(I){return I*1<10?"0".concat(I):I}function W(I){var d=new Date,M=1e3*60*60*24;if(I==="today")return d.setHours(0),d.setMinutes(0),d.setSeconds(0),[c()(d),c()(d.getTime()+(M-1e3))];if(I==="week"){var l=d.getDay();d.setHours(0),d.setMinutes(0),d.setSeconds(0),l===0?l=6:l-=1;var j=d.getTime()-l*M;return[c()(j),c()(j+(7*M-1e3))]}var L=d.getFullYear();if(I==="month"){var b=d.getMonth(),h=c()(d).add(1,"months"),C=h.year(),g=h.month();return[c()("".concat(L,"-").concat(K(b+1),"-01 00:00:00")),c()(c()("".concat(C,"-").concat(K(g+1),"-01 00:00:00")).valueOf()-1e3)]}return[c()("".concat(L,"-01-01 00:00:00")),c()("".concat(L,"-12-31 23:59:59"))]}var G=n("UXoT"),U=n.n(G),p=y.a.lazy(function(){return Promise.all([n.e(0),n.e(4),n.e(5),n.e(8),n.e(51)]).then(n.bind(null,"CqmX"))}),V=y.a.lazy(function(){return Promise.all([n.e(0),n.e(4),n.e(5),n.e(48),n.e(50)]).then(n.bind(null,"qpEo"))}),Q=y.a.lazy(function(){return Promise.all([n.e(0),n.e(2),n.e(4),n.e(5),n.e(47)]).then(n.bind(null,"ceP7"))}),H=y.a.lazy(function(){return Promise.all([n.e(0),n.e(4),n.e(5),n.e(52),n.e(49)]).then(n.bind(null,"8gNO"))}),J=y.a.lazy(function(){return Promise.all([n.e(0),n.e(4),n.e(5),n.e(8),n.e(53)]).then(n.bind(null,"vvVX"))}),X=function(I){Object(f.a)(M,I);var d=Object(R.a)(M);function M(){var l;Object(S.a)(this,M);for(var j=arguments.length,L=new Array(j),b=0;b<j;b++)L[b]=arguments[b];return l=d.call.apply(d,[this].concat(L)),l.state={salesType:"all",currentTabKey:"",rangePickerValue:W("year")},l.reqRef=0,l.timeoutId=0,l.handleChangeSalesType=function(h){l.setState({salesType:h.target.value})},l.handleTabChange=function(h){l.setState({currentTabKey:h})},l.handleRangePickerChange=function(h){var C=l.props.dispatch;l.setState({rangePickerValue:h}),C({type:"dashboardAndanalysis/fetchSalesData"})},l.selectDate=function(h){var C=l.props.dispatch;l.setState({rangePickerValue:W(h)}),C({type:"dashboardAndanalysis/fetchSalesData"})},l.isActive=function(h){var C=l.state.rangePickerValue;if(!C)return"";var g=W(h);return!g||!C[0]||!C[1]?"":C[0].isSame(g[0],"day")&&C[1].isSame(g[1],"day")?U.a.currentDate:""},l}return Object(N.a)(M,[{key:"componentDidMount",value:function(){var j=this.props.dispatch;this.reqRef=requestAnimationFrame(function(){j({type:"dashboardAndanalysis/fetch"})})}},{key:"componentWillUnmount",value:function(){var j=this.props.dispatch;j({type:"dashboardAndanalysis/clear"}),cancelAnimationFrame(this.reqRef),clearTimeout(this.timeoutId)}},{key:"render",value:function(){var j=this.state,L=j.rangePickerValue,b=j.salesType,h=j.currentTabKey,C=this.props,g=C.dashboardAndanalysis,F=C.loading,k=g.visitData,q=g.visitData2,_=g.salesData,nn=g.searchData,Y=g.offlineData,an=g.offlineChartData,tn=g.salesTypeData,en=g.salesTypeDataOnline,sn=g.salesTypeDataOffline,Z;b==="all"?Z=tn:Z=b==="online"?en:sn;var on=Object(t.jsxs)(v.a,{children:[Object(t.jsx)(v.a.Item,{children:"\u64CD\u4F5C\u4E00"}),Object(t.jsx)(v.a.Item,{children:"\u64CD\u4F5C\u4E8C"})]}),w=Object(t.jsx)("span",{className:U.a.iconGroup,children:Object(t.jsx)(A.a,{overlay:on,placement:"bottomRight",children:Object(t.jsx)(B.a,{})})}),ln=h||Y[0]&&Y[0].name;return Object(t.jsx)(z.a,{children:Object(t.jsxs)(y.a.Fragment,{children:[Object(t.jsx)(D.Suspense,{fallback:Object(t.jsx)(i,{}),children:Object(t.jsx)(p,{loading:F,visitData:k})}),Object(t.jsx)(D.Suspense,{fallback:null,children:Object(t.jsx)(V,{rangePickerValue:L,salesData:_,isActive:this.isActive,handleRangePickerChange:this.handleRangePickerChange,loading:F,selectDate:this.selectDate})}),Object(t.jsxs)(E.a,{gutter:24,style:{marginTop:24},children:[Object(t.jsx)(P.a,{xl:12,lg:24,md:24,sm:24,xs:24,children:Object(t.jsx)(D.Suspense,{fallback:null,children:Object(t.jsx)(Q,{loading:F,visitData2:q,searchData:nn,dropdownGroup:w})})}),Object(t.jsx)(P.a,{xl:12,lg:24,md:24,sm:24,xs:24,children:Object(t.jsx)(D.Suspense,{fallback:null,children:Object(t.jsx)(H,{dropdownGroup:w,salesType:b,loading:F,salesPieData:Z,handleChangeSalesType:this.handleChangeSalesType})})})]}),Object(t.jsx)(D.Suspense,{fallback:null,children:Object(t.jsx)(J,{activeKey:ln,loading:F,offlineData:Y,offlineChartData:an,handleTabChange:this.handleTabChange})})]})})}}]),M}(D.Component),$=s.default=Object(o.c)(function(I){var d=I.dashboardAndanalysis,M=I.loading;return{dashboardAndanalysis:d,loading:M.effects["dashboardAndanalysis/fetch"]}})(X)},jYQm:function(O,s,n){"use strict";var r=n("q1tI"),E=n.n(r),T=Object(r.createContext)({});s.a=T},kPKH:function(O,s,n){"use strict";var r=n("/kpp");s.a=r.a}}]);