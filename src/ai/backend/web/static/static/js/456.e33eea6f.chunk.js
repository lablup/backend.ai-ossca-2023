"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[456],{28501:function(n,e,t){t.d(e,{Z:function(){return l}});var a=t(87462),r=t(4519),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},i=t(9491),c=function(n,e){return r.createElement(i.Z,(0,a.Z)({},n,{ref:e,icon:o}))};var l=r.forwardRef(c)},46951:function(n,e,t){var a=t(4519);e.Z=function(n){var e=(0,a.useRef)(n);return e.current=n,e}},53495:function(n,e,t){var a=t(4519),r=t(46951),o=t(69537);var i=function(n){if(n.id,"undefined"===typeof cancelAnimationFrame)return clearInterval(n.id);cancelAnimationFrame(n.id)};e.Z=function(n,e,t){var c=null===t||void 0===t?void 0:t.immediate,l=(0,r.Z)(n),d=(0,a.useRef)();return(0,a.useEffect)((function(){if((0,o.hj)(e)&&!(e<0))return c&&l.current(),d.current=function(n,e){if(void 0===e&&(e=0),"undefined"===typeof requestAnimationFrame)return{id:setInterval(n,e)};var t=(new Date).getTime(),a={id:0};return a.id=requestAnimationFrame((function r(){(new Date).getTime()-t>=e&&(n(),t=(new Date).getTime()),a.id=requestAnimationFrame(r)})),a}((function(){l.current()}),e),function(){d.current&&i(d.current)}}),[e]),(0,a.useCallback)((function(){d.current&&i(d.current)}),[])}},69537:function(n,e,t){t.d(e,{hj:function(){return r},mf:function(){return a}});var a=function(n){return"function"===typeof n},r=function(n){return"number"===typeof n}},83799:function(n,e,t){t.d(e,{Z:function(){return g}});var a=t(4942),r=t(29439),o=t(4519),i=t(43270),c=t.n(i),l=t(48698),d=t(21480),u=t(70111),s=t(41157),f=function(n){var e,t=n.componentCls,r=n.sizePaddingEdgeHorizontal,o=n.colorSplit,i=n.lineWidth,c=n.textPaddingInline,l=n.orientationMargin,u=n.verticalMarginInline;return(0,a.Z)({},t,Object.assign(Object.assign({},(0,d.Wf)(n)),(e={borderBlockStart:"".concat(i,"px solid ").concat(o),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:u,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat(i,"px solid ").concat(o)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat(n.dividerHorizontalGutterMargin,"px 0")}},(0,a.Z)(e,"&-horizontal".concat(t,"-with-text"),{display:"flex",alignItems:"center",margin:"".concat(n.dividerHorizontalWithTextGutterMargin,"px 0"),color:n.colorTextHeading,fontWeight:500,fontSize:n.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(o),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat(i,"px solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}}),(0,a.Z)(e,"&-horizontal".concat(t,"-with-text-left"),{"&::before":{width:"".concat(100*l,"%")},"&::after":{width:"".concat(100-100*l,"%")}}),(0,a.Z)(e,"&-horizontal".concat(t,"-with-text-right"),{"&::before":{width:"".concat(100-100*l,"%")},"&::after":{width:"".concat(100*l,"%")}}),(0,a.Z)(e,"".concat(t,"-inner-text"),{display:"inline-block",paddingBlock:0,paddingInline:c}),(0,a.Z)(e,"&-dashed",{background:"none",borderColor:o,borderStyle:"dashed",borderWidth:"".concat(i,"px 0 0")}),(0,a.Z)(e,"&-horizontal".concat(t,"-with-text").concat(t,"-dashed"),{"&::before, &::after":{borderStyle:"dashed none none"}}),(0,a.Z)(e,"&-vertical".concat(t,"-dashed"),{borderInlineStartWidth:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0}),(0,a.Z)(e,"&-plain".concat(t,"-with-text"),{color:n.colorText,fontWeight:"normal",fontSize:n.fontSize}),(0,a.Z)(e,"&-horizontal".concat(t,"-with-text-left").concat(t,"-no-default-orientation-margin-left"),(0,a.Z)({"&::before":{width:0},"&::after":{width:"100%"}},"".concat(t,"-inner-text"),{paddingInlineStart:r})),(0,a.Z)(e,"&-horizontal".concat(t,"-with-text-right").concat(t,"-no-default-orientation-margin-right"),(0,a.Z)({"&::before":{width:"100%"},"&::after":{width:0}},"".concat(t,"-inner-text"),{paddingInlineEnd:r})),e)))},h=(0,u.Z)("Divider",(function(n){var e=(0,s.TS)(n,{dividerHorizontalWithTextGutterMargin:n.margin,dividerHorizontalGutterMargin:n.marginLG,sizePaddingEdgeHorizontal:0});return[f(e)]}),(function(n){return{textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:n.marginXS}})),v=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(n);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(n,a[r])&&(t[a[r]]=n[a[r]])}return t};var g=function(n){var e,t=o.useContext(l.E_),i=t.getPrefixCls,d=t.direction,u=t.divider,s=n.prefixCls,f=n.type,g=void 0===f?"horizontal":f,m=n.orientation,p=void 0===m?"center":m,b=n.orientationMargin,Z=n.className,S=n.rootClassName,x=n.children,k=n.dashed,y=n.plain,C=n.style,w=v(n,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),E=i("divider",s),M=h(E),I=(0,r.Z)(M,2),z=I[0],O=I[1],H=p.length>0?"-".concat(p):p,B=!!x,P="left"===p&&null!=b,L="right"===p&&null!=b,j=c()(E,null===u||void 0===u?void 0:u.className,O,"".concat(E,"-").concat(g),(e={},(0,a.Z)(e,"".concat(E,"-with-text"),B),(0,a.Z)(e,"".concat(E,"-with-text").concat(H),B),(0,a.Z)(e,"".concat(E,"-dashed"),!!k),(0,a.Z)(e,"".concat(E,"-plain"),!!y),(0,a.Z)(e,"".concat(E,"-rtl"),"rtl"===d),(0,a.Z)(e,"".concat(E,"-no-default-orientation-margin-left"),P),(0,a.Z)(e,"".concat(E,"-no-default-orientation-margin-right"),L),e),Z,S),D=o.useMemo((function(){return"number"===typeof b?b:/^\d+$/.test(b)?Number(b):b}),[b]),N=Object.assign(Object.assign({},P&&{marginLeft:D}),L&&{marginRight:D});return z(o.createElement("div",Object.assign({className:j,style:Object.assign(Object.assign({},null===u||void 0===u?void 0:u.style),C)},w,{role:"separator"}),x&&"vertical"!==g&&o.createElement("span",{className:"".concat(E,"-inner-text"),style:N},x)))}},31603:function(n,e,t){t.d(e,{Z:function(){return J}});var a=t(4942),r=t(29439),o=t(4519),i=t(43270),c=t.n(i),l=t(93433),d=t(71002),u=t(53751),s=t(269),f=t(87462),h=t(44925),v=t(1413),g=t(33714),m=o.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0});function p(n,e,t){return(n-e)/(t-e)}function b(n,e,t,a){var r=p(e,t,a),o={};switch(n){case"rtl":o.right="".concat(100*r,"%"),o.transform="translateX(50%)";break;case"btt":o.bottom="".concat(100*r,"%"),o.transform="translateY(50%)";break;case"ttb":o.top="".concat(100*r,"%"),o.transform="translateY(-50%)";break;default:o.left="".concat(100*r,"%"),o.transform="translateX(-50%)"}return o}function Z(n,e){return Array.isArray(n)?n[e]:n}var S=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"],x=o.forwardRef((function(n,e){var t,r,i=n.prefixCls,l=n.value,d=n.valueIndex,u=n.onStartMove,s=n.style,p=n.render,x=n.dragging,k=n.onOffsetChange,y=(0,h.Z)(n,S),C=o.useContext(m),w=C.min,E=C.max,M=C.direction,I=C.disabled,z=C.keyboard,O=C.range,H=C.tabIndex,B=C.ariaLabelForHandle,P=C.ariaLabelledByForHandle,L=C.ariaValueTextFormatterForHandle,j="".concat(i,"-handle"),D=function(n){I||u(n,d)},N=b(M,l,w,E),W=o.createElement("div",(0,f.Z)({ref:e,className:c()(j,(t={},(0,a.Z)(t,"".concat(j,"-").concat(d+1),O),(0,a.Z)(t,"".concat(j,"-dragging"),x),t)),style:(0,v.Z)((0,v.Z)({},N),s),onMouseDown:D,onTouchStart:D,onKeyDown:function(n){if(!I&&z){var e=null;switch(n.which||n.keyCode){case g.Z.LEFT:e="ltr"===M||"btt"===M?-1:1;break;case g.Z.RIGHT:e="ltr"===M||"btt"===M?1:-1;break;case g.Z.UP:e="ttb"!==M?1:-1;break;case g.Z.DOWN:e="ttb"!==M?-1:1;break;case g.Z.HOME:e="min";break;case g.Z.END:e="max";break;case g.Z.PAGE_UP:e=2;break;case g.Z.PAGE_DOWN:e=-2}null!==e&&(n.preventDefault(),k(e,d))}},tabIndex:I?null:Z(H,d),role:"slider","aria-valuemin":w,"aria-valuemax":E,"aria-valuenow":l,"aria-disabled":I,"aria-label":Z(B,d),"aria-labelledby":Z(P,d),"aria-valuetext":null===(r=Z(L,d))||void 0===r?void 0:r(l),"aria-orientation":"ltr"===M||"rtl"===M?"horizontal":"vertical"},y));return p&&(W=p(W,{index:d,prefixCls:i,value:l,dragging:x})),W}));var k=x,y=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"],C=o.forwardRef((function(n,e){var t=n.prefixCls,a=n.style,r=n.onStartMove,i=n.onOffsetChange,c=n.values,l=n.handleRender,d=n.draggingIndex,u=(0,h.Z)(n,y),s=o.useRef({});return o.useImperativeHandle(e,(function(){return{focus:function(n){var e;null===(e=s.current[n])||void 0===e||e.focus()}}})),o.createElement(o.Fragment,null,c.map((function(n,e){return o.createElement(k,(0,f.Z)({ref:function(n){n?s.current[e]=n:delete s.current[e]},dragging:d===e,prefixCls:t,style:Z(a,e),key:e,value:n,valueIndex:e,onStartMove:r,onOffsetChange:i,render:l},u))})))}));var w=C;function E(n){var e="touches"in n?n.touches[0]:n;return{pageX:e.pageX,pageY:e.pageY}}function M(n){var e,t=n.prefixCls,r=n.style,i=n.start,l=n.end,d=n.index,u=n.onStartMove,s=o.useContext(m),f=s.direction,h=s.min,g=s.max,b=s.disabled,Z=s.range,S="".concat(t,"-track"),x=p(i,h,g),k=p(l,h,g),y=function(n){!b&&u&&u(n,-1)},C={};switch(f){case"rtl":C.right="".concat(100*x,"%"),C.width="".concat(100*k-100*x,"%");break;case"btt":C.bottom="".concat(100*x,"%"),C.height="".concat(100*k-100*x,"%");break;case"ttb":C.top="".concat(100*x,"%"),C.height="".concat(100*k-100*x,"%");break;default:C.left="".concat(100*x,"%"),C.width="".concat(100*k-100*x,"%")}return o.createElement("div",{className:c()(S,(e={},(0,a.Z)(e,"".concat(S,"-").concat(d+1),Z),(0,a.Z)(e,"".concat(t,"-track-draggable"),u),e)),style:(0,v.Z)((0,v.Z)({},C),r),onMouseDown:y,onTouchStart:y})}function I(n){var e=n.prefixCls,t=n.style,a=n.values,r=n.startPoint,i=n.onStartMove,c=o.useContext(m),l=c.included,d=c.range,u=c.min,s=o.useMemo((function(){if(!d){if(0===a.length)return[];var n=null!==r&&void 0!==r?r:u,e=a[0];return[{start:Math.min(n,e),end:Math.max(n,e)}]}for(var t=[],o=0;o<a.length-1;o+=1)t.push({start:a[o],end:a[o+1]});return t}),[a,d,r,u]);return l?s.map((function(n,a){var r=n.start,c=n.end;return o.createElement(M,{index:a,prefixCls:e,style:Z(t,a),start:r,end:c,key:a,onStartMove:i})})):null}function z(n){var e=n.prefixCls,t=n.style,r=n.children,i=n.value,l=n.onClick,d=o.useContext(m),u=d.min,s=d.max,f=d.direction,h=d.includedStart,g=d.includedEnd,p=d.included,Z="".concat(e,"-text"),S=b(f,i,u,s);return o.createElement("span",{className:c()(Z,(0,a.Z)({},"".concat(Z,"-active"),p&&h<=i&&i<=g)),style:(0,v.Z)((0,v.Z)({},S),t),onMouseDown:function(n){n.stopPropagation()},onClick:function(){l(i)}},r)}function O(n){var e=n.prefixCls,t=n.marks,a=n.onClick,r="".concat(e,"-mark");return t.length?o.createElement("div",{className:r},t.map((function(n){var e=n.value,t=n.style,i=n.label;return o.createElement(z,{key:e,prefixCls:r,style:t,value:e,onClick:a},i)}))):null}function H(n){var e=n.prefixCls,t=n.value,r=n.style,i=n.activeStyle,l=o.useContext(m),d=l.min,u=l.max,s=l.direction,f=l.included,h=l.includedStart,g=l.includedEnd,p="".concat(e,"-dot"),Z=f&&h<=t&&t<=g,S=(0,v.Z)((0,v.Z)({},b(s,t,d,u)),"function"===typeof r?r(t):r);return Z&&(S=(0,v.Z)((0,v.Z)({},S),"function"===typeof i?i(t):i)),o.createElement("span",{className:c()(p,(0,a.Z)({},"".concat(p,"-active"),Z)),style:S})}function B(n){var e=n.prefixCls,t=n.marks,a=n.dots,r=n.style,i=n.activeStyle,c=o.useContext(m),l=c.min,d=c.max,u=c.step,s=o.useMemo((function(){var n=new Set;if(t.forEach((function(e){n.add(e.value)})),a&&null!==u)for(var e=l;e<=d;)n.add(e),e+=u;return Array.from(n)}),[l,d,u,a,t]);return o.createElement("div",{className:"".concat(e,"-step")},s.map((function(n){return o.createElement(H,{prefixCls:e,key:n,value:n,style:r,activeStyle:i})})))}t(57738);var P=o.forwardRef((function(n,e){var t,i=n.prefixCls,f=void 0===i?"rc-slider":i,h=n.className,v=n.style,g=n.disabled,p=void 0!==g&&g,b=n.keyboard,Z=void 0===b||b,S=n.autoFocus,x=n.onFocus,k=n.onBlur,y=n.min,C=void 0===y?0:y,M=n.max,z=void 0===M?100:M,H=n.step,P=void 0===H?1:H,L=n.value,j=n.defaultValue,D=n.range,N=n.count,W=n.onChange,R=n.onBeforeChange,T=n.onAfterChange,F=n.allowCross,A=void 0===F||F,X=n.pushable,_=void 0!==X&&X,G=n.draggableTrack,Y=n.reverse,V=n.vertical,K=n.included,q=void 0===K||K,Q=n.startPoint,U=n.trackStyle,$=n.handleStyle,J=n.railStyle,nn=n.dotStyle,en=n.activeDotStyle,tn=n.marks,an=n.dots,rn=n.handleRender,on=n.tabIndex,cn=void 0===on?0:on,ln=n.ariaLabelForHandle,dn=n.ariaLabelledByForHandle,un=n.ariaValueTextFormatterForHandle,sn=o.useRef(),fn=o.useRef(),hn=o.useMemo((function(){return V?Y?"ttb":"btt":Y?"rtl":"ltr"}),[Y,V]),vn=o.useMemo((function(){return isFinite(C)?C:0}),[C]),gn=o.useMemo((function(){return isFinite(z)?z:100}),[z]),mn=o.useMemo((function(){return null!==P&&P<=0?1:P}),[P]),pn=o.useMemo((function(){return"boolean"===typeof _?!!_&&mn:_>=0&&_}),[_,mn]),bn=o.useMemo((function(){return Object.keys(tn||{}).map((function(n){var e=tn[n],t={value:Number(n)};return e&&"object"===(0,d.Z)(e)&&!o.isValidElement(e)&&("label"in e||"style"in e)?(t.style=e.style,t.label=e.label):t.label=e,t})).filter((function(n){var e=n.label;return e||"number"===typeof e})).sort((function(n,e){return n.value-e.value}))}),[tn]),Zn=function(n,e,t,a,r,i){var c=o.useCallback((function(t){var a=isFinite(t)?t:n;return a=Math.min(e,t),Math.max(n,a)}),[n,e]),d=o.useCallback((function(a){if(null!==t){var r=n+Math.round((c(a)-n)/t)*t,o=function(n){return(String(n).split(".")[1]||"").length},i=Math.max(o(t),o(e),o(n)),l=Number(r.toFixed(i));return n<=l&&l<=e?l:null}return null}),[t,n,e,c]),u=o.useCallback((function(r){var o=c(r),i=a.map((function(n){return n.value}));null!==t&&i.push(d(r)),i.push(n,e);var l=i[0],u=e-n;return i.forEach((function(n){var e=Math.abs(o-n);e<=u&&(l=n,u=e)})),l}),[n,e,a,t,c,d]),s=function r(o,i,c){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"===typeof i){var s,f=o[c],h=f+i,v=[];a.forEach((function(n){v.push(n.value)})),v.push(n,e),v.push(d(f));var g=i>0?1:-1;"unit"===u?v.push(d(f+g*t)):v.push(d(h)),v=v.filter((function(n){return null!==n})).filter((function(n){return i<0?n<=f:n>=f})),"unit"===u&&(v=v.filter((function(n){return n!==f})));var m="unit"===u?f:h;s=v[0];var p=Math.abs(s-m);if(v.forEach((function(n){var e=Math.abs(n-m);e<p&&(s=n,p=e)})),void 0===s)return i<0?n:e;if("dist"===u)return s;if(Math.abs(i)>1){var b=(0,l.Z)(o);return b[c]=s,r(b,i-g,c,u)}return s}return"min"===i?n:"max"===i?e:void 0},f=function(n,e,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",r=n[t],o=s(n,e,t,a);return{value:o,changed:o!==r}},h=function(n){return null===i&&0===n||"number"===typeof i&&n<i};return[u,function(n,e,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",o=n.map(u),c=o[t],l=s(o,e,t,a);if(o[t]=l,!1===r){var d=i||0;t>0&&o[t-1]!==c&&(o[t]=Math.max(o[t],o[t-1]+d)),t<o.length-1&&o[t+1]!==c&&(o[t]=Math.min(o[t],o[t+1]-d))}else if("number"===typeof i||null===i){for(var v=t+1;v<o.length;v+=1)for(var g=!0;h(o[v]-o[v-1])&&g;){var m=f(o,1,v);o[v]=m.value,g=m.changed}for(var p=t;p>0;p-=1)for(var b=!0;h(o[p]-o[p-1])&&b;){var Z=f(o,-1,p-1);o[p-1]=Z.value,b=Z.changed}for(var S=o.length-1;S>0;S-=1)for(var x=!0;h(o[S]-o[S-1])&&x;){var k=f(o,-1,S-1);o[S-1]=k.value,x=k.changed}for(var y=0;y<o.length-1;y+=1)for(var C=!0;h(o[y+1]-o[y])&&C;){var w=f(o,1,y+1);o[y+1]=w.value,C=w.changed}}return{value:o[t],values:o}}]}(vn,gn,mn,bn,A,pn),Sn=(0,r.Z)(Zn,2),xn=Sn[0],kn=Sn[1],yn=(0,s.Z)(j,{value:L}),Cn=(0,r.Z)(yn,2),wn=Cn[0],En=Cn[1],Mn=o.useMemo((function(){var n=null===wn||void 0===wn?[]:Array.isArray(wn)?wn:[wn],e=(0,r.Z)(n,1)[0],t=null===wn?[]:[void 0===e?vn:e];if(D){if(t=(0,l.Z)(n),N||void 0===wn){var a=N>=0?N+1:2;for(t=t.slice(0,a);t.length<a;){var o;t.push(null!==(o=t[t.length-1])&&void 0!==o?o:vn)}}t.sort((function(n,e){return n-e}))}return t.forEach((function(n,e){t[e]=xn(n)})),t}),[wn,D,vn,N,xn]),In=o.useRef(Mn);In.current=Mn;var zn=function(n){return D?n:n[0]},On=function(n){var e=(0,l.Z)(n).sort((function(n,e){return n-e}));W&&!(0,u.Z)(e,In.current,!0)&&W(zn(e)),En(e)},Hn=function(n){if(!p){var e=0,t=gn-vn;Mn.forEach((function(a,r){var o=Math.abs(n-a);o<=t&&(t=o,e=r)}));var a=(0,l.Z)(Mn);a[e]=n,D&&!Mn.length&&void 0===N&&a.push(n),null===R||void 0===R||R(zn(a)),On(a),null===T||void 0===T||T(zn(a))}},Bn=o.useState(null),Pn=(0,r.Z)(Bn,2),Ln=Pn[0],jn=Pn[1];o.useEffect((function(){if(null!==Ln){var n=Mn.indexOf(Ln);n>=0&&sn.current.focus(n)}jn(null)}),[Ln]);var Dn=o.useMemo((function(){return(!G||null!==mn)&&G}),[G,mn]),Nn=function(n,e,t,a,i,c,d,u,s){var f=o.useState(null),h=(0,r.Z)(f,2),v=h[0],g=h[1],m=o.useState(-1),p=(0,r.Z)(m,2),b=p[0],Z=p[1],S=o.useState(t),x=(0,r.Z)(S,2),k=x[0],y=x[1],C=o.useState(t),w=(0,r.Z)(C,2),M=w[0],I=w[1],z=o.useRef(null),O=o.useRef(null);o.useEffect((function(){-1===b&&y(t)}),[t,b]),o.useEffect((function(){return function(){document.removeEventListener("mousemove",z.current),document.removeEventListener("mouseup",O.current),document.removeEventListener("touchmove",z.current),document.removeEventListener("touchend",O.current)}}),[]);var H=function(n,e){k.some((function(e,t){return e!==n[t]}))&&(void 0!==e&&g(e),y(n),d(n))},B=function(n,e){if(-1===n){var t=M[0],r=M[M.length-1],o=a-t,d=i-r,u=e*(i-a);u=Math.max(u,o),u=Math.min(u,d);var f=c(t+u);u=f-t;var h=M.map((function(n){return n+u}));H(h)}else{var v=(i-a)*e,g=(0,l.Z)(k);g[n]=M[n];var m=s(g,v,n,"dist");H(m.values,m.value)}},P=o.useRef(B);P.current=B;var L=o.useMemo((function(){var n=(0,l.Z)(t).sort((function(n,e){return n-e})),e=(0,l.Z)(k).sort((function(n,e){return n-e}));return n.every((function(n,t){return n===e[t]}))?k:t}),[t,k]);return[b,v,L,function(a,r){a.stopPropagation();var o=t[r];Z(r),g(o),I(t);var i=E(a),c=i.pageX,l=i.pageY,d=function(t){t.preventDefault();var a,o=E(t),i=o.pageX,d=o.pageY,u=i-c,s=d-l,f=n.current.getBoundingClientRect(),h=f.width,v=f.height;switch(e){case"btt":a=-s/v;break;case"ttb":a=s/v;break;case"rtl":a=-u/h;break;default:a=u/h}P.current(r,a)},s=function n(e){e.preventDefault(),document.removeEventListener("mouseup",n),document.removeEventListener("mousemove",d),document.removeEventListener("touchend",n),document.removeEventListener("touchmove",d),z.current=null,O.current=null,Z(-1),u()};document.addEventListener("mouseup",s),document.addEventListener("mousemove",d),document.addEventListener("touchend",s),document.addEventListener("touchmove",d),z.current=d,O.current=s}]}(fn,hn,Mn,vn,gn,xn,On,(function(){null===T||void 0===T||T(zn(In.current))}),kn),Wn=(0,r.Z)(Nn,4),Rn=Wn[0],Tn=Wn[1],Fn=Wn[2],An=Wn[3],Xn=function(n,e){An(n,e),null===R||void 0===R||R(zn(In.current))},_n=-1!==Rn;o.useEffect((function(){if(!_n){var n=Mn.lastIndexOf(Tn);sn.current.focus(n)}}),[_n]);var Gn=o.useMemo((function(){return(0,l.Z)(Fn).sort((function(n,e){return n-e}))}),[Fn]),Yn=o.useMemo((function(){return D?[Gn[0],Gn[Gn.length-1]]:[vn,Gn[0]]}),[Gn,D,vn]),Vn=(0,r.Z)(Yn,2),Kn=Vn[0],qn=Vn[1];o.useImperativeHandle(e,(function(){return{focus:function(){sn.current.focus(0)},blur:function(){var n=document.activeElement;fn.current.contains(n)&&(null===n||void 0===n||n.blur())}}})),o.useEffect((function(){S&&sn.current.focus(0)}),[]);var Qn=o.useMemo((function(){return{min:vn,max:gn,direction:hn,disabled:p,keyboard:Z,step:mn,included:q,includedStart:Kn,includedEnd:qn,range:D,tabIndex:cn,ariaLabelForHandle:ln,ariaLabelledByForHandle:dn,ariaValueTextFormatterForHandle:un}}),[vn,gn,hn,p,Z,mn,q,Kn,qn,D,cn,ln,dn,un]);return o.createElement(m.Provider,{value:Qn},o.createElement("div",{ref:fn,className:c()(f,h,(t={},(0,a.Z)(t,"".concat(f,"-disabled"),p),(0,a.Z)(t,"".concat(f,"-vertical"),V),(0,a.Z)(t,"".concat(f,"-horizontal"),!V),(0,a.Z)(t,"".concat(f,"-with-marks"),bn.length),t)),style:v,onMouseDown:function(n){n.preventDefault();var e,t=fn.current.getBoundingClientRect(),a=t.width,r=t.height,o=t.left,i=t.top,c=t.bottom,l=t.right,d=n.clientX,u=n.clientY;switch(hn){case"btt":e=(c-u)/r;break;case"ttb":e=(u-i)/r;break;case"rtl":e=(l-d)/a;break;default:e=(d-o)/a}Hn(xn(vn+e*(gn-vn)))}},o.createElement("div",{className:"".concat(f,"-rail"),style:J}),o.createElement(I,{prefixCls:f,style:U,values:Gn,startPoint:Q,onStartMove:Dn?Xn:null}),o.createElement(B,{prefixCls:f,marks:bn,dots:an,style:nn,activeStyle:en}),o.createElement(w,{ref:sn,prefixCls:f,style:$,values:Fn,draggingIndex:Rn,onStartMove:Xn,onOffsetChange:function(n,e){if(!p){var t=kn(Mn,n,e);null===R||void 0===R||R(zn(Mn)),On(t.values),null===T||void 0===T||T(zn(t.values)),jn(t.value)}},onFocus:x,onBlur:k,handleRender:rn}),o.createElement(O,{prefixCls:f,marks:bn,onClick:Hn})))}));var L=P,j=t(48698),D=t(46963),N=t(72058),W=t(20742),R=t(227);var T=o.forwardRef((function(n,e){var t=n.open,a=(0,o.useRef)(null),r=(0,o.useRef)(null);function i(){N.Z.cancel(r.current),r.current=null}return o.useEffect((function(){return t?r.current=(0,N.Z)((function(){var n;null===(n=a.current)||void 0===n||n.forceAlign(),r.current=null})):i(),i}),[t,n.title]),o.createElement(R.Z,Object.assign({ref:(0,W.sQ)(a,e)},n))})),F=t(60989),A=t(21480),X=t(70111),_=t(41157),G=function(n){var e,t,r,o,i=n.componentCls,c=n.antCls,l=n.controlSize,d=n.dotSize,u=n.marginFull,s=n.marginPart,f=n.colorFillContentHover;return(0,a.Z)({},i,Object.assign(Object.assign({},(0,A.Wf)(n)),(o={position:"relative",height:l,margin:"".concat(s,"px ").concat(u,"px"),padding:0,cursor:"pointer",touchAction:"none"},(0,a.Z)(o,"&-vertical",{margin:"".concat(u,"px ").concat(s,"px")}),(0,a.Z)(o,"".concat(i,"-rail"),{position:"absolute",backgroundColor:n.railBg,borderRadius:n.borderRadiusXS,transition:"background-color ".concat(n.motionDurationMid)}),(0,a.Z)(o,"".concat(i,"-track"),{position:"absolute",backgroundColor:n.trackBg,borderRadius:n.borderRadiusXS,transition:"background-color ".concat(n.motionDurationMid)}),(0,a.Z)(o,"".concat(i,"-track-draggable"),{boxSizing:"content-box",backgroundClip:"content-box",border:"solid rgba(0,0,0,0)"}),(0,a.Z)(o,"&:hover",(e={},(0,a.Z)(e,"".concat(i,"-rail"),{backgroundColor:n.railHoverBg}),(0,a.Z)(e,"".concat(i,"-track"),{backgroundColor:n.trackHoverBg}),(0,a.Z)(e,"".concat(i,"-dot"),{borderColor:f}),(0,a.Z)(e,"".concat(i,"-handle::after"),{boxShadow:"0 0 0 ".concat(n.handleLineWidth,"px ").concat(n.colorPrimaryBorderHover)}),(0,a.Z)(e,"".concat(i,"-dot-active"),{borderColor:n.dotActiveBorderColor}),e)),(0,a.Z)(o,"".concat(i,"-handle"),(t={position:"absolute",width:n.handleSize,height:n.handleSize,outline:"none"},(0,a.Z)(t,"".concat(i,"-dragging"),{zIndex:1}),(0,a.Z)(t,"&::before",{content:'""',position:"absolute",insetInlineStart:-n.handleLineWidth,insetBlockStart:-n.handleLineWidth,width:n.handleSize+2*n.handleLineWidth,height:n.handleSize+2*n.handleLineWidth,backgroundColor:"transparent"}),(0,a.Z)(t,"&::after",{content:'""',position:"absolute",insetBlockStart:0,insetInlineStart:0,width:n.handleSize,height:n.handleSize,backgroundColor:n.colorBgElevated,boxShadow:"0 0 0 ".concat(n.handleLineWidth,"px ").concat(n.handleColor),borderRadius:"50%",cursor:"pointer",transition:"\n            inset-inline-start ".concat(n.motionDurationMid,",\n            inset-block-start ").concat(n.motionDurationMid,",\n            width ").concat(n.motionDurationMid,",\n            height ").concat(n.motionDurationMid,",\n            box-shadow ").concat(n.motionDurationMid,"\n          ")}),(0,a.Z)(t,"&:hover, &:active, &:focus",{"&::before":{insetInlineStart:-((n.handleSizeHover-n.handleSize)/2+n.handleLineWidthHover),insetBlockStart:-((n.handleSizeHover-n.handleSize)/2+n.handleLineWidthHover),width:n.handleSizeHover+2*n.handleLineWidthHover,height:n.handleSizeHover+2*n.handleLineWidthHover},"&::after":{boxShadow:"0 0 0 ".concat(n.handleLineWidthHover,"px ").concat(n.handleActiveColor),width:n.handleSizeHover,height:n.handleSizeHover,insetInlineStart:(n.handleSize-n.handleSizeHover)/2,insetBlockStart:(n.handleSize-n.handleSizeHover)/2}}),t)),(0,a.Z)(o,"".concat(i,"-mark"),{position:"absolute",fontSize:n.fontSize}),(0,a.Z)(o,"".concat(i,"-mark-text"),{position:"absolute",display:"inline-block",color:n.colorTextDescription,textAlign:"center",wordBreak:"keep-all",cursor:"pointer",userSelect:"none","&-active":{color:n.colorText}}),(0,a.Z)(o,"".concat(i,"-step"),{position:"absolute",background:"transparent",pointerEvents:"none"}),(0,a.Z)(o,"".concat(i,"-dot"),{position:"absolute",width:d,height:d,backgroundColor:n.colorBgElevated,border:"".concat(n.handleLineWidth,"px solid ").concat(n.dotBorderColor),borderRadius:"50%",cursor:"pointer",transition:"border-color ".concat(n.motionDurationSlow),pointerEvents:"auto","&-active":{borderColor:n.dotActiveBorderColor}}),(0,a.Z)(o,"&".concat(i,"-disabled"),(r={cursor:"not-allowed"},(0,a.Z)(r,"".concat(i,"-rail"),{backgroundColor:"".concat(n.railBg," !important")}),(0,a.Z)(r,"".concat(i,"-track"),{backgroundColor:"".concat(n.trackBgDisabled," !important")}),(0,a.Z)(r,"\n          ".concat(i,"-dot\n        "),{backgroundColor:n.colorBgElevated,borderColor:n.trackBgDisabled,boxShadow:"none",cursor:"not-allowed"}),(0,a.Z)(r,"".concat(i,"-handle::after"),{backgroundColor:n.colorBgElevated,cursor:"not-allowed",width:n.handleSize,height:n.handleSize,boxShadow:"0 0 0 ".concat(n.handleLineWidth,"px ").concat(new F.C(n.colorTextDisabled).onBackground(n.colorBgContainer).toHexShortString()),insetInlineStart:0,insetBlockStart:0}),(0,a.Z)(r,"\n          ".concat(i,"-mark-text,\n          ").concat(i,"-dot\n        "),{cursor:"not-allowed !important"}),r)),(0,a.Z)(o,"&-tooltip ".concat(c,"-tooltip-inner"),{minWidth:"unset"}),o)))},Y=function(n,e){var t,r,o,i,c=n.componentCls,l=n.railSize,d=n.handleSize,u=n.dotSize,s=e?"paddingBlock":"paddingInline",f=e?"width":"height",h=e?"height":"width",v=e?"insetBlockStart":"insetInlineStart",g=e?"top":"insetInlineStart",m=(3*l-d)/2,p=(d-l)/2,b=e?{borderWidth:"".concat(p,"px 0"),transform:"translateY(-".concat(p,"px)")}:{borderWidth:"0 ".concat(p,"px"),transform:"translateX(-".concat(p,"px)")};return i={},(0,a.Z)(i,s,l),(0,a.Z)(i,h,3*l),(0,a.Z)(i,"".concat(c,"-rail"),(t={},(0,a.Z)(t,f,"100%"),(0,a.Z)(t,h,l),t)),(0,a.Z)(i,"".concat(c,"-track"),(0,a.Z)({},h,l)),(0,a.Z)(i,"".concat(c,"-track-draggable"),Object.assign({},b)),(0,a.Z)(i,"".concat(c,"-handle"),(0,a.Z)({},v,m)),(0,a.Z)(i,"".concat(c,"-mark"),(r={insetInlineStart:0,top:0},(0,a.Z)(r,g,3*l+(e?0:n.marginFull)),(0,a.Z)(r,f,"100%"),r)),(0,a.Z)(i,"".concat(c,"-step"),(o={insetInlineStart:0,top:0},(0,a.Z)(o,g,l),(0,a.Z)(o,f,"100%"),(0,a.Z)(o,h,l),o)),(0,a.Z)(i,"".concat(c,"-dot"),(0,a.Z)({position:"absolute"},v,(l-u)/2)),i},V=function(n){var e=n.componentCls,t=n.marginPartWithMark;return(0,a.Z)({},"".concat(e,"-horizontal"),Object.assign(Object.assign({},Y(n,!0)),(0,a.Z)({},"&".concat(e,"-with-marks"),{marginBottom:t})))},K=function(n){var e=n.componentCls;return(0,a.Z)({},"".concat(e,"-vertical"),Object.assign(Object.assign({},Y(n,!1)),{height:"100%"}))},q=(0,X.Z)("Slider",(function(n){var e=(0,_.TS)(n,{marginPart:(n.controlHeight-n.controlSize)/2,marginFull:n.controlSize/2,marginPartWithMark:n.controlHeightLG-n.controlSize});return[G(e),V(e),K(e)]}),(function(n){var e=n.controlHeightLG/4;return{controlSize:e,railSize:4,handleSize:e,handleSizeHover:n.controlHeightSM/2,dotSize:8,handleLineWidth:n.lineWidth+1,handleLineWidthHover:n.lineWidth+3,railBg:n.colorFillTertiary,railHoverBg:n.colorFillSecondary,trackBg:n.colorPrimaryBorder,trackHoverBg:n.colorPrimaryBorderHover,handleColor:n.colorPrimaryBorder,handleActiveColor:n.colorPrimary,dotBorderColor:n.colorBorderSecondary,dotActiveBorderColor:n.colorPrimaryBorder,trackBgDisabled:n.colorBgContainerDisabled}})),Q=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(n);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(n,a[r])&&(t[a[r]]=n[a[r]])}return t},U=function(n){return"number"===typeof n?n.toString():""},$=o.forwardRef((function(n,e){var t=n.prefixCls,i=n.range,l=n.className,d=n.rootClassName,u=n.style,s=n.disabled,f=n.tooltipPrefixCls,h=n.tipFormatter,v=n.tooltipVisible,g=n.getTooltipPopupContainer,m=n.tooltipPlacement,p=Q(n,["prefixCls","range","className","rootClassName","style","disabled","tooltipPrefixCls","tipFormatter","tooltipVisible","getTooltipPopupContainer","tooltipPlacement"]),b=o.useContext(j.E_),Z=b.direction,S=b.slider,x=b.getPrefixCls,k=b.getPopupContainer,y=o.useContext(D.Z),C=null!==s&&void 0!==s?s:y,w=o.useState({}),E=(0,r.Z)(w,2),M=E[0],I=E[1],z=function(n,e){I((function(t){return Object.assign(Object.assign({},t),(0,a.Z)({},n,e))}))},O=function(n,e){return n||(e?"rtl"===Z?"left":"right":"top")},H=x("slider",t),B=q(H),P=(0,r.Z)(B,2),N=P[0],W=P[1],R=c()(l,null===S||void 0===S?void 0:S.className,d,(0,a.Z)({},"".concat(H,"-rtl"),"rtl"===Z),W);"rtl"!==Z||p.vertical||(p.reverse=!p.reverse);var F=o.useMemo((function(){return i?"object"===typeof i?[!0,i.draggableTrack]:[!0,!1]:[!1]}),[i]),A=(0,r.Z)(F,2),X=A[0],_=A[1],G=Object.assign(Object.assign({},null===S||void 0===S?void 0:S.style),u);return N(o.createElement(L,Object.assign({},p,{step:p.step,range:X,draggableTrack:_,className:R,style:G,disabled:C,ref:e,prefixCls:H,handleRender:function(e,t){var a,r,i=t.index,c=t.dragging,l=n.tooltip,d=void 0===l?{}:l,u=n.vertical,s=Object.assign({},d),p=s.open,b=s.placement,Z=s.getPopupContainer,S=s.prefixCls,y=s.formatter,C=!!(r=y||null===y?y:h||null===h?h:U)&&(M[i]||c),w=null!==(a=null!==p&&void 0!==p?p:v)&&void 0!==a?a:void 0===p&&C,E=Object.assign(Object.assign({},e.props),{onMouseEnter:function(){return z(i,!0)},onMouseLeave:function(){return z(i,!1)}}),I=x("tooltip",null!==S&&void 0!==S?S:f);return o.createElement(T,Object.assign({},s,{prefixCls:I,title:r?r(t.value):"",open:w,placement:O(null!==b&&void 0!==b?b:m,u),key:i,overlayClassName:"".concat(H,"-tooltip"),getPopupContainer:Z||g||k}),o.cloneElement(e,E))}})))}));var J=$},62708:function(n,e,t){t.d(e,{Z:function(){return B}});var a=t(4942),r=t(29439),o=t(4519),i=t(32064),c=t(43270),l=t.n(c),d=t(87462),u=t(44925),s=t(269),f=t(33714),h=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],v=o.forwardRef((function(n,e){var t,i=n.prefixCls,c=void 0===i?"rc-switch":i,v=n.className,g=n.checked,m=n.defaultChecked,p=n.disabled,b=n.loadingIcon,Z=n.checkedChildren,S=n.unCheckedChildren,x=n.onClick,k=n.onChange,y=n.onKeyDown,C=(0,u.Z)(n,h),w=(0,s.Z)(!1,{value:g,defaultValue:m}),E=(0,r.Z)(w,2),M=E[0],I=E[1];function z(n,e){var t=M;return p||(I(t=n),null===k||void 0===k||k(t,e)),t}var O=l()(c,v,(t={},(0,a.Z)(t,"".concat(c,"-checked"),M),(0,a.Z)(t,"".concat(c,"-disabled"),p),t));return o.createElement("button",(0,d.Z)({},C,{type:"button",role:"switch","aria-checked":M,disabled:p,className:O,ref:e,onKeyDown:function(n){n.which===f.Z.LEFT?z(!1,n):n.which===f.Z.RIGHT&&z(!0,n),null===y||void 0===y||y(n)},onClick:function(n){var e=z(!M,n);null===x||void 0===x||x(e,n)}}),b,o.createElement("span",{className:"".concat(c,"-inner")},o.createElement("span",{className:"".concat(c,"-inner-checked")},Z),o.createElement("span",{className:"".concat(c,"-inner-unchecked")},S)))}));v.displayName="Switch";var g=v,m=t(99495),p=t(48698),b=t(46963),Z=t(76569),S=t(60989),x=t(21480),k=t(70111),y=t(41157),C=function(n){var e,t,r,o,i,c=n.componentCls,l=n.trackHeightSM,d=n.trackPadding,u=n.trackMinWidthSM,s=n.innerMinMarginSM,f=n.innerMaxMarginSM,h=n.handleSizeSM,v="".concat(c,"-inner");return(0,a.Z)({},c,(0,a.Z)({},"&".concat(c,"-small"),(i={minWidth:u,height:l,lineHeight:"".concat(l,"px")},(0,a.Z)(i,"".concat(c,"-inner"),(e={paddingInlineStart:f,paddingInlineEnd:s},(0,a.Z)(e,"".concat(v,"-checked"),{marginInlineStart:"calc(-100% + ".concat(h+2*d,"px - ").concat(2*f,"px)"),marginInlineEnd:"calc(100% - ".concat(h+2*d,"px + ").concat(2*f,"px)")}),(0,a.Z)(e,"".concat(v,"-unchecked"),{marginTop:-l,marginInlineStart:0,marginInlineEnd:0}),e)),(0,a.Z)(i,"".concat(c,"-handle"),{width:h,height:h}),(0,a.Z)(i,"".concat(c,"-loading-icon"),{top:(h-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize}),(0,a.Z)(i,"&".concat(c,"-checked"),(r={},(0,a.Z)(r,"".concat(c,"-inner"),(t={paddingInlineStart:s,paddingInlineEnd:f},(0,a.Z)(t,"".concat(v,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),(0,a.Z)(t,"".concat(v,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(h+2*d,"px + ").concat(2*f,"px)"),marginInlineEnd:"calc(-100% + ".concat(h+2*d,"px - ").concat(2*f,"px)")}),t)),(0,a.Z)(r,"".concat(c,"-handle"),{insetInlineStart:"calc(100% - ".concat(h+d,"px)")}),r)),(0,a.Z)(i,"&:not(".concat(c,"-disabled):active"),(o={},(0,a.Z)(o,"&:not(".concat(c,"-checked) ").concat(v),(0,a.Z)({},"".concat(v,"-unchecked"),{marginInlineStart:n.marginXXS/2,marginInlineEnd:-n.marginXXS/2})),(0,a.Z)(o,"&".concat(c,"-checked ").concat(v),(0,a.Z)({},"".concat(v,"-checked"),{marginInlineStart:-n.marginXXS/2,marginInlineEnd:n.marginXXS/2})),o)),i)))},w=function(n){var e,t=n.componentCls,r=n.handleSize;return(0,a.Z)({},t,(e={},(0,a.Z)(e,"".concat(t,"-loading-icon").concat(n.iconCls),{position:"relative",top:(r-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"}),(0,a.Z)(e,"&".concat(t,"-checked ").concat(t,"-loading-icon"),{color:n.switchColor}),e))},E=function(n){var e,t,r=n.componentCls,o=n.motion,i=n.trackPadding,c=n.handleBg,l=n.handleShadow,d=n.handleSize,u="".concat(r,"-handle");return(0,a.Z)({},r,(t={},(0,a.Z)(t,u,{position:"absolute",top:i,insetInlineStart:i,width:d,height:d,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:c,borderRadius:d/2,boxShadow:l,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}}),(0,a.Z)(t,"&".concat(r,"-checked ").concat(u),{insetInlineStart:"calc(100% - ".concat(d+i,"px)")}),(0,a.Z)(t,"&:not(".concat(r,"-disabled):active"),o?(e={},(0,a.Z)(e,"".concat(u,"::before"),{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),(0,a.Z)(e,"&".concat(r,"-checked ").concat(u,"::before"),{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}),e):{}),t))},M=function(n){var e,t,r,o,i=n.componentCls,c=n.trackHeight,l=n.trackPadding,d=n.innerMinMargin,u=n.innerMaxMargin,s=n.handleSize,f="".concat(i,"-inner");return(0,a.Z)({},i,(o={},(0,a.Z)(o,f,(e={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:u,paddingInlineEnd:d,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out")},(0,a.Z)(e,"".concat(f,"-checked, ").concat(f,"-unchecked"),{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none"}),(0,a.Z)(e,"".concat(f,"-checked"),{marginInlineStart:"calc(-100% + ".concat(s+2*l,"px - ").concat(2*u,"px)"),marginInlineEnd:"calc(100% - ".concat(s+2*l,"px + ").concat(2*u,"px)")}),(0,a.Z)(e,"".concat(f,"-unchecked"),{marginTop:-c,marginInlineStart:0,marginInlineEnd:0}),e)),(0,a.Z)(o,"&".concat(i,"-checked ").concat(f),(t={paddingInlineStart:d,paddingInlineEnd:u},(0,a.Z)(t,"".concat(f,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),(0,a.Z)(t,"".concat(f,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(s+2*l,"px + ").concat(2*u,"px)"),marginInlineEnd:"calc(-100% + ".concat(s+2*l,"px - ").concat(2*u,"px)")}),t)),(0,a.Z)(o,"&:not(".concat(i,"-disabled):active"),(r={},(0,a.Z)(r,"&:not(".concat(i,"-checked) ").concat(f),(0,a.Z)({},"".concat(f,"-unchecked"),{marginInlineStart:2*l,marginInlineEnd:2*-l})),(0,a.Z)(r,"&".concat(i,"-checked ").concat(f),(0,a.Z)({},"".concat(f,"-checked"),{marginInlineStart:2*-l,marginInlineEnd:2*l})),r)),o))},I=function(n){var e,t=n.componentCls,r=n.trackHeight,o=n.trackMinWidth;return(0,a.Z)({},t,Object.assign(Object.assign(Object.assign(Object.assign({},(0,x.Wf)(n)),(0,a.Z)({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:o,height:r,lineHeight:"".concat(r,"px"),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(t,"-disabled)"),{background:n.colorTextTertiary})),(0,x.Qy)(n)),(e={},(0,a.Z)(e,"&".concat(t,"-checked"),(0,a.Z)({background:n.switchColor},"&:hover:not(".concat(t,"-disabled)"),{background:n.colorPrimaryHover})),(0,a.Z)(e,"&".concat(t,"-loading, &").concat(t,"-disabled"),{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),(0,a.Z)(e,"&".concat(t,"-rtl"),{direction:"rtl"}),e)))},z=(0,k.Z)("Switch",(function(n){var e=(0,y.TS)(n,{switchDuration:n.motionDurationMid,switchColor:n.colorPrimary,switchDisabledOpacity:n.opacityLoading,switchLoadingIconSize:.75*n.fontSizeIcon,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(n.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[I(e),M(e),E(e),w(e),C(e)]}),(function(n){var e=n.fontSize*n.lineHeight,t=n.controlHeight/2,a=e-4,r=t-4;return{trackHeight:e,trackHeightSM:t,trackMinWidth:2*a+8,trackMinWidthSM:2*r+4,trackPadding:2,handleBg:n.colorWhite,handleSize:a,handleSizeSM:r,handleShadow:"0 2px 4px 0 ".concat(new S.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:a/2,innerMaxMargin:a+2+4,innerMinMarginSM:r/2,innerMaxMarginSM:r+2+4}})),O=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(n);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(n,a[r])&&(t[a[r]]=n[a[r]])}return t},H=o.forwardRef((function(n,e){var t,c=n.prefixCls,d=n.size,u=n.disabled,s=n.loading,f=n.className,h=n.rootClassName,v=n.style,S=O(n,["prefixCls","size","disabled","loading","className","rootClassName","style"]),x=o.useContext(p.E_),k=x.getPrefixCls,y=x.direction,C=x.switch,w=o.useContext(b.Z),E=(null!==u&&void 0!==u?u:w)||s,M=k("switch",c),I=o.createElement("div",{className:"".concat(M,"-handle")},s&&o.createElement(i.Z,{className:"".concat(M,"-loading-icon")})),H=z(M),B=(0,r.Z)(H,2),P=B[0],L=B[1],j=(0,Z.Z)(d),D=l()(null===C||void 0===C?void 0:C.className,(t={},(0,a.Z)(t,"".concat(M,"-small"),"small"===j),(0,a.Z)(t,"".concat(M,"-loading"),s),(0,a.Z)(t,"".concat(M,"-rtl"),"rtl"===y),t),f,h,L),N=Object.assign(Object.assign({},null===C||void 0===C?void 0:C.style),v);return P(o.createElement(m.Z,{component:"Switch"},o.createElement(g,Object.assign({},S,{prefixCls:M,className:D,style:N,disabled:E,ref:e,loadingIcon:I}))))}));H.__ANT_SWITCH=!0;var B=H}}]);
//# sourceMappingURL=456.e33eea6f.chunk.js.map