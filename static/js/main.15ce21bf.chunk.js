(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,s){},,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),n=s(8),a=s.n(n),l=s(3),r=(s(16),s(42)),o=s(43),j=s(44),d=s(0);function h(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(d.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("a",{href:"#intro",className:"logo",children:"Hey."}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(r.a,{className:"icon"}),Object(d.jsx)("span",{children:"+91 86045 93086"})]}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(o.a,{className:"icon"}),Object(d.jsx)("span",{children:"samarthsignhh@gmail.com"})]}),Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsx)(j.a,{className:"icon"}),Object(d.jsx)("span",{children:Object(d.jsx)("a",{href:"https://drive.google.com/file/d/1bNwC1yVAlxPwTzFJ2jwWSiRMMxwY2ggI/view?usp=sharing",children:"Resume"})})]})]}),Object(d.jsx)("div",{className:"right",children:Object(d.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(d.jsx)("span",{className:"line1"}),Object(d.jsx)("span",{className:"line2"}),Object(d.jsx)("span",{className:"line3"})]})})]})})}s(22);var b=s(10);function m(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(b.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Coding","Web Developing"]})}),[]),Object(d.jsxs)("div",{className:"intro",id:"intro",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:"assets/man.png",alt:""})})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h2",{children:"Hi There, I'm"}),Object(d.jsx)("h1",{children:"Samarth Pratap Singh"}),Object(d.jsxs)("h3",{children:["I do ",Object(d.jsx)("span",{ref:e})]})]}),Object(d.jsx)("a",{href:"#portfolio",children:Object(d.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}s(23);function u(e){var t=e.id,s=e.title,i=e.active,c=e.setSelected;return Object(d.jsx)("li",{className:i?"portfolioList active":"portfolioList",onClick:function(){return c(t)},children:s})}s(24);var p=[{id:1,title:"Edu Hub",link:"https://educationhhub.000webhostapp.com/index.html",img:"assets/edu.png?compress=1&resize=1200x900"},{id:2,title:"Parking Lot",img:"assets/park.jpg?compress=1&resize=1200x900"},{id:3,title:"GTA Simulation",link:"https://gtas-21c0f.web.app/",img:"assets/gta.png?compress=1&resize=1200x900"},{id:4,title:"Network simulation",link:"https://github.com/samarth207/ns-2-basic-simulations-.git",img:"assets/ns2.png?compress=1&resize=1200x900"},{id:5,title:"LeetCode",link:"https://leetcode.com/samthedude4321/",img:"assets/leetcode.png"},{id:6,title:"GitHub",link:"https://github.com/samarth207",img:"assets/git.jpg"}],O=[{id:1,title:"Edu Hub",link:"https://educationhhub.000webhostapp.com/index.html",img:"assets/edu.png?compress=1&resize=1200x900"}],x=[{id:1,title:"Network Simulation",link:"https://gtas-21c0f.web.app/",img:"assets/ns2.png?compress=1&resize=1200x900"},{id:2,title:"GTA simulation",link:"https://gtas-21c0f.web.app/",img:"assets/gta.png?compress=1&resize=1200x900"}],g=[{id:1,title:"LeetCode",link:"https://leetcode.com/samthedude4321/",img:"assets/leetcode.png"},{id:2,title:"GitHub",link:"https://github.com/samarth207",img:"assets/git.jpg"}];function f(){var e=Object(i.useState)("all"),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(i.useState)([]),a=Object(l.a)(n,2),r=a[0],o=a[1];return Object(i.useEffect)((function(){switch(s){case"all":o(p);break;case"web":o(O);break;case"simulating":o(x);break;case"coding":o(g);break;default:o(p)}}),[s]),Object(d.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(d.jsx)("h1",{children:"Portfolio"}),Object(d.jsx)("ul",{children:[{id:"all",title:"All"},{id:"web",title:"Web App"},{id:"simulating",title:"Simulations"},{id:"coding",title:"Coding"}].map((function(e){return Object(d.jsx)(u,{title:e.title,active:s===e.id,setSelected:c,id:e.id})}))}),Object(d.jsx)("div",{className:"container",children:r.map((function(e){return Object(d.jsx)("a",{href:e.link,target:"_blank",children:Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("img",{src:e.img,alt:""}),Object(d.jsx)("h3",{children:e.title})]})})}))})]})}s(25);function v(){var e=Object(i.useState)(0),t=Object(l.a)(e,2),s=t[0],c=t[1],n=[{id:"1",icon:"./assets/mobile.png",title:"EduHub",desc:"A site for student of BCA student which has subject wise all notes, topic wise videos and question papers. ",img:"../assets/edu2.png",link:"https://educationhhub.000webhostapp.com/index.html"},{id:"2",icon:"./assets/globe.png",title:"Graph Simulation",desc:"A site to simulate various graph algorithms visually like DFS, BFS, Dijkstra, MST .IT also have covid simulation.",img:"../assets/gta2.png",link:"https://gtas-21c0f.web.app/"},{id:"3",icon:"./assets/writing.png",title:"Network Simulation",desc:"Simulated and analyzed packet delay ratio, throughput, End-to-End delay of various network topologies with the help of NAM and Xgraph.",img:"../assets/ns22.png",link:"https://github.com/samarth207/ns-2-basic-simulations-.git"}],a=function(e){c("left"===e?s>0?s-1:2:s<n.length-1?s+1:0)};return Object(d.jsxs)("div",{className:"works",id:"works",children:[Object(d.jsx)("h1",{style:{position:"absolute",top:"50px",color:"white",fontFamily:"arial",fontWeight:"600",fontSize:"45px"},children:"Featured"}),Object(d.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*s,"vw)")},children:n.map((function(e){return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsxs)("div",{className:"leftContainer",children:[Object(d.jsx)("div",{className:"imgContainer",children:Object(d.jsx)("img",{src:e.icon,alt:""})}),Object(d.jsx)("h2",{children:e.title}),Object(d.jsx)("p",{children:e.desc}),Object(d.jsx)("a",{href:e.link,target:"_blank",children:Object(d.jsx)("span",{children:"Project Link"})})]})}),Object(d.jsx)("div",{className:"right",children:Object(d.jsx)("img",{src:e.img,alt:""})})]})})}))}),Object(d.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"",onClick:function(){return a("left")}}),Object(d.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"",onClick:function(){return a()}})]})}s(26);function k(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),s=t[0],c=t[1];return Object(d.jsxs)("div",{className:"contact",id:"contact",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("img",{src:"assets/shake.svg",alt:""})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("h2",{children:"Contact."}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0)},children:[Object(d.jsx)("input",{type:"email",placeholder:"Email",required:!0}),Object(d.jsx)("textarea",{placeholder:"Message",required:!0}),Object(d.jsx)("button",{type:"submit",children:"Send"}),s&&Object(d.jsx)("span",{children:"Thanks, I'll reply ASAP :)"})]})]})]})}s(27),s(28);function N(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(d.jsx)("div",{className:"menu "+(t&&"active"),children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#intro",children:"Home"})}),Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#works",children:"Works"})}),Object(d.jsx)("li",{onClick:function(){return s(!1)},children:Object(d.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var w=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),s=t[0],c=t[1];return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(h,{menuOpen:s,setMenuOpen:c}),Object(d.jsx)(N,{menuOpen:s,setMenuOpen:c}),Object(d.jsxs)("div",{className:"sections",children:[Object(d.jsx)(m,{}),Object(d.jsx)(f,{}),Object(d.jsx)(v,{}),Object(d.jsx)(k,{})]})]})};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.15ce21bf.chunk.js.map