(self.webpackChunkcloud_openshift_com=self.webpackChunkcloud_openshift_com||[]).push([[494],{16494:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var s=n(30624),r=n.n(s),i=n(334),a=n(12167),o=n(24685),c=n(22248),h=n(33646),l=n(39666),d=n(90351),u=n(83626),m=n(9047),p=n(38080),f=n(69693),y=n(42282),g=n(79920),w=n(39167),P=n(43363),b=n(70318);u.V0.setAuthInterceptor(P.w),u.De.setRouteBasePath("/assisted-installer");class Z extends r().Component{constructor(...e){var t,n;super(...e),n={ready:!1},(t="state")in this?Object.defineProperty(this,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[t]=n}componentDidMount(){insights.chrome.init(),insights.chrome.identifyApp("").then((()=>{insights.chrome.appNavClick((0,p.Z)(window.location.pathname))})),insights.chrome.auth.getUser().then((e=>{w.h.dispatch((0,y._z)(e&&e.identity&&e.identity.user)),m.ZP.fetchConfig().then((()=>{w.h.dispatch((0,g.c)()),this.setState({ready:!0}),!m.ZP.override&&m.ZP.configData.sentryDSN&&(c.S1({dsn:m.ZP.configData.sentryDSN,integrations:[new d.x,new h.jK.GlobalHandlers({onerror:!0,onunhandledrejection:!1})]}),e&&e.identity&&e.identity.user&&l.e((t=>{const{email:n,username:s}=e.identity.user;t.setUser({email:n,username:s})})))}))}))}render(){const{ready:e}=this.state;return e?r().createElement(a.Provider,{store:w.h},r().createElement(o.ZP,{store:w.h}),r().createElement(i.BrowserRouter,{basename:(0,f.ZP)()},r().createElement(b.Z,null))):null}}const v=Z}}]);
//# sourceMappingURL=bundle.494.js.map