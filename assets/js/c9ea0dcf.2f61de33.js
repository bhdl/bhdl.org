(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,u=m["".concat(b,".").concat(s)]||m[s]||d[s]||c;return n?r.a.createElement(u,l(l({ref:t},o),{},{components:n})):r.a.createElement(u,l({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var o=2;o<c;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/demo-board-keyboard-3D-24b8d05b02798acc4b42ae332439ee5e.png"},212:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/taste-9cbc17c6e9f786a773ae2a2aa4bc392a.png"},213:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/module-0b9c26ce8512c021991cae90465487cc.png"},214:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/demo-board-matrix-40a6abbdfab01c2f890208e39b89530f.png"},215:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/demo-board-mcu-0357b6e7c8177535e2a99d38d9cd10ea.png"},216:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/demo-board-keyboard-366d85029b510c70e93bd981db8b85be.png"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(112)),b={},l={unversionedId:"guides/getting-started",id:"guides/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"A quick taste",source:"@site/docs/guides/getting-started.md",sourceDirName:"guides",slug:"/guides/getting-started",permalink:"/docs/guides/getting-started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/getting-started.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Installation",permalink:"/docs/guides/install"}},i=[{value:"Tutorial Outline",id:"tutorial-outline",children:[]},{value:"Setting up",id:"setting-up",children:[]},{value:"The keyboard matrix",id:"the-keyboard-matrix",children:[]},{value:"The MCU board",id:"the-mcu-board",children:[]},{value:"Connecting the MCU module and Matrix Module",id:"connecting-the-mcu-module-and-matrix-module",children:[]}],o={toc:i};function p(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,b,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",{alt:"A quick taste",src:n(212).default})),Object(c.b)("p",null,Object(c.b)("img",{alt:"Modular designs",src:n(213).default})),Object(c.b)("h2",{id:"tutorial-outline"},"Tutorial Outline"),Object(c.b)("p",null,"The programming with BHDL consists of several steps:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Component Selection. The information needed are:",Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"the Pin definition of the IC"),Object(c.b)("li",{parentName:"ol"},"specify the desired footprint"))),Object(c.b)("li",{parentName:"ol"},"Use ",Object(c.b)("inlineCode",{parentName:"li"},"make-circuit")," API to compose your circuit. Optionally, hierarchical compose your more complex circuit using ",Object(c.b)("inlineCode",{parentName:"li"},"make-circuit"),". Each ",Object(c.b)("inlineCode",{parentName:"li"},"make-circuit")," API expects several components:",Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"what the external pins are"),Object(c.b)("li",{parentName:"ol"},"connect the components using the 4 types of connection syntax"),Object(c.b)("li",{parentName:"ol"},"specify physical layout of components"))),Object(c.b)("li",{parentName:"ol"},"Expose your design via ",Object(c.b)("inlineCode",{parentName:"li"},"circuit-export")," API, to KiCAD, PDF, BOM, etc.")),Object(c.b)("p",null,"In this guide, we will go over these steps using a simple keyboard example. We will assume you have a jupyter notebook opened with IRacket kernel. Please refer to the setup documents if you need to setup one, or use our online server."),Object(c.b)("p",null,Object(c.b)("img",{alt:"keyboard-3D",src:n(178).default})),Object(c.b)("h2",{id:"setting-up"},"Setting up"),Object(c.b)("p",null,"The first step is to use the BHDL library via:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scheme"},'(putenv "BHDL_LIBRARY_PATH" "~/bhdl/bhdl-footprints")\n(require bhdl)\n')),Object(c.b)("p",null,"Note that you must setup ",Object(c.b)("inlineCode",{parentName:"p"},"BHDL_LIBRARY_PATH")," ENV variable to your footprint path before requiring the BHDL library."),Object(c.b)("p",null,"We probably also need some racket libraries:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scheme"},"(require racket/list\n         racket/format\n         (prefix-in pict: pict))\n")),Object(c.b)("p",null,"We'll want to add some global signals to refer:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scheme"},"(define global\n  (make-circuit\n   #:external-pins (GND 3V3 5V VCC USB5V)))\n")),Object(c.b)("h2",{id:"the-keyboard-matrix"},"The keyboard matrix"),Object(c.b)("p",null,"The components:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Kailh hot-swap socket: ",Object(c.b)("inlineCode",{parentName:"li"},"kailh-socket")),Object(c.b)("li",{parentName:"ul"},"Diodes: ",Object(c.b)("inlineCode",{parentName:"li"},"1N4148W"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scheme"},"(define (key-with-diode)\n  (make-circuit\n   #:external-pins (left right)\n   #:vars ([d (1N4148W)]\n           [key (kailh-socket 1)])\n   #:connect (*- self.left key d self.right)\n   #:layout (vc-append key d)))\n")),Object(c.b)("p",null,"We can call the ",Object(c.b)("inlineCode",{parentName:"p"},"key-with-diode")," to create this small circuits for each key."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scheme"},"(define matrix\n  (for/list ([row (in-range 4)])\n            (for/list ([col (in-range 5)])\n                      (key-with-diode))))\n")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"matrix")," variable holds 4x5 keys. We then connect them together:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scheme"},'(define matrix-module\n  (make-circuit\n   #:external-pins (row[4] col[5])\n   ;; col in, row out\n   #:connect (for*/list ([i (in-range 4)]\n                        [j (in-range 5)])\n                       (debug "connecting" i j)\n                       (*- self.col[j]\n                           (list-ref (list-ref matrix i) j)\n                           self.row[i]))\n   #:layout (vc-append\n             (for/list ([row matrix])\n                      (hc-append row ..)\n                      ) ..)))\n')),Object(c.b)("p",null,"We note several points here:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"We don't use `",Object(c.b)("inlineCode",{parentName:"li"},"#:vars")," to create components, because we are using the ",Object(c.b)("inlineCode",{parentName:"li"},"matrix")," variable that is already created"),Object(c.b)("li",{parentName:"ul"},"We specify 4+5 external pins for rows and columns, respectively"),Object(c.b)("li",{parentName:"ul"},"We use a loop to connect the external row and column pins to the corresponding key in the matrix."),Object(c.b)("li",{parentName:"ul"},"Finally, we specify the layout to be ","*",'horizontally append" (via ',Object(c.b)("inlineCode",{parentName:"li"},"hc-append"),' API) to form the rows and "vertically append" (via ',Object(c.b)("inlineCode",{parentName:"li"},"vc-append")," API) to form the columns.")),Object(c.b)("p",null,"The end result of the key matrix module looks like this:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"matrix-image",src:n(214).default})),Object(c.b)("h2",{id:"the-mcu-board"},"The MCU board"),Object(c.b)("p",null,"The components:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Atmega32U4"),Object(c.b)("li",{parentName:"ul"},"Micro USB connector"),Object(c.b)("li",{parentName:"ul"},"16MHz Crystal"),Object(c.b)("li",{parentName:"ul"},'Resistors, Capacitors, LEDs will be created "inline"')),Object(c.b)("p",null,"The variables, external pins and layout looks like this:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scheme"},'(define mcu-module\n  (make-circuit\n   #:vars ([mcu (ATmega32U4 #:FP "TQFP-44")]\n           [usb (USB-Micro)]\n           [icsp (icsp-header)]\n           [xtal (Crystal-4 \'16MHz)])\n   #:external-pins (row[4] col[5])\n   #:layout (vc-append 50 (rotate usb pi) mcu icsp)\n   #:layout ...))\n')),Object(c.b)("p",null,"Some notes about this code snippets:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"#:vars"),' section: We create several "big components" in the ',Object(c.b)("inlineCode",{parentName:"li"},"#:vars"),' declaration, including the MCU, USB connector, ICSP header and crystal, because they have multiple pins and we want a handle variable to refer to them. All other components like resistors and capacitors are created "inline", where we don\'t really want to give them a name.'),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"#:external-pins")," section: The external pin of this module is 4+5 pins for row and column scanning of the key matrix."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"#:layout")," section: We layout the USB, MCU and ICSP header to be vertically appended. We don't care much about the locations of other components such as the resistors, capacitors. They will be placed by our automatic placement engine to appropriate locations by optimizing the total wire length (formally HPWL).")),Object(c.b)("p",null,"There are a lot of staff going on in the connection section, and we'll describe them in small sections. First, the ICSP connector for flashing firmware:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scheme"},"(define mcu-module\n  (make-circuit\n   ...\n   #:connect (*= (mcu (MOSI SCLK MISO RESET VCC GND))\n               (icsp (MOSI SCK MISO RESET VCC GND)))\n   ...))\n")),Object(c.b)("p",null,"Then the Power module including reset and switch:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scheme"},"(define mcu-module\n  (make-circuit\n   ...\n   #:connect (*- mcu.VCC mcu.UVCC mcu.AVCC global.VCC)\n   #:connect (*- mcu.GND mcu.UGND global.GND)\n   #:connect (*- mcu.RESET (*< (LL4148)\n                           (R '10k)) global.5V)\n   #:connect (*- mcu.RESET[-1] (Switch) global.GND)\n   ;; An LED for blinking\n   #:connect (*- mcu.PC6 (R '1k) (LED0603 'red) global.GND)\n   #:connect (*- mcu.UCAP (C '1uf) global.GND)\n   #:connect (*- global.VCC (*< (C '1uf)\n                          (C '100nf)\n                          (C '100nf)\n                          (C '100nf)\n                          (C '100nf))\n           global.GND)\n   ...))\n")),Object(c.b)("p",null,"The crystal module:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scheme"},"(define mcu-module\n  (make-circuit\n   ...\n   #:connect (*- mcu.XTAL1 xtal.XIN)\n   #:connect (*- xtal.XOUT mcu.XTAL2)\n   #:connect (*- xtal.GND global.GND)\n   #:connect (*- mcu.XTAL1 (C '22pf) global.GND)\n   #:connect (*- mcu.XTAL2 (C '22pf) global.GND)\n   ...\n   ))\n")),Object(c.b)("p",null,"The USB connector:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scheme"},"(define mcu-module\n  (make-circuit\n   ...\n   #:connect (*- mcu.D+ (R 22) usb.D+)\n   #:connect (*- mcu.D- (R 22) usb.D-)\n   #:connect (*- mcu.VBUS usb.VBUS global.VCC)\n   #:connect (*- mcu.UGND usb.GND global.GND)\n   ...\n   ))\n")),Object(c.b)("p",null,"Finally, we select some GPIO pins for row and column scanning the matrix:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scheme"},"(define mcu-module\n  (make-circuit\n   ...\n   #:connect (*= (self row [0 3])\n                 (self row [0 3])\n                 (mcu [PB0 PB4 PB5 PB6]))\n   #:connect (*= (self col [0 4])\n                 (mcu [PD0 PD1 PD2 PD3 PD4]))\n   ...\n   ))\n")),Object(c.b)("p",null,"The end result would looks like this:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"mcu-image",src:n(215).default})),Object(c.b)("h2",{id:"connecting-the-mcu-module-and-matrix-module"},"Connecting the MCU module and Matrix Module"),Object(c.b)("p",null,"This is simply:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scheme"},"(define keyboard (make-circuit\n #:connect (*= (mcu-module row [0 3])\n               (matrix-module row [0 3]))\n #:connect (*= (mcu-module col [0 4])\n               (matrix-module col [0 4]))\n #:layout (vc-append mcu-module matrix-module)\n                  ))\n")),Object(c.b)("p",null,"And we export the keyboard to KiCAD, PNG, BOM:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scheme"},'(parameterize ([current-directory "./out/demo-board/keyboard"]\n                 [padding-general 2])\n                (circuit-export keyboard\n                                #:auto-place #t\n                                #:formats \'(kicad pdf png bom)))\n')),Object(c.b)("p",null,"The keyboard looks like this:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"keyboard-img",src:n(216).default})),Object(c.b)("p",null,"The BOM.csv contains the mapping from the annotations (e.g. U1, R4, D3) to the component name, footprint, and value."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},Object(c.b)("strong",{parentName:"th"},"Annotation")),Object(c.b)("th",{parentName:"tr",align:"center"},Object(c.b)("strong",{parentName:"th"}," Name")),Object(c.b)("th",{parentName:"tr",align:"center"},Object(c.b)("strong",{parentName:"th"}," Footprint")),Object(c.b)("th",{parentName:"tr",align:"center"},Object(c.b)("strong",{parentName:"th"}," Values")))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"U36"),Object(c.b)("td",{parentName:"tr",align:"center"},"kailh-socket"),Object(c.b)("td",{parentName:"tr",align:"center"},"1"),Object(c.b)("td",{parentName:"tr",align:"center"},"()")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"D37"),Object(c.b)("td",{parentName:"tr",align:"center"},"1N4148W"),Object(c.b)("td",{parentName:"tr",align:"center"},"#f"),Object(c.b)("td",{parentName:"tr",align:"center"},"()")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"U38"),Object(c.b)("td",{parentName:"tr",align:"center"},"kailh-socket"),Object(c.b)("td",{parentName:"tr",align:"center"},"1"),Object(c.b)("td",{parentName:"tr",align:"center"},"()")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"D39"),Object(c.b)("td",{parentName:"tr",align:"center"},"1N4148W"),Object(c.b)("td",{parentName:"tr",align:"center"},"#f"),Object(c.b)("td",{parentName:"tr",align:"center"},"()")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"U40"),Object(c.b)("td",{parentName:"tr",align:"center"},"kailh-socket"),Object(c.b)("td",{parentName:"tr",align:"center"},"1"),Object(c.b)("td",{parentName:"tr",align:"center"},"()")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"U41"),Object(c.b)("td",{parentName:"tr",align:"center"},"ATmega16U4/ATmega32U4"),Object(c.b)("td",{parentName:"tr",align:"center"},"TQFP-44"),Object(c.b)("td",{parentName:"tr",align:"center"},"()")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"U42"),Object(c.b)("td",{parentName:"tr",align:"center"},"USB-Micro"),Object(c.b)("td",{parentName:"tr",align:"center"},"#f"),Object(c.b)("td",{parentName:"tr",align:"center"},"()")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"U43"),Object(c.b)("td",{parentName:"tr",align:"center"},"PinHeader2"),Object(c.b)("td",{parentName:"tr",align:"center"},"3"),Object(c.b)("td",{parentName:"tr",align:"center"},"()")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"U44"),Object(c.b)("td",{parentName:"tr",align:"center"},"Crystal-4"),Object(c.b)("td",{parentName:"tr",align:"center"},"#f"),Object(c.b)("td",{parentName:"tr",align:"center"},"(16MHz)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"R45"),Object(c.b)("td",{parentName:"tr",align:"center"},"Resistor/R"),Object(c.b)("td",{parentName:"tr",align:"center"},"0603"),Object(c.b)("td",{parentName:"tr",align:"center"},"(1k)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"LED46"),Object(c.b)("td",{parentName:"tr",align:"center"},"LED0603"),Object(c.b)("td",{parentName:"tr",align:"center"},"#f"),Object(c.b)("td",{parentName:"tr",align:"center"},"(red)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"D47"),Object(c.b)("td",{parentName:"tr",align:"center"},"LL4148"),Object(c.b)("td",{parentName:"tr",align:"center"},"#f"),Object(c.b)("td",{parentName:"tr",align:"center"},"()")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"R48"),Object(c.b)("td",{parentName:"tr",align:"center"},"Resistor/R"),Object(c.b)("td",{parentName:"tr",align:"center"},"0603"),Object(c.b)("td",{parentName:"tr",align:"center"},"(10k)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"KEY49"),Object(c.b)("td",{parentName:"tr",align:"center"},"SKRPACE010"),Object(c.b)("td",{parentName:"tr",align:"center"},"#f"),Object(c.b)("td",{parentName:"tr",align:"center"},"()")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"C50"),Object(c.b)("td",{parentName:"tr",align:"center"},"Capacitor/C"),Object(c.b)("td",{parentName:"tr",align:"center"},"#f"),Object(c.b)("td",{parentName:"tr",align:"center"},"(1uf)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"C51"),Object(c.b)("td",{parentName:"tr",align:"center"},"Capacitor/C"),Object(c.b)("td",{parentName:"tr",align:"center"},"#f"),Object(c.b)("td",{parentName:"tr",align:"center"},"(1uf)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"C52"),Object(c.b)("td",{parentName:"tr",align:"center"},"Capacitor/C"),Object(c.b)("td",{parentName:"tr",align:"center"},"#f"),Object(c.b)("td",{parentName:"tr",align:"center"},"(100nf)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"C53"),Object(c.b)("td",{parentName:"tr",align:"center"},"Capacitor/C"),Object(c.b)("td",{parentName:"tr",align:"center"},"#f"),Object(c.b)("td",{parentName:"tr",align:"center"},"(100nf)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"C54"),Object(c.b)("td",{parentName:"tr",align:"center"},"Capacitor/C"),Object(c.b)("td",{parentName:"tr",align:"center"},"#f"),Object(c.b)("td",{parentName:"tr",align:"center"},"(100nf)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"C55"),Object(c.b)("td",{parentName:"tr",align:"center"},"Capacitor/C"),Object(c.b)("td",{parentName:"tr",align:"center"},"#f"),Object(c.b)("td",{parentName:"tr",align:"center"},"(100nf)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"C56"),Object(c.b)("td",{parentName:"tr",align:"center"},"Capacitor/C"),Object(c.b)("td",{parentName:"tr",align:"center"},"#f"),Object(c.b)("td",{parentName:"tr",align:"center"},"(22pf)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"C57"),Object(c.b)("td",{parentName:"tr",align:"center"},"Capacitor/C"),Object(c.b)("td",{parentName:"tr",align:"center"},"#f"),Object(c.b)("td",{parentName:"tr",align:"center"},"(22pf)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"R58"),Object(c.b)("td",{parentName:"tr",align:"center"},"Resistor/R"),Object(c.b)("td",{parentName:"tr",align:"center"},"0603"),Object(c.b)("td",{parentName:"tr",align:"center"},"(22)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"R59"),Object(c.b)("td",{parentName:"tr",align:"center"},"Resistor/R"),Object(c.b)("td",{parentName:"tr",align:"center"},"0603"),Object(c.b)("td",{parentName:"tr",align:"center"},"(22)")))),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},".kicad_pcb")," file can be opened by the popular open source PCB EDA software KiCAD. The routing can be done by the open source freerouting software automatically. The end board is manufacture-ready, and looks like this in KiCAD's 3D-viewer:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"keyboard-3D",src:n(178).default})))}p.isMDXComponent=!0}}]);