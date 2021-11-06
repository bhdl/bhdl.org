(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),l=(n(0),n(117));const a={},i={unversionedId:"reference/admin",id:"reference/admin",isDocsHomePage:!1,title:"Administrator Setup",description:"Install for development",source:"@site/docs/reference/3.admin.md",sourceDirName:"reference",slug:"/reference/admin",permalink:"/docs/reference/admin",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reference/3.admin.md",version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Extra API",permalink:"/docs/reference/extra"},next:{title:"Component Library",permalink:"/docs/reference/library"}},o=[{value:"Jupyter Hub server",id:"jupyter-hub-server",children:[{value:"Install the jupyterhub",id:"install-the-jupyterhub",children:[]},{value:"The iracket kernel",id:"the-iracket-kernel",children:[]},{value:"Install BHDL and start the placement engine",id:"install-bhdl-and-start-the-placement-engine",children:[]}]}],s={toc:o};function b(e){let{components:t,...n}=e;return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Install for development"),Object(l.b)("p",null,'For development purpose, you might want to clone the repo and install the cloned\nlocal package. This is known as "linking":'),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"git clone https://\ncd bhdl-lib\nraco pkg install --auto\n")),Object(l.b)("p",null,"This will place a link between the installed packages and this local\ndirectory. Everytime this local code is modified, the update is immediately\navailable for the package ",Object(l.b)("inlineCode",{parentName:"p"},"bhdl"),"."),Object(l.b)("h2",{id:"jupyter-hub-server"},"Jupyter Hub server"),Object(l.b)("p",null,"For demo purpose, it is desired to setup BHDL on a server, so that users can\njust login to the server and run BHDL directly without the hassle of\ninstallation. Also, the auto-placement engine requires GPU to run efficiently,\nwhich may not be available for users' own machines. This section describes the\ngeneral process to setup a jupyterhub server capable of running BHDL."),Object(l.b)("h3",{id:"install-the-jupyterhub"},"Install the jupyterhub"),Object(l.b)("p",null,"This section mostly follows ",Object(l.b)("a",{parentName:"p",href:"https://jupyterhub.readthedocs.io/en/latest/installation-guide-hard.html"},"the official jupyterhub\nguide"),". It\nis simplied a little (removed the conda part) and noted here for quick reference."),Object(l.b)("p",null,"Create a virtual environment for jupyterhub:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"sudo python3 -m venv /opt/jupyterhub/\n")),Object(l.b)("p",null,"Install some packages. Note that if you want install any future packages for\njupyterhub server, like an extension, you must use this executable and install\nit globally."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"sudo /opt/jupyterhub/bin/python3 -m pip install wheel\nsudo /opt/jupyterhub/bin/python3 -m pip install jupyterhub jupyterlab\nsudo /opt/jupyterhub/bin/python3 -m pip install ipywidgets\n")),Object(l.b)("p",null,"Some nodejs dependencies:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"sudo apt install nodejs npm\nsudo npm install -g configurable-http-proxy\n")),Object(l.b)("p",null,"Generate configuration:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"sudo mkdir -p /opt/jupyterhub/etc/jupyterhub/\ncd /opt/jupyterhub/etc/jupyterhub/\nsudo /opt/jupyterhub/bin/jupyterhub --generate-config\n")),Object(l.b)("p",null,"change one config in ",Object(l.b)("inlineCode",{parentName:"p"},"jupyterhub_config.py"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"c.Spawner.default_url = '/lab'\n")),Object(l.b)("p",null,"Add system service so that it can be started as a daemon and auto-start on boot:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"sudo mkdir -p /opt/jupyterhub/etc/systemd\n/opt/jupyterhub/etc/systemd/jupyterhub.service\nsudo ln -s /opt/jupyterhub/etc/systemd/jupyterhub.service /etc/systemd/system/jupyterhub.service\n")),Object(l.b)("p",null,"the service file content:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'[Unit]\nDescription=JupyterHub\nAfter=syslog.target network.target\n\n[Service]\nUser=root\nEnvironment="PATH=/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/opt/jupyterhub/bin"\nExecStart=/opt/jupyterhub/bin/jupyterhub -f /opt/jupyterhub/etc/jupyterhub/jupyterhub_config.py\n\n[Install]\nWantedBy=multi-user.target\n')),Object(l.b)("p",null,"enable and start it:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"sudo systemctl daemon-reload\nsudo systemctl enable jupyterhub.service\nsudo systemctl start jupyterhub.service\nsudo systemctl status jupyterhub.service\n")),Object(l.b)("p",null,"The default port is ",Object(l.b)("inlineCode",{parentName:"p"},"8000"),", and it seems also to use ",Object(l.b)("inlineCode",{parentName:"p"},"8001"),". Chaning 8000 in\nconfiguration does not change 8001, which in turns seems to make it unable to\nstart two instances of jupyterhub easily."),Object(l.b)("h3",{id:"the-iracket-kernel"},"The iracket kernel"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"sudo apt install libzmq5\ngit clone https://github.com/lihebi/iracket\ncd iracket && git checkout dev\nraco pkg install\nraco iracket install\n")),Object(l.b)("h3",{id:"install-bhdl-and-start-the-placement-engine"},"Install BHDL and start the placement engine"),Object(l.b)("p",null,"Install BHDL:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"raco pkg install git://github.com/lihebi/bhdl/?path=bhdl-lib\n")),Object(l.b)("p",null,"Start placement engine (and this will listen on port 8082 and shared for all\nusers):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"git clone https://github.com/lihebi/bhdl\ncd bhdl/placement\n# NOTE: Need install Julia dependencies via:\n# julia --project\n# Julia> ]instantiate\njulia --project server.jl\n")),Object(l.b)("h4",{id:"optional-clone-the-bhdl-libraries"},"(Optional) Clone the bhdl libraries:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"git clone --recursive https://github.com/lihebi/bhdl-footprints /opt/bhdl-footprints\nexport BHDL_LIBRARY_PATH=/opt/bhdl-footprints\n")),Object(l.b)("p",null,"Users probably should set up their own libraries in their home directory,\nbecause the easyeda library is written to disk if not available locally, thus users need write access to the library."))}b.isMDXComponent=!0}}]);