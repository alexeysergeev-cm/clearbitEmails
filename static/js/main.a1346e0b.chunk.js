(this["webpackJsonpclearbit-proj"]=this["webpackJsonpclearbit-proj"]||[]).push([[0],{10:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(4),o=n.n(a),r=(n(9),n(2)),s=(n.p,n(10),n(11),n(0));var j=function(){var e=Object(c.useState)({name:""}),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)({link:""}),o=Object(r.a)(a,2),j=o[0],d=o[1],b=Object(c.useState)({position:""}),l=Object(r.a)(b,2),u=l[0],p=l[1],x=Object(c.useState)({company:""}),h=Object(r.a)(x,2),O=h[0],m=h[1],g=Object(c.useState)({e:""}),f=Object(r.a)(g,2),v=f[0],y=f[1],k=Object(c.useState)({text:""}),C=Object(r.a)(k,2);return C[0],C[1],Object(c.useEffect)((function(){var e;e="aeouiAEOIU".includes(u.position[0])?"an":"a",document.getElementById("indefinite-article").innerHTML=e}),[u]),Object(c.useEffect)((function(){var e;e={Mon:0,Tue:1,Wed:2,Thu:3,Fri:4}[Date().slice(0,3)]<3?"this":"next",document.getElementById("date").innerHTML=e})),Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("div",{style:{color:"White",fontSize:"40px",padding:"30px",fontWeight:"bold"},children:"ClearBit Emails"}),Object(s.jsxs)("div",{className:"inputs",children:[Object(s.jsxs)("div",{children:["Person name ",Object(s.jsx)("input",{type:"text",onChange:function(e){return i({name:e.target.value})},value:n.name})]}),Object(s.jsxs)("div",{children:["Person position ",Object(s.jsx)("input",{type:"text",onChange:function(e){return p({position:e.target.value})},value:u.position})]}),Object(s.jsxs)("div",{children:["Link to job post",Object(s.jsx)("input",{type:"text",onChange:function(e){return d({link:e.target.value})},value:j.link})]}),Object(s.jsxs)("div",{children:["Company name ",Object(s.jsx)("input",{type:"text",onChange:function(e){return m({company:e.target.value})},value:O.company})]}),Object(s.jsxs)("div",{children:["Experience required ",Object(s.jsx)("input",{type:"text",onChange:function(e){return y({e:e.target.value})},value:v.e})]})]}),Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"500px",margin:"20px",height:"50px"},children:[Object(s.jsx)("button",{onClick:function(){return i({name:""}),p({position:""}),d({link:""}),m({company:""}),y({e:""}),void(document.getElementById("copied").innerText="")},style:{background:"pink"},children:"Clear"}),Object(s.jsx)("div",{id:"copied"}),Object(s.jsx)("button",{onClick:function(){return function(){var e=document.getElementById("m-text"),t=document.createRange();t.selectNode(e);var n=window.getSelection();n.removeAllRanges(),n.addRange(t),document.execCommand("copy"),document.getElementById("copied").innerText="Copied!"}()},style:{background:"lightgreen"},children:"Copy to clipboard"})]}),Object(s.jsx)("div",{className:"main-text",style:{width:"600px"},children:Object(s.jsxs)("text",{id:"m-text",children:["Hi ",n.name,",",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"I noticed you are ",Object(s.jsx)("p",{id:"indefinite-article"})," ",u.position,"\xa0at ",O.company," and decided to personally reach out to see if you are the right person to talk about the role and company.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"I applied for a ",Object(s.jsx)("a",{href:j.link,target:"none",children:"Software Developer"})," position and believe I would be a good fit since I have the ",v.e," experience that your team is seeking (check out my ",Object(s.jsx)("a",{href:"https://ondesk.herokuapp.com/#/",target:"none",children:"Full Stack Project"})," and\xa0",Object(s.jsx)("a",{href:"https://alexeysergeev-cm.github.io/images/Resume%20-%20Alexey%20Sergeev.pdf",target:"none",children:"Resume"}),").",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Would you be free ",Object(s.jsx)("p",{id:"date"})," week for a quick zoom chat or phone call?",Object(s.jsx)("br",{}),"I appreciate your time.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Best Regards,",Object(s.jsx)("br",{}),"Alexey Sergeev",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{href:"https://alexeysergeev-cm.github.io",children:"Portfolio"}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{href:"https://github.com/alexeysergeev-cm",children:"Github"}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{href:"https://www.linkedin.com/in/alexey-sergeev-cm/",children:"LinkedIn"}),Object(s.jsx)("br",{})]})})]})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.a1346e0b.chunk.js.map