import{b as a,x as s,y as l,z as e,d as t,o as i,c as u,w as o,i as n,a as r,q as c,e as d,f as p,F as m,k as g,h as v}from"./index-V2zPcSSm.js";import{_}from"./uni-load-more.BvZcXIOw.js";import{g as f,h as y,i as h,j,o as k,a as w,k as x,r as L}from"./apis.CZnt2MuK.js";import{_ as b}from"./_plugin-vue_export-helper.BCo6x5W8.js";const z=b({__name:"classlist",setup(b){const z=a([]),q=a(!1),C={pageNum:1,pageSize:12};let F;f(a=>{let{id:l=null,name:e=null,type:t=null}=a;t&&(C.type=t),l&&(C.classid=l),F=e,s({title:e}),N()}),y(()=>{q.value||(C.pageNum++,N())});const N=async()=>{let a;C.classid&&(a=await h(C)),C.type&&(a=await j(C)),z.value=[...z.value,...a.data],z.value.forEach(a=>{a.image=a.smallPicurl}),C.pageSize>a.data.length&&(q.value=!0),l("storgClassList",z.value),console.log(z.value)};return k(a=>({title:"虾米壁纸-"+F,path:"/pages/classlist/classlist?id="+C.classid+"&name="+F})),w(()=>({title:"虾米壁纸-"+F,query:"id="+C.classid+"&name="+F})),x(()=>{e("storgClassList")}),(a,s)=>{const l=L(t("uni-load-more"),_),e=n,f=g,y=v;return i(),u(e,{class:"classlist"},{default:o(()=>[z.value.length||q.value?c("",!0):(i(),u(e,{key:0,class:"loadingLayout"},{default:o(()=>[r(l,{status:"loading"})]),_:1})),r(e,{class:"content"},{default:o(()=>[(i(!0),d(m,null,p(z.value,a=>(i(),u(y,{url:"/pages/preview/preview?id="+a._id,class:"item",key:a._id},{default:o(()=>[r(f,{src:a.smallPicurl,mode:"aspectFill"},null,8,["src"])]),_:2},1032,["url"]))),128))]),_:1}),z.value.length||q.value?(i(),u(e,{key:1,class:"loadingLayout"},{default:o(()=>[r(l,{status:q.value?"noMore":"loading"},null,8,["status"])]),_:1})):c("",!0),r(e,{class:"safe-area-inset-bottom"})]),_:1})}}},[["__scopeId","data-v-79f47846"]]);export{z as default};