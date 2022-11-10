(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3264)}])},3264:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var l=s(5893),n=s(7294);let a=e=>{let{issues:t,handleAddIssue:s}=e,[a,i]=(0,n.useState)(""),[r,c]=(0,n.useState)(""),[o,u]=(0,n.useState)(""),[d,x]=(0,n.useState)(""),p=async e=>{e.preventDefault();let t=await fetch("/api/issues/create",{method:"POST",body:JSON.stringify({issueSubject:a,issueDescription:r,issueSeverity:o,issueFromUser:d}),headers:{"Content-Type":"application/json"}}),l=await t.json();console.log(l),i(""),c(""),u(""),x(""),s()};return(0,l.jsx)("div",{className:"container mx-auto bg-slate-200 rounded-lg mb-10",children:(0,l.jsxs)("form",{className:"form-control gap-10 p-10 w-3/4 mx-auto ",id:"issueInputForm",onSubmit:p,children:[(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)("label",{className:"font-bold text-2xl",htmlFor:"issueSubjectInput",children:"Subject"}),(0,l.jsx)("input",{required:!0,onChange:e=>i(e.target.value),value:a,id:"issueSubjectInput",type:"text",placeholder:"Issue Subject...",className:"input input-bordered w-full"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)("label",{className:"font-bold text-2xl",htmlFor:"issueDescInput",children:"Description"}),(0,l.jsx)("input",{required:!0,onChange:e=>c(e.target.value),value:r,id:"issueDescInput",type:"text",placeholder:"Issue Description...",className:"input input-bordered w-full"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)("label",{className:"font-bold text-2xl",htmlFor:"issueSeverityInput",children:"Severity"}),(0,l.jsxs)("select",{required:!0,onChange:e=>u(e.target.value),defaultValue:"DEFAULT",id:"issueSeverityInput",className:"select select-bordered w-full",children:[(0,l.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Please choose an option"}),(0,l.jsx)("option",{value:"Low",children:"Low"}),(0,l.jsx)("option",{value:"Medium",children:"Medium"}),(0,l.jsx)("option",{value:"High",children:"High"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsx)("label",{className:"font-bold text-2xl",htmlFor:"issueFromUserInput",children:"Enter Name"}),(0,l.jsx)("input",{required:!0,onChange:e=>x(e.target.value),value:d,id:"issueFromUserInput",type:"text",placeholder:"User name...",className:"input input-bordered w-full"})]}),(0,l.jsx)("button",{className:"btn",children:"Add"})]})})};var i=s(9583);let r=e=>{let{issue:t,handleDeleteIssue:s,handleCloseIssue:n}=e;return(0,l.jsxs)("div",{className:"bg-slate-100 rounded-lg text-black flex flex-col p-4 gap-2 items-start",children:[(0,l.jsxs)("p",{children:["Issue ID: ",t._id]}),(0,l.jsx)("p",{className:"".concat("Open"===t.status?"bg-sky-400 rounded px-5 text-white":"bg-lime-500 rounded py-1 px-6 text-white"),children:t.status}),(0,l.jsx)("p",{className:"text-xl font-bold",children:t.issueSubject}),(0,l.jsx)("p",{children:t.issueDescription}),(0,l.jsxs)("div",{className:"flex gap-4",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(i.fSQ,{}),(0,l.jsx)("span",{children:t.issueSeverity})]}),(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(i.$yZ,{}),(0,l.jsx)("span",{children:t.issueFromUser})]})]}),(0,l.jsxs)("div",{className:"flex gap-2",children:[(0,l.jsx)("button",{onClick:()=>n(t._id),className:"btn bg-amber-300 text-white",children:"Close"}),(0,l.jsx)("button",{onClick:()=>s(t._id),className:"btn bg-red-500 text-white",children:"Delete"})]})]})},c=e=>{let{issues:t,handleDeleteIssue:s,handleCloseIssue:n}=e;return(console.log(t),t.length>0)?(0,l.jsx)("div",{className:"flex flex-col gap-10",children:t.map((e,t)=>(0,l.jsx)(r,{handleCloseIssue:n,handleDeleteIssue:s,issue:e},e._id))}):(0,l.jsx)("div",{children:"No issues created"})},o=()=>{let[e,t]=(0,n.useState)([]);(0,n.useEffect)(()=>{let e=async()=>{let e=await fetch("/api/issues"),s=await e.json();t(s)};e()},[]);let s=async s=>{console.log("deleted issue ".concat(s));let l=await fetch("/api/issues/".concat(s),{method:"DELETE"});await l.json(),t(e.filter(e=>e._id!==s))},i=async e=>{console.log(e);let s=await fetch("/api/issues/".concat(e),{method:"PUT",body:e}),l=await s.json();t(l)},r=()=>{let e=async()=>{let e=await fetch("/api/issues"),s=await e.json();t(s)};e()};return(0,l.jsxs)("div",{className:"container mx-auto",children:[(0,l.jsx)("h1",{className:"text-3xl my-10",children:"Submit a ticket here"}),(0,l.jsx)(a,{handleAddIssue:r,issues:e,setIssues:t}),(0,l.jsx)(c,{handleDeleteIssue:s,handleCloseIssue:i,issues:e})]})};var u=o},8357:function(e,t,s){"use strict";s.d(t,{w_:function(){return c}});var l=s(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=l.createContext&&l.createContext(n),i=function(){return(i=Object.assign||function(e){for(var t,s=1,l=arguments.length;s<l;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},r=function(e,t){var s={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(s[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>t.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(s[l[n]]=e[l[n]]);return s};function c(e){return function(t){return l.createElement(o,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,s){return l.createElement(t.tag,i({key:s},t.attr),e(t.child))})}(e.child))}}function o(e){var t=function(t){var s,n=e.attr,a=e.size,c=e.title,o=r(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),l.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,o,{className:s,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&l.createElement("title",null,c),e.children)};return void 0!==a?l.createElement(a.Consumer,null,function(e){return t(e)}):t(n)}}},function(e){e.O(0,[445,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);