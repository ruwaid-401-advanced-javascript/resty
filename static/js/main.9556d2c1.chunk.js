(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{16:function(e,t,a){},26:function(e,t,a){e.exports=a(41)},31:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),l=a(6),o=a(5),s=a(0),c=a.n(s),i=a(22),u=a.n(i),d=a(10),m=a(1),h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?t:null},p=function(e){return c.a.Children.map(e.children,(function(t){return c.a.cloneElement(t,{condition:e.condition})}))},g=function(e){return h(e.condition,e.children)},E=function(e){return h(!e.condition,e.children)},f=(a(31),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement("h1",null,"RESTy"),c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(d.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(d.c,{to:"/history",activeClassName:"history"},"History")))))}}]),a}(c.a.Component)),y=(a(37),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("footer",null,"\xa92021 Ruwaid")}}]),a}(c.a.Component)),b=a(13),O=a.n(b),v=a(25),S=a(24),j=a(19),C=(a(39),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleClick=function(){var e=Object(j.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.props.toggleLoading(),r.url=document.getElementById("url").value,a="".concat(r.method,"!").concat(r.url),r.props.all.push({words:a}),fetch("".concat(r.url),r.state.options).then(function(){var e=Object(j.a)(O.a.mark((function e(t){var a,n,l,o,s,c,i,u,d;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:a=e.sent,n=r.props.all,l={},o=Object(S.a)(t.headers);try{for(o.s();!(s=o.n()).done;)c=Object(v.a)(s.value,2),i=c[0],u=c[1],l[i]=u}catch(m){o.e(m)}finally{o.f()}r.state.metodeUrlObj[r.method].includes(r.url)||(r.state.headersArr.push(l),r.state.methodArr.push(r.method),r.state.bodyArr.push(a),d=r.state.urlArr.length,r.state.urlArr.push(r.url),r.state.metodeUrlObj["".concat(r.method)].push("".concat(r.url)),r.state.metodeUrlObjID["".concat(r.method)].push("".concat(d))),localStorage.setItem("headers-state",JSON.stringify(r.state.headersArr)),localStorage.setItem("method-state",JSON.stringify(r.state.methodArr)),localStorage.setItem("body-state",JSON.stringify(r.state.bodyArr)),localStorage.setItem("URL-state",JSON.stringify(r.state.urlArr)),localStorage.setItem("Method-URL-state",JSON.stringify(r.state.metodeUrlObj)),localStorage.setItem("Method-URL-ID-state",JSON.stringify(r.state.metodeUrlObjID)),r.props.handler(a,n,l),r.props.show(!0),setTimeout((function(){r.props.toggleLoading()}),1e3);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){r.props.handler({msg1:"Error Error Error",msg2:"maybe you do not have access",msg3:"maybe your request is wrooong"},r.props.all,null),r.props.toggleLoading()}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.get=function(e){r.method="GET",document.getElementsByClassName("aqua")[0].removeAttribute("class"),e.target.setAttribute("class","aqua");var t={method:"GET",headers:{"Content-Type":"application/json",Authorization:"".concat(r.state.headertype," ").concat(r.state.headerValue)}};r.setState({options:t})},r.post=function(e){r.method="POST",document.getElementsByClassName("aqua")[0].removeAttribute("class"),e.target.setAttribute("class","aqua");var t={method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"".concat(r.state.headertype," ").concat(r.state.headerValue)},mode:"cors",body:JSON.stringify(r.state.data)};r.setState({options:t})},r.put=function(e){r.method="PUT",document.getElementsByClassName("aqua")[0].removeAttribute("class"),e.target.setAttribute("class","aqua");var t={method:"PUT",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"".concat(r.state.headertype," ").concat(r.state.headerValue)},mode:"cors",body:JSON.stringify(r.state.data)};r.setState({options:t})},r.delete=function(e){r.method="DELETE",document.getElementsByClassName("aqua")[0].removeAttribute("class"),e.target.setAttribute("class","aqua");var t={method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"".concat(r.state.headertype," ").concat(r.state.headerValue)}};r.setState({options:t})},r.handleBody=function(e){r.setState({data:e.target.value})},r.handleHeader=function(e){r.setState({headerValue:e.target.value})},r.handleHeaderType=function(e){r.setState({headertype:e.target.value})},r.state={words:"initial State",options:{},headersArr:[],methodArr:[],bodyArr:[],urlArr:[],metodeUrlObj:{GET:[],POST:[],PUT:[],DELETE:[]},metodeUrlObjID:{GET:[],POST:[],PUT:[],DELETE:[]},data:{},headerValue:"",headerType:""},r.url="",r.method="GET",r}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{id:"form"},c.a.createElement("div",{id:"main-header"},c.a.createElement("div",{id:"url-div"},c.a.createElement("label",{for:"url"},"URL:"),c.a.createElement("input",{id:"url"}),c.a.createElement("button",{onClick:this.handleClick},"GO!"),c.a.createElement("div",{id:"header"},c.a.createElement("label",null," Header"),c.a.createElement("br",null),c.a.createElement("label",{for:"Basic"},"Basic"),c.a.createElement("input",{checked:!0,type:"radio",id:"Basic",name:"auth",value:"Basic",onChange:this.handleHeaderType}),c.a.createElement("label",{for:"Bearer"},"Bearer"),c.a.createElement("input",{type:"radio",id:"Bearer",name:"auth",value:"Bearer",onChange:this.handleHeaderType}),c.a.createElement("br",null),c.a.createElement("input",{id:"headerValue",onChange:this.handleHeader})),c.a.createElement("label",{id:"textarea"},"Body",c.a.createElement("textarea",{rows:"4",cols:"50",onChange:this.handleBody}))),c.a.createElement("div",{id:"buttons"},c.a.createElement("button",{id:"GET",class:"aqua",onClick:this.get},"GET"),c.a.createElement("button",{id:"POST",onClick:this.post},"POST"),c.a.createElement("button",{id:"PUT",onClick:this.put},"PUT"),c.a.createElement("button",{id:"DELETE",onClick:this.delete},"DELETE"))))}}]),a}(c.a.Component)),T=(a(16),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).getFormLocalStorage=function(t){var a=t.target.textContent,n=a.split("!")[0],r=a.split("!")[1],l=JSON.parse(localStorage.getItem("Method-URL-state")),o=JSON.parse(localStorage.getItem("Method-URL-ID-state")),s=l[n].indexOf(r);if(-1===s)e.props.handler({msg1:"Error Error Error",msg2:"maybe you do not have access",msg3:"maybe your request is wrooong"},e.props.all,null);else{var c=o[n][s],i=JSON.parse(localStorage.getItem("headers-state"))[c],u=JSON.parse(localStorage.getItem("method-state"))[c],d=JSON.parse(localStorage.getItem("body-state"))[c],m=JSON.parse(localStorage.getItem("URL-state"))[c];document.getElementById("url").value=m,document.getElementById("".concat(u)).click(),e.props.handler(d,e.props.all,i)}},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"loading-".concat(this.props.loading)},c.a.createElement("h1",null,c.a.createElement("span",null,"L"),c.a.createElement("span",null,"O"),c.a.createElement("span",null,"A"),c.a.createElement("span",null,"D"),c.a.createElement("span",null,"I"),c.a.createElement("span",null,"N"),c.a.createElement("span",null,"G"),c.a.createElement("span",null,"."),c.a.createElement("span",null,"."),c.a.createElement("span",null,"."))),c.a.createElement("div",{id:"content"},c.a.createElement("div",{id:"history"},this.props.all.map((function(t,a){return c.a.createElement("button",{id:a,key:a,onClick:e.getFormLocalStorage},t.words)}))),c.a.createElement("div",null,'"Headers":',c.a.createElement("pre",null,JSON.stringify(this.props.headers,null,2)),'"Response":',c.a.createElement("pre",null,JSON.stringify(this.props.results,null,2)))))}}]),a}(c.a.Component)),A=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).uu=function(e){var t=e.target.id;r.props.fill(t)},r.getFormLocalStorage=function(e){var t=e.target.textContent,a=t.split("!")[0],n=t.split("!")[1],l=JSON.parse(localStorage.getItem("Method-URL-state")),o=JSON.parse(localStorage.getItem("Method-URL-ID-state")),s=l[a].indexOf(n),c=o[a][s],i=JSON.parse(localStorage.getItem("headers-state"))[c],u=JSON.parse(localStorage.getItem("body-state"))[c];r.setState({results:u,headers:i})},r.state={results:{},headers:{}},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{id:"content"},c.a.createElement("div",{id:"history"},this.props.all.map((function(t,a){return c.a.createElement("div",null,c.a.createElement("button",{id:a,key:a,onClick:e.getFormLocalStorage},t.words),c.a.createElement(d.b,{to:"/",id:a,onClick:e.uu},"RE-Run"))}))),c.a.createElement("div",null,'"Headers":',c.a.createElement("pre",null,JSON.stringify(this.state.headers,null,2)),'"Response":',c.a.createElement("pre",null,JSON.stringify(this.state.results,null,2))))}}]),a}(c.a.Component),N=(a(40),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleForm=function(e,t,a){r.setState({results:e,all:t,headers:a})},r.toggleModal=function(e){r.setState({open:e})},r.toggleLoading=function(){r.setState({loading:!r.state.loading})},r.fill=function(e){r.setState({id:e})},r.state={results:{},all:[],headers:"",open:!1,loading:!1,id:""},r}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,null),c.a.createElement(m.a,{path:"/",exact:!0},c.a.createElement(C,{url:this.state.url,all:this.state.all,show:this.toggleModal,handler:this.handleForm,toggleLoading:this.toggleLoading}),c.a.createElement(p,{condition:this.state.open},c.a.createElement(g,null,c.a.createElement(T,{fill:this.fill,id:this.state.id,handler:this.handleForm,results:this.state.results,all:this.state.all,headers:this.state.headers,loading:this.state.loading})),c.a.createElement(E,null,c.a.createElement("div",{id:"content"})))),c.a.createElement(m.a,{path:"/history",exact:!0},c.a.createElement(A,{fill:this.fill,all:this.state.all})),c.a.createElement(y,null))}}]),a}(c.a.Component)),I=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement(N,null))}}]),a}(c.a.Component),L=document.getElementById("root");u.a.render(c.a.createElement(I,null),L)}},[[26,1,2]]]);
//# sourceMappingURL=main.9556d2c1.chunk.js.map