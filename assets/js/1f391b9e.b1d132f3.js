(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{121:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,l]=t;if(a&&l){a=parseInt(a),l=parseInt(l);const e=a<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=a;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},123:function(e,t,n){"use strict";var a=n(0),o=n.n(a),l=n(116),r=n(3),s=n(113),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(21).a,theme:c};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}var d=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=u({},n,{backgroundColor:null}),o};function g(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,l=u({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(l.style=r.plain),void 0!==o&&(l.style=void 0!==l.style?u({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),p(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return l[n[0]];var r=a?{display:"inline-block"}:{},s=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[r].concat(s))}})),p(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,l=e.token,r=u({},g(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(r.style=void 0!==r.style?u({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),p(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,l=this.getThemeDict(this.props),r=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],l=0,r=0,s=[],c=[s];r>-1;){for(;(l=a[r]++)<o[r];){var i=void 0,p=t[r],u=n[r][l];if("string"==typeof u?(p=r>0?p:["plain"],i=u):(p=h(p,u.type),u.alias&&(p=h(p,u.alias)),i=u.content),"string"==typeof i){var y=i.split(d),g=y.length;s.push({types:p,content:y[0]});for(var f=1;f<g;f++)m(s),c.push(s=[]),s.push({types:p,content:y[f]})}else r++,t.push(p),n.push(i),a.push(0),o.push(i.length)}r--,t.pop(),n.pop(),a.pop(),o.pop()}return m(s),c}(void 0!==r?this.tokenize(t,a,r,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),b=f;var v=n(121),k=n.n(v),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=n(125),O=n(111);var N=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(E.a)(),n=e.theme||j,a=e.darkTheme||n;return t?a:n},C=n(114),T=n(56),x=n.n(T);const B=/{([\d,-]+)}/,L=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)};function w(e){let{children:t,className:n,metastring:l,title:c}=e;const{prism:p}=Object(O.useThemeConfig)(),[u,d]=Object(a.useState)(!1),[m,h]=Object(a.useState)(!1);Object(a.useEffect)((()=>{h(!0)}),[]);const y=Object(O.parseCodeBlockTitle)(l)||c,g=Object(a.useRef)(null);let f=[];const v=N(),j=Array.isArray(t)?t.join(""):t;if(l&&B.test(l)){const e=l.match(B)[1];f=k()(e).filter((e=>e>0))}let E=n&&n.replace(/language-/,"");!E&&p.defaultLanguage&&(E=p.defaultLanguage);let T=j.replace(/\n$/,"");if(0===f.length&&void 0!==E){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return L(["js","jsBlock"]);case"jsx":case"tsx":return L(["js","jsBlock","jsx"]);case"html":return L(["js","jsBlock","html"]);case"python":case"py":return L(["python"]);default:return L()}})(E),n=j.replace(/\n$/,"").split("\n");let a;for(let o=0;o<n.length;){const l=o+1,r=n[o].match(t);if(null!==r){switch(r.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${l},`;break;case"highlight-start":a=l;break;case"highlight-end":e+=`${a}-${l-1},`}n.splice(o,1)}else o+=1}f=k()(e),T=n.join("\n")}const w=()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let l=!1;o.rangeCount>0&&(l=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch{}n.remove(),l&&(o.removeAllRanges(),o.addRange(l)),a&&a.focus()}(T),d(!0),setTimeout((()=>d(!1)),2e3)};return o.a.createElement(b,Object(r.a)({},i,{key:String(m),theme:v,code:T,language:E}),(e=>{let{className:t,style:n,tokens:a,getLineProps:l,getTokenProps:c}=e;return o.a.createElement("div",{className:x.a.codeBlockContainer},y&&o.a.createElement("div",{style:n,className:x.a.codeBlockTitle},y),o.a.createElement("div",{className:Object(s.a)(x.a.codeBlockContent,E)},o.a.createElement("div",{tabIndex:0,className:Object(s.a)(t,x.a.codeBlock,"thin-scrollbar",{[x.a.codeBlockWithTitle]:y})},o.a.createElement("div",{className:x.a.codeBlockLines,style:n},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=l({line:e,key:t});return f.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(r.a)({key:t},n),e.map(((e,t)=>o.a.createElement("span",Object(r.a)({key:t},c({token:e,key:t}))))))})))),o.a.createElement("button",{ref:g,type:"button","aria-label":Object(C.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(x.a.copyButton),onClick:w},u?o.a.createElement(C.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(C.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}n(57);var P=n(58),S=n.n(P);var $=e=>function(t){let{id:n,...a}=t;const{navbar:{hideOnScroll:l}}=Object(O.useThemeConfig)();return n?o.a.createElement(e,a,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",{[S.a.enhancedAnchor]:!l}),id:n}),a.children,o.a.createElement("a",{className:"hash-link",href:`#${n}`,title:Object(C.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.a.createElement(e,a)};const _={code:e=>{const{children:t}=e;return Object(a.isValidElement)(t)?t:t.includes("\n")?o.a.createElement(w,e):o.a.createElement("code",e)},a:e=>o.a.createElement(l.a,e),pre:e=>{var t;const{children:n}=e;return Object(a.isValidElement)(null==n||null===(t=n.props)||void 0===t?void 0:t.children)?null==n?void 0:n.props.children:o.a.createElement(w,Object(a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:$("h1"),h2:$("h2"),h3:$("h3"),h4:$("h4"),h5:$("h5"),h6:$("h6")};t.a=_},133:function(e,t,n){"use strict";var a=n(0),o=n.n(a),l=n(113);var r=function(e,t,n){const[o,l]=Object(a.useState)(void 0);Object(a.useEffect)((()=>{function a(){const a=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=n}));if(t){if(t.getBoundingClientRect().top>=n){const n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(a){let n=0,r=!1;const s=document.getElementsByClassName(e);for(;n<s.length&&!r;){const e=s[n],{href:c}=e,i=decodeURIComponent(c.substring(c.indexOf("#")+1));a.id===i&&(o&&o.classList.remove(t),e.classList.add(t),l(e),r=!0),n+=1}}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},s=n(60),c=n.n(s);const i="table-of-contents__link";function p(e){let{toc:t,isChild:n}=e;return t.length?o.a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((e=>o.a.createElement("li",{key:e.id},o.a.createElement("a",{href:`#${e.id}`,className:i,dangerouslySetInnerHTML:{__html:e.value}}),o.a.createElement(p,{isChild:!0,toc:e.children}))))):null}t.a=function(e){let{toc:t}=e;return r(i,"table-of-contents__link--active",100),o.a.createElement("div",{className:Object(l.a)(c.a.tableOfContents,"thin-scrollbar")},o.a.createElement(p,{toc:t}))}},81:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(120),r=n(117),s=n(123),c=n(133),i=n(111);t.default=function(e){const{content:t}=e,{frontMatter:n,metadata:a}=t,{title:p,description:u,wrapperClassName:d,hide_table_of_contents:m}=n,{permalink:h}=a;return o.a.createElement(l.a,{title:p,description:u,permalink:h,wrapperClassName:null!=d?d:i.ThemeClassNames.wrapper.mdxPages,pageClassName:i.ThemeClassNames.page.mdxPage},o.a.createElement("main",null,o.a.createElement("div",{className:"container container--fluid"},o.a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--8 col--offset-2"},o.a.createElement("div",{className:"container"},o.a.createElement(r.a,{components:s.a},o.a.createElement(t,null)))),!m&&t.toc&&o.a.createElement("div",{className:"col col--2"},o.a.createElement(c.a,{toc:t.toc})))))))}}}]);