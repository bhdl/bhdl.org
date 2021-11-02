(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{211:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/syntax-7aa3c989c79ba801431b8ea0af002d2f.png"},212:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/wire-8bdf9eb3939564cc0b2310df93b4950a.png"},213:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/semantics-13419534a4ef58f832ff051de316156a.png"},88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return b}));var a=t(3),i=t(8),c=(t(0),t(117)),r=["components"],s={},l={unversionedId:"reference/api",id:"reference/api",isDocsHomePage:!1,title:"API",description:"A (formal) overview of syntax",source:"@site/docs/reference/1.api.md",sourceDirName:"reference",slug:"/reference/api",permalink:"/docs/reference/api",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/1.api.md",version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Racket Crash Course",permalink:"/docs/guides/racket"},next:{title:"Extra API",permalink:"/docs/reference/extra"}},o=[{value:"The syntax",id:"the-syntax",children:[]},{value:"The semantics",id:"the-semantics",children:[]},{value:"Grow your circuit with<code>make-circuit</code>",id:"grow-your-circuit-withmake-circuit",children:[{value:"Connection syntax and semantics",id:"connection-syntax-and-semantics",children:[]},{value:"Layout co-design",id:"layout-co-design",children:[]}]},{value:"Visualization and exporting",id:"visualization-and-exporting",children:[]}],p={toc:o};function b(e){var n=e.components,s=Object(i.a)(e,r);return Object(c.b)("wrapper",Object(a.a)({},p,s,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A (formal) overview of syntax"),Object(c.b)("h3",{id:"the-syntax"},"The syntax"),Object(c.b)("p",null,Object(c.b)("img",{alt:"syntax",src:t(211).default})),Object(c.b)("h3",{id:"the-semantics"},"The semantics"),Object(c.b)("p",null,Object(c.b)("img",{alt:"wire",src:t(212).default})),Object(c.b)("hr",null),Object(c.b)("p",null,Object(c.b)("img",{alt:"semantics",src:t(213).default})),Object(c.b)("h2",{id:"grow-your-circuit-withmake-circuit"},"Grow your circuit with",Object(c.b)("inlineCode",{parentName:"h2"},"make-circuit")),Object(c.b)("p",null,"This syntax makes it easy to define a composite. The syntax is:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-racket"},"(make-circuit\n  #:external-pins (o1 o2)\n  #:vars ([a (R 22)]\n          [b (C 1)]\n          [c (crystal)])\n  #:connect (*- self.o1 a b c self.o2)\n  #:layout (hc-append a b c))\n")),Object(c.b)("p",null,"This declares a circuit, with external pins named ",Object(c.b)("inlineCode",{parentName:"p"},"o1")," and ",Object(c.b)("inlineCode",{parentName:"p"},"o2")," respectively. It\ncontains a resistor, a capacitor, and a crystal, lined together linearly. In the\nmeantime, the physical layout is defined as horizontally append the three\ncomponents."),Object(c.b)("p",null,"To make the circuit capable of using line connection syntax, define the ",Object(c.b)("inlineCode",{parentName:"p"},"left"),"\nand ",Object(c.b)("inlineCode",{parentName:"p"},"right")," external pins and connect accordingly. E.g."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-racket"},"(define (Switch)\n  (make-circuit\n   #:vars ([it (SKRPACE010)])\n   #:external-pins (left right)\n   #:layout it\n   #:connect (list (*- self.left it.A1)\n                   (*- self.right it.B1))))\n")),Object(c.b)("h3",{id:"connection-syntax-and-semantics"},"Connection syntax and semantics"),Object(c.b)("p",null,"Composing circuit is the process of combining smaller circuits and atoms with\nnetlist. There are 4 syntax for composing Composites. The return value is a\nComposite that contains the used components, and the external pin for the\nreturned Composite is denoted as ",Object(c.b)("inlineCode",{parentName:"p"},"out.X"),"."),Object(c.b)("p",null,"The line connection:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lisp"},"(*- a b c)\n")),Object(c.b)("p",null,"Results in the netlist:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"out.1 -- a.1\na.2 -- b.1\nb.2 -- c.1\nc.2 -- out.2\n")),Object(c.b)("p",null,"The split connection:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lisp"},"(*< a b c)\n")),Object(c.b)("p",null,"results in the netlist:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"out.1 -- a.1 -- b.1 -- c.1\nout.2 -- a.2 -- b.2 -- c.2\n")),Object(c.b)("p",null,"The vectorized connection:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lisp"},"(*= (a [p1 p2 p3])\n    ([b.p1 c.p2 d.p3]))\n")),Object(c.b)("p",null,"results in the netlist:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"a.p1 -- b.p1\na.p2 -- c.p2\na.p3 -- d.p3\n")),Object(c.b)("p",null,"Note that the vector supports two slightly different syntax: the component can\nbe write once. I.e. ",Object(c.b)("inlineCode",{parentName:"p"},"(a [1 2 3])")," is equivalent to ",Object(c.b)("inlineCode",{parentName:"p"},"([a.1 a.2 a.3])"),"."),Object(c.b)("p",null,"And finally the netlist syntax:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lisp"},"(*+ ([a.1 b.1 c.1]\n     [a.2 b.3]))\n")),Object(c.b)("p",null,"results in the netlis:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"a.1 -- b.1 -- c.1\na.2 -- b.3\n")),Object(c.b)("h3",{id:"layout-co-design"},"Layout co-design"),Object(c.b)("p",null,"The layout is inspired by ",Object(c.b)("a",{parentName:"p",href:"https://docs.racket-lang.org/pict/"},"racket's functional picture\nlibrary"),". The following combinators are\nprovided:"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"*-append")," family of functions append its arguments horizontally or\nvertically:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"vl-append\nvc-append\nvr-append\nht-append\nhc-append\nhb-append\nhtl-append\nhbl-append\n")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"*-superimpose")," family of functions overlap its arguments."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"lt-superimpose\nlb-superimpose\nlc-superimpose\nltl-superimpose\nlbl-superimpose\nrt-superimpose\nrb-superimpose\nrc-superimpose\nrtl-superimpose\nrbl-superimpose\nct-superimpose\ncb-superimpose\ncc-superimpose\nctl-superimpose\ncbl-superimpose\n")),Object(c.b)("p",null,"You can also rotate or pin-over at a absolute location in terms of (x,y)\ncoordinates:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-racket"},"(rotate item 3.14)\n(pin-over base dx dy item)\n")),Object(c.b)("h2",{id:"visualization-and-exporting"},"Visualization and exporting"),Object(c.b)("p",null,"The layout can be visualized via"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-racket"},"(show-layout my-circuit)\n")),Object(c.b)("p",null,"To export KiCAD files, use ",Object(c.b)("inlineCode",{parentName:"p"},"circuit-export"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-racket"},"(circuit-export fitboard\n                #:auto-place #t\n                #:formats '(kicad pdf dsn ses))\n")),Object(c.b)("p",null,"The arguments:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"#:auto-place")," determins whether to run placement engine. This requires a backend\nplacement engine running on specific port (by default 8082)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"#:formats"),": this is a list of export formats",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"kicad: kicad_pcb file"),Object(c.b)("li",{parentName:"ul"},"pdf"),Object(c.b)("li",{parentName:"ul"},"dsn: Spectre DSN"),Object(c.b)("li",{parentName:"ul"},"ses: run freerouting on dsn. This requires dsn is exported, freerouting.jar\nexecutable can be found, and you are running a GUI session so that the\nfreerouting.jar window can pop up (which means it cannot run in jupyter\nnotebook)")))))}b.isMDXComponent=!0}}]);