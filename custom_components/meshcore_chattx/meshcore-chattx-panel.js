/*! meshcore-chattx-panel v0.6.1 */
let e,t,i,o,r,s,a,n,l,d,c,p,h,u,g,m,v,f,y,b,_,x,w,$,k,C,F,S,A,D,E,M,B,I,z,R,O,T,N,L,P,q,H,j,V,K,U,W,G,X,Y,Q,J,Z,ee,te,ie,oe,re,se,ae,ne,le,de,ce,pe,he,ue,ge,me,ve,fe,ye,be,_e,xe,we,$e,ke,Ce,Fe,Se,Ae,De,Ee,Me,Be,Ie,ze,Re,Oe,Te,Ne,Le,Pe,qe,He,je,Ve,Ke,Ue,We,Ge,Xe,Ye,Qe,Je,Ze,et,tt,it,ot,rt,st,at,nt,lt,dt,ct,pt,ht,ut,gt,mt,vt,ft,yt,bt,_t,xt,wt,$t,kt,Ct,Ft,St,At,Dt,Et,Mt,Bt,It,zt,Rt,Ot,Tt,Nt,Lt,Pt,qt,Ht,jt,Vt,Kt,Ut,Wt,Gt,Xt,Yt,Qt,Jt,Zt,ei,ti,ii,oi,ri,si,ai,ni,li,di,ci,pi,hi,ui,gi,mi,vi,fi,yi,bi,_i,xi,wi,$i,ki,Ci,Fi,Si,Ai,Di,Ei,Mi,Bi,Ii,zi,Ri,Oi,Ti,Ni,Li,Pi,qi,Hi,ji,Vi,Ki,Ui,Wi,Gi,Xi,Yi,Qi,Ji,Zi,eo,to,io,oo,ro,so,ao,no,lo,co,po,ho,uo,go,mo,vo,fo,yo,bo,_o,xo,wo,$o,ko,Co,Fo,So,Ao,Do,Eo,Mo,Bo,Io,zo,Ro,Oo,To,No,Lo,Po,qo,Ho,jo,Vo,Ko,Uo,Wo,Go,Xo,Yo,Qo,Jo,Zo,er,tr,ir,or,rr,sr,ar,nr,lr,dr,cr,pr,hr,ur,gr,mr,vr,fr,yr,br,_r,xr,wr,$r,kr,Cr,Fr,Sr,Ar,Dr,Er,Mr,Br,Ir,zr,Rr,Or,Tr,Nr,Lr,Pr,qr,Hr,jr,Vr,Kr,Ur,Wr,Gr,Xr,Yr,Qr,Jr,Zr,es,ts,is,os,rs,ss,as,ns,ls,ds,cs,ps,hs,us,gs,ms,vs,fs,ys,bs,_s,xs,ws,$s,ks,Cs,Fs,Ss,As,Ds,Es,Ms,Bs,Is,zs,Rs,Os,Ts,Ns,Ls,Ps,qs,Hs,js,Vs,Ks,Us,Ws,Gs,Xs,Ys,Qs,Js,Zs,ea,ta,ia,oa,ra,sa,aa,na,la,da,ca,pa,ha,ua,ga,ma,va,fa,ya,ba,_a,xa,wa,$a,ka,Ca,Fa,Sa,Aa,Da,Ea,Ma,Ba,Ia,za,Ra,Oa,Ta,Na,La,Pa,qa,Ha,ja,Va,Ka,Ua,Wa,Ga,Xa,Ya,Qa,Ja,Za,en,tn,on,rn,sn,an,nn,ln,dn,cn,pn,hn,un,gn,mn,vn,fn,yn,bn,_n,xn,wn,$n,kn,Cn,Fn,Sn,An,Dn,En,Mn,Bn,In,zn,Rn,On,Tn,Nn,Ln,Pn,qn,Hn,jn,Vn,Kn,Un,Wn,Gn,Xn,Yn,Qn,Jn,Zn,el,tl,il,ol,rl,sl,al,nl,ll,dl,cl,pl,hl,ul,gl,ml,vl,fl,yl,bl,_l,xl,wl,$l,kl,Cl,Fl,Sl,Al,Dl,El,Ml,Bl,Il,zl,Rl=e=>e;function Ol(e,t,i,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a}"function"==typeof SuppressedError&&SuppressedError;const Tl=/^(meshcore-chattx-panel|chattx-)/,Nl="undefined"!=typeof customElements?customElements:void 0;if(Nl&&!Nl.__chattxGuard){const e=Nl.define.bind(Nl);Nl.define=(t,i,o)=>{Tl.test(t)&&Nl.get(t)||e(t,i,o)},Nl.__chattxGuard=!0}const Ll={},Pl={en:"English",cs:"Čeština",da:"Dansk",de:"Deutsch",fr:"Français",hr:"Hrvatski",pl:"Polski",sk:"Slovenčina",sl:"Slovenščina",sr:"Srpski (latinica)",fi:"Suomi",sv:"Svenska",uk:"Українська"},ql={bs:"sr",cnr:"sr",me:"sr"},Hl={cs:["one","few","other"],hr:["one","few","other"],pl:["one","few","many"],sk:["one","few","other"],sl:["one","two","few","other"],sr:["one","few","other"],uk:["one","few","many"]},jl="chattx-language";let Vl;function Kl(e){return null==e?void 0:e.toLowerCase().split("-")[0]}function Ul(e){var t;const i=Kl(e),o=i?null!==(t=ql[i])&&void 0!==t?t:i:void 0;return o&&o in Pl?o:void 0}function Wl(){return"undefined"!=typeof navigator?navigator.language:void 0}function Gl(){try{var e,t;return null!==(e=Ul(null!==(t=localStorage.getItem(jl))&&void 0!==t?t:void 0))&&void 0!==e?e:"auto"}catch(e){return"auto"}}function Xl(e){Vl=e}function Yl(){var e,t;const i=Gl();return"auto"!==i?i:null!==(e=null!==(t=Ul(Vl))&&void 0!==t?t:Ul(Wl()))&&void 0!==e?e:"en"}function Ql(){const e=Yl();if(Kl(Wl())!==e)return"sr"===e?"sr-Latn":e}function Jl(e,t){return t?e.replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):e):e}function Zl(e,t){var i,o;return Jl(null!==(i=null===(o=Ll[Yl()])||void 0===o?void 0:o[e])&&void 0!==i?i:e,t)}function ed(e,t,i,o){var r,s,a;const n=Yl(),l={n:i,...o},d=null===(r=Ll[n])||void 0===r||null===(r=r[t])||void 0===r?void 0:r.split("|");if(!d)return Jl(1===i?e:t,l);const c=(null!==(s=Hl[n])&&void 0!==s?s:["one","other"]).indexOf(new Intl.PluralRules(n).select(i));return Jl(null!==(a=d[c>=0?c:d.length-1])&&void 0!==a?a:d[d.length-1],l)}async function td(){const e=Yl();if("en"!==e&&!Ll[e])try{const t=new URL(import.meta.url).search,i=await fetch(`/meshcore_chattx_panel/i18n/${e}.json${t}`);i.ok&&function(e,t){Ll[e]=t}(e,await i.json())}catch(e){}}function id(e){if(!e)return null;try{return new URL(e,"http://localhost").searchParams.get("v")}catch(e){return null}}function od(e){var t;const i=null==e?void 0:e.config;return null==i||null===(t=i._panel_custom)||void 0===t?void 0:t.module_url}const rd="chattx-heard-reply";let sd="";function ad(){return Zl("Heard, {hops}!")}function nd(){return sd}function ld(e){sd=(null!=e?e:"").trim()}async function dd(e){try{var t;const i=await e.callWS({type:"meshcore_chattx/get_heard_reply"});if(null===i.text&&null!==(t=e.user)&&void 0!==t&&t.is_admin){const t=function(){try{var e;const t=null!==(e=localStorage.getItem(rd))&&void 0!==e?e:"";return localStorage.removeItem(rd),t.trim()}catch(e){return""}}();if(t)return void ld((await e.callWS({type:"meshcore_chattx/set_heard_reply",text:t})).text)}ld(i.text)}catch(e){}}const cd=globalThis,pd=cd.ShadowRoot&&(void 0===cd.ShadyCSS||cd.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,hd=Symbol(),ud=new WeakMap;let gd=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==hd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(pd&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=ud.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ud.set(t,e))}return e}toString(){return this.cssText}};const md=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new gd(i,e,hd)},vd=pd?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new gd("string"==typeof e?e:e+"",void 0,hd))(t)})(e):e,{is:fd,defineProperty:yd,getOwnPropertyDescriptor:bd,getOwnPropertyNames:_d,getOwnPropertySymbols:xd,getPrototypeOf:wd}=Object,$d=globalThis,kd=$d.trustedTypes,Cd=kd?kd.emptyScript:"",Fd=$d.reactiveElementPolyfillSupport,Sd=(e,t)=>e,Ad={toAttribute(e,t){switch(t){case Boolean:e=e?Cd:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},Dd=(e,t)=>!fd(e,t),Ed={attribute:!0,type:String,converter:Ad,reflect:!1,useDefault:!1,hasChanged:Dd};null!==(e=Symbol.metadata)&&void 0!==e||(Symbol.metadata=Symbol("metadata")),null!==(t=$d.litPropertyMetadata)&&void 0!==t||($d.litPropertyMetadata=new WeakMap);let Md=class extends HTMLElement{static addInitializer(e){var t;this._$Ei(),(null!==(t=this.l)&&void 0!==t?t:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ed){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&yd(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){var o;const{get:r,set:s}=null!==(o=bd(this.prototype,e))&&void 0!==o?o:{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const o=null==r?void 0:r.call(this);null!=s&&s.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return null!==(t=this.elementProperties.get(e))&&void 0!==t?t:Ed}static _$Ei(){if(this.hasOwnProperty(Sd("elementProperties")))return;const e=wd(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Sd("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Sd("properties"))){const e=this.properties,t=[..._d(e),...xd(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(vd(e))}else void 0!==e&&t.push(vd(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,i;(null!==(t=this._$EO)&&void 0!==t?t:this._$EO=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$EO)||void 0===t||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(pd)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),o=cd.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}})(t,this.constructor.elementStyles),t}connectedCallback(){var e,t;null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$EO)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$EO)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){var r;const s=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:Ad).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){var r,s,a;const e=i.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(r=e.converter)||void 0===r?void 0:r.fromAttribute)?e.converter:Ad;this._$Em=o;const l=n.fromAttribute(t,e.type);this[o]=null!==(s=null!=l?l:null===(a=this._$Ej)||void 0===a?void 0:a.get(o))&&void 0!==s?s:l,this._$Em=null}}requestUpdate(e,t,i,o=!1,r){if(void 0!==e){var s,a;const n=this.constructor;if(!1===o&&(r=this[e]),null!=i||(i=n.getPropertyOptions(e)),!((null!==(s=i.hasChanged)&&void 0!==s?s:Dd)(r,t)||i.useDefault&&i.reflect&&r===(null===(a=this._$Ej)||void 0===a?void 0:a.get(e))&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},s){var a,n,l;i&&!(null!==(a=this._$Ej)&&void 0!==a?a:this._$Ej=new Map).has(e)&&(this._$Ej.set(e,null!==(n=null!=s?s:t)&&void 0!==n?n:this[e]),!0!==r||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(null!==(l=this._$Eq)&&void 0!==l?l:this._$Eq=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){var e;if(null!==(e=this.renderRoot)&&void 0!==e||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const i=this._$AL;try{var o;t=this.shouldUpdate(i),t?(this.willUpdate(i),null!==(o=this._$EO)&&void 0!==o&&o.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(i)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null!==(t=this._$EO)&&void 0!==t&&t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};Md.elementStyles=[],Md.shadowRootOptions={mode:"open"},Md[Sd("elementProperties")]=new Map,Md[Sd("finalized")]=new Map,null!=Fd&&Fd({ReactiveElement:Md}),(null!==(i=$d.reactiveElementVersions)&&void 0!==i?i:$d.reactiveElementVersions=[]).push("2.1.2");const Bd=globalThis,Id=e=>e,zd=Bd.trustedTypes,Rd=zd?zd.createPolicy("lit-html",{createHTML:e=>e}):void 0,Od="$lit$",Td=`lit$${Math.random().toFixed(9).slice(2)}$`,Nd="?"+Td,Ld=`<${Nd}>`,Pd=document,qd=()=>Pd.createComment(""),Hd=e=>null===e||"object"!=typeof e&&"function"!=typeof e,jd=Array.isArray,Vd="[ \t\n\f\r]",Kd=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ud=/-->/g,Wd=/>/g,Gd=RegExp(`>|${Vd}(?:([^\\s"'>=/]+)(${Vd}*=${Vd}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Xd=/'/g,Yd=/"/g,Qd=/^(?:script|style|textarea|title)$/i,Jd=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),Zd=Jd(1),ec=Jd(2),tc=Symbol.for("lit-noChange"),ic=Symbol.for("lit-nothing"),oc=new WeakMap,rc=Pd.createTreeWalker(Pd,129);function sc(e,t){if(!jd(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Rd?Rd.createHTML(t):t}const ac=(e,t)=>{const i=e.length-1,o=[];let r,s=2===t?"<svg>":3===t?"<math>":"",a=Kd;for(let t=0;t<i;t++){const i=e[t];let n,l,d=-1,c=0;for(;c<i.length&&(a.lastIndex=c,l=a.exec(i),null!==l);)c=a.lastIndex,a===Kd?"!--"===l[1]?a=Ud:void 0!==l[1]?a=Wd:void 0!==l[2]?(Qd.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=Gd):void 0!==l[3]&&(a=Gd):a===Gd?">"===l[0]?(a=null!=r?r:Kd,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?Gd:'"'===l[3]?Yd:Xd):a===Yd||a===Xd?a=Gd:a===Ud||a===Wd?a=Kd:(a=Gd,r=void 0);const p=a===Gd&&e[t+1].startsWith("/>")?" ":"";s+=a===Kd?i+Ld:d>=0?(o.push(n),i.slice(0,d)+Od+i.slice(d)+Td+p):i+Td+(-2===d?t:p)}return[sc(e,s+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class nc{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,s=0;const a=e.length-1,n=this.parts,[l,d]=ac(e,t);if(this.el=nc.createElement(l,i),rc.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=rc.nextNode())&&n.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(Od)){const t=d[s++],i=o.getAttribute(e).split(Td),a=/([.?@])?(.*)/.exec(t);n.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?hc:"?"===a[1]?uc:"@"===a[1]?gc:pc}),o.removeAttribute(e)}else e.startsWith(Td)&&(n.push({type:6,index:r}),o.removeAttribute(e));if(Qd.test(o.tagName)){const e=o.textContent.split(Td),t=e.length-1;if(t>0){o.textContent=zd?zd.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],qd()),rc.nextNode(),n.push({type:2,index:++r});o.append(e[t],qd())}}}else if(8===o.nodeType)if(o.data===Nd)n.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(Td,e+1));)n.push({type:7,index:r}),e+=Td.length-1}r++}}static createElement(e,t){const i=Pd.createElement("template");return i.innerHTML=e,i}}function lc(e,t,i=e,o){var r,s,a,n,l;if(t===tc)return t;let d=void 0!==o?null===(r=i._$Co)||void 0===r?void 0:r[o]:i._$Cl;const c=Hd(t)?void 0:t._$litDirective$;return(null===(s=d)||void 0===s?void 0:s.constructor)!==c&&(null!==(a=d)&&void 0!==a&&null!==(n=a._$AO)&&void 0!==n&&n.call(a,!1),void 0===c?d=void 0:(d=new c(e),d._$AT(e,i,o)),void 0!==o?(null!==(l=i._$Co)&&void 0!==l?l:i._$Co=[])[o]=d:i._$Cl=d),void 0!==d&&(t=lc(e,d._$AS(e,t.values),d,o)),t}class dc{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:o}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:Pd).importNode(i,!0);rc.currentNode=r;let s=rc.nextNode(),a=0,n=0,l=o[0];for(;void 0!==l;){var d;if(a===l.index){let t;2===l.type?t=new cc(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new mc(s,this,e)),this._$AV.push(t),l=o[++n]}a!==(null===(d=l)||void 0===d?void 0:d.index)&&(s=rc.nextNode(),a++)}return rc.currentNode=Pd,r}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class cc{get _$AU(){var e,t;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cv}constructor(e,t,i,o){var r;this.type=2,this._$AH=ic,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=null===(r=null==o?void 0:o.isConnected)||void 0===r||r}get parentNode(){var e;let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null===(e=t)||void 0===e?void 0:e.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=lc(this,e,t),Hd(e)?e===ic||null==e||""===e?(this._$AH!==ic&&this._$AR(),this._$AH=ic):e!==this._$AH&&e!==tc&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>jd(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ic&&Hd(this._$AH)?this._$AA.nextSibling.data=e:this.T(Pd.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=nc.createElement(sc(o.h,o.h[0]),this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.p(i);else{const e=new dc(r,this),t=e.u(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let t=oc.get(e.strings);return void 0===t&&oc.set(e.strings,t=new nc(e)),t}k(e){jd(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new cc(this.O(qd()),this.O(qd()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e!==this._$AB;){var i;const t=Id(e).nextSibling;Id(e).remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class pc{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=ic,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ic}_$AI(e,t=this,i,o){const r=this.strings;let s=!1;if(void 0===r)e=lc(this,e,t,0),s=!Hd(e)||e!==this._$AH&&e!==tc,s&&(this._$AH=e);else{const o=e;let a,n;for(e=r[0],a=0;a<r.length-1;a++)n=lc(this,o[i+a],t,a),n===tc&&(n=this._$AH[a]),s||(s=!Hd(n)||n!==this._$AH[a]),n===ic?e=ic:e!==ic&&(e+=(null!=n?n:"")+r[a+1]),this._$AH[a]=n}s&&!o&&this.j(e)}j(e){e===ic?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class hc extends pc{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ic?void 0:e}}class uc extends pc{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ic)}}class gc extends pc{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=lc(this,e,t,0))&&void 0!==i?i:ic)===tc)return;const o=this._$AH,r=e===ic&&o!==ic||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==ic&&(o===ic||r);r&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==t?t:this.element,e):this._$AH.handleEvent(e)}}class mc{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){lc(this,e)}}const vc=Bd.litHtmlPolyfillSupport;null!=vc&&vc(nc,cc),(null!==(o=Bd.litHtmlVersions)&&void 0!==o?o:Bd.litHtmlVersions=[]).push("3.3.2");const fc=globalThis;let yc=class extends Md{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var o;const r=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:t;let s=r._$litPart$;if(void 0===s){var a;const e=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:null;r._$litPart$=s=new cc(t.insertBefore(qd(),e),e,void 0,null!=i?i:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return tc}};yc._$litElement$=!0,yc.finalized=!0,null===(r=fc.litElementHydrateSupport)||void 0===r||r.call(fc,{LitElement:yc});const bc=fc.litElementPolyfillSupport;null==bc||bc({LitElement:yc}),(null!==(s=fc.litElementVersions)&&void 0!==s?s:fc.litElementVersions=[]).push("4.2.2");const _c=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},xc={attribute:!0,type:String,converter:Ad,reflect:!1,hasChanged:Dd},wc=(e=xc,t,i)=>{const{kind:o,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];t.call(this,i),this.requestUpdate(o,r,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};function $c(e){return(t,i)=>"object"==typeof i?wc(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function kc(e){return $c({...e,state:!0,attribute:!1})}function Cc(e,t){return(t,i,o)=>((e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i))(t,i,{get(){return(()=>{var t,i;return null!==(t=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==t?t:null})()}})}const Fc=md(a||(a=Rl`
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
`)),Sc=/^<[^>]+>\s*/,Ac=/@\[([^\]]+)\]/g,Dc=/@(\w+)/g,Ec={recipient_type_entity:"select.meshcore_recipient_type",channel_entity:"select.meshcore_channel",contact_entity:"select.meshcore_contact",channel_entity_pattern:"binary_sensor.meshcore_{prefix}_ch_{idx}_messages",contact_entity_pattern:"binary_sensor.meshcore_{prefix}_{contact}_messages",domain_filter:"meshcore"},Mc={...Ec,hours_to_show:48,initial_hours:1,max_messages:500,show_date_separators:!0,group_messages:!0,group_timeout:300,timestamp_format:"relative",update_mode:"auto",refresh_interval:30,enable_cache:!0,cache_ttl:86400,cache_max_size:5242880};function Bc(e){const t=e?Date.parse(e):NaN;return Number.isNaN(t)?0:t}function Ic(e,t){const i={...e};for(const[e,o]of Object.entries(t))Bc(o)>=Bc(i[e])&&(i[e]=o);return i}function zc(e,t){return"pubkey_prefix"in e?`meshcore_${t}_${e.pubkey_prefix.substring(0,6)}_messages`:`meshcore_${t}_ch_${e.channel_idx}_messages`}function Rc(e){return new Map(Object.entries(e).map(([e,t])=>[e.substring(e.indexOf(".")+1),t]))}const Oc=36e5;async function Tc(e){try{return(await e.callWS({type:"meshcore_chattx/get_devices"})).devices||[]}catch(e){return[]}}async function Nc(e,t){try{const i={type:"meshcore_chattx/get_contacts"};return t&&(i.entry_id=t),(await e.callWS(i)).contacts||[]}catch(e){return[]}}async function Lc(e,t){try{const i={type:"meshcore_chattx/get_channels"};return t&&(i.entry_id=t),(await e.callWS(i)).channels||[]}catch(e){return[]}}async function Pc(e,t){try{const i={type:"meshcore_chattx/get_device_config"};return t&&(i.entry_id=t),await e.callWS(i)}catch(e){throw new Error("Failed to get device configuration")}}async function qc(e,t,i){try{const o={type:"meshcore_chattx/set_device_config",settings:t};return i&&(o.entry_id=i),await e.callWS(o)}catch(e){return{success:!1,changed:[]}}}async function Hc(e,t,i,o){try{const r={type:"meshcore_chattx/execute_local",command:t};return i&&(r.args=i),o&&(r.entry_id=o),await e.callWS(r)}catch(e){const t=e;return{response:t&&t.message?t.code?`${t.message} (${t.code})`:t.message:String(e),success:!1,timestamp:(new Date).toISOString()}}}async function jc(e,t,i,o){try{const r={type:"meshcore_chattx/execute_remote",target_prefix:t,command:i};return o&&(r.entry_id=o),await e.callWS(r)}catch(e){const t=e;return{response:t&&t.message?t.code?`${t.message} (${t.code})`:t.message:String(e),success:!1,timestamp:(new Date).toISOString()}}}function Vc(e){const t=e;return t&&t.message?t.message:String(e)}async function Kc(e,t,i){const o={type:"meshcore_chattx/repeater_login_state",target_prefix:t};i&&(o.entry_id=i);try{return await e.callWS(o)}catch(e){return{has_saved_password:!1,logged_in_at:null}}}const Uc=new Map;function Wc(e){var t;return Date.now()<(null!==(t=Uc.get(null!=e?e:""))&&void 0!==t?t:0)}async function Gc(e,t,i,o){const r={type:"meshcore_chattx/repeater_read",target_prefix:t,command:i};o&&(r.entry_id=o),Uc.set(t,1/0);try{return await e.callWS(r)}catch(e){return{success:!1,message:Vc(e)}}finally{Uc.set(t,Date.now()+3e3)}}async function Xc(e,t,i,o){const r={type:"meshcore_chattx/repeater_read_neighbours",target_prefix:t,offset:i};o&&(r.entry_id=o);try{return await e.callWS(r)}catch(e){return{success:!1,message:Vc(e)}}}async function Yc(e,t,i,o){const r={type:"meshcore_chattx/repeater_command",target_prefix:t,command:i};o&&(r.entry_id=o),Uc.set(t,1/0);try{return await e.callWS(r)}catch(e){return{success:!1,message:Vc(e)}}finally{Uc.set(t,Date.now()+3e3)}}async function Qc(e,t,i){const o={type:"meshcore_chattx/repeater_read_telemetry",target_prefix:t};i&&(o.entry_id=i);try{return await e.callWS(o)}catch(e){return{success:!1,message:Vc(e)}}}async function Jc(e,t,i){const o={type:"meshcore_chattx/repeater_remembered_settings",target_prefix:t};i&&(o.entry_id=i);try{var r;return null!==(r=(await e.callWS(o)).settings)&&void 0!==r?r:{}}catch(e){return{}}}async function Zc(e,t){try{const i={type:"meshcore_chattx/get_flood_scopes"};t&&(i.entry_id=t);const o=await e.callWS(i);return{scopes:o.scopes||[],global:!!o.global}}catch(e){return{scopes:[],global:!1}}}async function ep(e,t,i,o){try{const r={type:"meshcore_chattx/add_contact",public_key:t};return i&&(r.name=i),o&&(r.entry_id=o),await e.callWS(r)}catch(e){return{success:!1}}}async function tp(e,t,i){try{const o={type:"meshcore_chattx/remove_contact",public_key:t};return i&&(o.entry_id=i),await e.callWS(o)}catch(e){return{success:!1}}}async function ip(e){try{return(await e.callWS({type:"meshcore_chattx/get_quick_messages"})).messages}catch(e){return[]}}async function op(e,t){try{const i={type:"meshcore_chattx/get_default_flood_scope"};t&&(i.entry_id=t);const o=await e.callWS(i);return{supported:!!o.supported,scope:o.scope||""}}catch(e){return{supported:!1,scope:""}}}class rp{constructor(){this._counts={},this._lastRead={},this._subscribers=new Set,this._markReadRequestedHandler=null,this._readProgress=null,this._postSwitchTimerHandler=null}subscribe(e){return this._subscribers.add(e),()=>{this._subscribers.delete(e)}}onMarkReadRequested(e){this._markReadRequestedHandler=e}onPostSwitchTimerFire(e){this._postSwitchTimerHandler=e}requestMarkRead(e){e&&this._markReadRequestedHandler&&this._markReadRequestedHandler(e)}_notify(){for(const e of[...this._subscribers])try{e()}catch(e){console.error("[UnreadController] subscriber callback threw",e)}}ingestBackendData(e,t){var i,o;this._counts={...null!==(i=null==e?void 0:e.unread)&&void 0!==i?i:{}},this._lastRead={...null!==(o=null==e?void 0:e.last_read)&&void 0!==o?o:{}},this._notify()}clearEntity(e){e&&this._counts[e]&&(this._counts={...this._counts,[e]:0},this._notify())}get counts(){return this._counts}get lastRead(){return this._lastRead}beginConversation(e,t){var i;this._clearPostSwitchTimer();const o={entityId:e,anchorId:e&&null!==(i=this._lastRead[e])&&void 0!==i?i:null,unreadCountAtSelection:t,graceUntil:Date.now()+1e3,postSwitchTimer:null,markReadFired:!1,lastMarkReadIdSent:null};this._readProgress=o,o.postSwitchTimer=setTimeout(()=>{var e;this._readProgress===o&&(o.postSwitchTimer=null,null===(e=this._postSwitchTimerHandler)||void 0===e||e.call(this))},1e3)}endConversation(){this._clearPostSwitchTimer(),this._readProgress=null}_clearPostSwitchTimer(){const e=this._readProgress;null!=e&&e.postSwitchTimer&&(clearTimeout(e.postSwitchTimer),e.postSwitchTimer=null)}resetUnreadCountAtSelection(){this._readProgress&&(this._readProgress.unreadCountAtSelection=0)}maybeReanchorOnLateData(e){const t=this._readProgress;if(!t||t.entityId!==e)return!1;if(null!==t.anchorId)return!1;if(t.markReadFired)return!1;const i=this._lastRead[e];return!!i&&(t.anchorId=i,!0)}onScrollState(e){return this._tryAdvanceCursor(e.entityId,e.lastMessageVisible,e.hasNewerMessages,e.bufferTailId,!1)}onPillJump(e){return this._tryAdvanceCursor(e.entityId,!0,!1,e.bufferTailId,!0)}_tryAdvanceCursor(e,t,i,o,r){if(!e)return!1;const s=this._readProgress;return!(!s||s.entityId!==e||!r&&Date.now()<s.graceUntil||i||!t||null!==o&&o===s.lastMarkReadIdSent||(s.lastMarkReadIdSent=o,s.markReadFired=!0,this.requestMarkRead(e),0))}badgeCount(e,t,i){if(!e)return 0;const o=this._counts;if(i&&o[i])return o[i];const r=/^\d+$/.test(e),s=t?`meshcore_${t}_ch_${e}_messages`:null;for(const[t,i]of Object.entries(o))if(!(i<=0))if(r){if(s){if(t.endsWith(s))return i}else if(t.endsWith(`_ch_${e}_messages`))return i}else{const o=e.substring(0,6);if(t.endsWith(`_${o}_messages`))return i}return 0}dividerAfterGroupIdx(e){const t=this._readProgress;if(!t)return null;let i=null;if(t.anchorId){let o=0;for(const r of e)if("date-separator"!==r.type){if(r.group.messages.some(e=>e.id===t.anchorId)){i=o;break}o++}}if(null!==i){let t=0;for(const o of e)if("date-separator"!==o.type){if(t>i&&!o.group.isOutgoing)return t;t++}return null}if(t.unreadCountAtSelection>0){const i=e.filter(e=>"date-separator"!==e.type).length,o=i-t.unreadCountAtSelection;return o>=0?o:0}return null}cursorAtTail(e,t){return!(!e||null===t)&&this._lastRead[e]===t}}const sp=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function ap(e){const t=(new TextEncoder).encode(e),i=t.length,o=8*i,r=i+9+63&-64,s=new Uint8Array(r);s.set(t),s[i]=128;const a=new DataView(s.buffer);a.setUint32(r-4,o,!1);let n=1779033703,l=3144134277,d=1013904242,c=2773480762,p=1359893119,h=2600822924,u=528734635,g=1541459225;const m=new Int32Array(64);for(let e=0;e<r;e+=64){for(let t=0;t<16;t++)m[t]=a.getInt32(e+4*t,!1);for(let e=16;e<64;e++){const t=(m[e-15]>>>7|m[e-15]<<25)^(m[e-15]>>>18|m[e-15]<<14)^m[e-15]>>>3,i=(m[e-2]>>>17|m[e-2]<<15)^(m[e-2]>>>19|m[e-2]<<13)^m[e-2]>>>10;m[e]=m[e-16]+t+m[e-7]+i|0}let t=n,i=l,o=d,r=c,s=p,v=h,f=u,y=g;for(let e=0;e<64;e++){const a=y+((s>>>6|s<<26)^(s>>>11|s<<21)^(s>>>25|s<<7))+(s&v^~s&f)+sp[e]+m[e]|0,n=t&i^t&o^i&o;y=f,f=v,v=s,s=r+a|0,r=o,o=i,i=t,t=a+(((t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10))+n|0)|0}n=n+t|0,l=l+i|0,d=d+o|0,c=c+r|0,p=p+s|0,h=h+v|0,u=u+f|0,g=g+y|0}const v=e=>(e>>>0).toString(16).padStart(8,"0");return v(n)+v(l)+v(d)+v(c)+v(p)+v(h)+v(u)+v(g)}function np(e){const t=[],i=new Set;let o;const r=new RegExp(Ac.source,"g");for(;null!==(o=r.exec(e));){const e=o[1];i.has(e)||(i.add(e),t.push(e))}const s=new RegExp(Dc.source,"g");for(;null!==(o=s.exec(e));){const e=o[1];i.has(e)||(i.add(e),t.push(e))}return t}function lp(e){if(!e||0===e.length)return{};let t,i;for(const o of e)void 0===t&&"string"==typeof o.flood_scope&&(t=o.flood_scope),void 0===i&&"boolean"==typeof o.region_scope&&(i=o.region_scope);return{floodScope:t,regionScope:i}}function dp(e){var t,i;const o=lp(e.rx_log_data);return{id:e.id,sender:e.sender,text:e.text,timestamp:new Date(e.timestamp),isOutgoing:e.outgoing,isSystem:!1,raw:e.text,mentions:np(e.text),rxLogData:e.rx_log_data,deliveryStatus:e.delivery_status?{status:e.delivery_status,ackReceived:e.ack_received,repeaterCount:e.repeater_count,roundTripMs:e.round_trip_ms}:void 0,repeaterCount:e.repeater_count,lateEchoes:e.late_echoes&&e.late_echoes.length>0?e.late_echoes:void 0,floodScope:null!==(t=e.flood_scope)&&void 0!==t?t:o.floodScope,regionScope:null!==(i=e.region_scope)&&void 0!==i?i:o.regionScope}}function cp(e,t){return e.getFullYear()!==t.getFullYear()||e.getMonth()!==t.getMonth()||e.getDate()!==t.getDate()}function pp(e){const t=new Date,i=new Date(t.getFullYear(),t.getMonth(),t.getDate()),o=new Date(e.getFullYear(),e.getMonth(),e.getDate()),r=Math.floor((i.getTime()-o.getTime())/864e5);return 0===r?Zl("Today"):1===r?Zl("Yesterday"):r<7?e.toLocaleDateString(Ql(),{weekday:"long"}):e.toLocaleDateString(Ql(),{weekday:"long",month:"long",day:"numeric"})}function hp(e){const t=(null!=e?e:[]).map(e=>null==e?void 0:e.hop_count).filter(e=>"number"==typeof e);return t.length>0?Math.min(...t):null}class up{constructor(e){this._messages=[],this._loading=!1,this._error=null,this._entityId=null,this._hass=null,this._pollTimer=null,this._realtimeSubscriptions=[],this._retryCount=0,this._onChange=null,this._fetchDebounce=null,this._active=!1,this._hasOlderMessages=!0,this._loadingOlder=!1,this._hasNewerMessages=!1,this._loadingNewer=!1,this._newMessagesWhileAway=0,this._userAtBottom=!1,this._config=e}get messages(){return this._messages}get loading(){return this._loading}get error(){return this._error}get entityId(){return this._entityId}get loadingOlder(){return this._loadingOlder}get hasOlderMessages(){return this._hasOlderMessages}get loadingNewer(){return this._loadingNewer}get hasNewerMessages(){return this._hasNewerMessages}get newMessagesWhileAway(){return this._newMessagesWhileAway}get userAtBottom(){return this._userAtBottom}setUserAtBottom(e){this._userAtBottom!==e&&(this._userAtBottom=e,e&&!this._hasNewerMessages&&this._newMessagesWhileAway>0&&(this._newMessagesWhileAway=0,this._notify()))}resetNewMessagesCounter(){0!==this._newMessagesWhileAway&&(this._newMessagesWhileAway=0,this._notify())}setOnChange(e){this._onChange=e}setHass(e){this._hass=e}setConfig(e){this._config=e}async switchEntity(e,t=null){if(e!==this._entityId){if(this._stopUpdates(),this._entityId=e,this._messages=[],this._error=null,this._retryCount=0,this._hasOlderMessages=!0,this._loadingOlder=!1,this._hasNewerMessages=!1,this._loadingNewer=!1,this._newMessagesWhileAway=0,this._userAtBottom=!1,!e)return this._active=!1,void this._notify();this._active=!0,this._startUpdates(e),t?await this._fetchAroundAnchor(e,t):await this._fetchMessages(e)}}async refresh(){this._entityId&&await this._fetchMessages(this._entityId)}addOptimisticMessage(e,t){const i=new Date,o={id:`optimistic_${i.getTime()}_${Math.random().toString(36).slice(2,8)}`,sender:e,text:t,timestamp:i,isOutgoing:!0,isSystem:!1,raw:`${e}: ${t}`,mentions:[]};this._messages=[...this._messages,o],this._notify()}async loadOlderMessages(){if(!this._loadingOlder&&this._hasOlderMessages&&this._hass&&this._entityId){this._loadingOlder=!0,this._notify();try{const e=this._messages.find(e=>!e.id.startsWith("rt_")&&!e.id.startsWith("optimistic_")),t={type:"meshcore_chattx/get_stored_messages",entity_id:this._entityId,limit:50};e&&(t.before=e.id);const i=await this._hass.callWS(t),o=i.messages.map(dp);this._hasOlderMessages=i.has_more;const r=new Set(this._messages.map(e=>e.id)),s=o.filter(e=>!r.has(e.id));s.length>0&&(this._messages=[...s,...this._messages],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime()))}catch(e){}finally{this._loadingOlder=!1,this._notify()}}}async loadNewerMessages(){if(!this._loadingNewer&&this._hasNewerMessages&&this._hass&&this._entityId){this._loadingNewer=!0,this._notify();try{let t;for(let e=this._messages.length-1;e>=0;e--){const i=this._messages[e].id;if(!i.startsWith("rt_")&&!i.startsWith("optimistic_")){t=i;break}}const i={type:"meshcore_chattx/get_stored_messages",entity_id:this._entityId,limit:50};t&&(i.after=t);const o=await this._hass.callWS(i),r=o.messages.map(dp);this._hasNewerMessages=o.has_more;const s=new Set(r.map(e=>e.id));this._messages=this._messages.filter(e=>!e.id.startsWith("rt_")||!s.has(e.id.substring(3)));const a=new Set(this._messages.map(e=>e.id)),n=r.filter(e=>!a.has(e.id));if(n.length>0){var e;this._messages=[...this._messages,...n],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const t=null!==(e=this._config.max_messages)&&void 0!==e?e:500;this._messages.length>t&&(this._messages=this._messages.slice(-t),this._hasOlderMessages=!0)}}catch(e){}finally{this._loadingNewer=!1,this._notify()}}}async fetchAroundTimestamp(e){const t=new Date(e).getTime(),i=this._messages.find(e=>Math.abs(e.timestamp.getTime()-t)<2e3);if(i)return!0;let o=0;for(;this._hasOlderMessages&&o<20;){await this.loadOlderMessages(),o++;const e=this._messages.find(e=>Math.abs(e.timestamp.getTime()-t)<2e3);if(e)return!0}return!1}pause(){this._stopUpdates(),this._active=!1,this._fetchDebounce&&(clearTimeout(this._fetchDebounce),this._fetchDebounce=null)}async resume(){this._entityId&&!this._active&&(this._active=!0,this._startUpdates(this._entityId),await this._fetchMessages(this._entityId))}destroy(){this._stopUpdates(),this._active=!1,this._fetchDebounce&&(clearTimeout(this._fetchDebounce),this._fetchDebounce=null),this._onChange=null}async _fetchMessages(e){if(this._hass){this._loading=!0,this._notify();try{var t;const i=50,o=await this._hass.callWS({type:"meshcore_chattx/get_stored_messages",entity_id:e,limit:i}),r=o.messages.map(dp);this._hasOlderMessages=o.has_more;const s=new Set(r.map(e=>e.id)),a=this._messages.filter(e=>{if(e.id.startsWith("optimistic_")){const t=r.some(t=>t.sender===e.sender&&t.text===e.text);return!t}if(e.id.startsWith("rt_")){const t=e.id.substring(3);return!s.has(t)}return!1});this._messages=[...r,...a],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const n=null!==(t=this._config.max_messages)&&void 0!==t?t:500;this._messages.length>n&&(this._messages=this._messages.slice(-n),this._hasOlderMessages=!0),this._error=null,this._retryCount=0}catch(e){const t=e instanceof Error?e.message:String(e);this._error=Zl("Failed to fetch messages: {message}",{message:t}),this._retryCount++}finally{this._loading=!1,this._notify()}}}async _fetchAroundAnchor(e,t){if(this._hass){this._loading=!0,this._notify();try{var i;const o=await async function(e,t,i,o=25,r=50){return e.callWS({type:"meshcore_chattx/get_messages_around",entity_id:t,anchor_id:i,before_limit:o,after_limit:r})}(this._hass,e,t),r=o.messages.map(dp);this._hasOlderMessages=o.has_more_before,this._hasNewerMessages=o.has_more_after;const s=new Set(r.map(e=>e.id)),a=this._messages.filter(e=>{if(e.id.startsWith("optimistic_")){const t=r.some(t=>t.sender===e.sender&&t.text===e.text);return!t}if(e.id.startsWith("rt_")){const t=e.id.substring(3);return!s.has(t)}return!1});this._messages=[...r,...a],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const n=null!==(i=this._config.max_messages)&&void 0!==i?i:500;this._messages.length>n&&(this._messages=this._messages.slice(-n),this._hasOlderMessages=!0),this._error=null,this._retryCount=0}catch(e){const t=e instanceof Error?e.message:String(e);this._error=Zl("Failed to fetch messages: {message}",{message:t}),this._retryCount++}finally{this._loading=!1,this._notify()}}}_startUpdates(e){this._startPolling(e),this._subscribeRealtime(e).catch(()=>{})}async _subscribeRealtime(e){if(!this._hass)return;const t=[];try{const i=await this._hass.connection.subscribeEvents(t=>{t.data.entity_id===e&&this._handleRealtimeMessage(t.data)},"meshcore_message");t.push(i);const o=await this._hass.connection.subscribeEvents(t=>{t.data.entity_id===e&&this._handleDeliveryUpdate(t.data)},"meshcore_delivery_update");t.push(o),this._realtimeSubscriptions=t}catch(e){throw t.forEach(e=>e()),e}}_handleRealtimeMessage(e){var t,i;if("direct"===e.message_type&&!e.outgoing&&Wc(e.pubkey_prefix))return;const o=null!==(t=e.sender_name)&&void 0!==t?t:e.sender,r=null!==(i=e.message)&&void 0!==i?i:e.text;if(o===this._config.node_name){if(o&&r&&!1!==e.outgoing){const t=e.ack_received,i=e.repeater_count,a=e.rx_log_data,n=e.message_type;let l;var s;if("dm"===n||"direct"===n)l={status:!0===t?"delivered":"sent",ackReceived:null!=t?t:void 0};else l={status:"sent",repeaterCount:null!=i?i:null!==(s=null==a?void 0:a.length)&&void 0!==s?s:0};for(let e=this._messages.length-1;e>=0;e--){const t=this._messages[e];if(t.id.startsWith("optimistic_")&&t.sender===o&&t.text===r){t.deliveryStatus=l,a&&(t.rxLogData=a),this._notify();break}}}!this._entityId||this._hasNewerMessages||this._hasOlderMessages||this._debouncedFetch(this._entityId)}else{if(o&&r){let t=r.replace(Sc,"");const i=o+": ";t.startsWith(i)&&(t=t.substring(i.length));const s=e.timestamp||(new Date).toISOString(),a=new Date(s),n=function(e,t,i){return ap(`${e}|${t}|${i}`).substring(0,12)}(s,o,t),l=`rt_${n}`,d=this._messages.some(e=>e.id===l||e.id===n);if(!d){const i=np(t),s=e.rx_log_data,n={id:l,sender:o,text:t,timestamp:a,isOutgoing:!1,isSystem:!1,raw:r,mentions:i,rxLogData:s&&s.length>0?s:void 0,...lp(s)};this._messages.push(n),this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime()),this._userAtBottom&&!this._hasNewerMessages||this._newMessagesWhileAway++,this._notify()}}!this._entityId||this._hasNewerMessages||this._hasOlderMessages||this._debouncedFetch(this._entityId)}}_debouncedFetch(e){this._fetchDebounce&&clearTimeout(this._fetchDebounce),this._fetchDebounce=setTimeout(async()=>{if(this._fetchDebounce=null,this._active)try{await this._fetchMessages(e)}catch(e){}},500)}_handleDeliveryUpdate(e){const t=e.rx_log_data;if(e.progressive&&t&&t.length>0){const i=e.sender_name,o=e.message,r=e.timestamp;if(i&&o){const e=r?new Date(r).getTime():0;for(let r=this._messages.length-1;r>=0;r--){const s=this._messages[r];if(!s.isOutgoing&&s.sender===i&&s.text===o&&(!e||Math.abs(s.timestamp.getTime()-e)<1e4))return s.rxLogData=t,s.repeaterCount=t.length,void this._notify()}}}const i=e.send_id,o=e.status,r=e.repeater_count,s=e.ack_received,a=e.round_trip_ms,n=e.progressive;if(!i)return;let l,d;l=o||(!0===s?"delivered":!n||void 0!==r&&0!==r?"sent":"waiting");for(let e=this._messages.length-1;e>=0;e--)if(this._messages[e].isOutgoing){d=this._messages[e];break}d&&(d.deliveryStatus={status:l,repeaterCount:r,ackReceived:s,roundTripMs:a},void 0!==r&&(d.repeaterCount=r),this._notify())}async _pollFetch(e){if(this._hass&&!this._hasNewerMessages)try{let i;for(let e=this._messages.length-1;e>=0;e--){const t=this._messages[e].id;if(!t.startsWith("rt_")&&!t.startsWith("optimistic_")){i=t;break}}const o={type:"meshcore_chattx/get_stored_messages",entity_id:e,limit:50};i&&(o.after=i);const r=await this._hass.callWS(o);if(0===r.messages.length)return this._error=null,void(this._retryCount=0);const s=r.messages.map(dp),a=new Set(this._messages.map(e=>e.id)),n=s.filter(e=>!a.has(e.id));if(n.length>0){var t;const e=new Set(n.map(e=>e.id));this._messages=this._messages.filter(t=>!t.id.startsWith("rt_")||!e.has(t.id.substring(3))),this._messages=this._messages.filter(e=>!e.id.startsWith("optimistic_")||!n.some(t=>t.sender===e.sender&&t.text===e.text)),this._messages=[...this._messages,...n],this._messages.sort((e,t)=>e.timestamp.getTime()-t.timestamp.getTime());const i=null!==(t=this._config.max_messages)&&void 0!==t?t:500;this._messages.length>i&&(this._messages=this._messages.slice(-i),this._hasOlderMessages=!0),this._notify()}this._error=null,this._retryCount=0}catch(e){this._retryCount++}}_startPolling(e){const t=()=>{if(!this._active)return;const i=this._retryCount>=5?6e4:3e4;this._pollTimer=setTimeout(async()=>{if(this._active){try{await this._pollFetch(e)}catch(e){}t()}},i)};t()}_stopUpdates(){this._pollTimer&&(clearTimeout(this._pollTimer),this._pollTimer=null);for(const e of this._realtimeSubscriptions)e();this._realtimeSubscriptions=[]}_notify(){this._onChange&&this._onChange()}}const gp=new TextEncoder,mp="chattx-strip-diacritics",vp="chattx-show-contact-ids",fp=/[\u{1F1E6}-\u{1F1FF}][\u{1F1E6}-\u{1F1FF}]|[0-9#*]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299\u{1F004}\u{1F02C}-\u{1F02F}\u{1F094}-\u{1F09F}\u{1F0AF}\u{1F0B0}\u{1F0C0}\u{1F0CF}\u{1F0D0}\u{1F0F6}-\u{1F0FF}\u{1F170}\u{1F171}\u{1F17E}\u{1F17F}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F1AE}-\u{1F1E5}\u{1F201}-\u{1F20F}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F23A}\u{1F23C}-\u{1F23F}\u{1F249}-\u{1F25F}\u{1F266}-\u{1F321}\u{1F324}-\u{1F393}\u{1F396}\u{1F397}\u{1F399}-\u{1F39B}\u{1F39E}-\u{1F3F0}\u{1F3F3}-\u{1F3F5}\u{1F3F7}-\u{1F3FA}\u{1F400}-\u{1F4FD}\u{1F4FF}-\u{1F53D}\u{1F549}-\u{1F54E}\u{1F550}-\u{1F567}\u{1F56F}\u{1F570}\u{1F573}-\u{1F57A}\u{1F587}\u{1F58A}-\u{1F58D}\u{1F590}\u{1F595}\u{1F596}\u{1F5A4}\u{1F5A5}\u{1F5A8}\u{1F5B1}\u{1F5B2}\u{1F5BC}\u{1F5C2}-\u{1F5C4}\u{1F5D1}-\u{1F5D3}\u{1F5DC}-\u{1F5DE}\u{1F5E1}\u{1F5E3}\u{1F5E8}\u{1F5EF}\u{1F5F3}\u{1F5FA}-\u{1F64F}\u{1F680}-\u{1F6C5}\u{1F6CB}-\u{1F6D2}\u{1F6D5}-\u{1F6E5}\u{1F6E9}\u{1F6EB}-\u{1F6F0}\u{1F6F3}-\u{1F6FF}\u{1F7DA}-\u{1F7FF}\u{1F80C}-\u{1F80F}\u{1F848}-\u{1F84F}\u{1F85A}-\u{1F85F}\u{1F888}-\u{1F88F}\u{1F8AE}\u{1F8AF}\u{1F8BC}-\u{1F8BF}\u{1F8C2}-\u{1F8CF}\u{1F8D9}-\u{1F8FF}\u{1F90C}-\u{1F93A}\u{1F93C}-\u{1F945}\u{1F947}-\u{1F9FF}\u{1FA58}-\u{1FA5F}\u{1FA6E}-\u{1FAFF}\u{1FC00}-\u{1FFFD}](?:\uFE0F|[\u{1F3FB}-\u{1F3FF}])?(?:\u200D[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299\u{1F004}\u{1F02C}-\u{1F02F}\u{1F094}-\u{1F09F}\u{1F0AF}\u{1F0B0}\u{1F0C0}\u{1F0CF}\u{1F0D0}\u{1F0F6}-\u{1F0FF}\u{1F170}\u{1F171}\u{1F17E}\u{1F17F}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F1AE}-\u{1F1E5}\u{1F201}-\u{1F20F}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F23A}\u{1F23C}-\u{1F23F}\u{1F249}-\u{1F25F}\u{1F266}-\u{1F321}\u{1F324}-\u{1F393}\u{1F396}\u{1F397}\u{1F399}-\u{1F39B}\u{1F39E}-\u{1F3F0}\u{1F3F3}-\u{1F3F5}\u{1F3F7}-\u{1F3FA}\u{1F400}-\u{1F4FD}\u{1F4FF}-\u{1F53D}\u{1F549}-\u{1F54E}\u{1F550}-\u{1F567}\u{1F56F}\u{1F570}\u{1F573}-\u{1F57A}\u{1F587}\u{1F58A}-\u{1F58D}\u{1F590}\u{1F595}\u{1F596}\u{1F5A4}\u{1F5A5}\u{1F5A8}\u{1F5B1}\u{1F5B2}\u{1F5BC}\u{1F5C2}-\u{1F5C4}\u{1F5D1}-\u{1F5D3}\u{1F5DC}-\u{1F5DE}\u{1F5E1}\u{1F5E3}\u{1F5E8}\u{1F5EF}\u{1F5F3}\u{1F5FA}-\u{1F64F}\u{1F680}-\u{1F6C5}\u{1F6CB}-\u{1F6D2}\u{1F6D5}-\u{1F6E5}\u{1F6E9}\u{1F6EB}-\u{1F6F0}\u{1F6F3}-\u{1F6FF}\u{1F7DA}-\u{1F7FF}\u{1F80C}-\u{1F80F}\u{1F848}-\u{1F84F}\u{1F85A}-\u{1F85F}\u{1F888}-\u{1F88F}\u{1F8AE}\u{1F8AF}\u{1F8BC}-\u{1F8BF}\u{1F8C2}-\u{1F8CF}\u{1F8D9}-\u{1F8FF}\u{1F90C}-\u{1F93A}\u{1F93C}-\u{1F945}\u{1F947}-\u{1F9FF}\u{1FA58}-\u{1FA5F}\u{1FA6E}-\u{1FAFF}\u{1FC00}-\u{1FFFD}](?:\uFE0F|[\u{1F3FB}-\u{1F3FF}])?)*/gu,yp=/[^0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088F\u0897-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5C\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDC-\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u17F0-\u17F9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u20D0-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA827\uA82C\uA830-\uA835\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10107}-\u{10133}\u{10140}-\u{10178}\u{1018A}\u{1018B}\u{101FD}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{102E0}-\u{102FB}\u{10300}-\u{10323}\u{1032D}-\u{1034A}\u{10350}-\u{1037A}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{103D1}-\u{103D5}\u{10400}-\u{1049D}\u{104A0}-\u{104A9}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{105C0}-\u{105F3}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10858}-\u{10876}\u{10879}-\u{1089E}\u{108A7}-\u{108AF}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{108FB}-\u{1091B}\u{10920}-\u{10939}\u{10940}-\u{10959}\u{10980}-\u{109B7}\u{109BC}-\u{109CF}\u{109D2}-\u{10A03}\u{10A05}\u{10A06}\u{10A0C}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A38}-\u{10A3A}\u{10A3F}-\u{10A48}\u{10A60}-\u{10A7E}\u{10A80}-\u{10A9F}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE6}\u{10AEB}-\u{10AEF}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B58}-\u{10B72}\u{10B78}-\u{10B91}\u{10BA9}-\u{10BAF}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10CFA}-\u{10D27}\u{10D30}-\u{10D39}\u{10D40}-\u{10D65}\u{10D69}-\u{10D6D}\u{10D6F}-\u{10D85}\u{10E60}-\u{10E7E}\u{10E80}-\u{10EA9}\u{10EAB}\u{10EAC}\u{10EB0}\u{10EB1}\u{10EC2}-\u{10EC7}\u{10EFA}-\u{10F27}\u{10F30}-\u{10F54}\u{10F70}-\u{10F85}\u{10FB0}-\u{10FCB}\u{10FE0}-\u{10FF6}\u{11000}-\u{11046}\u{11052}-\u{11075}\u{1107F}-\u{110BA}\u{110C2}\u{110D0}-\u{110E8}\u{110F0}-\u{110F9}\u{11100}-\u{11134}\u{11136}-\u{1113F}\u{11144}-\u{11147}\u{11150}-\u{11173}\u{11176}\u{11180}-\u{111C4}\u{111C9}-\u{111CC}\u{111CE}-\u{111DA}\u{111DC}\u{111E1}-\u{111F4}\u{11200}-\u{11211}\u{11213}-\u{11237}\u{1123E}-\u{11241}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112EA}\u{112F0}-\u{112F9}\u{11300}-\u{11303}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133B}-\u{11344}\u{11347}\u{11348}\u{1134B}-\u{1134D}\u{11350}\u{11357}\u{1135D}-\u{11363}\u{11366}-\u{1136C}\u{11370}-\u{11374}\u{11380}-\u{11389}\u{1138B}\u{1138E}\u{11390}-\u{113B5}\u{113B7}-\u{113C0}\u{113C2}\u{113C5}\u{113C7}-\u{113CA}\u{113CC}-\u{113D3}\u{113E1}\u{113E2}\u{11400}-\u{1144A}\u{11450}-\u{11459}\u{1145E}-\u{11461}\u{11480}-\u{114C5}\u{114C7}\u{114D0}-\u{114D9}\u{11580}-\u{115B5}\u{115B8}-\u{115C0}\u{115D8}-\u{115DD}\u{11600}-\u{11640}\u{11644}\u{11650}-\u{11659}\u{11680}-\u{116B8}\u{116C0}-\u{116C9}\u{116D0}-\u{116E3}\u{11700}-\u{1171A}\u{1171D}-\u{1172B}\u{11730}-\u{1173B}\u{11740}-\u{11746}\u{11800}-\u{1183A}\u{118A0}-\u{118F2}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{11935}\u{11937}\u{11938}\u{1193B}-\u{11943}\u{11950}-\u{11959}\u{119A0}-\u{119A7}\u{119AA}-\u{119D7}\u{119DA}-\u{119E1}\u{119E3}\u{119E4}\u{11A00}-\u{11A3E}\u{11A47}\u{11A50}-\u{11A99}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11B60}-\u{11B67}\u{11BC0}-\u{11BE0}\u{11BF0}-\u{11BF9}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C36}\u{11C38}-\u{11C40}\u{11C50}-\u{11C6C}\u{11C72}-\u{11C8F}\u{11C92}-\u{11CA7}\u{11CA9}-\u{11CB6}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D36}\u{11D3A}\u{11D3C}\u{11D3D}\u{11D3F}-\u{11D47}\u{11D50}-\u{11D59}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D8E}\u{11D90}\u{11D91}\u{11D93}-\u{11D98}\u{11DA0}-\u{11DA9}\u{11DB0}-\u{11DDB}\u{11DE0}-\u{11DE9}\u{11EE0}-\u{11EF6}\u{11F00}-\u{11F10}\u{11F12}-\u{11F3A}\u{11F3E}-\u{11F42}\u{11F50}-\u{11F5A}\u{11FB0}\u{11FC0}-\u{11FD4}\u{12000}-\u{12399}\u{12400}-\u{1246E}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342F}\u{13440}-\u{13455}\u{13460}-\u{143FA}\u{14400}-\u{14646}\u{16100}-\u{16139}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A60}-\u{16A69}\u{16A70}-\u{16ABE}\u{16AC0}-\u{16AC9}\u{16AD0}-\u{16AED}\u{16AF0}-\u{16AF4}\u{16B00}-\u{16B36}\u{16B40}-\u{16B43}\u{16B50}-\u{16B59}\u{16B5B}-\u{16B61}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16D40}-\u{16D6C}\u{16D70}-\u{16D79}\u{16E40}-\u{16E96}\u{16EA0}-\u{16EB8}\u{16EBB}-\u{16ED3}\u{16F00}-\u{16F4A}\u{16F4F}-\u{16F87}\u{16F8F}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{16FE4}\u{16FF0}-\u{16FF6}\u{17000}-\u{18CD5}\u{18CFF}-\u{18D1E}\u{18D80}-\u{18DF2}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B132}\u{1B150}-\u{1B152}\u{1B155}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1BC9D}\u{1BC9E}\u{1CCF0}-\u{1CCF9}\u{1CF00}-\u{1CF2D}\u{1CF30}-\u{1CF46}\u{1D165}-\u{1D169}\u{1D16D}-\u{1D172}\u{1D17B}-\u{1D182}\u{1D185}-\u{1D18B}\u{1D1AA}-\u{1D1AD}\u{1D242}-\u{1D244}\u{1D2C0}-\u{1D2D3}\u{1D2E0}-\u{1D2F3}\u{1D360}-\u{1D378}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1D7CE}-\u{1D7FF}\u{1DA00}-\u{1DA36}\u{1DA3B}-\u{1DA6C}\u{1DA75}\u{1DA84}\u{1DA9B}-\u{1DA9F}\u{1DAA1}-\u{1DAAF}\u{1DF00}-\u{1DF1E}\u{1DF25}-\u{1DF2A}\u{1E000}-\u{1E006}\u{1E008}-\u{1E018}\u{1E01B}-\u{1E021}\u{1E023}\u{1E024}\u{1E026}-\u{1E02A}\u{1E030}-\u{1E06D}\u{1E08F}\u{1E100}-\u{1E12C}\u{1E130}-\u{1E13D}\u{1E140}-\u{1E149}\u{1E14E}\u{1E290}-\u{1E2AE}\u{1E2C0}-\u{1E2F9}\u{1E4D0}-\u{1E4F9}\u{1E5D0}-\u{1E5FA}\u{1E6C0}-\u{1E6DE}\u{1E6E0}-\u{1E6F5}\u{1E6FE}\u{1E6FF}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E8C7}-\u{1E8D6}\u{1E900}-\u{1E94B}\u{1E950}-\u{1E959}\u{1EC71}-\u{1ECAB}\u{1ECAD}-\u{1ECAF}\u{1ECB1}-\u{1ECB4}\u{1ED01}-\u{1ED2D}\u{1ED2F}-\u{1ED3D}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{1F100}-\u{1F10C}\u{1FBF0}-\u{1FBF9}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B81D}\u{2B820}-\u{2CEAD}\u{2CEB0}-\u{2EBE0}\u{2EBF0}-\u{2EE5D}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}\u{31350}-\u{33479}\u{E0100}-\u{E01EF}]+/u,bp=e=>Array.from(e)[0].toUpperCase();function _p(e,t){var i;const o=(null!=e?e:"").normalize("NFC"),r=null!==(i=o.match(fp))&&void 0!==i?i:[],s=o.replace(fp," ").split(yp).filter(Boolean),a=r[r.length-1];return a?`${s.length>0?bp(s[0]):""}${a}`:0===s.length?t:s.length>1?bp(s[0])+bp(s[1]):Array.from(s[0]).slice(0,2).join("").toUpperCase()}let xp=class extends yc{constructor(){super(...arguments),this.conversations=[],this.activeId=null,this.unreadCounts={},this.nodePrefix=null,this.activity={},this.showContactIds=!0,this._ageTimer=null,this._activeFilter="all",this._filteredConversations=[]}connectedCallback(){super.connectedCallback(),this._ageTimer=setInterval(()=>this.requestUpdate(),6e4)}disconnectedCallback(){super.disconnectedCallback(),this._ageTimer&&clearInterval(this._ageTimer),this._ageTimer=null}updated(e){(e.has("conversations")||e.has("_activeFilter"))&&this._updateFiltered()}render(){return Zd(n||(n=Rl`
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
    `),Zl("Chats"),Zl("Manage contacts & channels"),Zl("Manage contacts and channels"),()=>this.dispatchEvent(new CustomEvent("manage-requested",{bubbles:!0,composed:!0})),Zl("Conversation filter"),this._renderFilterBtn("all",Zl("All")),this._renderFilterBtn("unread",Zl("Unread")),this._renderFilterBtn("dms",Zl("DMs")),this._renderFilterBtn("channels",Zl("Channels")),Zl("Conversations"),this._onListKeyDown,this._filteredConversations.length>0?this._filteredConversations.map((e,t)=>this._renderConversation(e,t)):Zd(l||(l=Rl`
              <div class="empty-state">
                <div class="empty-text">
                  ${0}
                </div>
              </div>
            `),this._emptyMessage()))}_onListKeyDown(e){var t;const i=e.key;if("ArrowDown"!==i&&"ArrowUp"!==i&&"Home"!==i&&"End"!==i&&"Enter"!==i&&" "!==i)return;const o=this.shadowRoot;if(!o)return;const r=Array.from(o.querySelectorAll(".conversation-item"));if(0===r.length)return;const s=o.activeElement;let a=s?r.indexOf(s):-1;"Enter"!==i&&" "!==i?(e.preventDefault(),"Home"===i?a=0:"End"===i?a=r.length-1:"ArrowDown"===i?a=a<0?0:Math.min(a+1,r.length-1):"ArrowUp"===i&&(a=a<0?r.length-1:Math.max(a-1,0)),null===(t=r[a])||void 0===t||t.focus()):s&&a>=0&&(e.preventDefault(),s.click())}_renderFilterBtn(e,t){const i=this._activeFilter===e;return Zd(d||(d=Rl`
      <button
        class="filter-btn ${0}"
        role="tab"
        aria-selected=${0}
        @click=${0}>
        ${0}
      </button>
    `),i?"active":"",i?"true":"false",()=>{this._activeFilter=e},t)}_emptyMessage(){switch(this._activeFilter){case"unread":return Zl("No unread conversations");case"dms":return Zl("No direct messages");case"channels":return Zl("No channels");default:return Zl("No conversations yet")}}_renderConversation(e,t){const i="pubkey_prefix"in e,o=i?e.pubkey_prefix:String(e.channel_idx),r=i?e.adv_name:e.name,s=function(e,t){const i=Bc(e);if(0===i)return"";const o=t-i;return o<6e4?Zl("just now"):Zl("{amount} ago",{amount:o<Oc?`${Math.floor(o/6e4)} min`:o>1728e5?`${Math.floor(o/864e5)} d`:`${Math.floor(o/Oc)} h`})}((a=e,n=this.activity,l=this.nodePrefix,Rc(n).get(zc(a,l))),Date.now());var a,n,l;const d=i?e.pubkey_prefix:Zl("Channel {index}",{index:e.channel_idx}),g=[this.showContactIds?d:"",s].filter(Boolean).join(" · "),m=_p(r,i?e.pubkey_prefix.substring(0,2).toUpperCase():`#${e.channel_idx}`),v=this.activeId===o,f=this._getUnreadCount(o),y=[r,g,f>0?`${f} unread`:""].filter(Boolean).join(", "),b=this._filteredConversations.some(e=>("pubkey_prefix"in e?e.pubkey_prefix:String(e.channel_idx))===this.activeId);return Zd(c||(c=Rl`
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
        </div>
        ${0}
      </div>
    `),v?"conversation-item active":"conversation-item",v||!b&&0===t?"0":"-1",v?"true":"false",y,()=>this.dispatchEvent(new CustomEvent("conversation-selected",{detail:{id:o,isContact:i}})),i?"":"channel",m,r,g?Zd(p||(p=Rl`<div class="conversation-detail">${0}</div>`),g):"",f>0?Zd(h||(h=Rl`<div class="unread-badge" aria-hidden="true">${0}</div>`),f):Zd(u||(u=Rl`<span class="chevron" aria-hidden="true">›</span>`)))}_getUnreadCount(e){return this.unread?this.unread.badgeCount(e,this.nodePrefix):0}_updateFiltered(){switch(this._activeFilter){case"all":this._filteredConversations=[...this.conversations];break;case"unread":this._filteredConversations=this.conversations.filter(e=>{const t="pubkey_prefix"in e?e.pubkey_prefix:String(e.channel_idx);return this._getUnreadCount(t)>0});break;case"dms":this._filteredConversations=this.conversations.filter(e=>"pubkey_prefix"in e);break;case"channels":this._filteredConversations=this.conversations.filter(e=>!("pubkey_prefix"in e))}}};xp.styles=md(g||(g=Rl`
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
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
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
  `)),Ol([$c({type:Array})],xp.prototype,"conversations",void 0),Ol([$c({type:String})],xp.prototype,"activeId",void 0),Ol([$c({attribute:!1})],xp.prototype,"unread",void 0),Ol([$c({type:Object})],xp.prototype,"unreadCounts",void 0),Ol([$c({type:String})],xp.prototype,"nodePrefix",void 0),Ol([$c({type:Object})],xp.prototype,"activity",void 0),Ol([$c({type:Boolean})],xp.prototype,"showContactIds",void 0),Ol([kc()],xp.prototype,"_activeFilter",void 0),Ol([kc()],xp.prototype,"_filteredConversations",void 0),xp=Ol([_c("chattx-conversation-list")],xp);const wp=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(","),$p=[];let kp=!1;function Cp(){kp||(kp=!0,document.addEventListener("keydown",Fp,!0))}function Fp(e){0!==$p.length&&$p[$p.length-1]._handleKeyDown(e)}class Sp{constructor(e,t){this.host=e,this.opts=t,this._wasOpen=!1,this._previousActive=null,this._inStack=!1,this.host.addController(this),Cp()}hostConnected(){Cp()}hostDisconnected(){this._inStack&&this._popStack(),this._previousActive=null,this._wasOpen=!1}hostUpdated(){const e=this.opts.isOpen();if(e&&!this._wasOpen)this._previousActive=this._currentDocumentActive(),this._pushStack(),this._focusFirstSoon();else if(!e&&this._wasOpen){this._popStack();const e=this._previousActive;if(this._previousActive=null,e&&e.isConnected&&"function"==typeof e.focus)try{e.focus()}catch(e){}}this._wasOpen=e}_pushStack(){this._inStack||($p.push(this),this._inStack=!0)}_popStack(){const e=$p.indexOf(this);e>=0&&$p.splice(e,1),this._inStack=!1}_getFocusables(){var e,t,i;const o=null!==(e=null===(t=(i=this.opts).getScope)||void 0===t?void 0:t.call(i))&&void 0!==e?e:this.host.shadowRoot;return o?Array.from(o.querySelectorAll(wp)).filter(e=>!(e.hasAttribute("aria-hidden")||e.hidden||null===e.offsetParent&&0===e.getClientRects().length)):[]}_focusFirstSoon(){queueMicrotask(()=>{var e,t,i;if(!this.opts.isOpen())return;const o=null!==(e=null===(t=(i=this.opts).getScope)||void 0===t?void 0:t.call(i))&&void 0!==e?e:this.host.shadowRoot;if(o&&this._scopeContainsFocus(o))return;const r=this._getFocusables();if(0!==r.length)try{r[0].focus()}catch(e){}})}_scopeContainsFocus(e){let t=document.activeElement;for(;t;){if(t===e)return!0;if(e.host===t)return!0;if("contains"in e&&e.contains(t))return!0;const i=t.shadowRoot;if(!i||!i.activeElement)break;t=i.activeElement}return!1}_currentDocumentActive(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_handleKeyDown(e){var t,i,o;if(!this.opts.isOpen())return;if("Escape"===e.key)return e.preventDefault(),e.stopPropagation(),void this.opts.onEscape();if("Tab"!==e.key)return;const r=this._getFocusables();if(0===r.length)return;const s=null!==(t=null===(i=(o=this.opts).getScope)||void 0===i?void 0:i.call(o))&&void 0!==t?t:this.host.shadowRoot,a=s?this._findFocusedInScope(s):null,n=a?r.indexOf(a):-1;let l;l=e.shiftKey?n<=0?r.length-1:n-1:-1===n||n>=r.length-1?0:n+1,e.preventDefault(),e.stopPropagation();try{r[l].focus()}catch(e){}}_findFocusedInScope(e){let t=document.activeElement;for(;t;){if(e===t||"contains"in e&&e.contains(t)){if(t.shadowRoot&&t.shadowRoot.activeElement){t=t.shadowRoot.activeElement;continue}return t}if(e.host===t){t=e.activeElement;continue}const i=t.shadowRoot;if(!i||!i.activeElement)break;t=i.activeElement}return null}}function Ap(e,t){new Sp(e,t)}let Dp=class extends yc{constructor(){super(),this.open=!1,this.narrow=!1,this.editMode=!1,this.initialChannelIdx=0,this.initialChannelName="",this.initialScope="",this.initialExcludeFromTotal=!1,this.initialKey="",this.availableIndices=[],this._channelIdx=0,this._channelName="",this._customKey="",this._autoKey=!0,this._scope="",this._excludeFromTotal=!1,this._availableScopes=null,this._globalAllowed=!1,this._saving=!1,this._error=null,this._initialized=!1,Ap(this,{isOpen:()=>this.open,onEscape:()=>this._onCancel()})}willUpdate(e){if(e.has("open")&&this.open&&!this._initialized){if(this.editMode){this._channelIdx=this.initialChannelIdx,this._channelName=this.initialChannelName,this._scope=this.initialScope,this._excludeFromTotal=this.initialExcludeFromTotal;const e=ap(this.initialChannelName).slice(0,32);this.initialKey&&this.initialKey.toLowerCase()!==e?(this._autoKey=!1,this._customKey=this.initialKey.toLowerCase()):(this._autoKey=!0,this._customKey="")}else this._channelIdx=this.availableIndices.length>0?this.availableIndices[0]:0;this._initialized=!0,this._loadScopes()}e.has("open")&&!this.open&&(this._initialized=!1)}async _loadScopes(){if(this._availableScopes=null,!this.hass)return this._availableScopes=[],void(this._globalAllowed=!1);const e=await Zc(this.hass,this.entryId);this._availableScopes=e.scopes,this._globalAllowed=e.global}render(){if(!this.open)return;const e=this._customKey.length,t=32===e||0===e||this._autoKey;return Zd(m||(m=Rl`
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
    `),this._onOverlayClick,this.editMode?Zl("Edit channel"):Zl("Add channel"),this.editMode?"Edit Channel":"Add Channel",this._error?Zd(v||(v=Rl`<div style="padding: 12px; background: rgba(219, 68, 55, 0.1); border-radius: 6px; color: var(--error-color, #db4437); font-size: 13px; margin-bottom: 16px;">
                  ${0}
                </div>`),this._error):"",Zl("Channel Index"),this.editMode?Zd(f||(f=Rl`
                    <select class="form-select" disabled>
                      <option value=${0} selected>${0}</option>
                    </select>`),this._channelIdx,this._channelIdx):Zd(y||(y=Rl`
                    <select
                      class="form-select"
                      @change=${0}>
                      ${0}
                    </select>`),e=>{this._channelIdx=parseInt(e.target.value,10)},this.availableIndices.map(e=>Zd(b||(b=Rl`
                        <option value=${0} ?selected=${0}>${0}</option>
                      `),e,e===this._channelIdx,e))),this.editMode?"Channel index cannot be changed":"Select an available channel slot",Zl("Channel Name"),Zl("e.g., general, alerts"),this._channelName,e=>{this._channelName=e.target.value},Zl("Friendly name for the channel"),Zl("Region scope"),this._renderScopeField(),this._autoKey,e=>{this._autoKey=e.target.checked},Zl("Auto-generate key from name"),Zl("Auto-key generates SHA256 hash of the channel name"),this._autoKey?"":Zd(_||(_=Rl`
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
                `),Zl("Custom Key"),Zl("32 hex characters (a-f, 0-9)"),this._customKey,e=>{const t=e.target.value.toLowerCase().replace(/[^a-f0-9]/g,"");this._customKey=t.slice(0,32)},this._customKey.length,t?Zl("Valid hex key (16 bytes / 128-bit AES)"):`Invalid: expected 32 characters, got ${e}`),this._excludeFromTotal,e=>{this._excludeFromTotal=e.target.checked},Zl("Leave out of the Chat tab total"),Zl("New messages in this channel still show on its own badge, but the number on the Chat tab does not count them. Useful for busy channels such as test or bot channels."),this._saving,this._onCancel,Zl("Cancel"),!this._channelName||this._saving||!this._autoKey&&!t||!this.editMode&&0===this.availableIndices.length,this._onSave,this._saving?Zl("Saving..."):Zl("Save"))}_renderScopeField(){const e=this._availableScopes;if(null===e)return Zd(x||(x=Rl`
        <select class="form-select scope-select" disabled>
          <option selected>${0}</option>
        </select>
      `),Zl("Loading…"));const t=this._globalAllowed?"*":"",i=!this._scope||"*"===this._scope,o=!!this._scope&&"*"!==this._scope&&!e.includes(this._scope);return 0!==e.length||o||this._globalAllowed?Zd($||($=Rl`
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
    `),e=>{this._scope=e.target.value},t,i,Zl("All regions (global flood)"),o?Zd(k||(k=Rl`<option value=${0} selected>${0} (not in allowlist)</option>`),this._scope,this._scope):"",e.map(e=>Zd(C||(C=Rl`
            <option value=${0} ?selected=${0}>${0}</option>
          `),e,e===this._scope,e)),Zl('Send this channel\'s messages only through repeaters configured for the selected region. "All regions" floods the whole mesh.')):Zd(w||(w=Rl`
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
      `),Zl("All regions (global flood)"),Zl("No region scopes are configured yet. Add scope names in the"),Zl("MeshCore integration"))}async _onSave(){if(this.hass&&this._channelName){this._saving=!0,this._error=null;try{(await async function(e,t,i,o,r,s,a){try{const n={type:"meshcore_chattx/set_channel",channel_idx:t,name:i};return o&&(n.key=o),r&&(n.entry_id=r),void 0!==s&&(n.scope=s),void 0!==a&&(n.exclude_from_total=a),await e.callWS(n)}catch(e){return{success:!1}}}(this.hass,this._channelIdx,this._channelName,this._autoKey?void 0:this._customKey,this.entryId,this._scope,this._excludeFromTotal)).success?(this.dispatchEvent(new CustomEvent("channel-saved",{detail:{channelIdx:this._channelIdx,name:this._channelName,scope:this._scope},bubbles:!0})),this._reset()):this._error=Zl("Failed to save channel")}catch(e){this._error=Zl("Error: {error}",{error:String(e)})}finally{this._saving=!1}}}_onCancel(){this._reset(),this.dispatchEvent(new CustomEvent("close",{bubbles:!0}))}_onOverlayClick(e){e.target===e.currentTarget&&this._onCancel()}_reset(){this._channelIdx=0,this._channelName="",this._customKey="",this._autoKey=!0,this._scope="",this._excludeFromTotal=!1,this._availableScopes=null,this._globalAllowed=!1,this._error=null}};Dp.styles=[Fc,md(F||(F=Rl`
      :host {
        display: block;
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
    `))],Ol([$c({type:Boolean})],Dp.prototype,"open",void 0),Ol([$c({type:Object})],Dp.prototype,"hass",void 0),Ol([$c({type:String})],Dp.prototype,"entryId",void 0),Ol([$c({type:Boolean})],Dp.prototype,"narrow",void 0),Ol([$c({type:Boolean})],Dp.prototype,"editMode",void 0),Ol([$c({type:Number})],Dp.prototype,"initialChannelIdx",void 0),Ol([$c({type:String})],Dp.prototype,"initialChannelName",void 0),Ol([$c({type:String})],Dp.prototype,"initialScope",void 0),Ol([$c({type:Boolean})],Dp.prototype,"initialExcludeFromTotal",void 0),Ol([$c({type:String})],Dp.prototype,"initialKey",void 0),Ol([$c({type:Array})],Dp.prototype,"availableIndices",void 0),Ol([kc()],Dp.prototype,"_channelIdx",void 0),Ol([kc()],Dp.prototype,"_channelName",void 0),Ol([kc()],Dp.prototype,"_customKey",void 0),Ol([kc()],Dp.prototype,"_autoKey",void 0),Ol([kc()],Dp.prototype,"_scope",void 0),Ol([kc()],Dp.prototype,"_excludeFromTotal",void 0),Ol([kc()],Dp.prototype,"_availableScopes",void 0),Ol([kc()],Dp.prototype,"_globalAllowed",void 0),Ol([kc()],Dp.prototype,"_saving",void 0),Ol([kc()],Dp.prototype,"_error",void 0),Dp=Ol([_c("chattx-channel-dialog")],Dp);let Ep=class extends yc{willUpdate(){this._tabInitialized||(this._tabInitialized=!0,this.initialTab&&(this._activeTab=this.initialTab))}constructor(){super(),this.narrow=!1,this.showContactIds=!0,this._tabInitialized=!1,this._activeTab="contacts",this._contacts=[],this._channels=[],this._searchQuery="",this._categoryFilter="all",this._typeFilter="all",this._loading=!1,this._actionInProgress=null,this._confirmingRemoveContact=null,this._confirmingRemoveChannel=null,this._channelDialogOpen=!1,this._editingChannel=null,this._maxChannels=4,Ap(this,{isOpen:()=>!0,onEscape:()=>this._close()})}connectedCallback(){super.connectedCallback(),this._loadData()}render(){var e,t,i,o,r,s,a,n,l;return Zd(S||(S=Rl`
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
    `),Zl("Manage contacts and channels"),e=>e.stopPropagation(),Zl("Manage"),Zl("Close"),this._close,this.showContactIds,e=>this.dispatchEvent(new CustomEvent("show-contact-ids-changed",{detail:{enabled:e.target.checked}})),Zl("Show contact IDs and channel numbers in the chat list"),"contacts"===this._activeTab?"active":"",()=>this._switchTab("contacts"),Zl("Contacts"),"channels"===this._activeTab?"active":"",()=>this._switchTab("channels"),Zl("Channels"),"contacts"===this._activeTab?Zd(A||(A=Rl`
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
            `),Zl("Show"),["all","added","discovered"].map(e=>Zd(D||(D=Rl`
                      <button
                        class="filter-chip ${0}"
                        @click=${0}
                      >
                        ${0}
                      </button>
                    `),this._categoryFilter===e?"active":"",()=>{this._categoryFilter=e},Zl("all"===e?"All":"added"===e?"Added":"Discovered"))),Zl("Type"),["all","clients","repeaters"].map(e=>Zd(E||(E=Rl`
                      <button
                        class="filter-chip ${0}"
                        @click=${0}
                      >
                        ${0}
                      </button>
                    `),this._typeFilter===e?"active":"",()=>{this._typeFilter=e},Zl("all"===e?"All":"clients"===e?"Clients":"Repeaters"))),Zl("Search contacts"),Zl("Search contacts..."),this._searchQuery,e=>{this._searchQuery=e.target.value}):"",this._loading?Zd(M||(M=Rl`<div class="loading-state">
                <div class="loading-spinner"></div>
                ${0}
              </div>`),Zl("Loading...")):"contacts"===this._activeTab?this._renderContacts():this._renderChannels(),this._channelDialogOpen?Zd(B||(B=Rl`
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
          `),!0,this.hass,this.entryId,this.narrow,!!this._editingChannel,null!==(e=null===(t=this._editingChannel)||void 0===t?void 0:t.channel_idx)&&void 0!==e?e:0,null!==(i=null===(o=this._editingChannel)||void 0===o?void 0:o.name)&&void 0!==i?i:"",null!==(r=null===(s=this._editingChannel)||void 0===s?void 0:s.scope)&&void 0!==r?r:"",!(null===(a=this._editingChannel)||void 0===a||!a.exclude_from_total),null!==(n=null===(l=this._editingChannel)||void 0===l||null===(l=l.settings)||void 0===l?void 0:l.channel_secret)&&void 0!==n?n:"",this._getAvailableIndices(),this._onChannelSaved,()=>{this._channelDialogOpen=!1,this._editingChannel=null}):"")}_renderContacts(){const e=this._filterContacts();if(0===e.length){const e=!!this._searchQuery||"all"!==this._categoryFilter||"all"!==this._typeFilter;return Zd(I||(I=Rl`
        <div class="empty-state">
          <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div>
          <div class="empty-text">
            ${0}
          </div>
        </div>
      `),Zl(e?"No contacts match":"No contacts discovered"))}const t=[...e].sort((e,t)=>e.added_to_node!==t.added_to_node?e.added_to_node?-1:1:e.adv_name.localeCompare(t.adv_name));return t.map(e=>this._renderContactItem(e))}_renderContactItem(e){const t=_p(e.adv_name,e.pubkey_prefix.substring(0,2).toUpperCase()),i=e.added_to_node,o=this._confirmingRemoveContact===e.public_key,r=this._actionInProgress===e.public_key;return Zd(z||(z=Rl`
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
    `),t,e.adv_name||"Unknown",e.pubkey_prefix,i?"added":"discovered",i?Zd(R||(R=Rl`<svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor" style="vertical-align: -1px; margin-right: 2px;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>${0}`),Zl("Added")):Zl("Discovered"),o?Zd(O||(O=Rl`
              <div class="confirm-inline">
                <span class="confirm-text">${0}</span>
                <button class="confirm-btn yes" @click=${0}>${0}</button>
                <button class="confirm-btn no" @click=${0}>${0}</button>
              </div>
            `),Zl("Remove?"),()=>this._doRemoveContact(e),Zl("Yes"),()=>{this._confirmingRemoveContact=null},Zl("No")):i?Zd(T||(T=Rl`
                <button
                  class="action-btn remove"
                  ?disabled=${0}
                  @click=${0}>
                  ${0}
                </button>
              `),r,()=>{this._confirmingRemoveContact=e.public_key},r?"...":Zl("Remove")):Zd(N||(N=Rl`
                <button
                  class="action-btn add"
                  ?disabled=${0}
                  @click=${0}>
                  ${0}
                </button>
              `),r,()=>this._doAddContact(e),r?"...":Zd(L||(L=Rl`<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style="vertical-align: -1px; margin-right: 4px;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>Add`))))}_renderChannels(){if(0===this._channels.length)return Zd(P||(P=Rl`
        <div class="empty-state">
          <div class="empty-icon">#</div>
          <div class="empty-text">${0}</div>
        </div>
        <button class="add-channel-btn" @click=${0}>
          + Add Channel
        </button>
      `),Zl("No channels configured"),this._openAddChannel);const e=this._confirmingRemoveChannel;return Zd(q||(q=Rl`
      ${0}
      <button class="add-channel-btn" @click=${0}>
        + Add Channel
      </button>
    `),this._channels.map(t=>{const i=e===t.channel_idx,o=this._actionInProgress===`ch-${t.channel_idx}`;return Zd(H||(H=Rl`
          <div class="channel-item">
            <div class="channel-icon">#</div>
            <div class="channel-info">
              <div class="channel-name">${0}</div>
              <div class="channel-idx">Index ${0}${0}</div>
            </div>
            ${0}
          </div>
        `),t.name,t.channel_idx,t.scope?Zd(j||(j=Rl` · scope: ${0}`),t.scope):"",i?Zd(V||(V=Rl`
                  <div class="confirm-inline">
                    <span class="confirm-text">${0}</span>
                    <button class="confirm-btn yes" @click=${0}>${0}</button>
                    <button class="confirm-btn no" @click=${0}>${0}</button>
                  </div>
                `),Zl("Remove?"),()=>this._doRemoveChannel(t),Zl("Yes"),()=>{this._confirmingRemoveChannel=null},Zl("No")):Zd(K||(K=Rl`
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
                `),o,()=>this._openEditChannel(t),Zl("Edit"),o,()=>{this._confirmingRemoveChannel=t.channel_idx},o?"...":Zl("Remove")))}),this._openAddChannel)}async _loadData(){if(this.hass){this._loading=!0;try{const[e,t]=await Promise.all([Nc(this.hass,this.entryId),Lc(this.hass,this.entryId)]);this._contacts=e,this._channels=t;try{const e=await Pc(this.hass,this.entryId);null!=e&&e.max_channels&&(this._maxChannels=e.max_channels)}catch(e){}}finally{this._loading=!1}}}_switchTab(e){this._activeTab=e,this._searchQuery="",this._categoryFilter="all",this._typeFilter="all",this._confirmingRemoveContact=null,this._confirmingRemoveChannel=null}_filterContacts(){let e=this._contacts;if("added"===this._categoryFilter?e=e.filter(e=>e.added_to_node):"discovered"===this._categoryFilter&&(e=e.filter(e=>!e.added_to_node)),"clients"===this._typeFilter?e=e.filter(e=>{var t;const i=null!==(t=e.type)&&void 0!==t?t:0;return 0===i||1===i}):"repeaters"===this._typeFilter&&(e=e.filter(e=>2===e.type)),this._searchQuery){const t=this._searchQuery.toLowerCase();e=e.filter(e=>(e.adv_name||"").toLowerCase().includes(t)||(e.pubkey_prefix||"").toLowerCase().includes(t))}return e}async _doAddContact(e){if(this.hass){this._actionInProgress=e.public_key;try{if((await ep(this.hass,e.public_key,e.adv_name,this.entryId)).success){const e=await Nc(this.hass,this.entryId);this._contacts=e,this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}}finally{this._actionInProgress=null}}}async _doRemoveContact(e){if(this.hass){this._confirmingRemoveContact=null,this._actionInProgress=e.public_key;try{if((await tp(this.hass,e.public_key,this.entryId)).success){const e=await Nc(this.hass,this.entryId);this._contacts=e,this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}}finally{this._actionInProgress=null}}}_openAddChannel(){this._editingChannel=null,this._channelDialogOpen=!0}_openEditChannel(e){this._editingChannel=e,this._channelDialogOpen=!0}_getAvailableIndices(){const e=new Set(this._channels.map(e=>e.channel_idx)),t=[];for(let i=0;i<this._maxChannels;i++)e.has(i)||t.push(i);return t}async _doRemoveChannel(e){if(this.hass){this._confirmingRemoveChannel=null,this._actionInProgress=`ch-${e.channel_idx}`;try{if((await async function(e,t,i){try{const o={type:"meshcore_chattx/remove_channel",channel_idx:t};return i&&(o.entry_id=i),await e.callWS(o)}catch(e){return{success:!1}}}(this.hass,e.channel_idx,this.entryId)).success){const e=await Lc(this.hass,this.entryId);this._channels=e,this.dispatchEvent(new CustomEvent("channels-changed",{bubbles:!0,composed:!0}))}}finally{this._actionInProgress=null}}}async _onChannelSaved(){if(this._channelDialogOpen=!1,this._editingChannel=null,this.hass){const e=await Lc(this.hass,this.entryId);this._channels=e,this.dispatchEvent(new CustomEvent("channels-changed",{bubbles:!0,composed:!0}))}}_close(){this.dispatchEvent(new CustomEvent("manage-closed",{bubbles:!0,composed:!0}))}};function Mp(e,t){if(e&&"*"!==e){const t=(e=>e.replace(/^#/,""))(e);return{short:`#${t}`,long:Zl("Region: #{name}",{name:t}),unknown:!1}}return!0===t?{short:Zl("unknown region"),long:Zl("Region: unknown. Add its name to the Flood Scope Allowlist in the MeshCore integration options to see it."),unknown:!0}:"*"===e?{short:`🌐 ${Zl("all regions")}`,long:Zl("Region: none (global flood)"),unknown:!1}:!1===t?{short:"",long:Zl("Region: none (global flood)"),unknown:!1}:{short:"",long:"",unknown:!1}}function Bp(e){const t="number"==typeof e?e:Number(e);return Number.isFinite(t)&&0!==t?t:null}function Ip(e){const t=[];for(const[n,l]of Object.entries(e)){var i,o,r,s,a;if(!n.startsWith("binary_sensor.meshcore_")||!n.endsWith("_contact"))continue;const e=l.attributes,d="string"==typeof e.public_key?e.public_key.toLowerCase():"",c=Bp(null!==(i=e.adv_lat)&&void 0!==i?i:e.latitude),p=Bp(null!==(o=e.adv_lon)&&void 0!==o?o:e.longitude);d&&null!==c&&null!==p&&t.push({key:d,name:String(null!==(r=null!==(s=e.adv_name)&&void 0!==s?s:e.friendly_name)&&void 0!==r?r:d.slice(0,6)),lat:c,lon:p,type:Number(null!==(a=e.type)&&void 0!==a?a:0)})}return t}function zp(e,t,i,o){const r=Math.PI/180,s=(i-e)*r,a=(o-t)*r,n=Math.sin(s/2)**2+Math.cos(e*r)*Math.cos(i*r)*Math.sin(a/2)**2;return 12742*Math.asin(Math.min(1,Math.sqrt(n)))}function Rp(e,t,i){const o=e.toLowerCase();let r=t.filter(e=>e.key.startsWith(o)&&(2===e.type||3===e.type));if(0===r.length&&(r=t.filter(e=>e.key.startsWith(o))),0===r.length)return{node:null,ambiguous:!1};if(1===r.length||!i)return{node:r[0],ambiguous:r.length>1};let s=r[0],a=1/0;for(const e of r){const t=zp(i.lat,i.lon,e.lat,e.lon);t<a&&(s=e,a=t)}return{node:s,ambiguous:!0}}Ep.styles=md(U||(U=Rl`
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
  `)),Ol([$c({type:Object})],Ep.prototype,"hass",void 0),Ol([$c({type:String})],Ep.prototype,"entryId",void 0),Ol([$c({type:Boolean})],Ep.prototype,"narrow",void 0),Ol([$c({type:String})],Ep.prototype,"initialTab",void 0),Ol([$c({type:Boolean})],Ep.prototype,"showContactIds",void 0),Ol([kc()],Ep.prototype,"_activeTab",void 0),Ol([kc()],Ep.prototype,"_contacts",void 0),Ol([kc()],Ep.prototype,"_channels",void 0),Ol([kc()],Ep.prototype,"_searchQuery",void 0),Ol([kc()],Ep.prototype,"_categoryFilter",void 0),Ol([kc()],Ep.prototype,"_typeFilter",void 0),Ol([kc()],Ep.prototype,"_loading",void 0),Ol([kc()],Ep.prototype,"_actionInProgress",void 0),Ol([kc()],Ep.prototype,"_confirmingRemoveContact",void 0),Ol([kc()],Ep.prototype,"_confirmingRemoveChannel",void 0),Ol([kc()],Ep.prototype,"_channelDialogOpen",void 0),Ol([kc()],Ep.prototype,"_editingChannel",void 0),Ol([kc()],Ep.prototype,"_maxChannels",void 0),Ep=Ol([_c("chattx-manage-dialog")],Ep);const Op=256;function Tp(e,t,i){const o=Op*2**i,r=(t+180)/360*o,s=Math.sin(Math.max(-85,Math.min(85,e))*Math.PI/180);return[r,(.5-Math.log((1+s)/(1-s))/(4*Math.PI))*o]}let Np=null;function Lp(e){const t=[],i=new Set;for(const r of null!==(o=e.rxLogData)&&void 0!==o?o:[]){var o;const e=r.path_nodes;if(!e||0===e.length)continue;const s=e.join(">");i.has(s)||(i.add(s),t.push(e))}return t.sort((e,t)=>e.length-t.length)}let Pp=class extends yc{constructor(){super(...arguments),this.nodeName="",this._me=null,this._meLoaded=!1,this._pathIndex=0}connectedCallback(){var e;super.connectedCallback(),this.hass&&!this._meLoaded&&(e=this.hass,null!=Np||(Np=Pc(e).then(e=>{const t=Number(e.latitude),i=Number(e.longitude);return Number.isFinite(t)&&Number.isFinite(i)&&(0!==t||0!==i)?{lat:t,lon:i}:null}).catch(()=>null).then(t=>{var i;if(t)return t;const o=null===(i=e.states["zone.home"])||void 0===i?void 0:i.attributes,r=Number(null==o?void 0:o.latitude),s=Number(null==o?void 0:o.longitude);return Number.isFinite(r)&&Number.isFinite(s)?{lat:r,lon:s}:null})),Np).then(e=>{this._me=e,this._meLoaded=!0})}render(){if(!this.hass||!this.message)return ic;if(!this._meLoaded)return Zd(W||(W=Rl`<div class="note">${0}</div>`),Zl("Loading..."));const e=Lp(this.message);if(0===e.length)return ic;const t=Math.min(this._pathIndex,e.length-1),i=function(e){var t,i,o,r,s;const{pathNodes:a,nodes:n,me:l,outgoing:d,senderName:c}=e,p=l?{lat:l.lat,lon:l.lon}:null,h=d?a.map((e,t)=>t):a.map((e,t)=>a.length-1-t),u=new Array(a.length);let g=p;for(const e of h){var m,v,f;const t=a[e],{node:i,ambiguous:o}=Rp(t,n,g);u[e]={kind:"repeater",prefix:t.toUpperCase(),name:null!==(m=null==i?void 0:i.name)&&void 0!==m?m:"",lat:null!==(v=null==i?void 0:i.lat)&&void 0!==v?v:null,lon:null!==(f=null==i?void 0:i.lon)&&void 0!==f?f:null,ambiguous:o},i&&(g={lat:i.lat,lon:i.lon})}const y={kind:"me",prefix:"",name:null!==(t=null==l?void 0:l.name)&&void 0!==t?t:"",lat:null!==(i=null==l?void 0:l.lat)&&void 0!==i?i:null,lon:null!==(o=null==l?void 0:l.lon)&&void 0!==o?o:null,ambiguous:!1};if(d)return[y,...u];const b=c?n.find(e=>e.name===c):void 0;return[{kind:"sender",prefix:"",name:null!=c?c:"",lat:null!==(r=null==b?void 0:b.lat)&&void 0!==r?r:null,lon:null!==(s=null==b?void 0:b.lon)&&void 0!==s?s:null,ambiguous:!1},...u,y]}({pathNodes:e[t],nodes:Ip(this.hass.states),me:this._me?{...this._me,name:this.nodeName}:null,outgoing:this.message.isOutgoing,senderName:this.message.isOutgoing?void 0:this.message.sender});return Zd(G||(G=Rl`
      ${0}
      ${0}
      ${0}
    `),e.length>1?Zd(X||(X=Rl`<div class="tabs">
            ${0}
          </div>`),e.map((e,i)=>Zd(Y||(Y=Rl`<button class=${0} @click=${0}>
              ${0} · ${0} hops
            </button>`),i===t?"active":"",e=>{e.stopPropagation(),this._pathIndex=i},Zl("Path {n}",{n:i+1}),e.length))):ic,this._renderMap(i),this._renderList(i))}_renderMap(e){const t=e.filter(e=>null!==e.lat&&null!==e.lon);if(0===t.length)return Zd(Q||(Q=Rl`<div class="note">${0}</div>`),Zl("No repeater on this path has a known position."));const i=function(e,t,i,o=28){if(e.length<2)return 12;for(let r=15;r>=2;r--){const s=e.map(e=>Tp(e.lat,e.lon,r)),a=s.map(e=>e[0]),n=s.map(e=>e[1]);if(Math.max(...a)-Math.min(...a)<=t-2*o&&Math.max(...n)-Math.min(...n)<=i-2*o)return r}return 2}(t,520,320),o=t.map(e=>Tp(e.lat,e.lon,i)),r=o.map(e=>e[0]),s=o.map(e=>e[1]),a=(Math.min(...r)+Math.max(...r))/2,n=(Math.min(...s)+Math.max(...s))/2,l=a-260,d=n-160,c=[],p=2**i;for(let e=Math.floor(l/Op);e<=Math.floor((l+520)/Op);e++)for(let t=Math.floor(d/Op);t<=Math.floor((d+320)/Op);t++){if(t<0||t>=p)continue;const o=(e%p+p)%p;c.push(ec(J||(J=Rl`<image href=${0}
          x=${0} y=${0} width=${0} height=${0} />`),`https://tile.openstreetmap.org/${i}/${o}/${t}.png`,e*Op-l,t*Op-d,Op,Op))}const h=e=>{const[t,o]=Tp(e.lat,e.lon,i);return[t-l,o-d]},u=[];let g=null,m=!1;for(const t of e){if(null===t.lat||null===t.lon){g&&(m=!0);continue}const e=t;if(g){const[t,i]=h(g),[o,r]=h(e),s=m||g.ambiguous||e.ambiguous;u.push(ec(Z||(Z=Rl`<line x1=${0} y1=${0} x2=${0} y2=${0} stroke="#d32f2f" stroke-width="3"
          stroke-linecap="round" stroke-dasharray=${0} opacity="0.9" />`),t,i,o,r,s?"6 5":"none"))}g=e,m=!1}let v=0;const f=e.map(e=>{if("repeater"===e.kind&&v++,null===e.lat||null===e.lon)return ic;const[t,i]=h(e),o="me"===e.kind?"#1e88e5":"sender"===e.kind?"#43a047":"#fb8c00",r="repeater"===e.kind?`${v}`:"me"===e.kind?Zl("You"):e.name||Zl("Sender");return ec(ee||(ee=Rl`
        <circle cx=${0} cy=${0} r=${0} fill=${0}
          stroke=${0} stroke-width="3" />
        <text class="label" x=${0} y=${0}>${0}</text>`),t,i,"repeater"===e.kind?6:8,e.ambiguous?"#fff":o,o,t+10,i+4,r)});return Zd(te||(te=Rl`<svg viewBox="0 0 ${0} ${0}" role="img" aria-label=${0}>
      ${0}
      ${0}
      ${0}
      <text class="attribution" x=${0} y=${0} text-anchor="end">© OpenStreetMap</text>
    </svg>`),520,320,Zl("Route on the map"),c,u,f,516,316)}_renderList(e){let t=0;const i=e.some(e=>e.ambiguous);return Zd(ie||(ie=Rl`
      <ol>
        ${0}
      </ol>
      ${0}
      <div class="note">🧪 ${0}</div>
    `),e.filter(e=>"repeater"===e.kind).map(e=>(t++,Zd(oe||(oe=Rl`<li value=${0}>
            <span class="prefix">${0}</span>
            ${0}${0}
          </li>`),t,e.prefix,e.name?Zd(re||(re=Rl` ${0}`),e.name):Zd(se||(se=Rl` – ${0}`),Zl("no known position")),e.ambiguous?" (?)":""))),i?Zd(ae||(ae=Rl`<div class="note">${0}</div>`),Zl("(?) Several repeaters share this prefix; the one nearest to the route is shown.")):ic,Zl("Experimental feature"))}};Pp.styles=md(ne||(ne=Rl`
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
    svg {
      display: block;
      width: 100%;
      height: auto;
      background: #aad3df;
      margin-top: 6px;
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
    .note {
      padding: 0 12px 8px;
      font-size: 11px;
      color: var(--secondary-text-color);
    }
    .attribution {
      font: 9px sans-serif;
      fill: #333;
    }
  `)),Ol([$c({attribute:!1})],Pp.prototype,"hass",void 0),Ol([$c({attribute:!1})],Pp.prototype,"message",void 0),Ol([$c({type:String})],Pp.prototype,"nodeName",void 0),Ol([kc()],Pp.prototype,"_me",void 0),Ol([kc()],Pp.prototype,"_meLoaded",void 0),Ol([kc()],Pp.prototype,"_pathIndex",void 0),Pp=Ol([_c("chattx-path-map")],Pp);let qp=class extends yc{constructor(){super(),this.timestampFormat="relative",this._selectedMessage=null,this.nodeName="",this._showMap=!1,Ap(this,{isOpen:()=>null!==this._selectedMessage,onEscape:()=>{this._selectedMessage=null},getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".message-dialog")}})}render(){return this.group?Zd(le||(le=Rl`
        ${0}
        ${0}
      `),this._renderGroup(),this._selectedMessage?this._renderMessageDialog(this._selectedMessage):Zd(de||(de=Rl``))):Zd(ce||(ce=Rl``))}_renderGroup(){if(!this.group)return Zd(pe||(pe=Rl``));const e=this.group,t={"message-group":!0,incoming:!e.isOutgoing&&!e.isSystem,outgoing:e.isOutgoing,system:e.isSystem};let i;return e.messages.length>0&&(i=e.messages[0].senderColor||function(e){let t=0;for(let i=0;i<e.length;i++)t=(t<<5)-t+e.charCodeAt(i);const i=["#e57373","#64b5f6","#81c784","#ffb74d","#ba68c8","#4dd0e1","#fff176","#a1887f"];return i[Math.abs(t)%i.length]}(e.sender)),Zd(he||(he=Rl`
      <div class=${0} style=${0}>
        ${0}
        ${0}
      </div>
    `),this._classMap(t),i?`--sender-color: ${i}`:"",e.isSystem||e.isOutgoing?Zd(ge||(ge=Rl``)):Zd(ue||(ue=Rl`<div class="sender">${0}</div>`),e.sender),e.messages.map(e=>this._renderBubble(e)))}_renderBubble(e){const t={bubble:!0,incoming:!e.isOutgoing&&!e.isSystem,outgoing:e.isOutgoing,system:e.isSystem},i=e.isOutgoing&&e.deliveryStatus?this._getStatusLabel(e.deliveryStatus):"",o=e.isOutgoing||e.isSystem?"":function(e){const t=hp(e);if(null===t)return"";if(0===t)return Zl("direct");const i=function(e){var t;const i=hp(e),o=null===(t=(null!=e?e:[]).find(e=>(null==e?void 0:e.hop_count)===i&&"number"==typeof(null==e?void 0:e.path_hash_size)))||void 0===t?void 0:t.path_hash_size;return"number"==typeof o?o:null}(e);return ed("{n} hop","{n} hops",t)+(null===i?"":` (${i}B)`)}(e.rxLogData),r=function(e,t){switch(t){case"relative":default:return function(e){const t=Date.now()-e.getTime(),i=Math.floor(t/1e3),o=Math.floor(i/60),r=Math.floor(o/60);return i<60?"now":o<60?`${o}m`:r<24?`${r}h`:e.toLocaleDateString(Ql(),{month:"short",day:"numeric"})}(e);case"time":return e.toLocaleTimeString(Ql(),{hour:"numeric",minute:"2-digit"});case"datetime":return e.toLocaleString(Ql(),{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}}(e.timestamp,this.timestampFormat)+(o?` · ${o}`:""),s=e.isOutgoing||e.isSystem?"":Mp(e.floodScope,e.regionScope).short;return Zd(me||(me=Rl`
      <div class=${0} data-msg-id=${0} @click=${0}>
        <div class="message-text">${0}</div>
        <div class="timestamp">${0}${0}${0}</div>
      </div>
    `),this._classMap(t),e.id,t=>{t.stopPropagation(),this._selectedMessage=e},this._renderTextWithMentions(e.text,e.mentions),i?Zd(ve||(ve=Rl`<span class="delivery-status">${0}</span> · `),i):"",r,s?Zd(fe||(fe=Rl` · <span class="flood-scope">${0}</span>`),s):"")}_getStatusLabel(e){var t;const i=e.status,o=null!==(t=e.repeaterCount)&&void 0!==t?t:0;switch(i){case"pending":case"waiting":return Zl("Waiting...");case"sent":return Zl(o>0?"Repeated":"Unheard");case"delivered":return Zl("Delivered");case"failed":return Zl("Failed");default:return Zl("Sent")}}_renderTextWithMentions(e,t){if(0===t.length)return e;const i=t.map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")),o=new RegExp(`@\\[(${i.join("|")})\\]|@(${i.join("|")})\\b`,"g"),r=[];let s,a=0;for(;null!==(s=o.exec(e));){var n;s.index>a&&r.push(e.slice(a,s.index));const t=null!==(n=s[1])&&void 0!==n?n:s[2];r.push(Zd(ye||(ye=Rl`<span class="mention">@${0}</span>`),t)),a=s.index+s[0].length}return a<e.length&&r.push(e.slice(a)),r}willUpdate(e){e.has("_selectedMessage")&&(this._showMap=!1)}_renderMessageDialog(e){var t,i;const o=e.rxLogData&&e.rxLogData.length>0,r=o?e.rxLogData.map(e=>{const t=e.path_nodes,i=e.hop_count,o=e.snr,r=e.rssi,s=[];return t&&t.length>0?s.push(t.map(e=>e.substring(0,4).toUpperCase()).join(" > ")):void 0!==i?s.push(`${i} hop${1!==i?"s":""}`):s.push("0 hops"),void 0!==o&&s.push(`SNR: ${o}`),void 0!==r&&s.push(`RSSI: ${r}`),s.join(" · ")}).join(" | "):"",s=e.timestamp.toLocaleString(Ql(),{weekday:"short",month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit"}),a=hp(e.rxLogData),n=null===a?"":function(e){const t=`${e} ${1===e?"hop":"hops"}`;return(nd()||ad()).replace(/\{hops\}/g,t)}(a),l="padding: 8px 16px; font-size: 12px; color: var(--secondary-text-color); border-top: 1px solid var(--divider-color, #e0e0e0);";return Zd(be||(be=Rl`
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
          <div style=${0}>
            ${0}: ${0}
          </div>
          ${0}
          ${0}
          ${0}
        </div>
      </div>
    `),()=>{this._selectedMessage=null},this._showMap?"with-map":"",Zl("Message actions"),e=>e.stopPropagation(),e.text,Zl("Close"),Zl("Close"),()=>{this._selectedMessage=null},()=>this._copyText(e.text),Zl("Copy Text"),e.isOutgoing||e.isSystem?Zd($e||($e=Rl``)):Zd(_e||(_e=Rl`
                <button class="message-dialog-action" @click=${0}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>${0}
                </button>
                ${0}
              `),()=>this._replyToSender(e.sender),Zl("Reply"),n?Zd(xe||(xe=Rl`
                      <button class="message-dialog-action" @click=${0}>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>${0}
                      </button>
                    `),()=>this._replyToSender(e.sender,n),n):Zd(we||(we=Rl``))),o?Zd(ke||(ke=Rl`
                <div class="message-dialog-route" @click=${0}>
                  ${0}
                </div>
              `),()=>this._copyText(r),Zl("Route: {route}",{route:r})):Zd(Ce||(Ce=Rl``)),this.hass&&function(e){return Lp(e).length>0}(e)?Zd(Fe||(Fe=Rl`
                <button class="message-dialog-action" @click=${0}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>${0}
                </button>
                ${0}
              `),()=>{this._showMap=!this._showMap},this._showMap?Zl("Hide map"):Zl("Show route on map"),this._showMap?Zd(Se||(Se=Rl`<chattx-path-map .hass=${0} .message=${0} .nodeName=${0}></chattx-path-map>`),this.hass,e,this.nodeName):Zd(Ae||(Ae=Rl``))):Zd(De||(De=Rl``)),l,e.isOutgoing?Zl("Sent"):Zl("Received"),s,e.isOutgoing||e.isSystem||!Mp(e.floodScope,e.regionScope).long?Zd(Me||(Me=Rl``)):Zd(Ee||(Ee=Rl`<div style=${0}>${0}</div>`),l,Mp(e.floodScope,e.regionScope).long),e.isOutgoing&&e.deliveryStatus?Zd(Be||(Be=Rl`
                <div style=${0}>
                  ${0}${0}${0}
                </div>
              `),l,(null!==(t=e.deliveryStatus.repeaterCount)&&void 0!==t?t:0)>0?ed("{n} repeater responded","{n} repeaters responded",null!==(i=e.deliveryStatus.repeaterCount)&&void 0!==i?i:0):Zl("No repeaters responded"),e.deliveryStatus.ackReceived?` · ${Zl("ACK received")}`:"",e.deliveryStatus.roundTripMs?` · ${e.deliveryStatus.roundTripMs}ms RTT`:""):Zd(Ie||(Ie=Rl``)),e.isOutgoing&&e.lateEchoes?e.lateEchoes.map(t=>Zd(ze||(ze=Rl`
                <div class="message-dialog-route" @click=${0}>
                  ${0}
                </div>
              `),()=>this._copyText(Hp(e,t)),Hp(e,t))):Zd(Re||(Re=Rl``)))}async _copyText(e){try{await navigator.clipboard.writeText(e)}catch(t){const i=document.createElement("textarea");i.value=e,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i)}this._selectedMessage=null}_replyToSender(e,t=""){this.dispatchEvent(new CustomEvent("reply-to-sender",{detail:{mention:t?`@[${e}] ${t} `:`@[${e}] `},bubbles:!0,composed:!0})),this._selectedMessage=null}_classMap(e){return Object.entries(e).filter(([,e])=>e).map(([e])=>e).join(" ")}};function Hp(e,t){var i;const o=new Date(t.received_at),r=Math.max(0,Math.round((o.getTime()-e.timestamp.getTime())/6e4)),s="number"==typeof t.hop_count?Zl("Came back through the mesh after {minutes} min, {hops} hops",{minutes:r,hops:t.hop_count}):Zl("Came back through the mesh after {minutes} min",{minutes:r}),a=null!==(i=t.path_nodes)&&void 0!==i&&i.length?` · ${t.path_nodes.map(e=>e.substring(0,4).toUpperCase()).join(" > ")}`:"";return s+a}qp.styles=md(Oe||(Oe=Rl`
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
  `)),Ol([$c({type:Object})],qp.prototype,"group",void 0),Ol([$c({type:Object})],qp.prototype,"message",void 0),Ol([$c({type:String})],qp.prototype,"timestampFormat",void 0),Ol([kc()],qp.prototype,"_selectedMessage",void 0),Ol([$c({attribute:!1,hasChanged:(e,t)=>!t&&!!e})],qp.prototype,"hass",void 0),Ol([$c({type:String})],qp.prototype,"nodeName",void 0),Ol([kc()],qp.prototype,"_showMap",void 0),qp=Ol([_c("chattx-message-bubble")],qp);let jp=class extends yc{constructor(){super(),this._query="",this._fromDate="",this._toDate="",this._results=[],this._totalCount=0,this._searching=!1,this._hasSearched=!1,this._showFilters=!1,this._debounceTimer=null,Ap(this,{isOpen:()=>!0,onEscape:()=>this.dispatchEvent(new CustomEvent("search-close",{bubbles:!0,composed:!0}))})}render(){return Zd(Te||(Te=Rl`
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
    `),Zl("Search messages"),Zl("Search messages..."),this._query,this._onQueryInput,this._showFilters?"active":"",()=>{this._showFilters=!this._showFilters},Zl("Filters"),this._showFilters?Zd(Ne||(Ne=Rl`
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
            `),Zl("From"),this._fromDate,e=>{this._fromDate=e.target.value,this._doSearch()},Zl("To"),this._toDate,e=>{this._toDate=e.target.value,this._doSearch()}):"",this._hasSearched?Zd(Le||(Le=Rl`<div class="result-count">${0}</div>`),ed("{n} result","{n} results",this._totalCount)):"",this._searching?Zd(Pe||(Pe=Rl`<div class="loading-state">${0}</div>`),Zl("Searching...")):this._hasSearched?0===this._results.length?Zd(He||(He=Rl`
                  <div class="empty-state">
                    <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H4V8h4v2c0 1.1.9 2 2 2h6v2h-2v2h2v2h-2v2h6V10h-4v10h2z"/></svg></div>
                    <div class="empty-text">${0}</div>
                  </div>
                `),Zl("No messages found")):this._results.map(e=>this._renderResult(e)):Zd(qe||(qe=Rl`
                <div class="empty-state">
                  <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div>
                  <div class="empty-text">${0}</div>
                </div>
              `),Zl("Search your message history")))}_renderResult(e){const t=new Date(e.timestamp),i=t.toLocaleDateString(Ql(),{month:"short",day:"numeric"}),o=t.toLocaleTimeString(Ql(),{hour:"2-digit",minute:"2-digit"}),r=this._highlightQuery(e.text);return Zd(je||(je=Rl`
      <div class="result-item" @click=${0}>
        <div class="result-meta">
          <span class="result-sender">${0}</span>
          <span class="result-conversation">${0}</span>
          <span>${0} ${0}</span>
        </div>
        <div class="result-text">${0}</div>
      </div>
    `),()=>this._onResultClick(e),e.sender,e.conversation_name,i,o,r)}_highlightQuery(e){if(!this._query.trim())return e;const t=this._query.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),i=new RegExp(`(${t})`,"gi"),o=e.split(i),r=this._query.toLowerCase();return o.map(e=>e.toLowerCase()===r?Zd(Ve||(Ve=Rl`<mark>${0}</mark>`),e):e)}_onQueryInput(e){this._query=e.target.value,null!==this._debounceTimer&&clearTimeout(this._debounceTimer);const t=this._query.trim().length,i=t>=2,o=0===t,r=!(!this._fromDate&&!this._toDate);i||o&&r?this._debounceTimer=window.setTimeout(()=>this._doSearch(),400):(this._results=[],this._hasSearched=!1)}async _doSearch(){if(!this.hass||!this.entityId)return;const e=this._query.trim(),t=e.length>0,i=!(!this._fromDate&&!this._toDate);if(!t&&!i)return this._results=[],this._totalCount=0,void(this._hasSearched=!1);this._searching=!0,this._hasSearched=!0;try{const t={type:"meshcore_chattx/search_stored_messages",query:e,entity_id:this.entityId,limit:100};this._fromDate&&(t.from_date=`${this._fromDate}T00:00:00`),this._toDate&&(t.to_date=`${this._toDate}T23:59:59.999999`);const i=await this.hass.callWS(t);this._results=i.results||[],this._totalCount=this._results.length}catch(e){this._results=[],this._totalCount=0}finally{this._searching=!1}}_onResultClick(e){this.dispatchEvent(new CustomEvent("result-selected",{detail:{entityId:e.entity_id,messageId:e.id,conversationName:e.conversation_name,timestamp:e.timestamp},bubbles:!0,composed:!0}))}};jp.styles=md(Ke||(Ke=Rl`
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
  `)),Ol([$c({type:Object})],jp.prototype,"hass",void 0),Ol([$c({type:String})],jp.prototype,"entryId",void 0),Ol([$c({type:String})],jp.prototype,"entityId",void 0),Ol([$c({type:String})],jp.prototype,"meshNodeName",void 0),Ol([kc()],jp.prototype,"_query",void 0),Ol([kc()],jp.prototype,"_fromDate",void 0),Ol([kc()],jp.prototype,"_toDate",void 0),Ol([kc()],jp.prototype,"_results",void 0),Ol([kc()],jp.prototype,"_totalCount",void 0),Ol([kc()],jp.prototype,"_searching",void 0),Ol([kc()],jp.prototype,"_hasSearched",void 0),Ol([kc()],jp.prototype,"_showFilters",void 0),jp=Ol([_c("chattx-message-search")],jp);let Vp=class extends yc{constructor(){super(...arguments),this.prefix="",this._password="",this._remember=!1,this._hasSaved=!1,this._busy=!1,this._error="",this._loggedInAs=null,this._loggedInAt=null}updated(e){e.has("prefix")&&this.prefix&&this._loadState()}async _loadState(){if(!this.hass)return;const e=this.prefix;this._password="",this._error="",this._loggedInAs=null,this._loggedInAt=null;const t=await Kc(this.hass,e,this.entryId);e===this.prefix&&(this._hasSaved=t.has_saved_password,this._remember=t.has_saved_password,t.logged_in_at&&(this._loggedInAt=t.logged_in_at,this._loggedInAs="admin",this._notifyLoggedIn()))}async _submit(e){if(e.preventDefault(),!this.hass||this._busy)return;this._busy=!0,this._error="";const t=await async function(e,t,i){const o={type:"meshcore_chattx/repeater_login",target_prefix:t,remember:i.remember};void 0!==i.password&&(o.password=i.password),i.entryId&&(o.entry_id=i.entryId);try{return await e.callWS(o)}catch(e){return{success:!1,message:Vc(e)}}}(this.hass,this.prefix,{password:this._password||void 0,remember:this._remember,entryId:this.entryId});if(this._busy=!1,void 0!==t.has_saved_password&&(this._hasSaved=t.has_saved_password),t.success)this._password="",this._loggedInAs=!0===t.is_admin?"admin":!1===t.is_admin?"guest":"unknown",this._loggedInAt=null,this._notifyLoggedIn();else if("rate_limited"===t.reason){var i;this._error=Zl("Too much mesh traffic right now. Try again in {retry_after} seconds.",{retry_after:null!==(i=t.retry_after)&&void 0!==i?i:0})}else if("no_response"===t.reason)this._error=Zl("The repeater did not confirm the login. The password may be wrong, or the repeater may be out of reach.");else{var o;this._error=null!==(o=t.message)&&void 0!==o?o:Zl("Login failed.")}}_notifyLoggedIn(){this.dispatchEvent(new CustomEvent("repeater-logged-in",{detail:{role:this._loggedInAs}}))}async _forget(){if(!this.hass)return;const e=await async function(e,t,i){const o={type:"meshcore_chattx/repeater_forget_password",target_prefix:t};i&&(o.entry_id=i);try{return await e.callWS(o),null}catch(e){return Vc(e)}}(this.hass,this.prefix,this.entryId);e?this._error=e:(this._hasSaved=!1,this._remember=!1)}render(){return Zd(Ue||(Ue=Rl`
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
    `),this._submit,Zl("Password"),this._hasSaved?Zl("Saved password"):"",this._password,this._busy,e=>{this._password=e.target.value},this._remember,this._busy,e=>{this._remember=e.target.checked},Zl("Remember password"),this._busy,this._busy?Zl("Logging in…"):Zl("Log in"),this._hasSaved?Zd(We||(We=Rl`<button class="link" type="button" ?disabled=${0} @click=${0}>${0}</button>`),this._busy,this._forget,Zl("Forget saved password")):"",this._busy?Zd(Ge||(Ge=Rl`<div class="note">${0}</div>`),Zl("This can take up to a minute over several hops.")):"",this._error?Zd(Xe||(Xe=Rl`<div class="error" role="alert">${0}</div>`),this._error):"",this._loggedInAs?Zd(Ye||(Ye=Rl`<div class="success" role="status">${0}</div>`),this._loggedInAt?Zl("Logged in as administrator since {date}. No need to log in again.",{date:new Date(this._loggedInAt).toLocaleDateString(Ql())}):"admin"===this._loggedInAs?Zl("Logged in as administrator."):"guest"===this._loggedInAs?Zl("Logged in as guest. Changing settings requires the admin password."):Zl("Logged in.")):"")}};Vp.styles=md(Qe||(Qe=Rl`
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
  `)),Ol([$c({type:Object})],Vp.prototype,"hass",void 0),Ol([$c({type:String})],Vp.prototype,"prefix",void 0),Ol([$c({type:String})],Vp.prototype,"entryId",void 0),Ol([kc()],Vp.prototype,"_password",void 0),Ol([kc()],Vp.prototype,"_remember",void 0),Ol([kc()],Vp.prototype,"_hasSaved",void 0),Ol([kc()],Vp.prototype,"_busy",void 0),Ol([kc()],Vp.prototype,"_error",void 0),Ol([kc()],Vp.prototype,"_loggedInAs",void 0),Ol([kc()],Vp.prototype,"_loggedInAt",void 0),Vp=Ol([_c("chattx-repeater-login")],Vp);const Kp=36e5;let Up=class extends yc{constructor(){super(...arguments),this.readAt="",this._timer=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._timer=setInterval(()=>this.requestUpdate(),3e4)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer),this._timer=null}render(){return this.className=function(e,t=Date.now()){const i=t-Date.parse(e);return i>864e5?"read-at very-old":i>Kp?"read-at old":"read-at"}(this.readAt),this.title=new Date(this.readAt).toLocaleString(Ql()),Zd(Je||(Je=Rl`${0} ${0}`),Zl("Loaded"),function(e,t=Date.now()){const i=Date.parse(e);if(Number.isNaN(i))return"";const o=t-i;if(o<6e4)return Zl("just now");const r=Math.floor(o/6e4),s=Math.floor(o/Kp);let a;return a=o<=Kp?`${r} min`:o<=432e5?`${s} h ${r%60} min`:o<=1728e5?`${s} h`:`${Math.floor(o/864e5)} d`,Zl("{amount} ago",{amount:a})}(this.readAt))}};Ol([$c({type:String})],Up.prototype,"readAt",void 0),Up=Ol([_c("chattx-read-age-note")],Up);const Wp=[{title:"Basic",fields:[{command:"get name",label:"Name"},{command:"get role",label:"Role"},{command:"ver",label:"Firmware"},{command:"board",label:"Board"}]},{title:"Radio",fields:[{command:"get radio",label:"Radio",parts:[{label:"Frequency",unit:"MHz",decimals:3},{label:"Bandwidth",unit:"kHz"},{label:"Spreading factor"},{label:"Coding rate"}]},{command:"get tx",label:"TX power",unit:"dBm"},{command:"get radio.rxgain",label:"RX boosted gain"}]},{title:"Location",fields:[{command:"get lat",label:"Latitude"},{command:"get lon",label:"Longitude"}]},{title:"Features",fields:[{command:"get repeat",label:"Packet forwarding"},{command:"get allow.read.only",label:"Guest read-only access"},{command:"get multi.acks",label:"Multi-ACKs"}]},{title:"Network health",fields:[{command:"get loop.detect",label:"Loop detection"},{command:"get dutycycle",label:"Duty cycle"},{command:"get rxdelay",label:"Receive delay"}]},{title:"Advertisement",fields:[{command:"get advert.interval",label:"Local advert interval",unit:"min"},{command:"get flood.advert.interval",label:"Flood advert interval",unit:"h"},{command:"get flood.max",label:"Flood max hops"},{command:"get flood.max.advert",label:"Flood max hops, adverts"},{command:"get flood.max.unscoped",label:"Flood max hops, unscoped"}]},{title:"Operator info",fields:[{command:"get owner.info",label:"Operator info"}]},{title:"Advanced",fields:[{command:"get path.hash.mode",label:"Node ID size in paths"},{command:"get txdelay",label:"Flood TX delay"},{command:"get direct.txdelay",label:"Direct TX delay"},{command:"get int.thresh",label:"Interference threshold"},{command:"get cad",label:"Channel activity detection"},{command:"get agc.reset.interval",label:"AGC reset interval"},{command:"get adc.multiplier",label:"Battery voltage calibration"}]}];let Gp=class extends yc{constructor(){super(...arguments),this.prefix="",this.canLoad=!1,this._fields={},this._loading=!1,this._error="",this._waitSeconds=0}willUpdate(e){e.has("prefix")&&(this._fields={},this._error="")}updated(e){e.has("prefix")&&this.prefix&&this._loadRemembered()}async _loadRemembered(){if(!this.hass)return;const e=this.prefix,t=await Jc(this.hass,e,this.entryId);if(e!==this.prefix)return;const i={};for(const[e,r]of Object.entries(t)){var o;r.sensors||r.neighbours||(i[e]=void 0!==r.unsupported?{kind:"unsupported",message:r.unsupported,readAt:r.read_at}:{kind:"value",value:null!==(o=r.value)&&void 0!==o?o:"",readAt:r.read_at})}this._fields={...i,...this._fields}}_isLoaded(e){var t;const i=null===(t=this._fields[e.command])||void 0===t?void 0:t.kind;return"value"===i||"unsupported"===i}_groupReadAt(e){const t=e.fields.flatMap(e=>{const t=this._fields[e.command];return t&&"readAt"in t?[t.readAt]:[]});return 0===t.length?null:t.reduce((e,t)=>Date.parse(t)<Date.parse(e)?t:e)}_setField(e,t){this._fields={...this._fields,[e]:t}}async _loadGroup(e){if(!this.hass||this._loading)return;const t=this.hass,i=this.prefix,o=()=>this.isConnected&&i===this.prefix,r=e.fields.every(e=>this._isLoaded(e))?e.fields:e.fields.filter(e=>!this._isLoaded(e));this._loading=!0,this._error="";let s=0;try{for(const e of r){const r=this._fields[e.command];this._setField(e.command,{kind:"loading"});const c=()=>Gc(t,i,e.command,this.entryId);let p=await c();for(;"rate_limited"===p.reason&&o();){var a;if(await this._waitOut(null!==(a=p.retry_after)&&void 0!==a?a:1),!o())return;p=await c()}if(!o())return;var n;if(p.success)s=0,this._setField(e.command,{kind:"value",value:null!==(n=p.value)&&void 0!==n?n:"",readAt:(new Date).toISOString()});else if("unsupported"===p.reason){var l;s=0,this._setField(e.command,{kind:"unsupported",message:null!==(l=p.message)&&void 0!==l?l:"",readAt:(new Date).toISOString()})}else{if("no_response"!==p.reason){var d;const t={...this._fields};return r?t[e.command]=r:delete t[e.command],this._fields=t,void(this._error=null!==(d=p.message)&&void 0!==d?d:Zl("Reading the setting failed."))}if(this._setField(e.command,r&&"readAt"in r?r:{kind:"no_response"}),s+=1,s>=2)return void(this._error=Zl("The repeater stopped answering. It may be out of reach, or it may no longer accept this login. In that case, log in again."))}}}finally{i===this.prefix&&(this._loading=!1)}}async _waitOut(e){for(let t=e;t>0&&this.isConnected;t--)this._waitSeconds=t,await new Promise(e=>setTimeout(e,1e3));this._waitSeconds=0}_renderInput(e,t,i,o,r){let s="",a=!1;if("loading"===(null==i?void 0:i.kind))s="…";else if("no_response"===(null==i?void 0:i.kind))s=Zl("No response"),a=!0;else if("unsupported"===(null==i?void 0:i.kind))s=Zl("Not supported"),a=!0;else if("value"===(null==i?void 0:i.kind)){var n,l;s=void 0===o?i.value:null!==(n=null===(l=i.value.split(",")[o])||void 0===l?void 0:l.trim())&&void 0!==n?n:"";const e=Number(s);void 0!==r&&""!==s&&Number.isFinite(e)&&(s=e.toFixed(r))}return Zd(Ze||(Ze=Rl`
      <label>
        ${0}${0}
        <input class=${0} readonly .value=${0} title=${0} />
      </label>
    `),e,t?` (${t})`:"",a?"problem":"",s,"unsupported"===(null==i?void 0:i.kind)?i.message:s)}_renderField(e){const t=this._fields[e.command];return e.parts?e.parts.map((e,i)=>this._renderInput(Zl(e.label),e.unit,t,i,e.decimals)):this._renderInput(Zl(e.label),e.unit,t)}render(){const e=!this.canLoad||this._loading;return Zd(et||(et=Rl`
      ${0}
      ${0}
      ${0}
      ${0}
    `),this.canLoad?"":Zd(tt||(tt=Rl`<div class="hint">${0}</div>`),Zl("Log in as administrator to load values.")),this._waitSeconds?Zd(it||(it=Rl`<div class="hint" role="status">${0}</div>`),Zl("Mesh traffic limit, continuing in {waitSeconds} s.",{waitSeconds:this._waitSeconds})):"",this._error?Zd(ot||(ot=Rl`<div class="error" role="alert">${0}</div>`),this._error):"",Wp.map(t=>{const i=this._groupReadAt(t),o=t.fields.every(e=>this._isLoaded(e));return Zd(rt||(rt=Rl`
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
      `),Zl(t.title),e,()=>this._loadGroup(t),Zl(o?"Reload":"Load"),i?Zd(st||(st=Rl`<chattx-read-age-note .readAt=${0}></chattx-read-age-note>`),i):"",t.fields.map(e=>this._renderField(e)))}))}};Gp.styles=md(at||(at=Rl`
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
  `)),Ol([$c({type:Object})],Gp.prototype,"hass",void 0),Ol([$c({type:String})],Gp.prototype,"prefix",void 0),Ol([$c({type:String})],Gp.prototype,"entryId",void 0),Ol([$c({type:Boolean})],Gp.prototype,"canLoad",void 0),Ol([kc()],Gp.prototype,"_fields",void 0),Ol([kc()],Gp.prototype,"_loading",void 0),Ol([kc()],Gp.prototype,"_error",void 0),Ol([kc()],Gp.prototype,"_waitSeconds",void 0),Gp=Ol([_c("chattx-repeater-settings")],Gp);const Xp={"analog input":"V","analog output":"V",illuminance:"lx",temperature:"°C",humidity:"%",accelerometer:"G",barometer:"hPa",voltage:"V",current:"A",frequency:"Hz",percentage:"%",altitude:"m",load:"kg",concentration:"ppm",power:"W",distance:"m",energy:"kWh",direction:"°",gyrometer:"°/s"},Yp={voltage:"Battery voltage",temperature:"MCU temperature"},Qp=[{channel:1,type:"voltage"},{channel:1,type:"temperature"}];function Jp(e){return e.charAt(0).toUpperCase()+e.slice(1).replace(/_/g," ")}function Zp(e){var t;const i=Xp[e.type],o=1===e.channel?Zl(null!==(t=Yp[e.type])&&void 0!==t?t:Jp(e.type)):Zl("{sensor}, channel {channel}",{sensor:Zl(Jp(e.type)),channel:e.channel});return i?`${o} (${i})`:o}function eh(e){return String("number"==typeof e?Number(e.toFixed(3)):e)}let th=class extends yc{constructor(){super(...arguments),this.prefix="",this.canLoad=!1,this._sensors=null,this._readAt=null,this._loading=!1,this._waitSeconds=0,this._error=""}willUpdate(e){e.has("prefix")&&(this._sensors=null,this._readAt=null,this._error="")}updated(e){e.has("prefix")&&this.prefix&&this._loadRemembered()}async _loadRemembered(){if(!this.hass)return;const e=this.prefix,t=(await Jc(this.hass,e,this.entryId)).telemetry;e!==this.prefix||null==t||!t.sensors||this._loading||this._sensors||(this._sensors=t.sensors,this._readAt=t.read_at)}async _load(){if(!this.hass||this._loading)return;const e=this.hass,t=this.prefix,i=()=>this.isConnected&&t===this.prefix;this._loading=!0,this._error="";try{let a=await Qc(e,t,this.entryId);for(;"rate_limited"===a.reason&&i();){for(let e=null!==(o=a.retry_after)&&void 0!==o?o:1;e>0&&this.isConnected;e--){var o;this._waitSeconds=e,await new Promise(e=>setTimeout(e,1e3))}if(this._waitSeconds=0,!i())return;a=await Qc(e,t,this.entryId)}if(!i())return;var r;if(a.success)this._sensors=null!==(r=a.sensors)&&void 0!==r?r:[],this._readAt=(new Date).toISOString();else if("no_response"===a.reason)this._error=Zl("The repeater did not answer. It may be out of reach, or it may no longer accept this login. In that case, log in again.");else{var s;this._error=null!==(s=a.message)&&void 0!==s?s:Zl("Reading telemetry failed.")}}finally{t===this.prefix&&(this._loading=!1)}}_field(e,t){return Zd(nt||(nt=Rl`<label>${0}<input readonly .value=${0} title=${0} /></label>`),e,t,t)}render(){const e=null!==this._sensors;return Zd(lt||(lt=Rl`
      ${0}
      <div class="header">
        ${0}
        <button ?disabled=${0} @click=${0}>
          ${0}
        </button>
      </div>
      ${0}
    `),this._error?Zd(dt||(dt=Rl`<div class="error" role="alert">${0}</div>`),this._error):"",this._waitSeconds?Zd(ct||(ct=Rl`<span class="hint" role="status">${0}</span>`),Zl("Mesh traffic limit, continuing in {waitSeconds} s.",{waitSeconds:this._waitSeconds})):this._readAt?Zd(pt||(pt=Rl`<chattx-read-age-note .readAt=${0}></chattx-read-age-note>`),this._readAt):"",!this.canLoad||this._loading,this._load,this._loading?Zl("Loading…"):Zl(e?"Reload":"Load"),e&&0===this._sensors.length?Zd(ht||(ht=Rl`<div class="hint">${0}</div>`),Zl("The repeater reports no sensors.")):Zd(ut||(ut=Rl`<div class="fields">${0}</div>`),e?[...this._sensors].sort((e,t)=>e.channel-t.channel).map(e=>this._field(Zp(e),function(e){const{value:t}=e;return Array.isArray(t)?t.map(eh).join(", "):null!==t&&"object"==typeof t?Object.entries(t).map(([e,t])=>`${e}: ${eh(t)}`).join(", "):eh(t)}(e))):Qp.map(e=>this._field(Zp(e),""))))}};th.styles=md(gt||(gt=Rl`
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
  `)),Ol([$c({type:Object})],th.prototype,"hass",void 0),Ol([$c({type:String})],th.prototype,"prefix",void 0),Ol([$c({type:String})],th.prototype,"entryId",void 0),Ol([$c({type:Boolean})],th.prototype,"canLoad",void 0),Ol([kc()],th.prototype,"_sensors",void 0),Ol([kc()],th.prototype,"_readAt",void 0),Ol([kc()],th.prototype,"_loading",void 0),Ol([kc()],th.prototype,"_waitSeconds",void 0),Ol([kc()],th.prototype,"_error",void 0),th=Ol([_c("chattx-repeater-telemetry")],th);let ih=class extends yc{constructor(){super(...arguments),this.prefix="",this.canSend=!1,this._lines=[],this._input="",this._busy=!1,this._history=[],this._historyIndex=0}willUpdate(e){e.has("prefix")&&(this._lines=[],this._history=[],this._historyIndex=0)}updated(e){e.has("_lines")&&this._log&&(this._log.scrollTop=this._log.scrollHeight)}_add(e){this._lines=[...this._lines,e].slice(-200)}async _submit(e){var t;e.preventDefault();const i=this._input.trim();if(!this.hass||!i||this._busy||!this.canSend)return;const o=this.prefix;this._input="",this._history=[...this._history,i],this._historyIndex=this._history.length,this._add({kind:"command",text:`$ ${i}`}),this._busy=!0;const r=await Yc(this.hass,o,i,this.entryId);if(this._busy=!1,o===this.prefix){var s;if(r.success)this._add({kind:"reply",text:null!==(s=r.reply)&&void 0!==s?s:""});else if("no_response"===r.reason)this._add({kind:"note",text:Zl("No reply. The command may still have run, and it is not repeated automatically.")});else if("rate_limited"===r.reason){var a;this._add({kind:"note",text:Zl("Not sent because of the mesh traffic limit. Try again in {seconds} s.",{seconds:null!==(a=r.retry_after)&&void 0!==a?a:0})})}else{var n;this._add({kind:"note",text:null!==(n=r.message)&&void 0!==n?n:Zl("Sending failed.")})}await this.updateComplete,null===(t=this._inputEl)||void 0===t||t.focus()}}_onKeydown(e){var t;if("ArrowUp"!==e.key&&"ArrowDown"!==e.key)return;e.preventDefault();const i="ArrowUp"===e.key?-1:1;this._historyIndex=Math.min(this._history.length,Math.max(0,this._historyIndex+i)),this._input=null!==(t=this._history[this._historyIndex])&&void 0!==t?t:""}render(){const e=this.canSend?Zl("Command, e.g. get tx"):Zl("Log in as administrator first");return Zd(mt||(mt=Rl`
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
    `),Zl("Repeater replies"),this._lines.map(e=>Zd(vt||(vt=Rl`<div class=${0}>${0}</div>`),e.kind,e.text)),this._busy?Zd(ft||(ft=Rl`<div class="note">${0}</div>`),Zl("Waiting for a reply…")):"",this._submit,Zl("Repeater command"),e,this._input,!this.canSend,e=>{this._input=e.target.value},this._onKeydown,!this.canSend||this._busy||!this._input.trim(),Zl("Send"))}};ih.styles=md(yt||(yt=Rl`
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
  `)),Ol([$c({type:Object})],ih.prototype,"hass",void 0),Ol([$c({type:String})],ih.prototype,"prefix",void 0),Ol([$c({type:String})],ih.prototype,"entryId",void 0),Ol([$c({type:Boolean})],ih.prototype,"canSend",void 0),Ol([kc()],ih.prototype,"_lines",void 0),Ol([kc()],ih.prototype,"_input",void 0),Ol([kc()],ih.prototype,"_busy",void 0),Ol([Cc(".log")],ih.prototype,"_log",void 0),Ol([Cc("input")],ih.prototype,"_inputEl",void 0),ih=Ol([_c("chattx-repeater-terminal")],ih);let oh=class extends yc{constructor(){super(...arguments),this.prefix="",this.canLoad=!1,this._neighbours=null,this._total=0,this._readAt=null,this._loading=!1,this._waitSeconds=0,this._error=""}willUpdate(e){e.has("prefix")&&(this._neighbours=null,this._readAt=null,this._error="")}updated(e){e.has("prefix")&&this.prefix&&this._loadRemembered()}async _loadRemembered(){var e;if(!this.hass)return;const t=this.prefix,i=(await Jc(this.hass,t,this.entryId)).neighbours;t!==this.prefix||null==i||!i.neighbours||this._loading||this._neighbours||(this._neighbours=i.neighbours,this._total=null!==(e=i.total)&&void 0!==e?e:i.neighbours.length,this._readAt=i.read_at)}async _load(e){if(!this.hass||this._loading)return;const t=this.hass,i=this.prefix,o=()=>this.isConnected&&i===this.prefix;this._loading=!0,this._error="";try{let d=await Xc(t,i,e,this.entryId);for(;"rate_limited"===d.reason&&o();){for(let e=null!==(r=d.retry_after)&&void 0!==r?r:1;e>0&&this.isConnected;e--){var r;this._waitSeconds=e,await new Promise(e=>setTimeout(e,1e3))}if(this._waitSeconds=0,!o())return;d=await Xc(t,i,e,this.entryId)}if(!o())return;var s,a,n;if(d.success)this._neighbours=null!==(s=d.neighbours)&&void 0!==s?s:[],this._total=null!==(a=d.total)&&void 0!==a?a:this._neighbours.length,this._readAt=null!==(n=d.read_at)&&void 0!==n?n:(new Date).toISOString();else if("no_response"===d.reason)this._error=Zl("The repeater did not answer. It may be out of reach, or it may no longer accept this login. In that case, log in again.");else{var l;this._error=null!==(l=d.message)&&void 0!==l?l:Zl("Reading neighbours failed.")}}finally{i===this.prefix&&(this._loading=!1)}}_renderList(){if(null===this._neighbours)return Zd(bt||(bt=Rl`<div class="hint">${0}</div>`),Zl("Not loaded yet."));if(0===this._neighbours.length)return Zd(_t||(_t=Rl`<div class="hint">${0}</div>`),Zl("The repeater reports no neighbours."));const e=e=>{var t;const i=null!==(t=e.read_at)&&void 0!==t?t:this._readAt;return i?Math.max(0,(Date.now()-Date.parse(i))/1e3):0},t=[...this._neighbours].sort((e,t)=>t.snr-e.snr);return Zd(xt||(xt=Rl`
      <table>
        <thead><tr><th>${0}</th><th class="number">${0}</th><th class="number">${0}</th></tr></thead>
        <tbody>${0}</tbody>
      </table>
      ${0}
    `),Zl("Node"),Zl("SNR (dB)"),Zl("Heard"),t.map(t=>Zd(wt||(wt=Rl`
          <tr>
            <td title=${0}>${0}</td>
            <td class="number">${0}</td>
            <td class="number">${0}</td>
          </tr>
        `),t.pubkey,t.name,t.snr.toFixed(2),function(e){if(e<60)return Zl("{amount} ago",{amount:`${e} s`});const t=Math.round(e/60);if(t<60)return Zl("{amount} ago",{amount:`${t} min`});const i=Math.round(t/60);return Zl("{amount} ago",i<48?{amount:`${i} h`}:{amount:`${Math.round(i/24)} d`})}(Math.round(t.secs_ago+e(t))))),this._total>this._neighbours.length?Zd($t||($t=Rl`<div class="more">
            <span class="hint">${0}</span>
            <button class="next" ?disabled=${0} @click=${0}>
              ${0}
            </button>
          </div>`),Zl("Loaded {length} of {total}, most recently heard first.",{length:this._neighbours.length,total:this._total}),!this.canLoad||this._loading,()=>this._load(this._neighbours.length),Zl("Load 10 more")):"")}render(){return Zd(kt||(kt=Rl`
      ${0}
      <div class="header">
        ${0}
        <button class="reload" ?disabled=${0} @click=${0}>
          ${0}
        </button>
      </div>
      ${0}
    `),this._error?Zd(Ct||(Ct=Rl`<div class="error" role="alert">${0}</div>`),this._error):"",this._waitSeconds?Zd(Ft||(Ft=Rl`<span class="hint" role="status">${0}</span>`),Zl("Mesh traffic limit, continuing in {waitSeconds} s.",{waitSeconds:this._waitSeconds})):this._readAt?Zd(St||(St=Rl`<chattx-read-age-note .readAt=${0}></chattx-read-age-note>`),this._readAt):"",!this.canLoad||this._loading,()=>this._load(0),this._loading?Zl("Loading…"):null!==this._neighbours?Zl("Reload"):Zl("Load"),this._renderList())}};oh.styles=md(At||(At=Rl`
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
  `)),Ol([$c({type:Object})],oh.prototype,"hass",void 0),Ol([$c({type:String})],oh.prototype,"prefix",void 0),Ol([$c({type:String})],oh.prototype,"entryId",void 0),Ol([$c({type:Boolean})],oh.prototype,"canLoad",void 0),Ol([kc()],oh.prototype,"_neighbours",void 0),Ol([kc()],oh.prototype,"_total",void 0),Ol([kc()],oh.prototype,"_readAt",void 0),Ol([kc()],oh.prototype,"_loading",void 0),Ol([kc()],oh.prototype,"_waitSeconds",void 0),Ol([kc()],oh.prototype,"_error",void 0),oh=Ol([_c("chattx-repeater-neighbours")],oh);const rh=e=>(...t)=>({_$litDirective$:e,values:t});class sh{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const ah={},nh=rh(class extends sh{constructor(e){if(super(e),3!==e.type&&1!==e.type&&4!==e.type)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===tc||t===ic)return t;const i=e.element,o=e.name;if(3===e.type){if(t===i[o])return tc}else if(4===e.type){if(!!t===i.hasAttribute(o))return tc}else if(1===e.type&&i.getAttribute(o)===t+"")return tc;return((e,t=ah)=>{e._$AH=t})(e),t}});function lh(e){return(new TextEncoder).encode(e).length>=159}let dh=class extends yc{constructor(){super(...arguments),this.prefix="",this.canEdit=!1,this._rows=null,this._cut=!1,this._defaultScope=null,this._readAt=null,this._busy=!1,this._dirty=!1,this._error="",this._notice="",this._confirm=null,this._newName="",this._newParent="*"}willUpdate(e){e.has("prefix")&&(this._rows=null,this._readAt=null,this._defaultScope=null,this._dirty=!1,this._error="",this._notice="",this._confirm=null)}updated(e){e.has("prefix")&&this.prefix&&this._loadRemembered()}async _loadRemembered(){var e;if(!this.hass)return;const t=this.prefix,i=await Jc(this.hass,t,this.entryId),o=i.region;if(t!==this.prefix||void 0===(null==o?void 0:o.value)||this._busy||this._rows)return;this._applyTree(o.value),this._readAt=o.read_at;const r=null===(e=i["region default"])||void 0===e?void 0:e.value;void 0!==r&&(this._defaultScope=ch(r))}_applyTree(e){this._rows=function(e){const t=e.split("\n").filter(e=>e.trim());return lh(e)&&t.pop(),t.map(e=>{const t=e.length-e.trimStart().length,[i,o]=e.trim().split(/\s+/),r=i.endsWith("^");return{name:r?i.slice(0,-1):i,depth:t,home:r,flood:"F"===o}})}(e),this._cut=lh(e)}async _readRegions(){var e,t;if(!this.hass)return!1;const i=this.prefix,o=await Gc(this.hass,i,"region",this.entryId);if(i!==this.prefix||!this.isConnected)return!1;if(!o.success)return this._error=this._failure(o.reason,o.retry_after,o.message),!1;this._applyTree(null!==(e=o.value)&&void 0!==e?e:""),this._readAt=(new Date).toISOString();const r=await Gc(this.hass,i,"region default",this.entryId);return r.success&&i===this.prefix&&(this._defaultScope=ch(null!==(t=r.value)&&void 0!==t?t:"")),!0}_failure(e,t,i){return"rate_limited"===e?Zl("Mesh traffic limit, try again in {retryAfter} s.",{retryAfter:null!=t?t:0}):"no_response"===e?Zl("The repeater did not answer. A change may still have applied, so load the regions again."):null!=i?i:Zl("The request failed.")}async _load(){if(!this._busy){this._busy=!0,this._error="",this._notice="";try{await this._readRegions()}finally{this._busy=!1}}}async _run(e,t={}){if(this.hass&&!this._busy){this._busy=!0,this._error="",this._notice="",this._confirm=null;try{var i;const r=await Yc(this.hass,this.prefix,e,this.entryId);if(!this.isConnected)return;if(!r.success)return this._error=this._failure(r.reason,r.retry_after,r.message),void("no_response"===r.reason&&(this._dirty=!0));var o;if(!function(e){const t=e.trim().toLowerCase();return t.startsWith("ok")||t.includes(" is now ")}(null!==(i=r.reply)&&void 0!==i?i:""))return void(this._error=null!==(o=r.reply)&&void 0!==o?o:"");this._dirty=!t.saves,t.saves&&(this._notice=Zl("Saved to the repeater.")),await this._readRegions()}finally{this._busy=!1}}}_toggleFlood(e){const t=`region ${e.flood?"denyf":"allowf"} ${e.name}`;e.flood&&"*"===e.name?this._confirm={command:t,text:Zl("The repeater will drop all flood packets without a region, including ordinary traffic. Are you sure?")}:this._run(t)}_askRemove(e){this._confirm={command:`region remove ${e.name}`,text:Zl("Remove region {name}?",{name:e.name})}}_setDefault(e){this._confirm={command:`region default ${e}`,saves:!0,text:Zl("Changing the default scope saves to the repeater right away, along with any unsaved region changes. Continue?")}}_add(e){var t;e.preventDefault();const i=this._newName.trim();if(!i)return;if(/\s/.test(i))return void(this._error=Zl("A region name cannot contain spaces."));const o=i.replace(/^#/,"");null!==(t=this._rows)&&void 0!==t&&t.some(e=>e.name.replace(/^#/,"")===o)?this._error=Zl("Region {name} already exists.",{name:i}):(this._newName="",this._run("*"===this._newParent?`region put ${i}`:`region put ${i} ${this._newParent}`))}_renderRows(){const e=!this.canEdit||this._busy;return this._rows.map(t=>Zd(Dt||(Dt=Rl`
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
    `),16*t.depth,t.name,t.flood,e,e=>{e.preventDefault(),this._toggleFlood(t)},Zl("Flood"),t.home?"quiet home-on":"quiet",e||t.home,Zl("Home region"),()=>this._run(`region home ${t.name}`),Zl("Home"),"*"===t.name?"":Zd(Et||(Et=Rl`
          <button class="quiet" ?disabled=${0} aria-label=${0} @click=${0}>✕</button>
        `),e,Zl("Remove {name}",{name:t.name}),()=>this._askRemove(t))))}render(){var e;const t=!this.canEdit||this._busy;return Zd(Mt||(Mt=Rl`
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
    `),this._dirty?Zd(Bt||(Bt=Rl`
        <div class="warning" role="status">
          <span>${0}</span>
          <button class="save" ?disabled=${0} @click=${0}>${0}</button>
        </div>
      `),Zl("Changes are not saved. They will be lost when the repeater restarts."),t,()=>this._run("region save",{saves:!0}),Zl("Save")):"",this._confirm?Zd(It||(It=Rl`
        <div class="confirm" role="alertdialog">
          ${0}
          <div class="confirm-actions">
            <button class="danger" @click=${0}>${0}</button>
            <button class="quiet" @click=${0}>${0}</button>
          </div>
        </div>
      `),this._confirm.text,()=>{const e=this._confirm;this._run(e.command,{saves:e.saves})},Zl("Yes"),()=>{this._confirm=null},Zl("Cancel")):"",this._error?Zd(zt||(zt=Rl`<div class="error" role="alert">${0}</div>`),this._error):"",this._notice?Zd(Rt||(Rt=Rl`<div class="notice" role="status">${0}</div>`),this._notice):"",this._readAt?Zd(Ot||(Ot=Rl`<chattx-read-age-note .readAt=${0}></chattx-read-age-note>`),this._readAt):"",t,this._load,this._busy?Zl("Working…"):this._rows?Zl("Reload"):Zl("Load"),null===this._rows?Zd(Tt||(Tt=Rl`<div class="hint">${0}</div>`),Zl("Not loaded yet.")):Zd(Nt||(Nt=Rl`
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
        `),this._cut?Zd(Lt||(Lt=Rl`<div class="error">${0}</div>`),Zl("The list did not fit in one repeater reply (160 bytes), so some regions are missing here. The full list is only available over the serial port.")):"",this._renderRows(),Zl("Default scope"),nh(null!==(e=this._defaultScope)&&void 0!==e?e:"<null>"),t,e=>this._setDefault(e.target.value),null===this._defaultScope,Zl("none"),this._rows.filter(e=>"*"!==e.name).map(e=>Zd(Pt||(Pt=Rl`
                <option value=${0} ?selected=${0}>${0}</option>
              `),e.name,this._defaultScope===e.name,e.name)),this._add,Zl("New region name"),Zl("New region"),t,this._newName,e=>{this._newName=e.target.value},Zl("Parent region"),t,e=>{this._newParent=e.target.value},this._rows.map(e=>Zd(qt||(qt=Rl`<option value=${0} ?selected=${0}>${0}</option>`),e.name,this._newParent===e.name,e.name)),t||!this._newName.trim(),Zl("Add")))}};function ch(e){var t;const i=null!==(t=e.trim().split(/\s+/).pop())&&void 0!==t?t:"";return i&&"<null>"!==i?i:null}dh.styles=md(Ht||(Ht=Rl`
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
  `)),Ol([$c({type:Object})],dh.prototype,"hass",void 0),Ol([$c({type:String})],dh.prototype,"prefix",void 0),Ol([$c({type:String})],dh.prototype,"entryId",void 0),Ol([$c({type:Boolean})],dh.prototype,"canEdit",void 0),Ol([kc()],dh.prototype,"_rows",void 0),Ol([kc()],dh.prototype,"_cut",void 0),Ol([kc()],dh.prototype,"_defaultScope",void 0),Ol([kc()],dh.prototype,"_readAt",void 0),Ol([kc()],dh.prototype,"_busy",void 0),Ol([kc()],dh.prototype,"_dirty",void 0),Ol([kc()],dh.prototype,"_error",void 0),Ol([kc()],dh.prototype,"_notice",void 0),Ol([kc()],dh.prototype,"_confirm",void 0),Ol([kc()],dh.prototype,"_newName",void 0),Ol([kc()],dh.prototype,"_newParent",void 0),dh=Ol([_c("chattx-repeater-regions")],dh);let ph=class extends yc{constructor(){super(),this.open=!1,this.loginOnly=!1,this.pendingAction=null,this._confirming=!1,this._confirmAction=null,this._showLogin=!1,this._canLoadSettings=!1,this._loggedIn=!1,this._loginStatePrefix=null,Ap(this,{isOpen:()=>this.open,onEscape:()=>{this._confirming?(this._confirming=!1,this._confirmAction=null):this._showLogin?(this._showLogin=!1,this._canLoadSettings=!1):this._close()}})}updated(){var e,t;const i=this.open&&!this.loginOnly&&this.node&&null!==(e=this.node.pubkey_prefix)&&void 0!==e?e:null;i!==this._loginStatePrefix&&(this._loginStatePrefix=i,this._loggedIn=!1,i&&null!==(t=this.hass)&&void 0!==t&&null!==(t=t.user)&&void 0!==t&&t.is_admin&&Kc(this.hass,i,this.entryId).then(e=>{i===this._loginStatePrefix&&(this._loggedIn=!!e.logged_in_at)}))}render(){var e;if(!this.open||!this.node)return Zd(jt||(jt=Rl``));const t="adv_name"in this.node,i=t?2===this.node.type:"repeater"===this.node.type,o=t&&3===this.node.type,r=t?1===this.node.type:"client"===this.node.type,s=t&&4===this.node.type,a=t?this.node.adv_name:this.node.name,n=this.node.pubkey_prefix,l=i&&!!n&&!(null===(e=this.hass)||void 0===e||null===(e=e.user)||void 0===e||!e.is_admin)&&(!t||this.node.added_to_node);let d=Zd(Vt||(Vt=Rl`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`)),c="Contact",p="";return i?(d=Zd(Kt||(Kt=Rl`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`)),c="Repeater",p="repeater"):o?(d=Zd(Ut||(Ut=Rl`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`)),c="Room Server",p="room-server"):s?(d=Zd(Wt||(Wt=Rl`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`)),c="Sensor",p="sensor"):r&&(d=Zd(Gt||(Gt=Rl`<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`)),c="Client",p="client"),Zd(Xt||(Xt=Rl`
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
    `),this._close,Zl("Node detail — {name}",{name:a}),e=>e.stopPropagation(),`dialog-avatar ${p}`,d,a,c,Zl("Close"),this._close,this._showLogin||this.loginOnly?Zd(Yt||(Yt=Rl`
                  <div class="section">
                    <div class="section-header">${0}</div>
                    <chattx-repeater-login
                      .hass=${0}
                      .prefix=${0}
                      .entryId=${0}
                      @repeater-logged-in=${0}></chattx-repeater-login>
                  </div>
                  <div class="section">
                    <div class="section-header">${0}</div>
                    <chattx-repeater-telemetry
                      .hass=${0}
                      .prefix=${0}
                      .entryId=${0}
                      .canLoad=${0}></chattx-repeater-telemetry>
                  </div>
                  <div class="section">
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
                  </div>
                  ${0}
                `),Zl("Log in to repeater"),this.hass,n,this.entryId,e=>{this._canLoadSettings="guest"!==e.detail.role,this._loggedIn="admin"===e.detail.role},Zl("Telemetry"),this.hass,n,this.entryId,this._canLoadSettings,Zl("Neighbours"),this.hass,n,this.entryId,this._canLoadSettings,Zl("Regions"),this.hass,n,this.entryId,this._canLoadSettings,Zl("Settings"),this.hass,n,this.entryId,this._canLoadSettings,Zl("Terminal"),this.hass,n,this.entryId,this._canLoadSettings,this.loginOnly?"":Zd(Qt||(Qt=Rl`<button class="back-btn" @click=${0}>‹ Back</button>`),()=>{this._showLogin=!1,this._canLoadSettings=!1})):this._confirming?Zd(Jt||(Jt=Rl`
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
                `),"remove-contact"===this._confirmAction?Zl("Remove this as an Added Contact?"):"","remove-contact"===this._confirmAction?Zd(Zt||(Zt=Rl`
                      <div class="confirm-description">${0}</div>
                    `),Zl("Removing the contact will make it a Discovered Contact.")):Zd(ei||(ei=Rl``)),()=>this._confirmAction_exec(),Zl("Yes"),()=>{this._confirming=!1,this._confirmAction=null},Zl("Cancel")):Zd(ti||(ti=Rl`
                  <div class="section">
                    <div class="section-header">${0}</div>
                    <div class="quick-actions ${0}">
                      ${0}
                      ${0}
                      ${0}
                      ${0}
                    </div>
                  </div>

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
                    </div>
                  </div>

                  ${0}

                  ${0}

                `),Zl("Quick Actions"),t?"":"full",l?Zd(ii||(ii=Rl`
                        <button class=${0} @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm3 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>${0}</button>
                      `),this._loggedIn?"action-btn logged-in":"action-btn",()=>{this._showLogin=!0},this._loggedIn?"Logged in":"Log in"):Zd(oi||(oi=Rl``)),t&&this.node.added_to_node&&(r||o)?Zd(ri||(ri=Rl`
                        <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>${0}</button>
                      `),()=>this._dispatchEvent("message"),Zl("Message")):Zd(si||(si=Rl``)),n&&!r?Zd(ai||(ai=Rl`
                        <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M2 12a2 2 0 104 0 2 2 0 10-4 0zM10 12a2 2 0 104 0 2 2 0 10-4 0zM18 12a2 2 0 104 0 2 2 0 10-4 0zM7 10l3 2-3 2zM15 10l3 2-3 2z"/></svg>${0}</button>
                      `),()=>this._dispatchEvent("trace"),Zl("Trace")):Zd(ni||(ni=Rl``)),t&&this.node.added_to_node?Zd(li||(li=Rl`<button class="action-btn warning"
                            ?disabled=${0}
                            @click=${0}>${0}</button>`),"remove-contact"===this.pendingAction,()=>{this._confirming=!0,this._confirmAction="remove-contact"},"remove-contact"===this.pendingAction?Zl("Removing…"):Zl("Remove Contact")):t?Zd(di||(di=Rl`<button class="action-btn"
                            ?disabled=${0}
                            @click=${0}>${0}</button>`),"add-contact"===this.pendingAction,()=>this._dispatchEvent("add-contact"),"add-contact"===this.pendingAction?Zd(ci||(ci=Rl`Adding…`)):Zd(pi||(pi=Rl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>Add Contact`))):Zd(hi||(hi=Rl``)),Zl("Information"),Zl("Public Key Prefix"),n,Zl("Type"),c,t?Zd(ui||(ui=Rl`
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
                      `),Zl("Last Advert"),this.node.last_advert?new Date(1e3*this.node.last_advert).toLocaleString(Ql()):Zl("Unknown"),Zl("Status"),this.node.added_to_node?"Added Contact":"Discovered Contact"):Zd(gi||(gi=Rl``)),!t||0===this.node.adv_lat&&0===this.node.adv_lon?Zd(vi||(vi=Rl``)):Zd(mi||(mi=Rl`
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
                      `),Zl("Location"),Zl("Latitude"),this.node.adv_lat.toFixed(6),Zl("Longitude"),this.node.adv_lon.toFixed(6)),t&&this.node.out_path?Zd(fi||(fi=Rl`
                        <div class="section">
                          <div class="section-header">${0}</div>
                          <div class="info-item">
                            <div class="info-label">${0}</div>
                            <div class="info-value">${0}</div>
                          </div>
                          ${0}
                        </div>
                      `),Zl("Network"),Zl("Route (Outgoing Path)"),this.node.out_path,this.node.out_path_len?Zd(yi||(yi=Rl`
                                <div class="info-item" style="margin-top: 8px;">
                                  <div class="info-label">${0}</div>
                                  <div class="info-value">${0} hops</div>
                                </div>
                              `),Zl("Path Length"),this.node.out_path_len):Zd(bi||(bi=Rl``))):Zd(_i||(_i=Rl``))))}_close(){this.open=!1,this._showLogin=!1,this._canLoadSettings=!1,this._confirming=!1,this._confirmAction=null,this.dispatchEvent(new CustomEvent("node-detail-closed",{bubbles:!0,composed:!0}))}_dispatchEvent(e){this.dispatchEvent(new CustomEvent(`node-${e}`,{detail:{node:this.node},bubbles:!0,composed:!0}))}_confirmAction_exec(){this._confirmAction&&this._dispatchEvent(this._confirmAction),this._close()}};ph.styles=md(xi||(xi=Rl`
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
      max-width: 500px;
      max-height: 80vh;
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
      gap: 12px;
      padding: 16px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      flex-shrink: 0;
    }

    .dialog-avatar {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 24px;
      flex-shrink: 0;
    }

    .dialog-avatar.repeater { background: #ff9800; }
    .dialog-avatar.room-server { background: #9c27b0; }
    .dialog-avatar.sensor { background: #607d8b; }
    .dialog-avatar.client { background: #4caf50; }

    .dialog-title { flex: 1; overflow: hidden; }

    .dialog-name {
      font-size: 18px;
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

    .dialog-content { flex: 1; min-height: 0; overflow-y: auto; padding: 16px; }

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

    .back-btn {
      padding: 6px 0;
      border: none;
      background: none;
      color: var(--secondary-text-color);
      font-size: 13px;
      cursor: pointer;
    }

  `)),Ol([$c({type:Object})],ph.prototype,"node",void 0),Ol([$c({type:Boolean})],ph.prototype,"open",void 0),Ol([$c({type:Object})],ph.prototype,"hass",void 0),Ol([$c({type:String})],ph.prototype,"entryId",void 0),Ol([$c({type:Boolean})],ph.prototype,"loginOnly",void 0),Ol([$c({type:String})],ph.prototype,"pendingAction",void 0),Ol([kc()],ph.prototype,"_confirming",void 0),Ol([kc()],ph.prototype,"_confirmAction",void 0),Ol([kc()],ph.prototype,"_showLogin",void 0),Ol([kc()],ph.prototype,"_canLoadSettings",void 0),Ol([kc()],ph.prototype,"_loggedIn",void 0),ph=Ol([_c("chattx-node-detail-dialog")],ph);let hh=class extends yc{constructor(){super(...arguments),this.disabled=!1,this._open=!1,this._messages=null,this._onOutsideClick=e=>{e.composedPath().includes(this)||this._close()},this._onKeydown=e=>{"Escape"===e.key&&this._close()}}disconnectedCallback(){super.disconnectedCallback(),this._removeListeners()}_removeListeners(){document.removeEventListener("click",this._onOutsideClick),document.removeEventListener("keydown",this._onKeydown)}_close(){this._open=!1,this._removeListeners()}async _toggle(){this._open?this._close():(this._open=!0,document.addEventListener("click",this._onOutsideClick),document.addEventListener("keydown",this._onKeydown),this.hass&&(this._messages=await ip(this.hass)))}_select(e){this._close(),this.dispatchEvent(new CustomEvent("quick-message-selected",{detail:{message:e}}))}render(){const e=Zl("Quick messages");return Zd(wi||(wi=Rl`
      <button class="toggle" title=${0} aria-label=${0} aria-expanded=${0} ?disabled=${0} @click=${0}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
      </button>
      ${0}
    `),e,e,this._open?"true":"false",this.disabled,this._toggle,this._open?Zd($i||($i=Rl`
        <div class="menu">
          ${0}
        </div>
      `),null===this._messages?"":0===this._messages.length?Zd(ki||(ki=Rl`<div class="empty">${0}</div>`),Zl("Nothing here yet. Add messages in the Settings tab.")):this._messages.map(e=>Zd(Ci||(Ci=Rl`<button class="item" @click=${0}>${0}</button>`),()=>this._select(e),e))):"")}};hh.styles=md(Fi||(Fi=Rl`
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
  `)),Ol([$c({type:Object})],hh.prototype,"hass",void 0),Ol([$c({type:Boolean})],hh.prototype,"disabled",void 0),Ol([kc()],hh.prototype,"_open",void 0),Ol([kc()],hh.prototype,"_messages",void 0),hh=Ol([_c("chattx-quick-message-picker")],hh);const uh=["😀","😁","😂","🤣","😊","😉","😍","😘","😎","🤔","😅","😇","🙂","🙃","😐","😴","😢","😭","😡","😱","🤯","🥳","🤝","🙏","👍","👎","👌","👋","👏","💪","✌️","🤞","❤️","🔥","⭐","✅","❌","❗","❓","⚠️","🎉","💡","📡","📻","📟","📱","🛰️","🗼","🔋","🔌","⚡","🌐","📍","🗺️","🧭","🏠","🚗","🚲","🥾","⛰️","☀️","⛅","🌧️","❄️","🌙","☕","🍺","🍕","🐶","🐱","🦌","🌲"];let gh=class extends yc{constructor(){super(...arguments),this.disabled=!1,this._open=!1,this._onOutsideClick=e=>{e.composedPath().includes(this)||this._close()},this._onKeydown=e=>{"Escape"===e.key&&this._close()}}disconnectedCallback(){super.disconnectedCallback(),this._removeListeners()}_removeListeners(){document.removeEventListener("click",this._onOutsideClick),document.removeEventListener("keydown",this._onKeydown)}_close(){this._open=!1,this._removeListeners()}_toggle(){this._open?this._close():(this._open=!0,document.addEventListener("click",this._onOutsideClick),document.addEventListener("keydown",this._onKeydown))}_select(e){this._close(),this.dispatchEvent(new CustomEvent("emoji-selected",{detail:{emoji:e}}))}render(){const e=Zl("Insert emoji");return Zd(Si||(Si=Rl`
      <button class="toggle" title=${0} aria-label=${0} aria-expanded=${0} ?disabled=${0} @click=${0}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,17.5C14.33,17.5 16.31,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5Z"/></svg>
      </button>
      ${0}
    `),e,e,this._open?"true":"false",this.disabled,this._toggle,this._open?Zd(Ai||(Ai=Rl`
        <div class="menu">
          ${0}
        </div>
      `),uh.map(e=>Zd(Di||(Di=Rl`<button class="item" @click=${0}>${0}</button>`),()=>this._select(e),e))):"")}};gh.styles=md(Ei||(Ei=Rl`
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
  `)),Ol([$c({type:Boolean})],gh.prototype,"disabled",void 0),Ol([kc()],gh.prototype,"_open",void 0),gh=Ol([_c("chattx-emoji-picker")],gh);let mh=class extends yc{constructor(){super(...arguments),this.conversations=[],this.activity={},this.selectedId=null,this.narrow=!1,this.lastRead={},this._messageStore=null,this._unsubUnread=null,this._inputText="",this._sending=!1,this._viewportNarrow=!1,this._mediaQuery=null,this._mediaHandler=null,this._narrowShowMessages=!1,this._manageOpen=!1,this._manageInitialTab="contacts",this._searchOpen=!1,this._repeaterDialogOpen=!1,this._stripDiacritics=function(){try{return"true"===localStorage.getItem(mp)}catch(e){return!1}}(),this._showContactIds=function(){try{return"false"!==localStorage.getItem(vp)}catch(e){return!0}}(),this._focusAfterSelect=!1,this._repeaterLoggedIn=!1,this._repeaterLoginPrefix=null,this._currentEntityId=null,this._conversationResolved=!1,this._pendingScroll=null,this._scrollInFlight=!1,this._dividerShown=!1,this._scrollGuardUntil=0,this._lastMessageCount=0,this._onViewportResize=()=>{var e;null!==(e=this._messageStore)&&void 0!==e&&e.userAtBottom&&!this._messageStore.hasNewerMessages&&requestAnimationFrame(()=>{if(this._isScrollGuarded())return;const e=this._getChatContainer();e&&(e.scrollTop=e.scrollHeight)})},this._onPopState=()=>{var e;!this._narrowShowMessages||null!==(e=history.state)&&void 0!==e&&e.chattxConversation||(this._narrowShowMessages=!1)}}_openNarrowConversation(){var e,t;this._narrowShowMessages||null!==(e=history.state)&&void 0!==e&&e.chattxConversation||history.pushState({...null!==(t=history.state)&&void 0!==t?t:{},chattxConversation:!0},""),this._narrowShowMessages=!0}_closeNarrowConversation(){var e;null!==(e=history.state)&&void 0!==e&&e.chattxConversation?history.back():this._narrowShowMessages=!1}get _isNarrow(){return this.narrow||this._viewportNarrow}connectedCallback(){var e;super.connectedCallback(),this.config&&!this._messageStore&&(this._messageStore=new up(this.config),this._messageStore.setOnChange(()=>this.requestUpdate())),this.unread&&!this._unsubUnread&&(this._unsubUnread=this.unread.subscribe(()=>{this.lastRead=this.unread.lastRead,this.requestUpdate()}),this.lastRead=this.unread.lastRead,this.unread.onPostSwitchTimerFire(()=>this._checkAndMarkReadIfAtBottom())),this._mediaQuery=window.matchMedia("(max-width: 870px)"),this._viewportNarrow=this._mediaQuery.matches,this._mediaHandler=e=>{this._viewportNarrow=e.matches},this._mediaQuery.addEventListener("change",this._mediaHandler),null===(e=window.visualViewport)||void 0===e||e.addEventListener("resize",this._onViewportResize),window.addEventListener("popstate",this._onPopState)}disconnectedCallback(){var e,t;super.disconnectedCallback(),window.removeEventListener("popstate",this._onPopState),null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",this._onViewportResize),this._messageStore&&(this._messageStore.destroy(),this._messageStore=null),this._unsubUnread&&(this._unsubUnread(),this._unsubUnread=null),null===(t=this.unread)||void 0===t||t.endConversation(),this._mediaQuery&&this._mediaHandler&&(this._mediaQuery.removeEventListener("change",this._mediaHandler),this._mediaQuery=null,this._mediaHandler=null)}updated(e){if(this._syncRepeaterLoginState(),this._focusAfterSelect){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".input-area textarea");e&&!e.disabled&&(this._focusAfterSelect=!1,e.focus(),e.setSelectionRange(e.value.length,e.value.length))}if(e.has("hass")&&this.hass&&this._messageStore&&this._messageStore.setHass(this.hass),e.has("config")&&this.config&&this._messageStore){this._messageStore.setConfig(this.config);const t=e.get("config");t&&t.entry_id!==this.config.entry_id&&(this.selectedId=null,this._currentEntityId=null,this._conversationResolved=!1,this._pendingScroll=null,this._lastMessageCount=0,this.unread.endConversation(),this._messageStore.switchEntity(null),this.dispatchEvent(new CustomEvent("active-entity-changed",{detail:{entityId:null},bubbles:!0,composed:!0})))}if(e.has("selectedId")&&this._onConversationSelected(),e.has("lastRead")&&this._currentEntityId&&this._conversationResolved&&null===this._pendingScroll&&this.unread.maybeReanchorOnLateData(this._currentEntityId)&&(this._pendingScroll="last-read"),this._pendingScroll){const e=this._messageStore,t=e&&!e.loading;t&&e.messages.length>0?(this._executeScroll(this._pendingScroll),this._pendingScroll=null,this._lastMessageCount=e.messages.length):t&&0===e.messages.length&&(this._pendingScroll=null)}else if(this._messageStore){const e=this._messageStore.messages.length;e>this._lastMessageCount&&this._lastMessageCount>0&&this._scrollToBottomIfNearEnd(),this._lastMessageCount=e}}render(){var e,t,i,o,r,s;return this._isNarrow?this._narrowShowMessages?Zd(Mi||(Mi=Rl`
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
        `),()=>this._closeNarrowConversation(),Zl("Back"),this._getConversationName(),this._renderScopeChip(),this._renderRepeaterButton(),Zl("Search messages"),Zl("Search messages"),()=>{this._searchOpen=!this._searchOpen},this._renderChatArea(),this._renderRepeaterDialog()):Zd(Bi||(Bi=Rl`
          <div class="chat-layout narrow-list-only">
            <chattx-conversation-list
              .showContactIds=${0}
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
        `),this._showContactIds,this.conversations,this.activity,this.selectedId,this.unread,this.unread.counts,(null===(r=this.config)||void 0===r?void 0:r.node_prefix)||null,e=>{const t=e.detail.id;t===this.selectedId&&(this.unread.resetUnreadCountAtSelection(),this._pendingScroll="bottom"),this.selectedId=t,this._openNarrowConversation(),this._focusAfterSelect=!0,this.requestUpdate()},()=>this._onManageRequested(),this._manageOpen?Zd(Ii||(Ii=Rl`
              <chattx-manage-dialog
                .showContactIds=${0}
                @show-contact-ids-changed=${0}
                .hass=${0}
                .entryId=${0}
                .narrow=${0}
                .initialTab=${0}
                @manage-closed=${0}
                @contacts-changed=${0}
                @channels-changed=${0}
              ></chattx-manage-dialog>
            `),this._showContactIds,this._onShowContactIdsChanged,this.hass,null===(s=this.config)||void 0===s?void 0:s.entry_id,this.narrow,this._manageInitialTab,()=>this._manageOpen=!1,this._onContactsChanged,this._onChannelsChanged):Zd(zi||(zi=Rl``))):Zd(Ri||(Ri=Rl`
      <div class="chat-layout">
        <chattx-conversation-list
          .showContactIds=${0}
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
    `),this._showContactIds,this.conversations,this.activity,this.selectedId,this.unread,this.unread.counts,(null===(e=this.config)||void 0===e?void 0:e.node_prefix)||null,e=>{const t=e.detail.id;t===this.selectedId&&(this.unread.resetUnreadCountAtSelection(),this._pendingScroll="bottom"),this.selectedId=t,this._focusAfterSelect=!0,this.requestUpdate()},()=>this._onManageRequested(),this.selectedId?Zd(Oi||(Oi=Rl`
            <div class="narrow-header" style="display: flex; align-items: center; padding: 8px 16px;">
              <div style="flex: 1; font-size: 14px; font-weight: 500; color: var(--primary-text-color);">
                ${0}${0}
              </div>
              <div class="chat-header-actions">
                ${0}
                <button class="header-action-btn" title=${0} aria-label=${0} @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></button>
              </div>
            </div>
          `),this._getConversationName(),this._renderScopeChip(),this._renderRepeaterButton(),Zl("Search messages"),Zl("Search messages"),()=>{this._searchOpen=!this._searchOpen}):"",this._renderChatArea(),this._renderRepeaterDialog(),this._searchOpen?Zd(Ti||(Ti=Rl`
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
        `),this.hass,null===(t=this.config)||void 0===t?void 0:t.entry_id,this._currentEntityId||void 0,null===(i=this.config)||void 0===i?void 0:i.node_name,this._onSearchResultSelected,()=>{this._searchOpen=!1}):"",this._manageOpen?Zd(Ni||(Ni=Rl`
          <chattx-manage-dialog
            .showContactIds=${0}
            @show-contact-ids-changed=${0}
            .hass=${0}
            .entryId=${0}
            .narrow=${0}
            .initialTab=${0}
            @manage-closed=${0}
            @contacts-changed=${0}
            @channels-changed=${0}
          ></chattx-manage-dialog>
        `),this._showContactIds,this._onShowContactIdsChanged,this.hass,null===(o=this.config)||void 0===o?void 0:o.entry_id,this.narrow,this._manageInitialTab,()=>this._manageOpen=!1,this._onContactsChanged,this._onChannelsChanged):Zd(Li||(Li=Rl``)))}_renderChatArea(){var e,t,i,o,r,s;if(!this._messageStore||!this.selectedId)return Zd(Pi||(Pi=Rl`
        <div class="empty-state">
          <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg></div>
          <div class="empty-text">${0}</div>
          <div class="empty-subtext">${0}</div>
        </div>
      `),Zl("Select a conversation to start"),Zl("Choose a channel or contact from the list"));if(!this._conversationResolved)return Zd(qi||(qi=Rl`
        <div class="empty-state">
          <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></div>
          <div class="empty-text">${0}</div>
          <div class="empty-subtext">${0}</div>
        </div>
      `),Zl("Conversation unavailable"),Zl("This contact may no longer be added to the node"));const a=this._messageStore.messages,n=function(e,t){var i;const o=null!==(i=t.group_timeout)&&void 0!==i?i:300,r=!1!==t.group_messages?function(e,t){if(0===e.length)return[];const i=[];let o=null;for(const r of e)!o||r.isSystem||o.isSystem||r.sender!==o.sender||(r.timestamp.getTime()-o.endTime.getTime())/1e3>t?(o={sender:r.sender,isOutgoing:r.isOutgoing,isSystem:r.isSystem,messages:[r],startTime:r.timestamp,endTime:r.timestamp},i.push(o)):(o.messages.push(r),o.endTime=r.timestamp);return i}(e,o):e.map(e=>({sender:e.sender,isOutgoing:e.isOutgoing,isSystem:e.isSystem,messages:[e],startTime:e.timestamp,endTime:e.timestamp}));if(0===r.length)return[];const s=[];let a=null;for(const e of r){const i=e.startTime;!1===t.show_date_separators||a&&!cp(a,i)||s.push({type:"date-separator",date:i,label:pp(i)}),s.push({type:"group",group:e}),a=i}return s}(a,{group_messages:null===(e=null===(t=this.config)||void 0===t?void 0:t.group_messages)||void 0===e||e,group_timeout:null!==(i=null===(o=this.config)||void 0===o?void 0:o.group_timeout)&&void 0!==i?i:300,show_date_separators:null===(r=null===(s=this.config)||void 0===s?void 0:s.show_date_separators)||void 0===r||r}),l=this._remainingBytes(),d=Zl("Send without diacritics. The text changes when it is sent.");return Zd(Hi||(Hi=Rl`
      <div class="chat-container" @reply-to-sender=${0} @scroll=${0}>
        ${0}
        ${0}
        ${0}
        ${0}
        ${0}
        ${0}
      </div>
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
        </div>
        <textarea
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
    `),this._onReplyToSender,this._onChatScroll,this._messageStore.loadingOlder?Zd(ji||(ji=Rl`<div class="loading-older"><div class="loading-spinner"></div></div>`)):Zd(Vi||(Vi=Rl``)),this._messageStore.error?Zd(Ki||(Ki=Rl`
              <div class="error-state">
                <span><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg></span>
                <span>${0}</span>
              </div>
            `),this._messageStore.error):Zd(Ui||(Ui=Rl``)),this._messageStore.loading&&0===a.length?Zd(Wi||(Wi=Rl`
              <div class="loading-state">
                <div class="loading-spinner"></div>
                ${0}
              </div>
            `),Zl("Loading messages...")):Zd(Gi||(Gi=Rl``)),0!==n.length||this._messageStore.loading?Zd(Yi||(Yi=Rl``)):Zd(Xi||(Xi=Rl`
              <div class="empty-state">
                <div class="empty-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h5v7h7v9H6z"/></svg></div>
                <div class="empty-text">${0}</div>
                <div class="empty-subtext">${0}</div>
              </div>
            `),Zl("No messages yet"),Zl("Be the first to send a message!")),this._renderItemsWithDivider(n),this._renderNewMessagesIndicator(),this._keepComposerFocus,this.hass,this._sending||!this.selectedId,this._onQuickMessageSelected,this._stripDiacritics?"diacritics-toggle on":"diacritics-toggle",d,d,this._stripDiacritics?"true":"false",this._toggleStripDiacritics,Zl("Type a message..."),Zl("Message text. Press Enter to send, Shift+Enter for newline."),this._inputText,e=>{const t=e.target;this._inputText=t.value},e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),this._sendMessage())},this._sending,!this.selectedId,this._sending||!this.selectedId,this._onEmojiSelected,l<=0?"byte-counter at-limit":"byte-counter",Zl("Bytes left. Letters with diacritics take 2, emoji take 4. In channels your node name is part of the message."),l,Zl("Send message"),()=>this._sendMessage(),this._sending||!this.selectedId||!this._inputText.trim()||l<0)}_renderItemsWithDivider(e){const t=[];let i=0,o=!1;const r=this.unread.dividerAfterGroupIdx(e);this._dividerShown=null!==r;for(const d of e){var s,a,n,l;"date-separator"!==d.type?(o||null===r||i!==r||(t.push(Zd(Ji||(Ji=Rl`
          <div class="unread-divider">
            <span>${0}</span>
          </div>
        `),Zl("New messages"))),o=!0),t.push(Zd(Zi||(Zi=Rl`
        <chattx-message-bubble
          .group=${0}
          .hass=${0}
          .nodeName=${0}
          .timestampFormat=${0}></chattx-message-bubble>
      `),d.group,this.hass,null!==(s=null===(a=this.config)||void 0===a?void 0:a.node_name)&&void 0!==s?s:"",null!==(n=null===(l=this.config)||void 0===l?void 0:l.timestamp_format)&&void 0!==n?n:"relative")),i++):t.push(Zd(Qi||(Qi=Rl`
          <div class="date-separator">
            <span>${0}</span>
          </div>
        `),d.label))}return t}_renderNewMessagesIndicator(){const e=this._messageStore;if(!e)return Zd(eo||(eo=Rl``));const t=e.newMessagesWhileAway,i=e.hasNewerMessages;if(null!==this._pendingScroll||this._scrollInFlight)return Zd(to||(to=Rl``));const o=function(e){return e.counter>0?`↓ ${e.counter} new`:e.hasNewer||e.hasContentBelow?e.cursorAtTail&&!e.hasNewer?"↓ latest":"↓ unread":null}({counter:t,hasNewer:i,hasContentBelow:this._hasContentBelowViewport(),cursorAtTail:this.unread.cursorAtTail(this._currentEntityId,this._latestNonTempMessageId())});return null===o?Zd(io||(io=Rl``)):Zd(oo||(oo=Rl`
      <button class="new-messages-indicator" @click=${0}>
        ${0}
      </button>
    `),this._jumpToBottom,o)}_onConversationSelected(){if(this.selectedId&&this._messageStore&&this.config&&this.hass){var e;const t=this.conversations.find(e=>"pubkey_prefix"in e?e.pubkey_prefix===this.selectedId:String(e.channel_idx)===this.selectedId);if(!t)return this._conversationResolved=!1,this._currentEntityId=null,void(this._messageStore&&this._messageStore.switchEntity(null));this._conversationResolved=!0;let i=null;if("pubkey_prefix"in t){const e=t.pubkey_prefix;i=function(e,t,i){const o=i.substring(0,6);if(t.contact_entity_pattern&&t.node_prefix){const i=t.contact_entity_pattern.replace("{prefix}",t.node_prefix).replace("{contact}",o);if(e.states[i])return i}const r=`_${o}_messages`,s=t.node_prefix?`_${t.node_prefix}_`:"";for(const t of Object.keys(e.states))if(t.startsWith("binary_sensor.")&&t.endsWith(r)&&(!s||t.includes(s)))return t;return null}(this.hass,this.config,e)}else{const e=t.channel_idx;i=function(e,t,i){if(t.channel_entity_pattern&&t.node_prefix){const o=t.channel_entity_pattern.replace("{prefix}",t.node_prefix).replace("{idx}",String(i));if(e.states[o])return o}const o=`_ch_${i}_messages`,r=t.node_prefix?`_${t.node_prefix}_`:"";for(const t of Object.keys(e.states))if(t.startsWith("binary_sensor.")&&t.endsWith(o)&&(!r||t.includes(r)))return t;return null}(this.hass,this.config,e)}this._currentEntityId=i,this.dispatchEvent(new CustomEvent("active-entity-changed",{detail:{entityId:i},bubbles:!0,composed:!0}));const o=this._getUnreadCountForSelected(),r=i&&(null===(e=this.lastRead)||void 0===e?void 0:e[i])||null;this._pendingScroll=r||o>0?"last-read":"bottom",this._lastMessageCount=0,this.unread.beginConversation(i,o),this._messageStore.switchEntity(i,r)}}_remainingBytes(){var e,t,i,o;return i=this._outgoingText(),160-(null===(o=this._isContact()?null:null!==(e=null===(t=this.config)||void 0===t?void 0:t.node_name)&&void 0!==e?e:"")?0:gp.encode(`${o}: `).length)-gp.encode(i.trim()).length}_outgoingText(){return this._stripDiacritics?this._inputText.split(/(@\[[^\]]*\])/).map((e,t)=>t%2==1?e:e.normalize("NFD").replace(/([A-Za-z])[̀-ͯ]+/g,"$1").normalize("NFC")).join(""):this._inputText}_onShowContactIdsChanged(e){this._showContactIds=e.detail.enabled,function(e){try{localStorage.setItem(vp,String(e))}catch(e){}}(e.detail.enabled)}_toggleStripDiacritics(){this._stripDiacritics=!this._stripDiacritics,function(e){try{localStorage.setItem(mp,String(e))}catch(e){}}(this._stripDiacritics)}async _onQuickMessageSelected(e){const t=this._inputText.trimEnd();this._inputText=t?`${t} ${e.detail.message}`:e.detail.message,await this._focusInput()}_keepComposerFocus(e){e.target instanceof HTMLTextAreaElement||e.preventDefault()}async _onEmojiSelected(e){var t,i,o;const r=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".input-area textarea"),s=null!==(i=null==r?void 0:r.selectionStart)&&void 0!==i?i:this._inputText.length,a=null!==(o=null==r?void 0:r.selectionEnd)&&void 0!==o?o:s;this._inputText=this._inputText.slice(0,s)+e.detail.emoji+this._inputText.slice(a),await this.updateComplete,await new Promise(e=>setTimeout(e,0));const n=s+e.detail.emoji.length;null==r||r.focus(),null==r||r.setSelectionRange(n,n)}async _sendMessage(){if(this._sending||!this._inputText.trim()||!this.selectedId||!this.hass||!this.config)return;if(this._remainingBytes()<0)return;if(!this._conversationResolved)return void console.warn("Cannot send — conversation not resolved");this._sending=!0;const e=this._outgoingText().trim();this._inputText="";try{var t;this._messageStore&&(this._messageStore.addOptimisticMessage(this.config.node_name,e),this._pendingScroll="bottom");const o=null===(t=this.config)||void 0===t?void 0:t.entry_id;if(this._isContact())await async function(e,t,i,o){try{const r={pubkey_prefix:t,message:i};o&&(r.entry_id=o),await e.callService("meshcore","send_message",r)}catch(e){throw new Error(`Failed to send direct message: ${String(e)}`)}}(this.hass,this.selectedId,e,o);else{var i;const t=parseInt(this.selectedId,10);if(isNaN(t)||t<0||t>255)return console.error("Invalid channel index:",this.selectedId),void(this._inputText=e);await async function(e,t,i,o,r){try{const s={channel_idx:t,message:i};o&&(s.entry_id=o),r&&(s.scope=r),await e.callService("meshcore","send_channel_message",s)}catch(e){throw new Error(`Failed to send channel message: ${String(e)}`)}}(this.hass,t,e,o,null!==(i=this._getActiveChannelScope())&&void 0!==i?i:void 0)}}catch(t){console.error("Failed to send message:",t),this._inputText=e}finally{this._sending=!1}}_latestNonTempMessageId(){var e,t;const i=null!==(e=null===(t=this._messageStore)||void 0===t?void 0:t.messages)&&void 0!==e?e:[];for(let e=i.length-1;e>=0;e--){const t=i[e].id;if(!t.startsWith("rt_")&&!t.startsWith("optimistic_"))return t}return null}_isContact(){return!!this.selectedId&&!/^\d+$/.test(this.selectedId)}_onManageRequested(){this._manageInitialTab="contacts",this._manageOpen=!0}_onContactsChanged(){this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}_onChannelsChanged(){this.dispatchEvent(new CustomEvent("channels-changed",{bubbles:!0,composed:!0}))}_onReplyToSender(e){const{mention:t}=e.detail;t&&(this._inputText=t+this._inputText,this.requestUpdate(),this._focusInput())}async _focusInput(){var e;await this.updateComplete,await new Promise(e=>setTimeout(e,0));const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".input-area textarea");null==t||t.focus(),null==t||t.setSelectionRange(t.value.length,t.value.length)}_getConversationName(){if(!this.selectedId)return"";const e=this.conversations.find(e=>"pubkey_prefix"in e?e.pubkey_prefix===this.selectedId:String(e.channel_idx)===this.selectedId);return e?"pubkey_prefix"in e?e.adv_name:e.name:this.selectedId}_getActiveChannelScope(){if(!this.selectedId||this._isContact())return null;const e=this.conversations.find(e=>!("pubkey_prefix"in e)&&String(e.channel_idx)===this.selectedId);return e&&e.scope||null}_selectedRepeater(){var e;if(null===(e=this.hass)||void 0===e||null===(e=e.user)||void 0===e||!e.is_admin)return null;const t=this.conversations.find(e=>"pubkey_prefix"in e&&e.pubkey_prefix===this.selectedId);return 2===(null==t?void 0:t.type)&&t.added_to_node?t:null}_syncRepeaterLoginState(){var e,t;const i=null!==(e=null===(t=this._selectedRepeater())||void 0===t?void 0:t.pubkey_prefix)&&void 0!==e?e:null;i!==this._repeaterLoginPrefix&&(this._repeaterLoginPrefix=i,this._repeaterLoggedIn=!1,i&&this._loadRepeaterLoginState(i))}async _loadRepeaterLoginState(e){var t;if(!this.hass)return;const i=await Kc(this.hass,e,null===(t=this.config)||void 0===t?void 0:t.entry_id);e===this._repeaterLoginPrefix&&(this._repeaterLoggedIn=!!i.logged_in_at)}_renderRepeaterButton(){if(!this._selectedRepeater())return"";const e=this._repeaterLoggedIn?Zl("Logged in. Repeater settings"):Zl("Repeater login and settings");return Zd(ro||(ro=Rl`<button class=${0} title=${0} aria-label=${0} @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm3 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg></button>`),this._repeaterLoggedIn?"header-action-btn repeater-login-btn logged-in":"header-action-btn repeater-login-btn",e,e,()=>{this._repeaterDialogOpen=!0})}_renderRepeaterDialog(){var e;const t=this._repeaterDialogOpen?this._selectedRepeater():null;return t?Zd(so||(so=Rl`
      <chattx-node-detail-dialog
        .hass=${0}
        .node=${0}
        .entryId=${0}
        .loginOnly=${0}
        .open=${0}
        @node-detail-closed=${0}>
      </chattx-node-detail-dialog>
    `),this.hass,t,null===(e=this.config)||void 0===e?void 0:e.entry_id,!0,!0,()=>{this._repeaterDialogOpen=!1,this._loadRepeaterLoginState(t.pubkey_prefix)}):""}_renderScopeChip(){const e=this._getActiveChannelScope();return e?Zd(ao||(ao=Rl`<button
      class="scope-chip"
      title=${0}
      aria-label=${0}
      @click=${0}>🌐 ${0}</button>`),Zl("Region scope: messages on this channel flood only through '{scope}' repeaters. Click to manage.",{scope:e}),Zl("Region scope {scope} — manage channels",{scope:e}),()=>{this._manageInitialTab="channels",this._manageOpen=!0},e):""}_getChatContainer(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(".chat-container")}_isScrollGuarded(){return this._scrollInFlight||Date.now()<this._scrollGuardUntil}_executeScroll(e){this._scrollInFlight=!0,"last-read"===e&&(this._scrollGuardUntil=Date.now()+2e3),this._doScrollWithRetry(e,0)}_doScrollWithRetry(e,t){this.updateComplete.then(()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{const i=this._getChatContainer();if(!i)return void(this._scrollInFlight=!1);if("bottom"===e)return i.scrollTop=i.scrollHeight,void(this._scrollInFlight=!1);const o=i.querySelector(".unread-divider");if(o){const e=i.getBoundingClientRect(),t=o.getBoundingClientRect();i.scrollTop+=t.top-e.top,this._scrollInFlight=!1}else this._dividerShown&&t<10?setTimeout(()=>this._doScrollWithRetry(e,t+1),50):(i.scrollTop=i.scrollHeight,this._scrollInFlight=!1)})})})}_scrollToBottomIfNearEnd(){if(this._isScrollGuarded())return;const e=this._messageStore;null!=e&&e.hasNewerMessages||this.updateComplete.then(()=>{requestAnimationFrame(()=>{if(this._isScrollGuarded())return;const e=this._getChatContainer();e&&e.scrollHeight-e.scrollTop-e.clientHeight<150&&(e.scrollTop=e.scrollHeight,this._checkAndMarkReadIfAtBottom())})})}_onChatScroll(e){const t=e.target,i=this._messageStore;if(!t||!i)return;const o=t.scrollTop,r=t.scrollHeight-t.scrollTop-t.clientHeight<150;if(i.setUserAtBottom(r),o<150&&i.hasOlderMessages&&!i.loadingOlder&&!this._isScrollGuarded()){const e=t.scrollHeight;i.loadOlderMessages().then(()=>{this.updateComplete.then(()=>{requestAnimationFrame(()=>{const i=t.scrollHeight-e;i>0&&(t.scrollTop+=i)})})})}r&&(i.hasNewerMessages&&!i.loadingNewer?i.loadNewerMessages():i.hasNewerMessages||this._checkAndMarkReadIfAtBottom())}_isLastMessageVisible(){const e=this._getChatContainer();if(!e)return!1;const t=e.querySelectorAll("chattx-message-bubble"),i=t[t.length-1];if(!i)return!1;const o=e.getBoundingClientRect().bottom;return i.getBoundingClientRect().bottom<=o+5}_hasContentBelowViewport(){var e,t;return!!this._getChatContainer()&&(0!==(null!==(e=null===(t=this._messageStore)||void 0===t?void 0:t.messages.length)&&void 0!==e?e:0)&&!this._isLastMessageVisible())}_checkAndMarkReadIfAtBottom(){const e=this._messageStore;this._currentEntityId&&e&&this.unread.onScrollState({entityId:this._currentEntityId,lastMessageVisible:this._isLastMessageVisible(),hasNewerMessages:e.hasNewerMessages,bufferTailId:this._latestNonTempMessageId()})&&e.resetNewMessagesCounter()}async _jumpToBottom(){const e=this._messageStore;if(e){for(;e.hasNewerMessages&&!e.loadingNewer;)await e.loadNewerMessages();await this.updateComplete,requestAnimationFrame(()=>{const t=this._getChatContainer();t&&(t.scrollTop=t.scrollHeight,this._currentEntityId&&this.unread.onPillJump({entityId:this._currentEntityId,bufferTailId:this._latestNonTempMessageId()})&&e.resetNewMessagesCounter())})}}_getUnreadCountForSelected(){var e,t;return this.selectedId&&this.unread?this.unread.badgeCount(this.selectedId,null!==(e=null===(t=this.config)||void 0===t?void 0:t.node_prefix)&&void 0!==e?e:null,this._currentEntityId):0}_onSearchResultSelected(e){const{entityId:t,messageId:i,timestamp:o}=e.detail;t&&this._messageStore&&(this._messageStore.switchEntity(t),this._currentEntityId=t),i&&this._scrollToAndHighlight(i,o)}_scrollToAndHighlight(e,t){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._findAndHighlightBubble(e)||t&&this._messageStore&&this._messageStore.fetchAroundTimestamp(t).then(t=>{t&&this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._findAndHighlightBubble(e)})})})})})}_findAndHighlightBubble(e){var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".chat-container");if(!i)return!1;const o=i.querySelectorAll("chattx-message-bubble");for(const t of Array.from(o)){var r;const i=null===(r=t.shadowRoot)||void 0===r?void 0:r.querySelector(`[data-msg-id="${e}"]`);if(i)return i.scrollIntoView({behavior:"smooth",block:"center"}),i.classList.add("search-highlight"),setTimeout(()=>i.classList.remove("search-highlight"),2500),!0}return!1}};mh.styles=md(no||(no=Rl`
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

    .diacritics-toggle.on {
      border-color: var(--primary-color, #03a9f4);
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
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
  `)),Ol([$c({type:Object})],mh.prototype,"hass",void 0),Ol([$c({type:Object})],mh.prototype,"config",void 0),Ol([$c({type:Array})],mh.prototype,"conversations",void 0),Ol([$c({type:Object})],mh.prototype,"activity",void 0),Ol([$c({type:String})],mh.prototype,"selectedId",void 0),Ol([$c({type:Boolean})],mh.prototype,"narrow",void 0),Ol([$c({attribute:!1})],mh.prototype,"unread",void 0),Ol([$c({type:Object})],mh.prototype,"lastRead",void 0),Ol([kc()],mh.prototype,"_messageStore",void 0),Ol([kc()],mh.prototype,"_inputText",void 0),Ol([kc()],mh.prototype,"_sending",void 0),Ol([kc()],mh.prototype,"_viewportNarrow",void 0),Ol([kc()],mh.prototype,"_narrowShowMessages",void 0),Ol([kc()],mh.prototype,"_manageOpen",void 0),Ol([kc()],mh.prototype,"_manageInitialTab",void 0),Ol([kc()],mh.prototype,"_searchOpen",void 0),Ol([kc()],mh.prototype,"_repeaterDialogOpen",void 0),Ol([kc()],mh.prototype,"_stripDiacritics",void 0),Ol([kc()],mh.prototype,"_showContactIds",void 0),Ol([kc()],mh.prototype,"_repeaterLoggedIn",void 0),Ol([kc()],mh.prototype,"_currentEntityId",void 0),Ol([kc()],mh.prototype,"_conversationResolved",void 0),Ol([kc()],mh.prototype,"_pendingScroll",void 0),mh=Ol([_c("chattx-chat-page")],mh);const vh=rh(class extends sh{constructor(e){if(super(e),this._timer=null,this._startX=0,this._startY=0,this._attached=!1,this._callback=null,this._element=null,this._onPointerDown=e=>this._handleDown(e),this._onPointerUp=()=>this._cancelTimer(),this._onPointerMove=e=>this._handleMove(e),this._onContextMenu=e=>{null!==this._timer&&e.preventDefault()},6!==e.type)throw new Error("longPress directive must be used on an element")}render(e){}update(e,[t]){if(this._callback=t,!this._attached){this._element=e.element;const t=this._element;t.addEventListener("pointerdown",this._onPointerDown),t.addEventListener("pointerup",this._onPointerUp),t.addEventListener("pointercancel",this._onPointerUp),t.addEventListener("pointermove",this._onPointerMove),t.addEventListener("contextmenu",this._onContextMenu),this._attached=!0}return this.render(t)}_handleDown(e){0===e.button&&(this._startX=e.clientX,this._startY=e.clientY,this._cancelTimer(),this._timer=setTimeout(()=>{var e;this._timer=null,null===(e=this._callback)||void 0===e||e.call(this)},500))}_handleMove(e){if(null===this._timer)return;const t=e.clientX-this._startX,i=e.clientY-this._startY;t*t+i*i>100&&this._cancelTimer()}_cancelTimer(){null!==this._timer&&(clearTimeout(this._timer),this._timer=null)}});let fh=class extends yc{constructor(){super(...arguments),this.entityId="",this.label="",this.icon="",this.colorScheme="neutral"}render(){var e,t,i;if(!this.hass||!this.entityId)return ic;const o=this.hass.states[this.entityId];if(!o)return ic;const r=o.state,s=(null===(e=o.attributes)||void 0===e?void 0:e.unit_of_measurement)||"",a=this.label||(null===(t=o.attributes)||void 0===t?void 0:t.friendly_name)||this.entityId,n="unavailable"===r||"unknown"===r,l=null===(i=this.hass.entities)||void 0===i||null===(i=i[this.entityId])||void 0===i?void 0:i.display_precision;let d="";if("battery"===this.colorScheme){const e=parseFloat(r);isNaN(e)||(d=e>50?"battery-high":e>20?"battery-medium":"battery-low")}else"signal"===this.colorScheme&&(d="signal");return Zd(lo||(lo=Rl`
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
    `),n?"unavailable":"",this._openMoreInfo,this._onRightClick,vh(()=>this._onRightClick(new MouseEvent("contextmenu"))),this.icon?Zd(co||(co=Rl`<span class="tile-icon ${0}">${0}</span>`),d,this._renderIcon()):ic,n?"—":this._formatValue(r,l),s?Zd(po||(po=Rl`<span class="tile-unit">${0}</span>`),s):ic,a)}_openMoreInfo(){if(!this.entityId)return;const e=new CustomEvent("hass-more-info",{detail:{entityId:this.entityId},bubbles:!0,composed:!0});this.dispatchEvent(e)}_onRightClick(e){e.preventDefault(),this.entityId&&this.dispatchEvent(new CustomEvent("tile-context-menu",{detail:{entityId:this.entityId,label:this.label},bubbles:!0,composed:!0}))}_formatValue(e,t){const i=parseFloat(e);return isNaN(i)?e:null!=t&&t>=0?i.toFixed(t):e.includes(".")?e:i.toString()}_renderIcon(){switch(this.icon){case"battery":return Zd(ho||(ho=Rl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>`));case"signal":return Zd(uo||(uo=Rl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`));case"clock":return Zd(go||(go=Rl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`));case"power":return Zd(mo||(mo=Rl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"/></svg>`));case"thermometer":return Zd(vo||(vo=Rl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z"/></svg>`));case"counter":return Zd(fo||(fo=Rl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`));case"chart":return Zd(yo||(yo=Rl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>`));default:return Zd(bo||(bo=Rl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>`))}}};function yh(e){const t=[];for(const o of null!=e?e:[]){var i;const e="string"==typeof o.s?Number(o.s):NaN,r=null!==(i=o.lu)&&void 0!==i?i:o.lc;Number.isFinite(e)&&"number"==typeof r&&t.push({ts:1e3*r,value:e})}return t.sort((e,t)=>e.ts-t.ts)}fh.styles=md(_o||(_o=Rl`
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
  `)),Ol([$c({type:Object})],fh.prototype,"hass",void 0),Ol([$c({type:String})],fh.prototype,"entityId",void 0),Ol([$c({type:String})],fh.prototype,"label",void 0),Ol([$c({type:String})],fh.prototype,"icon",void 0),Ol([$c({type:String})],fh.prototype,"colorScheme",void 0),fh=Ol([_c("chattx-sensor-tile")],fh);const bh={battery_pct:{displayMin:0,displayMax:100,direction:"higher_better",classify:e=>e<20?"bad":e<50?"warn":"good",tooltip:"Green ≥ 50%, Yellow 20–50%, Red < 20% (critical < 10%). Home Assistant low-battery convention.",source:"https://community.home-assistant.io/t/low-battery-level-detection-notification-for-all-battery-sensors/258664"},rssi:{displayMin:-130,displayMax:-30,direction:"higher_better",classify:e=>e<-115?"bad":e<-100?"warn":"good",tooltip:"Green > −100 dBm, Yellow −100 to −115 dBm, Red < −115 dBm. Lower (more negative) RSSI means a weaker received signal.",source:"https://www.thethingsnetwork.org/docs/lorawan/rssi-and-snr/"},snr:{displayMin:-20,displayMax:20,direction:"higher_better",classify:e=>e<-7?"bad":e<0?"warn":"good",tooltip:"Green > 0 dB, Yellow −7 to 0 dB, Red < −7 dB. Demodulation floor is spreading-factor dependent (Semtech AN1200.13).",source:"https://www.openhacks.com/uploadsproductos/loradesignguide_std.pdf"},noise_floor:{displayMin:-130,displayMax:-90,direction:"lower_better",classify:e=>e>-105?"bad":e>-115?"warn":"good",tooltip:"Green < −115 dBm, Yellow −115 to −105 dBm, Red > −105 dBm. Above −105 dBm typically indicates man-made RF interference, not thermal noise.",source:"https://www.openhacks.com/uploadsproductos/loradesignguide_std.pdf"},tx_airtime_util:{displayMin:0,displayMax:20,direction:"lower_better",classify:e=>e>10?"bad":e>2?"warn":"good",tooltip:"Green < 2%, Yellow 2–10%, Red > 10%. EU868 sub-band 1% / general 10% duty-cycle ceiling (ETSI EN 300 220-2; eCFR 47 CFR 15.247).",source:"https://www.etsi.org/deliver/etsi_en/300200_300299/30022002/03.03.01_60/en_30022002v030301p.pdf"},rx_airtime_util:{displayMin:0,displayMax:100,direction:"lower_better",classify:e=>e>50?"bad":e>25?"warn":"good",tooltip:"Green < 25%, Yellow 25–50%, Red > 50%. High RX utilisation usually means heavy mesh traffic or environmental interference saturating the receiver."},channel_util:{displayMin:0,displayMax:100,direction:"lower_better",classify:e=>e>50?"bad":e>25?"warn":"good",tooltip:"Green < 25%, Yellow 25–50%, Red > 50%. Channel utilisation aggregates all activity on the radio channel."},hop_count:{displayMin:0,displayMax:32,direction:"lower_better",classify:e=>e>=16?"bad":e>=7?"warn":"good",tooltip:"Green ≤ 6, Yellow 7–15, Red ≥ 16. MeshCore allows up to 64 hops; community-recommended meshes run well under 32. Each hop adds airtime cost and latency.",source:"https://nodakmesh.org/blog/meshcore-path-hash-explained"},uptime_hours:{displayMin:0,displayMax:168,direction:"higher_better",classify:e=>e<1?"bad":e<24?"warn":"good",tooltip:"Green > 24 h, Yellow 1–24 h, Red < 1 h. Very recent reboot suggests a watchdog reset or brownout."},last_seen_hours:{displayMin:0,displayMax:6,direction:"lower_better",classify:e=>e>4?"bad":e>2?"warn":"good",tooltip:"Green < 2 h, Yellow 2–4 h, Red > 4 h. Should be tuned to the node’s advertising interval; nodes that advertise hourly should appear far more often than nodes that advertise every 6 hours."},request_success_rate:{displayMin:0,displayMax:100,direction:"higher_better",classify:e=>e<70?"bad":e<90?"warn":"good",tooltip:'Green > 90%, Yellow 70–90%, Red < 70%. Caller is responsible for the min-sample floor — bars should render with band="info" until at least 50 attempts have accumulated.'},duplicate_ratio:{displayMin:0,displayMax:100,direction:"lower_better",classify:()=>"info",tooltip:""},tx_queue_len:{displayMin:0,displayMax:30,direction:"lower_better",classify:e=>e>10?"bad":e>5?"warn":"good",tooltip:"Number of messages queued for transmission. Healthy nodes drain the queue quickly. Sustained backlog (> 10) indicates channel saturation or a stuck transmitter."},temperature:{displayMin:-20,displayMax:140,direction:"higher_better",classify:e=>e<0||e>125?"bad":"good",tooltip:"Red below 0°F (≈ −18°C) or above 125°F (≈ 52°C); green otherwise. Extreme ambient temperatures risk damage to the radio, battery, or enclosure."}};function _h(e,t){const i=t.displayMax-t.displayMin;if(i<=0)return 0;const o=(e-t.displayMin)/i,r="higher_better"===t.direction?o:1-o;return Math.max(0,Math.min(100,100*r))}function xh(e,t){if(!Number.isFinite(t))return{band:"info",fillPct:0,tooltip:""};const i=bh[e];return i?{band:i.classify(t),fillPct:_h(t,i),tooltip:i.tooltip,source:i.source}:{band:"info",fillPct:0,tooltip:""}}let wh=class extends yc{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.band="info"}render(){const e=this.max-this.min;let t=0;return Number.isFinite(this.value)&&e>0&&(t=(this.value-this.min)/e*100,t=Math.max(0,Math.min(100,t))),Zd(xo||(xo=Rl`
      <div class="stat-bar"
           role="progressbar"
           aria-valuenow="${0}"
           aria-valuemin="${0}"
           aria-valuemax="${0}">
        <div class="stat-bar-fill ${0}"
             style="width: ${0}%"></div>
      </div>
    `),this.value,this.min,this.max,this.band,t)}};wh.styles=md(wo||(wo=Rl`
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
  `)),Ol([$c({type:Number})],wh.prototype,"value",void 0),Ol([$c({type:Number})],wh.prototype,"min",void 0),Ol([$c({type:Number})],wh.prototype,"max",void 0),Ol([$c({type:String})],wh.prototype,"band",void 0),wh=Ol([_c("chattx-stat-bar")],wh);let $h=class extends yc{constructor(){super(...arguments),this.segments=[],this.legend="below"}_denom(){if(void 0!==this.total&&this.total>0)return this.total;const e=this.segments.reduce((e,t)=>e+(Number.isFinite(t.value)?t.value:0),0);return e>0?e:1}render(){if(!this.segments.length)return ic;const e=this._denom();return Zd($o||($o=Rl`
      <div class="stat-bar"
           role="img"
           aria-label=${0}>
        ${0}
      </div>
      ${0}
    `),this.segments.map(e=>`${e.label} ${e.value}`).join(", "),this.segments.map(t=>{const i=Number.isFinite(t.value)?Math.max(0,t.value):0;if(0===i)return ic;const o=i/e*100;return Zd(ko||(ko=Rl`<div class="stat-bar-segment ${0}"
                           style="width: ${0}%"
                           title=${0}></div>`),t.kind,o,Zl("{label}: {value}",{label:t.label,value:t.value}))}),"none"!==this.legend?Zd(Co||(Co=Rl`
          <div class="stat-bar-legend ${0}">
            ${0}
            ${0}
          </div>`),"inline"===this.legend?"inline":"",this.segments.filter(e=>Number.isFinite(e.value)&&e.value>=0).map(e=>Zd(Fo||(Fo=Rl`<span><span class="legend-swatch ${0}"></span>${0}</span>`),e.kind,e.label)),this.extraLegendText?Zd(So||(So=Rl`<span class="legend-extra">${0}</span>`),this.extraLegendText):ic):ic)}};$h.styles=md(Ao||(Ao=Rl`
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
  `)),Ol([$c({type:Array})],$h.prototype,"segments",void 0),Ol([$c({type:Number})],$h.prototype,"total",void 0),Ol([$c({type:String})],$h.prototype,"legend",void 0),Ol([$c({type:String})],$h.prototype,"extraLegendText",void 0),$h=Ol([_c("chattx-stacked-bar")],$h);let kh=class extends yc{constructor(){super(...arguments),this.content="",this._open=!1,this._onOpen=()=>{this._open||(this._open=!0,window.addEventListener("scroll",this._onScroll,!0))},this._onClose=()=>{this._open&&(this._open=!1,window.removeEventListener("scroll",this._onScroll,!0))},this._onScroll=()=>this._onClose()}render(){return this.content?Zd(Do||(Do=Rl`
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
    `),Zl("More information"),this._onOpen,this._onClose,this._onOpen,this._onClose,this._stopPropagation,this._open?"open":"",this.content,this.source?Zd(Eo||(Eo=Rl`<span class="src">${0}</span>`),this.source):ic):ic}updated(){this._open&&this._positionPopover()}disconnectedCallback(){window.removeEventListener("scroll",this._onScroll,!0),super.disconnectedCallback()}_stopPropagation(e){e.stopPropagation()}_positionPopover(){const e=this.shadowRoot;if(!e)return;const t=e.querySelector(".info-tip"),i=e.querySelector(".info-tip-content");if(!t||!i)return;const o=t.getBoundingClientRect(),r=i.getBoundingClientRect(),s=window.innerWidth,a=window.innerHeight;let n=o.left+o.width/2-r.width/2,l=o.bottom+6;n<8?n=8:n+r.width>s-8&&(n=Math.max(8,s-8-r.width)),l+r.height>a-8&&(l=o.top-6-r.height,l<8&&(l=8)),i.style.left=`${n}px`,i.style.top=`${l}px`}};kh.styles=md(Mo||(Mo=Rl`
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
  `)),Ol([$c({type:String})],kh.prototype,"content",void 0),Ol([$c({type:String})],kh.prototype,"source",void 0),Ol([kc()],kh.prototype,"_open",void 0),kh=Ol([_c("chattx-info-tip")],kh);const Ch=[{key:"sent_flood",label:"Sent · Flood",color:"var(--info, #2196f3)",dash:!1},{key:"sent_direct",label:"Sent · Direct",color:"var(--info, #2196f3)",dash:!0},{key:"recv_flood",label:"Recv · Flood",color:"var(--good, #4caf50)",dash:!1},{key:"recv_direct",label:"Recv · Direct",color:"var(--good, #4caf50)",dash:!0},{key:"errors",label:"Errors",color:"var(--bad, #f44336)",dash:!1}];let Fh=class extends yc{constructor(){super(...arguments),this.data=[],this.width=700,this.height=170,this.timeRange=48,this._hoverIndex=null,this._onPointerMove=e=>{const t=this._indexFromEvent(e);null!=t&&t!==this._hoverIndex&&(this._hoverIndex=t)},this._onPointerDown=e=>{const t=this._indexFromEvent(e);null!=t&&(this._hoverIndex=t===this._hoverIndex?null:t)},this._onPointerLeave=e=>{"mouse"===e.pointerType&&(this._hoverIndex=null)}}render(){return this.data&&0!==this.data.length?Zd(Bo||(Bo=Rl`
      <div class="chart-container">
        <div class="plot">
          ${0}
          ${0}
        </div>
        <div class="legend">
          ${0}
        </div>
      </div>
    `),this._renderChart(),null!=this._hoverIndex?this._renderTooltip():ic,Ch.map(e=>Zd(Io||(Io=Rl`<div class="legend-item">
              <span class="legend-line ${0}"
                    style="border-top-color:${0}"></span>${0}
            </div>`),e.dash?"dashed":"",e.color,Zl(e.label)))):ic}_timeLabel(e,t){const i=Math.round((t-e)/36e5);return i<=0?Zl("now"):`-${i}h`}_fmtValue(e){return"number"==typeof e&&isFinite(e)?0===e?"0":e<1?e.toFixed(2):e.toFixed(1):"—"}_geom(){const e=this.width,t=this.height,i=e-40-12,o=t-12-22;let r=0;for(const e of this.data)for(const t of Ch){const i=e.values[t.key];"number"==typeof i&&isFinite(i)&&(r=Math.max(r,i))}r<=0&&(r=1);const s=Date.now(),a=36e5*this.timeRange,n=s-a;return{padL:40,padR:12,padT:12,padB:22,w:e,h:t,cw:i,ch:o,maxV:r,now:s,range:a,oldest:n,xScale:e=>40+(e-n)/a*i,yScale:e=>12+o-e/r*o}}_nearestBucket(e){const{xScale:t}=this._geom();let i=-1,o=1/0;for(let r=0;r<this.data.length;r++){const s=Math.abs(t(this.data[r].timestamp)-e);s<o&&(o=s,i=r)}return i}_indexFromEvent(e){const t=this.renderRoot.querySelector("svg");if(!t||0===this.data.length)return null;const i=t.getBoundingClientRect();if(0===i.width)return null;const o=(e.clientX-i.left)/i.width*this.width;return this._nearestBucket(o)}_renderChart(){const e=this._geom(),{padL:t,padR:i,padT:o,padB:r,w:s,h:a,ch:n,maxV:l,now:d,range:c,oldest:p,xScale:h,yScale:u}=e,g=[0,l/2,l].map(e=>{const o=u(e);return ec(zo||(zo=Rl`
        <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
          stroke="var(--divider-color,#e0e0e0)" stroke-dasharray="4,4" opacity="0.3" />
        <text x="${0}" y="${0}" font-size="9" text-anchor="end"
          fill="var(--secondary-text-color,#727272)">${0}</text>`),t,o,s-i,o,t-6,o+3,e<1?e.toFixed(1):Math.round(e))}),m=[p,p+c/2,d].map(e=>ec(Ro||(Ro=Rl`
        <text x="${0}" y="${0}" font-size="9" text-anchor="middle"
          fill="var(--secondary-text-color,#727272)">${0}</text>`),h(e),a-r+14,this._timeLabel(e,d))),v=Ch.map(e=>{const t=this.data.filter(t=>"number"==typeof t.values[e.key]&&isFinite(t.values[e.key])).map(t=>`${h(t.timestamp).toFixed(1)},${u(t.values[e.key]).toFixed(1)}`);if(0===t.length)return ec(Oo||(Oo=Rl``));if(1===t.length){const[i,o]=t[0].split(",");return ec(To||(To=Rl`<circle cx="${0}" cy="${0}" r="2" fill="${0}" />`),i,o,e.color)}return ec(No||(No=Rl`<polyline points="${0}" fill="none" stroke="${0}"
        stroke-width="1.5" stroke-dasharray="${0}"
        stroke-linecap="round" stroke-linejoin="round" />`),t.join(" "),e.color,e.dash?"5,3":"none")});let f=ec(Lo||(Lo=Rl``));if(null!=this._hoverIndex&&this._hoverIndex<this.data.length){const e=this.data[this._hoverIndex],t=h(e.timestamp),i=Ch.map(i=>{const o=e.values[i.key];return"number"==typeof o&&isFinite(o)?ec(qo||(qo=Rl`<circle cx="${0}" cy="${0}" r="3" fill="${0}"
          stroke="var(--card-background-color,#fff)" stroke-width="1" />`),t,u(o),i.color):ec(Po||(Po=Rl``))});f=ec(Ho||(Ho=Rl`
        <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
          stroke="var(--primary-text-color,#888)" stroke-width="1" opacity="0.35" />
        ${0}`),t,o,t,a-r,i)}return ec(jo||(jo=Rl`
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
      </svg>`),s,a,Zl("Message rate over the last {timeRange} hours",{timeRange:this.timeRange}),this._onPointerMove,this._onPointerDown,this._onPointerLeave,g,t,o,t,a-r,t,a-r,s-i,a-r,v,f,m,t,o-2,t,o,e.cw,n)}_renderTooltip(){const e=this._hoverIndex;if(null==e||e>=this.data.length)return ic;const t=this._geom(),i=this.data[e],o=t.xScale(i.timestamp)/t.w*100,r=o>55,s=new Date(i.timestamp).toLocaleString([],{weekday:"short",hour:"2-digit",minute:"2-digit"}),a=r?`left:${o}%; transform:translateX(calc(-100% - 8px));`:`left:${o}%; transform:translateX(8px);`;return Zd(Vo||(Vo=Rl`
      <div class="tooltip" style="${0}">
        <div class="tt-head">${0} · msg/min</div>
        ${0}
      </div>
    `),a,s,Ch.map(e=>Zd(Ko||(Ko=Rl`<div class="tt-row">
            <span class="sw ${0}" style="border-top-color:${0}"></span>
            <span class="lbl">${0}</span>
            <span class="val">${0}</span>
          </div>`),e.dash?"dashed":"",e.color,Zl(e.label),this._fmtValue(i.values[e.key]))))}};Fh.styles=md(Uo||(Uo=Rl`
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
  `)),Ol([$c({type:Array})],Fh.prototype,"data",void 0),Ol([$c({type:Number})],Fh.prototype,"width",void 0),Ol([$c({type:Number})],Fh.prototype,"height",void 0),Ol([$c({type:Number})],Fh.prototype,"timeRange",void 0),Ol([kc()],Fh.prototype,"_hoverIndex",void 0),Fh=Ol([_c("chattx-message-rate-chart")],Fh);let Sh=class extends yc{constructor(){super(...arguments),this.entities=[],this.hiddenCount=0,this._rateHistory=[],this._rateHistoryKey=null}render(){if(!this.hass||!this.device)return ic;const e=new Set,t=this._renderHeroTiles(e),i=this._buildGroups(e);return Zd(Wo||(Wo=Rl`
      <div class="hero-row">
        ${0}
      </div>

      ${0}

      ${0}
    `),t,this._renderMessageActivityCard(),i.length>0?Zd(Go||(Go=Rl`
          <div class="subsection-label">
            ${0}${0}
          </div>

          <div class="sensor-grid">
            ${0}
          </div>`),Zl("Sensors"),this.hiddenCount>0?Zd(Xo||(Xo=Rl`<span class="hidden-suffix">(${0} hidden)</span>`),this.hiddenCount):ic,i.map(e=>this._renderGroup(e))):ic)}updated(e){var t;if(!this.hass||!this.device)return;if(!e.has("hass")&&!e.has("device")&&!e.has("entities"))return;const i=this._findEntityIdMatching("nb_sent"),o=null!==(t=null==i?void 0:i.entity_id)&&void 0!==t?t:null;o&&o!==this._rateHistoryKey?(this._rateHistoryKey=o,this._fetchRateHistory()):o||null===this._rateHistoryKey||(this._rateHistoryKey=null,this._rateHistory=[])}async _fetchRateHistory(){if(!this.hass)return;const e=[["sent_flood","sent_flood"],["sent_direct","sent_direct"],["recv_flood","recv_flood"],["recv_direct","recv_direct"],["errors","recv_errors"]],t=[];for(const[i,o]of e){const e=this._findEntityIdMatching(o);e&&t.push([i,e.entity_id])}if(0===t.length)return void(this._rateHistory=[]);const i=Date.now(),o=i-1728e5;try{const e=await this.hass.callWS({type:"history/history_during_period",start_time:new Date(o).toISOString(),end_time:new Date(i).toISOString(),entity_ids:t.map(([,e])=>e),minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),r={};for(const[i,o]of t)r[i]=yh(null==e?void 0:e[o]);this._rateHistory=function(e,t,i,o=36e5){const r=Math.floor(t/o)*o,s=new Map;for(const[l,d]of Object.entries(e))for(let e=1;e<d.length;e++){const c=d[e-1],p=d[e],h=p.ts-c.ts,u=p.value-c.value;if(h<=0||u<0)continue;const g=u/(h/6e4),m=Math.max(c.ts,t),v=Math.min(p.ts,i);for(let e=Math.max(r,Math.floor(m/o)*o);e<v;e+=o){var a,n;const t=Math.min(v,e+o)-Math.max(m,e);if(t<=0)continue;const i=null!==(a=s.get(e))&&void 0!==a?a:{},r=null!==(n=i[l])&&void 0!==n?n:i[l]={sum:0,covered:0};r.sum+=g*t,r.covered+=t,s.set(e,i)}}return[...s.entries()].sort(([e],[t])=>e-t).map(([e,t])=>({timestamp:e,values:Object.fromEntries(Object.entries(t).map(([e,t])=>[e,t.sum/t.covered]))}))}(r,o,i)}catch(e){this._rateHistory=[]}}_renderMessageActivityCard(){return this._rateHistory.length?Zd(Yo||(Yo=Rl`
      <div class="subsection-label">${0}</div>
      <chattx-message-rate-chart .data=${0}></chattx-message-rate-chart>
    `),Zl("Message activity (48h)"),this._rateHistory):ic}_renderHeroTiles(e){const t=this.device;return"companion"===t.type?this._renderCompanionHero(e):"repeater"===t.type?this._renderRepeaterHero(e):this._renderClientHero(e)}_renderRepeaterHero(e){return Zd(Qo||(Qo=Rl`
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
    `),this._renderBatteryTile(),this._renderSignalTile(),this._renderRadioActivityTile(),this._renderMessagesSentTile(e),this._renderMessagesReceivedTile(e),this._renderRequestsTile(e))}_renderClientHero(e){return Zd(Jo||(Jo=Rl`
      ${0}
      ${0}
      ${0}
    `),this._renderBatteryTile(),this._renderSignalTile(),this._renderRequestsTile(e))}_renderCompanionHero(e){return Zd(Zo||(Zo=Rl`
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
      ${0}
    `),this._renderBatteryTile(),this._renderSignalTile(),this._renderCompanionRadioActivityTile(),this._renderMessagesSentTile(e),this._renderMessagesReceivedTile(e),this._renderLocationTile())}_renderBatteryTile(){var e;const t=this._findByMetric("battery_pct");if(!t)return ic;const i=this._readNumber(t.entity_id),o=null!==(e=this._findEntityIdMatching("battery_voltage"))&&void 0!==e?e:this._findEntityByLabel("Voltage"),r=o?this._readNumber(o.entity_id):NaN,s=xh("battery_pct",i);return Zd(er||(er=Rl`
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
    `),()=>this._fireMoreInfo(t.entity_id),Zl("Battery"),this._renderInfoTip(s),s.band,this._formatNumber(i,0),Number.isFinite(r)?Zd(tr||(tr=Rl`<span class="secondary">· ${0} V</span>`),r.toFixed(3)):ic,i,0,100,s.band)}_renderSignalTile(){const e=this._findByMetric("rssi");if(!e)return ic;const t=this._readNumber(e.entity_id),i=this._findByMetric("snr"),o=i?this._readNumber(i.entity_id):NaN,r=xh("rssi",t);return Zd(ir||(ir=Rl`
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
    `),()=>this._fireMoreInfo(e.entity_id),Zl("Last message strength"),this._renderInfoTip(r),r.band,this._formatNumber(t,0),Number.isFinite(o)?Zd(or||(or=Rl`<span class="secondary">· SNR ${0} dB</span>`),o.toFixed(1)):ic,t,-130,-30,r.band)}_renderRadioActivityTile(){const e=this._findByMetric("tx_airtime_util"),t=this._findByMetric("rx_airtime_util");if(!e&&!t)return ic;const i=e?this._readNumber(e.entity_id):0,o=t?this._readNumber(t.entity_id):0,r=Number.isFinite(i)?Math.max(0,i):0,s=Number.isFinite(o)?Math.max(0,o):0,a=Math.max(0,100-r-s),n=xh("tx_airtime_util",r).band,l=xh("rx_airtime_util",s).band,d=this._worseBand(n,l),c=[{value:r,label:`TX ${r.toFixed(1)}%`,kind:"tx"},{value:s,label:`RX ${s.toFixed(1)}%`,kind:"rx"},{value:a,label:`${Zl("Idle")} ${a.toFixed(1)}%`,kind:"idle"}],p=r+s;return Zd(rr||(rr=Rl`
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
    `),()=>e&&this._fireMoreInfo(e.entity_id),Zl("Radio activity"),this._renderInfoTip({band:d,fillPct:0,tooltip:Zl("Half-duplex composition over the last reporting interval. The radio can transmit OR receive, never both. TX above 10% indicates duty-cycle pressure; sustained TX+RX above 30% means the channel is congested.")}),d,p.toFixed(1),c,100,"none",e?Zd(sr||(sr=Rl`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),t=>{t.stopPropagation(),e&&this._fireMoreInfo(e.entity_id)},r.toFixed(1)):Zd(ar||(ar=Rl`<span class="ra-legend-item">
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),r.toFixed(1)),t?Zd(nr||(nr=Rl`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),e=>{e.stopPropagation(),t&&this._fireMoreInfo(t.entity_id)},s.toFixed(1)):Zd(lr||(lr=Rl`<span class="ra-legend-item">
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),s.toFixed(1)),a.toFixed(1))}_renderMessagesSentTile(e){const t=this._findEntityIdMatching("nb_sent"),i=this._findEntityIdMatching("sent_flood"),o=this._findEntityIdMatching("sent_direct");if(!t||!i&&!o)return ic;const r=this._readNumber(t.entity_id),s=i?this._readNumber(i.entity_id):0,a=o?this._readNumber(o.entity_id):0,n=[{value:s,label:`Flood ${s}`,kind:"flood"},{value:a,label:`Direct ${a}`,kind:"direct"}];return e.add(t.entity_id),i&&e.add(i.entity_id),o&&e.add(o.entity_id),Zd(dr||(dr=Rl`
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
    `),()=>this._fireMoreInfo(t.entity_id),Zl("Messages Sent"),this._renderInfoTip({band:"info",fillPct:0,tooltip:Zl("Messages sent (lifetime), split by send mode:\n• Flood — broadcast retransmits visible to all neighbours.\n• Direct — routed point-to-point along a path.")}),this._formatCount(r),n,"inline")}_renderMessagesReceivedTile(e){const t=this._findEntityIdMatching("nb_recv"),i=this._findEntityIdMatching("recv_flood"),o=this._findEntityIdMatching("recv_direct"),r=this._findEntityIdMatching("flood_dups"),s=this._findEntityIdMatching("direct_dups");if(!t||!i&&!o)return ic;const a=this._readNumber(t.entity_id),n=i?this._readNumber(i.entity_id):0,l=o?this._readNumber(o.entity_id):0,d=[{value:n,label:`Flood ${n}`,kind:"flood"},{value:l,label:`Direct ${l}`,kind:"direct"}],c=r?this._readNumber(r.entity_id):0,p=s?this._readNumber(s.entity_id):0,h=(Number.isFinite(c)?c:0)+(Number.isFinite(p)?p:0),u=a>0?h/a*100:0;e.add(t.entity_id),i&&e.add(i.entity_id),o&&e.add(o.entity_id),r&&e.add(r.entity_id),s&&e.add(s.entity_id);const g=this._findEntityIdMatching("recv_errors"),m=g?this._readNumber(g.entity_id):NaN,v=Number.isFinite(m)?m:0,f=a+v,y=f>0?v/f*100:0;return g&&e.add(g.entity_id),Zd(cr||(cr=Rl`
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
    `),()=>this._fireMoreInfo(t.entity_id),Zl("Messages Received"),this._renderInfoTip({band:"info",fillPct:0,tooltip:Zl("Messages received (lifetime), split by receive mode:\n• Flood — broadcast packets received from neighbours.\n• Direct — routed packets where this node is on the path.\n\nEach bar below is a percentage of its own total:\n• Red = receive errors (CRC failures), as a share of all reception attempts (received + errors) — i.e. the error rate.\n• Amber = duplicate receptions, as a share of received messages (duplicates are a subset of received).\n\nBoth are context only, not banded — in a flooding mesh every active neighbour retransmits the same flood once, so a high duplicate ratio is normal (a 2-neighbour repeater sees ~50%, a 3-neighbour ~67%, etc.).")}),this._formatCount(a),d,"none",v>0?Zd(pr||(pr=Rl`<div class="err-line"
                      title=${0}>
              <div class="err-line-fill" style="width:${0}%"></div>
            </div>`),Zl("Receive errors (CRC failures): {recvErrorsN} — {errRatio}% of reception attempts (received + errors)",{recvErrorsN:v,errRatio:y.toFixed(1)}),Math.min(100,y).toFixed(1)):ic,h>0?Zd(hr||(hr=Rl`<div class="dup-line"
                      title=${0}>
              <div class="dup-line-fill" style="width:${0}%"></div>
            </div>`),Zl("Duplicate receptions: {totalDups} — {dupRatio}% of received messages",{totalDups:h,dupRatio:u.toFixed(1)}),Math.min(100,u).toFixed(1)):ic,this._legendCount(n),this._legendCount(l),v>0?Zd(ur||(ur=Rl`<span><span class="msg-swatch error"></span>Error ${0}</span>`),v):ic,h>0?Zd(gr||(gr=Rl`<span><span class="msg-swatch dup"></span>Dup ${0}</span>`),h):ic)}_renderRequestsTile(e){const t=this._findEntityIdMatching("request_succ"),i=this._findEntityIdMatching("request_fail");if(!t||!i)return ic;const o=this._readNumber(t.entity_id),r=this._readNumber(i.entity_id),s=o+r,a=s>0?o/s*100:0,n=s>=50?xh("request_success_rate",a):{band:"info",fillPct:0,tooltip:""},l=Zl("Outgoing requests this node initiated (login, telemetry, neighbour query) and how they resolved. Success rate bands: Green > 90%, Yellow 70–90%, Red < 70%, with a minimum sample of 50 attempts to colour. Below the floor, the bar stays neutral — too few samples to judge."),d=[{value:o,label:`OK ${o}`,kind:"success"},{value:r,label:`${Zl("Fail")} ${r}`,kind:"failure"}];return e.add(t.entity_id),e.add(i.entity_id),Zd(mr||(mr=Rl`
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
    `),()=>this._fireMoreInfo(t.entity_id),Zl("Requests"),this._renderInfoTip({...n,tooltip:l}),n.band,s>0?`${a.toFixed(0)}%`:"—",s>0?Zd(vr||(vr=Rl`<span class="secondary">· ${0} attempt${0}</span>`),s,1===s?"":"s"):ic,d,"inline")}_legendCount(e){return Number.isFinite(e)?String(e):"—"}_formatCount(e){return Number.isFinite(e)?Math.round(e).toLocaleString(Ql()):"—"}_renderLocationTile(){const e=this._findEntityIdMatching("latitude"),t=this._findEntityIdMatching("longitude");let i=e?this._readNumber(e.entity_id):NaN,o=t?this._readNumber(t.entity_id):NaN,r="entity";!Number.isFinite(i)&&Number.isFinite(this.fallbackLatitude)&&(i=this.fallbackLatitude,r="fallback"),!Number.isFinite(o)&&Number.isFinite(this.fallbackLongitude)&&(o=this.fallbackLongitude,r="fallback");const s=Number.isFinite(i)&&Number.isFinite(o)&&(0!==i||0!==o);if(!s)return ic;let a=null;if("entity"===r&&e){var n;const t=null===(n=this.hass)||void 0===n||null===(n=n.states[e.entity_id])||void 0===n?void 0:n.last_updated;if(t){const e=new Date(t);Number.isNaN(e.getTime())||(a=e)}}else"fallback"===r&&Number.isFinite(this.fallbackUpdated)&&(a=new Date(1e3*this.fallbackUpdated));const l=s&&a?this._formatRelativeTime(a):"";return Zd(fr||(fr=Rl`
      <div class="hero-tile" @click=${0}>
        <div class="hero-tile-head">
          <span>${0}${0}</span>
        </div>
        <div class="hero-tile-value">
          ${0}
        </div>
        ${0}
      </div>
    `),()=>{e&&this._fireMoreInfo(e.entity_id)},Zl("Location"),"fallback"===r?Zd(yr||(yr=Rl`<span style="opacity:0.55;text-transform:none;letter-spacing:0;font-size:10px;margin-left:4px;">via contact</span>`)):ic,s?Zd(br||(br=Rl`<span class="coord-pair">
                ${0}, ${0}
              </span>`),i.toFixed(4),o.toFixed(4)):Zd(_r||(_r=Rl`<span class="primary">—</span>`)),l?Zd(xr||(xr=Rl`<div class="loc-updated">Updated ${0}</div>`),l):ic)}_formatRelativeTime(e){const t=(Date.now()-e.getTime())/1e3;return!Number.isFinite(t)||t<0||t<60?"just now":t<3600?`${Math.floor(t/60)} min ago`:t<86400?`${Math.floor(t/3600)} h ago`:`${Math.floor(t/86400)} d ago`}_renderCompanionRadioActivityTile(){const e=this._findEntityIdMatching("tx_airtime"),t=this._findEntityIdMatching("rx_airtime"),i=this._findByMetric("uptime_hours");if(!e&&!t||!i)return ic;const o=this._readUptimeMinutes(i);if(!Number.isFinite(o)||o<=0)return ic;const r=e?this._readNumber(e.entity_id):0,s=t?this._readNumber(t.entity_id):0;if(!Number.isFinite(r)&&!Number.isFinite(s))return ic;const a=e=>Number.isFinite(e)?Math.min(100,Math.max(0,e/o*100)):0,n=a(r),l=a(s),d=Math.max(0,100-n-l),c=xh("tx_airtime_util",n).band,p=xh("rx_airtime_util",l).band,h=this._worseBand(c,p),u=[{value:n,label:`TX ${n.toFixed(1)}%`,kind:"tx"},{value:l,label:`RX ${l.toFixed(1)}%`,kind:"rx"},{value:d,label:`${Zl("Idle")} ${d.toFixed(1)}%`,kind:"idle"}],g=n+l;return Zd(wr||(wr=Rl`
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
    `),()=>e&&this._fireMoreInfo(e.entity_id),Zl("Radio activity"),this._renderInfoTip({band:h,fillPct:0,tooltip:Zl("Lifetime-average half-duplex composition: cumulative TX / RX airtime divided by uptime since the node last booted. The radio can transmit OR receive, never both. Unlike a managed repeater (which reports utilisation over the last interval), the companion exposes only cumulative airtime, so this is a long-run average and will not reflect short recent bursts.")}),h,g.toFixed(1),u,100,"none",e?Zd($r||($r=Rl`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),t=>{t.stopPropagation(),e&&this._fireMoreInfo(e.entity_id)},n.toFixed(1)):Zd(kr||(kr=Rl`<span class="ra-legend-item">
                  <span class="legend-swatch tx"></span>TX ${0}%
                </span>`),n.toFixed(1)),t?Zd(Cr||(Cr=Rl`<span class="ra-legend-item" @click=${0}>
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),e=>{e.stopPropagation(),t&&this._fireMoreInfo(t.entity_id)},l.toFixed(1)):Zd(Fr||(Fr=Rl`<span class="ra-legend-item">
                  <span class="legend-swatch rx"></span>RX ${0}%
                </span>`),l.toFixed(1)),d.toFixed(1))}_readUptimeMinutes(e){var t,i;const o=this._readNumber(e.entity_id);if(!Number.isFinite(o))return NaN;switch(null!==(t=null===(i=this.hass)||void 0===i||null===(i=i.states[e.entity_id])||void 0===i||null===(i=i.attributes)||void 0===i?void 0:i.unit_of_measurement)&&void 0!==t?t:""){case"d":return 1440*o;case"h":return 60*o;case"min":return o;default:return o/60}}_buildGroups(e){var t;const i={"Radio · live":[],"Radio · configuration":[],Status:[],Identity:[]};for(const t of this.entities)e.has(t.entity_id)||this._isHeroDuplicate(t)||i[this._groupOf(t)].push(this._renderRow(t));const o="companion"===(null===(t=this.device)||void 0===t?void 0:t.type),r=["Radio · configuration","Identity"];return Object.entries(i).filter(([e,t])=>!(0===t.length||o&&r.includes(e))).map(([e,t])=>({name:e,rows:t}))}_isHeroDuplicate(e){return"battery_pct"===e.metricKey||2===e.sortOrder||"snr"===e.metricKey||"rssi"===e.metricKey||"uptime_hours"===e.metricKey||"tx_airtime_util"===e.metricKey||"rx_airtime_util"===e.metricKey||"Airtime"===e.label||"RX Airtime"===e.label}_groupOf(e){const t=e.entity_id,i=e.sortOrder;return e.booleanProblem||2===i?"Status":6===i?"Radio · configuration":4===i||5===i||9===i||10===i||11===i||12===i||t.includes("noise_floor")||t.includes("tx_queue")?"Radio · live":t.includes("frequency")||t.includes("bandwidth")||t.includes("spreading_factor")||t.includes("rate_limiter")?"Radio · configuration":t.includes("hop_count")||t.includes("out_path")||t.includes("last_seen")||t.includes("last_advert")||3===i||8===i||7===i?"Status":"Identity"}_renderGroup(e){return Zd(Sr||(Sr=Rl`
      <div class="group-label">${0}</div>
      ${0}
    `),Zl(e.name),e.rows)}_renderRow(e){var t,i,o,r,s;if(e.booleanProblem){var a;const t=null===(a=this.hass)||void 0===a||null===(a=a.states[e.entity_id])||void 0===a?void 0:a.state,i=void 0===t||"unknown"===t||"unavailable"===t,o="on"===t,r=i?"info":o?"bad":"good";return Zd(Ar||(Ar=Rl`
        <div class="sensor-item"
             @click=${0}
             @contextmenu=${0}
             ${0}>
          <span class="status-dot ${0}"></span>
          <span class="si-label">${0}</span>
          <span class="si-value">${0}</span>
          <span class="si-bar"></span>
        </div>
      `),()=>this._fireMoreInfo(e.entity_id),t=>this._fireContextMenu(t,e),vh(()=>this._fireContextMenu(void 0,e)),r,Zl(e.label),i?"—":o?"Detected":"OK")}const n=this._readNumber(e.entity_id),l=null===(t=this.hass)||void 0===t?void 0:t.states[e.entity_id],d=null!==(i=null==l||null===(o=l.attributes)||void 0===o?void 0:o.unit_of_measurement)&&void 0!==i?i:"",c=e.metricKey?this._evaluateForRow(e.metricKey,n,e):null,p=null!==(r=null==c?void 0:c.band)&&void 0!==r?r:"info",h=e.staticTooltip||(null==c?void 0:c.tooltip)||"",u=h?{band:p,fillPct:null!==(s=null==c?void 0:c.fillPct)&&void 0!==s?s:0,tooltip:h,source:null==c?void 0:c.source}:null,g=this._formatRowValue(e,n,null==l?void 0:l.state);return Zd(Dr||(Dr=Rl`
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
    `),()=>this._fireMoreInfo(e.entity_id),t=>this._fireContextMenu(t,e),vh(()=>this._fireContextMenu(void 0,e)),p,Zl(e.label),u?this._renderInfoTip(u):ic,g,d?Zd(Er||(Er=Rl`<span class="unit">${0}</span>`),d):ic,c&&e.metricKey?Zd(Mr||(Mr=Rl`<chattx-stat-bar
                .value=${0}
                .min=${0}
                .max=${0}
                .band=${0}>
              </chattx-stat-bar>`),c.fillPct,0,100,p):ic)}_evaluateForRow(e,t,i){if("uptime_hours"===e){var o,r;let s=t;switch(null!==(o=null===(r=this.hass)||void 0===r||null===(r=r.states[i.entity_id])||void 0===r||null===(r=r.attributes)||void 0===r?void 0:r.unit_of_measurement)&&void 0!==o?o:""){case"d":s=24*t;break;case"h":s=t;break;case"min":s=t/60;break;default:s=t/3600}return xh(e,s)}var s,a;return xh(e,"temperature"===e&&(null!==(s=null===(a=this.hass)||void 0===a||null===(a=a.states[i.entity_id])||void 0===a||null===(a=a.attributes)||void 0===a?void 0:a.unit_of_measurement)&&void 0!==s?s:"").includes("C")?9*t/5+32:t)}_findByMetric(e){return this.entities.find(t=>t.metricKey===e)}_findEntityIdMatching(e){return this.entities.find(t=>t.entity_id.includes(e))}_findEntityByLabel(e){return this.entities.find(t=>t.label===e)}_readNumber(e){var t;const i=null===(t=this.hass)||void 0===t?void 0:t.states[e];if(!i||"unavailable"===i.state||"unknown"===i.state)return NaN;const o=parseFloat(i.state);return Number.isFinite(o)?o:NaN}_formatNumber(e,t){return Number.isFinite(e)?e.toFixed(t):"—"}_formatRowValue(e,t,i){var o;if("unavailable"===i||"unknown"===i)return"—";if(!Number.isFinite(t))return null!=i?i:"—";const r=null===(o=this.hass)||void 0===o||null===(o=o.entities)||void 0===o||null===(o=o[e.entity_id])||void 0===o?void 0:o.display_precision;return null!=r&&r>=0?t.toFixed(r):i&&i.includes(".")?i:t.toString()}_renderInfoTip(e){var t;return e.tooltip?Zd(Br||(Br=Rl`<chattx-info-tip
      .content=${0}
      .source=${0}>
    </chattx-info-tip>`),Zl(e.tooltip),null!==(t=e.source)&&void 0!==t?t:""):ic}_worseBand(e,t){const i={good:0,info:0,warn:1,bad:2};return i[e]>=i[t]?e:t}_fireMoreInfo(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}_fireContextMenu(e,t){null==e||e.preventDefault(),this.dispatchEvent(new CustomEvent("tile-context-menu",{detail:{entityId:t.entity_id,label:t.label},bubbles:!0,composed:!0}))}};Sh.styles=md(Ir||(Ir=Rl`
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
  `)),Ol([$c({type:Object})],Sh.prototype,"hass",void 0),Ol([$c({type:Object})],Sh.prototype,"device",void 0),Ol([$c({type:Array})],Sh.prototype,"entities",void 0),Ol([$c({type:Number})],Sh.prototype,"hiddenCount",void 0),Ol([$c({type:Number})],Sh.prototype,"fallbackLatitude",void 0),Ol([$c({type:Number})],Sh.prototype,"fallbackLongitude",void 0),Ol([$c({type:Number})],Sh.prototype,"fallbackUpdated",void 0),Ol([kc()],Sh.prototype,"_rateHistory",void 0),Sh=Ol([_c("chattx-node-summary")],Sh);let Ah=class extends yc{constructor(){super(...arguments),this.data=[],this.neighbors=[],this.width=600,this.height=200,this.timeRange=24,this.COLORS=["#FF6B6B","#4ECDC4","#FFE66D","#95E1D3","#C7CEEA","#FF8B94","#B5EAD7","#FFB7B2"]}render(){if(!this.data||0===this.data.length||0===this.neighbors.length)return Zd(zr||(zr=Rl`
        <div class="chart-container">
          <div class="empty-state">${0}</div>
        </div>
      `),Zl("No data available"));const e=this._renderChart();return Zd(Rr||(Rr=Rl`
      <div class="chart-container">
        ${0}
        <div class="legend">
          ${0}
        </div>
      </div>
    `),e,this.neighbors.map((e,t)=>{const i=this.COLORS[t%this.COLORS.length];return Zd(Or||(Or=Rl`
              <div class="legend-item">
                <div class="legend-dot" style="background-color: ${0}"></div>
                <span>${0}</span>
              </div>
            `),i,e)}))}_renderChart(){const e=50,t=this.width-100,i=this.height-100;let o=1/0,r=-1/0;this.data.forEach(e=>{Object.values(e.values).forEach(e=>{"number"==typeof e&&(o=Math.min(o,e),r=Math.max(r,e))})}),isFinite(o)&&isFinite(r)||(o=-10,r=20);const s=r-o,a=o-.1*s,n=r+.1*s,l=t=>this.height-e-(t-a)/(n-a)*i,d=60*this.timeRange*60*1e3,c=Date.now(),p=c-d,h=i=>e+(i-p)/d*t,u=[];for(let t=0;t<=5;t++){const i=a+t/5*(n-a),o=l(i);u.push(ec(Tr||(Tr=Rl`
          <line x1="${0}" y1="${0}" x2="${0}" y2="${0}"
            stroke="var(--divider-color, #e0e0e0)" stroke-dasharray="4,4" opacity="0.3" />
          <text x="${0}" y="${0}" font-size="10" text-anchor="end"
            fill="var(--secondary-text-color, #727272)">${0}dB</text>
        `),e,o,this.width-e,o,42,o+4,Math.round(i)))}const g=[];for(let t=0;t<=5;t++){const i=p+t/5*d,o=h(i),r=this._formatTimeLabel(i,c);g.push(ec(Nr||(Nr=Rl`
          <text x="${0}" y="${0}" font-size="10" text-anchor="middle"
            fill="var(--secondary-text-color, #727272)">${0}</text>
        `),o,this.height-e+16,r))}const m=this.neighbors.map((e,t)=>{const i=this.COLORS[t%this.COLORS.length],o=[];return this.data.forEach(t=>{const i=t.values[e];if("number"==typeof i&&isFinite(i)){const e=h(t.timestamp),r=l(i);o.push(`${e},${r}`)}}),0===o.length?ec(Lr||(Lr=Rl``)):ec(Pr||(Pr=Rl`
        <polyline points="${0}" fill="none" stroke="${0}"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      `),o.join(" "),i)});return ec(qr||(qr=Rl`
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
    `),this.width,this.height,this.width,this.height,u,e,e,e,this.height-e,e,this.height-e,this.width-e,this.height-e,m,g)}_formatTimeLabel(e,t){const i=(t-e)/36e5;return i>=24?`${Math.round(i)}h ago`:0===i?Zl("Now"):`${Math.round(i)}h`}};Ah.styles=md(Hr||(Hr=Rl`
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
  `)),Ol([$c({type:Array})],Ah.prototype,"data",void 0),Ol([$c({type:Array})],Ah.prototype,"neighbors",void 0),Ol([$c({type:Number})],Ah.prototype,"width",void 0),Ol([$c({type:Number})],Ah.prototype,"height",void 0),Ol([$c({type:Number})],Ah.prototype,"timeRange",void 0),Ah=Ol([_c("chattx-snr-chart")],Ah);let Dh=class extends yc{constructor(){super(),this.open=!1,this.title="Confirm",this.message="",this.confirmLabel="Confirm",this.cancelLabel="Cancel",this.dangerous=!1,this._typedValue="",Ap(this,{isOpen:()=>this.open,onEscape:()=>this._onCancel()})}render(){if(!this.open)return;const e=this.requireTyped&&this._typedValue!==this.requireTyped;return Zd(jr||(jr=Rl`
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
    `),this._onOverlayClick,this.title,this.title,this.message,this.requireTyped?Zd(Vr||(Vr=Rl`
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
                `),Zl("Type to confirm"),Zl("Type '{requireTyped}'",{requireTyped:this.requireTyped}),this._typedValue,e=>{this._typedValue=e.target.value},Zl("Type {text} to enable confirmation",{text:this.requireTyped})):"",this._onCancel,this.cancelLabel,this.dangerous?"danger-button":"",e,this._onConfirm,this.confirmLabel)}_onOverlayClick(e){e.target===e.currentTarget&&this._onCancel()}_onCancel(){this._typedValue="",this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0}))}_onConfirm(){this.dispatchEvent(new CustomEvent("confirm",{bubbles:!0})),this._typedValue=""}};Dh.styles=[Fc,md(Kr||(Kr=Rl`
      :host {
        display: block;
      }
    `))],Ol([$c({type:Boolean})],Dh.prototype,"open",void 0),Ol([$c({type:String})],Dh.prototype,"title",void 0),Ol([$c({type:String})],Dh.prototype,"message",void 0),Ol([$c({type:String})],Dh.prototype,"confirmLabel",void 0),Ol([$c({type:String})],Dh.prototype,"cancelLabel",void 0),Ol([$c({type:Boolean})],Dh.prototype,"dangerous",void 0),Ol([$c({type:String})],Dh.prototype,"requireTyped",void 0),Ol([kc()],Dh.prototype,"_typedValue",void 0),Dh=Ol([_c("chattx-confirm-dialog")],Dh);const Eh=e=>{if(null==e)return;const t=Number(e);return Number.isFinite(t)?t:void 0},Mh=["None","Share (Live GPS)","Saved Prefs"],Bh=["1-Byte","2-Byte","3-Byte"],Ih=["Deny","Allow (Per Contact Flags)","Allow All"],zh=[{label:"Overwrite Oldest When Full",value:1},{label:"Auto-Add Chat (Companion)",value:2},{label:"Auto-Add Repeater",value:4},{label:"Auto-Add Room Server",value:8},{label:"Auto-Add Sensor",value:16}];function Rh(e,t){const i=Eh(e);return void 0!==i&&void 0!==t[i]?t[i]:`Unknown (${e})`}const Oh=[{name:"reboot",description:"Restart the device",category:"Device Management",dangerous:!0},{name:"poweroff",description:"Power off the device (v1.14.1+)",category:"Device Management",dangerous:!0},{name:"send_appstart",description:"Initialize connection, returns SELF_INFO with device details",category:"Device Management",responseFormat:"Device info with name, public key, radio params, location"},{name:"send_device_query",description:"Query device info (firmware, capabilities, path hash mode)",category:"Device Management",responseFormat:"Device information including firmware version and capabilities"},{name:"get_bat",description:"Get battery voltage and percentage",category:"Device Info",responseFormat:"Battery: {voltage}mV ({percentage}%)"},{name:"get_time",description:"Get device's current RTC time",category:"Device Info",responseFormat:"Epoch timestamp or formatted time string"},{name:"get_self_telemetry",description:"Get local device telemetry data",category:"Device Info",responseFormat:"Telemetry data including temperature, voltage, uptime"},{name:"set_time",description:"Set device RTC time",category:"Device Info",params:[{name:"val",type:"number",description:"Epoch seconds (Unix timestamp)",required:!0}]},{name:"set_radio",description:"Set radio parameters (frequency, bandwidth, spreading factor, coding rate)",category:"Radio Settings",params:[{name:"freq",type:"number",description:"Frequency in MHz (v1.15.0+ allows down to 150)",required:!0,min:150,max:1e3},{name:"bw",type:"number",description:"Bandwidth in kHz",required:!0,min:7.8,max:500},{name:"sf",type:"number",description:"Spreading factor",required:!0,min:5,max:12},{name:"cr",type:"number",description:"Coding rate",required:!0,min:5,max:8}],responseFormat:"OK - radio parameters set (reboot required)"},{name:"get_allowed_repeat_freq",description:"Get allowed repeater frequencies",category:"Radio Settings",responseFormat:"List of allowed frequency ranges"},{name:"set_tx_power",description:"Set transmit power",category:"Radio Settings",params:[{name:"val",type:"number",description:"TX power in dBm",required:!0,min:-9,max:22}],responseFormat:"OK - TX power set to {val}dBm"},{name:"set_radio.rxgain",description:"Set RX boosted gain mode (SX1262/SX1268; also LR1110 v1.16.0+)",category:"Radio Settings",params:[{name:"state",type:"select",description:"Enable or disable RX boosted gain",required:!0,options:["on","off"]}]},{name:"set_coords",description:"Set GPS coordinates (latitude and longitude)",category:"Location",params:[{name:"lat",type:"number",description:"Latitude in decimal degrees",required:!0,min:-90,max:90},{name:"lon",type:"number",description:"Longitude in decimal degrees",required:!0,min:-180,max:180}],responseFormat:"OK - coordinates set"},{name:"set_path_hash_mode",description:"Set path hash mode (0, 1, or 2) for routing optimization",category:"Network",params:[{name:"mode",label:"Path Hash Mode",type:"select",description:"Routing path-hash width",required:!0,selectOptions:[{label:"1-Byte (0)",value:0},{label:"2-Byte (1)",value:1},{label:"3-Byte (2)",value:2}]}]},{name:"set_flood_max",description:"Set maximum flood hops (network-wide broadcast limit)",category:"Network",params:[{name:"val",type:"number",description:"Maximum number of hops for flood messages",required:!0,min:0,max:64}],responseFormat:"OK - flood max set to {val}"},{name:"send_advert",description:"Send a local or flood advertisement",category:"Network",params:[{name:"flood",type:"boolean",description:"True for flood advert, false for local-only",required:!1,default:!1}],responseFormat:"Advertisement sent"},{name:"get_stats_core",description:"Get core mesh statistics (messages, packets, routing)",category:"Statistics",responseFormat:"Core statistics including message counts and routing info"},{name:"get_stats_radio",description:"Get radio statistics (TX/RX counts, errors, signal quality)",category:"Statistics",responseFormat:"Radio statistics including TX/RX packet counts and error rates"},{name:"get_stats_packets",description:"Get detailed packet statistics",category:"Statistics",responseFormat:"Packet-level statistics"},{name:"set_custom_var",description:"Set a custom variable (sensor data)",category:"Advanced",params:[{name:"key",type:"string",description:"Variable name",required:!0},{name:"value",type:"string",description:"Variable value",required:!0}],responseFormat:"OK - variable set"},{name:"get_custom_vars",description:"Get all custom variables",category:"Advanced",responseFormat:"Dictionary of all custom variables"},{name:"set_tuning",description:"Set timing parameters (RX delay and airtime factor)",category:"Advanced",params:[{name:"rx_dly",type:"number",description:"RX delay base",required:!0},{name:"af",type:"number",description:"Airtime factor",required:!0}]},{name:"set_name",description:"Set device name",category:"Device Info",dangerous:!0,dangerMessage:"Changing the device name will change all entity IDs. Automations, scripts, and dashboards using current entity IDs will need to be updated.",params:[{name:"name",type:"string",description:"New device name",required:!0}],responseFormat:"OK - name set to {name}"},{name:"set_multi_acks",description:"Enable or disable multi-ack mode",category:"Advanced",params:[{name:"multi_acks",label:"Multi-Acks",type:"boolean",description:"Enable multi-acks",required:!0,default:!1}]},{name:"set_advert_loc_policy",description:"Set location advertisement policy",category:"Network",params:[{name:"advert_loc_policy",label:"Location Ad Policy",type:"select",description:"How this node shares its location in adverts",required:!0,selectOptions:[{label:"None (0)",value:0},{label:"Share — Live GPS (1)",value:1},{label:"Saved Prefs (2)",value:2}]}]},{name:"set_manual_add_contacts",description:"Set manual contact adding mode",category:"Advanced",params:[{name:"manual_add_contacts",label:"Manual Add Contacts",type:"boolean",description:"Enable manual contact addition (off = auto-add)",required:!0,default:!1}]},{name:"set_telemetry_mode_base",description:"Set base telemetry mode",category:"Advanced",params:[{name:"telemetry_mode_base",label:"Base Telemetry Mode",type:"select",description:"Who may read base telemetry",required:!0,selectOptions:[{label:"Deny (0)",value:0},{label:"Allow Per Contact Flags (1)",value:1},{label:"Allow All (2)",value:2}]}]},{name:"set_telemetry_mode_loc",description:"Set location telemetry mode",category:"Advanced",params:[{name:"telemetry_mode_loc",label:"Location Telemetry Mode",type:"select",description:"Who may read location telemetry",required:!0,selectOptions:[{label:"Deny (0)",value:0},{label:"Allow Per Contact Flags (1)",value:1},{label:"Allow All (2)",value:2}]}]},{name:"set_telemetry_mode_env",description:"Set environment telemetry mode",category:"Advanced",params:[{name:"telemetry_mode_env",label:"Environment Telemetry Mode",type:"select",description:"Who may read environment telemetry",required:!0,selectOptions:[{label:"Deny (0)",value:0},{label:"Allow Per Contact Flags (1)",value:1},{label:"Allow All (2)",value:2}]}]},{name:"get_channel",description:"Get channel information by index",category:"Advanced",params:[{name:"channel_idx",type:"number",description:"Channel index",required:!0}]},{name:"set_channel",description:"Set channel name and optional secret",category:"Advanced",params:[{name:"channel_idx",type:"number",description:"Channel index",required:!0},{name:"name",type:"string",description:"Channel name (use # prefix for auto-derived key)",required:!0}]},{name:"export_private_key",description:"Export private key (may be disabled by firmware)",category:"Advanced",responseFormat:"Private key in hex format"},{name:"import_private_key",description:"Import private key (reboot required)",category:"Advanced",dangerous:!0,dangerMessage:"Importing a private key changes the device identity and all entity IDs. Automations, scripts, and dashboards using current entity IDs will need to be updated.",params:[{name:"key",type:"string",description:"Private key in hex format",required:!0}]},{name:"sign",description:"Sign data with the device private key",category:"Advanced",params:[{name:"data",type:"string",description:"Data to sign (hex format)",required:!0}]},{name:"send_msg",description:"Send a direct text message to a contact",category:"Messaging",params:[{name:"contact",type:"string",description:"Contact name, public key prefix, or full public key",required:!0},{name:"message",type:"string",description:"Message text",required:!0}]},{name:"send_msg_with_retry",description:"Send a message with automatic retry and path reset",category:"Messaging",params:[{name:"contact",type:"string",description:"Contact name, public key prefix, or full public key",required:!0},{name:"message",type:"string",description:"Message text",required:!0}]},{name:"send_chan_msg",description:"Send a message to a channel (group message)",category:"Messaging",params:[{name:"channel",type:"number",description:"Channel index",required:!0},{name:"message",type:"string",description:"Message text",required:!0}]},{name:"send_cmd",description:"Send a CLI command to a remote node over the mesh",category:"Messaging",params:[{name:"contact",type:"string",description:"Contact name, public key prefix, or full public key",required:!0},{name:"command",type:"string",description:"CLI command to execute on remote node",required:!0}]},{name:"send_login",description:"Login to a remote node with admin password",category:"Messaging",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"password",type:"string",description:"Admin password",required:!0}]},{name:"send_logout",description:"Logout from a remote node",category:"Messaging",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"send_statusreq",description:"Request status from a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"send_telemetry_req",description:"Request telemetry data from a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"send_path_discovery",description:"Initiate path discovery to a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_status_sync",description:"Request status from a node (synchronous)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_telemetry_sync",description:"Request telemetry data from a node (synchronous)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_mma_sync",description:"Request min/max/avg statistics for a time range",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"start",type:"number",description:"Start time (epoch seconds)",required:!0},{name:"end",type:"number",description:"End time (epoch seconds)",required:!0}]},{name:"req_acl_sync",description:"Request access control list from a node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_neighbours_sync",description:"Request neighbor list from a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"fetch_all_neighbours",description:"Fetch complete neighbor list with pagination",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_regions_sync",description:"Request region information from a node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_owner_sync",description:"Request owner information (name and description)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"req_basic_sync",description:"Request basic node information",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"get_contacts",description:"Retrieve all known contacts from the device",category:"Advanced",params:[{name:"lastmod",type:"number",description:"Only get contacts modified since this timestamp (optional)",required:!1}]},{name:"reset_path",description:"Reset routing path to flood for a contact",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"share_contact",description:"Share a contact info on the mesh",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"export_contact",description:"Export a contact card (or self if no contact specified)",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key (optional, defaults to self)",required:!1}]},{name:"import_contact",description:"Import a contact card",category:"Advanced",params:[{name:"card_data",type:"string",description:"Contact card data (hex encoded)",required:!0}]},{name:"remove_contact",description:"Remove a contact from the list",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"update_contact",description:"Update contact routing path and flags",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"path",type:"string",description:"Routing path (hex string)",required:!0},{name:"flags",type:"string",description:"Contact flags",required:!0}]},{name:"add_contact",description:"Add a contact to the list",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0}]},{name:"change_contact_path",description:"Change a contact routing path",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"path",type:"number",description:"New path (integer)",required:!0}]},{name:"change_contact_flags",description:"Change a contact flags",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"flags",type:"number",description:"New flags (integer)",required:!0}]},{name:"set_autoadd_config",description:"Configure auto-add behavior for new contacts",category:"Advanced",params:[{name:"flag",label:"Auto-Add Config",type:"bitmask",description:"Which contact types to auto-add, plus overwrite-oldest policy",required:!0,bits:zh}]},{name:"get_autoadd_config",description:"Get current auto-add configuration",category:"Advanced"},{name:"send_binary_req",description:"Send a raw binary request to a remote node",category:"Advanced",params:[{name:"contact",type:"string",description:"Contact name or public key",required:!0},{name:"req_type",type:"number",description:"Binary request type",required:!0}]},{name:"set_flood_scope",description:"Set flood scope filter for broadcast messages",category:"Network",params:[{name:"scope",type:"string",description:"Flood scope (int, string, or hex)",required:!0}]},{name:"set_default_flood_scope",description:"Set the persistent default flood scope used when no per-message scope is set (v1.15.0+)",category:"Network",params:[{name:"scope",type:"string",description:'Channel/region name (e.g. "public"), or empty / "*" / "0" / "None" to clear',required:!0}],responseFormat:"OK"},{name:"get_default_flood_scope",description:"Get the persistent default flood scope (v1.15.0+)",category:"Network",responseFormat:"Scope name + 16-byte key, or null if unset"},{name:"send_control_data",description:"Send raw control data packet to the mesh",category:"Advanced",params:[{name:"control_type",type:"number",description:"Control data type",required:!0},{name:"payload",type:"string",description:"Payload data (hex encoded)",required:!0}]},{name:"send_node_discover_req",description:"Broadcast node discovery request",category:"Network",params:[{name:"filter",type:"number",description:"Discovery filter",required:!0},{name:"prefix_only",type:"boolean",description:"Only use public key prefix for matching",required:!1,default:!1}]},{name:"get_msg",description:"Retrieve pending incoming messages",category:"Messaging",params:[{name:"timeout",type:"number",description:"Timeout in seconds to wait for messages (optional)",required:!1,default:5}]},{name:"send_trace",description:"Send a trace packet through specific repeaters",category:"Advanced",params:[{name:"auth_code",type:"number",description:"Authentication code",required:!0},{name:"tag",type:"number",description:"Trace tag",required:!0},{name:"flags",type:"number",description:"Trace flags",required:!0},{name:"path",type:"string",description:"Optional repeater path (hex encoded)",required:!1}]}],Th=[{name:"reboot",description:"Restart the remote device",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"poweroff",description:"Power off the remote device (v1.14.1+)",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"shutdown",description:"Power off the remote device (alias for poweroff)",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"clkreboot",description:"Reset clock to May 2024 and reboot",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"get name",description:"Get device name",category:"Device Info",responseFormat:"> Device name string",remoteOnly:!0},{name:"get radio",description:"Get radio parameters (frequency, bandwidth, spreading factor, coding rate)",category:"Radio Settings",responseFormat:"> freq,bw,sf,cr (example: 906.875,250.000,11,5)",remoteOnly:!0},{name:"get freq",description:"Get frequency only",category:"Radio Settings",responseFormat:"> frequency in MHz (example: 906.875)",remoteOnly:!0},{name:"get tx",description:"Get transmit power",category:"Radio Settings",responseFormat:"> TX power in dBm (example: 17)",remoteOnly:!0},{name:"get af",description:"Get airtime factor",category:"Radio Settings",responseFormat:"> airtime factor value",remoteOnly:!0},{name:"get dutycycle",description:"Get TX duty cycle as a percentage (v1.15.0+)",category:"Radio Settings",responseFormat:"> NN.N%   (example: > 33.3%)",remoteOnly:!0},{name:"get lat",description:"Get latitude coordinate",category:"Location",responseFormat:"> latitude as float (example: 45.123456)",remoteOnly:!0},{name:"get lon",description:"Get longitude coordinate",category:"Location",responseFormat:"> longitude as float (example: -122.654321)",remoteOnly:!0},{name:"get repeat",description:"Get forwarding/repeating status",category:"Network",responseFormat:"> on or off",remoteOnly:!0},{name:"get rxdelay",description:"Get RX delay base",category:"Advanced",responseFormat:"> RX delay value",remoteOnly:!0},{name:"get txdelay",description:"Get TX delay factor",category:"Advanced",responseFormat:"> TX delay value",remoteOnly:!0},{name:"get direct.txdelay",description:"Get direct TX delay factor",category:"Advanced",responseFormat:"> Direct TX delay value",remoteOnly:!0},{name:"get flood.max",description:"Get maximum flood hops",category:"Network",responseFormat:"> max hops value (example: 8)",remoteOnly:!0},{name:"get flood.max.unscoped",description:"Get max flood hops for un-scoped packets (v1.16.0+)",category:"Network",responseFormat:"> max hops value (example: 64)",remoteOnly:!0},{name:"get flood.max.advert",description:"Get max flood hops for adverts (v1.16.0+)",category:"Network",responseFormat:"> max hops value (example: 8)",remoteOnly:!0},{name:"get advert.interval",description:"Get local advertisement interval (minutes)",category:"Network",responseFormat:"> interval in minutes (example: 120)",remoteOnly:!0},{name:"get flood.advert.interval",description:"Get flood advertisement interval (hours)",category:"Network",responseFormat:"> interval in hours (example: 47; firmware default 47 since v1.16.0)",remoteOnly:!0},{name:"get int.thresh",description:"Get interference threshold",category:"Advanced",responseFormat:"> threshold value",remoteOnly:!0},{name:"get agc.reset.interval",description:"Get AGC (automatic gain control) reset interval",category:"Advanced",responseFormat:"> interval value",remoteOnly:!0},{name:"get multi.acks",description:"Get multi-acks setting",category:"Advanced",responseFormat:"> multi-acks value (0 or 1)",remoteOnly:!0},{name:"get allow.read.only",description:"Get read-only access permission setting",category:"Advanced",responseFormat:"> on or off",remoteOnly:!0},{name:"get guest.password",description:"Get guest password",category:"Advanced",responseFormat:"> password string",remoteOnly:!0},{name:"get public.key",description:"Get full public key (hex)",category:"Device Info",responseFormat:"> hex-encoded public key (example: a6ec829f...d9b70772)",remoteOnly:!0},{name:"get role",description:"Get device role",category:"Device Info",responseFormat:"> repeater or client",remoteOnly:!0},{name:"get owner.info",description:"Get owner information text",category:"Device Info",responseFormat:"> owner info string (with | for newlines)",remoteOnly:!0},{name:"get adc.multiplier",description:"Get ADC voltage multiplier",category:"Advanced",responseFormat:"> multiplier value",remoteOnly:!0},{name:"get path.hash.mode",description:"Get path hash mode (v1.14.0+)",category:"Network",responseFormat:"> mode: 0, 1, or 2",remoteOnly:!0},{name:"get loop.detect",description:"Get loop detection level (v1.14.0+)",category:"Network",responseFormat:"> off, minimal, moderate, or strict",remoteOnly:!0},{name:"get bootloader.ver",description:"Get bootloader version (NRF52 only, v1.14.0+)",category:"Device Info",responseFormat:"> bootloader version string",remoteOnly:!0},{name:"get radio.rxgain",description:"Get RX boosted gain mode (SX1262/SX1268; also LR1110 v1.16.0+)",category:"Radio Settings",responseFormat:"> on or off",remoteOnly:!0},{name:"get bridge.type",description:"Get bridge hardware type",category:"Advanced",responseFormat:"> none, rs232, or espnow",remoteOnly:!0},{name:"set name",description:"Set device name",category:"Device Info",params:[{name:"name",type:"string",description:"New name (no special characters: []\\:,?*)",required:!0}],responseFormat:"OK - name changed",remoteOnly:!0},{name:"set af",description:"Set airtime factor",category:"Radio Settings",params:[{name:"val",type:"number",description:"Airtime factor (0-9)",required:!0,min:0,max:9}],responseFormat:"OK - airtime factor set",remoteOnly:!0},{name:"set dutycycle",description:"Set TX duty cycle as a percentage (v1.15.0+, alias for set af)",category:"Radio Settings",params:[{name:"pct",type:"number",description:"Duty cycle percentage (1-100). Firmware converts to airtime_factor = (100/pct) - 1.",required:!0,min:1,max:100}],responseFormat:"OK - NN.N%",remoteOnly:!0},{name:"set repeat",description:"Enable or disable packet forwarding/repeating",category:"Network",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - forwarding enabled/disabled",remoteOnly:!0},{name:"set radio",description:"Set radio parameters (reboot required to take effect)",category:"Radio Settings",params:[{name:"params",type:"string",description:"Comma-separated: freq,bw,sf,cr (example: 906.875,250.000,11,5)",required:!0}],responseFormat:"OK - radio parameters set (reboot required)",remoteOnly:!0},{name:"set lat",description:"Set latitude coordinate",category:"Location",params:[{name:"val",type:"number",description:"Latitude (-90 to 90)",required:!0,min:-90,max:90}],responseFormat:"OK - latitude set",remoteOnly:!0},{name:"set lon",description:"Set longitude coordinate",category:"Location",params:[{name:"val",type:"number",description:"Longitude (-180 to 180)",required:!0,min:-180,max:180}],responseFormat:"OK - longitude set",remoteOnly:!0},{name:"set tx",description:"Set transmit power",category:"Radio Settings",params:[{name:"val",type:"number",description:"TX power in dBm",required:!0,min:-9,max:22}],responseFormat:"OK - TX power set",remoteOnly:!0},{name:"set rxdelay",description:"Set RX delay base",category:"Advanced",params:[{name:"val",type:"number",description:"RX delay base in seconds (0-20, v1.16.0+ upper bound)",required:!0,min:0,max:20}],responseFormat:"OK - RX delay set",remoteOnly:!0},{name:"set txdelay",description:"Set TX delay factor",category:"Advanced",params:[{name:"val",type:"number",description:"TX delay factor (0-2, v1.16.0+ upper bound)",required:!0,min:0,max:2}],responseFormat:"OK - TX delay set",remoteOnly:!0},{name:"set direct.txdelay",description:"Set direct TX delay factor",category:"Advanced",params:[{name:"val",type:"number",description:"Direct TX delay factor (0-2, v1.16.0+ upper bound)",required:!0,min:0,max:2}],responseFormat:"OK - direct TX delay set",remoteOnly:!0},{name:"set flood.max",description:"Set maximum flood hops",category:"Network",params:[{name:"val",type:"number",description:"Max hops (0-64)",required:!0,min:0,max:64}],responseFormat:"OK - flood max set",remoteOnly:!0},{name:"set flood.max.unscoped",description:"Set max flood hops for un-scoped packets (v1.16.0+)",category:"Network",params:[{name:"val",type:"number",description:"Max hops (0-64)",required:!0,min:0,max:64}],responseFormat:"OK",remoteOnly:!0},{name:"set flood.max.advert",description:"Set max flood hops for adverts (v1.16.0+)",category:"Network",params:[{name:"val",type:"number",description:"Max hops (0-64)",required:!0,min:0,max:64}],responseFormat:"OK",remoteOnly:!0},{name:"set advert.interval",description:"Set local advertisement interval (minutes)",category:"Network",params:[{name:"val",type:"number",description:"Interval in minutes (60-240, or 0 to disable)",required:!0,min:0,max:240}],responseFormat:"OK - advert interval set",remoteOnly:!0},{name:"set flood.advert.interval",description:"Set flood advertisement interval (hours)",category:"Network",params:[{name:"val",type:"number",description:"Interval in hours (3-168, or 0 to disable)",required:!0,min:0,max:168}],responseFormat:"OK - flood advert interval set",remoteOnly:!0},{name:"set int.thresh",description:"Set interference threshold",category:"Advanced",params:[{name:"val",type:"number",description:"Threshold value",required:!0}],responseFormat:"OK - interference threshold set",remoteOnly:!0},{name:"set agc.reset.interval",description:"Set AGC (automatic gain control) reset interval",category:"Advanced",params:[{name:"val",type:"number",description:"Interval value",required:!0}],responseFormat:"OK - AGC reset interval set",remoteOnly:!0},{name:"set multi.acks",description:"Set multi-acks mode",category:"Advanced",params:[{name:"val",label:"Multi-Acks",type:"select",description:"Enable multi-acks",required:!0,selectOptions:[{label:"On (1)",value:1},{label:"Off (0)",value:0}]}],responseFormat:"OK - multi-acks set",remoteOnly:!0},{name:"set allow.read.only",description:"Set read-only access permission",category:"Advanced",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - read-only access updated",remoteOnly:!0},{name:"set guest.password",description:"Set guest password",category:"Advanced",params:[{name:"pwd",type:"string",description:"New guest password",required:!0}],responseFormat:"OK - guest password set",remoteOnly:!0},{name:"set prv.key",description:"Import private key (reboot required, serial-only)",category:"Advanced",params:[{name:"hex",type:"string",description:"64-character hex private key",required:!0}],responseFormat:"OK - private key imported (reboot required)",remoteOnly:!0},{name:"set owner.info",description:"Set owner information text",category:"Device Info",params:[{name:"text",type:"string",description:"Owner info (use | for newlines)",required:!0}],responseFormat:"OK - owner info set",remoteOnly:!0},{name:"set adc.multiplier",description:"Set ADC voltage multiplier",category:"Advanced",params:[{name:"val",type:"number",description:"Multiplier value (0-10, 0 = board default)",required:!0,min:0,max:10}],responseFormat:"OK - ADC multiplier set",remoteOnly:!0},{name:"set path.hash.mode",description:"Set path hash mode for routing (v1.14.0+)",category:"Network",params:[{name:"mode",label:"Path Hash Mode",type:"select",description:"Routing path-hash width",required:!0,selectOptions:[{label:"1-Byte (0)",value:0},{label:"2-Byte (1)",value:1},{label:"3-Byte (2)",value:2}]}],responseFormat:"OK - path hash mode set",remoteOnly:!0},{name:"set loop.detect",description:"Set loop detection level (v1.14.0+)",category:"Network",params:[{name:"mode",type:"select",description:"Mode: off, minimal, moderate, or strict",required:!0,options:["off","minimal","moderate","strict"]}],responseFormat:"OK - loop detection set",remoteOnly:!0},{name:"set radio.rxgain",description:"Set RX boosted gain mode (SX1262/SX1268; also LR1110 v1.16.0+)",category:"Radio Settings",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - RX gain mode set",remoteOnly:!0},{name:"set bridge.enabled",description:"Enable or disable the bridge interface",category:"Advanced",params:[{name:"state",type:"select",description:"Enable (on) or disable (off)",required:!0,options:["on","off"]}],responseFormat:"OK - bridge enabled/disabled",remoteOnly:!0},{name:"set bridge.delay",description:"Set bridge packet delay",category:"Advanced",params:[{name:"ms",type:"number",description:"Delay in milliseconds (0-10000)",required:!0,min:0,max:1e4}],responseFormat:"OK - bridge delay set",remoteOnly:!0},{name:"set bridge.source",description:"Set bridge packet source (RX or TX logs)",category:"Advanced",params:[{name:"source",type:"select",description:"Source: rx (logRx) or tx (logTx)",required:!0,options:["rx","tx"]}],responseFormat:"OK - bridge source set",remoteOnly:!0},{name:"set bridge.baud",description:"Set RS232 bridge baud rate",category:"Advanced",params:[{name:"rate",type:"number",description:"Baud rate (9600-115200, board-dependent max)",required:!0,min:9600}],responseFormat:"OK - bridge baud rate set",remoteOnly:!0},{name:"set bridge.channel",description:"Set ESP-NOW bridge channel",category:"Advanced",params:[{name:"ch",type:"number",description:"Channel (1-14)",required:!0,min:1,max:14}],responseFormat:"OK - bridge channel set",remoteOnly:!0},{name:"set bridge.secret",description:"Set ESP-NOW bridge shared secret",category:"Advanced",params:[{name:"key",type:"string",description:"Shared secret string",required:!0}],responseFormat:"OK - bridge secret set",remoteOnly:!0},{name:"ver",description:"Get firmware version and build date",category:"Device Info",responseFormat:"<version> (Build: <date>)",remoteOnly:!0},{name:"board",description:"Get board/manufacturer name",category:"Device Info",responseFormat:"Board name string",remoteOnly:!0},{name:"neighbors",description:"List known neighbor nodes",category:"Network",responseFormat:"Formatted neighbor list",remoteOnly:!0},{name:"neighbor.remove",description:"Remove a neighbor by public key",category:"Network",params:[{name:"pubkey",type:"string",description:"Public key hex string of neighbor to remove",required:!0}],responseFormat:"OK - neighbor removed",remoteOnly:!0},{name:"clock",description:"Get current device time",category:"Device Info",responseFormat:"HH:MM - D/M/Y UTC",remoteOnly:!0},{name:"clock sync",description:"Synchronize clock to sender's timestamp",category:"Device Info",responseFormat:"OK - clock set: HH:MM - D/M/Y UTC",remoteOnly:!0},{name:"time",description:"Set time to epoch seconds",category:"Device Info",params:[{name:"epoch",type:"number",description:"Unix epoch timestamp",required:!0}],responseFormat:"OK - clock set: HH:MM - D/M/Y UTC",remoteOnly:!0},{name:"password",description:"Change admin password (requires prior login)",category:"Advanced",params:[{name:"pwd",type:"string",description:"New admin password",required:!0}],responseFormat:"password now: <pwd>",remoteOnly:!0},{name:"advert",description:"Send a flood advertisement (network-wide broadcast)",category:"Network",responseFormat:"OK - Advert sent",remoteOnly:!0},{name:"advert.zerohop",description:"Send a local-only (zero-hop) advertisement (v1.14.0+)",category:"Network",responseFormat:"OK - zerohop advert sent",remoteOnly:!0},{name:"clear stats",description:"Reset all statistics counters",category:"Advanced",responseFormat:"OK - stats reset",remoteOnly:!0},{name:"log start",description:"Start packet logging",category:"Advanced",responseFormat:"logging on",remoteOnly:!0},{name:"log stop",description:"Stop packet logging",category:"Advanced",responseFormat:"logging off",remoteOnly:!0},{name:"log erase",description:"Erase log file",category:"Advanced",responseFormat:"log erased",remoteOnly:!0},{name:"powersaving",description:"Get power saving status (NRF52 only)",category:"Device Info",responseFormat:"on or off",remoteOnly:!0},{name:"powersaving on",description:"Enable power saving mode (NRF52 only)",category:"Device Info",responseFormat:"ok",remoteOnly:!0},{name:"powersaving off",description:"Disable power saving mode (NRF52 only)",category:"Device Info",responseFormat:"ok",remoteOnly:!0},{name:"start ota",description:"Enter Bluetooth OTA update mode (repeater-only)",category:"Device Management",dangerous:!0,remoteOnly:!0},{name:"tempradio",description:"Temporarily override radio parameters for a duration",category:"Radio Settings",params:[{name:"freq",type:"number",description:"Temporary frequency in MHz",required:!0},{name:"bw",type:"number",description:"Temporary bandwidth in kHz",required:!0},{name:"sf",type:"number",description:"Temporary spreading factor (5-12)",required:!0},{name:"cr",type:"number",description:"Temporary coding rate (5-8)",required:!0},{name:"mins",type:"number",description:"Duration in minutes",required:!0}],responseFormat:"OK - temp params for N mins",remoteOnly:!0},{name:"region",description:"Export the device region map (v1.15.0+)",category:"Regions",responseFormat:"Comma-separated region list (up to 160 chars)",remoteOnly:!0},{name:"region def",description:"Bulk-define the region map in one command (v1.16.0+)",category:"Regions",params:[{name:"spec",type:"string",description:"Space-separated region tokens; each is name, name|jump, or name,jump (| or , redirects nesting to the jump region). Example: socal cencal|socal norcal",required:!0}],responseFormat:'Exported region map, or "Err - <reason>"',remoteOnly:!0},{name:"region load",description:"Reload regions from persistent storage (v1.15.0+)",category:"Regions",remoteOnly:!0},{name:"region save",description:"Persist current region map to storage (v1.15.0+)",category:"Regions",responseFormat:'OK or "Err - save failed"',remoteOnly:!0},{name:"region get",description:"Show one region (name, parent, allow/deny-flood flag) (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (prefix match)",required:!0}],responseFormat:" <name> [(parent)] [F]   (F = flood allowed)",remoteOnly:!0},{name:"region put",description:"Create a region (flood allowed by default) (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name",required:!0},{name:"parent",type:"string",description:"Parent region name (optional, defaults to wildcard)",required:!1}],responseFormat:"OK - (flood allowed)",remoteOnly:!0},{name:"region remove",description:"Remove a region (must be empty) (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (exact match)",required:!0}],responseFormat:'OK / "Err - not empty" / "Err - not found"',remoteOnly:!0},{name:"region list",description:"List regions filtered by flood permission (v1.15.0+)",category:"Regions",params:[{name:"filter",type:"select",description:"allowed = flood-permitted regions; denied = flood-blocked regions",required:!0,options:["allowed","denied"]}],remoteOnly:!0},{name:"region home",description:"Get (no arg) or set (with arg) the home region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Leave empty to read current home; provide a region name (prefix match) to set",required:!1}],responseFormat:" home is [now] <name>",remoteOnly:!0},{name:"region default",description:"Get (no arg) or set (with arg) the default flood scope region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Leave empty to read current default; provide a region name to set, or <null> to clear",required:!1}],responseFormat:" default scope is [now] <name|<null>>",remoteOnly:!0},{name:"region allowf",description:"Allow flood for a region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (prefix match)",required:!0}],responseFormat:"OK",remoteOnly:!0},{name:"region denyf",description:"Deny flood for a region (v1.15.0+)",category:"Regions",params:[{name:"name",type:"string",description:"Region name (prefix match)",required:!0}],responseFormat:"OK",remoteOnly:!0}];var Nh;let Lh=Nh=class extends yc{constructor(){super(),this.open=!1,this.isLocal=!1,this.narrow=!1,this.nodeName="",this._selectedCommand=null,this._paramValues={},this._response=null,this._executing=!1,this._error=null,this._deviceResponses=[],this._unsubMsg=null,this._feedActive=!1,this._feedSince=0,Ap(this,{isOpen:()=>this.open,onEscape:()=>this._onClose()})}_getCommands(){return this.isLocal?Oh:Th}_getGroupedCommands(){const e=this._getCommands(),t=new Map;for(const i of e)t.has(i.category)||t.set(i.category,[]),t.get(i.category).push(i);return t}render(){if(!this.open)return;const e=this._getGroupedCommands();return Zd(Ur||(Ur=Rl`
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
    `),this._onOverlayClick,Zl("Issue command"),Zl("Issue Command"),this.targetPrefix?Zd(Wr||(Wr=Rl`<div style="font-size: 12px; color: var(--secondary-text-color); margin-top: 4px;">
                    ${0}
                  </div>`),Zl("Target: {target}",{target:this.targetPrefix})):"",Zl("Command"),this._onCommandSelected,Array.from(e.entries()).map(([e,t])=>Zd(Gr||(Gr=Rl`<optgroup label=${0}>
                      ${0}
                    </optgroup>`),e,t.map(e=>Zd(Xr||(Xr=Rl`<option value=${0}>
                            ${0} - ${0}
                          </option>`),e.name,e.name,e.description)))),this._selectedCommand?Zd(Yr||(Yr=Rl`
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
                `),this._selectedCommand.name,this._selectedCommand.description,this._selectedCommand.dangerous?Zd(Qr||(Qr=Rl`<div class="danger-warning">
                        <span class="danger-warning-icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg></span>
                        <span>${0}</span>
                      </div>`),this._selectedCommand.dangerMessage||Zl("This is a dangerous operation")):"",this._selectedCommand.params&&this._selectedCommand.params.length>0?Zd(Jr||(Jr=Rl`
                        <div class="command-params">
                          <label class="form-label">${0}</label>
                          ${0}
                        </div>
                      `),Zl("Parameters"),this._selectedCommand.params.map(e=>this._renderParamInput(e))):"",this._selectedCommand.responseFormat?Zd(Zr||(Zr=Rl`<div style="margin-top: 12px; font-size: 12px; color: var(--secondary-text-color); font-style: italic;">
                        ${0}
                      </div>`),Zl("Expected: {format}",{format:this._selectedCommand.responseFormat})):"",this._executing,this._executeCommand,this._executing?Zl("Executing..."):Zl("Execute"),this._response||this._error?Zd(es||(es=Rl`
                        <div class="form-group" style="margin-top: 16px;">
                          <label class="form-label">${0}</label>
                          <div
                            class="command-response"
                            style=${0}>
                            ${0}
                          </div>
                        </div>
                      `),Zl("Response"),this._error?"color: var(--error-color, #db4437);":"",this._error?this._error:this._renderFormattedResponse(this._response)):""):"",!this.isLocal&&this._deviceResponses.length>0?Zd(ts||(ts=Rl`
                  <div class="form-group" style="margin-top: 16px;">
                    <label class="form-label">${0}</label>
                    <div class="device-response-feed">
                      ${0}
                    </div>
                  </div>
                `),Zl("Responses from device"),this._deviceResponses.map(e=>Zd(is||(is=Rl`<div class="device-response-row">
                          <span class="drr-time">${0}</span><span class="drr-text">${0}</span>${0}
                        </div>`),new Date(e.ts).toLocaleTimeString(Ql()),e.text,void 0!==e.snr?Zd(os||(os=Rl`<span class="drr-snr"> · SNR ${0}</span>`),e.snr):""))):"",this._onClose,Zl("Close"))}_renderParamInput(e){var t,i,o;const r=null!==(t=null!==(i=this._paramValues[e.name])&&void 0!==i?i:e.default)&&void 0!==t?t:"",s=null!==(o=e.label)&&void 0!==o?o:e.name;switch(e.type){case"boolean":return Zd(rs||(rs=Rl`
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
        `),!!r,t=>{this._paramValues[e.name]=t.target.checked},s,e.description?Zd(ss||(ss=Rl`<div class="form-description">${0}</div>`),e.description):"");case"select":{const t=e.selectOptions?e.selectOptions:(e.options||[]).map(e=>({label:e,value:e}));return Zd(as||(as=Rl`
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
        `),s,i=>{const o=i.target.value,r=t.find(e=>String(e.value)===o);this._paramValues[e.name]=r?r.value:o},""===r||void 0===r,t.map(e=>Zd(ns||(ns=Rl`<option value=${0} ?selected=${0}>${0}</option>`),String(e.value),String(r)===String(e.value),e.label)),e.description?Zd(ls||(ls=Rl`<div class="form-description">${0}</div>`),e.description):"")}case"bitmask":var a,n;return Zd(ds||(ds=Rl`
          <fieldset class="form-group">
            <legend class="form-label">${0}</legend>
            ${0}
            <div class="form-description">Value: ${0}</div>
            ${0}
          </fieldset>
        `),s,(e.bits||[]).map(t=>{var i,o;const r=Number(null!==(i=null!==(o=this._paramValues[e.name])&&void 0!==o?o:e.default)&&void 0!==i?i:0);return Zd(cs||(cs=Rl`
                <label class="form-toggle">
                  <input
                    type="checkbox"
                    ?checked=${0}
                    @change=${0}
                  />
                  <span class="form-toggle-label">${0}</span>
                </label>
              `),(r&t.value)===t.value,i=>{var o,r;const s=i.target.checked,a=Number(null!==(o=null!==(r=this._paramValues[e.name])&&void 0!==r?r:e.default)&&void 0!==o?o:0);this._paramValues[e.name]=s?a|t.value:a&~t.value,this.requestUpdate()},t.label)}),Number(null!==(a=null!==(n=this._paramValues[e.name])&&void 0!==n?n:e.default)&&void 0!==a?a:0),e.description?Zd(ps||(ps=Rl`<div class="form-description">${0}</div>`),e.description):"");case"number":return Zd(hs||(hs=Rl`
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
        `),s,e.required,e.min,e.max,String(r),t=>{const i=t.target;this._paramValues[e.name]=i.value?Number(i.value):""},e.description?Zd(us||(us=Rl`<div class="form-description">${0}</div>`),e.description):"");default:return Zd(gs||(gs=Rl`
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
        `),s,e.required,String(r),t=>{this._paramValues[e.name]=t.target.value},e.description?Zd(ms||(ms=Rl`<div class="form-description">${0}</div>`),e.description):"")}}_formatValue(e){if(!0===e)return Zl("Yes");if(!1===e)return Zl("No");if(null==e)return"—";if("object"==typeof e)try{return JSON.stringify(e)}catch(t){return String(e)}return"string"==typeof e&&e.length,String(e)}_renderFormattedResponse(e){try{const t=JSON.parse(e);if(t&&"object"==typeof t&&!Array.isArray(t)){const e=Object.entries(t);if(e.length>0)return Zd(vs||(vs=Rl`
            <div style="display: grid; grid-template-columns: auto 1fr; gap: 4px 12px; font-size: 13px;">
              ${0}
            </div>
          `),e.map(([e,t])=>{var i;const o=Zl(null!==(i=Nh._FRIENDLY_LABELS[e])&&void 0!==i?i:"")||e.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase()),r=Nh._VALUE_FORMATTERS[e],s=r?r(t):void 0;if(s&&"object"==typeof s)return Zd(fs||(fs=Rl`
                    <div style="grid-column: 1 / -1; color: var(--secondary-text-color);">${0}</div>
                    ${0}
                  `),o,Object.entries(s).map(([e,t])=>Zd(ys||(ys=Rl`
                      <div style="padding-left: 12px; white-space: nowrap;">${0}</div>
                      <div style="font-family: var(--code-font-family, monospace);">${0}</div>`),e,t?"✓":"✗")));const a=void 0!==s?String(s):this._formatValue(t),n="string"==typeof t&&t.length>24;return Zd(bs||(bs=Rl`
                  <div style="color: var(--secondary-text-color); white-space: nowrap;">${0}</div>
                  <div style="font-family: var(--code-font-family, monospace); word-break: ${0};">${0}</div>
                `),o,n?"break-all":"normal",a)}))}if(Array.isArray(t))return Zd(_s||(_s=Rl`<pre style="margin: 0; white-space: pre-wrap; font-size: 13px;">${0}</pre>`),JSON.stringify(t,null,2))}catch(e){}return Zd(xs||(xs=Rl`<span style="white-space: pre-wrap;">${0}</span>`),e)}_onCommandSelected(e){const t=e.target.value,i=this._getCommands();this._selectedCommand=i.find(e=>e.name===t)||null;const o={};for(const e of null!==(r=null===(s=this._selectedCommand)||void 0===s?void 0:s.params)&&void 0!==r?r:[]){var r,s;void 0!==e.default&&(o[e.name]=e.default)}this._paramValues=o,this._response=null,this._error=null}async _executeCommand(){if(this._selectedCommand&&this.hass){this._executing=!0,this._response=null,this._error=null;try{let e;if(this.isLocal)e=await Hc(this.hass,this._selectedCommand.name,Object.keys(this._paramValues).length>0?this._paramValues:void 0,this.entryId);else{if(!this.targetPrefix)return void(this._error=Zl("No target device specified"));const t=this._paramValues;let i=this._selectedCommand.name;if(Object.keys(t).length>0){const e=Object.entries(t).map(([,e])=>String(e)).join(" ");i=`${i} ${e}`}e=await jc(this.hass,this.targetPrefix,i,this.entryId)}e.success?this._response=e.response:this._error=e.response||Zl("Command execution failed")}catch(e){this._error=Zl("Error: {error}",{error:String(e)})}finally{this._executing=!1}}}updated(e){(e.has("open")||e.has("targetPrefix")||e.has("isLocal"))&&(this._stopResponseFeed(),this.open&&!this.isLocal&&this._startResponseFeed())}disconnectedCallback(){super.disconnectedCallback(),this._stopResponseFeed()}async _startResponseFeed(){var e;if(!this._feedActive&&!this.isLocal&&this.open&&null!==(e=this.hass)&&void 0!==e&&e.connection){this._feedActive=!0,this._feedSince=Date.now(),this._deviceResponses.length&&(this._deviceResponses=[]);try{const e=await this.hass.connection.subscribeEvents(e=>{var t,i,o;const r=e.data;if(!this._prefixMatches(r.pubkey_prefix))return;if(r.sender_name===this.nodeName)return;const s=Date.parse(null!==(t=r.timestamp)&&void 0!==t?t:"")||Date.now();s<this._feedSince-1e3||(this._deviceResponses=[...this._deviceResponses,{text:null!==(i=r.message)&&void 0!==i?i:"",sender:null!==(o=r.sender_name)&&void 0!==o?o:"",ts:s,snr:"number"==typeof r.snr?r.snr:void 0}])},"meshcore_message");if(!this.open||this.isLocal)return e(),void(this._feedActive=!1);this._unsubMsg=e}catch(e){this._feedActive=!1}}}_stopResponseFeed(){this._unsubMsg&&(this._unsubMsg(),this._unsubMsg=null),this._feedActive=!1}_prefixMatches(e){if(!e||!this.targetPrefix)return!1;const t=Math.min(e.length,this.targetPrefix.length,12);return e.slice(0,t).toLowerCase()===this.targetPrefix.slice(0,t).toLowerCase()}_onOverlayClick(e){e.target===e.currentTarget&&this._onClose()}_onClose(){this._selectedCommand=null,this._paramValues={},this._response=null,this._error=null,this._stopResponseFeed(),this._deviceResponses=[],this.dispatchEvent(new CustomEvent("close",{bubbles:!0}))}};function Ph(e){var t,i,o;const r=e.entity_id,s=null!==(t=null!==(i=null!==(o=e.original_device_class)&&void 0!==o?o:e.device_class)&&void 0!==i?i:e._stateDeviceClass)&&void 0!==t?t:null;if(r.startsWith("binary_sensor.meshcore_")&&/_err_(pool_full|cad_timeout|rx_timeout)_/.test(r)){const e=r.includes("err_pool_full")?"Radio Fault: Packet Pool":r.includes("err_cad_timeout")?"Radio Fault: CAD Timeout":"Radio Fault: RX-Start Timeout";return{entity_id:r,label:e,icon:"alert",colorScheme:"neutral",sortOrder:13,booleanProblem:!0}}if(r.startsWith("binary_sensor.meshcore_")&&"connectivity"===s)return null;if(r.startsWith("binary_sensor.meshcore_"))return null;if(r.includes("_rate_"))return null;if(r.includes("full_evts"))return null;if(r.includes("node_status")||r.includes("companion_prefix")||r.includes("request_rate")||r.includes("delivery")||r.includes("path_")||r.includes("neighbor_"))return null;if("battery"===s||r.includes("battery_percentage"))return{entity_id:r,label:"Battery",icon:"battery",colorScheme:"battery",sortOrder:1,metricKey:"battery_pct"};if("voltage"===s||r.includes("battery_voltage")||r.includes("_voltage")||r.includes("cv_voltage"))return{entity_id:r,label:"Voltage",icon:"power",colorScheme:"neutral",sortOrder:2};if("duration"===s||r.includes("uptime"))return{entity_id:r,label:"Uptime",icon:"clock",colorScheme:"neutral",sortOrder:3,metricKey:"uptime_hours"};if("signal_strength"===s||r.includes("tx_power"))return{entity_id:r,label:"TX Power",icon:"power",colorScheme:"neutral",sortOrder:6};if("temperature"===s||r.includes("_temperature"))return{entity_id:r,label:"Temperature",icon:"thermometer",colorScheme:"neutral",sortOrder:7,metricKey:"temperature",staticTooltip:"Ambient temperature reported by the node. Informational; no threshold band -- expected ranges depend heavily on where the device is mounted."};if(r.includes("rx_airtime_utilization"))return{entity_id:r,label:"RX Airtime Util",icon:"chart",colorScheme:"neutral",sortOrder:10,metricKey:"rx_airtime_util"};if(r.includes("airtime_utilization"))return{entity_id:r,label:"TX Airtime Util",icon:"chart",colorScheme:"neutral",sortOrder:10,metricKey:"tx_airtime_util"};if(r.includes("rx_airtime"))return{entity_id:r,label:"RX Airtime",icon:"chart",colorScheme:"neutral",sortOrder:9};if(r.includes("airtime"))return{entity_id:r,label:"Airtime",icon:"chart",colorScheme:"neutral",sortOrder:9};if(r.includes("snr")&&!r.includes("neighbor"))return{entity_id:r,label:"SNR",icon:"signal",colorScheme:"signal",sortOrder:4,metricKey:"snr"};if(r.includes("rssi"))return{entity_id:r,label:"RSSI",icon:"signal",colorScheme:"signal",sortOrder:5,metricKey:"rssi"};if(r.includes("noise_floor"))return{entity_id:r,label:"Noise Floor",icon:"signal",colorScheme:"signal",sortOrder:11,metricKey:"noise_floor"};if(r.includes("tx_queue_len"))return{entity_id:r,label:"TX Queue Length",icon:"counter",colorScheme:"neutral",sortOrder:12,metricKey:"tx_queue_len"};if(r.includes("contact_count"))return{entity_id:r,label:"Contacts",icon:"counter",colorScheme:"neutral",sortOrder:8};if(r.includes("channel_util"))return{entity_id:r,label:"Channel Util",icon:"chart",colorScheme:"neutral",sortOrder:10,metricKey:"channel_util"};if(r.startsWith("sensor.meshcore_")){const t=e.original_name||e.name||r.split(".")[1];return{entity_id:r,label:t,icon:"",colorScheme:"neutral",sortOrder:99}}return null}async function qh(e){const[t,i]=await Promise.all([e.callWS({type:"config/device_registry/list"}),e.callWS({type:"config/entity_registry/list"})]),o={};for(const e of t)if(e.identifiers)for(const[t,i]of e.identifiers)"meshcore"===t&&(o[i]=e.id);const r={};for(const t of i){var s;if(!t.device_id||t.disabled_by)continue;if(!t.entity_id.startsWith("sensor.meshcore_")&&!t.entity_id.startsWith("binary_sensor.meshcore_"))continue;const i=null===(s=e.states)||void 0===s||null===(s=s[t.entity_id])||void 0===s||null===(s=s.attributes)||void 0===s?void 0:s.device_class,o=Ph(i?{...t,_stateDeviceClass:i}:t);o&&(r[t.device_id]||(r[t.device_id]=[]),r[t.device_id].push(o))}for(const e of Object.keys(r))r[e].sort((e,t)=>e.sortOrder-t.sortOrder);return{meshcoreDeviceMap:o,deviceEntities:r}}function Hh(e){return null==e||"unavailable"===e||"unknown"===e||""===e}function jh(e){const t={};for(const[o,r]of Object.entries(null!=e?e:{})){let e=null;for(const t of null!=r?r:[]){var i;const o=null!==(i=t.lu)&&void 0!==i?i:t.lc;if("string"!=typeof t.s||Hh(t.s)||"number"!=typeof o)continue;const r=1e3*o;(!e||r>=e.ts)&&(e={state:t.s,ts:r})}e&&(t[o]=e)}return t}Lh.styles=[Fc,md(ws||(ws=Rl`
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
    `))],Lh._FRIENDLY_LABELS={adv_type:"Device Type",tx_power:"TX Power (dBm)",max_tx_power:"Max TX Power (dBm)",public_key:"Public Key",adv_lat:"Latitude",adv_lon:"Longitude",multi_acks:"Multi-Acks",adv_loc_policy:"Location Ad Policy",telemetry_mode_env:"Telemetry: Environment",telemetry_mode_loc:"Telemetry: Location",telemetry_mode_base:"Telemetry: Base",manual_add_contacts:"Manual Add Contacts",radio_freq:"Frequency (MHz)",radio_bw:"Bandwidth (kHz)",radio_sf:"Spreading Factor",radio_cr:"Coding Rate",name:"Name",path_hash_mode:"Path Hash Mode",firmware_ver:"Firmware Version",board_type:"Board Type",suggested_timeout:"Suggested Timeout (ms)",capabilities:"Capabilities",voltage:"Voltage (mV)",percentage:"Battery (%)",uptime:"Uptime (s)",temperature:"Temperature",max_hops:"Max Hops (0 = unlimited)",config:"Auto-Add Config"},Lh._VALUE_FORMATTERS={adv_loc_policy:e=>Rh(e,Mh),path_hash_mode:e=>Rh(e,Bh),telemetry_mode_env:e=>Rh(e,Ih),telemetry_mode_loc:e=>Rh(e,Ih),telemetry_mode_base:e=>Rh(e,Ih),manual_add_contacts:e=>{if(!0===e)return Zl("Manual Mode");if(!1===e)return Zl("Auto-Add Enabled");const t=Eh(e);return void 0===t?Zl("Unknown ({v})",{v:String(e)}):Zl(t?"Manual Mode":"Auto-Add Enabled")},multi_acks:e=>{const t=Eh(e);return void 0===t?Zl("Unknown ({v})",{v:String(e)}):Zl(t?"Yes":"No")},adv_lat:e=>{const t=Eh(e);return void 0===t?`${e}`:`${t.toFixed(6)}°`},adv_lon:e=>{const t=Eh(e);return void 0===t?`${e}`:`${t.toFixed(6)}°`},config:e=>{const t=Eh(e);return void 0===t?Zl("Unknown ({v})",{v:String(e)}):function(e,t){const i={};for(const o of t)i[o.label]=(e&o.value)===o.value;return i}(t,zh)}},Ol([$c({type:Boolean})],Lh.prototype,"open",void 0),Ol([$c({type:Object})],Lh.prototype,"hass",void 0),Ol([$c({type:String})],Lh.prototype,"entryId",void 0),Ol([$c({type:String})],Lh.prototype,"targetPrefix",void 0),Ol([$c({type:Boolean})],Lh.prototype,"isLocal",void 0),Ol([$c({type:Boolean})],Lh.prototype,"narrow",void 0),Ol([$c({type:String})],Lh.prototype,"nodeName",void 0),Ol([kc()],Lh.prototype,"_selectedCommand",void 0),Ol([kc()],Lh.prototype,"_paramValues",void 0),Ol([kc()],Lh.prototype,"_response",void 0),Ol([kc()],Lh.prototype,"_executing",void 0),Ol([kc()],Lh.prototype,"_error",void 0),Ol([kc()],Lh.prototype,"_deviceResponses",void 0),Lh=Nh=Ol([_c("chattx-command-dialog")],Lh);let Vh=class extends yc{constructor(){super(),this.narrow=!1,this._managedDevices={repeaters:[],clients:[]},this._contactsByPrefix={},this._loading=!0,this._error=null,this._confirmAction=null,this._confirmDialogOpen=!1,this._commandDialogOpen=!1,this._commandDialogTarget="",this._commandDialogIsLocal=!1,this._statusMessage=null,this._statusMessageTimeout=null,this._deviceEntities={},this._meshcoreDeviceMap={},this._entityRegistryLoaded=!1,this._lastKnown={},this._lastKnownRequested=new Set,this._hiddenSensors={},this._contextMenu=null,this._overlayPointerStarted=!1,this._settingsDeviceKey=null,this._hiddenSensorsModalKey=null,this._neighborContextMenu=null,this._neighborData={},Ap(this,{isOpen:()=>null!==this._contextMenu,onEscape:()=>this._dismissContextMenu(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="tile-context"]')}}),Ap(this,{isOpen:()=>null!==this._neighborContextMenu,onEscape:()=>this._dismissNeighborContextMenu(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="neighbor-context"]')}}),Ap(this,{isOpen:()=>null!==this._settingsDeviceKey,onEscape:()=>this._closeSettingsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="device-settings"]')}}),Ap(this,{isOpen:()=>null!==this._hiddenSensorsModalKey,onEscape:()=>this._closeHiddenSensorsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="hidden-sensors"]')}})}connectedCallback(){super.connectedCallback(),this._loadHiddenSensors(),this._loadManagedDevices()}disconnectedCallback(){super.disconnectedCallback(),null!==this._statusMessageTimeout&&(clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=null)}updated(e){e.has("config")&&this._loadManagedDevices(),e.has("hass")&&this.hass&&!this._entityRegistryLoaded&&this._loadEntityRegistry(),(e.has("hass")||e.has("_managedDevices")||e.has("_deviceEntities"))&&this._loadLastKnown()}_managedEntityIds(e,t){const i=this._getDeviceEntities(e,t).map(e=>e.entity_id);return e.status_entity_id&&i.push(e.status_entity_id),i}async _loadLastKnown(){if(!this.hass)return;const e=[],t=[[this._managedDevices.repeaters,"repeater"],[this._managedDevices.clients,"client"]];for(const[o,r]of t)for(const t of o)for(const o of this._managedEntityIds(t,r)){var i;this._lastKnownRequested.has(o)||Hh(null===(i=this.hass.states[o])||void 0===i?void 0:i.state)&&(this._lastKnownRequested.add(o),e.push(o))}if(0===e.length)return;const o=Date.now();try{const t=await this.hass.callWS({type:"history/history_during_period",start_time:new Date(o-6048e5).toISOString(),end_time:new Date(o).toISOString(),entity_ids:e,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this._lastKnown={...this._lastKnown,...jh(t)}}catch(e){}}render(){var e,t,i,o,r;return this.hass?Zd(ks||(ks=Rl`
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
    `),this._error?Zd(Cs||(Cs=Rl`<div class="error-state"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg> ${0}</div>`),this._error):ic,this._loading?Zd(Fs||(Fs=Rl`<div class="loading-state"><div class="loading-spinner"></div> ${0}</div>`),Zl("Loading devices...")):Zd(Ss||(Ss=Rl`
                ${0}
                ${0}
                ${0}
              `),this._renderDeviceSections(this._managedDevices.repeaters,"repeater"),this._renderDeviceSections(this._managedDevices.clients,"client"),0===this._managedDevices.repeaters.length&&0===this._managedDevices.clients.length?Zd(As||(As=Rl`
                      <div class="empty-state">
                        <div class="empty-text">${0}</div>
                        <div class="empty-subtext">${0}</div>
                      </div>
                    `),Zl("No managed devices"),Zl("Add repeaters or clients in Settings → Integration to manage them here.")):ic),this._confirmDialogOpen,(null===(e=this._confirmAction)||void 0===e?void 0:e.title)||"",(null===(t=this._confirmAction)||void 0===t?void 0:t.message)||"",this._onConfirmAction,this._onConfirmCancel,this._commandDialogOpen,this.hass,null===(i=this.config)||void 0===i?void 0:i.entry_id,this._commandDialogTarget,null!==(o=null===(r=this.config)||void 0===r?void 0:r.node_name)&&void 0!==o?o:"",this._commandDialogIsLocal,this.narrow,this._onCommandDialogClose,this._contextMenu?Zd(Ds||(Ds=Rl`
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
      `),this._onOverlayPointerDown,this._closeContextMenu,Zl("{label} actions",{label:this._contextMenu.label}),e=>e.stopPropagation(),e=>e.stopPropagation(),this._contextMenu.label,Zl("Close"),this._dismissContextMenu,e=>e.stopPropagation(),this._hideSensorFromContext,Zl("Hide Sensor")):ic,this._neighborContextMenu?Zd(Es||(Es=Rl`
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
      `),this._onOverlayPointerDown,this._closeNeighborContextMenu,Zl("{name} actions",{name:this._neighborContextMenu.name}),e=>e.stopPropagation(),e=>e.stopPropagation(),this._neighborContextMenu.name,Zl("Close"),this._dismissNeighborContextMenu,e=>e.stopPropagation(),this._removeNeighborFromContext,Zl("Remove Neighbor")):ic,this._settingsDeviceKey?(()=>{const e=this._getSettingsDeviceContext();return e?Zd(Ms||(Ms=Rl`
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
      `),this._closeSettingsModal,Zl("{name} settings",{name:e.name}),e=>e.stopPropagation(),e.name,Zl("Close"),this._closeSettingsModal,this._openHiddenSensorsList,(this._hiddenSensors[this._settingsDeviceKey]||[]).length,!e.isOnline,()=>{this._closeSettingsModal(),this._openCommandDialog(e.device,!1)},Zl("Issue Command"),!e.isOnline,()=>{this._closeSettingsModal(),this._confirmActionDialog(`Reboot ${e.name}?`,"The device will restart.",()=>this._executeRemoteAction(e.device,"reboot"))},Zl("Reboot Device"),"repeater"===e.type?Zd(Bs||(Bs=Rl`
                <button class="modal-action danger" ?disabled=${0} @click=${0}>
                  <span class="modal-action-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M5 18h14v2H5v-2zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2-9.4 9.3z"/></svg></span>
                  ${0}
                </button>
              `),!e.isOnline,()=>{this._closeSettingsModal(),this._confirmActionDialog(`Start OTA on ${e.name}?`,"The device will enter update mode.",()=>this._executeRemoteAction(e.device,"start ota"))},Zl("Start OTA Update")):ic):ic})():ic,this._hiddenSensorsModalKey?this._renderHiddenSensorsModal():ic,this._statusMessage?Zd(Is||(Is=Rl`<div class="status-toast ${0}">${0}${0}</div>`),this._statusMessage.type,"success"===this._statusMessage.type?"✓ ":"✗ ",this._statusMessage.text):ic):Zd($s||($s=Rl`<div class="content-area"><div class="loading-state"><div class="loading-spinner"></div> ${0}</div></div>`),Zl("Initializing..."))}_renderDeviceSections(e,t){return e.map(e=>this._renderDeviceSection(e,t))}_renderDeviceSection(e,t){var i,o,r;const s=function(e,t){if(0===Object.keys(t).length)return e;const i=new Proxy(e.states,{get(e,i,o){const r=Reflect.get(e,i,o);if("string"!=typeof i)return r;const s=t[i];if(!s||r&&!Hh(r.state))return r;const a=new Date(s.ts).toISOString();return{entity_id:i,attributes:{},...r,state:s.state,last_changed:a,last_updated:a}}});return{...e,states:i}}(this.hass,this._lastKnown),a=function(e,t,i){let o=null;for(const s of t){var r;const t=i[s];t&&Hh(null==e||null===(r=e.states[s])||void 0===r?void 0:r.state)&&(null===o||t.ts<o)&&(o=t.ts)}return o}(this.hass,this._managedEntityIds(e,t),this._lastKnown);let n="unknown",l=Zl("Unknown");if(e.status_entity_id&&s.states[e.status_entity_id]){const t=s.states[e.status_entity_id].state;"on"===t?(n="online",l=Zl("Online")):"off"===t&&(n="offline",l=Zl("Offline"))}else e.status&&(n="online"===e.status?"online":"offline"===e.status?"offline":"unknown",l="online"===e.status?Zl("Online"):"offline"===e.status?Zl("Offline"):Zl("Unknown"));const d="online"===n,c=this._getManagedDeviceKey(e,t),p=this._getDeviceEntities(e,t),h=(this._hiddenSensors[c]||[]).length,u="repeater"===t&&e.neighbors_enabled,g=this._neighborData[e.pubkey_prefix],m=p.find(e=>"uptime_hours"===e.metricKey),v=d&&m?this._formatUptimeFromEntity(m.entity_id):"",f=this._contactsByPrefix[null===(i=e.pubkey_prefix)||void 0===i?void 0:i.toLowerCase()],y=null==f?void 0:f.adv_lat,b=null==f?void 0:f.adv_lon,_=null==f?void 0:f.last_advert,x="number"==typeof y?y:NaN,w="number"==typeof b?b:NaN,$=Number.isFinite(x)&&Number.isFinite(w)&&(0!==x||0!==w);return u&&!g&&this._loadNeighbors(e),Zd(zs||(zs=Rl`
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
    `),e=>this._onTileContextMenu(e,c),t,Zd("repeater"===t?Rs||(Rs=Rl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`):Os||(Os=Rl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`)),e.name,Zl("repeater"===t?"Repeater":"Client"),e.firmware_version?Zd(Ts||(Ts=Rl`<span>${0}: v${0}</span>`),Zl("Firmware"),null!==(o=null===(r=e.firmware_version.match(/(\d+\.\d+\.\d+)/))||void 0===r?void 0:r[1])&&void 0!==o?o:e.firmware_version):ic,Zl("Key"),e.pubkey_prefix,$?Zd(Ns||(Ns=Rl`<span>${0}: ${0}, ${0}</span>`),Zl("Loc"),x.toFixed(4),w.toFixed(4)):ic,null!==a?Zd(Ls||(Ls=Rl`<span class="last-known"
                      title=${0}>
                      <chattx-read-age-note .readAt=${0}></chattx-read-age-note>
                    </span>`),Zl("Home Assistant restarted after this repeater was last read, so these are the values from that read. New values come with the next read."),new Date(a).toISOString()):ic,()=>this._settingsDeviceKey=c,Zl("Device settings"),Zl("Device settings"),n,()=>e.status_entity_id&&this._fireMoreInfo(e.status_entity_id),e.status_entity_id?"cursor:pointer":"",n,l,v?Zd(Ps||(Ps=Rl` · ${0}`),v):ic,p.length>0?Zd(qs||(qs=Rl`
              <chattx-node-summary
                .hass=${0}
                .device=${0}
                .entities=${0}
                .hiddenCount=${0}
                .fallbackLatitude=${0}
                .fallbackLongitude=${0}
                .fallbackUpdated=${0}>
              </chattx-node-summary>
            `),s,{...e,type:t},p,h,y,b,_):ic,u?this._renderInlineNeighbors(e,g):ic,!d,()=>this._executeRemoteAction(e,"advert"),Zl("Flood Advert"),!d,()=>this._executeRemoteAction(e,"clock sync"),Zl("Sync Clock"))}_renderInlineNeighbors(e,t){return!t||t.loading?Zd(Hs||(Hs=Rl`
        <div class="neighbor-section">
          <div class="subsection-label">${0}</div>
          <div class="neighbor-loading"><div class="loading-spinner"></div> ${0}</div>
        </div>
      `),Zl("Neighbors"),Zl("Loading neighbors...")):0===t.neighbors.length?Zd(js||(js=Rl`
        <div class="neighbor-section">
          <div class="subsection-label">${0}</div>
          <div style="font-size: 13px; color: var(--secondary-text-color); padding: 8px 0;">${0}</div>
        </div>
      `),Zl("Neighbors"),Zl("No neighbors found")):Zd(Vs||(Vs=Rl`
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
    `),t.neighbors.length,t.chartData.length>0?Zd(Ks||(Ks=Rl`
              <div class="chart-container">
                <chattx-snr-chart
                  .data=${0}
                  .neighbors=${0}
                  width="550"
                  height="200"
                  timeRange="24">
                </chattx-snr-chart>
              </div>
            `),t.chartData,t.neighbors.map(e=>e.pubkey_prefix)):ic,Zl("Name"),Zl("SNR"),Zl("Seen (48h)"),Zl("Last Heard"),t.neighbors.map(t=>{var i;return Zd(Us||(Us=Rl`
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
            `),i=>this._onNeighborRightClick(i,t,e.pubkey_prefix),vh(()=>this._onNeighborRightClick(new MouseEvent("contextmenu"),t,e.pubkey_prefix)),t.name&&t.name!==t.pubkey_prefix.substring(0,6).toUpperCase()?`${t.name} (${t.pubkey_prefix.substring(0,6).toUpperCase()})`:t.pubkey_prefix.substring(0,6).toUpperCase(),t.snr>5?"snr-good":t.snr>=0?"snr-fair":"snr-poor",i=>{i.stopPropagation(),this._openNeighborMoreInfo(e.pubkey_prefix,t.pubkey_prefix,"snr")},t.snr.toFixed(1),i=>{i.stopPropagation(),this._openNeighborMoreInfo(e.pubkey_prefix,t.pubkey_prefix,"seen")},null!==(i=t.seen_48h)&&void 0!==i?i:0,this._formatRelativeTime(t.last_seen))}))}async _loadEntityRegistry(){if(this.hass&&!this._entityRegistryLoaded){this._entityRegistryLoaded=!0;try{const{meshcoreDeviceMap:e,deviceEntities:t}=await qh(this.hass);this._meshcoreDeviceMap=e,this._deviceEntities=t}catch(e){console.error("Failed to load entity registry:",e)}}}_getDeviceEntities(e,t){var i;if(!this.hass||!this.config)return[];const o=this._getManagedDeviceKey(e,t),r=new Set(this._hiddenSensors[o]||[]),s=(null===(i=this.selectedDevice)||void 0===i?void 0:i.entry_id)||"",a=e.pubkey_prefix||"",n=`${s}_${t}_${a}`,l=this._meshcoreDeviceMap[n];if(l&&this._deviceEntities[l])return this._deviceEntities[l].filter(e=>!r.has(e.entity_id));for(const[e,i]of Object.entries(this._meshcoreDeviceMap))if(e.includes(a)&&e.includes(t)&&this._deviceEntities[i])return this._deviceEntities[i].filter(e=>!r.has(e.entity_id));const d=a.substring(0,6).toLowerCase();if(!d)return[];const c=[];for(const e of Object.values(this._deviceEntities))for(const t of e)t.entity_id.toLowerCase().includes(d)&&!r.has(t.entity_id)&&c.push(t);return c.sort((e,t)=>e.sortOrder-t.sortOrder)}async _loadNeighbors(e){if(this.hass){this._neighborData={...this._neighborData,[e.pubkey_prefix]:{neighbors:[],chartData:[],loading:!0,loaded:!1}};try{var t;const i=await async function(e,t,i){try{const o={type:"meshcore_chattx/get_neighbors",target_prefix:t};return i&&(o.entry_id=i),(await e.callWS(o)).neighbors||[]}catch(e){return[]}}(this.hass,e.pubkey_prefix,null===(t=this.config)||void 0===t?void 0:t.entry_id);let o=[];i.length>0&&(o=await this._fetchSNRHistory(i)),this._neighborData={...this._neighborData,[e.pubkey_prefix]:{neighbors:i,chartData:o,loading:!1,loaded:!0}}}catch(t){console.error(`Failed to load neighbors for ${e.name}:`,t),this._neighborData={...this._neighborData,[e.pubkey_prefix]:{neighbors:[],chartData:[],loading:!1,loaded:!0}}}}}async _fetchSNRHistory(e){if(!this.hass)return[];try{const t=e.filter(e=>{var t;return null===(t=e.entity_ids)||void 0===t?void 0:t.snr}).map(e=>e.entity_ids.snr);if(0===t.length)return[];const i=await this.hass.callWS({type:"recorder/statistics_during_period",start_time:new Date(Date.now()-864e5).toISOString(),end_time:(new Date).toISOString(),statistic_ids:t,period:"hour"}),o={};return Object.entries(i).forEach(([t,i])=>{const r=e.find(e=>{var i;return(null===(i=e.entity_ids)||void 0===i?void 0:i.snr)===t});r&&Array.isArray(i)&&i.forEach(e=>{if(e.start&&null!=e.mean){const t=new Date(e.start).getTime();o[t]||(o[t]={}),o[t][r.pubkey_prefix]=e.mean}})}),Object.entries(o).map(([e,t])=>({timestamp:parseInt(e,10),values:t})).sort((e,t)=>e.timestamp-t.timestamp)}catch(e){return[]}}async _loadManagedDevices(){if(this.hass)try{var e;this._loading=!0,this._error=null;const t=await async function(e,t){try{const i={type:"meshcore_chattx/get_managed_devices"};t&&(i.entry_id=t);const o=await e.callWS(i);return{repeaters:o.repeaters||[],clients:o.clients||[]}}catch(e){return{repeaters:[],clients:[]}}}(this.hass,null===(e=this.config)||void 0===e?void 0:e.entry_id);this._managedDevices=t,this._loadContacts()}catch(e){this._error=Zl("Failed to load devices: {error}",{error:String(e)})}finally{this._loading=!1}}async _loadContacts(){if(this.hass)try{var e,t;const i=(null===(e=this.selectedDevice)||void 0===e?void 0:e.entry_id)||(null===(t=this.config)||void 0===t?void 0:t.entry_id),o=await Nc(this.hass,i),r={};for(const e of o)e.pubkey_prefix&&(r[e.pubkey_prefix.toLowerCase()]=e);this._contactsByPrefix=r}catch(e){}}async _executeRemoteAction(e,t){if(this.hass)try{var i;const o=await jc(this.hass,e.pubkey_prefix,t,null===(i=this.config)||void 0===i?void 0:i.entry_id);o.success?this._showStatusMessage(`${e.name}: ${t} → ${o.response||"OK"}`,"success"):this._showStatusMessage(`${e.name}: ${t} failed — ${o.response||"error"}`,"error")}catch(i){this._showStatusMessage(`${e.name}: ${t} failed — ${String(i)}`,"error")}}_fireMoreInfo(e){const t=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_formatUptimeFromEntity(e){var t,i,o;const r=null===(t=this.hass)||void 0===t?void 0:t.states[e];if(!r||"unavailable"===r.state||"unknown"===r.state)return"";const s=parseFloat(r.state);if(!Number.isFinite(s))return"";let a;switch(null!==(i=null===(o=r.attributes)||void 0===o?void 0:o.unit_of_measurement)&&void 0!==i?i:"s"){case"d":a=86400*s;break;case"h":a=3600*s;break;case"min":a=60*s;break;default:a=s}if(a<60)return`${Math.floor(a)}s`;if(a<3600)return`${Math.floor(a/60)}m`;if(a<86400){const e=Math.floor(a/3600),t=Math.floor(a%3600/60);return t>0?`${e}h ${t}m`:`${e}h`}const n=Math.floor(a/86400),l=Math.floor(a%86400/3600);return l>0?`${n}d ${l}h`:`${n}d`}_confirmActionDialog(e,t,i){this._confirmAction={title:e,message:t,onConfirm:i},this._confirmDialogOpen=!0}async _onConfirmAction(){if(this._confirmDialogOpen=!1,this._confirmAction)try{await this._confirmAction.onConfirm()}catch(e){this._showStatusMessage(Zl("Error: {error}",{error:String(e)}),"error")}this._confirmAction=null}_onConfirmCancel(){this._confirmDialogOpen=!1,this._confirmAction=null}_openCommandDialog(e,t){this._commandDialogTarget=e.pubkey_prefix,this._commandDialogIsLocal=t,this._commandDialogOpen=!0}_onCommandDialogClose(){this._commandDialogOpen=!1,this._commandDialogTarget="",this._commandDialogIsLocal=!1}_getManagedDeviceKey(e,t){var i;return`${(null===(i=this.selectedDevice)||void 0===i?void 0:i.entry_id)||""}_${t}_${e.pubkey_prefix}`}_loadHiddenSensors(){try{const e=localStorage.getItem("chattx-hidden-sensors");e&&(this._hiddenSensors=JSON.parse(e))}catch(e){this._hiddenSensors={}}}_saveHiddenSensors(){try{localStorage.setItem("chattx-hidden-sensors",JSON.stringify(this._hiddenSensors))}catch(e){}}_hideSensor(e,t){const i=this._hiddenSensors[e]||[];i.includes(t)||(this._hiddenSensors={...this._hiddenSensors,[e]:[...i,t]},this._saveHiddenSensors())}_unhideSensor(e,t){const i=this._hiddenSensors[e]||[];if(this._hiddenSensors={...this._hiddenSensors,[e]:i.filter(e=>e!==t)},0===this._hiddenSensors[e].length){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t}this._saveHiddenSensors()}_unhideAllSensors(e){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t,this._saveHiddenSensors()}_onTileContextMenu(e,t){const{entityId:i,label:o}=e.detail;this._contextMenu={entityId:i,label:o,deviceKey:t},this._overlayPointerStarted=!1}_onOverlayPointerDown(){this._overlayPointerStarted=!0}_dismissContextMenu(){this._overlayPointerStarted=!1,this._contextMenu=null}_closeContextMenu(){this._overlayPointerStarted&&this._dismissContextMenu()}_hideSensorFromContext(){this._contextMenu&&(this._hideSensor(this._contextMenu.deviceKey,this._contextMenu.entityId),this._showStatusMessage(Zl("Hidden: {label}",{label:this._contextMenu.label}),"success"),this._contextMenu=null)}_onNeighborRightClick(e,t,i){e.preventDefault(),this._neighborContextMenu={name:t.name||t.pubkey_prefix,neighborPubkey:t.pubkey_prefix,repeaterPubkey:i},this._overlayPointerStarted=!1}_dismissNeighborContextMenu(){this._overlayPointerStarted=!1,this._neighborContextMenu=null}_closeNeighborContextMenu(){this._overlayPointerStarted&&this._dismissNeighborContextMenu()}_removeNeighborFromContext(){if(!this._neighborContextMenu)return;const{name:e,neighborPubkey:t,repeaterPubkey:i}=this._neighborContextMenu;this._neighborContextMenu=null,this._confirmActionDialog(Zl("Remove neighbor {name}?",{name:e}),Zl("This will remove the neighbor from the repeater and delete its sensors from HA. This cannot be undone."),()=>this._executeRemoveNeighbor(i,t,e))}_openNeighborMoreInfo(e,t,i){var o;const r=e.substring(0,10).toLowerCase(),s=t.substring(0,6).toLowerCase(),a="snr"===i?`sensor.meshcore_${r}_neighbor_${s}`:`sensor.meshcore_${r}_neighbor_${s}_seen`;null!==(o=this.hass)&&void 0!==o&&o.states[a]&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:a},bubbles:!0,composed:!0}))}async _executeRemoveNeighbor(e,t,i){if(this.hass)try{var o,r;const s=await this.hass.callWS({type:"meshcore_chattx/remove_neighbor",entry_id:null===(o=this.config)||void 0===o?void 0:o.entry_id,target_prefix:e,neighbor_pubkey:t}),a=null!==(r=null==s?void 0:s.entities_removed)&&void 0!==r?r:0;this._showStatusMessage(Zl("Removed {name} ({entitiesRemoved} sensors deleted)",{name:i,entitiesRemoved:a}),"success");const n=this._managedDevices.repeaters.find(t=>t.pubkey_prefix===e);n&&await this._loadNeighbors(n)}catch(e){this._showStatusMessage(Zl("Failed to remove {name}: {err}",{name:i,err:e.message||e}),"error")}}_getSettingsDeviceContext(){const e=this._settingsDeviceKey;if(!e)return null;const t=[...this._managedDevices.repeaters.map(e=>({device:e,type:"repeater"})),...this._managedDevices.clients.map(e=>({device:e,type:"client"}))];for(const{device:o,type:r}of t)if(this._getManagedDeviceKey(o,r)===e){var i;let e=!1;return e=o.status_entity_id&&null!==(i=this.hass)&&void 0!==i&&i.states[o.status_entity_id]?"on"===this.hass.states[o.status_entity_id].state:"online"===o.status,{device:o,type:r,name:o.name,isOnline:e}}return null}_closeSettingsModal(){this._settingsDeviceKey=null}_openHiddenSensorsList(){this._hiddenSensorsModalKey=this._settingsDeviceKey,this._settingsDeviceKey=null}_renderHiddenSensorsModal(){const e=this._hiddenSensorsModalKey,t=(this._hiddenSensors[e]||[]).map(e=>{let t=e;for(const i of Object.values(this._deviceEntities)){const o=i.find(t=>t.entity_id===e);if(o){t=o.label;break}}return{entityId:e,label:t}});return Zd(Ws||(Ws=Rl`
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
    `),this._closeHiddenSensorsModal,Zl("Hidden sensors"),e=>e.stopPropagation(),Zl("Hidden Sensors"),Zl("Close"),this._closeHiddenSensorsModal,0===t.length?Zd(Gs||(Gs=Rl`<div class="empty-hidden">${0}</div>`),Zl("No hidden sensors")):t.map(t=>Zd(Xs||(Xs=Rl`
                  <div class="hidden-sensor-item">
                    <div>
                      <div class="hidden-sensor-name">${0}</div>
                      <div class="hidden-sensor-id">${0}</div>
                    </div>
                    <button class="unhide-btn" @click=${0}>${0}</button>
                  </div>
                `),t.label,t.entityId,()=>this._unhideSensor(e,t.entityId),Zl("Unhide"))),t.length>1?Zd(Ys||(Ys=Rl`
                <div class="modal-footer">
                  <button class="action-btn" @click=${0}>${0}</button>
                </div>
              `),()=>{this._unhideAllSensors(e)},Zl("Unhide All")):ic)}_closeHiddenSensorsModal(){this._hiddenSensorsModalKey=null}_showStatusMessage(e,t){this._statusMessage={text:e,type:t},null!==this._statusMessageTimeout&&clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=window.setTimeout(()=>{this._statusMessage=null,this._statusMessageTimeout=null},5e3)}_formatRelativeTime(e){try{const t=Date.now()-new Date(e).getTime(),i=Math.floor(t/6e4);if(i<1)return"just now";if(i<60)return`${i}m ago`;const o=Math.floor(i/60);return o<24?`${o}h ago`:`${Math.floor(o/24)}d ago`}catch(e){return"unknown"}}};Vh.styles=[Fc,md(Qs||(Qs=Rl`
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
    `))],Ol([$c({type:Object})],Vh.prototype,"hass",void 0),Ol([$c({type:Object})],Vh.prototype,"config",void 0),Ol([$c({type:Boolean})],Vh.prototype,"narrow",void 0),Ol([$c({type:Object})],Vh.prototype,"selectedDevice",void 0),Ol([kc()],Vh.prototype,"_managedDevices",void 0),Ol([kc()],Vh.prototype,"_contactsByPrefix",void 0),Ol([kc()],Vh.prototype,"_loading",void 0),Ol([kc()],Vh.prototype,"_error",void 0),Ol([kc()],Vh.prototype,"_confirmAction",void 0),Ol([kc()],Vh.prototype,"_confirmDialogOpen",void 0),Ol([kc()],Vh.prototype,"_commandDialogOpen",void 0),Ol([kc()],Vh.prototype,"_commandDialogTarget",void 0),Ol([kc()],Vh.prototype,"_commandDialogIsLocal",void 0),Ol([kc()],Vh.prototype,"_statusMessage",void 0),Ol([kc()],Vh.prototype,"_statusMessageTimeout",void 0),Ol([kc()],Vh.prototype,"_deviceEntities",void 0),Ol([kc()],Vh.prototype,"_meshcoreDeviceMap",void 0),Ol([kc()],Vh.prototype,"_entityRegistryLoaded",void 0),Ol([kc()],Vh.prototype,"_lastKnown",void 0),Ol([kc()],Vh.prototype,"_hiddenSensors",void 0),Ol([kc()],Vh.prototype,"_contextMenu",void 0),Ol([kc()],Vh.prototype,"_settingsDeviceKey",void 0),Ol([kc()],Vh.prototype,"_hiddenSensorsModalKey",void 0),Ol([kc()],Vh.prototype,"_neighborContextMenu",void 0),Ol([kc()],Vh.prototype,"_neighborData",void 0),Vh=Ol([_c("chattx-devices-page")],Vh);let Kh=class extends yc{constructor(){super(...arguments),this.selected=!1}render(){if(!this.contact)return Zd(Js||(Js=Rl``));const e=this.contact,t=this._getTypeClass(e.type),{label:i,cls:o}=this._getCategoryBadge(e);return Zd(Zs||(Zs=Rl`
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
    `),this.selected?"contact-card selected":"contact-card",t,this._getTypeIcon(e.type),e.adv_name,e.pubkey_prefix,e.lastmod?Zl("Last heard {lastmod}",{lastmod:new Date(1e3*e.lastmod).toLocaleString(Ql())}):"",o,i)}_getCategoryBadge(e){return e.added_to_node?{label:Zl("Added"),cls:"added"}:{label:Zl("Discovered"),cls:"discovered"}}_getTypeClass(e){switch(e){case 1:return"client";case 2:return"repeater";case 3:return"room-server";case 4:return"sensor";default:return"unknown"}}_getTypeIcon(e){switch(e){case 0:case 1:return Zd(ea||(ea=Rl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`));case 2:return Zd(ta||(ta=Rl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`));case 3:return Zd(ia||(ia=Rl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`));case 4:return Zd(oa||(oa=Rl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`));default:return Zd(ra||(ra=Rl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`))}}};Kh.styles=md(sa||(sa=Rl`
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
  `)),Ol([$c({type:Object})],Kh.prototype,"contact",void 0),Ol([$c({type:Boolean})],Kh.prototype,"selected",void 0),Kh=Ol([_c("chattx-contact-card")],Kh);let Uh=class extends yc{constructor(){super(...arguments),this.selected=!1}render(){if(!this.node)return Zd(aa||(aa=Rl``));const e="adv_name"in this.node,t=e?2===this.node.type:"repeater"===this.node.type,i=e&&3===this.node.type,o=e?1===this.node.type:"client"===this.node.type,r=e&&4===this.node.type,s=e?this.node.adv_name:this.node.name,a=this.node.pubkey_prefix,n=e?this.node.last_advert:void 0;let l=Zd(na||(na=Rl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`)),d="Contact",c="";t?(l=Zd(la||(la=Rl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11zm0 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`)),d="Repeater",c="repeater"):i?(l=Zd(da||(da=Rl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>`)),d="Room Server",c="room-server"):r?(l=Zd(ca||(ca=Rl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`)),d="Sensor",c="sensor"):o&&(l=Zd(pa||(pa=Rl`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`)),d="Client",c="client");const p=e&&(0!==this.node.adv_lat||0!==this.node.adv_lon),h=n?new Date(1e3*n).toLocaleTimeString(Ql()):Zl("Unknown");return Zd(ha||(ha=Rl`
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
    `),this.selected?"node-card selected":"node-card",`node-avatar ${c}`,l,s,a,`node-type-label ${c}`,d,n?Zd(ua||(ua=Rl`<div class="meta-item"><span><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px;"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></span><span>${0}</span></div>`),h):Zd(ga||(ga=Rl``)),p?Zd(ma||(ma=Rl`<div class="location-indicator"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 2px;"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>${0}, ${0}</div>`),this.node.adv_lat.toFixed(3),this.node.adv_lon.toFixed(3)):Zd(va||(va=Rl``)),e&&this.node.out_path?Zd(fa||(fa=Rl`<div class="route-info">Route: ${0}...</div>`),this.node.out_path.substring(0,12)):Zd(ya||(ya=Rl``)),e?Zd(ba||(ba=Rl`
            <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>${0}</button>
          `),e=>{e.stopPropagation(),this._dispatch("node-message")},Zl("Message")):Zd(_a||(_a=Rl``)),t?Zd(xa||(xa=Rl`
            <button class="action-btn" @click=${0}><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>${0}</button>
          `),e=>{e.stopPropagation(),this._dispatch("node-telemetry")},Zl("Telemetry")):Zd(wa||(wa=Rl``)),e=>{e.stopPropagation(),this._dispatch("node-delete")},Zl("Delete"))}_dispatch(e){this.dispatchEvent(new CustomEvent(e,{detail:{node:this.node},bubbles:!0,composed:!0}))}};Uh.styles=md($a||($a=Rl`
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
  `)),Ol([$c({type:Object})],Uh.prototype,"node",void 0),Ol([$c({type:Boolean})],Uh.prototype,"selected",void 0),Uh=Ol([_c("chattx-node-card")],Uh);const Wh={clients:1,repeaters:2,room_servers:3,sensors:4},Gh={clients:"Clients",repeaters:"Repeaters",room_servers:"Room Servers",sensors:"Sensors"};let Xh=class extends yc{constructor(){super(...arguments),this.contacts=[],this.channels=[],this.narrow=!1,this._viewportNarrow=!1,this._primaryFilter="all",this._typeFilter=null,this._searchQuery="",this._displayedContacts=[],this._totalCount=0,this._typeCounts={clients:0,repeaters:0,room_servers:0,sensors:0},this._l1Counts={all:0,added:0,discovered:0},this._loading=!1,this._nodeDetailDialogOpen=!1,this._pendingAction=null,this._sortBy="last_heard",this._onMediaChange=e=>{this._viewportNarrow=e.matches}}connectedCallback(){super.connectedCallback(),this._mediaQuery=window.matchMedia("(max-width: 870px)"),this._viewportNarrow=this._mediaQuery.matches,this._mediaQuery.addEventListener("change",this._onMediaChange),this._loadCounts(),this._loadPage(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._mediaQuery)||void 0===e||e.removeEventListener("change",this._onMediaChange),this._searchTimer&&(clearTimeout(this._searchTimer),this._searchTimer=void 0)}get _isNarrow(){return this.narrow||this._viewportNarrow}updated(e){super.updated(e),this._isNarrow?this.setAttribute("narrow",""):this.removeAttribute("narrow"),e.has("config")&&(this._displayedContacts=[],this._totalCount=0,this._loadCounts(),this._loadPage(!0))}render(){var e;return Zd(ka||(ka=Rl`
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
          </div>
        </div>

        <!-- Content area -->
        <div class="content-area">
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

    `),this._renderL1Button("all",Zl("All")),this._renderL1Button("added",`★ ${Zl("Added")}`),this._renderL1Button("discovered",Zl("Discovered")),"all"!==this._primaryFilter?Zd(Ca||(Ca=Rl`
            <div class="l2-bar">
              ${0}
            </div>
          `),this._renderL2Buttons()):ic,this._getSearchPlaceholder(),this._searchQuery,this._onSearchInput,this._searchQuery?Zd(Fa||(Fa=Rl`<button class="clear-search" @click=${0}>✕</button>`),()=>{this._searchQuery="",this._loadPage(!0)}):ic,this._sortBy,e=>{this._sortBy=e.target.value,this._loadPage(!0)},Zl("Last Heard"),Zl("Name"),Zl("Pub Prefix"),()=>this._clearStaleContacts(),Zl("Remove discovered contacts older than the configured threshold"),Zl("Clear Stale"),()=>this._syncAll(),Zl("Sync"),this._renderContactsContent(),this.hass,this._selectedNode,null===(e=this.config)||void 0===e?void 0:e.entry_id,this._pendingAction,this._nodeDetailDialogOpen,()=>{this._nodeDetailDialogOpen=!1},()=>this._dispatchNodeAction("message"),()=>this._dispatchNodeAction("trace"),()=>this._dispatchNodeAction("add-contact"),()=>this._dispatchNodeAction("remove-contact"))}_renderL1Button(e,t){const i=this._l1Counts[e],o=this._primaryFilter===e,r=`l1-btn ${e} ${o?"active":""}`;return Zd(Sa||(Sa=Rl`
      <button
        class=${0}
        @click=${0}>
        ${0} <span class="l1-count">(${0})</span>
      </button>
    `),r,()=>this._setPrimaryFilter(e),t,i)}_renderL2Buttons(){return["clients","repeaters","room_servers","sensors"].filter(e=>this._typeCounts[e]>0).map(e=>{const t=this._typeFilter===e;return Zd(Aa||(Aa=Rl`
          <button
            class=${0}
            @click=${0}>
            ${0} <span class="l2-count">(${0})</span>
          </button>
        `),`l2-btn ${Zl} ${t?"active":""}`,()=>this._setTypeFilter(e),Zl(Gh[e]),this._typeCounts[e])})}_setPrimaryFilter(e){this._primaryFilter!==e&&(this._primaryFilter=e,this._typeFilter=null,this._displayedContacts=[],this._totalCount=0,this._loadPage(!0))}_setTypeFilter(e){this._typeFilter===e?this._typeFilter=null:this._typeFilter=e,this._displayedContacts=[],this._totalCount=0,this._loadPage(!0)}_onSearchInput(e){this._searchQuery=e.target.value,this._searchTimer&&clearTimeout(this._searchTimer),this._searchTimer=setTimeout(()=>this._loadPage(!0),300)}_getSearchPlaceholder(){const e=this._primaryFilter,t=this._typeFilter?Zl(Gh[this._typeFilter]).toLowerCase():"nodes";return"all"===e?Zl("Search all nodes..."):Zl("Search {cat} {type}...",{cat:e,type:t})}async _loadPage(e=!1){if(this.hass){this._loading=!0;try{var t;const i=e?0:this._displayedContacts.length,o=this._typeFilter?Wh[this._typeFilter]:void 0,r=this._searchQuery.trim()||void 0,s=await async function(e,t="all",i={}){try{var o,r;const s={type:"meshcore_chattx/get_contacts_paginated",category:t,limit:null!==(o=i.limit)&&void 0!==o?o:50,offset:null!==(r=i.offset)&&void 0!==r?r:0};return void 0!==i.nodeType&&(s.node_type=i.nodeType),i.search&&(s.search=i.search),i.entryId&&(s.entry_id=i.entryId),i.sortBy&&(s.sort_by=i.sortBy),await e.callWS(s)}catch(e){return{contacts:[],total:0,counts:{clients:0,repeaters:0,room_servers:0,sensors:0}}}}(this.hass,this._primaryFilter,{nodeType:o,search:r,limit:50,offset:i,entryId:null===(t=this.config)||void 0===t?void 0:t.entry_id,sortBy:this._sortBy});this._displayedContacts=e?s.contacts:[...this._displayedContacts,...s.contacts],this._totalCount=s.total,this._typeCounts=s.counts}catch(e){console.error("Failed to load contacts:",e)}finally{this._loading=!1}}}async _loadCounts(){if(this.hass)try{var e;this._l1Counts=await async function(e,t){try{const i={type:"meshcore_chattx/get_node_counts"};return t&&(i.entry_id=t),await e.callWS(i)}catch(e){return{all:0,added:0,discovered:0}}}(this.hass,null===(e=this.config)||void 0===e?void 0:e.entry_id)}catch(e){console.error("Failed to load node counts:",e)}}async _clearStaleContacts(){var e;if(!this.hass)return;const t=prompt(Zl("Remove discovered contacts older than how many days?"),"30");if(!t)return;const i=parseInt(t,10);isNaN(i)||i<1||i>365||(await async function(e,t,i){try{const o={type:"meshcore_chattx/clear_discovered_contacts"};return void 0!==t&&(o.days_threshold=t),i&&(o.entry_id=i),await e.callWS(o)}catch(e){return{removed:0}}}(this.hass,i,null===(e=this.config)||void 0===e?void 0:e.entry_id)).removed>0&&(this._loadPage(!0),this._loadCounts(),this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0})))}_syncAll(){this._loadPage(!0),this._loadCounts(),this.dispatchEvent(new CustomEvent("contacts-changed",{bubbles:!0,composed:!0}))}_renderContactsContent(){return this._loading&&0===this._displayedContacts.length?Zd(Da||(Da=Rl`
        <div class="empty-state">
          <div class="empty-text">${0}</div>
        </div>
      `),Zl("Loading...")):0===this._displayedContacts.length?this._renderEmptyState():Zd(Ea||(Ea=Rl`
      <div class="nodes-grid">
        ${0}
      </div>
      ${0}
    `),this._displayedContacts.map(e=>Zd(Ma||(Ma=Rl`
          <div @click=${0}>
            <chattx-contact-card .contact=${0}></chattx-contact-card>
          </div>
        `),()=>this._openNodeDetail(e),e)),this._displayedContacts.length<this._totalCount?Zd(Ba||(Ba=Rl`
        <div class="load-more">
          <button ?disabled=${0} @click=${0}>
            ${0}
          </button>
        </div>
      `),this._loading,()=>this._loadPage(),this._loading?Zl("Loading..."):Zl("Load More ({length} of {totalCount})",{length:this._displayedContacts.length,totalCount:this._totalCount})):ic)}_renderEmptyState(){const e=this._primaryFilter,t=this._typeFilter;let i=Zd(Ia||(Ia=Rl`<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" opacity="0.5"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`)),o=Zl("No nodes found"),r="";return this._searchQuery?(o=Zl("No matching nodes"),r=Zl('No results for "{searchQuery}"',{searchQuery:this._searchQuery})):"added"===e?(o=Zl("No added contacts"),r=t?Zl("No added {type}",{type:Zl(Gh[t]).toLowerCase()}):Zl("Add discovered contacts to see them here")):"discovered"===e?(o=Zl("No discovered nodes"),r=t?Zl("No discovered {type}",{type:Zl(Gh[t]).toLowerCase()}):Zl("Nodes seen on the mesh will appear here")):"all"===e&&(o=Zl("No nodes"),r=Zl("No contacts or discovered nodes yet")),Zd(za||(za=Rl`
      <div class="empty-state">
        <div class="empty-icon">${0}</div>
        <div class="empty-text">${0}</div>
        ${0}
      </div>
    `),i,o,r?Zd(Ra||(Ra=Rl`<div class="empty-subtext">${0}</div>`),r):ic)}_openNodeDetail(e){this._selectedNode=e,this._nodeDetailDialogOpen=!0}_dispatchNodeAction(e){"add-contact"!==e&&"remove-contact"!==e||(this._pendingAction=e),this.dispatchEvent(new CustomEvent("node-action",{detail:{action:e,node:this._selectedNode},bubbles:!0,composed:!0})),"message"!==e&&"delete"!==e||(this._nodeDetailDialogOpen=!1)}clearPendingAction(){this._pendingAction=null}async refreshAfterMutation(e){if(await Promise.all([this._loadPage(!0),this._loadCounts()]),this._nodeDetailDialogOpen&&this._selectedNode&&e){const t=this._displayedContacts.find(t=>!(!t.public_key||t.public_key!==e)||!(!t.pubkey_prefix||!e.startsWith(t.pubkey_prefix)));t?this._selectedNode={...t}:this._nodeDetailDialogOpen=!1}}};Xh.styles=md(Oa||(Oa=Rl`
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
      align-items: center;
      gap: 8px;
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
  `)),Ol([$c({type:Array})],Xh.prototype,"contacts",void 0),Ol([$c({type:Array})],Xh.prototype,"channels",void 0),Ol([$c({type:Boolean})],Xh.prototype,"narrow",void 0),Ol([$c({type:Object})],Xh.prototype,"hass",void 0),Ol([$c({type:Object})],Xh.prototype,"config",void 0),Ol([kc()],Xh.prototype,"_viewportNarrow",void 0),Ol([kc()],Xh.prototype,"_primaryFilter",void 0),Ol([kc()],Xh.prototype,"_typeFilter",void 0),Ol([kc()],Xh.prototype,"_searchQuery",void 0),Ol([kc()],Xh.prototype,"_displayedContacts",void 0),Ol([kc()],Xh.prototype,"_totalCount",void 0),Ol([kc()],Xh.prototype,"_typeCounts",void 0),Ol([kc()],Xh.prototype,"_l1Counts",void 0),Ol([kc()],Xh.prototype,"_loading",void 0),Ol([kc()],Xh.prototype,"_selectedNode",void 0),Ol([kc()],Xh.prototype,"_nodeDetailDialogOpen",void 0),Ol([kc()],Xh.prototype,"_pendingAction",void 0),Ol([kc()],Xh.prototype,"_sortBy",void 0),Xh=Ol([_c("chattx-nodes-page")],Xh);const Yh="chattx-tab-badge";let Qh=class extends yc{constructor(){super(...arguments),this._text="",this._saving=!1,this._status="",this._error="",this._loaded=!1}updated(){this.hass&&!this._loaded&&(this._loaded=!0,ip(this.hass).then(e=>{this._text=e.join("\n")}))}async _save(){if(!this.hass)return;const e=this._text.split("\n").map(e=>e.trim()).filter(Boolean);if(this._status="",this._error="",e.length>50)return void(this._error=Zl("At most {MAX_QUICK_MESSAGES} messages.",{MAX_QUICK_MESSAGES:50}));const t=new TextEncoder,i=e.find(e=>t.encode(e).length>160);if(i){const e=i.length>30?`${i.slice(0,30)}…`:i;return void(this._error=Zl('A message can have at most {MAX_QUICK_MESSAGE_BYTES} bytes (a letter with diacritics takes 2): "{start}"',{MAX_QUICK_MESSAGE_BYTES:160,start:e}))}this._saving=!0;const o=await async function(e,t){try{return await e.callWS({type:"meshcore_chattx/set_quick_messages",messages:t}),null}catch(e){return Vc(e)}}(this.hass,e);this._saving=!1,o?this._error=o:(this._text=e.join("\n"),this._status=Zl("Saved."))}render(){var e;const t=!(null===(e=this.hass)||void 0===e||null===(e=e.user)||void 0===e||!e.is_admin);return Zd(Ta||(Ta=Rl`
      <p>${0}</p>
      <textarea
        aria-label=${0}
        ?readonly=${0}
        .value=${0}
        @input=${0}></textarea>
      ${0}
    `),Zl("One message per line. They are offered in chat under the lightning button."),Zl("Quick messages"),!t,this._text,e=>{this._text=e.target.value,this._status=""},t?Zd(Na||(Na=Rl`
        <div class="actions">
          <button ?disabled=${0} @click=${0}>${0}</button>
          ${0}
          ${0}
        </div>
      `),this._saving,this._save,Zl("Save"),this._status?Zd(La||(La=Rl`<span class="status" role="status">${0}</span>`),this._status):"",this._error?Zd(Pa||(Pa=Rl`<span class="error" role="alert">${0}</span>`),this._error):""):"")}};Qh.styles=md(qa||(qa=Rl`
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
  `)),Ol([$c({type:Object})],Qh.prototype,"hass",void 0),Ol([kc()],Qh.prototype,"_text",void 0),Ol([kc()],Qh.prototype,"_saving",void 0),Ol([kc()],Qh.prototype,"_status",void 0),Ol([kc()],Qh.prototype,"_error",void 0),Qh=Ol([_c("chattx-quick-messages-editor")],Qh);const Jh=[{step:"generating",label:"Generating new key"},{step:"importing",label:"Sending key to device"},{step:"rebooting",label:"Rebooting device"},{step:"reconnecting",label:"Waiting for device reconnect"},{step:"reloading",label:"Reloading MeshCore integration"},{step:"verifying",label:"Verifying new identity"}];let Zh=class extends yc{constructor(){super(),this.narrow=!1,this._deviceConfig=null,this._loading=!0,this._error=null,this._editValues={},this._saving=!1,this._commandDialogOpen=!1,this._confirmAction=null,this._confirmDialogOpen=!1,this._locationSource="manual",this._importKeyValue="",this._deviceEntities={},this._meshcoreDeviceMap={},this._entityRegistryLoaded=!1,this._hiddenSensors={},this._contextMenu=null,this._overlayPointerStarted=!1,this._settingsModalOpen=!1,this._keyManagementModalOpen=!1,this._identityFlowState={kind:"closed"},this._identityFlowUnsubscribe=null,this._renameSuccess=null,this._hiddenSensorsModalKey=null,this._statusMessage=null,this._defaultScope=null,this._defaultScopeSupported=!0,this._scopeChoices=[],this._scopeEdit=null,this._scopeCustom="",this._scopeSaving=!1,this._statusMessageTimeout=null,this._onCompanionTrace=()=>{var e;const t=null===(e=this.selectedDevice)||void 0===e?void 0:e.entry_id;this.dispatchEvent(new CustomEvent("companion-trace-requested",{detail:{entryId:t},bubbles:!0,composed:!0}))},Ap(this,{isOpen:()=>null!==this._contextMenu,onEscape:()=>this._closeContextMenu(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="tile-context"]')}}),Ap(this,{isOpen:()=>this._settingsModalOpen,onEscape:()=>this._closeSettingsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="companion-settings"]')}}),Ap(this,{isOpen:()=>this._keyManagementModalOpen,onEscape:()=>this._closeKeyManagementModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="key-management"]')}}),Ap(this,{isOpen:()=>null!==this._hiddenSensorsModalKey,onEscape:()=>this._closeHiddenSensorsModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="hidden-sensors"]')}}),Ap(this,{isOpen:()=>"closed"!==this._identityFlowState.kind,onEscape:()=>{"success"!==this._identityFlowState.kind&&"failure"!==this._identityFlowState.kind||this._closeIdentityFlowModal()},getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="identity-flow"]')}}),Ap(this,{isOpen:()=>null!==this._renameSuccess,onEscape:()=>this._closeRenameSuccessModal(),getScope:()=>{var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('[data-a11y="rename-success"]')}})}connectedCallback(){super.connectedCallback(),this._loadDeviceConfig(),this._loadDefaultScope(),this._loadHiddenSensors()}disconnectedCallback(){super.disconnectedCallback(),null!==this._statusMessageTimeout&&(clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=null)}updated(e){e.has("config")&&(this._loadDeviceConfig(),void 0!==e.get("config")&&this._loadDefaultScope()),e.has("hass")&&this.hass&&!this._entityRegistryLoaded&&this._loadEntityRegistry()}async _loadDeviceConfig(){if(this.hass){this._loading=!0,this._error=null;try{var e,t;this._deviceConfig=await Pc(this.hass,null===(e=this.config)||void 0===e?void 0:e.entry_id),null!==(t=this._deviceConfig)&&void 0!==t&&t.location_source&&(this._locationSource=this._deviceConfig.location_source)}catch(e){this._error=Zl("Failed to load device configuration: {error}",{error:String(e)})}finally{this._loading=!1}}}render(){var e,t,i,o,r,s;return this._loading?Zd(Ha||(Ha=Rl`
        <div class="settings-page">
          <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--secondary-text-color);">
            <div style="display: flex; align-items: center; gap: 8px;">
              <div class="loading-spinner"></div>
              <span>${0}</span>
            </div>
          </div>
        </div>
      `),Zl("Loading settings...")):this._error?Zd(ja||(ja=Rl`
        <div class="settings-page">
          <div style="padding: 16px; color: var(--error-color); font-size: 14px;">
            ${0}
          </div>
        </div>
      `),this._error):this._deviceConfig?Zd(Ka||(Ka=Rl`
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
                  <div class="form-description">${0}</div>
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
    `),this.selectedDevice?this._renderCompanionCard():ic,Zl("General"),this._renderDeviceInfo(),Zl("Radio"),this._renderRadioSettings(),Zl("Region"),this._renderDefaultScope(),Zl("Location"),this._renderLocation(),Zl("Language"),Zl("Panel language"),Gl(),this._onLanguageChanged,"auto"===Gl(),Zl("Automatic (Home Assistant or browser)"),Object.entries(Pl).map(([e,t])=>Zd(Ua||(Ua=Rl`<option value=${0} ?selected=${0}>${0}</option>`),e,Gl()===e,t)),Zl("Quick reply"),Zl("Reply text in the message dialog"),nd(),ad(),!(null!==(e=this.hass)&&void 0!==e&&null!==(e=e.user)&&void 0!==e&&e.is_admin),this._onHeardReplyChanged,Zl("{hops} is replaced with the hop count, for example 3 hops. The sender's name is added at the start. Leave empty for the default text."),Zl("Browser tab"),function(){try{return"false"!==localStorage.getItem(Yh)}catch(e){return!0}}(),this._onTabBadgeChanged,Zl("Show unread messages in the browser tab title"),Zl("On every Home Assistant page in this browser, the tab title starts with the number from the Chat tab, for example (3)."),Zl("Quick messages"),this.hass,this._contextMenu?Zd(Wa||(Wa=Rl`
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
      `),this._onOverlayPointerDown,this._closeContextMenu,Zl("{label} actions",{label:this._contextMenu.label}),e=>e.stopPropagation(),e=>e.stopPropagation(),this._contextMenu.label,Zl("Close"),this._closeContextMenu,e=>e.stopPropagation(),this._hideSensorFromContext,Zl("Hide Sensor")):ic,this._settingsModalOpen?Zd(Ga||(Ga=Rl`
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
      `),this._closeSettingsModal,Zl("Companion settings"),e=>e.stopPropagation(),Zl("Companion Settings"),Zl("Close"),this._closeSettingsModal,this._openHiddenSensorsList,(this._hiddenSensors[this._getCompanionDeviceKey()]||[]).length,this._openCommandDialogForCompanion,Zl("Issue Command"),this._handleRebootFromModal,Zl("Reboot Device"),this._openKeyManagementModal,Zl("Key Management")):ic,this._keyManagementModalOpen?Zd(Xa||(Xa=Rl`
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
      `),this._closeKeyManagementModal,Zl("Key management"),e=>e.stopPropagation(),Zl("Key Management"),Zl("Close"),this._closeKeyManagementModal,this._renderIdentityManagement()):ic,this._hiddenSensorsModalKey?this._renderHiddenSensorsModal():ic,this._renderIdentityFlowModal(),this._renderRenameSuccessModal(),this._statusMessage?Zd(Ya||(Ya=Rl`
        <div class="status-toast ${0}">
          ${0}
        </div>
      `),this._statusMessage.type,this._statusMessage.text):ic,this._confirmDialogOpen,(null===(t=this._confirmAction)||void 0===t?void 0:t.title)||"",(null===(i=this._confirmAction)||void 0===i?void 0:i.message)||"",null===(o=this._confirmAction)||void 0===o?void 0:o.requireTyped,!(null===(r=this._confirmAction)||void 0===r||!r.requireTyped),this._onConfirmAction,this._onConfirmCancel,this._commandDialogOpen,this.hass,null===(s=this.config)||void 0===s?void 0:s.entry_id,!0,this.narrow,this._onCommandDialogClose):Zd(Va||(Va=Rl`<div>${0}</div>`),Zl("No device config loaded"))}_renderCompanionCard(){var e;if(!this.selectedDevice)return ic;const t=this.selectedDevice,i=t.connected,o=this._getCompanionDeviceKey(),r=this._getCompanionEntities(),s=(this._hiddenSensors[o]||[]).length,a=r.find(e=>e.entity_id.includes("node_count")),n=a?null===(e=this.hass)||void 0===e||null===(e=e.states[a.entity_id])||void 0===e?void 0:e.state:void 0,l=n&&"unavailable"!==n&&"unknown"!==n?n:void 0;return Zd(Qa||(Qa=Rl`
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
    `),e=>this._onTileContextMenu(e,o),t.name,Zl("Companion"),Zl("Firmware"),t.firmware||Zl("unknown"),Zl("Key"),t.pubkey_prefix,void 0!==l?Zd(Ja||(Ja=Rl`<span>${0}</span>`),Zl("Added nodes: {count}",{count:l})):ic,()=>this._settingsModalOpen=!0,Zl("Device settings"),Zl("Device settings"),i?"online":"offline",i?"online":"offline",Zl(i?"Connected":"Offline"),r.length>0?Zd(Za||(Za=Rl`
              <chattx-node-summary
                .hass=${0}
                .device=${0}
                .entities=${0}
                .hiddenCount=${0}>
              </chattx-node-summary>
            `),this.hass,this._companionDescriptor(t),r,s):ic,!i,()=>this._executeCompanionAction("send_advert",void 0,"Local Advert"),Zl("Local Advert"),!i,()=>this._executeCompanionAction("send_advert",{flood:!0},"Flood Advert"),Zl("Flood Advert"),!i,()=>this._executeCompanionAction("set_time",{val:Math.floor(Date.now()/1e3)},"Sync Clock"),Zl("Sync Clock"),!i,this._onCompanionTrace,Zl("Trace"))}_renderHiddenSensorsModal(){const e=this._hiddenSensorsModalKey,t=(this._hiddenSensors[e]||[]).map(e=>{let t=e;for(const i of Object.values(this._deviceEntities)){const o=i.find(t=>t.entity_id===e);if(o){t=o.label;break}}return{entityId:e,label:t}});return Zd(en||(en=Rl`
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
    `),this._closeHiddenSensorsModal,Zl("Hidden sensors"),e=>e.stopPropagation(),Zl("Hidden Sensors"),Zl("Close"),this._closeHiddenSensorsModal,0===t.length?Zd(tn||(tn=Rl`<div class="empty-hidden">${0}</div>`),Zl("No hidden sensors")):t.map(t=>Zd(on||(on=Rl`
                  <div class="hidden-sensor-item">
                    <div>
                      <div class="hidden-sensor-name">${0}</div>
                      <div class="hidden-sensor-id">${0}</div>
                    </div>
                    <button class="unhide-btn" @click=${0}>${0}</button>
                  </div>
                `),t.label,t.entityId,()=>this._unhideSensor(e,t.entityId),Zl("Unhide"))),t.length>1?Zd(rn||(rn=Rl`
                <div class="modal-footer">
                  <button class="action-btn" @click=${0}>${0}</button>
                </div>
              `),()=>{this._unhideAllSensors(e)},Zl("Unhide All")):ic)}_renderDeviceInfo(){var e;if(this._deviceConfig)return Zd(sn||(sn=Rl`
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
    `),Zl("Hardware Model"),this._deviceConfig.hardware_model,Zl("Public Key"),this._deviceConfig.pubkey,Zl("Copy public key"),()=>this._copyToClipboard(this._deviceConfig.pubkey),this._deviceConfig.connection_type?Zd(an||(an=Rl`
        <div class="info-row">
          <span class="info-label">${0}</span>
          <span class="info-value">${0}${0}</span>
        </div>
      `),Zl("Connection"),this._deviceConfig.connection_type.toUpperCase(),this._deviceConfig.connection_address?Zd(nn||(nn=Rl` — ${0}`),this._deviceConfig.connection_address):""):"",Zl("Rename Device"),Zl("Changing the device name will change all entity IDs. Automations, scripts, and dashboards using current entity IDs will need to be updated."),null!==(e=this._editValues.name)&&void 0!==e?e:this._deviceConfig.name,e=>{this._editValues.name=e.target.value},!this._editValues.name||this._editValues.name===this._deviceConfig.name,this._handleNameSave,Zl("Rename"))}async _loadDefaultScope(){var e;if(!this.hass)return;const t=null===(e=this.config)||void 0===e?void 0:e.entry_id,[i,o]=await Promise.all([op(this.hass,t),Zc(this.hass,t)]);this._defaultScopeSupported=i.supported,this._defaultScope=i.scope.replace(/^#/,""),this._scopeChoices=o.scopes.map(e=>e.replace(/^#/,"")).filter(Boolean),this._scopeEdit=null,this._scopeCustom=""}_pendingScope(){const e=this._scopeEdit;if(null===e)return null;const t=("__custom"===e?this._scopeCustom:e).trim().replace(/^#/,"");return"__custom"!==e||t?t:null}async _applyDefaultScope(){var e;const t=this._pendingScope();if(null===t||!this.hass)return;this._scopeSaving=!0;const i=await async function(e,t,i){try{var o;const r={type:"meshcore_chattx/set_default_flood_scope",scope:t};i&&(r.entry_id=i);const s=await e.callWS(r);return{success:!!s.success,scope:null!==(o=s.scope)&&void 0!==o?o:""}}catch(e){return{success:!1,error:(null==e?void 0:e.message)||String(e)}}}(this.hass,t,null===(e=this.config)||void 0===e?void 0:e.entry_id);this._scopeSaving=!1,i.success?(this._defaultScope=(i.scope||"").replace(/^#/,""),this._scopeEdit=null,this._scopeCustom="",this._showStatusMessage(this._defaultScope?Zl("Default region set to #{name}",{name:this._defaultScope}):Zl("Default region cleared"),"success")):this._showStatusMessage(Zl("Could not set the region: {error}",{error:i.error||""}),"error")}_renderDefaultScope(){var e;if(null===this._defaultScope)return Zd(ln||(ln=Rl`<div class="form-description">${0}</div>`),Zl("Loading settings..."));if(!this._defaultScopeSupported)return Zd(dn||(dn=Rl`<div class="form-description">${0}</div>`),Zl("A default region needs companion firmware v1.15.0 or newer."));const t=this._defaultScope,i=[...this._scopeChoices];t&&!i.includes(t)&&i.unshift(t);const o=null!==(e=this._scopeEdit)&&void 0!==e?e:t,r=this._pendingScope(),s=null!==r&&r!==t;return Zd(cn||(cn=Rl`
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
    `),Zl("Default region for sending"),this._scopeSaving,e=>{this._scopeEdit=e.target.value},""===o,Zl("No region (global flood)"),i.map(e=>Zd(pn||(pn=Rl`<option value=${0} ?selected=${0}>#${0}</option>`),e,o===e,e)),"__custom"===o,Zl("Other region…"),"__custom"===o?Zd(hn||(hn=Rl`<div class="section-row">
            <div class="form-group-inline">
              <label class="form-label" for="chattx-default-scope-name">${0}</label>
              <input id="chattx-default-scope-name" class="form-input" type="text" maxlength="30"
                placeholder=${0} .value=${0}
                @input=${0} />
            </div>
          </div>`),Zl("Region name"),Zl("for example cz-pl"),this._scopeCustom,e=>{this._scopeCustom=e.target.value.replace(/[\s,]/g,"")}):ic,Zl("Channel messages without their own region go out in this region. A region set on the channel still wins. The radio keeps the setting, so it also applies to other clients, such as the phone app."),!s||this._scopeSaving,this._applyDefaultScope,this._scopeSaving?Zl("Saving..."):Zl("Apply"))}_renderRadioSettings(){var e,t,i,o;if(!this._deviceConfig)return;const r=this._hasChanges("radio-settings",["tx_power","frequency","bandwidth","spreading_factor","coding_rate","path_hash_mode"]);return Zd(un||(un=Rl`
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
    `),Zl("TX Power (dBm)"),String(null!==(e=null!==(t=this._editValues.tx_power)&&void 0!==t?t:this._deviceConfig.tx_power)&&void 0!==e?e:17),e=>{this._editValues.tx_power=Number(e.target.value)},Zl("Frequency (MHz)"),String(null!==(i=null!==(o=this._editValues.frequency)&&void 0!==o?o:this._deviceConfig.frequency)&&void 0!==i?i:906.875),e=>{this._editValues.frequency=Number(e.target.value)},Zl("Bandwidth (kHz)"),e=>{this._editValues.bandwidth=Number(e.target.value)},[7.8,10.4,15.6,20.8,31.25,41.7,62.5,125,250,500].map(e=>{var t,i;const o=null!==(t=null!==(i=this._editValues.bandwidth)&&void 0!==i?i:this._deviceConfig.bandwidth)&&void 0!==t?t:250;return Zd(gn||(gn=Rl`<option value=${0} ?selected=${0}>${0}</option>`),e,Number(o)===e,e)}),Zl("Spreading Factor"),e=>{this._editValues.spreading_factor=Number(e.target.value)},[7,8,9,10,11,12].map(e=>{var t,i;const o=null!==(t=null!==(i=this._editValues.spreading_factor)&&void 0!==i?i:this._deviceConfig.spreading_factor)&&void 0!==t?t:11;return Zd(mn||(mn=Rl`<option value=${0} ?selected=${0}>${0}</option>`),e,Number(o)===e,e)}),Zl("Coding Rate"),e=>{this._editValues.coding_rate=Number(e.target.value)},[5,6,7,8].map(e=>{var t,i;const o=null!==(t=null!==(i=this._editValues.coding_rate)&&void 0!==i?i:this._deviceConfig.coding_rate)&&void 0!==t?t:5;return Zd(vn||(vn=Rl`<option value=${0} ?selected=${0}>${0}</option>`),e,Number(o)===e,e)}),Zl("Path Hash Mode"),e=>{this._editValues.path_hash_mode=Number(e.target.value)},void 0===this._editValues.path_hash_mode&&null==this._deviceConfig.path_hash_mode?Zd(fn||(fn=Rl`<option selected disabled>${0}</option>`),Zl("Unknown")):"",[0,1,2].map(e=>{var t;const i=null!==(t=this._editValues.path_hash_mode)&&void 0!==t?t:this._deviceConfig.path_hash_mode;return Zd(yn||(yn=Rl`<option value=${0} ?selected=${0}>${0} - ${0}</option>`),e,null!=i&&Number(i)===e,e,ed("{n} byte","{n} bytes",e+1))}),!r||this._saving,()=>this._handleApply("radio-settings"),this._saving?Zl("Applying..."):Zl("Apply Radio Settings"),Zl("Radio changes require device reboot to take effect"))}_renderLocation(){var e,t,i,o,r,s,a,n;if(!this._deviceConfig)return;const l="ha_location"===this._locationSource,d=l?null===(e=this.hass)||void 0===e?void 0:e.states["zone.home"]:null,c=this._locationSource!==(null!==(t=this._deviceConfig.location_source)&&void 0!==t?t:"manual"),p=this._hasChanges("location",["latitude","longitude"]),h=c||p,u=String(l&&d?null!==(i=d.attributes.latitude)&&void 0!==i?i:0:null!==(o=null!==(r=this._editValues.latitude)&&void 0!==r?r:this._deviceConfig.latitude)&&void 0!==o?o:0),g=String(l&&d?null!==(s=d.attributes.longitude)&&void 0!==s?s:0:null!==(a=null!==(n=this._editValues.longitude)&&void 0!==n?n:this._deviceConfig.longitude)&&void 0!==a?a:0);return Zd(bn||(bn=Rl`
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
    `),Zl("Latitude"),u,l,e=>{this._editValues.latitude=Number(e.target.value)},Zl("Longitude"),g,l,e=>{this._editValues.longitude=Number(e.target.value)},l?Zd(_n||(_n=Rl`
        <div style="font-size: 11px; color: var(--secondary-text-color); margin-top: -8px; margin-bottom: 8px;">
          ${0}
        </div>
      `),Zl("Using coordinates from Home Assistant zone.home")):"",Zl("Location Source"),this._locationSource,e=>{this._locationSource=e.target.value},Zl("Manual (coordinates above)"),Zl("GPS (device hardware)"),Zl("Home Assistant Zone"),Zl("How the device determines its coordinates"),!h||this._saving,this._applyLocation,this._saving?Zl("Applying..."):Zl("Apply Location Settings"))}_renderIdentityManagement(){return Zd(xn||(xn=Rl`
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
    `),Zl("Regenerate Identity"),Zl("Creates a new key pair. All contacts will need to re-add you. This will change all entity IDs — automations, scripts, and dashboards using current entity IDs will need to be updated."),this._showRegenIdentityConfirm,Zl("Regenerate Identity"),Zl("Import Private Key"),Zl("Importing a key changes the device identity. This will change all entity IDs — automations, scripts, and dashboards using current entity IDs will need to be updated."),Zl("Hex private key"),this._importKeyValue,e=>{this._importKeyValue=e.target.value},!this._importKeyValue.trim(),this._handleImportKeyConfirm,Zl("Import"))}_hasChanges(e,t){return!!this._deviceConfig&&t.some(e=>void 0!==this._editValues[e]&&this._editValues[e]!==this._deviceConfig[e])}async _handleApply(e){if(!this.hass||!this._deviceConfig)return;let t=[];switch(e){case"device-name":t=["name"];break;case"radio-settings":t=["tx_power","frequency","bandwidth","spreading_factor","coding_rate","path_hash_mode"]}const i={};for(const e of t)void 0!==this._editValues[e]&&(i[e]=this._editValues[e]);this._saving=!0;try{var o;const e=await qc(this.hass,i,null===(o=this.config)||void 0===o?void 0:o.entry_id);if(e.success){this._deviceConfig&&(this._deviceConfig={...this._deviceConfig,...i});for(const e of t)delete this._editValues[e];this._editValues={...this._editValues},e.rename?this._renameSuccess=e.rename:this._showStatusMessage(Zl("Saved: {join}",{join:t.join(", ")}),"success")}else this._showStatusMessage(Zl("Save failed"),"error")}catch(e){this._showStatusMessage(Zl("Error: {error}",{error:String(e)}),"error")}finally{this._saving=!1}}_onLanguageChanged(e){!function(e){try{"auto"===e?localStorage.removeItem(jl):localStorage.setItem(jl,e)}catch(e){}}(e.target.value),window.location.reload()}_onTabBadgeChanged(e){!function(e){try{localStorage.setItem(Yh,String(e))}catch(e){}window.dispatchEvent(new Event("chattx-tab-badge-changed"))}(e.target.checked)}async _onHeardReplyChanged(e){this.hass&&(await async function(e,t){try{return ld((await e.callWS({type:"meshcore_chattx/set_heard_reply",text:t.trim()})).text),!0}catch(e){return!1}}(this.hass,e.target.value)?this._showStatusMessage(Zl("Saved for every browser"),"success"):this._showStatusMessage(Zl("Failed to save the reply text"),"error"),this.requestUpdate())}async _copyToClipboard(e){try{await navigator.clipboard.writeText(e),this._showStatusMessage(Zl("Copied to clipboard"),"success")}catch(e){this._showStatusMessage(Zl("Failed to copy"),"error")}}_showStatusMessage(e,t){this._statusMessage={text:e,type:t},null!==this._statusMessageTimeout&&clearTimeout(this._statusMessageTimeout),this._statusMessageTimeout=window.setTimeout(()=>{this._statusMessage=null,this._statusMessageTimeout=null},5e3)}_handleNameSave(){var e;const t=this._editValues.name,i=null===(e=this._deviceConfig)||void 0===e?void 0:e.name;if(void 0===t||t===i)return;const o=e=>(e||"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,""),r=o(null!=i?i:""),s=o(String(t));this._confirmAction={title:Zl("Rename Device"),message:`Renaming the device will rename all entity IDs ending in _${r} to _${s}. Any automations, scripts, or dashboards referencing entity IDs by the old name will need updating. A repair issue will list every renamed entity. Continue?`,onConfirm:async()=>{await this._handleApply("device-name")}},this._confirmDialogOpen=!0}_handleRebootFromModal(){this._settingsModalOpen=!1,this._confirmAction={title:Zl("Reboot Device"),message:Zl("Are you sure you want to reboot the device? The device will be temporarily unavailable."),onConfirm:()=>this._executeDeviceCommand("reboot")},this._confirmDialogOpen=!0}async _executeDeviceCommand(e){if(this.hass)try{var t;const i=await Hc(this.hass,e,void 0,null===(t=this.config)||void 0===t?void 0:t.entry_id);i.success?this._showStatusMessage(Zl("Device {command} initiated",{command:e}),"success"):this._showStatusMessage(Zl("Command failed: {response}",{response:i.response}),"error")}catch(e){this._showStatusMessage(Zl("Error: {error}",{error:String(e)}),"error")}}async _applyLocation(){if(this.hass&&this._deviceConfig){this._saving=!0;try{var e;const i=["latitude","longitude"],o={};if("ha_location"===this._locationSource){const e=this.hass.states["zone.home"];if(!e||null==e.attributes.latitude||null==e.attributes.longitude)return void this._showStatusMessage(Zl("Could not read zone.home coordinates from Home Assistant"),"error");o.latitude=e.attributes.latitude,o.longitude=e.attributes.longitude}else for(const e of i)void 0!==this._editValues[e]&&(o[e]=this._editValues[e]);if(Object.keys(o).length>0){var t;if(!(await qc(this.hass,o,null===(t=this.config)||void 0===t?void 0:t.entry_id)).success)return void this._showStatusMessage(Zl("Failed to save coordinates"),"error");this._deviceConfig&&(this._deviceConfig={...this._deviceConfig,...o});for(const e of i)delete this._editValues[e];this._editValues={...this._editValues}}if(!(await async function(e,t,i){try{const o={type:"meshcore_chattx/set_location_source",source:t};return i&&(o.entry_id=i),await e.callWS(o)}catch(e){return{success:!1}}}(this.hass,this._locationSource,null===(e=this.config)||void 0===e?void 0:e.entry_id)).success)return void this._showStatusMessage(Zl("Failed to update location source"),"error");await this._loadDeviceConfig(),this._showStatusMessage(Zl("Location settings applied"),"success")}catch(e){this._showStatusMessage(Zl("Error: {error}",{error:String(e)}),"error")}finally{this._saving=!1}}}_showRegenIdentityConfirm(){this._confirmAction={title:Zl("Regenerate Identity"),message:Zl("This will create a new cryptographic identity, reboot the device, and migrate all entity IDs to the new key prefix. Existing automations referencing entity IDs by the old prefix will need updating. All contacts must re-add this device. This cannot be undone."),requireTyped:"REGENERATE",onConfirm:async()=>{var e;this.hass&&(this._closeKeyManagementModal(),this._startIdentityFlow("regenerate",{type:"meshcore_chattx/regenerate_identity",payload:null!==(e=this.config)&&void 0!==e&&e.entry_id?{entry_id:this.config.entry_id}:{}}))}},this._confirmDialogOpen=!0}_handleImportKeyConfirm(){const e=this._importKeyValue.trim().replace(/\s+/g,"");e&&(64===e.length||128===e.length?/^[0-9a-fA-F]+$/.test(e)?(this._confirmAction={title:Zl("Import Private Key"),message:Zl("Importing a private key will replace the device identity, reboot the device, and migrate all entity IDs to the new key prefix. Existing automations referencing entity IDs by the old prefix will need updating. All contacts must re-add this device."),requireTyped:"IMPORT",onConfirm:()=>this._importIdentityKey()},this._confirmDialogOpen=!0):this._showStatusMessage(Zl("Private key must be hex (0-9, a-f)"),"error"):this._showStatusMessage(Zl("Private key must be 64 or 128 hex characters"),"error"))}async _importIdentityKey(){var e;if(!this.hass||!this._importKeyValue.trim())return;const t=this._importKeyValue.trim().replace(/\s+/g,"");this._closeKeyManagementModal(),this._importKeyValue="";const i={private_key:t};null!==(e=this.config)&&void 0!==e&&e.entry_id&&(i.entry_id=this.config.entry_id),this._startIdentityFlow("import",{type:"meshcore_chattx/import_identity",payload:i})}_startIdentityFlow(e,t){if(!this.hass)return;this._identityFlowUnsubscribe&&(this._identityFlowUnsubscribe(),this._identityFlowUnsubscribe=null),this._identityFlowState={kind:"progress",flow:e,currentStep:"generating",completedSteps:new Set};const{unsubscribe:i}=function(e,t,i,o){let r,s=null;const a=new Promise(e=>{r=e});let n={success:!1,code:"unknown",message:"Identity flow terminated without a result event."};return e.connection.subscribeMessage(e=>{if("done"===e.step&&e.success&&e.old_pubkey&&e.new_pubkey){const t={success:!0,old_pubkey:e.old_pubkey,new_pubkey:e.new_pubkey,warning:e.warning};n=t,o({type:"result",data:t})}else"done"!==e.step&&o({type:"progress",step:e.step})},{type:t,...i}).then(e=>{s=e,r(n)}).catch(e=>{const t={success:!1,code:e.code||"error",message:e.message||"Identity flow failed."};o({type:"error",data:t}),r(t)}),{unsubscribe:()=>{s&&s()},done:a}}(this.hass,t.type,t.payload,t=>{if("progress"===t.type){if("progress"!==this._identityFlowState.kind)return;const e=new Set(this._identityFlowState.completedSteps);e.add(this._identityFlowState.currentStep),this._identityFlowState={...this._identityFlowState,currentStep:t.step,completedSteps:e}}else"result"===t.type?this._identityFlowState={kind:"success",flow:e,oldPubkey:t.data.old_pubkey,newPubkey:t.data.new_pubkey,warning:t.data.warning}:"error"===t.type&&(this._identityFlowState={kind:"failure",flow:e,code:t.data.code,message:t.data.message})});this._identityFlowUnsubscribe=i}_closeIdentityFlowModal(){this._identityFlowUnsubscribe&&(this._identityFlowUnsubscribe(),this._identityFlowUnsubscribe=null);const e="success"===this._identityFlowState.kind;this._identityFlowState={kind:"closed"},e&&this._loadDeviceConfig()}_renderIdentityFlowModal(){const e=this._identityFlowState;if("closed"===e.kind)return ic;const t="regenerate"===e.flow?Zl("Regenerate Identity"):Zl("Import Private Key"),i="regenerate"===e.flow?Zl("Regenerating Identity"):Zl("Importing Identity"),o="regenerate"===e.flow?Zl("Identity Regenerated"):Zl("Identity Imported"),r="regenerate"===e.flow?Zl("Identity Regeneration Failed"):Zl("Identity Import Failed");let s,a;"progress"===e.kind?(s=Zd(wn||(wn=Rl`
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          ${0}
        </div>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">
          ${0}
        </ul>
      `),Zl("This typically takes 5–10 seconds. Please don't close this dialog."),Jh.map(t=>{const i=e.completedSteps.has(t.step),o=e.currentStep===t.step;let r="○",s="var(--secondary-text-color)";return i?(r="✓",s="var(--success-color, #28a745)"):o&&(r="⏳",s="var(--primary-color)"),Zd($n||($n=Rl`
              <li style="display: flex; align-items: center; gap: 8px; color: ${0}; font-size: 14px;">
                <span style="font-family: monospace; width: 1em;">${0}</span>
                <span>${0}</span>
              </li>
            `),s,r,t.label)})),a=ic):"success"===e.kind?(s=Zd(kn||(kn=Rl`
        <div style="font-size: 32px; text-align: center; margin-bottom: 8px;">✅</div>
        <div style="font-size: 14px; margin-bottom: 16px;">
          ${0}
        </div>
        <div style="font-family: monospace; font-size: 12px; background: var(--card-background-color, #f5f5f5); padding: 8px 12px; border-radius: 4px; margin-bottom: 12px;">
          <div><span style="color: var(--secondary-text-color);">${0}</span> ${0}…</div>
          <div><span style="color: var(--secondary-text-color);">${0}</span> ${0}… <span style="color: var(--success-color, #28a745); font-size: 11px;">(verified after reload)</span></div>
        </div>
        ${0}
      `),Zl("The device's identity has been replaced and verified."),Zl("Old key:"),e.oldPubkey.slice(0,12),Zl("New key:"),e.newPubkey.slice(0,12),e.warning?Zd(Cn||(Cn=Rl`
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-top: 12px; padding: 8px 12px; border-left: 3px solid var(--warning-color, #f0ad4e); background: var(--warning-color-bg, rgba(240, 173, 78, 0.08));">
            <strong>${0}</strong>
            <ul style="margin: 4px 0 0 16px; padding: 0;">
              <li>${0}</li>
              <li>${0}</li>
            </ul>
          </div>
        `),Zl("Follow-up:"),e.warning,Zl("Check Settings → Repairs for the entity-ID migration list.")):ic),a=Zd(Fn||(Fn=Rl`
        <button class="modal-action" @click=${0}>${0}</button>
      `),this._closeIdentityFlowModal,Zl("Close"))):(s=Zd(Sn||(Sn=Rl`
        <div style="font-size: 32px; text-align: center; margin-bottom: 8px;">❌</div>
        <div style="font-size: 14px; margin-bottom: 12px;">
          ${0}
        </div>
        <div style="font-family: monospace; font-size: 12px; background: var(--card-background-color, #f5f5f5); padding: 8px 12px; border-radius: 4px;">
          <div><span style="color: var(--secondary-text-color);">${0}</span> ${0}</div>
          <div style="margin-top: 4px; word-break: break-word;"><span style="color: var(--secondary-text-color);">${0}</span> ${0}</div>
        </div>
      `),"regenerate"===e.flow?Zl("The device firmware rejected the new key. Your device identity is unchanged."):Zl("The import did not take effect. Your device identity may be unchanged."),Zl("Error code:"),e.code,Zl("Message:"),e.message),a=Zd(An||(An=Rl`
        <button class="modal-action" @click=${0}>${0}</button>
      `),this._closeIdentityFlowModal,Zl("Close")));const n="progress"===e.kind?i:"success"===e.kind?o:r;return Zd(Dn||(Dn=Rl`
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
    `),t,e=>e.stopPropagation(),n,"progress"===e.kind?ic:Zd(En||(En=Rl`
              <button class="modal-close" aria-label=${0} @click=${0}>&times;</button>
            `),Zl("Close"),this._closeIdentityFlowModal),s,a?Zd(Mn||(Mn=Rl`<div style="margin-top: 20px; display: flex; justify-content: flex-end;">${0}</div>`),a):ic)}_closeRenameSuccessModal(){this._renameSuccess=null,this._loadDeviceConfig(),this.dispatchEvent(new CustomEvent("device-renamed",{bubbles:!0,composed:!0}))}_renderRenameSuccessModal(){const e=this._renameSuccess;return e?Zd(Bn||(Bn=Rl`
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
    `),Zl("Device renamed"),e=>e.stopPropagation(),Zl("Device renamed"),Zl("The MeshCore device was renamed from {old} to {new}.",{old:e.old_name,new:e.new_name}),ed("{n} entity ID was automatically migrated from the {old} suffix to {new}.","{n} entity IDs were automatically migrated from the {old} suffix to {new}.",e.count,{old:`_${e.old_suffix}`,new:`_${e.new_suffix}`}),Zl("If you have automations, scripts, or dashboards referencing the old entity IDs, you will need to update them manually to use the new suffix."),Zl("The full list of renamed entity IDs is available in Settings → Repairs."),this._closeRenameSuccessModal,Zl("Close")):ic}async _onConfirmAction(){if(this._confirmDialogOpen=!1,this._confirmAction)try{await this._confirmAction.onConfirm()}catch(e){this._error=Zl("Error: {error}",{error:String(e)})}this._confirmAction=null}_onConfirmCancel(){this._confirmDialogOpen=!1,this._confirmAction=null}_onCommandDialogClose(){this._commandDialogOpen=!1}async _loadEntityRegistry(){if(this.hass&&!this._entityRegistryLoaded){this._entityRegistryLoaded=!0;try{const{meshcoreDeviceMap:e,deviceEntities:t}=await qh(this.hass);this._meshcoreDeviceMap=e,this._deviceEntities=t}catch(e){console.error("Failed to load entity registry:",e)}}}_getCompanionEntities(){var e;if(!this.hass||!this.selectedDevice)return[];const t=this._getCompanionDeviceKey(),i=new Set(this._hiddenSensors[t]||[]),o=this.selectedDevice.entry_id,r=this._meshcoreDeviceMap[o];if(r&&this._deviceEntities[r])return this._deviceEntities[r].filter(e=>!i.has(e.entity_id));const s=(null===(e=this.selectedDevice.pubkey_prefix)||void 0===e||null===(e=e.substring(0,6))||void 0===e?void 0:e.toLowerCase())||"";if(!s)return[];const a=[];for(const[e,t]of Object.entries(this._deviceEntities))if(!Object.entries(this._meshcoreDeviceMap).some(([t,i])=>i===e&&(t.includes("_repeater_")||t.includes("_client_"))))for(const e of t)e.entity_id.toLowerCase().includes(s)&&!i.has(e.entity_id)&&a.push(e);return a.sort((e,t)=>e.sortOrder-t.sortOrder)}_getCompanionDeviceKey(){var e;return(null===(e=this.selectedDevice)||void 0===e?void 0:e.entry_id)||"companion"}_companionDescriptor(e){return{type:"companion",name:e.name,pubkey_prefix:e.pubkey_prefix,connected:e.connected,firmware:e.firmware,entry_id:e.entry_id}}_loadHiddenSensors(){try{const e=localStorage.getItem("chattx-hidden-sensors");e&&(this._hiddenSensors=JSON.parse(e))}catch(e){this._hiddenSensors={}}}_saveHiddenSensors(){try{localStorage.setItem("chattx-hidden-sensors",JSON.stringify(this._hiddenSensors))}catch(e){}}_hideSensor(e,t){const i=this._hiddenSensors[e]||[];i.includes(t)||(this._hiddenSensors={...this._hiddenSensors,[e]:[...i,t]},this._saveHiddenSensors())}_unhideSensor(e,t){const i=this._hiddenSensors[e]||[];if(this._hiddenSensors={...this._hiddenSensors,[e]:i.filter(e=>e!==t)},0===this._hiddenSensors[e].length){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t}this._saveHiddenSensors()}_unhideAllSensors(e){const t={...this._hiddenSensors};delete t[e],this._hiddenSensors=t,this._saveHiddenSensors()}async _executeCompanionAction(e,t,i){if(!this.hass)return;const o=i||e;try{var r;const i=await Hc(this.hass,e,t,null===(r=this.config)||void 0===r?void 0:r.entry_id);this._showStatusMessage(Zl("Companion: {displayName} → {OK}",{displayName:o,OK:i.response||"OK"}),"success")}catch(e){this._showStatusMessage(Zl("Companion: {displayName} failed — {error}",{displayName:o,error:String(e)}),"error")}}_onTileContextMenu(e,t){const{entityId:i,label:o}=e.detail;this._contextMenu={entityId:i,label:o,deviceKey:t},this._overlayPointerStarted=!1}_onOverlayPointerDown(){this._overlayPointerStarted=!0}_closeContextMenu(){this._overlayPointerStarted&&(this._overlayPointerStarted=!1,this._contextMenu=null)}_hideSensorFromContext(){this._contextMenu&&(this._hideSensor(this._contextMenu.deviceKey,this._contextMenu.entityId),this._showStatusMessage(Zl("Hidden: {label}",{label:this._contextMenu.label}),"success"),this._contextMenu=null)}_closeSettingsModal(){this._settingsModalOpen=!1}_openHiddenSensorsList(){this._hiddenSensorsModalKey=this._getCompanionDeviceKey(),this._settingsModalOpen=!1}_closeHiddenSensorsModal(){this._hiddenSensorsModalKey=null}_openCommandDialogForCompanion(){this._commandDialogOpen=!0,this._settingsModalOpen=!1}_openKeyManagementModal(){this._keyManagementModalOpen=!0,this._settingsModalOpen=!1}_closeKeyManagementModal(){this._keyManagementModalOpen=!1}};Zh.styles=[Fc,md(In||(In=Rl`
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
    `))],Ol([$c({type:Object})],Zh.prototype,"hass",void 0),Ol([$c({type:Object})],Zh.prototype,"config",void 0),Ol([$c({type:Boolean})],Zh.prototype,"narrow",void 0),Ol([$c({type:Object})],Zh.prototype,"selectedDevice",void 0),Ol([kc()],Zh.prototype,"_deviceConfig",void 0),Ol([kc()],Zh.prototype,"_loading",void 0),Ol([kc()],Zh.prototype,"_error",void 0),Ol([kc()],Zh.prototype,"_editValues",void 0),Ol([kc()],Zh.prototype,"_saving",void 0),Ol([kc()],Zh.prototype,"_commandDialogOpen",void 0),Ol([kc()],Zh.prototype,"_confirmAction",void 0),Ol([kc()],Zh.prototype,"_confirmDialogOpen",void 0),Ol([kc()],Zh.prototype,"_locationSource",void 0),Ol([kc()],Zh.prototype,"_importKeyValue",void 0),Ol([kc()],Zh.prototype,"_deviceEntities",void 0),Ol([kc()],Zh.prototype,"_meshcoreDeviceMap",void 0),Ol([kc()],Zh.prototype,"_entityRegistryLoaded",void 0),Ol([kc()],Zh.prototype,"_hiddenSensors",void 0),Ol([kc()],Zh.prototype,"_contextMenu",void 0),Ol([kc()],Zh.prototype,"_settingsModalOpen",void 0),Ol([kc()],Zh.prototype,"_keyManagementModalOpen",void 0),Ol([kc()],Zh.prototype,"_identityFlowState",void 0),Ol([kc()],Zh.prototype,"_renameSuccess",void 0),Ol([kc()],Zh.prototype,"_hiddenSensorsModalKey",void 0),Ol([kc()],Zh.prototype,"_statusMessage",void 0),Ol([kc()],Zh.prototype,"_defaultScope",void 0),Ol([kc()],Zh.prototype,"_defaultScopeSupported",void 0),Ol([kc()],Zh.prototype,"_scopeChoices",void 0),Ol([kc()],Zh.prototype,"_scopeEdit",void 0),Ol([kc()],Zh.prototype,"_scopeCustom",void 0),Ol([kc()],Zh.prototype,"_scopeSaving",void 0),Zh=Ol([_c("chattx-settings-page")],Zh);let eu=class extends yc{constructor(){super(),this.open=!1,this.contactName="",this.result=null,this.error="",this.availableRepeaters=[],this.targetContact=null,this.pathMode="discovery",this.pathHops=[],this.enteredPath="",this._repeaterFilter="",this._running=!1,this._onPathModeChange=e=>{this.pathMode=e.target.value},this._onExplicitPathInput=e=>{this.enteredPath=e.target.value},this._onRunTrace=()=>{if(!this._canRunTrace())return;const e="discovery"===this.pathMode?void 0:this._buildPathString();this._running=!0,this.dispatchEvent(new CustomEvent("trace-requested",{detail:{pathMode:this.pathMode,path:e},bubbles:!0,composed:!0}))},Ap(this,{isOpen:()=>this.open,onEscape:()=>this._close()})}willUpdate(e){if(e.has("open")&&this.open&&!e.get("open")){const e=this.targetContact;if(!e||2!==e.type&&3!==e.type&&4!==e.type)this.pathMode="discovery",this.pathHops=[];else{this.pathMode="select";const t=this._resolveCachedHops(e);this.pathHops=t||[]}this.enteredPath="",this._repeaterFilter="",this._running=!1}(e.has("result")&&this.result||e.has("error")&&this.error)&&(this._running=!1)}_resolveCachedHops(e){var t,i;if(1!==(null!==(t=e.out_path_hash_mode)&&void 0!==t?t:0))return null;const o=(e.out_path||"").toLowerCase(),r=null!==(i=e.out_path_len)&&void 0!==i?i:0;if(!o||r<=0)return null;if(o.length<4*r)return null;const s=[];for(let e=0;e<r;e++){const t=o.substring(4*e,4*(e+1)),i=this.availableRepeaters.find(e=>(e.pubkey_prefix||"").toLowerCase().startsWith(t));if(!i)return null;s.push(i)}return s}render(){return this.open?Zd(Rn||(Rn=Rl`
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
    `),this._close,Zl("Trace {contactName}",{contactName:this.contactName}),e=>e.stopPropagation(),this.contactName,Zl("Close"),this._close,this._renderBody()):Zd(zn||(zn=Rl``))}_renderBody(){return this.error?Zd(On||(On=Rl`<div class="error-box">${0}</div>`),this.error):this.result?this._renderResult(this.result):this._running?Zd(Tn||(Tn=Rl`<div class="info-value">${0}</div>`),Zl("Tracing…")):this._renderInput()}_renderInput(){return Zd(Nn||(Nn=Rl`
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
    `),Zl("Path Type"),this.pathMode,this._onPathModeChange,Zl("Path discovery (auto)"),Zl("Select repeaters"),Zl("Enter path"),"discovery"===this.pathMode?Zd(Ln||(Ln=Rl`<div class="info-item path-hint">
            ${0}
          </div>`),Zl("Flood path discovery will find a route automatically. May time out if the target is many hops away or unreachable by flood.")):"select"===this.pathMode?this._renderRepeaterPicker():this._renderExplicitInput(),"discovery"!==this.pathMode&&this._canRunTrace()?Zd(Pn||(Pn=Rl`<div class="info-item">
            <div class="info-label">${0}</div>
            <div class="resolved-path">${0}</div>
          </div>`),Zl("Resolved Path"),this._buildPathString()):Zd(qn||(qn=Rl``)),!this._canRunTrace(),this._onRunTrace,Zl("Run Trace"))}_renderRepeaterPicker(){var e,t,i;const o=new Set(this.pathHops.map(e=>e.public_key)),r=this._repeaterFilter.trim().toLowerCase(),s=[...this.availableRepeaters].filter(e=>!o.has(e.public_key)).filter(e=>{if(!r)return!0;const t=(e.adv_name||"").toLowerCase(),i=(e.pubkey_prefix||"").toLowerCase();return t.includes(r)||i.startsWith(r)}).sort((e,t)=>(e.adv_name||"").localeCompare(t.adv_name||"")),a=(null===(e=this.targetContact)||void 0===e?void 0:e.adv_name)||(null===(t=this.targetContact)||void 0===t?void 0:t.pubkey_prefix)||"(no target)",n=(null===(i=this.targetContact)||void 0===i||null===(i=i.pubkey_prefix)||void 0===i?void 0:i.substring(0,2).toUpperCase())||"--";return Zd(Hn||(Hn=Rl`
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
    `),Zl("Repeaters (in order, source → target)"),Zl("Available"),Zl("Filter by name or pubkey prefix…"),this._repeaterFilter,e=>{this._repeaterFilter=e.target.value},0===s.length?Zd(jn||(jn=Rl`<div class="picker-empty">${0}</div>`),r?"No matches":"No repeaters available"):s.map(e=>Zd(Vn||(Vn=Rl`
                      <div
                        class="picker-item"
                        @click=${0}
                        title=${0}
                      >
                        <span class="name">${0}</span>
                        <span class="hop-hex">${0}</span>
                      </div>
                    `),()=>this._addRepeater(e),Zl("Add {adv_name}",{adv_name:e.adv_name}),e.adv_name||e.pubkey_prefix,e.pubkey_prefix.substring(0,2).toUpperCase())),Zl("Path"),0===this.pathHops.length?Zd(Kn||(Kn=Rl`<div class="picker-empty">${0}</div>`),Zl("Click a repeater to add (or leave empty for direct-neighbor)")):this.pathHops.map((e,t)=>Zd(Un||(Un=Rl`
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
                    `),t+1,e.adv_name||e.pubkey_prefix,e.pubkey_prefix.substring(0,2).toUpperCase(),0===t,()=>this._moveRepeater(t,-1),Zl("Move up"),t===this.pathHops.length-1,()=>this._moveRepeater(t,1),Zl("Move down"),()=>this._removeRepeater(t),Zl("Remove"))),Zl("Target"),a,n)}_renderExplicitInput(){var e,t,i;const o=!!this.enteredPath&&!this._isValidExplicitHops(),r=(null===(e=this.targetContact)||void 0===e?void 0:e.adv_name)||(null===(t=this.targetContact)||void 0===t?void 0:t.pubkey_prefix)||"(no target)",s=(null===(i=this.targetContact)||void 0===i||null===(i=i.pubkey_prefix)||void 0===i?void 0:i.substring(0,2).toUpperCase())||"--";return Zd(Wn||(Wn=Rl`
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
    `),Zl("Outbound Hops (comma-separated hex)"),Zl("AE  (or AE,CD for multiple hops, or empty for direct neighbor)"),this.enteredPath,this._onExplicitPathInput,o?Zd(Gn||(Gn=Rl`<div class="path-error">
              ${0}
            </div>`),Zl("Invalid format — hex pairs separated by commas, all the same width (2, 4, or 8 chars).")):Zd(Xn||(Xn=Rl``)),Zl("Target"),r,s)}_addRepeater(e){this.pathHops=[...this.pathHops,e]}_removeRepeater(e){this.pathHops=this.pathHops.filter((t,i)=>i!==e)}_moveRepeater(e,t){const i=e+t;if(i<0||i>=this.pathHops.length)return;const o=[...this.pathHops];[o[e],o[i]]=[o[i],o[e]],this.pathHops=o}_isValidExplicitHops(){const e=this.enteredPath.trim();if(!e)return!0;const t=e.split(",").map(e=>e.trim());if(0===t.length)return!1;const i=t[0].length;if(![2,4,8].includes(i))return!1;const o=/^[0-9a-fA-F]+$/;return t.every(e=>e.length===i&&o.test(e))}_canRunTrace(){return"discovery"===this.pathMode||("select"===this.pathMode?!!this.targetContact:"explicit"===this.pathMode&&!!this.targetContact&&this._isValidExplicitHops())}_buildPathString(){if("select"===this.pathMode){if(!this.targetContact)return"";const e=this.targetContact.pubkey_prefix.substring(0,2).toUpperCase(),t=this.pathHops.map(e=>e.pubkey_prefix.substring(0,2).toUpperCase());return 0===t.length?e:[...t,e,...[...t].reverse()].join(",")}if("explicit"===this.pathMode){if(!this.targetContact)return"";const e=this.targetContact.pubkey_prefix.substring(0,2).toUpperCase(),t=this.enteredPath.trim();if(!t)return e;const i=t.split(",").map(e=>e.trim().toUpperCase());return[...i,e,...[...i].reverse()].join(",")}return""}_renderResult(e){const t=(e.path||[]).filter(e=>e.hash);return Zd(Yn||(Yn=Rl`
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
    `),Zl("Round Trip"),e.response_time,Zl("Hops"),0===e.hops?Zl("Direct (0 hops)"):`${e.hops}`,null!==e.final_snr&&void 0!==e.final_snr?Zd(Qn||(Qn=Rl`
            <div class="info-item">
              <div class="info-label">${0}</div>
              <div class="info-value">${0} dB</div>
            </div>
          `),Zl("Final SNR (at this device)"),e.final_snr.toFixed(2)):Zd(Jn||(Jn=Rl``)),t.length>0?Zd(Zn||(Zn=Rl`
            <div class="info-item">
              <div class="info-label">${0}</div>
              <div class="hop-list">
                ${0}
              </div>
            </div>
          `),Zl("Return Path (per-hop SNR)"),t.map((e,t)=>{var i;return Zd(el||(el=Rl`
                    <div class="hop-row">
                      <span>${0}</span>
                      <span>${0} dB</span>
                    </div>
                  `),Zl("Hop {number}: {hash}",{number:t+1,hash:null!==(i=e.hash)&&void 0!==i?i:""}),e.snr.toFixed(2))})):Zd(tl||(tl=Rl``)))}_close(){this.open=!1,this.dispatchEvent(new CustomEvent("trace-dialog-closed",{bubbles:!0,composed:!0}))}};eu.styles=[Fc,md(il||(il=Rl`
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
  `))],Ol([$c({type:Boolean})],eu.prototype,"open",void 0),Ol([$c({type:String})],eu.prototype,"contactName",void 0),Ol([$c({type:Object})],eu.prototype,"result",void 0),Ol([$c({type:String})],eu.prototype,"error",void 0),Ol([$c({type:Array})],eu.prototype,"availableRepeaters",void 0),Ol([$c({type:Object})],eu.prototype,"targetContact",void 0),Ol([kc()],eu.prototype,"pathMode",void 0),Ol([kc()],eu.prototype,"pathHops",void 0),Ol([kc()],eu.prototype,"enteredPath",void 0),Ol([kc()],eu.prototype,"_repeaterFilter",void 0),Ol([kc()],eu.prototype,"_running",void 0),eu=Ol([_c("chattx-trace-dialog")],eu);let tu=class extends yc{constructor(){super(),this.open=!1,this.contacts=[],this._typeFilter="all",this._search="",this._onTypeChange=e=>{this._typeFilter=e.target.value},this._onSearchInput=e=>{this._search=e.target.value},this._close=()=>{this.dispatchEvent(new CustomEvent("target-picker-closed",{bubbles:!0,composed:!0}))},Ap(this,{isOpen:()=>this.open,onEscape:()=>this._close()})}willUpdate(e){e.has("open")&&this.open&&!e.get("open")&&(this._typeFilter="all",this._search="")}render(){if(!this.open)return Zd(ol||(ol=Rl``));const e=this._search.trim().toLowerCase(),t=this.contacts.filter(e=>{switch(this._typeFilter){case"all":default:return!0;case"client":return 1===e.type;case"repeater":return 2===e.type;case"room_server":return 3===e.type;case"sensor":return 4===e.type}}).filter(t=>{if(!e)return!0;const i=(t.adv_name||"").toLowerCase(),o=(t.pubkey_prefix||"").toLowerCase();return i.includes(e)||o.startsWith(e)}).sort((e,t)=>(e.adv_name||"").localeCompare(t.adv_name||""));return Zd(rl||(rl=Rl`
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
    `),this._close,Zl("Choose trace target"),e=>e.stopPropagation(),Zl("Choose Trace Target"),Zl("Close"),this._close,Zl("Close"),Zl("Type"),this._typeFilter,this._onTypeChange,Zl("All"),Zl("Companion / Client"),Zl("Repeater"),Zl("Room Server"),Zl("Sensor"),Zl("Search"),Zl("Name or pubkey prefix…"),this._search,this._onSearchInput,0===t.length?Zd(sl||(sl=Rl`<div class="empty">${0}</div>`),Zl("No matching contacts")):t.map(e=>Zd(al||(al=Rl`
                    <div
                      class="result-row"
                      @click=${0}
                      title=${0}
                    >
                      <span class="result-icon">${0}</span>
                      <span class="result-name">${0}</span>
                      <span class="result-hex">${0}</span>
                    </div>
                  `),()=>this._select(e),Zl("Trace to {pubkey_prefix}",{pubkey_prefix:e.adv_name||e.pubkey_prefix}),this._iconFor(e.type),e.adv_name||e.pubkey_prefix,(e.pubkey_prefix||"").substring(0,2).toUpperCase())))}_iconFor(e){switch(e){case 2:return Zd(nl||(nl=Rl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V10h4.27c.15-.86.45-1.66.87-2.36l-1.82-1.06a.5.5 0 01-.18-.68l.5-.87a.5.5 0 01.68-.18l1.81 1.05C19.66 4.66 20.78 4 22 4v2c-.8 0-1.54.32-2.08.84l1.5 2.6a.5.5 0 01-.18.68l-.87.5a.5.5 0 01-.68-.18L18.2 7.92c-.14.65-.2 1.33-.2 2.08 0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6z"/></svg>`));case 3:return Zd(ll||(ll=Rl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4 6h16v4H4V6zm0 8h16v4H4v-4zm2-6.5A.5.5 0 116 7a.5.5 0 010 .5zm0 8A.5.5 0 116 15a.5.5 0 010 .5z"/></svg>`));case 4:return Zd(dl||(dl=Rl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2a4 4 0 00-4 4v7.55A5.5 5.5 0 1015.5 20a5.47 5.47 0 00.5-2.45V6a4 4 0 00-4-4zm0 2a2 2 0 012 2v8.1a3.5 3.5 0 11-4 0V6a2 2 0 012-2z"/></svg>`));default:return Zd(cl||(cl=Rl`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`))}}_select(e){this.dispatchEvent(new CustomEvent("target-selected",{detail:e,bubbles:!0,composed:!0}))}};tu.styles=[Fc,md(pl||(pl=Rl`
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
    `))],Ol([$c({type:Boolean})],tu.prototype,"open",void 0),Ol([$c({type:Array})],tu.prototype,"contacts",void 0),Ol([kc()],tu.prototype,"_typeFilter",void 0),Ol([kc()],tu.prototype,"_search",void 0),tu=Ol([_c("chattx-target-picker")],tu);let iu=class extends yc{constructor(){super(),this.narrow=!1,this._updateAvailable=!1,this._onReconnect=()=>{this._checkForUpdate(),this._refreshAfterAbsence()},this._onVisibilityChange=()=>{"visible"===document.visibilityState&&this._refreshAfterAbsence()},this._config=null,this._activeTab="chat",this._devices=[],this._contacts=[],this._conversationActivity={},this._releaseKeyboardViewport=null,this._channels=[],this._selectedEntryId=null,this._loading=!0,this._loadingStarted=!1,this._error=null,this._unsubscribeList=[],this._unread=new rp,this._unsubscribeTabBadge=null,this._pendingChatTarget=null,this._activeChatEntityId=null,this._deviceDropdownOpen=!1,this._onDocClickForDropdown=e=>{var t;const i=e.composedPath?e.composedPath():[],o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".device-info-wrap");o&&i.includes(o)||this._closeDeviceDropdown()},this._onDocKeyForDropdown=e=>{"Escape"===e.key&&this._closeDeviceDropdown()},this._traceDialogOpen=!1,this._traceDialogContactName="",this._traceDialogResult=null,this._traceDialogError="",this._traceDialogPubkeyPrefix="",this._traceDialogEntryId=void 0,this._traceDialogTargetContact=null,this._targetPickerOpen=!1,this._pendingTraceEntryId=void 0,this._onTraceRequested=async e=>{if(!this.hass)return;const{pathMode:t,path:i}=e.detail;try{const e=await async function(e,t,i,o="discovery",r){const s={type:"meshcore_chattx/trace",pubkey_prefix:t};return i&&(s.entry_id=i),"select"!==o&&"explicit"!==o||!r||(s.path=r),e.callWS(s)}(this.hass,this._traceDialogPubkeyPrefix,this._traceDialogEntryId,t,i);this._traceDialogResult=e}catch(e){this._traceDialogError=(null==e?void 0:e.message)||(null==e?void 0:e.code)||Zl("Unknown error")}},this._onCompanionTraceRequested=e=>{var t,i,o;this._pendingTraceEntryId=null!==(t=null!==(i=null===(o=e.detail)||void 0===o?void 0:o.entryId)&&void 0!==i?i:this._selectedEntryId)&&void 0!==t?t:void 0,this._targetPickerOpen=!0},this._onTargetPicked=e=>{const t=e.detail;this._targetPickerOpen=!1,t&&(this._traceDialogPubkeyPrefix=t.pubkey_prefix,this._traceDialogEntryId=this._pendingTraceEntryId,this._traceDialogContactName=t.adv_name||t.pubkey_prefix,this._traceDialogTargetContact=t,this._traceDialogResult=null,this._traceDialogError="",this._traceDialogOpen=!0)},this._unread.onMarkReadRequested(e=>{this._handleMarkReadRequested(e)})}connectedCallback(){var e,t,i;super.connectedCallback(),this._loadingStarted&&this._refreshAfterAbsence(),this._loadData(),this._setupSubscriptions(),document.addEventListener("visibilitychange",this._onVisibilityChange),null!==(e=this._unsubscribeTabBadge)&&void 0!==e||(this._unsubscribeTabBadge=this._unread.subscribe(()=>this.requestUpdate())),this._releaseKeyboardViewport=function(e){const t=window.visualViewport;if(!t)return()=>{};let i=t.width,o=t.height,r=!1;const s=()=>{if(r){r=!1;for(const t of["position","top","left","width","height"])e.style.removeProperty(t);window.scrollTo(0,0)}},a=()=>{t.scale>1.01?s():(Math.abs(t.width-i)>1&&(i=t.width,o=t.height),o=Math.max(o,t.height),o-t.height<120?s():(r=!0,e.style.position="fixed",e.style.top=`${t.offsetTop}px`,e.style.left="0",e.style.width="100%",e.style.height=`${t.height}px`))};return t.addEventListener("resize",a),t.addEventListener("scroll",a),a(),()=>{t.removeEventListener("resize",a),t.removeEventListener("scroll",a),s()}}(this),null===(t=this.hass)||void 0===t||null===(t=t.connection)||void 0===t||null===(i=t.addEventListener)||void 0===i||i.call(t,"ready",this._onReconnect),this._checkForUpdate()}async _checkForUpdate(){if(!this.hass)return;let e=od(this.panel);try{var t;const i=await this.hass.callWS({type:"get_panels"});e=null!==(t=od(null==i?void 0:i["meshcore-chattx"]))&&void 0!==t?t:e}catch(e){}this._updateAvailable=function(e,t){const i=id(e),o=id(t);return null!==i&&null!==o&&i!==o}(import.meta.url,e)}_renderUpdateBanner(){return this._updateAvailable?Zd(hl||(hl=Rl`<div class="update-banner" role="status">
      <span>${0}</span>
      <button @click=${0}>${0}</button>
    </div>`),Zl("A new version of MeshCore Chattx is installed. Reload the page to use it."),()=>window.location.reload(),Zl("Reload page")):""}disconnectedCallback(){var e,t,i,o;super.disconnectedCallback(),this._teardownSubscriptions(),document.removeEventListener("visibilitychange",this._onVisibilityChange),null===(e=this._unsubscribeTabBadge)||void 0===e||e.call(this),this._unsubscribeTabBadge=null,this._closeDeviceDropdown(),null===(t=this.hass)||void 0===t||null===(t=t.connection)||void 0===t||null===(i=t.removeEventListener)||void 0===i||i.call(t,"ready",this._onReconnect),null===(o=this._releaseKeyboardViewport)||void 0===o||o.call(this),this._releaseKeyboardViewport=null}_toggleDeviceDropdown(){this._deviceDropdownOpen?this._closeDeviceDropdown():this._openDeviceDropdown()}_openDeviceDropdown(){this._deviceDropdownOpen||(this._deviceDropdownOpen=!0,setTimeout(()=>{document.addEventListener("click",this._onDocClickForDropdown,!0),document.addEventListener("keydown",this._onDocKeyForDropdown,!0)},0))}_closeDeviceDropdown(){this._deviceDropdownOpen&&(this._deviceDropdownOpen=!1,document.removeEventListener("click",this._onDocClickForDropdown,!0),document.removeEventListener("keydown",this._onDocKeyForDropdown,!0))}_selectDevice(e){e!==this._selectedEntryId&&(this._selectedEntryId=e,this._pendingChatTarget=null,Promise.all([this._loadDeviceData(),this._loadUnreadCounts()])),this._closeDeviceDropdown()}_setupSubscriptions(){var e;this._teardownSubscriptions(),null!==(e=this.hass)&&void 0!==e&&null!==(e=e.connection)&&void 0!==e&&e.subscribeEvents&&(this.hass.connection.subscribeEvents(e=>{e.data.entry_id===this._selectedEntryId&&this._loadDeviceData()},"meshcore_channels_updated").then(e=>{this._unsubscribeList.push(e)}),this.hass.connection.subscribeEvents(e=>{e.data.entry_id===this._selectedEntryId&&this._loadDeviceData()},"meshcore_channel_removed").then(e=>{this._unsubscribeList.push(e)}),this.hass.connection.subscribeEvents(e=>{var t;const i=null!==(t=e.data)&&void 0!==t?t:{},o=i.entity_id;o&&("direct"===i.message_type&&!i.outgoing&&Wc(i.pubkey_prefix)||(this._conversationActivity=Ic(this._conversationActivity,{[o]:(new Date).toISOString()})))},"meshcore_message").then(e=>{this._unsubscribeList.push(e)}),this.hass.connection.subscribeEvents(e=>{var t;this._activeChatEntityId&&(null===(t=e.data)||void 0===t?void 0:t.entity_id)===this._activeChatEntityId||this._loadUnreadCounts()},"meshcore_unread_updated").then(e=>{this._unsubscribeList.push(e)}),this.hass.connection.subscribeEvents(e=>{var t;ld(null===(t=e.data)||void 0===t?void 0:t.text),this.requestUpdate()},"meshcore_chattx_heard_reply_updated").then(e=>{this._unsubscribeList.push(e)}).catch(()=>{}))}_teardownSubscriptions(){this._unsubscribeList.length>0&&(this._unsubscribeList.forEach(e=>{try{e()}catch(e){}}),this._unsubscribeList=[])}updated(e){e.has("hass")&&this.hass&&!this._config&&!this._loadingStarted&&this._loadData()}get _selectedDevice(){return this._devices.find(e=>e.entry_id===this._selectedEntryId)}willUpdate(){var e;Xl(null===(e=this.hass)||void 0===e?void 0:e.language)}render(){var e,t,i;if(this._loading)return Zd(ul||(ul=Rl`
        <div class="panel">
          <div class="center-message">
            <div class="spinner"></div>
          </div>
        </div>
      `));if(this._error&&!this._config){const e=this._error===Zl("No MeshCore devices found");return Zd(gl||(gl=Rl`
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
      `),Zl(this._error),e?Zd(ml||(ml=Rl`${0} <a href="/config/repairs">${0}</a>
                         ${0}
                         <a href="/config/integrations">${0}</a>.`),Zl("Open"),Zl("Settings → System → Repairs"),Zl("for setup guidance, or add the MeshCore integration via"),Zl("Settings → Devices & Services")):Zl("Check that the MeshCore integration is loaded and connected."))}const o=this._selectedDevice;return Zd(vl||(vl=Rl`
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
    `),this._renderUpdateBanner(),this.narrow||"always_hidden"===(null===(e=this.hass)||void 0===e?void 0:e.dockedSidebar)?Zd(fl||(fl=Rl`<button class="menu-icon" @click=${0} aria-label=${0}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                </button>`),this._toggleMenu,Zl("Toggle sidebar")):Zd(yl||(yl=Rl``)),Zl("MeshCore Chattx"),Zl("MC Chattx"),o&&null!==this._getNodeStatus(o)?Zd(bl||(bl=Rl`
                  <span class="connection-status ${0}">
                    <span class="status-dot ${0}"></span>
                    ${0}
                  </span>`),"online"===this._getNodeStatus(o)?"online":"offline","online"===this._getNodeStatus(o)?"online":"offline","online"===this._getNodeStatus(o)?Zl("Connected"):Zl("Disconnected")):Zd(_l||(_l=Rl``)),o&&null!==this._getBatteryLevel(o)?Zd(xl||(xl=Rl`
                  <span class="battery-indicator">
                    <span class="battery-icon">
                      <span class="battery-fill ${0}"
                            style="width: ${0}%"></span>
                    </span>
                    <span class="battery-pct">${0}%</span>
                  </span>`),this._getBatteryLevel(o)>50?"high":this._getBatteryLevel(o)>20?"medium":"low",this._getBatteryLevel(o),this._getBatteryLevel(o)):Zd(wl||(wl=Rl``)),this._devices.length>1?Zd($l||($l=Rl`
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
                `),this._deviceDropdownOpen?"true":"false",this._toggleDeviceDropdown,(null==o?void 0:o.name)||"",(null==o||null===(t=o.pubkey_prefix)||void 0===t?void 0:t.substring(0,6))||"",this._deviceDropdownOpen?Zd(kl||(kl=Rl`
                          <ul class="device-switcher-menu" role="listbox">
                            ${0}
                          </ul>
                        `),this._devices.map(e=>{var t;return Zd(Cl||(Cl=Rl`
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
                              `),e.entry_id===this._selectedEntryId?"true":"false",e.entry_id===this._selectedEntryId?"active":"",()=>this._selectDevice(e.entry_id),e.name,e.connected?"":" — offline",(null===(t=e.pubkey_prefix)||void 0===t?void 0:t.substring(0,6))||"?")})):""):Zd(Fl||(Fl=Rl`
                  <div class="device-info-wrap">
                    <span class="device-name">${0}</span>
                    <span class="device-prefix">(${0})</span>
                  </div>
                `),(null==o?void 0:o.name)||"",(null==o||null===(i=o.pubkey_prefix)||void 0===i?void 0:i.substring(0,6))||""),this._error?Zd(Sl||(Sl=Rl`<div class="error-banner">${0}</div>`),this._error):Zd(Al||(Al=Rl``)),"chat"===this._activeTab?"active":"",()=>this._activeTab="chat",Zl("Chat"),this._renderChatTabBadge(),"devices"===this._activeTab?"active":"",()=>this._activeTab="devices",Zl("Devices"),"nodes"===this._activeTab?"active":"",()=>this._activeTab="nodes",Zl("Nodes"),"settings"===this._activeTab?"active":"",()=>this._activeTab="settings",Zl("Settings"),this._renderActivePage(),this._traceDialogOpen,this._traceDialogContactName,this._traceDialogResult,this._traceDialogError,this._contacts.filter(e=>2===e.type||3===e.type||4===e.type),this._traceDialogTargetContact,this._onTraceRequested,()=>{this._traceDialogOpen=!1},this._targetPickerOpen,this._contacts,this._onTargetPicked,()=>{this._targetPickerOpen=!1})}_unreadTotal(){var e,t;const i=Object.values(this._unread.counts).reduce((e,t)=>e+(t>0?t:0),0),o=null!==(e=null===(t=this._config)||void 0===t?void 0:t.node_prefix)&&void 0!==e?e:null,r=this._channels.filter(e=>e.exclude_from_total).reduce((e,t)=>e+this._unread.badgeCount(String(t.channel_idx),o),0);return Math.max(0,i-r)}_renderChatTabBadge(){const e=this._unreadTotal();return e<=0?"":Zd(Dl||(Dl=Rl`<span class="tab-badge" aria-label=${0}>${0}</span>`),ed("{n} unread message","{n} unread messages",e),e>99?"99+":e)}_renderActivePage(){var e;switch(this._activeTab){case"chat":return Zd(El||(El=Rl`
          <chattx-chat-page
            .hass=${0}
            .config=${0}
            .conversations=${0}
            .activity=${0}
            .unread=${0}
            .selectedId=${0}
            .narrow=${0}
            @active-entity-changed=${0}
            @contacts-changed=${0}
            @channels-changed=${0}></chattx-chat-page>`),this.hass,this._config,function(e,t,i){const o=Rc(t);return e.map(e=>({conversation:e,time:Bc(o.get(zc(e,i)))})).sort((e,t)=>t.time-e.time).map(e=>e.conversation)}([...this._channels,...this._contacts.filter(e=>e.added_to_node)],this._conversationActivity,null===(e=this._config)||void 0===e?void 0:e.node_prefix),this._conversationActivity,this._unread,this._pendingChatTarget,this.narrow,this._onActiveEntityChanged,()=>this._loadDeviceData(),()=>this._loadDeviceData());case"devices":return Zd(Ml||(Ml=Rl`
          <chattx-devices-page
            .hass=${0}
            .config=${0}
            .selectedDevice=${0}
            .narrow=${0}></chattx-devices-page>`),this.hass,this._config,this._selectedDevice,this.narrow);case"nodes":return Zd(Bl||(Bl=Rl`
          <chattx-nodes-page
            .hass=${0}
            .config=${0}
            .contacts=${0}
            .channels=${0}
            .narrow=${0}
            @node-action=${0}
            @contacts-changed=${0}></chattx-nodes-page>`),this.hass,this._config,this._contacts,this._channels,this.narrow,this._handleNodeAction,()=>this._loadDeviceData());case"settings":return Zd(Il||(Il=Rl`
          <chattx-settings-page
            .hass=${0}
            .config=${0}
            .selectedDevice=${0}
            .narrow=${0}
            @companion-trace-requested=${0}
            @device-renamed=${0}></chattx-settings-page>`),this.hass,this._config,this._selectedDevice,this.narrow,this._onCompanionTraceRequested,this._onDeviceRenamed)}}_toggleMenu(){this.dispatchEvent(new Event("hass-toggle-menu",{bubbles:!0,composed:!0}))}_deviceEntitySuffix(e){return{prefix:(e.pubkey_prefix||e.pubkey||"").substring(0,6).toLowerCase(),name:(e.name||"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}}_getNodeStatus(e){if(!this.hass)return null;const{prefix:t,name:i}=this._deviceEntitySuffix(e),o=`sensor.meshcore_${t}_node_status_${i}`,r=this.hass.states[o];return r?r.state:null}_getBatteryLevel(e){if(!this.hass)return null;const{prefix:t,name:i}=this._deviceEntitySuffix(e),o=`sensor.meshcore_${t}_battery_percentage_${i}`,r=this.hass.states[o];if(!r||"unknown"===r.state||"unavailable"===r.state)return null;const s=parseFloat(r.state);return isNaN(s)?null:Math.round(s)}async _loadData(){if(this.hass&&!this._loadingStarted){this._loadingStarted=!0,this._loading=!0,this._error=null;try{var e;Xl(this.hass.language),await Promise.all([td(),dd(this.hass)]);const t=await Tc(this.hass);if(this._devices=t,0===t.length)return this._error=Zl("No MeshCore devices found"),void(this._loading=!1);const i=t.find(e=>e.connected);this._selectedEntryId=(i||t[0]).entry_id;const o=i||t[0];this._config={node_name:o.name,node_prefix:(null===(e=o.pubkey_prefix)||void 0===e?void 0:e.substring(0,6))||"",entry_id:o.entry_id,...Ec,...Mc},await this._loadDeviceData(),await this._loadUnreadCounts()}catch(e){const t=e instanceof Error?e.message:String(e);this._error=Zl("Failed to load: {message}",{message:t}),console.error("MeshCore panel load error:",e)}finally{this._loading=!1}}}async _loadDeviceData(){if(this.hass&&this._selectedEntryId)try{const[t,i]=await Promise.all([Nc(this.hass,this._selectedEntryId),Lc(this.hass,this._selectedEntryId)]);this._contacts=t,this._channels=i;const o=this._selectedDevice;var e;o&&this._config&&(this._config={...this._config,node_name:o.name,node_prefix:(null===(e=o.pubkey_prefix)||void 0===e?void 0:e.substring(0,6))||"",entry_id:o.entry_id})}catch(e){console.error("Failed to load device data:",e)}}_onActiveEntityChanged(e){var t;this._activeChatEntityId=(null===(t=e.detail)||void 0===t?void 0:t.entityId)||null}async _onDeviceRenamed(){if(this.hass)try{this._devices=await Tc(this.hass);const t=this._selectedDevice;var e;t&&this._config&&(this._config={...this._config,node_name:t.name,node_prefix:(null===(e=t.pubkey_prefix)||void 0===e?void 0:e.substring(0,6))||"",entry_id:t.entry_id})}catch(e){console.error("Failed to refresh devices after rename:",e)}}_refreshAfterAbsence(){this.hass&&!this._loading&&this._loadingStarted&&(this._loadUnreadCounts(),this._loadDeviceData())}async _loadUnreadCounts(){if(this.hass)try{const e=await async function(e,t){try{const i={type:"meshcore_chattx/get_unread_counts"};t&&(i.entry_id=t);const o=await e.callWS(i);return{unread:o.unread||{},last_read:o.last_read||{}}}catch(e){return{unread:{},last_read:{}}}}(this.hass,this._selectedEntryId||void 0);this._unread.ingestBackendData(e,this._activeChatEntityId),this._conversationActivity=Ic(this._conversationActivity,await async function(e){try{return(await e.callWS({type:"meshcore_chattx/get_conversation_activity"})).activity}catch(e){return{}}}(this.hass))}catch(e){}}_handleMarkReadRequested(e){e&&this.hass&&(async function(e,t,i){try{const o={type:"meshcore_chattx/mark_conversation_read",entity_id:t};return i&&(o.entry_id=i),await e.callWS(o)}catch(e){return{success:!1}}}(this.hass,e,this._selectedEntryId||void 0).catch(()=>{}),this._unread.clearEntity(e),this._loadUnreadCounts())}async _handleNodeAction(e){const{action:t,node:i}=e.detail;if(!this.hass||!i)return;const o=i.public_key||"",r=i.pubkey_prefix||"",s=this._selectedEntryId||void 0;switch(t){case"message":r&&(this._pendingChatTarget=r,this._activeTab="chat");break;case"remove-contact":if(o)try{await tp(this.hass,o,s),await this._loadDeviceData(),await this._refreshNodesPageAfterMutation(o)}finally{this._clearNodesPagePending()}break;case"add-contact":if(o)try{await ep(this.hass,o,i.adv_name||void 0,s),await this._loadDeviceData(),await this._refreshNodesPageAfterMutation(o)}finally{this._clearNodesPagePending()}break;case"trace":r&&(this._traceDialogPubkeyPrefix=r,this._traceDialogEntryId=s,this._traceDialogContactName=i.adv_name||r,this._traceDialogTargetContact="adv_name"in i?i:null,this._traceDialogResult=null,this._traceDialogError="",this._traceDialogOpen=!0);break;case"delete":case"remove":o&&(await tp(this.hass,o,s),await this._loadDeviceData());break;default:console.warn("Unhandled node action:",t)}}async _refreshNodesPageAfterMutation(e){var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("chattx-nodes-page");if(i&&"function"==typeof i.refreshAfterMutation)try{await i.refreshAfterMutation(e)}catch(e){console.error("Failed to refresh nodes-page after mutation:",e)}}_clearNodesPagePending(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("chattx-nodes-page");t&&"function"==typeof t.clearPendingAction&&t.clearPendingAction()}};iu.styles=[Fc,md(zl||(zl=Rl`
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
    `))],Ol([$c({type:Object})],iu.prototype,"hass",void 0),Ol([$c({type:Boolean,reflect:!0})],iu.prototype,"narrow",void 0),Ol([$c({type:Object})],iu.prototype,"panel",void 0),Ol([kc()],iu.prototype,"_updateAvailable",void 0),Ol([kc()],iu.prototype,"_config",void 0),Ol([kc()],iu.prototype,"_activeTab",void 0),Ol([kc()],iu.prototype,"_devices",void 0),Ol([kc()],iu.prototype,"_contacts",void 0),Ol([kc()],iu.prototype,"_conversationActivity",void 0),Ol([kc()],iu.prototype,"_channels",void 0),Ol([kc()],iu.prototype,"_selectedEntryId",void 0),Ol([kc()],iu.prototype,"_loading",void 0),Ol([kc()],iu.prototype,"_loadingStarted",void 0),Ol([kc()],iu.prototype,"_error",void 0),Ol([kc()],iu.prototype,"_unsubscribeList",void 0),Ol([kc()],iu.prototype,"_pendingChatTarget",void 0),Ol([kc()],iu.prototype,"_deviceDropdownOpen",void 0),Ol([kc()],iu.prototype,"_traceDialogOpen",void 0),Ol([kc()],iu.prototype,"_traceDialogContactName",void 0),Ol([kc()],iu.prototype,"_traceDialogResult",void 0),Ol([kc()],iu.prototype,"_traceDialogError",void 0),Ol([kc()],iu.prototype,"_traceDialogPubkeyPrefix",void 0),Ol([kc()],iu.prototype,"_traceDialogEntryId",void 0),Ol([kc()],iu.prototype,"_traceDialogTargetContact",void 0),Ol([kc()],iu.prototype,"_targetPickerOpen",void 0),Ol([kc()],iu.prototype,"_pendingTraceEntryId",void 0),iu=Ol([_c("meshcore-chattx-panel")],iu);export{iu as MeshCorePanel};
