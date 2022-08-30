import{v as g}from"./runtime-dom.esm-bundler.637973797752960000.js";import{_}from"./plugin-vue_export-helper.637973797752960000.js";import{o as h,c as u,a as e,b as o,w as i,d as n,n as m,e as s,r as p,f}from"./runtime-core.esm-bundler.637973797752960000.js";var b="/assets/images/github.svg";const w={data(){return{istoggle:!0,isCollections:!0,isCategories:!0,isPages:!0,isConfigurations:!0,toggleSubMenu:!1,window:{width:0}}},created(){window.addEventListener("resize",this.handleResize),this.handleResize()},computed:{isMobile(){return this.window.width=window.innerWidth,this.window.width<1024}},mounted(){var x=document.getElementById("headerTez");x.parentElement.classList.add("sticky","top-0","z-[999]")},methods:{handleResize(){this.window.width=window.innerWidth,this.window.width<1024?(this.istoggle=!1,this.toggleSubMenu=!1,this.isCollections=!1,this.isCategories=!1,this.isPages=!1,this.isConfigurations=!1):(this.istoggle=!0,this.toggleSubMenu=!0,this.isCollections=!0,this.isCategories=!0,this.isPages=!0,this.isConfigurations=!0)},toggleMenu(){this.istoggle=!this.istoggle},showSubmenu(x){if(this.window.width<1024)switch(x){case"isCollections":this.isCollections=!this.isCollections;return;case"isCategories":this.isCategories=!this.isCategories;break;case"isPages":this.isPages=!this.isPages;break;case"isConfigurations":this.isConfigurations=!this.isConfigurations;break}},hideMenu(){this.window.width<1024?this.istoggle=!1:(this.isCollections=!1,this.isCategories=!1,this.isPages=!1,this.isConfigurations=!1,setTimeout(()=>{this.isCollections=!0,this.isCategories=!0,this.isPages=!0,this.isConfigurations=!0},1e3))}}},k={id:"headerTez",class:"polymorphism sticky top-0 mx-auto shadow-md bg-white dark:bg-[#0F172A]"},C={class:"container relative"},v={class:"py-2 md:py-3"},A={class:"lg:flex lg:items-center"},y={class:"flex justify-between items-center max-h-[2.3125rem]"},M={key:0,id:"navbar-toggler",class:"lg:hidden cursor-pointer",width:"20",height:"20",alt:"Menu"},L={key:1,class:"lg:hidden cursor-pointer",alt:"cross",width:"20",height:"20"},z={class:"block lg:flex flex-col lg:flex-row lg:ml-8 lg:mr-auto lg:mt-0 items-center absolute z-40 left-0 right-0 bg-white pb-8 lg:pb-0 lg:bg-transparent lg:relative h-[calc(100vh-42px)] lg:h-auto overflow-y-auto lg:overflow-visible",id:"navbar-toggle"},P={class:"group py-5 lg:mx-2 xl:mx-7 px-6 lg:px-0 cursor-pointer mt-6 lg:mt-0"},S=s(" Pages "),D={class:"inline-block ml-auto lg:ml-2",alt:"Menu Drop Down",width:"14",height:"7"},T={class:"lg:bg-white rounded-lg lg:absolute top-full lg:hidden block group-hover:lg:flex flex-wrap shadowCustom w-full lg:max-w-[270px]"},G={class:"w-full rounded-lg lg:rounded-lg lg:px-8 pb-0 pt-5 pr-4 lg:py-5 innerLinkHover"},H=s(" Master Pages "),B=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"},"Creating themes for the application",-1),N=s(" Pages "),j=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"},"Defines the site identity",-1),R={class:"group py-5 lg:mx-2 xl:mx-7 px-6 lg:px-0 cursor-pointer"},E=s(" Collections "),I={class:"inline-block ml-auto lg:ml-2",alt:"Menu Drop Down",width:"14",height:"7"},W={class:"lg:bg-white rounded-lg lg:absolute top-full lg:hidden block group-hover:lg:flex flex-wrap shadowCustom w-[unset] max-w-full xl:max-w-[unset] xl:w-[600px] xl:max-h-[unset] lg:max-h-[80vh] overflow-x-auto"},J={class:"lg:px-8 pt-5 pb-0 lg:py-8"},V={class:"flex flex-wrap lg:-mx-4"},U={class:"w-full xl:w-1/2 pr-4 lg:px-4 text-gray-600 innerLinkHover"},F=s(" Blogs "),K=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"}," Stay up-to-date with latest trends ",-1),Y=s(" Careers "),q=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"},"Lorem ipsum dolor sit amet",-1),O=s(" Career Leads "),Q=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"},"Lorem ipsum dolor sit amet",-1),X=s(" Case Studies "),Z=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"},"Lorem ipsum dolor sit amet",-1),$=s(" Downloads "),ee=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"},"Small business encyclopedia",-1),te={class:"w-full xl:w-1/2 border-none xl:border xl:border-solid xl:border-transparent xl:border-l-[#dddddd] lg:pr-4 lg:pl-4 text-gray-600 innerLinkHover"},se=s(" Guides "),le=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"},"Lorem ipsum dolor sit amet",-1),oe=s(" Whitepapers "),ie=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"}," Lorem ipsum dolor sit amet ",-1),de=s(" Portfolios "),ne=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"},"Your best work",-1),re=s(" News Items "),ae=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"},"Lorem ipsum dolor sit amet",-1),ce=s(" Call-To-Actions "),ge=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"}," Keep your call-to-action short and sweet ",-1),xe={class:"group py-5 lg:mx-2 xl:mx-7 px-6 lg:px-0 cursor-pointer hidden"},me=s("Categories "),he={class:"inline-block ml-auto lg:ml-2",alt:"Menu Drop Down",width:"14",height:"7"},ue={class:"lg:bg-white rounded-lg lg:absolute top-full lg:hidden block group-hover:lg:flex flex-wrap shadowCustom w-full lg:max-w-[270px]"},be={class:"w-full rounded-lg lg:rounded-lg lg:px-8 pb-0 pt-5 pr-4 lg:py-5 innerLinkHover"},_e=s(" Download Categories "),pe=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"},"Creating themes for the application",-1),fe={class:"group py-5 lg:mx-2 xl:mx-7 px-6 lg:px-0 cursor-pointer"},we=s("Configurations "),ke={class:"inline-block ml-auto lg:ml-2",alt:"Menu Drop Down",width:"14",height:"7"},Ce={class:"lg:bg-white rounded-lg lg:absolute top-full lg:hidden block group-hover:lg:flex flex-wrap shadowCustom w-[unset] max-w-full xl:max-w-[unset] xl:w-[600px] xl:max-h-[unset] lg:max-h-[80vh] overflow-x-auto"},ve={class:"lg:px-8 pt-5 pb-0 lg:py-8"},Ae={class:"flex flex-wrap lg:-mx-4"},ye={class:"w-full xl:w-1/2 pr-4 lg:px-4 text-gray-600 innerLinkHover"},Me=s(" Generic Leads "),Le=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"},"Initiation of consumer interest",-1),ze=s(" Testimonials "),Pe=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"},"Help to grow your business",-1),Se=s(" Teams "),De=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"},"Lorem ipsum dolor sit amet",-1),Te={class:"w-full xl:w-1/2 border-none xl:border xl:border-solid xl:border-transparent xl:border-l-[#dddddd] lg:pr-4 lg:pl-4 text-gray-600 innerLinkHover"},Ge=s(" Robots "),He=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"},"Set your deployment enviroments",-1),Be=s(" Users "),Ne=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"},"New board members",-1),je=s(" Locations "),Re=e("span",{class:"text-sm mt-1 text-normal hidden lg:block text-[#A0A9A5]"},"Lorem ipsum dolor sit amet",-1),Ee={class:"flex lg:hidden flex-row lg:ml-auto mt-3 lg:mt-0 items-center px-6 lg:px-0",id:"navbar-collapse"},Ie=s("Get in Touch"),We=e("a",{class:"ml-auto lg:ml-2",href:"https://github.com/tezjs/tezjs",target:"_blank",title:"TezJS Github"},[e("img",{src:b,width:"30",height:"30",alt:""})],-1),Je={class:"hidden lg:flex flex-row lg:ml-auto mt-3 lg:mt-0 items-center",id:"navbar-collapse"},Ve=e("a",{class:"mr-2",href:"https://github.com/tezjs/tezjs",target:"_blank",title:"TezJS Github"},[e("img",{src:b,width:"30",height:"30",alt:""})],-1),Ue=s(" Get in Touch ");function Fe(x,d,Ke,Ye,r,t){const l=p("tez-link"),a=f("tez-src");return h(),u("div",k,[e("header",C,[e("nav",v,[e("div",A,[e("div",y,[o(l,{to:"/",class:"w-[8.125rem] flex items-center"},{default:i(()=>[n(e("img",{alt:"TezJS",width:"130",height:"35",onClick:d[0]||(d[0]=(...c)=>t.hideMenu&&t.hideMenu(...c))},null,512),[[a,"/assets/images/tez_logo.png"]])]),_:1}),e("div",{onClick:d[1]||(d[1]=(...c)=>t.toggleMenu&&t.toggleMenu(...c))},[r.istoggle?n((h(),u("img",L,null,512)),[[a,"/assets/images/cross.svg"]]):n((h(),u("img",M,null,512)),[[a,"/assets/images/menu.svg"]])])]),n(e("div",z,[e("div",P,[e("span",{class:m(["text-xl lg:text-lg flex items-center leading-normal",{"bg-gradient text-transparent":r.isPages&&t.isMobile}]),onClick:d[2]||(d[2]=c=>t.showSubmenu("isPages"))},[S,n(e("img",D,null,512),[[a,"/assets/images/downArrow.svg"]])],2),n(e("div",T,[e("div",G,[o(l,{to:"/master-page",title:"Master Pages",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center block border border-solid border-transparent border-b-[#dddddd]",onClick:t.hideMenu},{default:i(()=>[H,B]),_:1},8,["onClick"]),o(l,{to:"/pages",title:"Pages",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center block",onClick:t.hideMenu},{default:i(()=>[N,j]),_:1},8,["onClick"])])],512),[[g,r.isPages]])]),e("div",R,[e("span",{class:m(["text-xl lg:text-lg flex items-center leading-normal",{"bg-gradient text-transparent":r.isCollections&&t.isMobile}]),onClick:d[3]||(d[3]=c=>t.showSubmenu("isCollections"))},[E,n(e("img",I,null,512),[[a,"/assets/images/downArrow.svg"]])],2),n(e("div",W,[e("div",J,[e("div",V,[e("div",U,[o(l,{to:"/blogs",title:"Blogs",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center block border border-solid border-transparent border-b-[#dddddd]",onClick:t.hideMenu},{default:i(()=>[F,K]),_:1},8,["onClick"]),o(l,{to:"/",title:"Careers",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center hidden border border-solid border-transparent border-b-[#dddddd]",onClick:t.hideMenu},{default:i(()=>[Y,q]),_:1},8,["onClick"]),o(l,{to:"/",title:"Career Leads",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center hidden border border-solid border-transparent border-b-[#dddddd]",onClick:t.hideMenu},{default:i(()=>[O,Q]),_:1},8,["onClick"]),o(l,{to:"/",title:"Case Studies",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center hidden border border-solid border-transparent border-b-[#dddddd]",onClick:t.hideMenu},{default:i(()=>[X,Z]),_:1},8,["onClick"]),o(l,{to:"/downloads",title:"Downloads",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center block border border-solid border-transparent border-b-[#dddddd] xl:border-b-0",onClick:t.hideMenu},{default:i(()=>[$,ee]),_:1},8,["onClick"])]),e("div",te,[o(l,{to:"/",title:"Guides",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center hidden border border-solid border-transparent border-b-[#dddddd]",onClick:t.hideMenu},{default:i(()=>[se,le]),_:1},8,["onClick"]),o(l,{to:"/",title:"Whitepapers",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center hidden border border-solid border-transparent border-b-[#dddddd]",onClick:t.hideMenu},{default:i(()=>[oe,ie]),_:1},8,["onClick"]),o(l,{to:"/portfolios",title:"Portfolios",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center block border border-solid border-transparent border-b-[#dddddd]",onClick:t.hideMenu},{default:i(()=>[de,ne]),_:1},8,["onClick"]),o(l,{to:"/",title:"News Items",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center hidden border border-solid border-transparent border-b-[#dddddd]",onClick:t.hideMenu},{default:i(()=>[re,ae]),_:1},8,["onClick"]),o(l,{to:"/call-to-action",title:"Call-To-Actions",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center block border border-solid border-transparent border-b-[#dddddd] xl:border-b-0",onClick:t.hideMenu},{default:i(()=>[ce,ge]),_:1},8,["onClick"])])])])],512),[[g,r.isCollections]])]),e("div",xe,[e("span",{class:m(["text-xl lg:text-lg flex items-center leading-normal",{"bg-gradient text-transparent":r.isCategories&&t.isMobile}]),onClick:d[4]||(d[4]=c=>t.showSubmenu("isCategories"))},[me,n(e("img",he,null,512),[[a,"/assets/images/downArrow.svg"]])],2),n(e("div",ue,[e("div",be,[o(l,{to:"/downloads",title:"Download Categories",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center block border border-solid border-transparent",onClick:t.hideMenu},{default:i(()=>[_e,pe]),_:1},8,["onClick"])])],512),[[g,r.isPages]])]),e("div",fe,[e("span",{class:m(["text-xl lg:text-lg flex items-center leading-normal",{"bg-gradient text-transparent":r.isConfigurations&&t.isMobile}]),onClick:d[5]||(d[5]=c=>t.showSubmenu("isConfigurations"))},[we,n(e("img",ke,null,512),[[a,"/assets/images/downArrow.svg"]])],2),n(e("div",Ce,[e("div",ve,[e("div",Ae,[e("div",ye,[o(l,{to:"/generic-leads",title:"Generic Leads",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center block border border-solid border-transparent border-b-[#dddddd]",onClick:t.hideMenu},{default:i(()=>[Me,Le]),_:1},8,["onClick"]),o(l,{to:"/testimonials",title:"Testimonials",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center block border border-solid border-transparent border-b-[#dddddd]",onClick:t.hideMenu},{default:i(()=>[ze,Pe]),_:1},8,["onClick"]),o(l,{to:"/",title:"Teams",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center hidden border border-solid border-transparent border-b-[#dddddd] xl:border-b-0",onClick:t.hideMenu},{default:i(()=>[Se,De]),_:1},8,["onClick"])]),e("div",Te,[o(l,{to:"/robots",title:"Robots",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center block border border-solid border-transparent border-b-[#dddddd]",onClick:t.hideMenu},{default:i(()=>[Ge,He]),_:1},8,["onClick"]),o(l,{to:"/user",title:"Users",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center block border border-solid border-transparent border-b-[#dddddd]",onClick:t.hideMenu},{default:i(()=>[Be,Ne]),_:1},8,["onClick"]),o(l,{to:"/",title:"Locations",class:"text-[#333333] text-base lg:text-xl font-medium lg:px-2 py-4 no-underline items-center hidden border border-solid border-transparent border-b-[#dddddd] xl:border-b-0",onClick:t.hideMenu},{default:i(()=>[je,Re]),_:1},8,["onClick"])])])])],512),[[g,r.isConfigurations]])]),e("div",Ee,[o(l,{onClick:t.hideMenu,to:"/contact-us",class:"btnStructure primary-gradient lg:mx-2 no-underline inline-block overflow-hidden"},{default:i(()=>[Ie]),_:1},8,["onClick"]),We])],512),[[g,r.istoggle]]),e("div",Je,[Ve,o(l,{to:"/contact-us",class:"btnStructure primary-gradient lg:ml-2 no-underline"},{default:i(()=>[Ue]),_:1})])])])])])}var Xe=_(w,[["render",Fe]]);export{Xe as default};
