"use strict";(self.webpackChunkvspacecode_github_io=self.webpackChunkvspacecode_github_io||[]).push([[214],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6753:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7294),a=n(5999),o=n(7462),l=n(3366),c=n(6010),i="iconEdit_dcUD",s=["className"];function u(e){var t=e.className,n=(0,l.Z)(e,s);return r.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(i,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var p=n(7556);function m(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:p.kM.common.editThisPage},r.createElement(u,null),r.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9649:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(5999),i=n(7556),s="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",p=["as","id"],m=["as"];function d(e){var t=e.as,n=e.id,m=(0,a.Z)(e,p),d=(0,i.LU)().navbar.hideOnScroll;return n?o.createElement(t,(0,r.Z)({},m,{className:(0,l.Z)("anchor",d?u:s),id:n}),m.children,o.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,m)}function f(e){var t=e.as,n=(0,a.Z)(e,m);return"h1"===t?o.createElement("h1",(0,r.Z)({},n,{id:void 0}),n.children):o.createElement(d,(0,r.Z)({as:t},n))}},7459:function(e,t,n){n.d(t,{Z:function(){return F}});var r=n(7294),a=n(3905),o=n(7462),l=n(3366),c=n(5742),i=["mdxType","originalType"];var s=n(6010),u={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},p={Prism:n(7410).default,theme:u};function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var f=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},g=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=d({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=d({},n,{backgroundColor:null}),a};function v(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var b=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),m(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=d({},v(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?d({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),m(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),m(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=d({},v(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?d({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),m(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],p=n[l][o];if("string"==typeof p?(u=l>0?u:["plain"],s=p):(u=g(u,p.type),p.alias&&(u=g(u,p.alias)),s=p.content),"string"==typeof s){var m=s.split(f),d=m.length;c.push({types:u,content:m[0]});for(var h=1;h<d;h++)y(c),i.push(c=[]),c.push({types:u,content:m[h]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return y(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),E=b,k=n(7556);var N=n(5999),Z="copyButton_eDfN",O="copyButtonCopied_ljy5",T="copyButtonIcons_W9eQ",_="copyButtonIcon_XEyF",j="copyButtonSuccessIcon_i9w9";function w(e){var t=e.code,n=(0,r.useState)(!1),a=n[0],o=n[1],l=(0,r.useRef)(void 0),c=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(t),o(!0),l.current=window.setTimeout((function(){o(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),r.createElement("button",{type:"button","aria-label":a?(0,N.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,N.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,N.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)(Z,"clean-btn",a&&O),onClick:c},r.createElement("span",{className:T,"aria-hidden":"true"},r.createElement("svg",{className:_,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:j,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var P="codeBlockContainer_I0IT",x="codeBlockContent_wNvx",C="codeBlockTitle_BvAR",L="codeBlock_jd64",B="codeBlockStandalone_csWH",S="codeBlockLines_mRuA";function A(e){var t,n=e.children,a=e.className,l=void 0===a?"":a,c=e.metastring,i=e.title,u=e.language,m=(0,k.LU)().prism,d=(0,r.useState)(!1),f=d[0],y=d[1];(0,r.useEffect)((function(){y(!0)}),[]);var g=(0,k.bc)(c)||i,h=(0,k.pJ)();if(r.Children.toArray(n).some((function(e){return(0,r.isValidElement)(e)})))return r.createElement(E,(0,o.Z)({},p,{key:String(f),theme:h,code:"",language:"text"}),(function(e){var t=e.className,a=e.style;return r.createElement("pre",{tabIndex:0,className:(0,s.Z)(t,B,"thin-scrollbar",P,l,k.kM.common.codeBlock),style:a},r.createElement("code",{className:S},n))}));var v=Array.isArray(n)?n.join(""):n,b=null!=(t=null!=u?u:(0,k.Vo)(l))?t:m.defaultLanguage,N=(0,k.nZ)(v,c,b),Z=N.highlightLines,O=N.code;return r.createElement(E,(0,o.Z)({},p,{key:String(f),theme:h,code:O,language:null!=b?b:"text"}),(function(e){var t,n=e.className,a=e.style,c=e.tokens,i=e.getLineProps,u=e.getTokenProps;return r.createElement("div",{className:(0,s.Z)(P,l,(t={},t["language-"+b]=b&&!l.includes("language-"+b),t),k.kM.common.codeBlock)},g&&r.createElement("div",{style:a,className:C},g),r.createElement("div",{className:x,style:a},r.createElement("pre",{tabIndex:0,className:(0,s.Z)(n,L,"thin-scrollbar")},r.createElement("code",{className:S},c.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=i({line:e,key:t});return Z.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,o.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,o.Z)({key:t},u({token:e,key:t})))})),r.createElement("br",null))})))),r.createElement(w,{code:O})))}))}var D=n(9960);var I="details_BAp3";function V(e){var t=Object.assign({},e);return r.createElement(k.PO,(0,o.Z)({},t,{className:(0,s.Z)("alert alert--info",I,t.className)}))}var R=n(9649);function z(e){return r.createElement(R.Z,e)}var H="img_E7b_";var M={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,l.Z)(a,i));return r.createElement(e.props.originalType,o)}return e}(e)}));return r.createElement(c.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(A,e)},a:function(e){return r.createElement(D.Z,e)},pre:function(e){var t;return r.createElement(A,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(V,(0,o.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,o.Z)({},e,{className:(t=e.className,(0,s.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var t},img:function(e){return r.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,H))}));var t},h1:function(e){return r.createElement(z,(0,o.Z)({as:"h1"},e))},h2:function(e){return r.createElement(z,(0,o.Z)({as:"h2"},e))},h3:function(e){return r.createElement(z,(0,o.Z)({as:"h3"},e))},h4:function(e){return r.createElement(z,(0,o.Z)({as:"h4"},e))},h5:function(e){return r.createElement(z,(0,o.Z)({as:"h5"},e))},h6:function(e){return r.createElement(z,(0,o.Z)({as:"h6"},e))}};function F(e){var t=e.children;return r.createElement(a.Zo,{components:M},t)}},1750:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(9960);function o(e){var t=e.permalink,n=e.title,o=e.subLabel;return r.createElement(a.Z,{className:"pagination-nav__link",to:t},o&&r.createElement("div",{className:"pagination-nav__sublabel"},o),r.createElement("div",{className:"pagination-nav__label"},n))}},8727:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7294),a=n(6010),o=n(5999),l=n(9960),c="tag_hD8n",i="tagRegular_D6E_",s="tagWithCount_i0QQ";function u(e){var t=e.permalink,n=e.name,o=e.count;return r.createElement(l.Z,{href:t,className:(0,a.Z)(c,o?s:i)},n,o&&r.createElement("span",null,o))}var p="tags_XVD_",m="tag_JSN8";function d(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(p,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:m},r.createElement(u,{name:t,permalink:n}))}))))}}}]);