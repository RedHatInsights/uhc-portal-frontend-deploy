(self.webpackChunkcloud_openshift_com=self.webpackChunkcloud_openshift_com||[]).push([[259],{67259:(e,t,n)=>{"use strict";n.r(t);var s=n(30624),r=n.n(s),i=n(70695),a=n.n(i),o=n(334),c=n(12167),h=n(24685),l=n(33646),d=n(22248),u=n(39666),m=n(90351),p=n(9431),y=n(9047),g=n(38080),f=n(69693),w=n(42282),P=n(79920),b=n(51659),Z=n(43363),v=n(72925);p.V0.setAuthInterceptor(Z.w),p.De.setRouteBasePath("/assisted-installer");class D extends r().Component{constructor(...e){var t,n;super(...e),n={ready:!1},(t="state")in this?Object.defineProperty(this,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[t]=n}componentDidMount(){insights.chrome.init(),insights.chrome.identifyApp("").then((()=>{insights.chrome.appNavClick((0,g.Z)(window.location.pathname))})),insights.chrome.auth.getUser().then((e=>{b.h.dispatch((0,w._z)(e&&e.identity&&e.identity.user)),y.ZP.fetchConfig().then((()=>{b.h.dispatch((0,P.c)()),this.setState({ready:!0}),!y.ZP.override&&y.ZP.configData.sentryDSN&&(d.S1({dsn:y.ZP.configData.sentryDSN,integrations:[new m.x,new l.jK.GlobalHandlers({onerror:!0,onunhandledrejection:!1})]}),e&&e.identity&&e.identity.user&&u.e((t=>{const{email:n,username:s}=e.identity.user;t.setUser({email:n,username:s})})))}))}))}render(){const{ready:e}=this.state;return e?r().createElement(c.Provider,{store:b.h},r().createElement(h.ZP,{store:b.h}),r().createElement(o.BrowserRouter,{basename:(0,f.ZP)()},r().createElement(v.Z,null))):null}}const E=D;window.insights,a().render(r().createElement(E,null),document.getElementById("root"))}}]);
//# sourceMappingURL=bundle.259.js.map