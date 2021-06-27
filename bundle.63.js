(self.webpackChunkcloud_openshift_com=self.webpackChunkcloud_openshift_com||[]).push([[63],{69693:(e,a,t)=>{"use strict";t.d(a,{uF:()=>o,ZP:()=>n});const{insights:r}=t(60306);function l(){return`/beta/${r.appname}`}function o(e){return e.replace(new RegExp(`^${l()}`,"i"),"")}const n=l},38080:(e,a,t)=>{"use strict";t.d(a,{Z:()=>l});var r=t(69693);function l(e){const a=e.replace(new RegExp(`^${(0,r.ZP)()}`,"i"),"");let t={};switch(a.split("/")[1]){case"quota":t={id:a.startsWith("/quota/resource-limits")?"resource-limits":"openshift-quota",parentId:"subscriptions",secondaryNav:!0};break;case"overview":t.id="overview";break;case"releases":t.id="releases";break;default:t.id=""}return t}},57063:(e,a,t)=>{"use strict";t.r(a);var r=t(30624),l=t.n(r),o=t(70695),n=t.n(o),i=(t(334),t(12167)),s=(t(96533),t(9431)),c=t(9047),b=(t(38080),t(69693),t(42282),t(79920),t(158),t(43363)),u=t(45697),v=t.n(u),d=t(50742),f=t(46568),h=t(83626);const p=({children:e})=>l().createElement(l().Fragment,null,c.ZP.override&&l().createElement(h.Z,{env:c.ZP.override}),l().createElement(f.Z,null,e||l().createElement(d.Z,null)));p.propTypes={children:v().oneOfType([v().arrayOf(v().node),v().node])},(0,i.connect)((e=>({userProfile:e.userProfile})))(p),s.V0.setAuthInterceptor(b.w),s.De.setRouteBasePath("/assisted-installer"),l().Component,window.insights,n().render(l().createElement("div",{style:{margin:"25px"}},l().createElement("h1",null,"Unsupported environment"),l().createElement("h2",null,"OCM does not support this environment"),l().createElement("p",null,"Please use one of our supported environments."),l().createElement("p",null,"OCM is only being deployed to this environment to ensure navigation keeps working.")),document.getElementById("root"))},79920:(e,a,t)=>{"use strict";t.d(a,{R:()=>n});var r=t(41447),l=t(6176);const o=(e,a)=>({name:a,action:()=>l.Z.selfFeatureReview(e).then((e=>e.data.enabled))}),n=[o("osd-trial",r.vC),o("assisted-installer-sno",r.Vs),o("assisted-installer-ocs",r.D9),o("assisted-installer-cnv",r.nc),o("assisted-installer-merge-lists",r.xf),{name:r.vu,action:()=>Promise.all([l.Z.selfAccessReview({action:"create",resource_type:"BareMetalCluster"}),l.Z.selfFeatureReview("assisted-installer")]).then((([e,a])=>e.data.allowed&&a.data.enabled))}]},42282:(e,a,t)=>{"use strict";t.d(a,{hI:()=>O,nh:()=>A,c3:()=>m});var r=t(27361),l=t.n(r),o=t(45205),n=t(85935),i=t(97875),s=t(94784);const c=(e,a)=>0===a.cost?1/0:Math.floor((e.allowed-e.consumed)/a.cost),b=(e,a,t)=>{const r=e,l=a.allowed-a.consumed;t.forEach((e=>{const{availability_zone_type:a,cloud_provider:t,resource_name:o,product:n,billing_model:i}=e,c="rhinfra"===e.byoc?"rhInfra":e.byoc;n!==s.Po.ROSA&&Object.entries(r).forEach((([e,r])=>{i!==e&&"any"!==i||Object.entries(r).forEach((([e,r])=>{n!==e&&n!==s.Po.ANY||Object.entries(r).forEach((([e,r])=>{t!==e&&"any"!==t||Object.entries(r).forEach((([e,t])=>{c!==e&&"any"!==c||Object.entries(t).forEach((([e,n])=>{`${a}Az`===e&&(n[o]=l,n.available+=l,t.totalAvailable+=l),"any"===a&&"totalAvailable"!==e&&(n[o]=l,n.available+=l,t.totalAvailable+=l/2),t.totalAvailable>0&&(r.isAvailable=!0)}))}))}))}))}))}))},u=(e,a,t)=>{const r=e,l=a.allowed-a.consumed;t.forEach((e=>{const{cloud_provider:a,resource_name:t,product:o,billing_model:n}=e,i="rhinfra"===e.byoc?"rhInfra":e.byoc;o!==s.Po.ROSA&&Object.entries(r).forEach((([r,c])=>{n!==r&&"any"!==n||Object.entries(c).forEach((([r,n])=>{o!==r&&o!==s.Po.ANY||Object.entries(n).forEach((([r,o])=>{a!==r&&"any"!==a||Object.entries(o).forEach((([a,r])=>{i!==a&&"any"!==i||(r[t]={available:l,cost:e.cost})}))}))}))}))}))},v=(e,a,t)=>{const r=e;t.forEach((e=>{const t=c(a,e),{availability_zone_type:l,cloud_provider:o,resource_name:n,product:i,billing_model:b="standard"}=e,u="rhinfra"===e.byoc?"rhInfra":e.byoc;Object.entries(r).forEach((([e,a])=>{b!==e&&"any"!==b||Object.entries(a).forEach((([e,a])=>{i!==e&&i!==s.Po.ANY||Object.entries(a).forEach((([e,a])=>{o!==e&&"any"!==o||Object.entries(a).forEach((([e,a])=>{u!==e&&"any"!==u||Object.entries(a).forEach((([e,a])=>{`${l}AZ`!==e&&"any"!==l||(a[n]=t)}))}))}))}))}))}))},d=(e,a,t)=>{const r=e;t.forEach((e=>{const t=c(a,e),{availability_zone_type:l,cloud_provider:o,resource_name:n,product:i,billing_model:b="standard"}=e,u="rhinfra"===e.byoc?"rhInfra":e.byoc;Object.entries(r).forEach((([e,a])=>{b!==e&&"any"!==b||Object.entries(a).forEach((([e,a])=>{i!==e&&i!==s.Po.ANY||Object.entries(a).forEach((([e,a])=>{o!==e&&"any"!==o||Object.entries(a).forEach((([e,a])=>{u!==e&&"any"!==u||Object.entries(a).forEach((([e,a])=>{`${l}AZ`!==e&&"any"!==l||(a[n]=t)}))}))}))}))}))}))},f=(e,a,t)=>{const r=e;t.forEach((e=>{const t=c(a,e);if(0===a.allowed&&e.cost>0)return;const{availability_zone_type:l,cloud_provider:o,resource_name:n,product:i,billing_model:b}=e,u="rhinfra"===e.byoc?"rhInfra":e.byoc;Object.entries(r).forEach((([e,a])=>{b!==e&&"any"!==b||Object.entries(a).forEach((([e,a])=>{i!==e&&i!==s.Po.ANY||Object.entries(a).forEach((([e,a])=>{o!==e&&"any"!==o||Object.entries(a).forEach((([e,r])=>{u!==e&&"any"!==u||Object.entries(r).forEach((([e,o])=>{`${l}Az`===e&&(o[n]=t,o.available+=t,r.totalAvailable+=t),"any"===l&&"totalAvailable"!==e&&(o[n]=t,o.available+=t,r.totalAvailable+=t/2),r.totalAvailable>0&&(a.isAvailable=!0)}))}))}))}))}))}))},h=()=>({items:[],clustersQuota:(()=>{const e={};return Object.values(s.F6).forEach((a=>{e[a]=(()=>{const e={};return Object.keys(s.vQ).forEach((a=>{e[a]={aws:{byoc:{singleAz:{available:0},multiAz:{available:0},totalAvailable:0},rhInfra:{singleAz:{available:0},multiAz:{available:0},totalAvailable:0},isAvailable:!1},gcp:{byoc:{singleAz:{available:0},multiAz:{available:0},totalAvailable:0},rhInfra:{singleAz:{available:0},multiAz:{available:0},totalAvailable:0},isAvailable:!1}}})),e})()})),e})(),nodesQuota:(()=>{const e={};return Object.values(s.F6).forEach((a=>{e[a]=(()=>{const e={};return Object.keys(s.vQ).forEach((a=>{e[a]={aws:{byoc:{available:0},rhInfra:{available:0}},gcp:{byoc:{available:0},rhInfra:{available:0}}}})),e})()})),e})(),storageQuota:(()=>{const e={};return Object.values(s.F6).forEach((a=>{e[a]=(()=>{const e={};return Object.keys(s.vQ).forEach((a=>{e[a]={aws:{byoc:{singleAZ:{available:0},multiAZ:{available:0}},rhInfra:{singleAZ:{available:0},multiAZ:{available:0}},isAvailable:!1},gcp:{byoc:{singleAZ:{available:0},multiAZ:{available:0}},rhInfra:{singleAZ:{available:0},multiAZ:{available:0}},isAvailable:!1}}})),e})()})),e})(),loadBalancerQuota:(()=>{const e={};return Object.values(s.F6).forEach((a=>{e[a]=(()=>{const e={};return Object.keys(s.vQ).forEach((a=>{e[a]={aws:{byoc:{singleAZ:{available:0},multiAZ:{available:0}},rhInfra:{singleAZ:{available:0},multiAZ:{available:0}},isAvailable:!1},gcp:{byoc:{singleAZ:{available:0},multiAZ:{available:0}},rhInfra:{singleAZ:{available:0},multiAZ:{available:0}},isAvailable:!1}}})),e})()})),e})(),addOnsQuota:(()=>{const e={};return Object.values(s.F6).forEach((a=>{e[a]=(()=>{const e={};return Object.keys(s.vQ).forEach((a=>{e[a]={aws:{byoc:{singleAz:{available:0},multiAz:{available:0},totalAvailable:0},rhInfra:{singleAz:{available:0},multiAz:{available:0},totalAvailable:0},isAvailable:!1},gcp:{byoc:{singleAz:{available:0},multiAz:{available:0},totalAvailable:0},rhInfra:{singleAz:{available:0},multiAz:{available:0},totalAvailable:0},isAvailable:!1}}})),e})()})),e})()}),p=e=>{const a=h(),t=l()(e.data,"items",[]).map(i.ME);return a.items=t,t.forEach((e=>{const t=l()(e,"related_resources",[]);if(!(t.length<1))switch(t[0].resource_type){case"cluster":b(a.clustersQuota,e,t);break;case"compute.node":u(a.nodesQuota,e,t);break;case"pv.storage":v(a.storageQuota,e,t);break;case"network.loadbalancer":d(a.loadBalancerQuota,e,t);break;case"add-on":f(a.addOnsQuota,e,t)}})),a},y=e=>n.BJ.getOrganizationQuota(e).then(p),A=()=>({payload:n.BJ.getCurrentAccount().then((e=>{const a=l()(e.data,"organization.id");if(void 0!==a){const e={quota:void 0,organization:void 0},t=[y(a).then((a=>{e.quota=a})),n.BJ.getOrganization(a).then((a=>{e.organization=a}))];return Promise.all(t).then((()=>e))}return Promise.reject(Error("No organization"))})),type:o.AQ.e_});function m(){return e=>e({type:o.AQ.Zu,payload:n.FR.selfTermsReview()})}const O={userInfoResponse:e=>({payload:e,type:o.AQ.LX}),getOrganizationAndQuota:A,processClusterQuota:b,processNodeQuota:u,processStorageQuota:v,processLoadBalancerQuota:d,processAddOnQuota:f,emptyQuota:h,processQuota:p,selfTermsReview:m}},158:(e,a,t)=>{"use strict";var r=t(35592),l=t(53894),o=t(57283),n=t.n(o),i=t(10810),s=t(90071),c=t(84885),b=t(18665),u=t(79932);function v(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function d(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const f=(0,s.lX)(),h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.compose;(0,r.createStore)((0,b.aA)(f),h((0,r.applyMiddleware)((0,i.Z)(f),l.Z,n(),(0,c.uv)(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?v(Object(t),!0).forEach((function(a){d(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},{dispatchDefaultFailure:!1})),u.Z)))}}]);
//# sourceMappingURL=bundle.63.js.map