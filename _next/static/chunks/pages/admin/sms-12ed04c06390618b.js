(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5740],{28359:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/sms",function(){return t(39314)}])},38554:function(e,n){"use strict";n.Z={button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",width:"80px",height:{xs:"40px",sm:"48px"}},container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",margin:"auto",borderColor:"#E2E8F0"},tabsContainer:{marginTop:function(e){return e.spacing(8)},border:function(e){return"1px solid ".concat(e.palette.bacap.border)},minHeight:"800px",borderRadius:"8px",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},customizedButtonLink:{cursor:"pointer",color:"#8BC24A",textDecoration:"underline",fontWeight:600}}},55688:function(e,n,t){"use strict";var r=t(85893),i=t(67294),a=t(45697),o=t.n(a),c=t(14866),s=t(46901);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=i.forwardRef((function(e,n){return(0,r.jsx)(s.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){l(e,n,t[n])}))}return e}({elevation:6,ref:n,variant:"filled"},e))}));function d(e){var n=e.openSnackbar,t=e.message,a=e.severity,o=e.closeHandlerCB,s=void 0===o?function(){}:o,l=(0,i.useState)(n),d=l[0],p=l[1];(0,i.useEffect)((function(){p(n)}),[n]);var f=function(){p(!1),s()};return(0,r.jsx)(c.Z,{open:d,autoHideDuration:3e3,onClose:f,children:(0,r.jsx)(u,{onClose:f,severity:a,sx:{width:"100%"},children:t})})}d.propTypes={openSnackbar:o().bool,message:o().string,severity:o().string},n.Z=d},31338:function(e,n,t){"use strict";t.d(n,{x:function(){return c},P:function(){return s}});var r=t(85893),i=t(87357);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=function(e){var n=e.children,t=e.value,c=e.index,s=o(e,["children","value","index"]);return(0,r.jsx)("div",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({role:"tabpanel",hidden:t!==c,id:"custom-tabpanel-".concat(c),"aria-labelledby":"custom-tab-".concat(c)},s,{children:t===c&&(0,r.jsx)(i.Z,{sx:{p:3},children:n})}))};var s=function(e){return{id:"custom-tab-".concat(e),"aria-controls":"custom-tabpanel-".concat(e)}}},39314:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ce}});var r=t(34051),i=t.n(r),a=t(85893),o=t(95243),c=t(67294),s=t(15861),l=t(87357),u=t(88409),d=t(40044),p=t(86886),f=t(31338),h=t(11057),m=t(82280),v=t(38895),x=t(22797),b=t(23508),y=t(50657),j=t(37645),g=t(6514),C=t(58951),S=t(61903),Z=t(31425),w=t(98456),O=t(47312),E=t(69368),k=t(94054),R=t(50480),T=t(40476),A=t(53457),_=t(18972),I=t(18360),P={phonebookContainer:{border:function(e){return"1px solid ".concat(e.palette.bacap.border)},minHeight:"500px",maxHeight:"500px",borderRadius:"8px",background:"#fafafa",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",overflow:"auto"},searchPhonebookTextField:{width:"170px",margin:1,background:"#FFFFFF",position:"absolute",zIndex:1},contactInformationItem:{display:"flex",alignItems:"baseline"}},N=/^09[0-9]{9}$/g,D="Cell number is required.";function M(e,n){var t=e.find((function(e){return e.cellnumber===n}));return Boolean(t)}var L=function(e,n,t,r){if(null!==t){if(""===t)return"ERROR_MISSING_CELLNUMBER";if(function(e){return!e.match(N)}(t))return"ERROR_INVALID_FORMAT_CELLNUMBER";if("EDIT"===e){if(r&&t!==r)return M(n,t)?"ERROR_CONTACT_ALREADY_EXIST":""}else{if("ADD"!==e)return"";if(M(n,t))return"ERROR_CONTACT_ALREADY_EXIST"}}},z=function(e){switch(e){case"ERROR_MISSING_CELLNUMBER":case"ERROR_MISSING_CELLNUMBER":return D;case"ERROR_INVALID_FORMAT_CELLNUMBER":return"Invalid cell number format.";case"ERROR_CONTACT_ALREADY_EXIST":return"Cell number already exists in the conact list.";default:return""}},B=t(38885);function F(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function W(e){return function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return F(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return F(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var q=function(e){var n,t,r=e.contacts,i=e.open,o=e.handleClose,u=e.handleAddContact,d=e.loadingButton,p=e.regions,f=e.province,m=e.setProvince,v=e.municipality,x=e.setMunicipality,b=(0,c.useState)(""),N=b[0],D=b[1],M=(0,c.useState)(null),F=M[0],q=M[1],U=(0,c.useState)(""),H=U[0],G=U[1],Y=(0,c.useState)([]),K=Y[0],V=Y[1],X=(0,c.useState)([]),$=X[0],J=X[1],Q=(0,c.useState)(d),ee=Q[0],ne=Q[1],te=Object.keys(p),re=(0,B.Z)().cropList;(0,c.useEffect)((function(){ne(d)}),[d]),(0,c.useEffect)((function(){Boolean(f)&&V(p[f])}),[f,p]);var ie=function(e){var n=e.target,t=n.value,r=n.checked;J((function(e){return r?W(e).concat([t]):e.filter((function(e){return e!==t}))}))};return(0,a.jsxs)(y.Z,{fullWidth:!0,maxWidth:"xs",open:i,onClose:o,children:[(0,a.jsx)(j.Z,{children:"Add Contact"}),(0,a.jsxs)(g.Z,{children:[(0,a.jsxs)(l.Z,{sx:P.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:9},children:(0,a.jsx)(C.Z,{children:"Name:"})}),(0,a.jsx)(S.Z,{id:"outlined-basic",variant:"standard",size:"small",onChange:function(e){D(e.target.value)}})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(l.Z,{sx:P.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:3},children:(0,a.jsx)(C.Z,{children:"Cell Number:"})}),(0,a.jsx)(S.Z,{error:(null===(n=L("ADD",r,F,null))||void 0===n?void 0:n.length)>0,helperText:z(L("ADD",r,F)),id:"outlined-basic",variant:"standard",size:"small",onChange:function(e){q(e.target.value)},type:"tel"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(l.Z,{sx:P.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:5},children:(0,a.jsx)(C.Z,{children:"Nickname:"})}),(0,a.jsx)(S.Z,{id:"outlined-basic",variant:"standard",size:"small",onChange:function(e){G(e.target.value)}})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(k.Z,{variant:"standard",fullWidth:!0,children:[(0,a.jsx)(O.Z,{id:"demo-simple-select-label",children:"Select Province"}),(0,a.jsx)(I.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:f,label:"Province",onChange:function(e){m(e.target.value),x("")},children:te.map((function(e){return(0,a.jsx)(_.Z,{value:e,children:e},e)}))})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)(k.Z,{variant:"standard",fullWidth:!0,children:[(0,a.jsx)(O.Z,{id:"demo-simple-select-label",children:"Select Municipality"}),(0,a.jsx)(I.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:v,label:"Municipality",onChange:function(e){x(e.target.value)},disabled:!Boolean(f),children:K.map((function(e){return(0,a.jsx)(_.Z,{value:e,children:e},e)}))})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)(k.Z,{children:[(0,a.jsx)(T.Z,{id:"demo-checkbox-group-label",children:"Subscribed Crops"}),(0,a.jsx)(s.Z,{variant:"caption",children:"Select crops where farmer wants to receive SMS."}),(0,a.jsx)(A.Z,{row:!0,children:re.length?re.map((function(e){return(0,a.jsx)(R.Z,{control:(0,a.jsx)(E.Z,{value:e,checked:$.includes(e),onChange:ie}),label:e},e)})):(0,a.jsx)("p",{children:"No data available."})})]})]}),(0,a.jsxs)(Z.Z,{children:[(0,a.jsx)(h.Z,{disabled:ee,size:"small",onClick:o,children:"CANCEL"}),(0,a.jsxs)(h.Z,{disabled:(null===(t=L("ADD",r,F))||void 0===t?void 0:t.length)>0||null===F||""===f.length||""===v.length||!(H.length>0&&H.length<=5)||0===$.length||ee,size:"small",variant:"contained",onClick:function(){u({name:N,cellnumber:F,nickname:H,province:f,municipality:v,subscribed_crops:$}),D(""),q(null),m(""),x(""),o()},children:[(0,a.jsx)("span",{style:{display:ee?"none":"block"},children:"SAVE"}),(0,a.jsx)(w.Z,{size:24,color:"secondary",sx:{display:ee?"block":"none"}})]})]})]})};function U(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function H(e){return function(e){if(Array.isArray(e))return U(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return U(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var G=function(e){var n,t,r=e.loadingButton,i=e.open,o=e.contact,u=e.contacts,d=e.handleClose,p=e.handleDeleteContact,f=e.handleEditContact,m=e.regions,v=(0,c.useState)(!1),x=v[0],b=v[1],N=(0,c.useState)(o.name),D=N[0],M=N[1],F=(0,c.useState)(o.cellnumber),W=F[0],q=F[1],U=(0,c.useState)(o.nickname),G=U[0],Y=U[1],K=(0,c.useState)(o.province),V=K[0],X=K[1],$=(0,c.useState)(o.municipality),J=$[0],Q=$[1],ee=(0,c.useState)([]),ne=ee[0],te=ee[1],re=(0,c.useState)(r),ie=re[0],ae=re[1],oe=(0,c.useState)(o.subscribed_crops),ce=oe[0],se=oe[1],le=Object.keys(m),ue=(0,B.Z)().cropList;(0,c.useEffect)((function(){se(o.subscribed_crops)}),[o]),(0,c.useEffect)((function(){te(m[V])}),[V,m]),(0,c.useEffect)((function(){M(o.name),q(o.cellnumber),Y(o.nickname),X(o.province),Q(o.municipality)}),[o]),(0,c.useEffect)((function(){ae(r)}),[r]);var de=function(e){var n=e.target,t=n.value,r=n.checked;se((function(e){return r?H(e).concat([t]):e.filter((function(e){return e!==t}))}))};return(0,a.jsxs)(y.Z,{fullWidth:!0,maxWidth:"xs",open:i,onClose:d,children:[(0,a.jsx)(j.Z,{children:"Contact Details"}),(0,a.jsxs)(g.Z,{children:[(0,a.jsxs)(l.Z,{sx:P.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:9},children:(0,a.jsx)(C.Z,{children:"Name:"})}),(0,a.jsx)(S.Z,{disabled:!x,id:"outlined-basic",onChange:function(e){M(e.target.value)},value:D,variant:"standard",size:"small"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(l.Z,{sx:P.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:3},children:(0,a.jsx)(C.Z,{children:"Cell Number:"})}),(0,a.jsx)(S.Z,{error:(null===(n=L("EDIT",u,W,o.cellnumber))||void 0===n?void 0:n.length)>0,helperText:z(L("EDIT",u,W,o.cellnumber)),onChange:function(e){q(e.target.value)},disabled:!x,id:"outlined-basic",value:W,variant:"standard",size:"small",type:"tel"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(l.Z,{sx:P.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:5},children:(0,a.jsx)(C.Z,{children:"Nickname:"})}),(0,a.jsx)(S.Z,{disabled:!x,id:"outlined-basic",onChange:function(e){Y(e.target.value)},value:G,variant:"standard",size:"small"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(k.Z,{variant:"standard",fullWidth:!0,children:[(0,a.jsx)(O.Z,{id:"demo-simple-select-label",children:"Select Province"}),(0,a.jsx)(I.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:V,label:"Province",onChange:function(e){X(e.target.value),Q("")},disabled:!x,children:le.map((function(e){return(0,a.jsx)(_.Z,{value:e,children:e},e)}))})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)(k.Z,{variant:"standard",fullWidth:!0,children:[(0,a.jsx)(O.Z,{id:"demo-simple-select-label",children:"Select Municipality"}),(0,a.jsx)(I.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:J,label:"Municipality",onChange:function(e){Q(e.target.value)},disabled:!x||!Boolean(V),children:ne.map((function(e){return(0,a.jsx)(_.Z,{value:e,children:e},e)}))})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)(k.Z,{children:[(0,a.jsx)(T.Z,{id:"demo-checkbox-group-label",children:"Subscribed Crops"}),(0,a.jsx)(s.Z,{variant:"caption",children:"Select crops where farmer wants to receive SMS."}),(0,a.jsx)(A.Z,{row:!0,children:ue.length?ue.map((function(e){return(0,a.jsx)(R.Z,{control:(0,a.jsx)(E.Z,{value:e,checked:ce.includes(e),onChange:de,disabled:!x}),label:e},e)})):(0,a.jsx)("p",{children:"No data available."})})]})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(Z.Z,{children:[x?(0,a.jsxs)(h.Z,{disabled:(null===(t=L("EDIT",u,W,o.cellnumber))||void 0===t?void 0:t.length)>0||ie,size:"small",variant:"outlined",onClick:function(){return f({id:o.id,name:D,cellnumber:W,nickname:G,province:V,municipality:J,selectedCrops:ce})},children:[(0,a.jsx)("span",{style:{display:ie?"none":"block"},children:"SAVE"}),(0,a.jsx)(w.Z,{size:24,color:"secondary",sx:{display:ie?"block":"none"}})]}):(0,a.jsx)(h.Z,{disabled:ie,size:"small",variant:"outlined",onClick:function(){b(!0),q(o.cellnumber)},children:"EDIT"}),x?(0,a.jsx)(h.Z,{disabled:ie,size:"small",variant:"outlined",onClick:function(){M(o.name),q(o.cellnumber),X(o.province),Q(o.municipality),b(!1)},children:"CANCEL"}):(0,a.jsxs)(h.Z,{disabled:ie,size:"small",color:"error",variant:"outlined",onClick:function(){return p(o)},children:[(0,a.jsx)("span",{style:{display:ie?"none":"block"},children:"DELETE"}),(0,a.jsx)(w.Z,{size:24,color:"secondary",sx:{display:ie?"block":"none"}})]}),(0,a.jsx)(h.Z,{disabled:ie,size:"small",onClick:d,children:"CLOSE"})]})]})},Y=t(55688);var K=function(e){var n=e.handleAddContact,t=e.handleDeleteContact,r=e.handleEditContact,i=e.loading,o=e.loadingButton,s=e.open,l=e.originalContacts,u=e.setOpen,d=e.regions,p=e.province,f=e.setProvince,y=e.municipality,j=e.setMunicipality,g=(0,c.useState)(null),C=g[0],S=g[1],Z=(0,c.useState)(l),w=Z[0],O=Z[1],E=(0,c.useState)(null),k=E[0],R=E[1],T=(0,c.useState)(!1),A=T[0],_=T[1],I=(0,c.useState)(!1),P=I[0],N=I[1],D=(0,c.useState)({}),M=D[0],L=D[1];(0,c.useEffect)((function(){O(l)}),[l]),(0,c.useEffect)((function(){0!==l.length&&z(l)}),[z,l]);var z=(0,c.useCallback)((function(e){var n=e.reduce((function(e,n){return e[n.province]||(e[n.province]={}),e[n.province][n.municipality]||(e[n.province][n.municipality]=[]),e[n.province][n.municipality].push(n),e}),{});R(n)}),[R]);return(0,a.jsxs)("div",{children:[P&&Object.entries(M).length>0&&(0,a.jsx)(Y.Z,{openSnackbar:!0,message:M.message,severity:M.severity}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.Z,{variant:"contained",color:"primary",onClick:function(){_(!0),f(""),j("")},children:"ADD CONTACT"}),(0,a.jsx)(q,{contacts:l,open:A,handleClose:function(){_(!1)},handleAddContact:n,loadingButton:o,regions:d,province:p,setProvince:f,municipality:y,setMunicipality:j})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{style:{width:"30vw"},children:i?"Updating List...":(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:k&&Object.keys(k).sort().map((function(e,n){return(0,a.jsxs)(m.Z,{children:[(0,a.jsx)(v.Z,{expandIcon:(0,a.jsx)(b.Z,{}),"aria-controls":"panel1-content",id:"panel1-header",children:(0,a.jsx)("strong",{children:e})}),(0,a.jsx)(x.Z,{children:Object.keys(k[e]).sort().map((function(n){return(0,a.jsxs)("div",{children:[(0,a.jsx)("i",{children:n}),k[e][n].map((function(e){return(0,a.jsx)("ul",{children:(0,a.jsxs)("li",{style:{cursor:"pointer"},onClick:function(){return function(e){N(!1),L({}),u(!0),S(e)}(e)},children:[e.name," (",e.nickname,")"]})},e.cellnumber)}))]},n)}))})]},n)}))}),C&&(0,a.jsx)(G,{contact:C,contacts:w,handleClose:function(){u(!1),S(null)},handleDeleteContact:t,handleEditContact:r,loadingButton:o,open:s,regions:d})]})})]})},V=t(9473),X=t(24343),$=t(27392);var J=function(e){var n=e.columns,t=e.loadingReports,r=e.rows,i=e.handleReportTypeChange,o=(0,c.useState)($.Ry.SEASONAL),s=o[0],l=o[1],u=(0,V.v9)((function(e){return e.dashboard.reportType}));return(0,c.useEffect)((function(){l(u)}),[u]),(0,a.jsxs)("div",{children:[n.length>0&&(0,a.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"10px"},children:(0,a.jsxs)(k.Z,{sx:{m:1,width:{xs:"100%",sm:"100%",md:300}},size:"small",children:[(0,a.jsx)(O.Z,{id:"report-type",children:"Bulletin Type"}),(0,a.jsxs)(I.Z,{labelId:"report-type",id:"report-type",value:s,label:"Bulletin Type",onChange:i,children:[(0,a.jsx)(_.Z,{value:$.Ry.SEASONAL,children:"Seasonal Crop Recommendations"}),(0,a.jsx)(_.Z,{value:$.Ry.TEN_DAY,children:"10-Day Crop Recommendations"}),(0,a.jsx)(_.Z,{value:$.Ry.SPECIAL_WEATHER,children:"Special Weather Recommendations"})]})]})}),(0,a.jsx)("div",{style:{height:400,width:"100%"},children:(0,a.jsx)(X._,{rows:r,columns:n,loading:t,pageSize:5,rowsPerPageOptions:[5]})})]})},Q=t(38554);function ee(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){ee(e,n,t[n])}))}return e}var te=function(e){var n=e.columns,t=e.contacts,r=e.getContacts,i=e.handleAddContact,o=e.handleDeleteContact,h=e.handleEditContact,m=e.handleOpenAddContact,v=e.handleReportTypeChange,x=e.loading,b=e.loadingButton,y=e.loadingReports,j=e.open,g=e.rows,C=e.setOpen,S=e.toAddContact,Z=e.regions,w=e.province,O=e.setProvince,E=e.municipality,k=e.setMunicipality,R=(0,c.useState)(S?1:0),T=R[0],A=R[1];return(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{variant:"h5",children:"SMS Management"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"View Text (SMS) versions"})," of generated Crop Recommendations and send them to different individuals via SMS."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Manage your own phonebook"})," for ease of sending texts to individuals."]}),(0,a.jsxs)(l.Z,{sx:Q.Z.tabsContainer,children:[(0,a.jsxs)(u.Z,{value:T,onChange:function(e,n){A(n)},"aria-label":"basic tabs example",children:[(0,a.jsx)(d.Z,ne({label:"SMS"},(0,f.P)(0))),(0,a.jsx)(d.Z,ne({label:"PHONEBOOK"},(0,f.P)(1)))]}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(f.x,{value:T,index:0,children:(0,a.jsx)(J,{columns:n,handleReportTypeChange:v,loadingReports:y,rows:g})}),(0,a.jsx)(f.x,{value:T,index:1,children:(0,a.jsx)(p.ZP,{container:!0,children:(0,a.jsx)(p.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(K,{getContacts:r,handleAddContact:i,handleDeleteContact:o,handleEditContact:h,handleOpenAddContact:m,loading:x,loadingButton:b,open:j,originalContacts:t,setOpen:C,regions:Z,province:w,setProvince:O,municipality:E,setMunicipality:k})})})})]})]})]})},re=t(66383),ie=t(53063),ae=t(47426),oe=t(77715),ce=t(63835),se=t(16327),le=t(40558),ue=t(11163),de=t(87006),pe=t(72882),fe=t(55113),he=t(7906),me=t(53184),ve=t(53816),xe=t(53252),be=t(295);function ye(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,i)}function je(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){ye(a,r,i,o,c,"next",e)}function c(e){ye(a,r,i,o,c,"throw",e)}o(void 0)}))}}function ge(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Ce=(0,o.Z)((function(e){var n=e.loading,t=e.user,r=e.onBtnLogoutClick,o=(0,ce.aC)(),u=(0,ue.useRouter)(),d=(0,V.I0)(),p=(0,c.useState)([]),f=p[0],m=p[1],v=(0,c.useState)([]),x=v[0],b=v[1],C=(0,c.useState)([]),S=C[0],w=C[1],O=(0,c.useState)([]),E=O[0],k=O[1],R=(0,c.useState)(!1),T=R[0],A=R[1],_=(0,c.useState)(!1),I=_[0],P=_[1],N=(0,c.useState)({}),D=N[0],M=N[1],L=(0,c.useState)(!1),z=L[0],B=L[1],F=(0,c.useState)(!1),W=F[0],q=F[1],U=(0,c.useState)([]),H=U[0],G=U[1],K=(0,c.useState)(!1),X=K[0],$=K[1],J=(0,V.v9)((function(e){return e.dashboard.reportType})),Q=(0,c.useState)([]),ee=Q[0],ne=Q[1],ye=(0,c.useState)(""),Ce=ye[0],Se=ye[1],Ze=(0,c.useState)(""),we=Ze[0],Oe=Ze[1],Ee=function(){var e=je(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),e.next=4,(0,le.K2)();case 4:n=e.sent,k(n),B(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ke=function(e){var n=e.logs;return(0,a.jsx)(pe.Z,{component:fe.Z,children:(0,a.jsxs)(he.Z,{sx:{minWidth:650},"arial-label":"simple-table",children:[(0,a.jsx)(me.Z,{children:(0,a.jsxs)(ve.Z,{children:[(0,a.jsx)(xe.Z,{children:"Number"}),(0,a.jsxs)(xe.Z,{children:["Date\xa0",(0,a.jsx)("span",{style:{fontSize:"10px"},children:"(MM/DD/YYYY)"})]}),(0,a.jsx)(xe.Z,{children:"Message"}),(0,a.jsx)(xe.Z,{children:"Recipients"})]})}),(0,a.jsx)(be.Z,{children:n.map((function(e,n){var t=JSON.parse(e),r=new Date(t.dateSent).toLocaleString();return(0,a.jsxs)(ve.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,a.jsx)(xe.Z,{component:"th",scope:"row",children:n+1}),(0,a.jsx)(xe.Z,{children:r}),(0,a.jsx)(xe.Z,{children:t.sentMessage}),(0,a.jsx)(xe.Z,{children:t.recipientsWithName||t.recipientsNumber})]},t.dateSent)}))})]})})},Re=function(e){var n=e.report;return(0,a.jsxs)(y.Z,{fullWidth:!0,maxWidth:"md",open:W,onClose:Ne,children:[(0,a.jsx)(j.Z,{children:"SMS Recommendation Logs"}),(0,a.jsxs)(g.Z,{dividers:!0,children:[(0,a.jsx)(s.Z,{variant:"body2",children:"This is where you can check where you send your texts message."}),(0,a.jsx)("br",{}),(0,a.jsx)(ke,{logs:null===n||void 0===n?void 0:n.logs})]}),(0,a.jsx)(Z.Z,{children:(0,a.jsx)(h.Z,{variant:"outlined",onClick:Ne,children:"Close"})})]})};(0,c.useEffect)((function(){if(null!==o.user&&!o.loading){var e=function(){var e=je(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,de._8)(o.user.uid);case 3:n=e.sent,w(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e(),Ee()}}),[o]),(0,c.useEffect)((function(){if(S.length>0){var e=S.filter((function(e){return e.type===J}));Te(e)}}),[S]),(0,c.useEffect)((function(){var e=function(){var e=je(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,se.ur)();case 3:n=e.sent,ne(null!==(t=null===n||void 0===n?void 0:n.data)&&void 0!==t?t:[]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var Te=function(e){var n={action:"Action",logs:"Logs",crop:"Crop",text_recommendation:"Text-Form Recommendation",region:"Region",province:"Province",municipality:"Municipality",month:"Month",type:"Type",updated_by:"Updated by",date_created:"Date Created"},t=[];["action","logs","crop","text_recommendation","region","province","municipality","month","type","updated_by","date_created"].forEach((function(e){"action"===e?t.push({field:e,headerName:n[e],width:100,editable:!1,sortable:!1,disableColumnMenu:!0,renderCell:function(e){return(0,a.jsx)(h.Z,{variant:"outlined",size:"small",onClick:function(n){n.stopPropagation(),u.push({pathname:"/admin/sms/viewSMS/",query:{docId:e.row.docId}})},children:"SEND"})}}):"logs"===e?t.push({field:e,headerName:n[e],width:100,editable:!1,sortable:!1,disableColumnMenu:!0,renderCell:function(e){var n;return(null===(n=e.row.logs)||void 0===n?void 0:n.length)>0?(0,a.jsx)(h.Z,{variant:"outlined",size:"small",onClick:function(){q(!0),G(e.row)},children:"VIEW LOGS"}):(0,a.jsx)(l.Z,{sx:{fontWeight:"bold"},children:"UNSENT"})}}):t.push({field:e,headerName:n[e],width:150,editable:!1,sortable:!1,disableColumnMenu:!0})}));var r=e.map((function(e,n){var t;return ge(t={id:n,docId:e.id,logs:e.logs,crop:e.crop,text_recommendation:e.smsRecommendations||"No SMS Recommendations available"},"logs",e.logs),ge(t,"region",e.region),ge(t,"province",e.province),ge(t,"municipality",e.municipality),ge(t,"month",e.month),ge(t,"type",e.type),ge(t,"updated_by",e.updated_by),ge(t,"date_created","".concat(e.date_created.toDate().toDateString(),"\n          ").concat(e.date_created.toDate().toLocaleTimeString("it-IT",oe.W6))),t}));m(r),b(t)};(0,c.useEffect)((function(){void 0===Object.keys(u.query)[0]&&(A(!1),M({})),"isSent"===Object.keys(u.query)[0]&&(B(!1),A(!0),Ae({message:"true"===u.query.isSent?"Successfully sent Crop Recommendation via text!":"Unsuccessful in sending Crop Recommendation via text.",severity:"true"===u.query.isSent?"success":"error"}))}),[u]),(0,c.useEffect)((function(){o.loading||o.user||u.push("/admin/login")}),[o.user,o.loading,u]);var Ae=function(e){M(e)},_e=function(){var e=je(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,$(!0),e.next=4,(0,le.rE)(n);case 4:if(!e.sent){e.next=8;break}return e.next=8,Ee();case 8:$(!1),A(!0),M({message:"Successfully added a New Contact!",severity:"success"}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),Ie=function(){var e=je(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,$(!0),e.next=4,(0,le.GK)({docId:n.id});case 4:if(t=e.sent,P(!1),!t){e.next=9;break}return e.next=9,Ee();case 9:$(!1),A(!0),M({openSnackbar:!0,message:"Successfully deleted contact: ".concat(""===n.name?n.cellnumber:n.name,"!"),severity:"success"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),Pe=function(){var e=je(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,$(!0),e.next=4,(0,le.mP)({docId:n.id,name:n.name,cellnumber:n.cellnumber,nickname:n.nickname,province:n.province,municipality:n.municipality,subscribed_crops:n.selectedCrops});case 4:if(t=e.sent,$(!1),P(!1),!t){e.next=10;break}return e.next=10,Ee();case 10:A(!0),M({openSnackbar:!0,message:"Successfully edit contact: ".concat(""===n.name?n.cellnumber:n.name,"!"),severity:"success"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),Ne=function(){q(!1)};return(0,a.jsxs)(re.Z,{loading:n,user:t,onBtnLogoutClick:r,accLevel:ae.DW.ADMIN,children:[(0,a.jsx)(Re,{report:H}),(0,a.jsx)(te,{columns:x,contacts:E,getContacts:Ee,handleAddContact:_e,handleDeleteContact:Ie,handleEditContact:Pe,handleReportTypeChange:function(e){var n=e.target.value,t=S.filter((function(e){return e.type===n}));G(Te(t)),d((0,ie.uq)(n))},loading:z,loadingReports:n,onBtnClick:r,open:I,rows:f,setOpen:P,toAddContact:u.query.toAddContact,user:o.user,loadingButton:X,regions:ee,province:Ce,setProvince:Se,municipality:we,setMunicipality:Oe}),!z&&T&&(0,a.jsx)(Y.Z,{openSnackbar:!0,message:D.message,severity:D.severity,closeHandler:function(){A(!1)}})]})}))},38885:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(34051),i=t.n(r),a=t(67294),o=t(32848);function c(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,i)}function s(){var e=(0,a.useState)([]),n=e[0],t=e[1],r=(0,a.useState)(!1),s=r[0],l=r[1],u=(0,a.useState)(""),d=u[0],p=u[1];return(0,a.useEffect)((function(){var e=function(){var e,n=(e=i().mark((function e(){var n,r,a,c,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,(0,o.TQ)();case 4:n=e.sent,t(null!==(r=null===n||void 0===n?void 0:n.list)&&void 0!==r?r:[]),l(!1),p(""),e.next=19;break;case 11:e.prev=11,e.t0=e.catch(0),s=null!==(c=null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.data)&&void 0!==c?c:e.t0.message,p(s),l(!1),t([]);case 19:case"end":return e.stop()}}),e,null,[[0,11]])})),function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){c(a,r,i,o,s,"next",e)}function s(e){c(a,r,i,o,s,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();e()}),[]),{cropList:n,loading:s,error:d}}},40558:function(e,n,t){"use strict";t.d(n,{rE:function(){return C},GK:function(){return S},mP:function(){return Z},K2:function(){return w}});var r=t(34051),i=t.n(r),a=t(9669),o=t.n(a),c=t(99431);function s(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,i)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){s(a,r,i,o,c,"next",e)}function c(e){s(a,r,i,o,c,"throw",e)}o(void 0)}))}}function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}function m(e,n){return!n||"object"!==x(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function v(e,n){return v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},v(e,n)}var x=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=f(e);if(n){var i=f(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return m(this,t)}}var y={BASE_API_URL:"https://acap-calabarzon-skzr.onrender.com/api",CREATE_CONTACT:"".concat("https://acap-calabarzon-skzr.onrender.com/api","/contact"),DELETE_CONTACT:"".concat("https://acap-calabarzon-skzr.onrender.com/api","/contact"),EDIT_CONTACT:"".concat("https://acap-calabarzon-skzr.onrender.com/api","/contact"),GET_CONTACTS:"".concat("https://acap-calabarzon-skzr.onrender.com/api","/contacts"),PHONEBOOK:"phonebook"},j=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}(c,e);var n,t,r,a=b(c);function c(){return u(this,c),a.apply(this,arguments)}return n=c,(t=[{key:"createContact",value:function(e){var n=this;return l(i().mark((function t(){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,o()(h({},r,{url:y.CREATE_CONTACT,method:"POST"}));case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"deleteContact",value:function(e){var n=this;return l(i().mark((function t(){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,o()(h({},r,{url:y.DELETE_CONTACT,method:"DELETE"}));case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"editContact",value:function(e){var n=this;return l(i().mark((function t(){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,o()(h({},r,{url:y.EDIT_CONTACT,method:"PATCH"}));case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"getContacts",value:function(){var e=this;return l(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.createRequestObject({});case 2:return t=n.sent,n.next=5,o()(h({},t,{url:y.GET_CONTACTS,method:"GET"}));case 5:return r=n.sent,n.abrupt("return",r.data.contacts);case 7:case"end":return n.stop()}}),n)})))()}}])&&d(n.prototype,t),r&&d(n,r),c}(c.Z),g=new j,C=g.createContact.bind(g),S=g.deleteContact.bind(g),Z=g.editContact.bind(g),w=g.getContacts.bind(g)}},function(e){e.O(0,[5778,3593,9964,8858,1903,6279,542,7944,6295,1433,6572,2719,9821,4343,5478,1050,9774,2888,179],(function(){return n=28359,e(e.s=n);var n}));var n=e.O();_N_E=n}]);