(self.webpackChunkcloud_openshift_com=self.webpackChunkcloud_openshift_com||[]).push([[892],{49596:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l,getResourcesBase:()=>s,removeBaseName:()=>r});const{insights:{appname:a}}=n(4147),o=()=>`/beta/${a}`,r=e=>e.replace(new RegExp(`^${o()}`,"i"),""),s=()=>`/beta/apps/${a}`,l=o},58995:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(49596);function o(e){const t=(0,a.removeBaseName)(e).replace(/^\//,"").split("/");switch(t[0]){case"downloads":case"token":return{id:"downloads"};case"quota":return{id:t[1]||"openshift-quota",parentId:"subscriptions",secondaryNav:!0};case"subscriptions":return{id:t[1],parentId:"subscriptions",secondaryNav:!0};case"overview":case"releases":return{id:t[0]};default:return{id:""}}}},31611:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var a=n(92950),o=n.n(a),r=n(89117),s=n(40802);class l extends o().Component{constructor(){super(...arguments),this.state={}}componentDidCatch(e,t){this.setState({error:e.toString(),componentStack:t.componentStack}),s.$e((n=>{n.setExtras({componentStack:t.componentStack}),s.Tb(e)}))}render(){const{error:e,componentStack:t}=this.state;if(e)return o().createElement(r.EmptyState,null,o().createElement(r.Alert,{variant:"danger",isInline:!0,title:"Something went wrong"},o().createElement("div",{style:{whiteSpace:"pre-wrap",textAlign:"left",fontFamily:"monospace"}},e,t)));const{children:n}=this.props;return n}}const i=l},78913:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ENV_OVERRIDE_LOCALSTORAGE_KEY:()=>a,default:()=>r});const a="ocmOverridenEnvironment",o={};o.production=Promise.resolve().then(n.t.bind(n,68923,19)),o.stageSSO=Promise.resolve().then(n.t.bind(n,93723,19)),o.staging=Promise.resolve().then(n.t.bind(n,90860,19)),o.integration=Promise.resolve().then(n.t.bind(n,16706,19)),o.default=o.disabled;const r={configData:{},envOverride:void 0,fakeOSD:!1,loadConfig(e){var t;this.configData=Object.assign(Object.assign({},e),{apiGateway:e.apiGateway.replace("$SELF_PATH$",window.location.host),insightsGateway:(null===(t=e.insightsGateway)||void 0===t?void 0:t.replace("$SELF_PATH$",window.location.host))||void 0}),window.ocmConfig=this},fetchConfig(){const e=this;return new Promise((t=>{var n;(()=>{let e=!1;return window.location.search.substring(1).split("&").forEach((t=>{const[n,a]=t.split("=");"fake"===n&&"true"===a&&(e=!0)})),e})()&&(e.fakeOSD=!0);const r=(()=>{let e;return window.location.search.substring(1).split("&").forEach((t=>{const[n,a]=t.split("=");"env"===n&&o[a]?e=a:"env"===n&&"mockserver"===a&&o.mockdata&&(e="mockdata")})),e})()||localStorage.getItem(a);r&&o[r]?o[r].then((n=>{this.loadConfig(n),console.info(`Loaded override config: ${r}`),e.envOverride=r,localStorage.setItem(a,r),t()})):null===(n=o.default)||void 0===n||n.then((e=>{this.loadConfig(e),console.info("Loaded default config: disabled"),t()}))}))}}},89976:(e,t,n)=>{"use strict";n.r(t);var a=n(92950),o=n.n(a),r=n(12181),s=n.n(r),l=n(32750),i=n.n(l),c=(n(26398),n(334)),p=n(12167),m=(n(62869),n(90112)),d=(n(78913),n(58995),n(49596),n(98371),n(38432),n(35592)),u=n(53894),E=n(57283),h=n.n(E),R=n(10810),v=n(42358),Z=n(60532),g=n(12338),S=n(45048);const f=(0,v.lX)(),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.compose;(0,d.createStore)((0,g.aA)(f),w((0,d.applyMiddleware)((0,R.Z)(f),u.Z,h(),(0,Z.uv)(Object.assign({},{dispatchDefaultFailure:!1})),S.Z)));var P=n(34677),T=n(17420),_=n(27361),A=n.n(_),I=n(55140),b=n(58045),O=n(38951),k=n(22550),N=n(52654),F=n(67845),L=n(82543),y=n(83910),C=n(24208),z=n(63964),D=n(9989),x=n(68535),U=n(21722),j=n(82028),M=n(63224),G=n(26313),$=n(82125),H=n(55380),q=n(72958),W=n(29648),B=n(66555),K=n(91977),V=n(85698),Y=n(24152),Q=n(37878),X=n(77142),J=n(73968),ee=n(11598),te=n(97039),ne=n(81658),ae=n(73590),oe=n(15886),re=n(30532),se=n(61654),le=n(60059),ie=n(84329),ce=n(74357),pe=n(53506),me=n(84182),de=n(57227),ue=n(77738),Ee=n(79068),he=n(45447),Re=n(61008),ve=n(89171),Ze=n(52082),ge=n(88539),Se=n(61025),fe=n(40334),we=n(79217),Pe=n(21198),Te=n(60277),_e=n(98472),Ae=n(69220),Ie=n(41205),be=n(49943),Oe=n(77994),ke=n(507),Ne=n(23664),Fe=n(30832),Le=n(38352),ye=n(2454),Ce=n(20237),ze=n(51404),De=n(356),xe=n(79388),Ue=n(21262),je=n(52758),Me=n(52964),Ge=n(75631),$e=n(16551),He=n(59958),qe=n(81742),We=n(34110),Be=n(17888),Ke=n(12544),Ve=n(30116),Ye=n(96106);const{AssistedUiRouter:Qe}=m.OCM,Xe=(0,Fe.default)(Qe,Le.ASSISTED_INSTALLER_FEATURE),Je=(0,Fe.default)($.Z,Le.ASSISTED_INSTALLER_FEATURE,Ce.ZP);(0,p.connect)((e=>{const{cluster:t}=e.clusters.details;return{planType:A()(t,"subscription.plan.type",je.normalizedProducts.UNKNOWN),clusterId:A()(t,"subscription.cluster_id"),externalClusterId:A()(t,"subscription.external_cluster_id")}}))((0,c.withRouter)((({history:e,planType:t,clusterId:n,externalClusterId:r})=>{const{pathname:s}=(0,c.useLocation)(),{segment:{setPageMetadata:l}}=(0,I.Z)(),i=(0,Ye.useFeatureGate)(Le.HYPERSHIFT_WIZARD_FEATURE);return console.log("HYPERSHIFT_WIZARD_FEATURE is "+(i?"Enabled":"Disabled")),(0,a.useEffect)((()=>{l(Object.assign(Object.assign({},(0,Ve.Z)(s,t,n,r)),(0,Ve.b)()?{title:"404 Not Found"}:{}))}),[s,t,n,r,l]),o().createElement(o().Fragment,null,o().createElement(Ne.Z,null),o().createElement(T.ConnectedRouter,{history:e},o().createElement(O.Z,{apiRequest:P.Z},o().createElement(c.Switch,null,o().createElement(c.Redirect,{from:"/install/osp/installer-provisioned",to:"/install/openstack/installer-provisioned"}),o().createElement(c.Redirect,{from:"/install/crc/installer-provisioned",to:"/create/local"}),o().createElement(c.Redirect,{from:"/token/moa",to:"/token/rosa"}),o().createElement(c.Redirect,{from:"/insights",to:"/overview"}),o().createElement(c.Redirect,{from:"/subscriptions",to:"/quota"}),o().createElement(c.Route,{path:"/downloads",component:Ae.Z}),o().createElement(b.Z,{path:"/token/rosa/show",history:e,render:()=>o().createElement(o().Fragment,null,o().createElement(be.Z,{show:!0}),o().createElement(He.Z,null))}),o().createElement(b.Z,{path:"/token/rosa",history:e,render:()=>o().createElement(o().Fragment,null,o().createElement(be.Z,{show:!1,showPath:"/token/rosa/show"}),o().createElement(He.Z,null))}),o().createElement(c.Route,{path:"/token/show",render:()=>o().createElement(Ie.Z,{show:!0})}),o().createElement(c.Route,{path:"/token",render:()=>o().createElement(Ie.Z,{show:!1,showPath:"/token/show"})}),o().createElement(c.Route,{path:"/install/alibaba/installer-provisioned",component:z.ZP}),o().createElement(c.Route,{path:"/install/arm/installer-provisioned",component:xe.ZP}),o().createElement(c.Route,{path:"/install/arm/user-provisioned",component:Ue.ZP}),o().createElement(c.Route,{path:"/install/arm/pre-release",component:_e.ZP}),o().createElement(c.Route,{path:"/install/arm",component:De.Z}),o().createElement(c.Route,{path:"/install/aws/installer-provisioned",component:G.ZP}),o().createElement(c.Route,{path:"/install/aws/user-provisioned",component:M.ZP}),o().createElement(c.Route,{path:"/install/aws/arm/installer-provisioned",component:x.ZP}),o().createElement(c.Route,{path:"/install/aws/arm/user-provisioned",component:U.ZP}),o().createElement(c.Route,{path:"/install/aws/arm",component:D.Z}),o().createElement(c.Route,{path:"/install/aws",component:j.Z}),o().createElement(c.Route,{path:"/install/gcp/installer-provisioned",component:X.ZP}),o().createElement(c.Route,{path:"/install/gcp/user-provisioned",component:J.ZP}),o().createElement(c.Route,{path:"/install/gcp",component:Q.Z}),o().createElement(c.Route,{path:"/install/nutanix",exact:!0,component:ue.Z}),o().createElement(c.Route,{path:"/install/nutanix/installer-provisioned",component:ae.ZP}),o().createElement(c.Route,{path:"/install/openstack/installer-provisioned",component:re.ZP}),o().createElement(c.Route,{path:"/install/openstack/user-provisioned",component:se.ZP}),o().createElement(c.Route,{path:"/install/openstack",component:oe.Z}),o().createElement(c.Route,{path:"/install/rhv/installer-provisioned",component:ie.ZP}),o().createElement(c.Route,{path:"/install/rhv/user-provisioned",component:ce.ZP}),o().createElement(c.Route,{path:"/install/rhv",component:le.Z}),o().createElement(c.Route,{path:"/install/azure/arm/installer-provisioned",component:B.ZP}),o().createElement(c.Route,{path:"/install/azure/multi/installer-provisioned",component:te.ZP}),o().createElement(c.Route,{path:"/install/azure/installer-provisioned",component:V.ZP}),o().createElement(c.Route,{path:"/install/azure/user-provisioned",component:Y.ZP}),o().createElement(c.Route,{path:"/install/azure",exact:!0,component:K.Z}),o().createElement(c.Route,{path:"/install/azure-stack-hub/installer-provisioned",exact:!0,component:q.ZP}),o().createElement(c.Route,{path:"/install/azure-stack-hub/user-provisioned",exact:!0,component:W.ZP}),o().createElement(c.Route,{path:"/install/azure-stack-hub",exact:!0,component:H.Z}),o().createElement(c.Route,{path:"/install/metal/user-provisioned",component:Ce.ZP}),o().createElement(c.Route,{path:"/install/metal/installer-provisioned",component:ze.ZP}),o().createElement(c.Route,{path:"/install/metal/agent-based",component:ye.ZP}),o().createElement(c.Route,{path:"/install/metal",component:Je}),o().createElement(c.Route,{path:"/install/multi/pre-release",component:ne.ZP}),o().createElement(c.Route,{path:"/install/vsphere",exact:!0,component:Ee.Z}),o().createElement(c.Route,{path:"/install/vsphere/agent-based",component:pe.ZP}),o().createElement(c.Route,{path:"/install/vsphere/user-provisioned",component:me.ZP}),o().createElement(c.Route,{path:"/install/vsphere/installer-provisioned",component:de.ZP}),o().createElement(c.Route,{path:"/install/ibm-cloud",component:ee.ZP}),o().createElement(c.Route,{path:"/install/ibmz/user-provisioned",component:fe.ZP}),o().createElement(c.Route,{path:"/install/ibmz/pre-release",component:we.ZP}),o().createElement(c.Route,{path:"/install/power/user-provisioned",component:Pe.ZP}),o().createElement(c.Route,{path:"/install/power/pre-release",component:Te.ZP}),o().createElement(c.Route,{path:"/install/platform-agnostic/agent-based",component:Re.ZP}),o().createElement(c.Route,{path:"/install/platform-agnostic/user-provisioned",component:ve.ZP}),o().createElement(c.Route,{path:"/install/platform-agnostic",component:he.Z}),o().createElement(c.Route,{path:"/install/pre-release",component:Ze.ZP}),o().createElement(c.Route,{path:"/install/pull-secret",component:ge.ZP}),o().createElement(c.Route,{path:"/install/azure/aro-provisioned",component:Se.ZP}),o().createElement(c.Redirect,{from:"/install",to:"/create"}),o().createElement(c.Redirect,{from:"/create/osd/aws",to:"/create/osd"}),o().createElement(c.Redirect,{from:"/create/osd/gcp",to:"/create/osd"}),o().createElement(c.Redirect,{from:"/create/osdtrial/aws",to:"/create/osdtrial"}),o().createElement(c.Redirect,{from:"/create/osdtrial/gcp",to:"/create/osdtrial"}),o().createElement(b.Z,{path:"/create/osdtrial",gobackPath:"/create",render:()=>o().createElement(Ke.j,{product:je.normalizedProducts.OSDTrial}),history:e}),o().createElement(b.Z,{path:"/create/osd",gobackPath:"/create",component:Ke.j,history:e}),o().createElement(c.Route,{path:"/create/cloud",render:e=>o().createElement(L.Z,Object.assign({activeTab:"cloud"},e))}),o().createElement(c.Route,{path:"/create/datacenter",render:e=>o().createElement(L.Z,Object.assign({activeTab:"datacenter"},e))}),o().createElement(c.Route,{path:"/create/local",render:e=>o().createElement(L.Z,Object.assign({activeTab:"local"},e))}),o().createElement(c.Redirect,{from:"/create/rosa/welcome",to:"/create/rosa/getstarted"}),o().createElement(c.Route,{path:"/create/rosa/getstarted",component:$e.Z}),o().createElement(b.Z,{path:"/create/rosa/wizard",history:e,component:C.Z}),o().createElement(c.Route,{path:"/create",component:L.Z}),o().createElement(c.Route,{path:"/details/s/:id/insights/:reportId/:errorKey",component:qe.default}),o().createElement(c.Route,{path:"/details/s/:id/add-idp/:idpTypeName",component:Ge.Z}),o().createElement(c.Route,{path:"/details/s/:id/edit-idp/:idpName",render:({match:e})=>o().createElement(Ge.Z,{isEditForm:!0,match:e})}),o().createElement(c.Route,{path:"/details/s/:id",component:We.Z}),o().createElement(c.Route,{path:"/details/:id/insights/:reportId/:errorKey",component:qe.default}),o().createElement(c.Route,{path:"/details/:id",component:Be.Z}),o().createElement(c.Route,{path:"/register",component:y.Z}),o().createElement(c.Route,{path:"/quota/resource-limits",render:()=>o().createElement(ke.Z,{marketplace:!0})}),o().createElement(c.Route,{path:"/quota",component:ke.Z}),o().createElement(c.Route,{path:"/archived",component:F.Z}),o().createElement(c.Route,{path:"/overview",exact:!0,component:k.Z}),o().createElement(c.Route,{path:"/releases",exact:!0,component:Me.Z}),o().createElement(c.Route,{path:"/assisted-installer",component:Xe}),o().createElement(c.Route,{path:"/",exact:!0,component:N.Z}),o().createElement(c.Route,{component:Oe.Z})))))}))),n(31611),n(89117);const{Api:et,Config:tt}=m.OCM;et.setAuthInterceptor(P.w),tt.setRouteBasePath("/assisted-installer"),o().Component,Object.fromEntries||i().shim(),window.insights,s().render(o().createElement("div",{style:{margin:"25px"}},o().createElement("h1",null,"Unsupported environment"),o().createElement("h2",null,"OCM does not support this environment"),o().createElement("p",null,"Please use one of our supported environments."),o().createElement("p",null,"OCM is only being deployed to this environment to ensure navigation keeps working.")),document.getElementById("root"))},38432:(e,t,n)=>{"use strict";n.d(t,{R:()=>l}),n(91757);var a=n(38352),o=n(84353),r=n(40933);const s=(e,t)=>({name:t,action:()=>o.Z.selfFeatureReview(e).then((e=>e.data.enabled))}),l=[s("osd-trial",a.OSD_TRIAL_FEATURE),s("hypershift-creation-wizard",a.HYPERSHIFT_WIZARD_FEATURE),s("assisted-installer-sno",a.ASSISTED_INSTALLER_SNO_FEATURE),s("assisted-installer-ocs",a.ASSISTED_INSTALLER_OCS_FEATURE),s("assisted-installer-cnv",a.ASSISTED_INSTALLER_CNV_FEATURE),s("assisted-installer-merge-lists",a.ASSISTED_INSTALLER_MERGE_LISTS_FEATURE),s("assisted-installer-network-type-selection",a.ASSISTED_INSTALLER_NETWORK_TYPE_SELECTION_FEATURE),s("assisted-installer-platform-integration",a.ASSISTED_INSTALLER_PLATFORM_INTEGRATION_FEATURE),s("rosa-creation-wizard",a.ROSA_CREATION_WIZARD_FEATURE),{name:a.ASSISTED_INSTALLER_FEATURE,action:()=>Promise.all([o.Z.selfAccessReview({action:r.J.action.CREATE,resource_type:"BareMetalCluster"}),o.Z.selfFeatureReview("assisted-installer")]).then((([e,t])=>e.data.allowed&&t.data.enabled))}]},98371:(e,t,n)=>{"use strict";n.r(t),n.d(t,{getOrganizationAndQuota:()=>m,selfTermsReview:()=>d,userActions:()=>u,userInfoResponse:()=>l});var a=n(91757),o=n(51955),r=n(33047),s=n(11689);const l=e=>(0,a.action)(o.userConstants.USER_INFO_RESPONSE,e),i=e=>{var t,n;return{items:(null!==(n=null===(t=e.data)||void 0===t?void 0:t.items)&&void 0!==n?n:[]).map(s.ME)}},c=e=>r.accountsService.getOrganizationQuota(e).then(i),p=(e,t)=>{const n=[c(e),t?Promise.resolve({data:t}):r.accountsService.getOrganization(e)];return Promise.all(n).then((([e,t])=>({quota:e,organization:t.data})))},m=()=>(e,t)=>{var n;const{userProfile:s}=t(),l=(null==s?void 0:s.organization.fulfilled)?null===(n=null==s?void 0:s.organization)||void 0===n?void 0:n.details:void 0,i=null==l?void 0:l.id;var c;e((c=void 0!==i?p(i,l):r.accountsService.getCurrentAccount().then((e=>{var t,n;const a=null===(n=null===(t=e.data)||void 0===t?void 0:t.organization)||void 0===n?void 0:n.id;return void 0!==a?p(a):Promise.reject(Error("No organization"))})),(0,a.action)(o.userConstants.GET_ORGANIZATION,c)))},d=()=>(0,a.action)(o.userConstants.SELF_TERMS_REVIEW,r.authorizationsService.selfTermsReview()),u={userInfoResponse:l,getOrganizationAndQuota:m,processQuota:i,selfTermsReview:d}},97031:()=>{}}]);
//# sourceMappingURL=bundle.892.8a3c3b4de307366f.js.map