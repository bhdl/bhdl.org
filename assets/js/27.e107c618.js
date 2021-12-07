(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),o=a(109),s=a(123),i=a(106),c=a(105);var m=function(e){const{metadata:t}=e,{previousPage:a,nextPage:n}=t;return l.a.createElement("nav",{className:"pagination-nav","aria-label":Object(c.b)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.a.createElement("div",{className:"pagination-nav__item"},a&&l.a.createElement(i.a,{className:"pagination-nav__link",to:a},l.a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",l.a.createElement(c.a,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&l.a.createElement(i.a,{className:"pagination-nav__link",to:n},l.a.createElement("div",{className:"pagination-nav__label"},l.a.createElement(c.a,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},p=a(113),d=a(103);t.default=function(e){const{metadata:t,items:a,sidebar:n}=e,{siteConfig:{title:i}}=Object(r.default)(),{blogDescription:c,blogTitle:u,permalink:g}=t,h="/"===g?i:u;return l.a.createElement(o.a,{title:h,description:c,wrapperClassName:d.ThemeClassNames.wrapper.blogPages,pageClassName:d.ThemeClassNames.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(p.a,{sidebar:n})),l.a.createElement("main",{className:"col col--7"},a.map((e=>{let{content:t}=e;return l.a.createElement(s.a,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},l.a.createElement(t,null))})),l.a.createElement(m,{metadata:t})))))}},113:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),l=a.n(n),r=a(104),o=a(106),s=a(56),i=a.n(s);function c(e){let{sidebar:t}=e;return 0===t.items.length?null:l.a.createElement("div",{className:Object(r.a)(i.a.sidebar,"thin-scrollbar")},l.a.createElement("h3",{className:i.a.sidebarItemTitle},t.title),l.a.createElement("ul",{className:i.a.sidebarItemList},t.items.map((e=>l.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},l.a.createElement(o.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))))))}},114:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,l,r]=t;if(n&&r){n=parseInt(n),r=parseInt(r);const e=n<r?1:-1;"-"!==l&&".."!==l&&"\u2025"!==l||(r+=e);for(let t=n;t!==r;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},115:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(106),o=a(3),s=a(104),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:a(21).a,theme:i};function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}var d=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},g=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},h=function(e,t){var a=e.plain,n=Object.create(null),l=e.styles.reduce((function(e,a){var n=a.languages,l=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=p({},e[t],l);e[t]=a})),e}),n);return l.root=a,l.plain=p({},a,{backgroundColor:null}),l};function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var b=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?h(e.theme,e.language):void 0;return t.themeDict=a})),m(this,"getLineProps",(function(e){var a=e.key,n=e.className,l=e.style,r=p({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(r.style=o.plain),void 0!==l&&(r.style=void 0!==r.style?p({},r.style,l):l),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r})),m(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,l=a.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===l&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===l&&!n)return r[a[0]];var o=n?{display:"inline-block"}:{},s=a.map((function(e){return r[e]}));return Object.assign.apply(Object,[o].concat(s))}})),m(this,"getTokenProps",(function(e){var a=e.key,n=e.className,l=e.style,r=e.token,o=p({},y(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==l&&(o.style=void 0!==o.style?p({},o.style,l):l),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),m(this,"tokenize",(function(e,t,a,n){var l={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",l);var r=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,l=e.children,r=this.getThemeDict(this.props),o=t.languages[a];return l({tokens:function(e){for(var t=[[]],a=[e],n=[0],l=[e.length],r=0,o=0,s=[],i=[s];o>-1;){for(;(r=n[o]++)<l[o];){var c=void 0,m=t[o],p=a[o][r];if("string"==typeof p?(m=o>0?m:["plain"],c=p):(m=g(m,p.type),p.alias&&(m=g(m,p.alias)),c=p.content),"string"==typeof c){var h=c.split(d),y=h.length;s.push({types:m,content:h[0]});for(var b=1;b<y;b++)u(s),i.push(s=[]),s.push({types:m,content:h[b]})}else o++,t.push(m),a.push(c),n.push(0),l.push(c.length)}o--,t.pop(),a.pop(),n.pop(),l.pop()}return u(s),i}(void 0!==o?this.tokenize(t,n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component),v=b;var f=a(114),k=a.n(f),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},N=a(116),j=a(103);var T=()=>{const{prism:e}=Object(j.useThemeConfig)(),{isDarkTheme:t}=Object(N.a)(),a=e.theme||E,n=e.darkTheme||a;return t?n:a},O=a(105),_=a(57),w=a.n(_);const x=/{([\d,-]+)}/,C=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)};function L(e){let{children:t,className:a,metastring:r,title:i}=e;const{prism:m}=Object(j.useThemeConfig)(),[p,d]=Object(n.useState)(!1),[u,g]=Object(n.useState)(!1);Object(n.useEffect)((()=>{g(!0)}),[]);const h=Object(j.parseCodeBlockTitle)(r)||i,y=Object(n.useRef)(null);let b=[];const f=T(),E=Array.isArray(t)?t.join(""):t;if(r&&x.test(r)){const e=r.match(x)[1];b=k()(e).filter((e=>e>0))}let N=a&&a.replace(/language-/,"");!N&&m.defaultLanguage&&(N=m.defaultLanguage);let _=E.replace(/\n$/,"");if(0===b.length&&void 0!==N){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}})(N),a=E.replace(/\n$/,"").split("\n");let n;for(let l=0;l<a.length;){const r=l+1,o=a[l].match(t);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":n=r;break;case"highlight-end":e+=`${n}-${r-1},`}a.splice(l,1)}else l+=1}b=k()(e),_=a.join("\n")}const L=()=>{!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let r=!1;l.rangeCount>0&&(r=l.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch{}a.remove(),r&&(l.removeAllRanges(),l.addRange(r)),n&&n.focus()}(_),d(!0),setTimeout((()=>d(!1)),2e3)};return l.a.createElement(v,Object(o.a)({},c,{key:String(u),theme:f,code:_,language:N}),(e=>{let{className:t,style:a,tokens:n,getLineProps:r,getTokenProps:i}=e;return l.a.createElement("div",{className:w.a.codeBlockContainer},h&&l.a.createElement("div",{style:a,className:w.a.codeBlockTitle},h),l.a.createElement("div",{className:Object(s.a)(w.a.codeBlockContent,N)},l.a.createElement("div",{tabIndex:0,className:Object(s.a)(t,w.a.codeBlock,"thin-scrollbar",{[w.a.codeBlockWithTitle]:h})},l.a.createElement("div",{className:w.a.codeBlockLines,style:a},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=r({line:e,key:t});return b.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),l.a.createElement("div",Object(o.a)({key:t},a),e.map(((e,t)=>l.a.createElement("span",Object(o.a)({key:t},i({token:e,key:t}))))))})))),l.a.createElement("button",{ref:y,type:"button","aria-label":Object(O.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(w.a.copyButton),onClick:L},p?l.a.createElement(O.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):l.a.createElement(O.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}a(58);var P=a(59),B=a.n(P);var $=e=>function(t){let{id:a,...n}=t;const{navbar:{hideOnScroll:r}}=Object(j.useThemeConfig)();return a?l.a.createElement(e,n,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",{[B.a.enhancedAnchor]:!r}),id:a}),n.children,l.a.createElement("a",{className:"hash-link",href:`#${a}`,title:Object(O.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.a.createElement(e,n)};const D={code:e=>{const{children:t}=e;return Object(n.isValidElement)(t)?t:t.includes("\n")?l.a.createElement(L,e):l.a.createElement("code",e)},a:e=>l.a.createElement(r.a,e),pre:e=>{var t;const{children:a}=e;return Object(n.isValidElement)(null==a||null===(t=a.props)||void 0===t?void 0:t.children)?null==a?void 0:a.props.children:l.a.createElement(L,Object(n.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:$("h1"),h2:$("h2"),h3:$("h3"),h4:$("h4"),h5:$("h5"),h6:$("h6")};t.a=D},123:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(104),o=a(108),s=a(105),i=a(106),c=a(115),m=a(122),p=a(60),d=a.n(p),u=a(103);t.a=function(e){const t=function(){const{selectMessage:e}=Object(u.usePluralForm)();return t=>{const a=Math.ceil(t);return e(a,Object(s.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:n,metadata:p,truncated:g,isBlogPostPage:h=!1}=e,{date:y,formattedDate:b,permalink:v,tags:f,readingTime:k}=p,{author:E,title:N,image:j,keywords:T}=n,O=n.author_url||n.authorURL,_=n.author_title||n.authorTitle,w=n.author_image_url||n.authorImageURL;return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{keywords:T,image:j}),l.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(()=>{const e=h?"h1":"h2";return l.a.createElement("header",null,l.a.createElement(e,{className:Object(r.a)("margin-bottom--sm",d.a.blogPostTitle)},h?N:l.a.createElement(i.a,{to:v},N)),l.a.createElement("div",{className:"margin-vert--md"},l.a.createElement("time",{dateTime:y,className:d.a.blogPostDate},b,k&&l.a.createElement(l.a.Fragment,null," \xb7 ",t(k)))),l.a.createElement("div",{className:"avatar margin-vert--md"},w&&l.a.createElement(i.a,{className:"avatar__photo-link avatar__photo",href:O},l.a.createElement("img",{src:w,alt:E})),l.a.createElement("div",{className:"avatar__intro"},E&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"avatar__name"},l.a.createElement(i.a,{href:O},E)),l.a.createElement("small",{className:"avatar__subtitle"},_)))))})(),l.a.createElement("div",{className:"markdown"},l.a.createElement(o.a,{components:c.a},a)),(f.length>0||g)&&l.a.createElement("footer",{className:"row margin-vert--lg"},f.length>0&&l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,l.a.createElement(s.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),f.map((e=>{let{label:t,permalink:a}=e;return l.a.createElement(i.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),g&&l.a.createElement("div",{className:"col text--right"},l.a.createElement(i.a,{to:p.permalink,"aria-label":`Read more about ${N}`},l.a.createElement("strong",null,l.a.createElement(s.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);