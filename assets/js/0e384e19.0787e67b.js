(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(112)),o={sidebar_position:1},c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"This is the index page of BHDL documents.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/guides/getting-started"}},l=[],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is the index page of BHDL documents."),Object(i.b)("p",null,"BHDL is a programming language embedded in\n",Object(i.b)("a",{parentName:"p",href:"https://racket-lang.org/"},"racket"),". In addition to the language, the system\nconsists of a layout co-design system based on functional picture, REPL-driven\ninteractive development and visualization, libraries, KiCAD compatible exporter,\nand placement engines including an optimization-based anlytical placer (ePlace)\nand simulated annealing based detailed placer."),Object(i.b)("p",null,"Documents:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"User Documents",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"guides/install"},"Installation guide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"guides/getting-started"},"Getting Started"),": this guide presents all you need to compose your circuit through an example keyboard circuit."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"reference/library"},"Component Library"),": the official BHDL components library, and how to create your own library easily."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"reference/api"},"API reference"),": the function APIs including",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"the primary API, ",Object(i.b)("inlineCode",{parentName:"li"},"make-circuit")),Object(i.b)("li",{parentName:"ul"},"three connection syntax, ",Object(i.b)("inlineCode",{parentName:"li"},"*-")," ",Object(i.b)("inlineCode",{parentName:"li"},"*<")," and ",Object(i.b)("inlineCode",{parentName:"li"},"*=")),Object(i.b)("li",{parentName:"ul"},"layout API"),Object(i.b)("li",{parentName:"ul"},"exporting API for KiCAD, PNG, PDF, BOM, etc."))))),Object(i.b)("li",{parentName:"ul"},"Developer Documents",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"reference/extra"},"Extra API reference"),": this documents some advanced and internal APIs of BHDL."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"reference/admin"},"System admin guide")," for setting up jupyter hub server for your org")))))}p.isMDXComponent=!0}}]);