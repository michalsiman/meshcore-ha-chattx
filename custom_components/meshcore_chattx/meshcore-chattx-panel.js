/*! meshcore-chattx-panel v0.17.1 */
let e,t,o,i,r,s,a,n,l,d,c,h,p,u,m,g,v,f,y,_,b,x,w,k,$,C,B,S,F,A,M,D,E,P,z,I,R,O,T,L,N,q,j,H,U,V,K,W,X,G,Y,Q,Z,J,ee,te,oe,ie,re,se,ae,ne,le,de,ce,he,pe,ue,me,ge,ve,fe,ye,_e,be,xe,we,ke,$e,Ce,Be,Se,Fe,Ae,Me,De,Ee,Pe,ze,Ie,Re,Oe,Te,Le,Ne,qe,je,He,Ue,Ve,Ke,We,Xe,Ge,Ye,Qe,Ze,Je,et,tt,ot,it,rt,st,at,nt,lt,dt,ct,ht,pt,ut,mt,gt,vt,ft,yt,_t,bt,xt,wt,kt,$t,Ct,Bt,St,Ft,At,Mt,Dt,Et,Pt,zt,It,Rt,Ot,Tt,Lt,Nt,qt,jt,Ht,Ut,Vt,Kt,Wt,Xt,Gt,Yt,Qt,Zt,Jt,eo,to,oo,io,ro,so,ao,no,lo,co,ho,po,uo,mo,go,vo,fo,yo,_o,bo,xo,wo,ko,$o,Co,Bo,So,Fo,Ao,Mo,Do,Eo,Po,zo,Io,Ro,Oo,To,Lo,No,qo,jo,Ho,Uo,Vo,Ko,Wo,Xo,Go,Yo,Qo,Zo,Jo,ei,ti,oi,ii,ri,si,ai,ni,li,di,ci,hi,pi,ui,mi,gi,vi,fi,yi,_i,bi,xi,wi,ki,$i,Ci,Bi,Si,Fi,Ai,Mi,Di,Ei,Pi,zi,Ii,Ri,Oi,Ti,Li,Ni,qi,ji,Hi,Ui,Vi,Ki,Wi,Xi,Gi,Yi,Qi,Zi,Ji,er,tr,or,ir,rr,sr,ar,nr,lr,dr,cr,hr,pr,ur,mr,gr,vr,fr,yr,_r,br,xr,wr,kr,$r,Cr,Br,Sr,Fr,Ar,Mr,Dr,Er,Pr,zr,Ir,Rr,Or,Tr,Lr,Nr,qr,jr,Hr,Ur,Vr,Kr,Wr,Xr,Gr,Yr,Qr,Zr,Jr,es,ts,os,is,rs,ss,as,ns,ls,ds,cs,hs,ps,us,ms,gs,vs,fs,ys,_s,bs,xs,ws,ks,$s,Cs,Bs,Ss,Fs,As,Ms,Ds,Es,Ps,zs,Is,Rs,Os,Ts,Ls,Ns,qs,js,Hs,Us,Vs,Ks,Ws,Xs,Gs,Ys,Qs,Zs,Js,ea,ta,oa,ia,ra,sa,aa,na,la,da,ca,ha,pa,ua,ma,ga,va,fa,ya,_a,ba,xa,wa,ka,$a,Ca,Ba,Sa,Fa,Aa,Ma,Da,Ea,Pa,za,Ia,Ra,Oa,Ta,La,Na,qa,ja,Ha,Ua,Va,Ka,Wa,Xa,Ga,Ya,Qa,Za,Ja,en,tn,on,rn,sn,an,nn,ln,dn,cn,hn,pn,un,mn,gn,vn,fn,yn,_n,bn,xn,wn,kn,$n,Cn,Bn,Sn,Fn,An,Mn,Dn,En,Pn,zn,In,Rn,On,Tn,Ln,Nn,qn,jn,Hn,Un,Vn,Kn,Wn,Xn,Gn,Yn,Qn,Zn,Jn,el,tl,ol,il,rl,sl,al,nl,ll,dl,cl,hl,pl,ul,ml,gl,vl,fl,yl,_l,bl,xl,wl,kl,$l,Cl,Bl,Sl,Fl,Al,Ml,Dl,El,Pl,zl,Il,Rl,Ol,Tl,Ll,Nl,ql,jl,Hl,Ul,Vl,Kl,Wl,Xl,Gl,Yl,Ql,Zl,Jl,ed,td,od,id,rd,sd,ad,nd,ld,dd,cd,hd,pd,ud,md,gd,vd,fd,yd,_d,bd,xd,wd,kd,$d,Cd,Bd,Sd,Fd,Ad,Md,Dd,Ed,Pd,zd,Id,Rd,Od,Td,Ld,Nd,qd,jd,Hd,Ud,Vd,Kd,Wd,Xd,Gd,Yd,Qd,Zd,Jd,ec,tc,oc,ic,rc,sc,ac,nc,lc,dc,cc,hc,pc,uc,mc,gc,vc,fc,yc,_c,bc,xc,wc,kc,$c,Cc,Bc,Sc=e=>e;function Fc(e,t,o,i){var r,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(s<3?r(a):s>3?r(t,o,a):r(t,o))||a);return s>3&&a&&Object.defineProperty(t,o,a),a}"function"==typeof SuppressedError&&SuppressedError;const Ac=/^(meshcore-chattx-panel|chattx-)/,Mc="undefined"!=typeof customElements?customElements:void 0;if(Mc&&!Mc.__chattxGuard){const e=Mc.define.bind(Mc);Mc.define=(t,o,i)=>{Ac.test(t)&&Mc.get(t)||e(t,o,i)},Mc.__chattxGuard=!0}const Dc="chattx",Ec=new Set(["chattx-heard-reply"]),Pc="chattx-settings-changed";let zc,Ic={},Rc=!1,Oc={},Tc=null;function Lc(){try{return window.localStorage}catch(e){return null}}function Nc(){window.dispatchEvent(new CustomEvent(Pc))}function qc(){if(Tc=null,!zc||0===Object.keys(Oc).length)return;const e=Oc;Oc={},zc.callWS({type:"meshcore_chattx/set_settings",changes:e}).catch(()=>{Oc={...e,...Oc}})}function jc(e,t){Oc[e]=t,Tc&&clearTimeout(Tc),Tc=setTimeout(qc,400)}function Hc(e){var t,o;return Rc?e in Ic?Ic[e]:null:null!==(t=null===(o=Lc())||void 0===o?void 0:o.getItem(e))&&void 0!==t?t:null}function Uc(e,t){var o;Rc?Ic[e]!==t&&(Ic={...Ic,[e]:t},jc(e,t),Nc()):null===(o=Lc())||void 0===o||o.setItem(e,t)}function Vc(e){var t;if(!Rc)return void(null===(t=Lc())||void 0===t||t.removeItem(e));if(!(e in Ic))return;const o={...Ic};delete o[e],Ic=o,jc(e,null),Nc()}function Kc(e){const t={};if(e&&"object"==typeof e)for(const[o,i]of Object.entries(e))"string"==typeof i&&o.startsWith("chattx-")&&!Ec.has(o)&&(t[o]=i);return t}const Wc="chattx-distance-unit";let Xc;function Gc(e){Xc=e}function Yc(){try{const e=Hc(Wc);return"km"===e||"mi"===e?e:"auto"}catch(e){return"auto"}}function Qc(){const e=Yc();return"auto"!==e?e:"mi"===Xc?"mi":"km"}function Zc(e,t=!1){const o=Qc(),i="mi"===o?e/1.609344:e;return`${t?"~":""}${i<10?i.toFixed(1):Math.round(i)} ${o}`}const Jc={},eh={en:"English",cs:"Čeština",cy:"Cymraeg",da:"Dansk",de:"Deutsch",el:"Ελληνικά",es:"Español",fr:"Français",hr:"Hrvatski",it:"Italiano",pl:"Polski",pt:"Português","pt-br":"Português (Brasil)",sk:"Slovenčina",sl:"Slovenščina",sr:"Srpski (latinica)",fi:"Suomi",sv:"Svenska",uk:"Українська"},th={bs:"sr",cnr:"sr",me:"sr"},oh={cs:["one","few","other"],hr:["one","few","other"],pl:["one","few","many"],sk:["one","few","other"],sl:["one","two","few","other"],sr:["one","few","other"],uk:["one","few","many"]},ih="chattx-language";let rh;function sh(e){return null==e?void 0:e.toLowerCase().split("-")[0]}function ah(e){var t;const o=null==e?void 0:e.toLowerCase();if(o&&o in eh)return o;const i=sh(e),r=i?null!==(t=th[i])&&void 0!==t?t:i:void 0;return r&&r in eh?r:void 0}function nh(){return"undefined"!=typeof navigator?navigator.language:void 0}function lh(){try{var e,t;return null!==(e=ah(null!==(t=Hc(ih))&&void 0!==t?t:void 0))&&void 0!==e?e:"auto"}catch(e){return"auto"}}function dh(e){rh=e}function ch(){var e,t;const o=lh();return"auto"!==o?o:null!==(e=null!==(t=ah(rh))&&void 0!==t?t:ah(nh()))&&void 0!==e?e:"en"}function hh(){const e=ch();if(sh(nh())!==e)return"sr"===e?"sr-Latn":e}function ph(e,t){return t?e.replace(/\{(\w+)\}/g,(e,o)=>o in t?String(t[o]):e):e}function uh(e,t){var o,i;return ph(null!==(o=null===(i=Jc[ch()])||void 0===i?void 0:i[e])&&void 0!==o?o:e,t)}function mh(e,t,o,i){var r,s,a;const n=ch(),l={n:o,...i},d=null===(r=Jc[n])||void 0===r||null===(r=r[t])||void 0===r?void 0:r.split("|");if(!d)return ph(1===o?e:t,l);const c=(null!==(s=oh[n])&&void 0!==s?s:["one","other"]).indexOf(new Intl.PluralRules(n).select(o));return ph(null!==(a=d[c>=0?c:d.length-1])&&void 0!==a?a:d[d.length-1],l)}async function gh(){const e=ch();if("en"!==e&&!Jc[e])try{const t=new URL(import.meta.url).search,o=await fetch(`/meshcore_chattx_panel/i18n/${e}.json${t}`);o.ok&&function(e,t){Jc[e]=t}(e,await o.json())}catch(e){}}function vh(e){if(!e)return null;try{return new URL(e,"http://localhost").searchParams.get("v")}catch(e){return null}}function fh(e){var t;const o=null==e?void 0:e.config;return null==o||null===(t=o._panel_custom)||void 0===t?void 0:t.module_url}const yh="chattx-heard-reply";let _h="";function bh(){return uh("Heard, {hops}!")}function xh(){return _h}function wh(e){_h=(null!=e?e:"").trim()}async function kh(e){try{var t;const o=await e.callWS({type:"meshcore_chattx/get_heard_reply"});if(null===o.text&&null!==(t=e.user)&&void 0!==t&&t.is_admin){const t=function(){try{var e;const t=null!==(e=localStorage.getItem(yh))&&void 0!==e?e:"";return localStorage.removeItem(yh),t.trim()}catch(e){return""}}();if(t)return void wh((await e.callWS({type:"meshcore_chattx/set_heard_reply",text:t})).text)}wh(o.text)}catch(e){}}function $h(e,t=!1){return null==e?`? ${Qc()}`:Zc(e,t)}let Ch=[],Bh=new Set;function Sh(e){Ch=null!=e?e:[],Bh=new Set(Ch.flatMap(e=>e.names)),window.dispatchEvent(new CustomEvent("chattx-blocklist-changed"))}function Fh(){return Ch}function Ah(e){return Bh.size>0&&!e.isOutgoing&&!e.isSystem&&Bh.has(e.sender)}async function Mh(e){try{Sh((await e.callWS({type:"meshcore_chattx/get_blocklist"})).entries)}catch(e){}}const Dh=globalThis,Eh=Dh.ShadowRoot&&(void 0===Dh.ShadyCSS||Dh.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ph=Symbol(),zh=new WeakMap;let Ih=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ph)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Eh&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=zh.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&zh.set(t,e))}return e}toString(){return this.cssText}};const Rh=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Ih(o,e,Ph)},Oh=Eh?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new Ih("string"==typeof e?e:e+"",void 0,Ph))(t)})(e):e,{is:Th,defineProperty:Lh,getOwnPropertyDescriptor:Nh,getOwnPropertyNames:qh,getOwnPropertySymbols:jh,getPrototypeOf:Hh}=Object,Uh=globalThis,Vh=Uh.trustedTypes,Kh=Vh?Vh.emptyScript:"",Wh=Uh.reactiveElementPolyfillSupport,Xh=(e,t)=>e,Gh={toAttribute(e,t){switch(t){case Boolean:e=e?Kh:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},Yh=(e,t)=>!Th(e,t),Qh={attribute:!0,type:String,converter:Gh,reflect:!1,useDefault:!1,hasChanged:Yh};null!==(e=Symbol.metadata)&&void 0!==e||(Symbol.metadata=Symbol("metadata")),null!==(t=Uh.litPropertyMetadata)&&void 0!==t||(Uh.litPropertyMetadata=new WeakMap);let Zh=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),(null!==(t=this.l)&&void 0!==t?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Qh){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&Lh(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){var i;const{get:r,set:s}=null!==(i=Nh(this.prototype,e))&&void 0!==i?i:{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const i=null==r?void 0:r.call(this);null!=s&&s.call(this,t),this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return null!==(t=this.elementProperties.get(e))&&void 0!==t?t:Qh}static _$Ei(){if(this.hasOwnProperty(Xh("elementProperties")))return;const e=Hh(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Xh("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xh("properties"))){const e=this.properties,t=[...qh(e),...jh(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(Oh(e))}else void 0!==e&&t.push(Oh(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,o;(null!==(t=this._$EO)&&void 0!==t?t:this._$EO=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$EO)||void 0===t||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Eh)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of t){const t=document.createElement("style"),i=Dh.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}})(t,this.constructor.elementStyles),t}connectedCallback(){var e,t;null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$EO)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$EO)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){var r;const s=(void 0!==(null===(r=o.converter)||void 0===r?void 0:r.toAttribute)?o.converter:Gh).toAttribute(t,o.type);this._$Em=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){var r,s,a;const e=o.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(r=e.converter)||void 0===r?void 0:r.fromAttribute)?e.converter:Gh;this._$Em=i;const l=n.fromAttribute(t,e.type);this[i]=null!==(s=null!=l?l:null===(a=this._$Ej)||void 0===a?void 0:a.get(i))&&void 0!==s?s:l,this._$Em=null}}requestUpdate(e,t,o,i=!1,r){if(void 0!==e){var s,a;const n=this.constructor;if(!1===i&&(r=this[e]),null!=o||(o=n.getPropertyOptions(e)),!((null!==(s=o.hasChanged)&&void 0!==s?s:Yh)(r,t)||o.useDefault&&o.reflect&&r===(null===(a=this._$Ej)||void 0===a?void 0:a.get(e))&&!this.hasAttribute(n._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:r},s){var a,n,l;o&&!(null!==(a=this._$Ej)&&void 0!==a?a:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,null!==(n=null!=s?s:t)&&void 0!==n?n:this[e]),!0!==r||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(null!==(l=this._$Eq)&&void 0!==l?l:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){var e;if(null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t){const{wrapped:t}=o,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,o,i)}}let t=!1;const o=this._$AL;try{var i;t=this.shouldUpdate(o),t?(this.willUpdate(o),null!==(i=this._$EO)&&void 0!==i&&i.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(o)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null!==(t=this._$EO)&&void 0!==t&&t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};Zh.elementStyles=[],Zh.shadowRootOptions={mode:"open"},Zh[Xh("elementProperties")]=new Map,Zh[Xh("finalized")]=new Map,null!=Wh&&Wh({ReactiveElement:Zh}),(null!==(o=Uh.reactiveElementVersions)&&void 0!==o?o:Uh.reactiveElementVersions=[]).push("2.1.2");const Jh=globalThis,ep=e=>e,tp=Jh.trustedTypes,op=tp?tp.createPolicy("lit-html",{createHTML:e=>e}):void 0,ip="$lit$",rp=`lit$${Math.random().toFixed(9).slice(2)}$`,sp="?"+rp,ap=`<${sp}>`,np=document,lp=()=>np.createComment(""),dp=e=>null===e||"object"!=typeof e&&"function"!=typeof e,cp=Array.isArray,hp="[ \t\n\f\r]",pp=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,up=/-->/g,mp=/>/g,gp=RegExp(`>|${hp}(?:([^\\s"'>=/]+)(${hp}*=${hp}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),vp=/'/g,fp=/"/g,yp=/^(?:script|style|textarea|title)$/i,_p=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),bp=_p(1),xp=_p(2),wp=Symbol.for("lit-noChange"),kp=Symbol.for("lit-nothing"),$p=new WeakMap,Cp=np.createTreeWalker(np,129);function Bp(e,t){if(!cp(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==op?op.createHTML(t):t}const Sp=(e,t)=>{const o=e.length-1,i=[];let r,s=2===t?"<svg>":3===t?"<math>":"",a=pp;for(let t=0;t<o;t++){const o=e[t];let n,l,d=-1,c=0;for(;c<o.length&&(a.lastIndex=c,l=a.exec(o),null!==l);)c=a.lastIndex,a===pp?"!--"===l[1]?a=up:void 0!==l[1]?a=mp:void 0!==l[2]?(yp.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=gp):void 0!==l[3]&&(a=gp):a===gp?">"===l[0]?(a=null!=r?r:pp,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?gp:'"'===l[3]?fp:vp):a===fp||a===vp?a=gp:a===up||a===mp?a=pp:(a=gp,r=void 0);const h=a===gp&&e[t+1].startsWith("/>")?" ":"";s+=a===pp?o+ap:d>=0?(i.push(n),o.slice(0,d)+ip+o.slice(d)+rp+h):o+rp+(-2===d?t:h)}return[Bp(e,s+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class Fp{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,s=0;const a=e.length-1,n=this.parts,[l,d]=Sp(e,t);if(this.el=Fp.createElement(l,o),Cp.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Cp.nextNode())&&n.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(ip)){const t=d[s++],o=i.getAttribute(e).split(rp),a=/([.?@])?(.*)/.exec(t);n.push({type:1,index:r,name:a[2],strings:o,ctor:"."===a[1]?Pp:"?"===a[1]?zp:"@"===a[1]?Ip:Ep}),i.removeAttribute(e)}else e.startsWith(rp)&&(n.push({type:6,index:r}),i.removeAttribute(e));if(yp.test(i.tagName)){const e=i.textContent.split(rp),t=e.length-1;if(t>0){i.textContent=tp?tp.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],lp()),Cp.nextNode(),n.push({type:2,index:++r});i.append(e[t],lp())}}}else if(8===i.nodeType)if(i.data===sp)n.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(rp,e+1));)n.push({type:7,index:r}),e+=rp.length-1}r++}}static createElement(e,t){const o=np.createElement("template");return o.innerHTML=e,o}}function Ap(e,t,o=e,i){var r,s,a,n,l;if(t===wp)return t;let d=void 0!==i?null===(r=o._$Co)||void 0===r?void 0:r[i]:o._$Cl;const c=dp(t)?void 0:t._$litDirective$;return(null===(s=d)||void 0===s?void 0:s.constructor)!==c&&(null!==(a=d)&&void 0!==a&&null!==(n=a._$AO)&&void 0!==n&&n.call(a,!1),void 0===c?d=void 0:(d=new c(e),d._$AT(e,o,i)),void 0!==i?(null!==(l=o._$Co)&&void 0!==l?l:o._$Co=[])[i]=d:o._$Cl=d),void 0!==d&&(t=Ap(e,d._$AS(e,t.values),d,i)),t}class Mp{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:i}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:np).importNode(o,!0);Cp.currentNode=r;let s=Cp.nextNode(),a=0,n=0,l=i[0];for(;void 0!==l;){var d;if(a===l.index){let t;2===l.type?t=new Dp(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new Rp(s,this,e)),this._$AV.push(t),l=i[++n]}a!==(null===(d=l)||void 0===d?void 0:d.index)&&(s=Cp.nextNode(),a++)}return Cp.currentNode=np,r}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class Dp{get _$AU(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cv}constructor(e,t,o,i){var r;this.type=2,this._$AH=kp,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get parentNode(){var e;let t=this._$AA.parentNode;const o=this._$AM;return void 0!==o&&11===(null===(e=t)||void 0===e?void 0:e.nodeType)&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ap(this,e,t),dp(e)?e===kp||null==e||""===e?(this._$AH!==kp&&this._$AR(),this._$AH=kp):e!==this._$AH&&e!==wp&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>cp(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==kp&&dp(this._$AH)?this._$AA.nextSibling.data=e:this.T(np.createTextNode(e)),this._$AH=e}$(e){var t;const{values:o,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Fp.createElement(Bp(i.h,i.h[0]),this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.p(o);else{const e=new Mp(r,this),t=e.u(this.options);e.p(o),this.T(t),this._$AH=e}}_$AC(e){let t=$p.get(e.strings);return void 0===t&&$p.set(e.strings,t=new Fp(e)),t}k(e){cp(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const r of e)i===t.length?t.push(o=new Dp(this.O(lp()),this.O(lp()),this,this.options)):o=t[i],o._$AI(r),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e!==this._$AB;){var o;const t=ep(e).nextSibling;ep(e).remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Ep{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,r){this.type=1,this._$AH=kp,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=kp}_$AI(e,t=this,o,i){const r=this.strings;let s=!1;if(void 0===r)e=Ap(this,e,t,0),s=!dp(e)||e!==this._$AH&&e!==wp,s&&(this._$AH=e);else{const i=e;let a,n;for(e=r[0],a=0;a<r.length-1;a++)n=Ap(this,i[o+a],t,a),n===wp&&(n=this._$AH[a]),s||(s=!dp(n)||n!==this._$AH[a]),n===kp?e=kp:e!==kp&&(e+=(null!=n?n:"")+r[a+1]),this._$AH[a]=n}s&&!i&&this.j(e)}j(e){e===kp?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Pp extends Ep{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===kp?void 0:e}}class zp extends Ep{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==kp)}}class Ip extends Ep{constructor(e,t,o,i,r){super(e,t,o,i,r),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=Ap(this,e,t,0))&&void 0!==o?o:kp)===wp)return;const i=this._$AH,r=e===kp&&i!==kp||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==kp&&(i===kp||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(o=this.options)||void 0===o?void 0:o.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}class Rp{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Ap(this,e)}}const Op=Jh.litHtmlPolyfillSupport;null!=Op&&Op(Fp,Dp),(null!==(i=Jh.litHtmlVersions)&&void 0!==i?i:Jh.litHtmlVersions=[]).push("3.3.2");const Tp=globalThis;let Lp=class extends Zh{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var i;const r=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:t;let s=r._$litPart$;if(void 0===s){var a;const e=null!==(a=null==o?void 0:o.renderBefore)&&void 0!==a?a:null;r._$litPart$=s=new Dp(t.insertBefore(lp(),e),e,void 0,null!=o?o:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return wp}};Lp._$litElement$=!0,Lp.finalized=!0,null===(r=Tp.litElementHydrateSupport)||void 0===r||r.call(Tp,{LitElement:Lp});const Np=Tp.litElementPolyfillSupport;null==Np||Np({LitElement:Lp}),(null!==(s=Tp.litElementVersions)&&void 0!==s?s:Tp.litElementVersions=[]).push("4.2.2");const qp=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},jp={attribute:!0,type:String,converter:Gh,reflect:!1,hasChanged:Yh},Hp=(e=jp,t,o)=>{const{kind:i,metadata:r}=o;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),s.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,r,e,!0,o)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=o;return function(o){const r=this[i];t.call(this,o),this.requestUpdate(i,r,e,!0,o)}}throw Error("Unsupported decorator location: "+i)};function Up(e){return(t,o)=>"object"==typeof o?Hp(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function Vp(e){return Up({...e,state:!0,attribute:!1})}function Kp(e,t){return(t,o,i)=>((e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o))(t,o,{get(){return(()=>{var t,o;return null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==t?t:null})()}})}const Wp=Rh(a||(a=Sc`
  :host {
    display: block;
    width: 100%;
    height: 100vh;
    --chat-bg: var(--chat-card-bg, var(--card-background-color, #fff));
    --bubble-incoming-bg: var(
      --chat-card-bubble-incoming-bg,
      var(--secondary-background-color, #e8e8e8)
    );
    --bubble-outgoing-bg: var(--chat-card-bubble-outgoing-bg, var(--primary-color, #03a9f4));
    --bubble-incoming-text: var(
      --chat-card-bubble-incoming-text,
      var(--primary-text-color, #212121)
    );
    --bubble-outgoing-text: var(--chat-card-bubble-outgoing-text, #fff);
    --sender-color: var(--chat-card-sender-color, var(--primary-color, #03a9f4));
    --timestamp-color: var(--chat-card-timestamp-color, var(--secondary-text-color, #727272));
    --mention-bg: var(--chat-card-mention-bg, rgba(3, 169, 244, 0.15));
    --mention-text: var(--chat-card-mention-text, var(--primary-color, #03a9f4));
    --date-separator-color: var(
      --chat-card-date-separator-color,
      var(--secondary-text-color, #727272)
    );
    --unread-badge-bg: var(--chat-card-unread-badge-bg, var(--primary-color, #03a9f4));
    --input-bg: var(--chat-card-input-bg, var(--card-background-color, #fff));
    --input-border: var(--chat-card-input-border, var(--divider-color, #e0e0e0));
    --scrollbar-thumb: var(--chat-card-scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
    --system-msg-color: var(--chat-card-system-msg-color, var(--secondary-text-color, #727272));
    --error-color: var(--error-color, #db4437);

    /* ─── Semantic threshold-band colours ───
       Used by the node-summary aggregated card (and any future component
       wanting good/warn/bad/info semantics). The hex defaults match the
       battery / status palette already scattered through this stylesheet
       (#4caf50, #ff9800, #f44336, #2196f3) so no net new palette is
       introduced — these named variables just give the existing colours
       a semantic handle.

       *-bg variants are the translucent fills used by status badges,
       map-link chips, and any chip-style backgrounds the card adds. */
    --good: var(--meshcore-good, #4caf50);
    --warn: var(--meshcore-warn, #ff9800);
    --bad:  var(--meshcore-bad,  #f44336);
    --info: var(--meshcore-info, #2196f3);
    --good-bg: var(--meshcore-good-bg, rgba(76, 175, 80, 0.18));
    --warn-bg: var(--meshcore-warn-bg, rgba(255, 152, 0, 0.18));
    --bad-bg:  var(--meshcore-bad-bg,  rgba(244, 67, 54, 0.18));
    --info-bg: var(--meshcore-info-bg, rgba(33, 150, 243, 0.18));
  }

  /* === Panel Layout === */
  .panel {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--primary-background-color, #fafafa);
  }

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background: var(--card-background-color, #fff);
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    flex-shrink: 0;
    gap: 12px;
  }

  .panel-title {
    font-size: 18px;
    font-weight: 500;
    color: var(--primary-text-color);
    flex: 1;
  }

  .device-switcher {
    padding: 8px 12px;
    border: 1px solid var(--input-border);
    border-radius: 8px;
    background: var(--input-bg);
    color: var(--primary-text-color);
    font-size: 13px;
    box-sizing: border-box;
    height: 39px;
    min-height: 39px;
    line-height: normal;
    appearance: menulist;
    -webkit-appearance: menulist;
    cursor: pointer;
  }

  /* === Tab Bar === */
  .tab-bar {
    display: flex;
    gap: 0;
    padding: 0;
    background: var(--card-background-color, #fff);
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    flex-shrink: 0;
  }

  .tab-bar button {
    flex: 1;
    padding: 12px 16px;
    border: none;
    background: transparent;
    color: var(--secondary-text-color, #727272);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    border-bottom: 3px solid transparent;
    min-height: 48px;
  }

  .tab-bar button:hover {
    color: var(--primary-text-color);
    background: rgba(0, 0, 0, 0.02);
  }

  .tab-bar button.active {
    color: var(--primary-color, #03a9f4);
    border-bottom-color: var(--primary-color, #03a9f4);
  }

  .tab-badge {
    display: inline-block;
    min-width: 18px;
    height: 18px;
    margin-left: 6px;
    padding: 0 5px;
    border-radius: 9px;
    background: var(--unread-badge-bg, var(--primary-color, #03a9f4));
    color: var(--text-primary-color, #fff);
    font-size: 11px;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    vertical-align: 1px;
    box-sizing: border-box;
    font-variant-numeric: tabular-nums;
  }

  /* === Page Container === */
  .page-container {
    flex: 1;
    overflow: hidden;
    display: flex;
  }

  .page {
    display: none;
    flex: 1;
    overflow: hidden;
  }

  .page.active {
    display: flex;
  }

  /* === Chat Page (with sidebar) === */
  .chat-layout {
    display: flex;
    width: 100%;
    height: 100%;
    gap: 0;
  }

  /* === Message Bubble Styles === */
  .bubble {
    max-width: 85%;
    padding: 8px 12px;
    border-radius: 16px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    position: relative;
    cursor: pointer;
    transition: opacity 0.15s;
    line-height: 1.4;
    font-size: 14px;
  }

  .bubble:active {
    opacity: 0.7;
  }

  .bubble + .bubble {
    margin-top: 2px;
  }

  .bubble.incoming {
    background: var(--bubble-incoming-bg);
    color: var(--bubble-incoming-text);
    border-bottom-left-radius: 4px;
  }

  .bubble.incoming:first-of-type {
    border-top-left-radius: 16px;
  }

  .bubble.outgoing {
    background: var(--bubble-outgoing-bg);
    color: var(--bubble-outgoing-text);
    border-bottom-right-radius: 4px;
  }

  .bubble.outgoing:first-of-type {
    border-top-right-radius: 16px;
  }

  .bubble.system {
    background: transparent;
    color: var(--system-msg-color);
    font-style: italic;
    font-size: 13px;
    text-align: center;
    cursor: default;
    padding: 4px 12px;
  }

  .message-text {
    white-space: pre-wrap;
  }

  .message-text .mention {
    background: var(--mention-bg);
    color: var(--mention-text);
    font-weight: 600;
    padding: 1px 4px;
    border-radius: 4px;
  }

  .bubble.outgoing .message-text .mention {
    background: rgba(255, 255, 255, 0.25);
    color: #fff;
  }

  .timestamp {
    font-size: 11px;
    color: var(--timestamp-color);
    margin-top: 2px;
    padding: 0 4px;
    opacity: 0.8;
  }

  /* === Sender Label === */
  .sender {
    font-size: 12px;
    font-weight: 600;
    color: var(--sender-color);
    margin-bottom: 2px;
    padding: 0 4px;
    max-width: 85%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* === Message Group === */
  .message-group {
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
  }

  .message-group.outgoing {
    align-items: flex-end;
  }

  .message-group.incoming {
    align-items: flex-start;
  }

  .message-group.system {
    align-items: center;
  }

  /* === Date Separator === */
  .date-separator {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 16px 0 12px;
    color: var(--date-separator-color);
    font-size: 12px;
    font-weight: 500;
  }

  .date-separator::before,
  .date-separator::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--divider-color, #e0e0e0);
  }

  /* === Contact Card === */
  .contact-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    cursor: pointer;
    transition: background 0.15s;
  }

  .contact-card:hover {
    background: rgba(0, 0, 0, 0.02);
  }

  .contact-card.active {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
    border-left: 3px solid var(--primary-color, #03a9f4);
  }

  .contact-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--primary-color, #03a9f4);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    flex-shrink: 0;
  }

  .contact-info {
    flex: 1;
    overflow: hidden;
  }

  .contact-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .contact-prefix {
    font-size: 12px;
    color: var(--secondary-text-color);
    font-family: monospace;
  }

  .contact-status {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .contact-status.online {
    background: #4caf50;
  }

  .contact-status.offline {
    background: var(--secondary-text-color);
  }

  /* === Conversation Sidebar === */
  .conversation-sidebar {
    width: 280px;
    border-right: 1px solid var(--divider-color, #e0e0e0);
    display: flex;
    flex-direction: column;
    background: var(--card-background-color, #fff);
    flex-shrink: 0;
  }

  .sidebar-search {
    padding: 12px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .sidebar-search input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid var(--input-border);
    border-radius: 20px;
    background: var(--input-bg);
    color: var(--primary-text-color);
    font-size: 13px;
    outline: none;
  }

  .sidebar-search input:focus {
    border-color: var(--primary-color);
  }

  .conversation-list {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .conversation-list::-webkit-scrollbar {
    width: 6px;
  }

  .conversation-list::-webkit-scrollbar-track {
    background: transparent;
  }

  .conversation-list::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
    border-radius: 3px;
  }

  /* === Chat Container === */
  .chat-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 8px 12px;
    background: var(--chat-bg);
    position: relative;
  }

  .chat-container::-webkit-scrollbar {
    width: 6px;
  }

  .chat-container::-webkit-scrollbar-track {
    background: transparent;
  }

  .chat-container::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
    border-radius: 3px;
  }

  /* === Input Area === */
  .input-area {
    display: flex;
    align-items: flex-end;
    gap: 8px;
    padding: 8px 12px 12px;
    border-top: 1px solid var(--divider-color, #e0e0e0);
    background: var(--input-bg);
    flex-shrink: 0;
  }

  .input-area textarea {
    flex: 1;
    padding: 10px 14px;
    border: 1px solid var(--input-border);
    border-radius: 20px;
    background: var(--chat-bg);
    color: var(--primary-text-color);
    font-size: 14px;
    font-family: inherit;
    resize: none;
    outline: none;
    max-height: 120px;
    min-height: 40px;
    line-height: 1.4;
    transition: border-color 0.2s;
  }

  .input-area textarea:focus {
    border-color: var(--primary-color);
  }

  .input-area textarea::placeholder {
    color: var(--timestamp-color);
  }

  .input-area textarea:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .send-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 50%;
    background: var(--primary-color, #03a9f4);
    color: #fff;
    cursor: pointer;
    flex-shrink: 0;
    transition: opacity 0.15s, transform 0.15s;
  }

  .send-button:hover {
    opacity: 0.9;
  }

  .send-button:active {
    transform: scale(0.95);
  }

  .send-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .send-button svg {
    width: 20px;
    height: 20px;
  }

  /* === Empty State === */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 16px;
    color: var(--secondary-text-color);
    text-align: center;
  }

  .empty-state .empty-icon {
    font-size: 32px;
    margin-bottom: 8px;
    opacity: 0.5;
  }

  .empty-state .empty-text {
    font-size: 14px;
  }

  /* === Loading State === */
  .loading-state {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    color: var(--secondary-text-color);
    font-size: 14px;
    gap: 8px;
  }

  .loading-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid var(--divider-color, #e0e0e0);
    border-top-color: var(--primary-color, #03a9f4);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* === Error State === */
  .error-state {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    color: var(--error-color);
    font-size: 13px;
    background: rgba(219, 68, 55, 0.08);
    border-radius: 8px;
    margin: 8px 12px;
  }

  /* === Delivery Status === */
  .delivery-status {
    font-size: 11px;
    color: var(--timestamp-color);
    margin-top: 2px;
    padding: 0 4px;
    opacity: 0.8;
  }

  .delivery-waiting {
    color: var(--timestamp-color);
  }

  .delivery-sent {
    color: var(--primary-color, #03a9f4);
  }

  .delivery-delivered {
    color: #4caf50;
  }

  .delivery-failed {
    color: var(--error-color, #db4437);
  }

  /* === Route Info Inline === */
  .route-info-inline {
    font-size: 11px;
    color: var(--timestamp-color);
    font-family: monospace;
    margin-top: 2px;
    padding: 0 4px;
    opacity: 0.7;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* === Device Cards === */
  .device-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 8px;
    background: var(--card-background-color, #fff);
    cursor: pointer;
    transition: all 0.15s;
  }

  .device-card:hover {
    background: rgba(0, 0, 0, 0.02);
    border-color: var(--primary-color, #03a9f4);
  }

  .device-card.active {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
    border-color: var(--primary-color, #03a9f4);
  }

  .device-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .device-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .device-type {
    font-size: 11px;
    padding: 2px 6px;
    border-radius: 4px;
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    color: var(--primary-color, #03a9f4);
    font-weight: 500;
  }

  .device-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .device-stat {
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  .device-stat-label {
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .device-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
  }

  .device-action-btn {
    padding: 6px 10px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 4px;
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }

  .device-action-btn:hover {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
    border-color: var(--primary-color, #03a9f4);
    color: var(--primary-color, #03a9f4);
  }

  .device-action-btn:active {
    transform: scale(0.98);
  }

  /* === Settings Page === */
  .settings-section {
    padding: 16px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .settings-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 12px 0;
    user-select: none;
  }

  .settings-header:hover {
    color: var(--primary-color, #03a9f4);
  }

  .settings-header-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .settings-header-icon {
    font-size: 18px;
    transition: transform 0.2s;
  }

  .settings-header.collapsed .settings-header-icon {
    transform: rotate(-90deg);
  }

  .settings-content {
    display: none;
    padding: 12px 0;
  }

  .settings-content.expanded {
    display: block;
  }

  .form-group {
    margin-bottom: 16px;
  }

  .form-group:last-child {
    margin-bottom: 0;
  }

  .form-label {
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-text-color);
    margin-bottom: 6px;
  }

  .form-label.required::after {
    content: ' *';
    color: var(--error-color, #db4437);
  }

  .form-input,
  .form-select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid var(--input-border);
    border-radius: 6px;
    background: var(--input-bg);
    color: var(--primary-text-color);
    font-size: 13px;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }

  .form-select {
    height: 39px;
    min-height: 39px;
    line-height: normal;
    appearance: menulist;
    -webkit-appearance: menulist;
  }

  .form-input:focus,
  .form-select:focus {
    border-color: var(--primary-color, #03a9f4);
  }

  .form-input:disabled,
  .form-select:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .form-toggle {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .form-toggle input[type='checkbox'] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .form-toggle-label {
    font-size: 13px;
    color: var(--primary-text-color);
    cursor: pointer;
  }

  .form-description {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-top: 4px;
  }

  .apply-button {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    background: var(--primary-color, #03a9f4);
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }

  .apply-button:hover {
    opacity: 0.9;
  }

  .apply-button:active {
    transform: scale(0.98);
  }

  .apply-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* === Dialog Components === */
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 16px;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    max-height: 80vh;
    border-radius: 12px;
    background: var(--card-background-color, #fff);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  .dialog-header {
    padding: 16px;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    flex-shrink: 0;
  }

  .dialog-header-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .dialog-body {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
  }

  .dialog-footer {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    padding: 16px;
    border-top: 1px solid var(--divider-color, #e0e0e0);
    flex-shrink: 0;
  }

  .dialog-button {
    padding: 8px 16px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 6px;
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }

  .dialog-button:hover {
    background: rgba(0, 0, 0, 0.02);
  }

  .dialog-button.primary {
    background: var(--primary-color, #03a9f4);
    color: #fff;
    border-color: var(--primary-color, #03a9f4);
  }

  .dialog-button.primary:hover {
    opacity: 0.9;
  }

  /* === Command Dialog === */
  .command-select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid var(--input-border);
    border-radius: 6px;
    background: var(--input-bg);
    color: var(--primary-text-color);
    font-size: 13px;
    outline: none;
    box-sizing: border-box;
    height: 39px;
    min-height: 39px;
    line-height: normal;
    appearance: menulist;
    -webkit-appearance: menulist;
  }

  .command-description {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-top: 8px;
    padding: 8px;
    border-left: 2px solid var(--primary-color, #03a9f4);
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
    border-radius: 4px;
  }

  .command-params {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }

  .command-response {
    font-size: 12px;
    font-family: monospace;
    background: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: 6px;
    padding: 12px;
    margin-top: 12px;
    /* normal (not pre-wrap): the structured/grid render path is built from
       indented template literals; pre-wrap would render that indentation as
       blank lines. The plain-text fallback wraps itself in a pre-wrap span to
       preserve multi-line CLI output. */
    white-space: normal;
    word-wrap: break-word;
    max-height: 200px;
    overflow-y: auto;
    color: var(--primary-text-color);
  }

  /* === Channel Management === */
  .channel-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .channel-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 6px;
    background: var(--card-background-color, #fff);
    transition: all 0.15s;
  }

  .channel-item:hover {
    background: rgba(0, 0, 0, 0.02);
    border-color: var(--primary-color, #03a9f4);
  }

  .channel-item-info {
    flex: 1;
  }

  .channel-item-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .channel-item-idx {
    font-size: 12px;
    color: var(--secondary-text-color);
    font-family: monospace;
  }

  .channel-item-actions {
    display: flex;
    gap: 6px;
  }

  .channel-action-btn {
    padding: 6px 10px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 4px;
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    font-size: 12px;
    cursor: pointer;
    transition: all 0.15s;
  }

  .channel-action-btn:hover {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
    border-color: var(--primary-color, #03a9f4);
    color: var(--primary-color, #03a9f4);
  }

  .channel-add-button {
    padding: 10px 16px;
    border: 2px dashed var(--divider-color, #e0e0e0);
    border-radius: 6px;
    background: transparent;
    color: var(--primary-color, #03a9f4);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }

  .channel-add-button:hover {
    border-color: var(--primary-color, #03a9f4);
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
  }

  /* === Danger Zone === */
  .danger-zone {
    padding: 12px;
    border: 2px solid var(--error-color, #db4437);
    border-radius: 8px;
    background: rgba(219, 68, 55, 0.05);
  }

  .danger-zone-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--error-color, #db4437);
    margin-bottom: 8px;
  }

  .danger-button {
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    background: var(--error-color, #db4437);
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
  }

  .danger-button:hover {
    opacity: 0.9;
  }

  .danger-button:active {
    transform: scale(0.98);
  }

  .danger-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* === Neighbor Info === */
  .neighbor-chart-container {
    width: 100%;
    height: 300px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 8px;
    background: var(--input-bg);
  }

  .neighbor-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 12px;
  }

  .neighbor-table th {
    padding: 10px 12px;
    text-align: left;
    font-size: 12px;
    font-weight: 600;
    color: var(--primary-text-color);
    border-bottom: 2px solid var(--divider-color, #e0e0e0);
    background: rgba(0, 0, 0, 0.02);
  }

  .neighbor-table td {
    padding: 10px 12px;
    font-size: 12px;
    color: var(--primary-text-color);
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .neighbor-table tr:hover {
    background: rgba(0, 0, 0, 0.02);
  }

  /* === Narrow Mode Responsive === */
  :host([narrow]) .device-card {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }

  :host([narrow]) .dialog {
    max-width: 100%;
    border-radius: 0;
  }

  :host([narrow]) .device-stats {
    grid-template-columns: 1fr;
  }

  :host([narrow]) .dialog-overlay {
    padding: 0;
  }

  :host([narrow]) .tab-bar button {
    font-size: 12px;
    padding: 10px 12px;
  }

  :host([narrow]) .conversation-sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    max-height: 40%;
  }

  :host([narrow]) .chat-layout {
    flex-direction: column;
  }

  /* === Sender Colors === */
  .sender-color-1 {
    --sender-color: #FF6B6B;
  }

  .sender-color-2 {
    --sender-color: #4ECDC4;
  }

  .sender-color-3 {
    --sender-color: #FFE66D;
  }

  .sender-color-4 {
    --sender-color: #95E1D3;
  }

  .sender-color-5 {
    --sender-color: #C7CEEA;
  }

  .sender-color-6 {
    --sender-color: #FF8B94;
  }

  .sender-color-7 {
    --sender-color: #B5EAD7;
  }

  .sender-color-8 {
    --sender-color: #FFB7B2;
  }

  /* === Accessibility === */
  .bubble:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .send-button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .dialog-button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  .form-input:focus-visible,
  .form-select:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
`)),Xp=Rh(n||(n=Sc`
  .dialog,
  .modal-card,
  .message-dialog {
    border: 2px solid var(--primary-color, #03a9f4);
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
    box-sizing: border-box;
  }

  :host([narrow]) .dialog {
    border-radius: 12px;
  }

  :host([narrow]) .dialog-overlay {
    padding: 8px;
  }
`)),Gp=/^<[^>]+>\s*/,Yp=/@\[([^\]]+)\]/g,Qp=/@(\w+)/g,Zp={recipient_type_entity:"select.meshcore_recipient_type",channel_entity:"select.meshcore_channel",contact_entity:"select.meshcore_contact",channel_entity_pattern:"binary_sensor.meshcore_{prefix}_ch_{idx}_messages",contact_entity_pattern:"binary_sensor.meshcore_{prefix}_{contact}_messages",domain_filter:"meshcore"},Jp={...Zp,hours_to_show:48,initial_hours:1,max_messages:500,show_date_separators:!0,group_messages:!0,group_timeout:300,timestamp_format:"relative",update_mode:"auto",refresh_interval:30,enable_cache:!0,cache_ttl:86400,cache_max_size:5242880};function eu(e){const t=e?Date.parse(e):NaN;return Number.isNaN(t)?0:t}function tu(e,t){const o={...e};for(const[e,i]of Object.entries(t))eu(i)>=eu(o[e])&&(o[e]=i);return o}function ou(e,t){return"pubkey_prefix"in e?`meshcore_${t}_${e.pubkey_prefix.substring(0,6)}_messages`:`meshcore_${t}_ch_${e.channel_idx}_messages`}function iu(e){return new Map(Object.entries(e).map(([e,t])=>[e.substring(e.indexOf(".")+1),t]))}const ru=36e5;async function su(e){try{return(await e.callWS({type:"meshcore_chattx/get_devices"})).devices||[]}catch(e){return[]}}async function au(e,t){try{const o={type:"meshcore_chattx/get_contacts"};return t&&(o.entry_id=t),(await e.callWS(o)).contacts||[]}catch(e){return[]}}async function nu(e,t){try{const o={type:"meshcore_chattx/get_channels"};return t&&(o.entry_id=t),(await e.callWS(o)).channels||[]}catch(e){return[]}}async function lu(e,t){try{const o={type:"meshcore_chattx/get_device_config"};return t&&(o.entry_id=t),await e.callWS(o)}catch(e){throw new Error("Failed to get device configuration")}}async function du(e,t,o){try{const i={type:"meshcore_chattx/set_device_config",settings:t};return o&&(i.entry_id=o),await e.callWS(i)}catch(e){return{success:!1,changed:[]}}}async function cu(e,t,o,i){try{const r={type:"meshcore_chattx/execute_local",command:t};return o&&(r.args=o),i&&(r.entry_id=i),await e.callWS(r)}catch(e){const t=e;return{response:t&&t.message?t.code?`${t.message} (${t.code})`:t.message:String(e),success:!1,timestamp:(new Date).toISOString()}}}async function hu(e,t,o,i){try{const r={type:"meshcore_chattx/execute_remote",target_prefix:t,command:o};return i&&(r.entry_id=i),await e.callWS(r)}catch(e){const t=e;return{response:t&&t.message?t.code?`${t.message} (${t.code})`:t.message:String(e),success:!1,timestamp:(new Date).toISOString()}}}function pu(e){const t=e;return t&&t.message?t.message:String(e)}async function uu(e,t,o){const i={type:"meshcore_chattx/repeater_login_state",target_prefix:t};o&&(i.entry_id=o);try{return await e.callWS(i)}catch(e){return{has_saved_password:!1,logged_in_at:null}}}const mu=new Map;function gu(e){var t;return Date.now()<(null!==(t=mu.get(null!=e?e:""))&&void 0!==t?t:0)}async function vu(e,t,o,i){const r={type:"meshcore_chattx/repeater_read",target_prefix:t,command:o};i&&(r.entry_id=i),mu.set(t,1/0);try{return await e.callWS(r)}catch(e){return{success:!1,message:pu(e)}}finally{mu.set(t,Date.now()+3e3)}}async function fu(e,t,o,i){const r={type:"meshcore_chattx/repeater_read_neighbours",target_prefix:t,offset:o};i&&(r.entry_id=i);try{return await e.callWS(r)}catch(e){return{success:!1,message:pu(e)}}}async function yu(e,t,o,i){const r={type:"meshcore_chattx/repeater_command",target_prefix:t,command:o};i&&(r.entry_id=i),mu.set(t,1/0);try{return await e.callWS(r)}catch(e){return{success:!1,message:pu(e)}}finally{mu.set(t,Date.now()+3e3)}}async function _u(e,t,o){const i={type:"meshcore_chattx/repeater_read_telemetry",target_prefix:t};o&&(i.entry_id=o);try{return await e.callWS(i)}catch(e){return{success:!1,message:pu(e)}}}async function bu(e,t,o){const i={type:"meshcore_chattx/repeater_remembered_settings",target_prefix:t};o&&(i.entry_id=o);try{var r;return null!==(r=(await e.callWS(i)).settings)&&void 0!==r?r:{}}catch(e){return{}}}async function xu(e,t){try{const o={type:"meshcore_chattx/get_flood_scopes"};t&&(o.entry_id=t);const i=await e.callWS(o);return{scopes:i.scopes||[],global:!!i.global}}catch(e){return{scopes:[],global:!1}}}async function wu(e,t,o,i){try{const r={type:"meshcore_chattx/add_contact",public_key:t};return o&&(r.name=o),i&&(r.entry_id=i),await e.callWS(r)}catch(e){return{success:!1}}}async function ku(e,t,o){try{const i={type:"meshcore_chattx/remove_contact",public_key:t};return o&&(i.entry_id=o),await e.callWS(i)}catch(e){return{success:!1}}}async function $u(e){try{return(await e.callWS({type:"meshcore_chattx/get_quick_messages"})).messages}catch(e){return[]}}async function Cu(e,t="all",o={}){try{var i,r;const s={type:"meshcore_chattx/get_contacts_paginated",category:t,limit:null!==(i=o.limit)&&void 0!==i?i:50,offset:null!==(r=o.offset)&&void 0!==r?r:0};return void 0!==o.nodeType&&(s.node_type=o.nodeType),o.search&&(s.search=o.search),o.entryId&&(s.entry_id=o.entryId),o.sortBy&&(s.sort_by=o.sortBy),await e.callWS(s)}catch(e){return{contacts:[],total:0,counts:{clients:0,repeaters:0,room_servers:0,sensors:0}}}}async function Bu(e,t){try{const o={type:"meshcore_chattx/get_default_flood_scope"};t&&(o.entry_id=t);const i=await e.callWS(o);return{supported:!!i.supported,scope:i.scope||""}}catch(e){return{supported:!1,scope:""}}}class Su{constructor(){this._counts={},this._lastRead={},this._subscribers=new Set,this._markReadRequestedHandler=null,this._readProgress=null,this._postSwitchTimerHandler=null}subscribe(e){return this._subscribers.add(e),()=>{this._subscribers.delete(e)}}onMarkReadRequested(e){this._markReadRequestedHandler=e}onPostSwitchTimerFire(e){this._postSwitchTimerHandler=e}requestMarkRead(e){e&&this._markReadRequestedHandler&&this._markReadRequestedHandler(e)}_notify(){for(const e of[...this._subscribers])try{e()}catch(e){console.error("[UnreadController] subscriber callback threw",e)}}ingestBackendData(e,t){var o,i;this._counts={...null!==(o=null==e?void 0:e.unread)&&void 0!==o?o:{}},this._lastRead={...null!==(i=null==e?void 0:e.last_read)&&void 0!==i?i:{}},this._notify()}clearEntity(e){e&&this._counts[e]&&(this._counts={...this._counts,[e]:0},this._notify())}get counts(){return this._counts}get lastRead(){return this._lastRead}beginConversation(e,t){var o;this._clearPostSwitchTimer();const i={entityId:e,anchorId:e&&null!==(o=this._lastRead[e])&&void 0!==o?o:null,unreadCountAtSelection:t,graceUntil:Date.now()+1e3,postSwitchTimer:null,markReadFired:!1,lastMarkReadIdSent:null};this._readProgress=i,i.postSwitchTimer=setTimeout(()=>{var e;this._readProgress===i&&(i.postSwitchTimer=null,null===(e=this._postSwitchTimerHandler)||void 0===e||e.call(this))},1e3)}endConversation(){this._clearPostSwitchTimer(),this._readProgress=null}_clearPostSwitchTimer(){const e=this._readProgress;null!=e&&e.postSwitchTimer&&(clearTimeout(e.postSwitchTimer),e.postSwitchTimer=null)}resetUnreadCountAtSelection(){this._readProgress&&(this._readProgress.unreadCountAtSelection=0)}maybeReanchorOnLateData(e){const t=this._readProgress;if(!t||t.entityId!==e)return!1;if(null!==t.anchorId)return!1;if(t.markReadFired)return!1;const o=this._lastRead[e];return!!o&&(t.anchorId=o,!0)}onScrollState(e){return this._tryAdvanceCursor(e.entityId,e.lastMessageVisible,e.hasNewerMessages,e.bufferTailId,!1)}onPillJump(e){return this._tryAdvanceCursor(e.entityId,!0,!1,e.bufferTailId,!0)}_tryAdvanceCursor(e,t,o,i,r){if(!e)return!1;const s=this._readProgress;return!(!s||s.entityId!==e||!r&&Date.now()<s.graceUntil||o||!t||null!==i&&i===s.lastMarkReadIdSent||(s.lastMarkReadIdSent=i,s.markReadFired=!0,this.requestMarkRead(e),0))}badgeCount(e,t,o){if(!e)return 0;const i=this._counts;if(o&&i[o])return i[o];const r=/^\d+$/.test(e),s=t?`meshcore_${t}_ch_${e}_messages`:null;for(const[t,o]of Object.entries(i))if(!(o<=0))if(r){if(s){if(t.endsWith(s))return o}else if(t.endsWith(`_ch_${e}_messages`))return o}else{const i=e.substring(0,6);if(t.endsWith(`_${i}_messages`))return o}return 0}dividerAfterGroupIdx(e){const t=this._readProgress;if(!t)return null;let o=null;if(t.anchorId){let i=0;for(const r of e)if("date-separator"!==r.type){if(r.group.messages.some(e=>e.id===t.anchorId)){o=i;break}i++}}if(null!==o){let t=0;for(const i of e)if("date-separator"!==i.type){if(t>o&&!i.group.isOutgoing)return t;t++}return null}if(t.unreadCountAtSelection>0){const o=e.filter(e=>"date-separator"!==e.type).length,i=o-t.unreadCountAtSelection;return i>=0?i:0}return null}cursorAtTail(e,t){return!(!e||null===t)&&this._lastRead[e]===t}}const Fu=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function Au(e){const t=(new TextEncoder).encode(e),o=t.length,i=8*o,r=o+9+63&-64,s=new Uint8Array(r);s.set(t),s[o]=128;const a=new DataView(s.buffer);a.setUint32(r-4,i,!1);let n=1779033703,l=3144134277,d=1013904242,c=2773480762,h=1359893119,p=2600822924,u=528734635,m=1541459225;const g=new Int32Array(64);for(let e=0;e<r;e+=64){for(let t=0;t<16;t++)g[t]=a.getInt32(e+4*t,!1);for(let e=16;e<64;e++){const t=(g[e-15]>>>7|g[e-15]<<25)^(g[e-15]>>>18|g[e-15]<<14)^g[e-15]>>>3,o=(g[e-2]>>>17|g[e-2]<<15)^(g[e-2]>>>19|g[e-2]<<13)^g[e-2]>>>10;g[e]=g[e-16]+t+g[e-7]+o|0}let t=n,o=l,i=d,r=c,s=h,v=p,f=u,y=m;for(let e=0;e<64;e++){const a=y+((s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7))+(s&v^~s&f)+Fu[e]+g[e]|0,n=t&o^t&i^o&i;y=f,f=v,v=s,s=r+a|0,r=i,i=o,o=t,t=a+(((t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10))+n|0)|0}n=n+t|0,l=l+o|0,d=d+i|0,c=c+r|0,h=h+s|0,p=p+v|0,u=u+f|0,m=m+y|0}const v=e=>(e>>>0).toString(16).padStart(8,"0");return v(n)+v(l)+v(d)+v(c)+v(h)+v(p)+v(u)+v(m)}function Mu(e){const t=[],o=new Set;let i;const r=new RegExp(Yp.source,"g");for(;null!==(i=r.exec(e));){const e=i[1];o.has(e)||(o.add(e),t.push(e))}const s=new RegExp(Qp.source,"g");for(;null!==(i=s.exec(e));){const e=i[1];o.has(e)||(o.add(e),t.push(e))}return t}function Du(e){if(!e||0===e.length)return{};let t,o;for(const i of e)void 0===t&&"string"==typeof i.flood_scope&&(t=i.flood_scope),void 0===o&&"boolean"==typeof i.region_scope&&(o=i.region_scope);return{floodScope:t,regionScope:o}}function Eu(e){var t,o,i,r;const s=Du(e.rx_log_data);return{id:e.id,sender:e.sender,text:e.text,timestamp:new Date(e.timestamp),isOutgoing:e.outgoing,isSystem:!1,raw:e.text,mentions:Mu(e.text),rxLogData:e.rx_log_data,deliveryStatus:e.delivery_status?{status:e.delivery_status,ackReceived:e.ack_received,attempts:1+(null!==(t=null===(o=e.retries)||void 0===o?void 0:o.length)&&void 0!==t?t:0),repeaterCount:e.repeater_count,roundTripMs:e.round_trip_ms}:void 0,repeaterCount:e.repeater_count,lateEchoes:e.late_echoes&&e.late_echoes.length>0?e.late_echoes:void 0,resends:e.resends&&e.resends.length>0?e.resends:void 0,floodScope:null!==(i=e.flood_scope)&&void 0!==i?i:s.floodScope,regionScope:null!==(r=e.region_scope)&&void 0!==r?r:s.regionScope}}function Pu(e,t){return e.getFullYear()!==t.getFullYear()||e.getMonth()!==t.getMonth()||e.getDate()!==t.getDate()}function zu(e){const t=new Date,o=new Date(t.getFullYear(),t.getMonth(),t.getDate()),i=new Date(e.getFullYear(),e.getMonth(),e.getDate()),r=Math.floor((o.getTime()-i.getTime())/864e5);return 0===r?uh("Today"):1===r?uh("Yesterday"):r<7?e.toLocaleDateString(hh(),{weekday:"long"}):e.toLocaleDateString(hh(),{weekday:"long",month:"long",day:"numeric"})}function Iu(e){const t=(null!=e?e:[]).map(e=>null==e?void 0:e.hop_count).filter(e=>"number"==typeof e);return t.length>0?Math.min(...t):null}class Ru{constructor(e){this._messages=[],this._loading=!1,this._error=null,this._entityId=null,this._hass=null,this._pollTimer=null,this._realtimeSubscriptions=[],this._retryCount=0,this._onChange=null,this._fetchDebounce=null,this._active=!1,this._hasOlderMessages=!0,this._loadingOlder=!1,this._hasNewerMessages=!1,this._loadingNewer=!1,this._newMessagesWhileAway=0,this._userAtBottom=!1,this._config=e}get messages(){return this._messages.some(Ah)?this._messages.filter(e=>!Ah(e)):this._messages}get loading(){return this._loading}get error(){return this._error}get entityId(){return this._entityId}get loadingOlder(){return this._loadingOlder}get hasOlderMessages(){return this._hasOlderMessages}get loadingNewer(){return this._loadingNewer}get hasNewerMessages(){return this._hasNewerMessages}get newMessagesWhileAway(){return this._newMessagesWhileAway}get userAtBottom(){return this._userAtBottom}setUserAtBottom(e){this._userAtBottom!==e&&(this._userAtBottom=e,e&&!this._hasNewerMessages&&this._newMessagesWhileAway>0&&(this._newMessagesWhileAway=0,this._notify()))}resetNewMessagesCounter(){0!==this._newMessagesWhileAway&&(this._newMessagesWhileAway=0,this._notify())}setOnChange(e){this._onChange=e}setHass(e){this._hass=e}setConfig(e){this._config=e}async switchEntity(e,t=null){if(e!==this._entityId){if(this._stopUpdates(),this._entityId=e,this._messages=[],this._error=null,this._retryCount=0,this._hasOlderMessages=!0,this._loadingOlder=!1,this._hasNewerMessages=!1,this._loadingNewer=!1,this._newMessagesWhileAway=0,this._userAtBottom=!1,!e)return this._active=!1,void this._notify();this._active=!0,this._startUpdates(e),t?await this._fetchAroundAnchor(e,t):await this._fetchMessages(e)}}async refresh(){this._entityId&&await this._fetchMessages(this._entityId)}addOptimisticMessage(e,t){const o=new Date,i={id:`optimistic_${o.getTime()}_${Math.random().toString(36).slice(2,8)}`,sender:e,text:t,timestamp:o,isOutgoing:!0,isSystem:!1,raw:`${e}: ${t}`,mentions:[]};this._messages=[...this._messages,i],this._notify()}async loadOlderMessages(){if(!this._loadingOlder&&this._hasOlderMessages&&this._hass&&this._entityId){this._loadingOlder=!0,this._notify();try{const e=this._messages.find(e=>!e.id.startsWith("rt_")&&!e.id.startsWith("optimistic_")),t={type:"meshcore_chattx/get_stored_messages",entity_id:this._entityId,limit:50};e&&(t.before=e.id);const o=await this._hass.callWS(t),i=o.messages.map(Eu);this._hasOlderMessages=o.has_more;const r=new Set(this._messages.map(e=>e.id)),s=i.filter(e=>!r.has(e.id));s.length>0&&(this._messages=[...s,...this._messages],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime()))}catch(e){}finally{this._loadingOlder=!1,this._notify()}}}async loadNewerMessages(){if(!this._loadingNewer&&this._hasNewerMessages&&this._hass&&this._entityId){this._loadingNewer=!0,this._notify();try{let t;for(let e=this._messages.length-1;e>=0;e--){const o=this._messages[e].id;if(!o.startsWith("rt_")&&!o.startsWith("optimistic_")){t=o;break}}const o={type:"meshcore_chattx/get_stored_messages",entity_id:this._entityId,limit:50};t&&(o.after=t);const i=await this._hass.callWS(o),r=i.messages.map(Eu);this._hasNewerMessages=i.has_more;const s=new Set(r.map(e=>e.id));this._messages=this._messages.filter(e=>!e.id.startsWith("rt_")||!s.has(e.id.substring(3)));const a=new Set(this._messages.map(e=>e.id)),n=r.filter(e=>!a.has(e.id));if(n.length>0){var e;this._messages=[...this._messages,...n],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const t=null!==(e=this._config.max_messages)&&void 0!==e?e:500;this._messages.length>t&&(this._messages=this._messages.slice(-t),this._hasOlderMessages=!0)}}catch(e){}finally{this._loadingNewer=!1,this._notify()}}}async fetchAroundTimestamp(e){const t=new Date(e).getTime(),o=this._messages.find(e=>Math.abs(e.timestamp.getTime()-t)<2e3);if(o)return!0;let i=0;for(;this._hasOlderMessages&&i<20;){await this.loadOlderMessages(),i++;const e=this._messages.find(e=>Math.abs(e.timestamp.getTime()-t)<2e3);if(e)return!0}return!1}pause(){this._stopUpdates(),this._active=!1,this._fetchDebounce&&(clearTimeout(this._fetchDebounce),this._fetchDebounce=null)}async resume(){this._entityId&&!this._active&&(this._active=!0,this._startUpdates(this._entityId),await this._fetchMessages(this._entityId))}destroy(){this._stopUpdates(),this._active=!1,this._fetchDebounce&&(clearTimeout(this._fetchDebounce),this._fetchDebounce=null),this._onChange=null}async _fetchMessages(e){if(this._hass){this._loading=!0,this._notify();try{var t;const o=50,i=await this._hass.callWS({type:"meshcore_chattx/get_stored_messages",entity_id:e,limit:o}),r=i.messages.map(Eu);this._hasOlderMessages=i.has_more;const s=new Set(r.map(e=>e.id)),a=this._messages.filter(e=>{if(e.id.startsWith("optimistic_")){const t=r.some(t=>t.sender===e.sender&&t.text===e.text);return!t}if(e.id.startsWith("rt_")){const t=e.id.substring(3);return!s.has(t)}return!1});this._messages=[...r,...a],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const n=null!==(t=this._config.max_messages)&&void 0!==t?t:500;this._messages.length>n&&(this._messages=this._messages.slice(-n),this._hasOlderMessages=!0),this._error=null,this._retryCount=0}catch(e){const t=e instanceof Error?e.message:String(e);this._error=uh("Failed to fetch messages: {message}",{message:t}),this._retryCount++}finally{this._loading=!1,this._notify()}}}async _fetchAroundAnchor(e,t){if(this._hass){this._loading=!0,this._notify();try{var o;const i=await async function(e,t,o,i=25,r=50){return e.callWS({type:"meshcore_chattx/get_messages_around",entity_id:t,anchor_id:o,before_limit:i,after_limit:r})}(this._hass,e,t),r=i.messages.map(Eu);this._hasOlderMessages=i.has_more_before,this._hasNewerMessages=i.has_more_after;const s=new Set(r.map(e=>e.id)),a=this._messages.filter(e=>{if(e.id.startsWith("optimistic_")){const t=r.some(t=>t.sender===e.sender&&t.text===e.text);return!t}if(e.id.startsWith("rt_")){const t=e.id.substring(3);return!s.has(t)}return!1});this._messages=[...r,...a],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const n=null!==(o=this._config.max_messages)&&void 0!==o?o:500;this._messages.length>n&&(this._messages=this._messages.slice(-n),this._hasOlderMessages=!0),this._error=null,this._retryCount=0}catch(e){const t=e instanceof Error?e.message:String(e);this._error=uh("Failed to fetch messages: {message}",{message:t}),this._retryCount++}finally{this._loading=!1,this._notify()}}}_startUpdates(e){this._startPolling(e),this._subscribeRealtime(e).catch(()=>{})}async _subscribeRealtime(e){if(!this._hass)return;const t=[];try{const o=await this._hass.connection.subscribeEvents(t=>{t.data.entity_id===e&&this._handleRealtimeMessage(t.data)},"meshcore_message");t.push(o);const i=await this._hass.connection.subscribeEvents(t=>{t.data.entity_id===e&&this._handleDeliveryUpdate(t.data)},"meshcore_delivery_update");t.push(i),this._realtimeSubscriptions=t}catch(e){throw t.forEach(e=>e()),e}}_handleRealtimeMessage(e){var t,o;if("direct"===e.message_type&&!e.outgoing&&gu(e.pubkey_prefix))return;const i=null!==(t=e.sender_name)&&void 0!==t?t:e.sender,r=null!==(o=e.message)&&void 0!==o?o:e.text;if(i===this._config.node_name){if(i&&r&&!1!==e.outgoing){const t=e.ack_received,o=e.repeater_count,a=e.rx_log_data,n=e.message_type;let l;var s;if("dm"===n||"direct"===n)l={status:!0===t?"delivered":"sent",ackReceived:null!=t?t:void 0};else l={status:"sent",repeaterCount:null!=o?o:null!==(s=null==a?void 0:a.length)&&void 0!==s?s:0};for(let e=this._messages.length-1;e>=0;e--){const t=this._messages[e];if(t.id.startsWith("optimistic_")&&t.sender===i&&t.text===r){t.deliveryStatus=l,a&&(t.rxLogData=a),this._notify();break}}}!this._entityId||this._hasNewerMessages||this._hasOlderMessages||this._debouncedFetch(this._entityId)}else{if(i&&r){let t=r.replace(Gp,"");const o=i+": ";t.startsWith(o)&&(t=t.substring(o.length));const s=e.timestamp||(new Date).toISOString(),l=new Date(s),d=function(e,t,o){return Au(`${e}|${t}|${o}`).substring(0,12)}(s,i,t),c=`rt_${d}`,h=this._messages.some(e=>e.id===c||e.id===d),p=h?void 0:this._messages.find(e=>!e.isOutgoing&&e.sender===i&&e.text===t&&l.getTime()-e.timestamp.getTime()>=0&&l.getTime()-e.timestamp.getTime()<=3e5);if(p){var a,n;const t=null===(a=e.rx_log_data)||void 0===a?void 0:a[0];p.resends=[...null!==(n=p.resends)&&void 0!==n?n:[],{received_at:s,hop_count:null==t?void 0:t.hop_count,snr:null==t?void 0:t.snr,rssi:null==t?void 0:t.rssi,path_nodes:null==t?void 0:t.path_nodes}],this._notify()}else if(!h){const o=Mu(t),s=e.rx_log_data,a={id:c,sender:i,text:t,timestamp:l,isOutgoing:!1,isSystem:!1,raw:r,mentions:o,rxLogData:s&&s.length>0?s:void 0,...Du(s)};this._messages.push(a),this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime()),this._userAtBottom&&!this._hasNewerMessages||this._newMessagesWhileAway++,this._notify()}}!this._entityId||this._hasNewerMessages||this._hasOlderMessages||this._debouncedFetch(this._entityId)}}_debouncedFetch(e){this._fetchDebounce&&clearTimeout(this._fetchDebounce),this._fetchDebounce=setTimeout(async()=>{if(this._fetchDebounce=null,this._active)try{await this._fetchMessages(e)}catch(e){}},500)}_handleDeliveryUpdate(e){const t=e.rx_log_data;if(e.progressive&&t&&t.length>0){const o=e.sender_name,i=e.message,r=e.timestamp;if(o&&i){const e=r?new Date(r).getTime():0;for(let r=this._messages.length-1;r>=0;r--){const s=this._messages[r];if(!s.isOutgoing&&s.sender===o&&s.text===i&&(!e||Math.abs(s.timestamp.getTime()-e)<1e4))return s.rxLogData=t,s.repeaterCount=t.length,void this._notify()}}}const o=e.send_id,i=e.status,r=e.repeater_count,s=e.ack_received,a=e.round_trip_ms,n=e.progressive;if(!o)return;let l,d;l=i||(!0===s?"delivered":!n||void 0!==r&&0!==r?"sent":"waiting");for(let e=this._messages.length-1;e>=0;e--)if(this._messages[e].isOutgoing){d=this._messages[e];break}d&&(d.deliveryStatus={status:l,repeaterCount:r,ackReceived:s,roundTripMs:a},void 0!==r&&(d.repeaterCount=r),this._notify())}async _pollFetch(e){if(this._hass&&!this._hasNewerMessages)try{let o;for(let e=this._messages.length-1;e>=0;e--){const t=this._messages[e].id;if(!t.startsWith("rt_")&&!t.startsWith("optimistic_")){o=t;break}}const i={type:"meshcore_chattx/get_stored_messages",entity_id:e,limit:50};o&&(i.after=o);const r=await this._hass.callWS(i);if(0===r.messages.length)return this._error=null,void(this._retryCount=0);const s=r.messages.map(Eu),a=new Set(this._messages.map(e=>e.id)),n=s.filter(e=>!a.has(e.id));if(n.length>0){var t;const e=new Set(n.map(e=>e.id));this._messages=this._messages.filter(t=>!t.id.startsWith("rt_")||!e.has(t.id.substring(3))),this._messages=this._messages.filter(e=>!e.id.startsWith("optimistic_")||!n.some(t=>t.sender===e.sender&&t.text===e.text)),this._messages=[...this._messages,...n],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const o=null!==(t=this._config.max_messages)&&void 0!==t?t:500;this._messages.length>o&&(this._messages=this._messages.slice(-o),this._hasOlderMessages=!0),this._notify()}this._error=null,this._retryCount=0}catch(e){this._retryCount++}}_startPolling(e){const t=()=>{if(!this._active)return;const o=this._retryCount>=5?6e4:3e4;this._pollTimer=setTimeout(async()=>{if(this._active){try{await this._pollFetch(e)}catch(e){}t()}},o)};t()}_stopUpdates(){this._pollTimer&&(clearTimeout(this._pollTimer),this._pollTimer=null);for(const e of this._realtimeSubscriptions)e();this._realtimeSubscriptions=[]}_notify(){this._onChange&&this._onChange()}}const Ou=new TextEncoder,Tu="chattx-strip-diacritics",Lu="chattx-show-contact-ids",Nu="chattx-show-message-preview",qu=/\b(?:https?:\/\/|www\.)[^\s<>"']+/gi,ju=/[.,;:!?)\]}]+$/;function Hu(e){const t=[];let o=0;for(const a of e.matchAll(qu)){var i,r,s;let n=a[0];const l=null!==(i=null===(r=n.match(ju))||void 0===r?void 0:r[0])&&void 0!==i?i:"";!l||l.startsWith(")")&&n.slice(0,-l.length).includes("(")||(n=n.slice(0,-l.length));const d=null!==(s=a.index)&&void 0!==s?s:0;if(n.length<5)continue;d>o&&t.push({text:e.slice(o,d)});const c=/^https?:\/\//i.test(n)?n:`https://${n}`;t.push({url:c,label:n}),o=d+n.length}return o<e.length&&t.push({text:e.slice(o)}),t}const Uu=/^https:\/\/[^\s]+\.(?:jpe?g|png|gif|webp)(?:\?[^\s]*)?$/i,Vu="chattx-drafts";function Ku(e){try{var t;const o=JSON.parse(null!==(t=Hc(Vu))&&void 0!==t?t:"{}"),i={};for(const[t,r]of Object.entries(null!=o?o:{}))r&&"string"==typeof r.text&&"number"==typeof r.at&&e-r.at<36e5&&(i[t]=r);return i}catch(e){return{}}}function Wu(e,t,o=Date.now()){const i=Ku(o);t.trim()?i[e]={text:t,at:o}:delete i[e],function(e){try{0===Object.keys(e).length?Vc(Vu):Uc(Vu,JSON.stringify(e))}catch(e){}}(i)}const Xu=/[\u{1F1E6}-\u{1F1FF}][\u{1F1E6}-\u{1F1FF}]|[0-9#*]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299\u{1F004}\u{1F02C}-\u{1F02F}\u{1F094}-\u{1F09F}\u{1F0AF}\u{1F0B0}\u{1F0C0}\u{1F0CF}\u{1F0D0}\u{1F0F6}-\u{1F0FF}\u{1F170}\u{1F171}\u{1F17E}\u{1F17F}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F1AE}-\u{1F1E5}\u{1F201}-\u{1F20F}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F23A}\u{1F23C}-\u{1F23F}\u{1F249}-\u{1F25F}\u{1F266}-\u{1F321}\u{1F324}-\u{1F393}\u{1F396}\u{1F397}\u{1F399}-\u{1F39B}\u{1F39E}-\u{1F3F0}\u{1F3F3}-\u{1F3F5}\u{1F3F7}-\u{1F3FA}\u{1F400}-\u{1F4FD}\u{1F4FF}-\u{1F53D}\u{1F549}-\u{1F54E}\u{1F550}-\u{1F567}\u{1F56F}\u{1F570}\u{1F573}-\u{1F57A}\u{1F587}\u{1F58A}-\u{1F58D}\u{1F590}\u{1F595}\u{1F596}\u{1F5A4}\u{1F5A5}\u{1F5A8}\u{1F5B1}\u{1F5B2}\u{1F5BC}\u{1F5C2}-\u{1F5C4}\u{1F5D1}-\u{1F5D3}\u{1F5DC}-\u{1F5DE}\u{1F5E1}\u{1F5E3}\u{1F5E8}\u{1F5EF}\u{1F5F3}\u{1F5FA}-\u{1F64F}\u{1F680}-\u{1F6C5}\u{1F6CB}-\u{1F6D2}\u{1F6D5}-\u{1F6E5}\u{1F6E9}\u{1F6EB}-\u{1F6F0}\u{1F6F3}-\u{1F6FF}\u{1F7DA}-\u{1F7FF}\u{1F80C}-\u{1F80F}\u{1F848}-\u{1F84F}\u{1F85A}-\u{1F85F}\u{1F888}-\u{1F88F}\u{1F8AE}\u{1F8AF}\u{1F8BC}-\u{1F8BF}\u{1F8C2}-\u{1F8CF}\u{1F8D9}-\u{1F8FF}\u{1F90C}-\u{1F93A}\u{1F93C}-\u{1F945}\u{1F947}-\u{1F9FF}\u{1FA58}-\u{1FA5F}\u{1FA6E}-\u{1FAFF}\u{1FC00}-\u{1FFFD}](?:\uFE0F|[\u{1F3FB}-\u{1F3FF}])?(?:\u200D[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299\u{1F004}\u{1F02C}-\u{1F02F}\u{1F094}-\u{1F09F}\u{1F0AF}\u{1F0B0}\u{1F0C0}\u{1F0CF}\u{1F0D0}\u{1F0F6}-\u{1F0FF}\u{1F170}\u{1F171}\u{1F17E}\u{1F17F}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F1AE}-\u{1F1E5}\u{1F201}-\u{1F20F}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F23A}\u{1F23C}-\u{1F23F}\u{1F249}-\u{1F25F}\u{1F266}-\u{1F321}\u{1F324}-\u{1F393}\u{1F396}\u{1F397}\u{1F399}-\u{1F39B}\u{1F39E}-\u{1F3F0}\u{1F3F3}-\u{1F3F5}\u{1F3F7}-\u{1F3FA}\u{1F400}-\u{1F4FD}\u{1F4FF}-\u{1F53D}\u{1F549}-\u{1F54E}\u{1F550}-\u{1F567}\u{1F56F}\u{1F570}\u{1F573}-\u{1F57A}\u{1F587}\u{1F58A}-\u{1F58D}\u{1F590}\u{1F595}\u{1F596}\u{1F5A4}\u{1F5A5}\u{1F5A8}\u{1F5B1}\u{1F5B2}\u{1F5BC}\u{1F5C2}-\u{1F5C4}\u{1F5D1}-\u{1F5D3}\u{1F5DC}-\u{1F5DE}\u{1F5E1}\u{1F5E3}\u{1F5E8}\u{1F5EF}\u{1F5F3}\u{1F5FA}-\u{1F64F}\u{1F680}-\u{1F6C5}\u{1F6CB}-\u{1F6D2}\u{1F6D5}-\u{1F6E5}\u{1F6E9}\u{1F6EB}-\u{1F6F0}\u{1F6F3}-\u{1F6FF}\u{1F7DA}-\u{1F7FF}\u{1F80C}-\u{1F80F}\u{1F848}-\u{1F84F}\u{1F85A}-\u{1F85F}\u{1F888}-\u{1F88F}\u{1F8AE}\u{1F8AF}\u{1F8BC}-\u{1F8BF}\u{1F8C2}-\u{1F8CF}\u{1F8D9}-\u{1F8FF}\u{1F90C}-\u{1F93A}\u{1F93C}-\u{1F945}\u{1F947}-\u{1F9FF}\u{1FA58}-\u{1FA5F}\u{1FA6E}-\u{1FAFF}\u{1FC00}-\u{1FFFD}](?:\uFE0F|[\u{1F3FB}-\u{1F3FF}])?)*/gu,Gu=/[^0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088F\u0897-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5C\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDC-\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u17F0-\u17F9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u20D0-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA827\uA82C\uA830-\uA835\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10107}-\u{10133}\u{10140}-\u{10178}\u{1018A}\u{1018B}\u{101FD}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{102E0}-\u{102FB}\u{10300}-\u{10323}\u{1032D}-\u{1034A}\u{10350}-\u{1037A}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{103D1}-\u{103D5}\u{10400}-\u{1049D}\u{104A0}-\u{104A9}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{105C0}-\u{105F3}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10858}-\u{10876}\u{10879}-\u{1089E}\u{108A7}-\u{108AF}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{108FB}-\u{1091B}\u{10920}-\u{10939}\u{10940}-\u{10959}\u{10980}-\u{109B7}\u{109BC}-\u{109CF}\u{109D2}-\u{10A03}\u{10A05}\u{10A06}\u{10A0C}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A38}-\u{10A3A}\u{10A3F}-\u{10A48}\u{10A60}-\u{10A7E}\u{10A80}-\u{10A9F}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE6}\u{10AEB}-\u{10AEF}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B58}-\u{10B72}\u{10B78}-\u{10B91}\u{10BA9}-\u{10BAF}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10CFA}-\u{10D27}\u{10D30}-\u{10D39}\u{10D40}-\u{10D65}\u{10D69}-\u{10D6D}\u{10D6F}-\u{10D85}\u{10E60}-\u{10E7E}\u{10E80}-\u{10EA9}\u{10EAB}\u{10EAC}\u{10EB0}\u{10EB1}\u{10EC2}-\u{10EC7}\u{10EFA}-\u{10F27}\u{10F30}-\u{10F54}\u{10F70}-\u{10F85}\u{10FB0}-\u{10FCB}\u{10FE0}-\u{10FF6}\u{11000}-\u{11046}\u{11052}-\u{11075}\u{1107F}-\u{110BA}\u{110C2}\u{110D0}-\u{110E8}\u{110F0}-\u{110F9}\u{11100}-\u{11134}\u{11136}-\u{1113F}\u{11144}-\u{11147}\u{11150}-\u{11173}\u{11176}\u{11180}-\u{111C4}\u{111C9}-\u{111CC}\u{111CE}-\u{111DA}\u{111DC}\u{111E1}-\u{111F4}\u{11200}-\u{11211}\u{11213}-\u{11237}\u{1123E}-\u{11241}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112EA}\u{112F0}-\u{112F9}\u{11300}-\u{11303}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133B}-\u{11344}\u{11347}\u{11348}\u{1134B}-\u{1134D}\u{11350}\u{11357}\u{1135D}-\u{11363}\u{11366}-\u{1136C}\u{11370}-\u{11374}\u{11380}-\u{11389}\u{1138B}\u{1138E}\u{11390}-\u{113B5}\u{113B7}-\u{113C0}\u{113C2}\u{113C5}\u{113C7}-\u{113CA}\u{113CC}-\u{113D3}\u{113E1}\u{113E2}\u{11400}-\u{1144A}\u{11450}-\u{11459}\u{1145E}-\u{11461}\u{11480}-\u{114C5}\u{114C7}\u{114D0}-\u{114D9}\u{11580}-\u{115B5}\u{115B8}-\u{115C0}\u{115D8}-\u{115DD}\u{11600}-\u{11640}\u{11644}\u{11650}-\u{11659}\u{11680}-\u{116B8}\u{116C0}-\u{116C9}\u{116D0}-\u{116E3}\u{11700}-\u{1171A}\u{1171D}-\u{1172B}\u{11730}-\u{1173B}\u{11740}-\u{11746}\u{11800}-\u{1183A}\u{118A0}-\u{118F2}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{11935}\u{11937}\u{11938}\u{1193B}-\u{11943}\u{11950}-\u{11959}\u{119A0}-\u{119A7}\u{119AA}-\u{119D7}\u{119DA}-\u{119E1}\u{119E3}\u{119E4}\u{11A00}-\u{11A3E}\u{11A47}\u{11A50}-\u{11A99}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11B60}-\u{11B67}\u{11BC0}-\u{11BE0}\u{11BF0}-\u{11BF9}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C36}\u{11C38}-\u{11C40}\u{11C50}-\u{11C6C}\u{11C72}-\u{11C8F}\u{11C92}-\u{11CA7}\u{11CA9}-\u{11CB6}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D36}\u{11D3A}\u{11D3C}\u{11D3D}\u{11D3F}-\u{11D47}\u{11D50}-\u{11D59}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D8E}\u{11D90}\u{11D91}\u{11D93}-\u{11D98}\u{11DA0}-\u{11DA9}\u{11DB0}-\u{11DDB}\u{11DE0}-\u{11DE9}\u{11EE0}-\u{11EF6}\u{11F00}-\u{11F10}\u{11F12}-\u{11F3A}\u{11F3E}-\u{11F42}\u{11F50}-\u{11F5A}\u{11FB0}\u{11FC0}-\u{11FD4}\u{12000}-\u{12399}\u{12400}-\u{1246E}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342F}\u{13440}-\u{13455}\u{13460}-\u{143FA}\u{14400}-\u{14646}\u{16100}-\u{16139}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A60}-\u{16A69}\u{16A70}-\u{16ABE}\u{16AC0}-\u{16AC9}\u{16AD0}-\u{16AED}\u{16AF0}-\u{16AF4}\u{16B00}-\u{16B36}\u{16B40}-\u{16B43}\u{16B50}-\u{16B59}\u{16B5B}-\u{16B61}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16D40}-\u{16D6C}\u{16D70}-\u{16D79}\u{16E40}-\u{16E96}\u{16EA0}-\u{16EB8}\u{16EBB}-\u{16ED3}\u{16F00}-\u{16F4A}\u{16F4F}-\u{16F87}\u{16F8F}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{16FE4}\u{16FF0}-\u{16FF6}\u{17000}-\u{18CD5}\u{18CFF}-\u{18D1E}\u{18D80}-\u{18DF2}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B132}\u{1B150}-\u{1B152}\u{1B155}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1BC9D}\u{1BC9E}\u{1CCF0}-\u{1CCF9}\u{1CF00}-\u{1CF2D}\u{1CF30}-\u{1CF46}\u{1D165}-\u{1D169}\u{1D16D}-\u{1D172}\u{1D17B}-\u{1D182}\u{1D185}-\u{1D18B}\u{1D1AA}-\u{1D1AD}\u{1D242}-\u{1D244}\u{1D2C0}-\u{1D2D3}\u{1D2E0}-\u{1D2F3}\u{1D360}-\u{1D378}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1D7CE}-\u{1D7FF}\u{1DA00}-\u{1DA36}\u{1DA3B}-\u{1DA6C}\u{1DA75}\u{1DA84}\u{1DA9B}-\u{1DA9F}\u{1DAA1}-\u{1DAAF}\u{1DF00}-\u{1DF1E}\u{1DF25}-\u{1DF2A}\u{1E000}-\u{1E006}\u{1E008}-\u{1E018}\u{1E01B}-\u{1E021}\u{1E023}\u{1E024}\u{1E026}-\u{1E02A}\u{1E030}-\u{1E06D}\u{1E08F}\u{1E100}-\u{1E12C}\u{1E130}-\u{1E13D}\u{1E140}-\u{1E149}\u{1E14E}\u{1E290}-\u{1E2AE}\u{1E2C0}-\u{1E2F9}\u{1E4D0}-\u{1E4F9}\u{1E5D0}-\u{1E5FA}\u{1E6C0}-\u{1E6DE}\u{1E6E0}-\u{1E6F5}\u{1E6FE}\u{1E6FF}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E8C7}-\u{1E8D6}\u{1E900}-\u{1E94B}\u{1E950}-\u{1E959}\u{1EC71}-\u{1ECAB}\u{1ECAD}-\u{1ECAF}\u{1ECB1}-\u{1ECB4}\u{1ED01}-\u{1ED2D}\u{1ED2F}-\u{1ED3D}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{1F100}-\u{1F10C}\u{1FBF0}-\u{1FBF9}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B81D}\u{2B820}-\u{2CEAD}\u{2CEB0}-\u{2EBE0}\u{2EBF0}-\u{2EE5D}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}\u{31350}-\u{33479}\u{E0100}-\u{E01EF}]+/u,Yu=e=>Array.from(e)[0].toUpperCase();function Qu(e,t){var o;const i=(null!=e?e:"").normalize("NFC"),r=null!==(o=i.match(Xu))&&void 0!==o?o:[],s=i.replace(Xu," ").split(Gu).filter(Boolean),a=r[r.length-1];return a?`${s.length>0?Yu(s[0]):""}${a}`:0===s.length?t:s.length>1?Yu(s[0])+Yu(s[1]):Array.from(s[0]).slice(0,2).join("").toUpperCase()}let Zu=class extends Lp{constructor(){super(...arguments),this.conversations=[],this.activeId=null,this.unreadCounts={},this.nodePrefix=null,this.activity={},this.showContactIds=!0,this.showMessagePreview=!0,this.previews={},this.nodeName="",this._ageTimer=null,this._activeFilter="all",this._filteredConversations=[]}connectedCallback(){super.connectedCallback(),this._ageTimer=setInterval(()=>this.requestUpdate(),6e4)}disconnectedCallback(){super.disconnectedCallback(),this._ageTimer&&clearInterval(this._ageTimer),this._ageTimer=null}updated(e){(e.has("conversations")||e.has("_activeFilter"))&&this._updateFiltered()}render(){return bp(l||(l=Sc`
      <div class="sidebar-header">
        <span class="sidebar-title">${0}</span>
        <button
          class="compose-btn"
          title=${0}
          aria-label=${0}
          @click=${0}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
          </svg>
        </button>
      </div>
      <div class="filter-bar" role="tablist" aria-label=${0}>
        ${0}
        ${0}
        ${0}
        ${0}
      </div>
      <div
        class="conversation-list"
        role="listbox"
        aria-label=${0}
        @keydown=${0}>
        ${0}
      </div>
    `),uh("Chats"),uh("Manage contacts & channels"),uh("Manage contacts and channels"),()=>this.dispatchEvent(new CustomEvent("manage-requested",{bubbles:!0,composed:!0})),uh("Conversation filter"),this._renderFilterBtn("all",uh("All")),this._renderFilterBtn("unread",uh("Unread")),this._renderFilterBtn("dms",uh("DMs")),this._renderFilterBtn("channels",uh("Channels")),uh("Conversations"),this._onListKeyDown,this._filteredConversations.length>0?this._filteredConversations.map((e,t)=>this._renderConversation(e,t)):bp(d||(d=Sc`
              <div class="empty-state">
                <div class="empty-text">
                  ${0}
                </div>
              </div>
            `),this._emptyMessage()))}_onListKeyDown(e){var t;const o=e.key;if("ArrowDown"!==o&&"ArrowUp"!==o&&"Home"!==o&&"End"!==o&&"Enter"!==o&&" "!==o)return;const i=this.shadowRoot;if(!i)return;const r=Array.from(i.querySelectorAll(".conversation-item"));if(0===r.length)return;const s=i.activeElement;let a=s?r.indexOf(s):-1;"Enter"!==o&&" "!==o?(e.preventDefault(),"Home"===o?a=0:"End"===o?a=r.length-1:"ArrowDown"===o?a=a<0?0:Math.min(a+1,r.length-1):"ArrowUp"===o&&(a=a<0?r.length-1:Math.max(a-1,0)),null===(t=r[a])||void 0===t||t.focus()):s&&a>=0&&(e.preventDefault(),s.click())}_renderFilterBtn(e,t){const o=this._activeFilter===e;return bp(c||(c=Sc`
      <button
        class="filter-btn ${0}"
        role="tab"
        aria-selected=${0}
        @click=${0}>
        ${0}
      </button>
    `),o?"active":"",o?"true":"false",()=>{this._activeFilter=e},t)}_emptyMessage(){switch(this._activeFilter){case"unread":return uh("No unread conversations");case"dms":return uh("No direct messages");case"channels":return uh("No channels");default:return uh("No conversations yet")}}_renderConversation(e,t){const o="pubkey_prefix"in e,i=o?e.pubkey_prefix:String(e.channel_idx),r=o?e.adv_name:e.name,s=function(e,t){const o=eu(e);if(0===o)return"";const i=t-o;return i<6e4?uh("just now"):uh("{amount} ago",{amount:i<ru?`${Math.floor(i/6e4)} min`:i>1728e5?`${Math.floor(i/864e5)} d`:`${Math.floor(i/ru)} h`})}((a=e,n=this.activity,l=this.nodePrefix,iu(n).get(ou(a,l))),Date.now());var a,n,l;const d=o?e.pubkey_prefix:uh("Channel {index}",{index:e.channel_idx}),c=[this.showContactIds?d:"",s].filter(Boolean).join(" · "),v=this.showMessagePreview?function(e,t,o){const i=ou(e,o);for(const[e,o]of Object.entries(t))if(e.substring(e.indexOf(".")+1)===i)return o}(e,this.previews,this.nodePrefix):void 0,f=v?`${v.sender&&v.sender===this.nodeName?uh("You"):v.sender}${v.sender?": ":""}${v.text}`:"",y=Qu(r,o?e.pubkey_prefix.substring(0,2).toUpperCase():`#${e.channel_idx}`),_=this.activeId===i,b=this._getUnreadCount(i),x=[r,c,b>0?`${b} unread`:""].filter(Boolean).join(", "),w=this._filteredConversations.some(e=>("pubkey_prefix"in e?e.pubkey_prefix:String(e.channel_idx))===this.activeId);return bp(h||(h=Sc`
      <div
        class=${0}
        role="option"
        tabindex=${0}
        aria-selected=${0}
        aria-label=${0}
        @click=${0}>
        <div class="conversation-avatar ${0}">${0}</div>
        <div class="conversation-info">
          <div class="conversation-name">${0}</div>
          ${0}
          ${0}
        </div>
        ${0}
      </div>
    `),_?"conversation-item active":"conversation-item",_||!w&&0===t?"0":"-1",_?"true":"false",x,()=>this.dispatchEvent(new CustomEvent("conversation-selected",{detail:{id:i,isContact:o}})),o?"":"channel",y,r,c?bp(p||(p=Sc`<div class="conversation-detail">${0}</div>`),c):"",f?bp(u||(u=Sc`<div class="conversation-preview">${0}</div>`),f):"",b>0?bp(m||(m=Sc`<div class="unread-badge" aria-hidden="true">${0}</div>`),b):bp(g||(g=Sc`<span class="chevron" aria-hidden="true">›</span>`)))}_getUnreadCount(e){return this.unread?this.unread.badgeCount(e,this.nodePrefix):0}_updateFiltered(){switch(this._activeFilter){case"all":this._filteredConversations=[...this.conversations];break;case"unread":this._filteredConversations=this.conversations.filter(e=>{const t="pubkey_prefix"in e?e.pubkey_prefix:String(e.channel_idx);return this._getUnreadCount(t)>0});break;case"dms":this._filteredConversations=this.conversations.filter(e=>"pubkey_prefix"in e);break;case"channels":this._filteredConversations=this.conversations.filter(e=>!("pubkey_prefix"in e))}}};Zu.styles=Rh(v||(v=Sc`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 280px;
      border-right: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff);
      flex-shrink: 0;
    }

    .sidebar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 12px 0;
      gap: 8px;
    }

    .sidebar-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-text-color);
      flex: 1;
    }

    .compose-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 50%;
      background: transparent;
      color: var(--secondary-text-color);
      cursor: pointer;
      transition: all 0.15s;
      flex-shrink: 0;
    }

    .compose-btn:hover {
      background: rgba(0, 0, 0, 0.05);
      color: var(--primary-text-color);
    }

    .filter-bar {
      display: flex;
      padding: 12px 12px 8px;
      gap: 4px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }

    .filter-btn {
      flex: 1;
      padding: 6px 4px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 16px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 11px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
      white-space: nowrap;
    }

    .filter-btn:hover {
      background: rgba(0, 0, 0, 0.03);
      color: var(--primary-text-color);
    }

    .filter-btn.active {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: #fff;
    }

    .conversation-list {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .conversation-list::-webkit-scrollbar {
      width: 6px;
    }

    .conversation-list::-webkit-scrollbar-track {
      background: transparent;
    }

    .conversation-list::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
      border-radius: 3px;
    }

    .conversation-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
      transition: background 0.15s;
      outline: none;
    }

    .conversation-item:hover,
    .conversation-item:focus-visible {
      background: rgba(0, 0, 0, 0.02);
    }

    .conversation-item:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: -2px;
    }

    .conversation-item.active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      border-left: 3px solid var(--primary-color, #03a9f4);
    }

    .conversation-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      flex-shrink: 0;
    }

    .conversation-avatar.channel {
      background: var(--accent-color, #ff9800);
    }

    .conversation-info {
      flex: 1;
      overflow: hidden;
    }

    .conversation-name {
      font-size: 15px;
      font-weight: 600;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .conversation-preview {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      opacity: 0.8;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .conversation-detail {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .chevron {
      flex-shrink: 0;
      color: var(--secondary-text-color, #727272);
      font-size: 18px;
      line-height: 1;
      opacity: 0.5;
    }

    .unread-badge {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 600;
      flex-shrink: 0;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color, #727272);
      text-align: center;
      padding: 24px;
    }

    .empty-icon {
      font-size: 32px;
      margin-bottom: 8px;
      opacity: 0.5;
    }

    .empty-text {
      font-size: 13px;
    }
  `)),Fc([Up({type:Array})],Zu.prototype,"conversations",void 0),Fc([Up({type:String})],Zu.prototype,"activeId",void 0),Fc([Up({attribute:!1})],Zu.prototype,"unread",void 0),Fc([Up({type:Object})],Zu.prototype,"unreadCounts",void 0),Fc([Up({type:String})],Zu.prototype,"nodePrefix",void 0),Fc([Up({type:Object})],Zu.prototype,"activity",void 0),Fc([Up({type:Boolean})],Zu.prototype,"showContactIds",void 0),Fc([Up({type:Boolean})],Zu.prototype,"showMessagePreview",void 0),Fc([Up({type:Object})],Zu.prototype,"previews",void 0),Fc([Up({type:String})],Zu.prototype,"nodeName",void 0),Fc([Vp()],Zu.prototype,"_activeFilter",void 0),Fc([Vp()],Zu.prototype,"_filteredConversations",void 0),Zu=Fc([qp("chattx-conversation-list")],Zu);const Ju="chattxSteps",em=new Map;let tm=[],om=null,im=0,rm=!1;function sm(){var e;const t=null===(e=history.state)||void 0===e?void 0:e[Ju];return Array.isArray(t)?t:[]}function am(e){var t;return{...null!==(t=history.state)&&void 0!==t?t:{},[Ju]:e}}function nm(){const e=new Set(sm()),t=[...em.keys()].filter(t=>!e.has(t)).reverse();for(const e of t){const t=em.get(e);em.delete(e),null==t||t()}}function lm(){om=null;const e=sm(),t=e.findIndex(e=>tm.includes(e));tm=[],t>=0&&history.go(-(e.length-t))}function dm(e){rm||(rm=!0,window.addEventListener("popstate",nm));const t=`s${Date.now().toString(36)}-${im++}`;em.set(t,e);const o=sm(),i=o[o.length-1];return void 0!==i&&tm.includes(i)?(tm=tm.filter(e=>e!==i),history.replaceState(am([...o.slice(0,-1),t]),"")):history.pushState(am([...o,t]),""),t}function cm(e){e&&em.delete(e)&&sm().includes(e)&&(tm.push(e),null!=om||(om=setTimeout(lm,0)))}const hm=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(","),pm=[];let um=!1;function mm(){um||(um=!0,document.addEventListener("keydown",gm,!0))}function gm(e){0!==pm.length&&pm[pm.length-1]._handleKeyDown(e)}class vm{constructor(e,t){this.host=e,this.opts=t,this._wasOpen=!1,this._previousActive=null,this._inStack=!1,this._step=null,this.host.addController(this),mm()}hostConnected(){mm()}hostDisconnected(){this._inStack&&this._popStack(),cm(this._step),this._step=null,this._previousActive=null,this._wasOpen=!1}hostUpdated(){const e=this.opts.isOpen();if(e&&!this._wasOpen)this._previousActive=this._currentDocumentActive(),this._pushStack(),this._focusFirstSoon(),!1!==this.opts.backGesture&&(this._step=dm(()=>{this._step=null,this.opts.onEscape()}));else if(!e&&this._wasOpen){this._popStack(),cm(this._step),this._step=null;const e=this._previousActive;if(this._previousActive=null,e&&e.isConnected&&"function"==typeof e.focus)try{e.focus()}catch(e){}}this._wasOpen=e}_pushStack(){this._inStack||(pm.push(this),this._inStack=!0)}_popStack(){const e=pm.indexOf(this);e>=0&&pm.splice(e,1),this._inStack=!1}_getFocusables(){var e,t,o;const i=null!==(e=null===(t=(o=this.opts).getScope)||void 0===t?void 0:t.call(o))&&void 0!==e?e:this.host.shadowRoot;return i?Array.from(i.querySelectorAll(hm)).filter(e=>!(e.hasAttribute("aria-hidden")||e.hidden||null===e.offsetParent&&0===e.getClientRects().length)):[]}_focusFirstSoon(){queueMicrotask(()=>{var e,t,o;if(!this.opts.isOpen())return;const i=null!==(e=null===(t=(o=this.opts).getScope)||void 0===t?void 0:t.call(o))&&void 0!==e?e:this.host.shadowRoot;if(i&&this._scopeContainsFocus(i))return;const r=this._getFocusables();if(0!==r.length)try{r[0].focus()}catch(e){}})}_scopeContainsFocus(e){let t=document.activeElement;for(;t;){if(t===e)return!0;if(e.host===t)return!0;if("contains"in e&&e.contains(t))return!0;const o=t.shadowRoot;if(!o||!o.activeElement)break;t=o.activeElement}return!1}_currentDocumentActive(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_handleKeyDown(e){var t,o,i;if(!this.opts.isOpen())return;if("Escape"===e.key)return e.preventDefault(),e.stopPropagation(),void this.opts.onEscape();if("Tab"!==e.key)return;const r=this._getFocusables();if(0===r.length)return;const s=null!==(t=null===(o=(i=this.opts).getScope)||void 0===o?void 0:o.call(i))&&void 0!==t?t:this.host.shadowRoot,a=s?this._findFocusedInScope(s):null,n=a?r.indexOf(a):-1;let l;l=e.shiftKey?n<=0?r.length-1:n-1:-1===n||n>=r.length-1?0:n+1,e.preventDefault(),e.stopPropagation();try{r[l].focus()}catch(e){}}_findFocusedInScope(e){let t=document.activeElement;for(;t;){if(e===t||"contains"in e&&e.contains(t)){if(t.shadowRoot&&t.shadowRoot.activeElement){t=t.shadowRoot.activeElement;continue}return t}if(e.host===t){t=e.activeElement;continue}const o=t.shadowRoot;if(!o||!o.activeElement)break;t=o.activeElement}return null}}function fm(e,t){new vm(e,t)}let ym=class extends Lp{constructor(){super(),this.open=!1,this.narrow=!1,this.editMode=!1,this.initialChannelIdx=0,this.initialChannelName="",this.initialScope="",this.initialExcludeFromTotal=!1,this.initialKey="",this.availableIndices=[],this._channelIdx=0,this._channelName="",this._customKey="",this._autoKey=!0,this._scope="",this._excludeFromTotal=!1,this._availableScopes=null,this._globalAllowed=!1,this._saving=!1,this._error=null,this._initialized=!1,fm(this,{isOpen:()=>this.open,onEscape:()=>this._onCancel()})}willUpdate(e){if(e.has("open")&&this.open&&!this._initialized){if(this.editMode){this._channelIdx=this.initialChannelIdx,this._channelName=this.initialChannelName,this._scope=this.initialScope,this._excludeFromTotal=this.initialExcludeFromTotal;const e=Au(this.initialChannelName).slice(0,32);this.initialKey&&this.initialKey.toLowerCase()!==e?(this._autoKey=!1,this._customKey=this.initialKey.toLowerCase()):(this._autoKey=!0,this._customKey="")}else this._channelIdx=this.availableIndices.length>0?this.availableIndices[0]:0;this._initialized=!0,this._loadScopes()}e.has("open")&&!this.open&&(this._initialized=!1)}async _loadScopes(){if(this._availableScopes=null,!this.hass)return this._availableScopes=[],void(this._globalAllowed=!1);const e=await xu(this.hass,this.entryId);this._availableScopes=e.scopes,this._globalAllowed=e.global}render(){if(!this.open)return;const e=this._customKey.length,t=32===e||0===e||this._autoKey;return bp(f||(f=Sc`
      <div
        class="dialog-overlay"
        @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label=${0}>
          <div class="dialog-header">
            <div class="dialog-header-title">${0}</div>
          </div>
          <div class="dialog-body">
            ${0}

            <!-- Channel Index -->
            <div class="form-group">
              <label class="form-label required">${0}</label>
              ${0}
              <div class="form-description">${0}</div>
            </div>

            <!-- Channel Name -->
            <div class="form-group">
              <label class="form-label required">${0}</label>
              <input
                type="text"
                class="form-input"
                placeholder=${0}
                .value=${0}
                @input=${0}
              />
              <div class="form-description">${0}</div>
            </div>

            <!-- Region Scope -->
            <div class="form-group">
              <label class="form-label">${0}</label>
              ${0}
            </div>

            <!-- Auto Key Toggle -->
            <div class="form-group">
              <label class="form-toggle">
                <input
                  type="checkbox"
                  ?checked=${0}
                  @change=${0}
                />
                <span class="form-toggle-label">${0}</span>
              </label>
              <div class="form-description">
                ${0}
              </div>
            </div>

            <!-- Custom Key (if not auto) -->
            ${0}

            <!-- Chat tab total -->
            <div class="form-group">
              <label class="form-toggle">
                <input
                  type="checkbox"
                  ?checked=${0}
                  @change=${0}
                />
                <span class="form-toggle-label">${0}</span>
              </label>
              <div class="form-description">
                ${0}
              </div>
            </div>
          </div>
          <div class="dialog-footer">
            <button
              class="dialog-button"
              ?disabled=${0}
              @click=${0}>
              ${0}
            </button>
            <button
              class="dialog-button primary"
              ?disabled=${0}
              @click=${0}>
              ${0}
            </button>
          </div>
        </div>
      </div>
    `),this._onOverlayClick,this.editMode?uh("Edit channel"):uh("Add channel"),this.editMode?uh("Edit channel"):uh("Add channel"),this._error?bp(y||(y=Sc`<div style="padding: 12px; background: rgba(219, 68, 55, 0.1); border-radius: 6px; color: var(--error-color, #db4437); font-size: 13px; margin-bottom: 16px;">
                  ${0}
                </div>`),this._error):"",uh("Channel Index"),this.editMode?bp(_||(_=Sc`
                    <select class="form-select" disabled>
                      <option value=${0} selected>${0}</option>
                    </select>`),this._channelIdx,this._channelIdx):bp(b||(b=Sc`
                    <select
                      class="form-select"
                      @change=${0}>
                      ${0}
                    </select>`),e=>{this._channelIdx=parseInt(e.target.value,10)},this.availableIndices.map(e=>bp(x||(x=Sc`
                        <option value=${0} ?selected=${0}>${0}</option>
                      `),e,e===this._channelIdx,e))),this.editMode?uh("Channel index cannot be changed"):uh("Select an available channel slot"),uh("Channel Name"),uh("e.g., general, alerts"),this._channelName,e=>{this._channelName=e.target.value},uh("Friendly name for the channel"),uh("Region scope"),this._renderScopeField(),this._autoKey,e=>{this._autoKey=e.target.checked},uh("Auto-generate key from name"),uh("Auto-key generates SHA256 hash of the channel name"),this._autoKey?"":bp(w||(w=Sc`
                  <div class="form-group">
                    <label class="form-label required">${0}</label>
                    <input
                      type="text"
                      class="form-input hex-input"
                      placeholder=${0}
                      .value=${0}
                      @input=${0}
                    />
                    <div class="hex-counter">${0} / 32 hex characters</div>
                    <div class="form-description">
                      ${0}
                    </div>
                  </div>
                `),uh("Custom Key"),uh("32 hex characters (a-f, 0-9)"),this._customKey,e=>{const t=e.target.value.toLowerCase().replace(/[^a-f0-9]/g,"");this._customKey=t.slice(0,32)},this._customKey.length,t?uh("Valid hex key (16 bytes / 128-bit AES)"):`Invalid: expected 32 characters, got ${e}`),this._excludeFromTotal,e=>{this._excludeFromTotal=e.target.checked},uh("Leave out of the Chat tab total"),uh("New messages in this channel still show on its own badge, but the number on the Chat tab does not count them. Useful for busy channels such as test or bot channels."),this._saving,this._onCancel,uh("Cancel"),!this._channelName||this._saving||!this._autoKey&&!t||!this.editMode&&0===this.availableIndices.length,this._onSave,this._saving?uh("Saving..."):uh("Save"))}_renderScopeField(){const e=this._availableScopes;if(null===e)return bp(k||(k=Sc`
        <select class="form-select scope-select" disabled>
          <option selected>${0}</option>
        </select>
      `),uh("Loading…"));const t=this._globalAllowed?"*":"",o=!this._scope||"*"===this._scope,i=!!this._scope&&"*"!==this._scope&&!e.includes(this._scope);return 0!==e.length||i||this._globalAllowed?bp(C||(C=Sc`
      <select
        class="form-select scope-select"
        @change=${0}>
        <option value=${0} ?selected=${0}>${0}</option>
        ${0}
        ${0}
      </select>
      <div class="form-description">
        ${0}
      </div>
    `),e=>{this._scope=e.target.value},t,o,uh("All regions (global flood)"),i?bp(B||(B=Sc`<option value=${0} selected>${0} (not in allowlist)</option>`),this._scope,this._scope):"",e.map(e=>bp(S||(S=Sc`
            <option value=${0} ?selected=${0}>${0}</option>
          `),e,e===this._scope,e)),uh('Send this channel\'s messages only through repeaters configured for the selected region. "All regions" floods the whole mesh.')):bp($||($=Sc`
        <select class="form-select scope-select" disabled>
          <option selected>${0}</option>
        </select>
        <div class="form-description scope-empty-hint">
          ${0}
          <a
            href="/config/integrations/integration/meshcore"
            target="_blank"
            rel="noopener">${0}</a>
          first (Configure → Global Settings → Flood Scope Allowlist),
          then reopen this dialog. Region names are agreed within your
          local mesh community — check your community's reference, or
          scan for nearby regions from the MeshCore mobile app.
        </div>
      `),uh("All regions (global flood)"),uh("No region scopes are configured yet. Add scope names in the"),uh("MeshCore integration"))}async _onSave(){if(this.hass&&this._channelName){this._saving=!0,this._error=null;try{(await async function(e,t,o,i,r,s,a){try{const n={type:"meshcore_chattx/set_channel",channel_idx:t,name:o};return i&&(n.key=i),r&&(n.entry_id=r),void 0!==s&&(n.scope=s),void 0!==a&&(n.exclude_from_total=a),await e.callWS(n)}catch(e){return{success:!1}}}(this.hass,this._channelIdx,this._channelName,this._autoKey?void 0:this._customKey,this.entryId,this._scope,this._excludeFromTotal)).success?(this.dispatchEvent(new CustomEvent("channel-saved",{detail:{channelIdx:this._channelIdx,name:this._channelName,scope:this._scope},bubbles:!0})),this._reset()):this._error=uh("Failed to save channel")}catch(e){this._error=uh("Error: {error}",{error:String(e)})}finally{this._saving=!1}}}_onCancel(){this._reset(),this.dispatchEvent(new CustomEvent("close",{bubbles:!0}))}_onOverlayClick(e){e.target===e.currentTarget&&this._onCancel()}_reset(){this._channelIdx=0,this._channelName="",this._customKey="",this._autoKey=!0,this._scope="",this._excludeFromTotal=!1,this._availableScopes=null,this._globalAllowed=!1,this._error=null}};ym.styles=[Wp,Rh(F||(F=Sc`
      /* Rendered inside other dialogs' flex containers (e.g. Manage);
         the overlay is position: fixed, so the host must not take part
         in their layout or it pushes the parent dialog aside. */
      :host {
        display: contents;
      }

      :host([narrow]) .dialog {
        max-width: 100%;
      }

      .dialog {
        max-width: 500px;
      }

      .hex-input {
        font-family: monospace;
        letter-spacing: 1px;
      }

      .hex-counter {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }
    `)),Xp],Fc([Up({type:Boolean})],ym.prototype,"open",void 0),Fc([Up({type:Object})],ym.prototype,"hass",void 0),Fc([Up({type:String})],ym.prototype,"entryId",void 0),Fc([Up({type:Boolean})],ym.prototype,"narrow",void 0),Fc([Up({type:Boolean})],ym.prototype,"editMode",void 0),Fc([Up({type:Number})],ym.prototype,"initialChannelIdx",void 0),Fc([Up({type:String})],ym.prototype,"initialChannelName",void 0),Fc([Up({type:String})],ym.prototype,"initialScope",void 0),Fc([Up({type:Boolean})],ym.prototype,"initialExcludeFromTotal",void 0),Fc([Up({type:String})],ym.prototype,"initialKey",void 0),Fc([Up({type:Array})],ym.prototype,"availableIndices",void 0),Fc([Vp()],ym.prototype,"_channelIdx",void 0),Fc([Vp()],ym.prototype,"_channelName",void 0),Fc([Vp()],ym.prototype,"_customKey",void 0),Fc([Vp()],ym.prototype,"_autoKey",void 0),Fc([Vp()],ym.prototype,"_scope",void 0),Fc([Vp()],ym.prototype,"_excludeFromTotal",void 0),Fc([Vp()],ym.prototype,"_availableScopes",void 0),Fc([Vp()],ym.prototype,"_globalAllowed",void 0),Fc([Vp()],ym.prototype,"_saving",void 0),Fc([Vp()],ym.prototype,"_error",void 0),ym=Fc([qp("chattx-channel-dialog")],ym);let _m=class extends Lp{willUpdate(){this._tabInitialized||(this._tabInitialized=!0,this.initialTab&&(this._activeTab=this.initialTab))}constructor(){super(),this.narrow=!1,this.showContactIds=!0,this.showMessagePreview=!0,this._tabInitialized=!1,this._activeTab="contacts",this._contacts=[],this._channels=[],this._searchQuery="",this._categoryFilter="all",this._typeFilter="all",this._loading=!1,this._actionInProgress=null,this._confirmingRemoveContact=null,this._confirmingRemoveChannel=null,this._channelDialogOpen=!1,this._editingChannel=null,this._maxChannels=4,fm(this,{isOpen:()=>!0,onEscape:()=>this._close()})}connectedCallback(){super.connectedCallback(),this._loadData()}render(){var e,t,o,i,r,s,a,n,l;return bp(A||(A=Sc`
      <div
        class="dialog"
        role="dialog"
        aria-modal="true"
        aria-label=${0}
        @click=${0}>
        <div class="dialog-header">
          <span class="dialog-title">${0}</span>
          <button class="close-btn" aria-label=${0} @click=${0}>✕</button>
        </div>

        <label class="list-option">
          <input
            type="checkbox"
            .checked=${0}
            @change=${0} />
          ${0}
        </label>

        <label class="list-option">
          <input
            type="checkbox"
            .checked=${0}
            @change=${0} />
          ${0}
        </label>

        <div class="tab-bar">
          <button
            class=${0}
            @click=${0}>
            ${0}
          </button>
          <button
            class=${0}
            @click=${0}>
            ${0}
          </button>
        </div>

        ${0}

        <div class="list-area">
          ${0}
        </div>
      </div>

      ${0}
    `),uh("Manage contacts and channels"),e=>e.stopPropagation(),uh("Manage"),uh("Close"),this._close,this.showContactIds,e=>this.dispatchEvent(new CustomEvent("show-contact-ids-changed",{detail:{enabled:e.target.checked}})),uh("Show contact IDs and channel numbers in the chat list"),this.showMessagePreview,e=>this.dispatchEvent(new CustomEvent("show-message-preview-changed",{detail:{enabled:e.target.checked}})),uh("Show the newest message (sender and text) in the chat list"),"contacts"===this._activeTab?"active":"",()=>this._switchTab("contacts"),uh("Contacts"),"channels"===this._activeTab?"active":"",()=>this._switchTab("channels"),uh("Channels"),"contacts"===this._activeTab?bp(M||(M=Sc`
              <div class="filter-bar">
                <span class="filter-bar-label">${0}</span>
                <div class="filter-bar-group">
                  ${0}
                </div>
                <span class="filter-bar-label">${0}</span>
                <div class="filter-bar-group">
                  ${0}
                </div>
              </div>
              <div class="search-bar">
                <input
                  type="text"
                  aria-label=${0}
                  placeholder=${0}
                  .value=${0}
                  @input=${0}
                />
              </div>
            `),uh("Show"),["all","added","discovered"].map(e=>bp(D||(D=Sc`
                      <button
                        class="filter-chip ${0}"
                        @click=${0}
                      >
                        ${0}
                      </button>
                    `),this._categoryFilter===e?"active":"",()=>{this._categoryFilter=e},uh("all"===e?"All":"added"===e?"Added":"Discovered"))),uh("Type"),["all","clients","repeaters"].map(e=>bp(E||(E=Sc`
                      <button
                        class="filter-chip ${0}"
                        @click=${0}
                      >
                        ${0}
                      </button>
                    `),this._typeFilter===e?"active":"",()=>{this._typeFilter=e},uh("all"===e?"All":"clients"===e?"Clients":"Repeaters"))),uh("Search contacts"),uh("Search contacts..."),this._searchQuery,e=>{this._searchQuery=e.target.value}):"",this._loading?bp(P||(P=Sc`<div class="loading-state">
                <div class="loading-spinner"></div>
                ${0}
              </div>`),uh("Loading...")):"contacts"===this._activeTab?this._renderContacts():this._renderChannels(),this._channelDialogOpen?bp(z||(z=Sc`
            <chattx-channel-dialog
              .open=${0}
              .hass=${0}
              .entryId=${0}
              .narrow=${0}
              .editMode=${0}
              .initialChannelIdx=${0}
              .initialChannelName=${0}
              .initialScope=${0}
              .initialExcludeFromTotal=${0}
              .initialKey=${0}
              .availableIndices=${0}
              @channel-saved=${0}
              @close=${0}
            ></chattx-channel-dialog>
          `),!0,this.hass,this.entryId,this.narrow,!!this._editingChannel,null!==(e=null===(t=this._editingChannel)||void 0===t?void 0:t.channel_idx)&&void 0!==e?e:0,null!==(o=null===(i=this._editingChannel)||void 0===i?void 0:i.name)&&void 0!==o?o:"",null!==(r=null===(s=this._editingChannel)||void 0===s?void 0:s.scope)&&void 0!==r?r:"",!(null===(a=this._editingChannel)||void 0===a||!a.exclude_from_total),null!==(n=null===(l=this._editingChannel)||void 0===l||null===(l=l.settings)||void 0===l?void 0:l.channel_secret)&&void 0!==n?n:"",this._getAvailableIndices(),this._onChannelSaved,()=>{this._channelDialogOpen=!1,this._editingChannel=null}):"")}_renderContacts(){const e=this._filterContacts();if(0===e.length){const e=!!this._searchQuery||"all"!==this._categoryFilter||"all"!==this._typeFilter;return bp(I||(I=Sc`
        <div class="empty-state">
          <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div>
          <div class="empty-text">
            ${0}
          </div>
        </div>
      `),uh(e?"No contacts match":"No contacts discovered"))}const t=[...e].sort((e,t)=>e.added_to_node!==t.added_to_node?e.added_to_node?-1:1:e.adv_name.localeCompare(t.adv_name));return t.map(e=>this._renderContactItem(e))}_renderContactItem(e){const t=Qu(e.adv_name,e.pubkey_prefix.substring(0,2).toUpperCase()),o=e.added_to_node,i=this._confirmingRemoveContact===e.public_key,r=this._actionInProgress===e.public_key;return bp(R||(R=Sc`
      <div class="contact-item">
        <div class="contact-avatar">${0}</div>
        <div class="contact-info">
          <div class="contact-name">${0}</div>
          <div class="contact-meta">
            <span class="contact-prefix">${0}</span>
            <span class="badge ${0}">
              ${0}
            </span>
          </div>
        </div>
        ${0}
      </div>
    `),t,e.adv_name||"Unknown",e.pubkey_prefix,o?"added":"discovered",o?bp(O||(O=Sc`<svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor" style="vertical-align: -1px; margin-right: 2px;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>${0}`),uh("Added")):uh("Discovered"),i?bp(T||(T=Sc`
              <div class="confirm-inline">
                <span class="confirm-text">${0}</span>
                <button class="confirm-btn yes" @click=${0}>${0}</button>
                <button class="confirm-btn no" @click=${0}>${0}</button>
              </div>
            `),uh("Remove?"),()=>this._doRemoveContact(e),uh("Yes"),()=>{this._confirmingRemoveContact=null},uh("No")):o?bp(L||(L=Sc`
                <button
                  class="action-btn remove"
                  ?disabled=${0}
                  @click=${0}>
                  ${0}
                </button>
              `),r,()=>{this._confirmingRemoveContact=e.public_key},r?"...":uh("Remove")):bp(N||(N=Sc`
                <button
                  class="action-btn add"
                  ?disabled=${0}
                  @click=${0}>
                  ${0}
                </button>
              `),r,()=>this._doAddContact(e),r?"...":bp(q||(q=Sc`<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style="vertical-align: -1px; margin-right: 4px;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>Add`))))}_renderChannels(){if(0===this._channels.length)return bp(j||(j=Sc`
        <div class="empty-state">
          <div class="empty-icon">#</div>
          <div class="empty-text">${0}</div>
        </div>
        <button class="add-channel-btn" @click=${0}>
          + ${0}
        </button>
      `),uh("No channels configured"),this._openAddChannel,uh("Add channel"));const e=this._confirmingRemoveChannel;return bp(H||(H=Sc`
      ${0}
      <button class="add-channel-btn" @click=${0}>
        + ${0}
      </button>
    `),this._channels.map(t=>{const o=e===t.channel_idx,i=this._actionInProgress===`ch-${t.channel_idx}`;return bp(U||(U=Sc`
          <div class="channel-item">
            <div class="channel-icon">#</div>
            <div class="channel-info">
              <div class="channel-name">${0}</div>
              <div class="channel-idx">Index ${0}${0}</div>
            </div>
            ${0}
          </div>
        `),t.name,t.channel_idx,t.scope?bp(V||(V=Sc` · scope: ${0}`),t.scope):"",o?bp(K||(K=Sc`
                  <div class="confirm-inline">
                    <span class="confirm-text">${0}</span>
                    <button class="confirm-btn yes" @click=${0}>${0}</button>
                    <button class="confirm-btn no" @click=${0}>${0}</button>
                  </div>
                `),uh("Remove?"),()=>this._doRemoveChannel(t),uh("Yes"),()=>{this._confirmingRemoveChannel=null},uh("No")):bp(W||(W=Sc`
                  <div class="channel-actions">
                    <button
                      class="action-btn"
                      ?disabled=${0}
                      @click=${0}>
                      ${0}
                    </button>
                    <button
                      class="action-btn remove"
                      ?disabled=${0}
                      @click=${0}>
                      ${0}
                    </button>
                  </div>
                `),i,()=>this._openEditChannel(t),uh("Edit"),i,()=>{this._confirmingRemoveChannel=t.channel_idx},i?"...":uh("Remove")))}),this._openAddChannel,uh("Add channel"))}async _loadData(){if(this.hass){this._loading=!0;try{const[e,t]=await Promise.all([au(this.hass,this.entryId),nu(this.hass,this.entryId)]);this._contacts=e,this._channels=t;try{const e=await lu(this.hass,this.entryId);null!=e&&e.max_channels&&(this._maxChannels=e.max_channels)}catch(e){}}finally{this._loading=!1}}}_switchTab(e){this._activeTab=e,this._searchQuery="",this._categoryFilter="all",this._typeFilter="all",this._confirmingRemoveContact=null,this._confirmingRemoveChannel=null}_filterContacts(){let e=this._contacts;if("added"===this._categoryFilter?e=e.filter(e=>e.added_to_node):"discovered"===this._categoryFilter&&(e=e.filter(e=>!e.added_to_node)),"clients"===this._typeFilter?e=e.filter(e=>{var t;const o=null!==(t=e.type)&&void 0!==t?t:0;return 0===o||1===o}):"repeaters"===this._typeFilter&&(e=e.filter(e=>2===e.type)),this._searchQuery){const t=this._searchQuery.toLowerCase();e=e.filter(e=>(e.adv_name||"").toLowerCase().includes(t)||(e.pubkey_prefix||"").toLowerCase().includes(t))}return e}async _doAddContact(e){if(this.hass){this._actionInProgress=e.public_key;try{if((await wu(this.hass,e.public_key,e.adv_name,this.entryId)).success){const e=await au(this.hass,this.entryId);this._contacts=e,this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}}finally{this._actionInProgress=null}}}async _doRemoveContact(e){if(this.hass){this._confirmingRemoveContact=null,this._actionInProgress=e.public_key;try{if((await ku(this.hass,e.public_key,this.entryId)).success){const e=await au(this.hass,this.entryId);this._contacts=e,this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}}finally{this._actionInProgress=null}}}_openAddChannel(){this._editingChannel=null,this._channelDialogOpen=!0}_openEditChannel(e){this._editingChannel=e,this._channelDialogOpen=!0}_getAvailableIndices(){const e=new Set(this._channels.map(e=>e.channel_idx)),t=[];for(let o=0;o<this._maxChannels;o++)e.has(o)||t.push(o);return t}async _doRemoveChannel(e){if(this.hass){this._confirmingRemoveChannel=null,this._actionInProgress=`ch-${e.channel_idx}`;try{if((await async function(e,t,o){try{const i={type:"meshcore_chattx/remove_channel",channel_idx:t};return o&&(i.entry_id=o),await e.callWS(i)}catch(e){return{success:!1}}}(this.hass,e.channel_idx,this.entryId)).success){const e=await nu(this.hass,this.entryId);this._channels=e,this.dispatchEvent(new CustomEvent("channels-changed",{bubbles:!0,composed:!0}))}}finally{this._actionInProgress=null}}}async _onChannelSaved(){if(this._channelDialogOpen=!1,this._editingChannel=null,this.hass){const e=await nu(this.hass,this.entryId);this._channels=e,this.dispatchEvent(new CustomEvent("channels-changed",{bubbles:!0,composed:!0}))}}_close(){this.dispatchEvent(new CustomEvent("manage-closed",{bubbles:!0,composed:!0}))}};function bm(e,t){if(e&&"*"!==e){const t=(e=>e.replace(/^#/,""))(e);return{short:`#${t}`,long:uh("Region: #{name}",{name:t}),unknown:!1}}return!0===t?{short:uh("unknown region"),long:uh("Region: unknown. Add its name to the Flood Scope Allowlist in the MeshCore integration options to see it."),unknown:!0}:"*"===e?{short:`🌐 ${uh("all regions")}`,long:uh("Region: none (global flood)"),unknown:!1}:!1===t?{short:"",long:uh("Region: none (global flood)"),unknown:!1}:{short:"",long:"",unknown:!1}}function xm(e){const t="number"==typeof e?e:Number(e);return Number.isFinite(t)&&0!==t?t:null}function wm(e){const t=[];for(const[n,l]of Object.entries(e)){var o,i,r,s,a;if(!n.startsWith("binary_sensor.meshcore_")||!n.endsWith("_contact"))continue;const e=l.attributes,d="string"==typeof e.public_key?e.public_key.toLowerCase():"",c=xm(null!==(o=e.adv_lat)&&void 0!==o?o:e.latitude),h=xm(null!==(i=e.adv_lon)&&void 0!==i?i:e.longitude);d&&null!==c&&null!==h&&t.push({key:d,name:String(null!==(r=null!==(s=e.adv_name)&&void 0!==s?s:e.friendly_name)&&void 0!==r?r:d.slice(0,6)),lat:c,lon:h,type:Number(null!==(a=e.type)&&void 0!==a?a:0)})}return t}function km(e,t,o,i){const r=Math.PI/180,s=(o-e)*r,a=(i-t)*r,n=Math.sin(s/2)**2+Math.cos(e*r)*Math.cos(o*r)*Math.sin(a/2)**2;return 12742*Math.asin(Math.min(1,Math.sqrt(n)))}function $m(e,t,o){const i=e.toLowerCase();let r=t.filter(e=>e.key.startsWith(i)&&(2===e.type||3===e.type));if(0===r.length&&(r=t.filter(e=>e.key.startsWith(i))),0===r.length)return{node:null,ambiguous:!1};if(1===r.length||!o)return{node:r[0],ambiguous:r.length>1};let s=r[0],a=1/0;for(const e of r){const t=km(o.lat,o.lon,e.lat,e.lon);t<a&&(s=e,a=t)}return{node:s,ambiguous:!0}}function Cm(e){var t,o,i,r,s;const{pathNodes:a,nodes:n,me:l,outgoing:d,senderName:c}=e,h=l?{lat:l.lat,lon:l.lon}:null,p=d?a.map((e,t)=>t):a.map((e,t)=>a.length-1-t),u=new Array(a.length);let m=h;for(const e of p){var g,v,f;const t=a[e],{node:o,ambiguous:i}=$m(t,n,m);u[e]={kind:"repeater",prefix:t.toUpperCase(),name:null!==(g=null==o?void 0:o.name)&&void 0!==g?g:"",lat:null!==(v=null==o?void 0:o.lat)&&void 0!==v?v:null,lon:null!==(f=null==o?void 0:o.lon)&&void 0!==f?f:null,ambiguous:i},o&&(m={lat:o.lat,lon:o.lon})}const y={kind:"me",prefix:"",name:null!==(t=null==l?void 0:l.name)&&void 0!==t?t:"",lat:null!==(o=null==l?void 0:l.lat)&&void 0!==o?o:null,lon:null!==(i=null==l?void 0:l.lon)&&void 0!==i?i:null,ambiguous:!1};if(d)return[y,...u];const _=c?n.find(e=>e.name===c):void 0;return[{kind:"sender",prefix:"",name:null!=c?c:"",lat:null!==(r=null==_?void 0:_.lat)&&void 0!==r?r:null,lon:null!==(s=null==_?void 0:_.lon)&&void 0!==s?s:null,ambiguous:!1},...u,y]}_m.styles=[Rh(X||(X=Sc`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1000;
      padding: 16px;
    }

    .dialog {
      display: flex;
      flex-direction: column;
      max-width: 500px;
      width: 100%;
      max-height: 80vh;
      border-radius: 12px;
      background: var(--card-background-color, #fff);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      animation: slideUp 0.2s ease-out;
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    :host([narrow]) .dialog {
      max-width: 100%;
      max-height: 100vh;
      border-radius: 0;
      height: 100%;
    }

    .dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    .dialog-title {
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-text-color);
    }

    .close-btn {
      width: 32px;
      height: 32px;
      border: none;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.15s;
    }

    .close-btn:hover {
      color: var(--primary-text-color);
      background: rgba(0, 0, 0, 0.05);
    }

    /* Tab bar */
    .list-option {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      font-size: 13px;
      color: var(--primary-text-color);
      cursor: pointer;
    }

    .tab-bar {
      display: flex;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    .tab-bar button {
      flex: 1;
      padding: 12px 16px;
      border: none;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      border-bottom: 3px solid transparent;
    }

    .tab-bar button:hover {
      color: var(--primary-text-color);
      background: rgba(0, 0, 0, 0.02);
    }

    .tab-bar button.active {
      color: var(--primary-color, #03a9f4);
      border-bottom-color: var(--primary-color, #03a9f4);
    }

    /* Filter chips (Contacts tab) */
    .filter-bar {
      display: flex;
      gap: 8px;
      padding: 10px 16px 6px 16px;
      flex-wrap: wrap;
      flex-shrink: 0;
      align-items: center;
    }

    .filter-bar-label {
      font-size: 11px;
      font-weight: 600;
      color: var(--secondary-text-color, #727272);
      text-transform: uppercase;
      letter-spacing: 0.04em;
      flex-shrink: 0;
    }

    .filter-bar-group {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
    }

    .filter-chip {
      padding: 4px 10px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 12px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 11px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
      white-space: nowrap;
    }

    .filter-chip:hover {
      border-color: var(--primary-color, #03a9f4);
      color: var(--primary-color, #03a9f4);
    }

    .filter-chip.active {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: #fff;
    }

    /* Search */
    .search-bar {
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    .search-bar input {
      width: 100%;
      box-sizing: border-box;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 20px;
      background: var(--primary-background-color, #fafafa);
      color: var(--primary-text-color);
      font-size: 13px;
      outline: none;
      transition: border-color 0.2s;
    }

    .search-bar input:focus {
      border-color: var(--primary-color, #03a9f4);
    }

    .search-bar input::placeholder {
      color: var(--secondary-text-color, #727272);
    }

    /* List area */
    .list-area {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .list-area::-webkit-scrollbar {
      width: 6px;
    }

    .list-area::-webkit-scrollbar-track {
      background: transparent;
    }

    .list-area::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb-color, #c1c1c1);
      border-radius: 3px;
    }

    /* Contact items */
    .contact-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      transition: background 0.15s;
    }

    .contact-item:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .contact-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      flex-shrink: 0;
    }

    .contact-info {
      flex: 1;
      overflow: hidden;
    }

    .contact-name {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .contact-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 2px;
    }

    .contact-prefix {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      font-family: monospace;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .badge {
      font-size: 10px;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 4px;
      white-space: nowrap;
    }

    .badge.added {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
      color: var(--primary-color, #03a9f4);
    }

    .badge.discovered {
      background: rgba(0, 0, 0, 0.06);
      color: var(--secondary-text-color, #727272);
    }

    /* Action buttons */
    .action-btn {
      padding: 6px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .action-btn:hover {
      border-color: var(--primary-color, #03a9f4);
      color: var(--primary-color, #03a9f4);
    }

    .action-btn.add {
      border-color: var(--primary-color, #03a9f4);
      color: var(--primary-color, #03a9f4);
    }

    .action-btn.add:hover {
      background: var(--primary-color, #03a9f4);
      color: #fff;
    }

    .action-btn.remove {
      border-color: var(--error-color, #db4437);
      color: var(--error-color, #db4437);
    }

    .action-btn.remove:hover {
      background: var(--error-color, #db4437);
      color: #fff;
    }

    .action-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Confirm inline */
    .confirm-inline {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
    }

    .confirm-inline .confirm-text {
      font-size: 12px;
      color: var(--error-color, #db4437);
      font-weight: 500;
    }

    .confirm-inline .confirm-btn {
      padding: 4px 10px;
      border: none;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
    }

    .confirm-inline .confirm-btn.yes {
      background: var(--error-color, #db4437);
      color: #fff;
    }

    .confirm-inline .confirm-btn.no {
      background: var(--divider-color, #e0e0e0);
      color: var(--primary-text-color);
    }

    /* Channel items */
    .channel-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      transition: background 0.15s;
    }

    .channel-item:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .channel-icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
      color: var(--primary-color, #03a9f4);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 16px;
      flex-shrink: 0;
    }

    .channel-info {
      flex: 1;
      overflow: hidden;
    }

    .channel-name {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .channel-idx {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      font-family: monospace;
    }

    .channel-actions {
      display: flex;
      gap: 6px;
      flex-shrink: 0;
    }

    /* Add channel button at bottom */
    .add-channel-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      margin: 12px 16px;
      padding: 10px 16px;
      border: 2px dashed var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: transparent;
      color: var(--primary-color, #03a9f4);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
    }

    .add-channel-btn:hover {
      border-color: var(--primary-color, #03a9f4);
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
    }

    /* Empty state */
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px 24px;
      color: var(--secondary-text-color, #727272);
      text-align: center;
    }

    .empty-icon {
      font-size: 32px;
      margin-bottom: 8px;
      opacity: 0.5;
    }

    .empty-text {
      font-size: 13px;
    }

    /* Loading */
    .loading-state {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 32px;
      color: var(--secondary-text-color);
      font-size: 13px;
      gap: 8px;
    }

    .loading-spinner {
      width: 20px;
      height: 20px;
      border: 2px solid var(--divider-color, #e0e0e0);
      border-top-color: var(--primary-color, #03a9f4);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `)),Xp],Fc([Up({type:Object})],_m.prototype,"hass",void 0),Fc([Up({type:String})],_m.prototype,"entryId",void 0),Fc([Up({type:Boolean})],_m.prototype,"narrow",void 0),Fc([Up({type:String})],_m.prototype,"initialTab",void 0),Fc([Up({type:Boolean})],_m.prototype,"showContactIds",void 0),Fc([Up({type:Boolean})],_m.prototype,"showMessagePreview",void 0),Fc([Vp()],_m.prototype,"_activeTab",void 0),Fc([Vp()],_m.prototype,"_contacts",void 0),Fc([Vp()],_m.prototype,"_channels",void 0),Fc([Vp()],_m.prototype,"_searchQuery",void 0),Fc([Vp()],_m.prototype,"_categoryFilter",void 0),Fc([Vp()],_m.prototype,"_typeFilter",void 0),Fc([Vp()],_m.prototype,"_loading",void 0),Fc([Vp()],_m.prototype,"_actionInProgress",void 0),Fc([Vp()],_m.prototype,"_confirmingRemoveContact",void 0),Fc([Vp()],_m.prototype,"_confirmingRemoveChannel",void 0),Fc([Vp()],_m.prototype,"_channelDialogOpen",void 0),Fc([Vp()],_m.prototype,"_editingChannel",void 0),Fc([Vp()],_m.prototype,"_maxChannels",void 0),_m=Fc([qp("chattx-manage-dialog")],_m);const Bm=256;function Sm(e,t,o){const i=Bm*2**o,r=(t+180)/360*i,s=Math.sin(Math.max(-85,Math.min(85,e))*Math.PI/180);return[r,(.5-Math.log((1+s)/(1-s))/(4*Math.PI))*i]}function Fm(e,t,o,i=28){if(e.length<2)return 12;for(let r=15;r>=2;r--){const s=e.map(e=>Sm(e.lat,e.lon,r)),a=s.map(e=>e[0]),n=s.map(e=>e[1]);if(Math.max(...a)-Math.min(...a)<=t-2*i&&Math.max(...n)-Math.min(...n)<=o-2*i)return r}return 2}const Am=new WeakMap;function Mm(e){let t=Am.get(e);return t||(t=wm(e),Am.set(e,t)),t}function Dm(e){let t=null;for(const o of null!=e?e:[]){const e=o.path_nodes;e&&e.length>0&&(!t||e.length<t.length)&&(t=e)}return t}function Em(e,t){if(!e||e.length<2)return null;const o=Cm({pathNodes:e,nodes:t,me:null,outgoing:!1}).filter(e=>"repeater"===e.kind),i=o[0],r=o[o.length-1];if(null===i.lat||null===i.lon||null===r.lat||null===r.lon)return null;let s=0,a=null;for(const e of o)null!==e.lat&&null!==e.lon&&(a&&(s+=km(a.lat,a.lon,e.lat,e.lon)),a=e);return{km:km(i.lat,i.lon,r.lat,r.lon),approx:i.ambiguous||r.ambiguous,routeKm:s,routeApprox:o.some(e=>e.ambiguous||null===e.lat)}}function Pm(e){const t=`↔ ${Zc(e.km,e.approx)}`;return e.routeKm-e.km>.5?`${t} (∑ ${Zc(e.routeKm,e.routeApprox)})`:t}const zm=1e4,Im="chattx-map-offline-only";function Rm(){try{return"1"===Hc(Im)}catch(e){return!1}}function Om(e){const t=new Float64Array(e.length);let o=0,i=0;for(let r=0;r+1<e.length;r+=2)o+=e[r],i+=e[r+1],t[r]=o/zm,t[r+1]=i/zm;return t}function Tm(e,t){return 0===t?0:1===t||e>=2e5?5:e>=5e4?7:e>=15e3?8:e>=5e3?9:e>=2e3?10:11}function Lm(e){return e>=2500?8:e>=1e3?9:e>=600?10:11}let Nm=null;const qm=new WeakMap;function jm(e,t){const o=[];for(const i of e){let e="";for(let o=0;o+1<i.length;o+=2){const[r,s]=Sm(i[o+1],i[o],t);e+=`${0===o?"M":"L"}${r.toFixed(1)} ${s.toFixed(1)}`}o.push(`${e}Z`)}return o.join("")}function Hm(e,t){let o=0;for(const t of e)o+=t.codePointAt(0)>=11904?1:.56;return o*t}function Um(e,t,o,i,r,s){if(!e)return xp(G||(G=Sc`<rect class="om-sea" width=${0} height=${0} />`),r,s);const{borders:a,regions:n}=function(e,t){let o=qm.get(e);o||(o=new Map,qm.set(e,o));let i=o.get(t);return i||(i={borders:jm(e.borders,t),regions:jm(e.regions,t)},o.size>=6&&o.delete(o.keys().next().value),o.set(t,i)),i}(e,t),l=[],d=[];for(const a of e.labels){if(d.length>=160)break;if(a.minZoom>t)continue;const[e,n]=Sm(a.lat,a.lon,t),c=e-o,h=n-i;if(c<-4||h<-4||c>r+4||h>s+4)continue;const p="capital"===a.kind?13:"seat"===a.kind?12:"peak"===a.kind?10:11,u=[c-4,h-p,c+(Hm(a.text,p)+10),h+4];l.some(e=>u[0]<e[2]&&u[2]>e[0]&&u[1]<e[3]&&u[3]>e[1])||(l.push(u),d.push("peak"===a.kind?xp(Y||(Y=Sc`<path class="om-peak" d="M${0} ${0}l4 7h-8z" /><text class="om-label om-peak-label" x=${0} y=${0}>${0}</text>`),c,h-4,c+6,h+3,a.text):xp(Q||(Q=Sc`<circle class="om-dot om-${0}" cx=${0} cy=${0} r=${0} /><text class="om-label om-${0}-label" x=${0} y=${0}>${0}</text>`),a.kind,c,h,"place"===a.kind?2.2:3.2,a.kind,c+5,h+4,a.text)))}return xp(Z||(Z=Sc`
    <rect class="om-sea" width=${0} height=${0} />
    <g transform="translate(${0} ${0})">
      <path class="om-land" d=${0} />
      <path class="om-region" d=${0} />
      <path class="om-border" d=${0} />
    </g>
    ${0}`),r,s,-o,-i,a,n,a,d)}const Vm=Rh(J||(J=Sc`
  /* The same colour as the land: neighbouring borders, simplified separately, leave thin gaps. */
  .om-sea { fill: var(--card-background-color, #fff); }
  .om-land { fill: var(--card-background-color, #fff); fill-rule: nonzero; }
  .om-region { fill: none; stroke: var(--divider-color, #c8c8c8); stroke-width: 1; }
  .om-border { fill: none; stroke: var(--secondary-text-color, #777); stroke-width: 1.8; }
  .om-dot { fill: var(--primary-text-color, #333); }
  .om-capital { fill: #c62828; }
  .om-peak { fill: #8d6e63; }
  .om-label {
    font: 11px sans-serif;
    fill: var(--primary-text-color, #333);
    paint-order: stroke;
    stroke: var(--card-background-color, #fff);
    stroke-width: 3px;
  }
  .om-capital-label { font-size: 13px; font-weight: 700; }
  .om-seat-label { font-size: 12px; font-weight: 600; }
  .om-peak-label { font-size: 10px; fill: #6d4c41; }
`)),Km=12e5;let Wm=null,Xm=0,Gm=!1,Ym=null;class Qm{constructor(e,t){this.host=e,this.getHass=t,this.ready=!1,this.offlineMap=null,this.offlineLoaded=!1,this._token=null,this._timer=null,this._tileErrors=0,this._tileLoads=0,this._loadingOffline=!1,this._onChange=()=>this.host.requestUpdate(),this._onOfflineMapUpdated=()=>{this.offlineLoaded=!1,this.host.requestUpdate()},this.tileError=()=>{this._tileErrors++,this.host.requestUpdate()},this.tileLoad=()=>{this._tileLoads++},this._refreshing=!1,e.addController(this)}get offline(){return Rm()||"undefined"!=typeof navigator&&!1===navigator.onLine||this.ready&&null===this._token||this._tileErrors>0&&0===this._tileLoads||this._tileErrors>=3}hostConnected(){this._refresh(),this._timer=setInterval(()=>{this._refresh()},Km),window.addEventListener("chattx-map-mode-changed",this._onChange),window.addEventListener("online",this._onChange),window.addEventListener("offline",this._onChange),window.addEventListener("chattx-offline-map-updated",this._onOfflineMapUpdated)}hostDisconnected(){this._timer&&clearInterval(this._timer),this._timer=null,window.removeEventListener("chattx-map-mode-changed",this._onChange),window.removeEventListener("online",this._onChange),window.removeEventListener("offline",this._onChange),window.removeEventListener("chattx-offline-map-updated",this._onOfflineMapUpdated)}hostUpdated(){this.ready||this._refresh(),this.offline&&!this.offlineLoaded&&this._loadOffline()}url(e,t,o){return function(e,t,o,i){return e?`/api/map_tiles/raster/${t}/${o}/${i}.png?token=${encodeURIComponent(e)}`:`https://tile.openstreetmap.org/${t}/${o}/${i}.png`}(this._token,e,t,o)}async _loadOffline(){const e=this.getHass();if(e&&!this._loadingOffline){this._loadingOffline=!0;try{this.offlineMap=await function(e){return null!=Nm||(Nm=e.callWS({type:"meshcore_chattx/offline_map_data"}).then(e=>{var t,o;return Object.keys(null!==(t=e.countries)&&void 0!==t?t:{}).length||e.world?function(e,t){const o=[],i=[],r=[];if(t){for(const[i,r]of Object.entries(null!==(s=t.borders)&&void 0!==s?s:{})){var s;if(!e[i])for(const e of r)o.push(Om(e))}for(const[o,i,s,n]of null!==(a=t.capitals)&&void 0!==a?a:[]){var a;e[n]||r.push({lon:o/zm,lat:i/zm,text:s,priority:5e6,kind:"capital",minZoom:3})}}for(const t of Object.values(e)){for(const e of t.border)o.push(Om(e));for(const e of t.regions)i.push(Om(e));for(const[e,o,i,s,a]of t.places)r.push({lon:e/zm,lat:o/zm,text:i,priority:1e7*a-s,kind:0===a?"capital":1===a?"seat":"place",minZoom:Tm(s,a)});for(const[e,o,i,s]of t.peaks)r.push({lon:e/zm,lat:o/zm,text:`${i} ${s}`,priority:3e7-s,kind:"peak",minZoom:Lm(s)})}return r.sort((e,t)=>e.priority-t.priority),{borders:o,regions:i,labels:r}}(null!==(o=e.countries)&&void 0!==o?o:{},e.world):null}).catch(()=>(Nm=null,null))),Nm}(e),this.offlineLoaded=!0,this.host.requestUpdate()}finally{this._loadingOffline=!1}}}async _refresh(){const e=this.getHass();if(e&&!this._refreshing){this._refreshing=!0;try{const t=await function(e){return Gm?Promise.resolve(null):Wm&&Date.now()-Xm<Km?Promise.resolve(Wm):(null!=Ym||(Ym=e.callWS({type:"map_tiles/access_token"}).then(e=>(Wm=e.token,Xm=Date.now(),Wm)).catch(e=>("unknown_command"===(null==e?void 0:e.code)&&(Gm=!0),Wm)).finally(()=>{Ym=null})),Ym)}(e);t===this._token&&this.ready||(this._token=t,this.ready=!0,this.host.requestUpdate())}finally{this._refreshing=!1}}}}const Zm=520,Jm=320;let eg=null;function tg(e){return null!=eg||(eg=lu(e).then(e=>{const t=Number(e.latitude),o=Number(e.longitude);return Number.isFinite(t)&&Number.isFinite(o)&&(0!==t||0!==o)?{lat:t,lon:o}:null}).catch(()=>null).then(t=>{var o;if(t)return t;const i=null===(o=e.states["zone.home"])||void 0===o?void 0:o.attributes,r=Number(null==i?void 0:i.latitude),s=Number(null==i?void 0:i.longitude);return Number.isFinite(r)&&Number.isFinite(s)?{lat:r,lon:s}:null})),eg}function og(e){const t=[],o=new Set;for(const r of null!==(i=e.rxLogData)&&void 0!==i?i:[]){var i;const e=r.path_nodes;if(!e||0===e.length)continue;const s=e.join(">");o.has(s)||(o.add(s),t.push(e))}return t.sort((e,t)=>e.length-t.length)}let ig=class extends Lp{constructor(){super(...arguments),this.nodeName="",this._me=null,this._meLoaded=!1,this._pathIndex=0,this._view=null,this._fittedView=null,this._pointers=new Map,this._pinchStart=0,this._lastWheel=0,this._tiles=new Qm(this,()=>this.hass),this._copyState="idle"}connectedCallback(){super.connectedCallback(),this.hass&&!this._meLoaded&&tg(this.hass).then(e=>{this._me=e,this._meLoaded=!0})}render(){if(!this.hass||!this.message)return kp;if(!this._meLoaded)return bp(ee||(ee=Sc`<div class="note">${0}</div>`),uh("Loading..."));const e=og(this.message);if(0===e.length)return kp;const t=Math.min(this._pathIndex,e.length-1),o=Cm({pathNodes:e[t],nodes:wm(this.hass.states),me:this._me?{...this._me,name:this.nodeName}:null,outgoing:this.message.isOutgoing,senderName:this.message.isOutgoing?void 0:this.message.sender});return bp(te||(te=Sc`
      ${0}
      ${0}
      ${0}
    `),e.length>1?bp(oe||(oe=Sc`<div class="tabs">
            ${0}
          </div>`),e.map((e,o)=>bp(ie||(ie=Sc`<button class=${0} @click=${0}>
              ${0} · ${0} hops
            </button>`),o===t?"active":"",e=>{e.stopPropagation(),this._pathIndex=o,this._view=null},uh("Path {n}",{n:o+1}),e.length))):kp,this._renderMap(o),this._renderList(o))}willUpdate(e){e.has("message")&&(this._view=null)}_current(){var e,t;return null!==(e=null!==(t=this._view)&&void 0!==t?t:this._fittedView)&&void 0!==e?e:{zoom:8,cx:0,cy:0}}_zoomAt(e,t=260,o=160){const i=this._current(),r=Math.max(2,Math.min(17,e));if(r===i.zoom)return;const s=2**(r-i.zoom),a=i.cx-260+t,n=i.cy-160+o;this._view={zoom:r,cx:a*s-(t-260),cy:n*s-(o-160)}}_local(e){const t=this.renderRoot.querySelector(".wrap svg").getBoundingClientRect(),o=t.width>0?Zm/t.width:1;return{x:(e.clientX-t.left)*o,y:(e.clientY-t.top)*o}}_onWheel(e){e.preventDefault();const t=Date.now();if(t-this._lastWheel<120)return;this._lastWheel=t;const o=this._local(e);this._zoomAt(this._current().zoom+(e.deltaY<0?1:-1),o.x,o.y)}_onPointerDown(e){e.currentTarget.setPointerCapture(e.pointerId),this._pointers.set(e.pointerId,this._local(e)),2===this._pointers.size&&(this._pinchStart=this._pinchDistance())}_pinchDistance(){const[e,t]=[...this._pointers.values()];return Math.hypot(e.x-t.x,e.y-t.y)}_onPointerMove(e){const t=this._pointers.get(e.pointerId);if(!t)return;const o=this._local(e);if(this._pointers.set(e.pointerId,o),1===this._pointers.size){const e=this._current();o.x===t.x&&o.y===t.y||(this._view={zoom:e.zoom,cx:e.cx-(o.x-t.x),cy:e.cy-(o.y-t.y)})}else if(2===this._pointers.size&&this._pinchStart>0){const e=this._pinchDistance(),[t,o]=[...this._pointers.values()],i={x:(t.x+o.x)/2,y:(t.y+o.y)/2};e/this._pinchStart>1.5?(this._zoomAt(this._current().zoom+1,i.x,i.y),this._pinchStart=e):e/this._pinchStart<.67&&(this._zoomAt(this._current().zoom-1,i.x,i.y),this._pinchStart=e)}}_onPointerUp(e){this._pointers.delete(e.pointerId),this._pointers.size<2&&(this._pinchStart=0)}_renderMap(e){var t;const o=e.filter(e=>null!==e.lat&&null!==e.lon);if(0===o.length)return bp(re||(re=Sc`<div class="note">${0}</div>`),uh("No repeater on this path has a known position."));const i=(()=>{const e=Fm(o,Zm,Jm),t=o.map(t=>Sm(t.lat,t.lon,e)),i=t.map(e=>e[0]),r=t.map(e=>e[1]);return{zoom:e,cx:(Math.min(...i)+Math.max(...i))/2,cy:(Math.min(...r)+Math.max(...r))/2}})(),r=null!==(t=this._view)&&void 0!==t?t:i;this._fittedView=i;const{zoom:s,cx:a,cy:n}=r,l=a-260,d=n-160,c=[],h=2**s,p=this._tiles.offline;if(p)c.push(Um(this._tiles.offlineMap,s,l,d,Zm,Jm));else for(let e=Math.floor(l/Bm);e<=Math.floor((l+Zm)/Bm);e++)for(let t=Math.floor(d/Bm);t<=Math.floor((d+Jm)/Bm);t++){if(t<0||t>=h)continue;const o=(e%h+h)%h;this._tiles.ready&&c.push(xp(se||(se=Sc`<image href=${0} @error=${0} @load=${0}
            x=${0} y=${0} width=${0} height=${0} />`),this._tiles.url(s,o,t),this._tiles.tileError,this._tiles.tileLoad,e*Bm-l,t*Bm-d,Bm,Bm))}const u=e=>{const[t,o]=Sm(e.lat,e.lon,s);return[t-l,o-d]},m=[];let g=null,v=!1;for(const t of e){if(null===t.lat||null===t.lon){g&&(v=!0);continue}const e=t;if(g){const[t,o]=u(g),[i,r]=u(e),s=v||g.ambiguous||e.ambiguous;m.push(xp(ae||(ae=Sc`<line x1=${0} y1=${0} x2=${0} y2=${0} stroke="#d32f2f" stroke-width="3"
          stroke-linecap="round" stroke-dasharray=${0} opacity="0.9" />`),t,o,i,r,s?"6 5":"none"))}g=e,v=!1}let f=0;const y=e.map(e=>{if("repeater"===e.kind&&f++,null===e.lat||null===e.lon)return kp;const[t,o]=u(e),i="me"===e.kind?"#1e88e5":"sender"===e.kind?"#43a047":"#fb8c00",r="repeater"===e.kind?`${f}`:"me"===e.kind?uh("You"):e.name||uh("Sender");return xp(ne||(ne=Sc`
        <circle cx=${0} cy=${0} r=${0} fill=${0}
          stroke=${0} stroke-width="3" />
        <text class="label" x=${0} y=${0}>${0}</text>`),t,o,"repeater"===e.kind?6:8,e.ambiguous?"#fff":i,i,t+10,o+4,r)});return bp(le||(le=Sc`<div class="wrap"
        @wheel=${0}
        @pointerdown=${0}
        @pointermove=${0}
        @pointerup=${0}
        @pointercancel=${0}
        @click=${0}>
      <svg viewBox="0 0 ${0} ${0}" role="img" aria-label=${0}>
        ${0}
        ${0}
        ${0}
        <text class="attribution" x=${0} y=${0} text-anchor="end">${0}</text>
      </svg>
      <div class="controls" @pointerdown=${0}>
        <button aria-label=${0} @click=${0}>+</button>
        <button aria-label=${0} @click=${0}>−</button>
        <button aria-label=${0} @click=${0}>⤢</button>
        <button aria-label=${0} title=${0} ?disabled=${0}
          @click=${0}><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg></button>
        <button aria-label=${0} title=${0} ?disabled=${0}
          @click=${0}><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>
      </div>
      ${0}
    </div>
    ${0}`),this._onWheel,this._onPointerDown,this._onPointerMove,this._onPointerUp,this._onPointerUp,e=>e.stopPropagation(),Zm,Jm,uh("Route on the map"),c,m,y,516,316,p?"© geoBoundaries, GeoNames":"© OpenStreetMap",e=>e.stopPropagation(),uh("Zoom in"),()=>this._zoomAt(s+1),uh("Zoom out"),()=>this._zoomAt(s-1),uh("Show all"),()=>{this._view=null},uh("Copy map as image"),uh("Copy map as image"),"busy"===this._copyState,()=>{this._copyImage()},uh("Send map in a message"),uh("Send map in a message"),"busy"===this._copyState,()=>{this._sendImage()},"idle"!==this._copyState?bp(de||(de=Sc`<div class="copy-note" role="status">${0}</div>`),"busy"===this._copyState?uh("Preparing image…"):"copied"===this._copyState?uh("Map image copied"):"shared"===this._copyState?uh("Map image shared"):"saved"===this._copyState?uh("Map image downloaded"):uh("The map image could not be made")):kp,p&&this._tiles.offlineLoaded&&!this._tiles.offlineMap?bp(ce||(ce=Sc`<div class="note">${0}</div>`),uh("No offline map downloaded. Download it in Settings → Map.")):kp)}async _mapImage(){const e=this.renderRoot.querySelector(".wrap svg");if(!e)throw new Error("no map");const t=e.cloneNode(!0);t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("width",String(Zm)),t.setAttribute("height",String(Jm));const o=document.createElementNS("http://www.w3.org/2000/svg","style");o.textContent=`${Vm.cssText}\n      .label { font: 600 10px sans-serif; paint-order: stroke; stroke: #fff; stroke-width: 3px; fill: #222; }\n      .attribution { font: 9px sans-serif; fill: #333; }`,t.insertBefore(o,t.firstChild);const i=document.createElementNS("http://www.w3.org/2000/svg","rect");i.setAttribute("width",String(Zm)),i.setAttribute("height",String(Jm)),i.setAttribute("fill","#aad3df"),t.insertBefore(i,o.nextSibling),await Promise.all(Array.from(t.querySelectorAll("image")).map(async e=>{const t=e.getAttribute("href");if(t&&!t.startsWith("data:"))try{const o=await(await fetch(t)).blob();e.setAttribute("href",await new Promise((e,t)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=()=>t(i.error),i.readAsDataURL(o)}))}catch(t){e.remove()}}));const r=URL.createObjectURL(new Blob([(new XMLSerializer).serializeToString(t)],{type:"image/svg+xml"}));try{var s,a;const e=new Image;await new Promise((t,o)=>{e.onload=()=>t(),e.onerror=()=>o(new Error("svg")),e.src=r});const t=Array.from(this.renderRoot.querySelectorAll("ol li")).map((e,t)=>{var o;return`${t+1}. ${(null!==(o=e.textContent)&&void 0!==o?o:"").replace(/\s+/g," ").trim()}`}),o=(null!==(s=null===(a=this.renderRoot.querySelector(".note.distance"))||void 0===a?void 0:a.textContent)&&void 0!==s?s:"").trim();o&&t.push(o);const i=2,n=18,l=10,d=document.createElement("canvas");d.width=Zm*i,d.height=(Jm+(t.length?2*l+t.length*n:0))*i;const c=d.getContext("2d");return c.scale(i,i),c.fillStyle="#fff",c.fillRect(0,0,Zm,d.height/i),c.drawImage(e,0,0,Zm,Jm),c.fillStyle="#222",c.font="13px sans-serif",c.textBaseline="top",t.forEach((e,t)=>c.fillText(e,l,Jm+l+t*n,Zm-2*l)),await new Promise((e,t)=>d.toBlob(o=>o?e(o):t(new Error("png")),"image/png"))}finally{URL.revokeObjectURL(r)}}async _sendImage(){if("busy"!==this._copyState){clearTimeout(this._copyTimer),this._copyState="busy";try{const e=await this._mapImage();this._copyState="idle",this.dispatchEvent(new CustomEvent("chattx-send-image",{detail:{file:new File([e],"chattx-route.png",{type:"image/png"})},bubbles:!0,composed:!0}))}catch(e){this._copyState="failed",this._copyTimer=setTimeout(()=>{this._copyState="idle"},2500)}}}async _copyImage(){if("busy"===this._copyState)return;clearTimeout(this._copyTimer),this._copyState="busy";let e="failed";try{var t;const i=this._mapImage();let r=!1;if("undefined"!=typeof ClipboardItem&&null!==(t=navigator.clipboard)&&void 0!==t&&t.write)try{await navigator.clipboard.write([new ClipboardItem({"image/png":i})]),r=!0}catch(e){r=!1}if(r)e="copied";else{var o;const t=await i,r=new File([t],"chattx-route.png",{type:"image/png"}),s=navigator;if(null!==(o=s.canShare)&&void 0!==o&&o.call(s,{files:[r]})&&s.share)try{await s.share({files:[r]}),e="shared"}catch(t){e="AbortError"===(null==t?void 0:t.name)?"idle":"failed"}else{const o=document.createElement("a");o.href=URL.createObjectURL(t),o.download=r.name,o.click(),setTimeout(()=>URL.revokeObjectURL(o.href),1e4),e="saved"}}}catch(t){e="failed"}this._copyState=e,"idle"!==e&&(this._copyTimer=setTimeout(()=>{this._copyState="idle"},2500))}_renderList(e){let t=0;const o=e.some(e=>e.ambiguous),i=e.filter(e=>"repeater"===e.kind);let r=null;const s=i.map(e=>{if(null===e.lat||null===e.lon)return null;const t=r?km(r.lat,r.lon,e.lat,e.lon):null;return r=e,t}),a=i[0],n=i[i.length-1],l=i.length>=2&&null!==a.lat&&null!==a.lon&&null!==n.lat&&null!==n.lon?{km:km(a.lat,a.lon,n.lat,n.lon),approx:a.ambiguous||n.ambiguous,routeKm:s.reduce((e,t)=>e+(null!=t?t:0),0),routeApprox:i.some(e=>e.ambiguous||null===e.lat)}:null;return bp(he||(he=Sc`
      <ol>
        ${0}
      </ol>
      ${0}
      ${0}
      <div class="note">🧪 ${0}</div>
    `),i.map((e,o)=>{t++;const i=s[o];return bp(pe||(pe=Sc`<li value=${0}>
            <span class="prefix">${0}</span>
            ${0}${0}${0}
          </li>`),t,e.prefix,e.name?bp(ue||(ue=Sc` ${0}`),e.name):bp(me||(me=Sc` – ${0}`),uh("no known position")),e.ambiguous?" (?)":"",null!==i?bp(ge||(ge=Sc` <span class="leg">+${0}</span>`),Zc(i)):kp)}),l?bp(ve||(ve=Sc`<div class="note distance">${0}</div>`),Pm(l)):kp,o?bp(fe||(fe=Sc`<div class="note">${0}</div>`),uh("(?) Several repeaters share this prefix; the one nearest to the route is shown.")):kp,uh("Experimental feature"))}};ig.styles=[Vm,Rh(ye||(ye=Sc`
    :host {
      display: block;
    }
    .tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      padding: 6px 8px 0;
    }
    .tabs button {
      font: inherit;
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 10px;
      border: 1px solid var(--divider-color, #555);
      background: transparent;
      color: var(--secondary-text-color);
      cursor: pointer;
    }
    .tabs button.active {
      background: var(--primary-color, #03a9f4);
      border-color: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
    }
    .wrap {
      position: relative;
      margin-top: 6px;
      /* Fingers move and zoom the map instead of scrolling the dialog. */
      touch-action: none;
      cursor: grab;
      user-select: none;
    }
    .wrap:active { cursor: grabbing; }
    svg {
      display: block;
      width: 100%;
      height: auto;
      background: #aad3df;
    }
    .controls {
      position: absolute;
      top: 6px;
      right: 6px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .controls button {
      width: 30px;
      height: 30px;
      border: 1px solid var(--divider-color, #ccc);
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #222);
      font-size: 16px;
      line-height: 1;
      cursor: pointer;
    }
    .label {
      font: 600 10px sans-serif;
      paint-order: stroke;
      stroke: #fff;
      stroke-width: 3px;
      fill: #222;
    }
    ol {
      margin: 6px 0 8px;
      padding: 0 12px 0 30px;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    li {
      margin: 2px 0;
    }
    .prefix {
      font-family: monospace;
    }
    .leg {
      color: var(--secondary-text-color);
      opacity: 0.8;
      font-size: 11px;
    }
    .note.distance {
      font-size: 12px;
      color: var(--primary-text-color);
    }
    .note {
      padding: 0 12px 8px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }
    .attribution {
      font: 9px sans-serif;
      fill: #333;
    }
    .controls button svg { display: block; margin: auto; }
    .controls button:disabled { opacity: 0.6; cursor: default; }
    .copy-note {
      position: absolute;
      left: 6px;
      bottom: 6px;
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 12px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #222);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    }
  `))],Fc([Up({attribute:!1})],ig.prototype,"hass",void 0),Fc([Up({attribute:!1})],ig.prototype,"message",void 0),Fc([Up({type:String})],ig.prototype,"nodeName",void 0),Fc([Vp()],ig.prototype,"_me",void 0),Fc([Vp()],ig.prototype,"_meLoaded",void 0),Fc([Vp()],ig.prototype,"_pathIndex",void 0),Fc([Vp()],ig.prototype,"_view",void 0),Fc([Vp()],ig.prototype,"_copyState",void 0),ig=Fc([qp("chattx-path-map")],ig);const rg="chattx-image-previews";function sg(){try{return"0"!==Hc(rg)}catch(e){return!0}}const ag="chattx-failed-images",ng=new Map,lg=new Set;function dg(){try{var e;const t=JSON.parse(null!==(e=Hc(ag))&&void 0!==e?e:"[]");return Array.isArray(t)?t.filter(e=>"string"==typeof e):[]}catch(e){return[]}}function cg(e){const t=dg();t.includes(e)||(t.push(e),Uc(ag,JSON.stringify(t.slice(-300))))}let hg=class extends Lp{constructor(){super(),this.src="",this.original="",fm(this,{isOpen:()=>!!this.src,onEscape:()=>this._close()})}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}render(){return this.src?bp(_e||(_e=Sc`
      <div class="overlay" role="dialog" aria-modal="true" aria-label=${0}
        @click=${0}>
        <img src=${0} alt="" @click=${0} />
        <button class="close" aria-label=${0} title=${0}
          @click=${0}>✕</button>
        ${0}
      </div>
    `),uh("Image"),e=>{e.stopPropagation(),this._close()},this.src,e=>e.stopPropagation(),uh("Close"),uh("Close"),e=>{e.stopPropagation(),this._close()},this.original?bp(be||(be=Sc`<span class="original" @click=${0}>${0}</span>`),e=>e.stopPropagation(),this.original):kp):kp}};hg.styles=Rh(xe||(xe=Sc`
    :host { display: contents; }
    .overlay {
      position: fixed;
      inset: 0;
      z-index: 1200;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.9);
    }
    img {
      max-width: 94vw;
      max-height: 86vh;
      max-height: 86dvh;
      object-fit: contain;
      border-radius: 6px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
    }
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 44px;
      height: 44px;
      border: none;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.15);
      color: #fff;
      font-size: 22px;
      cursor: pointer;
    }
    .original {
      position: absolute;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
      max-width: 90vw;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
    }
  `)),Fc([Up({type:String})],hg.prototype,"src",void 0),Fc([Up({type:String})],hg.prototype,"original",void 0),hg=Fc([qp("chattx-image-viewer")],hg);let pg=class extends Lp{constructor(){super(),this.timestampFormat="relative",this._selectedMessage=null,this.nodeName="",this._showMap=!1,this._copiedKey="",this._viewer=null,this._mapStep=null,fm(this,{isOpen:()=>null!==this._selectedMessage,onEscape:()=>this._closeDialog(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".message-dialog")}})}render(){return this.group?bp(we||(we=Sc`
        ${0}
        ${0}
        ${0}
      `),this._renderGroup(),this._selectedMessage?this._renderMessageDialog(this._selectedMessage):bp(ke||(ke=Sc``)),this._viewer?bp($e||($e=Sc`<chattx-image-viewer .src=${0} .original=${0}
              @close=${0}></chattx-image-viewer>`),this._viewer.src,this._viewer.url,()=>{this._viewer=null}):bp(Ce||(Ce=Sc``))):bp(Be||(Be=Sc``))}_renderGroup(){if(!this.group)return bp(Se||(Se=Sc``));const e=this.group,t={"message-group":!0,incoming:!e.isOutgoing&&!e.isSystem,outgoing:e.isOutgoing,system:e.isSystem};let o;return e.messages.length>0&&(o=e.messages[0].senderColor||function(e){let t=0;for(let o=0;o<e.length;o++)t=(t<<5)-t+e.charCodeAt(o);const o=["#e57373","#64b5f6","#81c784","#ffb74d","#ba68c8","#4dd0e1","#fff176","#a1887f"];return o[Math.abs(t)%o.length]}(e.sender)),bp(Fe||(Fe=Sc`
      <div class=${0} style=${0}>
        ${0}
        ${0}
      </div>
    `),this._classMap(t),o?`--sender-color: ${o}`:"",e.isSystem||e.isOutgoing?bp(Me||(Me=Sc``)):bp(Ae||(Ae=Sc`<div class="sender">${0}</div>`),e.sender),e.messages.map(e=>this._renderBubble(e)))}_renderBubble(e){const t={bubble:!0,incoming:!e.isOutgoing&&!e.isSystem,outgoing:e.isOutgoing,system:e.isSystem},o=e.isOutgoing&&e.deliveryStatus?this._getStatusLabel(e.deliveryStatus):"",i=e.isOutgoing||e.isSystem?"":function(e){const t=Iu(e);if(null===t)return"";if(0===t)return uh("direct");const o=function(e){var t;const o=Iu(e),i=null===(t=(null!=e?e:[]).find(e=>(null==e?void 0:e.hop_count)===o&&"number"==typeof(null==e?void 0:e.path_hash_size)))||void 0===t?void 0:t.path_hash_size;return"number"==typeof i?i:null}(e);return mh("{n} hop","{n} hops",t)+(null===o?"":` (${o}B)`)}(e.rxLogData),r=e.isOutgoing||e.isSystem||!this.hass?null:Em(Dm(e.rxLogData),Mm(this.hass.states)),s=function(e,t){switch(t){case"relative":default:return function(e){const t=Date.now()-e.getTime(),o=Math.floor(t/1e3),i=Math.floor(o/60),r=Math.floor(i/60);return o<60?uh("now"):i<60?uh("{n}m",{n:i}):r<24?uh("{n}h",{n:r}):e.toLocaleDateString(hh(),{month:"short",day:"numeric"})}(e);case"time":return e.toLocaleTimeString(hh(),{hour:"numeric",minute:"2-digit"});case"datetime":return e.toLocaleString(hh(),{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}}(e.timestamp,this.timestampFormat)+(i?` · ${i}`:"")+(r?` · ${Pm(r)}`:"")+(e.resends?` · ×${e.resends.length+1}`:""),a=e.isOutgoing||e.isSystem?"":bm(e.floodScope,e.regionScope).short;return bp(De||(De=Sc`
      <div class=${0} data-msg-id=${0} @click=${0}>
        <div class="message-text">${0}</div>
        ${0}
        <div class="timestamp">${0}${0}${0}</div>
      </div>
    `),this._classMap(t),e.id,t=>{t.stopPropagation(),this._openDialog(e)},this._renderTextWithMentions(e.text,e.mentions),this._renderImages(e.text),o?bp(Ee||(Ee=Sc`<span class="delivery-status">${0}</span> · `),o):"",s,a?bp(Pe||(Pe=Sc` · <span class="flood-scope">${0}</span>`),a):"")}_getStatusLabel(e){var t;const o=e.status,i=null!==(t=e.repeaterCount)&&void 0!==t?t:0;if(void 0!==e.ackReceived){var r;const t=(null!==(r=e.attempts)&&void 0!==r?r:1)>1?` · ${mh("{n} attempt","{n} attempts",e.attempts)}`:"";return"pending"===o||"waiting"===o?uh("Waiting..."):"failed"===o?uh("Failed")+t:(e.ackReceived||"delivered"===o?uh("Delivered"):uh("Not confirmed"))+t}switch(o){case"pending":case"waiting":return uh("Waiting...");case"sent":return uh(i>0?"Repeated":"Unheard");case"delivered":return uh("Delivered");case"failed":return uh("Failed");default:return uh("Sent")}}_renderTextWithMentions(e,t){if(0===t.length)return this._renderLinks(e);const o=t.map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")),i=new RegExp(`@\\[(${o.join("|")})\\]|@(${o.join("|")})\\b`,"g"),r=[];let s,a=0;for(;null!==(s=i.exec(e));){var n;s.index>a&&r.push(this._renderLinks(e.slice(a,s.index)));const t=null!==(n=s[1])&&void 0!==n?n:s[2];r.push(bp(ze||(ze=Sc`<span class="mention">@${0}</span>`),t)),a=s.index+s[0].length}return a<e.length&&r.push(this._renderLinks(e.slice(a))),r}_renderImages(e){if(!sg()||!this.hass)return bp(Ie||(Ie=Sc``));const t=function(e,t=3){const o=[];for(const i of Hu(e))if("url"in i&&Uu.test(i.url)&&!o.includes(i.url)&&o.push(i.url),o.length>=t)break;return o}(e);if(0===t.length)return bp(Re||(Re=Sc``));const o=this.hass;return bp(Oe||(Oe=Sc`<div class="message-images">
      ${0}
    </div>`),t.map(e=>{const t=bp(Te||(Te=Sc`<span class="image-box image-failed" title=${0}>${0}</span>`),e,uh("The image could not be downloaded."));if(function(e){return dg().includes(e)}(e))return t;const i=function(e,t,o){if(ng.has(t))return ng.get(t);lg.has(t)||(lg.add(t),e.callWS({type:"meshcore_chattx/sign_image_url",url:t}).then(e=>ng.set(t,e.path)).catch(()=>ng.set(t,null)).finally(()=>{lg.delete(t),o()}))}(o,e,()=>this.requestUpdate());return void 0===i?bp(Le||(Le=Sc`<span class="image-box"></span>`)):null===i?(cg(e),t):bp(Ne||(Ne=Sc`<button class="image-open" aria-label=${0}
            @click=${0}>
            <img src=${0} alt="" loading="lazy"
              @error=${0} />
          </button>`),uh("Image"),t=>{t.stopPropagation(),this._viewer={src:i,url:e}},i,()=>{cg(e),this.requestUpdate()})}))}_renderLinks(e){const t=Hu(e);return 1===t.length&&"text"in t[0]?e:t.map(e=>"url"in e?bp(qe||(qe=Sc`<a class="link" href=${0} target="_blank" rel="noopener noreferrer"
          @click=${0}>${0}</a>`),e.url,e=>e.stopPropagation(),e.label):e.text)}_openDialog(e){this._selectedMessage=e}_toggleMap(){this._showMap?this._hideMap():(this._showMap=!0,this._mapStep=dm(()=>{this._mapStep=null,this._showMap=!1}))}_hideMap(){cm(this._mapStep),this._mapStep=null,this._showMap=!1}_closeDialog(){this._hideMap(),this._selectedMessage=null}willUpdate(e){e.has("_selectedMessage")&&this._showMap&&this._hideMap()}_renderMessageDialog(e){var t,o,i,r;const s=e.rxLogData&&e.rxLogData.length>0,a=this.hass?Mm(this.hass.states):[],n=s?e.rxLogData.map(e=>{const t=e.path_nodes,o=e.hop_count,i=e.snr,r=e.rssi,s=[];t&&t.length>0?s.push(t.map(e=>e.substring(0,4).toUpperCase()).join(" > ")):void 0!==o?s.push(`${o} hop${1!==o?"s":""}`):s.push("0 hops"),void 0!==i&&s.push(`SNR: ${i}`),void 0!==r&&s.push(`RSSI: ${r}`);const n=t?Em(t,a):null;return n&&s.push(Pm(n)),s.join(" · ")}).join(" | "):"",l=e.timestamp.toLocaleString(hh(),{weekday:"short",month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit"}),d=Iu(e.rxLogData),c=this.hass?Em(Dm(e.rxLogData),Mm(this.hass.states)):null,h=null===d?"":function(e,t){const o=`${e} ${1===e?"hop":"hops"}`;return(xh()||bh()).replace(/\{hops\}/g,o).replace(/\{km\}/g,$h(null==t?void 0:t.km,null==t?void 0:t.approx)).replace(/\{route\}/g,$h(null==t?void 0:t.routeKm,null==t?void 0:t.routeApprox))}(d,c),p="padding: 8px 16px; font-size: 12px; color: var(--secondary-text-color); border-top: 1px solid var(--divider-color, #e0e0e0);";return bp(je||(je=Sc`
      <div class="message-dialog-overlay" @click=${0}>
        <div class="message-dialog ${0}"
             role="dialog" aria-modal="true" aria-label=${0}
             @click=${0}>
          <div class="message-dialog-top">
            <div class="message-dialog-preview">${0}</div>
            <button class="message-dialog-close" aria-label=${0} title=${0}
              @click=${0}>✕</button>
          </div>
          <button class="message-dialog-action" @click=${0}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>${0}
          </button>
          ${0}
          ${0}
          ${0}
          ${0}
          ${0}
          <div style=${0}>
            ${0}: ${0}
          </div>
          ${0}
          ${0}
          ${0}
          ${0}
        </div>
      </div>
    `),()=>this._closeDialog(),this._showMap?"with-map":"",uh("Message actions"),e=>e.stopPropagation(),e.text,uh("Close"),uh("Close"),()=>this._closeDialog(),()=>this._copyText(e.text),uh("Copy Text"),e.isOutgoing&&!e.id.startsWith("optimistic_")?bp(He||(He=Sc`
                <button class="message-dialog-action" @click=${0}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>${0}
                </button>
              `),()=>this._resend(e.text),uh("Send again")):bp(Ue||(Ue=Sc``)),e.isOutgoing||e.isSystem?bp(Xe||(Xe=Sc``)):bp(Ve||(Ve=Sc`
                <button class="message-dialog-action" @click=${0}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>${0}
                </button>
                ${0}
              `),()=>this._replyToSender(e.sender),uh("Reply"),h?bp(Ke||(Ke=Sc`
                      <button class="message-dialog-action" @click=${0}>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>${0}
                      </button>
                    `),()=>this._replyToSender(e.sender,h),h):bp(We||(We=Sc``))),s?bp(Ge||(Ge=Sc`
                <div class="message-dialog-route" @click=${0}>
                  ${0}
                </div>
              `),()=>this._copyText(n),uh("Route: {route}",{route:n})):bp(Ye||(Ye=Sc``)),this.hass&&function(e){return og(e).length>0}(e)?bp(Qe||(Qe=Sc`
                <button class="message-dialog-action" @click=${0}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>${0}
                </button>
                ${0}
              `),()=>this._toggleMap(),this._showMap?uh("Hide map"):uh("Show route on map"),this._showMap?bp(Ze||(Ze=Sc`<chattx-path-map .hass=${0} .message=${0} .nodeName=${0}
                      @chattx-send-image=${0}></chattx-path-map>`),this.hass,e,this.nodeName,()=>this._closeDialog()):bp(Je||(Je=Sc``))):bp(et||(et=Sc``)),e.isOutgoing||e.isSystem?bp(tt||(tt=Sc``)):this._renderSender(e,p),p,e.isOutgoing?uh("Sent"):uh("Received"),l,e.isOutgoing||e.isSystem||!bm(e.floodScope,e.regionScope).long?bp(it||(it=Sc``)):bp(ot||(ot=Sc`<div style=${0}>${0}</div>`),p,bm(e.floodScope,e.regionScope).long),e.isOutgoing&&e.deliveryStatus?bp(rt||(rt=Sc`
                <div style=${0}>
                  ${0}${0}
                </div>
              `),p,void 0!==e.deliveryStatus.ackReceived?(e.deliveryStatus.ackReceived?uh("ACK received"):uh("The recipient has not confirmed the message (no ACK)."))+((null!==(t=e.deliveryStatus.attempts)&&void 0!==t?t:1)>1?` · ${uh("Sent {n} times, retried automatically",{n:null!==(o=e.deliveryStatus.attempts)&&void 0!==o?o:1})}`:""):(null!==(i=e.deliveryStatus.repeaterCount)&&void 0!==i?i:0)>0?mh("{n} repeater responded","{n} repeaters responded",null!==(r=e.deliveryStatus.repeaterCount)&&void 0!==r?r:0):uh("No repeaters responded"),e.deliveryStatus.roundTripMs?` · ${e.deliveryStatus.roundTripMs}ms RTT`:""):bp(st||(st=Sc``)),!e.isOutgoing&&e.resends?e.resends.map(t=>bp(at||(at=Sc`
                <div class="message-dialog-route" @click=${0}>
                  ${0}
                </div>
              `),()=>this._copyText(mg(e,t)),mg(e,t))):bp(nt||(nt=Sc``)),e.isOutgoing&&e.lateEchoes?e.lateEchoes.map(t=>bp(lt||(lt=Sc`
                <div class="message-dialog-route" @click=${0}>
                  ${0}
                </div>
              `),()=>this._copyText(ug(e,t)),ug(e,t))):bp(dt||(dt=Sc``)))}_renderSender(e,t){const o=this.hass?function(e,t){const o=[];for(const[i,r]of Object.entries(e)){if(!i.startsWith("binary_sensor.meshcore_")||!i.endsWith("_contact"))continue;const e=r.attributes;e.adv_name===t&&"string"==typeof e.public_key&&e.public_key&&o.push(e.public_key.toLowerCase())}return o}(this.hass.states,e.sender):[];return bp(ct||(ct=Sc`<div style=${0}>
      ${0}: <b>${0}</b>
      ${0}
      ${0}
    </div>`),t,uh("Sender"),e.sender,0===o.length?bp(ht||(ht=Sc`<div class="sender-key unknown">${0}</div>`),uh("Public key unknown: the sender is not among the contacts.")):o.map(e=>bp(pt||(pt=Sc`<div class="sender-key" title=${0}
            @click=${0}>
            ${0} <span class="copy-hint">${0}</span>
          </div>`),uh("Copy"),()=>{this._copyText(e),this._copiedKey=e,setTimeout(()=>{this._copiedKey=""},1500)},e,this._copiedKey===e?uh("Copied"):uh("Copy"))),o.length>1?bp(ut||(ut=Sc`<div class="sender-key unknown">${0}</div>`),uh("Several contacts have this name.")):bp(mt||(mt=Sc``)))}async _copyText(e){try{await navigator.clipboard.writeText(e)}catch(t){const o=document.createElement("textarea");o.value=e,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o)}this._closeDialog()}_resend(e){this.dispatchEvent(new CustomEvent("resend-message",{detail:{text:e},bubbles:!0,composed:!0})),this._closeDialog()}_replyToSender(e,t=""){this.dispatchEvent(new CustomEvent("reply-to-sender",{detail:{mention:t?`@[${e}] ${t} `:`@[${e}] `},bubbles:!0,composed:!0})),this._closeDialog()}_classMap(e){return Object.entries(e).filter(([,e])=>e).map(([e])=>e).join(" ")}};function ug(e,t){var o;const i=new Date(t.received_at),r=Math.max(0,Math.round((i.getTime()-e.timestamp.getTime())/6e4)),s="number"==typeof t.hop_count?uh("Came back through the mesh after {minutes} min, {hops} hops",{minutes:r,hops:t.hop_count}):uh("Came back through the mesh after {minutes} min",{minutes:r}),a=null!==(o=t.path_nodes)&&void 0!==o&&o.length?` · ${t.path_nodes.map(e=>e.substring(0,4).toUpperCase()).join(" > ")}`:"";return s+a}function mg(e,t){var o;const i=Math.max(0,Math.round((new Date(t.received_at).getTime()-e.timestamp.getTime())/1e3)),r="number"==typeof t.hop_count?uh("Sent again by the sender after {seconds} s, {hops} hops",{seconds:i,hops:t.hop_count}):uh("Sent again by the sender after {seconds} s",{seconds:i}),s=null!==(o=t.path_nodes)&&void 0!==o&&o.length?` · ${t.path_nodes.map(e=>e.substring(0,4).toUpperCase()).join(" > ")}`:"";return r+s}pg.styles=Rh(gt||(gt=Sc`
    :host {
      display: block;
    }

    .message-group {
      margin-bottom: 8px;
      display: flex;
      flex-direction: column;
    }

    .message-group.outgoing {
      align-items: flex-end;
    }

    .message-group.incoming {
      align-items: flex-start;
    }

    .message-group.system {
      align-items: center;
    }

    .sender {
      font-size: 12px;
      font-weight: 600;
      color: var(--sender-color, var(--primary-color, #03a9f4));
      margin-bottom: 2px;
      padding: 0 4px;
      max-width: 85%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .message-group.outgoing .sender {
      display: none;
    }

    .bubble {
      max-width: 85%;
      padding: 8px 12px;
      border-radius: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
      position: relative;
      cursor: pointer;
      transition: opacity 0.15s;
      line-height: 1.4;
      font-size: 14px;
    }

    .bubble:active {
      opacity: 0.7;
    }

    .bubble.search-highlight {
      animation: highlight-flash 2.5s ease-out;
    }

    @keyframes highlight-flash {
      0%, 20% {
        box-shadow: 0 0 0 3px rgba(var(--rgb-primary-color, 3, 169, 244), 0.6);
      }
      100% {
        box-shadow: 0 0 0 3px transparent;
      }
    }

    .bubble + .bubble {
      margin-top: 2px;
    }

    .bubble.incoming {
      background: var(--bubble-incoming-bg, var(--secondary-background-color, #e8e8e8));
      color: var(--bubble-incoming-text, var(--primary-text-color, #212121));
      border-bottom-left-radius: 4px;
    }

    .bubble.incoming:first-of-type {
      border-top-left-radius: 16px;
    }

    .bubble.outgoing {
      background: var(--bubble-outgoing-bg, var(--primary-color, #03a9f4));
      color: var(--bubble-outgoing-text, #fff);
      border-bottom-right-radius: 4px;
    }

    .bubble.outgoing:first-of-type {
      border-top-right-radius: 16px;
    }

    .bubble.system {
      background: transparent;
      color: var(--system-msg-color, var(--secondary-text-color, #727272));
      font-style: italic;
      font-size: 13px;
      text-align: center;
      cursor: default;
      padding: 4px 12px;
    }

    .message-text {
      white-space: pre-wrap;
    }

    .message-text .mention {
      background: var(--mention-bg, rgba(3, 169, 244, 0.15));
      color: var(--mention-text, var(--primary-color, #03a9f4));
      font-weight: 600;
      padding: 1px 4px;
      border-radius: 4px;
    }

    .message-text .link {
      color: var(--primary-color, #03a9f4);
      text-decoration: underline;
      word-break: break-all;
    }

    .bubble.outgoing .message-text .link {
      color: #fff;
    }

    .bubble.outgoing .message-text .mention {
      background: rgba(255, 255, 255, 0.25);
      color: #fff;
    }

    .timestamp {
      font-size: 11px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      margin-top: 2px;
      padding: 0 4px;
    }

    .bubble.outgoing .timestamp {
      color: rgba(255, 255, 255, 0.6);
    }

    .bubble.incoming .timestamp {
      color: var(--secondary-text-color, #727272);
    }

    .message-group.outgoing .timestamp {
      text-align: right;
    }

    .route-info {
      font-size: 10px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      padding: 2px 4px;
      font-family: monospace;
    }

    .route-info-inline {
      font-size: 11px;
      color: var(--timestamp-color, var(--secondary-text-color, #727272));
      font-family: monospace;
      margin-top: 2px;
      padding: 0 4px;
      opacity: 0.7;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .delivery-status {
      color: inherit;
    }

    .flood-scope {
      color: inherit;
      opacity: 0.85;
      white-space: nowrap;
    }

    .message-images {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 6px;
    }

    .image-box {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: 140px;
      height: 140px;
      padding: 8px;
      border-radius: 8px;
      background: rgba(127, 127, 127, 0.2);
      font-size: 11px;
      text-align: center;
      opacity: 0.8;
    }

    .image-open {
      padding: 0;
      border: none;
      background: none;
      cursor: zoom-in;
    }

    .message-images img {
      display: block;
      height: 140px;
      max-width: 220px;
      object-fit: cover;
      border-radius: 8px;
      background: rgba(127, 127, 127, 0.2);
    }

    .message-dialog-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.85);
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .message-dialog {
      background: #333;
      border: 2px solid var(--primary-color, #03a9f4);
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
      min-width: 240px;
      max-width: 300px;
      /* A dialog taller than the screen (the route map on a phone) scrolls
         inside instead of hiding its top and bottom. */
      max-height: calc(100dvh - 24px);
      overflow-x: hidden;
      overflow-y: auto;
      overscroll-behavior: contain;
      z-index: 21;
    }

    .message-dialog-top {
      position: sticky;
      top: 0;
      z-index: 2;
      display: flex;
      align-items: center;
      background: #333;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }

    .message-dialog-top .message-dialog-preview {
      flex: 1;
      min-width: 0;
      /* Fill the bar, so the close button sits at the right edge also in
         the wider dialog with the map. */
      max-width: none;
      border-bottom: none;
    }

    .message-dialog-close {
      flex: none;
      width: 44px;
      height: 44px;
      border: none;
      background: transparent;
      color: var(--primary-text-color, #fff);
      font-size: 20px;
      cursor: pointer;
    }

    .message-dialog-preview {
      padding: 12px 16px;
      font-size: 13px;
      color: var(--secondary-text-color);
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 280px;
    }

    .message-dialog-action {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      padding: 14px 16px;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
      text-align: left;
      min-height: 48px;
      transition: background 0.15s;
    }

    .message-dialog-action:hover,
    .message-dialog-action:active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    }

    .message-dialog-action + .message-dialog-action {
      border-top: 1px solid var(--divider-color, #e0e0e0);
    }

    .message-dialog.with-map {
      max-width: min(560px, 94vw);
      width: min(560px, 94vw);
    }

    .sender-key {
      margin-top: 4px;
      font-family: monospace;
      font-size: 11px;
      word-break: break-all;
      cursor: pointer;
    }
    .sender-key.unknown {
      font-family: inherit;
      cursor: default;
      opacity: 0.8;
    }
    .copy-hint {
      margin-left: 6px;
      font-family: sans-serif;
      color: var(--primary-color, #03a9f4);
    }

    .message-dialog-route {
      padding: 12px 16px;
      font-size: 12px;
      color: var(--secondary-text-color);
      border-top: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
      font-family: monospace;
      word-break: break-all;
      transition: background 0.15s;
    }

    .message-dialog-route:hover,
    .message-dialog-route:active {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    }
  `)),Fc([Up({type:Object})],pg.prototype,"group",void 0),Fc([Up({type:Object})],pg.prototype,"message",void 0),Fc([Up({type:String})],pg.prototype,"timestampFormat",void 0),Fc([Vp()],pg.prototype,"_selectedMessage",void 0),Fc([Up({attribute:!1,hasChanged:(e,t)=>!t&&!!e})],pg.prototype,"hass",void 0),Fc([Up({type:String})],pg.prototype,"nodeName",void 0),Fc([Vp()],pg.prototype,"_showMap",void 0),Fc([Vp()],pg.prototype,"_copiedKey",void 0),Fc([Vp()],pg.prototype,"_viewer",void 0),pg=Fc([qp("chattx-message-bubble")],pg);let gg=class extends Lp{constructor(){super(),this._query="",this._fromDate="",this._toDate="",this._results=[],this._totalCount=0,this._searching=!1,this._hasSearched=!1,this._showFilters=!1,this._debounceTimer=null,fm(this,{isOpen:()=>!0,onEscape:()=>this.dispatchEvent(new CustomEvent("search-close",{bubbles:!0,composed:!0}))})}render(){return bp(vt||(vt=Sc`
      <div class="search-header">
        <div class="search-row">
          <input
            class="search-input"
            type="text"
            aria-label=${0}
            placeholder=${0}
            .value=${0}
            @input=${0}
          />
          <button
            class="filter-toggle ${0}"
            @click=${0}>
            ${0}
          </button>
        </div>
        ${0}
        ${0}
      </div>

      <div class="results">
        ${0}
      </div>
    `),uh("Search messages"),uh("Search messages..."),this._query,this._onQueryInput,this._showFilters?"active":"",()=>{this._showFilters=!this._showFilters},uh("Filters"),this._showFilters?bp(ft||(ft=Sc`
              <div class="filters">
                <input
                  class="filter-input"
                  type="date"
                  placeholder=${0}
                  .value=${0}
                  @change=${0}
                />
                <input
                  class="filter-input"
                  type="date"
                  placeholder=${0}
                  .value=${0}
                  @change=${0}
                />
              </div>
            `),uh("From"),this._fromDate,e=>{this._fromDate=e.target.value,this._doSearch()},uh("To"),this._toDate,e=>{this._toDate=e.target.value,this._doSearch()}):"",this._hasSearched?bp(yt||(yt=Sc`<div class="result-count">${0}</div>`),mh("{n} result","{n} results",this._totalCount)):"",this._searching?bp(_t||(_t=Sc`<div class="loading-state">${0}</div>`),uh("Searching...")):this._hasSearched?0===this._results.length?bp(xt||(xt=Sc`
                  <div class="empty-state">
                    <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H4V8h4v2c0 1.1.9 2 2 2h6v2h-2v2h2v2h-2v2h6V10h-4v10h2z"/></svg></div>
                    <div class="empty-text">${0}</div>
                  </div>
                `),uh("No messages found")):this._results.map(e=>this._renderResult(e)):bp(bt||(bt=Sc`
                <div class="empty-state">
                  <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div>
                  <div class="empty-text">${0}</div>
                </div>
              `),uh("Search your message history")))}_renderResult(e){const t=new Date(e.timestamp),o=t.toLocaleDateString(hh(),{month:"short",day:"numeric"}),i=t.toLocaleTimeString(hh(),{hour:"2-digit",minute:"2-digit"}),r=this._highlightQuery(e.text);return bp(wt||(wt=Sc`
      <div class="result-item" @click=${0}>
        <div class="result-meta">
          <span class="result-sender">${0}</span>
          <span class="result-conversation">${0}</span>
          <span>${0} ${0}</span>
        </div>
        <div class="result-text">${0}</div>
      </div>
    `),()=>this._onResultClick(e),e.sender,e.conversation_name,o,i,r)}_highlightQuery(e){if(!this._query.trim())return e;const t=this._query.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(${t})`,"gi"),i=e.split(o),r=this._query.toLowerCase();return i.map(e=>e.toLowerCase()===r?bp(kt||(kt=Sc`<mark>${0}</mark>`),e):e)}_onQueryInput(e){this._query=e.target.value,null!==this._debounceTimer&&clearTimeout(this._debounceTimer);const t=this._query.trim().length,o=t>=2,i=0===t,r=!(!this._fromDate&&!this._toDate);o||i&&r?this._debounceTimer=window.setTimeout(()=>this._doSearch(),400):(this._results=[],this._hasSearched=!1)}async _doSearch(){if(!this.hass||!this.entityId)return;const e=this._query.trim(),t=e.length>0,o=!(!this._fromDate&&!this._toDate);if(!t&&!o)return this._results=[],this._totalCount=0,void(this._hasSearched=!1);this._searching=!0,this._hasSearched=!0;try{const t={type:"meshcore_chattx/search_stored_messages",query:e,entity_id:this.entityId,limit:100};this._fromDate&&(t.from_date=`${this._fromDate}T00:00:00`),this._toDate&&(t.to_date=`${this._toDate}T23:59:59.999999`);const o=await this.hass.callWS(t);this._results=o.results||[],this._totalCount=this._results.length}catch(e){this._results=[],this._totalCount=0}finally{this._searching=!1}}_onResultClick(e){this.dispatchEvent(new CustomEvent("result-selected",{detail:{entityId:e.entity_id,messageId:e.id,conversationName:e.conversation_name,timestamp:e.timestamp},bubbles:!0,composed:!0}))}};gg.styles=Rh($t||($t=Sc`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }

    .search-header {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 12px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    .search-row {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .search-input {
      flex: 1;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 20px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 13px;
      outline: none;
      transition: border-color 0.2s;
    }

    .search-input:focus {
      border-color: var(--primary-color, #03a9f4);
    }

    .search-input::placeholder {
      color: var(--secondary-text-color, #727272);
    }

    .filter-toggle {
      padding: 6px 10px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: transparent;
      color: var(--secondary-text-color);
      font-size: 12px;
      cursor: pointer;
      flex-shrink: 0;
      transition: all 0.15s;
    }

    .filter-toggle:hover,
    .filter-toggle.active {
      border-color: var(--primary-color, #03a9f4);
      color: var(--primary-color, #03a9f4);
    }

    .filters {
      display: flex;
      gap: 8px;
    }

    .filter-input {
      flex: 1;
      padding: 6px 10px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 12px;
      outline: none;
    }

    .filter-input:focus {
      border-color: var(--primary-color, #03a9f4);
    }

    .result-count {
      font-size: 12px;
      color: var(--secondary-text-color);
      padding: 0 4px;
    }

    .results {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .results::-webkit-scrollbar {
      width: 6px;
    }

    .results::-webkit-scrollbar-track {
      background: transparent;
    }

    .results::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
      border-radius: 3px;
    }

    .result-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 10px 12px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      cursor: pointer;
      transition: background 0.15s;
    }

    .result-item:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .result-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }

    .result-sender {
      font-weight: 600;
      color: var(--primary-text-color);
    }

    .result-conversation {
      font-style: italic;
    }

    .result-text {
      font-size: 13px;
      color: var(--primary-text-color);
      line-height: 1.4;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .result-text mark {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.2);
      color: inherit;
      border-radius: 2px;
      padding: 0 2px;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color);
      text-align: center;
      padding: 24px;
    }

    .empty-icon {
      font-size: 32px;
      margin-bottom: 8px;
      opacity: 0.5;
    }

    .empty-text {
      font-size: 13px;
    }

    .loading-state {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      color: var(--secondary-text-color);
      font-size: 13px;
      gap: 8px;
    }
  `)),Fc([Up({type:Object})],gg.prototype,"hass",void 0),Fc([Up({type:String})],gg.prototype,"entryId",void 0),Fc([Up({type:String})],gg.prototype,"entityId",void 0),Fc([Up({type:String})],gg.prototype,"meshNodeName",void 0),Fc([Vp()],gg.prototype,"_query",void 0),Fc([Vp()],gg.prototype,"_fromDate",void 0),Fc([Vp()],gg.prototype,"_toDate",void 0),Fc([Vp()],gg.prototype,"_results",void 0),Fc([Vp()],gg.prototype,"_totalCount",void 0),Fc([Vp()],gg.prototype,"_searching",void 0),Fc([Vp()],gg.prototype,"_hasSearched",void 0),Fc([Vp()],gg.prototype,"_showFilters",void 0),gg=Fc([qp("chattx-message-search")],gg);let vg=class extends Lp{constructor(){super(...arguments),this.prefix="",this.sensor=!1,this._password="",this._remember=!1,this._hasSaved=!1,this._busy=!1,this._error="",this._loggedInAs=null,this._loggedInAt=null}updated(e){e.has("prefix")&&this.prefix&&this._loadState()}async _loadState(){if(!this.hass)return;const e=this.prefix;this._password="",this._error="",this._loggedInAs=null,this._loggedInAt=null;const t=await uu(this.hass,e,this.entryId);e===this.prefix&&(this._hasSaved=t.has_saved_password,this._remember=t.has_saved_password,t.logged_in_at&&(this._loggedInAt=t.logged_in_at,this._loggedInAs="admin",this._notifyLoggedIn()))}async _submit(e){if(e.preventDefault(),!this.hass||this._busy)return;this._busy=!0,this._error="";const t=await async function(e,t,o){const i={type:"meshcore_chattx/repeater_login",target_prefix:t,remember:o.remember};void 0!==o.password&&(i.password=o.password),o.entryId&&(i.entry_id=o.entryId);try{return await e.callWS(i)}catch(e){return{success:!1,message:pu(e)}}}(this.hass,this.prefix,{password:this._password||void 0,remember:this._remember,entryId:this.entryId});if(this._busy=!1,void 0!==t.has_saved_password&&(this._hasSaved=t.has_saved_password),t.success)this._password="",this._loggedInAs=!0===t.is_admin?"admin":!1===t.is_admin?"guest":"unknown",this._loggedInAt=null,this._notifyLoggedIn();else if("rate_limited"===t.reason){var o;this._error=uh("Too much mesh traffic right now. Try again in {retry_after} seconds.",{retry_after:null!==(o=t.retry_after)&&void 0!==o?o:0})}else if("no_response"===t.reason)this._error=this.sensor?uh("The sensor did not confirm the login. The password may be wrong, or the sensor may be out of reach."):uh("The repeater did not confirm the login. The password may be wrong, or the repeater may be out of reach.");else{var i;this._error=null!==(i=t.message)&&void 0!==i?i:uh("Login failed.")}}_notifyLoggedIn(){this.dispatchEvent(new CustomEvent("repeater-logged-in",{detail:{role:this._loggedInAs}}))}async _forget(){if(!this.hass)return;const e=await async function(e,t,o){const i={type:"meshcore_chattx/repeater_forget_password",target_prefix:t};o&&(i.entry_id=o);try{return await e.callWS(i),null}catch(e){return pu(e)}}(this.hass,this.prefix,this.entryId);e?this._error=e:(this._hasSaved=!1,this._remember=!1)}render(){return bp(Ct||(Ct=Sc`
      <form @submit=${0}>
        <label>
          ${0}
          <input
            type="password"
            autocomplete="new-password"
            placeholder=${0}
            .value=${0}
            ?disabled=${0}
            @input=${0}
          />
        </label>
        <label class="remember">
          <input
            type="checkbox"
            .checked=${0}
            ?disabled=${0}
            @change=${0}
          />
          ${0}
        </label>
        <div class="actions">
          <button class="primary" type="submit" ?disabled=${0}>${0}</button>
          ${0}
        </div>
        ${0}
        ${0}
        ${0}
      </form>
    `),this._submit,uh("Password"),this._hasSaved?uh("Saved password"):"",this._password,this._busy,e=>{this._password=e.target.value},this._remember,this._busy,e=>{this._remember=e.target.checked},uh("Remember password"),this._busy,this._busy?uh("Logging in…"):uh("Log in"),this._hasSaved?bp(Bt||(Bt=Sc`<button class="link" type="button" ?disabled=${0} @click=${0}>${0}</button>`),this._busy,this._forget,uh("Forget saved password")):"",this._busy?bp(St||(St=Sc`<div class="note">${0}</div>`),uh("This can take up to a minute over several hops.")):"",this._error?bp(Ft||(Ft=Sc`<div class="error" role="alert">${0}</div>`),this._error):"",this._loggedInAs?bp(At||(At=Sc`<div class="success" role="status">${0}</div>`),this._loggedInAt?uh("Logged in as administrator since {date}. No need to log in again.",{date:new Date(this._loggedInAt).toLocaleDateString(hh())}):"admin"===this._loggedInAs?uh("Logged in as administrator."):"guest"===this._loggedInAs?uh("Logged in as guest. Changing settings requires the admin password."):uh("Logged in.")):"")}};vg.styles=Rh(Mt||(Mt=Sc`
    form { display: flex; flex-direction: column; gap: 12px; }
    label { font-size: 13px; color: var(--secondary-text-color); }
    input[type='password'] {
      box-sizing: border-box;
      width: 100%;
      margin-top: 4px;
      padding: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 14px;
    }
    .remember { display: flex; align-items: center; gap: 8px; color: var(--primary-text-color); }
    .actions { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    button { padding: 8px 14px; border: none; border-radius: 4px; font-size: 13px; font-weight: 600; cursor: pointer; }
    button:disabled { opacity: 0.6; cursor: default; }
    .primary { background: var(--primary-color, #03a9f4); color: var(--text-primary-color, #fff); }
    .link { padding: 8px 0; background: none; color: var(--secondary-text-color); font-weight: 400; text-decoration: underline; }
    .note { font-size: 13px; color: var(--secondary-text-color); }
    .error { font-size: 13px; color: var(--error-color, #db4437); }
    .success { font-size: 14px; color: var(--success-color, #43a047); }
  `)),Fc([Up({type:Object})],vg.prototype,"hass",void 0),Fc([Up({type:String})],vg.prototype,"prefix",void 0),Fc([Up({type:String})],vg.prototype,"entryId",void 0),Fc([Up({type:Boolean})],vg.prototype,"sensor",void 0),Fc([Vp()],vg.prototype,"_password",void 0),Fc([Vp()],vg.prototype,"_remember",void 0),Fc([Vp()],vg.prototype,"_hasSaved",void 0),Fc([Vp()],vg.prototype,"_busy",void 0),Fc([Vp()],vg.prototype,"_error",void 0),Fc([Vp()],vg.prototype,"_loggedInAs",void 0),Fc([Vp()],vg.prototype,"_loggedInAt",void 0),vg=Fc([qp("chattx-repeater-login")],vg);const fg=36e5;let yg=class extends Lp{constructor(){super(...arguments),this.readAt="",this._timer=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._timer=setInterval(()=>this.requestUpdate(),3e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer),this._timer=null}render(){return this.className=function(e,t=Date.now()){const o=t-Date.parse(e);return o>864e5?"read-at very-old":o>fg?"read-at old":"read-at"}(this.readAt),this.title=new Date(this.readAt).toLocaleString(hh()),bp(Dt||(Dt=Sc`${0} ${0}`),uh("Loaded"),function(e,t=Date.now()){const o=Date.parse(e);if(Number.isNaN(o))return"";const i=t-o;if(i<6e4)return uh("just now");const r=Math.floor(i/6e4),s=Math.floor(i/fg);let a;return a=i<=fg?`${r} min`:i<=432e5?`${s} h ${r%60} min`:i<=1728e5?`${s} h`:`${Math.floor(i/864e5)} d`,uh("{amount} ago",{amount:a})}(this.readAt))}};Fc([Up({type:String})],yg.prototype,"readAt",void 0),yg=Fc([qp("chattx-read-age-note")],yg);const _g=[{title:"Basic",fields:[{command:"get name",label:"Name"},{command:"get role",label:"Role"},{command:"ver",label:"Firmware"},{command:"board",label:"Board"}]},{title:"Radio",fields:[{command:"get radio",label:"Radio",parts:[{label:"Frequency",unit:"MHz",decimals:3},{label:"Bandwidth",unit:"kHz"},{label:"Spreading factor"},{label:"Coding rate"}]},{command:"get tx",label:"TX power",unit:"dBm"},{command:"get radio.rxgain",label:"RX boosted gain"}]},{title:"Location",fields:[{command:"get lat",label:"Latitude"},{command:"get lon",label:"Longitude"}]},{title:"Features",fields:[{command:"get repeat",label:"Packet forwarding"},{command:"get allow.read.only",label:"Guest read-only access"},{command:"get multi.acks",label:"Multi-ACKs"}]},{title:"Network health",fields:[{command:"get loop.detect",label:"Loop detection"},{command:"get dutycycle",label:"Duty cycle"},{command:"get rxdelay",label:"Receive delay"}]},{title:"Advertisement",fields:[{command:"get advert.interval",label:"Local advert interval",unit:"min"},{command:"get flood.advert.interval",label:"Flood advert interval",unit:"h"},{command:"get flood.max",label:"Flood max hops"},{command:"get flood.max.advert",label:"Flood max hops, adverts"},{command:"get flood.max.unscoped",label:"Flood max hops, unscoped"}]},{title:"Operator info",fields:[{command:"get owner.info",label:"Operator info"}]},{title:"Advanced",fields:[{command:"get path.hash.mode",label:"Node ID size in paths"},{command:"get txdelay",label:"Flood TX delay"},{command:"get direct.txdelay",label:"Direct TX delay"},{command:"get int.thresh",label:"Interference threshold"},{command:"get cad",label:"Channel activity detection"},{command:"get agc.reset.interval",label:"AGC reset interval"},{command:"get adc.multiplier",label:"Battery voltage calibration"}]}];let bg=class extends Lp{constructor(){super(...arguments),this.prefix="",this.canLoad=!1,this._fields={},this._loading=!1,this._error="",this._waitSeconds=0}willUpdate(e){e.has("prefix")&&(this._fields={},this._error="")}updated(e){e.has("prefix")&&this.prefix&&this._loadRemembered()}async _loadRemembered(){if(!this.hass)return;const e=this.prefix,t=await bu(this.hass,e,this.entryId);if(e!==this.prefix)return;const o={};for(const[e,r]of Object.entries(t)){var i;r.sensors||r.neighbours||(o[e]=void 0!==r.unsupported?{kind:"unsupported",message:r.unsupported,readAt:r.read_at}:{kind:"value",value:null!==(i=r.value)&&void 0!==i?i:"",readAt:r.read_at})}this._fields={...o,...this._fields}}_isLoaded(e){var t;const o=null===(t=this._fields[e.command])||void 0===t?void 0:t.kind;return"value"===o||"unsupported"===o}_groupReadAt(e){const t=e.fields.flatMap(e=>{const t=this._fields[e.command];return t&&"readAt"in t?[t.readAt]:[]});return 0===t.length?null:t.reduce((e,t)=>Date.parse(t)<Date.parse(e)?t:e)}_setField(e,t){this._fields={...this._fields,[e]:t}}async _loadGroup(e){if(!this.hass||this._loading)return;const t=this.hass,o=this.prefix,i=()=>this.isConnected&&o===this.prefix,r=e.fields.every(e=>this._isLoaded(e))?e.fields:e.fields.filter(e=>!this._isLoaded(e));this._loading=!0,this._error="";let s=0;try{for(const e of r){const r=this._fields[e.command];this._setField(e.command,{kind:"loading"});const c=()=>vu(t,o,e.command,this.entryId);let h=await c();for(;"rate_limited"===h.reason&&i();){var a;if(await this._waitOut(null!==(a=h.retry_after)&&void 0!==a?a:1),!i())return;h=await c()}if(!i())return;var n;if(h.success)s=0,this._setField(e.command,{kind:"value",value:null!==(n=h.value)&&void 0!==n?n:"",readAt:(new Date).toISOString()});else if("unsupported"===h.reason){var l;s=0,this._setField(e.command,{kind:"unsupported",message:null!==(l=h.message)&&void 0!==l?l:"",readAt:(new Date).toISOString()})}else{if("no_response"!==h.reason){var d;const t={...this._fields};return r?t[e.command]=r:delete t[e.command],this._fields=t,void(this._error=null!==(d=h.message)&&void 0!==d?d:uh("Reading the setting failed."))}if(this._setField(e.command,r&&"readAt"in r?r:{kind:"no_response"}),s+=1,s>=2)return void(this._error=uh("The repeater stopped answering. It may be out of reach, or it may no longer accept this login. In that case, log in again."))}}}finally{o===this.prefix&&(this._loading=!1)}}async _waitOut(e){for(let t=e;t>0&&this.isConnected;t--)this._waitSeconds=t,await new Promise(e=>setTimeout(e,1e3));this._waitSeconds=0}_renderInput(e,t,o,i,r){let s="",a=!1;if("loading"===(null==o?void 0:o.kind))s="…";else if("no_response"===(null==o?void 0:o.kind))s=uh("No response"),a=!0;else if("unsupported"===(null==o?void 0:o.kind))s=uh("Not supported"),a=!0;else if("value"===(null==o?void 0:o.kind)){var n,l;s=void 0===i?o.value:null!==(n=null===(l=o.value.split(",")[i])||void 0===l?void 0:l.trim())&&void 0!==n?n:"";const e=Number(s);void 0!==r&&""!==s&&Number.isFinite(e)&&(s=e.toFixed(r))}return bp(Et||(Et=Sc`
      <label>
        ${0}${0}
        <input class=${0} readonly .value=${0} title=${0} />
      </label>
    `),e,t?` (${t})`:"",a?"problem":"",s,"unsupported"===(null==o?void 0:o.kind)?o.message:s)}_renderField(e){const t=this._fields[e.command];return e.parts?e.parts.map((e,o)=>this._renderInput(uh(e.label),e.unit,t,o,e.decimals)):this._renderInput(uh(e.label),e.unit,t)}render(){const e=!this.canLoad||this._loading;return bp(Pt||(Pt=Sc`
      ${0}
      ${0}
      ${0}
      ${0}
    `),this.canLoad?"":bp(zt||(zt=Sc`<div class="hint">${0}</div>`),uh("Log in as administrator to load values.")),this._waitSeconds?bp(It||(It=Sc`<div class="hint" role="status">${0}</div>`),uh("Mesh traffic limit, continuing in {waitSeconds} s.",{waitSeconds:this._waitSeconds})):"",this._error?bp(Rt||(Rt=Sc`<div class="error" role="alert">${0}</div>`),this._error):"",_g.map(t=>{const o=this._groupReadAt(t),i=t.fields.every(e=>this._isLoaded(e));return bp(Ot||(Ot=Sc`
        <section>
          <div class="group-header">
            <h4>${0}</h4>
            <button ?disabled=${0} @click=${0}>
              ${0}
            </button>
          </div>
          ${0}
          <div class="fields">${0}</div>
        </section>
      `),uh(t.title),e,()=>this._loadGroup(t),uh(i?"Reload":"Load"),o?bp(Tt||(Tt=Sc`<chattx-read-age-note .readAt=${0}></chattx-read-age-note>`),o):"",t.fields.map(e=>this._renderField(e)))}))}};bg.styles=Rh(Lt||(Lt=Sc`
    .hint { margin-bottom: 12px; font-size: 13px; color: var(--secondary-text-color); }
    .error { margin-bottom: 12px; font-size: 13px; color: var(--error-color, #db4437); }
    section { margin-bottom: 16px; }
    .group-header { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
    .read-at { display: block; margin: -4px 0 8px; font-size: 12px; color: var(--secondary-text-color); }
    .read-at.old { color: var(--warning-color, #ff9800); }
    .read-at.very-old { color: var(--error-color, #db4437); }
    h4 { margin: 0; font-size: 14px; font-weight: 600; color: var(--primary-text-color); }
    .fields { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 12px; }
    label { display: block; min-width: 0; font-size: 12px; color: var(--secondary-text-color); }
    input {
      box-sizing: border-box;
      width: 100%;
      margin-top: 2px;
      padding: 6px 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--secondary-background-color, #f5f5f5);
      color: var(--primary-text-color);
      font-size: 13px;
    }
    input.problem { color: var(--secondary-text-color); font-style: italic; }
    button {
      padding: 6px 12px;
      border: none;
      border-radius: 4px;
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }
    button:disabled { opacity: 0.5; cursor: default; }
    @media (max-width: 420px) { .fields { grid-template-columns: 1fr; } }
  `)),Fc([Up({type:Object})],bg.prototype,"hass",void 0),Fc([Up({type:String})],bg.prototype,"prefix",void 0),Fc([Up({type:String})],bg.prototype,"entryId",void 0),Fc([Up({type:Boolean})],bg.prototype,"canLoad",void 0),Fc([Vp()],bg.prototype,"_fields",void 0),Fc([Vp()],bg.prototype,"_loading",void 0),Fc([Vp()],bg.prototype,"_error",void 0),Fc([Vp()],bg.prototype,"_waitSeconds",void 0),bg=Fc([qp("chattx-repeater-settings")],bg);const xg={"analog input":"V","analog output":"V",illuminance:"lx",temperature:"°C",humidity:"%",accelerometer:"G",barometer:"hPa",voltage:"V",current:"A",frequency:"Hz",percentage:"%",altitude:"m",load:"kg",concentration:"ppm",power:"W",distance:"m",energy:"kWh",direction:"°",gyrometer:"°/s"},wg={voltage:"Battery voltage",temperature:"MCU temperature"},kg=[{channel:1,type:"voltage"},{channel:1,type:"temperature"}];function $g(e){return e.charAt(0).toUpperCase()+e.slice(1).replace(/_/g," ")}function Cg(e){var t;const o=xg[e.type],i=1===e.channel?uh(null!==(t=wg[e.type])&&void 0!==t?t:$g(e.type)):uh("{sensor}, channel {channel}",{sensor:uh($g(e.type)),channel:e.channel});return o?`${i} (${o})`:i}function Bg(e){return String("number"==typeof e?Number(e.toFixed(3)):e)}let Sg=class extends Lp{constructor(){super(...arguments),this.prefix="",this.canLoad=!1,this.sensor=!1,this._sensors=null,this._readAt=null,this._loading=!1,this._waitSeconds=0,this._error=""}willUpdate(e){e.has("prefix")&&(this._sensors=null,this._readAt=null,this._error="")}updated(e){e.has("prefix")&&this.prefix&&this._loadRemembered()}async _loadRemembered(){if(!this.hass)return;const e=this.prefix,t=(await bu(this.hass,e,this.entryId)).telemetry;e!==this.prefix||null==t||!t.sensors||this._loading||this._sensors||(this._sensors=t.sensors,this._readAt=t.read_at)}async _load(){if(!this.hass||this._loading)return;const e=this.hass,t=this.prefix,o=()=>this.isConnected&&t===this.prefix;this._loading=!0,this._error="";try{let a=await _u(e,t,this.entryId);for(;"rate_limited"===a.reason&&o();){for(let e=null!==(i=a.retry_after)&&void 0!==i?i:1;e>0&&this.isConnected;e--){var i;this._waitSeconds=e,await new Promise(e=>setTimeout(e,1e3))}if(this._waitSeconds=0,!o())return;a=await _u(e,t,this.entryId)}if(!o())return;var r;if(a.success)this._sensors=null!==(r=a.sensors)&&void 0!==r?r:[],this._readAt=(new Date).toISOString();else if("no_response"===a.reason)this._error=this.sensor?uh("The sensor did not answer. A sensor answers only after you log in with its password, and it may be out of reach."):uh("The repeater did not answer. It may be out of reach, or it may no longer accept this login. In that case, log in again.");else{var s;this._error=null!==(s=a.message)&&void 0!==s?s:uh("Reading telemetry failed.")}}finally{t===this.prefix&&(this._loading=!1)}}_field(e,t){return bp(Nt||(Nt=Sc`<label>${0}<input readonly .value=${0} title=${0} /></label>`),e,t,t)}render(){const e=null!==this._sensors;return bp(qt||(qt=Sc`
      ${0}
      <div class="header">
        ${0}
        <button ?disabled=${0} @click=${0}>
          ${0}
        </button>
      </div>
      ${0}
    `),this._error?bp(jt||(jt=Sc`<div class="error" role="alert">${0}</div>`),this._error):"",this._waitSeconds?bp(Ht||(Ht=Sc`<span class="hint" role="status">${0}</span>`),uh("Mesh traffic limit, continuing in {waitSeconds} s.",{waitSeconds:this._waitSeconds})):this._readAt?bp(Ut||(Ut=Sc`<chattx-read-age-note .readAt=${0}></chattx-read-age-note>`),this._readAt):"",!this.canLoad||this._loading,this._load,this._loading?uh("Loading…"):uh(e?"Reload":"Load"),e&&0===this._sensors.length?bp(Vt||(Vt=Sc`<div class="hint">${0}</div>`),this.sensor?uh("The sensor reports no values."):uh("The repeater reports no sensors.")):bp(Kt||(Kt=Sc`<div class="fields">${0}</div>`),e?[...this._sensors].sort((e,t)=>e.channel-t.channel).map(e=>this._field(Cg(e),function(e){const{value:t}=e;return Array.isArray(t)?t.map(Bg).join(", "):null!==t&&"object"==typeof t?Object.entries(t).map(([e,t])=>`${e}: ${Bg(t)}`).join(", "):Bg(t)}(e))):kg.map(e=>this._field(Cg(e),""))))}};Sg.styles=Rh(Wt||(Wt=Sc`
    .header { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
    .read-at, .hint { font-size: 12px; color: var(--secondary-text-color); }
    .read-at.old { color: var(--warning-color, #ff9800); }
    .read-at.very-old { color: var(--error-color, #db4437); }
    .error { margin-bottom: 8px; font-size: 13px; color: var(--error-color, #db4437); }
    .fields { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 12px; }
    label { display: block; min-width: 0; font-size: 12px; color: var(--secondary-text-color); }
    input {
      box-sizing: border-box;
      width: 100%;
      margin-top: 2px;
      padding: 6px 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--secondary-background-color, #f5f5f5);
      color: var(--primary-text-color);
      font-size: 13px;
    }
    button {
      margin-left: auto;
      padding: 6px 12px;
      border: none;
      border-radius: 4px;
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }
    button:disabled { opacity: 0.5; cursor: default; }
    @media (max-width: 420px) { .fields { grid-template-columns: 1fr; } }
  `)),Fc([Up({type:Object})],Sg.prototype,"hass",void 0),Fc([Up({type:String})],Sg.prototype,"prefix",void 0),Fc([Up({type:String})],Sg.prototype,"entryId",void 0),Fc([Up({type:Boolean})],Sg.prototype,"canLoad",void 0),Fc([Up({type:Boolean})],Sg.prototype,"sensor",void 0),Fc([Vp()],Sg.prototype,"_sensors",void 0),Fc([Vp()],Sg.prototype,"_readAt",void 0),Fc([Vp()],Sg.prototype,"_loading",void 0),Fc([Vp()],Sg.prototype,"_waitSeconds",void 0),Fc([Vp()],Sg.prototype,"_error",void 0),Sg=Fc([qp("chattx-repeater-telemetry")],Sg);let Fg=class extends Lp{constructor(){super(...arguments),this.prefix="",this.canSend=!1,this._lines=[],this._input="",this._busy=!1,this._history=[],this._historyIndex=0}willUpdate(e){e.has("prefix")&&(this._lines=[],this._history=[],this._historyIndex=0)}updated(e){e.has("_lines")&&this._log&&(this._log.scrollTop=this._log.scrollHeight)}_add(e){this._lines=[...this._lines,e].slice(-200)}async _submit(e){var t;e.preventDefault();const o=this._input.trim();if(!this.hass||!o||this._busy||!this.canSend)return;const i=this.prefix;this._input="",this._history=[...this._history,o],this._historyIndex=this._history.length,this._add({kind:"command",text:`$ ${o}`}),this._busy=!0;const r=await yu(this.hass,i,o,this.entryId);if(this._busy=!1,i===this.prefix){var s;if(r.success)this._add({kind:"reply",text:null!==(s=r.reply)&&void 0!==s?s:""});else if("no_response"===r.reason)this._add({kind:"note",text:uh("No reply. The command may still have run, and it is not repeated automatically.")});else if("rate_limited"===r.reason){var a;this._add({kind:"note",text:uh("Not sent because of the mesh traffic limit. Try again in {seconds} s.",{seconds:null!==(a=r.retry_after)&&void 0!==a?a:0})})}else{var n;this._add({kind:"note",text:null!==(n=r.message)&&void 0!==n?n:uh("Sending failed.")})}await this.updateComplete,null===(t=this._inputEl)||void 0===t||t.focus()}}_onKeydown(e){var t;if("ArrowUp"!==e.key&&"ArrowDown"!==e.key)return;e.preventDefault();const o="ArrowUp"===e.key?-1:1;this._historyIndex=Math.min(this._history.length,Math.max(0,this._historyIndex+o)),this._input=null!==(t=this._history[this._historyIndex])&&void 0!==t?t:""}render(){const e=this.canSend?uh("Command, e.g. get tx"):uh("Log in as administrator first");return bp(Xt||(Xt=Sc`
      <div class="log" role="log" aria-label=${0}>${0}${0}</div>
      <form @submit=${0}>
        <input
          aria-label=${0}
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          maxlength="160"
          placeholder=${0}
          .value=${0}
          ?disabled=${0}
          @input=${0}
          @keydown=${0} />
        <button type="submit" ?disabled=${0}>${0}</button>
      </form>
    `),uh("Repeater replies"),this._lines.map(e=>bp(Gt||(Gt=Sc`<div class=${0}>${0}</div>`),e.kind,e.text)),this._busy?bp(Yt||(Yt=Sc`<div class="note">${0}</div>`),uh("Waiting for a reply…")):"",this._submit,uh("Repeater command"),e,this._input,!this.canSend,e=>{this._input=e.target.value},this._onKeydown,!this.canSend||this._busy||!this._input.trim(),uh("Send"))}};Fg.styles=Rh(Qt||(Qt=Sc`
    .log {
      height: 180px;
      margin-bottom: 8px;
      padding: 8px;
      overflow-y: auto;
      border-radius: 4px;
      background: #1e1e1e;
      color: #d4d4d4;
      font-family: monospace;
      font-size: 12px;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
    }
    .command { color: #4fc3f7; }
    .note { color: #9e9e9e; font-style: italic; }
    form { display: flex; gap: 8px; }
    input {
      flex: 1;
      min-width: 0;
      box-sizing: border-box;
      padding: 6px 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-family: monospace;
      font-size: 13px;
    }
    button {
      padding: 6px 12px;
      border: none;
      border-radius: 4px;
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }
    button:disabled { opacity: 0.5; cursor: default; }
  `)),Fc([Up({type:Object})],Fg.prototype,"hass",void 0),Fc([Up({type:String})],Fg.prototype,"prefix",void 0),Fc([Up({type:String})],Fg.prototype,"entryId",void 0),Fc([Up({type:Boolean})],Fg.prototype,"canSend",void 0),Fc([Vp()],Fg.prototype,"_lines",void 0),Fc([Vp()],Fg.prototype,"_input",void 0),Fc([Vp()],Fg.prototype,"_busy",void 0),Fc([Kp(".log")],Fg.prototype,"_log",void 0),Fc([Kp("input")],Fg.prototype,"_inputEl",void 0),Fg=Fc([qp("chattx-repeater-terminal")],Fg);let Ag=class extends Lp{constructor(){super(...arguments),this.prefix="",this.canLoad=!1,this._neighbours=null,this._total=0,this._readAt=null,this._loading=!1,this._waitSeconds=0,this._error=""}willUpdate(e){e.has("prefix")&&(this._neighbours=null,this._readAt=null,this._error="")}updated(e){e.has("prefix")&&this.prefix&&this._loadRemembered()}async _loadRemembered(){var e;if(!this.hass)return;const t=this.prefix,o=(await bu(this.hass,t,this.entryId)).neighbours;t!==this.prefix||null==o||!o.neighbours||this._loading||this._neighbours||(this._neighbours=o.neighbours,this._total=null!==(e=o.total)&&void 0!==e?e:o.neighbours.length,this._readAt=o.read_at)}async _load(e){if(!this.hass||this._loading)return;const t=this.hass,o=this.prefix,i=()=>this.isConnected&&o===this.prefix;this._loading=!0,this._error="";try{let d=await fu(t,o,e,this.entryId);for(;"rate_limited"===d.reason&&i();){for(let e=null!==(r=d.retry_after)&&void 0!==r?r:1;e>0&&this.isConnected;e--){var r;this._waitSeconds=e,await new Promise(e=>setTimeout(e,1e3))}if(this._waitSeconds=0,!i())return;d=await fu(t,o,e,this.entryId)}if(!i())return;var s,a,n;if(d.success)this._neighbours=null!==(s=d.neighbours)&&void 0!==s?s:[],this._total=null!==(a=d.total)&&void 0!==a?a:this._neighbours.length,this._readAt=null!==(n=d.read_at)&&void 0!==n?n:(new Date).toISOString();else if("no_response"===d.reason)this._error=uh("The repeater did not answer. It may be out of reach, or it may no longer accept this login. In that case, log in again.");else{var l;this._error=null!==(l=d.message)&&void 0!==l?l:uh("Reading neighbours failed.")}}finally{o===this.prefix&&(this._loading=!1)}}_renderList(){if(null===this._neighbours)return bp(Zt||(Zt=Sc`<div class="hint">${0}</div>`),uh("Not loaded yet."));if(0===this._neighbours.length)return bp(Jt||(Jt=Sc`<div class="hint">${0}</div>`),uh("The repeater reports no neighbours."));const e=e=>{var t;const o=null!==(t=e.read_at)&&void 0!==t?t:this._readAt;return o?Math.max(0,(Date.now()-Date.parse(o))/1e3):0},t=[...this._neighbours].sort((e,t)=>t.snr-e.snr);return bp(eo||(eo=Sc`
      <table>
        <thead><tr><th>${0}</th><th class="number">${0}</th><th class="number">${0}</th></tr></thead>
        <tbody>${0}</tbody>
      </table>
      ${0}
    `),uh("Node"),uh("SNR (dB)"),uh("Heard"),t.map(t=>bp(to||(to=Sc`
          <tr>
            <td title=${0}>${0}</td>
            <td class="number">${0}</td>
            <td class="number">${0}</td>
          </tr>
        `),t.pubkey,t.name,t.snr.toFixed(2),function(e){if(e<60)return uh("{amount} ago",{amount:`${e} s`});const t=Math.round(e/60);if(t<60)return uh("{amount} ago",{amount:`${t} min`});const o=Math.round(t/60);return uh("{amount} ago",o<48?{amount:`${o} h`}:{amount:`${Math.round(o/24)} d`})}(Math.round(t.secs_ago+e(t))))),this._total>this._neighbours.length?bp(oo||(oo=Sc`<div class="more">
            <span class="hint">${0}</span>
            <button class="next" ?disabled=${0} @click=${0}>
              ${0}
            </button>
          </div>`),uh("Loaded {length} of {total}, most recently heard first.",{length:this._neighbours.length,total:this._total}),!this.canLoad||this._loading,()=>this._load(this._neighbours.length),uh("Load 10 more")):"")}render(){return bp(io||(io=Sc`
      ${0}
      <div class="header">
        ${0}
        <button class="reload" ?disabled=${0} @click=${0}>
          ${0}
        </button>
      </div>
      ${0}
    `),this._error?bp(ro||(ro=Sc`<div class="error" role="alert">${0}</div>`),this._error):"",this._waitSeconds?bp(so||(so=Sc`<span class="hint" role="status">${0}</span>`),uh("Mesh traffic limit, continuing in {waitSeconds} s.",{waitSeconds:this._waitSeconds})):this._readAt?bp(ao||(ao=Sc`<chattx-read-age-note .readAt=${0}></chattx-read-age-note>`),this._readAt):"",!this.canLoad||this._loading,()=>this._load(0),this._loading?uh("Loading…"):null!==this._neighbours?uh("Reload"):uh("Load"),this._renderList())}};Ag.styles=Rh(no||(no=Sc`
    .header { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
    .read-at, .hint { font-size: 12px; color: var(--secondary-text-color); }
    .read-at.old { color: var(--warning-color, #ff9800); }
    .read-at.very-old { color: var(--error-color, #db4437); }
    .error { margin-bottom: 8px; font-size: 13px; color: var(--error-color, #db4437); }
    .more { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 8px; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; }
    th { font-size: 12px; font-weight: 500; text-align: left; color: var(--secondary-text-color); }
    th, td { padding: 4px 8px 4px 0; border-bottom: 1px solid var(--divider-color, #e0e0e0); }
    td { color: var(--primary-text-color); overflow-wrap: anywhere; }
    .number { white-space: nowrap; text-align: right; }
    button {
      margin-left: auto;
      padding: 6px 12px;
      border: none;
      border-radius: 4px;
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }
    button:disabled { opacity: 0.5; cursor: default; }
  `)),Fc([Up({type:Object})],Ag.prototype,"hass",void 0),Fc([Up({type:String})],Ag.prototype,"prefix",void 0),Fc([Up({type:String})],Ag.prototype,"entryId",void 0),Fc([Up({type:Boolean})],Ag.prototype,"canLoad",void 0),Fc([Vp()],Ag.prototype,"_neighbours",void 0),Fc([Vp()],Ag.prototype,"_total",void 0),Fc([Vp()],Ag.prototype,"_readAt",void 0),Fc([Vp()],Ag.prototype,"_loading",void 0),Fc([Vp()],Ag.prototype,"_waitSeconds",void 0),Fc([Vp()],Ag.prototype,"_error",void 0),Ag=Fc([qp("chattx-repeater-neighbours")],Ag);const Mg=e=>(...t)=>({_$litDirective$:e,values:t});class Dg{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Eg={},Pg=Mg(class extends Dg{constructor(e){if(super(e),3!==e.type&&1!==e.type&&4!==e.type)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===wp||t===kp)return t;const o=e.element,i=e.name;if(3===e.type){if(t===o[i])return wp}else if(4===e.type){if(!!t===o.hasAttribute(i))return wp}else if(1===e.type&&o.getAttribute(i)===t+"")return wp;return((e,t=Eg)=>{e._$AH=t})(e),t}});function zg(e){return(new TextEncoder).encode(e).length>=159}let Ig=class extends Lp{constructor(){super(...arguments),this.prefix="",this.canEdit=!1,this._rows=null,this._cut=!1,this._defaultScope=null,this._readAt=null,this._busy=!1,this._dirty=!1,this._error="",this._notice="",this._confirm=null,this._newName="",this._newParent="*"}willUpdate(e){e.has("prefix")&&(this._rows=null,this._readAt=null,this._defaultScope=null,this._dirty=!1,this._error="",this._notice="",this._confirm=null)}updated(e){e.has("prefix")&&this.prefix&&this._loadRemembered()}async _loadRemembered(){var e;if(!this.hass)return;const t=this.prefix,o=await bu(this.hass,t,this.entryId),i=o.region;if(t!==this.prefix||void 0===(null==i?void 0:i.value)||this._busy||this._rows)return;this._applyTree(i.value),this._readAt=i.read_at;const r=null===(e=o["region default"])||void 0===e?void 0:e.value;void 0!==r&&(this._defaultScope=Rg(r))}_applyTree(e){this._rows=function(e){const t=e.split("\n").filter(e=>e.trim());return zg(e)&&t.pop(),t.map(e=>{const t=e.length-e.trimStart().length,[o,i]=e.trim().split(/\s+/),r=o.endsWith("^");return{name:r?o.slice(0,-1):o,depth:t,home:r,flood:"F"===i}})}(e),this._cut=zg(e)}async _readRegions(){var e,t;if(!this.hass)return!1;const o=this.prefix,i=await vu(this.hass,o,"region",this.entryId);if(o!==this.prefix||!this.isConnected)return!1;if(!i.success)return this._error=this._failure(i.reason,i.retry_after,i.message),!1;this._applyTree(null!==(e=i.value)&&void 0!==e?e:""),this._readAt=(new Date).toISOString();const r=await vu(this.hass,o,"region default",this.entryId);return r.success&&o===this.prefix&&(this._defaultScope=Rg(null!==(t=r.value)&&void 0!==t?t:"")),!0}_failure(e,t,o){return"rate_limited"===e?uh("Mesh traffic limit, try again in {retryAfter} s.",{retryAfter:null!=t?t:0}):"no_response"===e?uh("The repeater did not answer. A change may still have applied, so load the regions again."):null!=o?o:uh("The request failed.")}async _load(){if(!this._busy){this._busy=!0,this._error="",this._notice="";try{await this._readRegions()}finally{this._busy=!1}}}async _run(e,t={}){if(this.hass&&!this._busy){this._busy=!0,this._error="",this._notice="",this._confirm=null;try{var o;const r=await yu(this.hass,this.prefix,e,this.entryId);if(!this.isConnected)return;if(!r.success)return this._error=this._failure(r.reason,r.retry_after,r.message),void("no_response"===r.reason&&(this._dirty=!0));var i;if(!function(e){const t=e.trim().toLowerCase();return t.startsWith("ok")||t.includes(" is now ")}(null!==(o=r.reply)&&void 0!==o?o:""))return void(this._error=null!==(i=r.reply)&&void 0!==i?i:"");this._dirty=!t.saves,t.saves&&(this._notice=uh("Saved to the repeater.")),await this._readRegions()}finally{this._busy=!1}}}_toggleFlood(e){const t=`region ${e.flood?"denyf":"allowf"} ${e.name}`;e.flood&&"*"===e.name?this._confirm={command:t,text:uh("The repeater will drop all flood packets without a region, including ordinary traffic. Are you sure?")}:this._run(t)}_askRemove(e){this._confirm={command:`region remove ${e.name}`,text:uh("Remove region {name}?",{name:e.name})}}_setDefault(e){this._confirm={command:`region default ${e}`,saves:!0,text:uh("Changing the default scope saves to the repeater right away, along with any unsaved region changes. Continue?")}}_add(e){var t;e.preventDefault();const o=this._newName.trim();if(!o)return;if(/\s/.test(o))return void(this._error=uh("A region name cannot contain spaces."));const i=o.replace(/^#/,"");null!==(t=this._rows)&&void 0!==t&&t.some(e=>e.name.replace(/^#/,"")===i)?this._error=uh("Region {name} already exists.",{name:o}):(this._newName="",this._run("*"===this._newParent?`region put ${o}`:`region put ${o} ${this._newParent}`))}_renderRows(){const e=!this.canEdit||this._busy;return this._rows.map(t=>bp(lo||(lo=Sc`
      <div class="row" style="padding-left: ${0}px">
        <span class="name">${0}</span>
        <label class="flood">
          <input type="checkbox" .checked=${0} ?disabled=${0} @click=${0} />
          ${0}
        </label>
        <button class=${0} ?disabled=${0}
          title=${0} @click=${0}>${0}</button>
        ${0}
      </div>
    `),16*t.depth,t.name,t.flood,e,e=>{e.preventDefault(),this._toggleFlood(t)},uh("Flood"),t.home?"quiet home-on":"quiet",e||t.home,uh("Home region"),()=>this._run(`region home ${t.name}`),uh("Home"),"*"===t.name?"":bp(co||(co=Sc`
          <button class="quiet" ?disabled=${0} aria-label=${0} @click=${0}>✕</button>
        `),e,uh("Remove {name}",{name:t.name}),()=>this._askRemove(t))))}render(){var e;const t=!this.canEdit||this._busy;return bp(ho||(ho=Sc`
      ${0}
      ${0}
      ${0}
      ${0}
      <div class="header">
        ${0}
        <button class="load" ?disabled=${0} @click=${0}>
          ${0}
        </button>
      </div>
      ${0}
    `),this._dirty?bp(po||(po=Sc`
        <div class="warning" role="status">
          <span>${0}</span>
          <button class="save" ?disabled=${0} @click=${0}>${0}</button>
        </div>
      `),uh("Changes are not saved. They will be lost when the repeater restarts."),t,()=>this._run("region save",{saves:!0}),uh("Save")):"",this._confirm?bp(uo||(uo=Sc`
        <div class="confirm" role="alertdialog">
          ${0}
          <div class="confirm-actions">
            <button class="danger" @click=${0}>${0}</button>
            <button class="quiet" @click=${0}>${0}</button>
          </div>
        </div>
      `),this._confirm.text,()=>{const e=this._confirm;this._run(e.command,{saves:e.saves})},uh("Yes"),()=>{this._confirm=null},uh("Cancel")):"",this._error?bp(mo||(mo=Sc`<div class="error" role="alert">${0}</div>`),this._error):"",this._notice?bp(go||(go=Sc`<div class="notice" role="status">${0}</div>`),this._notice):"",this._readAt?bp(vo||(vo=Sc`<chattx-read-age-note .readAt=${0}></chattx-read-age-note>`),this._readAt):"",t,this._load,this._busy?uh("Working…"):this._rows?uh("Reload"):uh("Load"),null===this._rows?bp(fo||(fo=Sc`<div class="hint">${0}</div>`),uh("Not loaded yet.")):bp(yo||(yo=Sc`
          ${0}
          ${0}
          <div class="scope">
            ${0}
            <select .value=${0} ?disabled=${0} @change=${0}>
              <option value="<null>" ?selected=${0}>${0}</option>
              ${0}
            </select>
          </div>
          <form class="add" @submit=${0}>
            <input type="text" aria-label=${0} placeholder=${0}
              autocapitalize="off" spellcheck="false" ?disabled=${0} .value=${0}
              @input=${0} />
            <select aria-label=${0} ?disabled=${0}
              @change=${0}>
              ${0}
            </select>
            <button type="submit" ?disabled=${0}>${0}</button>
          </form>
        `),this._cut?bp(_o||(_o=Sc`<div class="error">${0}</div>`),uh("The list did not fit in one repeater reply (160 bytes), so some regions are missing here. The full list is only available over the serial port.")):"",this._renderRows(),uh("Default scope"),Pg(null!==(e=this._defaultScope)&&void 0!==e?e:"<null>"),t,e=>this._setDefault(e.target.value),null===this._defaultScope,uh("none"),this._rows.filter(e=>"*"!==e.name).map(e=>bp(bo||(bo=Sc`
                <option value=${0} ?selected=${0}>${0}</option>
              `),e.name,this._defaultScope===e.name,e.name)),this._add,uh("New region name"),uh("New region"),t,this._newName,e=>{this._newName=e.target.value},uh("Parent region"),t,e=>{this._newParent=e.target.value},this._rows.map(e=>bp(xo||(xo=Sc`<option value=${0} ?selected=${0}>${0}</option>`),e.name,this._newParent===e.name,e.name)),t||!this._newName.trim(),uh("Add")))}};function Rg(e){var t;const o=null!==(t=e.trim().split(/\s+/).pop())&&void 0!==t?t:"";return o&&"<null>"!==o?o:null}Ig.styles=Rh(wo||(wo=Sc`
    .header { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
    .read-at, .hint { font-size: 12px; color: var(--secondary-text-color); }
    .read-at.old { color: var(--warning-color, #ff9800); }
    .read-at.very-old { color: var(--error-color, #db4437); }
    .error { margin-bottom: 8px; font-size: 13px; color: var(--error-color, #db4437); }
    .notice { margin-bottom: 8px; font-size: 13px; color: var(--success-color, #43a047); }
    .warning {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 8px;
      padding: 8px;
      border-radius: 4px;
      background: var(--warning-color, #ff9800);
      color: #000;
      font-size: 13px;
    }
    .confirm { margin-bottom: 8px; padding: 8px; border: 1px solid var(--error-color, #db4437); border-radius: 4px; font-size: 13px; color: var(--primary-text-color); }
    .confirm-actions { display: flex; gap: 8px; margin-top: 8px; }
    .row { display: flex; align-items: center; gap: 8px; padding: 4px 0; border-bottom: 1px solid var(--divider-color, #e0e0e0); font-size: 13px; color: var(--primary-text-color); }
    .name { flex: 1; min-width: 0; overflow-wrap: anywhere; }
    .flood { display: flex; align-items: center; gap: 4px; font-size: 12px; color: var(--secondary-text-color); }
    .add { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
    .scope { display: flex; align-items: center; gap: 8px; margin-top: 8px; font-size: 13px; color: var(--secondary-text-color); }
    input[type='text'], select {
      min-width: 0;
      flex: 1;
      box-sizing: border-box;
      padding: 6px 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 13px;
    }
    button {
      padding: 6px 12px;
      border: none;
      border-radius: 4px;
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }
    button:disabled { opacity: 0.5; cursor: default; }
    button.load { margin-left: auto; }
    button.quiet { padding: 4px 8px; background: none; color: var(--secondary-text-color); border: 1px solid var(--divider-color, #e0e0e0); }
    button.home-on { color: var(--primary-color, #03a9f4); border-color: var(--primary-color, #03a9f4); }
    button.danger { background: var(--error-color, #db4437); }
    button.save { background: #000; color: #fff; }
  `)),Fc([Up({type:Object})],Ig.prototype,"hass",void 0),Fc([Up({type:String})],Ig.prototype,"prefix",void 0),Fc([Up({type:String})],Ig.prototype,"entryId",void 0),Fc([Up({type:Boolean})],Ig.prototype,"canEdit",void 0),Fc([Vp()],Ig.prototype,"_rows",void 0),Fc([Vp()],Ig.prototype,"_cut",void 0),Fc([Vp()],Ig.prototype,"_defaultScope",void 0),Fc([Vp()],Ig.prototype,"_readAt",void 0),Fc([Vp()],Ig.prototype,"_busy",void 0),Fc([Vp()],Ig.prototype,"_dirty",void 0),Fc([Vp()],Ig.prototype,"_error",void 0),Fc([Vp()],Ig.prototype,"_notice",void 0),Fc([Vp()],Ig.prototype,"_confirm",void 0),Fc([Vp()],Ig.prototype,"_newName",void 0),Fc([Vp()],Ig.prototype,"_newParent",void 0),Ig=Fc([qp("chattx-repeater-regions")],Ig);let Og=null,Tg=class extends Lp{_loadHopNodes(){if(this._hopNodes||this._hopNodesLoading||!this.hass)return;const e=Og;e&&Date.now()-e.at<6e4?this._hopNodes=e.nodes:(this._hopNodesLoading=!0,au(this.hass,this.entryId).then(e=>{const t=e.filter(e=>2===e.type||3===e.type);Og={at:Date.now(),nodes:t},this._hopNodes=t}).finally(()=>{this._hopNodesLoading=!1}))}_hopLabel(e){var t;const o=(null!==(t=this._hopNodes)&&void 0!==t?t:[]).filter(t=>(t.public_key||t.pubkey_prefix||"").toLowerCase().startsWith(e));if(1===o.length)return bp(ko||(ko=Sc`<span class="hop-name">${0}</span> <span class="hop-id">${0}</span>`),o[0].adv_name||e,e);if(o.length>1){const t=o.map(e=>e.adv_name).filter(Boolean).join(", ");return bp($o||($o=Sc`<span class="hop-id" title=${0}>${0}</span> <span class="hop-ambiguous">${0}</span>`),t,e,mh("{n} possible repeater","{n} possible repeaters",o.length))}return bp(Co||(Co=Sc`<span class="hop-id">${0}</span>`),e)}_pathWasReset(e){return!!this._pathReset&&this._pathReset.key===e.public_key&&this._pathReset.from===(e.out_path||"")}_pathHops(e){var t,o;const i=null!==(t=e.out_path_len)&&void 0!==t?t:-1,r=(e.out_path||"").toLowerCase();if(i<=0||!r)return[];const s=2*((null!==(o=e.out_path_hash_mode)&&void 0!==o?o:0)+1),a=[];for(let e=0;e<i&&(e+1)*s<=r.length;e++)a.push(r.substring(e*s,(e+1)*s));return a.length?a:[r]}_renderPathSection(e){var t;const o=this._pathWasReset(e),i=null!==(t=e.out_path_len)&&void 0!==t?t:-1,r=o||i<0,s=r||i<=0?[]:this._pathHops(e);s.length&&this._loadHopNodes();const a=r?uh("Flood"):0===i?uh("Direct (neighbour, no repeaters)"):bp(Bo||(Bo=Sc`<ol class="hop-list">${0}</ol>`),s.map(e=>bp(So||(So=Sc`<li>${0}</li>`),this._hopLabel(e))));return bp(Fo||(Fo=Sc`
      <div class="section">
        <div class="section-header">${0}</div>
        <div class="info-item">
          <div class="info-label">${0}</div>
          <div class="info-value path-value">${0}</div>
        </div>
        ${0}
        ${0}
      </div>
    `),uh("Network"),uh("Route (Outgoing Path)"),a,!r&&i>0?bp(Ao||(Ao=Sc`
          <div class="info-item" style="margin-top: 8px;">
            <div class="info-label">${0}</div>
            <div class="info-value">${0} hops</div>
          </div>`),uh("Path Length"),i):bp(Mo||(Mo=Sc``)),o||!r?bp(Do||(Do=Sc`
          <div class="path-reset">
            ${0}
            ${0}
          </div>`),o?bp(Eo||(Eo=Sc`<span class="path-reset-note">${0}</span>`),uh("Path reset. The next message is sent by flood and finds a new path.")):bp(Po||(Po=Sc`<button class="path-reset-btn" ?disabled=${0}
                  title=${0}
                  @click=${0}>${0}</button>`),this._pathResetting,uh("Forget the stored path; the next message is sent by flood"),()=>this._resetPath(e),this._pathResetting?uh("Resetting…"):uh("Reset path")),this._pathResetError?bp(zo||(zo=Sc`<span class="path-reset-error">${0}</span>`),this._pathResetError):bp(Io||(Io=Sc``))):bp(Ro||(Ro=Sc``)))}async _resetPath(e){if(!this.hass||!e.public_key||this._pathResetting)return;this._pathResetting=!0,this._pathResetError="";const t=await cu(this.hass,"reset_path",{key:e.public_key},this.entryId);this._pathResetting=!1,t.success&&!/error/i.test(t.response||"")?this._pathReset={key:e.public_key,from:e.out_path||""}:this._pathResetError=uh("Error: {error}",{error:t.response||"?"})}async _copyKey(e){try{await navigator.clipboard.writeText(e)}catch(t){const o=document.createElement("textarea");o.value=e,document.body.appendChild(o),o.select(),document.execCommand("copy"),o.remove()}this._keyCopied=!0,setTimeout(()=>{this._keyCopied=!1},1500)}constructor(){super(),this.open=!1,this.loginOnly=!1,this.pendingAction=null,this._confirming=!1,this._confirmAction=null,this._showLogin=!1,this._canLoadSettings=!1,this._loggedIn=!1,this._keyCopied=!1,this._pathReset=null,this._pathResetting=!1,this._pathResetError="",this._hopNodes=null,this._hopNodesLoading=!1,this._loginStatePrefix=null,fm(this,{isOpen:()=>this.open,onEscape:()=>{this._confirming?(this._confirming=!1,this._confirmAction=null):this._showLogin?(this._showLogin=!1,this._canLoadSettings=!1):this._close()}})}updated(){var e,t;const o=this.open&&!this.loginOnly&&this.node&&null!==(e=this.node.pubkey_prefix)&&void 0!==e?e:null;o!==this._loginStatePrefix&&(this._loginStatePrefix=o,this._loggedIn=!1,o&&null!==(t=this.hass)&&void 0!==t&&null!==(t=t.user)&&void 0!==t&&t.is_admin&&uu(this.hass,o,this.entryId).then(e=>{o===this._loginStatePrefix&&(this._loggedIn=!!e.logged_in_at)}))}render(){var e;if(!this.open||!this.node)return bp(Oo||(Oo=Sc``));const t="adv_name"in this.node,o=t?2===this.node.type:"repeater"===this.node.type,i=t&&3===this.node.type,r=t?1===this.node.type:"client"===this.node.type,s=t&&4===this.node.type,a=t?this.node.adv_name:this.node.name,n=this.node.pubkey_prefix,l=(o||s)&&!!n&&!(null===(e=this.hass)||void 0===e||null===(e=e.user)||void 0===e||!e.is_admin)&&(!t||this.node.added_to_node);let d=bp(To||(To=Sc`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`)),c="Contact",h="";return o?(d=bp(Lo||(Lo=Sc`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`)),c="Repeater",h="repeater"):i?(d=bp(No||(No=Sc`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`)),c="Room Server",h="room-server"):s?(d=bp(qo||(qo=Sc`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`)),c="Sensor",h="sensor"):r&&(d=bp(jo||(jo=Sc`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`)),c="Client",h="client"),bp(Ho||(Ho=Sc`
      <div class="dialog-backdrop" @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label=${0}
          @click=${0}>
          <div class="dialog-header">
            <div class=${0}>${0}</div>
            <div class="dialog-title">
              <div class="dialog-name">${0}</div>
              <div class="dialog-type">${0}</div>
            </div>
            <button class="dialog-close" aria-label=${0} @click=${0}>✕</button>
          </div>

          <div class="dialog-content">
            ${0}
          </div>
        </div>
      </div>
    `),this._close,uh("Node detail — {name}",{name:a}),e=>e.stopPropagation(),`dialog-avatar ${h}`,d,a,c,uh("Close"),this._close,this._showLogin||this.loginOnly?bp(Uo||(Uo=Sc`
                  ${0}
                  <div class="section">
                    <div class="section-header">${0}</div>
                    <chattx-repeater-login
                      .hass=${0}
                      .prefix=${0}
                      .entryId=${0}
                      .sensor=${0}
                      @repeater-logged-in=${0}></chattx-repeater-login>
                  </div>
                  <div class="section">
                    <div class="section-header">${0}</div>
                    <chattx-repeater-telemetry
                      .hass=${0}
                      .prefix=${0}
                      .entryId=${0}
                      .sensor=${0}
                      .canLoad=${0}></chattx-repeater-telemetry>
                  </div>
                  ${0}
                  ${0}
                `),this.loginOnly&&t?this._renderPathSection(this.node):bp(Vo||(Vo=Sc``)),uh(s?"Log in to sensor":"Log in to repeater"),this.hass,n,this.entryId,s,e=>{this._canLoadSettings="guest"!==e.detail.role,this._loggedIn="admin"===e.detail.role},uh("Telemetry"),this.hass,n,this.entryId,s,this._canLoadSettings||s,s?"":bp(Ko||(Ko=Sc`<div class="section">
                    <div class="section-header">${0}</div>
                    <chattx-repeater-neighbours
                      .hass=${0}
                      .prefix=${0}
                      .entryId=${0}
                      .canLoad=${0}></chattx-repeater-neighbours>
                  </div>
                  <div class="section">
                    <div class="section-header">${0}</div>
                    <chattx-repeater-regions
                      .hass=${0}
                      .prefix=${0}
                      .entryId=${0}
                      .canEdit=${0}></chattx-repeater-regions>
                  </div>
                  <div class="section">
                    <div class="section-header">${0}</div>
                    <chattx-repeater-settings
                      .hass=${0}
                      .prefix=${0}
                      .entryId=${0}
                      .canLoad=${0}></chattx-repeater-settings>
                  </div>
                  <div class="section">
                    <div class="section-header">${0}</div>
                    <chattx-repeater-terminal
                      .hass=${0}
                      .prefix=${0}
                      .entryId=${0}
                      .canSend=${0}></chattx-repeater-terminal>
                  </div>`),uh("Neighbours"),this.hass,n,this.entryId,this._canLoadSettings,uh("Regions"),this.hass,n,this.entryId,this._canLoadSettings,uh("Settings"),this.hass,n,this.entryId,this._canLoadSettings,uh("Terminal"),this.hass,n,this.entryId,this._canLoadSettings),this.loginOnly?"":bp(Wo||(Wo=Sc`<button class="back-btn" @click=${0}>‹ Back</button>`),()=>{this._showLogin=!1,this._canLoadSettings=!1})):this._confirming?bp(Xo||(Xo=Sc`
                  <div class="confirm-section">
                    <div class="confirm-text">
                      ${0}
                    </div>
                    ${0}
                    <div class="confirm-actions">
                      <button class="confirm-btn yes" @click=${0}>${0}</button>
                      <button class="confirm-btn no" @click=${0}>${0}</button>
                    </div>
                  </div>
                `),"remove-contact"===this._confirmAction?uh("Remove this as an Added Contact?"):"","remove-contact"===this._confirmAction?bp(Go||(Go=Sc`
                      <div class="confirm-description">${0}</div>
                    `),uh("Removing the contact will make it a Discovered Contact.")):bp(Yo||(Yo=Sc``)),()=>this._confirmAction_exec(),uh("Yes"),()=>{this._confirming=!1,this._confirmAction=null},uh("Cancel")):bp(Qo||(Qo=Sc`
                  <div class="section">
                    <div class="section-header">${0}</div>
                    <div class="quick-actions ${0}">
                      ${0}
                      ${0}
                      ${0}
                      ${0}
                    </div>
                  </div>

                  ${0}

                  <div class="section">
                    <div class="section-header">${0}</div>
                    <div class="info-grid">
                      <div class="info-item">
                        <div class="info-label">${0}</div>
                        <div class="info-value">${0}</div>
                      </div>
                      <div class="info-item">
                        <div class="info-label">${0}</div>
                        <div class="info-value">${0}</div>
                      </div>
                      ${0}
                      ${0}
                    </div>
                  </div>

                  ${0}

                  ${0}

                `),uh("Quick Actions"),t?"":"full",l?bp(Zo||(Zo=Sc`
                        <button class=${0} @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm3 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>${0}</button>
                      `),this._loggedIn?"action-btn logged-in":"action-btn",()=>{this._showLogin=!0},this._loggedIn?uh("Logged in"):uh("Log in")):bp(Jo||(Jo=Sc``)),t&&this.node.added_to_node&&(r||i)?bp(ei||(ei=Sc`
                        <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>${0}</button>
                      `),()=>this._dispatchEvent("message"),uh("Message")):bp(ti||(ti=Sc``)),n&&!r?bp(oi||(oi=Sc`
                        <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M2 12a2 2 0 104 0 2 2 0 10-4 0zM10 12a2 2 0 104 0 2 2 0 10-4 0zM18 12a2 2 0 104 0 2 2 0 10-4 0zM7 10l3 2-3 2zM15 10l3 2-3 2z"/></svg>${0}</button>
                      `),()=>this._dispatchEvent("trace"),uh("Trace")):bp(ii||(ii=Sc``)),t&&this.node.added_to_node?bp(ri||(ri=Sc`<button class="action-btn warning"
                            ?disabled=${0}
                            @click=${0}>${0}</button>`),"remove-contact"===this.pendingAction,()=>{this._confirming=!0,this._confirmAction="remove-contact"},"remove-contact"===this.pendingAction?uh("Removing…"):uh("Remove Contact")):t?bp(si||(si=Sc`<button class="action-btn"
                            ?disabled=${0}
                            @click=${0}>${0}</button>`),"add-contact"===this.pendingAction,()=>this._dispatchEvent("add-contact"),"add-contact"===this.pendingAction?bp(ai||(ai=Sc`${0}`),uh("Adding…")):bp(ni||(ni=Sc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>${0}`),uh("Add contact"))):bp(li||(li=Sc``)),l&&s?bp(di||(di=Sc`
                    <div class="section">
                      <div class="section-header">${0}</div>
                      <chattx-repeater-telemetry
                        .hass=${0}
                        .prefix=${0}
                        .entryId=${0}
                        .sensor=${0}
                        .canLoad=${0}></chattx-repeater-telemetry>
                    </div>
                  `),uh("Telemetry"),this.hass,n,this.entryId,!0,!0):bp(ci||(ci=Sc``)),uh("Information"),uh("Public Key Prefix"),n,uh("Type"),c,t&&this.node.public_key?bp(hi||(hi=Sc`
                        <div class="info-item wide">
                          <div class="info-label">
                            ${0}
                            <button class="copy-key" @click=${0}>
                              ${0}
                            </button>
                          </div>
                          <div class="info-value key">${0}</div>
                        </div>
                      `),uh("Public key"),()=>this._copyKey(this.node.public_key),this._keyCopied?uh("Copied"):uh("Copy"),this.node.public_key):bp(pi||(pi=Sc``)),t?bp(ui||(ui=Sc`
                        <div class="info-item">
                          <div class="info-label">${0}</div>
                          <div class="info-value">
                            ${0}
                          </div>
                        </div>
                        <div class="info-item">
                          <div class="info-label">${0}</div>
                          <div class="info-value">${0}</div>
                        </div>
                      `),uh("Last Advert"),this.node.last_advert?new Date(1e3*this.node.last_advert).toLocaleString(hh()):uh("Unknown"),uh("Status"),this.node.added_to_node?"Added Contact":"Discovered Contact"):bp(mi||(mi=Sc``)),!t||0===this.node.adv_lat&&0===this.node.adv_lon?bp(vi||(vi=Sc``)):bp(gi||(gi=Sc`
                        <div class="section">
                          <div class="section-header">${0}</div>
                          <div class="info-grid">
                            <div class="info-item">
                              <div class="info-label">${0}</div>
                              <div class="info-value">${0}</div>
                            </div>
                            <div class="info-item">
                              <div class="info-label">${0}</div>
                              <div class="info-value">${0}</div>
                            </div>
                          </div>
                        </div>
                      `),uh("Location"),uh("Latitude"),this.node.adv_lat.toFixed(6),uh("Longitude"),this.node.adv_lon.toFixed(6)),t?this._renderPathSection(this.node):bp(fi||(fi=Sc``))))}_close(){this.open=!1,this._pathResetError="",this._showLogin=!1,this._canLoadSettings=!1,this._confirming=!1,this._confirmAction=null,this.dispatchEvent(new CustomEvent("node-detail-closed",{bubbles:!0,composed:!0}))}_dispatchEvent(e){this.dispatchEvent(new CustomEvent(`node-${e}`,{detail:{node:this.node},bubbles:!0,composed:!0}))}_confirmAction_exec(){this._confirmAction&&this._dispatchEvent(this._confirmAction),this._close()}};Tg.styles=[Rh(yi||(yi=Sc`
    :host {
      display: contents;
    }

    .dialog-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.2s;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .dialog {
      background: var(--card-background-color, #fff);
      border-radius: 8px;
      width: min(420px, 92vw);
      max-width: 420px;
      max-height: 72vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
      animation: slideUp 0.3s;
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .dialog-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    .dialog-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 19px;
      flex-shrink: 0;
    }

    .dialog-avatar.repeater { background: #ff9800; }
    .dialog-avatar.room-server { background: #9c27b0; }
    .dialog-avatar.sensor { background: #607d8b; }
    .dialog-avatar.client { background: #4caf50; }

    .dialog-title { flex: 1; overflow: hidden; }

    .dialog-name {
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dialog-type {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      margin-top: 2px;
    }

    .dialog-close {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: var(--secondary-text-color);
      padding: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .dialog-close:hover { color: var(--primary-text-color); }

    .dialog-content { flex: 1; min-height: 0; overflow-y: auto; padding: 12px; }

    .section { margin-bottom: 16px; }

    .section-header {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--secondary-text-color, #727272);
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .quick-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }

    .quick-actions.full { grid-template-columns: 1fr; }

    .action-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: transparent;
      color: var(--primary-text-color);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
    }

    .action-btn:hover {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-color: var(--primary-color, #03a9f4);
    }

    .action-btn.warning {
      color: #ff9800;
      border-color: rgba(255, 152, 0, 0.4);
    }

    .action-btn.warning:hover {
      background: #ff9800;
      color: #fff;
      border-color: #ff9800;
    }

    .action-btn.danger {
      color: var(--error-color, #db4437);
      border-color: rgba(219, 68, 55, 0.3);
    }

    .action-btn.danger:hover {
      background: var(--error-color, #db4437);
      color: #fff;
      border-color: var(--error-color, #db4437);
    }

    .action-btn:disabled {
      opacity: 0.6;
      cursor: wait;
      pointer-events: none;
    }

    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .info-item.wide {
      grid-column: 1 / -1;
    }

    .info-value.key {
      font-size: 12px;
      user-select: all;
    }

    .copy-key {
      float: right;
      padding: 0 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: none;
      color: var(--primary-color, #03a9f4);
      font-size: 11px;
      cursor: pointer;
    }

    .info-item {
      padding: 8px;
      background: var(--primary-background-color, #fafafa);
      border-radius: 6px;
    }

    .info-label {
      font-size: 11px;
      color: var(--secondary-text-color, #727272);
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .info-value {
      font-size: 13px;
      color: var(--primary-text-color);
      margin-top: 4px;
      word-break: break-all;
      font-family: monospace;
    }

    .confirm-section {
      padding: 12px;
      background: rgba(219, 68, 55, 0.08);
      border: 1px solid rgba(219, 68, 55, 0.2);
      border-radius: 6px;
      margin-bottom: 12px;
    }

    .confirm-text {
      font-size: 13px;
      color: var(--primary-text-color);
      margin-bottom: 8px;
    }

    .confirm-description {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      margin-bottom: 10px;
    }

    .confirm-actions { display: flex; gap: 6px; }

    .confirm-btn {
      padding: 6px 10px;
      border: none;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }

    .confirm-btn.yes { background: var(--error-color, #db4437); color: #fff; }
    .confirm-btn.no { background: var(--divider-color, #e0e0e0); color: var(--primary-text-color); }

    .action-btn.logged-in svg { color: var(--success-color, #43a047); }

    .path-reset {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin-top: 10px;
    }
    .path-reset-btn {
      padding: 6px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: transparent;
      color: var(--primary-text-color);
      font: inherit;
      font-size: 13px;
      cursor: pointer;
    }
    .path-reset-btn:hover:not(:disabled) { border-color: var(--primary-color, #03a9f4); }
    .path-reset-btn:disabled { opacity: 0.6; cursor: default; }
    .path-value { overflow-wrap: anywhere; }
    .hop-list { margin: 4px 0 0; padding-left: 22px; }
    .hop-list li { margin: 2px 0; }
    .hop-id { font-family: monospace; font-size: 12px; color: var(--secondary-text-color); }
    .hop-ambiguous { font-size: 12px; color: var(--secondary-text-color); }
    .path-reset-note { font-size: 12px; color: var(--secondary-text-color); }
    .path-reset-error { font-size: 12px; color: var(--error-color, #db4437); }

    .back-btn {
      padding: 6px 0;
      border: none;
      background: none;
      color: var(--secondary-text-color);
      font-size: 13px;
      cursor: pointer;
    }

  `)),Xp],Fc([Up({type:Object})],Tg.prototype,"node",void 0),Fc([Up({type:Boolean})],Tg.prototype,"open",void 0),Fc([Up({type:Object})],Tg.prototype,"hass",void 0),Fc([Up({type:String})],Tg.prototype,"entryId",void 0),Fc([Up({type:Boolean})],Tg.prototype,"loginOnly",void 0),Fc([Up({type:String})],Tg.prototype,"pendingAction",void 0),Fc([Vp()],Tg.prototype,"_confirming",void 0),Fc([Vp()],Tg.prototype,"_confirmAction",void 0),Fc([Vp()],Tg.prototype,"_showLogin",void 0),Fc([Vp()],Tg.prototype,"_canLoadSettings",void 0),Fc([Vp()],Tg.prototype,"_loggedIn",void 0),Fc([Vp()],Tg.prototype,"_keyCopied",void 0),Fc([Vp()],Tg.prototype,"_pathReset",void 0),Fc([Vp()],Tg.prototype,"_pathResetting",void 0),Fc([Vp()],Tg.prototype,"_pathResetError",void 0),Fc([Vp()],Tg.prototype,"_hopNodes",void 0),Tg=Fc([qp("chattx-node-detail-dialog")],Tg);let Lg=class extends Lp{constructor(){super(...arguments),this.disabled=!1,this._open=!1,this._messages=null,this._onOutsideClick=e=>{e.composedPath().includes(this)||this._close()},this._onKeydown=e=>{"Escape"===e.key&&this._close()}}disconnectedCallback(){super.disconnectedCallback(),this._removeListeners()}_removeListeners(){document.removeEventListener("click",this._onOutsideClick),document.removeEventListener("keydown",this._onKeydown)}_close(){this._open=!1,this._removeListeners()}async _toggle(){this._open?this._close():(this._open=!0,document.addEventListener("click",this._onOutsideClick),document.addEventListener("keydown",this._onKeydown),this.hass&&(this._messages=await $u(this.hass)))}_select(e){this._close(),this.dispatchEvent(new CustomEvent("quick-message-selected",{detail:{message:e}}))}render(){const e=uh("Quick messages");return bp(_i||(_i=Sc`
      <button class="toggle" title=${0} aria-label=${0} aria-expanded=${0} ?disabled=${0} @click=${0}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
      </button>
      ${0}
    `),e,e,this._open?"true":"false",this.disabled,this._toggle,this._open?bp(bi||(bi=Sc`
        <div class="menu">
          ${0}
        </div>
      `),null===this._messages?"":0===this._messages.length?bp(xi||(xi=Sc`<div class="empty">${0}</div>`),uh("Nothing here yet. Add messages in the Settings tab.")):this._messages.map(e=>bp(wi||(wi=Sc`<button class="item" @click=${0}>${0}</button>`),()=>this._select(e),e))):"")}};Lg.styles=Rh(ki||(ki=Sc`
    :host { position: relative; display: block; flex-shrink: 0; }
    .toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--quick-message-toggle-size, 40px);
      height: var(--quick-message-toggle-size, 40px);
      border: none;
      border-radius: 50%;
      background: none;
      color: var(--secondary-text-color);
      cursor: pointer;
    }
    .toggle:hover:not(:disabled) { background: var(--secondary-background-color, #f5f5f5); }
    .toggle:disabled { opacity: 0.5; cursor: not-allowed; }
    .menu {
      position: absolute;
      bottom: calc(100% + 8px);
      left: 0;
      z-index: 20;
      width: min(320px, 80vw);
      max-height: 280px;
      overflow-y: auto;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    }
    .item {
      display: block;
      width: 100%;
      padding: 10px 12px;
      border: none;
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-size: 14px;
      text-align: left;
      overflow-wrap: anywhere;
      cursor: pointer;
    }
    .item:hover, .item:focus-visible { background: var(--secondary-background-color, #f5f5f5); }
    .empty { padding: 12px; font-size: 13px; color: var(--secondary-text-color); }
  `)),Fc([Up({type:Object})],Lg.prototype,"hass",void 0),Fc([Up({type:Boolean})],Lg.prototype,"disabled",void 0),Fc([Vp()],Lg.prototype,"_open",void 0),Fc([Vp()],Lg.prototype,"_messages",void 0),Lg=Fc([qp("chattx-quick-message-picker")],Lg);const Ng=["😀","😁","😂","🤣","😊","😉","😍","😘","😎","🤔","😅","😇","🙂","🙃","😐","😴","😢","😭","😡","😱","🤯","🥳","🤝","🙏","👍","👎","👌","👋","👏","💪","✌️","🤞","❤️","🔥","⭐","✅","❌","❗","❓","⚠️","🎉","💡","📡","📻","📟","📱","🛰️","🗼","🔋","🔌","⚡","🌐","📍","🗺️","🧭","🏠","🚗","🚲","🥾","⛰️","☀️","⛅","🌧️","❄️","🌙","☕","🍺","🍕","🐶","🐱","🦌","🌲"];let qg=class extends Lp{constructor(){super(...arguments),this.disabled=!1,this._open=!1,this._onOutsideClick=e=>{e.composedPath().includes(this)||this._close()},this._onKeydown=e=>{"Escape"===e.key&&this._close()}}disconnectedCallback(){super.disconnectedCallback(),this._removeListeners()}_removeListeners(){document.removeEventListener("click",this._onOutsideClick),document.removeEventListener("keydown",this._onKeydown)}_close(){this._open=!1,this._removeListeners()}_toggle(){this._open?this._close():(this._open=!0,document.addEventListener("click",this._onOutsideClick),document.addEventListener("keydown",this._onKeydown))}_select(e){this._close(),this.dispatchEvent(new CustomEvent("emoji-selected",{detail:{emoji:e}}))}render(){const e=uh("Insert emoji");return bp($i||($i=Sc`
      <button class="toggle" title=${0} aria-label=${0} aria-expanded=${0} ?disabled=${0} @click=${0}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,17.5C14.33,17.5 16.31,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5Z"/></svg>
      </button>
      ${0}
    `),e,e,this._open?"true":"false",this.disabled,this._toggle,this._open?bp(Ci||(Ci=Sc`
        <div class="menu">
          ${0}
        </div>
      `),Ng.map(e=>bp(Bi||(Bi=Sc`<button class="item" @click=${0}>${0}</button>`),()=>this._select(e),e))):"")}};qg.styles=Rh(Si||(Si=Sc`
    :host { position: relative; display: block; flex-shrink: 0; }
    .toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      padding: 0;
      border: none;
      border-radius: 50%;
      background: none;
      color: var(--secondary-text-color);
      cursor: pointer;
    }
    .toggle:hover:not(:disabled) { background: var(--secondary-background-color, #f5f5f5); }
    .toggle:disabled { opacity: 0.5; cursor: not-allowed; }
    .menu {
      position: absolute;
      bottom: calc(100% + 8px);
      right: 0;
      z-index: 20;
      display: grid;
      grid-template-columns: repeat(auto-fill, 38px);
      justify-content: center;
      width: min(290px, 80vw);
      max-height: 240px;
      overflow-y: auto;
      padding: 6px;
      box-sizing: border-box;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    }
    .item {
      width: 38px;
      height: 38px;
      padding: 0;
      border: none;
      border-radius: 6px;
      background: none;
      font-size: 22px;
      line-height: 1;
      cursor: pointer;
    }
    .item:hover, .item:focus-visible { background: var(--secondary-background-color, #f5f5f5); }
  `)),Fc([Up({type:Boolean})],qg.prototype,"disabled",void 0),Fc([Vp()],qg.prototype,"_open",void 0),qg=Fc([qp("chattx-emoji-picker")],qg);const jg="chattx-image-expiry";let Hg=class extends Lp{constructor(){var e;super(),this.file=null,this._preview="",this._image=null,this._expiry=null!==(e=Hc(jg))&&void 0!==e?e:"permanent",this._busy=!1,this._error="",fm(this,{isOpen:()=>null!==this.file,onEscape:()=>this._close()})}async willUpdate(e){if(e.has("file")&&(this._preview&&URL.revokeObjectURL(this._preview),this._preview=this.file?URL.createObjectURL(this.file):"",this._image=null,this._error="",this.file)){const e=this.file;try{const t=await async function(e){var t;const o=await createImageBitmap(e),i=Math.min(1,1600/Math.max(o.width,o.height)),r=Math.max(1,Math.round(o.width*i)),s=Math.max(1,Math.round(o.height*i)),a=document.createElement("canvas");a.width=r,a.height=s;const n=a.getContext("2d");n.fillStyle="#fff",n.fillRect(0,0,r,s),n.drawImage(o,0,0,r,s),null===(t=o.close)||void 0===t||t.call(o);const l=a.toDataURL("image/jpeg",.82),d=l.slice(l.indexOf(",")+1);return{data:d,mime:"image/jpeg",width:r,height:s,bytes:Math.floor(3*d.length/4)}}(e);e===this.file&&(this._image=t)}catch(t){e===this.file&&(this._error=uh("This file can't be read as an image."))}}}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}async _upload(){if(this.hass&&this._image&&!this._busy){this._busy=!0,this._error="";try{Uc(jg,this._expiry);const e=await this.hass.callWS({type:"meshcore_chattx/upload_image",data:this._image.data,mime:this._image.mime,expiry:this._expiry});this.dispatchEvent(new CustomEvent("image-uploaded",{detail:{url:e.url},bubbles:!0,composed:!0}))}catch(o){var e,t;const i=o;this._error="service_down"===i.code?uh("{service} is out of service right now. Choose another service above and upload again.",{service:(null!==(e=i.message)&&void 0!==e?e:"").split(":")[0]}):uh("Uploading the image failed: {message}",{message:null!==(t=i.message)&&void 0!==t?t:String(o)})}finally{this._busy=!1}}}render(){if(!this.file)return kp;const e=this._image?Math.round(this._image.bytes/1024):0;return bp(Fi||(Fi=Sc`
      <div class="dialog-overlay" @click=${0}>
        <div class="dialog" role="dialog" aria-modal="true" aria-label=${0}
          @click=${0}>
          <div class="dialog-header"><div class="dialog-header-title">${0}</div></div>
          <div class="dialog-body">
            ${0}
            <div class="info">${0}</div>
            <label for="chattx-image-expiry">${0}</label>
            <select id="chattx-image-expiry" class="form-input" .value=${0}
              @change=${0}>
              <option value="permanent" ?selected=${0}>${0}</option>
              <option value="1h" ?selected=${0}>${0}</option>
              <option value="12h" ?selected=${0}>${0}</option>
              <option value="24h" ?selected=${0}>${0}</option>
              <option value="72h" ?selected=${0}>${0}</option>
              <option value="tmpfiles" ?selected=${0}>${0}</option>
            </select>
            <div class="warning">${0}</div>
            ${0}
          </div>
          <div class="dialog-footer">
            <button class="dialog-button" @click=${0}>${0}</button>
            <button class="dialog-button primary" ?disabled=${0} @click=${0}>
              ${0}
            </button>
          </div>
        </div>
      </div>
    `),this._close,uh("Send an image"),e=>e.stopPropagation(),uh("Send an image"),this._preview?bp(Ai||(Ai=Sc`<img class="preview" src=${0} alt="" />`),this._preview):kp,this._image?uh("{width} × {height} px, {kb} kB to upload",{width:this._image.width,height:this._image.height,kb:e}):this._error?"":uh("Preparing…"),uh("Keep the image"),this._expiry,e=>{this._expiry=e.target.value},"permanent"===this._expiry,uh("Permanently (catbox.moe)"),"1h"===this._expiry,uh("{n} hours (litterbox.catbox.moe)",{n:1}),"12h"===this._expiry,uh("{n} hours (litterbox.catbox.moe)",{n:12}),"24h"===this._expiry,uh("{n} hours (litterbox.catbox.moe)",{n:24}),"72h"===this._expiry,uh("{n} hours (litterbox.catbox.moe)",{n:72}),"tmpfiles"===this._expiry,uh("{n} minutes (tmpfiles.org)",{n:60}),uh("The image will be public: anyone with the link can open it, and a permanent one can't be deleted. The link is put into your message; recipients need internet to open it."),this._error?bp(Mi||(Mi=Sc`<div class="error" role="alert">${0}</div>`),this._error):kp,this._close,uh("Cancel"),!this._image||this._busy,this._upload,this._busy?uh("Uploading…"):uh("Upload"))}};Hg.styles=[Wp,Rh(Di||(Di=Sc`
    :host { display: contents; }
    .dialog-overlay { z-index: 1100; }
    .dialog { max-width: 440px; }
    .preview { display: block; max-width: 100%; max-height: 40vh; margin: 0 auto 10px; border-radius: 6px; }
    .info { font-size: 12px; color: var(--secondary-text-color); margin-bottom: 10px; }
    label { font-size: 13px; color: var(--primary-text-color); }
    select { margin: 4px 0 10px; width: 100%; }
    .warning { font-size: 12px; color: var(--warning-color, #ff9800); }
    .error { font-size: 13px; color: var(--error-color, #db4437); margin-top: 8px; }
  `)),Xp],Fc([Up({attribute:!1})],Hg.prototype,"hass",void 0),Fc([Up({attribute:!1})],Hg.prototype,"file",void 0),Fc([Vp()],Hg.prototype,"_preview",void 0),Fc([Vp()],Hg.prototype,"_image",void 0),Fc([Vp()],Hg.prototype,"_expiry",void 0),Fc([Vp()],Hg.prototype,"_busy",void 0),Fc([Vp()],Hg.prototype,"_error",void 0),Hg=Fc([qp("chattx-image-upload-dialog")],Hg);let Ug=class extends Lp{constructor(){super(...arguments),this.conversations=[],this.activity={},this.previews={},this.selectedId=null,this.narrow=!1,this.lastRead={},this._messageStore=null,this._unsubUnread=null,this._inputText="",this._shortening=!1,this._imageFile=null,this._shortenError="",this._sending=!1,this._viewportNarrow=!1,this._mediaQuery=null,this._mediaHandler=null,this._narrowShowMessages=!1,this._manageOpen=!1,this._manageInitialTab="contacts",this._searchOpen=!1,this._repeaterDialogOpen=!1,this._stripDiacritics=function(){try{return"true"===Hc(Tu)}catch(e){return!1}}(),this._showContactIds=function(){try{return"false"!==Hc(Lu)}catch(e){return!0}}(),this._showMessagePreview=function(){try{return"false"!==Hc(Nu)}catch(e){return!0}}(),this._focusAfterSelect=!1,this._repeaterLoggedIn=!1,this._repeaterLoginPrefix=null,this._currentEntityId=null,this._conversationResolved=!1,this._pendingScroll=null,this._scrollInFlight=!1,this._dividerShown=!1,this._scrollGuardUntil=0,this._lastMessageCount=0,this._onViewportResize=()=>{var e;null!==(e=this._messageStore)&&void 0!==e&&e.userAtBottom&&!this._messageStore.hasNewerMessages&&requestAnimationFrame(()=>{if(this._isScrollGuarded())return;const e=this._getChatContainer();e&&(e.scrollTop=e.scrollHeight)})},this._onPopState=()=>{var e;!this._narrowShowMessages||null!==(e=history.state)&&void 0!==e&&e.chattxConversation||(this._narrowShowMessages=!1)},this._onSendImage=e=>{var t;const o=null===(t=e.detail)||void 0===t?void 0:t.file;o&&this.selectedId&&(this._imageFile=o)}}_openNarrowConversation(){var e,t;this._narrowShowMessages||null!==(e=history.state)&&void 0!==e&&e.chattxConversation||history.pushState({...null!==(t=history.state)&&void 0!==t?t:{},chattxConversation:!0},""),this._narrowShowMessages=!0}_closeNarrowConversation(){var e;null!==(e=history.state)&&void 0!==e&&e.chattxConversation?history.back():this._narrowShowMessages=!1}get _isNarrow(){return this.narrow||this._viewportNarrow}connectedCallback(){var e;super.connectedCallback(),this.addEventListener("chattx-send-image",this._onSendImage),this.config&&!this._messageStore&&(this._messageStore=new Ru(this.config),this._messageStore.setOnChange(()=>this.requestUpdate())),this.unread&&!this._unsubUnread&&(this._unsubUnread=this.unread.subscribe(()=>{this.lastRead=this.unread.lastRead,this.requestUpdate()}),this.lastRead=this.unread.lastRead,this.unread.onPostSwitchTimerFire(()=>this._checkAndMarkReadIfAtBottom())),this._mediaQuery=window.matchMedia("(max-width: 870px)"),this._viewportNarrow=this._mediaQuery.matches,this._mediaHandler=e=>{this._viewportNarrow=e.matches},this._mediaQuery.addEventListener("change",this._mediaHandler),null===(e=window.visualViewport)||void 0===e||e.addEventListener("resize",this._onViewportResize),window.addEventListener("popstate",this._onPopState)}disconnectedCallback(){var e,t;super.disconnectedCallback(),this.removeEventListener("chattx-send-image",this._onSendImage),window.removeEventListener("popstate",this._onPopState),null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",this._onViewportResize),this._messageStore&&(this._messageStore.destroy(),this._messageStore=null),this._unsubUnread&&(this._unsubUnread(),this._unsubUnread=null),null===(t=this.unread)||void 0===t||t.endConversation(),this._mediaQuery&&this._mediaHandler&&(this._mediaQuery.removeEventListener("change",this._mediaHandler),this._mediaQuery=null,this._mediaHandler=null)}willUpdate(e){var t;if(null===(t=super.willUpdate)||void 0===t||t.call(this,e),e.has("selectedId")){const t=e.get("selectedId");t&&Wu(t,this._inputText),this._inputText=this.selectedId?function(e,t=Date.now()){var o,i;return null!==(o=null===(i=Ku(t)[e])||void 0===i?void 0:i.text)&&void 0!==o?o:""}(this.selectedId):""}else e.has("_inputText")&&this.selectedId&&Wu(this.selectedId,this._inputText)}updated(e){if(this._syncRepeaterLoginState(),this._focusAfterSelect){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".input-area textarea");e&&!e.disabled&&(this._focusAfterSelect=!1,e.focus(),e.setSelectionRange(e.value.length,e.value.length))}if(e.has("hass")&&this.hass&&this._messageStore&&this._messageStore.setHass(this.hass),e.has("config")&&this.config&&this._messageStore){this._messageStore.setConfig(this.config);const t=e.get("config");t&&t.entry_id!==this.config.entry_id&&(this.selectedId=null,this._currentEntityId=null,this._conversationResolved=!1,this._pendingScroll=null,this._lastMessageCount=0,this.unread.endConversation(),this._messageStore.switchEntity(null),this.dispatchEvent(new CustomEvent("active-entity-changed",{detail:{entityId:null},bubbles:!0,composed:!0})))}if(e.has("selectedId")&&this._onConversationSelected(),e.has("lastRead")&&this._currentEntityId&&this._conversationResolved&&null===this._pendingScroll&&this.unread.maybeReanchorOnLateData(this._currentEntityId)&&(this._pendingScroll="last-read"),this._pendingScroll){const e=this._messageStore,t=e&&!e.loading;t&&e.messages.length>0?(this._executeScroll(this._pendingScroll),this._pendingScroll=null,this._lastMessageCount=e.messages.length):t&&0===e.messages.length&&(this._pendingScroll=null)}else if(this._messageStore){const e=this._messageStore.messages.length;e>this._lastMessageCount&&this._lastMessageCount>0&&this._scrollToBottomIfNearEnd(),this._lastMessageCount=e}}render(){var e,t,o,i,r,s,a,n,l,d;return this._isNarrow?this._narrowShowMessages?bp(Ei||(Ei=Sc`
          <div class="chat-layout">
            <div class="chat-main narrow-full">
              <div class="narrow-header">
                <button class="back-button" @click=${0}>← ${0}</button>
                <span class="narrow-conv-name">${0}${0}</span>
                <div class="chat-header-actions">
                  ${0}
                  <button class="header-action-btn" title=${0} aria-label=${0} @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>
                </div>
              </div>
              ${0}
            </div>
            ${0}
          </div>
        `),()=>this._closeNarrowConversation(),uh("Back"),this._getConversationName(),this._renderScopeChip(),this._renderRepeaterButton(),uh("Search messages"),uh("Search messages"),()=>{this._searchOpen=!this._searchOpen},this._renderChatArea(),this._renderRepeaterDialog()):bp(Pi||(Pi=Sc`
          <div class="chat-layout narrow-list-only">
            <chattx-conversation-list
              .showContactIds=${0}
              .showMessagePreview=${0}
              .previews=${0}
              .nodeName=${0}
              .conversations=${0}
              .activity=${0}
              .activeId=${0}
              .unread=${0}
              .unreadCounts=${0}
              .nodePrefix=${0}
              @conversation-selected=${0}
              @manage-requested=${0}></chattx-conversation-list>
            ${0}
          </div>
        `),this._showContactIds,this._showMessagePreview,this.previews,null!==(a=null===(n=this.config)||void 0===n?void 0:n.node_name)&&void 0!==a?a:"",this.conversations,this.activity,this.selectedId,this.unread,this.unread.counts,(null===(l=this.config)||void 0===l?void 0:l.node_prefix)||null,e=>{const t=e.detail.id;t===this.selectedId&&(this.unread.resetUnreadCountAtSelection(),this._pendingScroll="bottom"),this.selectedId=t,this._openNarrowConversation(),this._focusAfterSelect=!0,this.requestUpdate()},()=>this._onManageRequested(),this._manageOpen?bp(zi||(zi=Sc`
              <chattx-manage-dialog
                .showContactIds=${0}
                @show-contact-ids-changed=${0}
                .showMessagePreview=${0}
                @show-message-preview-changed=${0}
                .hass=${0}
                .entryId=${0}
                .narrow=${0}
                .initialTab=${0}
                @manage-closed=${0}
                @contacts-changed=${0}
                @channels-changed=${0}
              ></chattx-manage-dialog>
            `),this._showContactIds,this._onShowContactIdsChanged,this._showMessagePreview,this._onShowMessagePreviewChanged,this.hass,null===(d=this.config)||void 0===d?void 0:d.entry_id,this.narrow,this._manageInitialTab,()=>this._manageOpen=!1,this._onContactsChanged,this._onChannelsChanged):bp(Ii||(Ii=Sc``))):bp(Ri||(Ri=Sc`
      <div class="chat-layout">
        <chattx-conversation-list
          .showContactIds=${0}
          .showMessagePreview=${0}
          .previews=${0}
          .nodeName=${0}
          .conversations=${0}
          .activity=${0}
          .activeId=${0}
          .unread=${0}
          .unreadCounts=${0}
          .nodePrefix=${0}
          @conversation-selected=${0}
          @manage-requested=${0}></chattx-conversation-list>
        <div class="chat-main">
          ${0}
          ${0}
        </div>
        ${0}
        ${0}
        ${0}
      </div>
    `),this._showContactIds,this._showMessagePreview,this.previews,null!==(e=null===(t=this.config)||void 0===t?void 0:t.node_name)&&void 0!==e?e:"",this.conversations,this.activity,this.selectedId,this.unread,this.unread.counts,(null===(o=this.config)||void 0===o?void 0:o.node_prefix)||null,e=>{const t=e.detail.id;t===this.selectedId&&(this.unread.resetUnreadCountAtSelection(),this._pendingScroll="bottom"),this.selectedId=t,this._focusAfterSelect=!0,this.requestUpdate()},()=>this._onManageRequested(),this.selectedId?bp(Oi||(Oi=Sc`
            <div class="narrow-header" style="display: flex; align-items: center; padding: 8px 16px;">
              <div style="flex: 1; font-size: 14px; font-weight: 500; color: var(--primary-text-color);">
                ${0}${0}
              </div>
              <div class="chat-header-actions">
                ${0}
                <button class="header-action-btn" title=${0} aria-label=${0} @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>
              </div>
            </div>
          `),this._getConversationName(),this._renderScopeChip(),this._renderRepeaterButton(),uh("Search messages"),uh("Search messages"),()=>{this._searchOpen=!this._searchOpen}):"",this._renderChatArea(),this._renderRepeaterDialog(),this._searchOpen?bp(Ti||(Ti=Sc`
          <div class="search-panel">
            <chattx-message-search
              .hass=${0}
              .entryId=${0}
              .entityId=${0}
              .meshNodeName=${0}
              @result-selected=${0}
              @search-close=${0}
            ></chattx-message-search>
          </div>
        `),this.hass,null===(i=this.config)||void 0===i?void 0:i.entry_id,this._currentEntityId||void 0,null===(r=this.config)||void 0===r?void 0:r.node_name,this._onSearchResultSelected,()=>{this._searchOpen=!1}):"",this._manageOpen?bp(Li||(Li=Sc`
          <chattx-manage-dialog
            .showContactIds=${0}
            @show-contact-ids-changed=${0}
                .showMessagePreview=${0}
                @show-message-preview-changed=${0}
            .hass=${0}
            .entryId=${0}
            .narrow=${0}
            .initialTab=${0}
            @manage-closed=${0}
            @contacts-changed=${0}
            @channels-changed=${0}
          ></chattx-manage-dialog>
        `),this._showContactIds,this._onShowContactIdsChanged,this._showMessagePreview,this._onShowMessagePreviewChanged,this.hass,null===(s=this.config)||void 0===s?void 0:s.entry_id,this.narrow,this._manageInitialTab,()=>this._manageOpen=!1,this._onContactsChanged,this._onChannelsChanged):bp(Ni||(Ni=Sc``)))}_renderChatArea(){var e,t,o,i,r,s;if(!this._messageStore||!this.selectedId)return bp(qi||(qi=Sc`
        <div class="empty-state">
          <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg></div>
          <div class="empty-text">${0}</div>
          <div class="empty-subtext">${0}</div>
        </div>
      `),uh("Select a conversation to start"),uh("Choose a channel or contact from the list"));if(!this._conversationResolved)return bp(ji||(ji=Sc`
        <div class="empty-state">
          <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></div>
          <div class="empty-text">${0}</div>
          <div class="empty-subtext">${0}</div>
        </div>
      `),uh("Conversation unavailable"),uh("This contact may no longer be added to the node"));const a=this._messageStore.messages,n=function(e,t){var o;const i=null!==(o=t.group_timeout)&&void 0!==o?o:300,r=!1!==t.group_messages?function(e,t){if(0===e.length)return[];const o=[];let i=null;for(const r of e)!i||r.isSystem||i.isSystem||r.sender!==i.sender||(r.timestamp.getTime()-i.endTime.getTime())/1e3>t?(i={sender:r.sender,isOutgoing:r.isOutgoing,isSystem:r.isSystem,messages:[r],startTime:r.timestamp,endTime:r.timestamp},o.push(i)):(i.messages.push(r),i.endTime=r.timestamp);return o}(e,i):e.map(e=>({sender:e.sender,isOutgoing:e.isOutgoing,isSystem:e.isSystem,messages:[e],startTime:e.timestamp,endTime:e.timestamp}));if(0===r.length)return[];const s=[];let a=null;for(const e of r){const o=e.startTime;!1===t.show_date_separators||a&&!Pu(a,o)||s.push({type:"date-separator",date:o,label:zu(o)}),s.push({type:"group",group:e}),a=o}return s}(a,{group_messages:null===(e=null===(t=this.config)||void 0===t?void 0:t.group_messages)||void 0===e||e,group_timeout:null!==(o=null===(i=this.config)||void 0===i?void 0:i.group_timeout)&&void 0!==o?o:300,show_date_separators:null===(r=null===(s=this.config)||void 0===s?void 0:s.show_date_separators)||void 0===r||r}),l=this._remainingBytes(),d=uh("Send without diacritics. The text changes when it is sent.");return bp(Hi||(Hi=Sc`
      <div class="chat-container" @reply-to-sender=${0} @resend-message=${0} @scroll=${0}>
        ${0}
        ${0}
        ${0}
        ${0}
        ${0}
        ${0}
      </div>
      ${0}
      <chattx-image-upload-dialog
        .hass=${0}
        .file=${0}
        @close=${0}
        @image-uploaded=${0}></chattx-image-upload-dialog>
      <div class="input-area" @mousedown=${0}>
        <div class="composer-tools">
          <chattx-quick-message-picker
            .hass=${0}
            ?disabled=${0}
            @quick-message-selected=${0}></chattx-quick-message-picker>
          <button
            class=${0}
            title=${0}
            aria-label=${0}
            aria-pressed=${0}
            @click=${0}>á→a</button>
          <button
            class="diacritics-toggle image-button"
            title=${0}
            aria-label=${0}
            ?disabled=${0}
            @click=${0}>📎</button>
          <input class="image-input" type="file" accept="image/*" hidden
            @change=${0} />
        </div>
        <textarea
          @paste=${0}
          placeholder=${0}
          aria-label=${0}
          .value=${0}
          @input=${0}
          @keydown=${0}
          ?readonly=${0}
          ?disabled=${0}></textarea>
        <div class="composer-counter">
          <chattx-emoji-picker
            ?disabled=${0}
            @emoji-selected=${0}></chattx-emoji-picker>
          <span
            class=${0}
            title=${0}>${0}</span>
        </div>
        <button
          class="send-button"
          aria-label=${0}
          @click=${0}
          ?disabled=${0}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16151496 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4429026 C0.994623095,2.0752101 0.837654326,3.00778453 1.15159189,3.98029867 L3.03521743,10.4212916 C3.03521743,10.5783889 3.19218622,10.7354863 3.50612381,10.7354863 L16.6915026,11.5209733 C16.6915026,11.5209733 17.1624089,11.5209733 17.1624089,12.0492776 C17.1624089,12.5775818 16.6915026,12.4744748 16.6915026,12.4744748 Z"/>
          </svg>
        </button>
      </div>
    `),this._onReplyToSender,this._onResendMessage,this._onChatScroll,this._messageStore.loadingOlder?bp(Ui||(Ui=Sc`<div class="loading-older"><div class="loading-spinner"></div></div>`)):bp(Vi||(Vi=Sc``)),this._messageStore.error?bp(Ki||(Ki=Sc`
              <div class="error-state">
                <span><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg></span>
                <span>${0}</span>
              </div>
            `),this._messageStore.error):bp(Wi||(Wi=Sc``)),this._messageStore.loading&&0===a.length?bp(Xi||(Xi=Sc`
              <div class="loading-state">
                <div class="loading-spinner"></div>
                ${0}
              </div>
            `),uh("Loading messages...")):bp(Gi||(Gi=Sc``)),0!==n.length||this._messageStore.loading?bp(Qi||(Qi=Sc``)):bp(Yi||(Yi=Sc`
              <div class="empty-state">
                <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v7h7v9H6z"/></svg></div>
                <div class="empty-text">${0}</div>
                <div class="empty-subtext">${0}</div>
              </div>
            `),uh("No messages yet"),uh("Be the first to send a message!")),this._renderItemsWithDivider(n),this._renderNewMessagesIndicator(),this._renderShortenBar(),this.hass,this._imageFile,()=>{this._imageFile=null},this._onImageUploaded,this._keepComposerFocus,this.hass,this._sending||!this.selectedId,this._onQuickMessageSelected,this._stripDiacritics?"diacritics-toggle on":"diacritics-toggle",d,d,this._stripDiacritics?"true":"false",this._toggleStripDiacritics,uh("Send an image"),uh("Send an image"),this._sending||!this.selectedId,this._pickImage,e=>{var t;const o=e.target;null!==(t=o.files)&&void 0!==t&&t[0]&&(this._imageFile=o.files[0]),o.value=""},this._onPaste,uh("Type a message..."),uh("Message text. Press Enter to send, Shift+Enter for newline."),this._inputText,e=>{const t=e.target;this._inputText=t.value},e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),this._sendMessage())},this._sending,!this.selectedId,this._sending||!this.selectedId,this._onEmojiSelected,l<=0?"byte-counter at-limit":"byte-counter",uh("Bytes left. Letters with diacritics take 2, emoji take 4. In channels your node name is part of the message."),l,uh("Send message"),()=>this._sendMessage(),this._sending||!this.selectedId||!this._inputText.trim()||l<0)}_renderItemsWithDivider(e){const t=[];let o=0,i=!1;const r=this.unread.dividerAfterGroupIdx(e);this._dividerShown=null!==r;for(const d of e){var s,a,n,l;"date-separator"!==d.type?(i||null===r||o!==r||(t.push(bp(Ji||(Ji=Sc`
          <div class="unread-divider">
            <span>${0}</span>
          </div>
        `),uh("New messages"))),i=!0),t.push(bp(er||(er=Sc`
        <chattx-message-bubble
          .group=${0}
          .hass=${0}
          .nodeName=${0}
          .timestampFormat=${0}></chattx-message-bubble>
      `),d.group,this.hass,null!==(s=null===(a=this.config)||void 0===a?void 0:a.node_name)&&void 0!==s?s:"",null!==(n=null===(l=this.config)||void 0===l?void 0:l.timestamp_format)&&void 0!==n?n:"relative")),o++):t.push(bp(Zi||(Zi=Sc`
          <div class="date-separator">
            <span>${0}</span>
          </div>
        `),d.label))}return t}_renderNewMessagesIndicator(){const e=this._messageStore;if(!e)return bp(tr||(tr=Sc``));const t=e.newMessagesWhileAway,o=e.hasNewerMessages;if(null!==this._pendingScroll||this._scrollInFlight)return bp(or||(or=Sc``));const i=function(e){return e.counter>0?`↓ ${e.counter} new`:e.hasNewer||e.hasContentBelow?e.cursorAtTail&&!e.hasNewer?"↓ latest":"↓ unread":null}({counter:t,hasNewer:o,hasContentBelow:this._hasContentBelowViewport(),cursorAtTail:this.unread.cursorAtTail(this._currentEntityId,this._latestNonTempMessageId())});return null===i?bp(ir||(ir=Sc``)):bp(rr||(rr=Sc`
      <button class="new-messages-indicator" @click=${0}>
        ${0}
      </button>
    `),this._jumpToBottom,i)}_onConversationSelected(){if(this.selectedId&&this._messageStore&&this.config&&this.hass){var e;const t=this.conversations.find(e=>"pubkey_prefix"in e?e.pubkey_prefix===this.selectedId:String(e.channel_idx)===this.selectedId);if(!t)return this._conversationResolved=!1,this._currentEntityId=null,void(this._messageStore&&this._messageStore.switchEntity(null));this._conversationResolved=!0;let o=null;if("pubkey_prefix"in t){const e=t.pubkey_prefix;o=function(e,t,o){const i=o.substring(0,6);if(t.contact_entity_pattern&&t.node_prefix){const o=t.contact_entity_pattern.replace("{prefix}",t.node_prefix).replace("{contact}",i);if(e.states[o])return o}const r=`_${i}_messages`,s=t.node_prefix?`_${t.node_prefix}_`:"";for(const t of Object.keys(e.states))if(t.startsWith("binary_sensor.")&&t.endsWith(r)&&(!s||t.includes(s)))return t;return null}(this.hass,this.config,e)}else{const e=t.channel_idx;o=function(e,t,o){if(t.channel_entity_pattern&&t.node_prefix){const i=t.channel_entity_pattern.replace("{prefix}",t.node_prefix).replace("{idx}",String(o));if(e.states[i])return i}const i=`_ch_${o}_messages`,r=t.node_prefix?`_${t.node_prefix}_`:"";for(const t of Object.keys(e.states))if(t.startsWith("binary_sensor.")&&t.endsWith(i)&&(!r||t.includes(r)))return t;return null}(this.hass,this.config,e)}this._currentEntityId=o,this.dispatchEvent(new CustomEvent("active-entity-changed",{detail:{entityId:o},bubbles:!0,composed:!0}));const i=this._getUnreadCountForSelected(),r=o&&(null===(e=this.lastRead)||void 0===e?void 0:e[o])||null;this._pendingScroll=r||i>0?"last-read":"bottom",this._lastMessageCount=0,this.unread.beginConversation(o,i),this._messageStore.switchEntity(o,r)}}_remainingBytes(){var e,t,o,i;return o=this._outgoingText(),160-(null===(i=this._isContact()?null:null!==(e=null===(t=this.config)||void 0===t?void 0:t.node_name)&&void 0!==e?e:"")?0:Ou.encode(`${i}: `).length)-Ou.encode(o.trim()).length}_renderShortenBar(){const e=function(e){for(const t of Hu(e))if("url"in t&&t.label.length>22&&!/^https?:\/\/(is|v)\.gd\//i.test(t.label))return t;return null}(this._inputText);return e||this._shortenError?bp(ar||(ar=Sc`
      <div class="shorten-bar" @mousedown=${0}>
        ${0}
        ${0}
      </div>
    `),this._keepComposerFocus,e?bp(nr||(nr=Sc`<button class="shorten-button" ?disabled=${0}
              @click=${0}>
              ✂ ${0}
              <span class="shorten-url">${0}</span>
            </button>`),this._shortening||this._sending,()=>this._shortenLink(e.label,e.url),this._shortening?uh("Shortening…"):uh("Shorten link"),e.label):bp(lr||(lr=Sc``)),this._shortenError?bp(dr||(dr=Sc`<span class="shorten-error">${0}</span>`),this._shortenError):bp(cr||(cr=Sc``))):bp(sr||(sr=Sc``))}async _shortenLink(e,t){if(!this.hass)return;this._shortening=!0,this._shortenError="";const o=await async function(e,t){try{return{short:(await e.callWS({type:"meshcore_chattx/shorten_url",url:t})).short}}catch(e){return{error:pu(e)}}}(this.hass,t);this._shortening=!1,"short"in o?this._inputText=this._inputText.replace(e,o.short):(this._shortenError=uh("The link could not be shortened: {error}",{error:o.error}),setTimeout(()=>{this._shortenError=""},8e3))}_outgoingText(){return this._stripDiacritics?this._inputText.split(/(@\[[^\]]*\])/).map((e,t)=>t%2==1?e:e.normalize("NFD").replace(/([A-Za-z])[̀-ͯ]+/g,"$1").normalize("NFC")).join(""):this._inputText}_onShowMessagePreviewChanged(e){this._showMessagePreview=e.detail.enabled,function(e){try{Uc(Nu,String(e))}catch(e){}}(e.detail.enabled)}_onShowContactIdsChanged(e){this._showContactIds=e.detail.enabled,function(e){try{Uc(Lu,String(e))}catch(e){}}(e.detail.enabled)}_toggleStripDiacritics(){this._stripDiacritics=!this._stripDiacritics,function(e){try{Uc(Tu,String(e))}catch(e){}}(this._stripDiacritics)}async _onQuickMessageSelected(e){const t=this._inputText.trimEnd();this._inputText=t?`${t} ${e.detail.message}`:e.detail.message,await this._focusInput()}_keepComposerFocus(e){e.target instanceof HTMLTextAreaElement||e.preventDefault()}_pickImage(){var e;null===(e=this.shadowRoot)||void 0===e||null===(e=e.querySelector(".image-input"))||void 0===e||e.click()}_onPaste(e){var t,o;const i=[...null!==(t=null===(o=e.clipboardData)||void 0===o?void 0:o.items)&&void 0!==t?t:[]].find(e=>"file"===e.kind&&e.type.startsWith("image/")),r=null==i?void 0:i.getAsFile();r&&this.selectedId&&(e.preventDefault(),this._imageFile=r)}async _onImageUploaded(e){this._imageFile=null,await this._onEmojiSelected(new CustomEvent("emoji-selected",{detail:{emoji:this._inputText&&!/\s$/.test(this._inputText)?` ${e.detail.url} `:`${e.detail.url} `}}))}async _onEmojiSelected(e){var t,o,i;const r=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".input-area textarea"),s=null!==(o=null==r?void 0:r.selectionStart)&&void 0!==o?o:this._inputText.length,a=null!==(i=null==r?void 0:r.selectionEnd)&&void 0!==i?i:s;this._inputText=this._inputText.slice(0,s)+e.detail.emoji+this._inputText.slice(a),await this.updateComplete,await new Promise(e=>setTimeout(e,0));const n=s+e.detail.emoji.length;null==r||r.focus(),null==r||r.setSelectionRange(n,n)}async _sendMessage(){if(this._sending||!this._inputText.trim()||!this.selectedId||!this.hass||!this.config)return;if(this._remainingBytes()<0)return;if(!this._conversationResolved)return void console.warn("Cannot send — conversation not resolved");const e=this._outgoingText().trim();this._inputText="",await this._deliver(e)||(this._inputText=e)}_onResendMessage(e){var t;const o=null===(t=e.detail)||void 0===t||null===(t=t.text)||void 0===t?void 0:t.trim();o&&!this._sending&&this._conversationResolved&&this._deliver(o)}async _deliver(e){if(!this.selectedId||!this.hass||!this.config)return!1;this._sending=!0;try{var t;this._messageStore&&(this._messageStore.addOptimisticMessage(this.config.node_name,e),this._pendingScroll="bottom");const i=null===(t=this.config)||void 0===t?void 0:t.entry_id;if(this._isContact())await async function(e,t,o,i){try{const r={pubkey_prefix:t,message:o};i&&(r.entry_id=i),await e.callService("meshcore","send_message",r)}catch(e){throw new Error(`Failed to send direct message: ${String(e)}`)}}(this.hass,this.selectedId,e,i);else{var o;const t=parseInt(this.selectedId,10);if(isNaN(t)||t<0||t>255)return console.error("Invalid channel index:",this.selectedId),!1;await async function(e,t,o,i,r){try{const s={channel_idx:t,message:o};i&&(s.entry_id=i),r&&(s.scope=r),await e.callService("meshcore","send_channel_message",s)}catch(e){throw new Error(`Failed to send channel message: ${String(e)}`)}}(this.hass,t,e,i,null!==(o=this._getActiveChannelScope())&&void 0!==o?o:void 0)}return!0}catch(e){return console.error("Failed to send message:",e),!1}finally{this._sending=!1}}_latestNonTempMessageId(){var e,t;const o=null!==(e=null===(t=this._messageStore)||void 0===t?void 0:t.messages)&&void 0!==e?e:[];for(let e=o.length-1;e>=0;e--){const t=o[e].id;if(!t.startsWith("rt_")&&!t.startsWith("optimistic_"))return t}return null}_isContact(){return!!this.selectedId&&!/^\d+$/.test(this.selectedId)}_onManageRequested(){this._manageInitialTab="contacts",this._manageOpen=!0}_onContactsChanged(){this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}_onChannelsChanged(){this.dispatchEvent(new CustomEvent("channels-changed",{bubbles:!0,composed:!0}))}_onReplyToSender(e){const{mention:t}=e.detail;t&&(this._inputText=t+this._inputText,this.requestUpdate(),this._focusInput())}async _focusInput(){var e;await this.updateComplete,await new Promise(e=>setTimeout(e,0));const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".input-area textarea");null==t||t.focus(),null==t||t.setSelectionRange(t.value.length,t.value.length)}_getConversationName(){if(!this.selectedId)return"";const e=this.conversations.find(e=>"pubkey_prefix"in e?e.pubkey_prefix===this.selectedId:String(e.channel_idx)===this.selectedId);return e?"pubkey_prefix"in e?e.adv_name:e.name:this.selectedId}_getActiveChannelScope(){if(!this.selectedId||this._isContact())return null;const e=this.conversations.find(e=>!("pubkey_prefix"in e)&&String(e.channel_idx)===this.selectedId);return e&&e.scope||null}_selectedRepeater(){var e;if(null===(e=this.hass)||void 0===e||null===(e=e.user)||void 0===e||!e.is_admin)return null;const t=this.conversations.find(e=>"pubkey_prefix"in e&&e.pubkey_prefix===this.selectedId);return 2===(null==t?void 0:t.type)&&t.added_to_node?t:null}_syncRepeaterLoginState(){var e,t;const o=null!==(e=null===(t=this._selectedRepeater())||void 0===t?void 0:t.pubkey_prefix)&&void 0!==e?e:null;o!==this._repeaterLoginPrefix&&(this._repeaterLoginPrefix=o,this._repeaterLoggedIn=!1,o&&this._loadRepeaterLoginState(o))}async _loadRepeaterLoginState(e){var t;if(!this.hass)return;const o=await uu(this.hass,e,null===(t=this.config)||void 0===t?void 0:t.entry_id);e===this._repeaterLoginPrefix&&(this._repeaterLoggedIn=!!o.logged_in_at)}_renderRepeaterButton(){if(!this._selectedRepeater())return"";const e=this._repeaterLoggedIn?uh("Logged in. Repeater settings"):uh("Repeater login and settings");return bp(hr||(hr=Sc`<button class=${0} title=${0} aria-label=${0} @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm3 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg></button>`),this._repeaterLoggedIn?"header-action-btn repeater-login-btn logged-in":"header-action-btn repeater-login-btn",e,e,()=>{this._repeaterDialogOpen=!0})}_renderRepeaterDialog(){var e;const t=this._repeaterDialogOpen?this._selectedRepeater():null;return t?bp(pr||(pr=Sc`
      <chattx-node-detail-dialog
        .hass=${0}
        .node=${0}
        .entryId=${0}
        .loginOnly=${0}
        .open=${0}
        @node-detail-closed=${0}>
      </chattx-node-detail-dialog>
    `),this.hass,t,null===(e=this.config)||void 0===e?void 0:e.entry_id,!0,!0,()=>{this._repeaterDialogOpen=!1,this._loadRepeaterLoginState(t.pubkey_prefix)}):""}_renderScopeChip(){const e=this._getActiveChannelScope();return e?bp(ur||(ur=Sc`<button
      class="scope-chip"
      title=${0}
      aria-label=${0}
      @click=${0}>🌐 ${0}</button>`),uh("Region scope: messages on this channel flood only through '{scope}' repeaters. Click to manage.",{scope:e}),uh("Region scope {scope} — manage channels",{scope:e}),()=>{this._manageInitialTab="channels",this._manageOpen=!0},e):""}_getChatContainer(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(".chat-container")}_isScrollGuarded(){return this._scrollInFlight||Date.now()<this._scrollGuardUntil}_executeScroll(e){this._scrollInFlight=!0,"last-read"===e&&(this._scrollGuardUntil=Date.now()+2e3),this._doScrollWithRetry(e,0)}_doScrollWithRetry(e,t){this.updateComplete.then(()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{const o=this._getChatContainer();if(!o)return void(this._scrollInFlight=!1);if("bottom"===e)return o.scrollTop=o.scrollHeight,void(this._scrollInFlight=!1);const i=o.querySelector(".unread-divider");if(i){const e=o.getBoundingClientRect(),t=i.getBoundingClientRect();o.scrollTop+=t.top-e.top,this._scrollInFlight=!1}else this._dividerShown&&t<10?setTimeout(()=>this._doScrollWithRetry(e,t+1),50):(o.scrollTop=o.scrollHeight,this._scrollInFlight=!1)})})})}_scrollToBottomIfNearEnd(){if(this._isScrollGuarded())return;const e=this._messageStore;null!=e&&e.hasNewerMessages||this.updateComplete.then(()=>{requestAnimationFrame(()=>{if(this._isScrollGuarded())return;const e=this._getChatContainer();e&&e.scrollHeight-e.scrollTop-e.clientHeight<150&&(e.scrollTop=e.scrollHeight,this._checkAndMarkReadIfAtBottom())})})}_onChatScroll(e){const t=e.target,o=this._messageStore;if(!t||!o)return;const i=t.scrollTop,r=t.scrollHeight-t.scrollTop-t.clientHeight<150;if(o.setUserAtBottom(r),i<150&&o.hasOlderMessages&&!o.loadingOlder&&!this._isScrollGuarded()){const e=t.scrollHeight;o.loadOlderMessages().then(()=>{this.updateComplete.then(()=>{requestAnimationFrame(()=>{const o=t.scrollHeight-e;o>0&&(t.scrollTop+=o)})})})}r&&(o.hasNewerMessages&&!o.loadingNewer?o.loadNewerMessages():o.hasNewerMessages||this._checkAndMarkReadIfAtBottom())}_isLastMessageVisible(){const e=this._getChatContainer();if(!e)return!1;const t=e.querySelectorAll("chattx-message-bubble"),o=t[t.length-1];if(!o)return!1;const i=e.getBoundingClientRect().bottom;return o.getBoundingClientRect().bottom<=i+5}_hasContentBelowViewport(){var e,t;return!!this._getChatContainer()&&(0!==(null!==(e=null===(t=this._messageStore)||void 0===t?void 0:t.messages.length)&&void 0!==e?e:0)&&!this._isLastMessageVisible())}_checkAndMarkReadIfAtBottom(){const e=this._messageStore;this._currentEntityId&&e&&this.unread.onScrollState({entityId:this._currentEntityId,lastMessageVisible:this._isLastMessageVisible(),hasNewerMessages:e.hasNewerMessages,bufferTailId:this._latestNonTempMessageId()})&&e.resetNewMessagesCounter()}async _jumpToBottom(){const e=this._messageStore;if(e){for(;e.hasNewerMessages&&!e.loadingNewer;)await e.loadNewerMessages();await this.updateComplete,requestAnimationFrame(()=>{const t=this._getChatContainer();t&&(t.scrollTop=t.scrollHeight,this._currentEntityId&&this.unread.onPillJump({entityId:this._currentEntityId,bufferTailId:this._latestNonTempMessageId()})&&e.resetNewMessagesCounter())})}}_getUnreadCountForSelected(){var e,t;return this.selectedId&&this.unread?this.unread.badgeCount(this.selectedId,null!==(e=null===(t=this.config)||void 0===t?void 0:t.node_prefix)&&void 0!==e?e:null,this._currentEntityId):0}_onSearchResultSelected(e){const{entityId:t,messageId:o,timestamp:i}=e.detail;t&&this._messageStore&&(this._messageStore.switchEntity(t),this._currentEntityId=t),o&&this._scrollToAndHighlight(o,i)}_scrollToAndHighlight(e,t){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._findAndHighlightBubble(e)||t&&this._messageStore&&this._messageStore.fetchAroundTimestamp(t).then(t=>{t&&this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._findAndHighlightBubble(e)})})})})})}_findAndHighlightBubble(e){var t;const o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".chat-container");if(!o)return!1;const i=o.querySelectorAll("chattx-message-bubble");for(const t of Array.from(i)){var r;const o=null===(r=t.shadowRoot)||void 0===r?void 0:r.querySelector(`[data-msg-id="${e}"]`);if(o)return o.scrollIntoView({behavior:"smooth",block:"center"}),o.classList.add("search-highlight"),setTimeout(()=>o.classList.remove("search-highlight"),2500),!0}return!1}};Ug.styles=Rh(mr||(mr=Sc`
    :host {
      display: flex;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .chat-layout {
      display: flex;
      width: 100%;
      height: 100%;
      gap: 0;
    }

    .chat-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background: var(--chat-bg);
    }

    .chat-container {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 8px 12px;
      background: var(--chat-bg);
      position: relative;
      /* Disable browser-level scroll anchoring. The lazy-load-older
       * path in _onChatScroll manually preserves scroll position by
       * adding the prepended content height to scrollTop. With the
       * default (overflow-anchor: auto), the browser ALSO shifts
       * scrollTop by the prepended height -- and the two
       * compensations stack, landing the viewport past the divider
       * at the new buffer tail. That misfires mark-read on channel
       * re-entry. See 2026-05-15 unread-clearing investigation. */
      overflow-anchor: none;
    }

    .chat-container::-webkit-scrollbar {
      width: 6px;
    }

    .chat-container::-webkit-scrollbar-track {
      background: transparent;
    }

    .chat-container::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
      border-radius: 3px;
    }

    .input-area {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      padding: 8px 12px 12px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
      background: var(--input-bg);
      flex-shrink: 0;
    }

    .input-area textarea {
      flex: 1;
      padding: 10px 14px;
      border: 1px solid var(--input-border);
      border-radius: 20px;
      background: var(--chat-bg);
      color: var(--primary-text-color);
      font-size: 14px;
      font-family: inherit;
      resize: none;
      outline: none;
      max-height: 120px;
      min-height: 40px;
      line-height: 1.4;
      transition: border-color 0.2s;
      box-sizing: border-box;
    }

    .input-area textarea:focus {
      border-color: var(--primary-color, #03a9f4);
    }

    .input-area textarea::placeholder {
      color: var(--secondary-text-color, #727272);
    }

    .input-area textarea:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .composer-tools {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      flex-shrink: 0;
      --quick-message-toggle-size: 28px;
    }

    .diacritics-toggle {
      flex-shrink: 0;
      height: 24px;
      padding: 0 4px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: none;
      color: var(--secondary-text-color, #727272);
      font-size: 11px;
      white-space: nowrap;
      cursor: pointer;
    }

    .image-button {
      font-size: 13px;
    }

    .diacritics-toggle.on {
      border-color: var(--primary-color, #03a9f4);
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
    }

    .shorten-bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      padding: 4px 8px 0;
      font-size: 12px;
    }

    .shorten-button {
      display: flex;
      align-items: center;
      gap: 6px;
      max-width: 100%;
      padding: 3px 10px;
      border: 1px solid var(--primary-color, #03a9f4);
      border-radius: 12px;
      background: none;
      color: var(--primary-color, #03a9f4);
      font-size: 12px;
      cursor: pointer;
    }

    .shorten-url {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 220px;
      color: var(--secondary-text-color, #727272);
    }

    .shorten-error {
      color: var(--error-color, #db4437);
    }

    .composer-counter {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      flex-shrink: 0;
    }

    .byte-counter {
      flex-shrink: 0;
      min-width: 28px;
      padding-bottom: 4px;
      font-size: 12px;
      font-variant-numeric: tabular-nums;
      text-align: right;
      color: var(--secondary-text-color, #727272);
    }

    .byte-counter.at-limit {
      color: var(--error-color, #db4437);
      font-weight: 600;
    }

    .send-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border: none;
      border-radius: 50%;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      cursor: pointer;
      flex-shrink: 0;
      transition: opacity 0.15s, transform 0.15s;
    }

    .send-button:hover {
      opacity: 0.9;
    }

    .send-button:active {
      transform: scale(0.95);
    }

    .send-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .send-button svg {
      width: 20px;
      height: 20px;
      /* Optical centering: the right-pointing icon's visual mass sits
         ~2px left of its bounding-box center at this size, so a
         geometrically centered glyph reads as shifted left. */
      transform: translateX(2px);
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color, #727272);
      text-align: center;
      padding: 32px 16px;
    }

    .empty-icon {
      font-size: 48px;
      margin-bottom: 16px;
      opacity: 0.5;
    }

    .empty-text {
      font-size: 16px;
      margin-bottom: 8px;
    }

    .empty-subtext {
      font-size: 13px;
      opacity: 0.7;
    }

    .error-state {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      color: var(--error-color, #db4437);
      font-size: 13px;
      background: rgba(219, 68, 55, 0.08);
      border-radius: 8px;
      margin: 8px 12px;
    }

    .loading-state {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      color: var(--secondary-text-color, #727272);
      font-size: 14px;
      gap: 8px;
    }

    .loading-older {
      display: flex;
      justify-content: center;
      padding: 12px;
    }

    .loading-spinner {
      width: 20px;
      height: 20px;
      border: 2px solid var(--divider-color, #e0e0e0);
      border-top-color: var(--primary-color, #03a9f4);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    .date-separator {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 16px 0 12px;
      color: var(--secondary-text-color, #727272);
      font-size: 12px;
      font-weight: 500;
    }

    .date-separator::before,
    .date-separator::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--divider-color, #e0e0e0);
    }

    .unread-divider {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 12px 0;
      color: var(--error-color, #db4437);
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.3px;
    }

    .unread-divider::before,
    .unread-divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--error-color, #db4437);
      opacity: 0.5;
    }

    .narrow-header {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff);
      flex-shrink: 0;
    }

    .back-button {
      padding: 8px 12px;
      border: none;
      background: transparent;
      color: var(--primary-color, #03a9f4);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s;
    }

    .back-button:hover {
      background: rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }

    .narrow-conv-name {
      flex: 1;
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* Region-scope indicator next to the channel name in the thread
       header. Always visible while a scoped channel is active so the
       user knows what scope they're sending under without opening the
       channel-edit dialog. */
    .scope-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      margin-left: 8px;
      padding: 1px 8px;
      border: none;
      border-radius: 10px;
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.15));
      color: var(--secondary-text-color);
      font-size: 12px;
      line-height: 18px;
      vertical-align: middle;
      cursor: pointer;
      white-space: nowrap;
    }

    .scope-chip:hover {
      color: var(--primary-text-color);
    }

    .narrow-full {
      width: 100% !important;
    }

    .narrow-list-only {
      width: 100% !important;
    }

    .narrow-list-only chattx-conversation-list {
      width: 100% !important;
      flex-shrink: 1;
    }

    .chat-header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-left: auto;
    }

    .header-action-btn.logged-in {
      color: var(--success-color, #43a047);
    }

    .header-action-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 50%;
      background: transparent;
      color: var(--secondary-text-color);
      cursor: pointer;
      transition: all 0.15s;
      font-size: 16px;
    }

    .header-action-btn:hover {
      background: rgba(0, 0, 0, 0.05);
      color: var(--primary-text-color);
    }

    .search-panel {
      width: 300px;
      border-left: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff);
      flex-shrink: 0;
      overflow: hidden;
    }

    /* "↓ N new" indicator. Shown when new messages
       arrived while scrolled away from the bottom OR when the buffer
       tail isn't yet the conversation's newest message. Click loads
       any unloaded newer messages, scrolls to bottom, and fires
       mark-read. Sticky-positioned at the bottom of the chat
       container so it sits above the input area while scrolled. */
    .new-messages-indicator {
      position: sticky;
      bottom: 12px;
      /* 'align-self: center' requires a flex parent (chat-
         container is 'display: block'); 'margin: 0 auto' requires a
         block-level element with finite width (button defaults to
         'inline-block'). Both were no-ops. Using left + transform
         works with sticky positioning regardless of parent layout. */
      left: 50%;
      transform: translateX(-50%);
      padding: 6px 14px;
      border: none;
      border-radius: 16px;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
      transition: opacity 0.15s, transform 0.15s;
      z-index: 2;
    }

    .new-messages-indicator:hover {
      opacity: 0.92;
    }

    .new-messages-indicator:active {
      /* Combine the centering transform with the press
         offset. A single 'transform' declaration replaces any prior
         one, so ':active' must restate both. */
      transform: translateX(-50%) translateY(1px);
    }
  `)),Fc([Up({type:Object})],Ug.prototype,"hass",void 0),Fc([Up({type:Object})],Ug.prototype,"config",void 0),Fc([Up({type:Array})],Ug.prototype,"conversations",void 0),Fc([Up({type:Object})],Ug.prototype,"activity",void 0),Fc([Up({type:Object})],Ug.prototype,"previews",void 0),Fc([Up({type:String})],Ug.prototype,"selectedId",void 0),Fc([Up({type:Boolean})],Ug.prototype,"narrow",void 0),Fc([Up({attribute:!1})],Ug.prototype,"unread",void 0),Fc([Up({type:Object})],Ug.prototype,"lastRead",void 0),Fc([Vp()],Ug.prototype,"_messageStore",void 0),Fc([Vp()],Ug.prototype,"_inputText",void 0),Fc([Vp()],Ug.prototype,"_shortening",void 0),Fc([Vp()],Ug.prototype,"_imageFile",void 0),Fc([Vp()],Ug.prototype,"_shortenError",void 0),Fc([Vp()],Ug.prototype,"_sending",void 0),Fc([Vp()],Ug.prototype,"_viewportNarrow",void 0),Fc([Vp()],Ug.prototype,"_narrowShowMessages",void 0),Fc([Vp()],Ug.prototype,"_manageOpen",void 0),Fc([Vp()],Ug.prototype,"_manageInitialTab",void 0),Fc([Vp()],Ug.prototype,"_searchOpen",void 0),Fc([Vp()],Ug.prototype,"_repeaterDialogOpen",void 0),Fc([Vp()],Ug.prototype,"_stripDiacritics",void 0),Fc([Vp()],Ug.prototype,"_showContactIds",void 0),Fc([Vp()],Ug.prototype,"_showMessagePreview",void 0),Fc([Vp()],Ug.prototype,"_repeaterLoggedIn",void 0),Fc([Vp()],Ug.prototype,"_currentEntityId",void 0),Fc([Vp()],Ug.prototype,"_conversationResolved",void 0),Fc([Vp()],Ug.prototype,"_pendingScroll",void 0),Ug=Fc([qp("chattx-chat-page")],Ug);const Vg=Mg(class extends Dg{constructor(e){if(super(e),this._timer=null,this._startX=0,this._startY=0,this._attached=!1,this._callback=null,this._element=null,this._onPointerDown=e=>this._handleDown(e),this._onPointerUp=()=>this._cancelTimer(),this._onPointerMove=e=>this._handleMove(e),this._onContextMenu=e=>{null!==this._timer&&e.preventDefault()},6!==e.type)throw new Error("longPress directive must be used on an element")}render(e){}update(e,[t]){if(this._callback=t,!this._attached){this._element=e.element;const t=this._element;t.addEventListener("pointerdown",this._onPointerDown),t.addEventListener("pointerup",this._onPointerUp),t.addEventListener("pointercancel",this._onPointerUp),t.addEventListener("pointermove",this._onPointerMove),t.addEventListener("contextmenu",this._onContextMenu),this._attached=!0}return this.render(t)}_handleDown(e){0===e.button&&(this._startX=e.clientX,this._startY=e.clientY,this._cancelTimer(),this._timer=setTimeout(()=>{var e;this._timer=null,null===(e=this._callback)||void 0===e||e.call(this)},500))}_handleMove(e){if(null===this._timer)return;const t=e.clientX-this._startX,o=e.clientY-this._startY;t*t+o*o>100&&this._cancelTimer()}_cancelTimer(){null!==this._timer&&(clearTimeout(this._timer),this._timer=null)}});let Kg=class extends Lp{constructor(){super(...arguments),this.entityId="",this.label="",this.icon="",this.colorScheme="neutral"}render(){var e,t,o;if(!this.hass||!this.entityId)return kp;const i=this.hass.states[this.entityId];if(!i)return kp;const r=i.state,s=(null===(e=i.attributes)||void 0===e?void 0:e.unit_of_measurement)||"",a=this.label||(null===(t=i.attributes)||void 0===t?void 0:t.friendly_name)||this.entityId,n="unavailable"===r||"unknown"===r,l=null===(o=this.hass.entities)||void 0===o||null===(o=o[this.entityId])||void 0===o?void 0:o.display_precision;let d="";if("battery"===this.colorScheme){const e=parseFloat(r);isNaN(e)||(d=e>50?"battery-high":e>20?"battery-medium":"battery-low")}else"signal"===this.colorScheme&&(d="signal");return bp(gr||(gr=Sc`
      <div class="tile ${0}"
           @click=${0}
           @contextmenu=${0}
           ${0}>
        <div class="tile-value-row">
          ${0}
          <span>${0}${0}</span>
        </div>
        <div class="tile-label">${0}</div>
      </div>
    `),n?"unavailable":"",this._openMoreInfo,this._onRightClick,Vg(()=>this._onRightClick(new MouseEvent("contextmenu"))),this.icon?bp(vr||(vr=Sc`<span class="tile-icon ${0}">${0}</span>`),d,this._renderIcon()):kp,n?"—":this._formatValue(r,l),s?bp(fr||(fr=Sc`<span class="tile-unit">${0}</span>`),s):kp,a)}_openMoreInfo(){if(!this.entityId)return;const e=new CustomEvent("hass-more-info",{detail:{entityId:this.entityId},bubbles:!0,composed:!0});this.dispatchEvent(e)}_onRightClick(e){e.preventDefault(),this.entityId&&this.dispatchEvent(new CustomEvent("tile-context-menu",{detail:{entityId:this.entityId,label:this.label},bubbles:!0,composed:!0}))}_formatValue(e,t){const o=parseFloat(e);return isNaN(o)?e:null!=t&&t>=0?o.toFixed(t):e.includes(".")?e:o.toString()}_renderIcon(){switch(this.icon){case"battery":return bp(yr||(yr=Sc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>`));case"signal":return bp(_r||(_r=Sc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`));case"clock":return bp(br||(br=Sc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`));case"power":return bp(xr||(xr=Sc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"/></svg>`));case"thermometer":return bp(wr||(wr=Sc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z"/></svg>`));case"counter":return bp(kr||(kr=Sc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`));case"chart":return bp($r||($r=Sc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>`));default:return bp(Cr||(Cr=Sc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>`))}}};function Wg(e){const t=[];for(const i of null!=e?e:[]){var o;const e="string"==typeof i.s?Number(i.s):NaN,r=null!==(o=i.lu)&&void 0!==o?o:i.lc;Number.isFinite(e)&&"number"==typeof r&&t.push({ts:1e3*r,value:e})}return t.sort((e,t)=>e.ts-t.ts)}Kg.styles=Rh(Br||(Br=Sc`
    :host {
      display: block;
    }

    .tile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 12px 8px;
      border-radius: 8px;
      background: var(--primary-background-color, #fafafa);
      border: 1px solid var(--divider-color, #e0e0e0);
      min-width: 0;
      gap: 4px;
      transition: border-color 0.2s;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
    }

    .tile:hover {
      border-color: var(--primary-color, #03a9f4);
    }

    .tile:active {
      background: var(--secondary-background-color, #f0f0f0);
    }

    .tile-value-row {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-text-color);
      line-height: 1.2;
    }

    .tile-icon {
      display: flex;
      align-items: center;
      color: var(--secondary-text-color);
    }

    .tile-icon.battery-high { color: #4caf50; }
    .tile-icon.battery-medium { color: #ff9800; }
    .tile-icon.battery-low { color: #f44336; }
    .tile-icon.signal { color: #2196f3; }

    .tile-label {
      font-size: 11px;
      color: var(--secondary-text-color);
      text-align: center;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
    }

    .tile-unit {
      font-size: 12px;
      font-weight: 400;
      color: var(--secondary-text-color);
    }

    .unavailable {
      opacity: 0.5;
    }
  `)),Fc([Up({type:Object})],Kg.prototype,"hass",void 0),Fc([Up({type:String})],Kg.prototype,"entityId",void 0),Fc([Up({type:String})],Kg.prototype,"label",void 0),Fc([Up({type:String})],Kg.prototype,"icon",void 0),Fc([Up({type:String})],Kg.prototype,"colorScheme",void 0),Kg=Fc([qp("chattx-sensor-tile")],Kg);const Xg={battery_pct:{displayMin:0,displayMax:100,direction:"higher_better",classify:e=>e<20?"bad":e<50?"warn":"good",tooltip:"Green ≥ 50%, Yellow 20–50%, Red < 20% (critical < 10%). Home Assistant low-battery convention.",source:"https://community.home-assistant.io/t/low-battery-level-detection-notification-for-all-battery-sensors/258664"},rssi:{displayMin:-130,displayMax:-30,direction:"higher_better",classify:e=>e<-115?"bad":e<-100?"warn":"good",tooltip:"Green > −100 dBm, Yellow −100 to −115 dBm, Red < −115 dBm. Lower (more negative) RSSI means a weaker received signal.",source:"https://www.thethingsnetwork.org/docs/lorawan/rssi-and-snr/"},snr:{displayMin:-20,displayMax:20,direction:"higher_better",classify:e=>e<-7?"bad":e<0?"warn":"good",tooltip:"Green > 0 dB, Yellow −7 to 0 dB, Red < −7 dB. Demodulation floor is spreading-factor dependent (Semtech AN1200.13).",source:"https://www.openhacks.com/uploadsproductos/loradesignguide_std.pdf"},noise_floor:{displayMin:-130,displayMax:-90,direction:"lower_better",classify:e=>e>-105?"bad":e>-115?"warn":"good",tooltip:"Green < −115 dBm, Yellow −115 to −105 dBm, Red > −105 dBm. Above −105 dBm typically indicates man-made RF interference, not thermal noise.",source:"https://www.openhacks.com/uploadsproductos/loradesignguide_std.pdf"},tx_airtime_util:{displayMin:0,displayMax:20,direction:"lower_better",classify:e=>e>10?"bad":e>2?"warn":"good",tooltip:"Green < 2%, Yellow 2–10%, Red > 10%. EU868 sub-band 1% / general 10% duty-cycle ceiling (ETSI EN 300 220-2; eCFR 47 CFR 15.247).",source:"https://www.etsi.org/deliver/etsi_en/300200_300299/30022002/03.03.01_60/en_30022002v030301p.pdf"},rx_airtime_util:{displayMin:0,displayMax:100,direction:"lower_better",classify:e=>e>50?"bad":e>25?"warn":"good",tooltip:"Green < 25%, Yellow 25–50%, Red > 50%. High RX utilisation usually means heavy mesh traffic or environmental interference saturating the receiver."},channel_util:{displayMin:0,displayMax:100,direction:"lower_better",classify:e=>e>50?"bad":e>25?"warn":"good",tooltip:"Green < 25%, Yellow 25–50%, Red > 50%. Channel utilisation aggregates all activity on the radio channel."},hop_count:{displayMin:0,displayMax:32,direction:"lower_better",classify:e=>e>=16?"bad":e>=7?"warn":"good",tooltip:"Green ≤ 6, Yellow 7–15, Red ≥ 16. MeshCore allows up to 64 hops; community-recommended meshes run well under 32. Each hop adds airtime cost and latency.",source:"https://nodakmesh.org/blog/meshcore-path-hash-explained"},uptime_hours:{displayMin:0,displayMax:168,direction:"higher_better",classify:e=>e<1?"bad":e<24?"warn":"good",tooltip:"Green > 24 h, Yellow 1–24 h, Red < 1 h. Very recent reboot suggests a watchdog reset or brownout."},last_seen_hours:{displayMin:0,displayMax:6,direction:"lower_better",classify:e=>e>4?"bad":e>2?"warn":"good",tooltip:"Green < 2 h, Yellow 2–4 h, Red > 4 h. Should be tuned to the node’s advertising interval; nodes that advertise hourly should appear far more often than nodes that advertise every 6 hours."},request_success_rate:{displayMin:0,displayMax:100,direction:"higher_better",classify:e=>e<70?"bad":e<90?"warn":"good",tooltip:'Green > 90%, Yellow 70–90%, Red < 70%. Caller is responsible for the min-sample floor — bars should render with band="info" until at least 50 attempts have accumulated.'},duplicate_ratio:{displayMin:0,displayMax:100,direction:"lower_better",classify:()=>"info",tooltip:""},tx_queue_len:{displayMin:0,displayMax:30,direction:"lower_better",classify:e=>e>10?"bad":e>5?"warn":"good",tooltip:"Number of messages queued for transmission. Healthy nodes drain the queue quickly. Sustained backlog (> 10) indicates channel saturation or a stuck transmitter."},temperature:{displayMin:-20,displayMax:140,direction:"higher_better",classify:e=>e<0||e>125?"bad":"good",tooltip:"Red below 0°F (≈ −18°C) or above 125°F (≈ 52°C); green otherwise. Extreme ambient temperatures risk damage to the radio, battery, or enclosure."}};function Gg(e,t){const o=t.displayMax-t.displayMin;if(o<=0)return 0;const i=(e-t.displayMin)/o,r="higher_better"===t.direction?i:1-i;return Math.max(0,Math.min(100,100*r))}function Yg(e,t){if(!Number.isFinite(t))return{band:"info",fillPct:0,tooltip:""};const o=Xg[e];return o?{band:o.classify(t),fillPct:Gg(t,o),tooltip:o.tooltip,source:o.source}:{band:"info",fillPct:0,tooltip:""}}let Qg=class extends Lp{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.band="info"}render(){const e=this.max-this.min;let t=0;return Number.isFinite(this.value)&&e>0&&(t=(this.value-this.min)/e*100,t=Math.max(0,Math.min(100,t))),bp(Sr||(Sr=Sc`
      <div class="stat-bar"
           role="progressbar"
           aria-valuenow="${0}"
           aria-valuemin="${0}"
           aria-valuemax="${0}">
        <div class="stat-bar-fill ${0}"
             style="width: ${0}%"></div>
      </div>
    `),this.value,this.min,this.max,this.band,t)}};Qg.styles=Rh(Fr||(Fr=Sc`
    :host {
      display: block;
      width: 100%;
    }
    .stat-bar {
      position: relative;
      height: 8px;
      width: 100%;
      background: var(--divider-color, #e0e0e0);
      border-radius: 4px;
      overflow: hidden;
    }
    .stat-bar-fill {
      height: 100%;
      border-radius: 4px;
      transition: width 0.4s ease;
    }
    .stat-bar-fill.good { background: var(--good, #4caf50); }
    .stat-bar-fill.warn { background: var(--warn, #ff9800); }
    .stat-bar-fill.bad  { background: var(--bad,  #f44336); }
    .stat-bar-fill.info { background: var(--info, #2196f3); }
  `)),Fc([Up({type:Number})],Qg.prototype,"value",void 0),Fc([Up({type:Number})],Qg.prototype,"min",void 0),Fc([Up({type:Number})],Qg.prototype,"max",void 0),Fc([Up({type:String})],Qg.prototype,"band",void 0),Qg=Fc([qp("chattx-stat-bar")],Qg);let Zg=class extends Lp{constructor(){super(...arguments),this.segments=[],this.legend="below"}_denom(){if(void 0!==this.total&&this.total>0)return this.total;const e=this.segments.reduce((e,t)=>e+(Number.isFinite(t.value)?t.value:0),0);return e>0?e:1}render(){if(!this.segments.length)return kp;const e=this._denom();return bp(Ar||(Ar=Sc`
      <div class="stat-bar"
           role="img"
           aria-label=${0}>
        ${0}
      </div>
      ${0}
    `),this.segments.map(e=>`${e.label} ${e.value}`).join(", "),this.segments.map(t=>{const o=Number.isFinite(t.value)?Math.max(0,t.value):0;if(0===o)return kp;const i=o/e*100;return bp(Mr||(Mr=Sc`<div class="stat-bar-segment ${0}"
                           style="width: ${0}%"
                           title=${0}></div>`),t.kind,i,uh("{label}: {value}",{label:t.label,value:t.value}))}),"none"!==this.legend?bp(Dr||(Dr=Sc`
          <div class="stat-bar-legend ${0}">
            ${0}
            ${0}
          </div>`),"inline"===this.legend?"inline":"",this.segments.filter(e=>Number.isFinite(e.value)&&e.value>=0).map(e=>bp(Er||(Er=Sc`<span><span class="legend-swatch ${0}"></span>${0}</span>`),e.kind,e.label)),this.extraLegendText?bp(Pr||(Pr=Sc`<span class="legend-extra">${0}</span>`),this.extraLegendText):kp):kp)}};Zg.styles=Rh(zr||(zr=Sc`
    :host { display: block; width: 100%; }

    .stat-bar {
      position: relative;
      height: 8px;
      width: 100%;
      background: var(--divider-color, #e0e0e0);
      border-radius: 4px;
      overflow: hidden;
      display: flex;
      gap: 1px;
    }
    .stat-bar-segment {
      height: 100%;
      transition: width 0.4s ease;
      cursor: help;
    }
    .stat-bar-segment.flood   { background: var(--info, #2196f3); }
    .stat-bar-segment.direct  { background: var(--good, #4caf50); }
    .stat-bar-segment.other   { background: var(--secondary-text-color); opacity: 0.55; }
    .stat-bar-segment.success { background: var(--good, #4caf50); }
    .stat-bar-segment.failure { background: var(--bad,  #f44336); }
    .stat-bar-segment.tx      { background: var(--info, #2196f3); }
    .stat-bar-segment.rx      { background: var(--good, #4caf50); }
    .stat-bar-segment.idle    { background: transparent; }

    .stat-bar-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 12px;
      margin-top: 4px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }
    .stat-bar-legend > span {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }
    .legend-swatch {
      width: 8px;
      height: 8px;
      border-radius: 2px;
      flex-shrink: 0;
    }
    .legend-swatch.flood   { background: var(--info, #2196f3); }
    .legend-swatch.direct  { background: var(--good, #4caf50); }
    .legend-swatch.other   { background: var(--secondary-text-color); opacity: 0.55; }
    .legend-swatch.success { background: var(--good, #4caf50); }
    .legend-swatch.failure { background: var(--bad,  #f44336); }
    .legend-swatch.tx      { background: var(--info, #2196f3); }
    .legend-swatch.rx      { background: var(--good, #4caf50); }
    .legend-swatch.idle    {
      background: var(--divider-color, #e0e0e0);
      border: 1px solid var(--secondary-text-color);
    }

    .stat-bar-legend.inline {
      gap: 4px 8px;
      margin-top: 2px;
      font-size: 10px;
    }
  `)),Fc([Up({type:Array})],Zg.prototype,"segments",void 0),Fc([Up({type:Number})],Zg.prototype,"total",void 0),Fc([Up({type:String})],Zg.prototype,"legend",void 0),Fc([Up({type:String})],Zg.prototype,"extraLegendText",void 0),Zg=Fc([qp("chattx-stacked-bar")],Zg);let Jg=class extends Lp{constructor(){super(...arguments),this.content="",this._open=!1,this._onOpen=()=>{this._open||(this._open=!0,window.addEventListener("scroll",this._onScroll,!0))},this._onClose=()=>{this._open&&(this._open=!1,window.removeEventListener("scroll",this._onScroll,!0))},this._onScroll=()=>this._onClose()}render(){return this.content?bp(Ir||(Ir=Sc`
      <button class="info-tip"
              type="button"
              aria-label=${0}
              @mouseenter=${0}
              @mouseleave=${0}
              @focus=${0}
              @blur=${0}
              @click=${0}>
        <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="7" cy="4" r="1.2" fill="currentColor"></circle>
          <rect x="6.1" y="6.2" width="1.8" height="5.2" rx="0.6" fill="currentColor"></rect>
        </svg>
        <span class="info-tip-content ${0}" role="tooltip">
          ${0}
          ${0}
        </span>
      </button>
    `),uh("More information"),this._onOpen,this._onClose,this._onOpen,this._onClose,this._stopPropagation,this._open?"open":"",this.content,this.source?bp(Rr||(Rr=Sc`<span class="src">${0}</span>`),this.source):kp):kp}updated(){this._open&&this._positionPopover()}disconnectedCallback(){window.removeEventListener("scroll",this._onScroll,!0),super.disconnectedCallback()}_stopPropagation(e){e.stopPropagation()}_positionPopover(){const e=this.shadowRoot;if(!e)return;const t=e.querySelector(".info-tip"),o=e.querySelector(".info-tip-content");if(!t||!o)return;const i=t.getBoundingClientRect(),r=o.getBoundingClientRect(),s=window.innerWidth,a=window.innerHeight;let n=i.left+i.width/2-r.width/2,l=i.bottom+6;n<8?n=8:n+r.width>s-8&&(n=Math.max(8,s-8-r.width)),l+r.height>a-8&&(l=i.top-6-r.height,l<8&&(l=8)),o.style.left=`${n}px`,o.style.top=`${l}px`}};Jg.styles=Rh(Or||(Or=Sc`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }
    button.info-tip {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      margin-left: 4px;
      border-radius: 50%;
      color: var(--secondary-text-color);
      background: var(--divider-color, #e0e0e0);
      cursor: help;
      user-select: none;
      flex-shrink: 0;
      border: none;
      padding: 0;
    }
    /* The "i" glyph is drawn as inline SVG (not a Unicode character) so
       its dot + stem sit on the geometric center of the 14×14 button
       regardless of font metrics. Using a Unicode glyph here previously
       produced two stacked, optically-misaligned rings — the CSS-drawn
       button background plus the glyph's own circled-i ring. */
    button.info-tip svg {
      display: block;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    button.info-tip:hover,
    button.info-tip:focus {
      color: var(--card-background-color, #fff);
      background: var(--primary-color, #03a9f4);
      outline: none;
    }
    /* Popover is position: fixed so we can clamp it to the viewport on
       open (see _positionPopover). top / left are set by JS each time
       the popover opens; visibility is toggled by the .open class
       rather than :hover/:focus so we control the timing of the
       measurement that drives the clamp. */
    .info-tip-content {
      position: fixed;
      top: 0;
      left: 0;
      display: none;
      width: 260px;
      max-width: calc(100vw - 16px);
      padding: 10px 12px;
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
      font-size: 11px;
      font-weight: normal;
      color: var(--primary-text-color);
      text-align: left;
      line-height: 1.45;
      z-index: 100;
      white-space: normal;
      pointer-events: none;
    }
    .info-tip-content.open {
      display: block;
    }
    .info-tip-content .src {
      display: block;
      margin-top: 6px;
      font-size: 10px;
      color: var(--secondary-text-color);
      word-break: break-all;
    }
  `)),Fc([Up({type:String})],Jg.prototype,"content",void 0),Fc([Up({type:String})],Jg.prototype,"source",void 0),Fc([Vp()],Jg.prototype,"_open",void 0),Jg=Fc([qp("chattx-info-tip")],Jg);const ev=[{key:"sent_flood",label:"Sent · Flood",color:"var(--info, #2196f3)",dash:!1},{key:"sent_direct",label:"Sent · Direct",color:"var(--info, #2196f3)",dash:!0},{key:"recv_flood",label:"Recv · Flood",color:"var(--good, #4caf50)",dash:!1},{key:"recv_direct",label:"Recv · Direct",color:"var(--good, #4caf50)",dash:!0},{key:"errors",label:"Errors",color:"var(--bad, #f44336)",dash:!1}];let tv=class extends Lp{constructor(){super(...arguments),this.data=[],this.width=700,this.height=170,this.timeRange=48,this._hoverIndex=null,this._onPointerMove=e=>{const t=this._indexFromEvent(e);null!=t&&t!==this._hoverIndex&&(this._hoverIndex=t)},this._onPointerDown=e=>{const t=this._indexFromEvent(e);null!=t&&(this._hoverIndex=t===this._hoverIndex?null:t)},this._onPointerLeave=e=>{"mouse"===e.pointerType&&(this._hoverIndex=null)}}render(){return this.data&&0!==this.data.length?bp(Tr||(Tr=Sc`
      <div class="chart-container">
        <div class="plot">
          ${0}
          ${0}
        </div>
        <div class="legend">
          ${0}
        </div>
      </div>
    `),this._renderChart(),null!=this._hoverIndex?this._renderTooltip():kp,ev.map(e=>bp(Lr||(Lr=Sc`<div class="legend-item">
              <span class="legend-line ${0}"
                    style="border-top-color:${0}"></span>${0}
            </div>`),e.dash?"dashed":"",e.color,uh(e.label)))):kp}_timeLabel(e,t){const o=Math.round((t-e)/36e5);return o<=0?uh("now"):`-${o}h`}_fmtValue(e){return"number"==typeof e&&isFinite(e)?0===e?"0":e<1?e.toFixed(2):e.toFixed(1):"—"}_geom(){const e=this.width,t=this.height,o=e-40-12,i=t-12-22;let r=0;for(const e of this.data)for(const t of ev){const o=e.values[t.key];"number"==typeof o&&isFinite(o)&&(r=Math.max(r,o))}r<=0&&(r=1);const s=Date.now(),a=36e5*this.timeRange,n=s-a;return{padL:40,padR:12,padT:12,padB:22,w:e,h:t,cw:o,ch:i,maxV:r,now:s,range:a,oldest:n,xScale:e=>40+(e-n)/a*o,yScale:e=>12+i-e/r*i}}_nearestBucket(e){const{xScale:t}=this._geom();let o=-1,i=1/0;for(let r=0;r<this.data.length;r++){const s=Math.abs(t(this.data[r].timestamp)-e);s<i&&(i=s,o=r)}return o}_indexFromEvent(e){const t=this.renderRoot.querySelector("svg");if(!t||0===this.data.length)return null;const o=t.getBoundingClientRect();if(0===o.width)return null;const i=(e.clientX-o.left)/o.width*this.width;return this._nearestBucket(i)}_renderChart(){const e=this._geom(),{padL:t,padR:o,padT:i,padB:r,w:s,h:a,ch:n,maxV:l,now:d,range:c,oldest:h,xScale:p,yScale:u}=e,m=[0,l/2,l].map(e=>{const i=u(e);return xp(Nr||(Nr=Sc`
        <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
          stroke="var(--divider-color,#e0e0e0)" stroke-dasharray="4,4" opacity="0.3" />
        <text x="${0}" y="${0}" font-size="9" text-anchor="end"
          fill="var(--secondary-text-color,#727272)">${0}</text>`),t,i,s-o,i,t-6,i+3,e<1?e.toFixed(1):Math.round(e))}),g=[h,h+c/2,d].map(e=>xp(qr||(qr=Sc`
        <text x="${0}" y="${0}" font-size="9" text-anchor="middle"
          fill="var(--secondary-text-color,#727272)">${0}</text>`),p(e),a-r+14,this._timeLabel(e,d))),v=ev.map(e=>{const t=this.data.filter(t=>"number"==typeof t.values[e.key]&&isFinite(t.values[e.key])).map(t=>`${p(t.timestamp).toFixed(1)},${u(t.values[e.key]).toFixed(1)}`);if(0===t.length)return xp(jr||(jr=Sc``));if(1===t.length){const[o,i]=t[0].split(",");return xp(Hr||(Hr=Sc`<circle cx="${0}" cy="${0}" r="2" fill="${0}" />`),o,i,e.color)}return xp(Ur||(Ur=Sc`<polyline points="${0}" fill="none" stroke="${0}"
        stroke-width="1.5" stroke-dasharray="${0}"
        stroke-linecap="round" stroke-linejoin="round" />`),t.join(" "),e.color,e.dash?"5,3":"none")});let f=xp(Vr||(Vr=Sc``));if(null!=this._hoverIndex&&this._hoverIndex<this.data.length){const e=this.data[this._hoverIndex],t=p(e.timestamp),o=ev.map(o=>{const i=e.values[o.key];return"number"==typeof i&&isFinite(i)?xp(Wr||(Wr=Sc`<circle cx="${0}" cy="${0}" r="3" fill="${0}"
          stroke="var(--card-background-color,#fff)" stroke-width="1" />`),t,u(i),o.color):xp(Kr||(Kr=Sc``))});f=xp(Xr||(Xr=Sc`
        <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
          stroke="var(--primary-text-color,#888)" stroke-width="1" opacity="0.35" />
        ${0}`),t,i,t,a-r,o)}return xp(Gr||(Gr=Sc`
      <svg viewBox="0 0 ${0} ${0}" xmlns="http://www.w3.org/2000/svg" role="img"
           aria-label=${0}
           @pointermove="${0}"
           @pointerdown="${0}"
           @pointerleave="${0}">
        ${0}
        <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
          stroke="var(--divider-color,#e0e0e0)" stroke-width="1" />
        <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
          stroke="var(--divider-color,#e0e0e0)" stroke-width="1" />
        ${0}
        ${0}
        ${0}
        <text x="${0}" y="${0}" font-size="9"
          fill="var(--secondary-text-color,#727272)">msg/min</text>
        <rect x="${0}" y="${0}" width="${0}" height="${0}"
          fill="transparent" style="pointer-events:all" />
      </svg>`),s,a,uh("Message rate over the last {timeRange} hours",{timeRange:this.timeRange}),this._onPointerMove,this._onPointerDown,this._onPointerLeave,m,t,i,t,a-r,t,a-r,s-o,a-r,v,f,g,t,i-2,t,i,e.cw,n)}_renderTooltip(){const e=this._hoverIndex;if(null==e||e>=this.data.length)return kp;const t=this._geom(),o=this.data[e],i=t.xScale(o.timestamp)/t.w*100,r=i>55,s=new Date(o.timestamp).toLocaleString([],{weekday:"short",hour:"2-digit",minute:"2-digit"}),a=r?`left:${i}%; transform:translateX(calc(-100% - 8px));`:`left:${i}%; transform:translateX(8px);`;return bp(Yr||(Yr=Sc`
      <div class="tooltip" style="${0}">
        <div class="tt-head">${0} · msg/min</div>
        ${0}
      </div>
    `),a,s,ev.map(e=>bp(Qr||(Qr=Sc`<div class="tt-row">
            <span class="sw ${0}" style="border-top-color:${0}"></span>
            <span class="lbl">${0}</span>
            <span class="val">${0}</span>
          </div>`),e.dash?"dashed":"",e.color,uh(e.label),this._fmtValue(o.values[e.key]))))}};tv.styles=Rh(Zr||(Zr=Sc`
    :host { display: block; width: 100%; }
    svg { width: 100%; height: auto; display: block; touch-action: pan-y; }
    .chart-container {
      width: 100%;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: var(--input-bg);
      padding: 10px 12px;
      box-sizing: border-box;
    }
    /* Shrink-wraps the SVG so the tooltip can be positioned in % of the SVG
       box — percentages map exactly because the SVG fills this wrapper, with
       no dependence on the rendered scale factor. */
    .plot { position: relative; }
    .tooltip {
      position: absolute;
      top: 4px;
      z-index: 2;
      pointer-events: none;
      background: var(--card-background-color, var(--input-bg, #fff));
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      padding: 6px 8px;
      font-size: 11px;
      color: var(--primary-text-color, #212121);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
      white-space: nowrap;
    }
    .tt-head {
      font-weight: 600;
      margin-bottom: 4px;
      color: var(--secondary-text-color, #727272);
    }
    .tt-row { display: flex; align-items: center; gap: 6px; line-height: 1.5; }
    .tt-row .sw {
      display: inline-block;
      width: 12px;
      height: 0;
      border-top: 2px solid;
      flex-shrink: 0;
    }
    .tt-row .sw.dashed { border-top-style: dashed; }
    .tt-row .lbl { flex: 1; padding-right: 8px; }
    .tt-row .val { font-variant-numeric: tabular-nums; text-align: right; }
    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 6px;
    }
    .legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }
    .legend-line {
      display: inline-block;
      width: 16px;
      height: 0;
      border-top: 2px solid;
      flex-shrink: 0;
    }
    .legend-line.dashed { border-top-style: dashed; }
  `)),Fc([Up({type:Array})],tv.prototype,"data",void 0),Fc([Up({type:Number})],tv.prototype,"width",void 0),Fc([Up({type:Number})],tv.prototype,"height",void 0),Fc([Up({type:Number})],tv.prototype,"timeRange",void 0),Fc([Vp()],tv.prototype,"_hoverIndex",void 0),tv=Fc([qp("chattx-message-rate-chart")],tv);let ov=class extends Lp{constructor(){super(...arguments),this.entities=[],this.hiddenCount=0,this._rateHistory=[],this._rateHistoryKey=null}render(){if(!this.hass||!this.device)return kp;const e=new Set,t=this._renderHeroTiles(e),o=this._buildGroups(e);return bp(Jr||(Jr=Sc`
      <div class="hero-row">
        ${0}
      </div>

      ${0}

      ${0}
    `),t,this._renderMessageActivityCard(),o.length>0?bp(es||(es=Sc`
          <div class="subsection-label">
            ${0}${0}
          </div>

          <div class="sensor-grid">
            ${0}
          </div>`),uh("Sensors"),this.hiddenCount>0?bp(ts||(ts=Sc`<span class="hidden-suffix">(${0} hidden)</span>`),this.hiddenCount):kp,o.map(e=>this._renderGroup(e))):kp)}updated(e){var t;if(!this.hass||!this.device)return;if(!e.has("hass")&&!e.has("device")&&!e.has("entities"))return;const o=this._findEntityIdMatching("nb_sent"),i=null!==(t=null==o?void 0:o.entity_id)&&void 0!==t?t:null;i&&i!==this._rateHistoryKey?(this._rateHistoryKey=i,this._fetchRateHistory()):i||null===this._rateHistoryKey||(this._rateHistoryKey=null,this._rateHistory=[])}async _fetchRateHistory(){if(!this.hass)return;const e=[["sent_flood","sent_flood"],["sent_direct","sent_direct"],["recv_flood","recv_flood"],["recv_direct","recv_direct"],["errors","recv_errors"]],t=[];for(const[o,i]of e){const e=this._findEntityIdMatching(i);e&&t.push([o,e.entity_id])}if(0===t.length)return void(this._rateHistory=[]);const o=Date.now(),i=o-1728e5;try{const e=await this.hass.callWS({type:"history/history_during_period",start_time:new Date(i).toISOString(),end_time:new Date(o).toISOString(),entity_ids:t.map(([,e])=>e),minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),r={};for(const[o,i]of t)r[o]=Wg(null==e?void 0:e[i]);this._rateHistory=function(e,t,o,i=36e5){const r=Math.floor(t/i)*i,s=new Map;for(const[l,d]of Object.entries(e))for(let e=1;e<d.length;e++){const c=d[e-1],h=d[e],p=h.ts-c.ts,u=h.value-c.value;if(p<=0||u<0)continue;const m=u/(p/6e4),g=Math.max(c.ts,t),v=Math.min(h.ts,o);for(let e=Math.max(r,Math.floor(g/i)*i);e<v;e+=i){var a,n;const t=Math.min(v,e+i)-Math.max(g,e);if(t<=0)continue;const o=null!==(a=s.get(e))&&void 0!==a?a:{},r=null!==(n=o[l])&&void 0!==n?n:o[l]={sum:0,covered:0};r.sum+=m*t,r.covered+=t,s.set(e,o)}}return[...s.entries()].sort(([e],[t])=>e-t).map(([e,t])=>({timestamp:e,values:Object.fromEntries(Object.entries(t).map(([e,t])=>[e,t.sum/t.covered]))}))}(r,i,o)}catch(e){this._rateHistory=[]}}_renderMessageActivityCard(){return this._rateHistory.length?bp(os||(os=Sc`
      <div class="subsection-label">${0}</div>
      <chattx-message-rate-chart .data=${0}></chattx-message-rate-chart>
    `),uh("Message activity (48h)"),this._rateHistory):kp}_renderHeroTiles(e){const t=this.device;return"companion"===t.type?this._renderCompanionHero(e):"repeater"===t.type?this._renderRepeaterHero(e):this._renderClientHero(e)}_renderRepeaterHero(e){return bp(is||(is=Sc`
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
    `),this._renderBatteryTile(),this._renderSignalTile(),this._renderRadioActivityTile(),this._renderMessagesSentTile(e),this._renderMessagesReceivedTile(e),this._renderRequestsTile(e))}_renderClientHero(e){return bp(rs||(rs=Sc`
      ${0}
      ${0}
      ${0}
    `),this._renderBatteryTile(),this._renderSignalTile(),this._renderRequestsTile(e))}_renderCompanionHero(e){return bp(ss||(ss=Sc`
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
    `),this._renderBatteryTile(),this._renderSignalTile(),this._renderCompanionRadioActivityTile(),this._renderMessagesSentTile(e),this._renderMessagesReceivedTile(e),this._renderLocationTile())}_renderBatteryTile(){var e;const t=this._findByMetric("battery_pct");if(!t)return kp;const o=this._readNumber(t.entity_id),i=null!==(e=this._findEntityIdMatching("battery_voltage"))&&void 0!==e?e:this._findEntityByLabel("Voltage"),r=i?this._readNumber(i.entity_id):NaN,s=Yg("battery_pct",o);return bp(as||(as=Sc`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>${0}${0}</span>
          <span class="status-dot ${0}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">
            ${0}<span class="unit">%</span>
          </span>
          ${0}
        </div>
        <chattx-stat-bar
          .value=${0}
          .min=${0}
          .max=${0}
          .band=${0}>
        </chattx-stat-bar>
      </div>
    `),()=>this._fireMoreInfo(t.entity_id),uh("Battery"),this._renderInfoTip(s),s.band,this._formatNumber(o,0),Number.isFinite(r)?bp(ns||(ns=Sc`<span class="secondary">· ${0} V</span>`),r.toFixed(3)):kp,o,0,100,s.band)}_renderSignalTile(){const e=this._findByMetric("rssi");if(!e)return kp;const t=this._readNumber(e.entity_id),o=this._findByMetric("snr"),i=o?this._readNumber(o.entity_id):NaN,r=Yg("rssi",t);return bp(ls||(ls=Sc`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>${0}${0}</span>
          <span class="status-dot ${0}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">
            ${0}<span class="unit">dBm</span>
          </span>
          ${0}
        </div>
        <chattx-stat-bar
          .value=${0}
          .min=${0}
          .max=${0}
          .band=${0}>
        </chattx-stat-bar>
      </div>
    `),()=>this._fireMoreInfo(e.entity_id),uh("Last message strength"),this._renderInfoTip(r),r.band,this._formatNumber(t,0),Number.isFinite(i)?bp(ds||(ds=Sc`<span class="secondary">· SNR ${0} dB</span>`),i.toFixed(1)):kp,t,-130,-30,r.band)}_renderRadioActivityTile(){const e=this._findByMetric("tx_airtime_util"),t=this._findByMetric("rx_airtime_util");if(!e&&!t)return kp;const o=e?this._readNumber(e.entity_id):0,i=t?this._readNumber(t.entity_id):0,r=Number.isFinite(o)?Math.max(0,o):0,s=Number.isFinite(i)?Math.max(0,i):0,a=Math.max(0,100-r-s),n=Yg("tx_airtime_util",r).band,l=Yg("rx_airtime_util",s).band,d=this._worseBand(n,l),c=[{value:r,label:`TX ${r.toFixed(1)}%`,kind:"tx"},{value:s,label:`RX ${s.toFixed(1)}%`,kind:"rx"},{value:a,label:`${uh("Idle")} ${a.toFixed(1)}%`,kind:"idle"}],h=r+s;return bp(cs||(cs=Sc`
      <div class="hero-tile"
           @click=${0}>
        <div class="hero-tile-head">
          <span>${0}${0}</span>
          <span class="status-dot ${0}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${0}<span class="unit">%</span></span>
        </div>
        <div class="ra-bar-wrap">
          <chattx-stacked-bar
            .segments=${0}
            .total=${0}
            .legend=${0}>
          </chattx-stacked-bar>
          <div class="ra-legend">
            ${0}
            ${0}
            <span class="ra-legend-item">
              <span class="legend-swatch idle"></span>Idle ${0}%
            </span>
          </div>
        </div>
      </div>
    `),()=>e&&this._fireMoreInfo(e.entity_id),uh("Radio activity"),this._renderInfoTip({band:d,fillPct:0,tooltip:uh("Half-duplex composition over the last reporting interval. The radio can transmit OR receive, never both. TX above 10% indicates duty-cycle pressure; sustained TX+RX above 30% means the channel is congested.")}),d,h.toFixed(1),c,100,"none",e?bp(hs||(hs=Sc`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),t=>{t.stopPropagation(),e&&this._fireMoreInfo(e.entity_id)},r.toFixed(1)):bp(ps||(ps=Sc`<span class="ra-legend-item">
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),r.toFixed(1)),t?bp(us||(us=Sc`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),e=>{e.stopPropagation(),t&&this._fireMoreInfo(t.entity_id)},s.toFixed(1)):bp(ms||(ms=Sc`<span class="ra-legend-item">
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),s.toFixed(1)),a.toFixed(1))}_renderMessagesSentTile(e){const t=this._findEntityIdMatching("nb_sent"),o=this._findEntityIdMatching("sent_flood"),i=this._findEntityIdMatching("sent_direct");if(!t||!o&&!i)return kp;const r=this._readNumber(t.entity_id),s=o?this._readNumber(o.entity_id):0,a=i?this._readNumber(i.entity_id):0,n=[{value:s,label:`Flood ${s}`,kind:"flood"},{value:a,label:`Direct ${a}`,kind:"direct"}];return e.add(t.entity_id),o&&e.add(o.entity_id),i&&e.add(i.entity_id),bp(gs||(gs=Sc`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>${0}${0}</span>
          <span class="status-dot info"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${0}</span>
        </div>
        <chattx-stacked-bar
          .segments=${0}
          .legend=${0}>
        </chattx-stacked-bar>
      </div>
    `),()=>this._fireMoreInfo(t.entity_id),uh("Messages Sent"),this._renderInfoTip({band:"info",fillPct:0,tooltip:uh("Messages sent (lifetime), split by send mode:\n• Flood — broadcast retransmits visible to all neighbours.\n• Direct — routed point-to-point along a path.")}),this._formatCount(r),n,"inline")}_renderMessagesReceivedTile(e){const t=this._findEntityIdMatching("nb_recv"),o=this._findEntityIdMatching("recv_flood"),i=this._findEntityIdMatching("recv_direct"),r=this._findEntityIdMatching("flood_dups"),s=this._findEntityIdMatching("direct_dups");if(!t||!o&&!i)return kp;const a=this._readNumber(t.entity_id),n=o?this._readNumber(o.entity_id):0,l=i?this._readNumber(i.entity_id):0,d=[{value:n,label:`Flood ${n}`,kind:"flood"},{value:l,label:`Direct ${l}`,kind:"direct"}],c=r?this._readNumber(r.entity_id):0,h=s?this._readNumber(s.entity_id):0,p=(Number.isFinite(c)?c:0)+(Number.isFinite(h)?h:0),u=a>0?p/a*100:0;e.add(t.entity_id),o&&e.add(o.entity_id),i&&e.add(i.entity_id),r&&e.add(r.entity_id),s&&e.add(s.entity_id);const m=this._findEntityIdMatching("recv_errors"),g=m?this._readNumber(m.entity_id):NaN,v=Number.isFinite(g)?g:0,f=a+v,y=f>0?v/f*100:0;return m&&e.add(m.entity_id),bp(vs||(vs=Sc`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>${0}${0}</span>
          <span class="status-dot info"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${0}</span>
        </div>
        <chattx-stacked-bar
          .segments=${0}
          .legend=${0}>
        </chattx-stacked-bar>
        ${0}
        ${0}
        <div class="msg-legend">
          <span><span class="msg-swatch flood"></span>Flood ${0}</span>
          <span><span class="msg-swatch direct"></span>Direct ${0}</span>
          ${0}
          ${0}
        </div>
      </div>
    `),()=>this._fireMoreInfo(t.entity_id),uh("Messages Received"),this._renderInfoTip({band:"info",fillPct:0,tooltip:uh("Messages received (lifetime), split by receive mode:\n• Flood — broadcast packets received from neighbours.\n• Direct — routed packets where this node is on the path.\n\nEach bar below is a percentage of its own total:\n• Red = receive errors (CRC failures), as a share of all reception attempts (received + errors) — i.e. the error rate.\n• Amber = duplicate receptions, as a share of received messages (duplicates are a subset of received).\n\nBoth are context only, not banded — in a flooding mesh every active neighbour retransmits the same flood once, so a high duplicate ratio is normal (a 2-neighbour repeater sees ~50%, a 3-neighbour ~67%, etc.).")}),this._formatCount(a),d,"none",v>0?bp(fs||(fs=Sc`<div class="err-line"
                      title=${0}>
              <div class="err-line-fill" style="width:${0}%"></div>
            </div>`),uh("Receive errors (CRC failures): {recvErrorsN} — {errRatio}% of reception attempts (received + errors)",{recvErrorsN:v,errRatio:y.toFixed(1)}),Math.min(100,y).toFixed(1)):kp,p>0?bp(ys||(ys=Sc`<div class="dup-line"
                      title=${0}>
              <div class="dup-line-fill" style="width:${0}%"></div>
            </div>`),uh("Duplicate receptions: {totalDups} — {dupRatio}% of received messages",{totalDups:p,dupRatio:u.toFixed(1)}),Math.min(100,u).toFixed(1)):kp,this._legendCount(n),this._legendCount(l),v>0?bp(_s||(_s=Sc`<span><span class="msg-swatch error"></span>Error ${0}</span>`),v):kp,p>0?bp(bs||(bs=Sc`<span><span class="msg-swatch dup"></span>Dup ${0}</span>`),p):kp)}_renderRequestsTile(e){const t=this._findEntityIdMatching("request_succ"),o=this._findEntityIdMatching("request_fail");if(!t||!o)return kp;const i=this._readNumber(t.entity_id),r=this._readNumber(o.entity_id),s=i+r,a=s>0?i/s*100:0,n=s>=50?Yg("request_success_rate",a):{band:"info",fillPct:0,tooltip:""},l=uh("Outgoing requests this node initiated (login, telemetry, neighbour query) and how they resolved. Success rate bands: Green > 90%, Yellow 70–90%, Red < 70%, with a minimum sample of 50 attempts to colour. Below the floor, the bar stays neutral — too few samples to judge."),d=[{value:i,label:`OK ${i}`,kind:"success"},{value:r,label:`${uh("Fail")} ${r}`,kind:"failure"}];return e.add(t.entity_id),e.add(o.entity_id),bp(xs||(xs=Sc`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>${0}${0}</span>
          <span class="status-dot ${0}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${0}</span>
          ${0}
        </div>
        <chattx-stacked-bar
          .segments=${0}
          .legend=${0}>
        </chattx-stacked-bar>
      </div>
    `),()=>this._fireMoreInfo(t.entity_id),uh("Requests"),this._renderInfoTip({...n,tooltip:l}),n.band,s>0?`${a.toFixed(0)}%`:"—",s>0?bp(ws||(ws=Sc`<span class="secondary">· ${0} attempt${0}</span>`),s,1===s?"":"s"):kp,d,"inline")}_legendCount(e){return Number.isFinite(e)?String(e):"—"}_formatCount(e){return Number.isFinite(e)?Math.round(e).toLocaleString(hh()):"—"}_renderLocationTile(){const e=this._findEntityIdMatching("latitude"),t=this._findEntityIdMatching("longitude");let o=e?this._readNumber(e.entity_id):NaN,i=t?this._readNumber(t.entity_id):NaN,r="entity";!Number.isFinite(o)&&Number.isFinite(this.fallbackLatitude)&&(o=this.fallbackLatitude,r="fallback"),!Number.isFinite(i)&&Number.isFinite(this.fallbackLongitude)&&(i=this.fallbackLongitude,r="fallback");const s=Number.isFinite(o)&&Number.isFinite(i)&&(0!==o||0!==i);if(!s)return kp;let a=null;if("entity"===r&&e){var n;const t=null===(n=this.hass)||void 0===n||null===(n=n.states[e.entity_id])||void 0===n?void 0:n.last_updated;if(t){const e=new Date(t);Number.isNaN(e.getTime())||(a=e)}}else"fallback"===r&&Number.isFinite(this.fallbackUpdated)&&(a=new Date(1e3*this.fallbackUpdated));const l=s&&a?this._formatRelativeTime(a):"";return bp(ks||(ks=Sc`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>${0}${0}</span>
        </div>
        <div class="hero-tile-value">
          ${0}
        </div>
        ${0}
      </div>
    `),()=>{e&&this._fireMoreInfo(e.entity_id)},uh("Location"),"fallback"===r?bp($s||($s=Sc`<span style="opacity:0.55;text-transform:none;letter-spacing:0;font-size:10px;margin-left:4px;">via contact</span>`)):kp,s?bp(Cs||(Cs=Sc`<span class="coord-pair">
                ${0}, ${0}
              </span>`),o.toFixed(4),i.toFixed(4)):bp(Bs||(Bs=Sc`<span class="primary">—</span>`)),l?bp(Ss||(Ss=Sc`<div class="loc-updated">Updated ${0}</div>`),l):kp)}_formatRelativeTime(e){const t=(Date.now()-e.getTime())/1e3;return!Number.isFinite(t)||t<0||t<60?"just now":t<3600?`${Math.floor(t/60)} min ago`:t<86400?`${Math.floor(t/3600)} h ago`:`${Math.floor(t/86400)} d ago`}_renderCompanionRadioActivityTile(){const e=this._findEntityIdMatching("tx_airtime"),t=this._findEntityIdMatching("rx_airtime"),o=this._findByMetric("uptime_hours");if(!e&&!t||!o)return kp;const i=this._readUptimeMinutes(o);if(!Number.isFinite(i)||i<=0)return kp;const r=e?this._readNumber(e.entity_id):0,s=t?this._readNumber(t.entity_id):0;if(!Number.isFinite(r)&&!Number.isFinite(s))return kp;const a=e=>Number.isFinite(e)?Math.min(100,Math.max(0,e/i*100)):0,n=a(r),l=a(s),d=Math.max(0,100-n-l),c=Yg("tx_airtime_util",n).band,h=Yg("rx_airtime_util",l).band,p=this._worseBand(c,h),u=[{value:n,label:`TX ${n.toFixed(1)}%`,kind:"tx"},{value:l,label:`RX ${l.toFixed(1)}%`,kind:"rx"},{value:d,label:`${uh("Idle")} ${d.toFixed(1)}%`,kind:"idle"}],m=n+l;return bp(Fs||(Fs=Sc`
      <div class="hero-tile"
           @click=${0}>
        <div class="hero-tile-head">
          <span>${0}${0}</span>
          <span class="status-dot ${0}"></span>
        </div>
        <div class="hero-tile-value">
          <span class="primary">${0}<span class="unit">%</span></span>
        </div>
        <div class="ra-bar-wrap">
          <chattx-stacked-bar
            .segments=${0}
            .total=${0}
            .legend=${0}>
          </chattx-stacked-bar>
          <div class="ra-legend">
            ${0}
            ${0}
            <span class="ra-legend-item">
              <span class="legend-swatch idle"></span>Idle ${0}%
            </span>
          </div>
        </div>
      </div>
    `),()=>e&&this._fireMoreInfo(e.entity_id),uh("Radio activity"),this._renderInfoTip({band:p,fillPct:0,tooltip:uh("Lifetime-average half-duplex composition: cumulative TX / RX airtime divided by uptime since the node last booted. The radio can transmit OR receive, never both. Unlike a managed repeater (which reports utilisation over the last interval), the companion exposes only cumulative airtime, so this is a long-run average and will not reflect short recent bursts.")}),p,m.toFixed(1),u,100,"none",e?bp(As||(As=Sc`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),t=>{t.stopPropagation(),e&&this._fireMoreInfo(e.entity_id)},n.toFixed(1)):bp(Ms||(Ms=Sc`<span class="ra-legend-item">
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),n.toFixed(1)),t?bp(Ds||(Ds=Sc`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),e=>{e.stopPropagation(),t&&this._fireMoreInfo(t.entity_id)},l.toFixed(1)):bp(Es||(Es=Sc`<span class="ra-legend-item">
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),l.toFixed(1)),d.toFixed(1))}_readUptimeMinutes(e){var t,o;const i=this._readNumber(e.entity_id);if(!Number.isFinite(i))return NaN;switch(null!==(t=null===(o=this.hass)||void 0===o||null===(o=o.states[e.entity_id])||void 0===o||null===(o=o.attributes)||void 0===o?void 0:o.unit_of_measurement)&&void 0!==t?t:""){case"d":return 1440*i;case"h":return 60*i;case"min":return i;default:return i/60}}_buildGroups(e){var t;const o={"Radio · live":[],"Radio · configuration":[],Status:[],Identity:[]};for(const t of this.entities)e.has(t.entity_id)||this._isHeroDuplicate(t)||o[this._groupOf(t)].push(this._renderRow(t));const i="companion"===(null===(t=this.device)||void 0===t?void 0:t.type),r=["Radio · configuration","Identity"];return Object.entries(o).filter(([e,t])=>!(0===t.length||i&&r.includes(e))).map(([e,t])=>({name:e,rows:t}))}_isHeroDuplicate(e){return"battery_pct"===e.metricKey||2===e.sortOrder||"snr"===e.metricKey||"rssi"===e.metricKey||"uptime_hours"===e.metricKey||"tx_airtime_util"===e.metricKey||"rx_airtime_util"===e.metricKey||"Airtime"===e.label||"RX Airtime"===e.label}_groupOf(e){const t=e.entity_id,o=e.sortOrder;return e.booleanProblem||2===o?"Status":6===o?"Radio · configuration":4===o||5===o||9===o||10===o||11===o||12===o||t.includes("noise_floor")||t.includes("tx_queue")?"Radio · live":t.includes("frequency")||t.includes("bandwidth")||t.includes("spreading_factor")||t.includes("rate_limiter")?"Radio · configuration":t.includes("hop_count")||t.includes("out_path")||t.includes("last_seen")||t.includes("last_advert")||3===o||8===o||7===o?"Status":"Identity"}_renderGroup(e){return bp(Ps||(Ps=Sc`
      <div class="group-label">${0}</div>
      ${0}
    `),uh(e.name),e.rows)}_renderRow(e){var t,o,i,r,s;if(e.booleanProblem){var a;const t=null===(a=this.hass)||void 0===a||null===(a=a.states[e.entity_id])||void 0===a?void 0:a.state,o=void 0===t||"unknown"===t||"unavailable"===t,i="on"===t,r=o?"info":i?"bad":"good";return bp(zs||(zs=Sc`
        <div class="sensor-item"
             @click=${0}
             @contextmenu=${0}
             ${0}>
          <span class="status-dot ${0}"></span>
          <span class="si-label">${0}</span>
          <span class="si-value">${0}</span>
          <span class="si-bar"></span>
        </div>
      `),()=>this._fireMoreInfo(e.entity_id),t=>this._fireContextMenu(t,e),Vg(()=>this._fireContextMenu(void 0,e)),r,uh(e.label),o?"—":i?"Detected":"OK")}const n=this._readNumber(e.entity_id),l=null===(t=this.hass)||void 0===t?void 0:t.states[e.entity_id],d=null!==(o=null==l||null===(i=l.attributes)||void 0===i?void 0:i.unit_of_measurement)&&void 0!==o?o:"",c=e.metricKey?this._evaluateForRow(e.metricKey,n,e):null,h=null!==(r=null==c?void 0:c.band)&&void 0!==r?r:"info",p=e.staticTooltip||(null==c?void 0:c.tooltip)||"",u=p?{band:h,fillPct:null!==(s=null==c?void 0:c.fillPct)&&void 0!==s?s:0,tooltip:p,source:null==c?void 0:c.source}:null,m=this._formatRowValue(e,n,null==l?void 0:l.state);return bp(Is||(Is=Sc`
      <div class="sensor-item"
           @click=${0}
           @contextmenu=${0}
           ${0}>
        <span class="status-dot ${0}"></span>
        <span class="si-label">
          ${0}${0}
        </span>
        <span class="si-value">
          ${0}${0}
        </span>
        <span class="si-bar">
          ${0}
        </span>
      </div>
    `),()=>this._fireMoreInfo(e.entity_id),t=>this._fireContextMenu(t,e),Vg(()=>this._fireContextMenu(void 0,e)),h,uh(e.label),u?this._renderInfoTip(u):kp,m,d?bp(Rs||(Rs=Sc`<span class="unit">${0}</span>`),d):kp,c&&e.metricKey?bp(Os||(Os=Sc`<chattx-stat-bar
                .value=${0}
                .min=${0}
                .max=${0}
                .band=${0}>
              </chattx-stat-bar>`),c.fillPct,0,100,h):kp)}_evaluateForRow(e,t,o){if("uptime_hours"===e){var i,r;let s=t;switch(null!==(i=null===(r=this.hass)||void 0===r||null===(r=r.states[o.entity_id])||void 0===r||null===(r=r.attributes)||void 0===r?void 0:r.unit_of_measurement)&&void 0!==i?i:""){case"d":s=24*t;break;case"h":s=t;break;case"min":s=t/60;break;default:s=t/3600}return Yg(e,s)}var s,a;return Yg(e,"temperature"===e&&(null!==(s=null===(a=this.hass)||void 0===a||null===(a=a.states[o.entity_id])||void 0===a||null===(a=a.attributes)||void 0===a?void 0:a.unit_of_measurement)&&void 0!==s?s:"").includes("C")?9*t/5+32:t)}_findByMetric(e){return this.entities.find(t=>t.metricKey===e)}_findEntityIdMatching(e){return this.entities.find(t=>t.entity_id.includes(e))}_findEntityByLabel(e){return this.entities.find(t=>t.label===e)}_readNumber(e){var t;const o=null===(t=this.hass)||void 0===t?void 0:t.states[e];if(!o||"unavailable"===o.state||"unknown"===o.state)return NaN;const i=parseFloat(o.state);return Number.isFinite(i)?i:NaN}_formatNumber(e,t){return Number.isFinite(e)?e.toFixed(t):"—"}_formatRowValue(e,t,o){var i;if("unavailable"===o||"unknown"===o)return"—";if(!Number.isFinite(t))return null!=o?o:"—";const r=null===(i=this.hass)||void 0===i||null===(i=i.entities)||void 0===i||null===(i=i[e.entity_id])||void 0===i?void 0:i.display_precision;return null!=r&&r>=0?t.toFixed(r):o&&o.includes(".")?o:t.toString()}_renderInfoTip(e){var t;return e.tooltip?bp(Ts||(Ts=Sc`<chattx-info-tip
      .content=${0}
      .source=${0}>
    </chattx-info-tip>`),uh(e.tooltip),null!==(t=e.source)&&void 0!==t?t:""):kp}_worseBand(e,t){const o={good:0,info:0,warn:1,bad:2};return o[e]>=o[t]?e:t}_fireMoreInfo(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}_fireContextMenu(e,t){null==e||e.preventDefault(),this.dispatchEvent(new CustomEvent("tile-context-menu",{detail:{entityId:t.entity_id,label:t.label},bubbles:!0,composed:!0}))}};ov.styles=Rh(Ls||(Ls=Sc`
    /* container-type lets the sensor grid's @container query react to this
       card's own width rather than the raw viewport. */
    :host { display: block; container-type: inline-size; }

    /* ─── Hero row ─── */
    .hero-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
      margin-bottom: 16px;
    }
    .hero-tile {
      background: var(--secondary-background-color, #f0f0f0);
      border-radius: 10px;
      padding: 12px 14px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      cursor: pointer;
      border: 1px solid transparent;
      transition: border-color 0.15s;
    }
    .hero-tile:hover { border-color: var(--primary-color, #03a9f4); }
    .hero-tile-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.4px;
      color: var(--secondary-text-color);
    }
    .hero-tile-value {
      display: flex;
      align-items: baseline;
      gap: 6px;
      flex-wrap: wrap;
    }
    .hero-tile-value .primary {
      font-size: 22px;
      font-weight: 600;
      color: var(--primary-text-color);
      line-height: 1;
    }
    .hero-tile-value .secondary {
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .hero-tile-value .compact {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    /* Clickable TX/RX segments inside Radio activity hero tile */
    .ra-segment {
      cursor: pointer;
      border-radius: 3px;
      padding: 0 2px;
      transition: background 0.15s;
    }
    .ra-segment:hover {
      background: rgba(127, 127, 127, 0.18);
    }

    /* Bar + custom legend wrapper — keeps the legend tight to the bar
       (4px) regardless of the hero-tile's 8px flex-column gap, matching
       the spacing inside Messages Sent / Received tiles. */
    .ra-bar-wrap { display: block; }

    /* Radio activity legend (matches the stacked-bar inline legend
       layout used by Messages Sent / Received) */
    .ra-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 12px;
      margin-top: 4px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }
    .ra-legend-item {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }
    .ra-legend-item:hover {
      color: var(--primary-text-color);
      cursor: pointer;
    }
    .legend-swatch {
      width: 8px;
      height: 8px;
      border-radius: 2px;
      flex-shrink: 0;
    }
    .legend-swatch.tx   { background: var(--info, #2196f3); }
    .legend-swatch.rx   { background: var(--good, #4caf50); }
    .legend-swatch.idle {
      background: var(--divider-color, #e0e0e0);
      border: 1px solid var(--secondary-text-color);
    }

    /* ─── Status dots ─── */
    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
      display: inline-block;
    }
    .status-dot.good { background: var(--good, #4caf50); }
    .status-dot.warn { background: var(--warn, #ff9800); }
    .status-dot.bad  { background: var(--bad,  #f44336); }
    .status-dot.info { background: var(--info, #2196f3); }

    /* ─── Subsection label ─── */
    .subsection-label {
      font-size: 11px;
      font-weight: 600;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
      margin-top: 16px;
    }
    .hidden-suffix {
      font-weight: 400;
      text-transform: none;
      opacity: 0.6;
      margin-left: 6px;
    }

    /* ─── Sensor grid ─── responsive: one column on a narrow card, two
       once the card is wide. The breakpoint is a @container query keyed on
       :host's inline-size, so it reacts to the card width (panel layout,
       sidebar state) rather than just the raw viewport. Category headers
       span the full width so paired sensors stay within their category. */
    .sensor-grid {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 28px;
    }
    @container (min-width: 620px) {
      .sensor-grid { grid-template-columns: 1fr 1fr; }
    }
    .group-label {
      grid-column: 1 / -1;
      padding: 12px 4px 4px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--secondary-text-color);
    }
    .sensor-item {
      display: grid;
      grid-template-columns: 14px minmax(0, 1fr) auto minmax(72px, 120px);
      align-items: center;
      gap: 10px;
      padding: 8px 4px;
      border-top: 1px solid var(--divider-color);
      font-size: 13px;
      cursor: pointer;
    }
    .sensor-item:hover { background: rgba(127, 127, 127, 0.06); }
    .si-label {
      color: var(--secondary-text-color);
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .si-value {
      color: var(--primary-text-color);
      font-weight: 500;
      text-align: right;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .si-bar { min-width: 0; }
    .si-bar chattx-stat-bar { width: 100%; }

    .unit {
      font-size: 11px;
      font-weight: 400;
      color: var(--secondary-text-color);
      margin-left: 2px;
    }

    .map-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 12px;
      background: var(--info-bg, rgba(33, 150, 243, 0.18));
      color: var(--info, #2196f3);
      font-size: 11px;
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;
    }
    .coord-pair {
      font-family: ui-monospace, 'SF Mono', Menlo, monospace;
      font-size: 13px;
      color: var(--primary-text-color);
    }
    .loc-updated {
      font-size: 11px;
      color: var(--secondary-text-color);
      margin-top: 2px;
    }

    .dup-annotation {
      font-size: 11px;
      color: var(--secondary-text-color);
      font-style: italic;
      margin-top: 2px;
    }
    .dup-annotation .num {
      font-weight: 500;
      color: var(--primary-text-color);
      font-style: normal;
    }
    /* Thin red line beneath the Messages Received composition bar showing
       the lifetime receive-error share. */
    .err-line {
      height: 3px;
      width: 100%;
      margin-top: 3px;
      background: var(--divider-color, #e0e0e0);
      border-radius: 2px;
      overflow: hidden;
      cursor: help;
    }
    .err-line-fill {
      height: 100%;
      background: var(--bad, #f44336);
    }
    /* Duplicates line — same thin track, amber fill, stacked under the
       error line. */
    .dup-line {
      height: 3px;
      width: 100%;
      margin-top: 2px;
      background: var(--divider-color, #e0e0e0);
      border-radius: 2px;
      overflow: hidden;
      cursor: help;
    }
    .dup-line-fill {
      height: 100%;
      background: var(--warning, #ff9800);
    }
    /* Unified legend beneath the Messages Received bar stack. */
    .msg-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 10px;
      margin-top: 5px;
      font-size: 10px;
      color: var(--secondary-text-color);
    }
    .msg-legend > span {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }
    .msg-swatch {
      width: 8px;
      height: 8px;
      border-radius: 2px;
      flex-shrink: 0;
    }
    .msg-swatch.flood  { background: var(--info, #2196f3); }
    .msg-swatch.direct { background: var(--good, #4caf50); }
    .msg-swatch.error  { background: var(--bad, #f44336); }
    .msg-swatch.dup    { background: var(--warning, #ff9800); }
  `)),Fc([Up({type:Object})],ov.prototype,"hass",void 0),Fc([Up({type:Object})],ov.prototype,"device",void 0),Fc([Up({type:Array})],ov.prototype,"entities",void 0),Fc([Up({type:Number})],ov.prototype,"hiddenCount",void 0),Fc([Up({type:Number})],ov.prototype,"fallbackLatitude",void 0),Fc([Up({type:Number})],ov.prototype,"fallbackLongitude",void 0),Fc([Up({type:Number})],ov.prototype,"fallbackUpdated",void 0),Fc([Vp()],ov.prototype,"_rateHistory",void 0),ov=Fc([qp("chattx-node-summary")],ov);let iv=class extends Lp{constructor(){super(...arguments),this.data=[],this.neighbors=[],this.width=600,this.height=200,this.timeRange=24,this.COLORS=["#FF6B6B","#4ECDC4","#FFE66D","#95E1D3","#C7CEEA","#FF8B94","#B5EAD7","#FFB7B2"]}render(){if(!this.data||0===this.data.length||0===this.neighbors.length)return bp(Ns||(Ns=Sc`
        <div class="chart-container">
          <div class="empty-state">${0}</div>
        </div>
      `),uh("No data available"));const e=this._renderChart();return bp(qs||(qs=Sc`
      <div class="chart-container">
        ${0}
        <div class="legend">
          ${0}
        </div>
      </div>
    `),e,this.neighbors.map((e,t)=>{const o=this.COLORS[t%this.COLORS.length];return bp(js||(js=Sc`
              <div class="legend-item">
                <div class="legend-dot" style="background-color: ${0}"></div>
                <span>${0}</span>
              </div>
            `),o,e)}))}_renderChart(){const e=50,t=this.width-100,o=this.height-100;let i=1/0,r=-1/0;this.data.forEach(e=>{Object.values(e.values).forEach(e=>{"number"==typeof e&&(i=Math.min(i,e),r=Math.max(r,e))})}),isFinite(i)&&isFinite(r)||(i=-10,r=20);const s=r-i,a=i-.1*s,n=r+.1*s,l=t=>this.height-e-(t-a)/(n-a)*o,d=60*this.timeRange*60*1e3,c=Date.now(),h=c-d,p=o=>e+(o-h)/d*t,u=[];for(let t=0;t<=5;t++){const o=a+t/5*(n-a),i=l(o);u.push(xp(Hs||(Hs=Sc`
          <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
            stroke="var(--divider-color, #e0e0e0)" stroke-dasharray="4,4" opacity="0.3" />
          <text x="${0}" y="${0}" font-size="10" text-anchor="end"
            fill="var(--secondary-text-color, #727272)">${0}dB</text>
        `),e,i,this.width-e,i,42,i+4,Math.round(o)))}const m=[];for(let t=0;t<=5;t++){const o=h+t/5*d,i=p(o),r=this._formatTimeLabel(o,c);m.push(xp(Us||(Us=Sc`
          <text x="${0}" y="${0}" font-size="10" text-anchor="middle"
            fill="var(--secondary-text-color, #727272)">${0}</text>
        `),i,this.height-e+16,r))}const g=this.neighbors.map((e,t)=>{const o=this.COLORS[t%this.COLORS.length],i=[];return this.data.forEach(t=>{const o=t.values[e];if("number"==typeof o&&isFinite(o)){const e=p(t.timestamp),r=l(o);i.push(`${e},${r}`)}}),0===i.length?xp(Vs||(Vs=Sc``)):xp(Ks||(Ks=Sc`
        <polyline points="${0}" fill="none" stroke="${0}"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      `),i.join(" "),o)});return xp(Ws||(Ws=Sc`
      <svg width="${0}" height="${0}" xmlns="http://www.w3.org/2000/svg">
        <!-- Background -->
        <rect width="${0}" height="${0}" fill="var(--input-bg)" />

        <!-- Grid lines -->
        ${0}

        <!-- Y-axis -->
        <line x1="${0}" y1="${0}" x2="${0}"
          y2="${0}" stroke="var(--divider-color, #e0e0e0)" stroke-width="1" />

        <!-- X-axis -->
        <line x1="${0}" y1="${0}"
          x2="${0}" y2="${0}"
          stroke="var(--divider-color, #e0e0e0)" stroke-width="1" />

        <!-- Data lines -->
        ${0}

        <!-- Time labels -->
        ${0}
      </svg>
    `),this.width,this.height,this.width,this.height,u,e,e,e,this.height-e,e,this.height-e,this.width-e,this.height-e,g,m)}_formatTimeLabel(e,t){const o=(t-e)/36e5;return o>=24?`${Math.round(o)}h ago`:0===o?uh("Now"):`${Math.round(o)}h`}};iv.styles=Rh(Xs||(Xs=Sc`
    :host {
      display: block;
      width: 100%;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    svg {
      width: 100%;
      height: auto;
      display: block;
    }

    .chart-container {
      width: 100%;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      background: var(--input-bg);
      padding: 12px;
      box-sizing: border-box;
    }

    .empty-state {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      color: var(--secondary-text-color, #727272);
      font-size: 14px;
    }

    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--primary-text-color);
    }

    .legend-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }
  `)),Fc([Up({type:Array})],iv.prototype,"data",void 0),Fc([Up({type:Array})],iv.prototype,"neighbors",void 0),Fc([Up({type:Number})],iv.prototype,"width",void 0),Fc([Up({type:Number})],iv.prototype,"height",void 0),Fc([Up({type:Number})],iv.prototype,"timeRange",void 0),iv=Fc([qp("chattx-snr-chart")],iv);let rv=class extends Lp{constructor(){super(),this.open=!1,this.title="Confirm",this.message="",this.confirmLabel="Confirm",this.cancelLabel="Cancel",this.dangerous=!1,this._typedValue="",fm(this,{isOpen:()=>this.open,onEscape:()=>this._onCancel()})}render(){if(!this.open)return;const e=this.requireTyped&&this._typedValue!==this.requireTyped;return bp(Gs||(Gs=Sc`
      <div class="dialog-overlay" @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label=${0}>
          <div class="dialog-header">
            <div class="dialog-header-title">${0}</div>
          </div>
          <div class="dialog-body">
            <div style="margin-bottom: 16px;">${0}</div>
            ${0}
          </div>
          <div class="dialog-footer">
            <button
              class="dialog-button"
              @click=${0}>
              ${0}
            </button>
            <button
              class="dialog-button primary ${0}"
              ?disabled=${0}
              @click=${0}>
              ${0}
            </button>
          </div>
        </div>
      </div>
    `),this._onOverlayClick,this.title,this.title,this.message,this.requireTyped?bp(Ys||(Ys=Sc`
                  <div class="form-group">
                    <label class="form-label">${0}</label>
                    <input
                      type="text"
                      class="form-input"
                      placeholder=${0}
                      .value=${0}
                      @input=${0}
                    />
                    <div class="form-description">
                      ${0}
                    </div>
                  </div>
                `),uh("Type to confirm"),uh("Type '{requireTyped}'",{requireTyped:this.requireTyped}),this._typedValue,e=>{this._typedValue=e.target.value},uh("Type {text} to enable confirmation",{text:this.requireTyped})):"",this._onCancel,this.cancelLabel,this.dangerous?"danger-button":"",e,this._onConfirm,this.confirmLabel)}_onOverlayClick(e){e.target===e.currentTarget&&this._onCancel()}_onCancel(){this._typedValue="",this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0}))}_onConfirm(){this.dispatchEvent(new CustomEvent("confirm",{bubbles:!0})),this._typedValue=""}};rv.styles=[Wp,Rh(Qs||(Qs=Sc`
      :host {
        display: block;
      }
    `)),Xp],Fc([Up({type:Boolean})],rv.prototype,"open",void 0),Fc([Up({type:String})],rv.prototype,"title",void 0),Fc([Up({type:String})],rv.prototype,"message",void 0),Fc([Up({type:String})],rv.prototype,"confirmLabel",void 0),Fc([Up({type:String})],rv.prototype,"cancelLabel",void 0),Fc([Up({type:Boolean})],rv.prototype,"dangerous",void 0),Fc([Up({type:String})],rv.prototype,"requireTyped",void 0),Fc([Vp()],rv.prototype,"_typedValue",void 0),rv=Fc([qp("chattx-confirm-dialog")],rv);const sv=e=>{if(null==e)return;const t=Number(e);return Number.isFinite(t)?t:void 0},av=["None","Share (Live GPS)","Saved Prefs"],nv=["1-Byte","2-Byte","3-Byte"],lv=["Deny","Allow (Per Contact Flags)","Allow All"],dv=[{label:"Overwrite Oldest When Full",value:1},{label:"Auto-Add Chat (Companion)",value:2},{label:"Auto-Add Repeater",value:4},{label:"Auto-Add Room Server",value:8},{label:"Auto-Add Sensor",value:16}];function cv(e,t){const o=sv(e);return void 0!==o&&void 0!==t[o]?t[o]:`Unknown (${e})`}const hv=[{name:"reboot",description:"Restart the device",category:"Device Management",dangerous:!0},{name:"poweroff",description:"Power off the device (v1.14.1+)",category:"Device Management",dangerous:!0},{name:"send_appstart",description:"Initialize connection, returns SELF_INFO with device details",category:"Device Management",responseFormat:"Device info with name, public key, radio params, location"},{name:"send_device_query",description:"Query device info (firmware, capabilities, path hash mode)",category:"Device Management",responseFormat:"Device information including firmware version and capabilities"},{name:"get_bat",description:"Get battery voltage and percentage",category:"Device Info",responseFormat:"Battery: {voltage}mV ({percentage}%)"},{name:"get_time",description:"Get device's current RTC time",category:"Device Info",responseFormat:"Epoch timestamp or formatted time string"},{name:"get_self_telemetry",description:"Get local device telemetry data",category:"Device Info",responseFormat:"Telemetry data including temperature, voltage, uptime"},{name:"set_time",description:"Set device RTC time",category:"Device Info",params:[{name:"val",type:"number",description:"Epoch seconds (Unix timestamp)",required:!0}]},{name:"set_radio",description:"Set radio parameters (frequency, bandwidth, spreading factor, coding rate)",category:"Radio Settings",params:[{name:"freq",type:"number",description:"Frequency in MHz (v1.15.0+ allows down to 150)",required:!0,min:150,max:1e3},{name:"bw",type:"number",description:"Bandwidth in kHz",required:!0,min:7.8,max:500},{name:"sf",type:"number",description:"Spreading factor",required:!0,min:5,max:12},{name:"cr",type:"number",description:"Coding rate",required:!0,min:5,max:8}],responseFormat:"OK - radio parameters set (reboot required)"},{name:"get_allowed_repeat_freq",description:"Get allowed repeater frequencies",category:"Radio Settings",responseFormat:"List of allowed frequency ranges"},{name:"set_tx_power",description:"Set transmit power",category:"Radio Settings",params:[{name:"val",type:"number",description:"TX power in dBm",required:!0,min:-9,max:22}],responseFormat:"OK - TX power set to {val}dBm"},{name:"set_radio.rxgain",description:"Set RX boosted gain mode (SX1262/SX1268; also LR1110 v1.16.0+)",category:"Radio Settings",params:[{name:"state",type:"select",description:"Enable or disable RX boosted gain",required:!0,options:["on","off"]}]},{name:"set_coords",description:"Set GPS coordinates (latitude and longitude)",category:"Location",params:[{name:"lat",type:"number",description:"Latitude in decimal degrees",required:!0,min:-90,max:90},{name:"lon",type:"number",description:"Longitude in decimal degrees",required:!0,min:-180,max:180}],responseFormat:"OK - coordinates set"},{name:"set_path_hash_mode",description:"Set path hash mode (0, 1, or 2) for routing optimization",category:"Network",params:[{name:"mode",label:"Path Hash Mode",type:"select",description:"Routing path-hash width",required:!0,selectOptions:[{label:"1-Byte (0)",value:0},{label:"2-Byte (1)",value:1},{label:"3-Byte (2)",value:2}]}]},{name:"set_flood_max",description:"Set maximum flood hops (network-wide broadcast limit)",category:"Network",params:[{name:"val",type:"number",description:"Maximum number of hops for flood messages",required:!0,min:0,max:64}],responseFormat:"OK - flood max set to {val}"},{name:"send_advert",description:"Send a local or flood advertisement",category:"Network",params:[{name:"flood",type:"boolean",description:"True for flood advert, false for local-only",required:!1,default:!1}],responseFormat:"Advertisement sent"},{name:"get_stats_core",description:"Get core mesh statistics (messages, packets, routing)",category:"Statistics",responseFormat:"Core statistics including message counts and routing info"},{name:"get_stats_radio",description:"Get radio statistics (TX/RX counts, errors, signal quality)",category:"Statistics",responseFormat:"Radio statistics including TX/RX packet counts and error rates"},{name:"get_stats_packets",description:"Get detailed packet statistics",category:"Statistics",responseFormat:"Packet-level statistics"},{name:"set_custom_var",description:"Set a custom variable (sensor data)",category:"Advanced",params:[{name:"key",type:"string",description:"Variable name",required:!0},{name:"value",type:"string",description:"Variable value",required:!0}],responseFormat:"OK - variable set"},{name:"get_custom_vars",description:"Get all custom variables",category:"Advanced",responseFormat:"Dictionary of all custom variables"},{name:"set_tuning",description:"Set timing parameters (RX delay and airtime factor)",category:"Advanced",params:[{name:"rx_dly",type:"number",description:"RX delay base",required:!0},{name:"af",type:"number",description:"Airtime factor",required:!0}]},{name:"set_name",description:"Set device name",category:"Device Info",dangerous:!0,dangerMessage:"Changing the device name will change all entity IDs. Automations, scripts, and dashboards using current entity IDs will need to be updated.",params:[{name:"name",type:"string",description:"New device name",required:!0}],responseFormat:"OK - name set to {name}"},{name:"set_multi_acks",description:"Enable or disable multi-ack mode",category:"Advanced",params:[{name:"multi_acks",label:"Multi-Acks",type:"boolean",description:"Enable multi-acks",required:!0,default:!1}]},{name:"set_advert_loc_policy",description:"Set location advertisement policy",category:"Network",params:[{name:"advert_loc_policy",label:"Location Ad Policy",type:"select",description:"How this node shares its location in adverts",required:!0,selectOptions:[{label:"None (0)",value:0},{label:"Share — Live GPS (1)",value:1},{label:"Saved Prefs (2)",value:2}]}]},{name:"set_manual_add_contacts",description:"Set manual contact adding mode",category:"Advanced",params:[{name:"manual_add_contacts",label:"Manual Add Contacts",type:"boolean",description:"Enable manual contact addition (off = auto-add)",required:!0,default:!1}]},{name:"set_telemetry_mode_base",description:"Set base telemetry mode",category:"Advanced",params:[{name:"telemetry_mode_base",label:"Base Telemetry Mode",type:"select",description:"Who may read base telemetry",required:!0,selectOptions:[{label:"Deny (0)",value:0},{label:"Allow Per Contact Flags (1)",value:1},{label:"Allow All (2)",value:2}]}]},{name:"set_telemetry_mode_loc",description:"Set location telemetry mode",category:"Advanced",params:[{name:"telemetry_mode_loc",label:"Location Telemetry Mode",type:"select",description:"Who may read location telemetry",required:!0,selectOptions:[{label:"Deny (0)",value:0},{label:"Allow Per Contact Flags (1)",value:1},{label:"Allow All (2)",value:2}]}]},{name:"set_telemetry_mode_env",description:"Set environment telemetry mode",category:"Advanced",params:[{name:"telemetry_mode_env",label:"Environment Telemetry Mode",type:"select",description:"Who may read environment telemetry",required:!0,selectOptions:[{label:"Deny (0)",value:0},{label:"Allow Per Contact Flags (1)",value:1},{label:"Allow All (2)",value:2}]}]},{name:"get_channel",description:"Get channel information by index",category:"Advanced",params:[{name:"channel_idx",type:"number",description:"Channel index",required:!0}]},{name:"set_channel",description:"Set channel name and optional secret",category:"Advanced",params:[{name:"channel_idx",type:"number",description:"Channel index",required:!0},{name:"name",type:"string",description:"Channel name (use # prefix for auto-derived key)",required:!0}]},{name:"export_private_key",description:"Export private key (may be disabled by firmware)",category:"Advanced",responseFormat:"Private key in hex format"},{name:"import_private_key",description:"Import private key (reboot required)",category:"Advanced",dangerous:!0,dangerMessage:"Importing a private key changes the device identity and all entity IDs. Automations, scripts, and dashboards using current entity IDs will need to be updated.",params:[{name:"key",type:"string",description:"Private key in hex format",required:!0}]},{name:"sign",description:"Sign data with the device private key",category:"Advanced",params:[{name:"data",type:"string",description:"Data to sign (hex format)",required:!0}]},{name:"send_msg",description:"Send a direct text message to a contact",category:"Messaging",params:[{name:"contact",type:"string",description:"Contact name, public key prefix, or full public key",required:!0},{name:"message",type:"string",description:"Message text",required:!0}]},{name:"send_msg_with_retry",description:"Send a message with automatic retry and path reset",category:"Messaging",params:[{name:"contact",type:"string",description:"Contact name, public key prefix, or full public key",required:!0},{name:"message",type:"string",description:"Message text",required:!0}]},{name:"send_chan_msg",description:"Send a message to a channel (group message)",category:"Messaging",params:[{name:"channel",type:"number",description:"Channel index",required:!0},{name:"message",type:"string",description:"Message text",required:!0}]},{name:"send_cmd",description:"Send a CLI command to a remote node over the mesh",category:"Messaging",params:[{name:"contact",type:"string",description:"Contact name, public key prefix, or full public key",required:!0},{name:"command",type:"string",description:"CLI command to execute on remote node",required:!0}]},{name:"send_login",description:"Login to a remote node with admin password",category:"Messaging",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"password",type:"string",description:"Admin password",required:!0}]},{name:"send_logout",description:"Logout from a remote node",category:"Messaging",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"send_statusreq",description:"Request status from a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"send_telemetry_req",description:"Request telemetry data from a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"send_path_discovery",description:"Initiate path discovery to a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_status_sync",description:"Request status from a node (synchronous)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_telemetry_sync",description:"Request telemetry data from a node (synchronous)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_mma_sync",description:"Request min/max/avg statistics for a time range",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"start",type:"number",description:"Start time (epoch seconds)",required:!0},{name:"end",type:"number",description:"End time (epoch seconds)",required:!0}]},{name:"req_acl_sync",description:"Request access control list from a node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_neighbours_sync",description:"Request neighbor list from a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"fetch_all_neighbours",description:"Fetch complete neighbor list with pagination",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_regions_sync",description:"Request region information from a node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_owner_sync",description:"Request owner information (name and description)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_basic_sync",description:"Request basic node information",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"get_contacts",description:"Retrieve all known contacts from the device",category:"Advanced",params:[{name:"lastmod",type:"number",description:"Only get contacts modified since this timestamp (optional)",required:!1}]},{name:"reset_path",description:"Reset routing path to flood for a contact",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"share_contact",description:"Share a contact info on the mesh",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"export_contact",description:"Export a contact card (or self if no contact specified)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key (optional, defaults to self)",required:!1}]},{name:"import_contact",description:"Import a contact card",category:"Advanced",params:[{name:"card_data",type:"string",description:"Contact card data (hex encoded)",required:!0}]},{name:"remove_contact",description:"Remove a contact from the list",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"update_contact",description:"Update contact routing path and flags",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"path",type:"string",description:"Routing path (hex string)",required:!0},{name:"flags",type:"string",description:"Contact flags",required:!0}]},{name:"add_contact",description:"Add a contact to the list",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"change_contact_path",description:"Change a contact routing path",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"path",type:"number",description:"New path (integer)",required:!0}]},{name:"change_contact_flags",description:"Change a contact flags",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"flags",type:"number",description:"New flags (integer)",required:!0}]},{name:"set_autoadd_config",description:"Configure auto-add behavior for new contacts",category:"Advanced",params:[{name:"flag",label:"Auto-Add Config",type:"bitmask",description:"Which contact types to auto-add, plus overwrite-oldest policy",required:!0,bits:dv}]},{name:"get_autoadd_config",description:"Get current auto-add configuration",category:"Advanced"},{name:"send_binary_req",description:"Send a raw binary request to a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"req_type",type:"number",description:"Binary request type",required:!0}]},{name:"set_flood_scope",description:"Set flood scope filter for broadcast messages",category:"Network",params:[{name:"scope",type:"string",description:"Flood scope (int, string, or hex)",required:!0}]},{name:"set_default_flood_scope",description:"Set the persistent default flood scope used when no per-message scope is set (v1.15.0+)",category:"Network",params:[{name:"scope",type:"string",description:'Channel/region name (e.g. "public"), or empty / "*" / "0" / "None" to clear',required:!0}],responseFormat:"OK"},{name:"get_default_flood_scope",description:"Get the persistent default flood scope (v1.15.0+)",category:"Network",responseFormat:"Scope name + 16-byte key, or null if unset"},{name:"send_control_data",description:"Send raw control data packet to the mesh",category:"Advanced",params:[{name:"control_type",type:"number",description:"Control data type",required:!0},{name:"payload",type:"string",description:"Payload data (hex encoded)",required:!0}]},{name:"send_node_discover_req",description:"Broadcast node discovery request",category:"Network",params:[{name:"filter",type:"number",description:"Discovery filter",required:!0},{name:"prefix_only",type:"boolean",description:"Only use public key prefix for matching",required:!1,default:!1}]},{name:"get_msg",description:"Retrieve pending incoming messages",category:"Messaging",params:[{name:"timeout",type:"number",description:"Timeout in seconds to wait for messages (optional)",required:!1,default:5}]},{name:"send_trace",description:"Send a trace packet through specific repeaters",category:"Advanced",params:[{name:"auth_code",type:"number",description:"Authentication code",required:!0},{name:"tag",type:"number",description:"Trace tag",required:!0},{name:"flags",type:"number",description:"Trace flags",required:!0},{name:"path",type:"string",description:"Optional repeater path (hex encoded)",required:!1}]}],pv=[{name:"reboot",description:"Restart the remote device",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"poweroff",description:"Power off the remote device (v1.14.1+)",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"shutdown",description:"Power off the remote device (alias for poweroff)",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"clkreboot",description:"Reset clock to May 2024 and reboot",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"get name",description:"Get device name",category:"Device Info",responseFormat:"> Device name string",remoteOnly:!0},{name:"get radio",description:"Get radio parameters (frequency, bandwidth, spreading factor, coding rate)",category:"Radio Settings",responseFormat:"> freq,bw,sf,cr (example: 906.875,250.000,11,5)",remoteOnly:!0},{name:"get freq",description:"Get frequency only",category:"Radio Settings",responseFormat:"> frequency in MHz (example: 906.875)",remoteOnly:!0},{name:"get tx",description:"Get transmit power",category:"Radio Settings",responseFormat:"> TX power in dBm (example: 17)",remoteOnly:!0},{name:"get af",description:"Get airtime factor",category:"Radio Settings",responseFormat:"> airtime factor value",remoteOnly:!0},{name:"get dutycycle",description:"Get TX duty cycle as a percentage (v1.15.0+)",category:"Radio Settings",responseFormat:"> NN.N%   (example: > 33.3%)",remoteOnly:!0},{name:"get lat",description:"Get latitude coordinate",category:"Location",responseFormat:"> latitude as float (example: 45.123456)",remoteOnly:!0},{name:"get lon",description:"Get longitude coordinate",category:"Location",responseFormat:"> longitude as float (example: -122.654321)",remoteOnly:!0},{name:"get repeat",description:"Get forwarding/repeating status",category:"Network",responseFormat:"> on or off",remoteOnly:!0},{name:"get rxdelay",description:"Get RX delay base",category:"Advanced",responseFormat:"> RX delay value",remoteOnly:!0},{name:"get txdelay",description:"Get TX delay factor",category:"Advanced",responseFormat:"> TX delay value",remoteOnly:!0},{name:"get direct.txdelay",description:"Get direct TX delay factor",category:"Advanced",responseFormat:"> Direct TX delay value",remoteOnly:!0},{name:"get flood.max",description:"Get maximum flood hops",category:"Network",responseFormat:"> max hops value (example: 8)",remoteOnly:!0},{name:"get flood.max.unscoped",description:"Get max flood hops for un-scoped packets (v1.16.0+)",category:"Network",responseFormat:"> max hops value (example: 64)",remoteOnly:!0},{name:"get flood.max.advert",description:"Get max flood hops for adverts (v1.16.0+)",category:"Network",responseFormat:"> max hops value (example: 8)",remoteOnly:!0},{name:"get advert.interval",description:"Get local advertisement interval (minutes)",category:"Network",responseFormat:"> interval in minutes (example: 120)",remoteOnly:!0},{name:"get flood.advert.interval",description:"Get flood advertisement interval (hours)",category:"Network",responseFormat:"> interval in hours (example: 47; firmware default 47 since v1.16.0)",remoteOnly:!0},{name:"get int.thresh",description:"Get interference threshold",category:"Advanced",responseFormat:"> threshold value",remoteOnly:!0},{name:"get agc.reset.interval",description:"Get AGC (automatic gain control) reset interval",category:"Advanced",responseFormat:"> interval value",remoteOnly:!0},{name:"get multi.acks",description:"Get multi-acks setting",category:"Advanced",responseFormat:"> multi-acks value (0 or 1)",remoteOnly:!0},{name:"get allow.read.only",description:"Get read-only access permission setting",category:"Advanced",responseFormat:"> on or off",remoteOnly:!0},{name:"get guest.password",description:"Get guest password",category:"Advanced",responseFormat:"> password string",remoteOnly:!0},{name:"get public.key",description:"Get full public key (hex)",category:"Device Info",responseFormat:"> hex-encoded public key (example: a6ec829f...d9b70772)",remoteOnly:!0},{name:"get role",description:"Get device role",category:"Device Info",responseFormat:"> repeater or client",remoteOnly:!0},{name:"get owner.info",description:"Get owner information text",category:"Device Info",responseFormat:"> owner info string (with | for newlines)",remoteOnly:!0},{name:"get adc.multiplier",description:"Get ADC voltage multiplier",category:"Advanced",responseFormat:"> multiplier value",remoteOnly:!0},{name:"get path.hash.mode",description:"Get path hash mode (v1.14.0+)",category:"Network",responseFormat:"> mode: 0, 1, or 2",remoteOnly:!0},{name:"get loop.detect",description:"Get loop detection level (v1.14.0+)",category:"Network",responseFormat:"> off, minimal, moderate, or strict",remoteOnly:!0},{name:"get bootloader.ver",description:"Get bootloader version (NRF52 only, v1.14.0+)",category:"Device Info",responseFormat:"> bootloader version string",remoteOnly:!0},{name:"get radio.rxgain",description:"Get RX boosted gain mode (SX1262/SX1268; also LR1110 v1.16.0+)",category:"Radio Settings",responseFormat:"> on or off",remoteOnly:!0},{name:"get bridge.type",description:"Get bridge hardware type",category:"Advanced",responseFormat:"> none, rs232, or espnow",remoteOnly:!0},{name:"set name",description:"Set device name",category:"Device Info",params:[{name:"name",type:"string",description:"New name (no special characters: []\\:,?*)",required:!0}],responseFormat:"OK - name changed",remoteOnly:!0},{name:"set af",description:"Set airtime factor",category:"Radio Settings",params:[{name:"val",type:"number",description:"Airtime factor (0-9)",required:!0,min:0,max:9}],responseFormat:"OK - airtime factor set",remoteOnly:!0},{name:"set dutycycle",description:"Set TX duty cycle as a percentage (v1.15.0+, alias for set af)",category:"Radio Settings",params:[{name:"pct",type:"number",description:"Duty cycle percentage (1-100). Firmware converts to airtime_factor = (100/pct) - 1.",required:!0,min:1,max:100}],responseFormat:"OK - NN.N%",remoteOnly:!0},{name:"set repeat",description:"Enable or disable packet forwarding/repeating",category:"Network",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - forwarding enabled/disabled",remoteOnly:!0},{name:"set radio",description:"Set radio parameters (reboot required to take effect)",category:"Radio Settings",params:[{name:"params",type:"string",description:"Comma-separated: freq,bw,sf,cr (example: 906.875,250.000,11,5)",required:!0}],responseFormat:"OK - radio parameters set (reboot required)",remoteOnly:!0},{name:"set lat",description:"Set latitude coordinate",category:"Location",params:[{name:"val",type:"number",description:"Latitude (-90 to 90)",required:!0,min:-90,max:90}],responseFormat:"OK - latitude set",remoteOnly:!0},{name:"set lon",description:"Set longitude coordinate",category:"Location",params:[{name:"val",type:"number",description:"Longitude (-180 to 180)",required:!0,min:-180,max:180}],responseFormat:"OK - longitude set",remoteOnly:!0},{name:"set tx",description:"Set transmit power",category:"Radio Settings",params:[{name:"val",type:"number",description:"TX power in dBm",required:!0,min:-9,max:22}],responseFormat:"OK - TX power set",remoteOnly:!0},{name:"set rxdelay",description:"Set RX delay base",category:"Advanced",params:[{name:"val",type:"number",description:"RX delay base in seconds (0-20, v1.16.0+ upper bound)",required:!0,min:0,max:20}],responseFormat:"OK - RX delay set",remoteOnly:!0},{name:"set txdelay",description:"Set TX delay factor",category:"Advanced",params:[{name:"val",type:"number",description:"TX delay factor (0-2, v1.16.0+ upper bound)",required:!0,min:0,max:2}],responseFormat:"OK - TX delay set",remoteOnly:!0},{name:"set direct.txdelay",description:"Set direct TX delay factor",category:"Advanced",params:[{name:"val",type:"number",description:"Direct TX delay factor (0-2, v1.16.0+ upper bound)",required:!0,min:0,max:2}],responseFormat:"OK - direct TX delay set",remoteOnly:!0},{name:"set flood.max",description:"Set maximum flood hops",category:"Network",params:[{name:"val",type:"number",description:"Max hops (0-64)",required:!0,min:0,max:64}],responseFormat:"OK - flood max set",remoteOnly:!0},{name:"set flood.max.unscoped",description:"Set max flood hops for un-scoped packets (v1.16.0+)",category:"Network",params:[{name:"val",type:"number",description:"Max hops (0-64)",required:!0,min:0,max:64}],responseFormat:"OK",remoteOnly:!0},{name:"set flood.max.advert",description:"Set max flood hops for adverts (v1.16.0+)",category:"Network",params:[{name:"val",type:"number",description:"Max hops (0-64)",required:!0,min:0,max:64}],responseFormat:"OK",remoteOnly:!0},{name:"set advert.interval",description:"Set local advertisement interval (minutes)",category:"Network",params:[{name:"val",type:"number",description:"Interval in minutes (60-240, or 0 to disable)",required:!0,min:0,max:240}],responseFormat:"OK - advert interval set",remoteOnly:!0},{name:"set flood.advert.interval",description:"Set flood advertisement interval (hours)",category:"Network",params:[{name:"val",type:"number",description:"Interval in hours (3-168, or 0 to disable)",required:!0,min:0,max:168}],responseFormat:"OK - flood advert interval set",remoteOnly:!0},{name:"set int.thresh",description:"Set interference threshold",category:"Advanced",params:[{name:"val",type:"number",description:"Threshold value",required:!0}],responseFormat:"OK - interference threshold set",remoteOnly:!0},{name:"set agc.reset.interval",description:"Set AGC (automatic gain control) reset interval",category:"Advanced",params:[{name:"val",type:"number",description:"Interval value",required:!0}],responseFormat:"OK - AGC reset interval set",remoteOnly:!0},{name:"set multi.acks",description:"Set multi-acks mode",category:"Advanced",params:[{name:"val",label:"Multi-Acks",type:"select",description:"Enable multi-acks",required:!0,selectOptions:[{label:"On (1)",value:1},{label:"Off (0)",value:0}]}],responseFormat:"OK - multi-acks set",remoteOnly:!0},{name:"set allow.read.only",description:"Set read-only access permission",category:"Advanced",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - read-only access updated",remoteOnly:!0},{name:"set guest.password",description:"Set guest password",category:"Advanced",params:[{name:"pwd",type:"string",description:"New guest password",required:!0}],responseFormat:"OK - guest password set",remoteOnly:!0},{name:"set prv.key",description:"Import private key (reboot required, serial-only)",category:"Advanced",params:[{name:"hex",type:"string",description:"64-character hex private key",required:!0}],responseFormat:"OK - private key imported (reboot required)",remoteOnly:!0},{name:"set owner.info",description:"Set owner information text",category:"Device Info",params:[{name:"text",type:"string",description:"Owner info (use | for newlines)",required:!0}],responseFormat:"OK - owner info set",remoteOnly:!0},{name:"set adc.multiplier",description:"Set ADC voltage multiplier",category:"Advanced",params:[{name:"val",type:"number",description:"Multiplier value (0-10, 0 = board default)",required:!0,min:0,max:10}],responseFormat:"OK - ADC multiplier set",remoteOnly:!0},{name:"set path.hash.mode",description:"Set path hash mode for routing (v1.14.0+)",category:"Network",params:[{name:"mode",label:"Path Hash Mode",type:"select",description:"Routing path-hash width",required:!0,selectOptions:[{label:"1-Byte (0)",value:0},{label:"2-Byte (1)",value:1},{label:"3-Byte (2)",value:2}]}],responseFormat:"OK - path hash mode set",remoteOnly:!0},{name:"set loop.detect",description:"Set loop detection level (v1.14.0+)",category:"Network",params:[{name:"mode",type:"select",description:"Mode: off, minimal, moderate, or strict",required:!0,options:["off","minimal","moderate","strict"]}],responseFormat:"OK - loop detection set",remoteOnly:!0},{name:"set radio.rxgain",description:"Set RX boosted gain mode (SX1262/SX1268; also LR1110 v1.16.0+)",category:"Radio Settings",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - RX gain mode set",remoteOnly:!0},{name:"set bridge.enabled",description:"Enable or disable the bridge interface",category:"Advanced",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - bridge enabled/disabled",remoteOnly:!0},{name:"set bridge.delay",description:"Set bridge packet delay",category:"Advanced",params:[{name:"ms",type:"number",description:"Delay in milliseconds (0-10000)",required:!0,min:0,max:1e4}],responseFormat:"OK - bridge delay set",remoteOnly:!0},{name:"set bridge.source",description:"Set bridge packet source (RX or TX logs)",category:"Advanced",params:[{name:"source",type:"select",description:"Source: rx (logRx) or tx (logTx)",required:!0,options:["rx","tx"]}],responseFormat:"OK - bridge source set",remoteOnly:!0},{name:"set bridge.baud",description:"Set RS232 bridge baud rate",category:"Advanced",params:[{name:"rate",type:"number",description:"Baud rate (9600-115200, board-dependent max)",required:!0,min:9600}],responseFormat:"OK - bridge baud rate set",remoteOnly:!0},{name:"set bridge.channel",description:"Set ESP-NOW bridge channel",category:"Advanced",params:[{name:"ch",type:"number",description:"Channel (1-14)",required:!0,min:1,max:14}],responseFormat:"OK - bridge channel set",remoteOnly:!0},{name:"set bridge.secret",description:"Set ESP-NOW bridge shared secret",category:"Advanced",params:[{name:"key",type:"string",description:"Shared secret string",required:!0}],responseFormat:"OK - bridge secret set",remoteOnly:!0},{name:"ver",description:"Get firmware version and build date",category:"Device Info",responseFormat:"<version> (Build: <date>)",remoteOnly:!0},{name:"board",description:"Get board/manufacturer name",category:"Device Info",responseFormat:"Board name string",remoteOnly:!0},{name:"neighbors",description:"List known neighbor nodes",category:"Network",responseFormat:"Formatted neighbor list",remoteOnly:!0},{name:"neighbor.remove",description:"Remove a neighbor by public key",category:"Network",params:[{name:"pubkey",type:"string",description:"Public key hex string of neighbor to remove",required:!0}],responseFormat:"OK - neighbor removed",remoteOnly:!0},{name:"clock",description:"Get current device time",category:"Device Info",responseFormat:"HH:MM - D/M/Y UTC",remoteOnly:!0},{name:"clock sync",description:"Synchronize clock to sender's timestamp",category:"Device Info",responseFormat:"OK - clock set: HH:MM - D/M/Y UTC",remoteOnly:!0},{name:"time",description:"Set time to epoch seconds",category:"Device Info",params:[{name:"epoch",type:"number",description:"Unix epoch timestamp",required:!0}],responseFormat:"OK - clock set: HH:MM - D/M/Y UTC",remoteOnly:!0},{name:"password",description:"Change admin password (requires prior login)",category:"Advanced",params:[{name:"pwd",type:"string",description:"New admin password",required:!0}],responseFormat:"password now: <pwd>",remoteOnly:!0},{name:"advert",description:"Send a flood advertisement (network-wide broadcast)",category:"Network",responseFormat:"OK - Advert sent",remoteOnly:!0},{name:"advert.zerohop",description:"Send a local-only (zero-hop) advertisement (v1.14.0+)",category:"Network",responseFormat:"OK - zerohop advert sent",remoteOnly:!0},{name:"clear stats",description:"Reset all statistics counters",category:"Advanced",responseFormat:"OK - stats reset",remoteOnly:!0},{name:"log start",description:"Start packet logging",category:"Advanced",responseFormat:"logging on",remoteOnly:!0},{name:"log stop",description:"Stop packet logging",category:"Advanced",responseFormat:"logging off",remoteOnly:!0},{name:"log erase",description:"Erase log file",category:"Advanced",responseFormat:"log erased",remoteOnly:!0},{name:"powersaving",description:"Get power saving status (NRF52 only)",category:"Device Info",responseFormat:"on or off",remoteOnly:!0},{name:"powersaving on",description:"Enable power saving mode (NRF52 only)",category:"Device Info",responseFormat:"ok",remoteOnly:!0},{name:"powersaving off",description:"Disable power saving mode (NRF52 only)",category:"Device Info",responseFormat:"ok",remoteOnly:!0},{name:"start ota",description:"Enter Bluetooth OTA update mode (repeater-only)",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"tempradio",description:"Temporarily override radio parameters for a duration",category:"Radio Settings",params:[{name:"freq",type:"number",description:"Temporary frequency in MHz",required:!0},{name:"bw",type:"number",description:"Temporary bandwidth in kHz",required:!0},{name:"sf",type:"number",description:"Temporary spreading factor (5-12)",required:!0},{name:"cr",type:"number",description:"Temporary coding rate (5-8)",required:!0},{name:"mins",type:"number",description:"Duration in minutes",required:!0}],responseFormat:"OK - temp params for N mins",remoteOnly:!0},{name:"region",description:"Export the device region map (v1.15.0+)",category:"Regions",responseFormat:"Comma-separated region list (up to 160 chars)",remoteOnly:!0},{name:"region def",description:"Bulk-define the region map in one command (v1.16.0+)",category:"Regions",params:[{name:"spec",type:"string",description:"Space-separated region tokens; each is name, name|jump, or name,jump (| or , redirects nesting to the jump region). Example: socal cencal|socal norcal",required:!0}],responseFormat:'Exported region map, or "Err - <reason>"',remoteOnly:!0},{name:"region load",description:"Reload regions from persistent storage (v1.15.0+)",category:"Regions",remoteOnly:!0},{name:"region save",description:"Persist current region map to storage (v1.15.0+)",category:"Regions",responseFormat:'OK or "Err - save failed"',remoteOnly:!0},{name:"region get",description:"Show one region (name, parent, allow/deny-flood flag) (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (prefix match)",required:!0}],responseFormat:" <name> [(parent)] [F]   (F = flood allowed)",remoteOnly:!0},{name:"region put",description:"Create a region (flood allowed by default) (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name",required:!0},{name:"parent",type:"string",description:"Parent region name (optional, defaults to wildcard)",required:!1}],responseFormat:"OK - (flood allowed)",remoteOnly:!0},{name:"region remove",description:"Remove a region (must be empty) (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (exact match)",required:!0}],responseFormat:'OK / "Err - not empty" / "Err - not found"',remoteOnly:!0},{name:"region list",description:"List regions filtered by flood permission (v1.15.0+)",category:"Regions",params:[{name:"filter",type:"select",description:"allowed = flood-permitted regions; denied = flood-blocked regions",required:!0,options:["allowed","denied"]}],remoteOnly:!0},{name:"region home",description:"Get (no arg) or set (with arg) the home region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Leave empty to read current home; provide a region name (prefix match) to set",required:!1}],responseFormat:" home is [now] <name>",remoteOnly:!0},{name:"region default",description:"Get (no arg) or set (with arg) the default flood scope region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Leave empty to read current default; provide a region name to set, or <null> to clear",required:!1}],responseFormat:" default scope is [now] <name|<null>>",remoteOnly:!0},{name:"region allowf",description:"Allow flood for a region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (prefix match)",required:!0}],responseFormat:"OK",remoteOnly:!0},{name:"region denyf",description:"Deny flood for a region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (prefix match)",required:!0}],responseFormat:"OK",remoteOnly:!0}];var uv;let mv=uv=class extends Lp{constructor(){super(),this.open=!1,this.isLocal=!1,this.narrow=!1,this.nodeName="",this._selectedCommand=null,this._paramValues={},this._response=null,this._executing=!1,this._error=null,this._deviceResponses=[],this._unsubMsg=null,this._feedActive=!1,this._feedSince=0,fm(this,{isOpen:()=>this.open,onEscape:()=>this._onClose()})}_getCommands(){return this.isLocal?hv:pv}_getGroupedCommands(){const e=this._getCommands(),t=new Map;for(const o of e)t.has(o.category)||t.set(o.category,[]),t.get(o.category).push(o);return t}render(){if(!this.open)return;const e=this._getGroupedCommands();return bp(Zs||(Zs=Sc`
      <div
        class="dialog-overlay"
        @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label=${0}>
          <div class="dialog-header">
            <div style="flex: 1;">
              <div class="dialog-header-title">${0}</div>
              ${0}
            </div>
          </div>
          <div class="dialog-body">
            <!-- Command Selection -->
            <div class="form-group">
              <label class="form-label">${0}</label>
              <select
                class="command-select"
                @change=${0}>
                <option value="">-- Select a command --</option>
                ${0}
              </select>
            </div>

            <!-- Command Details -->
            ${0}

            <!-- Live Device Response Feed (remote dialogs only) -->
            ${0}
          </div>
          <div class="dialog-footer">
            <button
              class="dialog-button"
              @click=${0}>
              ${0}
            </button>
          </div>
        </div>
      </div>
    `),this._onOverlayClick,uh("Issue command"),uh("Issue Command"),this.targetPrefix?bp(Js||(Js=Sc`<div style="font-size: 12px; color: var(--secondary-text-color); margin-top: 4px;">
                    ${0}
                  </div>`),uh("Target: {target}",{target:this.targetPrefix})):"",uh("Command"),this._onCommandSelected,Array.from(e.entries()).map(([e,t])=>bp(ea||(ea=Sc`<optgroup label=${0}>
                      ${0}
                    </optgroup>`),e,t.map(e=>bp(ta||(ta=Sc`<option value=${0}>
                            ${0} - ${0}
                          </option>`),e.name,e.name,e.description)))),this._selectedCommand?bp(oa||(oa=Sc`
                  <div class="command-description">
                    <strong>${0}</strong><br />
                    ${0}
                  </div>

                  ${0}

                  <!-- Parameters -->
                  ${0}

                  <!-- Expected Response -->
                  ${0}

                  <!-- Execute Button -->
                  <button
                    class="apply-button"
                    style="width: 100%; margin-top: 12px;"
                    ?disabled=${0}
                    @click=${0}>
                    ${0}
                  </button>

                  <!-- Response Display -->
                  ${0}
                `),this._selectedCommand.name,this._selectedCommand.description,this._selectedCommand.dangerous?bp(ia||(ia=Sc`<div class="danger-warning">
                        <span class="danger-warning-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg></span>
                        <span>${0}</span>
                      </div>`),this._selectedCommand.dangerMessage||uh("This is a dangerous operation")):"",this._selectedCommand.params&&this._selectedCommand.params.length>0?bp(ra||(ra=Sc`
                        <div class="command-params">
                          <label class="form-label">${0}</label>
                          ${0}
                        </div>
                      `),uh("Parameters"),this._selectedCommand.params.map(e=>this._renderParamInput(e))):"",this._selectedCommand.responseFormat?bp(sa||(sa=Sc`<div style="margin-top: 12px; font-size: 12px; color: var(--secondary-text-color); font-style: italic;">
                        ${0}
                      </div>`),uh("Expected: {format}",{format:this._selectedCommand.responseFormat})):"",this._executing,this._executeCommand,this._executing?uh("Executing..."):uh("Execute"),this._response||this._error?bp(aa||(aa=Sc`
                        <div class="form-group" style="margin-top: 16px;">
                          <label class="form-label">${0}</label>
                          <div
                            class="command-response"
                            style=${0}>
                            ${0}
                          </div>
                        </div>
                      `),uh("Response"),this._error?"color: var(--error-color, #db4437);":"",this._error?this._error:this._renderFormattedResponse(this._response)):""):"",!this.isLocal&&this._deviceResponses.length>0?bp(na||(na=Sc`
                  <div class="form-group" style="margin-top: 16px;">
                    <label class="form-label">${0}</label>
                    <div class="device-response-feed">
                      ${0}
                    </div>
                  </div>
                `),uh("Responses from device"),this._deviceResponses.map(e=>bp(la||(la=Sc`<div class="device-response-row">
                          <span class="drr-time">${0}</span><span class="drr-text">${0}</span>${0}
                        </div>`),new Date(e.ts).toLocaleTimeString(hh()),e.text,void 0!==e.snr?bp(da||(da=Sc`<span class="drr-snr"> · SNR ${0}</span>`),e.snr):""))):"",this._onClose,uh("Close"))}_renderParamInput(e){var t,o,i;const r=null!==(t=null!==(o=this._paramValues[e.name])&&void 0!==o?o:e.default)&&void 0!==t?t:"",s=null!==(i=e.label)&&void 0!==i?i:e.name;switch(e.type){case"boolean":return bp(ca||(ca=Sc`
          <div class="form-group">
            <label class="form-toggle">
              <input
                type="checkbox"
                ?checked=${0}
                @change=${0}
              />
              <span class="form-toggle-label">${0}</span>
            </label>
            ${0}
          </div>
        `),!!r,t=>{this._paramValues[e.name]=t.target.checked},s,e.description?bp(ha||(ha=Sc`<div class="form-description">${0}</div>`),e.description):"");case"select":{const t=e.selectOptions?e.selectOptions:(e.options||[]).map(e=>({label:e,value:e}));return bp(pa||(pa=Sc`
          <div class="form-group">
            <label class="form-label">${0}</label>
            <select
              class="form-select"
              @change=${0}>
              <option value="" ?selected=${0}>-- Select --</option>
              ${0}
            </select>
            ${0}
          </div>
        `),s,o=>{const i=o.target.value,r=t.find(e=>String(e.value)===i);this._paramValues[e.name]=r?r.value:i},""===r||void 0===r,t.map(e=>bp(ua||(ua=Sc`<option value=${0} ?selected=${0}>${0}</option>`),String(e.value),String(r)===String(e.value),e.label)),e.description?bp(ma||(ma=Sc`<div class="form-description">${0}</div>`),e.description):"")}case"bitmask":var a,n;return bp(ga||(ga=Sc`
          <fieldset class="form-group">
            <legend class="form-label">${0}</legend>
            ${0}
            <div class="form-description">Value: ${0}</div>
            ${0}
          </fieldset>
        `),s,(e.bits||[]).map(t=>{var o,i;const r=Number(null!==(o=null!==(i=this._paramValues[e.name])&&void 0!==i?i:e.default)&&void 0!==o?o:0);return bp(va||(va=Sc`
                <label class="form-toggle">
                  <input
                    type="checkbox"
                    ?checked=${0}
                    @change=${0}
                  />
                  <span class="form-toggle-label">${0}</span>
                </label>
              `),(r&t.value)===t.value,o=>{var i,r;const s=o.target.checked,a=Number(null!==(i=null!==(r=this._paramValues[e.name])&&void 0!==r?r:e.default)&&void 0!==i?i:0);this._paramValues[e.name]=s?a|t.value:a&~t.value,this.requestUpdate()},t.label)}),Number(null!==(a=null!==(n=this._paramValues[e.name])&&void 0!==n?n:e.default)&&void 0!==a?a:0),e.description?bp(fa||(fa=Sc`<div class="form-description">${0}</div>`),e.description):"");case"number":return bp(ya||(ya=Sc`
          <div class="form-group">
            <label class="form-label">${0}</label>
            <input
              type="number"
              class="form-input"
              ?required=${0}
              ?min=${0}
              ?max=${0}
              .value=${0}
              @input=${0}
            />
            ${0}
          </div>
        `),s,e.required,e.min,e.max,String(r),t=>{const o=t.target;this._paramValues[e.name]=o.value?Number(o.value):""},e.description?bp(_a||(_a=Sc`<div class="form-description">${0}</div>`),e.description):"");default:return bp(ba||(ba=Sc`
          <div class="form-group">
            <label class="form-label">${0}</label>
            <input
              type="text"
              class="form-input"
              ?required=${0}
              .value=${0}
              @input=${0}
            />
            ${0}
          </div>
        `),s,e.required,String(r),t=>{this._paramValues[e.name]=t.target.value},e.description?bp(xa||(xa=Sc`<div class="form-description">${0}</div>`),e.description):"")}}_formatValue(e){if(!0===e)return uh("Yes");if(!1===e)return uh("No");if(null==e)return"—";if("object"==typeof e)try{return JSON.stringify(e)}catch(t){return String(e)}return"string"==typeof e&&e.length,String(e)}_renderFormattedResponse(e){try{const t=JSON.parse(e);if(t&&"object"==typeof t&&!Array.isArray(t)){const e=Object.entries(t);if(e.length>0)return bp(wa||(wa=Sc`
            <div style="display: grid; grid-template-columns: auto 1fr; gap: 4px 12px; font-size: 13px;">
              ${0}
            </div>
          `),e.map(([e,t])=>{var o;const i=uh(null!==(o=uv._FRIENDLY_LABELS[e])&&void 0!==o?o:"")||e.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase()),r=uv._VALUE_FORMATTERS[e],s=r?r(t):void 0;if(s&&"object"==typeof s)return bp(ka||(ka=Sc`
                    <div style="grid-column: 1 / -1; color: var(--secondary-text-color);">${0}</div>
                    ${0}
                  `),i,Object.entries(s).map(([e,t])=>bp($a||($a=Sc`
                      <div style="padding-left: 12px; white-space: nowrap;">${0}</div>
                      <div style="font-family: var(--code-font-family, monospace);">${0}</div>`),e,t?"✓":"✗")));const a=void 0!==s?String(s):this._formatValue(t),n="string"==typeof t&&t.length>24;return bp(Ca||(Ca=Sc`
                  <div style="color: var(--secondary-text-color); white-space: nowrap;">${0}</div>
                  <div style="font-family: var(--code-font-family, monospace); word-break: ${0};">${0}</div>
                `),i,n?"break-all":"normal",a)}))}if(Array.isArray(t))return bp(Ba||(Ba=Sc`<pre style="margin: 0; white-space: pre-wrap; font-size: 13px;">${0}</pre>`),JSON.stringify(t,null,2))}catch(e){}return bp(Sa||(Sa=Sc`<span style="white-space: pre-wrap;">${0}</span>`),e)}_onCommandSelected(e){const t=e.target.value,o=this._getCommands();this._selectedCommand=o.find(e=>e.name===t)||null;const i={};for(const e of null!==(r=null===(s=this._selectedCommand)||void 0===s?void 0:s.params)&&void 0!==r?r:[]){var r,s;void 0!==e.default&&(i[e.name]=e.default)}this._paramValues=i,this._response=null,this._error=null}async _executeCommand(){if(this._selectedCommand&&this.hass){this._executing=!0,this._response=null,this._error=null;try{let e;if(this.isLocal)e=await cu(this.hass,this._selectedCommand.name,Object.keys(this._paramValues).length>0?this._paramValues:void 0,this.entryId);else{if(!this.targetPrefix)return void(this._error=uh("No target device specified"));const t=this._paramValues;let o=this._selectedCommand.name;if(Object.keys(t).length>0){const e=Object.entries(t).map(([,e])=>String(e)).join(" ");o=`${o} ${e}`}e=await hu(this.hass,this.targetPrefix,o,this.entryId)}e.success?this._response=e.response:this._error=e.response||uh("Command execution failed")}catch(e){this._error=uh("Error: {error}",{error:String(e)})}finally{this._executing=!1}}}updated(e){(e.has("open")||e.has("targetPrefix")||e.has("isLocal"))&&(this._stopResponseFeed(),this.open&&!this.isLocal&&this._startResponseFeed())}disconnectedCallback(){super.disconnectedCallback(),this._stopResponseFeed()}async _startResponseFeed(){var e;if(!this._feedActive&&!this.isLocal&&this.open&&null!==(e=this.hass)&&void 0!==e&&e.connection){this._feedActive=!0,this._feedSince=Date.now(),this._deviceResponses.length&&(this._deviceResponses=[]);try{const e=await this.hass.connection.subscribeEvents(e=>{var t,o,i;const r=e.data;if(!this._prefixMatches(r.pubkey_prefix))return;if(r.sender_name===this.nodeName)return;const s=Date.parse(null!==(t=r.timestamp)&&void 0!==t?t:"")||Date.now();s<this._feedSince-1e3||(this._deviceResponses=[...this._deviceResponses,{text:null!==(o=r.message)&&void 0!==o?o:"",sender:null!==(i=r.sender_name)&&void 0!==i?i:"",ts:s,snr:"number"==typeof r.snr?r.snr:void 0}])},"meshcore_message");if(!this.open||this.isLocal)return e(),void(this._feedActive=!1);this._unsubMsg=e}catch(e){this._feedActive=!1}}}_stopResponseFeed(){this._unsubMsg&&(this._unsubMsg(),this._unsubMsg=null),this._feedActive=!1}_prefixMatches(e){if(!e||!this.targetPrefix)return!1;const t=Math.min(e.length,this.targetPrefix.length,12);return e.slice(0,t).toLowerCase()===this.targetPrefix.slice(0,t).toLowerCase()}_onOverlayClick(e){e.target===e.currentTarget&&this._onClose()}_onClose(){this._selectedCommand=null,this._paramValues={},this._response=null,this._error=null,this._stopResponseFeed(),this._deviceResponses=[],this.dispatchEvent(new CustomEvent("close",{bubbles:!0}))}};function gv(e){var t,o,i;const r=e.entity_id,s=null!==(t=null!==(o=null!==(i=e.original_device_class)&&void 0!==i?i:e.device_class)&&void 0!==o?o:e._stateDeviceClass)&&void 0!==t?t:null;if(r.startsWith("binary_sensor.meshcore_")&&/_err_(pool_full|cad_timeout|rx_timeout)_/.test(r)){const e=r.includes("err_pool_full")?"Radio Fault: Packet Pool":r.includes("err_cad_timeout")?"Radio Fault: CAD Timeout":"Radio Fault: RX-Start Timeout";return{entity_id:r,label:e,icon:"alert",colorScheme:"neutral",sortOrder:13,booleanProblem:!0}}if(r.startsWith("binary_sensor.meshcore_")&&"connectivity"===s)return null;if(r.startsWith("binary_sensor.meshcore_"))return null;if(r.includes("_rate_"))return null;if(r.includes("full_evts"))return null;if(r.includes("node_status")||r.includes("companion_prefix")||r.includes("request_rate")||r.includes("delivery")||r.includes("path_")||r.includes("neighbor_"))return null;if("battery"===s||r.includes("battery_percentage"))return{entity_id:r,label:"Battery",icon:"battery",colorScheme:"battery",sortOrder:1,metricKey:"battery_pct"};if("voltage"===s||r.includes("battery_voltage")||r.includes("_voltage")||r.includes("cv_voltage"))return{entity_id:r,label:"Voltage",icon:"power",colorScheme:"neutral",sortOrder:2};if("duration"===s||r.includes("uptime"))return{entity_id:r,label:"Uptime",icon:"clock",colorScheme:"neutral",sortOrder:3,metricKey:"uptime_hours"};if("signal_strength"===s||r.includes("tx_power"))return{entity_id:r,label:"TX Power",icon:"power",colorScheme:"neutral",sortOrder:6};if("temperature"===s||r.includes("_temperature"))return{entity_id:r,label:"Temperature",icon:"thermometer",colorScheme:"neutral",sortOrder:7,metricKey:"temperature",staticTooltip:"Ambient temperature reported by the node. Informational; no threshold band -- expected ranges depend heavily on where the device is mounted."};if(r.includes("rx_airtime_utilization"))return{entity_id:r,label:"RX Airtime Util",icon:"chart",colorScheme:"neutral",sortOrder:10,metricKey:"rx_airtime_util"};if(r.includes("airtime_utilization"))return{entity_id:r,label:"TX Airtime Util",icon:"chart",colorScheme:"neutral",sortOrder:10,metricKey:"tx_airtime_util"};if(r.includes("rx_airtime"))return{entity_id:r,label:"RX Airtime",icon:"chart",colorScheme:"neutral",sortOrder:9};if(r.includes("airtime"))return{entity_id:r,label:"Airtime",icon:"chart",colorScheme:"neutral",sortOrder:9};if(r.includes("snr")&&!r.includes("neighbor"))return{entity_id:r,label:"SNR",icon:"signal",colorScheme:"signal",sortOrder:4,metricKey:"snr"};if(r.includes("rssi"))return{entity_id:r,label:"RSSI",icon:"signal",colorScheme:"signal",sortOrder:5,metricKey:"rssi"};if(r.includes("noise_floor"))return{entity_id:r,label:"Noise Floor",icon:"signal",colorScheme:"signal",sortOrder:11,metricKey:"noise_floor"};if(r.includes("tx_queue_len"))return{entity_id:r,label:"TX Queue Length",icon:"counter",colorScheme:"neutral",sortOrder:12,metricKey:"tx_queue_len"};if(r.includes("contact_count"))return{entity_id:r,label:"Contacts",icon:"counter",colorScheme:"neutral",sortOrder:8};if(r.includes("channel_util"))return{entity_id:r,label:"Channel Util",icon:"chart",colorScheme:"neutral",sortOrder:10,metricKey:"channel_util"};if(r.startsWith("sensor.meshcore_")){const t=e.original_name||e.name||r.split(".")[1];return{entity_id:r,label:t,icon:"",colorScheme:"neutral",sortOrder:99}}return null}async function vv(e){const[t,o]=await Promise.all([e.callWS({type:"config/device_registry/list"}),e.callWS({type:"config/entity_registry/list"})]),i={};for(const e of t)if(e.identifiers)for(const[t,o]of e.identifiers)"meshcore"===t&&(i[o]=e.id);const r={};for(const t of o){var s;if(!t.device_id||t.disabled_by)continue;if(!t.entity_id.startsWith("sensor.meshcore_")&&!t.entity_id.startsWith("binary_sensor.meshcore_"))continue;const o=null===(s=e.states)||void 0===s||null===(s=s[t.entity_id])||void 0===s||null===(s=s.attributes)||void 0===s?void 0:s.device_class,i=gv(o?{...t,_stateDeviceClass:o}:t);i&&(r[t.device_id]||(r[t.device_id]=[]),r[t.device_id].push(i))}for(const e of Object.keys(r))r[e].sort((e,t)=>e.sortOrder-t.sortOrder);return{meshcoreDeviceMap:i,deviceEntities:r}}function fv(e){return null==e||"unavailable"===e||"unknown"===e||""===e}function yv(e){const t={};for(const[i,r]of Object.entries(null!=e?e:{})){let e=null;for(const t of null!=r?r:[]){var o;const i=null!==(o=t.lu)&&void 0!==o?o:t.lc;if("string"!=typeof t.s||fv(t.s)||"number"!=typeof i)continue;const r=1e3*i;(!e||r>=e.ts)&&(e={state:t.s,ts:r})}e&&(t[i]=e)}return t}mv.styles=[Wp,Rh(Fa||(Fa=Sc`
      :host {
        display: block;
      }

      :host([narrow]) .dialog {
        max-width: 100%;
      }

      .dialog {
        max-width: 500px;
      }

      .danger-warning {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        margin: 8px 0;
        background: rgba(219, 68, 55, 0.1);
        border: 1px solid var(--error-color, #db4437);
        border-radius: 6px;
        font-size: 12px;
        color: var(--error-color, #db4437);
      }

      .danger-warning-icon {
        font-size: 16px;
        flex-shrink: 0;
      }

      .device-response-feed {
        display: flex;
        flex-direction: column;
        gap: 4px;
        max-height: 180px;
        overflow-y: auto;
        font-family: var(--code-font-family, monospace);
        font-size: 12px;
      }

      .device-response-row {
        padding: 4px 8px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        border-radius: 4px;
        word-break: break-word;
      }

      .drr-time,
      .drr-snr {
        color: var(--secondary-text-color);
      }

      .drr-time {
        margin-right: 6px;
      }
    `)),Xp],mv._FRIENDLY_LABELS={adv_type:"Device Type",tx_power:"TX Power (dBm)",max_tx_power:"Max TX Power (dBm)",public_key:"Public Key",adv_lat:"Latitude",adv_lon:"Longitude",multi_acks:"Multi-Acks",adv_loc_policy:"Location Ad Policy",telemetry_mode_env:"Telemetry: Environment",telemetry_mode_loc:"Telemetry: Location",telemetry_mode_base:"Telemetry: Base",manual_add_contacts:"Manual Add Contacts",radio_freq:"Frequency (MHz)",radio_bw:"Bandwidth (kHz)",radio_sf:"Spreading Factor",radio_cr:"Coding Rate",name:"Name",path_hash_mode:"Path Hash Mode",firmware_ver:"Firmware Version",board_type:"Board Type",suggested_timeout:"Suggested Timeout (ms)",capabilities:"Capabilities",voltage:"Voltage (mV)",percentage:"Battery (%)",uptime:"Uptime (s)",temperature:"Temperature",max_hops:"Max Hops (0 = unlimited)",config:"Auto-Add Config"},mv._VALUE_FORMATTERS={adv_loc_policy:e=>cv(e,av),path_hash_mode:e=>cv(e,nv),telemetry_mode_env:e=>cv(e,lv),telemetry_mode_loc:e=>cv(e,lv),telemetry_mode_base:e=>cv(e,lv),manual_add_contacts:e=>{if(!0===e)return uh("Manual Mode");if(!1===e)return uh("Auto-Add Enabled");const t=sv(e);return void 0===t?uh("Unknown ({v})",{v:String(e)}):uh(t?"Manual Mode":"Auto-Add Enabled")},multi_acks:e=>{const t=sv(e);return void 0===t?uh("Unknown ({v})",{v:String(e)}):uh(t?"Yes":"No")},adv_lat:e=>{const t=sv(e);return void 0===t?`${e}`:`${t.toFixed(6)}°`},adv_lon:e=>{const t=sv(e);return void 0===t?`${e}`:`${t.toFixed(6)}°`},config:e=>{const t=sv(e);return void 0===t?uh("Unknown ({v})",{v:String(e)}):function(e,t){const o={};for(const i of t)o[i.label]=(e&i.value)===i.value;return o}(t,dv)}},Fc([Up({type:Boolean})],mv.prototype,"open",void 0),Fc([Up({type:Object})],mv.prototype,"hass",void 0),Fc([Up({type:String})],mv.prototype,"entryId",void 0),Fc([Up({type:String})],mv.prototype,"targetPrefix",void 0),Fc([Up({type:Boolean})],mv.prototype,"isLocal",void 0),Fc([Up({type:Boolean})],mv.prototype,"narrow",void 0),Fc([Up({type:String})],mv.prototype,"nodeName",void 0),Fc([Vp()],mv.prototype,"_selectedCommand",void 0),Fc([Vp()],mv.prototype,"_paramValues",void 0),Fc([Vp()],mv.prototype,"_response",void 0),Fc([Vp()],mv.prototype,"_executing",void 0),Fc([Vp()],mv.prototype,"_error",void 0),Fc([Vp()],mv.prototype,"_deviceResponses",void 0),mv=uv=Fc([qp("chattx-command-dialog")],mv);let _v=class extends Lp{constructor(){super(),this.narrow=!1,this._managedDevices={repeaters:[],clients:[]},this._contactsByPrefix={},this._loading=!0,this._error=null,this._confirmAction=null,this._confirmDialogOpen=!1,this._commandDialogOpen=!1,this._commandDialogTarget="",this._commandDialogIsLocal=!1,this._statusMessage=null,this._statusMessageTimeout=null,this._deviceEntities={},this._meshcoreDeviceMap={},this._entityRegistryLoaded=!1,this._lastKnown={},this._lastKnownRequested=new Set,this._hiddenSensors={},this._contextMenu=null,this._overlayPointerStarted=!1,this._settingsDeviceKey=null,this._hiddenSensorsModalKey=null,this._neighborContextMenu=null,this._neighborData={},fm(this,{isOpen:()=>null!==this._contextMenu,onEscape:()=>this._dismissContextMenu(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="tile-context"]')}}),fm(this,{isOpen:()=>null!==this._neighborContextMenu,onEscape:()=>this._dismissNeighborContextMenu(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="neighbor-context"]')}}),fm(this,{isOpen:()=>null!==this._settingsDeviceKey,onEscape:()=>this._closeSettingsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="device-settings"]')}}),fm(this,{isOpen:()=>null!==this._hiddenSensorsModalKey,onEscape:()=>this._closeHiddenSensorsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="hidden-sensors"]')}})}connectedCallback(){super.connectedCallback(),this._loadHiddenSensors(),this._loadManagedDevices()}disconnectedCallback(){super.disconnectedCallback(),null!==this._statusMessageTimeout&&(clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=null)}updated(e){e.has("config")&&this._loadManagedDevices(),e.has("hass")&&this.hass&&!this._entityRegistryLoaded&&this._loadEntityRegistry(),(e.has("hass")||e.has("_managedDevices")||e.has("_deviceEntities"))&&this._loadLastKnown()}_managedEntityIds(e,t){const o=this._getDeviceEntities(e,t).map(e=>e.entity_id);return e.status_entity_id&&o.push(e.status_entity_id),o}async _loadLastKnown(){if(!this.hass)return;const e=[],t=[[this._managedDevices.repeaters,"repeater"],[this._managedDevices.clients,"client"]];for(const[i,r]of t)for(const t of i)for(const i of this._managedEntityIds(t,r)){var o;this._lastKnownRequested.has(i)||fv(null===(o=this.hass.states[i])||void 0===o?void 0:o.state)&&(this._lastKnownRequested.add(i),e.push(i))}if(0===e.length)return;const i=Date.now();try{const t=await this.hass.callWS({type:"history/history_during_period",start_time:new Date(i-6048e5).toISOString(),end_time:new Date(i).toISOString(),entity_ids:e,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this._lastKnown={...this._lastKnown,...yv(t)}}catch(e){}}render(){var e,t,o,i,r;return this.hass?bp(Ma||(Ma=Sc`
      <div class="devices-layout">
        <div class="content-area">
          ${0}

          ${0}
        </div>
      </div>

      <!-- Confirmation Dialog -->
      <chattx-confirm-dialog
        .open=${0}
        .title=${0}
        .message=${0}
        @confirm=${0}
        @cancel=${0}>
      </chattx-confirm-dialog>

      <!-- Command Dialog -->
      <chattx-command-dialog
        .open=${0}
        .hass=${0}
        .entryId=${0}
        .targetPrefix=${0}
        .nodeName=${0}
        ?isLocal=${0}
        ?narrow=${0}
        @close=${0}>
      </chattx-command-dialog>

      <!-- Tile Context Menu Modal -->
      ${0}

      <!-- Neighbor Context Menu Modal -->
      ${0}

      <!-- Settings Modal -->
      ${0}

      <!-- Hidden Sensors List Modal -->
      ${0}

      <!-- Status Toast -->
      ${0}
    `),this._error?bp(Da||(Da=Sc`<div class="error-state"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg> ${0}</div>`),this._error):kp,this._loading?bp(Ea||(Ea=Sc`<div class="loading-state"><div class="loading-spinner"></div> ${0}</div>`),uh("Loading devices...")):bp(Pa||(Pa=Sc`
                ${0}
                ${0}
                ${0}
              `),this._renderDeviceSections(this._managedDevices.repeaters,"repeater"),this._renderDeviceSections(this._managedDevices.clients,"client"),0===this._managedDevices.repeaters.length&&0===this._managedDevices.clients.length?bp(za||(za=Sc`
                      <div class="empty-state">
                        <div class="empty-text">${0}</div>
                        <div class="empty-subtext">${0}</div>
                      </div>
                    `),uh("No managed devices"),uh("Add repeaters or clients in Settings → Integration to manage them here.")):kp),this._confirmDialogOpen,(null===(e=this._confirmAction)||void 0===e?void 0:e.title)||"",(null===(t=this._confirmAction)||void 0===t?void 0:t.message)||"",this._onConfirmAction,this._onConfirmCancel,this._commandDialogOpen,this.hass,null===(o=this.config)||void 0===o?void 0:o.entry_id,this._commandDialogTarget,null!==(i=null===(r=this.config)||void 0===r?void 0:r.node_name)&&void 0!==i?i:"",this._commandDialogIsLocal,this.narrow,this._onCommandDialogClose,this._contextMenu?bp(Ia||(Ia=Sc`
        <div class="modal-overlay"
             @pointerdown=${0}
             @click=${0}>
          <div class="modal-card" data-a11y="tile-context"
               role="dialog" aria-modal="true" aria-label=${0}
               @click=${0}
               @pointerdown=${0}>
            <div class="modal-header">
              <span class="modal-title">${0}</span>
              <button class="modal-close" aria-label=${0} @click=${0}
                      @pointerdown=${0}>&times;</button>
            </div>
            <div class="modal-body">
              <button class="modal-action danger" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg></span>
                ${0}
              </button>
            </div>
          </div>
        </div>
      `),this._onOverlayPointerDown,this._closeContextMenu,uh("{label} actions",{label:this._contextMenu.label}),e=>e.stopPropagation(),e=>e.stopPropagation(),this._contextMenu.label,uh("Close"),this._dismissContextMenu,e=>e.stopPropagation(),this._hideSensorFromContext,uh("Hide Sensor")):kp,this._neighborContextMenu?bp(Ra||(Ra=Sc`
        <div class="modal-overlay"
             @pointerdown=${0}
             @click=${0}>
          <div class="modal-card" data-a11y="neighbor-context"
               role="dialog" aria-modal="true" aria-label=${0}
               @click=${0}
               @pointerdown=${0}>
            <div class="modal-header">
              <span class="modal-title">${0}</span>
              <button class="modal-close" aria-label=${0} @click=${0}
                      @pointerdown=${0}>&times;</button>
            </div>
            <div class="modal-body">
              <button class="modal-action danger" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></span>
                ${0}
              </button>
            </div>
          </div>
        </div>
      `),this._onOverlayPointerDown,this._closeNeighborContextMenu,uh("{name} actions",{name:this._neighborContextMenu.name}),e=>e.stopPropagation(),e=>e.stopPropagation(),this._neighborContextMenu.name,uh("Close"),this._dismissNeighborContextMenu,e=>e.stopPropagation(),this._removeNeighborFromContext,uh("Remove Neighbor")):kp,this._settingsDeviceKey?(()=>{const e=this._getSettingsDeviceContext();return e?bp(Oa||(Oa=Sc`
        <div class="modal-overlay" @click=${0}>
          <div class="modal-card" data-a11y="device-settings"
               role="dialog" aria-modal="true" aria-label=${0}
               @click=${0}>
            <div class="modal-header">
              <span class="modal-title">${0} Settings</span>
              <button class="modal-close" aria-label=${0} @click=${0}>&times;</button>
            </div>
            <div class="modal-body">
              <button class="modal-action" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg></span>
                View Hidden Sensors (${0})
              </button>

              <!-- Issue Command -->
              <button class="modal-action" ?disabled=${0} @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 19V7H4v12h16m0-16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h16m-7 14v-2h5v2h-5m-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59l4-4z"/></svg></span>
                ${0}
              </button>

              <div class="modal-divider"></div>

              <!-- Reboot -->
              <button class="modal-action danger" ?disabled=${0} @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg></span>
                ${0}
              </button>

              <!-- Start OTA (repeaters only) -->
              ${0}
            </div>
          </div>
        </div>
      `),this._closeSettingsModal,uh("{name} settings",{name:e.name}),e=>e.stopPropagation(),e.name,uh("Close"),this._closeSettingsModal,this._openHiddenSensorsList,(this._hiddenSensors[this._settingsDeviceKey]||[]).length,!e.isOnline,()=>{this._closeSettingsModal(),this._openCommandDialog(e.device,!1)},uh("Issue Command"),!e.isOnline,()=>{this._closeSettingsModal(),this._confirmActionDialog(`Reboot ${e.name}?`,"The device will restart.",()=>this._executeRemoteAction(e.device,"reboot"))},uh("Reboot Device"),"repeater"===e.type?bp(Ta||(Ta=Sc`
                <button class="modal-action danger" ?disabled=${0} @click=${0}>
                  <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M5 18h14v2H5v-2zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2-9.4 9.3z"/></svg></span>
                  ${0}
                </button>
              `),!e.isOnline,()=>{this._closeSettingsModal(),this._confirmActionDialog(`Start OTA on ${e.name}?`,"The device will enter update mode.",()=>this._executeRemoteAction(e.device,"start ota"))},uh("Start OTA Update")):kp):kp})():kp,this._hiddenSensorsModalKey?this._renderHiddenSensorsModal():kp,this._statusMessage?bp(La||(La=Sc`<div class="status-toast ${0}">${0}${0}</div>`),this._statusMessage.type,"success"===this._statusMessage.type?"✓ ":"✗ ",this._statusMessage.text):kp):bp(Aa||(Aa=Sc`<div class="content-area"><div class="loading-state"><div class="loading-spinner"></div> ${0}</div></div>`),uh("Initializing..."))}_renderDeviceSections(e,t){return e.map(e=>this._renderDeviceSection(e,t))}_renderDeviceSection(e,t){var o,i,r;const s=function(e,t){if(0===Object.keys(t).length)return e;const o=new Proxy(e.states,{get(e,o,i){const r=Reflect.get(e,o,i);if("string"!=typeof o)return r;const s=t[o];if(!s||r&&!fv(r.state))return r;const a=new Date(s.ts).toISOString();return{entity_id:o,attributes:{},...r,state:s.state,last_changed:a,last_updated:a}}});return{...e,states:o}}(this.hass,this._lastKnown),a=function(e,t,o){let i=null;for(const s of t){var r;const t=o[s];t&&fv(null==e||null===(r=e.states[s])||void 0===r?void 0:r.state)&&(null===i||t.ts<i)&&(i=t.ts)}return i}(this.hass,this._managedEntityIds(e,t),this._lastKnown);let n="unknown",l=uh("Unknown");if(e.status_entity_id&&s.states[e.status_entity_id]){const t=s.states[e.status_entity_id].state;"on"===t?(n="online",l=uh("Online")):"off"===t&&(n="offline",l=uh("Offline"))}else e.status&&(n="online"===e.status?"online":"offline"===e.status?"offline":"unknown",l="online"===e.status?uh("Online"):"offline"===e.status?uh("Offline"):uh("Unknown"));const d="online"===n,c=this._getManagedDeviceKey(e,t),h=this._getDeviceEntities(e,t),p=(this._hiddenSensors[c]||[]).length,u="repeater"===t&&e.neighbors_enabled,m=this._neighborData[e.pubkey_prefix],g=h.find(e=>"uptime_hours"===e.metricKey),v=d&&g?this._formatUptimeFromEntity(g.entity_id):"",f=this._contactsByPrefix[null===(o=e.pubkey_prefix)||void 0===o?void 0:o.toLowerCase()],y=null==f?void 0:f.adv_lat,_=null==f?void 0:f.adv_lon,b=null==f?void 0:f.last_advert,x="number"==typeof y?y:NaN,w="number"==typeof _?_:NaN,k=Number.isFinite(x)&&Number.isFinite(w)&&(0!==x||0!==w);return u&&!m&&this._loadNeighbors(e),bp(Na||(Na=Sc`
      <div class="device-section" @tile-context-menu=${0}>
        <div class="section-header">
          <div class="section-title">
            <div class="section-icon ${0}">
              ${0}
            </div>
            <div>
              <div class="device-name">${0}</div>
              <div class="device-meta">
                <span>${0}</span>
                ${0}
                <span>${0}: ${0}</span>
                ${0}
                ${0}
              </div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:4px;">
            <button class="settings-btn" @click=${0} title=${0} aria-label=${0}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            </button>
            <div class="status-badge ${0}"
                 @click=${0}
                 style="${0}">
              <span class="status-dot ${0}"></span>
              ${0}${0}
            </div>
          </div>
        </div>

        ${0}

        ${0}

        <div class="actions-row">
          <button class="action-btn" ?disabled=${0} @click=${0}>${0}</button>
          <button class="action-btn" ?disabled=${0} @click=${0}>${0}</button>
        </div>
      </div>
    `),e=>this._onTileContextMenu(e,c),t,bp("repeater"===t?qa||(qa=Sc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`):ja||(ja=Sc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`)),e.name,uh("repeater"===t?"Repeater":"Client"),e.firmware_version?bp(Ha||(Ha=Sc`<span>${0}: v${0}</span>`),uh("Firmware"),null!==(i=null===(r=e.firmware_version.match(/(\d+\.\d+\.\d+)/))||void 0===r?void 0:r[1])&&void 0!==i?i:e.firmware_version):kp,uh("Key"),e.pubkey_prefix,k?bp(Ua||(Ua=Sc`<span>${0}: ${0}, ${0}</span>`),uh("Loc"),x.toFixed(4),w.toFixed(4)):kp,null!==a?bp(Va||(Va=Sc`<span class="last-known"
                      title=${0}>
                      <chattx-read-age-note .readAt=${0}></chattx-read-age-note>
                    </span>`),uh("Home Assistant restarted after this repeater was last read, so these are the values from that read. New values come with the next read."),new Date(a).toISOString()):kp,()=>this._settingsDeviceKey=c,uh("Device settings"),uh("Device settings"),n,()=>e.status_entity_id&&this._fireMoreInfo(e.status_entity_id),e.status_entity_id?"cursor:pointer":"",n,l,v?bp(Ka||(Ka=Sc` · ${0}`),v):kp,h.length>0?bp(Wa||(Wa=Sc`
              <chattx-node-summary
                .hass=${0}
                .device=${0}
                .entities=${0}
                .hiddenCount=${0}
                .fallbackLatitude=${0}
                .fallbackLongitude=${0}
                .fallbackUpdated=${0}>
              </chattx-node-summary>
            `),s,{...e,type:t},h,p,y,_,b):kp,u?this._renderInlineNeighbors(e,m):kp,!d,()=>this._executeRemoteAction(e,"advert"),uh("Flood Advert"),!d,()=>this._executeRemoteAction(e,"clock sync"),uh("Sync Clock"))}_renderInlineNeighbors(e,t){return!t||t.loading?bp(Xa||(Xa=Sc`
        <div class="neighbor-section">
          <div class="subsection-label">${0}</div>
          <div class="neighbor-loading"><div class="loading-spinner"></div> ${0}</div>
        </div>
      `),uh("Neighbors"),uh("Loading neighbors...")):0===t.neighbors.length?bp(Ga||(Ga=Sc`
        <div class="neighbor-section">
          <div class="subsection-label">${0}</div>
          <div style="font-size: 13px; color: var(--secondary-text-color); padding: 8px 0;">${0}</div>
        </div>
      `),uh("Neighbors"),uh("No neighbors found")):bp(Ya||(Ya=Sc`
      <div class="neighbor-section">
        <div class="subsection-label">Neighbors (${0})</div>

        ${0}

        <table class="neighbor-table">
          <thead>
            <tr>
              <th>${0}</th>
              <th>${0}</th>
              <th>${0}</th>
              <th>${0}</th>
            </tr>
          </thead>
          <tbody>
            ${0}
          </tbody>
        </table>
      </div>
    `),t.neighbors.length,t.chartData.length>0?bp(Qa||(Qa=Sc`
              <div class="chart-container">
                <chattx-snr-chart
                  .data=${0}
                  .neighbors=${0}
                  width="550"
                  height="200"
                  timeRange="24">
                </chattx-snr-chart>
              </div>
            `),t.chartData,t.neighbors.map(e=>e.pubkey_prefix)):kp,uh("Name"),uh("SNR"),uh("Seen (48h)"),uh("Last Heard"),t.neighbors.map(t=>{var o;return bp(Za||(Za=Sc`
              <tr @contextmenu=${0}
                  ${0}>
                <td><code>${0}</code></td>
                <td class=${0}>
                  <span class="clickable-value"
                        @click=${0}>
                    ${0} dB
                  </span>
                </td>
                <td>
                  <span class="clickable-value"
                        @click=${0}>
                    ${0}×
                  </span>
                </td>
                <td>${0}</td>
              </tr>
            `),o=>this._onNeighborRightClick(o,t,e.pubkey_prefix),Vg(()=>this._onNeighborRightClick(new MouseEvent("contextmenu"),t,e.pubkey_prefix)),t.name&&t.name!==t.pubkey_prefix.substring(0,6).toUpperCase()?`${t.name} (${t.pubkey_prefix.substring(0,6).toUpperCase()})`:t.pubkey_prefix.substring(0,6).toUpperCase(),t.snr>5?"snr-good":t.snr>=0?"snr-fair":"snr-poor",o=>{o.stopPropagation(),this._openNeighborMoreInfo(e.pubkey_prefix,t.pubkey_prefix,"snr")},t.snr.toFixed(1),o=>{o.stopPropagation(),this._openNeighborMoreInfo(e.pubkey_prefix,t.pubkey_prefix,"seen")},null!==(o=t.seen_48h)&&void 0!==o?o:0,this._formatRelativeTime(t.last_seen))}))}async _loadEntityRegistry(){if(this.hass&&!this._entityRegistryLoaded){this._entityRegistryLoaded=!0;try{const{meshcoreDeviceMap:e,deviceEntities:t}=await vv(this.hass);this._meshcoreDeviceMap=e,this._deviceEntities=t}catch(e){console.error("Failed to load entity registry:",e)}}}_getDeviceEntities(e,t){var o;if(!this.hass||!this.config)return[];const i=this._getManagedDeviceKey(e,t),r=new Set(this._hiddenSensors[i]||[]),s=(null===(o=this.selectedDevice)||void 0===o?void 0:o.entry_id)||"",a=e.pubkey_prefix||"",n=`${s}_${t}_${a}`,l=this._meshcoreDeviceMap[n];if(l&&this._deviceEntities[l])return this._deviceEntities[l].filter(e=>!r.has(e.entity_id));for(const[e,o]of Object.entries(this._meshcoreDeviceMap))if(e.includes(a)&&e.includes(t)&&this._deviceEntities[o])return this._deviceEntities[o].filter(e=>!r.has(e.entity_id));const d=a.substring(0,6).toLowerCase();if(!d)return[];const c=[];for(const e of Object.values(this._deviceEntities))for(const t of e)t.entity_id.toLowerCase().includes(d)&&!r.has(t.entity_id)&&c.push(t);return c.sort((e,t)=>e.sortOrder-t.sortOrder)}async _loadNeighbors(e){if(this.hass){this._neighborData={...this._neighborData,[e.pubkey_prefix]:{neighbors:[],chartData:[],loading:!0,loaded:!1}};try{var t;const o=await async function(e,t,o){try{const i={type:"meshcore_chattx/get_neighbors",target_prefix:t};return o&&(i.entry_id=o),(await e.callWS(i)).neighbors||[]}catch(e){return[]}}(this.hass,e.pubkey_prefix,null===(t=this.config)||void 0===t?void 0:t.entry_id);let i=[];o.length>0&&(i=await this._fetchSNRHistory(o)),this._neighborData={...this._neighborData,[e.pubkey_prefix]:{neighbors:o,chartData:i,loading:!1,loaded:!0}}}catch(t){console.error(`Failed to load neighbors for ${e.name}:`,t),this._neighborData={...this._neighborData,[e.pubkey_prefix]:{neighbors:[],chartData:[],loading:!1,loaded:!0}}}}}async _fetchSNRHistory(e){if(!this.hass)return[];try{const t=e.filter(e=>{var t;return null===(t=e.entity_ids)||void 0===t?void 0:t.snr}).map(e=>e.entity_ids.snr);if(0===t.length)return[];const o=await this.hass.callWS({type:"recorder/statistics_during_period",start_time:new Date(Date.now()-864e5).toISOString(),end_time:(new Date).toISOString(),statistic_ids:t,period:"hour"}),i={};return Object.entries(o).forEach(([t,o])=>{const r=e.find(e=>{var o;return(null===(o=e.entity_ids)||void 0===o?void 0:o.snr)===t});r&&Array.isArray(o)&&o.forEach(e=>{if(e.start&&null!=e.mean){const t=new Date(e.start).getTime();i[t]||(i[t]={}),i[t][r.pubkey_prefix]=e.mean}})}),Object.entries(i).map(([e,t])=>({timestamp:parseInt(e,10),values:t})).sort((e,t)=>e.timestamp-t.timestamp)}catch(e){return[]}}async _loadManagedDevices(){if(this.hass)try{var e;this._loading=!0,this._error=null;const t=await async function(e,t){try{const o={type:"meshcore_chattx/get_managed_devices"};t&&(o.entry_id=t);const i=await e.callWS(o);return{repeaters:i.repeaters||[],clients:i.clients||[]}}catch(e){return{repeaters:[],clients:[]}}}(this.hass,null===(e=this.config)||void 0===e?void 0:e.entry_id);this._managedDevices=t,this._loadContacts()}catch(e){this._error=uh("Failed to load devices: {error}",{error:String(e)})}finally{this._loading=!1}}async _loadContacts(){if(this.hass)try{var e,t;const o=(null===(e=this.selectedDevice)||void 0===e?void 0:e.entry_id)||(null===(t=this.config)||void 0===t?void 0:t.entry_id),i=await au(this.hass,o),r={};for(const e of i)e.pubkey_prefix&&(r[e.pubkey_prefix.toLowerCase()]=e);this._contactsByPrefix=r}catch(e){}}async _executeRemoteAction(e,t){if(this.hass)try{var o;const i=await hu(this.hass,e.pubkey_prefix,t,null===(o=this.config)||void 0===o?void 0:o.entry_id);i.success?this._showStatusMessage(`${e.name}: ${t} → ${i.response||"OK"}`,"success"):this._showStatusMessage(`${e.name}: ${t} failed — ${i.response||"error"}`,"error")}catch(o){this._showStatusMessage(`${e.name}: ${t} failed — ${String(o)}`,"error")}}_fireMoreInfo(e){const t=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_formatUptimeFromEntity(e){var t,o,i;const r=null===(t=this.hass)||void 0===t?void 0:t.states[e];if(!r||"unavailable"===r.state||"unknown"===r.state)return"";const s=parseFloat(r.state);if(!Number.isFinite(s))return"";let a;switch(null!==(o=null===(i=r.attributes)||void 0===i?void 0:i.unit_of_measurement)&&void 0!==o?o:"s"){case"d":a=86400*s;break;case"h":a=3600*s;break;case"min":a=60*s;break;default:a=s}if(a<60)return`${Math.floor(a)}s`;if(a<3600)return`${Math.floor(a/60)}m`;if(a<86400){const e=Math.floor(a/3600),t=Math.floor(a%3600/60);return t>0?`${e}h ${t}m`:`${e}h`}const n=Math.floor(a/86400),l=Math.floor(a%86400/3600);return l>0?`${n}d ${l}h`:`${n}d`}_confirmActionDialog(e,t,o){this._confirmAction={title:e,message:t,onConfirm:o},this._confirmDialogOpen=!0}async _onConfirmAction(){if(this._confirmDialogOpen=!1,this._confirmAction)try{await this._confirmAction.onConfirm()}catch(e){this._showStatusMessage(uh("Error: {error}",{error:String(e)}),"error")}this._confirmAction=null}_onConfirmCancel(){this._confirmDialogOpen=!1,this._confirmAction=null}_openCommandDialog(e,t){this._commandDialogTarget=e.pubkey_prefix,this._commandDialogIsLocal=t,this._commandDialogOpen=!0}_onCommandDialogClose(){this._commandDialogOpen=!1,this._commandDialogTarget="",this._commandDialogIsLocal=!1}_getManagedDeviceKey(e,t){var o;return`${(null===(o=this.selectedDevice)||void 0===o?void 0:o.entry_id)||""}_${t}_${e.pubkey_prefix}`}_loadHiddenSensors(){try{const e=Hc("chattx-hidden-sensors");e&&(this._hiddenSensors=JSON.parse(e))}catch(e){this._hiddenSensors={}}}_saveHiddenSensors(){try{Uc("chattx-hidden-sensors",JSON.stringify(this._hiddenSensors))}catch(e){}}_hideSensor(e,t){const o=this._hiddenSensors[e]||[];o.includes(t)||(this._hiddenSensors={...this._hiddenSensors,[e]:[...o,t]},this._saveHiddenSensors())}_unhideSensor(e,t){const o=this._hiddenSensors[e]||[];if(this._hiddenSensors={...this._hiddenSensors,[e]:o.filter(e=>e!==t)},0===this._hiddenSensors[e].length){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t}this._saveHiddenSensors()}_unhideAllSensors(e){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t,this._saveHiddenSensors()}_onTileContextMenu(e,t){const{entityId:o,label:i}=e.detail;this._contextMenu={entityId:o,label:i,deviceKey:t},this._overlayPointerStarted=!1}_onOverlayPointerDown(){this._overlayPointerStarted=!0}_dismissContextMenu(){this._overlayPointerStarted=!1,this._contextMenu=null}_closeContextMenu(){this._overlayPointerStarted&&this._dismissContextMenu()}_hideSensorFromContext(){this._contextMenu&&(this._hideSensor(this._contextMenu.deviceKey,this._contextMenu.entityId),this._showStatusMessage(uh("Hidden: {label}",{label:this._contextMenu.label}),"success"),this._contextMenu=null)}_onNeighborRightClick(e,t,o){e.preventDefault(),this._neighborContextMenu={name:t.name||t.pubkey_prefix,neighborPubkey:t.pubkey_prefix,repeaterPubkey:o},this._overlayPointerStarted=!1}_dismissNeighborContextMenu(){this._overlayPointerStarted=!1,this._neighborContextMenu=null}_closeNeighborContextMenu(){this._overlayPointerStarted&&this._dismissNeighborContextMenu()}_removeNeighborFromContext(){if(!this._neighborContextMenu)return;const{name:e,neighborPubkey:t,repeaterPubkey:o}=this._neighborContextMenu;this._neighborContextMenu=null,this._confirmActionDialog(uh("Remove neighbor {name}?",{name:e}),uh("This will remove the neighbor from the repeater and delete its sensors from HA. This cannot be undone."),()=>this._executeRemoveNeighbor(o,t,e))}_openNeighborMoreInfo(e,t,o){var i;const r=e.substring(0,10).toLowerCase(),s=t.substring(0,6).toLowerCase(),a="snr"===o?`sensor.meshcore_${r}_neighbor_${s}`:`sensor.meshcore_${r}_neighbor_${s}_seen`;null!==(i=this.hass)&&void 0!==i&&i.states[a]&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:a},bubbles:!0,composed:!0}))}async _executeRemoveNeighbor(e,t,o){if(this.hass)try{var i,r;const s=await this.hass.callWS({type:"meshcore_chattx/remove_neighbor",entry_id:null===(i=this.config)||void 0===i?void 0:i.entry_id,target_prefix:e,neighbor_pubkey:t}),a=null!==(r=null==s?void 0:s.entities_removed)&&void 0!==r?r:0;this._showStatusMessage(uh("Removed {name} ({entitiesRemoved} sensors deleted)",{name:o,entitiesRemoved:a}),"success");const n=this._managedDevices.repeaters.find(t=>t.pubkey_prefix===e);n&&await this._loadNeighbors(n)}catch(e){this._showStatusMessage(uh("Failed to remove {name}: {err}",{name:o,err:e.message||e}),"error")}}_getSettingsDeviceContext(){const e=this._settingsDeviceKey;if(!e)return null;const t=[...this._managedDevices.repeaters.map(e=>({device:e,type:"repeater"})),...this._managedDevices.clients.map(e=>({device:e,type:"client"}))];for(const{device:i,type:r}of t)if(this._getManagedDeviceKey(i,r)===e){var o;let e=!1;return e=i.status_entity_id&&null!==(o=this.hass)&&void 0!==o&&o.states[i.status_entity_id]?"on"===this.hass.states[i.status_entity_id].state:"online"===i.status,{device:i,type:r,name:i.name,isOnline:e}}return null}_closeSettingsModal(){this._settingsDeviceKey=null}_openHiddenSensorsList(){this._hiddenSensorsModalKey=this._settingsDeviceKey,this._settingsDeviceKey=null}_renderHiddenSensorsModal(){const e=this._hiddenSensorsModalKey,t=(this._hiddenSensors[e]||[]).map(e=>{let t=e;for(const o of Object.values(this._deviceEntities)){const i=o.find(t=>t.entity_id===e);if(i){t=i.label;break}}return{entityId:e,label:t}});return bp(Ja||(Ja=Sc`
      <div class="modal-overlay" @click=${0}>
        <div class="modal-card" data-a11y="hidden-sensors"
             role="dialog" aria-modal="true" aria-label=${0}
             @click=${0}>
          <div class="modal-header">
            <span class="modal-title">${0}</span>
            <button class="modal-close" aria-label=${0} @click=${0}>&times;</button>
          </div>
          <div class="modal-body">
            ${0}
          </div>
          ${0}
        </div>
      </div>
    `),this._closeHiddenSensorsModal,uh("Hidden sensors"),e=>e.stopPropagation(),uh("Hidden Sensors"),uh("Close"),this._closeHiddenSensorsModal,0===t.length?bp(en||(en=Sc`<div class="empty-hidden">${0}</div>`),uh("No hidden sensors")):t.map(t=>bp(tn||(tn=Sc`
                  <div class="hidden-sensor-item">
                    <div>
                      <div class="hidden-sensor-name">${0}</div>
                      <div class="hidden-sensor-id">${0}</div>
                    </div>
                    <button class="unhide-btn" @click=${0}>${0}</button>
                  </div>
                `),t.label,t.entityId,()=>this._unhideSensor(e,t.entityId),uh("Unhide"))),t.length>1?bp(on||(on=Sc`
                <div class="modal-footer">
                  <button class="action-btn" @click=${0}>${0}</button>
                </div>
              `),()=>{this._unhideAllSensors(e)},uh("Unhide All")):kp)}_closeHiddenSensorsModal(){this._hiddenSensorsModalKey=null}_showStatusMessage(e,t){this._statusMessage={text:e,type:t},null!==this._statusMessageTimeout&&clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=window.setTimeout(()=>{this._statusMessage=null,this._statusMessageTimeout=null},5e3)}_formatRelativeTime(e){try{const t=Date.now()-new Date(e).getTime(),o=Math.floor(t/6e4);if(o<1)return"just now";if(o<60)return`${o}m ago`;const i=Math.floor(o/60);return i<24?`${i}h ago`:`${Math.floor(i/24)}d ago`}catch(e){return"unknown"}}};function bv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}_v.styles=[Wp,Rh(rn||(rn=Sc`
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .devices-layout {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .content-area {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 16px;
        background: var(--primary-background-color, #fafafa);
      }

      .content-area::-webkit-scrollbar { width: 6px; }
      .content-area::-webkit-scrollbar-track { background: transparent; }
      .content-area::-webkit-scrollbar-thumb {
        background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
        border-radius: 3px;
      }

      /* Dashboard sections */
      .device-section {
        background: var(--card-background-color, #fff);
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 16px;
      }

      .device-section:last-child {
        margin-bottom: 0;
      }

      .section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        gap: 8px;
        flex-wrap: wrap;
      }

      .section-title {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        flex: 1 1 auto;
      }

      .section-title > div:last-child {
        min-width: 0;
        flex: 1 1 auto;
      }

      .section-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        flex-shrink: 0;
      }

      .section-icon.companion {
        background: rgba(3, 169, 244, 0.12);
        color: #0288d1;
      }

      .section-icon.repeater {
        background: rgba(255, 152, 0, 0.12);
        color: #f57c00;
      }

      .section-icon.client {
        background: rgba(76, 175, 80, 0.12);
        color: #388e3c;
      }

      .device-name {
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .device-meta {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }

      .device-meta span {
        margin-right: 12px;
      }

      .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 600;
        flex-shrink: 0;
        white-space: nowrap;
        max-width: 100%;
      }

      .status-badge.online {
        background: rgba(76, 175, 80, 0.12);
        color: #2e7d32;
      }

      .status-badge.offline {
        background: rgba(114, 114, 114, 0.12);
        color: #616161;
      }

      .status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }

      .status-dot.online { background: #4caf50; }
      .status-dot.offline { background: #9e9e9e; }
      .status-dot.unknown { background: #ff9800; }

      .status-badge.unknown {
        background: rgba(255, 152, 0, 0.12);
        color: #e65100;
      }

      /* Sensor tiles grid */
      .subsection-label {
        font-size: 12px;
        font-weight: 600;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 8px;
        margin-top: 16px;
      }

      .sensor-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
        gap: 8px;
      }

      /* Neighbor section */
      .neighbor-section {
        margin-top: 16px;
      }

      .neighbor-table {
        width: 100%;
        /* separate (not collapse) so the 1px row dividers render the same
           crisp/light line as the node-summary sensor grid, rather than the
           slightly heavier collapsed-border rendering. */
        border-collapse: separate;
        border-spacing: 0;
        font-size: 13px;
        margin-top: 8px;
      }

      .neighbor-table th {
        text-align: left;
        padding: 6px 8px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        color: var(--secondary-text-color);
        font-weight: 600;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .neighbor-table tbody tr {
        cursor: context-menu;
      }

      .neighbor-table tbody tr:hover {
        background: var(--table-row-alternative-background-color, rgba(255,255,255,0.05));
      }

      .neighbor-table td {
        padding: 6px 8px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        color: var(--primary-text-color);
      }

      .neighbor-table code {
        font-size: 12px;
        background: var(--secondary-background-color, #f5f5f5);
        padding: 1px 4px;
        border-radius: 3px;
      }

      .snr-good { color: #4caf50; font-weight: 600; }
      .snr-fair { color: #ff9800; font-weight: 600; }
      .snr-poor { color: #f44336; font-weight: 600; }

      .neighbor-table .clickable-value {
        cursor: pointer;
        border-radius: 4px;
        padding: 2px 4px;
        margin: -2px -4px;
        transition: background 0.15s;
      }

      .neighbor-table .clickable-value:hover {
        background: var(--secondary-background-color, rgba(0,0,0,0.05));
      }

      /* Action buttons */
      .actions-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 16px;
      }

      .action-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 6px 12px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 6px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
      }

      .action-btn:hover:not(:disabled) {
        background: var(--secondary-background-color, #f5f5f5);
        border-color: var(--primary-color, #03a9f4);
      }

      .action-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .action-btn.primary {
        background: var(--primary-color, #03a9f4);
        color: #fff;
        border-color: var(--primary-color, #03a9f4);
      }

      .action-btn.primary:hover:not(:disabled) {
        opacity: 0.9;
      }

      /* Loading / empty / error */
      .loading-state {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 48px 16px;
        color: var(--secondary-text-color);
        font-size: 14px;
        gap: 8px;
      }

      .loading-spinner {
        width: 20px;
        height: 20px;
        border: 2px solid var(--divider-color, #e0e0e0);
        border-top-color: var(--primary-color, #03a9f4);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      .neighbor-loading {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 12px 0;
        color: var(--secondary-text-color);
        font-size: 13px;
      }

      .neighbor-loading .loading-spinner {
        width: 14px;
        height: 14px;
      }

      @keyframes spin { to { transform: rotate(360deg); } }

      .error-state {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 16px;
        color: var(--error-color, #db4437);
        font-size: 13px;
        background: rgba(219, 68, 55, 0.08);
        border-radius: 8px;
        margin-bottom: 16px;
      }

      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 48px 16px;
        color: var(--secondary-text-color);
        text-align: center;
      }

      .empty-text { font-size: 14px; }
      .empty-subtext { font-size: 12px; margin-top: 8px; opacity: 0.7; }

      /* Toast */
      .status-toast {
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        padding: 12px 16px;
        border-radius: 8px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 13px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
      }

      .status-toast.success { border-left: 4px solid #4caf50; }
      .status-toast.error { border-left: 4px solid var(--error-color, #db4437); color: var(--error-color, #db4437); }

      @keyframes slideIn {
        from { transform: translateY(100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      /* Settings gear button */
      .settings-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 6px;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        transition: all 0.2s;
        margin-left: 8px;
        flex-shrink: 0;
      }

      .settings-btn:hover {
        background: var(--secondary-background-color, #f0f0f0);
        color: var(--primary-text-color);
      }

      /* Modal overlay */
      .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.15s ease-out;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .modal-card {
        background: var(--card-background-color, #fff);
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        min-width: 260px;
        max-width: 400px;
        max-height: 80vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .modal-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .modal-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 6px;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        font-size: 18px;
      }

      .modal-close:hover {
        background: var(--secondary-background-color, #f0f0f0);
      }

      .modal-body {
        padding: 8px 0;
        overflow-y: auto;
      }

      .modal-action {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        cursor: pointer;
        transition: background 0.15s;
        color: var(--primary-text-color);
        font-size: 14px;
        border: none;
        background: none;
        width: 100%;
        text-align: left;
      }

      .modal-action:hover {
        background: var(--secondary-background-color, #f5f5f5);
      }

      .modal-action.danger {
        color: var(--error-color, #db4437);
      }

      .modal-action-icon {
        display: flex;
        align-items: center;
        color: var(--secondary-text-color);
        flex-shrink: 0;
      }

      .modal-action.danger .modal-action-icon {
        color: var(--error-color, #db4437);
      }

      .modal-action:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .modal-action:disabled:hover {
        background: none;
      }

      .modal-divider {
        height: 1px;
        background: var(--divider-color, #e0e0e0);
        margin: 4px 0;
      }

      /* Hidden sensors list */
      .hidden-sensor-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .hidden-sensor-item:last-child {
        border-bottom: none;
      }

      .hidden-sensor-name {
        font-size: 13px;
        color: var(--primary-text-color);
      }

      .hidden-sensor-id {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }

      .unhide-btn {
        padding: 4px 10px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        background: var(--card-background-color, #fff);
        color: var(--primary-color, #03a9f4);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
      }

      .unhide-btn:hover {
        background: var(--secondary-background-color, #f5f5f5);
      }

      .modal-footer {
        padding: 12px 20px;
        border-top: 1px solid var(--divider-color, #e0e0e0);
        display: flex;
        justify-content: flex-end;
      }

      .empty-hidden {
        padding: 20px;
        text-align: center;
        color: var(--secondary-text-color);
        font-size: 13px;
      }

      /* Chart container */
      .chart-container {
        margin-top: 8px;
        overflow-x: auto;
      }
    `)),Xp],Fc([Up({type:Object})],_v.prototype,"hass",void 0),Fc([Up({type:Object})],_v.prototype,"config",void 0),Fc([Up({type:Boolean})],_v.prototype,"narrow",void 0),Fc([Up({type:Object})],_v.prototype,"selectedDevice",void 0),Fc([Vp()],_v.prototype,"_managedDevices",void 0),Fc([Vp()],_v.prototype,"_contactsByPrefix",void 0),Fc([Vp()],_v.prototype,"_loading",void 0),Fc([Vp()],_v.prototype,"_error",void 0),Fc([Vp()],_v.prototype,"_confirmAction",void 0),Fc([Vp()],_v.prototype,"_confirmDialogOpen",void 0),Fc([Vp()],_v.prototype,"_commandDialogOpen",void 0),Fc([Vp()],_v.prototype,"_commandDialogTarget",void 0),Fc([Vp()],_v.prototype,"_commandDialogIsLocal",void 0),Fc([Vp()],_v.prototype,"_statusMessage",void 0),Fc([Vp()],_v.prototype,"_statusMessageTimeout",void 0),Fc([Vp()],_v.prototype,"_deviceEntities",void 0),Fc([Vp()],_v.prototype,"_meshcoreDeviceMap",void 0),Fc([Vp()],_v.prototype,"_entityRegistryLoaded",void 0),Fc([Vp()],_v.prototype,"_lastKnown",void 0),Fc([Vp()],_v.prototype,"_hiddenSensors",void 0),Fc([Vp()],_v.prototype,"_contextMenu",void 0),Fc([Vp()],_v.prototype,"_settingsDeviceKey",void 0),Fc([Vp()],_v.prototype,"_hiddenSensorsModalKey",void 0),Fc([Vp()],_v.prototype,"_neighborContextMenu",void 0),Fc([Vp()],_v.prototype,"_neighborData",void 0),_v=Fc([qp("chattx-devices-page")],_v);var xv,wv,kv={exports:{}},$v=xv?kv.exports:(xv=1,"undefined"!=typeof self&&self,wv=function(){return function(e){var t={};function o(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3)}([function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){this.width=t,this.height=e.length/t,this.data=e}return e.createEmpty=function(t,o){return new e(new Uint8ClampedArray(t*o),t)},e.prototype.get=function(e,t){return!(e<0||e>=this.width||t<0||t>=this.height||!this.data[t*this.width+e])},e.prototype.set=function(e,t,o){this.data[t*this.width+e]=o?1:0},e.prototype.setRegion=function(e,t,o,i,r){for(var s=t;s<t+i;s++)for(var a=e;a<e+o;a++)this.set(a,s,!!r)},e}();t.BitMatrix=i},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var i=o(2);t.addOrSubtractGF=function(e,t){return e^t};var r=function(){function e(e,t,o){this.primitive=e,this.size=t,this.generatorBase=o,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var r=1,s=0;s<this.size;s++)this.expTable[s]=r,(r*=2)>=this.size&&(r=(r^this.primitive)&this.size-1);for(s=0;s<this.size-1;s++)this.logTable[this.expTable[s]]=s;this.zero=new i.default(this,Uint8ClampedArray.from([0])),this.one=new i.default(this,Uint8ClampedArray.from([1]))}return e.prototype.multiply=function(e,t){return 0===e||0===t?0:this.expTable[(this.logTable[e]+this.logTable[t])%(this.size-1)]},e.prototype.inverse=function(e){if(0===e)throw new Error("Can't invert 0");return this.expTable[this.size-this.logTable[e]-1]},e.prototype.buildMonomial=function(e,t){if(e<0)throw new Error("Invalid monomial degree less than 0");if(0===t)return this.zero;var o=new Uint8ClampedArray(e+1);return o[0]=t,new i.default(this,o)},e.prototype.log=function(e){if(0===e)throw new Error("Can't take log(0)");return this.logTable[e]},e.prototype.exp=function(e){return this.expTable[e]},e}();t.default=r},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var i=o(1),r=function(){function e(e,t){if(0===t.length)throw new Error("No coefficients.");this.field=e;var o=t.length;if(o>1&&0===t[0]){for(var i=1;i<o&&0===t[i];)i++;if(i===o)this.coefficients=e.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(o-i);for(var r=0;r<this.coefficients.length;r++)this.coefficients[r]=t[i+r]}}else this.coefficients=t}return e.prototype.degree=function(){return this.coefficients.length-1},e.prototype.isZero=function(){return 0===this.coefficients[0]},e.prototype.getCoefficient=function(e){return this.coefficients[this.coefficients.length-1-e]},e.prototype.addOrSubtract=function(t){var o;if(this.isZero())return t;if(t.isZero())return this;var r=this.coefficients,s=t.coefficients;r.length>s.length&&(r=(o=[s,r])[0],s=o[1]);for(var a=new Uint8ClampedArray(s.length),n=s.length-r.length,l=0;l<n;l++)a[l]=s[l];for(l=n;l<s.length;l++)a[l]=i.addOrSubtractGF(r[l-n],s[l]);return new e(this.field,a)},e.prototype.multiply=function(t){if(0===t)return this.field.zero;if(1===t)return this;for(var o=this.coefficients.length,i=new Uint8ClampedArray(o),r=0;r<o;r++)i[r]=this.field.multiply(this.coefficients[r],t);return new e(this.field,i)},e.prototype.multiplyPoly=function(t){if(this.isZero()||t.isZero())return this.field.zero;for(var o=this.coefficients,r=o.length,s=t.coefficients,a=s.length,n=new Uint8ClampedArray(r+a-1),l=0;l<r;l++)for(var d=o[l],c=0;c<a;c++)n[l+c]=i.addOrSubtractGF(n[l+c],this.field.multiply(d,s[c]));return new e(this.field,n)},e.prototype.multiplyByMonomial=function(t,o){if(t<0)throw new Error("Invalid degree less than 0");if(0===o)return this.field.zero;for(var i=this.coefficients.length,r=new Uint8ClampedArray(i+t),s=0;s<i;s++)r[s]=this.field.multiply(this.coefficients[s],o);return new e(this.field,r)},e.prototype.evaluateAt=function(e){var t=0;if(0===e)return this.getCoefficient(0);var o=this.coefficients.length;if(1===e)return this.coefficients.forEach(function(e){t=i.addOrSubtractGF(t,e)}),t;t=this.coefficients[0];for(var r=1;r<o;r++)t=i.addOrSubtractGF(this.field.multiply(e,t),this.coefficients[r]);return t},e}();t.default=r},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var i=o(4),r=o(5),s=o(11),a=o(12);function n(e){var t=a.locate(e);if(!t)return null;for(var o=0,i=t;o<i.length;o++){var n=i[o],l=s.extract(e,n),d=r.decode(l.matrix);if(d)return{binaryData:d.bytes,data:d.text,chunks:d.chunks,version:d.version,location:{topRightCorner:l.mappingFunction(n.dimension,0),topLeftCorner:l.mappingFunction(0,0),bottomRightCorner:l.mappingFunction(n.dimension,n.dimension),bottomLeftCorner:l.mappingFunction(0,n.dimension),topRightFinderPattern:n.topRight,topLeftFinderPattern:n.topLeft,bottomLeftFinderPattern:n.bottomLeft,bottomRightAlignmentPattern:n.alignmentPattern}}}return null}var l={inversionAttempts:"attemptBoth"};function d(e,t,o,r){void 0===r&&(r={});var s=l;Object.keys(s||{}).forEach(function(e){s[e]=r[e]||s[e]});var a="attemptBoth"===s.inversionAttempts||"invertFirst"===s.inversionAttempts,d="onlyInvert"===s.inversionAttempts||"invertFirst"===s.inversionAttempts,c=i.binarize(e,t,o,a),h=c.binarized,p=c.inverted,u=n(d?p:h);return u||"attemptBoth"!==s.inversionAttempts&&"invertFirst"!==s.inversionAttempts||(u=n(d?h:p)),u}d.default=d,t.default=d},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var i=o(0);function r(e,t,o){return e<t?t:e>o?o:e}var s=function(){function e(e,t){this.width=e,this.data=new Uint8ClampedArray(e*t)}return e.prototype.get=function(e,t){return this.data[t*this.width+e]},e.prototype.set=function(e,t,o){this.data[t*this.width+e]=o},e}();t.binarize=function(e,t,o,a){if(e.length!==t*o*4)throw new Error("Malformed data passed to binarizer.");for(var n=new s(t,o),l=0;l<t;l++)for(var d=0;d<o;d++){var c=e[4*(d*t+l)+0],h=e[4*(d*t+l)+1],p=e[4*(d*t+l)+2];n.set(l,d,.2126*c+.7152*h+.0722*p)}for(var u=Math.ceil(t/8),m=Math.ceil(o/8),g=new s(u,m),v=0;v<m;v++)for(var f=0;f<u;f++){var y=0,_=1/0,b=0;for(d=0;d<8;d++)for(l=0;l<8;l++){var x=n.get(8*f+l,8*v+d);y+=x,_=Math.min(_,x),b=Math.max(b,x)}var w=y/Math.pow(8,2);if(b-_<=24&&(w=_/2,v>0&&f>0)){var k=(g.get(f,v-1)+2*g.get(f-1,v)+g.get(f-1,v-1))/4;_<k&&(w=k)}g.set(f,v,w)}var $=i.BitMatrix.createEmpty(t,o),C=null;for(a&&(C=i.BitMatrix.createEmpty(t,o)),v=0;v<m;v++)for(f=0;f<u;f++){for(var B=r(f,2,u-3),S=r(v,2,m-3),F=(y=0,-2);F<=2;F++)for(var A=-2;A<=2;A++)y+=g.get(B+F,S+A);var M=y/25;for(F=0;F<8;F++)for(A=0;A<8;A++){l=8*f+F,d=8*v+A;var D=n.get(l,d);$.set(l,d,D<=M),a&&C.set(l,d,!(D<=M))}}return a?{binarized:$,inverted:C}:{binarized:$}}},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),r=o(6),s=o(9),a=o(10);function n(e,t){for(var o=e^t,i=0;o;)i++,o&=o-1;return i}function l(e,t){return t<<1|e}var d=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],c=[function(e){return(e.y+e.x)%2==0},function(e){return e.y%2==0},function(e){return e.x%3==0},function(e){return(e.y+e.x)%3==0},function(e){return(Math.floor(e.y/2)+Math.floor(e.x/3))%2==0},function(e){return e.x*e.y%2+e.x*e.y%3==0},function(e){return(e.y*e.x%2+e.y*e.x%3)%2==0},function(e){return((e.y+e.x)%2+e.y*e.x%3)%2==0}];function h(e){var t=function(e){var t=e.height,o=Math.floor((t-17)/4);if(o<=6)return a.VERSIONS[o-1];for(var i=0,r=5;r>=0;r--)for(var s=t-9;s>=t-11;s--)i=l(e.get(s,r),i);var d=0;for(s=5;s>=0;s--)for(r=t-9;r>=t-11;r--)d=l(e.get(s,r),d);for(var c,h=1/0,p=0,u=a.VERSIONS;p<u.length;p++){var m=u[p];if(m.infoBits===i||m.infoBits===d)return m;var g=n(i,m.infoBits);g<h&&(c=m,h=g),(g=n(d,m.infoBits))<h&&(c=m,h=g)}return h<=3?c:void 0}(e);if(!t)return null;var o=function(e){for(var t=0,o=0;o<=8;o++)6!==o&&(t=l(e.get(o,8),t));for(var i=7;i>=0;i--)6!==i&&(t=l(e.get(8,i),t));var r=e.height,s=0;for(i=r-1;i>=r-7;i--)s=l(e.get(8,i),s);for(o=r-8;o<r;o++)s=l(e.get(o,8),s);for(var a=1/0,c=null,h=0,p=d;h<p.length;h++){var u=p[h],m=u.bits,g=u.formatInfo;if(m===t||m===s)return g;var v=n(t,m);v<a&&(c=g,a=v),t!==s&&(v=n(s,m))<a&&(c=g,a=v)}return a<=3?c:null}(e);if(!o)return null;var h=function(e,t,o){var i=t.errorCorrectionLevels[o],r=[],s=0;if(i.ecBlocks.forEach(function(e){for(var t=0;t<e.numBlocks;t++)r.push({numDataCodewords:e.dataCodewordsPerBlock,codewords:[]}),s+=e.dataCodewordsPerBlock+i.ecCodewordsPerBlock}),e.length<s)return null;e=e.slice(0,s);for(var a=i.ecBlocks[0].dataCodewordsPerBlock,n=0;n<a;n++)for(var l=0,d=r;l<d.length;l++)d[l].codewords.push(e.shift());if(i.ecBlocks.length>1){var c=i.ecBlocks[0].numBlocks,h=i.ecBlocks[1].numBlocks;for(n=0;n<h;n++)r[c+n].codewords.push(e.shift())}for(;e.length>0;)for(var p=0,u=r;p<u.length;p++)u[p].codewords.push(e.shift());return r}(function(e,t,o){for(var r=c[o.dataMask],s=e.height,a=function(e){var t=17+4*e.versionNumber,o=i.BitMatrix.createEmpty(t,t);o.setRegion(0,0,9,9,!0),o.setRegion(t-8,0,8,9,!0),o.setRegion(0,t-8,9,8,!0);for(var r=0,s=e.alignmentPatternCenters;r<s.length;r++)for(var a=s[r],n=0,l=e.alignmentPatternCenters;n<l.length;n++){var d=l[n];6===a&&6===d||6===a&&d===t-7||a===t-7&&6===d||o.setRegion(a-2,d-2,5,5,!0)}return o.setRegion(6,9,1,t-17,!0),o.setRegion(9,6,t-17,1,!0),e.versionNumber>6&&(o.setRegion(t-11,0,3,6,!0),o.setRegion(0,t-11,6,3,!0)),o}(t),n=[],d=0,h=0,p=!0,u=s-1;u>0;u-=2){6===u&&u--;for(var m=0;m<s;m++)for(var g=p?s-1-m:m,v=0;v<2;v++){var f=u-v;if(!a.get(f,g)){h++;var y=e.get(f,g);r({y:g,x:f})&&(y=!y),d=l(y,d),8===h&&(n.push(d),h=0,d=0)}}p=!p}return n}(e,t,o),t,o.errorCorrectionLevel);if(!h)return null;for(var p=h.reduce(function(e,t){return e+t.numDataCodewords},0),u=new Uint8ClampedArray(p),m=0,g=0,v=h;g<v.length;g++){var f=v[g],y=s.decode(f.codewords,f.codewords.length-f.numDataCodewords);if(!y)return null;for(var _=0;_<f.numDataCodewords;_++)u[m++]=y[_]}try{return r.decode(u,t.versionNumber)}catch(e){return null}}t.decode=function(e){if(null==e)return null;var t=h(e);if(t)return t;for(var o=0;o<e.width;o++)for(var i=o+1;i<e.height;i++)e.get(o,i)!==e.get(i,o)&&(e.set(o,i,!e.get(o,i)),e.set(i,o,!e.get(i,o)));return h(e)}},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var i,r,s=o(7),a=o(8);function n(e,t){for(var o=[],i="",r=[10,12,14][t],s=e.readBits(r);s>=3;){if((d=e.readBits(10))>=1e3)throw new Error("Invalid numeric value above 999");var a=Math.floor(d/100),n=Math.floor(d/10)%10,l=d%10;o.push(48+a,48+n,48+l),i+=a.toString()+n.toString()+l.toString(),s-=3}if(2===s){if((d=e.readBits(7))>=100)throw new Error("Invalid numeric value above 99");a=Math.floor(d/10),n=d%10,o.push(48+a,48+n),i+=a.toString()+n.toString()}else if(1===s){var d;if((d=e.readBits(4))>=10)throw new Error("Invalid numeric value above 9");o.push(48+d),i+=d.toString()}return{bytes:o,text:i}}!function(e){e.Numeric="numeric",e.Alphanumeric="alphanumeric",e.Byte="byte",e.Kanji="kanji",e.ECI="eci"}(i=t.Mode||(t.Mode={})),function(e){e[e.Terminator=0]="Terminator",e[e.Numeric=1]="Numeric",e[e.Alphanumeric=2]="Alphanumeric",e[e.Byte=4]="Byte",e[e.Kanji=8]="Kanji",e[e.ECI=7]="ECI"}(r||(r={}));var l=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function d(e,t){for(var o=[],i="",r=[9,11,13][t],s=e.readBits(r);s>=2;){var a=e.readBits(11),n=Math.floor(a/45),d=a%45;o.push(l[n].charCodeAt(0),l[d].charCodeAt(0)),i+=l[n]+l[d],s-=2}return 1===s&&(n=e.readBits(6),o.push(l[n].charCodeAt(0)),i+=l[n]),{bytes:o,text:i}}function c(e,t){for(var o=[],i="",r=[8,16,16][t],s=e.readBits(r),a=0;a<s;a++){var n=e.readBits(8);o.push(n)}try{i+=decodeURIComponent(o.map(function(e){return"%"+("0"+e.toString(16)).substr(-2)}).join(""))}catch(e){}return{bytes:o,text:i}}function h(e,t){for(var o=[],i="",r=[8,10,12][t],s=e.readBits(r),n=0;n<s;n++){var l=e.readBits(13),d=Math.floor(l/192)<<8|l%192;d+=d<7936?33088:49472,o.push(d>>8,255&d),i+=String.fromCharCode(a.shiftJISTable[d])}return{bytes:o,text:i}}t.decode=function(e,t){for(var o,a,l,p,u=new s.BitStream(e),m=t<=9?0:t<=26?1:2,g={text:"",bytes:[],chunks:[],version:t};u.available()>=4;){var v=u.readBits(4);if(v===r.Terminator)return g;if(v===r.ECI)0===u.readBits(1)?g.chunks.push({type:i.ECI,assignmentNumber:u.readBits(7)}):0===u.readBits(1)?g.chunks.push({type:i.ECI,assignmentNumber:u.readBits(14)}):0===u.readBits(1)?g.chunks.push({type:i.ECI,assignmentNumber:u.readBits(21)}):g.chunks.push({type:i.ECI,assignmentNumber:-1});else if(v===r.Numeric){var f=n(u,m);g.text+=f.text,(o=g.bytes).push.apply(o,f.bytes),g.chunks.push({type:i.Numeric,text:f.text})}else if(v===r.Alphanumeric){var y=d(u,m);g.text+=y.text,(a=g.bytes).push.apply(a,y.bytes),g.chunks.push({type:i.Alphanumeric,text:y.text})}else if(v===r.Byte){var _=c(u,m);g.text+=_.text,(l=g.bytes).push.apply(l,_.bytes),g.chunks.push({type:i.Byte,bytes:_.bytes,text:_.text})}else if(v===r.Kanji){var b=h(u,m);g.text+=b.text,(p=g.bytes).push.apply(p,b.bytes),g.chunks.push({type:i.Kanji,bytes:b.bytes,text:b.text})}}if(0===u.available()||0===u.readBits(u.available()))return g}},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this.byteOffset=0,this.bitOffset=0,this.bytes=e}return e.prototype.readBits=function(e){if(e<1||e>32||e>this.available())throw new Error("Cannot read "+e.toString()+" bits");var t=0;if(this.bitOffset>0){var o=8-this.bitOffset,i=e<o?e:o,r=255>>8-i<<(s=o-i);t=(this.bytes[this.byteOffset]&r)>>s,e-=i,this.bitOffset+=i,8===this.bitOffset&&(this.bitOffset=0,this.byteOffset++)}if(e>0){for(;e>=8;)t=t<<8|255&this.bytes[this.byteOffset],this.byteOffset++,e-=8;var s;e>0&&(r=255>>(s=8-e)<<s,t=t<<e|(this.bytes[this.byteOffset]&r)>>s,this.bitOffset+=e)}return t},e.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},e}();t.BitStream=i},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var i=o(1),r=o(2);t.decode=function(e,t){var o=new Uint8ClampedArray(e.length);o.set(e);for(var s=new i.default(285,256,0),a=new r.default(s,o),n=new Uint8ClampedArray(t),l=!1,d=0;d<t;d++){var c=a.evaluateAt(s.exp(d+s.generatorBase));n[n.length-1-d]=c,0!==c&&(l=!0)}if(!l)return o;var h=new r.default(s,n),p=function(e,t,o,i){var r;t.degree()<o.degree()&&(t=(r=[o,t])[0],o=r[1]);for(var s=t,a=o,n=e.zero,l=e.one;a.degree()>=i/2;){var d=s,c=n;if(n=l,(s=a).isZero())return null;a=d;for(var h=e.zero,p=s.getCoefficient(s.degree()),u=e.inverse(p);a.degree()>=s.degree()&&!a.isZero();){var m=a.degree()-s.degree(),g=e.multiply(a.getCoefficient(a.degree()),u);h=h.addOrSubtract(e.buildMonomial(m,g)),a=a.addOrSubtract(s.multiplyByMonomial(m,g))}if(l=h.multiplyPoly(n).addOrSubtract(c),a.degree()>=s.degree())return null}var v=l.getCoefficient(0);if(0===v)return null;var f=e.inverse(v);return[l.multiply(f),a.multiply(f)]}(s,s.buildMonomial(t,1),h,t);if(null===p)return null;var u=function(e,t){var o=t.degree();if(1===o)return[t.getCoefficient(1)];for(var i=new Array(o),r=0,s=1;s<e.size&&r<o;s++)0===t.evaluateAt(s)&&(i[r]=e.inverse(s),r++);return r!==o?null:i}(s,p[0]);if(null==u)return null;for(var m=function(e,t,o){for(var r=o.length,s=new Array(r),a=0;a<r;a++){for(var n=e.inverse(o[a]),l=1,d=0;d<r;d++)a!==d&&(l=e.multiply(l,i.addOrSubtractGF(1,e.multiply(o[d],n))));s[a]=e.multiply(t.evaluateAt(n),e.inverse(l)),0!==e.generatorBase&&(s[a]=e.multiply(s[a],n))}return s}(s,p[1],u),g=0;g<u.length;g++){var v=o.length-1-s.log(u[g]);if(v<0)return null;o[v]=i.addOrSubtractGF(o[v],m[g])}return o}},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var i=o(0);function r(e,t,o,i){var r=e.x-t.x+o.x-i.x,s=e.y-t.y+o.y-i.y;if(0===r&&0===s)return{a11:t.x-e.x,a12:t.y-e.y,a13:0,a21:o.x-t.x,a22:o.y-t.y,a23:0,a31:e.x,a32:e.y,a33:1};var a=t.x-o.x,n=i.x-o.x,l=t.y-o.y,d=i.y-o.y,c=a*d-n*l,h=(r*d-n*s)/c,p=(a*s-r*l)/c;return{a11:t.x-e.x+h*t.x,a12:t.y-e.y+h*t.y,a13:h,a21:i.x-e.x+p*i.x,a22:i.y-e.y+p*i.y,a23:p,a31:e.x,a32:e.y,a33:1}}t.extract=function(e,t){for(var o=(h={x:t.dimension-3.5,y:3.5},p={x:t.dimension-6.5,y:t.dimension-6.5},u={x:3.5,y:t.dimension-3.5},m=void 0,{a11:(m=r({x:3.5,y:3.5},h,p,u)).a22*m.a33-m.a23*m.a32,a12:m.a13*m.a32-m.a12*m.a33,a13:m.a12*m.a23-m.a13*m.a22,a21:m.a23*m.a31-m.a21*m.a33,a22:m.a11*m.a33-m.a13*m.a31,a23:m.a13*m.a21-m.a11*m.a23,a31:m.a21*m.a32-m.a22*m.a31,a32:m.a12*m.a31-m.a11*m.a32,a33:m.a11*m.a22-m.a12*m.a21}),s=function(e,t){return{a11:e.a11*t.a11+e.a21*t.a12+e.a31*t.a13,a12:e.a12*t.a11+e.a22*t.a12+e.a32*t.a13,a13:e.a13*t.a11+e.a23*t.a12+e.a33*t.a13,a21:e.a11*t.a21+e.a21*t.a22+e.a31*t.a23,a22:e.a12*t.a21+e.a22*t.a22+e.a32*t.a23,a23:e.a13*t.a21+e.a23*t.a22+e.a33*t.a23,a31:e.a11*t.a31+e.a21*t.a32+e.a31*t.a33,a32:e.a12*t.a31+e.a22*t.a32+e.a32*t.a33,a33:e.a13*t.a31+e.a23*t.a32+e.a33*t.a33}}(r(t.topLeft,t.topRight,t.alignmentPattern,t.bottomLeft),o),a=i.BitMatrix.createEmpty(t.dimension,t.dimension),n=function(e,t){var o=s.a13*e+s.a23*t+s.a33;return{x:(s.a11*e+s.a21*t+s.a31)/o,y:(s.a12*e+s.a22*t+s.a32)/o}},l=0;l<t.dimension;l++)for(var d=0;d<t.dimension;d++){var c=n(d+.5,l+.5);a.set(d,l,e.get(Math.floor(c.x),Math.floor(c.y)))}var h,p,u,m;return{matrix:a,mappingFunction:n}}},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))};function r(e){return e.reduce(function(e,t){return e+t})}function s(e,t,o,r){var s,a,n,l,d=[{x:Math.floor(e.x),y:Math.floor(e.y)}],c=Math.abs(t.y-e.y)>Math.abs(t.x-e.x);c?(s=Math.floor(e.y),a=Math.floor(e.x),n=Math.floor(t.y),l=Math.floor(t.x)):(s=Math.floor(e.x),a=Math.floor(e.y),n=Math.floor(t.x),l=Math.floor(t.y));for(var h=Math.abs(n-s),p=Math.abs(l-a),u=Math.floor(-h/2),m=s<n?1:-1,g=a<l?1:-1,v=!0,f=s,y=a;f!==n+m;f+=m){var _=c?y:f,b=c?f:y;if(o.get(_,b)!==v&&(v=!v,d.push({x:_,y:b}),d.length===r+1))break;if((u+=p)>0){if(y===l)break;y+=g,u-=h}}for(var x=[],w=0;w<r;w++)d[w]&&d[w+1]?x.push(i(d[w],d[w+1])):x.push(0);return x}function a(e,t,o,i){var r,a=t.y-e.y,n=t.x-e.x,l=s(e,t,o,Math.ceil(i/2)),d=s(e,{x:e.x-n,y:e.y-a},o,Math.ceil(i/2)),c=l.shift()+d.shift()-1;return(r=d.concat(c)).concat.apply(r,l)}function n(e,t){var o=r(e)/r(t),i=0;return t.forEach(function(t,r){i+=Math.pow(e[r]-t*o,2)}),{averageSize:o,error:i}}function l(e,t,o){try{var i=a(e,{x:-1,y:e.y},o,t.length),r=a(e,{x:e.x,y:-1},o,t.length),s=a(e,{x:Math.max(0,e.x-e.y)-1,y:Math.max(0,e.y-e.x)-1},o,t.length),l=a(e,{x:Math.min(o.width,e.x+e.y)+1,y:Math.min(o.height,e.y+e.x)+1},o,t.length),d=n(i,t),c=n(r,t),h=n(s,t),p=n(l,t),u=Math.sqrt(d.error*d.error+c.error*c.error+h.error*h.error+p.error*p.error),m=(d.averageSize+c.averageSize+h.averageSize+p.averageSize)/4;return u+(Math.pow(d.averageSize-m,2)+Math.pow(c.averageSize-m,2)+Math.pow(h.averageSize-m,2)+Math.pow(p.averageSize-m,2))/m}catch(e){return 1/0}}function d(e,t){for(var o=Math.round(t.x);e.get(o,Math.round(t.y));)o--;for(var i=Math.round(t.x);e.get(i,Math.round(t.y));)i++;for(var r=(o+i)/2,s=Math.round(t.y);e.get(Math.round(r),s);)s--;for(var a=Math.round(t.y);e.get(Math.round(r),a);)a++;return{x:r,y:(s+a)/2}}function c(e,t,o,s,n){var d,c,h;try{d=function(e,t,o,s){var n=(r(a(e,o,s,5))/7+r(a(e,t,s,5))/7+r(a(o,e,s,5))/7+r(a(t,e,s,5))/7)/4;if(n<1)throw new Error("Invalid module size");var l=Math.round(i(e,t)/n),d=Math.round(i(e,o)/n),c=Math.floor((l+d)/2)+7;switch(c%4){case 0:c++;break;case 2:c--}return{dimension:c,moduleSize:n}}(s,o,n,e),c=d.dimension,h=d.moduleSize}catch(e){return null}var p=o.x-s.x+n.x,u=o.y-s.y+n.y,m=(i(s,n)+i(s,o))/2/h,g=1-3/m,v={x:s.x+g*(p-s.x),y:s.y+g*(u-s.y)},f=t.map(function(t){var o=(t.top.startX+t.top.endX+t.bottom.startX+t.bottom.endX)/4,s=(t.top.y+t.bottom.y+1)/2;if(e.get(Math.floor(o),Math.floor(s)))return r([t.top.endX-t.top.startX,t.bottom.endX-t.bottom.startX,t.bottom.y-t.top.y+1]),{x:o,y:s,score:l({x:Math.floor(o),y:Math.floor(s)},[1,1,1],e)+i({x:o,y:s},v)}}).filter(function(e){return!!e}).sort(function(e,t){return e.score-t.score});return{alignmentPattern:m>=15&&f.length?f[0]:v,dimension:c}}t.locate=function(e){for(var t=[],o=[],s=[],a=[],n=function(i){for(var n=0,l=!1,d=[0,0,0,0,0],c=function(t){var s=e.get(t,i);if(s===l)n++;else{d=[d[1],d[2],d[3],d[4],n],n=1,l=s;var c=r(d)/7,h=Math.abs(d[0]-c)<c&&Math.abs(d[1]-c)<c&&Math.abs(d[2]-3*c)<3*c&&Math.abs(d[3]-c)<c&&Math.abs(d[4]-c)<c&&!s,p=r(d.slice(-3))/3,u=Math.abs(d[2]-p)<p&&Math.abs(d[3]-p)<p&&Math.abs(d[4]-p)<p&&s;if(h){var m=t-d[3]-d[4],g=m-d[2],v={startX:g,endX:m,y:i};(f=o.filter(function(e){return g>=e.bottom.startX&&g<=e.bottom.endX||m>=e.bottom.startX&&g<=e.bottom.endX||g<=e.bottom.startX&&m>=e.bottom.endX&&d[2]/(e.bottom.endX-e.bottom.startX)<1.5&&d[2]/(e.bottom.endX-e.bottom.startX)>.5})).length>0?f[0].bottom=v:o.push({top:v,bottom:v})}if(u){var f,y=t-d[4],_=y-d[3];v={startX:_,y:i,endX:y},(f=a.filter(function(e){return _>=e.bottom.startX&&_<=e.bottom.endX||y>=e.bottom.startX&&_<=e.bottom.endX||_<=e.bottom.startX&&y>=e.bottom.endX&&d[2]/(e.bottom.endX-e.bottom.startX)<1.5&&d[2]/(e.bottom.endX-e.bottom.startX)>.5})).length>0?f[0].bottom=v:a.push({top:v,bottom:v})}}},h=-1;h<=e.width;h++)c(h);t.push.apply(t,o.filter(function(e){return e.bottom.y!==i&&e.bottom.y-e.top.y>=2})),o=o.filter(function(e){return e.bottom.y===i}),s.push.apply(s,a.filter(function(e){return e.bottom.y!==i})),a=a.filter(function(e){return e.bottom.y===i})},h=0;h<=e.height;h++)n(h);t.push.apply(t,o.filter(function(e){return e.bottom.y-e.top.y>=2})),s.push.apply(s,a);var p=t.filter(function(e){return e.bottom.y-e.top.y>=2}).map(function(t){var o=(t.top.startX+t.top.endX+t.bottom.startX+t.bottom.endX)/4,i=(t.top.y+t.bottom.y+1)/2;if(e.get(Math.round(o),Math.round(i))){var s=[t.top.endX-t.top.startX,t.bottom.endX-t.bottom.startX,t.bottom.y-t.top.y+1],a=r(s)/s.length;return{score:l({x:Math.round(o),y:Math.round(i)},[1,1,3,1,1],e),x:o,y:i,size:a}}}).filter(function(e){return!!e}).sort(function(e,t){return e.score-t.score}).map(function(e,t,o){if(t>4)return null;var i=o.filter(function(e,o){return t!==o}).map(function(t){return{x:t.x,y:t.y,score:t.score+Math.pow(t.size-e.size,2)/e.size,size:t.size}}).sort(function(e,t){return e.score-t.score});if(i.length<2)return null;var r=e.score+i[0].score+i[1].score;return{points:[e].concat(i.slice(0,2)),score:r}}).filter(function(e){return!!e}).sort(function(e,t){return e.score-t.score});if(0===p.length)return null;var u=function(e,t,o){var r,s,a,n,l,d,c,h=i(e,t),p=i(t,o),u=i(e,o);return p>=h&&p>=u?(l=(r=[t,e,o])[0],d=r[1],c=r[2]):u>=p&&u>=h?(l=(s=[e,t,o])[0],d=s[1],c=s[2]):(l=(a=[e,o,t])[0],d=a[1],c=a[2]),(c.x-d.x)*(l.y-d.y)-(c.y-d.y)*(l.x-d.x)<0&&(l=(n=[c,l])[0],c=n[1]),{bottomLeft:l,topLeft:d,topRight:c}}(p[0].points[0],p[0].points[1],p[0].points[2]),m=u.topRight,g=u.topLeft,v=u.bottomLeft,f=c(e,s,m,g,v),y=[];f&&y.push({alignmentPattern:{x:f.alignmentPattern.x,y:f.alignmentPattern.y},bottomLeft:{x:v.x,y:v.y},dimension:f.dimension,topLeft:{x:g.x,y:g.y},topRight:{x:m.x,y:m.y}});var _=d(e,m),b=d(e,g),x=d(e,v),w=c(e,s,_,b,x);return w&&y.push({alignmentPattern:{x:w.alignmentPattern.x,y:w.alignmentPattern.y},bottomLeft:{x:x.x,y:x.y},topLeft:{x:b.x,y:b.y},topRight:{x:_.x,y:_.y},dimension:w.dimension}),0===y.length?null:y}}]).default},kv.exports=wv()),Cv=bv($v);const Bv=[[1,"Companion"],[2,"Repeater"],[3,"Room server"],[4,"Sensor"]];let Sv=class extends Lp{constructor(){super(),this.open=!1,this._text="",this._name="",this._type=1,this._preview=null,this._error="",this._info="",this._busy=!1,this._reading=!1,this._checkSeq=0,this._nameEdited=!1,this._typeEdited=!1,fm(this,{isOpen:()=>this.open,onEscape:()=>this._close()})}willUpdate(e){e.has("open")&&this.open&&(this._text="",this._name="",this._type=1,this._preview=null,this._error="",this._info="",this._nameEdited=!1,this._typeEdited=!1)}_close(){clearTimeout(this._checkTimer),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_onText(e){this._text=e,this._info="",clearTimeout(this._checkTimer),this._checkTimer=setTimeout(()=>{this._check()},300)}_errorText(e){var t;switch(e.code){case"empty":return"";case"invalid_key":return uh("The public key must be 64 hex characters.");case"invalid_card":return uh("The contact card cannot be read.");case"invalid":return uh("Enter a public key (64 hex characters), a meshcore:// link or a contact card.");case"already_added":return uh("This contact is already added.");case"name_required":return uh("Enter a name for the contact.");case"not_connected":return uh("The companion radio is not connected.");default:return null!==(t=e.message)&&void 0!==t?t:String(e)}}async _check(){if(!this.hass)return;const e=++this._checkSeq;if(!this._text.trim())return this._preview=null,void(this._error="");try{const t={type:"meshcore_chattx/import_contact",text:this._text,dry_run:!0};this.entryId&&(t.entry_id=this.entryId);const o=await this.hass.callWS(t);if(e!==this._checkSeq)return;this._preview=o,this._error="",this._nameEdited||(this._name=o.name),this._typeEdited||(this._type=o.type)}catch(t){if(e!==this._checkSeq)return;this._preview=null,this._error=this._errorText(t)}}async _loadImage(e){if(e){this._reading=!0,this._error="",this._info="";try{const t=await async function(e){const t=await createImageBitmap(e);try{const e=globalThis.BarcodeDetector;if(e)try{var o;const i=await new e({formats:["qr_code"]}).detect(t);if(null!==(o=i[0])&&void 0!==o&&o.rawValue)return i[0].rawValue}catch(e){}const i=Math.min(1,1200/Math.max(t.width,t.height)),r=Math.max(1,Math.round(t.width*i)),s=Math.max(1,Math.round(t.height*i)),a=document.createElement("canvas");a.width=r,a.height=s;const n=a.getContext("2d",{willReadFrequently:!0});n.fillStyle="#fff",n.fillRect(0,0,r,s),n.drawImage(t,0,0,r,s);const l=n.getImageData(0,0,r,s),d=Cv(l.data,r,s,{inversionAttempts:"attemptBoth"});return(null==d?void 0:d.data)||null}finally{var i;null===(i=t.close)||void 0===i||i.call(t)}}(e);if(!t)return void(this._error=uh("No QR code found in the image. Try a sharper or tighter crop."));this._text=t,this._info=uh("QR code read."),await this._check()}catch(e){this._error=uh("This file can't be read as an image.")}finally{this._reading=!1}}}_onPaste(e){var t,o;const i=Array.from(null!==(t=null===(o=e.clipboardData)||void 0===o?void 0:o.items)&&void 0!==t?t:[]).find(e=>e.type.startsWith("image/"));i&&(e.preventDefault(),this._loadImage(i.getAsFile()))}async _add(){if(this.hass&&this._preview&&!this._busy){this._busy=!0,this._error="";try{const e={type:"meshcore_chattx/import_contact",text:this._text};"key"===this._preview.kind&&(e.name=this._name.trim(),e.node_type=this._type),this.entryId&&(e.entry_id=this.entryId);const t=await this.hass.callWS(e);this.dispatchEvent(new CustomEvent("contact-imported",{detail:t,bubbles:!0,composed:!0})),this._close()}catch(e){this._error=this._errorText(e)}finally{this._busy=!1}}}render(){var e;if(!this.open)return kp;const t=this._preview,o=!(!t||t.already_added||this._busy||"card"!==t.kind&&!this._name.trim());return bp(sn||(sn=Sc`
      <div class="dialog-overlay" @click=${0}>
        <div class="dialog" role="dialog" aria-modal="true" aria-label=${0}
          @click=${0} @paste=${0}>
          <div class="dialog-header"><div class="dialog-header-title">${0}</div></div>
          <div class="dialog-body">
            <label for="chattx-contact-text">${0}</label>
            <textarea id="chattx-contact-text" class="form-input" spellcheck="false" autocomplete="off"
              placeholder="meshcore://contact/add?name=…&public_key=…&type=1"
              .value=${0} @input=${0}></textarea>
            <div class="row">
              <button class="qr-btn" ?disabled=${0}
                @click=${0}>
                ${0}
              </button>
              <input id="chattx-qr-file" type="file" accept="image/*"
                @change=${0} />
            </div>
            <div class="hint">${0}</div>
            ${0}

            ${0}
            ${0}
          </div>
          <div class="dialog-footer">
            <button class="dialog-button" @click=${0}>${0}</button>
            <button class="dialog-button primary" ?disabled=${0} @click=${0}>
              ${0}
            </button>
          </div>
        </div>
      </div>
    `),this._close,uh("Add contact manually"),e=>e.stopPropagation(),this._onPaste,uh("Add contact manually"),uh("Public key, MeshCore link or contact card"),this._text,e=>this._onText(e.target.value),this._reading,()=>{var e;return null===(e=this.renderRoot.querySelector("#chattx-qr-file"))||void 0===e?void 0:e.click()},this._reading?uh("Reading…"):uh("Load QR code from image"),e=>{var t;const o=e.target;this._loadImage(null===(t=o.files)||void 0===t?void 0:t[0]),o.value=""},uh("You can also paste a QR code image here (Ctrl+V)."),this._info?bp(an||(an=Sc`<div class="hint ok">${0}</div>`),this._info):kp,t?bp(nn||(nn=Sc`
              ${0}
              <div class="preview">
                <div><strong>${0}</strong>
                  · ${0}</div>
                <div class="key">${0}</div>
                <div style="margin-top: 6px;">
                  ${0}
                </div>
              </div>
            `),"key"===t.kind?bp(ln||(ln=Sc`
                <label for="chattx-contact-name">${0}</label>
                <input id="chattx-contact-name" type="text" class="form-input" maxlength="31" .value=${0}
                  @input=${0} />
                <label for="chattx-contact-type">${0}</label>
                <select id="chattx-contact-type" class="form-input" .value=${0}
                  @change=${0}>
                  ${0}
                </select>
              `),uh("Name"),this._name,e=>{this._name=e.target.value,this._nameEdited=!0},uh("Type"),String(this._type),e=>{this._type=Number(e.target.value),this._typeEdited=!0},Bv.map(([e,t])=>bp(dn||(dn=Sc`<option value=${0} ?selected=${0}>${0}</option>`),e,this._type===e,uh(t)))):kp,"key"===t.kind?this._name||"—":t.name||"—",uh((null!==(e=Bv.find(([e])=>e===("key"===t.kind?this._type:t.type)))&&void 0!==e?e:Bv[0])[1]),t.public_key,t.already_added?bp(cn||(cn=Sc`<span class="warn">${0}</span>`),uh("This contact is already added.")):"card"===t.kind?bp(hn||(hn=Sc`<span class="ok">${0}</span>`),uh("Signed contact card: the radio adds it with its name and location.")):bp(pn||(pn=Sc`<span class="ok">${0}</span>`),t.known?uh("Known from the mesh; it will be added."):uh("Not heard yet; it will be added and messages go by flood until a path is found."))):kp,this._error?bp(un||(un=Sc`<div class="error" role="alert">${0}</div>`),this._error):kp,this._close,uh("Cancel"),!o,this._add,this._busy?uh("Adding…"):uh("Add contact"))}};Sv.styles=[Wp,Rh(mn||(mn=Sc`
    :host { display: contents; }
    .dialog-overlay { z-index: 1100; }
    .dialog { max-width: 480px; }
    label { display: block; font-size: 13px; color: var(--primary-text-color); margin: 10px 0 4px; }
    textarea { width: 100%; box-sizing: border-box; min-height: 84px; resize: vertical;
      font-family: monospace; font-size: 12px; }
    .row { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 8px; }
    .hint { font-size: 12px; color: var(--secondary-text-color); margin-top: 4px; }
    .qr-btn { padding: 6px 12px; border: 1px solid var(--divider-color, #e0e0e0); border-radius: 6px;
      background: transparent; color: var(--primary-text-color); font: inherit; font-size: 13px; cursor: pointer; }
    .qr-btn:hover:not(:disabled) { border-color: var(--primary-color, #03a9f4); }
    input[type=file] { display: none; }
    .preview { margin-top: 12px; padding: 10px; border-radius: 8px;
      background: var(--secondary-background-color, rgba(127,127,127,0.1)); font-size: 13px; }
    .preview .key { font-family: monospace; font-size: 11px; color: var(--secondary-text-color);
      overflow-wrap: anywhere; margin-top: 4px; }
    .ok { color: var(--success-color, #43a047); }
    .warn { color: var(--warning-color, #ff9800); }
    select, input[type=text] { width: 100%; box-sizing: border-box; }
    .error { font-size: 13px; color: var(--error-color, #db4437); margin-top: 8px; }
  `)),Xp],Fc([Up({attribute:!1})],Sv.prototype,"hass",void 0),Fc([Up({type:String})],Sv.prototype,"entryId",void 0),Fc([Up({type:Boolean})],Sv.prototype,"open",void 0),Fc([Vp()],Sv.prototype,"_text",void 0),Fc([Vp()],Sv.prototype,"_name",void 0),Fc([Vp()],Sv.prototype,"_type",void 0),Fc([Vp()],Sv.prototype,"_preview",void 0),Fc([Vp()],Sv.prototype,"_error",void 0),Fc([Vp()],Sv.prototype,"_info",void 0),Fc([Vp()],Sv.prototype,"_busy",void 0),Fc([Vp()],Sv.prototype,"_reading",void 0),Sv=Fc([qp("chattx-contact-import-dialog")],Sv);let Fv=class extends Lp{constructor(){super(...arguments),this.selected=!1}render(){if(!this.contact)return bp(gn||(gn=Sc``));const e=this.contact,t=this._getTypeClass(e.type),{label:o,cls:i}=this._getCategoryBadge(e);return bp(vn||(vn=Sc`
      <div class=${0}>
        <div class="contact-avatar ${0}">
          ${0}
        </div>
        <div class="contact-info">
          <div class="contact-name">${0}</div>
          <div class="contact-prefix">${0}</div>
          <div class="contact-meta">
            ${0}
          </div>
        </div>
        <span class="category-badge ${0}">${0}</span>
      </div>
    `),this.selected?"contact-card selected":"contact-card",t,this._getTypeIcon(e.type),e.adv_name,e.pubkey_prefix,e.lastmod?uh("Last heard {lastmod}",{lastmod:new Date(1e3*e.lastmod).toLocaleString(hh())}):"",i,o)}_getCategoryBadge(e){return e.added_to_node?{label:uh("Added"),cls:"added"}:{label:uh("Discovered"),cls:"discovered"}}_getTypeClass(e){switch(e){case 1:return"client";case 2:return"repeater";case 3:return"room-server";case 4:return"sensor";default:return"unknown"}}_getTypeIcon(e){switch(e){case 0:case 1:return bp(fn||(fn=Sc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`));case 2:return bp(yn||(yn=Sc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`));case 3:return bp(_n||(_n=Sc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`));case 4:return bp(bn||(bn=Sc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`));default:return bp(xn||(xn=Sc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`))}}};Fv.styles=Rh(wn||(wn=Sc`
    :host {
      display: block;
      height: 100%;
    }

    .contact-card {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s;
      background: var(--card-background-color, #fff);
      height: 100%;
      box-sizing: border-box;
    }

    .contact-card:hover {
      background: rgba(0, 0, 0, 0.02);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .contact-card.selected {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      border-color: var(--primary-color, #03a9f4);
    }

    .contact-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    /* Scale down the inline 20px SVG icons inside avatars so the
       glyph reads as a tag-glyph, not a primary visual. */
    .contact-avatar svg { width: 16px; height: 16px; }

    /* Translucent backgrounds + saturated icon colour. Mirrors the
       category-badge treatment below so the avatar reads as a tag,
       not a brand-bright disc. */
    .contact-avatar.client      { background: rgba(76, 175, 80, 0.15);  color: #388e3c; }
    .contact-avatar.repeater    { background: rgba(255, 152, 0, 0.15);  color: #f57c00; }
    .contact-avatar.room-server { background: rgba(156, 39, 176, 0.15); color: #7b1fa2; }
    .contact-avatar.sensor      { background: rgba(96, 125, 139, 0.15); color: #455a64; }
    .contact-avatar.unknown     { background: rgba(3, 169, 244, 0.15);  color: #0288d1; }

    .contact-info {
      flex: 1;
      overflow: hidden;
    }

    .contact-name {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .contact-prefix {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      font-family: monospace;
    }

    .contact-meta {
      font-size: 11px;
      color: var(--secondary-text-color, #727272);
      margin-top: 2px;
    }

    .category-badge {
      font-size: 10px;
      font-weight: 500;
      padding: 2px 8px;
      border-radius: 10px;
      white-space: nowrap;
      flex-shrink: 0;
      align-self: center;
    }
    .category-badge.added {
      background: rgba(3, 169, 244, 0.15);
      color: #0277bd;
    }
    .category-badge.discovered {
      background: rgba(76, 175, 80, 0.15);
      color: #2e7d32;
    }
  `)),Fc([Up({type:Object})],Fv.prototype,"contact",void 0),Fc([Up({type:Boolean})],Fv.prototype,"selected",void 0),Fv=Fc([qp("chattx-contact-card")],Fv);let Av=class extends Lp{constructor(){super(...arguments),this.selected=!1}render(){if(!this.node)return bp(kn||(kn=Sc``));const e="adv_name"in this.node,t=e?2===this.node.type:"repeater"===this.node.type,o=e&&3===this.node.type,i=e?1===this.node.type:"client"===this.node.type,r=e&&4===this.node.type,s=e?this.node.adv_name:this.node.name,a=this.node.pubkey_prefix,n=e?this.node.last_advert:void 0;let l=bp($n||($n=Sc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`)),d="Contact",c="";t?(l=bp(Cn||(Cn=Sc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`)),d="Repeater",c="repeater"):o?(l=bp(Bn||(Bn=Sc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`)),d="Room Server",c="room-server"):r?(l=bp(Sn||(Sn=Sc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`)),d="Sensor",c="sensor"):i&&(l=bp(Fn||(Fn=Sc`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`)),d="Client",c="client");const h=e&&(0!==this.node.adv_lat||0!==this.node.adv_lon),p=n?new Date(1e3*n).toLocaleTimeString(hh()):uh("Unknown");return bp(An||(An=Sc`
      <div class=${0}>
        <div class="node-header">
          <div class=${0}>${0}</div>
          <div class="node-info">
            <div class="node-name">${0}</div>
            <div class="node-prefix">${0}</div>
            <div class=${0}>${0}</div>
          </div>
        </div>

        <div class="node-meta">
          ${0}
          ${0}
          ${0}
        </div>

        <div class="node-actions">
          ${0}
          ${0}
          <button class="action-btn danger" @click=${0}>${0}</button>
        </div>
      </div>
    `),this.selected?"node-card selected":"node-card",`node-avatar ${c}`,l,s,a,`node-type-label ${c}`,d,n?bp(Mn||(Mn=Sc`<div class="meta-item"><span><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px;"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></span><span>${0}</span></div>`),p):bp(Dn||(Dn=Sc``)),h?bp(En||(En=Sc`<div class="location-indicator"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 2px;"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>${0}, ${0}</div>`),this.node.adv_lat.toFixed(3),this.node.adv_lon.toFixed(3)):bp(Pn||(Pn=Sc``)),e&&this.node.out_path?bp(zn||(zn=Sc`<div class="route-info">Route: ${0}...</div>`),this.node.out_path.substring(0,12)):bp(In||(In=Sc``)),e?bp(Rn||(Rn=Sc`
            <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>${0}</button>
          `),e=>{e.stopPropagation(),this._dispatch("node-message")},uh("Message")):bp(On||(On=Sc``)),t?bp(Tn||(Tn=Sc`
            <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>${0}</button>
          `),e=>{e.stopPropagation(),this._dispatch("node-telemetry")},uh("Telemetry")):bp(Ln||(Ln=Sc``)),e=>{e.stopPropagation(),this._dispatch("node-delete")},uh("Delete"))}_dispatch(e){this.dispatchEvent(new CustomEvent(e,{detail:{node:this.node},bubbles:!0,composed:!0}))}};Av.styles=Rh(Nn||(Nn=Sc`
    :host { display: block; }

    .node-card {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s;
      background: var(--card-background-color, #fff);
    }

    .node-card:hover {
      background: rgba(0, 0, 0, 0.02);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .node-card.selected {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      border-color: var(--primary-color, #03a9f4);
    }

    .node-header { display: flex; align-items: flex-start; gap: 12px; }

    .node-avatar {
      width: 48px; height: 48px; border-radius: 50%;
      background: var(--primary-color, #03a9f4); color: #fff;
      display: flex; align-items: center; justify-content: center;
      font-weight: 600; font-size: 20px; flex-shrink: 0;
    }

    .node-avatar.repeater { background: #ff9800; }
    .node-avatar.room-server { background: #9c27b0; }
    .node-avatar.sensor { background: #607d8b; }
    .node-avatar.client { background: #4caf50; }

    .node-info { flex: 1; overflow: hidden; }

    .node-name {
      font-size: 14px; font-weight: 500; color: var(--primary-text-color);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }

    .node-prefix {
      font-size: 12px; color: var(--secondary-text-color, #727272);
      font-family: monospace; margin-top: 2px;
    }

    .node-type-label {
      font-size: 11px; font-weight: 600; color: #fff;
      background: var(--primary-color, #03a9f4);
      padding: 2px 6px; border-radius: 4px;
      margin-top: 4px; display: inline-block;
    }

    .node-type-label.repeater { background: #ff9800; }
    .node-type-label.room-server { background: #9c27b0; }
    .node-type-label.sensor { background: #607d8b; }
    .node-type-label.client { background: #4caf50; }

    .node-meta {
      display: flex; gap: 12px; margin-top: 8px; padding-top: 8px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
      font-size: 11px; color: var(--secondary-text-color, #727272);
    }

    .meta-item { display: flex; align-items: center; gap: 4px; }

    .node-actions { display: flex; gap: 6px; }

    .action-btn {
      padding: 4px 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px; background: transparent;
      color: var(--primary-text-color);
      font-size: 11px; font-weight: 500;
      cursor: pointer; transition: all 0.15s;
    }

    .action-btn:hover {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-color: var(--primary-color, #03a9f4);
    }

    .action-btn.danger {
      color: var(--error-color, #db4437);
      border-color: rgba(219, 68, 55, 0.3);
    }

    .action-btn.danger:hover {
      background: var(--error-color, #db4437);
      color: #fff;
      border-color: var(--error-color, #db4437);
    }

    .location-indicator {
      display: inline-flex; align-items: center; gap: 2px;
      padding: 2px 4px; background: rgba(0, 0, 0, 0.05);
      border-radius: 3px; font-size: 10px;
    }

    .route-info {
      font-size: 10px; color: var(--secondary-text-color, #727272);
      font-family: monospace;
    }
  `)),Fc([Up({type:Object})],Av.prototype,"node",void 0),Fc([Up({type:Boolean})],Av.prototype,"selected",void 0),Av=Fc([qp("chattx-node-card")],Av);const Mv={1:"#42a5f5",2:"#fb8c00",3:"#ab47bc",4:"#66bb6a"};function Dv(e){const t=Number(e.adv_lat),o=Number(e.adv_lon);return!Number.isFinite(t)||!Number.isFinite(o)||0===t&&0===o||Math.abs(t)>85||Math.abs(o)>180?null:{node:e,lat:t,lon:o}}let Ev=class extends Lp{constructor(){super(...arguments),this.nodes=[],this.home=null,this.loading=!1,this._tiles=new Qm(this,()=>this.hass),this._zoom=7,this._cx=0,this._cy=0,this._w=600,this._h=480,this._fitted=!1,this._userMoved=!1,this._pointers=new Map,this._moved=0,this._pinchStart=0,this._lastWheel=0,this._downMarker=null,this._clusters=new Map}firstUpdated(){const e=this.renderRoot.querySelector(".wrap");this._resize=new ResizeObserver(()=>{const t=e.getBoundingClientRect();t.width>0&&t.height>0&&(this._w=Math.round(t.width),this._h=Math.round(t.height),this._fitted&&this._userMoved||this._fit())}),this._resize.observe(e)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._resize)||void 0===e||e.disconnect()}updated(e){e.has("nodes")&&this.nodes.length>0&&(this._userMoved=!1,this._fit())}_placed(){return this.nodes.map(Dv).filter(e=>null!==e)}_fit(){let e=this._placed().map(e=>({lat:e.lat,lon:e.lon}));if(e.length>=20){const t=(e,t)=>e.slice().sort((e,t)=>e-t)[Math.floor(t*(e.length-1))],o=e.map(e=>e.lat),i=e.map(e=>e.lon),[r,s,a,n]=[t(o,.02),t(o,.98),t(i,.02),t(i,.98)];e=e.filter(e=>e.lat>=r&&e.lat<=s&&e.lon>=a&&e.lon<=n)}if(this.home&&e.push(this.home),0===e.length)return;const t=1===e.length?12:Math.min(15,Fm(e,this._w,this._h,30)),o=e.map(e=>Sm(e.lat,e.lon,t)),i=o.map(e=>e[0]),r=o.map(e=>e[1]);this._zoom=t,this._cx=(Math.min(...i)+Math.max(...i))/2,this._cy=(Math.min(...r)+Math.max(...r))/2,this._fitted=!0}_zoomAt(e,t=this._w/2,o=this._h/2){this._userMoved=!0;const i=Math.max(2,Math.min(17,e));if(i===this._zoom)return;const r=2**(i-this._zoom),s=this._cx-this._w/2+t,a=this._cy-this._h/2+o;this._cx=s*r-(t-this._w/2),this._cy=a*r-(o-this._h/2),this._zoom=i}_local(e){const t=this.renderRoot.querySelector(".wrap").getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}_onWheel(e){e.preventDefault();const t=Date.now();if(t-this._lastWheel<120)return;this._lastWheel=t;const o=this._local(e);this._zoomAt(this._zoom+(e.deltaY<0?1:-1),o.x,o.y)}_onPointerDown(e){if(0===this._pointers.size){var t,o,i;const r=null===(t=e.composedPath()[0])||void 0===t||null===(o=t.closest)||void 0===o?void 0:o.call(t,"[data-marker]");this._downMarker=null!==(i=null==r?void 0:r.getAttribute("data-marker"))&&void 0!==i?i:null}e.currentTarget.setPointerCapture(e.pointerId),this._pointers.set(e.pointerId,this._local(e)),this._moved=0,2===this._pointers.size&&(this._pinchStart=this._pinchDistance())}_pinchDistance(){const[e,t]=[...this._pointers.values()];return Math.hypot(e.x-t.x,e.y-t.y)}_onPointerMove(e){const t=this._pointers.get(e.pointerId);if(!t)return;const o=this._local(e);if(this._pointers.set(e.pointerId,o),1===this._pointers.size)this._cx-=o.x-t.x,this._cy-=o.y-t.y,this._userMoved=!0,this._moved+=Math.abs(o.x-t.x)+Math.abs(o.y-t.y);else if(2===this._pointers.size&&this._pinchStart>0){this._moved+=10;const e=this._pinchDistance(),[t,o]=[...this._pointers.values()],i={x:(t.x+o.x)/2,y:(t.y+o.y)/2};e/this._pinchStart>1.5?(this._zoomAt(this._zoom+1,i.x,i.y),this._pinchStart=e):e/this._pinchStart<.67&&(this._zoomAt(this._zoom-1,i.x,i.y),this._pinchStart=e)}}_onPointerUp(e){this._pointers.delete(e.pointerId),this._pointers.size<2&&(this._pinchStart=0),0===this._pointers.size&&this._moved<6&&this._downMarker&&this._activate(this._downMarker),0===this._pointers.size&&(this._downMarker=null)}_activate(e){const t=this._clusters.get(e);t&&(1===t.items.length?this.dispatchEvent(new CustomEvent("node-selected",{detail:{node:t.items[0].node},bubbles:!0,composed:!0})):this._zoomAt(this._zoom+2,t.x,t.y))}render(){const e=this._placed(),t=this._zoom,o=this._cx-this._w/2,i=this._cy-this._h/2,r=2**t,s=[],a=this._tiles.offline;if(a)s.push(Um(this._tiles.offlineMap,t,o,i,this._w,this._h));else for(let e=Math.floor(o/Bm);e<=Math.floor((o+this._w)/Bm);e++)for(let a=Math.floor(i/Bm);a<=Math.floor((i+this._h)/Bm);a++){if(a<0||a>=r)continue;const n=(e%r+r)%r;this._tiles.ready&&s.push(xp(qn||(qn=Sc`<image href=${0} @error=${0} @load=${0}
            x=${0} y=${0} width=${0} height=${0} />`),this._tiles.url(t,n,a),this._tiles.tileError,this._tiles.tileLoad,e*Bm-o,a*Bm-i,Bm,Bm))}const n=new Map;for(const r of e){const[e,s]=Sm(r.lat,r.lon,t),a=e-o,l=s-i;if(a<-20||l<-20||a>this._w+20||l>this._h+20)continue;const d=`${Math.floor(a/44)},${Math.floor(l/44)}`,c=n.get(d);c?(c.x=(c.x*c.items.length+a)/(c.items.length+1),c.y=(c.y*c.items.length+l)/(c.items.length+1),c.items.push(r)):n.set(d,{x:a,y:l,items:[r]})}this._clusters=n;const l=t>=11,d=[...n.entries()].map(([e,t])=>{if(1===t.items.length){var o;const i=t.items[0].node,r=null!==(o=Mv[i.type])&&void 0!==o?o:"#9e9e9e";return xp(jn||(jn=Sc`<g data-marker=${0} style="cursor:pointer">
          <circle cx=${0} cy=${0} r="12" fill="transparent" />
          <circle cx=${0} cy=${0} r="7" fill=${0} stroke="#fff" stroke-width="2"><title>${0}</title></circle>
        </g>
        ${0}`),e,t.x,t.y,t.x,t.y,r,i.adv_name,l?xp(Hn||(Hn=Sc`<text class="label" x=${0} y=${0}>${0}</text>`),t.x+10,t.y+4,i.adv_name):kp)}const i=Math.min(22,11+2.2*Math.log2(t.items.length));return xp(Un||(Un=Sc`<g data-marker=${0} style="cursor:pointer">
        <circle cx=${0} cy=${0} r=${0} fill="#d84315" fill-opacity="0.85" stroke="#fff" stroke-width="2">
          <title>${0}</title></circle>
        <text class="cluster-text" x=${0} y=${0} text-anchor="middle">${0}</text>
      </g>`),e,t.x,t.y,i,t.items.length,t.x,t.y+4,t.items.length)});let c=xp(Vn||(Vn=Sc``));if(this.home){const[e,r]=Sm(this.home.lat,this.home.lon,t);c=xp(Kn||(Kn=Sc`<circle cx=${0} cy=${0} r="9" fill="#1e88e5" stroke="#fff" stroke-width="3"><title>${0}</title></circle>`),e-o,r-i,uh("You"))}const h=this.nodes.length-e.length;return bp(Wn||(Wn=Sc`
      <div class="wrap"
        @wheel=${0}
        @pointerdown=${0}
        @pointermove=${0}
        @pointerup=${0}
        @pointercancel=${0}>
        <svg viewBox="0 0 ${0} ${0}" role="img" aria-label=${0}>
          ${0}
          ${0}
          ${0}
          <text class="attribution" x=${0} y=${0} text-anchor="end">${0}</text>
        </svg>
        ${0}
        <div class="controls" @pointerdown=${0}>
          <button aria-label=${0} @click=${0}>+</button>
          <button aria-label=${0} @click=${0}>−</button>
          <button aria-label=${0} @click=${0}>⤢</button>
        </div>
      </div>
      <div class="legend">
        <span><span class="dot" style="background:${0}"></span>${0}</span>
        <span><span class="dot" style="background:${0}"></span>${0}</span>
        <span><span class="dot" style="background:${0}"></span>${0}</span>
        <span><span class="dot" style="background:${0}"></span>${0}</span>
        <span><span class="dot" style="background:#1e88e5"></span>${0}</span>
        <span>${0}</span>
      </div>
    `),this._onWheel,this._onPointerDown,this._onPointerMove,this._onPointerUp,this._onPointerUp,this._w,this._h,uh("Nodes on the map"),s,d,c,this._w-4,this._h-4,a?"© geoBoundaries, GeoNames":"© OpenStreetMap",a?bp(Xn||(Xn=Sc`<div class="offline-note">${0}</div>`),this._tiles.offlineLoaded&&!this._tiles.offlineMap?uh("No offline map downloaded. Download it in Settings → Map."):uh("Offline map")):kp,e=>e.stopPropagation(),uh("Zoom in"),()=>this._zoomAt(this._zoom+1),uh("Zoom out"),()=>this._zoomAt(this._zoom-1),uh("Show all"),()=>{this._userMoved=!1,this._fit()},Mv[2],uh("Repeater"),Mv[1],uh("Companion"),Mv[3],uh("Room server"),Mv[4],uh("Sensor"),uh("You"),this.loading?uh("Loading..."):uh("{shown} of {total} nodes have a known position",{shown:e.length,total:e.length+h}))}};Ev.styles=[Vm,Rh(Gn||(Gn=Sc`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
    }
    .wrap {
      position: relative;
      flex: 1;
      min-height: 240px;
      border-radius: 12px;
      overflow: hidden;
      background: #aad3df;
      touch-action: none;
      user-select: none;
      cursor: grab;
    }
    .wrap:active {
      cursor: grabbing;
    }
    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
    .controls {
      position: absolute;
      top: 8px;
      right: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .controls button {
      width: 34px;
      height: 34px;
      border-radius: 8px;
      border: 1px solid rgba(0, 0, 0, 0.25);
      background: rgba(255, 255, 255, 0.92);
      color: #222;
      font-size: 18px;
      line-height: 1;
      cursor: pointer;
    }
    .legend {
      flex: none;
      display: flex;
      flex-wrap: wrap;
      gap: 4px 12px;
      padding: 6px 4px 0;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 4px;
      vertical-align: -1px;
    }
    .cluster-text {
      font: 700 11px sans-serif;
      fill: #fff;
      pointer-events: none;
    }
    .label {
      font: 600 10px sans-serif;
      paint-order: stroke;
      stroke: #fff;
      stroke-width: 3px;
      fill: #222;
      pointer-events: none;
    }
    .attribution {
      font: 9px sans-serif;
      fill: #333;
    }
    .offline-note {
      position: absolute;
      left: 8px;
      top: 8px;
      max-width: calc(100% - 70px);
      padding: 2px 8px;
      border-radius: 10px;
      background: var(--card-background-color, #fff);
      color: var(--secondary-text-color);
      font-size: 11px;
      opacity: 0.9;
      pointer-events: none;
    }
  `))],Fc([Up({attribute:!1})],Ev.prototype,"nodes",void 0),Fc([Up({attribute:!1})],Ev.prototype,"home",void 0),Fc([Up({type:Boolean})],Ev.prototype,"loading",void 0),Fc([Up({attribute:!1,hasChanged:(e,t)=>!t&&!!e})],Ev.prototype,"hass",void 0),Fc([Vp()],Ev.prototype,"_zoom",void 0),Fc([Vp()],Ev.prototype,"_cx",void 0),Fc([Vp()],Ev.prototype,"_cy",void 0),Fc([Vp()],Ev.prototype,"_w",void 0),Fc([Vp()],Ev.prototype,"_h",void 0),Ev=Fc([qp("chattx-nodes-map")],Ev);const Pv={clients:1,repeaters:2,room_servers:3,sensors:4},zv={clients:"Clients",repeaters:"Repeaters",room_servers:"Room Servers",sensors:"Sensors"};let Iv=class extends Lp{constructor(){super(...arguments),this._importOpen=!1,this.contacts=[],this.channels=[],this.narrow=!1,this._viewportNarrow=!1,this._primaryFilter="all",this._typeFilter=null,this._searchQuery="",this._displayedContacts=[],this._totalCount=0,this._typeCounts={clients:0,repeaters:0,room_servers:0,sensors:0},this._l1Counts={all:0,added:0,discovered:0},this._loading=!1,this._nodeDetailDialogOpen=!1,this._pendingAction=null,this._sortBy="last_heard",this._view=(()=>{try{return"map"===Hc("chattx-nodes-view")?"map":"list"}catch(e){return"list"}})(),this._mapContacts=[],this._mapLoading=!1,this._home=null,this._onMediaChange=e=>{this._viewportNarrow=e.matches}}connectedCallback(){super.connectedCallback(),this._mediaQuery=window.matchMedia("(max-width: 870px)"),this._viewportNarrow=this._mediaQuery.matches,this._mediaQuery.addEventListener("change",this._onMediaChange),this._loadCounts(),this._loadPage(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._mediaQuery)||void 0===e||e.removeEventListener("change",this._onMediaChange),this._searchTimer&&(clearTimeout(this._searchTimer),this._searchTimer=void 0)}get _isNarrow(){return this.narrow||this._viewportNarrow}updated(e){super.updated(e),this._isNarrow?this.setAttribute("narrow",""):this.removeAttribute("narrow"),e.has("config")&&(this._displayedContacts=[],this._totalCount=0,this._loadCounts(),this._loadPage(!0))}render(){var e,t,o;return bp(Yn||(Yn=Sc`
      <div class="nodes-layout">
        <div class="nodes-header">
          <!-- Level 1 filters -->
          <div class="l1-filters">
            ${0}
            ${0}
            ${0}
          </div>

          <!-- Level 2 filters (hidden when L1 = All) -->
          ${0}

          <!-- Search + actions row -->
          <div class="header-actions">
            <div class="search-bar" style="flex: 1;">
              <span class="search-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></span>
              <input
                type="text"
                placeholder=${0}
                .value=${0}
                @input=${0}>
              ${0}
            </div>
            <div class="view-toggle" role="group" aria-label=${0}>
              <button class=${0} @click=${0}>☰ ${0}</button>
              <button class=${0} @click=${0}>🗺 ${0}</button>
            </div>
            <select class="sort-select"
              .value=${0}
              @change=${0}>
              <option value="last_heard">${0}</option>
              <option value="name">${0}</option>
              <option value="prefix">${0}</option>
            </select>
            <button class="clear-btn"
              @click=${0}
              title=${0}>
              ${0}
            </button>
            <button class="sync-btn"
              @click=${0}>
              ⟳ ${0}
            </button>
            ${0}
          </div>
        </div>

        <!-- Content area -->
        <div class=${0}>
          ${0}
        </div>
      </div>

      <!-- Node detail dialog -->
      <chattx-node-detail-dialog
        .hass=${0}
        .node=${0}
        .entryId=${0}
        .pendingAction=${0}
        ?open=${0}
        @node-detail-closed=${0}
        @node-message=${0}
        @node-trace=${0}
        @node-add-contact=${0}
        @node-remove-contact=${0}>
      </chattx-node-detail-dialog>

      <chattx-contact-import-dialog
        .hass=${0}
        .entryId=${0}
        ?open=${0}
        @close=${0}
        @contact-imported=${0}>
      </chattx-contact-import-dialog>

    `),this._renderL1Button("all",uh("All")),this._renderL1Button("added",`★ ${uh("Added")}`),this._renderL1Button("discovered",uh("Discovered")),"all"!==this._primaryFilter?bp(Qn||(Qn=Sc`
            <div class="l2-bar">
              ${0}
            </div>
          `),this._renderL2Buttons()):kp,this._getSearchPlaceholder(),this._searchQuery,this._onSearchInput,this._searchQuery?bp(Zn||(Zn=Sc`<button class="clear-search" @click=${0}>✕</button>`),()=>{this._searchQuery="",this._loadPage(!0)}):kp,uh("View"),"list"===this._view?"active":"",()=>this._setView("list"),uh("List"),"map"===this._view?"active":"",()=>this._setView("map"),uh("Map"),this._sortBy,e=>{this._sortBy=e.target.value,this._loadPage(!0)},uh("Last Heard"),uh("Name"),uh("Pub Prefix"),()=>this._clearStaleContacts(),uh("Remove discovered contacts older than the configured threshold"),uh("Clear Stale"),()=>this._syncAll(),uh("Sync"),null!==(e=this.hass)&&void 0!==e&&null!==(e=e.user)&&void 0!==e&&e.is_admin?bp(Jn||(Jn=Sc`<button class="sync-btn"
              title=${0}
              @click=${0}>
              + ${0}
            </button>`),uh("Add a contact by public key, MeshCore link or QR code"),()=>{this._importOpen=!0},uh("Add manually")):kp,"map"===this._view?"content-area map":"content-area","map"===this._view?bp(el||(el=Sc`<chattx-nodes-map .hass=${0} .nodes=${0} .home=${0} ?loading=${0}
                @node-selected=${0}></chattx-nodes-map>`),this.hass,this._mapContacts,this._home,this._mapLoading,e=>this._openNodeDetail(e.detail.node)):this._renderContactsContent(),this.hass,this._selectedNode,null===(t=this.config)||void 0===t?void 0:t.entry_id,this._pendingAction,this._nodeDetailDialogOpen,()=>{this._nodeDetailDialogOpen=!1},()=>this._dispatchNodeAction("message"),()=>this._dispatchNodeAction("trace"),()=>this._dispatchNodeAction("add-contact"),()=>this._dispatchNodeAction("remove-contact"),this.hass,null===(o=this.config)||void 0===o?void 0:o.entry_id,this._importOpen,()=>{this._importOpen=!1},()=>{this._loadPage(!0)})}_renderL1Button(e,t){const o=this._l1Counts[e],i=this._primaryFilter===e,r=`l1-btn ${e} ${i?"active":""}`;return bp(tl||(tl=Sc`
      <button
        class=${0}
        @click=${0}>
        ${0} <span class="l1-count">(${0})</span>
      </button>
    `),r,()=>this._setPrimaryFilter(e),t,o)}_renderL2Buttons(){return["clients","repeaters","room_servers","sensors"].filter(e=>this._typeCounts[e]>0).map(e=>{const t=this._typeFilter===e;return bp(ol||(ol=Sc`
          <button
            class=${0}
            @click=${0}>
            ${0} <span class="l2-count">(${0})</span>
          </button>
        `),`l2-btn ${uh} ${t?"active":""}`,()=>this._setTypeFilter(e),uh(zv[e]),this._typeCounts[e])})}_setPrimaryFilter(e){this._primaryFilter!==e&&(this._primaryFilter=e,this._typeFilter=null,this._displayedContacts=[],this._totalCount=0,this._loadPage(!0))}_setTypeFilter(e){this._typeFilter===e?this._typeFilter=null:this._typeFilter=e,this._displayedContacts=[],this._totalCount=0,this._loadPage(!0)}_onSearchInput(e){this._searchQuery=e.target.value,this._searchTimer&&clearTimeout(this._searchTimer),this._searchTimer=setTimeout(()=>this._loadPage(!0),300)}_getSearchPlaceholder(){const e=this._primaryFilter,t=this._typeFilter?uh(zv[this._typeFilter]).toLowerCase():"nodes";return"all"===e?uh("Search all nodes..."):uh("Search {cat} {type}...",{cat:e,type:t})}_setView(e){this._view=e;try{Uc("chattx-nodes-view",e)}catch(e){}"map"===e&&this._loadMap()}async _loadMap(){if(this.hass){this._mapLoading=!0,this._home||tg(this.hass).then(e=>{this._home=e});try{var e;const t=this._typeFilter?Pv[this._typeFilter]:void 0,o=await Cu(this.hass,this._primaryFilter,{nodeType:t,search:this._searchQuery.trim()||void 0,limit:1e4,offset:0,entryId:null===(e=this.config)||void 0===e?void 0:e.entry_id,sortBy:this._sortBy});this._mapContacts=o.contacts}catch(e){console.error("Failed to load contacts for the map:",e)}finally{this._mapLoading=!1}}}async _loadPage(e=!1){if(this.hass){e&&"map"===this._view&&this._loadMap(),this._loading=!0;try{var t;const o=e?0:this._displayedContacts.length,i=this._typeFilter?Pv[this._typeFilter]:void 0,r=this._searchQuery.trim()||void 0,s=await Cu(this.hass,this._primaryFilter,{nodeType:i,search:r,limit:50,offset:o,entryId:null===(t=this.config)||void 0===t?void 0:t.entry_id,sortBy:this._sortBy});this._displayedContacts=e?s.contacts:[...this._displayedContacts,...s.contacts],this._totalCount=s.total,this._typeCounts=s.counts}catch(e){console.error("Failed to load contacts:",e)}finally{this._loading=!1}}}async _loadCounts(){if(this.hass)try{var e;this._l1Counts=await async function(e,t){try{const o={type:"meshcore_chattx/get_node_counts"};return t&&(o.entry_id=t),await e.callWS(o)}catch(e){return{all:0,added:0,discovered:0}}}(this.hass,null===(e=this.config)||void 0===e?void 0:e.entry_id)}catch(e){console.error("Failed to load node counts:",e)}}async _clearStaleContacts(){var e;if(!this.hass)return;const t=prompt(uh("Remove discovered contacts older than how many days?"),"30");if(!t)return;const o=parseInt(t,10);isNaN(o)||o<1||o>365||(await async function(e,t,o){try{const i={type:"meshcore_chattx/clear_discovered_contacts"};return void 0!==t&&(i.days_threshold=t),o&&(i.entry_id=o),await e.callWS(i)}catch(e){return{removed:0}}}(this.hass,o,null===(e=this.config)||void 0===e?void 0:e.entry_id)).removed>0&&(this._loadPage(!0),this._loadCounts(),this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0})))}_syncAll(){this._loadPage(!0),this._loadCounts(),this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}_renderContactsContent(){return this._loading&&0===this._displayedContacts.length?bp(il||(il=Sc`
        <div class="empty-state">
          <div class="empty-text">${0}</div>
        </div>
      `),uh("Loading...")):0===this._displayedContacts.length?this._renderEmptyState():bp(rl||(rl=Sc`
      <div class="nodes-grid">
        ${0}
      </div>
      ${0}
    `),this._displayedContacts.map(e=>bp(sl||(sl=Sc`
          <div @click=${0}>
            <chattx-contact-card .contact=${0}></chattx-contact-card>
          </div>
        `),()=>this._openNodeDetail(e),e)),this._displayedContacts.length<this._totalCount?bp(al||(al=Sc`
        <div class="load-more">
          <button ?disabled=${0} @click=${0}>
            ${0}
          </button>
        </div>
      `),this._loading,()=>this._loadPage(),this._loading?uh("Loading..."):uh("Load More ({length} of {totalCount})",{length:this._displayedContacts.length,totalCount:this._totalCount})):kp)}_renderEmptyState(){const e=this._primaryFilter,t=this._typeFilter;let o=bp(nl||(nl=Sc`<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`)),i=uh("No nodes found"),r="";return this._searchQuery?(i=uh("No matching nodes"),r=uh('No results for "{searchQuery}"',{searchQuery:this._searchQuery})):"added"===e?(i=uh("No added contacts"),r=t?uh("No added {type}",{type:uh(zv[t]).toLowerCase()}):uh("Add discovered contacts to see them here")):"discovered"===e?(i=uh("No discovered nodes"),r=t?uh("No discovered {type}",{type:uh(zv[t]).toLowerCase()}):uh("Nodes seen on the mesh will appear here")):"all"===e&&(i=uh("No nodes"),r=uh("No contacts or discovered nodes yet")),bp(ll||(ll=Sc`
      <div class="empty-state">
        <div class="empty-icon">${0}</div>
        <div class="empty-text">${0}</div>
        ${0}
      </div>
    `),o,i,r?bp(dl||(dl=Sc`<div class="empty-subtext">${0}</div>`),r):kp)}_openNodeDetail(e){this._selectedNode=e,this._nodeDetailDialogOpen=!0}_dispatchNodeAction(e){"add-contact"!==e&&"remove-contact"!==e||(this._pendingAction=e),this.dispatchEvent(new CustomEvent("node-action",{detail:{action:e,node:this._selectedNode},bubbles:!0,composed:!0})),"message"!==e&&"delete"!==e||(this._nodeDetailDialogOpen=!1)}clearPendingAction(){this._pendingAction=null}async refreshAfterMutation(e){if(await Promise.all([this._loadPage(!0),this._loadCounts()]),this._nodeDetailDialogOpen&&this._selectedNode&&e){const t=this._displayedContacts.find(t=>!(!t.public_key||t.public_key!==e)||!(!t.pubkey_prefix||!e.startsWith(t.pubkey_prefix)));t?this._selectedNode={...t}:this._nodeDetailDialogOpen=!1}}};Iv.styles=Rh(cl||(cl=Sc`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .nodes-layout {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .nodes-header {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 12px;
      background: var(--card-background-color, #fff);
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    /* ─── Level 1 filter buttons ────────────────────────────────────── */

    .l1-filters {
      display: flex;
      gap: 6px;
    }

    .l1-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 8px 14px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 20px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      border-left: 3px solid transparent;
    }

    .l1-btn:hover {
      background: rgba(0, 0, 0, 0.03);
      color: var(--primary-text-color);
    }

    /* Inactive left-edge accent — same alpha as the active border
       below, so the active/inactive transition doesn't visibly jump
       in saturation. */
    .l1-btn.added,
    .l1-btn.all         { border-left-color: rgba(3, 169, 244, 0.5); }
    .l1-btn.discovered  { border-left-color: rgba(76, 175, 80, 0.5); }

    /* Active state: translucent category background + saturated text,
       matching the per-card category-badge treatment so the filter
       reads as the same tag concept. Normalize border-left-width back
       to 1px so the filled active button isn't visibly chunkier on the
       left than the other three sides (the 3px accent only makes
       sense as an inactive-state visual cue). */
    .l1-btn.active {
      border-left-width: 1px;
    }
    .l1-btn.active.all,
    .l1-btn.active.added {
      background: rgba(3, 169, 244, 0.15);
      color: #0277bd;
      border-color: rgba(3, 169, 244, 0.5);
      border-left-color: rgba(3, 169, 244, 0.5);
    }
    .l1-btn.active.discovered {
      background: rgba(76, 175, 80, 0.15);
      color: #2e7d32;
      border-color: rgba(76, 175, 80, 0.5);
      border-left-color: rgba(76, 175, 80, 0.5);
    }

    .l1-count {
      font-size: 11px;
      opacity: 0.8;
    }

    /* ─── Level 2 filter buttons ────────────────────────────────────── */

    .l2-bar {
      display: flex;
      gap: 6px;
      align-items: center;
    }

    .l2-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 5px 10px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 14px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .l2-btn:hover {
      background: rgba(0, 0, 0, 0.03);
      color: var(--primary-text-color);
    }

    /* Inactive L2 left-edge accent — same alpha as the active border
       below for a clean active/inactive transition. */
    .l2-btn.clients      { border-left: 2px solid rgba(76, 175, 80, 0.5); }
    .l2-btn.repeaters    { border-left: 2px solid rgba(255, 152, 0, 0.5); }
    .l2-btn.room_servers { border-left: 2px solid rgba(156, 39, 176, 0.5); }
    .l2-btn.sensors      { border-left: 2px solid rgba(96, 125, 139, 0.5); }

    /* When active, normalize the left edge back to 1px so the filled
       button doesn't have a chunkier left border than its other edges. */
    .l2-btn.active {
      border-left-width: 1px;
    }

    /* Active L2: same translucent treatment as L1 active and the
       per-card avatar/category-badge. */
    .l2-btn.active.clients {
      background: rgba(76, 175, 80, 0.15);
      color: #388e3c;
      border-color: rgba(76, 175, 80, 0.5);
    }
    .l2-btn.active.repeaters {
      background: rgba(255, 152, 0, 0.15);
      color: #f57c00;
      border-color: rgba(255, 152, 0, 0.5);
    }
    .l2-btn.active.room_servers {
      background: rgba(156, 39, 176, 0.15);
      color: #7b1fa2;
      border-color: rgba(156, 39, 176, 0.5);
    }
    .l2-btn.active.sensors {
      background: rgba(96, 125, 139, 0.15);
      color: #455a64;
      border-color: rgba(96, 125, 139, 0.5);
    }

    .l2-count {
      font-size: 10px;
      opacity: 0.8;
    }

    .l2-spacer {
      flex: 1;
    }

    /* ─── Search bar ────────────────────────────────────────────────── */

    .view-toggle {
      display: flex;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      overflow: hidden;
      flex-shrink: 0;
    }
    .view-toggle button {
      border: none;
      background: none;
      color: var(--secondary-text-color);
      padding: 6px 10px;
      font-size: 13px;
      cursor: pointer;
    }
    .view-toggle button.active {
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
    }

    .search-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      background: var(--primary-background-color, #fafafa);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      padding: 6px 10px;
    }

    .search-icon {
      flex-shrink: 0;
      color: var(--secondary-text-color, #727272);
      display: flex;
    }

    .search-bar input {
      flex: 1;
      border: none;
      background: transparent;
      font-size: 13px;
      color: var(--primary-text-color);
      outline: none;
    }

    .clear-search {
      border: none;
      background: none;
      cursor: pointer;
      color: var(--secondary-text-color, #727272);
      font-size: 16px;
      padding: 0 2px;
    }

    .header-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
    }

    :host([narrow]) .header-actions .search-bar {
      flex: 1 1 100% !important;
    }

    .content-area.map {
      display: flex;
      flex-direction: column;
      padding: 8px;
    }

    .sync-btn {
      padding: 6px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      background: transparent;
      color: var(--secondary-text-color, #727272);
      font-size: 12px;
      cursor: pointer;
      transition: all 0.15s;
    }
    .sync-btn:hover {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-color: var(--primary-color, #03a9f4);
    }

    .sort-select {
      padding: 4px 8px; border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px; background: var(--card-background-color, #fff);
      color: var(--primary-text-color); font-size: 11px; cursor: pointer;
      box-sizing: border-box;
      height: 28px;
      min-height: 28px;
      line-height: normal;
      appearance: menulist;
      -webkit-appearance: menulist;
    }

    /* ─── Content area ──────────────────────────────────────────────── */

    .content-area {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px;
      background: var(--primary-background-color, #fafafa);
    }

    .content-area::-webkit-scrollbar { width: 6px; }
    .content-area::-webkit-scrollbar-track { background: transparent; }
    .content-area::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
      border-radius: 3px;
    }

    .nodes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 8px;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color, #727272);
      text-align: center;
    }
    .empty-icon { font-size: 48px; margin-bottom: 16px; opacity: 0.5; }
    .empty-text { font-size: 16px; margin-bottom: 8px; }
    .empty-subtext { font-size: 13px; opacity: 0.7; max-width: 300px; }

    .clear-btn {
      padding: 4px 10px; border: 1px solid rgba(219, 68, 55, 0.3);
      border-radius: 4px; background: transparent;
      color: var(--error-color, #db4437); font-size: 11px;
      font-weight: 500; cursor: pointer; transition: all 0.15s;
    }
    .clear-btn:hover {
      background: var(--error-color, #db4437); color: #fff;
      border-color: var(--error-color, #db4437);
    }

    .confirm-bar {
      display: flex; align-items: center; gap: 8px;
      padding: 8px 12px; background: rgba(219, 68, 55, 0.08);
      border: 1px solid rgba(219, 68, 55, 0.2); border-radius: 6px;
      margin-bottom: 12px; font-size: 12px;
    }
    .confirm-bar button {
      padding: 4px 10px; border: none; border-radius: 4px;
      font-size: 11px; font-weight: 600; cursor: pointer;
    }
    .confirm-bar .yes { background: var(--error-color, #db4437); color: #fff; }
    .confirm-bar .no { background: var(--divider-color, #e0e0e0); color: var(--primary-text-color); }

    .category-badge {
      font-size: 10px; font-weight: 500; padding: 2px 8px;
      border-radius: 10px; white-space: nowrap; flex-shrink: 0; align-self: center;
    }

    .load-more {
      display: flex; justify-content: center; padding: 12px;
    }
    .load-more button {
      padding: 8px 20px; border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px; background: transparent;
      color: var(--primary-text-color); font-size: 12px;
      cursor: pointer; transition: all 0.15s;
    }
    .load-more button:hover {
      background: var(--primary-color, #03a9f4); color: #fff;
      border-color: var(--primary-color, #03a9f4);
    }

    /* ─── Narrow overrides ──────────────────────────────────────────── */

    :host([narrow]) .l1-filters { gap: 4px; flex-wrap: wrap; }
    :host([narrow]) .l1-btn { font-size: 11px; padding: 5px 10px; }
    :host([narrow]) .l2-btn { font-size: 11px; padding: 5px 10px; }
    :host([narrow]) .nodes-grid { grid-template-columns: 1fr; }
  `)),Fc([Vp()],Iv.prototype,"_importOpen",void 0),Fc([Up({type:Array})],Iv.prototype,"contacts",void 0),Fc([Up({type:Array})],Iv.prototype,"channels",void 0),Fc([Up({type:Boolean})],Iv.prototype,"narrow",void 0),Fc([Up({type:Object})],Iv.prototype,"hass",void 0),Fc([Up({type:Object})],Iv.prototype,"config",void 0),Fc([Vp()],Iv.prototype,"_viewportNarrow",void 0),Fc([Vp()],Iv.prototype,"_primaryFilter",void 0),Fc([Vp()],Iv.prototype,"_typeFilter",void 0),Fc([Vp()],Iv.prototype,"_searchQuery",void 0),Fc([Vp()],Iv.prototype,"_displayedContacts",void 0),Fc([Vp()],Iv.prototype,"_totalCount",void 0),Fc([Vp()],Iv.prototype,"_typeCounts",void 0),Fc([Vp()],Iv.prototype,"_l1Counts",void 0),Fc([Vp()],Iv.prototype,"_loading",void 0),Fc([Vp()],Iv.prototype,"_selectedNode",void 0),Fc([Vp()],Iv.prototype,"_nodeDetailDialogOpen",void 0),Fc([Vp()],Iv.prototype,"_pendingAction",void 0),Fc([Vp()],Iv.prototype,"_sortBy",void 0),Fc([Vp()],Iv.prototype,"_view",void 0),Fc([Vp()],Iv.prototype,"_mapContacts",void 0),Fc([Vp()],Iv.prototype,"_mapLoading",void 0),Fc([Vp()],Iv.prototype,"_home",void 0),Iv=Fc([qp("chattx-nodes-page")],Iv);const Rv="chattx-tab-badge";let Ov=class extends Lp{constructor(){super(...arguments),this._text="",this._saving=!1,this._status="",this._error="",this._loaded=!1}updated(){this.hass&&!this._loaded&&(this._loaded=!0,$u(this.hass).then(e=>{this._text=e.join("\n")}))}async _save(){if(!this.hass)return;const e=this._text.split("\n").map(e=>e.trim()).filter(Boolean);if(this._status="",this._error="",e.length>50)return void(this._error=uh("At most {MAX_QUICK_MESSAGES} messages.",{MAX_QUICK_MESSAGES:50}));const t=new TextEncoder,o=e.find(e=>t.encode(e).length>160);if(o){const e=o.length>30?`${o.slice(0,30)}…`:o;return void(this._error=uh('A message can have at most {MAX_QUICK_MESSAGE_BYTES} bytes (a letter with diacritics takes 2): "{start}"',{MAX_QUICK_MESSAGE_BYTES:160,start:e}))}this._saving=!0;const i=await async function(e,t){try{return await e.callWS({type:"meshcore_chattx/set_quick_messages",messages:t}),null}catch(e){return pu(e)}}(this.hass,e);this._saving=!1,i?this._error=i:(this._text=e.join("\n"),this._status=uh("Saved."))}render(){var e;const t=!(null===(e=this.hass)||void 0===e||null===(e=e.user)||void 0===e||!e.is_admin);return bp(hl||(hl=Sc`
      <p>${0}</p>
      <textarea
        aria-label=${0}
        ?readonly=${0}
        .value=${0}
        @input=${0}></textarea>
      ${0}
    `),uh("One message per line. They are offered in chat under the lightning button."),uh("Quick messages"),!t,this._text,e=>{this._text=e.target.value,this._status=""},t?bp(pl||(pl=Sc`
        <div class="actions">
          <button ?disabled=${0} @click=${0}>${0}</button>
          ${0}
          ${0}
        </div>
      `),this._saving,this._save,uh("Save"),this._status?bp(ul||(ul=Sc`<span class="status" role="status">${0}</span>`),this._status):"",this._error?bp(ml||(ml=Sc`<span class="error" role="alert">${0}</span>`),this._error):""):"")}};function Tv(e,t){try{var o;return null!==(o=new Intl.DisplayNames([ch()],{type:"region"}).of(e))&&void 0!==o?o:t}catch(e){return t}}Ov.styles=Rh(gl||(gl=Sc`
    p { margin: 0 0 8px; font-size: 13px; color: var(--secondary-text-color); }
    textarea {
      box-sizing: border-box;
      width: 100%;
      min-height: 120px;
      padding: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font: inherit;
      font-size: 14px;
      resize: vertical;
    }
    .actions { display: flex; align-items: center; gap: 12px; margin-top: 8px; }
    button {
      padding: 6px 14px;
      border: none;
      border-radius: 4px;
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
    }
    button:disabled { opacity: 0.5; cursor: default; }
    .status { font-size: 13px; color: var(--success-color, #43a047); }
    .error { font-size: 13px; color: var(--error-color, #db4437); }
  `)),Fc([Up({type:Object})],Ov.prototype,"hass",void 0),Fc([Vp()],Ov.prototype,"_text",void 0),Fc([Vp()],Ov.prototype,"_saving",void 0),Fc([Vp()],Ov.prototype,"_status",void 0),Fc([Vp()],Ov.prototype,"_error",void 0),Ov=Fc([qp("chattx-quick-messages-editor")],Ov);let Lv=class extends Lp{constructor(){super(...arguments),this._status=null,this._index=null,this._worldSize=0,this._indexFailed=!1,this._selected=new Set,this._filter="",this._busy=!1,this._error="",this._offlineOnly=Rm(),this._distance=Yc(),this._loaded=!1}updated(){this.hass&&!this._loaded&&(this._loaded=!0,this._load())}async _load(){var e,t,o,i,r;const s=this.hass;try{this._status=await s.callWS({type:"meshcore_chattx/offline_map_status"})}catch(e){this._status=null}const a=Object.keys(null!==(e=null===(t=this._status)||void 0===t?void 0:t.countries)&&void 0!==e?e:{});if(null===(o=s.user)||void 0===o||!o.is_admin)return;const n=await s.callWS({type:"meshcore_chattx/offline_map_index"}).catch(()=>({success:!1,countries:{},world_size:0}));this._indexFailed=!n.success,this._index=n.countries,this._worldSize=null!==(i=n.world_size)&&void 0!==i?i:0,this._selected=new Set(a.length?a.filter(e=>e in n.countries):function(e,t){var o;const i=(null!=e?e:"").toUpperCase();return i&&t[i]?[i,...null!==(o=t[i].neighbours)&&void 0!==o?o:[]].filter(e=>e in t):[]}(null===(r=s.config)||void 0===r?void 0:r.country,n.countries))}_toggleCountry(e,t){const o=new Set(this._selected);t?o.add(e):o.delete(e),this._selected=o}async _download(e){if(this.hass&&!this._busy){this._busy=!0,this._error="";try{const o=await this.hass.callWS({type:"meshcore_chattx/offline_map_download",countries:e});var t;o.success?(this._status=o,Nm=null,window.dispatchEvent(new CustomEvent("chattx-offline-map-updated"))):this._error=uh("Downloading the offline map failed: {message}",{message:null!==(t=o.message)&&void 0!==t?t:""})}catch(e){var o;this._error=uh("Downloading the offline map failed: {message}",{message:null!==(o=e.message)&&void 0!==o?o:String(e)})}finally{this._busy=!1}}}_onOfflineOnly(e){this._offlineOnly=e.target.checked,function(e){try{e?Uc(Im,"1"):Vc(Im)}catch(e){}window.dispatchEvent(new CustomEvent("chattx-map-mode-changed"))}(this._offlineOnly)}_renderStatus(){var e;const t=this._status,o=Object.entries(null!==(e=null==t?void 0:t.countries)&&void 0!==e?e:{}).map(([e,t])=>Tv(e,t.name));if(!t||0===o.length)return bp(vl||(vl=Sc`<div class="status">${0}</div>`),uh("No offline map downloaded yet."));const i=t.downloaded_at?new Date(t.downloaded_at).toLocaleDateString():"";return bp(fl||(fl=Sc`<div class="status">
      ${0}${0}
      · ${0}
    </div>`),uh("Downloaded: {countries}",{countries:o.join(", ")}),i?` (${i})`:"",uh("{places} places, {peaks} peaks",{places:t.places,peaks:t.peaks}))}_renderCountries(e){var t;const o=null!==(t=this._index)&&void 0!==t?t:{},i=([...this._selected].reduce((e,t)=>{var i,r;return e+(null!==(i=null===(r=o[t])||void 0===r?void 0:r.size)&&void 0!==i?i:0)},0)+this._worldSize)/1024,r=this._filter.trim().toLocaleLowerCase(),s=Object.entries(o).map(([e,t])=>({code:e,name:Tv(e,t.name),size:t.size})).filter(e=>this._selected.has(e.code)||!r||e.name.toLocaleLowerCase().includes(r)||e.code.toLowerCase()===r).sort((e,t)=>Number(this._selected.has(t.code))-Number(this._selected.has(e.code))||e.name.localeCompare(t.name));return bp(yl||(yl=Sc`
      <input class="form-input search" type="search" .value=${0}
        placeholder=${0}
        @input=${0} />
      <div class="count">${0}</div>
      <div class="countries">
        ${0}
      </div>
      <div class="actions">
        <button ?disabled=${0} @click=${0}>
          ${0}
        </button>
        ${0}
        <span class="size">${0}</span>
      </div>`),this._filter,uh("Search country"),e=>{this._filter=e.target.value},uh("{shown} of {total} countries, the list scrolls",{shown:s.length,total:Object.keys(o).length}),s.map(e=>bp(_l||(_l=Sc`<label>
          <input type="checkbox" .checked=${0} ?disabled=${0}
            @change=${0} />
          ${0} <span class="size">${0} kB</span>
        </label>`),this._selected.has(e.code),this._busy,t=>this._toggleCountry(e.code,t.target.checked),e.name,Math.max(1,Math.round(e.size/1024)))),this._busy||0===this._selected.size,()=>this._download([...this._selected]),this._busy?uh("Downloading…"):e.length?uh("Download again"):uh("Download"),e.length?bp(bl||(bl=Sc`<button class="quiet" ?disabled=${0} @click=${0}>${0}</button>`),this._busy,()=>this._download([]),uh("Remove")):kp,uh("about {size} kB",{size:Math.round(i)}))}render(){var e,t,o;const i=!(null===(e=this.hass)||void 0===e||null===(e=e.user)||void 0===e||!e.is_admin),r=Object.keys(null!==(t=null===(o=this._status)||void 0===o?void 0:o.countries)&&void 0!==t?t:{});return bp(xl||(xl=Sc`
      <div class="form-description">${0}</div>
      <div class="section-row" style="margin-top: 10px">
        <label class="form-toggle">
          <input type="checkbox" .checked=${0} @change=${0} />
          <span class="form-toggle-label">${0}</span>
        </label>
      </div>
      <div class="section-row" style="margin-top: 10px">
        <label class="form-label" for="chattx-distance-unit">${0}</label>
        <select id="chattx-distance-unit" class="form-input unit" .value=${0}
          @change=${0}>
          <option value="auto" ?selected=${0}>${0}</option>
          <option value="km" ?selected=${0}>${0}</option>
          <option value="mi" ?selected=${0}>${0}</option>
        </select>
      </div>
      ${0}
      ${0}
      ${0}
      <div class="form-description" style="margin-top: 8px">${0}</div>
    `),uh("When the online map can't be loaded, for example without internet, the route map and the nodes map show a simplified map instead: borders of countries and regions, towns and peaks. It is downloaded once and kept in Home Assistant. The borders and capitals of the whole world always come with it; choose the countries to show in detail."),this._offlineOnly,this._onOfflineOnly,uh("Always use the simplified map, even with internet"),uh("Distance unit"),this._distance,e=>{this._distance=e.target.value,function(e){try{"auto"===e?Vc(Wc):Uc(Wc,e)}catch(e){}}(this._distance),window.dispatchEvent(new CustomEvent("chattx-map-mode-changed"))},"auto"===this._distance,uh("Automatic (Home Assistant)"),"km"===this._distance,uh("Kilometres"),"mi"===this._distance,uh("Miles"),this._renderStatus(),i?this._indexFailed?bp(wl||(wl=Sc`<div class="error">${0}</div>`),uh("The list of countries could not be loaded. Downloading needs internet.")):this._index?this._renderCountries(r):bp(kl||(kl=Sc`<div class="status">${0}</div>`),uh("Loading...")):kp,this._error?bp($l||($l=Sc`<div class="error" role="alert">${0}</div>`),this._error):kp,uh("Map data: Natural Earth, geoBoundaries (CC BY 4.0) and GeoNames (CC BY 4.0)."))}};Lv.styles=[Wp,Rh(Cl||(Cl=Sc`
    /* panelStyles sizes the panel's own host to the screen; a settings card is as tall as its content. */
    :host { display: block; width: auto; height: auto; }
    .search { margin-top: 10px; max-width: 320px; }
    .unit { max-width: 260px; display: block; margin-top: 4px; }
    .countries {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 14px;
      margin: 8px 0 4px;
      padding: 8px 10px;
      max-height: 240px;
      /* A frame and an always visible scrollbar show that the list scrolls. */
      overflow-y: scroll;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      scrollbar-width: thin;
      scrollbar-color: var(--secondary-text-color, #888) transparent;
    }
    .countries::-webkit-scrollbar { width: 8px; }
    .countries::-webkit-scrollbar-thumb { background: var(--secondary-text-color, #888); border-radius: 4px; }
    .count { font-size: 11px; color: var(--secondary-text-color); }
    .countries label { display: flex; align-items: center; gap: 4px; font-size: 13px; color: var(--primary-text-color); cursor: pointer; }
    .size { color: var(--secondary-text-color); font-size: 11px; }
    .actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-top: 6px; }
    button {
      padding: 6px 14px;
      border: none;
      border-radius: 4px;
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
    }
    button.quiet { background: none; color: var(--secondary-text-color); border: 1px solid var(--divider-color, #e0e0e0); }
    button:disabled { opacity: 0.5; cursor: default; }
    .status { font-size: 13px; color: var(--primary-text-color); margin-top: 10px; }
    .error { font-size: 13px; color: var(--error-color, #db4437); margin-top: 6px; }
  `))],Fc([Up({attribute:!1})],Lv.prototype,"hass",void 0),Fc([Vp()],Lv.prototype,"_status",void 0),Fc([Vp()],Lv.prototype,"_index",void 0),Fc([Vp()],Lv.prototype,"_worldSize",void 0),Fc([Vp()],Lv.prototype,"_indexFailed",void 0),Fc([Vp()],Lv.prototype,"_selected",void 0),Fc([Vp()],Lv.prototype,"_filter",void 0),Fc([Vp()],Lv.prototype,"_busy",void 0),Fc([Vp()],Lv.prototype,"_error",void 0),Fc([Vp()],Lv.prototype,"_offlineOnly",void 0),Fc([Vp()],Lv.prototype,"_distance",void 0),Lv=Fc([qp("chattx-offline-map-settings")],Lv);let Nv=class extends Lp{constructor(){super(...arguments),this._entries=Fh(),this._input="",this._error="",this._busy=!1,this._onChanged=()=>{this._entries=Fh()}}connectedCallback(){super.connectedCallback(),window.addEventListener("chattx-blocklist-changed",this._onChanged),this._entries=Fh()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("chattx-blocklist-changed",this._onChanged)}async _save(e){if(this.hass&&!this._busy){this._busy=!0,this._error="";try{this._entries=await async function(e,t){const o=await e.callWS({type:"meshcore_chattx/set_blocklist",keys:t});return Sh(o.entries),o.entries}(this.hass,e)}catch(e){var t;this._error=null!==(t=e.message)&&void 0!==t?t:String(e)}finally{this._busy=!1}}}async _add(e){const t=function(e,t){const o=e.trim();if(!o)return null;const i=/\(([0-9a-f]{6,})…?\)$/i.exec(o);if(i){var r,s;const e=i[1].toLowerCase();return null!==(r=null===(s=t.find(t=>t.key.startsWith(e)))||void 0===s?void 0:s.key)&&void 0!==r?r:e}const a=t.find(e=>e.name===o);if(a)return a.key;const n=o.toLowerCase().replace(/\s+/g,"");return/^[0-9a-f]{6,64}$/.test(n)?n:null}(this._input,e);t?this._entries.some(e=>e.key===t)?this._input="":(await this._save([...this._entries.map(e=>e.key),t]),this._error||(this._input="")):this._error=uh("Choose a contact from the list or enter its public key (at least 6 hex digits).")}render(){var e;const t=!(null===(e=this.hass)||void 0===e||null===(e=e.user)||void 0===e||!e.is_admin),o=this.hass?function(e){const t=[];for(const[o,i]of Object.entries(e)){if(!o.startsWith("binary_sensor.meshcore_")||!o.endsWith("_contact"))continue;const e=i.attributes;"string"==typeof e.public_key&&e.public_key&&"string"==typeof e.adv_name&&t.push({key:e.public_key.toLowerCase(),name:e.adv_name})}return t.sort((e,t)=>e.name.localeCompare(t.name))}(this.hass.states):[];return bp(Bl||(Bl=Sc`
      <div class="form-description">${0}</div>
      ${0}
      ${0}
      ${0}
    `),uh("Messages from these senders are not shown or stored, in channels and direct messages. A sender is chosen by public key, whatever its name; in channels, where messages carry only the sender's name, every name the key goes by is matched."),0===this._entries.length?bp(Sl||(Sl=Sc`<div class="empty">${0}</div>`),uh("Nobody is blocked.")):bp(Fl||(Fl=Sc`<ul>
            ${0}
          </ul>`),this._entries.map(e=>bp(Al||(Al=Sc`<li>
              <span class="names">${0}</span>
              <span class="key">${0}</span>
              ${0}
            </li>`),e.names.length?e.names.join(", "):uh("Unknown name"),e.key.slice(0,12),t?bp(Ml||(Ml=Sc`<button class="quiet" ?disabled=${0}
                    @click=${0}>${0}</button>`),this._busy,()=>this._save(this._entries.filter(t=>t.key!==e.key).map(e=>e.key)),uh("Remove")):kp))),t?bp(Dl||(Dl=Sc`<div class="add">
            <input class="form-input" list="chattx-block-contacts" .value=${0}
              placeholder=${0}
              @input=${0}
              @keydown=${0} />
            <datalist id="chattx-block-contacts">
              ${0}
            </datalist>
            <button ?disabled=${0} @click=${0}>${0}</button>
          </div>`),this._input,uh("Contact name or public key"),e=>{this._input=e.target.value,this._error=""},e=>{"Enter"===e.key&&this._add(o)},o.map(e=>bp(El||(El=Sc`<option value=${0}></option>`),`${e.name} (${e.key.slice(0,12)}…)`)),this._busy||!this._input.trim(),()=>this._add(o),uh("Block")):kp,this._error?bp(Pl||(Pl=Sc`<div class="error" role="alert">${0}</div>`),this._error):kp)}};Nv.styles=[Wp,Rh(zl||(zl=Sc`
    /* panelStyles sizes the panel's own host to the screen; a settings card is as tall as its content. */
    :host { display: block; width: auto; height: auto; }
    ul { list-style: none; margin: 8px 0; padding: 0; }
    li { display: flex; align-items: center; gap: 8px; padding: 4px 0; font-size: 13px; color: var(--primary-text-color); }
    .key { font-family: monospace; font-size: 12px; color: var(--secondary-text-color); }
    .names { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .add { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-top: 6px; }
    .add input { flex: 1; min-width: 200px; max-width: 360px; }
    button {
      padding: 6px 14px;
      border: none;
      border-radius: 4px;
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
    }
    button.quiet { padding: 2px 10px; background: none; color: var(--secondary-text-color); border: 1px solid var(--divider-color, #e0e0e0); font-weight: 400; }
    button:disabled { opacity: 0.5; cursor: default; }
    .empty { font-size: 13px; color: var(--secondary-text-color); margin: 8px 0; }
    .error { font-size: 13px; color: var(--error-color, #db4437); margin-top: 6px; }
  `))],Fc([Up({attribute:!1})],Nv.prototype,"hass",void 0),Fc([Vp()],Nv.prototype,"_entries",void 0),Fc([Vp()],Nv.prototype,"_input",void 0),Fc([Vp()],Nv.prototype,"_error",void 0),Fc([Vp()],Nv.prototype,"_busy",void 0),Nv=Fc([qp("chattx-blocklist-settings")],Nv);const qv=[{step:"generating",label:"Generating new key"},{step:"importing",label:"Sending key to device"},{step:"rebooting",label:"Rebooting device"},{step:"reconnecting",label:"Waiting for device reconnect"},{step:"reloading",label:"Reloading MeshCore integration"},{step:"verifying",label:"Verifying new identity"}];let jv=class extends Lp{constructor(){super(),this.narrow=!1,this._deviceConfig=null,this._loading=!0,this._error=null,this._editValues={},this._saving=!1,this._commandDialogOpen=!1,this._confirmAction=null,this._confirmDialogOpen=!1,this._locationSource="manual",this._importKeyValue="",this._deviceEntities={},this._meshcoreDeviceMap={},this._entityRegistryLoaded=!1,this._hiddenSensors={},this._contextMenu=null,this._overlayPointerStarted=!1,this._settingsModalOpen=!1,this._keyManagementModalOpen=!1,this._identityFlowState={kind:"closed"},this._identityFlowUnsubscribe=null,this._renameSuccess=null,this._hiddenSensorsModalKey=null,this._statusMessage=null,this._defaultScope=null,this._defaultScopeSupported=!0,this._scopeChoices=[],this._scopeEdit=null,this._scopeCustom="",this._scopeSaving=!1,this._statusMessageTimeout=null,this._onCompanionTrace=()=>{var e;const t=null===(e=this.selectedDevice)||void 0===e?void 0:e.entry_id;this.dispatchEvent(new CustomEvent("companion-trace-requested",{detail:{entryId:t},bubbles:!0,composed:!0}))},fm(this,{isOpen:()=>null!==this._contextMenu,onEscape:()=>this._closeContextMenu(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="tile-context"]')}}),fm(this,{isOpen:()=>this._settingsModalOpen,onEscape:()=>this._closeSettingsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="companion-settings"]')}}),fm(this,{isOpen:()=>this._keyManagementModalOpen,onEscape:()=>this._closeKeyManagementModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="key-management"]')}}),fm(this,{isOpen:()=>null!==this._hiddenSensorsModalKey,onEscape:()=>this._closeHiddenSensorsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="hidden-sensors"]')}}),fm(this,{isOpen:()=>"closed"!==this._identityFlowState.kind,onEscape:()=>{"success"!==this._identityFlowState.kind&&"failure"!==this._identityFlowState.kind||this._closeIdentityFlowModal()},getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="identity-flow"]')}}),fm(this,{isOpen:()=>null!==this._renameSuccess,onEscape:()=>this._closeRenameSuccessModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="rename-success"]')}})}connectedCallback(){super.connectedCallback(),this._loadDeviceConfig(),this._loadDefaultScope(),this._loadHiddenSensors()}disconnectedCallback(){super.disconnectedCallback(),null!==this._statusMessageTimeout&&(clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=null)}updated(e){e.has("config")&&(this._loadDeviceConfig(),void 0!==e.get("config")&&this._loadDefaultScope()),e.has("hass")&&this.hass&&!this._entityRegistryLoaded&&this._loadEntityRegistry()}async _loadDeviceConfig(){if(this.hass){this._loading=!0,this._error=null;try{var e,t;this._deviceConfig=await lu(this.hass,null===(e=this.config)||void 0===e?void 0:e.entry_id),null!==(t=this._deviceConfig)&&void 0!==t&&t.location_source&&(this._locationSource=this._deviceConfig.location_source)}catch(e){this._error=uh("Failed to load device configuration: {error}",{error:String(e)})}finally{this._loading=!1}}}render(){var e,t,o,i,r,s;return this._loading?bp(Il||(Il=Sc`
        <div class="settings-page">
          <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--secondary-text-color);">
            <div style="display: flex; align-items: center; gap: 8px;">
              <div class="loading-spinner"></div>
              <span>${0}</span>
            </div>
          </div>
        </div>
      `),uh("Loading settings...")):this._error?bp(Rl||(Rl=Sc`
        <div class="settings-page">
          <div style="padding: 16px; color: var(--error-color); font-size: 14px;">
            ${0}
          </div>
        </div>
      `),this._error):this._deviceConfig?bp(Tl||(Tl=Sc`
      <div class="settings-page">
        <div class="settings-container">
          <!-- Companion Device Card (full width at top) -->
          ${0}

          <!-- Two-column grid for settings cards -->
          <div class="settings-grid">
            <!-- Companion Information -->
            <div class="device-section">
              <div class="card-title">${0}</div>
              ${0}
            </div>

            <!-- Radio & RF Settings -->
            <div class="device-section">
              <div class="card-title">${0}</div>
              ${0}
            </div>

            <!-- Default region for floods sent from this companion -->
            <div class="device-section">
              <div class="card-title">${0}</div>
              ${0}
            </div>

            <!-- Location -->
            <div class="device-section">
              <div class="card-title">${0}</div>
              ${0}
            </div>

            <!-- Language of the panel and the quick reply text, per browser -->
            <div class="device-section">
              <div class="card-title">${0}</div>
              <div class="form-description" style="margin-bottom: 8px">${0}</div>
              <div class="section-row">
                <div class="form-group-inline">
                  <label class="form-label" for="chattx-language">${0}</label>
                  <select id="chattx-language" class="form-input" .value=${0} @change=${0}>
                    <option value="auto" ?selected=${0}>${0}</option>
                    ${0}
                  </select>
                </div>
              </div>
            </div>

            <div class="device-section">
              <div class="card-title">${0}</div>
              <div class="section-row">
                <div class="form-group-inline">
                  <label class="form-label" for="chattx-heard-reply">${0}</label>
                  <input id="chattx-heard-reply" class="form-input" type="text" .value=${0} placeholder=${0} ?disabled=${0} @change=${0} />
                  <div class="form-description">${0}
                    ${0}</div>
                </div>
              </div>
            </div>

            <!-- Unread total in the browser tab title, per browser -->
            <div class="device-section">
              <div class="card-title">${0}</div>
              <div class="section-row">
                <div class="form-group-inline">
                  <label class="form-toggle">
                    <input type="checkbox" .checked=${0} @change=${0} />
                    <span class="form-toggle-label">${0}</span>
                  </label>
                  <div class="form-description">${0}</div>
                </div>
              </div>
            </div>

            <!-- Senders whose messages are not shown -->
            <div class="device-section">
              <div class="card-title">${0}</div>
              <chattx-blocklist-settings .hass=${0}></chattx-blocklist-settings>
            </div>

            <!-- Simplified offline map for the route map and the nodes map -->
            <div class="device-section">
              <div class="card-title">${0}</div>
              <chattx-offline-map-settings .hass=${0}></chattx-offline-map-settings>
            </div>

            <!-- Previews of image links in messages, per browser -->
            <div class="device-section">
              <div class="card-title">${0}</div>
              <div class="section-row">
                <div class="form-group-inline">
                  <label class="form-toggle">
                    <input type="checkbox" .checked=${0}
                      @change=${0} />
                    <span class="form-toggle-label">${0}</span>
                  </label>
                  <div class="form-description">${0}</div>
                </div>
              </div>
            </div>

            <!-- Quick messages for the chat composer -->
            <div class="device-section">
              <div class="card-title">${0}</div>
              <chattx-quick-messages-editor .hass=${0}></chattx-quick-messages-editor>
            </div>



          </div>

        </div>
      </div>

      <!-- Modals & Dialogs -->
      ${0}

      <!-- Settings Modal -->
      ${0}

      <!-- Key Management Modal -->
      ${0}

      <!-- Hidden Sensors Modal -->
      ${0}

      <!-- Identity Flow Modal (streaming progress) -->
      ${0}

      <!-- Rename Success Modal (persistent dialog) -->
      ${0}

      <!-- Status Toast -->
      ${0}

      <!-- Dialogs -->
      <chattx-confirm-dialog
        .open=${0}
        .title=${0}
        .message=${0}
        .requireTyped=${0}
        ?dangerous=${0}
        @confirm=${0}
        @cancel=${0}>
      </chattx-confirm-dialog>

      <chattx-command-dialog
        .open=${0}
        .hass=${0}
        .entryId=${0}
        ?isLocal=${0}
        ?narrow=${0}
        @close=${0}>
      </chattx-command-dialog>
    `),this.selectedDevice?this._renderCompanionCard():kp,uh("General"),this._renderDeviceInfo(),uh("Radio"),this._renderRadioSettings(),uh("Region"),this._renderDefaultScope(),uh("Location"),this._renderLocation(),uh("Language"),uh("Chattx settings are saved once in Home Assistant, the same for everyone, in every browser and on every device."),uh("Panel language"),lh(),this._onLanguageChanged,"auto"===lh(),uh("Automatic (Home Assistant or browser)"),Object.entries(eh).map(([e,t])=>bp(Ll||(Ll=Sc`<option value=${0} ?selected=${0}>${0}</option>`),e,lh()===e,t)),uh("Quick reply"),uh("Reply text in the message dialog"),xh(),bh(),!(null!==(e=this.hass)&&void 0!==e&&null!==(e=e.user)&&void 0!==e&&e.is_admin),this._onHeardReplyChanged,uh("{hops} is replaced with the hop count, for example 3 hops. The sender's name is added at the start. Leave empty for the default text."),uh('{km} is replaced with the straight-line distance between the first and the last repeater, {route} with the length of the route through all repeaters, for example 241 km; "? km" when a repeater\'s position is unknown.'),uh("Browser tab"),function(){try{return"false"!==Hc(Rv)}catch(e){return!0}}(),this._onTabBadgeChanged,uh("Show unread messages in the browser tab title"),uh("On every Home Assistant page, the tab title starts with the number from the Chat tab, for example (3)."),uh("Blocked contacts"),this.hass,uh("Map"),this.hass,uh("Images"),sg(),e=>{!function(e){try{e?Vc(rg):Uc(rg,"0")}catch(e){}}(e.target.checked),this.requestUpdate()},uh("Show previews of image links in messages"),uh("Previews and opened images come through Home Assistant, so the image's server never sees this device and a network that blocks it doesn't matter."),uh("Quick messages"),this.hass,this._contextMenu?bp(Nl||(Nl=Sc`
        <div class="modal-overlay"
             @pointerdown=${0}
             @click=${0}>
          <div class="modal-card" data-a11y="tile-context"
               role="dialog" aria-modal="true" aria-label=${0}
               @click=${0}
               @pointerdown=${0}>
            <div class="modal-header">
              <span class="modal-title">${0}</span>
              <button class="modal-close" aria-label=${0} @click=${0}
                      @pointerdown=${0}>&times;</button>
            </div>
            <div class="modal-body">
              <button class="modal-action danger" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg></span>
                ${0}
              </button>
            </div>
          </div>
        </div>
      `),this._onOverlayPointerDown,this._closeContextMenu,uh("{label} actions",{label:this._contextMenu.label}),e=>e.stopPropagation(),e=>e.stopPropagation(),this._contextMenu.label,uh("Close"),this._closeContextMenu,e=>e.stopPropagation(),this._hideSensorFromContext,uh("Hide Sensor")):kp,this._settingsModalOpen?bp(ql||(ql=Sc`
        <div class="modal-overlay" @click=${0}>
          <div class="modal-card" data-a11y="companion-settings"
               role="dialog" aria-modal="true" aria-label=${0}
               @click=${0}>
            <div class="modal-header">
              <span class="modal-title">${0}</span>
              <button class="modal-close" aria-label=${0} @click=${0}>&times;</button>
            </div>
            <div class="modal-body">
              <button class="modal-action" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg></span>
                View Hidden Sensors (${0})
              </button>

              <button class="modal-action" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 19V7H4v12h16m0-16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h16m-7 14v-2h5v2h-5m-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59l4-4z"/></svg></span>
                ${0}
              </button>

              <div class="modal-divider"></div>

              <button class="modal-action danger" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg></span>
                ${0}
              </button>

              <button class="modal-action danger" @click=${0}>
                <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.65 10a6 6 0 110 4H10v2H8v-2H6v-2h6.65zM17 14a2 2 0 100-4 2 2 0 000 4z"/></svg></span>
                ${0}
              </button>
            </div>
          </div>
        </div>
      `),this._closeSettingsModal,uh("Companion settings"),e=>e.stopPropagation(),uh("Companion Settings"),uh("Close"),this._closeSettingsModal,this._openHiddenSensorsList,(this._hiddenSensors[this._getCompanionDeviceKey()]||[]).length,this._openCommandDialogForCompanion,uh("Issue Command"),this._handleRebootFromModal,uh("Reboot Device"),this._openKeyManagementModal,uh("Key Management")):kp,this._keyManagementModalOpen?bp(jl||(jl=Sc`
        <div class="modal-overlay" @click=${0}>
          <div class="modal-card" data-a11y="key-management"
               role="dialog" aria-modal="true" aria-label=${0}
               style="max-width: 440px;"
               @click=${0}>
            <div class="modal-header">
              <span class="modal-title">${0}</span>
              <button class="modal-close" aria-label=${0} @click=${0}>&times;</button>
            </div>
            <div class="modal-body" style="padding: 16px 20px;">
              ${0}
            </div>
          </div>
        </div>
      `),this._closeKeyManagementModal,uh("Key management"),e=>e.stopPropagation(),uh("Key Management"),uh("Close"),this._closeKeyManagementModal,this._renderIdentityManagement()):kp,this._hiddenSensorsModalKey?this._renderHiddenSensorsModal():kp,this._renderIdentityFlowModal(),this._renderRenameSuccessModal(),this._statusMessage?bp(Hl||(Hl=Sc`
        <div class="status-toast ${0}">
          ${0}
        </div>
      `),this._statusMessage.type,this._statusMessage.text):kp,this._confirmDialogOpen,(null===(t=this._confirmAction)||void 0===t?void 0:t.title)||"",(null===(o=this._confirmAction)||void 0===o?void 0:o.message)||"",null===(i=this._confirmAction)||void 0===i?void 0:i.requireTyped,!(null===(r=this._confirmAction)||void 0===r||!r.requireTyped),this._onConfirmAction,this._onConfirmCancel,this._commandDialogOpen,this.hass,null===(s=this.config)||void 0===s?void 0:s.entry_id,!0,this.narrow,this._onCommandDialogClose):bp(Ol||(Ol=Sc`<div>${0}</div>`),uh("No device config loaded"))}_renderCompanionCard(){var e;if(!this.selectedDevice)return kp;const t=this.selectedDevice,o=t.connected,i=this._getCompanionDeviceKey(),r=this._getCompanionEntities(),s=(this._hiddenSensors[i]||[]).length,a=r.find(e=>e.entity_id.includes("node_count")),n=a?null===(e=this.hass)||void 0===e||null===(e=e.states[a.entity_id])||void 0===e?void 0:e.state:void 0,l=n&&"unavailable"!==n&&"unknown"!==n?n:void 0;return bp(Ul||(Ul=Sc`
      <div class="device-section" @tile-context-menu=${0}>
        <div class="companion-header">
          <div class="section-title">
            <div class="section-icon companion">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M9,2A1,1 0 0,0 8,3C8,8.67 8,14.33 8,20C8,21.11 8.89,22 10,22H15C16.11,22 17,21.11 17,20V9C17,7.89 16.11,7 15,7H10V3A1,1 0 0,0 9,2M10,9H15V13H10V9Z"/></svg>
            </div>
            <div>
              <div class="device-name">${0}</div>
              <div class="device-meta">
                <span>${0}</span>
                <span>${0}: ${0}</span>
                <span>${0}: ${0}</span>
                ${0}
              </div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:4px;">
            <button class="settings-btn" @click=${0} title=${0} aria-label=${0}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            </button>
            <div class="status-badge ${0}">
              <span class="status-dot ${0}"></span>
              ${0}
            </div>
          </div>
        </div>

        ${0}

        <div class="actions-row">
          <button class="action-btn" ?disabled=${0} @click=${0}>${0}</button>
          <button class="action-btn" ?disabled=${0} @click=${0}>${0}</button>
          <button class="action-btn" ?disabled=${0} @click=${0}>${0}</button>
          <button class="action-btn" ?disabled=${0} @click=${0}>${0}</button>
        </div>
      </div>
    `),e=>this._onTileContextMenu(e,i),t.name,uh("Companion"),uh("Firmware"),t.firmware||uh("unknown"),uh("Key"),t.pubkey_prefix,void 0!==l?bp(Vl||(Vl=Sc`<span>${0}</span>`),uh("Added nodes: {count}",{count:l})):kp,()=>this._settingsModalOpen=!0,uh("Device settings"),uh("Device settings"),o?"online":"offline",o?"online":"offline",uh(o?"Connected":"Offline"),r.length>0?bp(Kl||(Kl=Sc`
              <chattx-node-summary
                .hass=${0}
                .device=${0}
                .entities=${0}
                .hiddenCount=${0}>
              </chattx-node-summary>
            `),this.hass,this._companionDescriptor(t),r,s):kp,!o,()=>this._executeCompanionAction("send_advert",void 0,"Local Advert"),uh("Local Advert"),!o,()=>this._executeCompanionAction("send_advert",{flood:!0},"Flood Advert"),uh("Flood Advert"),!o,()=>this._executeCompanionAction("set_time",{val:Math.floor(Date.now()/1e3)},"Sync Clock"),uh("Sync Clock"),!o,this._onCompanionTrace,uh("Trace"))}_renderHiddenSensorsModal(){const e=this._hiddenSensorsModalKey,t=(this._hiddenSensors[e]||[]).map(e=>{let t=e;for(const o of Object.values(this._deviceEntities)){const i=o.find(t=>t.entity_id===e);if(i){t=i.label;break}}return{entityId:e,label:t}});return bp(Wl||(Wl=Sc`
      <div class="modal-overlay" @click=${0}>
        <div class="modal-card" data-a11y="hidden-sensors"
             role="dialog" aria-modal="true" aria-label=${0}
             @click=${0}>
          <div class="modal-header">
            <span class="modal-title">${0}</span>
            <button class="modal-close" aria-label=${0} @click=${0}>&times;</button>
          </div>
          <div class="modal-body">
            ${0}
          </div>
          ${0}
        </div>
      </div>
    `),this._closeHiddenSensorsModal,uh("Hidden sensors"),e=>e.stopPropagation(),uh("Hidden Sensors"),uh("Close"),this._closeHiddenSensorsModal,0===t.length?bp(Xl||(Xl=Sc`<div class="empty-hidden">${0}</div>`),uh("No hidden sensors")):t.map(t=>bp(Gl||(Gl=Sc`
                  <div class="hidden-sensor-item">
                    <div>
                      <div class="hidden-sensor-name">${0}</div>
                      <div class="hidden-sensor-id">${0}</div>
                    </div>
                    <button class="unhide-btn" @click=${0}>${0}</button>
                  </div>
                `),t.label,t.entityId,()=>this._unhideSensor(e,t.entityId),uh("Unhide"))),t.length>1?bp(Yl||(Yl=Sc`
                <div class="modal-footer">
                  <button class="action-btn" @click=${0}>${0}</button>
                </div>
              `),()=>{this._unhideAllSensors(e)},uh("Unhide All")):kp)}_renderDeviceInfo(){var e;if(this._deviceConfig)return bp(Ql||(Ql=Sc`
      <div class="info-row">
        <span class="info-label">${0}</span>
        <span class="info-value">${0}</span>
      </div>

      <div class="info-row">
        <span class="info-label">${0}</span>
        <span class="info-value" style="display: flex; align-items: center; gap: 6px;">
          ${0}
          <button
            style="border: none; background: none; cursor: pointer; padding: 2px; color: var(--secondary-text-color); display: flex; align-items: center;"
            title=${0}
            @click=${0}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
          </button>
        </span>
      </div>

      ${0}

      <div class="danger-zone" style="margin-top: 16px;">
        <div class="danger-zone-title">${0}</div>
        <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
          ${0}
        </div>
        <div style="display: flex; gap: 8px;">
          <input
            type="text"
            class="form-input"
            style="flex: 1;"
            .value=${0}
            @input=${0}
          />
          <button class="danger-button"
            ?disabled=${0}
            @click=${0}>
            ${0}
          </button>
        </div>
      </div>
    `),uh("Hardware Model"),this._deviceConfig.hardware_model,uh("Public Key"),this._deviceConfig.pubkey,uh("Copy public key"),()=>this._copyToClipboard(this._deviceConfig.pubkey),this._deviceConfig.connection_type?bp(Zl||(Zl=Sc`
        <div class="info-row">
          <span class="info-label">${0}</span>
          <span class="info-value">${0}${0}</span>
        </div>
      `),uh("Connection"),this._deviceConfig.connection_type.toUpperCase(),this._deviceConfig.connection_address?bp(Jl||(Jl=Sc` — ${0}`),this._deviceConfig.connection_address):""):"",uh("Rename Device"),uh("Changing the device name will change all entity IDs. Automations, scripts, and dashboards using current entity IDs will need to be updated."),null!==(e=this._editValues.name)&&void 0!==e?e:this._deviceConfig.name,e=>{this._editValues.name=e.target.value},!this._editValues.name||this._editValues.name===this._deviceConfig.name,this._handleNameSave,uh("Rename"))}async _loadDefaultScope(){var e;if(!this.hass)return;const t=null===(e=this.config)||void 0===e?void 0:e.entry_id,[o,i]=await Promise.all([Bu(this.hass,t),xu(this.hass,t)]);this._defaultScopeSupported=o.supported,this._defaultScope=o.scope.replace(/^#/,""),this._scopeChoices=i.scopes.map(e=>e.replace(/^#/,"")).filter(Boolean),this._scopeEdit=null,this._scopeCustom=""}_pendingScope(){const e=this._scopeEdit;if(null===e)return null;const t=("__custom"===e?this._scopeCustom:e).trim().replace(/^#/,"");return"__custom"!==e||t?t:null}async _applyDefaultScope(){var e;const t=this._pendingScope();if(null===t||!this.hass)return;this._scopeSaving=!0;const o=await async function(e,t,o){try{var i;const r={type:"meshcore_chattx/set_default_flood_scope",scope:t};o&&(r.entry_id=o);const s=await e.callWS(r);return{success:!!s.success,scope:null!==(i=s.scope)&&void 0!==i?i:""}}catch(e){return{success:!1,error:(null==e?void 0:e.message)||String(e)}}}(this.hass,t,null===(e=this.config)||void 0===e?void 0:e.entry_id);this._scopeSaving=!1,o.success?(this._defaultScope=(o.scope||"").replace(/^#/,""),this._scopeEdit=null,this._scopeCustom="",this._showStatusMessage(this._defaultScope?uh("Default region set to #{name}",{name:this._defaultScope}):uh("Default region cleared"),"success")):this._showStatusMessage(uh("Could not set the region: {error}",{error:o.error||""}),"error")}_renderDefaultScope(){var e;if(null===this._defaultScope)return bp(ed||(ed=Sc`<div class="form-description">${0}</div>`),uh("Loading settings..."));if(!this._defaultScopeSupported)return bp(td||(td=Sc`<div class="form-description">${0}</div>`),uh("A default region needs companion firmware v1.15.0 or newer."));const t=this._defaultScope,o=[...this._scopeChoices];t&&!o.includes(t)&&o.unshift(t);const i=null!==(e=this._scopeEdit)&&void 0!==e?e:t,r=this._pendingScope(),s=null!==r&&r!==t;return bp(od||(od=Sc`
      <div class="section-row">
        <div class="form-group-inline">
          <label class="form-label" for="chattx-default-scope">${0}</label>
          <select id="chattx-default-scope" class="form-select" ?disabled=${0}
            @change=${0}>
            <option value="" ?selected=${0}>${0}</option>
            ${0}
            <option value="__custom" ?selected=${0}>${0}</option>
          </select>
        </div>
      </div>
      ${0}
      <div class="form-description">
        ${0}
      </div>
      <button class="apply-button" ?disabled=${0} @click=${0}>
        ${0}
      </button>
    `),uh("Default region for sending"),this._scopeSaving,e=>{this._scopeEdit=e.target.value},""===i,uh("No region (global flood)"),o.map(e=>bp(id||(id=Sc`<option value=${0} ?selected=${0}>#${0}</option>`),e,i===e,e)),"__custom"===i,uh("Other region…"),"__custom"===i?bp(rd||(rd=Sc`<div class="section-row">
            <div class="form-group-inline">
              <label class="form-label" for="chattx-default-scope-name">${0}</label>
              <input id="chattx-default-scope-name" class="form-input" type="text" maxlength="30"
                placeholder=${0} .value=${0}
                @input=${0} />
            </div>
          </div>`),uh("Region name"),uh("for example cz-pl"),this._scopeCustom,e=>{this._scopeCustom=e.target.value.replace(/[\s,]/g,"")}):kp,uh("Channel messages without their own region go out in this region. A region set on the channel still wins. The radio keeps the setting, so it also applies to other clients, such as the phone app."),!s||this._scopeSaving,this._applyDefaultScope,this._scopeSaving?uh("Saving..."):uh("Apply"))}_renderRadioSettings(){var e,t,o,i;if(!this._deviceConfig)return;const r=this._hasChanges("radio-settings",["tx_power","frequency","bandwidth","spreading_factor","coding_rate","path_hash_mode"]);return bp(sd||(sd=Sc`
      <div class="section-row">
        <div class="form-group-inline">
          <label class="form-label">${0}</label>
          <input
            type="number"
            class="form-input"
            min="2"
            max="22"
            .value=${0}
            @input=${0}
          />
        </div>
        <div class="form-group-inline">
          <label class="form-label">${0}</label>
          <input
            type="number"
            class="form-input"
            step="0.001"
            .value=${0}
            @input=${0}
          />
        </div>
      </div>

      <div class="section-row">
        <div class="form-group-inline">
          <label class="form-label">${0}</label>
          <select
            class="form-select"
            @change=${0}>
            ${0}
          </select>
        </div>
        <div class="form-group-inline">
          <label class="form-label">${0}</label>
          <select
            class="form-select"
            @change=${0}>
            ${0}
          </select>
        </div>
      </div>

      <div class="section-row">
        <div class="form-group-inline">
          <label class="form-label">${0}</label>
          <select
            class="form-select"
            @change=${0}>
            ${0}
          </select>
        </div>
        <div class="form-group-inline">
          <label class="form-label">${0}</label>
          <select
            class="form-select"
            @change=${0}>
            ${0}
            ${0}
          </select>
        </div>
      </div>

      <button
        class="apply-button"
        style="width: 100%; margin-top: 12px;"
        ?disabled=${0}
        @click=${0}>
        ${0}
      </button>

      <div style="margin-top: 12px; padding: 8px; background: rgba(0, 0, 0, 0.02); border-radius: 6px; font-size: 12px; color: var(--secondary-text-color);">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>${0}
      </div>
    `),uh("TX Power (dBm)"),String(null!==(e=null!==(t=this._editValues.tx_power)&&void 0!==t?t:this._deviceConfig.tx_power)&&void 0!==e?e:17),e=>{this._editValues.tx_power=Number(e.target.value)},uh("Frequency (MHz)"),String(null!==(o=null!==(i=this._editValues.frequency)&&void 0!==i?i:this._deviceConfig.frequency)&&void 0!==o?o:906.875),e=>{this._editValues.frequency=Number(e.target.value)},uh("Bandwidth (kHz)"),e=>{this._editValues.bandwidth=Number(e.target.value)},[7.8,10.4,15.6,20.8,31.25,41.7,62.5,125,250,500].map(e=>{var t,o;const i=null!==(t=null!==(o=this._editValues.bandwidth)&&void 0!==o?o:this._deviceConfig.bandwidth)&&void 0!==t?t:250;return bp(ad||(ad=Sc`<option value=${0} ?selected=${0}>${0}</option>`),e,Number(i)===e,e)}),uh("Spreading Factor"),e=>{this._editValues.spreading_factor=Number(e.target.value)},[7,8,9,10,11,12].map(e=>{var t,o;const i=null!==(t=null!==(o=this._editValues.spreading_factor)&&void 0!==o?o:this._deviceConfig.spreading_factor)&&void 0!==t?t:11;return bp(nd||(nd=Sc`<option value=${0} ?selected=${0}>${0}</option>`),e,Number(i)===e,e)}),uh("Coding Rate"),e=>{this._editValues.coding_rate=Number(e.target.value)},[5,6,7,8].map(e=>{var t,o;const i=null!==(t=null!==(o=this._editValues.coding_rate)&&void 0!==o?o:this._deviceConfig.coding_rate)&&void 0!==t?t:5;return bp(ld||(ld=Sc`<option value=${0} ?selected=${0}>${0}</option>`),e,Number(i)===e,e)}),uh("Path Hash Mode"),e=>{this._editValues.path_hash_mode=Number(e.target.value)},void 0===this._editValues.path_hash_mode&&null==this._deviceConfig.path_hash_mode?bp(dd||(dd=Sc`<option selected disabled>${0}</option>`),uh("Unknown")):"",[0,1,2].map(e=>{var t;const o=null!==(t=this._editValues.path_hash_mode)&&void 0!==t?t:this._deviceConfig.path_hash_mode;return bp(cd||(cd=Sc`<option value=${0} ?selected=${0}>${0} - ${0}</option>`),e,null!=o&&Number(o)===e,e,mh("{n} byte","{n} bytes",e+1))}),!r||this._saving,()=>this._handleApply("radio-settings"),this._saving?uh("Applying..."):uh("Apply Radio Settings"),uh("Radio changes require device reboot to take effect"))}_renderLocation(){var e,t,o,i,r,s,a,n;if(!this._deviceConfig)return;const l="ha_location"===this._locationSource,d=l?null===(e=this.hass)||void 0===e?void 0:e.states["zone.home"]:null,c=this._locationSource!==(null!==(t=this._deviceConfig.location_source)&&void 0!==t?t:"manual"),h=this._hasChanges("location",["latitude","longitude"]),p=c||h,u=String(l&&d?null!==(o=d.attributes.latitude)&&void 0!==o?o:0:null!==(i=null!==(r=this._editValues.latitude)&&void 0!==r?r:this._deviceConfig.latitude)&&void 0!==i?i:0),m=String(l&&d?null!==(s=d.attributes.longitude)&&void 0!==s?s:0:null!==(a=null!==(n=this._editValues.longitude)&&void 0!==n?n:this._deviceConfig.longitude)&&void 0!==a?a:0);return bp(hd||(hd=Sc`
      <div class="section-row">
        <div class="form-group-inline">
          <label class="form-label">${0}</label>
          <input
            type="number"
            class="form-input"
            step="0.000001"
            min="-90"
            max="90"
            .value=${0}
            ?disabled=${0}
            @input=${0}
          />
        </div>
        <div class="form-group-inline">
          <label class="form-label">${0}</label>
          <input
            type="number"
            class="form-input"
            step="0.000001"
            min="-180"
            max="180"
            .value=${0}
            ?disabled=${0}
            @input=${0}
          />
        </div>
      </div>
      ${0}

      <div class="section-row">
        <div class="form-group-inline">
          <label class="form-label">${0}</label>
          <select
            class="form-select"
            .value=${0}
            @change=${0}>
            <option value="manual">${0}</option>
            <option value="gps">${0}</option>
            <option value="ha_location">${0}</option>
          </select>
          <div style="font-size: 11px; color: var(--secondary-text-color); margin-top: 4px;">
            ${0}
          </div>
        </div>
      </div>

      <button
        class="apply-button"
        style="width: 100%; margin-top: 12px;"
        ?disabled=${0}
        @click=${0}>
        ${0}
      </button>
    `),uh("Latitude"),u,l,e=>{this._editValues.latitude=Number(e.target.value)},uh("Longitude"),m,l,e=>{this._editValues.longitude=Number(e.target.value)},l?bp(pd||(pd=Sc`
        <div style="font-size: 11px; color: var(--secondary-text-color); margin-top: -8px; margin-bottom: 8px;">
          ${0}
        </div>
      `),uh("Using coordinates from Home Assistant zone.home")):"",uh("Location Source"),this._locationSource,e=>{this._locationSource=e.target.value},uh("Manual (coordinates above)"),uh("GPS (device hardware)"),uh("Home Assistant Zone"),uh("How the device determines its coordinates"),!p||this._saving,this._applyLocation,this._saving?uh("Applying..."):uh("Apply Location Settings"))}_renderIdentityManagement(){return bp(ud||(ud=Sc`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div class="danger-zone" style="margin-top: 0;">
          <div class="danger-zone-title">${0}</div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
            ${0}
          </div>
          <button class="danger-button" @click=${0}>
            ${0}
          </button>
        </div>
        <div class="danger-zone" style="margin-top: 0;">
          <div class="danger-zone-title">${0}</div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
            ${0}
          </div>
          <div style="display: flex; gap: 8px;">
            <input
              type="text"
              class="form-input"
              style="flex: 1; font-family: monospace;"
              placeholder=${0}
              .value=${0}
              @input=${0}
            />
            <button
              class="danger-button"
              ?disabled=${0}
              @click=${0}>
              ${0}
            </button>
          </div>
        </div>
      </div>
    `),uh("Regenerate Identity"),uh("Creates a new key pair. All contacts will need to re-add you. This will change all entity IDs — automations, scripts, and dashboards using current entity IDs will need to be updated."),this._showRegenIdentityConfirm,uh("Regenerate Identity"),uh("Import Private Key"),uh("Importing a key changes the device identity. This will change all entity IDs — automations, scripts, and dashboards using current entity IDs will need to be updated."),uh("Hex private key"),this._importKeyValue,e=>{this._importKeyValue=e.target.value},!this._importKeyValue.trim(),this._handleImportKeyConfirm,uh("Import"))}_hasChanges(e,t){return!!this._deviceConfig&&t.some(e=>void 0!==this._editValues[e]&&this._editValues[e]!==this._deviceConfig[e])}async _handleApply(e){if(!this.hass||!this._deviceConfig)return;let t=[];switch(e){case"device-name":t=["name"];break;case"radio-settings":t=["tx_power","frequency","bandwidth","spreading_factor","coding_rate","path_hash_mode"]}const o={};for(const e of t)void 0!==this._editValues[e]&&(o[e]=this._editValues[e]);this._saving=!0;try{var i;const e=await du(this.hass,o,null===(i=this.config)||void 0===i?void 0:i.entry_id);if(e.success){this._deviceConfig&&(this._deviceConfig={...this._deviceConfig,...o});for(const e of t)delete this._editValues[e];this._editValues={...this._editValues},e.rename?this._renameSuccess=e.rename:this._showStatusMessage(uh("Saved: {join}",{join:t.join(", ")}),"success")}else this._showStatusMessage(uh("Save failed"),"error")}catch(e){this._showStatusMessage(uh("Error: {error}",{error:String(e)}),"error")}finally{this._saving=!1}}_onLanguageChanged(e){!function(e){try{"auto"===e?Vc(ih):Uc(ih,e)}catch(e){}}(e.target.value),window.location.reload()}_onTabBadgeChanged(e){!function(e){try{Uc(Rv,String(e))}catch(e){}window.dispatchEvent(new Event("chattx-tab-badge-changed"))}(e.target.checked)}async _onHeardReplyChanged(e){this.hass&&(await async function(e,t){try{return wh((await e.callWS({type:"meshcore_chattx/set_heard_reply",text:t.trim()})).text),!0}catch(e){return!1}}(this.hass,e.target.value)?this._showStatusMessage(uh("Saved for every browser"),"success"):this._showStatusMessage(uh("Failed to save the reply text"),"error"),this.requestUpdate())}async _copyToClipboard(e){try{await navigator.clipboard.writeText(e),this._showStatusMessage(uh("Copied to clipboard"),"success")}catch(e){this._showStatusMessage(uh("Failed to copy"),"error")}}_showStatusMessage(e,t){this._statusMessage={text:e,type:t},null!==this._statusMessageTimeout&&clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=window.setTimeout(()=>{this._statusMessage=null,this._statusMessageTimeout=null},5e3)}_handleNameSave(){var e;const t=this._editValues.name,o=null===(e=this._deviceConfig)||void 0===e?void 0:e.name;if(void 0===t||t===o)return;const i=e=>(e||"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,""),r=i(null!=o?o:""),s=i(String(t));this._confirmAction={title:uh("Rename Device"),message:`Renaming the device will rename all entity IDs ending in _${r} to _${s}. Any automations, scripts, or dashboards referencing entity IDs by the old name will need updating. A repair issue will list every renamed entity. Continue?`,onConfirm:async()=>{await this._handleApply("device-name")}},this._confirmDialogOpen=!0}_handleRebootFromModal(){this._settingsModalOpen=!1,this._confirmAction={title:uh("Reboot Device"),message:uh("Are you sure you want to reboot the device? The device will be temporarily unavailable."),onConfirm:()=>this._executeDeviceCommand("reboot")},this._confirmDialogOpen=!0}async _executeDeviceCommand(e){if(this.hass)try{var t;const o=await cu(this.hass,e,void 0,null===(t=this.config)||void 0===t?void 0:t.entry_id);o.success?this._showStatusMessage(uh("Device {command} initiated",{command:e}),"success"):this._showStatusMessage(uh("Command failed: {response}",{response:o.response}),"error")}catch(e){this._showStatusMessage(uh("Error: {error}",{error:String(e)}),"error")}}async _applyLocation(){if(this.hass&&this._deviceConfig){this._saving=!0;try{var e;const o=["latitude","longitude"],i={};if("ha_location"===this._locationSource){const e=this.hass.states["zone.home"];if(!e||null==e.attributes.latitude||null==e.attributes.longitude)return void this._showStatusMessage(uh("Could not read zone.home coordinates from Home Assistant"),"error");i.latitude=e.attributes.latitude,i.longitude=e.attributes.longitude}else for(const e of o)void 0!==this._editValues[e]&&(i[e]=this._editValues[e]);if(Object.keys(i).length>0){var t;if(!(await du(this.hass,i,null===(t=this.config)||void 0===t?void 0:t.entry_id)).success)return void this._showStatusMessage(uh("Failed to save coordinates"),"error");this._deviceConfig&&(this._deviceConfig={...this._deviceConfig,...i});for(const e of o)delete this._editValues[e];this._editValues={...this._editValues}}if(!(await async function(e,t,o){try{const i={type:"meshcore_chattx/set_location_source",source:t};return o&&(i.entry_id=o),await e.callWS(i)}catch(e){return{success:!1}}}(this.hass,this._locationSource,null===(e=this.config)||void 0===e?void 0:e.entry_id)).success)return void this._showStatusMessage(uh("Failed to update location source"),"error");await this._loadDeviceConfig(),this._showStatusMessage(uh("Location settings applied"),"success")}catch(e){this._showStatusMessage(uh("Error: {error}",{error:String(e)}),"error")}finally{this._saving=!1}}}_showRegenIdentityConfirm(){this._confirmAction={title:uh("Regenerate Identity"),message:uh("This will create a new cryptographic identity, reboot the device, and migrate all entity IDs to the new key prefix. Existing automations referencing entity IDs by the old prefix will need updating. All contacts must re-add this device. This cannot be undone."),requireTyped:"REGENERATE",onConfirm:async()=>{var e;this.hass&&(this._closeKeyManagementModal(),this._startIdentityFlow("regenerate",{type:"meshcore_chattx/regenerate_identity",payload:null!==(e=this.config)&&void 0!==e&&e.entry_id?{entry_id:this.config.entry_id}:{}}))}},this._confirmDialogOpen=!0}_handleImportKeyConfirm(){const e=this._importKeyValue.trim().replace(/\s+/g,"");e&&(64===e.length||128===e.length?/^[0-9a-fA-F]+$/.test(e)?(this._confirmAction={title:uh("Import Private Key"),message:uh("Importing a private key will replace the device identity, reboot the device, and migrate all entity IDs to the new key prefix. Existing automations referencing entity IDs by the old prefix will need updating. All contacts must re-add this device."),requireTyped:"IMPORT",onConfirm:()=>this._importIdentityKey()},this._confirmDialogOpen=!0):this._showStatusMessage(uh("Private key must be hex (0-9, a-f)"),"error"):this._showStatusMessage(uh("Private key must be 64 or 128 hex characters"),"error"))}async _importIdentityKey(){var e;if(!this.hass||!this._importKeyValue.trim())return;const t=this._importKeyValue.trim().replace(/\s+/g,"");this._closeKeyManagementModal(),this._importKeyValue="";const o={private_key:t};null!==(e=this.config)&&void 0!==e&&e.entry_id&&(o.entry_id=this.config.entry_id),this._startIdentityFlow("import",{type:"meshcore_chattx/import_identity",payload:o})}_startIdentityFlow(e,t){if(!this.hass)return;this._identityFlowUnsubscribe&&(this._identityFlowUnsubscribe(),this._identityFlowUnsubscribe=null),this._identityFlowState={kind:"progress",flow:e,currentStep:"generating",completedSteps:new Set};const{unsubscribe:o}=function(e,t,o,i){let r,s=null;const a=new Promise(e=>{r=e});let n={success:!1,code:"unknown",message:"Identity flow terminated without a result event."};return e.connection.subscribeMessage(e=>{if("done"===e.step&&e.success&&e.old_pubkey&&e.new_pubkey){const t={success:!0,old_pubkey:e.old_pubkey,new_pubkey:e.new_pubkey,warning:e.warning};n=t,i({type:"result",data:t})}else"done"!==e.step&&i({type:"progress",step:e.step})},{type:t,...o}).then(e=>{s=e,r(n)}).catch(e=>{const t={success:!1,code:e.code||"error",message:e.message||"Identity flow failed."};i({type:"error",data:t}),r(t)}),{unsubscribe:()=>{s&&s()},done:a}}(this.hass,t.type,t.payload,t=>{if("progress"===t.type){if("progress"!==this._identityFlowState.kind)return;const e=new Set(this._identityFlowState.completedSteps);e.add(this._identityFlowState.currentStep),this._identityFlowState={...this._identityFlowState,currentStep:t.step,completedSteps:e}}else"result"===t.type?this._identityFlowState={kind:"success",flow:e,oldPubkey:t.data.old_pubkey,newPubkey:t.data.new_pubkey,warning:t.data.warning}:"error"===t.type&&(this._identityFlowState={kind:"failure",flow:e,code:t.data.code,message:t.data.message})});this._identityFlowUnsubscribe=o}_closeIdentityFlowModal(){this._identityFlowUnsubscribe&&(this._identityFlowUnsubscribe(),this._identityFlowUnsubscribe=null);const e="success"===this._identityFlowState.kind;this._identityFlowState={kind:"closed"},e&&this._loadDeviceConfig()}_renderIdentityFlowModal(){const e=this._identityFlowState;if("closed"===e.kind)return kp;const t="regenerate"===e.flow?uh("Regenerate Identity"):uh("Import Private Key"),o="regenerate"===e.flow?uh("Regenerating Identity"):uh("Importing Identity"),i="regenerate"===e.flow?uh("Identity Regenerated"):uh("Identity Imported"),r="regenerate"===e.flow?uh("Identity Regeneration Failed"):uh("Identity Import Failed");let s,a;"progress"===e.kind?(s=bp(md||(md=Sc`
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          ${0}
        </div>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
          ${0}
        </ul>
      `),uh("This typically takes 5–10 seconds. Please don't close this dialog."),qv.map(t=>{const o=e.completedSteps.has(t.step),i=e.currentStep===t.step;let r="○",s="var(--secondary-text-color)";return o?(r="✓",s="var(--success-color, #28a745)"):i&&(r="⏳",s="var(--primary-color)"),bp(gd||(gd=Sc`
              <li style="display: flex; align-items: center; gap: 8px; color: ${0}; font-size: 14px;">
                <span style="font-family: monospace; width: 1em;">${0}</span>
                <span>${0}</span>
              </li>
            `),s,r,t.label)})),a=kp):"success"===e.kind?(s=bp(vd||(vd=Sc`
        <div style="font-size: 32px; text-align: center; margin-bottom: 8px;">✅</div>
        <div style="font-size: 14px; margin-bottom: 16px;">
          ${0}
        </div>
        <div style="font-family: monospace; font-size: 12px; background: var(--card-background-color, #f5f5f5); padding: 8px 12px; border-radius: 4px; margin-bottom: 12px;">
          <div><span style="color: var(--secondary-text-color);">${0}</span> ${0}…</div>
          <div><span style="color: var(--secondary-text-color);">${0}</span> ${0}… <span style="color: var(--success-color, #28a745); font-size: 11px;">(verified after reload)</span></div>
        </div>
        ${0}
      `),uh("The device's identity has been replaced and verified."),uh("Old key:"),e.oldPubkey.slice(0,12),uh("New key:"),e.newPubkey.slice(0,12),e.warning?bp(fd||(fd=Sc`
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-top: 12px; padding: 8px 12px; border-left: 3px solid var(--warning-color, #f0ad4e); background: var(--warning-color-bg, rgba(240, 173, 78, 0.08));">
            <strong>${0}</strong>
            <ul style="margin: 4px 0 0 16px; padding: 0;">
              <li>${0}</li>
              <li>${0}</li>
            </ul>
          </div>
        `),uh("Follow-up:"),e.warning,uh("Check Settings → Repairs for the entity-ID migration list.")):kp),a=bp(yd||(yd=Sc`
        <button class="modal-action" @click=${0}>${0}</button>
      `),this._closeIdentityFlowModal,uh("Close"))):(s=bp(_d||(_d=Sc`
        <div style="font-size: 32px; text-align: center; margin-bottom: 8px;">❌</div>
        <div style="font-size: 14px; margin-bottom: 12px;">
          ${0}
        </div>
        <div style="font-family: monospace; font-size: 12px; background: var(--card-background-color, #f5f5f5); padding: 8px 12px; border-radius: 4px;">
          <div><span style="color: var(--secondary-text-color);">${0}</span> ${0}</div>
          <div style="margin-top: 4px; word-break: break-word;"><span style="color: var(--secondary-text-color);">${0}</span> ${0}</div>
        </div>
      `),"regenerate"===e.flow?uh("The device firmware rejected the new key. Your device identity is unchanged."):uh("The import did not take effect. Your device identity may be unchanged."),uh("Error code:"),e.code,uh("Message:"),e.message),a=bp(bd||(bd=Sc`
        <button class="modal-action" @click=${0}>${0}</button>
      `),this._closeIdentityFlowModal,uh("Close")));const n="progress"===e.kind?o:"success"===e.kind?i:r;return bp(xd||(xd=Sc`
      <div class="modal-overlay">
        <div class="modal-card" data-a11y="identity-flow"
             role="dialog" aria-modal="true" aria-label=${0}
             style="max-width: 480px;"
             @click=${0}>
          <div class="modal-header">
            <span class="modal-title">${0}</span>
            ${0}
          </div>
          <div class="modal-body" style="padding: 20px;">
            ${0}
            ${0}
          </div>
        </div>
      </div>
    `),t,e=>e.stopPropagation(),n,"progress"===e.kind?kp:bp(wd||(wd=Sc`
              <button class="modal-close" aria-label=${0} @click=${0}>&times;</button>
            `),uh("Close"),this._closeIdentityFlowModal),s,a?bp(kd||(kd=Sc`<div style="margin-top: 20px; display: flex; justify-content: flex-end;">${0}</div>`),a):kp)}_closeRenameSuccessModal(){this._renameSuccess=null,this._loadDeviceConfig(),this.dispatchEvent(new CustomEvent("device-renamed",{bubbles:!0,composed:!0}))}_renderRenameSuccessModal(){const e=this._renameSuccess;return e?bp($d||($d=Sc`
      <div class="dialog-overlay">
        <div class="dialog"
             role="dialog" aria-modal="true" aria-label=${0}
             data-a11y="rename-success"
             @click=${0}>
          <div class="dialog-header">
            <div class="dialog-header-title">${0}</div>
          </div>
          <div class="dialog-body">
            <p style="margin: 0 0 12px 0;">
              ${0}
            </p>
            <p style="margin: 0 0 12px 0;">
              ${0}
            </p>
            <p style="margin: 0 0 12px 0;">
              ${0}
            </p>
            <p style="margin: 0; color: var(--secondary-text-color); font-size: 13px;">
              ${0}
            </p>
          </div>
          <div class="dialog-footer">
            <button class="dialog-button primary"
                    @click=${0}>${0}</button>
          </div>
        </div>
      </div>
    `),uh("Device renamed"),e=>e.stopPropagation(),uh("Device renamed"),uh("The MeshCore device was renamed from {old} to {new}.",{old:e.old_name,new:e.new_name}),mh("{n} entity ID was automatically migrated from the {old} suffix to {new}.","{n} entity IDs were automatically migrated from the {old} suffix to {new}.",e.count,{old:`_${e.old_suffix}`,new:`_${e.new_suffix}`}),uh("If you have automations, scripts, or dashboards referencing the old entity IDs, you will need to update them manually to use the new suffix."),uh("The full list of renamed entity IDs is available in Settings → Repairs."),this._closeRenameSuccessModal,uh("Close")):kp}async _onConfirmAction(){if(this._confirmDialogOpen=!1,this._confirmAction)try{await this._confirmAction.onConfirm()}catch(e){this._error=uh("Error: {error}",{error:String(e)})}this._confirmAction=null}_onConfirmCancel(){this._confirmDialogOpen=!1,this._confirmAction=null}_onCommandDialogClose(){this._commandDialogOpen=!1}async _loadEntityRegistry(){if(this.hass&&!this._entityRegistryLoaded){this._entityRegistryLoaded=!0;try{const{meshcoreDeviceMap:e,deviceEntities:t}=await vv(this.hass);this._meshcoreDeviceMap=e,this._deviceEntities=t}catch(e){console.error("Failed to load entity registry:",e)}}}_getCompanionEntities(){var e;if(!this.hass||!this.selectedDevice)return[];const t=this._getCompanionDeviceKey(),o=new Set(this._hiddenSensors[t]||[]),i=this.selectedDevice.entry_id,r=this._meshcoreDeviceMap[i];if(r&&this._deviceEntities[r])return this._deviceEntities[r].filter(e=>!o.has(e.entity_id));const s=(null===(e=this.selectedDevice.pubkey_prefix)||void 0===e||null===(e=e.substring(0,6))||void 0===e?void 0:e.toLowerCase())||"";if(!s)return[];const a=[];for(const[e,t]of Object.entries(this._deviceEntities))if(!Object.entries(this._meshcoreDeviceMap).some(([t,o])=>o===e&&(t.includes("_repeater_")||t.includes("_client_"))))for(const e of t)e.entity_id.toLowerCase().includes(s)&&!o.has(e.entity_id)&&a.push(e);return a.sort((e,t)=>e.sortOrder-t.sortOrder)}_getCompanionDeviceKey(){var e;return(null===(e=this.selectedDevice)||void 0===e?void 0:e.entry_id)||"companion"}_companionDescriptor(e){return{type:"companion",name:e.name,pubkey_prefix:e.pubkey_prefix,connected:e.connected,firmware:e.firmware,entry_id:e.entry_id}}_loadHiddenSensors(){try{const e=Hc("chattx-hidden-sensors");e&&(this._hiddenSensors=JSON.parse(e))}catch(e){this._hiddenSensors={}}}_saveHiddenSensors(){try{Uc("chattx-hidden-sensors",JSON.stringify(this._hiddenSensors))}catch(e){}}_hideSensor(e,t){const o=this._hiddenSensors[e]||[];o.includes(t)||(this._hiddenSensors={...this._hiddenSensors,[e]:[...o,t]},this._saveHiddenSensors())}_unhideSensor(e,t){const o=this._hiddenSensors[e]||[];if(this._hiddenSensors={...this._hiddenSensors,[e]:o.filter(e=>e!==t)},0===this._hiddenSensors[e].length){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t}this._saveHiddenSensors()}_unhideAllSensors(e){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t,this._saveHiddenSensors()}async _executeCompanionAction(e,t,o){if(!this.hass)return;const i=o||e;try{var r;const o=await cu(this.hass,e,t,null===(r=this.config)||void 0===r?void 0:r.entry_id);this._showStatusMessage(uh("Companion: {displayName} → {OK}",{displayName:i,OK:o.response||"OK"}),"success")}catch(e){this._showStatusMessage(uh("Companion: {displayName} failed — {error}",{displayName:i,error:String(e)}),"error")}}_onTileContextMenu(e,t){const{entityId:o,label:i}=e.detail;this._contextMenu={entityId:o,label:i,deviceKey:t},this._overlayPointerStarted=!1}_onOverlayPointerDown(){this._overlayPointerStarted=!0}_closeContextMenu(){this._overlayPointerStarted&&(this._overlayPointerStarted=!1,this._contextMenu=null)}_hideSensorFromContext(){this._contextMenu&&(this._hideSensor(this._contextMenu.deviceKey,this._contextMenu.entityId),this._showStatusMessage(uh("Hidden: {label}",{label:this._contextMenu.label}),"success"),this._contextMenu=null)}_closeSettingsModal(){this._settingsModalOpen=!1}_openHiddenSensorsList(){this._hiddenSensorsModalKey=this._getCompanionDeviceKey(),this._settingsModalOpen=!1}_closeHiddenSensorsModal(){this._hiddenSensorsModalKey=null}_openCommandDialogForCompanion(){this._commandDialogOpen=!0,this._settingsModalOpen=!1}_openKeyManagementModal(){this._keyManagementModalOpen=!0,this._settingsModalOpen=!1}_closeKeyManagementModal(){this._keyManagementModalOpen=!1}};jv.styles=[Wp,Rh(Cd||(Cd=Sc`
      :host {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      .settings-page {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: var(--primary-background-color, #fafafa);
      }

      .settings-container {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
      }

      .settings-container::-webkit-scrollbar {
        width: 6px;
      }

      .settings-container::-webkit-scrollbar-track {
        background: transparent;
      }

      .settings-container::-webkit-scrollbar-thumb {
        background: var(--scrollbar-thumb, var(--scrollbar-thumb-color, #c1c1c1));
        border-radius: 3px;
      }

      .section-row {
        display: flex;
        gap: 12px;
        margin-bottom: 16px;
      }

      .section-row.full {
        flex: 1;
      }

      .form-group-inline {
        flex: 1;
      }

      .danger-zone {
        margin-top: 16px;
        padding: 12px;
        border: 2px solid var(--error-color, #db4437);
        border-radius: 8px;
        background: rgba(219, 68, 55, 0.05);
      }

      .danger-zone-title {
        font-size: 13px;
        font-weight: 600;
        color: var(--error-color, #db4437);
        margin-bottom: 12px;
      }

      .danger-zone-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .info-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .info-row:last-child {
        border-bottom: none;
      }

      .info-label {
        font-size: 13px;
        color: var(--secondary-text-color);
        font-weight: 500;
      }

      .info-value {
        font-size: 13px;
        color: var(--primary-text-color);
        font-family: monospace;
        font-weight: 500;
        word-break: break-all;
      }

      .settings-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        margin-bottom: 16px;
      }

      .settings-grid > .device-section {
        margin-bottom: 0;
      }

      @media (max-width: 768px) {
        .settings-grid {
          grid-template-columns: 1fr;
        }
      }

      .card-title {
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
        margin-bottom: 16px;
      }

      /* ─── Companion Device Card Styles ─── */

      .device-section {
        background: var(--card-background-color, #fff);
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 16px;
      }

      .companion-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        gap: 8px;
        flex-wrap: wrap;
      }

      .section-title {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        flex: 1 1 auto;
      }

      .section-title > div:last-child {
        min-width: 0;
        flex: 1 1 auto;
      }

      .section-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        flex-shrink: 0;
      }

      .section-icon.companion {
        background: rgba(3, 169, 244, 0.12);
        color: #0288d1;
      }

      .device-name {
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .device-meta {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }

      .device-meta span {
        margin-right: 12px;
      }

      .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 600;
        flex-shrink: 0;
        white-space: nowrap;
        max-width: 100%;
      }

      .status-badge.online {
        background: rgba(76, 175, 80, 0.12);
        color: #2e7d32;
      }

      .status-badge.offline {
        background: rgba(114, 114, 114, 0.12);
        color: #616161;
      }

      .status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }

      .status-dot.online {
        background: #4caf50;
      }

      .status-dot.offline {
        background: #9e9e9e;
      }

      .subsection-label {
        font-size: 12px;
        font-weight: 600;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 8px;
        margin-top: 16px;
      }

      .sensor-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
        gap: 8px;
      }

      .actions-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 16px;
      }

      .action-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 6px 12px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 6px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
      }

      .action-btn:hover:not(:disabled) {
        background: var(--secondary-background-color, #f5f5f5);
        border-color: var(--primary-color, #03a9f4);
      }

      .action-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .settings-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 6px;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        transition: all 0.2s;
        margin-left: 8px;
        flex-shrink: 0;
      }

      .settings-btn:hover {
        background: var(--secondary-background-color, #f0f0f0);
        color: var(--primary-text-color);
      }

      /* Modal overlay */
      .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.15s ease-out;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .modal-card {
        background: var(--card-background-color, #fff);
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        min-width: 260px;
        max-width: 400px;
        max-height: 80vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .modal-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .modal-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 6px;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        font-size: 18px;
      }

      .modal-close:hover {
        background: var(--secondary-background-color, #f0f0f0);
      }

      .modal-body {
        padding: 8px 0;
        overflow-y: auto;
      }

      .modal-action {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        cursor: pointer;
        transition: background 0.15s;
        color: var(--primary-text-color);
        font-size: 14px;
        border: none;
        background: none;
        width: 100%;
        text-align: left;
      }

      .modal-action:hover {
        background: var(--secondary-background-color, #f5f5f5);
      }

      .modal-action.danger {
        color: var(--error-color, #db4437);
      }

      .modal-action-icon {
        display: flex;
        align-items: center;
        color: var(--secondary-text-color);
        flex-shrink: 0;
      }

      .modal-action.danger .modal-action-icon {
        color: var(--error-color, #db4437);
      }

      .modal-action:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .modal-action:disabled:hover {
        background: none;
      }

      .modal-divider {
        height: 1px;
        background: var(--divider-color, #e0e0e0);
        margin: 4px 0;
      }

      /* Hidden sensors list */
      .hidden-sensor-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .hidden-sensor-item:last-child {
        border-bottom: none;
      }

      .hidden-sensor-name {
        font-size: 13px;
        color: var(--primary-text-color);
      }

      .hidden-sensor-id {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }

      .unhide-btn {
        padding: 4px 10px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        background: var(--card-background-color, #fff);
        color: var(--primary-color, #03a9f4);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
      }

      .unhide-btn:hover {
        background: var(--secondary-background-color, #f5f5f5);
      }

      .modal-footer {
        padding: 12px 20px;
        border-top: 1px solid var(--divider-color, #e0e0e0);
        display: flex;
        justify-content: flex-end;
      }

      .empty-hidden {
        padding: 20px;
        text-align: center;
        color: var(--secondary-text-color);
        font-size: 13px;
      }

      /* Status toast */
      .status-toast {
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        padding: 12px 16px;
        border-radius: 8px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 13px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
      }

      .status-toast.success {
        border-left: 4px solid #4caf50;
      }

      .status-toast.error {
        border-left: 4px solid var(--error-color, #db4437);
        color: var(--error-color, #db4437);
      }

      @keyframes slideIn {
        from {
          transform: translateY(100%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `)),Xp],Fc([Up({type:Object})],jv.prototype,"hass",void 0),Fc([Up({type:Object})],jv.prototype,"config",void 0),Fc([Up({type:Boolean})],jv.prototype,"narrow",void 0),Fc([Up({type:Object})],jv.prototype,"selectedDevice",void 0),Fc([Vp()],jv.prototype,"_deviceConfig",void 0),Fc([Vp()],jv.prototype,"_loading",void 0),Fc([Vp()],jv.prototype,"_error",void 0),Fc([Vp()],jv.prototype,"_editValues",void 0),Fc([Vp()],jv.prototype,"_saving",void 0),Fc([Vp()],jv.prototype,"_commandDialogOpen",void 0),Fc([Vp()],jv.prototype,"_confirmAction",void 0),Fc([Vp()],jv.prototype,"_confirmDialogOpen",void 0),Fc([Vp()],jv.prototype,"_locationSource",void 0),Fc([Vp()],jv.prototype,"_importKeyValue",void 0),Fc([Vp()],jv.prototype,"_deviceEntities",void 0),Fc([Vp()],jv.prototype,"_meshcoreDeviceMap",void 0),Fc([Vp()],jv.prototype,"_entityRegistryLoaded",void 0),Fc([Vp()],jv.prototype,"_hiddenSensors",void 0),Fc([Vp()],jv.prototype,"_contextMenu",void 0),Fc([Vp()],jv.prototype,"_settingsModalOpen",void 0),Fc([Vp()],jv.prototype,"_keyManagementModalOpen",void 0),Fc([Vp()],jv.prototype,"_identityFlowState",void 0),Fc([Vp()],jv.prototype,"_renameSuccess",void 0),Fc([Vp()],jv.prototype,"_hiddenSensorsModalKey",void 0),Fc([Vp()],jv.prototype,"_statusMessage",void 0),Fc([Vp()],jv.prototype,"_defaultScope",void 0),Fc([Vp()],jv.prototype,"_defaultScopeSupported",void 0),Fc([Vp()],jv.prototype,"_scopeChoices",void 0),Fc([Vp()],jv.prototype,"_scopeEdit",void 0),Fc([Vp()],jv.prototype,"_scopeCustom",void 0),Fc([Vp()],jv.prototype,"_scopeSaving",void 0),jv=Fc([qp("chattx-settings-page")],jv);let Hv=class extends Lp{constructor(){super(),this.open=!1,this.contactName="",this.result=null,this.error="",this.availableRepeaters=[],this.targetContact=null,this.pathMode="discovery",this.pathHops=[],this.enteredPath="",this._repeaterFilter="",this._running=!1,this._onPathModeChange=e=>{this.pathMode=e.target.value},this._onExplicitPathInput=e=>{this.enteredPath=e.target.value},this._onRunTrace=()=>{if(!this._canRunTrace())return;const e="discovery"===this.pathMode?void 0:this._buildPathString();this._running=!0,this.dispatchEvent(new CustomEvent("trace-requested",{detail:{pathMode:this.pathMode,path:e},bubbles:!0,composed:!0}))},fm(this,{isOpen:()=>this.open,onEscape:()=>this._close()})}willUpdate(e){if(e.has("open")&&this.open&&!e.get("open")){const e=this.targetContact;if(!e||2!==e.type&&3!==e.type&&4!==e.type)this.pathMode="discovery",this.pathHops=[];else{this.pathMode="select";const t=this._resolveCachedHops(e);this.pathHops=t||[]}this.enteredPath="",this._repeaterFilter="",this._running=!1}(e.has("result")&&this.result||e.has("error")&&this.error)&&(this._running=!1)}_resolveCachedHops(e){var t,o;if(1!==(null!==(t=e.out_path_hash_mode)&&void 0!==t?t:0))return null;const i=(e.out_path||"").toLowerCase(),r=null!==(o=e.out_path_len)&&void 0!==o?o:0;if(!i||r<=0)return null;if(i.length<4*r)return null;const s=[];for(let e=0;e<r;e++){const t=i.substring(4*e,4*(e+1)),o=this.availableRepeaters.find(e=>(e.pubkey_prefix||"").toLowerCase().startsWith(t));if(!o)return null;s.push(o)}return s}render(){return this.open?bp(Sd||(Sd=Sc`
      <div class="dialog-backdrop" @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label=${0}
          @click=${0}>
          <div class="dialog-header">
            <div class="dialog-title">Trace ${0}</div>
            <button class="dialog-close" aria-label=${0} @click=${0}>✕</button>
          </div>
          <div class="dialog-content">
            ${0}
          </div>
        </div>
      </div>
    `),this._close,uh("Trace {contactName}",{contactName:this.contactName}),e=>e.stopPropagation(),this.contactName,uh("Close"),this._close,this._renderBody()):bp(Bd||(Bd=Sc``))}_renderBody(){return this.error?bp(Fd||(Fd=Sc`<div class="error-box">${0}</div>`),this.error):this.result?this._renderResult(this.result):this._running?bp(Ad||(Ad=Sc`<div class="info-value">${0}</div>`),uh("Tracing…")):this._renderInput()}_renderInput(){return bp(Md||(Md=Sc`
      <div class="form-group">
        <label class="form-label">${0}</label>
        <select
          class="form-select"
          .value=${0}
          @change=${0}
        >
          <option value="discovery">${0}</option>
          <option value="select">${0}</option>
          <option value="explicit">${0}</option>
        </select>
      </div>

      ${0}

      ${0}

      <div class="dialog-actions">
        <button
          class="btn-primary"
          ?disabled=${0}
          @click=${0}
        >
          ${0}
        </button>
      </div>
    `),uh("Path Type"),this.pathMode,this._onPathModeChange,uh("Path discovery (auto)"),uh("Select repeaters"),uh("Enter path"),"discovery"===this.pathMode?bp(Dd||(Dd=Sc`<div class="info-item path-hint">
            ${0}
          </div>`),uh("Flood path discovery will find a route automatically. May time out if the target is many hops away or unreachable by flood.")):"select"===this.pathMode?this._renderRepeaterPicker():this._renderExplicitInput(),"discovery"!==this.pathMode&&this._canRunTrace()?bp(Ed||(Ed=Sc`<div class="info-item">
            <div class="info-label">${0}</div>
            <div class="resolved-path">${0}</div>
          </div>`),uh("Resolved Path"),this._buildPathString()):bp(Pd||(Pd=Sc``)),!this._canRunTrace(),this._onRunTrace,uh("Run Trace"))}_renderRepeaterPicker(){var e,t,o;const i=new Set(this.pathHops.map(e=>e.public_key)),r=this._repeaterFilter.trim().toLowerCase(),s=[...this.availableRepeaters].filter(e=>!i.has(e.public_key)).filter(e=>{if(!r)return!0;const t=(e.adv_name||"").toLowerCase(),o=(e.pubkey_prefix||"").toLowerCase();return t.includes(r)||o.startsWith(r)}).sort((e,t)=>(e.adv_name||"").localeCompare(t.adv_name||"")),a=(null===(e=this.targetContact)||void 0===e?void 0:e.adv_name)||(null===(t=this.targetContact)||void 0===t?void 0:t.pubkey_prefix)||"(no target)",n=(null===(o=this.targetContact)||void 0===o||null===(o=o.pubkey_prefix)||void 0===o?void 0:o.substring(0,2).toUpperCase())||"--";return bp(zd||(zd=Sc`
      <div class="info-item">
        <div class="info-label">${0}</div>
        <div class="repeater-picker">
          <div class="picker-column">
            <div class="picker-column-label">${0}</div>
            <input
              type="text"
              class="form-input picker-search"
              placeholder=${0}
              .value=${0}
              @input=${0}
              autocomplete="off"
              spellcheck="false"
            />
            <div class="picker-list">
              ${0}
            </div>
          </div>
          <div class="picker-column">
            <div class="picker-column-label">${0}</div>
            <div class="picker-list">
              ${0}
            </div>
          </div>
        </div>
      </div>

      <div class="info-item">
        <div class="info-label">${0}</div>
        <div class="target-row">
          <span class="target-name">${0}</span>
          <span class="target-hex">${0}</span>
        </div>
      </div>
    `),uh("Repeaters (in order, source → target)"),uh("Available"),uh("Filter by name or pubkey prefix…"),this._repeaterFilter,e=>{this._repeaterFilter=e.target.value},0===s.length?bp(Id||(Id=Sc`<div class="picker-empty">${0}</div>`),r?"No matches":"No repeaters available"):s.map(e=>bp(Rd||(Rd=Sc`
                      <div
                        class="picker-item"
                        @click=${0}
                        title=${0}
                      >
                        <span class="name">${0}</span>
                        <span class="hop-hex">${0}</span>
                      </div>
                    `),()=>this._addRepeater(e),uh("Add {adv_name}",{adv_name:e.adv_name}),e.adv_name||e.pubkey_prefix,e.pubkey_prefix.substring(0,2).toUpperCase())),uh("Path"),0===this.pathHops.length?bp(Od||(Od=Sc`<div class="picker-empty">${0}</div>`),uh("Click a repeater to add (or leave empty for direct-neighbor)")):this.pathHops.map((e,t)=>bp(Td||(Td=Sc`
                      <div class="picker-item">
                        <span class="ordinal">${0}</span>
                        <span class="name">${0}</span>
                        <span class="hop-hex">${0}</span>
                        <button
                          class="picker-item-btn"
                          ?disabled=${0}
                          @click=${0}
                          title=${0}
                        >▲</button>
                        <button
                          class="picker-item-btn"
                          ?disabled=${0}
                          @click=${0}
                          title=${0}
                        >▼</button>
                        <button
                          class="picker-item-btn"
                          @click=${0}
                          title=${0}
                        >✕</button>
                      </div>
                    `),t+1,e.adv_name||e.pubkey_prefix,e.pubkey_prefix.substring(0,2).toUpperCase(),0===t,()=>this._moveRepeater(t,-1),uh("Move up"),t===this.pathHops.length-1,()=>this._moveRepeater(t,1),uh("Move down"),()=>this._removeRepeater(t),uh("Remove"))),uh("Target"),a,n)}_renderExplicitInput(){var e,t,o;const i=!!this.enteredPath&&!this._isValidExplicitHops(),r=(null===(e=this.targetContact)||void 0===e?void 0:e.adv_name)||(null===(t=this.targetContact)||void 0===t?void 0:t.pubkey_prefix)||"(no target)",s=(null===(o=this.targetContact)||void 0===o||null===(o=o.pubkey_prefix)||void 0===o?void 0:o.substring(0,2).toUpperCase())||"--";return bp(Ld||(Ld=Sc`
      <div class="info-item">
        <div class="info-label">${0}</div>
        <input
          type="text"
          class="form-input"
          placeholder=${0}
          .value=${0}
          @input=${0}
          autocomplete="off"
          spellcheck="false"
        />
        <div class="path-hint">
          Enter outbound hops only — the target and return hops are added
          automatically.  For a direct-neighbor target, leave this empty.
          Each hop is 2, 4, or 8 hex chars (1, 2, or 4 bytes); all hops
          must be the same width.  1 byte is recommended — 2-byte and
          4-byte hashes may not complete round-trip in some meshes.
        </div>
        ${0}
      </div>
      <div class="info-item">
        <div class="info-label">${0}</div>
        <div class="target-row">
          <span class="target-name">${0}</span>
          <span class="target-hex">${0}</span>
        </div>
      </div>
    `),uh("Outbound Hops (comma-separated hex)"),uh("AE  (or AE,CD for multiple hops, or empty for direct neighbor)"),this.enteredPath,this._onExplicitPathInput,i?bp(Nd||(Nd=Sc`<div class="path-error">
              ${0}
            </div>`),uh("Invalid format — hex pairs separated by commas, all the same width (2, 4, or 8 chars).")):bp(qd||(qd=Sc``)),uh("Target"),r,s)}_addRepeater(e){this.pathHops=[...this.pathHops,e]}_removeRepeater(e){this.pathHops=this.pathHops.filter((t,o)=>o!==e)}_moveRepeater(e,t){const o=e+t;if(o<0||o>=this.pathHops.length)return;const i=[...this.pathHops];[i[e],i[o]]=[i[o],i[e]],this.pathHops=i}_isValidExplicitHops(){const e=this.enteredPath.trim();if(!e)return!0;const t=e.split(",").map(e=>e.trim());if(0===t.length)return!1;const o=t[0].length;if(![2,4,8].includes(o))return!1;const i=/^[0-9a-fA-F]+$/;return t.every(e=>e.length===o&&i.test(e))}_canRunTrace(){return"discovery"===this.pathMode||("select"===this.pathMode?!!this.targetContact:"explicit"===this.pathMode&&!!this.targetContact&&this._isValidExplicitHops())}_buildPathString(){if("select"===this.pathMode){if(!this.targetContact)return"";const e=this.targetContact.pubkey_prefix.substring(0,2).toUpperCase(),t=this.pathHops.map(e=>e.pubkey_prefix.substring(0,2).toUpperCase());return 0===t.length?e:[...t,e,...[...t].reverse()].join(",")}if("explicit"===this.pathMode){if(!this.targetContact)return"";const e=this.targetContact.pubkey_prefix.substring(0,2).toUpperCase(),t=this.enteredPath.trim();if(!t)return e;const o=t.split(",").map(e=>e.trim().toUpperCase());return[...o,e,...[...o].reverse()].join(",")}return""}_renderResult(e){const t=(e.path||[]).filter(e=>e.hash);return bp(jd||(jd=Sc`
      <div class="info-item">
        <div class="info-label">${0}</div>
        <div class="info-value rtt-value">${0}</div>
      </div>

      <div class="info-item">
        <div class="info-label">${0}</div>
        <div class="info-value">
          ${0}
        </div>
      </div>

      ${0}

      ${0}
    `),uh("Round Trip"),e.response_time,uh("Hops"),0===e.hops?uh("Direct (0 hops)"):`${e.hops}`,null!==e.final_snr&&void 0!==e.final_snr?bp(Hd||(Hd=Sc`
            <div class="info-item">
              <div class="info-label">${0}</div>
              <div class="info-value">${0} dB</div>
            </div>
          `),uh("Final SNR (at this device)"),e.final_snr.toFixed(2)):bp(Ud||(Ud=Sc``)),t.length>0?bp(Vd||(Vd=Sc`
            <div class="info-item">
              <div class="info-label">${0}</div>
              <div class="hop-list">
                ${0}
              </div>
            </div>
          `),uh("Return Path (per-hop SNR)"),t.map((e,t)=>{var o;return bp(Kd||(Kd=Sc`
                    <div class="hop-row">
                      <span>${0}</span>
                      <span>${0} dB</span>
                    </div>
                  `),uh("Hop {number}: {hash}",{number:t+1,hash:null!==(o=e.hash)&&void 0!==o?o:""}),e.snr.toFixed(2))})):bp(Wd||(Wd=Sc``)))}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("trace-dialog-closed",{bubbles:!0,composed:!0}))}};Hv.styles=[Wp,Rh(Xd||(Xd=Sc`
    :host { display: contents; }

    .dialog-backdrop {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.2s;
    }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

    .dialog {
      background: var(--card-background-color, #fff);
      border-radius: 8px;
      max-width: 700px;
      width: 90%;
      max-height: 85vh;
      overflow-y: auto;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
      animation: slideUp 0.3s;
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }

    .dialog-title { font-size: 18px; font-weight: 600; color: var(--primary-text-color); }

    .dialog-close {
      background: none; border: none; font-size: 20px; cursor: pointer;
      color: var(--secondary-text-color); padding: 0;
      width: 32px; height: 32px;
      display: flex; align-items: center; justify-content: center;
    }

    .dialog-close:hover { color: var(--primary-text-color); }

    .dialog-content { padding: 16px; }

    .info-item {
      padding: 8px;
      background: var(--primary-background-color, #fafafa);
      border-radius: 6px;
      margin-bottom: 8px;
    }

    .info-label {
      font-size: 11px; color: var(--secondary-text-color, #727272);
      text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;
    }

    .info-value {
      font-size: 13px; color: var(--primary-text-color);
      margin-top: 4px; font-family: monospace;
    }

    .rtt-value {
      font-size: 24px; font-weight: 600;
      font-family: inherit;
      color: var(--primary-color, #03a9f4);
    }

    .hop-list {
      margin-top: 4px;
      font-family: monospace;
      font-size: 12px;
    }

    .hop-row {
      display: flex;
      justify-content: space-between;
      padding: 2px 0;
    }

    .hop-row + .hop-row {
      border-top: 1px dashed var(--divider-color, #e0e0e0);
    }

    .error-box {
      padding: 12px;
      background: rgba(219, 68, 55, 0.08);
      border: 1px solid rgba(219, 68, 55, 0.2);
      border-radius: 6px;
      color: var(--error-color, #db4437);
      font-size: 13px;
    }

    /* Input phase */

    select, input[type="text"] {
      width: 100%;
      padding: 8px 10px;
      margin-top: 4px;
      font-size: 14px;
      color: var(--primary-text-color);
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      box-sizing: border-box;
      font-family: inherit;
    }

    select:focus, input[type="text"]:focus {
      outline: none;
      border-color: var(--primary-color, #03a9f4);
    }

    input[type="text"] {
      font-family: monospace;
    }

    .path-hint {
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      font-style: italic;
      padding: 8px;
    }

    .path-error {
      margin-top: 6px;
      font-size: 12px;
      color: var(--error-color, #db4437);
    }

    .repeater-picker {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .picker-column {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .picker-column-label {
      font-size: 11px;
      color: var(--secondary-text-color, #727272);
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.5px;
      margin-bottom: 2px;
    }

    .picker-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-height: 60px;
      max-height: 200px;
      overflow-y: auto;
      padding: 4px;
      background: var(--card-background-color, #fff);
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
    }

    /* Picker-search uses .form-input for sizing / padding
       / border / border-radius (panel-wide form convention).  Local
       .picker-search only supplies picker-column-specific spacing. */
    .picker-search {
      margin-bottom: 4px;
    }

    .picker-item {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 6px 8px;
      background: var(--primary-background-color, #fafafa);
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
      user-select: none;
    }

    .picker-item:hover {
      background: var(--secondary-background-color, #eef);
    }

    .picker-item[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .picker-item .name {
      flex: 1;
      font-family: inherit;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .picker-item .hop-hex {
      font-family: monospace;
      font-size: 11px;
      color: var(--secondary-text-color, #727272);
    }

    .picker-item .ordinal {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 20px;
      height: 20px;
      border-radius: 10px;
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-size: 11px;
      font-weight: 600;
      font-family: inherit;
    }

    .picker-item-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--secondary-text-color);
      padding: 2px 4px;
      font-size: 14px;
      line-height: 1;
    }

    .picker-item-btn:hover:not(:disabled) {
      color: var(--primary-text-color);
    }

    .picker-item-btn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .picker-empty {
      padding: 12px 8px;
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
      font-style: italic;
      text-align: center;
    }

    .dialog-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding-top: 8px;
    }

    .btn-primary {
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 500;
      color: var(--text-primary-color, #fff);
      background: var(--primary-color, #03a9f4);
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .btn-primary:hover:not(:disabled) {
      filter: brightness(0.95);
    }

    .btn-primary:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .resolved-path {
      margin-top: 4px;
      font-family: monospace;
      font-size: 12px;
      color: var(--primary-text-color);
      background: var(--primary-background-color, #fafafa);
      padding: 6px 8px;
      border-radius: 4px;
      word-break: break-all;
    }

    /* Target row for both Select and Enter-path modes. */
    .target-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      background: rgba(3, 169, 244, 0.08);
      border: 1px solid rgba(3, 169, 244, 0.25);
      border-radius: 6px;
      font-size: 13px;
      margin-top: 4px;
    }

    .target-row .target-name {
      flex: 1;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .target-row .target-hex {
      font-family: monospace;
      font-size: 12px;
      color: var(--secondary-text-color, #727272);
    }
  `)),Xp],Fc([Up({type:Boolean})],Hv.prototype,"open",void 0),Fc([Up({type:String})],Hv.prototype,"contactName",void 0),Fc([Up({type:Object})],Hv.prototype,"result",void 0),Fc([Up({type:String})],Hv.prototype,"error",void 0),Fc([Up({type:Array})],Hv.prototype,"availableRepeaters",void 0),Fc([Up({type:Object})],Hv.prototype,"targetContact",void 0),Fc([Vp()],Hv.prototype,"pathMode",void 0),Fc([Vp()],Hv.prototype,"pathHops",void 0),Fc([Vp()],Hv.prototype,"enteredPath",void 0),Fc([Vp()],Hv.prototype,"_repeaterFilter",void 0),Fc([Vp()],Hv.prototype,"_running",void 0),Hv=Fc([qp("chattx-trace-dialog")],Hv);let Uv=class extends Lp{constructor(){super(),this.open=!1,this.contacts=[],this._typeFilter="all",this._search="",this._onTypeChange=e=>{this._typeFilter=e.target.value},this._onSearchInput=e=>{this._search=e.target.value},this._close=()=>{this.dispatchEvent(new CustomEvent("target-picker-closed",{bubbles:!0,composed:!0}))},fm(this,{isOpen:()=>this.open,onEscape:()=>this._close()})}willUpdate(e){e.has("open")&&this.open&&!e.get("open")&&(this._typeFilter="all",this._search="")}render(){if(!this.open)return bp(Gd||(Gd=Sc``));const e=this._search.trim().toLowerCase(),t=this.contacts.filter(e=>{switch(this._typeFilter){case"all":default:return!0;case"client":return 1===e.type;case"repeater":return 2===e.type;case"room_server":return 3===e.type;case"sensor":return 4===e.type}}).filter(t=>{if(!e)return!0;const o=(t.adv_name||"").toLowerCase(),i=(t.pubkey_prefix||"").toLowerCase();return o.includes(e)||i.startsWith(e)}).sort((e,t)=>(e.adv_name||"").localeCompare(t.adv_name||""));return bp(Yd||(Yd=Sc`
      <div class="dialog-backdrop" @click=${0}>
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          aria-label=${0}
          @click=${0}>
          <div class="dialog-header">
            <div class="dialog-title">${0}</div>
            <button class="dialog-close" aria-label=${0} @click=${0} title=${0}>✕</button>
          </div>
          <div class="dialog-content">
            <div class="filter-row">
              <div class="form-group" style="margin: 0;">
                <label class="form-label">${0}</label>
                <select
                  class="form-select"
                  .value=${0}
                  @change=${0}
                >
                  <option value="all">${0}</option>
                  <option value="client">${0}</option>
                  <option value="repeater">${0}</option>
                  <option value="room_server">${0}</option>
                  <option value="sensor">${0}</option>
                </select>
              </div>
              <div class="form-group" style="margin: 0;">
                <label class="form-label">${0}</label>
                <input
                  class="form-input"
                  type="text"
                  placeholder=${0}
                  .value=${0}
                  @input=${0}
                  autocomplete="off"
                  spellcheck="false"
                />
              </div>
            </div>
            <div class="results-list">
              ${0}
            </div>
          </div>
        </div>
      </div>
    `),this._close,uh("Choose trace target"),e=>e.stopPropagation(),uh("Choose Trace Target"),uh("Close"),this._close,uh("Close"),uh("Type"),this._typeFilter,this._onTypeChange,uh("All"),uh("Companion / Client"),uh("Repeater"),uh("Room Server"),uh("Sensor"),uh("Search"),uh("Name or pubkey prefix…"),this._search,this._onSearchInput,0===t.length?bp(Qd||(Qd=Sc`<div class="empty">${0}</div>`),uh("No matching contacts")):t.map(e=>bp(Zd||(Zd=Sc`
                    <div
                      class="result-row"
                      @click=${0}
                      title=${0}
                    >
                      <span class="result-icon">${0}</span>
                      <span class="result-name">${0}</span>
                      <span class="result-hex">${0}</span>
                    </div>
                  `),()=>this._select(e),uh("Trace to {pubkey_prefix}",{pubkey_prefix:e.adv_name||e.pubkey_prefix}),this._iconFor(e.type),e.adv_name||e.pubkey_prefix,(e.pubkey_prefix||"").substring(0,2).toUpperCase())))}_iconFor(e){switch(e){case 2:return bp(Jd||(Jd=Sc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V10h4.27c.15-.86.45-1.66.87-2.36l-1.82-1.06a.5.5 0 01-.18-.68l.5-.87a.5.5 0 01.68-.18l1.81 1.05C19.66 4.66 20.78 4 22 4v2c-.8 0-1.54.32-2.08.84l1.5 2.6a.5.5 0 01-.18.68l-.87.5a.5.5 0 01-.68-.18L18.2 7.92c-.14.65-.2 1.33-.2 2.08 0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6z"/></svg>`));case 3:return bp(ec||(ec=Sc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4 6h16v4H4V6zm0 8h16v4H4v-4zm2-6.5A.5.5 0 116 7a.5.5 0 010 .5zm0 8A.5.5 0 116 15a.5.5 0 010 .5z"/></svg>`));case 4:return bp(tc||(tc=Sc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a4 4 0 00-4 4v7.55A5.5 5.5 0 1015.5 20a5.47 5.47 0 00.5-2.45V6a4 4 0 00-4-4zm0 2a2 2 0 012 2v8.1a3.5 3.5 0 11-4 0V6a2 2 0 012-2z"/></svg>`));default:return bp(oc||(oc=Sc`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`))}}_select(e){this.dispatchEvent(new CustomEvent("target-selected",{detail:e,bubbles:!0,composed:!0}))}};Uv.styles=[Wp,Rh(ic||(ic=Sc`
      :host { display: contents; }

      .dialog-backdrop {
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.2s;
      }

      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

      .dialog {
        background: var(--card-background-color, #fff);
        border-radius: 8px;
        max-width: 560px;
        width: 90%;
        max-height: 85vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
        animation: slideUp 0.3s;
      }

      @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      .dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }

      .dialog-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .dialog-close {
        background: none; border: none; font-size: 20px; cursor: pointer;
        color: var(--secondary-text-color); padding: 0;
        width: 32px; height: 32px;
        display: flex; align-items: center; justify-content: center;
      }

      .dialog-close:hover { color: var(--primary-text-color); }

      .dialog-content {
        padding: 16px;
        overflow-y: auto;
      }

      .filter-row {
        display: grid;
        grid-template-columns: minmax(140px, 200px) 1fr;
        gap: 8px;
        margin-bottom: 12px;
      }

      @media (max-width: 520px) {
        .filter-row { grid-template-columns: 1fr; }
      }

      .results-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        max-height: 50vh;
        overflow-y: auto;
        padding: 4px;
        background: var(--primary-background-color, #fafafa);
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 6px;
      }

      .result-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        background: var(--card-background-color, #fff);
        border-radius: 6px;
        cursor: pointer;
        user-select: none;
        font-size: 14px;
        transition: background 0.15s;
      }

      .result-row:hover {
        background: var(--secondary-background-color, #eef);
      }

      .result-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        color: var(--primary-color, #03a9f4);
        flex-shrink: 0;
      }

      .result-name {
        flex: 1;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .result-hex {
        font-family: monospace;
        font-size: 12px;
        color: var(--secondary-text-color, #727272);
        flex-shrink: 0;
      }

      .empty {
        padding: 24px 12px;
        text-align: center;
        color: var(--secondary-text-color, #727272);
        font-style: italic;
        font-size: 13px;
      }
    `)),Xp],Fc([Up({type:Boolean})],Uv.prototype,"open",void 0),Fc([Up({type:Array})],Uv.prototype,"contacts",void 0),Fc([Vp()],Uv.prototype,"_typeFilter",void 0),Fc([Vp()],Uv.prototype,"_search",void 0),Uv=Fc([qp("chattx-target-picker")],Uv);let Vv=class extends Lp{constructor(){super(),this.narrow=!1,this._updateAvailable=!1,this._onReconnect=()=>{this._checkForUpdate(),this._refreshAfterAbsence()},this._onVisibilityChange=()=>{"visible"===document.visibilityState&&this._refreshAfterAbsence()},this._config=null,this._activeTab="chat",this._devices=[],this._contacts=[],this._conversationActivity={},this._conversationPreviews={},this._releaseKeyboardViewport=null,this._channels=[],this._selectedEntryId=null,this._loading=!0,this._loadingStarted=!1,this._error=null,this._unsubscribeList=[],this._unread=new Su,this._unsubscribeTabBadge=null,this._pendingChatTarget=null,this._activeChatEntityId=null,this._deviceDropdownOpen=!1,this._onDocClickForDropdown=e=>{var t;const o=e.composedPath?e.composedPath():[],i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".device-info-wrap");i&&o.includes(i)||this._closeDeviceDropdown()},this._onDocKeyForDropdown=e=>{"Escape"===e.key&&this._closeDeviceDropdown()},this._traceDialogOpen=!1,this._traceDialogContactName="",this._traceDialogResult=null,this._traceDialogError="",this._traceDialogPubkeyPrefix="",this._traceDialogEntryId=void 0,this._traceDialogTargetContact=null,this._targetPickerOpen=!1,this._pendingTraceEntryId=void 0,this._onSettingsChanged=()=>{gh().then(()=>this.requestUpdate())},this._onTraceRequested=async e=>{if(!this.hass)return;const{pathMode:t,path:o}=e.detail;try{const e=await async function(e,t,o,i="discovery",r){const s={type:"meshcore_chattx/trace",pubkey_prefix:t};return o&&(s.entry_id=o),"select"!==i&&"explicit"!==i||!r||(s.path=r),e.callWS(s)}(this.hass,this._traceDialogPubkeyPrefix,this._traceDialogEntryId,t,o);this._traceDialogResult=e}catch(e){this._traceDialogError=(null==e?void 0:e.message)||(null==e?void 0:e.code)||uh("Unknown error")}},this._onCompanionTraceRequested=e=>{var t,o,i;this._pendingTraceEntryId=null!==(t=null!==(o=null===(i=e.detail)||void 0===i?void 0:i.entryId)&&void 0!==o?o:this._selectedEntryId)&&void 0!==t?t:void 0,this._targetPickerOpen=!0},this._onTargetPicked=e=>{const t=e.detail;this._targetPickerOpen=!1,t&&(this._traceDialogPubkeyPrefix=t.pubkey_prefix,this._traceDialogEntryId=this._pendingTraceEntryId,this._traceDialogContactName=t.adv_name||t.pubkey_prefix,this._traceDialogTargetContact=t,this._traceDialogResult=null,this._traceDialogError="",this._traceDialogOpen=!0)},this._unread.onMarkReadRequested(e=>{this._handleMarkReadRequested(e)})}connectedCallback(){var e,t,o;super.connectedCallback(),this._loadingStarted&&this._refreshAfterAbsence(),this._loadData(),this._setupSubscriptions(),document.addEventListener("visibilitychange",this._onVisibilityChange),null!==(e=this._unsubscribeTabBadge)&&void 0!==e||(this._unsubscribeTabBadge=this._unread.subscribe(()=>this.requestUpdate())),this._releaseKeyboardViewport=function(e){const t=window.visualViewport;if(!t)return()=>{};let o=t.width,i=t.height,r=!1;const s=()=>{if(r){r=!1;for(const t of["position","top","left","width","height"])e.style.removeProperty(t);window.scrollTo(0,0)}},a=()=>{t.scale>1.01?s():(Math.abs(t.width-o)>1&&(o=t.width,i=t.height),i=Math.max(i,t.height),i-t.height<120?s():(r=!0,e.style.position="fixed",e.style.top=`${t.offsetTop}px`,e.style.left="0",e.style.width="100%",e.style.height=`${t.height}px`))};return t.addEventListener("resize",a),t.addEventListener("scroll",a),a(),()=>{t.removeEventListener("resize",a),t.removeEventListener("scroll",a),s()}}(this),null===(t=this.hass)||void 0===t||null===(t=t.connection)||void 0===t||null===(o=t.addEventListener)||void 0===o||o.call(t,"ready",this._onReconnect),this._checkForUpdate(),window.addEventListener(Pc,this._onSettingsChanged)}async _checkForUpdate(){if(!this.hass)return;let e=fh(this.panel);try{var t;const o=await this.hass.callWS({type:"get_panels"});e=null!==(t=fh(null==o?void 0:o["meshcore-chattx"]))&&void 0!==t?t:e}catch(e){}this._updateAvailable=function(e,t){const o=vh(e),i=vh(t);return null!==o&&null!==i&&o!==i}(import.meta.url,e)}_renderUpdateBanner(){return this._updateAvailable?bp(rc||(rc=Sc`<div class="update-banner" role="status">
      <span>${0}</span>
      <button @click=${0}>${0}</button>
    </div>`),uh("A new version of MeshCore Chattx is installed. Reload the page to use it."),()=>window.location.reload(),uh("Reload page")):""}disconnectedCallback(){var e,t,o,i;super.disconnectedCallback(),this._teardownSubscriptions(),window.removeEventListener(Pc,this._onSettingsChanged),document.removeEventListener("visibilitychange",this._onVisibilityChange),null===(e=this._unsubscribeTabBadge)||void 0===e||e.call(this),this._unsubscribeTabBadge=null,this._closeDeviceDropdown(),null===(t=this.hass)||void 0===t||null===(t=t.connection)||void 0===t||null===(o=t.removeEventListener)||void 0===o||o.call(t,"ready",this._onReconnect),null===(i=this._releaseKeyboardViewport)||void 0===i||i.call(this),this._releaseKeyboardViewport=null}_toggleDeviceDropdown(){this._deviceDropdownOpen?this._closeDeviceDropdown():this._openDeviceDropdown()}_openDeviceDropdown(){this._deviceDropdownOpen||(this._deviceDropdownOpen=!0,setTimeout(()=>{document.addEventListener("click",this._onDocClickForDropdown,!0),document.addEventListener("keydown",this._onDocKeyForDropdown,!0)},0))}_closeDeviceDropdown(){this._deviceDropdownOpen&&(this._deviceDropdownOpen=!1,document.removeEventListener("click",this._onDocClickForDropdown,!0),document.removeEventListener("keydown",this._onDocKeyForDropdown,!0))}_selectDevice(e){e!==this._selectedEntryId&&(this._selectedEntryId=e,this._pendingChatTarget=null,Promise.all([this._loadDeviceData(),this._loadUnreadCounts()])),this._closeDeviceDropdown()}_setupSubscriptions(){var e;this._teardownSubscriptions(),null!==(e=this.hass)&&void 0!==e&&null!==(e=e.connection)&&void 0!==e&&e.subscribeEvents&&(this.hass.connection.subscribeEvents(e=>{e.data.entry_id===this._selectedEntryId&&this._loadDeviceData()},"meshcore_channels_updated").then(e=>{this._unsubscribeList.push(e)}),this.hass.connection.subscribeEvents(e=>{e.data.entry_id===this._selectedEntryId&&this._loadDeviceData()},"meshcore_channel_removed").then(e=>{this._unsubscribeList.push(e)}),this.hass.connection.subscribeEvents(e=>{var t,o,i,r,s;const a=null!==(t=e.data)&&void 0!==t?t:{},n=a.entity_id;if(!n)return;if("direct"===a.message_type&&!a.outgoing&&gu(a.pubkey_prefix))return;if(!a.outgoing&&function(e,t){if(0===Ch.length)return!1;const o=(null!=t?t:"").toLowerCase();return!!(o.length>=6&&Ch.some(e=>{const t=Math.min(e.key.length,o.length);return e.key.slice(0,t)===o.slice(0,t)}))||!!e&&Bh.has(e)}(String(null!==(o=null!==(i=a.sender_name)&&void 0!==i?i:a.sender)&&void 0!==o?o:""),a.pubkey_prefix))return;this._conversationActivity=tu(this._conversationActivity,{[n]:(new Date).toISOString()});const l=String(null!==(r=null!==(s=a.message)&&void 0!==s?s:a.text)&&void 0!==r?r:"");var d;l&&(this._conversationPreviews={...this._conversationPreviews,[n]:{sender:String(null!==(d=a.sender_name)&&void 0!==d?d:""),text:l.slice(0,50)}})},"meshcore_message").then(e=>{this._unsubscribeList.push(e)}),this.hass.connection.subscribeEvents(e=>{var t;this._activeChatEntityId&&(null===(t=e.data)||void 0===t?void 0:t.entity_id)===this._activeChatEntityId||this._loadUnreadCounts()},"meshcore_unread_updated").then(e=>{this._unsubscribeList.push(e)}),this.hass.connection.subscribeEvents(e=>{var t;wh(null===(t=e.data)||void 0===t?void 0:t.text),this.requestUpdate()},"meshcore_chattx_heard_reply_updated").then(e=>{this._unsubscribeList.push(e)}).catch(()=>{}),this.hass.connection.subscribeEvents(e=>{var t;Sh(null===(t=e.data)||void 0===t?void 0:t.entries),this.requestUpdate()},"meshcore_chattx_blocklist_updated").then(e=>{this._unsubscribeList.push(e)}).catch(()=>{}))}_teardownSubscriptions(){this._unsubscribeList.length>0&&(this._unsubscribeList.forEach(e=>{try{e()}catch(e){}}),this._unsubscribeList=[])}updated(e){e.has("hass")&&this.hass&&!this._config&&!this._loadingStarted&&this._loadData()}get _selectedDevice(){return this._devices.find(e=>e.entry_id===this._selectedEntryId)}willUpdate(){var e,t;dh(null===(e=this.hass)||void 0===e?void 0:e.language),Gc(null===(t=this.hass)||void 0===t||null===(t=t.config)||void 0===t||null===(t=t.unit_system)||void 0===t?void 0:t.length)}render(){var e,t,o;if(this._loading)return bp(sc||(sc=Sc`
        <div class="panel">
          <div class="center-message">
            <div class="spinner"></div>
          </div>
        </div>
      `));if(this._error&&!this._config){const e=this._error===uh("No MeshCore devices found");return bp(ac||(ac=Sc`
        <div class="panel">
          <div class="center-message">
            <div>
              <p>${0}</p>
              <p style="font-size: 12px; margin-top: 8px;">
                ${0}
              </p>
            </div>
          </div>
        </div>
      `),uh(this._error),e?bp(nc||(nc=Sc`${0} <a href="/config/repairs">${0}</a>
                         ${0}
                         <a href="/config/integrations">${0}</a>.`),uh("Open"),uh("Settings → System → Repairs"),uh("for setup guidance, or add the MeshCore integration via"),uh("Settings → Devices & Services")):uh("Check that the MeshCore integration is loaded and connected."))}const i=this._selectedDevice;return bp(lc||(lc=Sc`
      <div class="panel">
        ${0}
        <div class="panel-header">
          <div class="header-left">
            ${0}
            <div class="panel-title">
              <span class="title-full">${0}</span>
              <span class="title-short">${0}</span>
            </div>
          </div>
          <div class="header-right">
            ${0}
            ${0}
            ${0}
          </div>
        </div>

        ${0}

        <div class="tab-bar">
          <button
            class=${0}
            @click=${0}>
            ${0}${0}
          </button>
          <button
            class=${0}
            @click=${0}>
            ${0}
          </button>
          <button
            class=${0}
            @click=${0}>
            ${0}
          </button>
          <button
            class=${0}
            @click=${0}>
            ${0}
          </button>
        </div>

        <div class="page-container">
          ${0}
        </div>

        <chattx-trace-dialog
          ?open=${0}
          .contactName=${0}
          .result=${0}
          .error=${0}
          .availableRepeaters=${0}
          .targetContact=${0}
          @trace-requested=${0}
          @trace-dialog-closed=${0}>
        </chattx-trace-dialog>

        <chattx-target-picker
          ?open=${0}
          .contacts=${0}
          @target-selected=${0}
          @target-picker-closed=${0}>
        </chattx-target-picker>
      </div>
    `),this._renderUpdateBanner(),this.narrow||"always_hidden"===(null===(e=this.hass)||void 0===e?void 0:e.dockedSidebar)?bp(dc||(dc=Sc`<button class="menu-icon" @click=${0} aria-label=${0}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                </button>`),this._toggleMenu,uh("Toggle sidebar")):bp(cc||(cc=Sc``)),uh("MeshCore Chattx"),uh("MC Chattx"),i&&null!==this._getNodeStatus(i)?bp(hc||(hc=Sc`
                  <span class="connection-status ${0}">
                    <span class="status-dot ${0}"></span>
                    ${0}
                  </span>`),"online"===this._getNodeStatus(i)?"online":"offline","online"===this._getNodeStatus(i)?"online":"offline","online"===this._getNodeStatus(i)?uh("Connected"):uh("Disconnected")):bp(pc||(pc=Sc``)),i&&null!==this._getBatteryLevel(i)?bp(uc||(uc=Sc`
                  <span class="battery-indicator">
                    <span class="battery-icon">
                      <span class="battery-fill ${0}"
                            style="width: ${0}%"></span>
                    </span>
                    <span class="battery-pct">${0}%</span>
                  </span>`),this._getBatteryLevel(i)>50?"high":this._getBatteryLevel(i)>20?"medium":"low",this._getBatteryLevel(i),this._getBatteryLevel(i)):bp(mc||(mc=Sc``)),this._devices.length>1?bp(gc||(gc=Sc`
                  <div class="device-info-wrap">
                    <button
                      type="button"
                      class="device-switcher"
                      aria-haspopup="listbox"
                      aria-expanded=${0}
                      @click=${0}>
                      <span class="device-name">${0}</span>
                      <span class="device-prefix">(${0})</span>
                      <span class="device-switcher-caret" aria-hidden="true">▾</span>
                    </button>
                    ${0}
                  </div>
                `),this._deviceDropdownOpen?"true":"false",this._toggleDeviceDropdown,(null==i?void 0:i.name)||"",(null==i||null===(t=i.pubkey_prefix)||void 0===t?void 0:t.substring(0,6))||"",this._deviceDropdownOpen?bp(vc||(vc=Sc`
                          <ul class="device-switcher-menu" role="listbox">
                            ${0}
                          </ul>
                        `),this._devices.map(e=>{var t;return bp(fc||(fc=Sc`
                                <li
                                  role="option"
                                  aria-selected=${0}
                                  class=${0}
                                  @click=${0}>
                                  <span class="device-name">
                                    ${0}${0}
                                  </span>
                                  <span class="device-prefix">
                                    (${0})
                                  </span>
                                </li>
                              `),e.entry_id===this._selectedEntryId?"true":"false",e.entry_id===this._selectedEntryId?"active":"",()=>this._selectDevice(e.entry_id),e.name,e.connected?"":" — offline",(null===(t=e.pubkey_prefix)||void 0===t?void 0:t.substring(0,6))||"?")})):""):bp(yc||(yc=Sc`
                  <div class="device-info-wrap">
                    <span class="device-name">${0}</span>
                    <span class="device-prefix">(${0})</span>
                  </div>
                `),(null==i?void 0:i.name)||"",(null==i||null===(o=i.pubkey_prefix)||void 0===o?void 0:o.substring(0,6))||""),this._error?bp(_c||(_c=Sc`<div class="error-banner">${0}</div>`),this._error):bp(bc||(bc=Sc``)),"chat"===this._activeTab?"active":"",()=>this._activeTab="chat",uh("Chat"),this._renderChatTabBadge(),"devices"===this._activeTab?"active":"",()=>this._activeTab="devices",uh("Devices"),"nodes"===this._activeTab?"active":"",()=>this._activeTab="nodes",uh("Nodes"),"settings"===this._activeTab?"active":"",()=>this._activeTab="settings",uh("Settings"),this._renderActivePage(),this._traceDialogOpen,this._traceDialogContactName,this._traceDialogResult,this._traceDialogError,this._contacts.filter(e=>2===e.type||3===e.type||4===e.type),this._traceDialogTargetContact,this._onTraceRequested,()=>{this._traceDialogOpen=!1},this._targetPickerOpen,this._contacts,this._onTargetPicked,()=>{this._targetPickerOpen=!1})}_unreadTotal(){var e,t;const o=Object.values(this._unread.counts).reduce((e,t)=>e+(t>0?t:0),0),i=null!==(e=null===(t=this._config)||void 0===t?void 0:t.node_prefix)&&void 0!==e?e:null,r=this._channels.filter(e=>e.exclude_from_total).reduce((e,t)=>e+this._unread.badgeCount(String(t.channel_idx),i),0);return Math.max(0,o-r)}_renderChatTabBadge(){const e=this._unreadTotal();return e<=0?"":bp(xc||(xc=Sc`<span class="tab-badge" aria-label=${0}>${0}</span>`),mh("{n} unread message","{n} unread messages",e),e>99?"99+":e)}_renderActivePage(){var e;switch(this._activeTab){case"chat":return bp(wc||(wc=Sc`
          <chattx-chat-page
            .hass=${0}
            .config=${0}
            .conversations=${0}
            .activity=${0}
            .previews=${0}
            .unread=${0}
            .selectedId=${0}
            .narrow=${0}
            @active-entity-changed=${0}
            @contacts-changed=${0}
            @channels-changed=${0}></chattx-chat-page>`),this.hass,this._config,function(e,t,o){const i=iu(t);return e.map(e=>({conversation:e,time:eu(i.get(ou(e,o)))})).sort((e,t)=>t.time-e.time).map(e=>e.conversation)}([...this._channels,...this._contacts.filter(e=>e.added_to_node)],this._conversationActivity,null===(e=this._config)||void 0===e?void 0:e.node_prefix),this._conversationActivity,this._conversationPreviews,this._unread,this._pendingChatTarget,this.narrow,this._onActiveEntityChanged,()=>this._loadDeviceData(),()=>this._loadDeviceData());case"devices":return bp(kc||(kc=Sc`
          <chattx-devices-page
            .hass=${0}
            .config=${0}
            .selectedDevice=${0}
            .narrow=${0}></chattx-devices-page>`),this.hass,this._config,this._selectedDevice,this.narrow);case"nodes":return bp($c||($c=Sc`
          <chattx-nodes-page
            .hass=${0}
            .config=${0}
            .contacts=${0}
            .channels=${0}
            .narrow=${0}
            @node-action=${0}
            @contacts-changed=${0}></chattx-nodes-page>`),this.hass,this._config,this._contacts,this._channels,this.narrow,this._handleNodeAction,()=>this._loadDeviceData());case"settings":return bp(Cc||(Cc=Sc`
          <chattx-settings-page
            .hass=${0}
            .config=${0}
            .selectedDevice=${0}
            .narrow=${0}
            @companion-trace-requested=${0}
            @device-renamed=${0}></chattx-settings-page>`),this.hass,this._config,this._selectedDevice,this.narrow,this._onCompanionTraceRequested,this._onDeviceRenamed)}}_toggleMenu(){this.dispatchEvent(new Event("hass-toggle-menu",{bubbles:!0,composed:!0}))}_deviceEntitySuffix(e){return{prefix:(e.pubkey_prefix||e.pubkey||"").substring(0,6).toLowerCase(),name:(e.name||"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}}_getNodeStatus(e){if(!this.hass)return null;const{prefix:t,name:o}=this._deviceEntitySuffix(e),i=`sensor.meshcore_${t}_node_status_${o}`,r=this.hass.states[i];return r?r.state:null}_getBatteryLevel(e){if(!this.hass)return null;const{prefix:t,name:o}=this._deviceEntitySuffix(e),i=`sensor.meshcore_${t}_battery_percentage_${o}`,r=this.hass.states[i];if(!r||"unknown"===r.state||"unavailable"===r.state)return null;const s=parseFloat(r.state);return isNaN(s)?null:Math.round(s)}async _loadData(){if(this.hass&&!this._loadingStarted){this._loadingStarted=!0,this._loading=!0,this._error=null;try{var e,t;dh(this.hass.language),Gc(null===(e=this.hass.config)||void 0===e||null===(e=e.unit_system)||void 0===e?void 0:e.length),await async function(e){if(zc=e,Rc)return;let t;try{const o=await e.callWS({type:"meshcore_chattx/get_settings"});t=Kc(null==o?void 0:o.values)}catch(e){return}const o={},i=(e,i)=>{e in t||e in o||(o[e]=i)},r=Lc();if(r)for(let e=r.length-1;e>=0;e--){const t=r.key(e);if(!t||!t.startsWith("chattx-")||Ec.has(t))continue;const o=r.getItem(t);null!==o&&i(t,o),r.removeItem(t)}try{const t=await e.callWS({type:"frontend/get_user_data",key:Dc}),o=Kc(null==t?void 0:t.value);if(Object.keys(o).length){for(const[e,t]of Object.entries(o))i(e,t);await e.callWS({type:"frontend/set_user_data",key:Dc,value:null})}}catch(e){}Ic={...t,...o},Rc=!0;for(const[e,t]of Object.entries(o))jc(e,t);Nc();try{await e.connection.subscribeMessage(e=>{const t=Kc(null==e?void 0:e.values);for(const[e,o]of Object.entries(Oc))null===o?delete t[e]:t[e]=o;JSON.stringify(t)!==JSON.stringify(Ic)&&(Ic=t,Nc())},{type:"meshcore_chattx/subscribe_settings"})}catch(e){}}(this.hass),await Promise.all([gh(),kh(this.hass),Mh(this.hass)]);const o=await su(this.hass);if(this._devices=o,0===o.length)return this._error=uh("No MeshCore devices found"),void(this._loading=!1);const i=o.find(e=>e.connected);this._selectedEntryId=(i||o[0]).entry_id;const r=i||o[0];this._config={node_name:r.name,node_prefix:(null===(t=r.pubkey_prefix)||void 0===t?void 0:t.substring(0,6))||"",entry_id:r.entry_id,...Zp,...Jp},await this._loadDeviceData(),await this._loadUnreadCounts()}catch(e){const t=e instanceof Error?e.message:String(e);this._error=uh("Failed to load: {message}",{message:t}),console.error("MeshCore panel load error:",e)}finally{this._loading=!1}}}async _loadDeviceData(){if(this.hass&&this._selectedEntryId)try{const[t,o]=await Promise.all([au(this.hass,this._selectedEntryId),nu(this.hass,this._selectedEntryId)]);this._contacts=t,this._channels=o;const i=this._selectedDevice;var e;i&&this._config&&(this._config={...this._config,node_name:i.name,node_prefix:(null===(e=i.pubkey_prefix)||void 0===e?void 0:e.substring(0,6))||"",entry_id:i.entry_id})}catch(e){console.error("Failed to load device data:",e)}}_onActiveEntityChanged(e){var t;this._activeChatEntityId=(null===(t=e.detail)||void 0===t?void 0:t.entityId)||null}async _onDeviceRenamed(){if(this.hass)try{this._devices=await su(this.hass);const t=this._selectedDevice;var e;t&&this._config&&(this._config={...this._config,node_name:t.name,node_prefix:(null===(e=t.pubkey_prefix)||void 0===e?void 0:e.substring(0,6))||"",entry_id:t.entry_id})}catch(e){console.error("Failed to refresh devices after rename:",e)}}_refreshAfterAbsence(){this.hass&&!this._loading&&this._loadingStarted&&(this._loadUnreadCounts(),this._loadDeviceData())}async _loadUnreadCounts(){if(this.hass)try{const e=await async function(e,t){try{const o={type:"meshcore_chattx/get_unread_counts"};t&&(o.entry_id=t);const i=await e.callWS(o);return{unread:i.unread||{},last_read:i.last_read||{}}}catch(e){return{unread:{},last_read:{}}}}(this.hass,this._selectedEntryId||void 0);this._unread.ingestBackendData(e,this._activeChatEntityId);const t=await async function(e){try{var t;const o=await e.callWS({type:"meshcore_chattx/get_conversation_activity"});return{activity:o.activity,previews:null!==(t=o.previews)&&void 0!==t?t:{}}}catch(e){return{activity:{},previews:{}}}}(this.hass);this._conversationActivity=tu(this._conversationActivity,t.activity),this._conversationPreviews={...this._conversationPreviews,...t.previews}}catch(e){}}_handleMarkReadRequested(e){e&&this.hass&&(async function(e,t,o){try{const i={type:"meshcore_chattx/mark_conversation_read",entity_id:t};return o&&(i.entry_id=o),await e.callWS(i)}catch(e){return{success:!1}}}(this.hass,e,this._selectedEntryId||void 0).catch(()=>{}),this._unread.clearEntity(e),this._loadUnreadCounts())}async _handleNodeAction(e){const{action:t,node:o}=e.detail;if(!this.hass||!o)return;const i=o.public_key||"",r=o.pubkey_prefix||"",s=this._selectedEntryId||void 0;switch(t){case"message":r&&(this._pendingChatTarget=r,this._activeTab="chat");break;case"remove-contact":if(i)try{await ku(this.hass,i,s),await this._loadDeviceData(),await this._refreshNodesPageAfterMutation(i)}finally{this._clearNodesPagePending()}break;case"add-contact":if(i)try{await wu(this.hass,i,o.adv_name||void 0,s),await this._loadDeviceData(),await this._refreshNodesPageAfterMutation(i)}finally{this._clearNodesPagePending()}break;case"trace":r&&(this._traceDialogPubkeyPrefix=r,this._traceDialogEntryId=s,this._traceDialogContactName=o.adv_name||r,this._traceDialogTargetContact="adv_name"in o?o:null,this._traceDialogResult=null,this._traceDialogError="",this._traceDialogOpen=!0);break;case"delete":case"remove":i&&(await ku(this.hass,i,s),await this._loadDeviceData());break;default:console.warn("Unhandled node action:",t)}}async _refreshNodesPageAfterMutation(e){var t;const o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("chattx-nodes-page");if(o&&"function"==typeof o.refreshAfterMutation)try{await o.refreshAfterMutation(e)}catch(e){console.error("Failed to refresh nodes-page after mutation:",e)}}_clearNodesPagePending(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("chattx-nodes-page");t&&"function"==typeof t.clearPendingAction&&t.clearPendingAction()}};Vv.styles=[Wp,Rh(Bc||(Bc=Sc`
      :host {
        display: block;
        width: 100%;
        height: 100vh;
      }

      .panel {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: var(--primary-background-color, #fafafa);
      }

      .update-banner {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 16px;
        background: var(--warning-color, #ff9800);
        color: #000;
        font-size: 14px;
        flex-shrink: 0;
      }

      .update-banner span { flex: 1; }

      .update-banner button {
        padding: 6px 12px;
        border: none;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        font: inherit;
        cursor: pointer;
      }

      .panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        background: var(--card-background-color, #fff);
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        flex-shrink: 0;
        gap: 12px;
      }

      .panel-title {
        font-size: 18px;
        font-weight: 500;
        color: var(--primary-text-color);
        white-space: nowrap;
      }

      .title-short { display: none; }

      :host([narrow]) .title-full { display: none; }
      :host([narrow]) .title-short { display: inline; }

      @media (max-width: 870px) {
        .title-full { display: none; }
        .title-short { display: inline; }
      }

      .device-info {
        font-size: 13px;
        color: var(--secondary-text-color);
      }

      /* The multi-entry device switcher is a custom dropdown (button +
         listbox) instead of a native <select>, so each option can
         render name + pubkey-prefix as separate visual lines and so the
         collapsed display does not duplicate the prefix. The
         single-entry case shares the same wrap class and same
         name+prefix sibling layout. node_name and identity keys are
         independent fields by firmware design; showing both makes the
         distinction visible to the user. */
      .device-info-wrap {
        position: relative; /* anchor for the absolutely-positioned menu */
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 6px;
        min-width: 0; /* allow children to shrink in narrow header */
      }

      .device-switcher {
        position: relative; /* anchor for absolute caret in column mode */
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 8px 12px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font: inherit;
        font-size: 13px;
        text-align: left;
        box-sizing: border-box;
        min-height: 39px;
        line-height: normal;
        cursor: pointer;
        max-width: 250px;
      }

      .device-switcher:hover {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
      }

      .device-switcher-caret {
        margin-left: 4px;
        opacity: 0.6;
        font-size: 11px;
      }

      .device-prefix {
        font-size: 0.85em;
        opacity: 0.75;
        white-space: nowrap;
      }

      .device-switcher-menu {
        position: absolute;
        top: calc(100% + 4px);
        right: 0;
        z-index: 10;
        margin: 0;
        padding: 4px 0;
        list-style: none;
        width: max-content; /* size to widest item, not parent button */
        min-width: 140px; /* small floor so the menu never gets skinny */
        max-width: 280px;
        background: var(--card-background-color, #fff);
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .device-switcher-menu li {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 12px;
        cursor: pointer;
        gap: 0;
      }

      .device-switcher-menu li:hover {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
      }

      .device-switcher-menu li.active {
        background: rgba(3, 169, 244, 0.1);
      }

      .device-switcher-menu li .device-name {
        font-size: 13px;
        line-height: 1.2;
      }

      .device-switcher-menu li .device-prefix {
        line-height: 1.1;
      }

      /* Mobile / narrow header: stack name and prefix vertically inside
         the button (multi-entry) and inside the wrap (single-entry).
         The caret is pulled out of the flex column flow and pinned to
         the right edge of the button so it doesn't end up as a third
         row below the prefix. Extra right-padding leaves room for it.
         Two gates fire this: the panel's own [narrow] attribute (set by
         HA's responsive sidebar via the reflected 'narrow' property)
         and a viewport media query as a fallback for desktop browsers
         in narrow viewports. The :host([narrow]) and @media blocks are
         duplicated rather than comma-combined because CSS does not
         allow mixing a selector with an at-rule in a single rule list. */
      :host([narrow]) .device-info-wrap,
      :host([narrow]) .device-switcher {
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        gap: 0;
      }

      :host([narrow]) .device-switcher {
        padding-right: 28px; /* room for the absolutely-positioned caret */
      }

      :host([narrow]) .device-switcher-caret {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 0;
      }

      :host([narrow]) .device-prefix {
        line-height: 1.1;
      }

      @media (max-width: 480px) {
        .device-info-wrap,
        .device-switcher {
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
          gap: 0;
        }
        .device-switcher {
          padding-right: 28px;
        }
        .device-switcher-caret {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          margin-left: 0;
        }
        .device-prefix {
          line-height: 1.1;
        }
      }

      .menu-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border: none;
        background: none;
        cursor: pointer;
        color: var(--primary-text-color);
        border-radius: 50%;
        padding: 0;
        flex-shrink: 0;
      }

      .menu-icon:hover {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.1));
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 1;
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;
      }

      .connection-status {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
        border: 1px solid;
      }

      .connection-status.online {
        color: #4caf50;
        border-color: rgba(76, 175, 80, 0.4);
        background: rgba(76, 175, 80, 0.08);
      }

      .connection-status.offline {
        color: var(--error-color, #db4437);
        border-color: rgba(219, 68, 55, 0.4);
        background: rgba(219, 68, 55, 0.08);
      }

      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .status-dot.online {
        background: #4caf50;
      }

      .status-dot.offline {
        background: var(--error-color, #db4437);
      }

      .battery-indicator {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
      }

      .battery-icon {
        position: relative;
        width: 18px;
        height: 10px;
        border: 1.5px solid var(--secondary-text-color, #888);
        border-radius: 2px;
        display: flex;
        align-items: center;
        padding: 1px;
      }

      .battery-icon::after {
        content: '';
        position: absolute;
        right: -4px;
        top: 50%;
        transform: translateY(-50%);
        width: 2px;
        height: 5px;
        background: var(--secondary-text-color, #888);
        border-radius: 0 1px 1px 0;
      }

      .battery-fill {
        height: 100%;
        border-radius: 1px;
        transition: width 0.3s ease;
      }

      .battery-fill.high {
        background: #4caf50;
      }

      .battery-fill.medium {
        background: #ff9800;
      }

      .battery-fill.low {
        background: var(--error-color, #db4437);
      }

      .battery-pct {
        min-width: 28px;
        text-align: right;
      }

      /* Mobile: compact header indicators */
      @media (max-width: 870px) {
        .connection-status {
          padding: 0;
          border: none;
          background: none !important;
          gap: 0;
          font-size: 0;
        }

        .connection-status .status-dot {
          width: 8px;
          height: 8px;
        }

        .battery-pct {
          display: none;
        }

        .battery-indicator {
          gap: 0;
        }

        .battery-icon {
          width: 13.5px;
          height: 7.5px;
          border-width: 1.25px;
        }

        .battery-icon::after {
          right: -3px;
          width: 1.5px;
          height: 4px;
        }
      }

      .tab-bar {
        display: flex;
        background: var(--card-background-color, #fff);
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        flex-shrink: 0;
      }

      .tab-bar button {
        flex: 1;
        padding: 12px 16px;
        border: none;
        background: transparent;
        color: var(--secondary-text-color, #727272);
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        border-bottom: 3px solid transparent;
        min-height: 48px;
      }

      .tab-bar button:hover {
        color: var(--primary-text-color);
        background: rgba(0, 0, 0, 0.02);
      }

      .tab-bar button.active {
        color: var(--primary-color, #03a9f4);
        border-bottom-color: var(--primary-color, #03a9f4);
      }

      .page-container {
        flex: 1;
        overflow: hidden;
        display: flex;
      }

      .page-container > * {
        flex: 1;
        overflow: hidden;
      }

      .error-banner {
        padding: 12px 16px;
        background: rgba(219, 68, 55, 0.08);
        color: var(--error-color, #db4437);
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        font-size: 13px;
      }

      .center-message {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: var(--secondary-text-color);
        padding: 24px;
      }

      .spinner {
        width: 32px;
        height: 32px;
        border: 3px solid var(--divider-color, #e0e0e0);
        border-top-color: var(--primary-color, #03a9f4);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `))],Fc([Up({type:Object})],Vv.prototype,"hass",void 0),Fc([Up({type:Boolean,reflect:!0})],Vv.prototype,"narrow",void 0),Fc([Up({type:Object})],Vv.prototype,"panel",void 0),Fc([Vp()],Vv.prototype,"_updateAvailable",void 0),Fc([Vp()],Vv.prototype,"_config",void 0),Fc([Vp()],Vv.prototype,"_activeTab",void 0),Fc([Vp()],Vv.prototype,"_devices",void 0),Fc([Vp()],Vv.prototype,"_contacts",void 0),Fc([Vp()],Vv.prototype,"_conversationActivity",void 0),Fc([Vp()],Vv.prototype,"_conversationPreviews",void 0),Fc([Vp()],Vv.prototype,"_channels",void 0),Fc([Vp()],Vv.prototype,"_selectedEntryId",void 0),Fc([Vp()],Vv.prototype,"_loading",void 0),Fc([Vp()],Vv.prototype,"_loadingStarted",void 0),Fc([Vp()],Vv.prototype,"_error",void 0),Fc([Vp()],Vv.prototype,"_unsubscribeList",void 0),Fc([Vp()],Vv.prototype,"_pendingChatTarget",void 0),Fc([Vp()],Vv.prototype,"_deviceDropdownOpen",void 0),Fc([Vp()],Vv.prototype,"_traceDialogOpen",void 0),Fc([Vp()],Vv.prototype,"_traceDialogContactName",void 0),Fc([Vp()],Vv.prototype,"_traceDialogResult",void 0),Fc([Vp()],Vv.prototype,"_traceDialogError",void 0),Fc([Vp()],Vv.prototype,"_traceDialogPubkeyPrefix",void 0),Fc([Vp()],Vv.prototype,"_traceDialogEntryId",void 0),Fc([Vp()],Vv.prototype,"_traceDialogTargetContact",void 0),Fc([Vp()],Vv.prototype,"_targetPickerOpen",void 0),Fc([Vp()],Vv.prototype,"_pendingTraceEntryId",void 0),Vv=Fc([qp("meshcore-chattx-panel")],Vv);export{Vv as MeshCorePanel};
