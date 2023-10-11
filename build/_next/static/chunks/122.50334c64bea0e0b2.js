(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{5503:function(e,n,t){"use strict";var o=t(4836);n.Z=void 0;var r=o(t(4938)),i=t(5893),l=(0,r.default)((0,i.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");n.Z=l},4938:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=t(224)},3219:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var o=t(7462),r=t(3366),i=t(7294),l=t(3536),a=t(4780),c=t(8216),u=t(1657),s=t(948),d=t(1588),m=t(4867);function getSvgIconUtilityClass(e){return(0,m.Z)("MuiSvgIcon",e)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var _=t(5893);let p=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],useUtilityClasses=e=>{let{color:n,fontSize:t,classes:o}=e,r={root:["root","inherit"!==n&&`color${(0,c.Z)(n)}`,`fontSize${(0,c.Z)(t)}`]};return(0,a.Z)(r,getSvgIconUtilityClass,o)},f=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:t}=e;return[n.root,"inherit"!==t.color&&n[`color${(0,c.Z)(t.color)}`],n[`fontSize${(0,c.Z)(t.fontSize)}`]]}})(({theme:e,ownerState:n})=>{var t,o,r,i,l,a,c,u,s,d,m,_,p;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:n.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(t=e.transitions)||null==(o=t.create)?void 0:o.call(t,"fill",{duration:null==(r=e.transitions)||null==(r=r.duration)?void 0:r.shorter}),fontSize:({inherit:"inherit",small:(null==(i=e.typography)||null==(l=i.pxToRem)?void 0:l.call(i,20))||"1.25rem",medium:(null==(a=e.typography)||null==(c=a.pxToRem)?void 0:c.call(a,24))||"1.5rem",large:(null==(u=e.typography)||null==(s=u.pxToRem)?void 0:s.call(u,35))||"2.1875rem"})[n.fontSize],color:null!=(d=null==(m=(e.vars||e).palette)||null==(m=m[n.color])?void 0:m.main)?d:({action:null==(_=(e.vars||e).palette)||null==(_=_.action)?void 0:_.active,disabled:null==(p=(e.vars||e).palette)||null==(p=p.action)?void 0:p.disabled,inherit:void 0})[n.color]}}),h=i.forwardRef(function(e,n){let t=(0,u.Z)({props:e,name:"MuiSvgIcon"}),{children:a,className:c,color:s="inherit",component:d="svg",fontSize:m="medium",htmlColor:h,inheritViewBox:x=!1,titleAccess:g,viewBox:v="0 0 24 24"}=t,b=(0,r.Z)(t,p),w=i.isValidElement(a)&&"svg"===a.type,j=(0,o.Z)({},t,{color:s,component:d,fontSize:m,instanceFontSize:e.fontSize,inheritViewBox:x,viewBox:v,hasSvgAsChild:w}),y={};x||(y.viewBox=v);let z=useUtilityClasses(j);return(0,_.jsxs)(f,(0,o.Z)({as:d,className:(0,l.Z)(z.root,c),focusable:"false",color:h,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:n},y,b,w&&a.props,{ownerState:j,children:[w?a.props.children:a,g?(0,_.jsx)("title",{children:g}):null]}))});h.muiName="SvgIcon";var x=h},224:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return r.Z},createChainedFunction:function(){return utils_createChainedFunction},createSvgIcon:function(){return createSvgIcon},debounce:function(){return utils_debounce},deprecatedPropType:function(){return utils_deprecatedPropType},isMuiElement:function(){return utils_isMuiElement},ownerDocument:function(){return s},ownerWindow:function(){return utils_ownerWindow},requirePropFactory:function(){return utils_requirePropFactory},setRef:function(){return d},unstable_ClassNameGenerator:function(){return g},unstable_useEnhancedEffect:function(){return m},unstable_useId:function(){return utils_useId},unsupportedProp:function(){return utils_unsupportedProp},useControlled:function(){return utils_useControlled},useEventCallback:function(){return f.Z},useForkRef:function(){return h.Z},useIsFocusVisible:function(){return x.Z}});var o=t(7078),r=t(8216),utils_createChainedFunction=function(...e){return e.reduce((e,n)=>null==n?e:function(...t){e.apply(this,t),n.apply(this,t)},()=>{})},i=t(7462),l=t(7294),a=t.t(l,2),c=t(3219),u=t(5893);function createSvgIcon(e,n){function Component(t,o){return(0,u.jsx)(c.Z,(0,i.Z)({"data-testid":`${n}Icon`,ref:o},t,{children:e}))}return Component.muiName=c.Z.muiName,l.memo(l.forwardRef(Component))}var utils_debounce=function(e,n=166){let t;function debounced(...o){clearTimeout(t),t=setTimeout(()=>{e.apply(this,o)},n)}return debounced.clear=()=>{clearTimeout(t)},debounced},utils_deprecatedPropType=function(e,n){return()=>null},utils_isMuiElement=function(e,n){var t,o;return l.isValidElement(e)&&-1!==n.indexOf(null!=(t=e.type.muiName)?t:null==(o=e.type)||null==(o=o._payload)||null==(o=o.value)?void 0:o.muiName)};function ownerDocument(e){return e&&e.ownerDocument||document}var s=ownerDocument,utils_ownerWindow=function(e){let n=ownerDocument(e);return n.defaultView||window},utils_requirePropFactory=function(e,n){return()=>null},d=t(7960).Z,m=t(3546).Z;let _=0,p=a["useId".toString()];var utils_useId=function(e){if(void 0!==p){let n=p();return null!=e?e:n}return function(e){let[n,t]=l.useState(e),o=e||n;return l.useEffect(()=>{null==n&&(_+=1,t(`mui-${_}`))},[n]),o}(e)},utils_unsupportedProp=function(e,n,t,o,r){return null},utils_useControlled=function({controlled:e,default:n,name:t,state:o="value"}){let{current:r}=l.useRef(void 0!==e),[i,a]=l.useState(n),c=r?e:i,u=l.useCallback(e=>{r||a(e)},[]);return[c,u]},f=t(798),h=t(1467),x=t(8791);let g={configure:e=>{o.Z.configure(e)}}},4122:function(e,n,t){"use strict";t.r(n);var o=t(5893),r=t(4359),i=t(7294),l=t(5503),a=t(7211),c=t.n(a),u=t(5675),s=t.n(u);let DropdownItem=e=>(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(r.Z,{sx:{"&:hover":{color:"#1CCD58",backgroundColor:"rgba(121, 255, 167, 0.04)",boxShadow:"0px 0px 40px 0px rgba(0, 0, 0, 0.20)",backdropFilter:"blur(45px)"},width:"100%",borderRadius:"10px",color:"white",textTransform:"capitalize",fontFamily:"Inter",fontSize:"14px"},children:(0,o.jsxs)("div",{className:c().dropdownItem,children:[(0,o.jsx)(s(),{src:e.img,width:40,height:40,loading:"lazy",alt:""}),(0,o.jsx)("p",{className:c().itemText,children:e.text})]})})});n.default=()=>{let[e,n]=(0,i.useState)(!1),[t,a]=(0,i.useState)(!1),[u,d]=(0,i.useState)(!1),m=t?"/mobile_close_btn.png":"/mobile_more_btn.png",_=(0,i.useRef)(),p=(0,i.useRef)(),f=(0,i.useRef)();return(0,i.useEffect)(()=>{let handler=e=>{_.current.contains(e.target)||n(!1)};return document.addEventListener("mousedown",handler),()=>{document.removeEventListener("mousedown",handler)}}),(0,i.useEffect)(()=>{let MenuHandler=e=>{p.current.contains(e.target)||a(!1)};return document.addEventListener("mousedown",MenuHandler),()=>{document.removeEventListener("mousedown",MenuHandler)}}),(0,i.useEffect)(()=>{let MobileHandler=e=>{f.current.contains(e.target)||d(!1)};return document.addEventListener("mousedown",MobileHandler),()=>{document.removeEventListener("mousedown",MobileHandler)}}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:c().mobile_header_container,ref:p,children:[(0,o.jsx)("div",{className:c().mobile_header_left,children:(0,o.jsx)("img",{src:"/logo_mobile.png",loading:"lazy",alt:"Zoo Logo",className:c().mobile_logo})}),(0,o.jsx)("div",{className:c().mobile_header_right,children:(0,o.jsx)("img",{src:m,loading:"lazy",alt:"More Button",className:c().more_btn,onClick:()=>{a(!t)}})}),(0,o.jsx)("div",{className:"".concat(t?c().active:c().inactive," ").concat(c().mobile_menu),children:(0,o.jsxs)("div",{className:c().mask,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(r.Z,{id:"basic-button",endIcon:(0,o.jsx)(l.Z,{}),style:{marginLeft:"30px",textTransform:"capitalize"},className:c().mobile_prod,onClick:()=>{d(!u)},ref:f,children:"Products"}),(0,o.jsx)("div",{className:"".concat(u?c().active:c().inactive," ").concat(c().dropdown_menu),children:(0,o.jsxs)("div",{children:[(0,o.jsx)(DropdownItem,{img:"/bear.png",text:"Bear",link:"https://app.indexzoo.com/bear"}),(0,o.jsx)(DropdownItem,{img:"/bull.png",text:"Bull",link:"https://app.indexzoo.com/bull"}),(0,o.jsx)(DropdownItem,{img:"/zoo.png",text:"ZooEx",link:""}),(0,o.jsx)(s(),{src:"/comingSoon.png",alt:"",width:280,height:120,loading:"lazy",style:{zIndex:"20",position:"absolute",marginLeft:"-25px",marginTop:"5.5px",height:"auto",width:"40px"}})]})})]}),(0,o.jsx)("div",{style:{paddingLeft:"32px"},children:(0,o.jsx)(r.Z,{id:"zoo-doc",style:{marginRight:"30px",textTransform:"capitalize"},className:c().mobile_zooDoc,children:"Zoo Doc"})})]})})]}),(0,o.jsxs)("div",{className:c().header_container,children:[(0,o.jsx)(s(),{src:"/logo.png",width:200,height:50,loading:"lazy",className:c().header_container_left}),(0,o.jsxs)("div",{className:c().header_container_right,ref:_,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(r.Z,{id:"basic-button",endIcon:(0,o.jsx)(l.Z,{}),style:{textTransform:"capitalize",fontSize:"16px",marginTop:"38px"},onClick:()=>{n(!e)},className:c().btn,children:"Products"}),(0,o.jsx)("div",{className:"".concat(e?c().active:c().inactive," ").concat(c().dropdown_menu),children:(0,o.jsxs)("div",{children:[(0,o.jsx)(DropdownItem,{img:"/bear.png",text:"Bear",link:"https://app.indexzoo.com/bear"}),(0,o.jsx)(DropdownItem,{img:"/bull.png",text:"Bull",link:"https://app.indexzoo.com/bull"}),(0,o.jsx)(DropdownItem,{img:"/zoo.png",text:"ZooEx",link:""}),(0,o.jsx)(s(),{src:"/comingSoon.png",alt:"",width:280,height:100,loading:"lazy",style:{position:"absolute",marginLeft:"-42px",marginTop:"5.5px",height:"auto",width:"40px"}})]})})]}),(0,o.jsx)("div",{style:{paddingLeft:"32px",zIndex:"1"},children:(0,o.jsx)(r.Z,{style:{width:"80px",textTransform:"capitalize",fontSize:"16px",marginTop:"38px"},className:c().btn,children:"Zoo Doc"})})]})]})]})}},7211:function(e){e.exports={header_container:"Header_header_container__cpAhc",mobile_header_container:"Header_mobile_header_container__AloEO",header_container_left:"Header_header_container_left__9cPOH",header_container_right:"Header_header_container_right__qgmtH",btn:"Header_btn__7eHSK",header_container_right_enter:"Header_header_container_right_enter__fmnYi",dropdown_menu:"Header_dropdown_menu__yGUXX",dropdownItem:"Header_dropdownItem__j3T1_",active:"Header_active__q8FiA",inactive:"Header_inactive__V0MD5",mobile_header_left:"Header_mobile_header_left__z95Nz",mobile_logo:"Header_mobile_logo__UpPmJ",mobile_header_right:"Header_mobile_header_right__GBTPE",mobile_enter:"Header_mobile_enter__0ibaC",more_btn:"Header_more_btn__cFaRB",mobile_menu:"Header_mobile_menu__3AC7_",mask:"Header_mask__JJMWP","basic-button":"Header_basic-button__t4z__","zoo-doc":"Header_zoo-doc__qP_30",mobile_prod:"Header_mobile_prod___nmGN",mobile_zooDoc:"Header_mobile_zooDoc__wDHfE"}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);