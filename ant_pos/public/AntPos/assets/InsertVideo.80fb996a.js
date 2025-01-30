import{y as D,_ as v,D as h,a5 as C,f as u,B as k,H as B,K as w,g as t,w as i,R as x,i as r,o as c,n as y,a1 as n,t as U,A as N,N as g}from"./vendor.52e9d3a7.js";const A={name:"InsertImage",props:["editor"],expose:["openDialog"],data(){return{addVideoDialog:{url:"",file:null,show:!1}}},components:{Button:v,Dialog:h,FileUploader:C},methods:{openDialog(){this.addVideoDialog.show=!0},onVideoSelect(l){let o=l.target.files[0];!o||(this.addVideoDialog.file=o)},addVideo(l){this.editor.chain().focus().insertContent(`<video src="${l}"></video>`).run(),this.reset()},reset(){this.addVideoDialog=this.$options.data().addVideoDialog}}},F={class:"flex items-center space-x-2"},I=n(" Remove "),S=["src"],R=n(" Insert Video "),L=n("Cancel");function P(l,o,b,j,e,a){const s=r("Button"),p=r("FileUploader"),V=r("Dialog");return c(),u(x,null,[k(l.$slots,"default",B(w({onClick:a.openDialog}))),t(V,{options:{title:"Add Video"},modelValue:e.addVideoDialog.show,"onUpdate:modelValue":o[2]||(o[2]=d=>e.addVideoDialog.show=d),onAfterLeave:a.reset},{"body-content":i(()=>[t(p,{"file-types":"video/*",onSuccess:o[0]||(o[0]=d=>e.addVideoDialog.url=d.file_url)},{default:i(({file:d,progress:f,uploading:_,openFileSelector:m})=>[y("div",F,[t(s,{onClick:m},{default:i(()=>[n(U(_?`Uploading ${f}%`:e.addVideoDialog.url?"Change Video":"Upload Video"),1)]),_:2},1032,["onClick"]),e.addVideoDialog.url?(c(),N(s,{key:0,onClick:()=>{e.addVideoDialog.url=null,e.addVideoDialog.file=null}},{default:i(()=>[I]),_:2},1032,["onClick"])):g("",!0)])]),_:1}),e.addVideoDialog.url?(c(),u("video",{key:0,src:e.addVideoDialog.url,class:"mt-2 w-full rounded-lg",type:"video/mp4",controls:""},null,8,S)):g("",!0)]),actions:i(()=>[t(s,{variant:"solid",onClick:o[1]||(o[1]=d=>a.addVideo(e.addVideoDialog.url))},{default:i(()=>[R]),_:1}),t(s,{onClick:a.reset},{default:i(()=>[L]),_:1},8,["onClick"])]),_:1},8,["modelValue","onAfterLeave"])],64)}var E=D(A,[["render",P]]);export{E as default};
