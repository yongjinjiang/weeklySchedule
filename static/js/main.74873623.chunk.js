(this.webpackJsonpmathslides=this.webpackJsonpmathslides||[]).push([[0],{303:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_shuaiyuan_Dropbox_JOB2020_Jiemin_mathslides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(29),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),d3=__webpack_require__(453),fontSize=30,inputSize="6",xSound=document.getElementById("myAudio");function N2Circles(e){e.ncopy;var a=e.data,t=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){console.log(t.current);var e=d3.select(t.current).append("g").selectAll("circle").data(a);e.enter().append("circle").attr("cx",(function(e,a){return"50"})).attr("cy",(function(e,a){return 50*a+50})).attr("r",24).style("stroke","green").style("strokeWidth","4").style("fill","yellow"),e.attr("cx",(function(e,a){return"50"})).attr("cy",(function(e,a){return 50*a+50})).attr("r",24).style("stroke","green").style("strokeWidth","4").style("fill","yellow"),e.exit().remove()}),[a,t]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg",{className:"d3-component",width:400,height:200,ref:t})}function useNewTimer(e,a,t){var n=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(e),_=Object(_Users_shuaiyuan_Dropbox_JOB2020_Jiemin_mathslides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(n,2),s=_[0],i=_[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect((function(){var e=setInterval((function(){return function(){a<=10&&(i(new Date),t(a+1));10==a&&(xSound.play(),console.log(a))}()}),1e3);return function(){clearInterval(e)}})),[s,a]}function Clock(e){var a=useNewTimer(new Date,e.count,e.setCount),t=Object(_Users_shuaiyuan_Dropbox_JOB2020_Jiemin_mathslides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(a,2),n=t[0],_=t[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",null,"Hello, world!"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"It is ",n.toLocaleTimeString(),"."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"It is ",_.toString(),"."))}function jsUcfirst(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Game1(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),_useState2=Object(_Users_shuaiyuan_Dropbox_JOB2020_Jiemin_mathslides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),num1=_useState2[0],setNum1=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),_useState4=Object(_Users_shuaiyuan_Dropbox_JOB2020_Jiemin_mathslides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),num2=_useState4[0],setNum2=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState6=Object(_Users_shuaiyuan_Dropbox_JOB2020_Jiemin_mathslides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),result=_useState6[0],setResult=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),_useState8=Object(_Users_shuaiyuan_Dropbox_JOB2020_Jiemin_mathslides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState7,2),score=_useState8[0],setScore=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),_useState10=Object(_Users_shuaiyuan_Dropbox_JOB2020_Jiemin_mathslides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState9,2),count=_useState10[0],setCount=_useState10[1],mySubmitHandler=function(e){e.preventDefault();var a=Number(num1)+Number(num2);a===Number(result)&&setScore(score+1),setNum1(Math.floor(10*Math.random())),setNum2(Math.floor(10*Math.random())),setResult(""),alert("The total is "+a)},myChangeHandler=function myChangeHandler(event){event.preventDefault();var _event$target=event.target,name=_event$target.name,value=_event$target.value;eval("set"+jsUcfirst(name))(value);var res=Number(num1)+Number(num2);res===Number(value)&&setTimeout((function(){setScore(score+1),setNum1(Math.floor(10*Math.random())),setNum2(Math.floor(10*Math.random())),setResult("")}),200)};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"circleRow"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Clock,{count:count,setCount:setCount}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form",{onSubmit:mySubmitHandler},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{style:{fontSize:fontSize},type:"text",name:"num1",value:num1,onChange:myChangeHandler,size:inputSize}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("font",{style:{fontSize:fontSize}},"  ","+","  "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{style:{fontSize:fontSize},type:"text",name:"num2",value:num2,onChange:myChangeHandler,size:inputSize}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("font",{style:{fontSize:fontSize}},"  ","=","  "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{style:{fontSize:fontSize},type:"text",name:"result",value:result,onChange:myChangeHandler,size:inputSize}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{style:{fontSize:fontSize},type:"submit",value:"Next",size:inputSize})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(N2Circles,{ncopy:2,data:[1,2]}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg",{width:"400",height:"110"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect",{width:"300",height:"100",style:{fill:"rgb(0,0,255)",strokeWidth:"3",stroke:"rgb(0,0,0)"}}),"Sorry, your browser does not support inline SVG."))}var _unused_webpack_default_export=Game1},333:function(e,a){function t(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=333},364:function(e,a,t){e.exports=t(454)},369:function(e,a,t){},454:function(e,a,t){"use strict";t.r(a);var n=t(0),_=t.n(n),s=t(19),i=t.n(s),r=(t(369),t(303),t(146)),u=t.n(r);t(93),t(10);var o=["\u77f3\u4ee5\u6210","\u96f7\u6da6\u5b81","\u4f55\u9ad8\u6960","\u5bc7\u53ef\u601d","\u95f5\u6728\u5170","\u9a6c\u6d77\u4e3a"],l=["\u53f2\u51ef\u8482","\u9646\u51ef","\u6bdb\u7f8e\u831c","\u77f3\u5e86\u8def","\u6234\u73b2","\u9648\u840c\u81fb","\u6768\u8fbe"],c=["\u6e29\u5a49\u5a77","\u5434\u82e5\u838e","\u4efb\u79cb\u94ed","\u6b27\u4e54\u6069","\u7c73\u601d\u5a1c","\u6770\u4f26","\u6b27\u8d1d\u838e","\u6f58\u5982\u827a"],d=o.concat(l).concat(c),m=["Jonah Stapleton","Ronin Rademacher","Sophie Obeng","Keisa Kopietz","Mulan Addy","Victor Moua"].concat(["Camille Ayers","Kai Lewis","Maisy Mau","Keilo Smith","Mackenzie Davis","Kelly Chen","Dag Young"]).concat(["Vivian Wenzel","Rosie Wachman","Azrael Rexius","Chelsea Ochocki","Signe Miller","Jaelon Larson-Adams","Betsaida Morales Omana","Ruby Pruesse"]),h=["\u9a6c\u6c38\u79d1","\u601d\u540c","\u4e07\u5fd7\u6052","\u7f57\u7231\u4e50","\u9ec4\u7f8e\u679a","\u9a6c\u627f\u51ef"],E=["\u5b59\u6167\u83b2","\u4f55\u4ea6\u51ef","\u5b59\u72c4\u4f26","\u83ab\u51ef\u661f","\u6986\u5146\u5c97","\u6797\u8389\u5a9b","\u9ec4\u8bd7\u5982"],y=["\u67cf\u751c\u96c5","\u66f9\u82b8\u83f2","\u6885\u5929\u4f51","\u5218\u7b19","\u8d75\u5fd7\u660e","\u9ad8\u4ec1\u8fea","\u9093\u654f\u5f00"],M=h.concat(E).concat(y),O=["Atticus Matthes","Easton Schneider","Bryduk Wickham","Ella Roselius","Mei Wong","Benny Maanum"].concat(["Solvig Wilson","Isaak Wilson","Dylan Schaefer","Abby Moore","Sammy Schumann","Li Yuan (Lily) Lin","Caitlin (Joy Joy) Huang"]).concat(["Thea Berg","Elicia Thao","Leo Merethith","Seng Nhkum","Riley Eppelheimer","Tiago Cuadro Labey","MyKa\u2019el Koumalasy-Dent"]),p=["\u5b54\u7f8e\u5e0c","\u6881\u777f\u5929","\u5468\u4e50\u9676","\u8042\u7490\u73cd","\u8303\u73ae\u6770","\u738b\u5b66\u7433","\u5b8b\u5e7f\u5b87","\u827e\u6587","\u82cf\u5bb6\u6069"],g=["\u845b\u835f\u5a55","\u4f55\u66fc\u7433","\u5b8b\u6587\u4e3d","\u5b8b\u660e\u94ed","\u51af\u82cf\u7389","\u9648\u4e9a\u5f53","\u4e54\u7231","\u9ad8\u7f8e\u5e0c","\u9a6c\u54f2\u660a"],f=["\u4ee3\u51ef","\u7530\u4e00\u5e06","\u53f2\u590f\u5929","\u7f57\u53ef\u6587","\u5f20\u5fc6\u5a1c","\u5b8b\u8363\u534e","\u83ab\u9038\u601d","\u8303\u5353\u98de","\u5218\u5927\u4f1f"],S=p.concat(g).concat(f),D=["Miriam Kelly","Odilia Lang","Tao McCarthy","Genevieve Menchaca Gorton","Rayne Pham","Jolene Wang","Alex Lundsten","Lucian Espinosa-Splichal","Elena Soo"].concat(["Penny Gulbranson","Katherine Horton","Gwen Thayer","Miles Thayer","Suzume Usada-Fagerland","Adam Putz","Esther George","Eva Granser","Xavier Markowitz Mulet"]).concat(["Kai DaCruz Carlos","Finn Foster","Sasha Stoick","Lestat Lor","Nataniella Zedekia","Maya Song","Amaris Moos","Mack Phillips","David Nhkum"]),T=["Lucian Espinosa-Splichal","Finn Foster","Xavier Markowitz Mulet","Maya Song","Elena Soo"],P=["Eva Granser","Miriam Kelly","Mack Phillips","Miles Thayer","Jolene Wang"],b=["Katherine Horton","Genevieve Menchaca Gorton","Amaris Moos","David Nhkum","Rayne Pham","Gwen Thayer"],j=["Kai DaCruz Carlos","Esther George","Lestat Lor","Tao McCarthy","Suzume Usada-Fagerland","Nataniella Zedekia"],N=["Penny Gulbranson","Odilia Lang","Alex Lundsten","Adam Putz","Sasha Stoick"],v={Time:"",Name:"",Monday:"",Tuesday:"",Wednesday:"",Thursday:"",Friday:""},w=function(e){var a=[],t=[],n=[],s=[],i=[],r=[];if(m.includes(e.who)){var w=m.indexOf(e.who);s.push(e.who),a.push(d[w])}if(O.includes(e.who)){var W=O.indexOf(e.who);i.push(e.who),t.push(M[W])}if(D.includes(e.who)){var C=D.indexOf(e.who);r.push(e.who),n.push(S[C])}var A,L=[];for(var R in a)(A=JSON.parse(JSON.stringify(v))).Time="12:50-1:20",A.Name=a[R]+","+s[R],o.includes(d[R])&&(A.Thursday="Gauss(3305jiang)",A.Monday="Gauss(3305jiang)"),l.includes(d[R])&&(A.Wednesday="Euler(3305jiang)",A.Monday="Euler(3305jiang)"),c.includes(d[R])&&(A.Tuesday="Newton(3305jiang)",A.Friday="Newton(3305jiang)",A.Monday="Newton(3305jiang)"),L.push(A),(A=JSON.parse(JSON.stringify(v))).Time="1:20-1:50",A.Name=a[R]+","+s[R],o.includes(d[R])&&(A.Tuesday="Gauss(3305jiang)"),l.includes(d[R])&&(A.Thursday="Euler(3305jiang)",A.Friday="Euler(3305jiang)"),c.includes(d[R])&&(A.Monday="Newton(3305jiang)",A.Wednesday="Newton(3305jiang)"),L.push(A);for(var U in t)(A=JSON.parse(JSON.stringify(v))).Time="2:20-2:50",A.Name=t[U]+","+i[U],h.includes(M[U])&&(A.Thursday="Gauss(3305jiang)",A.Monday="Gauss(3305jiang)"),E.includes(M[U])&&(A.Wednesday="Euler(3305jiang)",A.Monday="Euler(3305jiang)"),y.includes(M[U])&&(A.Tuesday="Newton(3305jiang)",A.Friday="Newton(3305jiang)",A.Monday="Newton(3305jiang)"),L.push(A),(A=JSON.parse(JSON.stringify(v))).Time="2:50-3:20",A.Name=t[U]+","+i[U],h.includes(M[U])&&(A.Tuesday="Gauss(3305jiang)"),E.includes(M[U])&&(A.Thursday="Euler(3305jiang)",A.Friday="Euler(3305jiang)"),y.includes(M[U])&&(A.Monday="Newton(3305jiang)",A.Wednesday="Newton(3305jiang)"),L.push(A);for(var B in n)(A=JSON.parse(JSON.stringify(v))).Time="10:50-11:20",A.Name=n[B]+","+r[B],p.includes(S[B])&&(A.Thursday="Gauss(3305jiang)",A.Monday="Gauss(3305jiang)"),g.includes(S[B])&&(A.Wednesday="Euler(3305jiang)",A.Monday="Euler(3305jiang)"),f.includes(S[B])&&(A.Tuesday="Newton(3305jiang)",A.Friday="Newton(3305jiang)",A.Monday="Newton(3305jiang)"),L.push(A),(A=JSON.parse(JSON.stringify(v))).Time="11:20-11:50",A.Name=n[B]+","+r[B],p.includes(S[B])&&(A.Tuesday="Gauss(3305jiang)"),g.includes(S[B])&&(A.Thursday="Euler(3305jiang)",A.Friday="Euler(3305jiang)"),f.includes(S[B])&&(A.Monday="Newton(3305jiang)",A.Wednesday="Newton(3305jiang)"),L.push(A),(A=JSON.parse(JSON.stringify(v))).Time="11:20-11:50",A.Name=n[B]+","+r[B],p.includes(S[B])&&(A.Tuesday="Gauss(3305jiang)"),g.includes(S[B])&&(A.Thursday="Euler(3305jiang)",A.Friday="Euler(3305jiang)"),f.includes(S[B])&&(A.Monday="Newton(3305jiang)",A.Wednesday="Newton(3305jiang)"),L.push(A),(A=JSON.parse(JSON.stringify(v))).Time="1:50-2:05",A.Name=n[B]+","+r[B],T.includes(D[B])&&(A.Monday="Wood(jmjiang1chinese)"),N.includes(D[B])&&(A.Tuesday="Fire(jmjiang1chinese)"),j.includes(D[B])&&(A.Wednesday="Gold(jmjiang1chinese)"),b.includes(D[B])&&(A.Friday="Soil(jmjiang1chinese)"),P.includes(D[B])&&(A.Thursday="Water(jmjiang1chinese)"),L.push(A),(A=JSON.parse(JSON.stringify(v))).Time="1:30-1:45",A.Name=n[B]+","+r[B],T.includes(D[B])&&(A.Thursday="Wood(jmjiang1chinese)"),N.includes(D[B])&&(A.Friday="Fire(jmjiang1chinese)"),j.includes(D[B])&&(A.Monday="Gold(jmjiang1chinese)"),b.includes(D[B])&&(A.Wednesday="Soil(jmjiang1chinese)"),P.includes(D[B])&&(A.Tuesday="Water(jmjiang1chinese)"),L.push(A);return _.a.createElement("div",{className:"uniqueName"},_.a.createElement(u.a,{title:e.who+"'s weekly schedule",data:L,columns:[{title:"Time",field:"Time"},{title:"Name",field:"Name"},{title:"Monday",field:"Monday"},{title:"Tuesday",field:"Tuesday"},{title:"Wednesday",field:"Wednesday"},{title:"Thursday",field:"Thursday"},{title:"Friday",field:"Friday"}],options:{paging:!0,pageSize:6,emptyRowsWhenPaging:!0,pageSizeOptions:[6,12,20,50]}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W="";if(null!==document.location.search){var C=new URLSearchParams(document.location.search);C.has("who")&&(W=C.get("who"))}i.a.render(_.a.createElement(_.a.StrictMode,null,_.a.createElement(w,{who:W})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[364,1,2]]]);
//# sourceMappingURL=main.74873623.chunk.js.map