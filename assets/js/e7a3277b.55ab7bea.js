(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{103:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(3),i=(t(0),t(117));const r={},o={unversionedId:"reference/library",id:"reference/library",isDocsHomePage:!1,title:"Component Library",description:"https://github.com/bhdl/bhdl/master/bhdl-lib/bhdl/private/library-IC.rkt) file for the available components and their pins.",source:"@site/docs/reference/4.library.md",sourceDirName:"reference",slug:"/reference/library",permalink:"/docs/reference/library",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/4.library.md",version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Administrator Setup",permalink:"/docs/reference/admin"}},c=[],l={toc:c};function b(e){let{components:n,...t}=e;return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/bhdl/bhdl/master/bhdl-lib/bhdl/private/library-IC.rkt"},"https://github.com/bhdl/bhdl/master/bhdl-lib/bhdl/private/library-IC.rkt"),") file for the available components and their pins."),Object(i.b)("p",null,"Basic components:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Resistor R Capacitor C Fuse LED LED0603 Diode 1N4148W FerriteBead Crystal-2\nCrystal-4 PinHeader PinHeader2 Transistor AMS1117-3.3\n")),Object(i.b)("p",null,"Simple ICs:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"CP2102N\n")),Object(i.b)("p",null,"ICs:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"ATtiny25 ATtiny45 ATtiny85 ATmega128 ATmega16 ATmega48 ATmega88 ATmega168\nATmega328 ATmega8U2 ATmega16U2 ATmega32U2 ATmega16U4 ATmega32U4 ATmega8\nGD32VF103CBT6\nESP32-WROVER-E\n")),Object(i.b)("p",null,"Aruinos"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Arduino-Uno\nArduino-Uno-ICSP\nArduino-Nano\nArduino-Mini\nArduino-Micro\nArduino-MKR\n")),Object(i.b)("p",null,"Other components:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Cherry kailh-socket mounting-hole stabilizer-2u\nUSB-C-6\nUSB-C-16\nUSB-Micro\n")),Object(i.b)("h1",{id:"creating-and-contributing-your-own-library"},"Creating (and Contributing!) Your Own Library"),Object(i.b)("p",null,"Components can be defined via the ",Object(i.b)("inlineCode",{parentName:"p"},"define/IC")," syntax:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-racket"},'(define/IC (LED)\n  #:FP (fp-diode plus minus)\n  #:PREFIX "LED")\n')),Object(i.b)("p",null,"Notes about the fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"#:FP")," expects a footprint and pin names. These pin names are arbitrary but\nthe order is important, it will be mapped to the exact order of the\ncorresponding footprint. Refer to footprint document for the definition of the\nfootprint pin order."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"#:PREFIX")," defines what is the prefix to be appearing on PCB. E.g. R1, LED4")),Object(i.b)("p",null,"This defines a function called ",Object(i.b)("inlineCode",{parentName:"p"},"LED"),", and an LED instance can be created via the\nfunction call ",Object(i.b)("inlineCode",{parentName:"p"},"(define myled (LED))"),". The pins named ",Object(i.b)("inlineCode",{parentName:"p"},"plus")," and ",Object(i.b)("inlineCode",{parentName:"p"},"minus"),' can be\naccessed to make connections. To enalbe a component to connect in "line\nconnection syntax", you need to specify the #:LEFT and #:RIGHT pins:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-racket"},'(define/IC (LED)\n  #:FP (fp-diode plus minus)\n  #:PREFIX "LED"\n  #:LEFT plus\n  #:RIGHT minus)\n')),Object(i.b)("p",null,"The left and right delcaration makes it possible to use components of more than\n2 pins in the line connection syntax. For exampole, 4 pin switches (where 2\ngroups are connected)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-racket"},'(define/IC (SKRPACE010)\n  #:FP ((lcsc->fp "C139797")\n        A1 A2\n        B1 B2)\n  #:PREFIX "KEY"\n  #:LEFT A1\n  #:RIGHT B1)\n')),Object(i.b)("p",null,"One can change the default left and right orientation easily by defining a\ncircuit wrapper, more on this on the ",Object(i.b)("inlineCode",{parentName:"p"},"make-circuit")," document."),Object(i.b)("p",null,"Many two-pin non-polarized components do not have meaningful names. E.g. a\nresistor just have pin 1 and pin 2. A pin header just have pin 1 2 3 4 ... For\nthese components, you can write ",Object(i.b)("inlineCode",{parentName:"p"},"#:auto-FP")," in place of ",Object(i.b)("inlineCode",{parentName:"p"},"#:FP"),", and the numbers\n(starting from 1) will be added for you based on how many pins the footprint\nhas. You can use 1 and 2 for ",Object(i.b)("inlineCode",{parentName:"p"},"#:LEFT")," and ",Object(i.b)("inlineCode",{parentName:"p"},"#:RIGHT")," declaration. E.g."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-racket"},'(define/IC (Resistor R)\n  #:auto-FP (fp-resistor "0603")\n  #:PREFIX "R"\n  #:LEFT 1\n  #:RIGHT 2)\n')),Object(i.b)("p",null,"There may be many footprints for an IC. Thus you are allowed to specify multiple\nfootprints:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-racket"},'(define/IC (Resistor R)\n  #:auto-named-FP ("0603" (fp-resistor "0603"))\n  #:auto-named-FP ("0805" (fp-resistor "0805"))\n  #:PREFIX "R")\n')),Object(i.b)("p",null,"You can specify which footprint variant to use via"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-racket"},'(R #:FP "0603")\n')),Object(i.b)("p",null,"If not specified, the first one is used."),Object(i.b)("p",null,"For ICs, there are two special notes:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"ICs typically have well-defined footprints. For that, some syntax sugar names\ncan be used, e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"#:DIP")," ",Object(i.b)("inlineCode",{parentName:"li"},"#:QFN"),"."),Object(i.b)("li",{parentName:"ol"},"There are often more than one name for a pin of IC. E.g. For ATTiny-serie\nMCUs, the PB0 also functions as ",Object(i.b)("inlineCode",{parentName:"li"},"MOSI"),", ",Object(i.b)("inlineCode",{parentName:"li"},"SDA"),", ",Object(i.b)("inlineCode",{parentName:"li"},"PCINT0"),", and more. This must\nbe specified in ",Object(i.b)("inlineCode",{parentName:"li"},"#:ALIAS")," to delcare they are aliases for the same pin. All\nthe pin names will be available for making connections.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-racket"},"(define/IC (ATtiny25 ATtiny45 ATtiny85)\n  #:ALTS ([VCC]\n          [GND]\n          [PB0 MOSI DI SDA AIN0 OC0A OC1A AREF PCINT0]\n          [PB2 SCK USCK SCL ADC1 T0 INT0 PCINT2]\n          [PB3 PCINT3 XTAL1 CLKI OC1B ADC3]\n          [PB4 PCINT4 XTAL2 CLKO OC1B ADC2]\n          [PB5 PCINT5 RESET ADC0 DW])\n  #:DIP (8 PB5 PB3 PB4 GND PB0 PB1 PB2 VCC)\n  #:QFN (20 PB5 PB3 DNC DNC PB4\n            DNC DNC GND DNC DNC\n            PB0 PB1 DNC PB2 VCC\n            DNC DNC DNC DNC DNC))\n")),Object(i.b)("h1",{id:"footprints"},"footprints"),Object(i.b)("p",null,"BHDL can ",Object(i.b)("a",{parentName:"p",href:"https://github.com/bhdl/bhdl/master/bhdl-lib/bhdl/private/fp-kicad.rkt"},"read KiCAD")," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/bhdl/bhdl/master/bhdl-lib/bhdl/private/fp-easyeda.rkt"},"read\nEasyEDA")," footprints. For many components\nlisted on LCSC.com have associated footprints. We thus support getting the\nfootprint directly via the ID. E.g."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-racket"},'(lcsc->fp "C466653")\n')),Object(i.b)("p",null,"If the local library ",Object(i.b)("inlineCode",{parentName:"p"},"$BHDL_LIBRARY_PATH/easyeda")," does not contain the\nfootprint, it will query EasyEDA website and writes the footprint to\n",Object(i.b)("inlineCode",{parentName:"p"},"$BHDL_LIBRARY_PATH/easyeda/xxx.json")," for caching. As we run it for more\ncomponents, our repo will be tracking many components."),Object(i.b)("p",null,"This makes it easy to define a new component, e.g. the ",Object(i.b)("a",{parentName:"p",href:"https://lcsc.com/product-detail/Switching-Diode_High-Diode-1N4148W_C466653.html"},"1N4148W\ndiode")," can be defined simply as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-racket"},'(define/IC (1N4148W)\n  #:FP (lcsc->fp "C466653") (- +)\n  #:LEFT +\n  #:RIGHT -\n  #:PREFIX "D")\n')),Object(i.b)("p",null,"The order of footprint pins are defined as the orders of the pin occurance in\nthe KiCAD or EasyEDA footprints, not the name of footprint pins. Although many\nfootprints have numerical 1 2 3 ..., there are also text name, and there's no\nheuristic to sort them."),Object(i.b)("p",null,"The choice of using this order of pins has a caveat: the pin order might not be\nthe actual numerical order. This can be especially comon in KiCAD footprints\nwhere the numerical numbers may be mixed in arbitrary order."))}b.isMDXComponent=!0}}]);