(this.webpackJsonpmathslides=this.webpackJsonpmathslides||[]).push([[0],{303:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_shuaiyuan_Dropbox_JOB2020_Jiemin_mathslides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(29),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),d3=__webpack_require__(453),fontSize=30,inputSize="6",xSound=document.getElementById("myAudio");function N2Circles(e){e.ncopy;var a=e.data,n=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){console.log(n.current);var e=d3.select(n.current).append("g").selectAll("circle").data(a);e.enter().append("circle").attr("cx",(function(e,a){return"50"})).attr("cy",(function(e,a){return 50*a+50})).attr("r",24).style("stroke","green").style("strokeWidth","4").style("fill","yellow"),e.attr("cx",(function(e,a){return"50"})).attr("cy",(function(e,a){return 50*a+50})).attr("r",24).style("stroke","green").style("strokeWidth","4").style("fill","yellow"),e.exit().remove()}),[a,n]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg",{className:"d3-component",width:400,height:200,ref:n})}function useNewTimer(e,a,n){var t=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(e),i=Object(_Users_shuaiyuan_Dropbox_JOB2020_Jiemin_mathslides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(t,2),s=i[0],_=i[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect((function(){var e=setInterval((function(){return function(){a<=10&&(_(new Date),n(a+1));10==a&&(xSound.play(),console.log(a))}()}),1e3);return function(){clearInterval(e)}})),[s,a]}function Clock(e){var a=useNewTimer(new Date,e.count,e.setCount),n=Object(_Users_shuaiyuan_Dropbox_JOB2020_Jiemin_mathslides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(a,2),t=n[0],i=n[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",null,"Hello, world!"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"It is ",t.toLocaleTimeString(),"."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"It is ",i.toString(),"."))}function jsUcfirst(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Game1(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),_useState2=Object(_Users_shuaiyuan_Dropbox_JOB2020_Jiemin_mathslides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),num1=_useState2[0],setNum1=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),_useState4=Object(_Users_shuaiyuan_Dropbox_JOB2020_Jiemin_mathslides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),num2=_useState4[0],setNum2=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState6=Object(_Users_shuaiyuan_Dropbox_JOB2020_Jiemin_mathslides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),result=_useState6[0],setResult=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),_useState8=Object(_Users_shuaiyuan_Dropbox_JOB2020_Jiemin_mathslides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState7,2),score=_useState8[0],setScore=_useState8[1],_useState9=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),_useState10=Object(_Users_shuaiyuan_Dropbox_JOB2020_Jiemin_mathslides_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState9,2),count=_useState10[0],setCount=_useState10[1],mySubmitHandler=function(e){e.preventDefault();var a=Number(num1)+Number(num2);a===Number(result)&&setScore(score+1),setNum1(Math.floor(10*Math.random())),setNum2(Math.floor(10*Math.random())),setResult(""),alert("The total is "+a)},myChangeHandler=function myChangeHandler(event){event.preventDefault();var _event$target=event.target,name=_event$target.name,value=_event$target.value;eval("set"+jsUcfirst(name))(value);var res=Number(num1)+Number(num2);res===Number(value)&&setTimeout((function(){setScore(score+1),setNum1(Math.floor(10*Math.random())),setNum2(Math.floor(10*Math.random())),setResult("")}),200)};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"circleRow"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Clock,{count:count,setCount:setCount}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form",{onSubmit:mySubmitHandler},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{style:{fontSize:fontSize},type:"text",name:"num1",value:num1,onChange:myChangeHandler,size:inputSize}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("font",{style:{fontSize:fontSize}},"  ","+","  "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{style:{fontSize:fontSize},type:"text",name:"num2",value:num2,onChange:myChangeHandler,size:inputSize}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("font",{style:{fontSize:fontSize}},"  ","=","  "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{style:{fontSize:fontSize},type:"text",name:"result",value:result,onChange:myChangeHandler,size:inputSize}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{style:{fontSize:fontSize},type:"submit",value:"Next",size:inputSize})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(N2Circles,{ncopy:2,data:[1,2]}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg",{width:"400",height:"110"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect",{width:"300",height:"100",style:{fill:"rgb(0,0,255)",strokeWidth:"3",stroke:"rgb(0,0,0)"}}),"Sorry, your browser does not support inline SVG."))}var _unused_webpack_default_export=Game1},333:function(e,a){function n(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=333},364:function(e,a,n){e.exports=n(454)},369:function(e,a,n){},454:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),s=n(19),_=n.n(s),r=(n(369),n(303),n(146)),l=n.n(r);n(93),n(10);var o=["\u77f3\u4ee5\u6210","\u96f7\u6da6\u5b81","\u4f55\u9ad8\u6960","\u5bc7\u53ef\u601d","\u95f5\u6728\u5170","\u9a6c\u6d77\u4e3a"],u=["\u53f2\u51ef\u8482","\u9646\u51ef","\u6bdb\u7f8e\u831c","\u77f3\u5e86\u8def","\u6234\u73b2","\u9648\u840c\u81fb","\u6768\u8fbe"],d=["\u6e29\u5a49\u5a77","\u5434\u82e5\u838e","\u4efb\u79cb\u94ed","\u6b27\u4e54\u6069","\u7c73\u601d\u5a1c","\u6770\u4f26","\u6b27\u8d1d\u838e","\u6f58\u5982\u827a"],c=o.concat(u).concat(d),y=["Jonah Stapleton","Ronin Rademacher","Sophie Obeng","Keisa Kopietz","Mulan Addy","Victor Moua"].concat(["Camille Ayers","Kai Lewis","Maisy Mau","Keilo Smith","Mackenzie Davis","Kelly Chen","Dag Young"]).concat(["Vivian Wenzel","Rosie Wachman","Azrael Rexius","Chelsea Ochocki","Signe Miller","Jaelon Larson-Adams","Betsaida Morales Omana","Ruby Pruesse"]),h=["\u9a6c\u6c38\u79d1","\u601d\u540c","\u4e07\u5fd7\u6052","\u7f57\u7231\u4e50","\u9ec4\u7f8e\u679a","\u9a6c\u627f\u51ef"],m=["\u5b59\u6167\u83b2","\u4f55\u4ea6\u51ef","\u5b59\u72c4\u4f26","\u83ab\u51ef\u661f","\u6986\u5146\u5c97","\u6797\u8389\u5a9b","\u9ec4\u8bd7\u5982"],E=["\u67cf\u751c\u96c5","\u66f9\u82b8\u83f2","\u6885\u5929\u4f51","\u5218\u7b19","\u8d75\u5fd7\u660e","\u9ad8\u4ec1\u8fea","\u9093\u654f\u5f00"],M=h.concat(m).concat(E),O=["Atticus Matthes","Easton Schneider","Bryduk Wickham","Ella Roselius","Mei Wong","Benny Maanum"].concat(["Solvig Wilson","Isaak Wilson","Dylan Schaefer","Abby Moore","Sammy Schumann","Li Yuan (Lily) Lin","Caitlin (Joy Joy) Huang"]).concat(["Thea Berg","Elicia Thao","Leo Merethith","Seng Nhkum","Riley Eppelheimer","Tiago Cuadro Labey","MyKa\u2019el Koumalasy-Dent"]),p=["\u5b54\u7f8e\u5e0c","\u6881\u777f\u5929","\u5468\u4e50\u9676","\u8042\u7490\u73cd","\u8303\u73ae\u6770","\u738b\u5b66\u7433","\u5b8b\u5e7f\u5b87","\u827e\u6587","\u82cf\u5bb6\u6069"],g=["\u845b\u835f\u5a55","\u4f55\u66fc\u7433","\u5b8b\u6587\u4e3d","\u5b8b\u660e\u94ed","\u51af\u82cf\u7389","\u9648\u4e9a\u5f53","\u4e54\u7231","\u9ad8\u7f8e\u5e0c","\u9a6c\u54f2\u660a"],S=["\u4ee3\u51ef","\u7530\u4e00\u5e06","\u53f2\u590f\u5929","\u7f57\u53ef\u6587","\u5f20\u5fc6\u5a1c","\u5b8b\u8363\u534e","\u83ab\u9038\u601d","\u8303\u5353\u98de","\u5218\u5927\u4f1f"],T=p.concat(g).concat(S),f=["Miriam Kelly","Odilia Lang","Tao McCarthy","Genevieve Menchaca Gorton","Rayne Pham","Jolene Wang","Alex Lundsten","Lucian Espinosa-Splichal","Elena Soo"].concat(["Penny Gulbranson","Katherine Horton","Gwen Thayer","Miles Thayer","Suzume Usada-Fagerland","Adam Putz","Esther George","Eva Granser","Xavier Markowitz Mulet"]).concat(["Kai DaCruz Carlos","Finn Foster","Sasha Stoick","Lestat Lor","Nataniella Zedekia","Maya Song","Amaris Moos","Mack Phillips","David Nhkum"]),v=["Miriam Kelly","Amaris Moos","David Nhkum","Maya Song","Gwen Thayer","Jolene Wang"],D=["Eva Granser","Esther George","Penny Gulbranson","Mack Phillips","Sasha Stoick"],j=["Lucian Espinosa-Splichal","Finn Foster","Lestat Lor","Alex Lundsten","Rayne Pham"],b=["Katherine Horton","Tao McCarthy","Adam Putz","Elena Soo","Miles Thayer","Suzume Usada-Fagerland"],P=["Kai DaCruz Carlos","Odilia Lang","Xavier Markowitz Mulet","Genevieve Menchaca Gorton","Nataniella Zedekia"],N=["Mack Phillips","Jolene Wang","Miriam Kelly","Alex Lundsten"],W=["Lestat Lor","Rayne Pham","Suzume Usada-Fagerland","Lucian Espinosa-Splichal","Nataniella Zedekia"],w=["Xavier Markowitz Mulet","Kai DaCruz Carlos","David Nhkum","Esther George","Adam Putz"],C=["Penny Gulbranson","Maya Song","Genevieve Menchaca Gorton","Katherine Horton","Sasha Stoick"],A=["Odilia Lang","Finn Foster","Tao McCarthy","Amaris Moos","Gwen Thayer","Miles Thayer","Eva Granser","Elena Soo"],L=["Jonah Stapleton","Camille Ayers","Ronin Rademacher","Dag Young","Maisy Mau"],R=["Kai Lewis","Ruby Pruesse","Rosie Wachman","Victor Moua","Kelly Chen"],B=["Vivian Wenzel","Betsaida Morales Omana","Chelsea Ochocki","Mulan Addy","Azrael Rexius"],K=["Signe Miller","Keisa Kopietz","Sophie Obeng","Keilo Smith","Mackenzie Davis"],J=[],U=["Li Yuan (Lily) Lin","Elicia Thao","Seng Nhkum","Mei Wong","Ella Roselius"],k=["Isaak Wilson","Solvig Wilson","Atticus Matthes","Benny Maanum","MyKa\u2019el Koumalasy-Dent"],I=["Bryduk Wickham","Sammy Schumann","Leo Merethith","Dylan Schaefer","Thea Berg"],z=["Abby Moore","Riley Eppelheimer","Tiago Cuadro Labey","Caitlin (Joy Joy) Huang","Easton Schneider"],G=[],F={Time:"",Name:"",Monday:"",Tuesday:"",Wednesday:"",Thursday:"",Friday:""},x=function(e){var a=[],n=[],t=[],s=[],_=[],r=[],x="";if(y.includes(e.who)){var H=y.indexOf(e.who);s.push(e.who),a.push(c[H]),x=c[H]}if(O.includes(e.who)){var Y=O.indexOf(e.who);_.push(e.who),n.push(M[Y]),x=M[Y]}if(f.includes(e.who)){var q=f.indexOf(e.who);r.push(e.who),t.push(T[q]),x=T[q]}console.log("All_4A_somebody_en: ",s,a),console.log("All_4B_somebody_en: ",_,n),console.log("All_5A_somebody_en: ",r,t);var V,$=[];for(var X in a)(V=JSON.parse(JSON.stringify(F))).Time="11:05-11:25",V.Name=a[X]+","+s[X],L.includes(s[X])&&(V.Monday="Red(jmhvidhyld)",V.Wednesday="Red(jmhvidhyld)"),R.includes(s[X])&&(V.Tuesday="Blue(jmhvidhyld)",V.Thursday="Blue(jmhvidhyld)"),J.includes(s[X])&&(V.Friday="Orange(jmhvidhyld)"),(V.Monday||V.Tuesday||V.Wednesday||V.Thursday||V.Friday)&&$.push(V),(V=JSON.parse(JSON.stringify(F))).Time="11:25-11:45",V.Name=a[X]+","+s[X],B.includes(s[X])&&(V.Monday="Green(jmhvidhyld)",V.Wednesday="Green(jmhvidhyld)"),K.includes(s[X])&&(V.Tuesday="Yellow(jmhvidhyld)",V.Thursday="Yellow(jmhvidhyld)"),(V.Monday||V.Tuesday||V.Wednesday||V.Thursday||V.Friday)&&$.push(V),(V=JSON.parse(JSON.stringify(F))).Time="12:50-1:20",V.Name=a[X]+","+s[X],o.includes(a[X])&&(V.Thursday="Gauss(3305jiang)",V.Monday="Gauss(3305jiang)"),u.includes(a[X])&&(V.Wednesday="Euler(3305jiang)",V.Monday="Euler(3305jiang)"),d.includes(a[X])&&(V.Tuesday="Newton(3305jiang)",V.Friday="Newton(3305jiang)",V.Monday="Newton(3305jiang)"),$.push(V),(V=JSON.parse(JSON.stringify(F))).Time="1:20-1:50",V.Name=a[X]+","+s[X],o.includes(a[X])&&(V.Tuesday="Gauss(3305jiang)"),u.includes(a[X])&&(V.Thursday="Euler(3305jiang)",V.Friday="Euler(3305jiang)"),d.includes(a[X])&&(V.Monday="Newton(3305jiang)",V.Wednesday="Newton(3305jiang)"),$.push(V);for(var Z in n)(V=JSON.parse(JSON.stringify(F))).Time="1:05-1:25",V.Name=n[Z]+","+_[Z],U.includes(_[Z])&&(V.Monday="Red(jmhvidhyld)",V.Wednesday="Red(jmhvidhyld)"),k.includes(_[Z])&&(V.Tuesday="Blue(jmhvidhyld)",V.Thursday="Blue(jmhvidhyld)"),G.includes(_[Z])&&(V.Friday="Orange(jmhvidhyld)"),(V.Monday||V.Tuesday||V.Wednesday||V.Thursday||V.Friday)&&$.push(V),(V=JSON.parse(JSON.stringify(F))).Time="1:25-1:45",V.Name=n[Z]+","+_[Z],I.includes(_[Z])&&(V.Monday="Green(jmhvidhyld)",V.Wednesday="Green(jmhvidhyld)"),z.includes(_[Z])&&(V.Tuesday="Yellow(jmhvidhyld)",V.Thursday="Yellow(jmhvidhyld)"),(V.Monday||V.Tuesday||V.Wednesday||V.Thursday||V.Friday)&&$.push(V),(V=JSON.parse(JSON.stringify(F))).Time="2:20-2:50",V.Name=n[Z]+","+_[Z],h.includes(n[Z])&&(V.Thursday="Gauss(3305jiang)",V.Monday="Gauss(3305jiang)"),m.includes(n[Z])&&(V.Wednesday="Euler(3305jiang)",V.Monday="Euler(3305jiang)"),E.includes(n[Z])&&(V.Tuesday="Newton(3305jiang)",V.Friday="Newton(3305jiang)",V.Monday="Newton(3305jiang)"),$.push(V),(V=JSON.parse(JSON.stringify(F))).Time="2:50-3:20",V.Name=n[Z]+","+_[Z],h.includes(n[Z])&&(V.Tuesday="Gauss(3305jiang)"),m.includes(n[Z])&&(V.Thursday="Euler(3305jiang)",V.Friday="Euler(3305jiang)"),E.includes(n[Z])&&(V.Monday="Newton(3305jiang)",V.Wednesday="Newton(3305jiang)"),$.push(V);for(var Q in t)(V=JSON.parse(JSON.stringify(F))).Time="10:50-11:20",V.Name=t[Q]+","+r[Q],p.includes(t[Q])&&(V.Thursday="Gauss(3305jiang)",V.Monday="Gauss(3305jiang)"),g.includes(t[Q])&&(V.Wednesday="Euler(3305jiang)",V.Monday="Euler(3305jiang)"),S.includes(t[Q])&&(V.Tuesday="Newton(3305jiang)",V.Friday="Newton(3305jiang)",V.Monday="Newton(3305jiang)"),$.push(V),(V=JSON.parse(JSON.stringify(F))).Time="11:20-11:50",V.Name=t[Q]+","+r[Q],p.includes(t[Q])&&(V.Tuesday="Gauss(3305jiang)"),g.includes(t[Q])&&(V.Thursday="Euler(3305jiang)",V.Friday="Euler(3305jiang)"),S.includes(t[Q])&&(V.Monday="Newton(3305jiang)",V.Wednesday="Newton(3305jiang)"),$.push(V),(V=JSON.parse(JSON.stringify(F))).Time="1:20-1:40",V.Name=t[Q]+","+r[Q],v.includes(r[Q])&&(V.Thursday="Wood(jmjiang1chinese)"),P.includes(r[Q])&&(V.Friday="Fire(jmjiang1chinese)"),b.includes(r[Q])&&(V.Monday="Gold(jmjiang1chinese)"),j.includes(r[Q])&&(V.Wednesday="Soil(jmjiang1chinese)"),D.includes(r[Q])&&(V.Tuesday="Water(jmjiang1chinese)"),$.push(V),(V=JSON.parse(JSON.stringify(F))).Time="1:40-2:00",V.Name=t[Q]+","+r[Q],v.includes(r[Q])&&(V.Monday="Wood(jmjiang1chinese)"),P.includes(r[Q])&&(V.Tuesday="Fire(jmjiang1chinese)"),b.includes(r[Q])&&(V.Wednesday="Gold(jmjiang1chinese)"),j.includes(r[Q])&&(V.Friday="Soil(jmjiang1chinese)"),D.includes(r[Q])&&(V.Thursday="Water(jmjiang1chinese)"),$.push(V),(V=JSON.parse(JSON.stringify(F))).Time="2:45-3:05",V.Name=t[Q]+","+r[Q],N.includes(r[Q])&&(V.Monday="Red(jmhvidhyld)",V.Wednesday="Red(jmhvidhyld)"),W.includes(r[Q])&&(V.Tuesday="Blue(jmhvidhyld)",V.Thursday="Blue(jmhvidhyld)"),A.includes(r[Q])&&(V.Friday="Orange(jmhvidhyld)"),(V.Monday||V.Tuesday||V.Wednesday||V.Thursday||V.Friday)&&$.push(V),(V=JSON.parse(JSON.stringify(F))).Time="3:10-3:30",V.Name=t[Q]+","+r[Q],w.includes(r[Q])&&(V.Monday="Green(jmhvidhyld)",V.Wednesday="Green(jmhvidhyld)"),C.includes(r[Q])&&(V.Tuesday="Yellow(jmhvidhyld)",V.Thursday="Yellow(jmhvidhyld)"),(V.Monday||V.Tuesday||V.Wednesday||V.Thursday||V.Friday)&&$.push(V);return i.a.createElement("div",{className:"uniqueName"},i.a.createElement(l.a,{title:e.who+"("+x+")'s weekly schedule",data:$,columns:[{title:"Time",field:"Time"},{title:"Monday",field:"Monday"},{title:"Tuesday",field:"Tuesday"},{title:"Wednesday",field:"Wednesday"},{title:"Thursday",field:"Thursday"},{title:"Friday",field:"Friday"}],options:{paging:!0,pageSize:6,emptyRowsWhenPaging:!0,pageSizeOptions:[6,12,20,50]}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H="";if(null!==document.location.search){var Y=new URLSearchParams(document.location.search);Y.has("who")&&(H=Y.get("who"))}_.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(x,{who:H})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[364,1,2]]]);
//# sourceMappingURL=main.e3093502.chunk.js.map