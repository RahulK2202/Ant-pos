var x=(O,u,l)=>new Promise((n,i)=>{var c=t=>{try{d(l.next(t))}catch(m){i(m)}},p=t=>{try{d(l.throw(t))}catch(m){i(m)}},d=t=>t.done?n(t.value):Promise.resolve(t.value).then(c,p);d((l=l.apply(O,u)).next())});import{r as C,e as v,m as U,c as y,U as A,o as b,A as T,w as f,n as r,g as _,u as s,x as g,f as h,R as B,O as E,t as z,N as M,_ as P,D as F,a1 as V}from"./vendor.52e9d3a7.js";const G=r("h3",null,"Create ANT Opening Shift",-1),R={class:"flex flex-col gap-8"},$={key:0},L={class:"border-2"},q=r("div",{class:"p-2 flex justify-between"},[r("div",{class:"text-center"},"Mode Of Payment"),V(" Opening Amount ")],-1),H={class:"w-1/2"},I={class:""},J=V("Confirm"),K=V("Close"),X={setup(O){const u=C({company:[],profile:{}}),l=v(!1),n=v({}),i=v({}),c=v([]),p=C({});let d=U("base");const t=()=>{D.fetch()},m=y({url:"ant_pos.ant_pos.api.pos_profile.create_opening",method:"POST",onSuccess(a){}}),k=()=>x(this,null,function*(){const a={company:n.value.value||null,pos_profile:i.value.value||null,status:"Open",opening_balance_details:c.value.map(e=>({mode_of_payment:e,opening_amount:p[e]||0}))};try{yield m.submit({values:a}),console.log("Submitted Data:",a),t()}catch(e){errorMessage.value="Failed to submit data. Please try again.",console.error("Submission Error:",e)}finally{}}),j=()=>{if(S()){const e=u.profile[n.value.value].find(o=>o.name===i.value.value);return e?e.modes_of_payment:[]}return[]},S=()=>{const a=u.profile[n.value.value];return a?a.map(e=>e.name):[]},w=()=>{y({url:"ant_pos.ant_pos.api.pos_profile.get_pos_profiles_by_company",method:"GET",onSuccess(e){e&&typeof e=="object"&&(u.company=Object.keys(e),u.profile=e)}}).fetch(),l.value=!0},D=y({url:"ant_pos.ant_pos.api.pos_profile.get_openingshift",method:"GET",auto:!0,onSuccess(a){a?(Object.assign(d,a),l.value=!1):w()}});return A(i,(a,e)=>{a.value!==e.value&&(c.value=j())}),(a,e)=>(b(),T(s(F),{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value=o),onClose:t},{"body-title":f(()=>[G]),"body-content":f(()=>[r("div",R,[_(s(g),{type:"autocomplete",options:s(u).company.map(o=>({label:o,value:o})),size:"sm",variant:"subtle",placeholder:"Select Company",label:"Company",modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=o=>n.value=o),"hide-search":"true"},null,8,["options","modelValue"]),_(s(g),{type:"autocomplete",options:S(),size:"sm",variant:"subtle",placeholder:"Select POS Profile",disabled:!n.value,label:"POS Profile",modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=o=>i.value=o),"hide-search":"true"},null,8,["options","disabled","modelValue"]),c.value.length?(b(),h("div",$,[r("div",L,[q,(b(!0),h(B,null,E(c.value,o=>(b(),h("div",{class:"flex justify-between p-2 border-t-2",key:o},[r("div",H,z(o),1),r("div",I,[_(s(g),{type:"number",size:"sm",variant:"subtle",placeholder:"Opening Amount",name:o,modelValue:s(p)[o],"onUpdate:modelValue":N=>s(p)[o]=N},null,8,["name","modelValue","onUpdate:modelValue"])])]))),128))])])):M("",!0)])]),actions:f(()=>[_(s(P),{variant:"solid",onClick:k},{default:f(()=>[J]),_:1}),_(s(P),{class:"ml-2",onClick:t},{default:f(()=>[K]),_:1})]),_:1},8,["modelValue"]))}};export{X as default};
