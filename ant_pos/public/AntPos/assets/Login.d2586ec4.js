import{a0 as c,f as m,g as e,w as n,i as t,o as u,n as p,u as f,S as _,a1 as w}from"./vendor.52e9d3a7.js";import{s as r}from"./index.bc062a8d.js";const g={class:"m-3 flex flex-row items-center justify-center"},x=["onSubmit"],h=w("Login"),B=c({setup(b){function l(a){let o=new FormData(a.target);r.login.submit({email:o.get("email"),password:o.get("password")})}return(a,o)=>{const s=t("Input"),i=t("Button"),d=t("Card");return u(),m("div",g,[e(d,{title:"Login to your FrappeUI App!",class:"w-full max-w-md mt-4"},{default:n(()=>[p("form",{class:"flex flex-col space-y-2 w-full",onSubmit:_(l,["prevent"])},[e(s,{required:"",name:"email",type:"text",placeholder:"johndoe@email.com",label:"User ID"}),e(s,{required:"",name:"password",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022",label:"Password"}),e(i,{loading:f(r).login.loading,variant:"solid"},{default:n(()=>[h]),_:1},8,["loading"])],40,x)]),_:1})])}}});export{B as default};
