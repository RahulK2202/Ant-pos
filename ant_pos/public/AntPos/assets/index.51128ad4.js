var _=(s,o,r)=>new Promise((t,e)=>{var n=c=>{try{u(r.next(c))}catch(f){e(f)}},i=c=>{try{u(r.throw(c))}catch(f){e(f)}},u=c=>c.done?t(c.value):Promise.resolve(c.value).then(n,i);u((r=r.apply(s,o)).next())});import{c as m,r as h,a as v,b as P,d as b,_ as E,e as k,f as A,g as I,o as O,h as R,s as w,i as C,j as S,C as $,I as j,k as H}from"./vendor.b82488dc.js";const N=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}};N();const U="modulepreload",L={},q="/assets/ant_pos/AntPos/",y=function(o,r){return!r||r.length===0?o():Promise.all(r.map(t=>{if(t=`${q}${t}`,t in L)return;L[t]=!0;const e=t.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${n}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":U,e||(i.as="script",i.crossOrigin=""),i.href=t,document.head.appendChild(i),e)return new Promise((u,c)=>{i.addEventListener("load",u),i.addEventListener("error",c)})})).then(()=>o())},p=m({url:"frappe.auth.get_logged_user",cache:"User",onError(s){s&&s.exc_type==="AuthenticationError"&&d.push({name:"LoginPage"})}});function g(){let o=new URLSearchParams(document.cookie.split("; ").join("&")).get("user_id");return o==="Guest"&&(o=null),o}const l=h({login:m({url:"login",makeParams({email:s,password:o}){return{usr:s,pwd:o}},onSuccess(s){p.reload(),l.user=g(),l.login.reset(),d.replace(s.default_route||"/")}}),logout:m({url:"logout",onSuccess(){p.reset(),l.user=g(),d.replace({name:"Login"})}}),user:g(),isLoggedIn:v(()=>!!l.user)}),x=[{path:"/",name:"Home",component:()=>y(()=>import("./Home.5b4b18d3.js"),["assets/Home.5b4b18d3.js","assets/vendor.b82488dc.js","assets/vendor.1875b906.css"])},{name:"Login",path:"/account/login",component:()=>y(()=>import("./Login.bd7d6682.js"),["assets/Login.bd7d6682.js","assets/vendor.b82488dc.js","assets/vendor.1875b906.css"])}];let d=P({history:b("/AntPos"),routes:x});d.beforeEach((s,o,r)=>_(void 0,null,function*(){let t=l.isLoggedIn;try{yield p.promise}catch(e){t=!1}s.name==="Login"&&t?r({name:"Home"}):s.name!=="Login"&&!t?r({name:"Login"}):r()}));const B={};function V(s,o){const r=I("router-view");return O(),k("div",null,[A(r)])}var D=E(B,[["render",V]]);const a=R(D);w("resourceFetcher",H);a.use(d);a.use(C);a.component("Button",S);a.component("Card",$);a.component("Input",j);const F=h({Ant_Opening_Shift:{}});a.provide("base",F);a.mount("#app");export{y as _,l as s};
