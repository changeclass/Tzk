(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n(7),r=n.n(s),l=n(2),o=n(3),i=n(5),j=n(4),d=n(8),m=n.n(d),h=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={username:"",content:""},e.propsType={setState:m.a.func.isRequired},e.handleNameChange=function(t){var n=t.target.value;e.setState({username:n})},e.handleContentSubmit=function(t){var n=t.target.value;e.setState({content:n})},e.handleSubmit=function(){var t=e.state;e.props.addComent(t)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.content;return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsxs)("form",{className:"form-horizontal",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"\u7528\u6237\u540d"}),Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"\u7528\u6237\u540d",value:t,onChange:this.handleNameChange})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"\u8bc4\u8bba\u5185\u5bb9"}),Object(c.jsx)("textarea",{className:"form-control",rows:"6",placeholder:"\u8bc4\u8bba\u5185\u5bb9",value:n,onChange:this.handleContentSubmit})]}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("div",{className:"col-sm-offset-2 col-sm-10",children:Object(c.jsx)("button",{type:"button",className:"btn btn-default pull-right",onClick:this.handleSubmit,children:"\u63d0\u4ea4"})})})]})})})}}]),n}(a.Component),u=(n(16),function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).handleClick=function(){var t=e.props,n=t.comment,c=t.deleteComent,a=t.index;window.confirm("\u786e\u5b9a\u5220\u9664".concat(n.username,"\u4e48\uff1f"))&&c(a)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.comment;return Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("div",{className:"handle",children:Object(c.jsx)("a",{href:"#!",onClick:this.handleClick,children:"\u5220\u9664"})}),Object(c.jsxs)("p",{className:"user",children:[Object(c.jsx)("span",{children:e.username}),Object(c.jsx)("span",{children:"\u8bf4:"})]}),Object(c.jsx)("p",{className:"centence",children:e.content})]})}}]),n}(a.Component)),b=(n(17),function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.comments,n=e.deleteComent,a=0===t.length?"block":"none";return console.log(a),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"col-md-8",children:[Object(c.jsx)("h3",{className:"reply",children:"\u8bc4\u8bba\u56de\u590d\uff1a"}),Object(c.jsx)("h2",{style:{display:a},children:"\u6682\u65e0\u8bc4\u8bba\uff0c\u70b9\u51fb\u5de6\u4fa7\u6dfb\u52a0\u8bc4\u8bba\uff01\uff01\uff01"}),Object(c.jsx)("ul",{className:"list-group",children:t.map((function(e,t){return Object(c.jsx)(u,{comment:e,deleteComent:n,index:t},t)}))})]})})}}]),n}(a.Component)),O=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).addComent=function(e){var t=c.state.comments;t.unshift(e),c.setState(t)},c.deleteComent=function(e){var t=c.state.comments;t.splice(e,1),c.setState(t)},c.state={comments:[{username:"Tom",content:"react\u633a\u597d\u7684"},{username:"Tom",content:"react\u592a\u96be\u4e86"}]},c}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.comments;return Object(c.jsxs)("div",{children:[Object(c.jsx)("header",{className:"site-header jumbotron",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-xs-12",children:Object(c.jsx)("h1",{children:"\u8bf7\u53d1\u8868\u5bf9React\u7684\u8bc4\u8bba"})})})})}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(h,{addComent:this.addComent}),Object(c.jsx)(b,{comments:e,deleteComent:this.deleteComent})]})]})}}]),n}(a.Component);r.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.13acd313.chunk.js.map