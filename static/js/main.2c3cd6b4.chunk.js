(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{15:function(e,t,a){},23:function(e,t,a){e.exports=a(38)},28:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),l=a(6),o=a(5),s=a(0),i=a.n(s),c=a(21),u=a.n(c),d=a(10),m=a(1),p=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?t:null},h=function(e){return i.a.Children.map(e.children,(function(t){return i.a.cloneElement(t,{condition:e.condition})}))},g=function(e){return p(e.condition,e.children)},E=function(e){return p(!e.condition,e.children)},f=(a(28),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("h1",null,"RESTy"),i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(d.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(d.c,{to:"/history",activeClassName:"history"},"History")))))}}]),a}(i.a.Component)),O=(a(34),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("footer",null,"\xa92021 Ruwaid")}}]),a}(i.a.Component)),b=a(13),y=a.n(b),v=a(18),S=(a(36),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleClick=function(){var e=Object(v.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.props.toggleLoading(),r.url=document.getElementById("url").value,a="".concat(r.method,"!").concat(r.url),fetch("".concat(r.url),r.state.options).then(function(){var e=Object(v.a)(y.a.mark((function e(t){var n,l,o,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,l=r.props.all,o=t.headers.get("content-type"),r.props.all.push({words:a}),r.state.metodeUrlObj[r.method].includes(r.url)||(r.state.headersArr.push(o),r.state.methodArr.push(r.method),r.state.bodyArr.push(n),s=r.state.urlArr.length,r.state.urlArr.push(r.url),r.state.metodeUrlObj["".concat(r.method)].push("".concat(r.url)),r.state.metodeUrlObjID["".concat(r.method)].push("".concat(s))),localStorage.setItem("headers-state",JSON.stringify(r.state.headersArr)),localStorage.setItem("method-state",JSON.stringify(r.state.methodArr)),localStorage.setItem("body-state",JSON.stringify(r.state.bodyArr)),localStorage.setItem("URL-state",JSON.stringify(r.state.urlArr)),localStorage.setItem("Method-URL-state",JSON.stringify(r.state.metodeUrlObj)),localStorage.setItem("Method-URL-ID-state",JSON.stringify(r.state.metodeUrlObjID)),r.props.handler(n,l,o),r.props.show(!0),setTimeout((function(){r.props.toggleLoading()}),1e3);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){r.props.handler({msg1:"Error Error Error",msg2:"maybe you do not have access",msg3:"maybe your request is wrooong"},r.props.all,null),r.props.toggleLoading()}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.get=function(e){r.method="GET",document.getElementsByClassName("aqua")[0].removeAttribute("class"),e.target.setAttribute("class","aqua");r.setState({options:{method:"GET"}})},r.post=function(e){r.method="POST",document.getElementsByClassName("aqua")[0].removeAttribute("class"),e.target.setAttribute("class","aqua");var t={method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},mode:"cors",body:JSON.stringify({})};r.setState({options:t})},r.put=function(e){r.method="PUT",document.getElementsByClassName("aqua")[0].removeAttribute("class"),e.target.setAttribute("class","aqua");var t={method:"PUT",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},mode:"cors",body:JSON.stringify({})};r.setState({options:t})},r.delete=function(e){r.method="DELETE",document.getElementsByClassName("aqua")[0].removeAttribute("class"),e.target.setAttribute("class","aqua");r.setState({options:{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"}}})},r.state={words:"initial State",options:{},headersArr:[],methodArr:[],bodyArr:[],urlArr:[],metodeUrlObj:{GET:[],POST:[],PUT:[],DELETE:[]},metodeUrlObjID:{GET:[],POST:[],PUT:[],DELETE:[]}},r.url="",r.method="GET",r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){console.log("iiiiiiiiiiiiiiiii"),""===e.props.id?console.log("pppppppppppppppp"):console.log("qqqqqqqqqqqqqqqqqqqq")}),1e3)}},{key:"render",value:function(){return i.a.createElement("div",{id:"form"},i.a.createElement("div",{id:"main-header"},i.a.createElement("div",{id:"url-div"},i.a.createElement("label",{for:"url"},"URL:"),i.a.createElement("input",{id:"url"}),i.a.createElement("button",{onClick:this.handleClick},"GO!")),i.a.createElement("div",{id:"buttons"},i.a.createElement("button",{id:"GET",class:"aqua",onClick:this.get},"GET"),i.a.createElement("button",{id:"POST",onClick:this.post},"POST"),i.a.createElement("button",{id:"PUT",onClick:this.put},"PUT"),i.a.createElement("button",{id:"DELETE",onClick:this.delete},"DELETE"))))}}]),a}(i.a.Component)),j=(a(15),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).getFormLocalStorage=function(t){var a=t.target.textContent,n=a.split("!")[0],r=a.split("!")[1],l=JSON.parse(localStorage.getItem("Method-URL-state")),o=JSON.parse(localStorage.getItem("Method-URL-ID-state")),s=l[n].indexOf(r),i=o[n][s],c=JSON.parse(localStorage.getItem("headers-state"))[i],u=JSON.parse(localStorage.getItem("method-state"))[i],d=JSON.parse(localStorage.getItem("body-state"))[i],m=JSON.parse(localStorage.getItem("URL-state"))[i];document.getElementById("url").value=m,document.getElementById("".concat(u)).click(),e.props.handler(d,e.props.all,c)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"loading-".concat(this.props.loading)},i.a.createElement("h1",null,i.a.createElement("span",null,"L"),i.a.createElement("span",null,"O"),i.a.createElement("span",null,"A"),i.a.createElement("span",null,"D"),i.a.createElement("span",null,"I"),i.a.createElement("span",null,"N"),i.a.createElement("span",null,"G"),i.a.createElement("span",null,"."),i.a.createElement("span",null,"."),i.a.createElement("span",null,"."))),i.a.createElement("div",{id:"content"},i.a.createElement("div",{id:"history"},this.props.all.map((function(t,a){return i.a.createElement("button",{id:a,key:a,onClick:e.getFormLocalStorage},t.words)}))),i.a.createElement("div",null,'"Headers":',i.a.createElement("pre",null,JSON.stringify(this.props.headers,null,2)),'"Response":',i.a.createElement("pre",null,JSON.stringify(this.props.results,null,2)))))}}]),a}(i.a.Component)),T=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).uu=function(e){var t=e.target.id;r.props.fill(t)},r.getFormLocalStorage=function(e){var t=e.target.textContent,a=t.split("!")[0],n=t.split("!")[1],l=JSON.parse(localStorage.getItem("Method-URL-state")),o=JSON.parse(localStorage.getItem("Method-URL-ID-state")),s=l[a].indexOf(n),i=o[a][s],c=JSON.parse(localStorage.getItem("headers-state"))[i],u=JSON.parse(localStorage.getItem("body-state"))[i];r.setState({results:u,headers:c})},r.state={results:{},headers:{}},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"content"},i.a.createElement("div",{id:"history"},this.props.all.map((function(t,a){return i.a.createElement("div",null,i.a.createElement("button",{id:a,key:a,onClick:e.getFormLocalStorage},t.words),i.a.createElement(d.b,{to:"/",id:a,onClick:e.uu},"RE-Run"))}))),i.a.createElement("div",null,'"Headers":',i.a.createElement("pre",null,JSON.stringify(this.state.headers,null,2)),'"Response":',i.a.createElement("pre",null,JSON.stringify(this.state.results,null,2))))}}]),a}(i.a.Component),q=(a(37),function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleForm=function(e,t,a){r.setState({results:e,all:t,headers:a})},r.toggleModal=function(e){r.setState({open:e})},r.toggleLoading=function(){r.setState({loading:!r.state.loading})},r.fill=function(e){r.setState({id:e})},r.state={results:{},all:[],headers:"",open:!1,loading:!1,id:""},r}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,null),i.a.createElement(m.a,{path:"/",exact:!0},i.a.createElement(S,{url:this.state.url,all:this.state.all,show:this.toggleModal,handler:this.handleForm,toggleLoading:this.toggleLoading}),i.a.createElement(h,{condition:this.state.open},i.a.createElement(g,null,i.a.createElement(j,{fill:this.fill,id:this.state.id,handler:this.handleForm,results:this.state.results,all:this.state.all,headers:this.state.headers,loading:this.state.loading})),i.a.createElement(E,null,i.a.createElement("div",{id:"content"})))),i.a.createElement(m.a,{path:"/history",exact:!0},i.a.createElement(T,{fill:this.fill,all:this.state.all})),i.a.createElement(O,null))}}]),a}(i.a.Component)),C=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(q,null))}}]),a}(i.a.Component),N=document.getElementById("root");u.a.render(i.a.createElement(C,null),N)}},[[23,1,2]]]);
//# sourceMappingURL=main.2c3cd6b4.chunk.js.map