import{o as i,j as u,B as f,aj as v,ak as p,h as d,e as o,s as h,c as E}from"./runtime.B_cWVo4L.js";function T(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function n(r,t){var e=f;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&v)!==0,c=(t&p)!==0,a,_=!r.startsWith("<!>");return()=>{if(d)return n(o,null),o;a===void 0&&(a=T(_?r:"<!>"+r),e||(a=u(a)));var s=c?document.importNode(a,!0):a.cloneNode(!0);if(e){var m=u(s),l=s.lastChild;n(m,l)}else n(s,s);return s}}function M(r=""){if(!d){var t=i(r+"");return n(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=i()),h(e)),n(e,e),e}function x(){if(d)return n(o,null),o;var r=document.createDocumentFragment(),t=document.createComment(""),e=i();return r.append(t,e),n(t,e),r}function N(r,t){if(d){f.nodes_end=o,E();return}r!==null&&r.before(t)}export{N as a,n as b,x as c,T as d,M as e,y as t};
