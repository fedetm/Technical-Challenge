(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(14),o=n.n(a),i=(n(25),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))}),d=(n(26),n(15)),s=n(16),h=n(20),l=n(19),j=n(17),u=n(2),b=(n(27),n(1)),O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={user:"",order:"",product:""},e.userChangeHandler=function(t){e.setState({user:t.target.value})},e.orderChangeHandler=function(t){e.setState({order:t.target.value})},e.productChangeHandler=function(t){e.setState({product:t.target.value})},e.handleOrder=function(t){console.log("Preparando la orden!"),t.preventDefault();var n=e.state;fetch("http://127.0.0.1:5000/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}),window.location="http://127.0.0.1:5000/"+e.state.user},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("head",{children:[Object(b.jsx)("meta",{charset:"UTF-8"}),Object(b.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),Object(b.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),Object(b.jsxs)("header",{className:"Home-header",children:[Object(b.jsx)("link",{rel:"stylesheet",href:"./home.css"}),Object(b.jsx)("title",{children:"Home Page"}),Object(b.jsx)("h1",{children:"Bienvenido a nuestra tienda"})]}),Object(b.jsx)("body",{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(u.c,{children:Object(b.jsx)(u.a,{exact:!0,path:"/",children:Object(b.jsxs)("form",{class:"form",onSubmit:this.handleOrder,children:[Object(b.jsx)("label",{for:"usuario",children:"Usuario"}),Object(b.jsx)("form",{action:"/",method:"POST",children:Object(b.jsx)("input",{type:"text",onChange:this.userChangeHandler,name:"content",id:"usuario"})}),Object(b.jsx)("label",{for:"orden",children:"Orden"}),Object(b.jsx)("form",{action:"/",method:"POST",children:Object(b.jsx)("input",{type:"text",onChange:this.orderChangeHandler,name:"content",id:"orden"})}),Object(b.jsx)("label",{for:"producto",children:"Producto"}),Object(b.jsx)("form",{action:"/",method:"POST",children:Object(b.jsx)("input",{type:"text",onChange:this.productChangeHandler,name:"content",id:"producto"})}),Object(b.jsx)("button",{variant:"primary",children:"Comprar"})]})})})})})]})}}]),n}(r.Component);o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),i()}},[[34,1,2]]]);
//# sourceMappingURL=main.c7be989b.chunk.js.map