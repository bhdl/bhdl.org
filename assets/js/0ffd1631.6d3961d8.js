(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||s[d]||l;return n?r.a.createElement(h,o(o({ref:t},p),{},{components:n})):r.a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),l=(n(0),n(113)),i={},o={unversionedId:"guides/install",id:"guides/install",isDocsHomePage:!1,title:"Installation",description:"Warning: we are on pre-alpha release, please expect breaking changes in APIs.",source:"@site/docs/guides/install.md",sourceDirName:"guides",slug:"/guides/install",permalink:"/docs/guides/install",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/install.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/guides/getting-started"},next:{title:"Racket Crash Course",permalink:"/docs/guides/racket"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Running via the Jupyter Kernel",id:"running-via-the-jupyter-kernel",children:[]},{value:"(optional) placement engine",id:"optional-placement-engine",children:[]},{value:"(optional) freerouting",id:"optional-freerouting",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Warning: we are on pre-alpha release, please expect breaking changes in APIs."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("p",null,"Step 1: install ",Object(l.b)("a",{parentName:"p",href:"https://racket-lang.org/"},"racket"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"apt install racket\n")),Object(l.b)("p",null,"IMPORTANT: racket v7.8 seems to be broken! The cc-find will return negative values. That's apparently a bug of either racket v7.8 or the bundled pict library. Use v7.7 instead. Links to the download pages:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://download.racket-lang.org/all-versions.html"},"all versions")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://download.racket-lang.org/racket-v7.7.html"},"v7.7"))),Object(l.b)("p",null,"Step 2: Install the BHDL directly as a racket package:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"raco pkg install git://github.com/lihebi/bhdl/?path=bhdl-lib\n")),Object(l.b)("p",null,"In the future, you can update the package if there're updates upstream via:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"raco pkg update bhdl-lib\n")),Object(l.b)("p",null,"You will also need the footprint libraries and set the ENV variable\n",Object(l.b)("inlineCode",{parentName:"p"},"BHDL_LIBRARY_PATH")," to the local path."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"git clone --recursive https://github.com/lihebi/bhdl-footprints\nexport BHDL_LIBRARY_PATH=/path/to/bhdl-footprints\n")),Object(l.b)("h2",{id:"running-via-the-jupyter-kernel"},"Running via the Jupyter Kernel"),Object(l.b)("p",null,"In general, you can run racket programs via command line, editor plugins, IDEs. We are not covering them here. Instead, we recommand run the program via jupyter notebook. To set it up, first install jupyter:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"pip install jupyterlab notebook\n")),Object(l.b)("p",null,"Then install the iracket kernel:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"git clone https://github.com/lihebi/iracket\ncd iracket && git checkout dev &&\\\n   raco pkg install --deps search-auto\nraco iracket install\n")),Object(l.b)("p",null,"Note that we made some fix to the upstream iracket kernel (",Object(l.b)("a",{parentName:"p",href:"https://github.com/rmculpepper/iracket"},"rmculpepper/iracket"),"), and you need to clone our repo (",Object(l.b)("a",{parentName:"p",href:"https://github.com/lihebi/iracket"},"lihebi/iracket"),") and switch to ",Object(l.b)("inlineCode",{parentName:"p"},"dev")," branch."),Object(l.b)("p",null,"Then start the jupyter notebook server:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"cd /path/to/bhdl-test\njupyter notebook\n")),Object(l.b)("p",null,"You might want to open the example notebooks at ",Object(l.b)("a",{parentName:"p",href:"https://bhdl.org/examples"},"https://bhdl.org/examples")),Object(l.b)("p",null,'One caveat to notice: the iRacket kernel seems to have problem when "restarting the kernel". The walk-around is to "shutdown the kernel" and "start it again".'),Object(l.b)("h2",{id:"optional-placement-engine"},"(optional) placement engine"),Object(l.b)("p",null,"To run the placement engine, you need setup\n",Object(l.b)("a",{parentName:"p",href:"https://julialang.org/"},"julia"),". Refer to their installation guide on how to\ninstall Julia."),Object(l.b)("p",null,"Julia has its own package management and environment, so you can setup the\npackages easily. In the ",Object(l.b)("inlineCode",{parentName:"p"},"placement")," folder, install the package by:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"julia --project\n]instantiate\n")),Object(l.b)("p",null,"You run the placement server via:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"cd placement\njulia --project main.jl\n")),Object(l.b)("p",null,"Note that you only need the placement engine when you use the ",Object(l.b)("inlineCode",{parentName:"p"},"circuit-export")," API with ",Object(l.b)("inlineCode",{parentName:"p"},"#:auto-place #t"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-racket"},"(circuit-export three-button #:auto-place #t ...)\n")),Object(l.b)("p",null,"Some future features to notice:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"We will be adding management of placement engine directly in BHDL code"),Object(l.b)("li",{parentName:"ul"},"currently the placement engine uses GPU. We'll be making it compatible with CPU only setup, but that might be substantially slower than on GPU machines.")),Object(l.b)("h2",{id:"optional-freerouting"},"(optional) freerouting"),Object(l.b)("p",null,"To use routing, you need to have\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/freerouting/freerouting"},"freerouting")," available. We tested\non\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/freerouting/freerouting/releases/tag/v1.4.4"},"freerouting-v1.4.4"),". Make\nsure ",Object(l.b)("inlineCode",{parentName:"p"},"freerouting-1.4.4-executable.jar")," is available in your ",Object(l.b)("inlineCode",{parentName:"p"},"$PATH"),"."),Object(l.b)("p",null,"The executable can be downloaded ",Object(l.b)("a",{parentName:"p",href:"https://bintray.com/miho/Freerouting/download_file?file_path=eu%2Fmihosoft%2Ffreerouting%2Ffreerouting%2F1.4.4%2Ffreerouting-1.4.4-executable.jar"},"here")," on the new freerouting maintainer website: ",Object(l.b)("a",{parentName:"p",href:"https://freerouting.mihosoft.eu/"},"https://freerouting.mihosoft.eu/")),Object(l.b)("p",null,"UPDATE: the jar file is often not an executable command. You'll need"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"java -jar freerouting-1.4.4-executable.jar\n")),Object(l.b)("p",null,"Thus, you need to create a executable called ",Object(l.b)("inlineCode",{parentName:"p"},"freerouting"),", containing:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"#!/bin/bash\njava -jar /path/to/freerouting-1.4.4-executable.jar\n")),Object(l.b)("p",null,"freerouting will need X11 window, even if we are running it in command line. Simulate the X11 session via:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"sudo apt install xvfb\nXvfb :1\n")),Object(l.b)("p",null,"But it seems to be impossible to view the progress. We'll probably need to use VNC if we really want to know what's going on."))}b.isMDXComponent=!0}}]);