var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(e,o,n)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,a=(t,a)=>{for(var i in a||(a={}))e.call(a,i)&&r(t,i,a[i]);if(o)for(var i of o(a))n.call(a,i)&&r(t,i,a[i]);return t};import{m as i}from"./index.ca9fe9ec.js";import{d as p,e as s,D as c,f as l,o as m,j as d,t as u,u as f}from"./element-plus.2579b28f.js";var S=p({name:"Clock",props:{componentSetting:{type:Object,required:!0}},setup(t){var e;const o=s(n());function n(){const t=(new Date).getHours(),e=(new Date).getMinutes();return`${t}:${e<10?"0"+e:e}`}const r=(null==(e=t.componentSetting)?void 0:e.duration)||5e3,a=window.setInterval((()=>{o.value=n()}),r);c((()=>{window.clearInterval(a)}));const p=l((()=>i(t.componentSetting.position)));return{now:o,positionCSS:p}}});const g=f()(((t,e,o,n,r,i)=>(m(),d("div",{class:"wrapper",style:a({fontSize:t.componentSetting.textFontSize+"px",color:t.componentSetting.textColor,textShadow:t.componentSetting.textShadow,padding:t.componentSetting.padding+"px",fontFamily:t.componentSetting.fontFamily},t.positionCSS)},u(t.now),5))));S.render=g,S.__scopeId="data-v-a6b8f108";export default S;
