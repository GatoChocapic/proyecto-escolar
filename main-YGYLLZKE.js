import{$ as X,$a as Qe,$b as Lu,A as be,Aa as Vo,Ab as Dc,Ac as br,B as dr,Ba as yu,Bb as ue,Bc as Hu,C as $n,Ca as Li,Cb as he,Cc as Uu,D as Ri,Da as Cu,Db as F,Dc as _e,E as oa,Ea as ca,Eb as d,Ec as mi,F as He,Fa as da,Fb as c,Fc as $u,G as fc,Ga as ur,Gb as P,Gc as Gu,H as Ti,Ha as Cc,Hb as Pe,Hc as j,I as li,Ia as zo,Ib as Ne,Ic as Nt,J as gc,Ja as Ni,Jb as It,Jc as Wu,K as _c,Ka as ma,Kb as Vi,Kc as Qo,L as hu,La as wu,Lb as zi,Lc as Yu,M as bc,Ma as xu,Mb as rt,N as Bo,Na as Du,Nb as pe,O as it,Oa as ku,Ob as Ze,P as Ge,Pa as Eu,Pb as Lt,Q as ge,Qa as Su,Qb as We,R as pu,Ra as Mu,Rb as D,S as Ke,Sa as wt,Sb as fr,T as Q,Ta as jo,Tb as C,U as Oi,Ua as Au,Ub as fe,V as Gn,Va as h,Vb as $,W as ht,Wa as ua,Wb as Je,X as y,Xa as Iu,Xb as ye,Y as k,Ya as Ho,Yb as V,Z as fu,Za as hr,Zb as z,_ as b,_a as Me,_b as Pu,a as v,aa as l,ab as mt,ac as kc,b as me,ba as sa,bb as De,bc as ft,ca as gu,cb as le,cc as ot,d as Se,da as at,db as Bi,dc as R,e as du,ea as Ct,eb as Xe,ec as Be,f as Wt,fa as J,fb as Uo,fc as m,g as mu,ga as ee,gb as Ru,gc as S,h as T,ha as pt,hb as $o,hc as ne,i as nt,ia as la,ib as x,ic as Ue,j as mc,ja as q,jb as E,jc as Nu,k as uc,ka as H,kb as w,kc as Yo,l as hc,la as ci,lb as Go,lc as qo,m as Mt,ma as _u,mb as te,mc as Ko,n as dt,na as N,nb as Ae,nc as ce,o as U,oa as W,ob as wc,oc as Ec,p as si,pa as Fi,pb as di,pc as Ee,q as ra,qa as mr,qb as Tu,qc as Bu,r as uu,ra as bu,rb as Ou,rc as Ie,s as ae,sa as _,sb as Wo,sc as gr,t as Un,ta as vu,tb as pr,tc as Vu,u as Cn,ua as vc,ub as xc,uc as _r,v as pc,va as Pi,vb as Fu,vc as Ce,w as Lo,wa as de,wb as xn,wc as gt,x as wn,xa as ve,xb as Y,xc as zu,y as No,ya as yc,yb as A,yc as Yt,z as At,za as L,zb as I,zc as ju}from"./chunk-E3W4AOHT.js";var qu=null;function Bt(){return qu}function Sc(n){qu??=n}var vr=class{},Wn=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:()=>l(Ku),providedIn:"platform"})}return n})(),Mc=new b(""),Ku=(()=>{class n extends Wn{_location;_history;_doc=l(H);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Bt().getBaseHref(this._doc)}onPopState(e){let t=Bt().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=Bt().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,a){this._history.pushState(e,t,a)}replaceState(e,t,a){this._history.replaceState(e,t,a)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Xo(n,i){return n?i?n.endsWith("/")?i.startsWith("/")?n+i.slice(1):n+i:i.startsWith("/")?n+i:`${n}/${i}`:n:i}function Qu(n){let i=n.search(/#|\?|$/);return n[i-1]==="/"?n.slice(0,i-1)+n.slice(i):n}function sn(n){return n&&n[0]!=="?"?`?${n}`:n}var ln=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:()=>l(Jo),providedIn:"root"})}return n})(),Zo=new b(""),Jo=(()=>{class n extends ln{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??l(H).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Xo(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+sn(this._platformLocation.search),a=this._platformLocation.hash;return a&&e?`${t}${a}`:t}pushState(e,t,a,r){let o=this.prepareExternalUrl(a+sn(r));this._platformLocation.pushState(e,t,o)}replaceState(e,t,a,r){let o=this.prepareExternalUrl(a+sn(r));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(X(Wn),X(Zo,8))};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Dn=(()=>{class n{_subject=new T;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=db(Qu(Xu(t))),this._locationStrategy.onPopState(a=>{this._subject.next({url:this.path(!0),pop:!0,state:a.state,type:a.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+sn(t))}normalize(e){return n.stripTrailingSlash(cb(this._basePath,Xu(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",a=null){this._locationStrategy.pushState(a,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+sn(t)),a)}replaceState(e,t="",a=null){this._locationStrategy.replaceState(a,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+sn(t)),a)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(a=>a(e,t))}subscribe(e,t,a){return this._subject.subscribe({next:e,error:t??void 0,complete:a??void 0})}static normalizeQueryParams=sn;static joinWithSlash=Xo;static stripTrailingSlash=Qu;static \u0275fac=function(t){return new(t||n)(X(ln))};static \u0275prov=y({token:n,factory:()=>lb(),providedIn:"root"})}return n})();function lb(){return new Dn(X(ln))}function cb(n,i){if(!n||!i.startsWith(n))return i;let e=i.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Xu(n){return n.replace(/\/index.html$/,"")}function db(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var Fc=(()=>{class n extends ln{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,t!=null&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash??"#";return t.length>0?t.substring(1):t}prepareExternalUrl(e){let t=Xo(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,a,r){let o=this.prepareExternalUrl(a+sn(r))||this._platformLocation.pathname;this._platformLocation.pushState(e,t,o)}replaceState(e,t,a,r){let o=this.prepareExternalUrl(a+sn(r))||this._platformLocation.pathname;this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||n)(X(Wn),X(Zo,8))};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})();var Pc=(function(n){return n[n.Decimal=0]="Decimal",n[n.Percent=1]="Percent",n[n.Currency=2]="Currency",n[n.Scientific=3]="Scientific",n})(Pc||{});var _t=(function(n){return n[n.Format=0]="Format",n[n.Standalone=1]="Standalone",n})(_t||{}),Re=(function(n){return n[n.Narrow=0]="Narrow",n[n.Abbreviated=1]="Abbreviated",n[n.Wide=2]="Wide",n[n.Short=3]="Short",n})(Re||{}),Rt=(function(n){return n[n.Short=0]="Short",n[n.Medium=1]="Medium",n[n.Long=2]="Long",n[n.Full=3]="Full",n})(Rt||{}),Tt={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function eh(n){return Lt(n)[We.LocaleId]}function th(n,i,e){let t=Lt(n),a=[t[We.DayPeriodsFormat],t[We.DayPeriodsStandalone]],r=qt(a,i);return qt(r,e)}function nh(n,i,e){let t=Lt(n),a=[t[We.DaysFormat],t[We.DaysStandalone]],r=qt(a,i);return qt(r,e)}function ih(n,i,e){let t=Lt(n),a=[t[We.MonthsFormat],t[We.MonthsStandalone]],r=qt(a,i);return qt(r,e)}function ah(n,i){let t=Lt(n)[We.Eras];return qt(t,i)}function yr(n,i){let e=Lt(n);return qt(e[We.DateFormat],i)}function Cr(n,i){let e=Lt(n);return qt(e[We.TimeFormat],i)}function wr(n,i){let t=Lt(n)[We.DateTimeFormat];return qt(t,i)}function kn(n,i){let e=Lt(n),t=e[We.NumberSymbols][i];if(typeof t>"u"){if(i===Tt.CurrencyDecimal)return e[We.NumberSymbols][Tt.Decimal];if(i===Tt.CurrencyGroup)return e[We.NumberSymbols][Tt.Group]}return t}function rh(n,i){return Lt(n)[We.NumberFormats][i]}function oh(n){if(!n[We.ExtraData])throw new Q(2303,!1)}function sh(n){let i=Lt(n);return oh(i),(i[We.ExtraData][2]||[]).map(t=>typeof t=="string"?Ac(t):[Ac(t[0]),Ac(t[1])])}function lh(n,i,e){let t=Lt(n);oh(t);let a=[t[We.ExtraData][0],t[We.ExtraData][1]],r=qt(a,i)||[];return qt(r,e)||[]}function qt(n,i){for(let e=i;e>-1;e--)if(typeof n[e]<"u")return n[e];throw new Q(2304,!1)}function Ac(n){let[i,e]=n.split(":");return{hours:+i,minutes:+e}}var mb=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,es={},ub=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function ch(n,i,e,t){let a=Cb(n);i=Yn(e,i)||i;let o=[],s;for(;i;)if(s=ub.exec(i),s){o=o.concat(s.slice(1));let f=o.pop();if(!f)break;i=f}else{o.push(i);break}let u=a.getTimezoneOffset();t&&(u=mh(t,u),a=yb(a,t));let p="";return o.forEach(f=>{let g=bb(f);p+=g?g(a,e,u):f==="''"?"'":f.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),p}function rs(n,i,e){let t=new Date(0);return t.setFullYear(n,i,e),t.setHours(0,0,0),t}function Yn(n,i){let e=eh(n);if(es[e]??={},es[e][i])return es[e][i];let t="";switch(i){case"shortDate":t=yr(n,Rt.Short);break;case"mediumDate":t=yr(n,Rt.Medium);break;case"longDate":t=yr(n,Rt.Long);break;case"fullDate":t=yr(n,Rt.Full);break;case"shortTime":t=Cr(n,Rt.Short);break;case"mediumTime":t=Cr(n,Rt.Medium);break;case"longTime":t=Cr(n,Rt.Long);break;case"fullTime":t=Cr(n,Rt.Full);break;case"short":let a=Yn(n,"shortTime"),r=Yn(n,"shortDate");t=ts(wr(n,Rt.Short),[a,r]);break;case"medium":let o=Yn(n,"mediumTime"),s=Yn(n,"mediumDate");t=ts(wr(n,Rt.Medium),[o,s]);break;case"long":let u=Yn(n,"longTime"),p=Yn(n,"longDate");t=ts(wr(n,Rt.Long),[u,p]);break;case"full":let f=Yn(n,"fullTime"),g=Yn(n,"fullDate");t=ts(wr(n,Rt.Full),[f,g]);break}return t&&(es[e][i]=t),t}function ts(n,i){return i&&(n=n.replace(/\{([^}]+)}/g,function(e,t){return i!=null&&t in i?i[t]:e})),n}function cn(n,i,e="-",t,a){let r="";(n<0||a&&n<=0)&&(a?n=-n+1:(n=-n,r=e));let o=String(n);for(;o.length<i;)o="0"+o;return t&&(o=o.slice(o.length-i)),r+o}function hb(n,i){return cn(n,3).substring(0,i)}function Ye(n,i,e=0,t=!1,a=!1){return function(r,o){let s=pb(n,r);if((e>0||s>-e)&&(s+=e),n===3)s===0&&e===-12&&(s=12);else if(n===6)return hb(s,i);let u=kn(o,Tt.MinusSign);return cn(s,i,u,t,a)}}function pb(n,i){switch(n){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new Q(2301,!1)}}function Fe(n,i,e=_t.Format,t=!1){return function(a,r){return fb(a,r,n,i,e,t)}}function fb(n,i,e,t,a,r){switch(e){case 2:return ih(i,a,t)[n.getMonth()];case 1:return nh(i,a,t)[n.getDay()];case 0:let o=n.getHours(),s=n.getMinutes();if(r){let p=sh(i),f=lh(i,a,t),g=p.findIndex(M=>{if(Array.isArray(M)){let[B,Z]=M,se=o>=B.hours&&s>=B.minutes,G=o<Z.hours||o===Z.hours&&s<Z.minutes;if(B.hours<Z.hours){if(se&&G)return!0}else if(se||G)return!0}else if(M.hours===o&&M.minutes===s)return!0;return!1});if(g!==-1)return f[g]}return th(i,a,t)[o<12?0:1];case 3:return ah(i,t)[n.getFullYear()<=0?0:1];default:let u=e;throw new Q(2302,!1)}}function ns(n){return function(i,e,t){let a=-1*t,r=kn(e,Tt.MinusSign),o=a>0?Math.floor(a/60):Math.ceil(a/60);switch(n){case 0:return(a>=0?"+":"")+cn(o,2,r)+cn(Math.abs(a%60),2,r);case 1:return"GMT"+(a>=0?"+":"")+cn(o,1,r);case 2:return"GMT"+(a>=0?"+":"")+cn(o,2,r)+":"+cn(Math.abs(a%60),2,r);case 3:return t===0?"Z":(a>=0?"+":"")+cn(o,2,r)+":"+cn(Math.abs(a%60),2,r);default:throw new Q(2310,!1)}}}var gb=0,as=4;function _b(n){let i=rs(n,gb,1).getDay();return rs(n,0,1+(i<=as?as:as+7)-i)}function dh(n){let i=n.getDay(),e=i===0?-3:as-i;return rs(n.getFullYear(),n.getMonth(),n.getDate()+e)}function Ic(n,i=!1){return function(e,t){let a;if(i){let r=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,o=e.getDate();a=1+Math.floor((o+r)/7)}else{let r=dh(e),o=_b(r.getFullYear()),s=r.getTime()-o.getTime();a=1+Math.round(s/6048e5)}return cn(a,n,kn(t,Tt.MinusSign))}}function is(n,i=!1){return function(e,t){let r=dh(e).getFullYear();return cn(r,n,kn(t,Tt.MinusSign),i)}}var Rc={};function bb(n){if(Rc[n])return Rc[n];let i;switch(n){case"G":case"GG":case"GGG":i=Fe(3,Re.Abbreviated);break;case"GGGG":i=Fe(3,Re.Wide);break;case"GGGGG":i=Fe(3,Re.Narrow);break;case"y":i=Ye(0,1,0,!1,!0);break;case"yy":i=Ye(0,2,0,!0,!0);break;case"yyy":i=Ye(0,3,0,!1,!0);break;case"yyyy":i=Ye(0,4,0,!1,!0);break;case"Y":i=is(1);break;case"YY":i=is(2,!0);break;case"YYY":i=is(3);break;case"YYYY":i=is(4);break;case"M":case"L":i=Ye(1,1,1);break;case"MM":case"LL":i=Ye(1,2,1);break;case"MMM":i=Fe(2,Re.Abbreviated);break;case"MMMM":i=Fe(2,Re.Wide);break;case"MMMMM":i=Fe(2,Re.Narrow);break;case"LLL":i=Fe(2,Re.Abbreviated,_t.Standalone);break;case"LLLL":i=Fe(2,Re.Wide,_t.Standalone);break;case"LLLLL":i=Fe(2,Re.Narrow,_t.Standalone);break;case"w":i=Ic(1);break;case"ww":i=Ic(2);break;case"W":i=Ic(1,!0);break;case"d":i=Ye(2,1);break;case"dd":i=Ye(2,2);break;case"c":case"cc":i=Ye(7,1);break;case"ccc":i=Fe(1,Re.Abbreviated,_t.Standalone);break;case"cccc":i=Fe(1,Re.Wide,_t.Standalone);break;case"ccccc":i=Fe(1,Re.Narrow,_t.Standalone);break;case"cccccc":i=Fe(1,Re.Short,_t.Standalone);break;case"E":case"EE":case"EEE":i=Fe(1,Re.Abbreviated);break;case"EEEE":i=Fe(1,Re.Wide);break;case"EEEEE":i=Fe(1,Re.Narrow);break;case"EEEEEE":i=Fe(1,Re.Short);break;case"a":case"aa":case"aaa":i=Fe(0,Re.Abbreviated);break;case"aaaa":i=Fe(0,Re.Wide);break;case"aaaaa":i=Fe(0,Re.Narrow);break;case"b":case"bb":case"bbb":i=Fe(0,Re.Abbreviated,_t.Standalone,!0);break;case"bbbb":i=Fe(0,Re.Wide,_t.Standalone,!0);break;case"bbbbb":i=Fe(0,Re.Narrow,_t.Standalone,!0);break;case"B":case"BB":case"BBB":i=Fe(0,Re.Abbreviated,_t.Format,!0);break;case"BBBB":i=Fe(0,Re.Wide,_t.Format,!0);break;case"BBBBB":i=Fe(0,Re.Narrow,_t.Format,!0);break;case"h":i=Ye(3,1,-12);break;case"hh":i=Ye(3,2,-12);break;case"H":i=Ye(3,1);break;case"HH":i=Ye(3,2);break;case"m":i=Ye(4,1);break;case"mm":i=Ye(4,2);break;case"s":i=Ye(5,1);break;case"ss":i=Ye(5,2);break;case"S":i=Ye(6,1);break;case"SS":i=Ye(6,2);break;case"SSS":i=Ye(6,3);break;case"Z":case"ZZ":case"ZZZ":i=ns(0);break;case"ZZZZZ":i=ns(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=ns(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=ns(2);break;default:return null}return Rc[n]=i,i}function mh(n,i){n=n.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+n)/6e4;return isNaN(e)?i:e}function vb(n,i){return n=new Date(n.getTime()),n.setMinutes(n.getMinutes()+i),n}function yb(n,i,e){let a=n.getTimezoneOffset(),r=mh(i,a);return vb(n,-1*(r-a))}function Cb(n){if(Zu(n))return n;if(typeof n=="number"&&!isNaN(n))return new Date(n);if(typeof n=="string"){if(n=n.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(n)){let[a,r=1,o=1]=n.split("-").map(s=>+s);return rs(a,r-1,o)}let e=parseFloat(n);if(!isNaN(n-e))return new Date(e);let t;if(t=n.match(mb))return wb(t)}let i=new Date(n);if(!Zu(i))throw new Q(2311,!1);return i}function wb(n){let i=new Date(0),e=0,t=0,a=n[8]?i.setUTCFullYear:i.setFullYear,r=n[8]?i.setUTCHours:i.setHours;n[9]&&(e=Number(n[9]+n[10]),t=Number(n[9]+n[11])),a.call(i,Number(n[1]),Number(n[2])-1,Number(n[3]));let o=Number(n[4]||0)-e,s=Number(n[5]||0)-t,u=Number(n[6]||0),p=Math.floor(parseFloat("0."+(n[7]||0))*1e3);return r.call(i,o,s,u,p),i}function Zu(n){return n instanceof Date&&!isNaN(n.valueOf())}var xb=/^(\d+)?\.((\d+)(-(\d+))?)?$/,Ju=22,os=".",xr="0",Db=";",kb=",",Tc="#";function Eb(n,i,e,t,a,r,o=!1){let s="",u=!1;if(!isFinite(n))s=kn(e,Tt.Infinity);else{let p=Ab(n);o&&(p=Mb(p));let f=i.minInt,g=i.minFrac,M=i.maxFrac;if(r){let xe=r.match(xb);if(xe===null)throw new Q(2306,!1);let ct=xe[1],je=xe[3],oi=xe[5];ct!=null&&(f=Oc(ct)),je!=null&&(g=Oc(je)),oi!=null?M=Oc(oi):je!=null&&g>M&&(M=g)}Ib(p,g,M);let B=p.digits,Z=p.integerLen,se=p.exponent,G=[];for(u=B.every(xe=>!xe);Z<f;Z++)B.unshift(0);for(;Z<0;Z++)B.unshift(0);Z>0?G=B.splice(Z,B.length):(G=B,B=[0]);let ie=[];for(B.length>=i.lgSize&&ie.unshift(B.splice(-i.lgSize,B.length).join(""));B.length>i.gSize;)ie.unshift(B.splice(-i.gSize,B.length).join(""));B.length&&ie.unshift(B.join("")),s=ie.join(kn(e,t)),G.length&&(s+=kn(e,a)+G.join("")),se&&(s+=kn(e,Tt.Exponential)+"+"+se)}return n<0&&!u?s=i.negPre+s+i.negSuf:s=i.posPre+s+i.posSuf,s}function uh(n,i,e){let t=rh(i,Pc.Decimal),a=Sb(t,kn(i,Tt.MinusSign));return Eb(n,a,i,Tt.Group,Tt.Decimal,e)}function Sb(n,i="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},t=n.split(Db),a=t[0],r=t[1],o=a.indexOf(os)!==-1?a.split(os):[a.substring(0,a.lastIndexOf(xr)+1),a.substring(a.lastIndexOf(xr)+1)],s=o[0],u=o[1]||"";e.posPre=s.substring(0,s.indexOf(Tc));for(let f=0;f<u.length;f++){let g=u.charAt(f);g===xr?e.minFrac=e.maxFrac=f+1:g===Tc?e.maxFrac=f+1:e.posSuf+=g}let p=s.split(kb);if(e.gSize=p[1]?p[1].length:0,e.lgSize=p[2]||p[1]?(p[2]||p[1]).length:0,r){let f=a.length-e.posPre.length-e.posSuf.length,g=r.indexOf(Tc);e.negPre=r.substring(0,g).replace(/'/g,""),e.negSuf=r.slice(g+f).replace(/'/g,"")}else e.negPre=i+e.posPre,e.negSuf=e.posSuf;return e}function Mb(n){if(n.digits[0]===0)return n;let i=n.digits.length-n.integerLen;return n.exponent?n.exponent+=2:(i===0?n.digits.push(0,0):i===1&&n.digits.push(0),n.integerLen+=2),n}function Ab(n){let i=Math.abs(n)+"",e=0,t,a,r,o,s;for((a=i.indexOf(os))>-1&&(i=i.replace(os,"")),(r=i.search(/e/i))>0?(a<0&&(a=r),a+=+i.slice(r+1),i=i.substring(0,r)):a<0&&(a=i.length),r=0;i.charAt(r)===xr;r++);if(r===(s=i.length))t=[0],a=1;else{for(s--;i.charAt(s)===xr;)s--;for(a-=r,t=[],o=0;r<=s;r++,o++)t[o]=Number(i.charAt(r))}return a>Ju&&(t=t.splice(0,Ju-1),e=a-1,a=1),{digits:t,exponent:e,integerLen:a}}function Ib(n,i,e){if(i>e)throw new Q(2307,!1);let t=n.digits,a=t.length-n.integerLen,r=Math.min(Math.max(i,a),e),o=r+n.integerLen,s=t[o];if(o>0){t.splice(Math.max(n.integerLen,o));for(let g=o;g<t.length;g++)t[g]=0}else{a=Math.max(0,a),n.integerLen=1,t.length=Math.max(1,o=r+1),t[0]=0;for(let g=1;g<o;g++)t[g]=0}if(s>=5)if(o-1<0){for(let g=0;g>o;g--)t.unshift(0),n.integerLen++;t.unshift(1),n.integerLen++}else t[o-1]++;for(;a<Math.max(0,r);a++)t.push(0);let u=r!==0,p=i+n.integerLen,f=t.reduceRight(function(g,M,B,Z){return M=M+g,Z[B]=M<10?M:M-10,u&&(Z[B]===0&&B>=p?Z.pop():u=!1),M>=10?1:0},0);f&&(t.unshift(f),n.integerLen++)}function Oc(n){let i=parseInt(n);if(isNaN(i))throw new Q(2305,!1);return i}var Dr=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=l(q);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let a=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,a,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,a)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,a):!1,get:(e,t,a)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,a)}})}static \u0275fac=function(t){return new(t||n)(le(Xe))};static \u0275dir=w({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[de]})}return n})();function Lc(n,i){return new Q(2100,!1)}var Nc=(()=>{class n{transform(e){return e==null?null:(Rb(n,e),e.toUpperCase())}static \u0275fac=function(t){return new(t||n)};static \u0275pipe=Go({name:"uppercase",type:n,pure:!0})}return n})();function Rb(n,i){if(typeof i!="string")throw Lc(n,i)}var Tb="mediumDate",hh=new b(""),ph=new b(""),xt=(()=>{class n{locale;defaultTimezone;defaultOptions;constructor(e,t,a){this.locale=e,this.defaultTimezone=t,this.defaultOptions=a}transform(e,t,a,r){if(e==null||e===""||e!==e)return null;try{let o=t??this.defaultOptions?.dateFormat??Tb,s=a??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return ch(e,o,r||this.locale,s)}catch(o){throw Lc(n,o.message)}}static \u0275fac=function(t){return new(t||n)(le(_r,16),le(hh,24),le(ph,24))};static \u0275pipe=Go({name:"date",type:n,pure:!0})}return n})();var ji=(()=>{class n{_locale;constructor(e){this._locale=e}transform(e,t,a){if(!Ob(e))return null;a||=this._locale;try{let r=Fb(e);return uh(r,a,t)}catch(r){throw Lc(n,r.message)}}static \u0275fac=function(t){return new(t||n)(le(_r,16))};static \u0275pipe=Go({name:"number",type:n,pure:!0})}return n})();function Ob(n){return!(n==null||n===""||n!==n)}function Fb(n){if(typeof n=="string"&&!isNaN(Number(n)-parseFloat(n)))return Number(n);if(typeof n!="number")throw new Q(2309,!1);return n}var kr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({})}return n})();function Er(n,i){i=encodeURIComponent(i);for(let e of n.split(";")){let t=e.indexOf("="),[a,r]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(a.trim()===i)return decodeURIComponent(r)}return null}var Hi=class{};var zc="browser";function fh(n){return n===zc}var jc=(()=>{class n{static \u0275prov=y({token:n,providedIn:"root",factory:()=>new Bc(l(H),window)})}return n})(),Bc=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(me(v({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let t=Nb(this.document,i);t&&(this.scrollToElement(t,e),t.focus())}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch{console.warn(Oi(2400,!1))}}scrollToElement(i,e){let t=i.getBoundingClientRect(),a=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(me(v({},e),{left:a-o[0],top:r-o[1]}))}};function Nb(n,i){let e=n.getElementById(i)||n.getElementsByName(i)[0];if(e)return e;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let t=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),a=t.currentNode;for(;a;){let r=a.shadowRoot;if(r){let o=r.getElementById(i)||r.querySelector(`[name="${i}"]`);if(o)return o}a=t.nextNode()}}return null}var Sr=class{_doc;constructor(i){this._doc=i}manager},ss=(()=>{class n extends Sr{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,a,r){return e.addEventListener(t,a,r),()=>this.removeEventListener(e,t,a,r)}removeEventListener(e,t,a,r){return e.removeEventListener(t,a,r)}static \u0275fac=function(t){return new(t||n)(X(H))};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})(),ds=new b(""),Gc=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(o=>{o.manager=this});let a=e.filter(o=>!(o instanceof ss));this._plugins=a.slice().reverse();let r=e.find(o=>o instanceof ss);r&&this._plugins.push(r)}addEventListener(e,t,a,r){return this._findPluginFor(t).addEventListener(e,t,a,r)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(r=>r.supports(e)),!t)throw new Q(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(X(ds),X(W))};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})(),Hc="ng-app-id";function gh(n){for(let i of n)i.remove()}function _h(n,i){let e=i.createElement("style");return e.textContent=n,e}function Bb(n,i,e,t){let a=n.head?.querySelectorAll(`style[${Hc}="${i}"],link[${Hc}="${i}"]`);if(a)for(let r of a)r.removeAttribute(Hc),r instanceof HTMLLinkElement?t.set(r.href.slice(r.href.lastIndexOf("/")+1),{usage:0,elements:[r]}):r.textContent&&e.set(r.textContent,{usage:0,elements:[r]})}function $c(n,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var Wc=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,a,r={}){this.doc=e,this.appId=t,this.nonce=a,Bb(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(let a of e)this.addUsage(a,this.inline,_h);t?.forEach(a=>this.addUsage(a,this.external,$c))}removeStyles(e,t){for(let a of e)this.removeUsage(a,this.inline);t?.forEach(a=>this.removeUsage(a,this.external))}addUsage(e,t,a){let r=t.get(e);r?r.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,a(e,this.doc)))})}removeUsage(e,t){let a=t.get(e);a&&(a.usage--,a.usage<=0&&(gh(a.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])gh(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[t,{elements:a}]of this.inline)a.push(this.addElement(e,_h(t,this.doc)));for(let[t,{elements:a}]of this.external)a.push(this.addElement(e,$c(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(X(H),X(Li),X(ur,8),X(ca))};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})(),Uc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Yc=/%COMP%/g;var vh="%COMP%",Vb=`_nghost-${vh}`,zb=`_ngcontent-${vh}`,jb=!0,Hb=new b("",{factory:()=>jb});function Ub(n){return zb.replace(Yc,n)}function $b(n){return Vb.replace(Yc,n)}function yh(n,i){return i.map(e=>e.replace(Yc,n))}var Ir=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,t,a,r,o,s,u=null,p=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=a,this.removeStylesOnCompDestroy=r,this.doc=o,this.ngZone=s,this.nonce=u,this.tracingService=p,this.defaultRenderer=new Mr(e,o,s,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let a=this.getOrCreateRenderer(e,t);return a instanceof cs?a.applyToHost(e):a instanceof Ar&&a.applyStyles(),a}getOrCreateRenderer(e,t){let a=this.rendererByCompId,r=a.get(t.id);if(!r){let o=this.doc,s=this.ngZone,u=this.eventManager,p=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,g=this.tracingService;switch(t.encapsulation){case zo.Emulated:r=new cs(u,p,t,this.appId,f,o,s,g);break;case zo.ShadowDom:return new ls(u,e,t,o,s,this.nonce,g,p);case zo.ExperimentalIsolatedShadowDom:return new ls(u,e,t,o,s,this.nonce,g);default:r=new Ar(u,p,t,f,o,s,g);break}a.set(t.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(X(Gc),X(Wc),X(Li),X(Hb),X(H),X(W),X(ur),X(Ho,8))};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})(),Mr=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,t,a){this.eventManager=i,this.doc=e,this.ngZone=t,this.tracingService=a}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Uc[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(bh(i)?i.content:i).appendChild(e)}insertBefore(i,e,t){i&&(bh(i)?i.content:i).insertBefore(e,t)}removeChild(i,e){e.remove()}selectRootElement(i,e){let t=typeof i=="string"?this.doc.querySelector(i):i;if(!t)throw new Q(-5104,!1);return e||(t.textContent=""),t}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,t,a){if(a){e=a+":"+e;let r=Uc[a];r?i.setAttributeNS(r,e,t):i.setAttribute(e,t)}else i.setAttribute(e,t)}removeAttribute(i,e,t){if(t){let a=Uc[t];a?i.removeAttributeNS(a,e):i.removeAttribute(`${t}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,t,a){a&(ua.DashCase|ua.Important)?i.style.setProperty(e,t,a&ua.Important?"important":""):i.style[e]=t}removeStyle(i,e,t){t&ua.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,t){i!=null&&(i[e]=t)}setValue(i,e){i.nodeValue=e}listen(i,e,t,a){if(typeof i=="string"&&(i=Bt().getGlobalEventTarget(this.doc,i),!i))throw new Q(5102,!1);let r=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(r=this.tracingService.wrapEventListener(i,e,r)),this.eventManager.addEventListener(i,e,r,a)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function bh(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var ls=class extends Mr{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,t,a,r,o,s,u){super(i,a,r,s),this.hostEl=e,this.sharedStylesHost=u,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let p=t.styles;p=yh(t.id,p);for(let g of p){let M=document.createElement("style");o&&M.setAttribute("nonce",o),M.textContent=g,this.shadowRoot.appendChild(M)}let f=t.getExternalStyles?.();if(f)for(let g of f){let M=$c(g,a);o&&M.setAttribute("nonce",o),this.shadowRoot.appendChild(M)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,t){return super.insertBefore(this.nodeOrShadowRoot(i),e,t)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ar=class extends Mr{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,t,a,r,o,s,u){super(i,r,o,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=a;let p=t.styles;this.styles=u?yh(u,p):p,this.styleUrls=t.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Iu.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},cs=class extends Ar{contentAttr;hostAttr;constructor(i,e,t,a,r,o,s,u){let p=a+"-"+t.id;super(i,e,t,r,o,s,u,p),this.contentAttr=Ub(p),this.hostAttr=$b(p)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let t=super.createElement(i,e);return super.setAttribute(t,this.contentAttr,""),t}};var ms=class n extends vr{supportsDOMEvents=!0;static makeCurrent(){Sc(new n)}onAndCancel(i,e,t,a){return i.addEventListener(e,t,a),()=>{i.removeEventListener(e,t,a)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Gb();return e==null?null:Wb(e)}resetBaseElement(){Rr=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Er(document.cookie,i)}},Rr=null;function Gb(){return Rr=Rr||document.head.querySelector("base"),Rr?Rr.getAttribute("href"):null}function Wb(n){return new URL(n,document.baseURI).pathname}var us=class{addToWindow(i){Gn.getAngularTestability=(t,a=!0)=>{let r=i.findTestabilityInTree(t,a);if(r==null)throw new Q(5103,!1);return r},Gn.getAllAngularTestabilities=()=>i.getAllTestabilities(),Gn.getAllAngularRootElements=()=>i.getAllRootElements();let e=t=>{let a=Gn.getAllAngularTestabilities(),r=a.length,o=function(){r--,r==0&&t()};a.forEach(s=>{s.whenStable(o)})};Gn.frameworkStabilizers||(Gn.frameworkStabilizers=[]),Gn.frameworkStabilizers.push(e)}findTestabilityInTree(i,e,t){if(e==null)return null;let a=i.getTestability(e);return a??(t?Bt().isShadowRoot(e)?this.findTestabilityInTree(i,e.host,!0):this.findTestabilityInTree(i,e.parentElement,!0):null)}},Yb=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})(),Ch=["alt","control","meta","shift"],qb={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Kb={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},wh=(()=>{class n extends Sr{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,a,r){let o=n.parseEventName(t),s=n.eventCallback(o.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Bt().onAndCancel(e,o.domEventName,s,r))}static parseEventName(e){let t=e.toLowerCase().split("."),a=t.shift();if(t.length===0||!(a==="keydown"||a==="keyup"))return null;let r=n._normalizeKey(t.pop()),o="",s=t.indexOf("code");if(s>-1&&(t.splice(s,1),o="code."),Ch.forEach(p=>{let f=t.indexOf(p);f>-1&&(t.splice(f,1),o+=p+".")}),o+=r,t.length!=0||r.length===0)return null;let u={};return u.domEventName=a,u.fullKey=o,u}static matchEventFullKeyCode(e,t){let a=qb[e.key]||e.key,r="";return t.indexOf("code.")>-1&&(a=e.code,r="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),Ch.forEach(o=>{if(o!==a){let s=Kb[o];s(e)&&(r+=o+".")}}),r+=a,r===t)}static eventCallback(e,t,a){return r=>{n.matchEventFullKeyCode(r,e)&&a.runGuarded(()=>t(r))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||n)(X(H))};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})();function Qb(){ms.makeCurrent()}function Xb(){return new Fi}function Zb(){return yu(document),document}var Jb=[{provide:ca,useValue:zc},{provide:Cu,useValue:Qb,multi:!0},{provide:H,useFactory:Zb}],qc=Uu($u,"browser",Jb);var ev=[{provide:Ou,useClass:us},{provide:Tu,useClass:Wo},{provide:Wo,useClass:Wo}],tv=[{provide:gu,useValue:"root"},{provide:Fi,useFactory:Xb},{provide:ds,useClass:ss,multi:!0},{provide:ds,useClass:wh,multi:!0},Ir,Wc,Gc,{provide:mt,useExisting:Ir},{provide:Hi,useClass:Yb},[]],Kc=(()=>{class n{constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({providers:[...tv,...ev],imports:[kr,Gu]})}return n})();var hi=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let a=e.slice(0,t),r=e.slice(t+1).trim();this.addHeaderEntry(a,r)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let t=i.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(i.name,e);let a=(i.op==="a"?this.headers.get(e):void 0)||[];a.push(...t),this.headers.set(e,a);break;case"d":let r=i.value;if(!r)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=this.headers.get(e);if(!o)return;o=o.filter(s=>r.indexOf(s)===-1),o.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}break}}addHeaderEntry(i,e){let t=i.toLowerCase();this.maybeSetNormalizedName(i,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(i,e){let t=(Array.isArray(e)?e:[e]).map(r=>r.toString()),a=i.toLowerCase();this.headers.set(a,t),this.maybeSetNormalizedName(i,a)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var ps=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},fs=class{encodeKey(i){return xh(i)}encodeValue(i){return xh(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function nv(n,i){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(a=>{let r=a.indexOf("="),[o,s]=r==-1?[i.decodeKey(a),""]:[i.decodeKey(a.slice(0,r)),i.decodeValue(a.slice(r+1))],u=e.get(o)||[];u.push(s),e.set(o,u)}),e}var iv=/%(\d[a-f0-9])/gi,av={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function xh(n){return encodeURIComponent(n).replace(iv,(i,e)=>av[e]??i)}function hs(n){return`${n}`}var qn=class n{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new fs,i.fromString){if(i.fromObject)throw new Q(2805,!1);this.map=nv(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let t=i.fromObject[e],a=Array.isArray(t)?t.map(hs):[hs(t)];this.map.set(e,a)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(t=>{let a=i[t];Array.isArray(a)?a.forEach(r=>{e.push({param:t,value:r,op:"a"})}):e.push({param:t,value:a,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(hs(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let t=this.map.get(i.param)||[],a=t.indexOf(hs(i.value));a!==-1&&t.splice(a,1),t.length>0?this.map.set(i.param,t):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function rv(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Dh(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function kh(n){return typeof Blob<"u"&&n instanceof Blob}function Eh(n){return typeof FormData<"u"&&n instanceof FormData}function ov(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Sh="Content-Type",Mh="Accept",Ih="text/plain",Rh="application/json",sv=`${Rh}, ${Ih}, */*`,ha=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,t,a){this.url=e,this.method=i.toUpperCase();let r;if(rv(this.method)||a?(this.body=t!==void 0?t:null,r=a):r=t,r){if(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,this.keepalive=!!r.keepalive,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),r.priority&&(this.priority=r.priority),r.cache&&(this.cache=r.cache),r.credentials&&(this.credentials=r.credentials),typeof r.timeout=="number"){if(r.timeout<1||!Number.isInteger(r.timeout))throw new Q(2822,"");this.timeout=r.timeout}r.mode&&(this.mode=r.mode),r.redirect&&(this.redirect=r.redirect),r.integrity&&(this.integrity=r.integrity),r.referrer&&(this.referrer=r.referrer),r.referrerPolicy&&(this.referrerPolicy=r.referrerPolicy),this.transferCache=r.transferCache}if(this.headers??=new hi,this.context??=new ps,!this.params)this.params=new qn,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),u=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+u+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Dh(this.body)||kh(this.body)||Eh(this.body)||ov(this.body)?this.body:this.body instanceof qn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Eh(this.body)?null:kh(this.body)?this.body.type||null:Dh(this.body)?null:typeof this.body=="string"?Ih:this.body instanceof qn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Rh:null}clone(i={}){let e=i.method||this.method,t=i.url||this.url,a=i.responseType||this.responseType,r=i.keepalive??this.keepalive,o=i.priority||this.priority,s=i.cache||this.cache,u=i.mode||this.mode,p=i.redirect||this.redirect,f=i.credentials||this.credentials,g=i.referrer||this.referrer,M=i.integrity||this.integrity,B=i.referrerPolicy||this.referrerPolicy,Z=i.transferCache??this.transferCache,se=i.timeout??this.timeout,G=i.body!==void 0?i.body:this.body,ie=i.withCredentials??this.withCredentials,xe=i.reportProgress??this.reportProgress,ct=i.headers||this.headers,je=i.params||this.params,oi=i.context??this.context;return i.setHeaders!==void 0&&(ct=Object.keys(i.setHeaders).reduce((cr,Ii)=>cr.set(Ii,i.setHeaders[Ii]),ct)),i.setParams&&(je=Object.keys(i.setParams).reduce((cr,Ii)=>cr.set(Ii,i.setParams[Ii]),je)),new n(e,t,G,{params:je,headers:ct,context:oi,reportProgress:xe,responseType:a,withCredentials:ie,transferCache:Z,keepalive:r,cache:s,priority:o,timeout:se,mode:u,redirect:p,credentials:f,referrer:g,integrity:M,referrerPolicy:B})}},Ui=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(Ui||{}),fa=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,t="OK"){this.headers=i.headers||new hi,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||t,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},gs=class n extends fa{constructor(i={}){super(i)}type=Ui.ResponseHeader;clone(i={}){return new n({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Tr=class n extends fa{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Ui.Response;clone(i={}){return new n({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},pa=class extends fa{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},lv=200,cv=204;var dv=new b("");var mv=/^\)\]\}',?\n/;var Xc=(()=>{class n{xhrFactory;tracingService=l(Ho,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new Q(-2800,!1);let t=this.xhrFactory;return U(null).pipe(Ge(()=>new Wt(r=>{let o=t.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((G,ie)=>o.setRequestHeader(G,ie.join(","))),e.headers.has(Mh)||o.setRequestHeader(Mh,sv),!e.headers.has(Sh)){let G=e.detectContentTypeHeader();G!==null&&o.setRequestHeader(Sh,G)}if(e.timeout&&(o.timeout=e.timeout),e.responseType){let G=e.responseType.toLowerCase();o.responseType=G!=="json"?G:"text"}let s=e.serializeBody(),u=null,p=()=>{if(u!==null)return u;let G=o.statusText||"OK",ie=new hi(o.getAllResponseHeaders()),xe=o.responseURL||e.url;return u=new gs({headers:ie,status:o.status,statusText:G,url:xe}),u},f=this.maybePropagateTrace(()=>{let{headers:G,status:ie,statusText:xe,url:ct}=p(),je=null;ie!==cv&&(je=typeof o.response>"u"?o.responseText:o.response),ie===0&&(ie=je?lv:0);let oi=ie>=200&&ie<300;if(e.responseType==="json"&&typeof je=="string"){let cr=je;je=je.replace(mv,"");try{je=je!==""?JSON.parse(je):null}catch(Ii){je=cr,oi&&(oi=!1,je={error:Ii,text:je})}}oi?(r.next(new Tr({body:je,headers:G,status:ie,statusText:xe,url:ct||void 0})),r.complete()):r.error(new pa({error:je,headers:G,status:ie,statusText:xe,url:ct||void 0}))}),g=this.maybePropagateTrace(G=>{let{url:ie}=p(),xe=new pa({error:G,status:o.status||0,statusText:o.statusText||"Unknown Error",url:ie||void 0});r.error(xe)}),M=g;e.timeout&&(M=this.maybePropagateTrace(G=>{let{url:ie}=p(),xe=new pa({error:new DOMException("Request timed out","TimeoutError"),status:o.status||0,statusText:o.statusText||"Request timeout",url:ie||void 0});r.error(xe)}));let B=!1,Z=this.maybePropagateTrace(G=>{B||(r.next(p()),B=!0);let ie={type:Ui.DownloadProgress,loaded:G.loaded};G.lengthComputable&&(ie.total=G.total),e.responseType==="text"&&o.responseText&&(ie.partialText=o.responseText),r.next(ie)}),se=this.maybePropagateTrace(G=>{let ie={type:Ui.UploadProgress,loaded:G.loaded};G.lengthComputable&&(ie.total=G.total),r.next(ie)});return o.addEventListener("load",f),o.addEventListener("error",g),o.addEventListener("timeout",M),o.addEventListener("abort",g),e.reportProgress&&(o.addEventListener("progress",Z),s!==null&&o.upload&&o.upload.addEventListener("progress",se)),o.send(s),r.next({type:Ui.Sent}),()=>{o.removeEventListener("error",g),o.removeEventListener("abort",g),o.removeEventListener("load",f),o.removeEventListener("timeout",M),e.reportProgress&&(o.removeEventListener("progress",Z),s!==null&&o.upload&&o.upload.removeEventListener("progress",se)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(t){return new(t||n)(X(Hi))};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Th(n,i){return i(n)}function uv(n,i){return(e,t)=>i.intercept(e,{handle:a=>n(a,t)})}function hv(n,i,e){return(t,a)=>Ct(e,()=>i(t,r=>n(r,a)))}var bs=new b(""),Zc=new b("",{factory:()=>[]}),Oh=new b(""),Jc=new b("",{factory:()=>!0});function pv(){let n=null;return(i,e)=>{n===null&&(n=(l(bs,{optional:!0})??[]).reduceRight(uv,Th));let t=l(vc);if(l(Jc)){let r=t.add();return n(i,e).pipe(Ti(r))}else return n(i,e)}}var ed=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:function(t){let a=null;return t?a=new(t||n):a=X(Xc),a},providedIn:"root"})}return n})();var _s=(()=>{class n{backend;injector;chain=null;pendingTasks=l(vc);contributeToStability=l(Jc);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(Zc),...this.injector.get(Oh,[])]));this.chain=t.reduceRight((a,r)=>hv(a,r,this.injector),Th)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(e,a=>this.backend.handle(a)).pipe(Ti(t))}else return this.chain(e,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||n)(X(ed),X(at))};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),td=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:function(t){let a=null;return t?a=new(t||n):a=X(_s),a},providedIn:"root"})}return n})();function Qc(n,i){return{body:i,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,credentials:n.credentials,transferCache:n.transferCache,timeout:n.timeout,keepalive:n.keepalive,priority:n.priority,cache:n.cache,mode:n.mode,redirect:n.redirect,integrity:n.integrity,referrer:n.referrer,referrerPolicy:n.referrerPolicy}}var En=(()=>{class n{handler;constructor(e){this.handler=e}request(e,t,a={}){let r;if(e instanceof ha)r=e;else{let u;a.headers instanceof hi?u=a.headers:u=new hi(a.headers);let p;a.params&&(a.params instanceof qn?p=a.params:p=new qn({fromObject:a.params})),r=new ha(e,t,a.body!==void 0?a.body:null,{headers:u,context:a.context,params:p,reportProgress:a.reportProgress,responseType:a.responseType||"json",withCredentials:a.withCredentials,transferCache:a.transferCache,keepalive:a.keepalive,priority:a.priority,cache:a.cache,mode:a.mode,redirect:a.redirect,credentials:a.credentials,referrer:a.referrer,referrerPolicy:a.referrerPolicy,integrity:a.integrity,timeout:a.timeout})}let o=U(r).pipe(Ri(u=>this.handler.handle(u)));if(e instanceof ha||a.observe==="events")return o;let s=o.pipe(be(u=>u instanceof Tr));switch(a.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return s.pipe(ae(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new Q(2806,!1);return u.body}));case"blob":return s.pipe(ae(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new Q(2807,!1);return u.body}));case"text":return s.pipe(ae(u=>{if(u.body!==null&&typeof u.body!="string")throw new Q(2808,!1);return u.body}));default:return s.pipe(ae(u=>u.body))}case"response":return s;default:throw new Q(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new qn().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,a={}){return this.request("PATCH",e,Qc(a,t))}post(e,t,a={}){return this.request("POST",e,Qc(a,t))}put(e,t,a={}){return this.request("PUT",e,Qc(a,t))}static \u0275fac=function(t){return new(t||n)(X(td))};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var fv=new b("",{factory:()=>!0}),gv="XSRF-TOKEN",_v=new b("",{factory:()=>gv}),bv="X-XSRF-TOKEN",vv=new b("",{factory:()=>bv}),yv=(()=>{class n{cookieName=l(_v);doc=l(H);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Er(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Fh=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:function(t){let a=null;return t?a=new(t||n):a=X(yv),a},providedIn:"root"})}return n})();function Cv(n,i){if(!l(fv)||n.method==="GET"||n.method==="HEAD")return i(n);try{let a=l(Wn).href,{origin:r}=new URL(a),{origin:o}=new URL(n.url,r);if(r!==o)return i(n)}catch{return i(n)}let e=l(Fh).getToken(),t=l(vv);return e!=null&&!n.headers.has(t)&&(n=n.clone({headers:n.headers.set(t,e)})),i(n)}var nd=(function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n})(nd||{});function wv(n,i){return{\u0275kind:n,\u0275providers:i}}function Ph(...n){let i=[En,_s,{provide:td,useExisting:_s},{provide:ed,useFactory:()=>l(dv,{optional:!0})??l(Xc)},{provide:Zc,useValue:Cv,multi:!0}];for(let e of n)i.push(...e.\u0275providers);return sa(i)}var Ah=new b("");function Lh(){return wv(nd.LegacyInterceptors,[{provide:Ah,useFactory:pv},{provide:Zc,useExisting:Ah,multi:!0}])}var id=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({providers:[Ph(Lh())]})}return n})();var Nh=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(X(H))};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Or=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:function(t){let a=null;return t?a=new(t||n):a=X(kv),a},providedIn:"root"})}return n})(),kv=(()=>{class n extends Or{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case wt.NONE:return t;case wt.HTML:return ma(t,"HTML")?Ni(t):Mu(this._doc,String(t)).toString();case wt.STYLE:return ma(t,"Style")?Ni(t):t;case wt.SCRIPT:if(ma(t,"Script"))return Ni(t);throw new Q(5200,!1);case wt.URL:return ma(t,"URL")?Ni(t):Su(String(t));case wt.RESOURCE_URL:if(ma(t,"ResourceURL"))return Ni(t);throw new Q(5201,!1);default:throw new Q(5202,!1)}}bypassSecurityTrustHtml(e){return wu(e)}bypassSecurityTrustStyle(e){return xu(e)}bypassSecurityTrustScript(e){return Du(e)}bypassSecurityTrustUrl(e){return ku(e)}bypassSecurityTrustResourceUrl(e){return Eu(e)}static \u0275fac=function(t){return new(t||n)(X(H))};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Yh=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(le(De),le(L))};static \u0275dir=w({type:n})}return n})(),ld=(()=>{class n extends Yh{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275dir=w({type:n,features:[te]})}return n})(),fi=new b("");var Ev={provide:fi,useExisting:ht(()=>Kt),multi:!0};function Sv(){let n=Bt()?Bt().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Mv=new b(""),Kt=(()=>{class n extends Yh{_compositionMode;_composing=!1;constructor(e,t,a){super(e,t),this._compositionMode=a,this._compositionMode==null&&(this._compositionMode=!Sv())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(le(De),le(L),le(Mv,8))};static \u0275dir=w({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,a){t&1&&D("input",function(o){return a._handleInput(o.target.value)})("blur",function(){return a.onTouched()})("compositionstart",function(){return a._compositionStart()})("compositionend",function(o){return a._compositionEnd(o.target.value)})},standalone:!1,features:[ce([Ev]),te]})}return n})();function cd(n){return n==null||dd(n)===0}function dd(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var gi=new b(""),md=new b(""),Av=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ke=class{static min(i){return Iv(i)}static max(i){return Rv(i)}static required(i){return qh(i)}static requiredTrue(i){return Tv(i)}static email(i){return Ov(i)}static minLength(i){return Fv(i)}static maxLength(i){return Pv(i)}static pattern(i){return Lv(i)}static nullValidator(i){return Cs()}static compose(i){return ep(i)}static composeAsync(i){return tp(i)}};function Iv(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function Rv(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function qh(n){return cd(n.value)?{required:!0}:null}function Tv(n){return n.value===!0?null:{required:!0}}function Ov(n){return cd(n.value)||Av.test(n.value)?null:{email:!0}}function Fv(n){return i=>{let e=i.value?.length??dd(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function Pv(n){return i=>{let e=i.value?.length??dd(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function Lv(n){if(!n)return Cs;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(cd(t.value))return null;let a=t.value;return i.test(a)?null:{pattern:{requiredPattern:e,actualValue:a}}}}function Cs(n){return null}function Kh(n){return n!=null}function Qh(n){return pr(n)?dt(n):n}function Xh(n){let i={};return n.forEach(e=>{i=e!=null?v(v({},i),e):i}),Object.keys(i).length===0?null:i}function Zh(n,i){return i.map(e=>e(n))}function Nv(n){return!n.validate}function Jh(n){return n.map(i=>Nv(i)?i:e=>i.validate(e))}function ep(n){if(!n)return null;let i=n.filter(Kh);return i.length==0?null:function(e){return Xh(Zh(e,i))}}function ud(n){return n!=null?ep(Jh(n)):null}function tp(n){if(!n)return null;let i=n.filter(Kh);return i.length==0?null:function(e){let t=Zh(e,i).map(Qh);return No(t).pipe(ae(Xh))}}function hd(n){return n!=null?tp(Jh(n)):null}function Vh(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function np(n){return n._rawValidators}function ip(n){return n._rawAsyncValidators}function ad(n){return n?Array.isArray(n)?n:[n]:[]}function ws(n,i){return Array.isArray(n)?n.includes(i):n===i}function zh(n,i){let e=ad(i);return ad(n).forEach(a=>{ws(e,a)||e.push(a)}),e}function jh(n,i){return ad(i).filter(e=>!ws(n,e))}var xs=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=ud(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=hd(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Kn=class extends xs{name;get formDirective(){return null}get path(){return null}},Sn=class extends xs{_parent=null;name=null;valueAccessor=null},Ds=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Mn=(()=>{class n extends Ds{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(le(Sn,2))};static \u0275dir=w({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,a){t&2&&R("ng-untouched",a.isUntouched)("ng-touched",a.isTouched)("ng-pristine",a.isPristine)("ng-dirty",a.isDirty)("ng-valid",a.isValid)("ng-invalid",a.isInvalid)("ng-pending",a.isPending)},standalone:!1,features:[te]})}return n})(),An=(()=>{class n extends Ds{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(le(Kn,10))};static \u0275dir=w({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,a){t&2&&R("ng-untouched",a.isUntouched)("ng-touched",a.isTouched)("ng-pristine",a.isPristine)("ng-dirty",a.isDirty)("ng-valid",a.isValid)("ng-invalid",a.isInvalid)("ng-pending",a.isPending)("ng-submitted",a.isSubmitted)},standalone:!1,features:[te]})}return n})();var Fr="VALID",vs="INVALID",ga="PENDING",Pr="DISABLED",pi=class{},ks=class extends pi{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Nr=class extends pi{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Br=class extends pi{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},_a=class extends pi{status;source;constructor(i,e){super(),this.status=i,this.source=e}},Es=class extends pi{source;constructor(i){super(),this.source=i}},Vr=class extends pi{source;constructor(i){super(),this.source=i}};function pd(n){return(As(n)?n.validators:n)||null}function Bv(n){return Array.isArray(n)?ud(n):n||null}function fd(n,i){return(As(i)?i.asyncValidators:n)||null}function Vv(n){return Array.isArray(n)?hd(n):n||null}function As(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function ap(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new Q(1e3,"");if(!t[e])throw new Q(1001,"")}function rp(n,i,e){n._forEachChild((t,a)=>{if(e[a]===void 0)throw new Q(1002,"")})}var ba=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Ce(this.statusReactive)}set status(i){Ce(()=>this.statusReactive.set(i))}_status=gt(()=>this.statusReactive());statusReactive=_(void 0);get valid(){return this.status===Fr}get invalid(){return this.status===vs}get pending(){return this.status===ga}get disabled(){return this.status===Pr}get enabled(){return this.status!==Pr}errors;get pristine(){return Ce(this.pristineReactive)}set pristine(i){Ce(()=>this.pristineReactive.set(i))}_pristine=gt(()=>this.pristineReactive());pristineReactive=_(!0);get dirty(){return!this.pristine}get touched(){return Ce(this.touchedReactive)}set touched(i){Ce(()=>this.touchedReactive.set(i))}_touched=gt(()=>this.touchedReactive());touchedReactive=_(!1);get untouched(){return!this.touched}_events=new T;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(zh(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(zh(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(jh(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(jh(i,this._rawAsyncValidators))}hasValidator(i){return ws(this._rawValidators,i)}hasAsyncValidator(i){return ws(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(me(v({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Br(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(a=>{a.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new Br(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(me(v({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Nr(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(a=>{a.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new Nr(!0,t))}markAsPending(i={}){this.status=ga;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new _a(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(me(v({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Pr,this.errors=null,this._forEachChild(a=>{a.disable(me(v({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new ks(this.value,t)),this._events.next(new _a(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(me(v({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(a=>a(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Fr,this._forEachChild(t=>{t.enable(me(v({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(me(v({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Fr||this.status===ga)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new ks(this.value,e)),this._events.next(new _a(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(me(v({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Pr:Fr}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=ga,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=Qh(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(a=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(a,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,a)=>t&&t._find(a),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new _a(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?Pr:this.errors?vs:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ga)?ga:this._anyControlsHaveStatus(vs)?vs:Fr}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),a=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),a&&this._events.next(new Nr(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Br(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){As(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Bv(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Vv(this._rawAsyncValidators)}},va=class extends ba{constructor(i,e,t){super(pd(e),fd(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){rp(this,!0,i),Object.keys(i).forEach(t=>{ap(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let a=this.controls[t];a&&a.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,a)=>{t.reset(i?i[a]:null,me(v({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Vr(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,a)=>((t.enabled||this.disabled)&&(e[a]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((a,r)=>{t=e(t,a,r)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var rd=class extends va{};var Is=new b("",{factory:()=>Rs}),Rs="always";function zv(n,i){return[...i.path,n]}function od(n,i,e=Rs){gd(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),Hv(n,i),$v(n,i),Uv(n,i),jv(n,i)}function Hh(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),Ms(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Ss(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function jv(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function gd(n,i){let e=np(n);i.validator!==null?n.setValidators(Vh(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=ip(n);i.asyncValidator!==null?n.setAsyncValidators(Vh(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let a=()=>n.updateValueAndValidity();Ss(i._rawValidators,a),Ss(i._rawAsyncValidators,a)}function Ms(n,i){let e=!1;if(n!==null){if(i.validator!==null){let a=np(n);if(Array.isArray(a)&&a.length>0){let r=a.filter(o=>o!==i.validator);r.length!==a.length&&(e=!0,n.setValidators(r))}}if(i.asyncValidator!==null){let a=ip(n);if(Array.isArray(a)&&a.length>0){let r=a.filter(o=>o!==i.asyncValidator);r.length!==a.length&&(e=!0,n.setAsyncValidators(r))}}}let t=()=>{};return Ss(i._rawValidators,t),Ss(i._rawAsyncValidators,t),e}function Hv(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&op(n,i)})}function Uv(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&op(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function op(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function $v(n,i){let e=(t,a)=>{i.valueAccessor.writeValue(t),a&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function sp(n,i){n==null,gd(n,i)}function Gv(n,i){return Ms(n,i)}function Wv(n,i){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Yv(n){return Object.getPrototypeOf(n.constructor)===ld}function lp(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function qv(n,i){if(!i)return null;Array.isArray(i);let e,t,a;return i.forEach(r=>{r.constructor===Kt?e=r:Yv(r)?t=r:a=r}),a||t||e||null}function Kv(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var Qv={provide:Kn,useExisting:ht(()=>ya)},Lr=Promise.resolve(),ya=(()=>{class n extends Kn{callSetDisabledState;get submitted(){return Ce(this.submittedReactive)}_submitted=gt(()=>this.submittedReactive());submittedReactive=_(!1);_directives=new Set;form;ngSubmit=new N;options;constructor(e,t,a){super(),this.callSetDisabledState=a,this.form=new va({},ud(e),hd(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Lr.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),od(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Lr.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Lr.then(()=>{let t=this._findContainer(e.path),a=new va({});sp(a,e),t.registerControl(e.name,a),a.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Lr.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Lr.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),lp(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Es(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(le(gi,10),le(md,10),le(Is,8))};static \u0275dir=w({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,a){t&1&&D("submit",function(o){return a.onSubmit(o)})("reset",function(){return a.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ce([Qv]),te]})}return n})();function Uh(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function $h(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var ys=class extends ba{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(pd(e),fd(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),As(e)&&(e.nonNullable||e.initialValueIsDefault)&&($h(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Vr(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Uh(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Uh(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){$h(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Xv=n=>n instanceof ys;var In=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var sd=class extends ba{constructor(i,e,t){super(pd(e),fd(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,t={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(i,e={}){let t=this._adjustIndex(i);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,t={}){let a=this._adjustIndex(i);a<0&&(a=0),this.controls[a]&&this.controls[a]._registerOnCollectionChange(()=>{}),this.controls.splice(a,1),e&&(this.controls.splice(a,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){rp(this,!1,i),i.forEach((t,a)=>{ap(this,!1,a),this.at(a).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((t,a)=>{this.at(a)&&this.at(a).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((t,a)=>{t.reset(i[a],me(v({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Vr(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,t)=>{i(e,t)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var Zv=(()=>{class n extends Kn{callSetDisabledState;get submitted(){return Ce(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=gt(()=>this._submittedReactive());_submittedReactive=_(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,a){super(),this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Ms(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return od(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Hh(e.control||null,e,!1),Kv(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,lp(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Es(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,a=this.form.get(e.path);t!==a&&(Hh(t||null,e),Xv(a)&&(od(a,e,this.callSetDisabledState),e.control=a))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);sp(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Gv(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){gd(this.form,this),this._oldForm&&Ms(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(le(gi,10),le(md,10),le(Is,8))};static \u0275dir=w({type:n,features:[te,de]})}return n})();var cp=new b("");var Jv={provide:Sn,useExisting:ht(()=>dn)},dn=(()=>{class n extends Sn{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new N;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,a,r,o){super(),this._ngModelWarningConfig=o,this._parent=e,this._setValidators(t),this._setAsyncValidators(a),this.valueAccessor=qv(this,r)}ngOnChanges(e){this._added||this._setUpControl(),Wv(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return zv(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||n)(le(Kn,13),le(gi,10),le(md,10),le(fi,10),le(cp,8))};static \u0275dir=w({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[ce([Jv]),te,de]})}return n})();var ey={provide:Kn,useExisting:ht(()=>bt)},bt=(()=>{class n extends Zv{form=null;ngSubmit=new N;get control(){return this.form}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275dir=w({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,a){t&1&&D("submit",function(o){return a.onSubmit(o)})("reset",function(){return a.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ce([ey]),te]})}return n})(),ty={provide:fi,useExisting:ht(()=>Ts),multi:!0};function dp(n,i){return n==null?`${i}`:(i&&typeof i=="object"&&(i="Object"),`${n}: ${i}`.slice(0,50))}function ny(n){return n.split(":")[0]}var Ts=(()=>{class n extends ld{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;appRefInjector=l(xn).injector;destroyRef=l(ci);cdr=l(_e);_queuedWrite=!1;_writeValueAfterRender(){this._queuedWrite||this.appRefInjector.destroyed||(this._queuedWrite=!0,Me({write:()=>{this.destroyRef.destroyed||(this._queuedWrite=!1,this.writeValue(this.value))}},{injector:this.appRefInjector}))}writeValue(e){this.cdr.markForCheck(),this.value=e;let t=this._getOptionId(e),a=dp(t,e);this.setProperty("value",a)}registerOnChange(e){this.onChange=t=>{this.value=this._getOptionValue(t),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let t of this._optionMap.keys())if(this._compareWith(this._optionMap.get(t),e))return t;return null}_getOptionValue(e){let t=ny(e);return this._optionMap.has(t)?this._optionMap.get(t):e}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275dir=w({type:n,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(t,a){t&1&&D("change",function(o){return a.onChange(o.target.value)})("blur",function(){return a.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[ce([ty]),te]})}return n})(),mp=(()=>{class n{_element;_renderer;_select;id;constructor(e,t,a){this._element=e,this._renderer=t,this._select=a,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(dp(this.id,e)),this._select._writeValueAfterRender())}set value(e){this._setElementValue(e),this._select?._writeValueAfterRender()}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select?._optionMap.delete(this.id),this._select?._writeValueAfterRender()}static \u0275fac=function(t){return new(t||n)(le(L),le(De),le(Ts,9))};static \u0275dir=w({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return n})(),iy={provide:fi,useExisting:ht(()=>up),multi:!0};function Gh(n,i){return n==null?`${i}`:(typeof i=="string"&&(i=`'${i}'`),i&&typeof i=="object"&&(i="Object"),`${n}: ${i}`.slice(0,50))}function ay(n){return n.split(":")[0]}var up=(()=>{class n extends ld{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let t;if(Array.isArray(e)){let a=e.map(r=>this._getOptionId(r));t=(r,o)=>{r._setSelected(a.indexOf(o.toString())>-1)}}else t=(a,r)=>{a._setSelected(!1)};this._optionMap.forEach(t)}registerOnChange(e){this.onChange=t=>{let a=[],r=t.selectedOptions;if(r!==void 0){let o=r;for(let s=0;s<o.length;s++){let u=o[s],p=this._getOptionValue(u.value);a.push(p)}}else{let o=t.options;for(let s=0;s<o.length;s++){let u=o[s];if(u.selected){let p=this._getOptionValue(u.value);a.push(p)}}}this.value=a,e(a)}}_registerOption(e){let t=(this._idCounter++).toString();return this._optionMap.set(t,e),t}_getOptionId(e){for(let t of this._optionMap.keys())if(this._compareWith(this._optionMap.get(t)._value,e))return t;return null}_getOptionValue(e){let t=ay(e);return this._optionMap.has(t)?this._optionMap.get(t)._value:e}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275dir=w({type:n,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(t,a){t&1&&D("change",function(o){return a.onChange(o.target)})("blur",function(){return a.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[ce([iy]),te]})}return n})(),hp=(()=>{class n{_element;_renderer;_select;id;_value;constructor(e,t,a){this._element=e,this._renderer=t,this._select=a,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(Gh(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(Gh(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(t){return new(t||n)(le(L),le(De),le(up,9))};static \u0275dir=w({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return n})();var ry=(()=>{class n{_validator=Cs;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):Cs,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,features:[de]})}return n})();var oy={provide:gi,useExisting:ht(()=>mn),multi:!0};var mn=(()=>{class n extends ry{required;inputName="required";normalizeInput=j;createValidator=e=>qh;enabled(e){return e}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275dir=w({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,a){t&2&&Y("required",a._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[ce([oy]),te]})}return n})();var pp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({})}return n})();function Wh(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var Rn=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let a=this._reduceControls(e),r={};return Wh(t)?r=t:t!==null&&(r.validators=t.validator,r.asyncValidators=t.asyncValidator),new va(a,r)}record(e,t=null){let a=this._reduceControls(e);return new rd(a,t)}control(e,t,a){let r={};return this.useNonNullable?(Wh(t)?r=t:(r.validators=t,r.asyncValidators=a),new ys(e,me(v({},r),{nonNullable:!0}))):new ys(e,t,a)}array(e,t,a){let r=e.map(o=>this._createControl(o));return new sd(r,t,a)}_reduceControls(e){let t={};return Object.keys(e).forEach(a=>{t[a]=this._createControl(e[a])}),t}_createControl(e){if(e instanceof ys)return e;if(e instanceof ba)return e;if(Array.isArray(e)){let t=e[0],a=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(t,a,r)}else return this.control(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var fp=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Is,useValue:e.callSetDisabledState??Rs}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[pp]})}return n})(),gp=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:cp,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Is,useValue:e.callSetDisabledState??Rs}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[pp]})}return n})();var sy="@",ly=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(q);loadingSchedulerFn=l(cy,{optional:!0});_engine;constructor(e,t,a,r,o){this.doc=e,this.delegate=t,this.zone=a,this.animationType=r,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-KJI4TPRX.js").then(a=>a),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(a=>{throw new Q(5300,!1)}).then(({\u0275createEngine:a,\u0275AnimationRendererFactory:r})=>{this._engine=a(this.animationType,this.doc);let o=new r(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(e,t){let a=this.delegate.createRenderer(e,t);if(a.\u0275type===0)return a;typeof a.throwOnSyntheticProps=="boolean"&&(a.throwOnSyntheticProps=!1);let r=new _d(a);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let s=o.createRenderer(e,t);r.use(s),this.scheduler??=this.injector.get(vu,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{r.use(a)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){Bi()};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})(),_d=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,t,a){this.delegate.insertBefore(i,e,t,a)}removeChild(i,e,t,a){this.delegate.removeChild(i,e,t,a)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,t,a){this.delegate.setAttribute(i,e,t,a)}removeAttribute(i,e,t){this.delegate.removeAttribute(i,e,t)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,t,a){this.delegate.setStyle(i,e,t,a)}removeStyle(i,e,t){this.delegate.removeStyle(i,e,t)}setProperty(i,e,t){this.shouldReplay(e)&&this.replay.push(a=>a.setProperty(i,e,t)),this.delegate.setProperty(i,e,t)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,t,a){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(i,e,t,a)),this.delegate.listen(i,e,t,a)}shouldReplay(i){return this.replay!==null&&i.startsWith(sy)}},cy=new b("");function _p(n="animations"){return hr("NgAsyncAnimations"),sa([{provide:mt,useFactory:()=>new ly(l(H),l(Ir),l(W),n)},{provide:da,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var dy=new b("cdk-dir-doc",{providedIn:"root",factory:()=>l(H)}),my=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function bp(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?my.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Ve=(()=>{class n{get value(){return this.valueSignal()}valueSignal=_("ltr");change=new N;constructor(){let e=l(dy,{optional:!0});if(e){let t=e.body?e.body.dir:null,a=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(bp(t||a||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var K=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({})}return n})();var uy=["*"];var hy=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],py=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],fy=new b("MAT_CARD_CONFIG"),Ca=(()=>{class n{appearance;constructor(){let e=l(fy,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,a){t&2&&R("mat-mdc-card-outlined",a.appearance==="outlined")("mdc-card--outlined",a.appearance==="outlined")("mat-mdc-card-filled",a.appearance==="filled")("mdc-card--filled",a.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:uy,decls:1,vars:0,template:function(t,a){t&1&&(fe(),$(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})(),wa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var xa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var Da=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:py,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,a){t&1&&(fe(hy),$(0),Pe(1,"div",0),$(2,1),Ne(),$(3,2))},encapsulation:2,changeDetection:0})}return n})();var vp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[K]})}return n})();function Vt(n,i=0){return yp(n)?Number(n):arguments.length===2?i:0}function yp(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function Dt(n){return n instanceof L?n.nativeElement:n}function ka(n){return Array.isArray(n)?n:[n]}function $e(n){return n==null?"":typeof n=="string"?n:`${n}px`}function kt(n){return n!=null&&`${n}`!="false"}function Cp(n,i=/\s+/){let e=[];if(n!=null){let t=Array.isArray(n)?n:`${n}`.split(i);for(let a of t){let r=`${a}`.trim();r&&e.push(r)}}return e}var vd;try{vd=typeof Intl<"u"&&Intl.v8BreakIterator}catch{vd=!1}var oe=(()=>{class n{_platformId=l(ca);isBrowser=this._platformId?fh(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||vd)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var $i;function wp(){if($i==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return $i=!1,$i;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)$i=!0;else{let n=Element.prototype.scrollTo;n?$i=!/\{\s*\[native code\]\s*\}/.test(n.toString()):$i=!1}}return $i}var yd;function xp(){if(yd==null){let n=typeof document<"u"?document.head:null;yd=!!(n&&(n.createShadowRoot||n.attachShadow))}return yd}function Cd(n){if(xp()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function un(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function ut(n){return n.composedPath?n.composedPath()[0]:n.target}function wd(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var jr;function Dp(){if(jr==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>jr=!0}))}finally{jr=jr||!1}return jr}function Ea(n){return Dp()?n:!!n.capture}var Sa,kp=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function xd(){if(Sa)return Sa;if(typeof document!="object"||!document)return Sa=new Set(kp),Sa;let n=document.createElement("input");return Sa=new Set(kp.filter(i=>(n.setAttribute("type",i),n.type===i))),Sa}var Os=new WeakMap,Le=(()=>{class n{_appRef;_injector=l(q);_environmentInjector=l(at);load(e){let t=this._appRef=this._appRef||this._injector.get(xn),a=Os.get(t);a||(a={loaders:new Set,refs:[]},Os.set(t,a),t.onDestroy(()=>{Os.get(t)?.refs.forEach(r=>r.destroy()),Os.delete(t)})),a.loaders.has(e)||(a.loaders.add(e),a.refs.push(Qo(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var gy=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,a){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return n})(),_y={passive:!0},Ep=(()=>{class n{_platform=l(oe);_ngZone=l(W);_renderer=l(mt).createRenderer(null,null);_styleLoader=l(Le);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Mt;this._styleLoader.load(gy);let t=Dt(e),a=this._monitoredElements.get(t);if(a)return a.subject;let r=new T,o="cdk-text-field-autofilled",s=p=>{p.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>r.next({target:p.target,isAutofilled:!0}))):p.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>r.next({target:p.target,isAutofilled:!1})))},u=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",s,_y)));return this._monitoredElements.set(t,{subject:r,unlisten:u}),r}stopMonitoring(e){let t=Dt(e),a=this._monitoredElements.get(t);a&&(a.unlisten(),a.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Sp=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({})}return n})();function Hr(n){return n.buttons===0||n.detail===0}function Ur(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Mp=new b("cdk-input-modality-detector-options"),Ap={ignoreKeys:[18,17,224,91,16]},Ip=650,Dd={passive:!0,capture:!0},Rp=(()=>{class n{_platform=l(oe);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new nt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ut(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Ip||(this._modality.next(Hr(e)?"keyboard":"mouse"),this._mostRecentTarget=ut(e))};_onTouchstart=e=>{if(Ur(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ut(e)};constructor(){let e=l(W),t=l(H),a=l(Mp,{optional:!0});if(this._options=v(v({},Ap),a),this.modalityDetected=this._modality.pipe(Bo(1)),this.modalityChanged=this.modalityDetected.pipe(fc()),this._platform.isBrowser){let r=l(mt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,Dd),r.listen(t,"mousedown",this._onMousedown,Dd),r.listen(t,"touchstart",this._onTouchstart,Dd)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),$r=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})($r||{}),Tp=new b("cdk-focus-monitor-default-options"),Fs=Ea({passive:!0,capture:!0}),Tn=(()=>{class n{_ngZone=l(W);_platform=l(oe);_inputModalityDetector=l(Rp);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(H);_stopInputModalityDetector=new T;constructor(){let e=l(Tp,{optional:!0});this._detectionMode=e?.detectionMode||$r.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=ut(e);for(let a=t;a;a=a.parentElement)e.type==="focus"?this._onFocus(e,a):this._onBlur(e,a)};monitor(e,t=!1){let a=Dt(e);if(!this._platform.isBrowser||a.nodeType!==1)return U();let r=Cd(a)||this._document,o=this._elementInfo.get(a);if(o)return t&&(o.checkChildren=!0),o.subject;let s={checkChildren:t,subject:new T,rootNode:r};return this._elementInfo.set(a,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let t=Dt(e),a=this._elementInfo.get(t);a&&(a.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(a))}focusVia(e,t,a){let r=Dt(e),o=this._document.activeElement;r===o?this._getClosestElementsInfo(r).forEach(([s,u])=>this._originChanged(s,t,u)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(a))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===$r.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===$r.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?Ip:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(e,t){let a=this._elementInfo.get(t),r=ut(e);!a||!a.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),a)}_onBlur(e,t){let a=this._elementInfo.get(t);!a||a.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(a,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,a=this._rootNodeFocusListenerCount.get(t)||0;a||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Fs),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Fs)}),this._rootNodeFocusListenerCount.set(t,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ge(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let a=this._rootNodeFocusListenerCount.get(t);a>1?this._rootNodeFocusListenerCount.set(t,a-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Fs),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Fs),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,a){this._setClasses(e,t),this._emitOrigin(a,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((a,r)=>{(r===e||a.checkChildren&&r.contains(e))&&t.push([r,a])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:a}=this._inputModalityDetector;if(a!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let o=0;o<r.length;o++)if(r[o].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),kd=(()=>{class n{_elementRef=l(L);_focusMonitor=l(Tn);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new N;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return n})();var On=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,a){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ps;function by(){if(Ps===void 0&&(Ps=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Ps=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return Ps}function Gi(n){return by()?.createHTML(n)||n}function Op(n,i,e){let t=e.sanitize(wt.HTML,i);n.innerHTML=Gi(t||"")}var Fp=new Set,Wi,Ma=(()=>{class n{_platform=l(oe);_nonce=l(ur,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):yy}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&vy(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function vy(n,i){if(!Fp.has(n))try{Wi||(Wi=document.createElement("style"),i&&Wi.setAttribute("nonce",i),Wi.setAttribute("type","text/css"),document.head.appendChild(Wi)),Wi.sheet&&(Wi.sheet.insertRule(`@media ${n} {body{ }}`,0),Fp.add(n))}catch(e){console.error(e)}}function yy(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Gr=(()=>{class n{_mediaMatcher=l(Ma);_zone=l(W);_queries=new Map;_destroySubject=new T;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Pp(ka(e)).some(a=>this._registerQuery(a).mql.matches)}observe(e){let a=Pp(ka(e)).map(o=>this._registerQuery(o).observable),r=Un(a);return r=Lo(r.pipe(He(1)),r.pipe(Bo(1),oa(0))),r.pipe(ae(o=>{let s={matches:!1,breakpoints:{}};return o.forEach(({matches:u,query:p})=>{s.matches=s.matches||u,s.breakpoints[p]=u}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),r={observable:new Wt(o=>{let s=u=>this._zone.run(()=>o.next(u));return t.addListener(s),()=>{t.removeListener(s)}}).pipe(it(t),ae(({matches:o})=>({query:e,matches:o})),ge(this._destroySubject)),mql:t};return this._queries.set(e,r),r}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Pp(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}function Cy(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let i=0;i<n.addedNodes.length;i++)if(!(n.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<n.removedNodes.length;i++)if(!(n.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var Lp=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Np=(()=>{class n{_mutationObserverFactory=l(Lp);_observedElements=new Map;_ngZone=l(W);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=Dt(e);return new Wt(a=>{let o=this._observeElement(t).pipe(ae(s=>s.filter(u=>!Cy(u))),be(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{a.next(s)})});return()=>{o.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new T,a=this._mutationObserverFactory.create(r=>t.next(r));a&&a.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:a,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:a}=this._observedElements.get(e);t&&t.disconnect(),a.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Bp=(()=>{class n{_contentObserver=l(Np);_elementRef=l(L);event=new N;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Vt(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(oa(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",j],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})(),Aa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({providers:[Lp]})}return n})();var Ls=(()=>{class n{_platform=l(oe);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return xy(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=wy(Ry(e));if(t&&(Vp(t)===-1||!this.isVisible(t)))return!1;let a=e.nodeName.toLowerCase(),r=Vp(e);return e.hasAttribute("contenteditable")?r!==-1:a==="iframe"||a==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Ay(e)?!1:a==="audio"?e.hasAttribute("controls")?r!==-1:!1:a==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return Iy(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function wy(n){try{return n.frameElement}catch{return null}}function xy(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function Dy(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function ky(n){return Sy(n)&&n.type=="hidden"}function Ey(n){return My(n)&&n.hasAttribute("href")}function Sy(n){return n.nodeName.toLowerCase()=="input"}function My(n){return n.nodeName.toLowerCase()=="a"}function Hp(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function Vp(n){if(!Hp(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function Ay(n){let i=n.nodeName.toLowerCase(),e=i==="input"&&n.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function Iy(n){return ky(n)?!1:Dy(n)||Ey(n)||n.hasAttribute("contenteditable")||Hp(n)}function Ry(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Sd=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,a,r=!1,o){this._element=i,this._checker=e,this._ngZone=t,this._document=a,this._injector=o,r||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let a=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(a)return a}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let a=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(a)return a}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?Me(i,{injector:this._injector}):setTimeout(i)}},Ns=(()=>{class n{_checker=l(Ls);_ngZone=l(W);_document=l(H);_injector=l(q);constructor(){l(Le).load(On)}create(e,t=!1){return new Sd(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Md=(()=>{class n{_elementRef=l(L);_focusTrapFactory=l(Ns);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){l(oe).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=un(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",j],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",j]},exportAs:["cdkTrapFocus"],features:[de]})}return n})(),Up=new b("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),$p=new b("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Ty=0,Wr=(()=>{class n{_ngZone=l(W);_defaultOptions=l($p,{optional:!0});_liveElement;_document=l(H);_sanitizer=l(Or);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=l(Up,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let a=this._defaultOptions,r,o;return t.length===1&&typeof t[0]=="number"?o=t[0]:[r,o]=t,this.clear(),clearTimeout(this._previousTimeout),r||(r=a&&a.politeness?a.politeness:"polite"),o==null&&a&&(o=a.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Op(this._liveElement,e,this._sanitizer),typeof o=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),o)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),a=this._document.createElement("div");for(let r=0;r<t.length;r++)t[r].remove();return a.classList.add(e),a.classList.add("cdk-visually-hidden"),a.setAttribute("aria-atomic","true"),a.setAttribute("aria-live","polite"),a.id=`cdk-live-announcer-${Ty++}`,this._document.body.appendChild(a),a}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let a=0;a<t.length;a++){let r=t[a],o=r.getAttribute("aria-owns");o?o.indexOf(e)===-1&&r.setAttribute("aria-owns",o+" "+e):r.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var _i=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(_i||{}),zp="cdk-high-contrast-black-on-white",jp="cdk-high-contrast-white-on-black",Ed="cdk-high-contrast-active",Gp=(()=>{class n{_platform=l(oe);_hasCheckedHighContrastMode=!1;_document=l(H);_breakpointSubscription;constructor(){this._breakpointSubscription=l(Gr).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return _i.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,a=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(a&&a.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return _i.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return _i.BLACK_ON_WHITE}return _i.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Ed,zp,jp),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===_i.BLACK_ON_WHITE?e.add(Ed,zp):t===_i.WHITE_ON_BLACK&&e.add(Ed,jp)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Qn=(()=>{class n{constructor(){l(Gp)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[Aa]})}return n})();var Oy=200,Bs=class{_letterKeyStream=new T;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new T;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Oy;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Ke(e=>this._pressedLetters.push(e)),oa(i),be(()=>this._pressedLetters.length>0),ae(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let a=(this._selectedItemIndex+t)%this._items.length,r=this._items[a];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function ze(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Vs=class{_items;_activeItemIndex=_(-1);_activeItem=_(null);_wrap=!1;_typeaheadSubscription=Se.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Vo?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):di(i)&&(this._effectRef=Pi(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new T;change=new T;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Bs(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,a=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!i[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&a){this.setNextItemActive();break}else return;case 38:if(this._vertical&&a){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&a){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&a){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&a){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&a){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&a){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&a){let r=this._activeItemIndex()+this._pageUpAndDown.delta,o=this._getItemsArray().length;this._setActiveItemByIndex(r<o?r:o-1,-1);break}else return;default:(a||ze(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),a=e[t];this._activeItem.set(a??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let a=(this._activeItemIndex()+i*t+e.length)%e.length,r=e[a];if(!this._skipPredicateFn(r)){this.setActiveItem(a);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return di(this._items)?this._items():this._items instanceof Vo?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Kr=class extends Vs{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var Ad={},Oe=class n{_appId=l(Li);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),Ad.hasOwnProperty(i)||(Ad[i]=0),`${i}${e?n._infix+"-":""}${Ad[i]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})};var qp=" ";function Td(n,i,e){let t=Us(n,i);e=e.trim(),!t.some(a=>a.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(qp)))}function $s(n,i,e){let t=Us(n,i);e=e.trim();let a=t.filter(r=>r!==e);a.length?n.setAttribute(i,a.join(qp)):n.removeAttribute(i)}function Us(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var Kp="cdk-describedby-message",Hs="cdk-describedby-host",Rd=0,Od=(()=>{class n{_platform=l(oe);_document=l(H);_messageRegistry=new Map;_messagesContainer=null;_id=`${Rd++}`;constructor(){l(Le).load(On),this._id=l(Li)+"-"+Rd++}describe(e,t,a){if(!this._canBeDescribed(e,t))return;let r=Id(t,a);typeof t!="string"?(Yp(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,a),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,t,a){if(!t||!this._isElementNode(e))return;let r=Id(t,a);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t=="string"){let o=this._messageRegistry.get(r);o&&o.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Hs}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(Hs);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let a=this._document.createElement("div");Yp(a,this._id),a.textContent=e,t&&a.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(a),this._messageRegistry.set(Id(e,t),{messageElement:a,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();let a=this._document.createElement("div");a.style.visibility="hidden",a.classList.add(e),a.classList.add("cdk-visually-hidden"),this._platform.isBrowser||a.setAttribute("platform","server"),this._document.body.appendChild(a),this._messagesContainer=a}_removeCdkDescribedByReferenceIds(e){let t=Us(e,"aria-describedby").filter(a=>a.indexOf(Kp)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let a=this._messageRegistry.get(t);Td(e,"aria-describedby",a.messageElement.id),e.setAttribute(Hs,this._id),a.referenceCount++}_removeMessageReference(e,t){let a=this._messageRegistry.get(t);a.referenceCount--,$s(e,"aria-describedby",a.messageElement.id),e.removeAttribute(Hs)}_isElementDescribedByMessage(e,t){let a=Us(e,"aria-describedby"),r=this._messageRegistry.get(t),o=r&&r.messageElement.id;return!!o&&a.indexOf(o)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let a=t==null?"":`${t}`.trim(),r=e.getAttribute("aria-label");return a?!r||r.trim()!==a:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Id(n,i){return typeof n=="string"?`${i||""}/${n}`:n}function Yp(n,i){n.id||(n.id=`${Kp}-${i}-${Rd++}`)}var Gs=new b("MAT_INPUT_VALUE_ACCESSOR");var Fd=class{_box;_destroyed=new T;_resizeSubject=new T;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new Wt(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(be(e=>e.some(t=>t.target===i)),bc({bufferSize:1,refCount:!0}),ge(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Qp=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=l(W);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let a=t?.box||"content-box";return this._observers.has(a)||this._observers.set(a,new Fd(a)),this._observers.get(a).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Xp={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var Fy=new b("MATERIAL_ANIMATIONS"),Zp=null;function Pd(){return l(Fy,{optional:!0})?.animationsDisabled||l(da,{optional:!0})==="NoopAnimations"?"di-disabled":(Zp??=l(Ma).matchMedia("(prefers-reduced-motion)").matches,Zp?"reduced-motion":"enabled")}function Te(){return Pd()!=="enabled"}var Py=["notch"],Ly=["matFormFieldNotchedOutline",""],Ny=["*"],Jp=["iconPrefixContainer"],ef=["textPrefixContainer"],tf=["iconSuffixContainer"],nf=["textSuffixContainer"],By=["textField"],Vy=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],zy=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function jy(n,i){n&1&&P(0,"span",21)}function Hy(n,i){if(n&1&&(d(0,"label",20),$(1,1),A(2,jy,1,0,"span",21),c()),n&2){let e=C(2);F("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),Y("for",e._control.disableAutomaticLabeling?null:e._control.id),h(2),I(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Uy(n,i){if(n&1&&A(0,Hy,3,5,"label",20),n&2){let e=C();I(e._hasFloatingLabel()?0:-1)}}function $y(n,i){n&1&&P(0,"div",7)}function Gy(n,i){}function Wy(n,i){if(n&1&&Ae(0,Gy,0,0,"ng-template",13),n&2){C(2);let e=ft(1);F("ngTemplateOutlet",e)}}function Yy(n,i){if(n&1&&(d(0,"div",9),A(1,Wy,1,1,null,13),c()),n&2){let e=C();F("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),h(),I(e._forceDisplayInfixLabel()?-1:1)}}function qy(n,i){n&1&&(d(0,"div",10,2),$(2,2),c())}function Ky(n,i){n&1&&(d(0,"div",11,3),$(2,3),c())}function Qy(n,i){}function Xy(n,i){if(n&1&&Ae(0,Qy,0,0,"ng-template",13),n&2){C();let e=ft(1);F("ngTemplateOutlet",e)}}function Zy(n,i){n&1&&(d(0,"div",14,4),$(2,4),c())}function Jy(n,i){n&1&&(d(0,"div",15,5),$(2,5),c())}function e0(n,i){n&1&&P(0,"div",16)}function t0(n,i){n&1&&(d(0,"div",18),$(1,6),c())}function n0(n,i){if(n&1&&(d(0,"mat-hint",22),m(1),c()),n&2){let e=C(2);F("id",e._hintLabelId),h(),S(e.hintLabel)}}function i0(n,i){if(n&1&&(d(0,"div",19),A(1,n0,2,2,"mat-hint",22),$(2,7),P(3,"div",23),$(4,8),c()),n&2){let e=C();h(),I(e.hintLabel?1:-1)}}var Qt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["mat-label"]]})}return n})(),a0=new b("MatError");var Ys=(()=>{class n{align="start";id=l(Oe).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,a){t&2&&(Ze("id",a.id),Y("align",null),R("mat-mdc-form-field-hint-end",a.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),r0=new b("MatPrefix");var df=new b("MatSuffix"),Ia=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[ce([{provide:df,useExisting:n}])]})}return n})(),mf=new b("FloatingLabelParent"),af=(()=>{class n{_elementRef=l(L);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(Qp);_ngZone=l(W);_parent=l(mf);_resizeSubscription=new Se;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return o0(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,a){t&2&&R("mdc-floating-label--float-above",a.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function o0(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var rf="mdc-line-ripple--active",Ws="mdc-line-ripple--deactivating",of=(()=>{class n{_elementRef=l(L);_cleanupTransitionEnd;constructor(){let e=l(W),t=l(De);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ws),e.add(rf)}deactivate(){this._elementRef.nativeElement.classList.add(Ws)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,a=t.contains(Ws);e.propertyName==="opacity"&&a&&t.remove(rf,Ws)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),sf=(()=>{class n{_elementRef=l(L);_ngZone=l(W);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,a){if(t&1&&ye(Py,5),t&2){let r;V(r=z())&&(a._notch=r.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,a){t&2&&R("mdc-notched-outline--notched",a.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Ly,ngContentSelectors:Ny,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,a){t&1&&(fe(),It(0,"div",1),Pe(1,"div",2,0),$(3),Ne(),It(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),Ra=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n})}return n})();var Ki=new b("MatFormField"),s0=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),lf="fill",l0="auto",cf="fixed",c0="translateY(-50%)",hn=(()=>{class n{_elementRef=l(L);_changeDetectorRef=l(_e);_platform=l(oe);_idGenerator=l(Oe);_ngZone=l(W);_defaults=l(s0,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=br("iconPrefixContainer");_textPrefixContainerSignal=br("textPrefixContainer");_iconSuffixContainerSignal=br("iconSuffixContainer");_textSuffixContainerSignal=br("textSuffixContainer");_prefixSuffixContainers=gt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Hu(Qt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=kt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||l0}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||lf;this._appearanceSignal.set(t)}_appearanceSignal=_(lf);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||cf}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||cf}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new T;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Te();constructor(){let e=this._defaults,t=l(Ve);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Pi(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=gt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,a="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(a+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(a+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(it([void 0,void 0]),ae(()=>[t.errorState,t.userAriaDescribedBy]),_c(),be(([[r,o],[s,u]])=>r!==s||o!==u)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ge(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),At(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Wu({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=gt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,o=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),o&&e.push(o.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,a;if(t){let r=this._describedByIds||e;a=e.concat(t.filter(o=>o&&!r.includes(o)))}else a=e;this._control.setDescribedByIds(a),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,a=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,o=e?.getBoundingClientRect().width??0,s=t?.getBoundingClientRect().width??0,u=a?.getBoundingClientRect().width??0,p=r?.getBoundingClientRect().width??0,f=this._currentDirection==="rtl"?"-1":"1",g=`${o+s}px`,B=`calc(${f} * (${g} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Z=`var(--mat-mdc-form-field-label-transform, ${c0} translateX(${B}))`,se=o+s+u+p;return[Z,se]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,a]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),a!==null&&this._notchedOutline?._setMaxWidth(a)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,a,r){if(t&1&&(Pu(r,a._labelChild,Qt,5),Je(r,Ra,5)(r,r0,5)(r,df,5)(r,a0,5)(r,Ys,5)),t&2){kc();let o;V(o=z())&&(a._formFieldControl=o.first),V(o=z())&&(a._prefixChildren=o),V(o=z())&&(a._suffixChildren=o),V(o=z())&&(a._errorChildren=o),V(o=z())&&(a._hintChildren=o)}},viewQuery:function(t,a){if(t&1&&(Lu(a._iconPrefixContainerSignal,Jp,5)(a._textPrefixContainerSignal,ef,5)(a._iconSuffixContainerSignal,tf,5)(a._textSuffixContainerSignal,nf,5),ye(By,5)(Jp,5)(ef,5)(tf,5)(nf,5)(af,5)(sf,5)(of,5)),t&2){kc(4);let r;V(r=z())&&(a._textField=r.first),V(r=z())&&(a._iconPrefixContainer=r.first),V(r=z())&&(a._textPrefixContainer=r.first),V(r=z())&&(a._iconSuffixContainer=r.first),V(r=z())&&(a._textSuffixContainer=r.first),V(r=z())&&(a._floatingLabel=r.first),V(r=z())&&(a._notchedOutline=r.first),V(r=z())&&(a._lineRipple=r.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,a){t&2&&R("mat-mdc-form-field-label-always-float",a._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",a._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",a._hasIconSuffix)("mat-form-field-invalid",a._control.errorState)("mat-form-field-disabled",a._control.disabled)("mat-form-field-autofilled",a._control.autofilled)("mat-form-field-appearance-fill",a.appearance=="fill")("mat-form-field-appearance-outline",a.appearance=="outline")("mat-form-field-hide-placeholder",a._hasFloatingLabel()&&!a._shouldLabelFloat())("mat-primary",a.color!=="accent"&&a.color!=="warn")("mat-accent",a.color==="accent")("mat-warn",a.color==="warn")("ng-untouched",a._shouldForward("untouched"))("ng-touched",a._shouldForward("touched"))("ng-pristine",a._shouldForward("pristine"))("ng-dirty",a._shouldForward("dirty"))("ng-valid",a._shouldForward("valid"))("ng-invalid",a._shouldForward("invalid"))("ng-pending",a._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ce([{provide:Ki,useExisting:n},{provide:mf,useExisting:n}])],ngContentSelectors:zy,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,a){if(t&1&&(fe(Vy),Ae(0,Uy,1,1,"ng-template",null,0,gr),d(2,"div",6,1),D("click",function(o){return a._control.onContainerClick(o)}),A(4,$y,1,0,"div",7),d(5,"div",8),A(6,Yy,2,2,"div",9),A(7,qy,3,0,"div",10),A(8,Ky,3,0,"div",11),d(9,"div",12),A(10,Xy,1,1,null,13),$(11),c(),A(12,Zy,3,0,"div",14),A(13,Jy,3,0,"div",15),c(),A(14,e0,1,0,"div",16),c(),d(15,"div",17),A(16,t0,2,0,"div",18)(17,i0,5,1,"div",19),c()),t&2){let r;h(2),R("mdc-text-field--filled",!a._hasOutline())("mdc-text-field--outlined",a._hasOutline())("mdc-text-field--no-label",!a._hasFloatingLabel())("mdc-text-field--disabled",a._control.disabled)("mdc-text-field--invalid",a._control.errorState),h(2),I(!a._hasOutline()&&!a._control.disabled?4:-1),h(2),I(a._hasOutline()?6:-1),h(),I(a._hasIconPrefix?7:-1),h(),I(a._hasTextPrefix?8:-1),h(2),I(!a._hasOutline()||a._forceDisplayInfixLabel()?10:-1),h(2),I(a._hasTextSuffix?12:-1),h(),I(a._hasIconSuffix?13:-1),h(),I(a._hasOutline()?-1:14),h(),R("mat-mdc-form-field-subscript-dynamic-size",a.subscriptSizing==="dynamic");let o=a._getSubscriptMessageType();h(),I((r=o)==="error"?16:r==="hint"?17:-1)}},dependencies:[af,sf,Dr,of,Ys],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var Ta=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Oa=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,t,a,r){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=t,this._parentForm=a,this._stateChanges=r}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,a=this.ngControl?this.ngControl.control:null,r=t?.isErrorState(a,e)??!1;r!==i&&(this.errorState=r,this._stateChanges.next())}};var Qr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[Aa,hn,K]})}return n})();var u0=["button","checkbox","file","hidden","image","radio","range","reset","submit"],h0=new b("MAT_INPUT_CONFIG"),Fa=(()=>{class n{_elementRef=l(L);_platform=l(oe);ngControl=l(Sn,{optional:!0,self:!0});_autofillMonitor=l(Ep);_ngZone=l(W);_formField=l(Ki,{optional:!0});_renderer=l(De);_uid=l(Oe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(h0,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new T;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=kt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ke.required)??!1}set required(e){this._required=kt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&xd().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=kt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>xd().has(e));constructor(){let e=l(ya,{optional:!0}),t=l(bt,{optional:!0}),a=l(Ta),r=l(Gs,{optional:!0,self:!0}),o=this._elementRef.nativeElement,s=o.nodeName.toLowerCase();r?di(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=o,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(o,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Oa(a,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=o.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Pi(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){u0.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,a){t&1&&D("focus",function(){return a._focusChanged(!0)})("blur",function(){return a._focusChanged(!1)})("input",function(){return a._onInput()}),t&2&&(Ze("id",a.id)("disabled",a.disabled&&!a.disabledInteractive)("required",a.required),Y("name",a.name||null)("readonly",a._getReadonlyAttribute())("aria-disabled",a.disabled&&a.disabledInteractive?"true":null)("aria-invalid",a.empty&&a.required?null:a.errorState)("aria-required",a.required)("id",a.id),R("mat-input-server",a._isServer)("mat-mdc-form-field-textarea-control",a._isInFormField&&a._isTextarea)("mat-mdc-form-field-input-control",a._isInFormField)("mat-mdc-input-disabled-interactive",a.disabledInteractive)("mdc-text-field__input",a._isInFormField)("mat-mdc-native-select-inline",a._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",j]},exportAs:["matInput"],features:[ce([{provide:Ra,useExisting:n}]),de]})}return n})(),uf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[Qr,Qr,Sp,K]})}return n})();var Xt=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(Xt||{}),Ld=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Xt.HIDDEN;constructor(i,e,t,a=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}},hf=Ea({passive:!0,capture:!0}),Nd=class{_events=new Map;addHandler(i,e,t,a){let r=this._events.get(e);if(r){let o=r.get(t);o?o.add(a):r.set(t,new Set([a]))}else this._events.set(e,new Map([[t,new Set([a])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,hf)})}removeHandler(i,e,t){let a=this._events.get(i);if(!a)return;let r=a.get(e);r&&(r.delete(t),r.size===0&&a.delete(e),a.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,hf)))}_delegateEventHandler=i=>{let e=ut(i);e&&this._events.get(i.type)?.forEach((t,a)=>{(a===e||a.contains(e))&&t.forEach(r=>r.handleEvent(i))})}},Xr={enterDuration:225,exitDuration:150},p0=800,pf=Ea({passive:!0,capture:!0}),ff=["mousedown","touchstart"],gf=["mouseup","mouseleave","touchend","touchcancel"],f0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,a){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Qi=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Nd;constructor(i,e,t,a,r){this._target=i,this._ngZone=e,this._platform=a,a.isBrowser&&(this._containerElement=Dt(t)),r&&r.get(Le).load(f0)}fadeInRipple(i,e,t={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=v(v({},Xr),t.animation);t.centered&&(i=a.left+a.width/2,e=a.top+a.height/2);let o=t.radius||g0(i,e,a),s=i-a.left,u=e-a.top,p=r.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${s-o}px`,f.style.top=`${u-o}px`,f.style.height=`${o*2}px`,f.style.width=`${o*2}px`,t.color!=null&&(f.style.backgroundColor=t.color),f.style.transitionDuration=`${p}ms`,this._containerElement.appendChild(f);let g=window.getComputedStyle(f),M=g.transitionProperty,B=g.transitionDuration,Z=M==="none"||B==="0s"||B==="0s, 0s"||a.width===0&&a.height===0,se=new Ld(this,f,t,Z);f.style.transform="scale3d(1, 1, 1)",se.state=Xt.FADING_IN,t.persistent||(this._mostRecentTransientRipple=se);let G=null;return!Z&&(p||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ie=()=>{G&&(G.fallbackTimer=null),clearTimeout(ct),this._finishRippleTransition(se)},xe=()=>this._destroyRipple(se),ct=setTimeout(xe,p+100);f.addEventListener("transitionend",ie),f.addEventListener("transitioncancel",xe),G={onTransitionEnd:ie,onTransitionCancel:xe,fallbackTimer:ct}}),this._activeRipples.set(se,G),(Z||!p)&&this._finishRippleTransition(se),se}fadeOutRipple(i){if(i.state===Xt.FADING_OUT||i.state===Xt.HIDDEN)return;let e=i.element,t=v(v({},Xr),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=Xt.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Dt(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,ff.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{gf.forEach(e=>{this._triggerElement.addEventListener(e,this,pf)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Xt.FADING_IN?this._startFadeOutTransition(i):i.state===Xt.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=Xt.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Xt.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Hr(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+p0;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Ur(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Xt.VISIBLE||i.config.terminateOnPointerUp&&i.state===Xt.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(ff.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(gf.forEach(e=>i.removeEventListener(e,this,pf)),this._pointerUpEventsRegistered=!1))}};function g0(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),a=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+a*a)}var Zr=new b("mat-ripple-global-options"),Ks=(()=>{class n{_elementRef=l(L);_animationsDisabled=Te();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(W),t=l(oe),a=l(Zr,{optional:!0}),r=l(q);this._globalOptions=a||{},this._rippleRenderer=new Qi(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:v(v(v({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,a){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,v(v({},this.rippleConfig),a)):this._rippleRenderer.fadeInRipple(0,0,v(v({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,a){t&2&&R("mat-ripple-unbounded",a.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var _0={capture:!0},b0=["focus","mousedown","mouseenter","touchstart"],Bd="mat-ripple-loader-uninitialized",Vd="mat-ripple-loader-class-name",_f="mat-ripple-loader-centered",Qs="mat-ripple-loader-disabled",bf=(()=>{class n{_document=l(H);_animationsDisabled=Te();_globalRippleOptions=l(Zr,{optional:!0});_platform=l(oe);_ngZone=l(W);_injector=l(q);_eventCleanups;_hosts=new Map;constructor(){let e=l(mt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>b0.map(t=>e.listen(this._document,t,this._onInteraction,_0)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Bd,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Vd))&&e.setAttribute(Vd,t.className||""),t.centered&&e.setAttribute(_f,""),t.disabled&&e.setAttribute(Qs,"")}setDisabled(e,t){let a=this._hosts.get(e);a?(a.target.rippleDisabled=t,!t&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(e))):t?e.setAttribute(Qs,""):e.removeAttribute(Qs)}_onInteraction=e=>{let t=ut(e);if(t instanceof HTMLElement){let a=t.closest(`[${Bd}="${this._globalRippleOptions?.namespace??""}"]`);a&&this._createRipple(a)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Vd)),e.append(t);let a=this._globalRippleOptions,r=this._animationsDisabled?0:a?.animation?.enterDuration??Xr.enterDuration,o=this._animationsDisabled?0:a?.animation?.exitDuration??Xr.exitDuration,s={rippleDisabled:this._animationsDisabled||a?.disabled||e.hasAttribute(Qs),rippleConfig:{centered:e.hasAttribute(_f),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:o}}},u=new Qi(s,this._ngZone,t,this._platform,this._injector),p=!s.rippleDisabled;p&&u.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:u,hasSetUpEvents:p}),e.removeAttribute(Bd)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Fn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,a){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var v0=["mat-icon-button",""],y0=["*"],C0=new b("MAT_BUTTON_CONFIG");function vf(n){return n==null?void 0:Nt(n)}var zd=(()=>{class n{_elementRef=l(L);_ngZone=l(W);_animationsDisabled=Te();_config=l(C0,{optional:!0});_focusMonitor=l(Tn);_cleanupClick;_renderer=l(De);_rippleLoader=l(bf);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(Le).load(Fn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,a){t&2&&(Y("disabled",a._getDisabledAttribute())("aria-disabled",a._getAriaDisabled())("tabindex",a._getTabIndex()),Be(a.color?"mat-"+a.color:""),R("mat-mdc-button-disabled",a.disabled)("mat-mdc-button-disabled-interactive",a.disabledInteractive)("mat-unthemed",!a.color)("_mat-animation-noopable",a._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",j],disabled:[2,"disabled","disabled",j],ariaDisabled:[2,"aria-disabled","ariaDisabled",j],disabledInteractive:[2,"disabledInteractive","disabledInteractive",j],tabIndex:[2,"tabIndex","tabIndex",vf],_tabindex:[2,"tabindex","_tabindex",vf]}})}return n})(),Zt=(()=>{class n extends zd{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[te],attrs:v0,ngContentSelectors:y0,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,a){t&1&&(fe(),It(0,"span",0),$(1),It(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Pn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[K]})}return n})();var w0=["matButton",""],x0=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],D0=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var yf=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Et=(()=>{class n extends zd{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=k0(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,a=this._appearance?yf.get(this._appearance):null,r=yf.get(e);a&&t.remove(...a),t.add(...r),this._appearance=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[te],attrs:w0,ngContentSelectors:D0,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,a){t&1&&(fe(x0),It(0,"span",0),$(1),Pe(2,"span",1),$(3,1),Ne(),$(4,2),It(5,"span",2)(6,"span",3)),t&2&&R("mdc-button__ripple",!a._isFab)("mdc-fab__ripple",a._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function k0(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Pa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[Pn,K]})}return n})();function Xs(n){return n&&typeof n.connect=="function"&&!(n instanceof mu)}var pn=(function(n){return n[n.REPLACED=0]="REPLACED",n[n.INSERTED=1]="INSERTED",n[n.MOVED=2]="MOVED",n[n.REMOVED=3]="REMOVED",n})(pn||{}),Zs=class{viewCacheSize=20;_viewCache=[];applyChanges(i,e,t,a,r){i.forEachOperation((o,s,u)=>{let p,f;if(o.previousIndex==null){let g=()=>t(o,s,u);p=this._insertView(g,u,e,a(o)),f=p?pn.INSERTED:pn.REPLACED}else u==null?(this._detachAndCacheView(s,e),f=pn.REMOVED):(p=this._moveView(s,u,e,a(o)),f=pn.MOVED);r&&r({context:p?.context,operation:f,record:o})})}detach(){for(let i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,t,a){let r=this._insertViewFromCache(e,t);if(r){r.context.$implicit=a;return}let o=i();return t.createEmbeddedView(o.templateRef,o.context,o.index)}_detachAndCacheView(i,e){let t=e.detach(i);this._maybeCacheView(t,e)}_moveView(i,e,t,a){let r=t.get(i);return t.move(r,e),r.context.$implicit=a,r}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{let t=e.indexOf(i);t===-1?i.destroy():e.remove(t)}}_insertViewFromCache(i,e){let t=this._viewCache.pop();return t&&e.insert(t,i),t||null}};var E0=20,Xi=(()=>{class n{_ngZone=l(W);_platform=l(oe);_renderer=l(mt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new T;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=E0){return this._platform.isBrowser?new Wt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let a=e>0?this._scrolled.pipe(dr(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{a.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):U()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let a=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(be(r=>!r||a.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((a,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_scrollableContainsElement(e,t){let a=Dt(t),r=e.getElementRef().nativeElement;do if(a==r)return!0;while(a=a.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var S0=20,gn=(()=>{class n{_platform=l(oe);_listeners;_viewportSize=null;_change=new T;_document=l(H);constructor(){let e=l(W),t=l(mt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let a=r=>this._change.next(r);this._listeners=[t.listen("window","resize",a),t.listen("window","orientationchange",a)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:a}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+a,right:e.left+t,height:a,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),a=e.documentElement,r=a.getBoundingClientRect(),o=-r.top||e.body?.scrollTop||t.scrollY||a.scrollTop||0,s=-r.left||e.body?.scrollLeft||t.scrollX||a.scrollLeft||0;return{top:o,left:s}}change(e=S0){return e>0?this._change.pipe(dr(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Cf=new b("CDK_VIRTUAL_SCROLL_VIEWPORT");var fn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({})}return n})(),eo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[K,fn,K,fn]})}return n})();var to=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Ot=class extends to{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,a,r){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=a,this.bindings=r||null}},_n=class extends to{templateRef;viewContainerRef;context;injector;constructor(i,e,t,a){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=a}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},jd=class extends to{element;constructor(i){super(),this.element=i instanceof L?i.nativeElement:i}},bi=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Ot)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof _n)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof jd)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Js=class extends bi{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,a=t.get(Uo,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:a,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,a=i.injector||this._defaultInjector||q.NULL,r=a.get(at,t.injector);e=Qo(i.component,{elementInjector:a,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(a=>this.outletElement.appendChild(a)),t.detectChanges(),this.setDisposeFn(()=>{let a=e.indexOf(t);a!==-1&&e.remove(a)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Jt=(()=>{class n extends bi{_moduleRef=l(Uo,{optional:!0});_document=l(H);_viewContainerRef=l(Xe);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new N;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,a=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(a.hostView.rootNodes[0]),super.setDisposeFn(()=>a.destroy()),this._attachedPortal=e,this._attachedRef=a,this.attached.emit(a),a}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let a=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(a,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{a.parentNode&&a.parentNode.replaceChild(t,a)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[te]})}return n})(),zt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({})}return n})();var wf=wp();function vi(n){return new el(n.get(gn),n.get(H))}var el=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=$e(-this._previousScrollPosition.left),i.style.top=$e(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,a=e.style,r=t.scrollBehavior||"",o=a.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),wf&&(t.scrollBehavior=a.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),wf&&(t.scrollBehavior=r,a.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Af(n,i){return new tl(n.get(Xi),n.get(W),n.get(gn),i)}var tl=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,a){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=a}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(be(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var no=class{enable(){}disable(){}attach(){}};function Hd(n,i){return i.some(e=>{let t=n.bottom<e.top,a=n.top>e.bottom,r=n.right<e.left,o=n.left>e.right;return t||a||r||o})}function xf(n,i){return i.some(e=>{let t=n.top<e.top,a=n.bottom>e.bottom,r=n.left<e.left,o=n.right>e.right;return t||a||r||o})}function Nn(n,i){return new nl(n.get(Xi),n.get(gn),n.get(W),i)}var nl=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,a){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=a}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:a}=this._viewportRuler.getViewportSize();Hd(e,[{width:t,height:a,bottom:a,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},If=(()=>{class n{_injector=l(q);constructor(){}noop=()=>new no;close=e=>Af(this._injector,e);block=()=>vi(this._injector);reposition=e=>Nn(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),en=class{positionStrategy;scrollStrategy=new no;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var il=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var Rf=(()=>{class n{_attachedOverlays=[];_document=l(H);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,a){return a.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Tf=(()=>{class n extends Rf{_ngZone=l(W);_renderer=l(mt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let a=t.length-1;a>-1;a--){let r=t[a];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Of=(()=>{class n extends Rf{_platform=l(oe);_ngZone=l(W);_renderer=l(mt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,a={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,a),r.listen(t,"click",this._clickListener,a),r.listen(t,"auxclick",this._clickListener,a),r.listen(t,"contextmenu",this._clickListener,a)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=ut(e)};_clickListener=e=>{let t=ut(e),a=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let o=r.length-1;o>-1;o--){let s=r[o],u=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,u))){if(Df(s.overlayElement,t)||Df(s.overlayElement,a))break;this._ngZone?this._ngZone.run(()=>u.next(e)):u.next(e)}}};static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Df(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Ff=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,a){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),rl=(()=>{class n{_platform=l(oe);_containerElement;_document=l(H);_styleLoader=l(Le);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||wd()){let a=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<a.length;r++)a[r].remove()}let t=this._document.createElement("div");t.classList.add(e),wd()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Ff)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ud=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,a){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",a)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function $d(n){return n&&n.nodeType===1}var La=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new T;_attachments=new T;_detachments=new T;_positionStrategy;_scrollStrategy;_locationChanges=Se.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new T;_outsidePointerEvents=new T;_afterNextRenderRef;constructor(i,e,t,a,r,o,s,u,p,f=!1,g,M){this._portalOutlet=i,this._host=e,this._pane=t,this._config=a,this._ngZone=r,this._keyboardDispatcher=o,this._document=s,this._location=u,this._outsideClickDispatcher=p,this._animationsDisabled=f,this._injector=g,this._renderer=M,a.scrollStrategy&&(this._scrollStrategy=a.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=a.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Me(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=v(v({},this._config),i),this._updateElementSize()}setDirection(i){this._config=me(v({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=$e(this._config.width),i.height=$e(this._config.height),i.minWidth=$e(this._config.minWidth),i.minHeight=$e(this._config.minHeight),i.maxWidth=$e(this._config.maxWidth),i.maxHeight=$e(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;$d(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Ud(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let a=ka(e||[]).filter(r=>!!r);a.length&&(t?i.classList.add(...a):i.classList.remove(...a))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Me(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},kf="cdk-overlay-connected-position-bounding-box",M0=/([A-Za-z%]+)$/;function yi(n,i){return new Na(i,n.get(gn),n.get(H),n.get(oe),n.get(rl))}var Na=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new T;_resizeSubscription=Se.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,a,r){this._viewportRuler=e,this._document=t,this._platform=a,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(kf),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,a=this._containerRect,r=[],o;for(let s of this._preferredPositions){let u=this._getOriginPoint(i,a,s),p=this._getOverlayPoint(u,e,s),f=this._getOverlayFit(p,e,t,s);if(f.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,u);return}if(this._canFitWithFlexibleDimensions(f,p,t)){r.push({position:s,origin:u,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(u,s)});continue}(!o||o.overlayFit.visibleArea<f.visibleArea)&&(o={overlayFit:f,overlayPoint:p,originPoint:u,position:s,overlayRect:e})}if(r.length){let s=null,u=-1;for(let p of r){let f=p.boundingBoxRect.width*p.boundingBoxRect.height*(p.position.weight||1);f>u&&(u=f,s=p)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Zi(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(kf),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof L?this._origin.nativeElement:$d(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let a;if(t.originX=="center")a=i.left+i.width/2;else{let o=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;a=t.originX=="start"?o:s}e.left<0&&(a-=e.left);let r;return t.originY=="center"?r=i.top+i.height/2:r=t.originY=="top"?i.top:i.bottom,e.top<0&&(r-=e.top),{x:a,y:r}}_getOverlayPoint(i,e,t){let a;t.overlayX=="center"?a=-e.width/2:t.overlayX==="start"?a=this._isRtl()?-e.width:0:a=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:i.x+a,y:i.y+r}}_getOverlayFit(i,e,t,a){let r=Sf(e),{x:o,y:s}=i,u=this._getOffset(a,"x"),p=this._getOffset(a,"y");u&&(o+=u),p&&(s+=p);let f=0-o,g=o+r.width-t.width,M=0-s,B=s+r.height-t.height,Z=this._subtractOverflows(r.width,f,g),se=this._subtractOverflows(r.height,M,B),G=Z*se;return{visibleArea:G,isCompletelyWithinViewport:r.width*r.height===G,fitsInViewportVertically:se===r.height,fitsInViewportHorizontally:Z==r.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let a=t.bottom-e.y,r=t.right-e.x,o=Ef(this._overlayRef.getConfig().minHeight),s=Ef(this._overlayRef.getConfig().minWidth),u=i.fitsInViewportVertically||o!=null&&o<=a,p=i.fitsInViewportHorizontally||s!=null&&s<=r;return u&&p}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let a=Sf(e),r=this._viewportRect,o=Math.max(i.x+a.width-r.width,0),s=Math.max(i.y+a.height-r.height,0),u=Math.max(r.top-t.top-i.y,0),p=Math.max(r.left-t.left-i.x,0),f=0,g=0;return a.width<=r.width?f=p||-o:f=i.x<this._getViewportMarginStart()?r.left-t.left-i.x:0,a.height<=r.height?g=u||-s:g=i.y<this._getViewportMarginTop()?r.top-t.top-i.y:0,this._previousPushAmount={x:f,y:g},{x:i.x+f,y:i.y+g}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!A0(this._lastScrollVisibility,t)){let a=new il(i,t);this._positionChanges.next(a)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,a=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${a}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,a=this._isRtl(),r,o,s;if(e.overlayY==="top")o=i.y,r=t.height-o+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-s+this._getViewportMarginTop();else{let B=Math.min(t.bottom-i.y+t.top,i.y),Z=this._lastBoundingBoxSize.height;r=B*2,o=i.y-B,r>Z&&!this._isInitialRender&&!this._growAfterOpen&&(o=i.y-Z/2)}let u=e.overlayX==="start"&&!a||e.overlayX==="end"&&a,p=e.overlayX==="end"&&!a||e.overlayX==="start"&&a,f,g,M;if(p)M=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),f=i.x-this._getViewportMarginStart();else if(u)g=i.x,f=t.right-i.x-this._getViewportMarginEnd();else{let B=Math.min(t.right-i.x+t.left,i.x),Z=this._lastBoundingBoxSize.width;f=B*2,g=i.x-B,f>Z&&!this._isInitialRender&&!this._growAfterOpen&&(g=i.x-Z/2)}return{top:o,left:g,bottom:s,right:M,width:f,height:r}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let a={};if(this._hasExactPosition())a.top=a.left="0",a.bottom=a.right="auto",a.maxHeight=a.maxWidth="",a.width=a.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;a.width=$e(t.width),a.height=$e(t.height),a.top=$e(t.top)||"auto",a.bottom=$e(t.bottom)||"auto",a.left=$e(t.left)||"auto",a.right=$e(t.right)||"auto",e.overlayX==="center"?a.alignItems="center":a.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?a.justifyContent="center":a.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(a.maxHeight=$e(r)),o&&(a.maxWidth=$e(o))}this._lastBoundingBoxSize=t,Zi(this._boundingBox.style,a)}_resetBoundingBoxStyles(){Zi(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Zi(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},a=this._hasExactPosition(),r=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(a){let f=this._viewportRuler.getViewportScrollPosition();Zi(t,this._getExactOverlayY(e,i,f)),Zi(t,this._getExactOverlayX(e,i,f))}else t.position="static";let s="",u=this._getOffset(e,"x"),p=this._getOffset(e,"y");u&&(s+=`translateX(${u}px) `),p&&(s+=`translateY(${p}px)`),t.transform=s.trim(),o.maxHeight&&(a?t.maxHeight=$e(o.maxHeight):r&&(t.maxHeight="")),o.maxWidth&&(a?t.maxWidth=$e(o.maxWidth):r&&(t.maxWidth="")),Zi(this._pane.style,t)}_getExactOverlayY(i,e,t){let a={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),i.overlayY==="bottom"){let o=this._document.documentElement.clientHeight;a.bottom=`${o-(r.y+this._overlayRect.height)}px`}else a.top=$e(r.y);return a}_getExactOverlayX(i,e,t){let a={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let o;if(this._isRtl()?o=i.overlayX==="end"?"left":"right":o=i.overlayX==="end"?"right":"left",o==="right"){let s=this._document.documentElement.clientWidth;a.right=`${s-(r.x+this._overlayRect.width)}px`}else a.left=$e(r.x);return a}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(a=>a.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:xf(i,t),isOriginOutsideView:Hd(i,t),isOverlayClipped:xf(e,t),isOverlayOutsideView:Hd(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,a)=>t-Math.max(a,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&ka(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof L)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function Zi(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function Ef(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(M0);return!e||e==="px"?parseFloat(i):null}return n||null}function Sf(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function A0(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var Mf="cdk-global-overlay-wrapper";function Bn(n){return new al}var al=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Mf),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:a,height:r,maxWidth:o,maxHeight:s}=t,u=(a==="100%"||a==="100vw")&&(!o||o==="100%"||o==="100vw"),p=(r==="100%"||r==="100vh")&&(!s||s==="100%"||s==="100vh"),f=this._xPosition,g=this._xOffset,M=this._overlayRef.getConfig().direction==="rtl",B="",Z="",se="";u?se="flex-start":f==="center"?(se="center",M?Z=g:B=g):M?f==="left"||f==="end"?(se="flex-end",B=g):(f==="right"||f==="start")&&(se="flex-start",Z=g):f==="left"||f==="start"?(se="flex-start",B=g):(f==="right"||f==="end")&&(se="flex-end",Z=g),i.position=this._cssPosition,i.marginLeft=u?"0":B,i.marginTop=p?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=u?"0":Z,e.justifyContent=se,e.alignItems=p?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Mf),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Pf=(()=>{class n{_injector=l(q);constructor(){}global(){return Bn()}flexibleConnectedTo(e){return yi(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),io=new b("OVERLAY_DEFAULT_CONFIG");function tn(n,i){n.get(Le).load(Ff);let e=n.get(rl),t=n.get(H),a=n.get(Oe),r=n.get(xn),o=n.get(Ve),s=n.get(De,null,{optional:!0})||n.get(mt).createRenderer(null,null),u=new en(i),p=n.get(io,null,{optional:!0})?.usePopover??!0;u.direction=u.direction||o.value,"showPopover"in t.body?u.usePopover=i?.usePopover??p:u.usePopover=!1;let f=t.createElement("div"),g=t.createElement("div");f.id=a.getId("cdk-overlay-"),f.classList.add("cdk-overlay-pane"),g.appendChild(f),u.usePopover&&(g.setAttribute("popover","manual"),g.classList.add("cdk-overlay-popover"));let M=u.usePopover?u.positionStrategy?.getPopoverInsertionPoint?.():null;return $d(M)?M.after(g):M?.type==="parent"?M.element.appendChild(g):e.getContainerElement().appendChild(g),new La(new Js(f,r,n),g,f,u,n.get(W),n.get(Tf),t,n.get(Dn),n.get(Of),i?.disableAnimations??n.get(da,null,{optional:!0})==="NoopAnimations",n.get(at),s)}var Lf=(()=>{class n{scrollStrategies=l(If);_positionBuilder=l(Pf);_injector=l(q);constructor(){}create(e){return tn(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),I0=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],R0=new b("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(q);return()=>Nn(n)}}),Ba=(()=>{class n{elementRef=l(L);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),Nf=new b("cdk-connected-overlay-default-config"),ol=(()=>{class n{_dir=l(Ve,{optional:!0});_injector=l(q);_overlayRef;_templatePortal;_backdropSubscription=Se.EMPTY;_attachSubscription=Se.EMPTY;_detachSubscription=Se.EMPTY;_positionSubscription=Se.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=l(R0);_ngZone=l(W);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new N;positionChange=new N;attach=new N;detach=new N;overlayKeydown=new N;overlayOutsideClick=new N;constructor(){let e=l(Qe),t=l(Xe),a=l(Nf,{optional:!0}),r=l(io,{optional:!0});this.usePopover=r?.usePopover===!1?null:"global",this._templatePortal=new _n(e,t),this.scrollStrategy=this._scrollStrategyFactory(),a&&this._assignConfig(a)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=I0);let e=this._overlayRef=tn(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!ze(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let a=this._getOriginElement(),r=ut(t);(!a||a!==r&&!a.contains(r))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new en({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(a=>({originX:a.originX,originY:a.originY,overlayX:a.overlayX,overlayY:a.overlayY,offsetX:a.offsetX||this.offsetX,offsetY:a.offsetY||this.offsetY,panelClass:a.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=yi(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Ba?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Ba?this.origin.elementRef.nativeElement:this.origin instanceof L?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(pu(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",j],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",j],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",j],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",j],push:[2,"cdkConnectedOverlayPush","push",j],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",j],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",j],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[de]})}return n})(),St=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({providers:[Lf],imports:[K,zt,eo,eo]})}return n})();function T0(n,i){if(n&1){let e=pe();d(0,"div",1)(1,"button",2),D("click",function(){J(e);let a=C();return ee(a.action())}),m(2),c()()}if(n&2){let e=C();h(2),ne(" ",e.data.action," ")}}var O0=["label"];function F0(n,i){}var P0=Math.pow(2,31)-1,ao=class{_overlayRef;instance;containerInstance;_afterDismissed=new T;_afterOpened=new T;_onAction=new T;_durationTimeoutId;_dismissedByAction=!1;constructor(i,e){this._overlayRef=e,this.containerInstance=i,i._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(i){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(i,P0))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Bf=new b("MatSnackBarData"),Va=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},L0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),N0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),B0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),Vf=(()=>{class n{snackBarRef=l(ao);data=l(Bf);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,a){t&1&&(d(0,"div",0),m(1),c(),A(2,T0,3,1,"div",1)),t&2&&(h(),ne(" ",a.data.message,`
`),h(),I(a.hasAction?2:-1))},dependencies:[Et,L0,N0,B0],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Gd="_mat-snack-bar-enter",Wd="_mat-snack-bar-exit",V0=(()=>{class n extends bi{_ngZone=l(W);_elementRef=l(L);_changeDetectorRef=l(_e);_platform=l(oe);_animationsDisabled=Te();snackBarConfig=l(Va);_document=l(H);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=l(q);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new T;_onExit=new T;_onEnter=new T;_animationState="void";_live;_label;_role;_liveElementId=l(Oe).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Wd?this._completeExit():e===Gd&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Me(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Gd)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Gd)},200)))}exit(){return this._destroyed?U(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Me(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Wd)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Wd),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(o=>e.classList.add(o)):e.classList.add(t)),this._exposeToModals();let a=this._label.nativeElement,r="mdc-snackbar__label";a.classList.toggle(r,!a.querySelector(`.${r}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let a=0;a<t.length;a++){let r=t[a],o=r.getAttribute("aria-owns");this._trackedModals.add(r),o?o.indexOf(e)===-1&&r.setAttribute("aria-owns",o+" "+e):r.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let a=t.replace(this._liveElementId,"").trim();a.length>0?e.setAttribute("aria-owns",a):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),a=e.querySelector("[aria-live]");if(t&&a){let r=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(r=document.activeElement),t.removeAttribute("aria-hidden"),a.appendChild(t),r?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,a){if(t&1&&ye(Jt,7)(O0,7),t&2){let r;V(r=z())&&(a._portalOutlet=r.first),V(r=z())&&(a._label=r.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,a){t&1&&D("animationend",function(o){return a.onAnimationEnd(o.animationName)})("animationcancel",function(o){return a.onAnimationEnd(o.animationName)}),t&2&&R("mat-snack-bar-container-enter",a._animationState==="visible")("mat-snack-bar-container-exit",a._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!a._animationsDisabled)},features:[te],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,a){t&1&&(d(0,"div",1)(1,"div",2,0)(3,"div",3),Ae(4,F0,0,0,"ng-template",4),c(),P(5,"div"),c()()),t&2&&(h(5),Y("aria-live",a._live)("role",a._role)("id",a._liveElementId))},dependencies:[Jt],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),z0=new b("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Va}),et=(()=>{class n{_live=l(Wr);_injector=l(q);_breakpointObserver=l(Gr);_parentSnackBar=l(n,{optional:!0,skipSelf:!0});_defaultConfig=l(z0);_animationsDisabled=Te();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Vf;snackBarContainerComponent=V0;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",a){let r=v(v({},this._defaultConfig),a);return r.data={message:e,action:t},r.announcementMessage===e&&(r.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,r)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let a=t&&t.viewContainerRef&&t.viewContainerRef.injector,r=q.create({parent:a||this._injector,providers:[{provide:Va,useValue:t}]}),o=new Ot(this.snackBarContainerComponent,t.viewContainerRef,r),s=e.attach(o);return s.instance.snackBarConfig=t,s.instance}_attach(e,t){let a=v(v(v({},new Va),this._defaultConfig),t),r=this._createOverlay(a),o=this._attachSnackBarContainer(r,a),s=new ao(o,r);if(e instanceof Qe){let u=new _n(e,null,{$implicit:a.data,snackBarRef:s});s.instance=o.attachTemplatePortal(u)}else{let u=this._createInjector(a,s),p=new Ot(e,void 0,u),f=o.attachComponentPortal(p);s.instance=f.instance}return this._breakpointObserver.observe(Xp.HandsetPortrait).pipe(ge(r.detachments())).subscribe(u=>{r.overlayElement.classList.toggle(this.handsetCssClass,u.matches)}),a.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(a.announcementMessage,a.politeness)}),this._animateSnackBar(s,a),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new en;t.direction=e.direction;let a=Bn(this._injector),r=e.direction==="rtl",o=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!r||e.horizontalPosition==="end"&&r,s=!o&&e.horizontalPosition!=="center";return o?a.left("0"):s?a.right("0"):a.centerHorizontally(),e.verticalPosition==="top"?a.top("0"):a.bottom("0"),t.positionStrategy=a,t.disableAnimations=this._animationsDisabled,tn(this._injector,t)}_createInjector(e,t){let a=e&&e.viewContainerRef&&e.viewContainerRef.injector;return q.create({parent:a||this._injector,providers:[{provide:ao,useValue:t},{provide:Bf,useValue:e.data}]})}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var zf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({providers:[et],imports:[St,zt,Pa,Vf,K]})}return n})();var j0=["*",[["mat-toolbar-row"]]],H0=["*","mat-toolbar-row"],U0=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),za=(()=>{class n{_elementRef=l(L);_platform=l(oe);_document=l(H);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,a,r){if(t&1&&Je(r,U0,5),t&2){let o;V(o=z())&&(a._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,a){t&2&&(Be(a.color?"mat-"+a.color:""),R("mat-toolbar-multiple-rows",a._toolbarRows.length>0)("mat-toolbar-single-row",a._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:H0,decls:2,vars:0,template:function(t,a){t&1&&(fe(j0),$(0),$(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var jf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[K]})}return n})();function Hf(n){return Error(`Unable to find icon with the name "${n}"`)}function $0(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Uf(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function $f(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var Jn=class{url;svgText;options;svgElement=null;constructor(i,e,t){this.url=i,this.svgText=e,this.options=t}},Wf=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,a,r){this._httpClient=e,this._sanitizer=t,this._errorHandler=r,this._document=a}addSvgIcon(e,t,a){return this.addSvgIconInNamespace("",e,t,a)}addSvgIconLiteral(e,t,a){return this.addSvgIconLiteralInNamespace("",e,t,a)}addSvgIconInNamespace(e,t,a,r){return this._addSvgIconConfig(e,t,new Jn(a,null,r))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,a,r){let o=this._sanitizer.sanitize(wt.HTML,a);if(!o)throw $f(a);let s=Gi(o);return this._addSvgIconConfig(e,t,new Jn("",s,r))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,a){return this._addSvgIconSetConfig(e,new Jn(t,null,a))}addSvgIconSetLiteralInNamespace(e,t,a){let r=this._sanitizer.sanitize(wt.HTML,t);if(!r)throw $f(t);let o=Gi(r);return this._addSvgIconSetConfig(e,new Jn("",o,a))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(wt.RESOURCE_URL,e);if(!t)throw Uf(e);let a=this._cachedIconsByUrl.get(t);return a?U(sl(a)):this._loadSvgIconFromConfig(new Jn(e,null)).pipe(Ke(r=>this._cachedIconsByUrl.set(t,r)),ae(r=>sl(r)))}getNamedSvgIcon(e,t=""){let a=Gf(t,e),r=this._svgIconConfigs.get(a);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(t,e),r)return this._svgIconConfigs.set(a,r),this._getSvgFromConfig(r);let o=this._iconSetConfigs.get(t);return o?this._getSvgFromIconSetConfigs(e,o):si(Hf(a))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?U(sl(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ae(t=>sl(t)))}_getSvgFromIconSetConfigs(e,t){let a=this._extractIconWithNameFromAnySet(e,t);if(a)return U(a);let r=t.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe($n(s=>{let p=`Loading icon set URL: ${this._sanitizer.sanitize(wt.RESOURCE_URL,o.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(p)),U(null)})));return No(r).pipe(ae(()=>{let o=this._extractIconWithNameFromAnySet(e,t);if(!o)throw Hf(e);return o}))}_extractIconWithNameFromAnySet(e,t){for(let a=t.length-1;a>=0;a--){let r=t[a];if(r.svgText&&r.svgText.toString().indexOf(e)>-1){let o=this._svgElementFromConfig(r),s=this._extractSvgIconFromSet(o,e,r.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Ke(t=>e.svgText=t),ae(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?U(null):this._fetchIcon(e).pipe(Ke(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,a){let r=e.querySelector(`[id="${t}"]`);if(!r)return null;let o=r.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,a);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),a);let s=this._svgElementFromString(Gi("<svg></svg>"));return s.appendChild(o),this._setSvgAttributes(s,a)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let a=t.querySelector("svg");if(!a)throw Error("<svg> tag not found");return a}_toSvgElement(e){let t=this._svgElementFromString(Gi("<svg></svg>")),a=e.attributes;for(let r=0;r<a.length;r++){let{name:o,value:s}=a[r];o!=="id"&&t.setAttribute(o,s)}for(let r=0;r<e.childNodes.length;r++)e.childNodes[r].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[r].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:a}=e,r=a?.withCredentials??!1;if(!this._httpClient)throw $0();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let o=this._sanitizer.sanitize(wt.RESOURCE_URL,t);if(!o)throw Uf(t);let s=this._inProgressUrlFetches.get(o);if(s)return s;let u=this._httpClient.get(o,{responseType:"text",withCredentials:r}).pipe(ae(p=>Gi(p)),Ti(()=>this._inProgressUrlFetches.delete(o)),hu());return this._inProgressUrlFetches.set(o,u),u}_addSvgIconConfig(e,t,a){return this._svgIconConfigs.set(Gf(e,t),a),this}_addSvgIconSetConfig(e,t){let a=this._iconSetConfigs.get(e);return a?a.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let a=0;a<this._resolvers.length;a++){let r=this._resolvers[a](t,e);if(r)return G0(r)?new Jn(r.url,null,r.options):new Jn(r,null)}}static \u0275fac=function(t){return new(t||n)(X(En,8),X(Or),X(H,8),X(Fi))};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function sl(n){return n.cloneNode(!0)}function Gf(n,i){return n+":"+i}function G0(n){return!!(n.url&&n.options)}var W0=["*"],Y0=new b("MAT_ICON_DEFAULT_OPTIONS"),q0=new b("mat-icon-location",{providedIn:"root",factory:()=>{let n=l(H),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),Yf=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],K0=Yf.map(n=>`[${n}]`).join(", "),Q0=/^url\(['"]?#(.*?)['"]?\)$/,Ci=(()=>{class n{_elementRef=l(L);_iconRegistry=l(Wf);_location=l(q0);_errorHandler=l(Fi);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Se.EMPTY;constructor(){let e=l(new Yt("aria-hidden"),{optional:!0}),t=l(Y0,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let a=e.childNodes[t];(a.nodeType!==1||a.nodeName.toLowerCase()==="svg")&&a.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(a=>a.length>0);this._previousFontSetClass.forEach(a=>e.classList.remove(a)),t.forEach(a=>e.classList.add(a)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((a,r)=>{a.forEach(o=>{r.setAttribute(o.name,`url('${e}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(K0),a=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<t.length;r++)Yf.forEach(o=>{let s=t[r],u=s.getAttribute(o),p=u?u.match(Q0):null;if(p){let f=a.get(s);f||(f=[],a.set(s,f)),f.push({name:o,value:p[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,a]=this._splitIconName(e);t&&(this._svgNamespace=t),a&&(this._svgName=a),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(a,t).pipe(He(1)).subscribe(r=>this._setSvgElement(r),r=>{let o=`Error retrieving icon ${t}:${a}! ${r.message}`;this._errorHandler.handleError(new Error(o))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,a){t&2&&(Y("data-mat-icon-type",a._usingFontIcon()?"font":"svg")("data-mat-icon-name",a._svgName||a.fontIcon)("data-mat-icon-namespace",a._svgNamespace||a.fontSet)("fontIcon",a._usingFontIcon()?a.fontIcon:null),Be(a.color?"mat-"+a.color:""),R("mat-icon-inline",a.inline)("mat-icon-no-color",a.color!=="primary"&&a.color!=="accent"&&a.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",j],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:W0,decls:1,vars:0,template:function(t,a){t&1&&(fe(),$(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),qf=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[K]})}return n})();var cl=class{applyChanges(i,e,t,a,r){i.forEachOperation((o,s,u)=>{let p,f;if(o.previousIndex==null){let g=t(o,s,u);p=e.createEmbeddedView(g.templateRef,g.context,g.index),f=pn.INSERTED}else u==null?(e.remove(s),f=pn.REMOVED):(p=e.get(s),e.move(p,u),f=pn.MOVED);r&&r({context:p?.context,operation:f,record:o})})}detach(){}};var X0=[[["caption"]],[["colgroup"],["col"]],"*"],Z0=["caption","colgroup, col","*"];function J0(n,i){n&1&&$(0,2)}function eC(n,i){n&1&&(d(0,"thead",0),rt(1,1),c(),d(2,"tbody",0),rt(3,2)(4,3),c(),d(5,"tfoot",0),rt(6,4),c())}function tC(n,i){n&1&&rt(0,1)(1,2)(2,3)(3,4)}var bn=new b("CDK_TABLE");var Xf=(()=>{class n{template=l(Qe);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),Zf=(()=>{class n{template=l(Qe);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),Jf=(()=>{class n{template=l(Qe);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),ja=(()=>{class n{_table=l(bn,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,a,r){if(t&1&&Je(r,Xf,5)(r,Zf,5)(r,Jf,5),t&2){let o;V(o=z())&&(a.cell=o.first),V(o=z())&&(a.headerCell=o.first),V(o=z())&&(a.footerCell=o.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",j],stickyEnd:[2,"stickyEnd","stickyEnd",j]}})}return n})(),ml=class{constructor(i,e){e.nativeElement.classList.add(...i._columnCssClassName)}},eg=(()=>{class n extends ml{constructor(){super(l(ja),l(L))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[te]})}return n})();var tg=(()=>{class n extends ml{constructor(){let e=l(ja),t=l(L);super(e,t);let a=e._table?._getCellRole();a&&t.nativeElement.setAttribute("role",a)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[te]})}return n})();var Kd=(()=>{class n{template=l(Qe);_differs=l(mi);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof oo?e.headerCell.template:this instanceof Qd?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,features:[de]})}return n})(),oo=(()=>{class n extends Kd{_table=l(bn,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(l(Qe),l(mi))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",j]},features:[te,de]})}return n})(),Qd=(()=>{class n extends Kd{_table=l(bn,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(l(Qe),l(mi))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",j]},features:[te,de]})}return n})(),ul=(()=>{class n extends Kd{_table=l(bn,{optional:!0});when;constructor(){super(l(Qe),l(mi))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[te]})}return n})(),Ji=(()=>{class n{_viewContainer=l(Xe);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),Xd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,a){t&1&&rt(0,0)},dependencies:[Ji],encapsulation:2})}return n})();var Zd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,a){t&1&&rt(0,0)},dependencies:[Ji],encapsulation:2})}return n})(),ng=(()=>{class n{templateRef=l(Qe);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),Kf=["top","bottom","left","right"],qd=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(i=>this._updateCachedSizes(i)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(i,e,t=!0,a=!0,r,o,s){this._isNativeHtmlTable=i,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=a,this.direction=r,this._positionListener=o,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(i,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(i);let t=[];for(let a of i)a.nodeType===a.ELEMENT_NODE&&t.push(a,...Array.from(a.children));Me({write:()=>{for(let a of t)this._removeStickyStyle(a,e)}},{injector:this._tableInjector})}updateStickyColumns(i,e,t,a=!0,r=!0){if(!i.length||!this._isBrowser||!(e.some(G=>G)||t.some(G=>G))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let o=i[0],s=o.children.length,u=this.direction==="rtl",p=u?"right":"left",f=u?"left":"right",g=e.lastIndexOf(!0),M=t.indexOf(!0),B,Z,se;r&&this._updateStickyColumnReplayQueue({rows:[...i],stickyStartStates:[...e],stickyEndStates:[...t]}),Me({earlyRead:()=>{B=this._getCellWidths(o,a),Z=this._getStickyStartColumnPositions(B,e),se=this._getStickyEndColumnPositions(B,t)},write:()=>{for(let G of i)for(let ie=0;ie<s;ie++){let xe=G.children[ie];e[ie]&&this._addStickyStyle(xe,p,Z[ie],ie===g),t[ie]&&this._addStickyStyle(xe,f,se[ie],ie===M)}this._positionListener&&B.some(G=>!!G)&&(this._positionListener.stickyColumnsUpdated({sizes:g===-1?[]:B.slice(0,g+1).map((G,ie)=>e[ie]?G:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:M===-1?[]:B.slice(M).map((G,ie)=>t[ie+M]?G:null).reverse()}))}},{injector:this._tableInjector})}stickRows(i,e,t){if(!this._isBrowser)return;let a=t==="bottom"?i.slice().reverse():i,r=t==="bottom"?e.slice().reverse():e,o=[],s=[],u=[];Me({earlyRead:()=>{for(let p=0,f=0;p<a.length;p++){if(!r[p])continue;o[p]=f;let g=a[p];u[p]=this._isNativeHtmlTable?Array.from(g.children):[g];let M=this._retrieveElementSize(g).height;f+=M,s[p]=M}},write:()=>{let p=r.lastIndexOf(!0);for(let f=0;f<a.length;f++){if(!r[f])continue;let g=o[f],M=f===p;for(let B of u[f])this._addStickyStyle(B,t,g,M)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:o,elements:u}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:o,elements:u})}},{injector:this._tableInjector})}updateStickyFooterContainer(i,e){this._isNativeHtmlTable&&Me({write:()=>{let t=i.querySelector("tfoot");t&&(e.some(a=>!a)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(i,e){if(!i.classList.contains(this._stickCellCss))return;for(let a of e)i.style[a]="",i.classList.remove(this._borderCellCss[a]);Kf.some(a=>e.indexOf(a)===-1&&i.style[a])?i.style.zIndex=this._getCalculatedZIndex(i):(i.style.zIndex="",this._needsPositionStickyOnElement&&(i.style.position=""),i.classList.remove(this._stickCellCss))}_addStickyStyle(i,e,t,a){i.classList.add(this._stickCellCss),a&&i.classList.add(this._borderCellCss[e]),i.style[e]=`${t}px`,i.style.zIndex=this._getCalculatedZIndex(i),this._needsPositionStickyOnElement&&(i.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(i){let e={top:100,bottom:10,left:1,right:1},t=0;for(let a of Kf)i.style[a]&&(t+=e[a]);return t?`${t}`:""}_getCellWidths(i,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],a=i.children;for(let r=0;r<a.length;r++){let o=a[r];t.push(this._retrieveElementSize(o).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(i,e){let t=[],a=0;for(let r=0;r<i.length;r++)e[r]&&(t[r]=a,a+=i[r]);return t}_getStickyEndColumnPositions(i,e){let t=[],a=0;for(let r=i.length;r>0;r--)e[r]&&(t[r]=a,a+=i[r]);return t}_retrieveElementSize(i){let e=this._elemSizeCache.get(i);if(e)return e;let t=i.getBoundingClientRect(),a={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(i,a),this._resizeObserver.observe(i,{box:"border-box"})),a}_updateStickyColumnReplayQueue(i){this._removeFromStickyColumnReplayQueue(i.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(i)}_removeFromStickyColumnReplayQueue(i){let e=new Set(i);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(a=>!e.has(a));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(i){let e=!1;for(let t of i){let a=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};a.width!==this._elemSizeCache.get(t.target)?.width&&nC(t.target)&&(e=!0),this._elemSizeCache.set(t.target,a)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function nC(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(i=>n.classList.contains(i))}var ro=new b("STICKY_POSITIONING_LISTENER");var Jd=(()=>{class n{viewContainer=l(Xe);elementRef=l(L);constructor(){let e=l(bn);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","rowOutlet",""]]})}return n})(),em=(()=>{class n{viewContainer=l(Xe);elementRef=l(L);constructor(){let e=l(bn);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),tm=(()=>{class n{viewContainer=l(Xe);elementRef=l(L);constructor(){let e=l(bn);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),nm=(()=>{class n{viewContainer=l(Xe);elementRef=l(L);constructor(){let e=l(bn);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),im=(()=>{class n{_differs=l(mi);_changeDetectorRef=l(_e);_elementRef=l(L);_dir=l(Ve,{optional:!0});_platform=l(oe);_viewRepeater;_viewportRuler=l(gn);_injector=l(q);_virtualScrollViewport=l(Cf,{optional:!0,host:!0});_positionListener=l(ro,{optional:!0})||l(ro,{optional:!0,skipSelf:!0});_document=l(H);_data;_renderedRange;_onDestroy=new T;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new T;_footerRowStickyUpdates=new T;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new T;_dataStream=new T;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new N;viewChange=new nt({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){l(new Yt("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,a)=>this.trackBy?this.trackBy(a.dataIndex,a.data):a)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(ge(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Zs:new cl,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Xs(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(a,r,o)=>this._getEmbeddedViewArgs(a.item,o),a=>a.item.data,a=>{a.operation===pn.INSERTED&&a.context&&this._renderCellTemplateForItem(a.record.item.rowDef,a.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(a=>{let r=t.get(a.currentIndex);r.context.$implicit=a.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let a=Qf(this._headerRowOutlet,"thead");a&&(a.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let a=Qf(this._footerRowOutlet,"tfoot");a&&(a.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),a=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...a],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,o)=>{this._addStickyColumnStyles([r],this._headerRowDefs[o])}),this._rowDefs.forEach(r=>{let o=[];for(let s=0;s<t.length;s++)this._renderRows[s].rowDef===r&&o.push(t[s]);this._addStickyColumnStyles(o,r)}),a.forEach((r,o)=>{this._addStickyColumnStyles([r],this._footerRowDefs[o])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),a=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let r=this._renderedRange.start;r<t;r++){let o=this._data[r],s=this._getRenderRowsForData(o,r,a.get(o));this._cachedRenderRowsMap.has(o)||this._cachedRenderRowsMap.set(o,new WeakMap);for(let u=0;u<s.length;u++){let p=s[u],f=this._cachedRenderRowsMap.get(p.data);f.has(p.rowDef)?f.get(p.rowDef).push(p):f.set(p.rowDef,[p]),e.push(p)}}return e}_getRenderRowsForData(e,t,a){return this._getRowDefs(e,t).map(o=>{let s=a&&a.has(o)?a.get(o):[];if(s.length){let u=s.shift();return u.dataIndex=t,u}else return{data:e,rowDef:o,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),dl(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=dl(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=dl(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=dl(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(o,s)=>{let u=!!s.getColumnsDiff();return o||u},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let a=this._headerRowDefs.reduce(e,!1);a&&this._forceRenderHeaderRows();let r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),t||a||r}_switchDataSource(e){this._data=[],Xs(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Xs(this.dataSource)?e=this.dataSource.connect(this):ra(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=U(this.dataSource)),this._renderChangeSubscription=Un([e,this.viewChange]).pipe(ge(this._onDestroy)).subscribe(([t,a])=>{this._data=t||[],this._renderedRange=a,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let a=Array.from(t?.columns||[]).map(s=>{let u=this._columnDefsByName.get(s);return u}),r=a.map(s=>s.sticky),o=a.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,o,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let a=0;a<e.viewContainer.length;a++){let r=e.viewContainer.get(a);t.push(r.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let a=[];if(this.multiTemplateDataRows)a=this._rowDefs.filter(r=>!r.when||r.when(t,e));else{let r=this._rowDefs.find(o=>o.when&&o.when(t,e))||this._defaultRowDef;r&&a.push(r)}return a.length,a}_getEmbeddedViewArgs(e,t){let a=e.rowDef,r={$implicit:e.data};return{templateRef:a.template,context:r,index:t}}_renderRow(e,t,a,r={}){let o=e.viewContainer.createEmbeddedView(t.template,r,a);return this._renderCellTemplateForItem(t,r),o}_renderCellTemplateForItem(e,t){for(let a of this._getCellTemplates(e))Ji.mostRecentCellOutlet&&Ji.mostRecentCellOutlet._viewContainer.createEmbeddedView(a,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,a=e.length;t<a;t++){let o=e.get(t).context;o.count=a,o.first=t===0,o.last=t===a-1,o.even=t%2===0,o.odd=!o.even,this.multiTemplateDataRows?(o.dataIndex=this._renderRows[t].dataIndex,o.renderIndex=t):o.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let a=this._columnDefsByName.get(t);return e.extractCellTemplate(a)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,a)=>t||a.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new qd(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:U()).pipe(ge(this._onDestroy)).subscribe(a=>{this._stickyStyler.direction=a,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?hc:uc;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(dr(0,t),ge(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(a,r)=>this._measureRangeSize(a,r)}),Un([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(ge(this._onDestroy)).subscribe(([a,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let o=0;o<r.elements.length;o++){let s=r.elements[o];if(s){let u=r.offsets[o],p=a!==0?Math.max(a-u,u):-u;for(let f of s)f.style.top=`${-p}px`}}}),Un([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(ge(this._onDestroy)).subscribe(([a,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let o=0;o<r.elements.length;o++){let s=r.elements[o];if(s)for(let u of s)u.style.bottom=`${a+r.offsets[o]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let a=this._noDataRowOutlet.viewContainer;if(t){let r=a.createEmbeddedView(e.templateRef),o=r.rootNodes[0];if(r.rootNodes.length===1&&o?.nodeType===this._document.ELEMENT_NODE){o.setAttribute("role","row"),o.classList.add(...e._contentClassNames);let s=o.querySelectorAll(e._cellSelector);for(let u=0;u<s.length;u++)s[u].classList.add(...e._cellClassNames)}}else a.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let a=this.viewChange.value,r=this._rowOutlet.viewContainer;e.start<a.start||e.end>a.end;let o=e.start-a.start,s=e.end-e.start,u,p;for(let M=0;M<s;M++){let B=r.get(M+o);if(B&&B.rootNodes.length){u=p=B.rootNodes[0];break}}for(let M=s-1;M>-1;M--){let B=r.get(M+o);if(B&&B.rootNodes.length){p=B.rootNodes[B.rootNodes.length-1];break}}let f=u?.getBoundingClientRect?.(),g=p?.getBoundingClientRect?.();return f&&g?g.bottom-f.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,a,r){if(t&1&&Je(r,ng,5)(r,ja,5)(r,ul,5)(r,oo,5)(r,Qd,5),t&2){let o;V(o=z())&&(a._noDataRow=o.first),V(o=z())&&(a._contentColumnDefs=o),V(o=z())&&(a._contentRowDefs=o),V(o=z())&&(a._contentHeaderRowDefs=o),V(o=z())&&(a._contentFooterRowDefs=o)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,a){t&2&&R("cdk-table-fixed-layout",a.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",j],fixedLayout:[2,"fixedLayout","fixedLayout",j],recycleRows:[2,"recycleRows","recycleRows",j]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[ce([{provide:bn,useExisting:n},{provide:ro,useValue:null}])],ngContentSelectors:Z0,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,a){t&1&&(fe(X0),$(0),$(1,1),A(2,J0,1,0),A(3,eC,7,0)(4,tC,4,0)),t&2&&(h(2),I(a._isServer?2:-1),h(),I(a._isNativeHtmlTable?3:4))},dependencies:[em,Jd,nm,tm],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return n})();function dl(n,i){return n.concat(Array.from(i))}function Qf(n,i){let e=i.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let a=t.nodeType===1?t.nodeName:null;if(a===e)return t;if(a==="TABLE")break;t=t.parentNode}return null}var ig=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[eo]})}return n})();var so=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new T;constructor(i=!1,e,t=!0,a){this._multiple=i,this._emitChanges=t,this.compareWith=a,e&&e.length&&(i?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(r=>this._getConcreteValue(r)));i.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let a=this._hasQueuedChanges();return this._emitChangeEvent(),a}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var iC=[[["caption"]],[["colgroup"],["col"]],"*"],aC=["caption","colgroup, col","*"];function rC(n,i){n&1&&$(0,2)}function oC(n,i){n&1&&(d(0,"thead",0),rt(1,1),c(),d(2,"tbody",2),rt(3,3)(4,4),c(),d(5,"tfoot",0),rt(6,5),c())}function sC(n,i){n&1&&rt(0,1)(1,3)(2,4)(3,5)}var ag=(()=>{class n extends im{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,a){t&2&&R("mat-table-fixed-layout",a.fixedLayout)},exportAs:["matTable"],features:[ce([{provide:im,useExisting:n},{provide:bn,useExisting:n},{provide:ro,useValue:null}]),te],ngContentSelectors:aC,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,a){t&1&&(fe(iC),$(0),$(1,1),A(2,rC,1,0),A(3,oC,7,0)(4,sC,4,0)),t&2&&(h(2),I(a._isServer?2:-1),h(),I(a._isNativeHtmlTable?3:4))},dependencies:[em,Jd,nm,tm],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return n})();var rg=(()=>{class n extends ja{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275dir=w({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[ce([{provide:ja,useExisting:n}]),te]})}return n})(),og=(()=>{class n extends eg{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275dir=w({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[te]})}return n})();var sg=(()=>{class n extends tg{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275dir=w({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[te]})}return n})();var lg=(()=>{class n extends oo{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275dir=w({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",j]},features:[ce([{provide:oo,useExisting:n}]),te]})}return n})();var cg=(()=>{class n extends ul{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275dir=w({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[ce([{provide:ul,useExisting:n}]),te]})}return n})(),dg=(()=>{class n extends Xd{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[ce([{provide:Xd,useExisting:n}]),te],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,a){t&1&&rt(0,0)},dependencies:[Ji],encapsulation:2})}return n})();var mg=(()=>{class n extends Zd{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[ce([{provide:Zd,useExisting:n}]),te],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,a){t&1&&rt(0,0)},dependencies:[Ji],encapsulation:2})}return n})();var ug=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[ig,K]})}return n})();var cC=["mat-internal-form-field",""],dC=["*"],hg=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,a){t&2&&R("mdc-form-field--align-end",a.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:cC,ngContentSelectors:dC,decls:1,vars:0,template:function(t,a){t&1&&(fe(),$(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var mC=["switch"],uC=["*"];function hC(n,i){n&1&&(d(0,"span",11),pt(),d(1,"svg",13),P(2,"path",14),c(),d(3,"svg",15),P(4,"path",16),c()())}var pC=new b("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),hl=class{source;checked;constructor(i,e){this.source=i,this.checked=e}},am=(()=>{class n{_elementRef=l(L);_focusMonitor=l(Tn);_changeDetectorRef=l(_e);defaults=l(pC);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new hl(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Te();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new N;toggleChange=new N;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){l(Le).load(Fn);let e=l(new Yt("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=l(Oe).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new hl(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,a){if(t&1&&ye(mC,5),t&2){let r;V(r=z())&&(a._switchElement=r.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,a){t&2&&(Ze("id",a.id),Y("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Be(a.color?"mat-"+a.color:""),R("mat-mdc-slide-toggle-focused",a._focused)("mat-mdc-slide-toggle-checked",a.checked)("_mat-animation-noopable",a._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",j],color:"color",disabled:[2,"disabled","disabled",j],disableRipple:[2,"disableRipple","disableRipple",j],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Nt(e)],checked:[2,"checked","checked",j],hideIcon:[2,"hideIcon","hideIcon",j],disabledInteractive:[2,"disabledInteractive","disabledInteractive",j]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[ce([{provide:fi,useExisting:ht(()=>n),multi:!0},{provide:gi,useExisting:n,multi:!0}]),de],ngContentSelectors:uC,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,a){if(t&1&&(fe(),d(0,"div",1)(1,"button",2,0),D("click",function(){return a._handleClick()}),P(3,"div",3)(4,"span",4),d(5,"span",5)(6,"span",6)(7,"span",7),P(8,"span",8),c(),d(9,"span",9),P(10,"span",10),c(),A(11,hC,5,0,"span",11),c()()(),d(12,"label",12),D("click",function(o){return o.stopPropagation()}),$(13),c()()),t&2){let r=ft(2);F("labelPosition",a.labelPosition),h(),R("mdc-switch--selected",a.checked)("mdc-switch--unselected",!a.checked)("mdc-switch--checked",a.checked)("mdc-switch--disabled",a.disabled)("mat-mdc-slide-toggle-disabled-interactive",a.disabledInteractive),F("tabIndex",a.disabled&&!a.disabledInteractive?-1:a.tabIndex)("disabled",a.disabled&&!a.disabledInteractive),Y("id",a.buttonId)("name",a.name)("aria-label",a.ariaLabel)("aria-labelledby",a._getAriaLabelledBy())("aria-describedby",a.ariaDescribedby)("aria-required",a.required||null)("aria-checked",a.checked)("aria-disabled",a.disabled&&a.disabledInteractive?"true":null),h(9),F("matRippleTrigger",r)("matRippleDisabled",a.disableRipple||a.disabled)("matRippleCentered",!0),h(),I(a.hideIcon?-1:11),h(),F("for",a.buttonId),Y("id",a._labelId)}},dependencies:[Ks,hg],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return n})(),pg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[am,K]})}return n})();var rm=new b("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>l(_r)}),Ha="Method not implemented",vt=class{locale;_localeChanges=new T;localeChanges=this._localeChanges;setTime(i,e,t,a){throw new Error(Ha)}getHours(i){throw new Error(Ha)}getMinutes(i){throw new Error(Ha)}getSeconds(i){throw new Error(Ha)}parseTime(i,e){throw new Error(Ha)}addSeconds(i,e){throw new Error(Ha)}getValidDateOrNull(i){return this.isDateInstance(i)&&this.isValid(i)?i:null}deserialize(i){return i==null||this.isDateInstance(i)&&this.isValid(i)?i:this.invalid()}setLocale(i){this.locale=i,this._localeChanges.next()}compareDate(i,e){return this.getYear(i)-this.getYear(e)||this.getMonth(i)-this.getMonth(e)||this.getDate(i)-this.getDate(e)}compareTime(i,e){return this.getHours(i)-this.getHours(e)||this.getMinutes(i)-this.getMinutes(e)||this.getSeconds(i)-this.getSeconds(e)}sameDate(i,e){if(i&&e){let t=this.isValid(i),a=this.isValid(e);return t&&a?!this.compareDate(i,e):t==a}return i==e}sameTime(i,e){if(i&&e){let t=this.isValid(i),a=this.isValid(e);return t&&a?!this.compareTime(i,e):t==a}return i==e}clampDate(i,e,t){return e&&this.compareDate(i,e)<0?e:t&&this.compareDate(i,t)>0?t:i}},wi=new b("mat-date-formats");var gC=["tooltip"],_C=20;var bC=new b("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(q);return()=>Nn(n,{scrollThrottle:_C})}}),vC=new b("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var fg="tooltip-panel",yC={passive:!0},CC=8,wC=8,xC=24,DC=200,ei=(()=>{class n{_elementRef=l(L);_ngZone=l(W);_platform=l(oe);_ariaDescriber=l(Od);_focusMonitor=l(Tn);_dir=l(Ve);_injector=l(q);_viewContainerRef=l(Xe);_mediaMatcher=l(Ma);_document=l(H);_renderer=l(De);_animationsDisabled=Te();_defaultOptions=l(vC,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=gg;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=kt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=kt(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Vt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Vt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new T;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=CC}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ge(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let a=this._createOverlay(t);this._detach(),this._portal=this._portal||new Ot(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=a.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(ge(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof L)return this._overlayRef;this._detach()}let t=this._injector.get(Xi).getAncestorScrollContainers(this._elementRef),a=`${this._cssClassPrefix}-${fg}`,r=yi(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return r.positionChanges.pipe(ge(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=tn(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,a]:a,scrollStrategy:this._injector.get(bC)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ge(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ge(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ge(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ge(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,a=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(v(v({},a.main),r.main)),this._addOffset(v(v({},a.fallback),r.fallback))])}_addOffset(e){let t=wC,a=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=a?-t:t:e.originX==="end"&&(e.offsetX=a?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,a;t=="above"||t=="below"?a={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?a={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(a={originX:"end",originY:"center"});let{x:r,y:o}=this._invertPosition(a.originX,a.originY);return{main:a,fallback:{originX:r,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,a;t=="above"?a={overlayX:"center",overlayY:"bottom"}:t=="below"?a={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?a={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(a={overlayX:"start",overlayY:"center"});let{x:r,y:o}=this._invertPosition(a.overlayX,a.overlayY);return{main:a,fallback:{overlayX:r,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Me(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:a,originY:r}=e,o;if(t==="center"?this._dir&&this._dir.value==="rtl"?o=a==="end"?"left":"right":o=a==="start"?"left":"right":o=t==="bottom"&&r==="top"?"above":"below",o!==this._currentPosition){let s=this._overlayRef;if(s){let u=`${this._cssClassPrefix}-${fg}-`;s.removePanelClass(u+this._currentPosition),s.addPanelClass(u+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],a=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,a)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),a=this._elementRef.nativeElement;t!==a&&!a.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,yC))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,a=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(a.userSelect=a.msUserSelect=a.webkitUserSelect=a.MozUserSelect="none"),(e==="on"||!t.draggable)&&(a.webkitUserDrag="none"),a.touchAction="none",a.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Me({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!ze(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,a){t&2&&R("mat-mdc-tooltip-disabled",a.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),gg=(()=>{class n{_changeDetectorRef=l(_e);_elementRef=l(L);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Te();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new T;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>xC&&e.width>=DC}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,a=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:a),t.classList.add(e?a:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(t);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,a){if(t&1&&ye(gC,7),t&2){let r;V(r=z())&&(a._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,a){t&1&&D("mouseleave",function(o){return a._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,a){t&1&&(Pe(0,"div",1,0),fr("animationend",function(o){return a._handleAnimationEnd(o)}),Pe(2,"div",2),m(3),Ne()()),t&2&&(Be(a.tooltipClass),R("mdc-tooltip--multiline",a._isMultiline),h(3),S(a.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return n})();var kC=["mat-calendar-body",""];function EC(n,i){return this._trackRow(i)}var Dg=(n,i)=>i.id;function SC(n,i){if(n&1&&(Pe(0,"tr",0)(1,"td",3),m(2),Ne()()),n&2){let e=C();h(),ot("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),Y("colspan",e.numCols),h(),ne(" ",e.label," ")}}function MC(n,i){if(n&1&&(Pe(0,"td",3),m(1),Ne()),n&2){let e=C(2);ot("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),Y("colspan",e._firstRowOffset),h(),ne(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function AC(n,i){if(n&1){let e=pe();Pe(0,"td",6)(1,"button",7),fr("click",function(a){let r=J(e).$implicit,o=C(2);return ee(o._cellClicked(r,a))})("focus",function(a){let r=J(e).$implicit,o=C(2);return ee(o._emitActiveDateChange(r,a))}),Pe(2,"span",8),m(3),Ne(),It(4,"span",9),Ne()()}if(n&2){let e=i.$implicit,t=i.$index,a=C().$index,r=C();ot("width",r._cellWidth)("padding-top",r._cellPadding)("padding-bottom",r._cellPadding),Y("data-mat-row",a)("data-mat-col",t),h(),Be(e.cssClasses),R("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",r._isActiveCell(a,t))("mat-calendar-body-range-start",r._isRangeStart(e.compareValue))("mat-calendar-body-range-end",r._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",r._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",r._isComparisonBridgeStart(e.compareValue,a,t))("mat-calendar-body-comparison-bridge-end",r._isComparisonBridgeEnd(e.compareValue,a,t))("mat-calendar-body-comparison-start",r._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",r._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",r._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",r._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",r._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",r._isInPreview(e.compareValue)),Ze("tabIndex",r._isActiveCell(a,t)?0:-1),Y("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",r._isSelected(e.compareValue))("aria-current",r.todayValue===e.compareValue?"date":null)("aria-describedby",r._getDescribedby(e.compareValue)),h(),R("mat-calendar-body-selected",r._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",r._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",r.todayValue===e.compareValue),h(),ne(" ",e.displayValue," ")}}function IC(n,i){if(n&1&&(Pe(0,"tr",1),A(1,MC,2,6,"td",4),ue(2,AC,5,49,"td",5,Dg),Ne()),n&2){let e=i.$implicit,t=i.$index,a=C();h(),I(t===0&&a._firstRowOffset?1:-1),h(),he(e)}}function RC(n,i){if(n&1&&(d(0,"th",2)(1,"span",6),m(2),c(),d(3,"span",3),m(4),c()()),n&2){let e=i.$implicit;h(2),S(e.long),h(2),S(e.narrow)}}var TC=["*"];function OC(n,i){}function FC(n,i){if(n&1){let e=pe();d(0,"mat-month-view",4),Ko("activeDateChange",function(a){J(e);let r=C();return qo(r.activeDate,a)||(r.activeDate=a),ee(a)}),D("_userSelection",function(a){J(e);let r=C();return ee(r._dateSelected(a))})("dragStarted",function(a){J(e);let r=C();return ee(r._dragStarted(a))})("dragEnded",function(a){J(e);let r=C();return ee(r._dragEnded(a))}),c()}if(n&2){let e=C();Yo("activeDate",e.activeDate),F("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function PC(n,i){if(n&1){let e=pe();d(0,"mat-year-view",5),Ko("activeDateChange",function(a){J(e);let r=C();return qo(r.activeDate,a)||(r.activeDate=a),ee(a)}),D("monthSelected",function(a){J(e);let r=C();return ee(r._monthSelectedInYearView(a))})("selectedChange",function(a){J(e);let r=C();return ee(r._goToDateInView(a,"month"))}),c()}if(n&2){let e=C();Yo("activeDate",e.activeDate),F("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function LC(n,i){if(n&1){let e=pe();d(0,"mat-multi-year-view",6),Ko("activeDateChange",function(a){J(e);let r=C();return qo(r.activeDate,a)||(r.activeDate=a),ee(a)}),D("yearSelected",function(a){J(e);let r=C();return ee(r._yearSelectedInMultiYearView(a))})("selectedChange",function(a){J(e);let r=C();return ee(r._goToDateInView(a,"year"))}),c()}if(n&2){let e=C();Yo("activeDate",e.activeDate),F("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function NC(n,i){}var BC=["button"],VC=[[["","matDatepickerToggleIcon",""]]],zC=["[matDatepickerToggleIcon]"];function jC(n,i){n&1&&(pt(),d(0,"svg",2),P(1,"path",3),c())}var Ga=(()=>{class n{changes=new T;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),HC=0,co=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=HC++;cssClasses;constructor(i,e,t,a,r,o=i,s){this.value=i,this.displayValue=e,this.ariaLabel=t,this.enabled=a,this.compareValue=o,this.rawValue=s,this.cssClasses=r instanceof Set?Array.from(r):r}},UC={passive:!1,capture:!0},pl={passive:!0,capture:!0},_g={passive:!0},$a=(()=>{class n{_elementRef=l(L);_ngZone=l(W);_platform=l(oe);_intl=l(Ga);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new N;previewChange=new N;activeDateChange=new N;dragStarted=new N;dragEnded=new N;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=l(q);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=l(De),t=l(Oe);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),l(Le).load(Fn),this._ngZone.runOutsideAngular(()=>{let a=this._elementRef.nativeElement,r=[e.listen(a,"touchmove",this._touchmoveHandler,UC),e.listen(a,"mouseenter",this._enterHandler,pl),e.listen(a,"focus",this._enterHandler,pl),e.listen(a,"mouseleave",this._leaveHandler,pl),e.listen(a,"blur",this._leaveHandler,pl),e.listen(a,"mousedown",this._mousedownHandler,_g),e.listen(a,"touchstart",this._mousedownHandler,_g)];this._platform.isBrowser&&r.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=r})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:a,numCols:r}=this;(e.rows||t)&&(this._firstRowOffset=a&&a.length&&a[0].length?r-a[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/r}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/r}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let a=e*this.numCols+t;return e&&(a-=this._firstRowOffset),a==this.activeCell}_focusActiveCell(e=!0){Me(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return lm(e,this.startValue,this.endValue)}_isRangeEnd(e){return cm(e,this.startValue,this.endValue)}_isInRange(e){return dm(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return lm(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,a){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let r=this.rows[t][a-1];if(!r){let o=this.rows[t-1];r=o&&o[o.length-1]}return r&&!this._isRangeEnd(r.compareValue)}_isComparisonBridgeEnd(e,t,a){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let r=this.rows[t][a+1];if(!r){let o=this.rows[t+1];r=o&&o[0]}return r&&!this._isRangeStart(r.compareValue)}_isComparisonEnd(e){return cm(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return dm(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return lm(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return cm(e,this.previewStart,this.previewEnd)}_isInPreview(e){return dm(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=bg(e),a=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),sm(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:a?.enabled?a:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=sm(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let a=this._getCellFromElement(t);this.dragEnded.emit({value:a?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=bg(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=sm(e);if(t){let a=t.getAttribute("data-mat-row"),r=t.getAttribute("data-mat-col");if(a&&r)return this.rows[parseInt(a)]?.[parseInt(r)]||null}return null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[de],attrs:kC,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,a){t&1&&(A(0,SC,3,6,"tr",0),ue(1,IC,4,1,"tr",1,EC,!0),Pe(3,"span",2),m(4),Ne(),Pe(5,"span",2),m(6),Ne(),Pe(7,"span",2),m(8),Ne(),Pe(9,"span",2),m(10),Ne()),t&2&&(I(a._firstRowOffset<a.labelMinRequiredCells?0:-1),h(),he(a.rows),h(2),Ze("id",a._startDateLabelId),h(),ne(" ",a.startDateAccessibleName,`
`),h(),Ze("id",a._endDateLabelId),h(),ne(" ",a.endDateAccessibleName,`
`),h(),Ze("id",a._comparisonStartDateLabelId),h(),Ue(" ",a.comparisonDateAccessibleName," ",a.startDateAccessibleName,`
`),h(),Ze("id",a._comparisonEndDateLabelId),h(),Ue(" ",a.comparisonDateAccessibleName," ",a.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function om(n){return n?.nodeName==="TD"}function sm(n){let i;return om(n)?i=n:om(n.parentNode)?i=n.parentNode:om(n.parentNode?.parentNode)&&(i=n.parentNode.parentNode),i?.getAttribute("data-mat-row")!=null?i:null}function lm(n,i,e){return e!==null&&i!==e&&n<e&&n===i}function cm(n,i,e){return i!==null&&i!==e&&n>=i&&n===e}function dm(n,i,e,t){return t&&i!==null&&e!==null&&i!==e&&n>=i&&n<=e}function bg(n){let i=n.changedTouches[0];return document.elementFromPoint(i.clientX,i.clientY)}var nn=class{start;end;_disableStructuralEquivalency;constructor(i,e){this.start=i,this.end=e}},mo=(()=>{class n{selection;_adapter;_selectionChanged=new T;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let a=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:a})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){Bi()};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})(),$C=(()=>{class n extends mo{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||n)(X(vt))};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})();var kg={provide:mo,useFactory:()=>l(mo,{optional:!0,skipSelf:!0})||new $C(l(vt))};var Eg=new b("MAT_DATE_RANGE_SELECTION_STRATEGY");var mm=7,GC=0,vg=(()=>{class n{_changeDetectorRef=l(_e);_dateFormats=l(wi,{optional:!0});_dateAdapter=l(vt,{optional:!0});_dir=l(Ve,{optional:!0});_rangeStrategy=l(Eg,{optional:!0});_rerenderSubscription=Se.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof nn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new N;_userSelection=new N;dragStarted=new N;dragEnded=new N;activeDateChange=new N;_matCalendarBody;_monthLabel=_("");_weeks=_([]);_firstWeekOffset=_(0);_rangeStart=_(null);_rangeEnd=_(null);_comparisonRangeStart=_(null);_comparisonRangeEnd=_(null);_previewStart=_(null);_previewEnd=_(null);_isRange=_(!1);_todayDate=_(null);_weekdays=_([]);constructor(){l(Le).load(On),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(it(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,a=this._getDateFromDayOfMonth(t),r,o;this._selected instanceof nn?(r=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):r=o=this._getDateInCurrentMonth(this._selected),(r!==t||o!==t)&&this.selectedChange.emit(a),this._userSelection.emit({value:a,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!ze(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((mm+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%mm),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let a=t?t.rawValue:null,r=this._rangeStrategy.createPreview(a,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(r.start)),this._previewEnd.set(this._getCellCompareValue(r.end)),this.activeDrag&&a){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,a,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),r=this._dateAdapter.getDayOfWeekNames("long").map((o,s)=>({long:o,narrow:t[s],id:GC++}));this._weekdays.set(r.slice(e).concat(r.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),a=[[]];for(let r=0,o=this._firstWeekOffset();r<e;r++,o++){o==mm&&(a.push([]),o=0);let s=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),r+1),u=this._shouldEnableDate(s),p=this._dateAdapter.format(s,this._dateFormats.display.dateA11yLabel),f=this.dateClass?this.dateClass(s,"month"):void 0;a[a.length-1].push(new co(r+1,t[r],p,u,f,this._getCellCompareValue(s),s))}this._weeks.set(a)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),a=this._dateAdapter.getMonth(e),r=this._dateAdapter.getDate(e);return new Date(t,a,r).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof nn?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-month-view"]],viewQuery:function(t,a){if(t&1&&ye($a,5),t&2){let r;V(r=z())&&(a._matCalendarBody=r.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[de],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,a){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),ue(3,RC,5,2,"th",2,Dg),c(),d(5,"tr",3),P(6,"th",4),c()(),d(7,"tbody",5),D("selectedValueChange",function(o){return a._dateSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("previewChange",function(o){return a._previewChanged(o)})("dragStarted",function(o){return a.dragStarted.emit(o)})("dragEnded",function(o){return a._dragEnded(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),c()()),t&2&&(h(3),he(a._weekdays()),h(4),F("label",a._monthLabel())("rows",a._weeks())("todayValue",a._todayDate())("startValue",a._rangeStart())("endValue",a._rangeEnd())("comparisonStart",a._comparisonRangeStart())("comparisonEnd",a._comparisonRangeEnd())("previewStart",a._previewStart())("previewEnd",a._previewEnd())("isRange",a._isRange())("labelMinRequiredCells",3)("activeCell",a._dateAdapter.getDate(a.activeDate)-1)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName))},dependencies:[$a],encapsulation:2,changeDetection:0})}return n})(),jt=24,um=4,yg=(()=>{class n{_changeDetectorRef=l(_e);_dateAdapter=l(vt,{optional:!0});_dir=l(Ve,{optional:!0});_rerenderSubscription=Se.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),Sg(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof nn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new N;yearSelected=new N;activeDateChange=new N;_matCalendarBody;_years=_([]);_todayYear=_(0);_selectedYear=_(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(it(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-lo(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),a=[];for(let r=0,o=[];r<jt;r++)o.push(t+r),o.length==um&&(a.push(o.map(s=>this._createCellForYear(s))),o=[]);this._years.set(a),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,a=this._dateAdapter.createDate(t,0,1),r=this._getDateFromYear(t);this.yearSelected.emit(a),this.selectedChange.emit(r)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-um);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,um);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-lo(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,jt-lo(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-jt*10:-jt);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?jt*10:jt);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return lo(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),a=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),a=this._dateAdapter.getYearName(t),r=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new co(e,a,a,this._shouldEnableYear(e),r)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let a=t;this._dateAdapter.getYear(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof nn){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-multi-year-view"]],viewQuery:function(t,a){if(t&1&&ye($a,5),t&2){let r;V(r=z())&&(a._matCalendarBody=r.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),P(3,"th",2),c()(),d(4,"tbody",3),D("selectedValueChange",function(o){return a._yearSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),c()()),t&2&&(h(4),F("rows",a._years())("todayValue",a._todayYear())("startValue",a._selectedYear())("endValue",a._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",a._getActiveCell()))},dependencies:[$a],encapsulation:2,changeDetection:0})}return n})();function Sg(n,i,e,t,a){let r=n.getYear(i),o=n.getYear(e),s=Mg(n,t,a);return Math.floor((r-s)/jt)===Math.floor((o-s)/jt)}function lo(n,i,e,t){let a=n.getYear(i);return WC(a-Mg(n,e,t),jt)}function Mg(n,i,e){let t=0;return e?t=n.getYear(e)-jt+1:i&&(t=n.getYear(i)),t}function WC(n,i){return(n%i+i)%i}var Cg=(()=>{class n{_changeDetectorRef=l(_e);_dateFormats=l(wi,{optional:!0});_dateAdapter=l(vt,{optional:!0});_dir=l(Ve,{optional:!0});_rerenderSubscription=Se.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(a,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof nn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new N;monthSelected=new N;activeDateChange=new N;_matCalendarBody;_months=_([]);_yearLabel=_("");_todayMonth=_(null);_selectedMonth=_(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(it(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(a);let r=this._getDateFromMonth(t);this.selectedChange.emit(r)}_updateActiveDate(e){let t=e.value,a=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,a=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,a?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(a=>this._createCellForMonth(a,e[a])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),a))}_createCellForMonth(e,t){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.format(a,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(a,"year"):void 0;return new co(e,t.toLocaleUpperCase(),r,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(t,e,1);for(let r=a;this._dateAdapter.getMonth(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let a=this._dateAdapter.getYear(this.maxDate),r=this._dateAdapter.getMonth(this.maxDate);return e>a||e===a&&t>r}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let a=this._dateAdapter.getYear(this.minDate),r=this._dateAdapter.getMonth(this.minDate);return e<a||e===a&&t<r}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof nn?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-year-view"]],viewQuery:function(t,a){if(t&1&&ye($a,5),t&2){let r;V(r=z())&&(a._matCalendarBody=r.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,a){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),P(3,"th",2),c()(),d(4,"tbody",3),D("selectedValueChange",function(o){return a._monthSelected(o)})("activeDateChange",function(o){return a._updateActiveDate(o)})("keyup",function(o){return a._handleCalendarBodyKeyup(o)})("keydown",function(o){return a._handleCalendarBodyKeydown(o)}),c()()),t&2&&(h(4),F("label",a._yearLabel())("rows",a._months())("todayValue",a._todayMonth())("startValue",a._selectedMonth())("endValue",a._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",a._dateAdapter.getMonth(a.activeDate)))},dependencies:[$a],encapsulation:2,changeDetection:0})}return n})(),Ag=(()=>{class n{_intl=l(Ga);calendar=l(hm);_dateAdapter=l(vt,{optional:!0});_dateFormats=l(wi,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){l(Le).load(On);let e=l(_e);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-jt))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:jt))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,a=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=a.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=a.getYearName(e.activeDate),this._periodButtonDescription=a.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):Sg(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-lo(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),a=t+jt-1,r=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1));return[r,o]}_periodButtonLabelId=l(Oe).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:TC,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,a){t&1&&(fe(),d(0,"div",0)(1,"div",1)(2,"span",2),m(3),c(),d(4,"button",3),D("click",function(){return a.currentPeriodClicked()}),d(5,"span",4),m(6),c(),pt(),d(7,"svg",5),P(8,"polygon",6),c()(),la(),P(9,"div",7),$(10),d(11,"button",8),D("click",function(){return a.previousClicked()}),pt(),d(12,"svg",9),P(13,"path",10),c()(),la(),d(14,"button",11),D("click",function(){return a.nextClicked()}),pt(),d(15,"svg",9),P(16,"path",12),c()()()()),t&2&&(h(2),F("id",a._periodButtonLabelId),h(),S(a.periodButtonDescription),h(),Y("aria-label",a.periodButtonLabel)("aria-describedby",a._periodButtonLabelId),h(2),S(a.periodButtonText),h(),R("mat-calendar-invert",a.calendar.currentView!=="month"),h(4),F("disabled",!a.previousEnabled())("matTooltip",a.prevButtonLabel),Y("aria-label",a.prevButtonLabel),h(3),F("disabled",!a.nextEnabled())("matTooltip",a.nextButtonLabel),Y("aria-label",a.nextButtonLabel))},dependencies:[Et,Zt,ei],encapsulation:2,changeDetection:0})}return n})(),hm=(()=>{class n{_dateAdapter=l(vt,{optional:!0});_dateFormats=l(wi,{optional:!0});_changeDetectorRef=l(_e);_elementRef=l(L);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof nn?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new N;yearSelected=new N;monthSelected=new N;viewChanged=new N(!0);_userSelection=new N;_userDragDrop=new N;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new T;constructor(){this._intlChanges=l(Ga).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Ot(this.headerComponent||Ag),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,a=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,r=t||a||e.dateFilter;if(r&&!r.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(un())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof nn||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-calendar"]],viewQuery:function(t,a){if(t&1&&ye(vg,5)(Cg,5)(yg,5),t&2){let r;V(r=z())&&(a.monthView=r.first),V(r=z())&&(a.yearView=r.first),V(r=z())&&(a.multiYearView=r.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[ce([kg]),de],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,a){if(t&1&&(Ae(0,OC,0,0,"ng-template",0),d(1,"div",1),A(2,FC,1,11,"mat-month-view",2)(3,PC,1,6,"mat-year-view",3)(4,LC,1,6,"mat-multi-year-view",3),c()),t&2){let r;F("cdkPortalOutlet",a._calendarHeaderPortal),h(2),I((r=a.currentView)==="month"?2:r==="year"?3:r==="multi-year"?4:-1)}},dependencies:[Jt,kd,vg,Cg,yg],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})(),YC=new b("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(q);return()=>Nn(n)}}),Ig=(()=>{class n{_elementRef=l(L);_animationsDisabled=Te();_changeDetectorRef=l(_e);_globalModel=l(mo);_dateAdapter=l(vt);_ngZone=l(W);_rangeSelectionStrategy=l(Eg,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new T;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(l(Le).load(On),this._closeButtonText=l(Ga).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=l(De);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,a=e.value,r=t instanceof nn;if(r&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(a,t,e.event);this._model.updateSelection(o,this)}else a&&(r||!this._dateAdapter.sameDate(a,t))&&this._model.add(a);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-datepicker-content"]],viewQuery:function(t,a){if(t&1&&ye(hm,5),t&2){let r;V(r=z())&&(a._calendar=r.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,a){t&2&&(Be(a.color?"mat-"+a.color:""),R("mat-datepicker-content-touch",a.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!a._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,a){t&1&&(d(0,"div",0)(1,"mat-calendar",1),D("yearSelected",function(o){return a.datepicker._selectYear(o)})("monthSelected",function(o){return a.datepicker._selectMonth(o)})("viewChanged",function(o){return a.datepicker._viewChanged(o)})("_userSelection",function(o){return a._handleUserSelection(o)})("_userDragDrop",function(o){return a._handleUserDragDrop(o)}),c(),Ae(2,NC,0,0,"ng-template",2),d(3,"button",3),D("focus",function(){return a._closeButtonFocused=!0})("blur",function(){return a._closeButtonFocused=!1})("click",function(){return a.datepicker.close()}),m(4),c()()),t&2&&(R("mat-datepicker-content-container-with-custom-header",a.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",a._actionsPortal),Y("aria-modal",!0)("aria-labelledby",a._dialogLabelId??void 0),h(),Be(a.datepicker.panelClass),F("id",a.datepicker.id)("startAt",a.datepicker.startAt)("startView",a.datepicker.startView)("minDate",a.datepicker._getMinDate())("maxDate",a.datepicker._getMaxDate())("dateFilter",a.datepicker._getDateFilter())("headerComponent",a.datepicker.calendarHeaderComponent)("selected",a._getSelected())("dateClass",a.datepicker.dateClass)("comparisonStart",a.comparisonStart)("comparisonEnd",a.comparisonEnd)("startDateAccessibleName",a.startDateAccessibleName)("endDateAccessibleName",a.endDateAccessibleName),h(),F("cdkPortalOutlet",a._actionsPortal),h(),R("cdk-visually-hidden",!a._closeButtonFocused),F("color",a.color||"primary"),h(),S(a._closeButtonText))},dependencies:[Md,hm,Jt,Et],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return n})(),wg=(()=>{class n{_injector=l(q);_viewContainerRef=l(Xe);_dateAdapter=l(vt,{optional:!0});_dir=l(Ve,{optional:!0});_model=l(mo);_animationsDisabled=Te();_scrollStrategy=l(YC);_inputStateChanges=Se.EMPTY;_document=l(H);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new N;monthSelected=new N;viewChanged=new N(!0);dateClass;openedStream=new N;closedStream=new N;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=Cp(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=l(Oe).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new T;_changeDetectorRef=l(_e);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;a instanceof Na&&(this._setConnectedPositions(a),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=un(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:a,location:r}=this._componentRef;a._animationDone.pipe(He(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||r.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),a._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new Ot(Ig,this._viewContainerRef),a=this._overlayRef=tn(this._injector,new en({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?vi(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(a).subscribe(r=>{r&&r.preventDefault(),this.close()}),a.keydownEvents().subscribe(r=>{let o=r.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&r.preventDefault()}),this._componentRef=a.attach(t),this._forwardContentValues(this._componentRef.instance),e||Me(()=>{a.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Bn(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=yi(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",a=t==="start"?"end":"start",r=this.yPosition==="above"?"bottom":"top",o=r==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:r},{originX:t,originY:r,overlayX:t,overlayY:o},{originX:a,originY:o,overlayX:a,overlayY:r},{originX:a,originY:r,overlayX:a,overlayY:o}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return At(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(be(a=>a.keyCode===27&&!ze(a)||this.datepickerInput&&ze(a,"altKey")&&a.keyCode===38&&t.every(r=>!ze(a,r)))))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",j],disabled:[2,"disabled","disabled",j],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",j],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",j]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[de]})}return n})(),Rg=(()=>{class n extends wg{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[ce([kg,{provide:wg,useExisting:n}]),te],decls:0,vars:0,template:function(t,a){},encapsulation:2,changeDetection:0})}return n})(),Ua=class{target;targetElement;value=null;constructor(i,e){this.target=i,this.targetElement=e,this.value=this.target.value}},qC=(()=>{class n{_elementRef=l(L);_dateAdapter=l(vt,{optional:!0});_dateFormats=l(wi,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,a=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&a.blur&&a.blur()}_disabled;dateChange=new N;dateInput=new N;stateChanges=new T;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=Se.EMPTY;_localeSubscription=Se.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMinDate();return!a||!t||this._dateAdapter.compareDate(a,t)<=0?null:{matDatepickerMin:{min:a,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),a=this._getMaxDate();return!a||!t||this._dateAdapter.compareDate(a,t)>=0?null:{matDatepickerMax:{max:a,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let a=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(a),this._cvaOnChange(a),this._onTouched(),this._formatValue(a),this.dateInput.emit(new Ua(this,this._elementRef.nativeElement)),this.dateChange.emit(new Ua(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){KC(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];ze(e,"altKey")&&e.keyCode===40&&t.every(r=>!ze(e,r))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,a=this._lastValueValid,r=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(r),r=this._dateAdapter.getValidDateOrNull(r);let o=!this._dateAdapter.sameDate(r,this.value);!r||o?this._cvaOnChange(r):(t&&!this.value&&this._cvaOnChange(r),a!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(r),this.dateInput.emit(new Ua(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new Ua(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,inputs:{value:"value",disabled:[2,"disabled","disabled",j]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[de]})}return n})();function KC(n,i){let e=Object.keys(n);for(let t of e){let{previousValue:a,currentValue:r}=n[t];if(i.isDateInstance(a)&&i.isDateInstance(r)){if(!i.sameDate(a,r))return!0}else return!0}return!1}var QC={provide:fi,useExisting:ht(()=>fl),multi:!0},XC={provide:gi,useExisting:ht(()=>fl),multi:!0},fl=(()=>{class n extends qC{_formField=l(Ki,{optional:!0});_closedSubscription=Se.EMPTY;_openedSubscription=Se.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=_(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=ke.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,a){t&1&&D("input",function(o){return a._onInput(o)})("change",function(){return a._onChange()})("blur",function(){return a._onBlur()})("keydown",function(o){return a._onKeydown(o)}),t&2&&(Ze("disabled",a.disabled),Y("aria-haspopup",a._datepicker?"dialog":null)("aria-owns",a._ariaOwns())("min",a.min?a._dateAdapter.toIso8601(a.min):null)("max",a.max?a._dateAdapter.toIso8601(a.max):null)("data-mat-calendar",a._datepicker?a._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[ce([QC,XC,{provide:Gs,useExisting:n}]),te]})}return n})(),ZC=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","matDatepickerToggleIcon",""]]})}return n})(),pm=(()=>{class n{_intl=l(Ga);_changeDetectorRef=l(_e);_stateChanges=Se.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=l(new Yt("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:U(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:U(),a=this.datepicker?At(this.datepicker.openedStream,this.datepicker.closedStream):U();this._stateChanges.unsubscribe(),this._stateChanges=At(this._intl.changes,e,t,a).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,a,r){if(t&1&&Je(r,ZC,5),t&2){let o;V(o=z())&&(a._customIcon=o.first)}},viewQuery:function(t,a){if(t&1&&ye(BC,5),t&2){let r;V(r=z())&&(a._button=r.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,a){t&1&&D("click",function(o){return a._open(o)}),t&2&&(Y("tabindex",null)("data-mat-calendar",a.datepicker?a.datepicker.id:null),R("mat-datepicker-toggle-active",a.datepicker&&a.datepicker.opened)("mat-accent",a.datepicker&&a.datepicker.color==="accent")("mat-warn",a.datepicker&&a.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",j],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[de],ngContentSelectors:zC,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,a){t&1&&(fe(VC),d(0,"button",1,0),A(2,jC,2,0,":svg:svg",2),$(3),c()),t&2&&(F("tabIndex",a.disabled?-1:a.tabIndex)("disabled",a.disabled)("disableRipple",a.disableRipple),Y("aria-haspopup",a.datepicker?"dialog":null)("aria-label",a.ariaLabel||a._intl.openCalendarLabel)("aria-expanded",a.datepicker?a.datepicker.opened:null),h(2),I(a._customIcon?-1:2))},dependencies:[Zt],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Tg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({providers:[Ga],imports:[Pa,St,Qn,zt,Ig,pm,Ag,K,fn]})}return n})();var Og=(()=>{class n{_animationsDisabled=Te();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,a){t&2&&R("mat-pseudo-checkbox-indeterminate",a.state==="indeterminate")("mat-pseudo-checkbox-checked",a.state==="checked")("mat-pseudo-checkbox-disabled",a.disabled)("mat-pseudo-checkbox-minimal",a.appearance==="minimal")("mat-pseudo-checkbox-full",a.appearance==="full")("_mat-animation-noopable",a._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,a){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var ew=["text"],tw=[[["mat-icon"]],"*"],nw=["mat-icon","*"];function iw(n,i){if(n&1&&P(0,"mat-pseudo-checkbox",1),n&2){let e=C();F("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function aw(n,i){if(n&1&&P(0,"mat-pseudo-checkbox",3),n&2){let e=C();F("disabled",e.disabled)}}function rw(n,i){if(n&1&&(d(0,"span",4),m(1),c()),n&2){let e=C();h(),ne("(",e.group.label,")")}}var gm=new b("MAT_OPTION_PARENT_COMPONENT"),_m=new b("MatOptgroup");var fm=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},Vn=(()=>{class n{_element=l(L);_changeDetectorRef=l(_e);_parent=l(gm,{optional:!0});group=l(_m,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(Oe).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=_(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new N;_text;_stateChanges=new T;constructor(){let e=l(Le);e.load(Fn),e.load(On),this._signalDisableRipple=!!this._parent&&di(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let a=this._getHostElement();typeof a.focus=="function"&&a.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!ze(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new fm(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-option"]],viewQuery:function(t,a){if(t&1&&ye(ew,7),t&2){let r;V(r=z())&&(a._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,a){t&1&&D("click",function(){return a._selectViaInteraction()})("keydown",function(o){return a._handleKeydown(o)}),t&2&&(Ze("id",a.id),Y("aria-selected",a.selected)("aria-disabled",a.disabled.toString()),R("mdc-list-item--selected",a.selected)("mat-mdc-option-multiple",a.multiple)("mat-mdc-option-active",a.active)("mdc-list-item--disabled",a.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",j]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:nw,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,a){t&1&&(fe(tw),A(0,iw,1,2,"mat-pseudo-checkbox",1),$(1),d(2,"span",2,0),$(4,1),c(),A(5,aw,1,1,"mat-pseudo-checkbox",3),A(6,rw,2,1,"span",4),P(7,"div",5)),t&2&&(I(a.multiple?0:-1),h(5),I(!a.multiple&&a.selected&&!a.hideSingleSelectionIndicator?5:-1),h(),I(a.group&&a.group._inert?6:-1),h(),F("matRippleTrigger",a._getHostElement())("matRippleDisabled",a.disabled||a.disableRipple))},dependencies:[Og,Ks],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function Fg(n,i,e){if(e.length){let t=i.toArray(),a=e.toArray(),r=0;for(let o=0;o<n+1;o++)t[o].group&&t[o].group===a[r]&&r++;return r}return 0}function Pg(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var gl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[K]})}return n})();var bm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[Pn,gl,Vn,K]})}return n})();var ow=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,sw=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function vm(n,i){let e=Array(n);for(let t=0;t<n;t++)e[t]=i(t);return e}var lw=(()=>{class n extends vt{_matDateLocale=l(rm,{optional:!0});constructor(){super();let e=l(rm,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return vm(12,a=>this._format(t,new Date(2017,a,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return vm(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return vm(7,a=>this._format(t,new Date(2017,0,a+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,a){let r=this._createDateWithOverflow(e,t,a);return r.getMonth()!=t,r}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let a=new Intl.DateTimeFormat(this.locale,me(v({},t),{timeZone:"utc"}));return this._format(a,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let a=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(a)!=((this.getMonth(e)+t)%12+12)%12&&(a=this._createDateWithOverflow(this.getYear(a),this.getMonth(a),0)),a}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(ow.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,a,r){let o=this.clone(e);return o.setHours(t,a,r,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let a=e.trim();if(a.length===0)return null;let r=this._parseTimeString(a);if(r===null){let o=a.replace(/[^0-9:(AM|PM)]/gi,"").trim();o.length>0&&(r=this._parseTimeString(o))}return r||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,a){let r=new Date;return r.setFullYear(e,t,a),r.setHours(0,0,0,0),r}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let a=new Date;return a.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),a.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(a)}_parseTimeString(e){let t=e.toUpperCase().match(sw);if(t){let a=parseInt(t[1]),r=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),s=t[4];if(a===12?a=s==="AM"?0:a:s==="PM"&&(a+=12),ym(a,0,23)&&ym(r,0,59)&&(o==null||ym(o,0,59)))return this.setTime(this.today(),a,r,o||0)}return null}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})();function ym(n,i,e){return!isNaN(n)&&n>=i&&n<=e}var cw={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var Lg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({providers:[dw()]})}return n})();function dw(n=cw){return[{provide:vt,useClass:lw},{provide:wi,useValue:n}]}var mw=["trigger"],uw=["panel"],hw=[[["mat-select-trigger"]],"*"],pw=["mat-select-trigger","*"];function fw(n,i){if(n&1&&(d(0,"span",4),m(1),c()),n&2){let e=C();h(),S(e.placeholder)}}function gw(n,i){n&1&&$(0)}function _w(n,i){if(n&1&&(d(0,"span",11),m(1),c()),n&2){let e=C(2);h(),S(e.triggerValue)}}function bw(n,i){if(n&1&&(d(0,"span",5),A(1,gw,1,0)(2,_w,2,1,"span",11),c()),n&2){let e=C();h(),I(e.customTrigger?1:2)}}function vw(n,i){if(n&1){let e=pe();d(0,"div",12,1),D("keydown",function(a){J(e);let r=C();return ee(r._handleKeydown(a))}),$(2,1),c()}if(n&2){let e=C();Be(e.panelClass),R("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),Y("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var yw=new b("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(q);return()=>Nn(n)}}),Cw=new b("MAT_SELECT_CONFIG"),ww=new b("MatSelectTrigger"),Cm=class{source;value;constructor(i,e){this.source=i,this.value=e}},Wa=(()=>{class n{_viewportRuler=l(gn);_changeDetectorRef=l(_e);_elementRef=l(L);_dir=l(Ve,{optional:!0});_idGenerator=l(Oe);_renderer=l(De);_parentFormField=l(Ki,{optional:!0});ngControl=l(Sn,{self:!0,optional:!0});_liveAnnouncer=l(Wr);_defaultOptions=l(Cw,{optional:!0});_animationsDisabled=Te();_popoverLocation;_initialized=new T;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let a=this.panel.nativeElement,r=Fg(e,this.options,this.optionGroups),o=t._getHostElement();e===0&&r===1?a.scrollTop=0:a.scrollTop=Pg(o.offsetTop,o.offsetHeight,a.scrollTop,a.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Cm(this,e)}_scrollStrategyFactory=l(yw);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new T;_errorStateTracker;stateChanges=new T;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=_(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(ke.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=wn(()=>{let e=this.options;return e?e.changes.pipe(it(e),Ge(()=>At(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ge(()=>this.optionSelectionChanges))});openedChange=new N;_openedStream=this.openedChange.pipe(be(e=>e),ae(()=>{}));_closedStream=this.openedChange.pipe(be(e=>!e),ae(()=>{}));selectionChange=new N;valueChange=new N;constructor(){let e=l(Ta),t=l(ya,{optional:!0}),a=l(bt,{optional:!0}),r=l(new Yt("tabindex"),{optional:!0}),o=l(io,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Oa(e,this.ngControl,a,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=o?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new so(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ge(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ge(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(it(null),ge(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let a=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?a.setAttribute("aria-labelledby",e):a.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(He(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&$s(this._trackedModal,"aria-owns",t),Td(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;$s(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(a),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),a=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,a=t===40||t===38||t===37||t===39,r=t===13||t===32,o=this._keyManager;if(!o.isTyping()&&r&&!ze(e)||(this.multiple||e.altKey)&&a)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;o.onKeydown(e);let u=this.selected;u&&s!==u&&this._liveAnnouncer.announce(u.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,a=e.keyCode,r=a===40||a===38,o=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!o&&(a===13||a===32)&&t.activeItem&&!ze(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!o&&this._multiple&&a===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(u=>!u.disabled&&!u.selected);this.options.forEach(u=>{u.disabled||(s?u.select():u.deselect())})}else{let s=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==s&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!ze(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(a=>{if(this._selectionModel.isSelected(a))return!1;try{return(a.value!=null||this.canSelectNullableOptions)&&this._compareWith(a.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Ba?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Kr(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=At(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ge(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),At(...this.options.map(t=>t._stateChanges)).pipe(ge(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let a=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(a!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),a!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,a)=>this.sortComparator?this.sortComparator(t,a,e):e.indexOf(t)-e.indexOf(a)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(a=>a.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=ut(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-select"]],contentQueries:function(t,a,r){if(t&1&&Je(r,ww,5)(r,Vn,5)(r,_m,5),t&2){let o;V(o=z())&&(a.customTrigger=o.first),V(o=z())&&(a.options=o),V(o=z())&&(a.optionGroups=o)}},viewQuery:function(t,a){if(t&1&&ye(mw,5)(uw,5)(ol,5),t&2){let r;V(r=z())&&(a.trigger=r.first),V(r=z())&&(a.panel=r.first),V(r=z())&&(a._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,a){t&1&&D("keydown",function(o){return a._handleKeydown(o)})("focus",function(){return a._onFocus()})("blur",function(){return a._onBlur()}),t&2&&(Y("id",a.id)("tabindex",a.disabled?-1:a.tabIndex)("aria-controls",a.panelOpen?a.id+"-panel":null)("aria-expanded",a.panelOpen)("aria-label",a.ariaLabel||null)("aria-required",a.required.toString())("aria-disabled",a.disabled.toString())("aria-invalid",a.errorState)("aria-activedescendant",a._getAriaActiveDescendant()),R("mat-mdc-select-disabled",a.disabled)("mat-mdc-select-invalid",a.errorState)("mat-mdc-select-required",a.required)("mat-mdc-select-empty",a.empty)("mat-mdc-select-multiple",a.multiple)("mat-select-open",a.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",j],disableRipple:[2,"disableRipple","disableRipple",j],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Nt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",j],placeholder:"placeholder",required:[2,"required","required",j],multiple:[2,"multiple","multiple",j],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",j],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Nt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",j]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ce([{provide:Ra,useExisting:n},{provide:gm,useExisting:n}]),de],ngContentSelectors:pw,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,a){if(t&1&&(fe(hw),d(0,"div",2,0),D("click",function(){return a.open()}),d(3,"div",3),A(4,fw,2,1,"span",4)(5,bw,3,1,"span",5),c(),d(6,"div",6)(7,"div",7),pt(),d(8,"svg",8),P(9,"path",9),c()()()(),Ae(10,vw,3,16,"ng-template",10),D("detach",function(){return a.close()})("backdropClick",function(){return a.close()})("overlayKeydown",function(o){return a._handleOverlayKeydown(o)})),t&2){let r=ft(1);h(3),Y("id",a._valueId),h(),I(a.empty?4:5),h(6),F("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",a._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",a._scrollStrategy)("cdkConnectedOverlayOrigin",a._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",a._positions)("cdkConnectedOverlayWidth",a._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",a._popoverLocation)}},dependencies:[Ba,ol],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  border-radius: 4px;
  box-sizing: border-box;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transform-origin: top center;
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: bottom center;
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var Ng=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[St,bm,K,fn,Qr,bm]})}return n})();var Bg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({})}return n})();var Vg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[Bg,zt,K]})}return n})();var _l=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[K]})}return n})();var xw=["*"],Dw=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,kw=["unscopedContent"],Ew=["text"],Sw=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Mw=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Aw=new b("ListOption"),uo=(()=>{class n{_elementRef=l(L);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),ho=(()=>{class n{_elementRef=l(L);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),po=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),zg=(()=>{class n{_listOption=l(Aw,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,hostVars:4,hostBindings:function(t,a){t&2&&R("mdc-list-item__start",a._isAlignedAtStart())("mdc-list-item__end",!a._isAlignedAtStart())}})}return n})(),Iw=(()=>{class n extends zg{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275dir=w({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[te]})}return n})(),fo=(()=>{class n extends zg{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275dir=w({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[te]})}return n})(),Rw=new b("MAT_LIST_CONFIG"),xm=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=kt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(kt(e))}_disabled=_(!1);_defaultOptions=l(Rw,{optional:!0});static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,hostVars:1,hostBindings:function(t,a){t&2&&Y("aria-disabled",a.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),Tw=(()=>{class n{_elementRef=l(L);_ngZone=l(W);_listBase=l(xm,{optional:!0});_platform=l(oe);_hostElement;_isButtonElement;_noopAnimations=Te();_avatars;_icons;set lines(e){this._explicitLines=Vt(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=kt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(kt(e))}_disabled=_(!1);_subscriptions=new Se;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){l(Le).load(Fn);let e=l(Zr,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Qi(this,this._ngZone,this._hostElement,this._platform,l(q)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(At(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let t=this._explicitLines??this._inferLinesFromContent(),a=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",t<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",t===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",t===3),this._hasUnscopedTextContent){let r=this._titles.length===0&&t===1;a.classList.toggle("mdc-list-item__primary-text",r),a.classList.toggle("mdc-list-item__secondary-text",!r)}else a.classList.remove("mdc-list-item__primary-text"),a.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,contentQueries:function(t,a,r){if(t&1&&Je(r,Iw,4)(r,fo,4),t&2){let o;V(o=z())&&(a._avatars=o),V(o=z())&&(a._icons=o)}},hostVars:4,hostBindings:function(t,a){t&2&&(Y("aria-disabled",a.disabled)("disabled",a._isButtonElement&&a.disabled||null),R("mdc-list-item--disabled",a.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var bl=(()=>{class n extends xm{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[ce([{provide:xm,useExisting:n}]),te],ngContentSelectors:xw,decls:1,vars:0,template:function(t,a){t&1&&(fe(),$(0))},styles:[Dw],encapsulation:2,changeDetection:0})}return n})(),vl=(()=>{class n extends Tw{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=kt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(t,a,r){if(t&1&&Je(r,ho,5)(r,uo,5)(r,po,5),t&2){let o;V(o=z())&&(a._lines=o),V(o=z())&&(a._titles=o),V(o=z())&&(a._meta=o)}},viewQuery:function(t,a){if(t&1&&ye(kw,5)(Ew,5),t&2){let r;V(r=z())&&(a._unscopedContent=r.first),V(r=z())&&(a._itemText=r.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(t,a){t&2&&(Y("aria-current",a._getAriaCurrent()),R("mdc-list-item--activated",a.activated)("mdc-list-item--with-leading-avatar",a._avatars.length!==0)("mdc-list-item--with-leading-icon",a._icons.length!==0)("mdc-list-item--with-trailing-meta",a._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",a._hasBothLeadingAndTrailing())("_mat-animation-noopable",a._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[te],ngContentSelectors:Mw,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(t,a){t&1&&(fe(Sw),$(0),d(1,"span",1),$(2,1),$(3,2),d(4,"span",2,0),D("cdkObserveContent",function(){return a._updateItemLines(!0)}),$(6,3),c()(),$(7,4),$(8,5),P(9,"div",3))},dependencies:[Bp],encapsulation:2,changeDetection:0})}return n})();var jg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[Aa,Pn,gl,K,_l]})}return n})();var Ow=["determinateSpinner"];function Fw(n,i){if(n&1&&(pt(),d(0,"svg",11),P(1,"circle",12),c()),n&2){let e=C();Y("viewBox",e._viewBox()),h(),ot("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),Y("r",e._circleRadius())}}var Pw=new b("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Ug})}),Ug=100,Lw=10,st=(()=>{class n{_elementRef=l(L);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=l(Pw),t=Pd(),a=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=a.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&a.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Ug;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Lw)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,a){if(t&1&&ye(Ow,5),t&2){let r;V(r=z())&&(a._determinateCircle=r.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,a){t&2&&(Y("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",a.mode==="determinate"?a.value:null)("mode",a.mode),Be("mat-"+a.color),ot("width",a.diameter,"px")("height",a.diameter,"px")("--mat-progress-spinner-size",a.diameter+"px")("--mat-progress-spinner-active-indicator-width",a.diameter+"px"),R("_mat-animation-noopable",a._noopAnimations)("mdc-circular-progress--indeterminate",a.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Nt],diameter:[2,"diameter","diameter",Nt],strokeWidth:[2,"strokeWidth","strokeWidth",Nt]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,a){if(t&1&&(Ae(0,Fw,2,8,"ng-template",null,0,gr),d(2,"div",2,1),pt(),d(4,"svg",3),P(5,"circle",4),c()(),la(),d(6,"div",5)(7,"div",6)(8,"div",7),rt(9,8),c(),d(10,"div",9),rt(11,8),c(),d(12,"div",10),rt(13,8),c()()()),t&2){let r=ft(1);h(4),Y("viewBox",a._viewBox()),h(),ot("stroke-dasharray",a._strokeCircumference(),"px")("stroke-dashoffset",a._strokeDashOffset(),"px")("stroke-width",a._circleStrokeWidth(),"%"),Y("r",a._circleRadius()),h(4),F("ngTemplateOutlet",r),h(2),F("ngTemplateOutlet",r),h(2),F("ngTemplateOutlet",r)}},dependencies:[Dr],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var $g=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[K]})}return n})();var Gg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[K]})}return n})();var Wg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[K]})}return n})();var Nw=new b("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var Yg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({providers:[Ta,{provide:Nw,useValue:{separatorKeyCodes:[13]}}],imports:[Pn,K]})}return n})();var qg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[Qn,St,K,fn]})}return n})();var Kg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[Pn,St,K,fn]})}return n})();var Qg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[Qn,K]})}return n})();function Bw(n,i){}var xi=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Em=(()=>{class n extends bi{_elementRef=l(L);_focusTrapFactory=l(Ns);_config;_interactivityChecker=l(Ls);_ngZone=l(W);_focusMonitor=l(Tn);_renderer=l(De);_changeDetectorRef=l(_e);_injector=l(q);_platform=l(oe);_document=l(H);_portalOutlet;_focusTrapped=new T;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=l(xi,{optional:!0})||new xi,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{r(),o(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",a),o=this._renderer.listen(e,"mousedown",a)})),e.focus(t)}_focusByCssSelector(e,t){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,t)}_trapFocus(e){this._isDestroyed||Me(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let a=un(),r=this._elementRef.nativeElement;(!a||a===this._document.body||a===r||r.contains(a))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=un();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=un()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,a){if(t&1&&ye(Jt,7),t&2){let r;V(r=z())&&(a._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,a){t&2&&Y("id",a._config.id||null)("role",a._config.role)("aria-modal",a._config.ariaModal)("aria-labelledby",a._config.ariaLabel?null:a._ariaLabelledByQueue[0])("aria-label",a._config.ariaLabel)("aria-describedby",a._config.ariaDescribedBy||null)},features:[te],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,a){t&1&&Ae(0,Bw,0,0,"ng-template",0)},dependencies:[Jt],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),go=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new T;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!ze(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",e=""){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}},Vw=new b("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=l(q);return()=>vi(n)}}),zw=new b("DialogData"),jw=new b("DefaultDialogConfig");function Hw(n){let i=_(n),e=new N;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var Sm=(()=>{class n{_injector=l(q);_defaultOptions=l(jw,{optional:!0});_parentDialog=l(n,{optional:!0,skipSelf:!0});_overlayContainer=l(rl);_idGenerator=l(Oe);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new T;_afterOpenedAtThisLevel=new T;_ariaHiddenElements=new Map;_scrollStrategy=l(Vw);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=wn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(it(void 0)));constructor(){}open(e,t){let a=this._defaultOptions||new xi;t=v(v({},a),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let r=this._getOverlayConfig(t),o=tn(this._injector,r),s=new go(o,t),u=this._attachContainer(o,s,t);if(s.containerInstance=u,!this.openDialogs.length){let p=this._overlayContainer.getContainerElement();u._focusTrapped?u._focusTrapped.pipe(He(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(p)}):this._hideNonDialogContentFromAssistiveTechnology(p)}return this._attachDialogContent(e,s,u,t),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){km(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){km(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),km(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new en({positionStrategy:e.positionStrategy||Bn().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,a){let r=a.injector||a.viewContainerRef?.injector,o=[{provide:xi,useValue:a},{provide:go,useValue:t},{provide:La,useValue:e}],s;a.container?typeof a.container=="function"?s=a.container:(s=a.container.type,o.push(...a.container.providers(a))):s=Em;let u=new Ot(s,a.viewContainerRef,q.create({parent:r||this._injector,providers:o}));return e.attach(u).instance}_attachDialogContent(e,t,a,r){if(e instanceof Qe){let o=this._createInjector(r,t,a,void 0),s={$implicit:r.data,dialogRef:t};r.templateContext&&(s=v(v({},s),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),a.attachTemplatePortal(new _n(e,null,s,o))}else{let o=this._createInjector(r,t,a,this._injector),s=a.attachComponentPortal(new Ot(e,r.viewContainerRef,o));t.componentRef=s,t.componentInstance=s.instance}}_createInjector(e,t,a,r){let o=e.injector||e.viewContainerRef?.injector,s=[{provide:zw,useValue:e.data},{provide:go,useValue:t}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(t,e,a)):s.push(...e.providers)),e.direction&&(!o||!o.get(Ve,null,{optional:!0}))&&s.push({provide:Ve,useValue:Hw(e.direction)}),q.create({parent:o||r,providers:s})}_removeOpenDialog(e,t){let a=this.openDialogs.indexOf(e);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,o)=>{r?o.setAttribute("aria-hidden",r):o.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let a=t.length-1;a>-1;a--){let r=t[a];r!==e&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function km(n,i){let e=n.length;for(;e--;)i(n[e])}var Xg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({providers:[Sm],imports:[St,zt,Qn,zt]})}return n})();function Uw(n,i){}var Cl=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Mm="mdc-dialog--open",Zg="mdc-dialog--opening",Jg="mdc-dialog--closing",$w=150,Gw=75,Ww=(()=>{class n extends Em{_animationStateChanged=new N;_animationsEnabled=!Te();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?t_(this._config.enterAnimationDuration)??$w:0;_exitAnimationDuration=this._animationsEnabled?t_(this._config.exitAnimationDuration)??Gw:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(e_,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Zg,Mm)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Mm),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Mm),this._animationsEnabled?(this._hostElement.style.setProperty(e_,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Jg)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Zg,Jg)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,a){t&2&&(Ze("id",a._config.id),Y("aria-modal",a._config.ariaModal)("role",a._config.role)("aria-labelledby",a._config.ariaLabel?null:a._ariaLabelledByQueue[0])("aria-label",a._config.ariaLabel)("aria-describedby",a._config.ariaDescribedBy||null),R("_mat-animation-noopable",!a._animationsEnabled)("mat-mdc-dialog-container-with-actions",a._actionSectionCount>0))},features:[te],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,a){t&1&&(d(0,"div",0)(1,"div",1),Ae(2,Uw,0,0,"ng-template",2),c()())},dependencies:[Jt],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return n})(),e_="--mat-dialog-transition-duration";function t_(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?Vt(n.substring(0,n.length-2)):n.endsWith("s")?Vt(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var yl=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(yl||{}),_o=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new mc(1);_beforeClosed=new mc(1);_result;_closeFallbackTimeout;_state=yl.OPEN;_closeInteractionType;constructor(i,e,t){this._ref=i,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(be(a=>a.state==="opened"),He(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(be(a=>a.state==="closed"),He(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),At(this.backdropClick(),this.keydownEvents().pipe(be(a=>a.keyCode===27&&!this.disableClose&&!ze(a)))).subscribe(a=>{this.disableClose||(a.preventDefault(),Yw(this,a.type==="keydown"?"keyboard":"mouse"))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(be(t=>t.state==="closing"),He(1)).subscribe(t=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=yl.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",e=""){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=yl.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Yw(n,i,e){return n._closeInteractionType=i,n.close(e)}var Am=new b("MatMdcDialogData"),qw=new b("mat-mdc-dialog-default-options"),Kw=new b("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=l(q);return()=>vi(n)}}),Im=(()=>{class n{_defaultOptions=l(qw,{optional:!0});_scrollStrategy=l(Kw);_parentDialog=l(n,{optional:!0,skipSelf:!0});_idGenerator=l(Oe);_injector=l(q);_dialog=l(Sm);_animationsDisabled=Te();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new T;_afterOpenedAtThisLevel=new T;dialogConfigClass=Cl;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=wn(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(it(void 0)));constructor(){this._dialogRefConstructor=_o,this._dialogContainerType=Ww,this._dialogDataToken=Am}open(e,t){let a;t=v(v({},this._defaultOptions||new Cl),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,me(v({},t),{positionStrategy:Bn(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:xi,useValue:t}]},templateContext:()=>({dialogRef:a}),providers:(o,s,u)=>(a=new this._dialogRefConstructor(o,t,u),a.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:u},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:a}])}));return a.componentRef=r.componentRef,a.componentInstance=r.componentInstance,this.openDialogs.push(a),this.afterOpened.next(a),a.afterClosed().subscribe(()=>{let o=this.openDialogs.indexOf(a);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||this._getAfterAllClosed().next())}),a}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var n_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({providers:[Im],imports:[Xg,St,zt,K]})}return n})();var re="primary",Ao=Symbol("RouteTitle"),Pm=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ta(n){return new Pm(n)}function Rm(n,i,e){for(let t=0;t<n.length;t++){let a=n[t],r=i[t];if(a[0]===":")e[a.substring(1)]=r;else if(a!==r.path)return!1}return!0}function d_(n,i,e){let t=e.path.split("/"),a=t.indexOf("**");if(a===-1){if(t.length>n.length||e.pathMatch==="full"&&(i.hasChildren()||t.length<n.length))return null;let u={},p=n.slice(0,t.length);return Rm(t,p,u)?{consumed:p,posParams:u}:null}if(a!==t.lastIndexOf("**"))return null;let r=t.slice(0,a),o=t.slice(a+1);if(r.length+o.length>n.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!Rm(r,n.slice(0,r.length),s)||!Rm(o,n.slice(n.length-o.length),s)?null:{consumed:n,posParams:s}}function Sl(n){return new Promise((i,e)=>{n.pipe(li()).subscribe({next:t=>i(t),error:t=>e(t)})})}function Xw(n,i){if(n.length!==i.length)return!1;for(let e=0;e<n.length;++e)if(!zn(n[e],i[e]))return!1;return!0}function zn(n,i){let e=n?Lm(n):void 0,t=i?Lm(i):void 0;if(!e||!t||e.length!=t.length)return!1;let a;for(let r=0;r<e.length;r++)if(a=e[r],!m_(n[a],i[a]))return!1;return!0}function Lm(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function m_(n,i){if(Array.isArray(n)&&Array.isArray(i)){if(n.length!==i.length)return!1;let e=[...n].sort(),t=[...i].sort();return e.every((a,r)=>t[r]===a)}else return n===i}function Zw(n){return n.length>0?n[n.length-1]:null}function ia(n){return ra(n)?n:pr(n)?dt(Promise.resolve(n)):U(n)}function u_(n){return ra(n)?Sl(n):Promise.resolve(n)}var Jw={exact:f_,subset:g_},h_={exact:ex,subset:tx,ignored:()=>!0},p_={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Nm={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function i_(n,i,e){return Jw[e.paths](n.root,i.root,e.matrixParams)&&h_[e.queryParams](n.queryParams,i.queryParams)&&!(e.fragment==="exact"&&n.fragment!==i.fragment)}function ex(n,i){return zn(n,i)}function f_(n,i,e){if(!ea(n.segments,i.segments)||!Dl(n.segments,i.segments,e)||n.numberOfChildren!==i.numberOfChildren)return!1;for(let t in i.children)if(!n.children[t]||!f_(n.children[t],i.children[t],e))return!1;return!0}function tx(n,i){return Object.keys(i).length<=Object.keys(n).length&&Object.keys(i).every(e=>m_(n[e],i[e]))}function g_(n,i,e){return __(n,i,i.segments,e)}function __(n,i,e,t){if(n.segments.length>e.length){let a=n.segments.slice(0,e.length);return!(!ea(a,e)||i.hasChildren()||!Dl(a,e,t))}else if(n.segments.length===e.length){if(!ea(n.segments,e)||!Dl(n.segments,e,t))return!1;for(let a in i.children)if(!n.children[a]||!g_(n.children[a],i.children[a],t))return!1;return!0}else{let a=e.slice(0,n.segments.length),r=e.slice(n.segments.length);return!ea(n.segments,a)||!Dl(n.segments,a,t)||!n.children[re]?!1:__(n.children[re],i,r,t)}}function Dl(n,i,e){return i.every((t,a)=>h_[e](n[a].parameters,t.parameters))}var $t=class{root;queryParams;fragment;_queryParamMap;constructor(i=new we([],{}),e={},t=null){this.root=i,this.queryParams=e,this.fragment=t}get queryParamMap(){return this._queryParamMap??=ta(this.queryParams),this._queryParamMap}toString(){return ax.serialize(this)}},we=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(t=>t.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return kl(this)}},Di=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=ta(this.parameters),this._parameterMap}toString(){return v_(this)}};function nx(n,i){return ea(n,i)&&n.every((e,t)=>zn(e.parameters,i[t].parameters))}function ea(n,i){return n.length!==i.length?!1:n.every((e,t)=>e.path===i[t].path)}function ix(n,i){let e=[];return Object.entries(n.children).forEach(([t,a])=>{t===re&&(e=e.concat(i(a,t)))}),Object.entries(n.children).forEach(([t,a])=>{t!==re&&(e=e.concat(i(a,t)))}),e}var Si=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:()=>new ii,providedIn:"root"})}return n})(),ii=class{parse(i){let e=new Vm(i);return new $t(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${bo(i.root,!0)}`,t=sx(i.queryParams),a=typeof i.fragment=="string"?`#${rx(i.fragment)}`:"";return`${e}${t}${a}`}},ax=new ii;function kl(n){return n.segments.map(i=>v_(i)).join("/")}function bo(n,i){if(!n.hasChildren())return kl(n);if(i){let e=n.children[re]?bo(n.children[re],!1):"",t=[];return Object.entries(n.children).forEach(([a,r])=>{a!==re&&t.push(`${a}:${bo(r,!1)}`)}),t.length>0?`${e}(${t.join("//")})`:e}else{let e=ix(n,(t,a)=>a===re?[bo(n.children[re],!1)]:[`${a}:${bo(t,!1)}`]);return Object.keys(n.children).length===1&&n.children[re]!=null?`${kl(n)}/${e[0]}`:`${kl(n)}/(${e.join("//")})`}}function b_(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function wl(n){return b_(n).replace(/%3B/gi,";")}function rx(n){return encodeURI(n)}function Bm(n){return b_(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function El(n){return decodeURIComponent(n)}function a_(n){return El(n.replace(/\+/g,"%20"))}function v_(n){return`${Bm(n.path)}${ox(n.parameters)}`}function ox(n){return Object.entries(n).map(([i,e])=>`;${Bm(i)}=${Bm(e)}`).join("")}function sx(n){let i=Object.entries(n).map(([e,t])=>Array.isArray(t)?t.map(a=>`${wl(e)}=${wl(a)}`).join("&"):`${wl(e)}=${wl(t)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var lx=/^[^\/()?;#]+/;function Tm(n){let i=n.match(lx);return i?i[0]:""}var cx=/^[^\/()?;=#]+/;function dx(n){let i=n.match(cx);return i?i[0]:""}var mx=/^[^=?&#]+/;function ux(n){let i=n.match(mx);return i?i[0]:""}var hx=/^[^&#]+/;function px(n){let i=n.match(hx);return i?i[0]:""}var Vm=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new we([],{}):new we([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new Q(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0,i));let a={};return this.peekStartsWith("(")&&(a=this.parseParens(!1,i)),(e.length>0||Object.keys(t).length>0)&&(a[re]=new we(e,t)),a}parseSegment(){let i=Tm(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new Q(4009,!1);return this.capture(i),new Di(El(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=dx(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let a=Tm(this.remaining);a&&(t=a,this.capture(t))}i[El(e)]=El(t)}parseQueryParam(i){let e=ux(this.remaining);if(!e)return;this.capture(e);let t="";if(this.consumeOptional("=")){let o=px(this.remaining);o&&(t=o,this.capture(t))}let a=a_(e),r=a_(t);if(i.hasOwnProperty(a)){let o=i[a];Array.isArray(o)||(o=[o],i[a]=o),o.push(r)}else i[a]=r}parseParens(i,e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let a=Tm(this.remaining),r=this.remaining[a.length];if(r!=="/"&&r!==")"&&r!==";")throw new Q(4010,!1);let o;a.indexOf(":")>-1?(o=a.slice(0,a.indexOf(":")),this.capture(o),this.capture(":")):i&&(o=re);let s=this.parseChildren(e+1);t[o??re]=Object.keys(s).length===1&&s[re]?s[re]:new we([],s),this.consumeOptional("//")}return t}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new Q(4011,!1)}};function y_(n){return n.segments.length>0?new we([],{[re]:n}):n}function C_(n){let i={};for(let[t,a]of Object.entries(n.children)){let r=C_(a);if(t===re&&r.segments.length===0&&r.hasChildren())for(let[o,s]of Object.entries(r.children))i[o]=s;else(r.segments.length>0||r.hasChildren())&&(i[t]=r)}let e=new we(n.segments,i);return fx(e)}function fx(n){if(n.numberOfChildren===1&&n.children[re]){let i=n.children[re];return new we(n.segments.concat(i.segments),i.children)}return n}function ki(n){return n instanceof $t}function w_(n,i,e=null,t=null,a=new ii){let r=x_(n);return D_(r,i,e,t,a)}function x_(n){let i;function e(r){let o={};for(let u of r.children){let p=e(u);o[u.outlet]=p}let s=new we(r.url,o);return r===n&&(i=s),s}let t=e(n.root),a=y_(t);return i??a}function D_(n,i,e,t,a){let r=n;for(;r.parent;)r=r.parent;if(i.length===0)return Om(r,r,r,e,t,a);let o=gx(i);if(o.toRoot())return Om(r,r,new we([],{}),e,t,a);let s=_x(o,r,n),u=s.processChildren?yo(s.segmentGroup,s.index,o.commands):E_(s.segmentGroup,s.index,o.commands);return Om(r,s.segmentGroup,u,e,t,a)}function Ml(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function wo(n){return typeof n=="object"&&n!=null&&n.outlets}function r_(n,i,e){n||="\u0275";let t=new $t;return t.queryParams={[n]:i},e.parse(e.serialize(t)).queryParams[n]}function Om(n,i,e,t,a,r){let o={};for(let[p,f]of Object.entries(t??{}))o[p]=Array.isArray(f)?f.map(g=>r_(p,g,r)):r_(p,f,r);let s;n===i?s=e:s=k_(n,i,e);let u=y_(C_(s));return new $t(u,o,a)}function k_(n,i,e){let t={};return Object.entries(n.children).forEach(([a,r])=>{r===i?t[a]=e:t[a]=k_(r,i,e)}),new we(n.segments,t)}var Al=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,t){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=t,i&&t.length>0&&Ml(t[0]))throw new Q(4003,!1);let a=t.find(wo);if(a&&a!==Zw(t))throw new Q(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function gx(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Al(!0,0,n);let i=0,e=!1,t=n.reduce((a,r,o)=>{if(typeof r=="object"&&r!=null){if(r.outlets){let s={};return Object.entries(r.outlets).forEach(([u,p])=>{s[u]=typeof p=="string"?p.split("/"):p}),[...a,{outlets:s}]}if(r.segmentPath)return[...a,r.segmentPath]}return typeof r!="string"?[...a,r]:o===0?(r.split("/").forEach((s,u)=>{u==0&&s==="."||(u==0&&s===""?e=!0:s===".."?i++:s!=""&&a.push(s))}),a):[...a,r]},[]);return new Al(e,i,t)}var qa=class{segmentGroup;processChildren;index;constructor(i,e,t){this.segmentGroup=i,this.processChildren=e,this.index=t}};function _x(n,i,e){if(n.isAbsolute)return new qa(i,!0,0);if(!e)return new qa(i,!1,NaN);if(e.parent===null)return new qa(e,!0,0);let t=Ml(n.commands[0])?0:1,a=e.segments.length-1+t;return bx(e,a,n.numberOfDoubleDots)}function bx(n,i,e){let t=n,a=i,r=e;for(;r>a;){if(r-=a,t=t.parent,!t)throw new Q(4005,!1);a=t.segments.length}return new qa(t,!1,a-r)}function vx(n){return wo(n[0])?n[0].outlets:{[re]:n}}function E_(n,i,e){if(n??=new we([],{}),n.segments.length===0&&n.hasChildren())return yo(n,i,e);let t=yx(n,i,e),a=e.slice(t.commandIndex);if(t.match&&t.pathIndex<n.segments.length){let r=new we(n.segments.slice(0,t.pathIndex),{});return r.children[re]=new we(n.segments.slice(t.pathIndex),n.children),yo(r,0,a)}else return t.match&&a.length===0?new we(n.segments,{}):t.match&&!n.hasChildren()?zm(n,i,e):t.match?yo(n,0,a):zm(n,i,e)}function yo(n,i,e){if(e.length===0)return new we(n.segments,{});{let t=vx(e),a={};if(Object.keys(t).some(r=>r!==re)&&n.children[re]&&n.numberOfChildren===1&&n.children[re].segments.length===0){let r=yo(n.children[re],i,e);return new we(n.segments,r.children)}return Object.entries(t).forEach(([r,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(a[r]=E_(n.children[r],i,o))}),Object.entries(n.children).forEach(([r,o])=>{t[r]===void 0&&(a[r]=o)}),new we(n.segments,a)}}function yx(n,i,e){let t=0,a=i,r={match:!1,pathIndex:0,commandIndex:0};for(;a<n.segments.length;){if(t>=e.length)return r;let o=n.segments[a],s=e[t];if(wo(s))break;let u=`${s}`,p=t<e.length-1?e[t+1]:null;if(a>0&&u===void 0)break;if(u&&p&&typeof p=="object"&&p.outlets===void 0){if(!s_(u,p,o))return r;t+=2}else{if(!s_(u,{},o))return r;t++}a++}return{match:!0,pathIndex:a,commandIndex:t}}function zm(n,i,e){let t=n.segments.slice(0,i),a=0;for(;a<e.length;){let r=e[a];if(wo(r)){let u=Cx(r.outlets);return new we(t,u)}if(a===0&&Ml(e[0])){let u=n.segments[i];t.push(new Di(u.path,o_(e[0]))),a++;continue}let o=wo(r)?r.outlets[re]:`${r}`,s=a<e.length-1?e[a+1]:null;o&&s&&Ml(s)?(t.push(new Di(o,o_(s))),a+=2):(t.push(new Di(o,{})),a++)}return new we(t,{})}function Cx(n){let i={};return Object.entries(n).forEach(([e,t])=>{typeof t=="string"&&(t=[t]),t!==null&&(i[e]=zm(new we([],{}),0,t))}),i}function o_(n){let i={};return Object.entries(n).forEach(([e,t])=>i[e]=`${t}`),i}function s_(n,i,e){return n==e.path&&zn(i,e.parameters)}var Ka="imperative",tt=(function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n})(tt||{}),Gt=class{id;url;constructor(i,e){this.id=i,this.url=e}},Ei=class extends Gt{type=tt.NavigationStart;navigationTrigger;restoredState;constructor(i,e,t="imperative",a=null){super(i,e),this.navigationTrigger=t,this.restoredState=a}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},rn=class extends Gt{urlAfterRedirects;type=tt.NavigationEnd;constructor(i,e,t){super(i,e),this.urlAfterRedirects=t}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},yt=(function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n[n.Aborted=4]="Aborted",n})(yt||{}),Xa=(function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n})(Xa||{}),an=class extends Gt{reason;code;type=tt.NavigationCancel;constructor(i,e,t,a){super(i,e),this.reason=t,this.code=a}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function S_(n){return n instanceof an&&(n.code===yt.Redirect||n.code===yt.SupersededByNewNavigation)}var jn=class extends Gt{reason;code;type=tt.NavigationSkipped;constructor(i,e,t,a){super(i,e),this.reason=t,this.code=a}},na=class extends Gt{error;target;type=tt.NavigationError;constructor(i,e,t,a){super(i,e),this.error=t,this.target=a}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},xo=class extends Gt{urlAfterRedirects;state;type=tt.RoutesRecognized;constructor(i,e,t,a){super(i,e),this.urlAfterRedirects=t,this.state=a}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Il=class extends Gt{urlAfterRedirects;state;type=tt.GuardsCheckStart;constructor(i,e,t,a){super(i,e),this.urlAfterRedirects=t,this.state=a}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Rl=class extends Gt{urlAfterRedirects;state;shouldActivate;type=tt.GuardsCheckEnd;constructor(i,e,t,a,r){super(i,e),this.urlAfterRedirects=t,this.state=a,this.shouldActivate=r}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Tl=class extends Gt{urlAfterRedirects;state;type=tt.ResolveStart;constructor(i,e,t,a){super(i,e),this.urlAfterRedirects=t,this.state=a}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ol=class extends Gt{urlAfterRedirects;state;type=tt.ResolveEnd;constructor(i,e,t,a){super(i,e),this.urlAfterRedirects=t,this.state=a}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Fl=class{route;type=tt.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Pl=class{route;type=tt.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ll=class{snapshot;type=tt.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Nl=class{snapshot;type=tt.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Bl=class{snapshot;type=tt.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Vl=class{snapshot;type=tt.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Za=class{routerEvent;position;anchor;scrollBehavior;type=tt.Scroll;constructor(i,e,t,a){this.routerEvent=i,this.position=e,this.anchor=t,this.scrollBehavior=a}toString(){let i=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${i}')`}},Ja=class{},Do=class{},er=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function wx(n){return!(n instanceof Ja)&&!(n instanceof er)&&!(n instanceof Do)}var zl=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new aa(this.rootInjector)}},aa=(()=>{class n{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,t){let a=this.getOrCreateContext(e);a.outlet=t,this.contexts.set(e,a)}onChildOutletDestroyed(e){let t=this.getContext(e);t&&(t.outlet=null,t.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new zl(this.rootInjector),this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(t){return new(t||n)(X(at))};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),jl=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=jm(i,this._root);return e?e.children.map(t=>t.value):[]}firstChild(i){let e=jm(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Hm(i,this._root);return e.length<2?[]:e[e.length-2].children.map(a=>a.value).filter(a=>a!==i)}pathFromRoot(i){return Hm(i,this._root).map(e=>e.value)}};function jm(n,i){if(n===i.value)return i;for(let e of i.children){let t=jm(n,e);if(t)return t}return null}function Hm(n,i){if(n===i.value)return[i];for(let e of i.children){let t=Hm(n,e);if(t.length)return t.unshift(i),t}return[]}var Ut=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ya(n){let i={};return n&&n.children.forEach(e=>i[e.value.outlet]=e),i}var ko=class extends jl{snapshot;constructor(i,e){super(i),this.snapshot=e,Xm(this,i)}toString(){return this.snapshot.toString()}};function M_(n,i){let e=xx(n,i),t=new nt([new Di("",{})]),a=new nt({}),r=new nt({}),o=new nt({}),s=new nt(""),u=new ai(t,a,o,s,r,re,n,e.root);return u.snapshot=e.root,new ko(new Ut(u,[]),e)}function xx(n,i){let e={},t={},a={},o=new tr([],e,a,"",t,re,n,null,{},i);return new Eo("",new Ut(o,[]))}var ai=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,t,a,r,o,s,u){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=t,this.fragmentSubject=a,this.dataSubject=r,this.outlet=o,this.component=s,this._futureSnapshot=u,this.title=this.dataSubject?.pipe(ae(p=>p[Ao]))??U(void 0),this.url=i,this.params=e,this.queryParams=t,this.fragment=a,this.data=r}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ae(i=>ta(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ae(i=>ta(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Qm(n,i,e="emptyOnly"){let t,{routeConfig:a}=n;return i!==null&&(e==="always"||a?.path===""||!i.component&&!i.routeConfig?.loadComponent)?t={params:v(v({},i.params),n.params),data:v(v({},i.data),n.data),resolve:v(v(v(v({},n.data),i.data),a?.data),n._resolvedData)}:t={params:v({},n.params),data:v({},n.data),resolve:v(v({},n.data),n._resolvedData??{})},a&&I_(a)&&(t.resolve[Ao]=a.title),t}var tr=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ao]}constructor(i,e,t,a,r,o,s,u,p,f){this.url=i,this.params=e,this.queryParams=t,this.fragment=a,this.data=r,this.outlet=o,this.component=s,this.routeConfig=u,this._resolve=p,this._environmentInjector=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ta(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ta(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(t=>t.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},Eo=class extends jl{url;constructor(i,e){super(e),this.url=i,Xm(this,e)}toString(){return A_(this._root)}};function Xm(n,i){i.value._routerState=n,i.children.forEach(e=>Xm(n,e))}function A_(n){let i=n.children.length>0?` { ${n.children.map(A_).join(", ")} } `:"";return`${n.value}${i}`}function Fm(n){if(n.snapshot){let i=n.snapshot,e=n._futureSnapshot;n.snapshot=e,zn(i.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),zn(i.params,e.params)||n.paramsSubject.next(e.params),Xw(i.url,e.url)||n.urlSubject.next(e.url),zn(i.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Um(n,i){let e=zn(n.params,i.params)&&nx(n.url,i.url),t=!n.parent!=!i.parent;return e&&!t&&(!n.parent||Um(n.parent,i.parent))}function I_(n){return typeof n.title=="string"||n.title===null}var R_=new b(""),Io=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=re;activateEvents=new N;deactivateEvents=new N;attachEvents=new N;detachEvents=new N;routerOutletData=ju();parentContexts=l(aa);location=l(Xe);changeDetector=l(_e);inputBinder=l(Ro,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:t,previousValue:a}=e.name;if(t)return;this.isTrackedInParentContexts(a)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(a)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Q(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Q(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Q(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new Q(4013,!1);this._activatedRoute=e;let a=this.location,o=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,u=new $m(e,s,a.injector,this.routerOutletData);this.activated=a.createComponent(o,{index:a.length,injector:u,environmentInjector:t}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=w({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[de]})}return n})(),$m=class{route;childContexts;parent;outletData;constructor(i,e,t,a){this.route=i,this.childContexts=e,this.parent=t,this.outletData=a}get(i,e){return i===ai?this.route:i===aa?this.childContexts:i===R_?this.outletData:this.parent.get(i,e)}},Ro=new b(""),Zm=(()=>{class n{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:t}=e,a=Un([t.queryParams,t.params,t.data]).pipe(Ge(([r,o,s],u)=>(s=v(v(v({},r),o),s),u===0?U(s):Promise.resolve(s)))).subscribe(r=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==t||t.component===null){this.unsubscribeFromRouteData(e);return}let o=Yu(t.component);if(!o){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of o.inputs)e.activatedComponentRef.setInput(s,r[s])});this.outletDataSubscriptions.set(e,a)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})(),Jm=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(t,a){t&1&&P(0,"router-outlet")},dependencies:[Io],encapsulation:2})}return n})();function eu(n){let i=n.children&&n.children.map(eu),e=i?me(v({},n),{children:i}):v({},n);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==re&&(e.component=Jm),e}function Dx(n,i,e){let t=So(n,i._root,e?e._root:void 0);return new ko(t,i)}function So(n,i,e){if(e&&n.shouldReuseRoute(i.value,e.value.snapshot)){let t=e.value;t._futureSnapshot=i.value;let a=kx(n,i,e);return new Ut(t,a)}else{if(n.shouldAttach(i.value)){let r=n.retrieve(i.value);if(r!==null){let o=r.route;return o.value._futureSnapshot=i.value,o.children=i.children.map(s=>So(n,s)),o}}let t=Ex(i.value),a=i.children.map(r=>So(n,r));return new Ut(t,a)}}function kx(n,i,e){return i.children.map(t=>{for(let a of e.children)if(n.shouldReuseRoute(t.value,a.value.snapshot))return So(n,t,a);return So(n,t)})}function Ex(n){return new ai(new nt(n.url),new nt(n.params),new nt(n.queryParams),new nt(n.fragment),new nt(n.data),n.outlet,n.component,n)}var nr=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},T_="ngNavigationCancelingError";function Hl(n,i){let{redirectTo:e,navigationBehaviorOptions:t}=ki(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,a=O_(!1,yt.Redirect);return a.url=e,a.navigationBehaviorOptions=t,a}function O_(n,i){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[T_]=!0,e.cancellationCode=i,e}function Sx(n){return F_(n)&&ki(n.url)}function F_(n){return!!n&&n[T_]}var Gm=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,t,a,r){this.routeReuseStrategy=i,this.futureState=e,this.currState=t,this.forwardEvent=a,this.inputBindingEnabled=r}activate(i){let e=this.futureState._root,t=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,t,i),Fm(this.futureState.root),this.activateChildRoutes(e,t,i)}deactivateChildRoutes(i,e,t){let a=Ya(e);i.children.forEach(r=>{let o=r.value.outlet;this.deactivateRoutes(r,a[o],t),delete a[o]}),Object.values(a).forEach(r=>{this.deactivateRouteAndItsChildren(r,t)})}deactivateRoutes(i,e,t){let a=i.value,r=e?e.value:null;if(a===r)if(a.component){let o=t.getContext(a.outlet);o&&this.deactivateChildRoutes(i,e,o.children)}else this.deactivateChildRoutes(i,e,t);else r&&this.deactivateRouteAndItsChildren(e,t)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let t=e.getContext(i.value.outlet),a=t&&i.value.component?t.children:e,r=Ya(i);for(let o of Object.values(r))this.deactivateRouteAndItsChildren(o,a);if(t&&t.outlet){let o=t.outlet.detach(),s=t.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:o,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let t=e.getContext(i.value.outlet),a=t&&i.value.component?t.children:e,r=Ya(i);for(let o of Object.values(r))this.deactivateRouteAndItsChildren(o,a);t&&(t.outlet&&(t.outlet.deactivate(),t.children.onOutletDeactivated()),t.attachRef=null,t.route=null)}activateChildRoutes(i,e,t){let a=Ya(e);i.children.forEach(r=>{this.activateRoutes(r,a[r.value.outlet],t),this.forwardEvent(new Vl(r.value.snapshot))}),i.children.length&&this.forwardEvent(new Nl(i.value.snapshot))}activateRoutes(i,e,t){let a=i.value,r=e?e.value:null;if(Fm(a),a===r)if(a.component){let o=t.getOrCreateContext(a.outlet);this.activateChildRoutes(i,e,o.children)}else this.activateChildRoutes(i,e,t);else if(a.component){let o=t.getOrCreateContext(a.outlet);if(this.routeReuseStrategy.shouldAttach(a.snapshot)){let s=this.routeReuseStrategy.retrieve(a.snapshot);this.routeReuseStrategy.store(a.snapshot,null),o.children.onOutletReAttached(s.contexts),o.attachRef=s.componentRef,o.route=s.route.value,o.outlet&&o.outlet.attach(s.componentRef,s.route.value),Fm(s.route.value),this.activateChildRoutes(i,null,o.children)}else o.attachRef=null,o.route=a,o.outlet&&o.outlet.activateWith(a,o.injector),this.activateChildRoutes(i,null,o.children)}else this.activateChildRoutes(i,null,t)}},Ul=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Qa=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Mx(n,i,e){let t=n._root,a=i?i._root:null;return vo(t,a,e,[t.value])}function Ax(n){let i=n.routeConfig?n.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:n,guards:i}}function ar(n,i){let e=Symbol(),t=i.get(n,e);return t===e?typeof n=="function"&&!fu(n)?n:i.get(n):t}function vo(n,i,e,t,a={canDeactivateChecks:[],canActivateChecks:[]}){let r=Ya(i);return n.children.forEach(o=>{Ix(o,r[o.value.outlet],e,t.concat([o.value]),a),delete r[o.value.outlet]}),Object.entries(r).forEach(([o,s])=>Co(s,e.getContext(o),a)),a}function Ix(n,i,e,t,a={canDeactivateChecks:[],canActivateChecks:[]}){let r=n.value,o=i?i.value:null,s=e?e.getContext(n.value.outlet):null;if(o&&r.routeConfig===o.routeConfig){let u=Rx(o,r,r.routeConfig.runGuardsAndResolvers);u?a.canActivateChecks.push(new Ul(t)):(r.data=o.data,r._resolvedData=o._resolvedData),r.component?vo(n,i,s?s.children:null,t,a):vo(n,i,e,t,a),u&&s&&s.outlet&&s.outlet.isActivated&&a.canDeactivateChecks.push(new Qa(s.outlet.component,o))}else o&&Co(i,s,a),a.canActivateChecks.push(new Ul(t)),r.component?vo(n,null,s?s.children:null,t,a):vo(n,null,e,t,a);return a}function Rx(n,i,e){if(typeof e=="function")return Ct(i._environmentInjector,()=>e(n,i));switch(e){case"pathParamsChange":return!ea(n.url,i.url);case"pathParamsOrQueryParamsChange":return!ea(n.url,i.url)||!zn(n.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Um(n,i)||!zn(n.queryParams,i.queryParams);default:return!Um(n,i)}}function Co(n,i,e){let t=Ya(n),a=n.value;Object.entries(t).forEach(([r,o])=>{a.component?i?Co(o,i.children.getContext(r),e):Co(o,null,e):Co(o,i,e)}),a.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Qa(i.outlet.component,a)):e.canDeactivateChecks.push(new Qa(null,a)):e.canDeactivateChecks.push(new Qa(null,a))}function To(n){return typeof n=="function"}function Tx(n){return typeof n=="boolean"}function Ox(n){return n&&To(n.canLoad)}function Fx(n){return n&&To(n.canActivate)}function Px(n){return n&&To(n.canActivateChild)}function Lx(n){return n&&To(n.canDeactivate)}function Nx(n){return n&&To(n.canMatch)}function P_(n){return n instanceof uu||n?.name==="EmptyError"}var xl=Symbol("INITIAL_VALUE");function ir(){return Ge(n=>Un(n.map(i=>i.pipe(He(1),it(xl)))).pipe(ae(i=>{for(let e of i)if(e!==!0){if(e===xl)return xl;if(e===!1||Bx(e))return e}return!0}),be(i=>i!==xl),He(1)))}function Bx(n){return ki(n)||n instanceof nr}function L_(n){return n.aborted?U(void 0).pipe(He(1)):new Wt(i=>{let e=()=>{i.next(),i.complete()};return n.addEventListener("abort",e),()=>n.removeEventListener("abort",e)})}function N_(n){return ge(L_(n))}function Vx(n){return Cn(i=>{let{targetSnapshot:e,currentSnapshot:t,guards:{canActivateChecks:a,canDeactivateChecks:r}}=i;return r.length===0&&a.length===0?U(me(v({},i),{guardsResult:!0})):zx(r,e,t).pipe(Cn(o=>o&&Tx(o)?jx(e,a,n):U(o)),ae(o=>me(v({},i),{guardsResult:o})))})}function zx(n,i,e){return dt(n).pipe(Cn(t=>Wx(t.component,t.route,e,i)),li(t=>t!==!0,!0))}function jx(n,i,e){return dt(i).pipe(Ri(t=>Lo(Ux(t.route.parent,e),Hx(t.route,e),Gx(n,t.path),$x(n,t.route))),li(t=>t!==!0,!0))}function Hx(n,i){return n!==null&&i&&i(new Bl(n)),U(!0)}function Ux(n,i){return n!==null&&i&&i(new Ll(n)),U(!0)}function $x(n,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return U(!0);let t=e.map(a=>wn(()=>{let r=i._environmentInjector,o=ar(a,r),s=Fx(o)?o.canActivate(i,n):Ct(r,()=>o(i,n));return ia(s).pipe(li())}));return U(t).pipe(ir())}function Gx(n,i){let e=i[i.length-1],a=i.slice(0,i.length-1).reverse().map(r=>Ax(r)).filter(r=>r!==null).map(r=>wn(()=>{let o=r.guards.map(s=>{let u=r.node._environmentInjector,p=ar(s,u),f=Px(p)?p.canActivateChild(e,n):Ct(u,()=>p(e,n));return ia(f).pipe(li())});return U(o).pipe(ir())}));return U(a).pipe(ir())}function Wx(n,i,e,t){let a=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!a||a.length===0)return U(!0);let r=a.map(o=>{let s=i._environmentInjector,u=ar(o,s),p=Lx(u)?u.canDeactivate(n,i,e,t):Ct(s,()=>u(n,i,e,t));return ia(p).pipe(li())});return U(r).pipe(ir())}function Yx(n,i,e,t,a){let r=i.canLoad;if(r===void 0||r.length===0)return U(!0);let o=r.map(s=>{let u=ar(s,n),p=Ox(u)?u.canLoad(i,e):Ct(n,()=>u(i,e)),f=ia(p);return a?f.pipe(N_(a)):f});return U(o).pipe(ir(),B_(t))}function B_(n){return du(Ke(i=>{if(typeof i!="boolean")throw Hl(n,i)}),ae(i=>i===!0))}function qx(n,i,e,t,a,r){let o=i.canMatch;if(!o||o.length===0)return U(!0);let s=o.map(u=>{let p=ar(u,n),f=Nx(p)?p.canMatch(i,e,a):Ct(n,()=>p(i,e,a));return ia(f).pipe(N_(r))});return U(s).pipe(ir(),B_(t))}var ni=class n extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,n.prototype)}},Mo=class n extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,n.prototype)}};function Kx(n){throw new Q(4e3,!1)}function Qx(n){throw O_(!1,yt.GuardRejected)}var Wm=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let t=[],a=e.root;for(;;){if(t=t.concat(a.segments),a.numberOfChildren===0)return t;if(a.numberOfChildren>1||!a.children[re])throw Kx(`${i.redirectTo}`);a=a.children[re]}}async applyRedirectCommands(i,e,t,a,r){let o=await Xx(e,a,r);if(o instanceof $t)throw new Mo(o);let s=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),i,t);if(o[0]==="/")throw new Mo(s);return s}applyRedirectCreateUrlTree(i,e,t,a){let r=this.createSegmentGroup(i,e.root,t,a);return new $t(r,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let t={};return Object.entries(i).forEach(([a,r])=>{if(typeof r=="string"&&r[0]===":"){let s=r.substring(1);t[a]=e[s]}else t[a]=r}),t}createSegmentGroup(i,e,t,a){let r=this.createSegments(i,e.segments,t,a),o={};return Object.entries(e.children).forEach(([s,u])=>{o[s]=this.createSegmentGroup(i,u,t,a)}),new we(r,o)}createSegments(i,e,t,a){return e.map(r=>r.path[0]===":"?this.findPosParam(i,r,a):this.findOrReturn(r,t))}findPosParam(i,e,t){let a=t[e.path.substring(1)];if(!a)throw new Q(4001,!1);return a}findOrReturn(i,e){let t=0;for(let a of e){if(a.path===i.path)return e.splice(t),a;t++}return i}};function Xx(n,i,e){if(typeof n=="string")return Promise.resolve(n);let t=n;return Sl(ia(Ct(e,()=>t(i))))}function Zx(n,i){return n.providers&&!n._injector&&(n._injector=$o(n.providers,i,`Route: ${n.path}`)),n._injector??i}function yn(n){return n.outlet||re}function Jx(n,i){let e=n.filter(t=>yn(t)===i);return e.push(...n.filter(t=>yn(t)!==i)),e}var Ym={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function V_(n){return{routeConfig:n.routeConfig,url:n.url,params:n.params,queryParams:n.queryParams,fragment:n.fragment,data:n.data,outlet:n.outlet,title:n.title,paramMap:n.paramMap,queryParamMap:n.queryParamMap}}function eD(n,i,e,t,a,r,o){let s=z_(n,i,e);if(!s.matched)return U(s);let u=V_(r(s));return t=Zx(i,t),qx(t,i,e,a,u,o).pipe(ae(p=>p===!0?s:v({},Ym)))}function z_(n,i,e){if(i.path==="")return i.pathMatch==="full"&&(n.hasChildren()||e.length>0)?v({},Ym):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let a=(i.matcher||d_)(e,n,i);if(!a)return v({},Ym);let r={};Object.entries(a.posParams??{}).forEach(([s,u])=>{r[s]=u.path});let o=a.consumed.length>0?v(v({},r),a.consumed[a.consumed.length-1].parameters):r;return{matched:!0,consumedSegments:a.consumed,remainingSegments:e.slice(a.consumed.length),parameters:o,positionalParamSegments:a.posParams??{}}}function l_(n,i,e,t,a){return e.length>0&&iD(n,e,t,a)?{segmentGroup:new we(i,nD(t,new we(e,n.children))),slicedSegments:[]}:e.length===0&&aD(n,e,t)?{segmentGroup:new we(n.segments,tD(n,e,t,n.children)),slicedSegments:e}:{segmentGroup:new we(n.segments,n.children),slicedSegments:e}}function tD(n,i,e,t){let a={};for(let r of e)if(Gl(n,i,r)&&!t[yn(r)]){let o=new we([],{});a[yn(r)]=o}return v(v({},t),a)}function nD(n,i){let e={};e[re]=i;for(let t of n)if(t.path===""&&yn(t)!==re){let a=new we([],{});e[yn(t)]=a}return e}function iD(n,i,e,t){return e.some(a=>!Gl(n,i,a)||!(yn(a)!==re)?!1:!(t!==void 0&&yn(a)===t))}function aD(n,i,e){return e.some(t=>Gl(n,i,t))}function Gl(n,i,e){return(n.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function rD(n,i,e){return i.length===0&&!n.children[e]}var qm=class{};async function oD(n,i,e,t,a,r,o="emptyOnly",s){return new Km(n,i,e,t,a,o,r,s).recognize()}var sD=31,Km=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,t,a,r,o,s,u){this.injector=i,this.configLoader=e,this.rootComponentType=t,this.config=a,this.urlTree=r,this.paramsInheritanceStrategy=o,this.urlSerializer=s,this.abortSignal=u,this.applyRedirects=new Wm(this.urlSerializer,this.urlTree)}noMatchError(i){return new Q(4002,`'${i.segmentGroup}'`)}async recognize(){let i=l_(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:t}=await this.match(i),a=new Ut(t,e),r=new Eo("",a),o=w_(t,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,r.url=this.urlSerializer.serialize(o),{state:r,tree:o}}async match(i){let e=new tr([],Object.freeze({}),Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),re,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,re,e),rootSnapshot:e}}catch(t){if(t instanceof Mo)return this.urlTree=t.urlTree,this.match(t.urlTree.root);throw t instanceof ni?this.noMatchError(t):t}}async processSegmentGroup(i,e,t,a,r){if(t.segments.length===0&&t.hasChildren())return this.processChildren(i,e,t,r);let o=await this.processSegment(i,e,t,t.segments,a,!0,r);return o instanceof Ut?[o]:[]}async processChildren(i,e,t,a){let r=[];for(let u of Object.keys(t.children))u==="primary"?r.unshift(u):r.push(u);let o=[];for(let u of r){let p=t.children[u],f=Jx(e,u),g=await this.processSegmentGroup(i,f,p,u,a);o.push(...g)}let s=j_(o);return lD(s),s}async processSegment(i,e,t,a,r,o,s){for(let u of e)try{return await this.processSegmentAgainstRoute(u._injector??i,e,u,t,a,r,o,s)}catch(p){if(p instanceof ni||P_(p))continue;throw p}if(rD(t,a,r))return new qm;throw new ni(t)}async processSegmentAgainstRoute(i,e,t,a,r,o,s,u){if(yn(t)!==o&&(o===re||!Gl(a,r,t)))throw new ni(a);if(t.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,a,t,r,o,u);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,a,e,t,r,o,u);throw new ni(a)}async expandSegmentAgainstRouteUsingRedirect(i,e,t,a,r,o,s){let{matched:u,parameters:p,consumedSegments:f,positionalParamSegments:g,remainingSegments:M}=z_(e,a,r);if(!u)throw new ni(e);typeof a.redirectTo=="string"&&a.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>sD&&(this.allowRedirects=!1));let B=this.createSnapshot(i,a,r,p,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let Z=await this.applyRedirects.applyRedirectCommands(f,a.redirectTo,g,V_(B),i),se=await this.applyRedirects.lineralizeSegments(a,Z);return this.processSegment(i,t,e,se.concat(M),o,!1,s)}createSnapshot(i,e,t,a,r){let o=new tr(t,a,Object.freeze(v({},this.urlTree.queryParams)),this.urlTree.fragment,dD(e),yn(e),e.component??e._loadedComponent??null,e,mD(e),i),s=Qm(o,r,this.paramsInheritanceStrategy);return o.params=Object.freeze(s.params),o.data=Object.freeze(s.data),o}async matchSegmentAgainstRoute(i,e,t,a,r,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=ct=>this.createSnapshot(i,t,ct.consumedSegments,ct.parameters,o),u=await Sl(eD(e,t,a,i,this.urlSerializer,s,this.abortSignal));if(t.path==="**"&&(e.children={}),!u?.matched)throw new ni(e);i=t._injector??i;let{routes:p}=await this.getChildConfig(i,t,a),f=t._loadedInjector??i,{parameters:g,consumedSegments:M,remainingSegments:B}=u,Z=this.createSnapshot(i,t,M,g,o),{segmentGroup:se,slicedSegments:G}=l_(e,M,B,p,r);if(G.length===0&&se.hasChildren()){let ct=await this.processChildren(f,p,se,Z);return new Ut(Z,ct)}if(p.length===0&&G.length===0)return new Ut(Z,[]);let ie=yn(t)===r,xe=await this.processSegment(f,p,se,G,ie?re:r,!0,Z);return new Ut(Z,xe instanceof Ut?[xe]:[])}async getChildConfig(i,e,t){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let r=e._loadedNgModuleFactory;return r&&!e._loadedInjector&&(e._loadedInjector=r.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Sl(Yx(i,e,t,this.urlSerializer,this.abortSignal))){let r=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=r.routes,e._loadedInjector=r.injector,e._loadedNgModuleFactory=r.factory,r}throw Qx(e)}return{routes:[],injector:i}}};function lD(n){n.sort((i,e)=>i.value.outlet===re?-1:e.value.outlet===re?1:i.value.outlet.localeCompare(e.value.outlet))}function cD(n){let i=n.value.routeConfig;return i&&i.path===""}function j_(n){let i=[],e=new Set;for(let t of n){if(!cD(t)){i.push(t);continue}let a=i.find(r=>t.value.routeConfig===r.value.routeConfig);a!==void 0?(a.children.push(...t.children),e.add(a)):i.push(t)}for(let t of e){let a=j_(t.children);i.push(new Ut(t.value,a))}return i.filter(t=>!e.has(t))}function dD(n){return n.data||{}}function mD(n){return n.resolve||{}}function uD(n,i,e,t,a,r,o){return Cn(async s=>{let{state:u,tree:p}=await oD(n,i,e,t,s.extractedUrl,a,r,o);return me(v({},s),{targetSnapshot:u,urlAfterRedirects:p})})}function hD(n){return Cn(i=>{let{targetSnapshot:e,guards:{canActivateChecks:t}}=i;if(!t.length)return U(i);let a=new Set(t.map(s=>s.route)),r=new Set;for(let s of a)if(!r.has(s))for(let u of H_(s))r.add(u);let o=0;return dt(r).pipe(Ri(s=>a.has(s)?pD(s,e,n):(s.data=Qm(s,s.parent,n).resolve,U(void 0))),Ke(()=>o++),gc(1),Cn(s=>o===r.size?U(i):Mt))})}function H_(n){let i=n.children.map(e=>H_(e)).flat();return[n,...i]}function pD(n,i,e){let t=n.routeConfig,a=n._resolve;return t?.title!==void 0&&!I_(t)&&(a[Ao]=t.title),wn(()=>(n.data=Qm(n,n.parent,e).resolve,fD(a,n,i).pipe(ae(r=>(n._resolvedData=r,n.data=v(v({},n.data),r),null)))))}function fD(n,i,e){let t=Lm(n);if(t.length===0)return U({});let a={};return dt(t).pipe(Cn(r=>gD(n[r],i,e).pipe(li(),Ke(o=>{if(o instanceof nr)throw Hl(new ii,o);a[r]=o}))),gc(1),ae(()=>a),$n(r=>P_(r)?Mt:si(r)))}function gD(n,i,e){let t=i._environmentInjector,a=ar(n,t),r=a.resolve?a.resolve(i,e):Ct(t,()=>a(i,e));return ia(r)}function c_(n){return Ge(i=>{let e=n(i);return e?dt(e).pipe(ae(()=>i)):U(i)})}var tu=(()=>{class n{buildTitle(e){let t,a=e.root;for(;a!==void 0;)t=this.getResolvedTitleForRoute(a)??t,a=a.children.find(r=>r.outlet===re);return t}getResolvedTitleForRoute(e){return e.data[Ao]}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:()=>l(U_),providedIn:"root"})}return n})(),U_=(()=>{class n extends tu{title;constructor(e){super(),this.title=e}updateTitle(e){let t=this.buildTitle(e);t!==void 0&&this.title.setTitle(t)}static \u0275fac=function(t){return new(t||n)(X(Nh))};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Mi=new b("",{factory:()=>({})}),rr=new b(""),Wl=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(Vu);async loadComponent(e,t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Promise.resolve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let a=(async()=>{try{let r=await u_(Ct(e,()=>t.loadComponent())),o=await W_(G_(r));return this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=o,o}finally{this.componentLoaders.delete(t)}})();return this.componentLoaders.set(t,a),a}loadChildren(e,t){if(this.childrenLoaders.get(t))return this.childrenLoaders.get(t);if(t._loadedRoutes)return Promise.resolve({routes:t._loadedRoutes,injector:t._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(t);let a=(async()=>{try{let r=await $_(t,this.compiler,e,this.onLoadEndListener);return t._loadedRoutes=r.routes,t._loadedInjector=r.injector,t._loadedNgModuleFactory=r.factory,r}finally{this.childrenLoaders.delete(t)}})();return this.childrenLoaders.set(t,a),a}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();async function $_(n,i,e,t){let a=await u_(Ct(e,()=>n.loadChildren())),r=await W_(G_(a)),o;r instanceof Ru||Array.isArray(r)?o=r:o=await i.compileModuleAsync(r),t&&t(n);let s,u,p=!1,f;return Array.isArray(o)?(u=o,p=!0):(s=o.create(e).injector,f=o,u=s.get(rr,[],{optional:!0,self:!0}).flat()),{routes:u.map(eu),injector:s,factory:f}}function _D(n){return n&&typeof n=="object"&&"default"in n}function G_(n){return _D(n)?n.default:n}async function W_(n){return n}var Yl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:()=>l(bD),providedIn:"root"})}return n})(),bD=(()=>{class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),nu=new b(""),iu=new b("");function Y_(n,i,e){let t=n.get(iu),a=n.get(H);if(!a.startViewTransition||t.skipNextTransition)return t.skipNextTransition=!1,new Promise(p=>setTimeout(p));let r,o=new Promise(p=>{r=p}),s=a.startViewTransition(()=>(r(),vD(n)));s.updateCallbackDone.catch(p=>{}),s.ready.catch(p=>{}),s.finished.catch(p=>{});let{onViewTransitionCreated:u}=t;return u&&Ct(n,()=>u({transition:s,from:i,to:e})),o}function vD(n){return new Promise(i=>{Me({read:()=>setTimeout(i)},{injector:n})})}var yD=()=>{},au=new b(""),ql=(()=>{class n{currentNavigation=_(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=_(null);events=new T;transitionAbortWithErrorSubject=new T;configLoader=l(Wl);environmentInjector=l(at);destroyRef=l(ci);urlSerializer=l(Si);rootContexts=l(aa);location=l(Dn);inputBindingEnabled=l(Ro,{optional:!0})!==null;titleStrategy=l(tu);options=l(Mi,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(Yl);createViewTransition=l(nu,{optional:!0});navigationErrorHandler=l(au,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>U(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=a=>this.events.next(new Fl(a)),t=a=>this.events.next(new Pl(a));this.configLoader.onLoadEndListener=t,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let t=++this.navigationId;Ce(()=>{this.transitions?.next(me(v({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:t,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new nt(null),this.transitions.pipe(be(t=>t!==null),Ge(t=>{let a=!1,r=new AbortController,o=()=>!a&&this.currentTransition?.id===t.id;return U(t).pipe(Ge(s=>{if(this.navigationId>t.id)return this.cancelNavigationTransition(t,"",yt.SupersededByNewNavigation),Mt;this.currentTransition=t;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:u?me(v({},u),{previousNavigation:null}):null,abort:()=>r.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let p=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!p&&f!=="reload")return this.events.next(new jn(s.id,this.urlSerializer.serialize(s.rawUrl),"",Xa.IgnoredSameUrlNavigation)),s.resolve(!1),Mt;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return U(s).pipe(Ge(g=>(this.events.next(new Ei(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?Mt:Promise.resolve(g))),uD(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,r.signal),Ke(g=>{t.targetSnapshot=g.targetSnapshot,t.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(M=>(M.finalUrl=g.urlAfterRedirects,M)),this.events.next(new Do)}),Ge(g=>dt(t.routesRecognizeHandler.deferredHandle??U(void 0)).pipe(ae(()=>g))),Ke(()=>{let g=new xo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)}));if(p&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:g,extractedUrl:M,source:B,restoredState:Z,extras:se}=s,G=new Ei(g,this.urlSerializer.serialize(M),B,Z);this.events.next(G);let ie=M_(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=t=me(v({},s),{targetSnapshot:ie,urlAfterRedirects:M,extras:me(v({},se),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(xe=>(xe.finalUrl=M,xe)),U(t)}else return this.events.next(new jn(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Xa.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Mt}),ae(s=>{let u=new Il(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(u),this.currentTransition=t=me(v({},s),{guards:Mx(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),t}),Vx(s=>this.events.next(s)),Ge(s=>{if(t.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Hl(this.urlSerializer,s.guardsResult);let u=new Rl(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(u),!o())return Mt;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",yt.GuardRejected),Mt;if(s.guards.canActivateChecks.length===0)return U(s);let p=new Tl(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(p),!o())return Mt;let f=!1;return U(s).pipe(hD(this.paramsInheritanceStrategy),Ke({next:()=>{f=!0;let g=new Ol(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)},complete:()=>{f||this.cancelNavigationTransition(s,"",yt.NoDataFromResolver)}}))}),c_(s=>{let u=f=>{let g=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let M=f._environmentInjector;g.push(this.configLoader.loadComponent(M,f.routeConfig).then(B=>{f.component=B}))}for(let M of f.children)g.push(...u(M));return g},p=u(s.targetSnapshot.root);return p.length===0?U(s):dt(Promise.all(p).then(()=>s))}),c_(()=>this.afterPreactivation()),Ge(()=>{let{currentSnapshot:s,targetSnapshot:u}=t,p=this.createViewTransition?.(this.environmentInjector,s.root,u.root);return p?dt(p).pipe(ae(()=>t)):U(t)}),He(1),Ge(s=>{let u=Dx(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=t=s=me(v({},s),{targetRouterState:u}),this.currentNavigation.update(f=>(f.targetRouterState=u,f)),this.events.next(new Ja);let p=t.beforeActivateHandler.deferredHandle;return p?dt(p.then(()=>s)):U(s)}),Ke(s=>{new Gm(e.routeReuseStrategy,t.targetRouterState,t.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),o()&&(a=!0,this.currentNavigation.update(u=>(u.abort=yD,u)),this.lastSuccessfulNavigation.set(Ce(this.currentNavigation)),this.events.next(new rn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ge(L_(r.signal).pipe(be(()=>!a&&!t.targetRouterState),Ke(()=>{this.cancelNavigationTransition(t,r.signal.reason+"",yt.Aborted)}))),Ke({complete:()=>{a=!0}}),ge(this.transitionAbortWithErrorSubject.pipe(Ke(s=>{throw s}))),Ti(()=>{r.abort(),a||this.cancelNavigationTransition(t,"",yt.SupersededByNewNavigation),this.currentTransition?.id===t.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),$n(s=>{if(a=!0,this.destroyed)return t.resolve(!1),Mt;if(F_(s))this.events.next(new an(t.id,this.urlSerializer.serialize(t.extractedUrl),s.message,s.cancellationCode)),Sx(s)?this.events.next(new er(s.url,s.navigationBehaviorOptions)):t.resolve(!1);else{let u=new na(t.id,this.urlSerializer.serialize(t.extractedUrl),s,t.targetSnapshot??void 0);try{let p=Ct(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(p instanceof nr){let{message:f,cancellationCode:g}=Hl(this.urlSerializer,p);this.events.next(new an(t.id,this.urlSerializer.serialize(t.extractedUrl),f,g)),this.events.next(new er(p.redirectTo,p.navigationBehaviorOptions))}else throw this.events.next(u),s}catch(p){this.options.resolveNavigationPromiseOnError?t.resolve(!1):t.reject(p)}}return Mt}))}))}cancelNavigationTransition(e,t,a){let r=new an(e.id,this.urlSerializer.serialize(e.extractedUrl),t,a);this.events.next(r),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),t=Ce(this.currentNavigation),a=t?.targetBrowserUrl??t?.extractedUrl;return e.toString()!==a?.toString()&&!t?.extras.skipLocationChange}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function CD(n){return n!==Ka}var q_=new b("");var K_=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:()=>l(wD),providedIn:"root"})}return n})(),$l=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},wD=(()=>{class n extends $l{static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Kl=(()=>{class n{urlSerializer=l(Si);options=l(Mi,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(Dn);urlHandlingStrategy=l(Yl);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new $t;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:t,targetBrowserUrl:a}){let r=e!==void 0?this.urlHandlingStrategy.merge(e,t):t,o=a??r;return o instanceof $t?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:e,finalUrl:t,initialUrl:a}){t&&e?(this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(t,a),this.routerState=e):this.rawUrlTree=a}routerState=M_(null,l(at));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:()=>l(xD),providedIn:"root"})}return n})(),xD=(()=>{class n extends Kl{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(t=>{t.type==="popstate"&&setTimeout(()=>{e(t.url,t.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,t){e instanceof Ei?this.updateStateMemento():e instanceof jn?this.commitTransition(t):e instanceof xo?this.urlUpdateStrategy==="eager"&&(t.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof Ja?(this.commitTransition(t),this.urlUpdateStrategy==="deferred"&&!t.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(t),t)):e instanceof an&&!S_(e)?this.restoreHistory(t):e instanceof na?this.restoreHistory(t,!0):e instanceof rn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:t,id:a}){let{replaceUrl:r,state:o}=t;if(this.location.isCurrentPathEqualTo(e)||r){let s=this.browserPageId,u=v(v({},o),this.generateNgRouterState(a,s));this.location.replaceState(e,"",u)}else{let s=v(v({},o),this.generateNgRouterState(a,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,t=!1){if(this.canceledNavigationResolution==="computed"){let a=this.browserPageId,r=this.currentPageId-a;r!==0?this.location.historyGo(r):this.getCurrentUrlTree()===e.finalUrl&&r===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(t&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,t){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:t}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(a){return(e||(e=ve(n)))(a||n)}})();static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ql(n,i){n.events.pipe(be(e=>e instanceof rn||e instanceof an||e instanceof na||e instanceof jn),ae(e=>e instanceof rn||e instanceof jn?0:(e instanceof an?e.code===yt.Redirect||e.code===yt.SupersededByNewNavigation:!1)?2:1),be(e=>e!==2),He(1)).subscribe(()=>{i()})}var qe=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(wc);stateManager=l(Kl);options=l(Mi,{optional:!0})||{};pendingTasks=l(_u);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(ql);urlSerializer=l(Si);location=l(Dn);urlHandlingStrategy=l(Yl);injector=l(at);_events=new T;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(K_);injectorCleanup=l(q_,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(rr,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(Ro,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Se;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(t=>{try{let a=this.navigationTransitions.currentTransition,r=Ce(this.navigationTransitions.currentNavigation);if(a!==null&&r!==null){if(this.stateManager.handleRouterEvent(t,r),t instanceof an&&t.code!==yt.Redirect&&t.code!==yt.SupersededByNewNavigation)this.navigated=!0;else if(t instanceof rn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(t instanceof er){let o=t.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(t.url,a.currentRawUrl),u=v({scroll:a.extras.scroll,browserUrl:a.extras.browserUrl,info:a.extras.info,skipLocationChange:a.extras.skipLocationChange,replaceUrl:a.extras.replaceUrl||this.urlUpdateStrategy==="eager"||CD(a.source)},o);this.scheduleNavigation(s,Ka,null,u,{resolve:a.resolve,reject:a.reject,promise:a.promise})}}wx(t)&&this._events.next(t)}catch(a){this.navigationTransitions.transitionAbortWithErrorSubject.next(a)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ka,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,t,a,r)=>{this.navigateToSyncWithBrowser(e,a,t,r)})}navigateToSyncWithBrowser(e,t,a,r){let o=a?.navigationId?a:null;if(a){let u=v({},a);delete u.navigationId,delete u.\u0275routerPageId,Object.keys(u).length!==0&&(r.state=u)}let s=this.parseUrl(e);this.scheduleNavigation(s,t,o,r).catch(u=>{this.disposed||this.injector.get(mr)(u)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ce(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(eu),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,t={}){let{relativeTo:a,queryParams:r,fragment:o,queryParamsHandling:s,preserveFragment:u}=t,p=u?this.currentUrlTree.fragment:o,f=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":f=v(v({},this.currentUrlTree.queryParams),r);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=r||null}f!==null&&(f=this.removeEmptyProps(f));let g;try{let M=a?a.snapshot:this.routerState.snapshot.root;g=x_(M)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),g=this.currentUrlTree.root}return D_(g,e,f,p??null,this.urlSerializer)}navigateByUrl(e,t={skipLocationChange:!1}){let a=ki(e)?e:this.parseUrl(e),r=this.urlHandlingStrategy.merge(a,this.rawUrlTree);return this.scheduleNavigation(r,Ka,null,t)}navigate(e,t={skipLocationChange:!1}){return DD(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Oi(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,t){let a;if(t===!0?a=v({},p_):t===!1?a=v({},Nm):a=v(v({},Nm),t),ki(e))return i_(this.currentUrlTree,e,a);let r=this.parseUrl(e);return i_(this.currentUrlTree,r,a)}removeEmptyProps(e){return Object.entries(e).reduce((t,[a,r])=>(r!=null&&(t[a]=r),t),{})}scheduleNavigation(e,t,a,r,o){if(this.disposed)return Promise.resolve(!1);let s,u,p;o?(s=o.resolve,u=o.reject,p=o.promise):p=new Promise((g,M)=>{s=g,u=M});let f=this.pendingTasks.add();return Ql(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:t,restoredState:a,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:r,resolve:s,reject:u,promise:p,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),p.catch(Promise.reject.bind(Promise))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function DD(n){for(let i=0;i<n.length;i++)if(n[i]==null)throw new Q(4008,!1)}var ED=(()=>{class n{router=l(qe);stateManager=l(Kl);fragment=_("");queryParams=_({});path=_("");serializer=l(Si);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof rn&&this.updateState()})}updateState(){let{fragment:e,root:t,queryParams:a}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(a),this.path.set(this.serializer.serialize(new $t(t)))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),on=(()=>{class n{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=l(new Yt("href"),{optional:!0});reactiveHref=zu(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Ce(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Ce(this._target)}_target=_(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Ce(this._queryParams)}_queryParams=_(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Ce(this._fragment)}_fragment=_(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Ce(this._queryParamsHandling)}_queryParamsHandling=_(void 0);set state(e){this._state.set(e)}get state(){return Ce(this._state)}_state=_(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Ce(this._info)}_info=_(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Ce(this._relativeTo)}_relativeTo=_(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Ce(this._preserveFragment)}_preserveFragment=_(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Ce(this._skipLocationChange)}_skipLocationChange=_(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Ce(this._replaceUrl)}_replaceUrl=_(!1);isAnchorElement;onChanges=new T;applicationErrorHandler=l(mr);options=l(Mi,{optional:!0});reactiveRouterState=l(ED);constructor(e,t,a,r,o,s){this.router=e,this.route=t,this.tabIndexAttribute=a,this.renderer=r,this.el=o,this.locationStrategy=s;let u=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=u==="a"||u==="area"||!!(typeof customElements=="object"&&customElements.get(u)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=_(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(ki(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,t,a,r,o){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||t||a||r||o||typeof this.target=="string"&&this.target!="_self"))return!0;let u={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,u)?.catch(p=>{this.applicationErrorHandler(p)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,t){let a=this.renderer,r=this.el.nativeElement;t!==null?a.setAttribute(r,e,t):a.removeAttribute(r,e)}_urlTree=gt(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=a=>a==="preserve"||a==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let t=this.routerLinkInput();return t===null||!this.router.createUrlTree?null:ki(t)?t:this.router.createUrlTree(t,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,t)=>this.computeHref(e)===this.computeHref(t)});get urlTree(){return Ce(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(t){return new(t||n)(le(qe),le(ai),yc("tabindex"),le(De),le(L),le(ln))};static \u0275dir=w({type:n,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(t,a){t&1&&D("click",function(o){return a.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),t&2&&Y("href",a.reactiveHref(),Au)("target",a._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",j],skipLocationChange:[2,"skipLocationChange","skipLocationChange",j],replaceUrl:[2,"replaceUrl","replaceUrl",j],routerLink:"routerLink"},features:[de]})}return n})();var Oo=class{};var Q_=(()=>{class n{router;injector;preloadingStrategy;loader;subscription;constructor(e,t,a,r){this.router=e,this.injector=t,this.preloadingStrategy=a,this.loader=r}setUpPreloading(){this.subscription=this.router.events.pipe(be(e=>e instanceof rn),Ri(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,t){let a=[];for(let r of t){r.providers&&!r._injector&&(r._injector=$o(r.providers,e,""));let o=r._injector??e;r._loadedNgModuleFactory&&!r._loadedInjector&&(r._loadedInjector=r._loadedNgModuleFactory.create(o).injector);let s=r._loadedInjector??o;(r.loadChildren&&!r._loadedRoutes&&r.canLoad===void 0||r.loadComponent&&!r._loadedComponent)&&a.push(this.preloadConfig(o,r)),(r.children||r._loadedRoutes)&&a.push(this.processRoutes(s,r.children??r._loadedRoutes))}return dt(a).pipe(pc())}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>{if(e.destroyed)return U(null);let a;t.loadChildren&&t.canLoad===void 0?a=dt(this.loader.loadChildren(e,t)):a=U(null);let r=a.pipe(Cn(o=>o===null?U(void 0):(t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,this.processRoutes(o.injector??e,o.routes))));if(t.loadComponent&&!t._loadedComponent){let o=this.loader.loadComponent(e,t);return dt([r,o]).pipe(pc())}else return r})}static \u0275fac=function(t){return new(t||n)(X(qe),X(at),X(Oo),X(Wl))};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),X_=new b(""),SD=(()=>{class n{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Ka;restoredId=0;store={};urlSerializer=l(Si);zone=l(W);viewportScroller=l(jc);transitions=l(ql);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Ei?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof rn?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof jn&&e.code===Xa.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof Za)||e.scrollBehavior==="manual")return;let t={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],t):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,t):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,t){let a=Ce(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(r=>{setTimeout(r),typeof requestAnimationFrame<"u"&&requestAnimationFrame(r)}),this.zone.run(()=>{this.transitions.events.next(new Za(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,t,a))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(t){Bi()};static \u0275prov=y({token:n,factory:n.\u0275fac})}return n})();function MD(){return l(qe).routerState.root}function Fo(n,i){return{\u0275kind:n,\u0275providers:i}}function AD(){let n=l(q);return i=>{let e=n.get(xn);if(i!==e.components[0])return;let t=n.get(qe),a=n.get(Z_);n.get(ou)===1&&t.initialNavigation(),n.get(tb,null,{optional:!0})?.setUpPreloading(),n.get(X_,null,{optional:!0})?.init(),t.resetRootComponentType(e.componentTypes[0]),a.closed||(a.next(),a.complete(),a.unsubscribe())}}var Z_=new b("",{factory:()=>new T}),ou=new b("",{factory:()=>1});function J_(){let n=[{provide:Cc,useValue:!0},{provide:ou,useValue:0},xc(()=>{let i=l(q);return i.get(Mc,Promise.resolve()).then(()=>new Promise(t=>{let a=i.get(qe),r=i.get(Z_);Ql(a,()=>{t(!0)}),i.get(ql).afterPreactivation=()=>(t(!0),r.closed?U(void 0):r),a.initialNavigation()}))})];return Fo(2,n)}function eb(){let n=[xc(()=>{l(qe).setUpLocationChangeListener()}),{provide:ou,useValue:2}];return Fo(3,n)}var tb=new b("");function nb(n){return Fo(0,[{provide:tb,useExisting:Q_},{provide:Oo,useExisting:n}])}function ib(){return Fo(8,[Zm,{provide:Ro,useExisting:Zm}])}function ab(n){hr("NgRouterViewTransitions");let i=[{provide:nu,useValue:Y_},{provide:iu,useValue:v({skipNextTransition:!!n?.skipInitialTransition},n)}];return Fo(9,i)}var rb=[Dn,{provide:Si,useClass:ii},qe,aa,{provide:ai,useFactory:MD},Wl,[]],Xl=(()=>{class n{constructor(){}static forRoot(e,t){return{ngModule:n,providers:[rb,[],{provide:rr,multi:!0,useValue:e},[],t?.errorHandler?{provide:au,useValue:t.errorHandler}:[],{provide:Mi,useValue:t||{}},t?.useHash?RD():TD(),ID(),t?.preloadingStrategy?nb(t.preloadingStrategy).\u0275providers:[],t?.initialNavigation?OD(t):[],t?.bindToComponentInputs?ib().\u0275providers:[],t?.enableViewTransitions?ab().\u0275providers:[],FD()]}}static forChild(e){return{ngModule:n,providers:[{provide:rr,multi:!0,useValue:e}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=E({type:n});static \u0275inj=k({})}return n})();function ID(){return{provide:X_,useFactory:()=>{let n=l(jc),i=l(Mi);return i.scrollOffset&&n.setOffset(i.scrollOffset),new SD(i)}}}function RD(){return{provide:ln,useClass:Fc}}function TD(){return{provide:ln,useClass:Jo}}function OD(n){return[n.initialNavigation==="disabled"?eb().\u0275providers:[],n.initialNavigation==="enabledBlocking"?J_().\u0275providers:[]]}var ru=new b("");function FD(){return[{provide:ru,useFactory:AD},{provide:Fu,multi:!0,useExisting:ru}]}var sr={production:!0,apiUrl:"https://proyecto-escolar.onrender.com/api/"};var Ft=class n{http=l(En);router=l(qe);apiUrl=`${sr.apiUrl}token/`;currentUserRol=_(localStorage.getItem("rol"));login(i,e){return this.http.post(this.apiUrl,{username:i,password:e}).pipe(Ke(t=>{t.access&&(localStorage.setItem("token",t.access),t.refresh&&localStorage.setItem("refresh_token",t.refresh),localStorage.setItem("rol",t.rol),localStorage.setItem("username",t.username),this.currentUserRol.set(t.rol))}))}logout(){localStorage.removeItem("token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("rol"),localStorage.removeItem("username"),this.currentUserRol.set(null),this.router.navigate(["/"])}isAuthenticated(){return!!localStorage.getItem("token")}getRol(){return localStorage.getItem("rol")}static \u0275fac=function(e){return new(e||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})};var Pt=class n{isDarkMode=!1;constructor(){this.checkInitialTheme()}checkInitialTheme(){localStorage.getItem("theme")==="dark"?this.setDarkMode(!0):this.setDarkMode(!1)}toggleTheme(){this.setDarkMode(!this.isDarkMode)}setDarkMode(i){this.isDarkMode=i;let e=document.documentElement;i?(e.classList.add("dark"),e.classList.remove("light"),localStorage.setItem("theme","dark")):(e.classList.add("light"),e.classList.remove("dark"),localStorage.setItem("theme","light"))}get isDark(){return this.isDarkMode}static \u0275fac=function(e){return new(e||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})};function PD(n,i){n&1&&P(0,"mat-spinner",16)}function LD(n,i){n&1&&(d(0,"span"),m(1,"Iniciar Sesi\xF3n"),c(),d(2,"span",2),m(3,"arrow_forward"),c())}var Zl=class n{fb=l(Rn);authService=l(Ft);router=l(qe);snackBar=l(et);themeService=l(Pt);isLoading=_(!1);loginForm=this.fb.group({username:["",[ke.required]],password:["",[ke.required]]});onSubmit(){if(this.loginForm.valid){this.isLoading.set(!0);let{username:i,password:e}=this.loginForm.value;this.authService.login(i,e).subscribe({next:t=>{this.isLoading.set(!1),this.snackBar.open("\xA1Bienvenido!","Cerrar",{duration:3e3});let a=this.authService.getRol();a==="docente"?this.router.navigate(["/docente"]):a==="apoderado"?this.router.navigate(["/apoderado"]):a==="alumno"?this.router.navigate(["/alumno"]):a==="admin"?this.router.navigate(["/admin"]):this.router.navigate(["/"])},error:t=>{this.isLoading.set(!1),this.snackBar.open("Usuario o contrase\xF1a incorrectos","Cerrar",{duration:3e3})}})}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-login"]],standalone:!1,decls:34,vars:5,consts:[[1,"login-container"],[1,"theme-toggle-btn",3,"click","title"],[1,"material-icons"],[1,"login-card"],[1,"login-header"],[1,"login-icon"],[1,"login-title"],[1,"login-subtitle"],[1,"login-form",3,"ngSubmit","formGroup"],[1,"form-group"],[1,"form-label"],[1,"input-wrapper"],[1,"material-icons","input-icon"],["type","text","formControlName","username","placeholder","Ej: 12345678k","required","",1,"form-input"],["type","password","formControlName","password","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","required","",1,"form-input"],["type","submit",1,"btn","btn-primary","login-btn",3,"disabled"],["diameter","20","color","accent"],[1,"login-footer"],[1,"help-text"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"button",1),D("click",function(){return t.themeService.toggleTheme()}),d(2,"span",2),m(3),c()(),d(4,"div",3)(5,"div",4)(6,"div",5)(7,"span",2),m(8,"school"),c()(),d(9,"h1",6),m(10,"Sistema de Gesti\xF3n"),c(),d(11,"p",7),m(12,"Ingresa tus credenciales para continuar"),c()(),d(13,"form",8),D("ngSubmit",function(){return t.onSubmit()}),d(14,"div",9)(15,"label",10),m(16,"RUT o Usuario"),c(),d(17,"div",11)(18,"span",12),m(19,"person"),c(),P(20,"input",13),c()(),d(21,"div",9)(22,"label",10),m(23,"Contrase\xF1a"),c(),d(24,"div",11)(25,"span",12),m(26,"lock"),c(),P(27,"input",14),c()(),d(28,"button",15),A(29,PD,1,0,"mat-spinner",16)(30,LD,4,0),c()(),d(31,"div",17)(32,"p",18),m(33,"\xBFNecesitas ayuda? Contacta al administrador"),c()()()()),e&2&&(h(),F("title",t.themeService.isDark?"Cambiar a modo claro":"Cambiar a modo oscuro"),h(2),S(t.themeService.isDark?"light_mode":"dark_mode"),h(10),F("formGroup",t.loginForm),h(15),F("disabled",!t.loginForm.valid||t.isLoading()),h(),I(t.isLoading()?29:30))},dependencies:[In,Kt,Mn,An,mn,bt,dn,st],styles:['.login-container[_ngcontent-%COMP%]{min-height:100vh;display:flex;align-items:center;justify-content:center;background-image:url(https://res.cloudinary.com/dyslpppz8/image/upload/q_auto/f_auto/v1775741611/ChatGPT_Image_9_abr_2026_10_22_23_a.m._ifgmqd.png);background-size:cover;background-position:center;background-repeat:no-repeat;padding:20px;position:relative}.login-container[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,#0f1117e6,#0f1117bf);z-index:1}.login-card[_ngcontent-%COMP%]{width:100%;max-width:420px;padding:40px;background:var(--bg-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-lg);border:1px solid var(--border);position:relative;z-index:2}.login-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:32px}.login-icon[_ngcontent-%COMP%]{width:72px;height:72px;background:linear-gradient(135deg,var(--brand),var(--accent));border-radius:var(--radius-lg);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;box-shadow:var(--shadow-brand)}.login-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#fff;font-size:36px}.login-title[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:800;color:var(--text-primary);margin:0 0 8px;letter-spacing:-.5px}.login-subtitle[_ngcontent-%COMP%]{color:var(--text-muted);font-size:.9rem;margin:0}.login-form[_ngcontent-%COMP%]{margin-bottom:24px}.form-group[_ngcontent-%COMP%]{margin-bottom:20px}.form-label[_ngcontent-%COMP%]{display:block;font-weight:600;color:var(--text-secondary);font-size:.85rem;margin-bottom:8px}.input-wrapper[_ngcontent-%COMP%]{position:relative}.input-icon[_ngcontent-%COMP%]{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-muted);font-size:20px;pointer-events:none}.form-input[_ngcontent-%COMP%]{width:100%;padding:14px 14px 14px 46px;border:2px solid var(--border);border-radius:var(--radius-md);font-size:1rem;transition:all .2s ease;background:var(--bg-subtle);color:var(--text-primary);box-sizing:border-box;font-family:inherit}.form-input[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--brand);background:var(--bg-card);box-shadow:0 0 0 4px var(--brand-light)}.form-input[_ngcontent-%COMP%]::placeholder{color:var(--text-muted)}.login-btn[_ngcontent-%COMP%]{width:100%;height:54px;font-size:1rem;font-weight:700;border-radius:var(--radius-pill);display:flex;align-items:center;justify-content:center;gap:10px;background:var(--btn-primary-bg)!important;border:none;color:var(--btn-primary-txt);cursor:pointer;transition:all .25s ease;font-family:inherit;box-shadow:var(--shadow-brand)}.login-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--btn-primary-hover);transform:translateY(-2px);box-shadow:var(--shadow-lg)}.login-btn[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed;transform:none}.login-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:22px}.login-footer[_ngcontent-%COMP%]{text-align:center;padding-top:24px;border-top:1px solid var(--border)}.login-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);font-size:.9rem;margin:10px 0}.help-text[_ngcontent-%COMP%]{margin-top:16px!important;color:var(--text-muted)!important;font-size:.85rem!important}.theme-toggle-btn[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;z-index:100;width:48px;height:48px;border-radius:var(--radius-pill);background:var(--bg-card);border:1px solid var(--border);color:var(--text-secondary);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s ease;box-shadow:var(--shadow-md)}.theme-toggle-btn[_ngcontent-%COMP%]:hover{background:var(--brand-light);border-color:var(--brand);color:var(--brand);transform:scale(1.05)}.theme-toggle-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:24px}@media(max-width:480px){.login-container[_ngcontent-%COMP%]{padding:16px}.login-card[_ngcontent-%COMP%]{padding:32px 24px;border-radius:var(--radius-xl)}.login-icon[_ngcontent-%COMP%]{width:64px;height:64px;border-radius:var(--radius-lg)}.login-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:32px}.login-title[_ngcontent-%COMP%]{font-size:1.5rem}.login-subtitle[_ngcontent-%COMP%]{font-size:.85rem}.form-input[_ngcontent-%COMP%]{padding:16px 14px 16px 46px;font-size:16px;border-radius:var(--radius-md)}.login-btn[_ngcontent-%COMP%]{height:52px;border-radius:var(--radius-pill)}.theme-toggle-btn[_ngcontent-%COMP%]{top:16px;right:16px;width:44px;height:44px}}']})};function Ai(n){return Array.isArray(n)?n:n?.results||[]}var lt=class n{http=l(En);apiUrl=sr.apiUrl;getUsuarios(){return this.http.get(`${this.apiUrl}usuarios/`).pipe(ae(Ai))}getEstudiantes(){return this.http.get(`${this.apiUrl}estudiantes/`).pipe(ae(Ai))}getEstudiantesPorNivelYSeccion(i,e){return this.http.get(`${this.apiUrl}estudiantes/?nivel=${i}&seccion=${e}`).pipe(ae(Ai))}crearEstudiante(i){return this.http.post(`${this.apiUrl}estudiantes/`,i)}actualizarEstudiante(i,e){return this.http.put(`${this.apiUrl}estudiantes/${i}/`,e)}eliminarEstudiante(i){return this.http.delete(`${this.apiUrl}estudiantes/${i}/`)}getAsistencias(){return this.http.get(`${this.apiUrl}asistencias/`).pipe(ae(Ai))}registrarAsistenciaMasiva(i){return this.http.post(`${this.apiUrl}asistencias/bulk_create/`,i)}getEvaluaciones(){return this.http.get(`${this.apiUrl}evaluaciones/`).pipe(ae(Ai))}crearEvaluacion(i){return this.http.post(`${this.apiUrl}evaluaciones/`,i)}actualizarEvaluacion(i,e){return this.http.put(`${this.apiUrl}evaluaciones/${i}/`,e)}eliminarEvaluacion(i){return this.http.delete(`${this.apiUrl}evaluaciones/${i}/`)}getAnotaciones(){return this.http.get(`${this.apiUrl}anotaciones/`).pipe(ae(Ai))}crearAnotacion(i){return this.http.post(`${this.apiUrl}anotaciones/`,i)}actualizarAnotacion(i,e){return this.http.put(`${this.apiUrl}anotaciones/${i}/`,e)}eliminarAnotacion(i){return this.http.delete(`${this.apiUrl}anotaciones/${i}/`)}getReuniones(){return this.http.get(`${this.apiUrl}reuniones/`).pipe(ae(Ai))}crearReunion(i){return this.http.post(`${this.apiUrl}reuniones/`,i)}actualizarReunion(i,e){return this.http.put(`${this.apiUrl}reuniones/${i}/`,e)}eliminarReunion(i){return this.http.delete(`${this.apiUrl}reuniones/${i}/`)}getCalificaciones(){return this.http.get(`${this.apiUrl}calificaciones/`).pipe(ae(Ai))}guardarCalificacionesMasivas(i){return this.http.post(`${this.apiUrl}calificaciones/bulk_create/`,i)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})};function ND(n,i){if(n&1){let e=pe();d(0,"button",7),D("click",function(){J(e);let a=C();return ee(a.onCancel())}),m(1),c()}if(n&2){let e=C();h(),ne(" ",e.data.cancelText||"Cancelar"," ")}}var Po=class n{constructor(i,e){this.dialogRef=i;this.data=e}onCancel(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}static \u0275fac=function(e){return new(e||n)(le(_o),le(Am))};static \u0275cmp=x({type:n,selectors:[["app-confirm-dialog"]],standalone:!1,decls:12,vars:7,consts:[[1,"dialog-container"],[1,"dialog-icon"],[1,"dialog-title"],[1,"dialog-message"],[1,"dialog-actions"],["mat-stroked-button","",1,"btn-cancel"],["mat-raised-button","","color","primary",1,"btn-confirm",3,"click"],["mat-stroked-button","",1,"btn-cancel",3,"click"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"div",1)(2,"mat-icon"),m(3),c()(),d(4,"h2",2),m(5),c(),d(6,"p",3),m(7),c(),d(8,"div",4),A(9,ND,2,1,"button",5),d(10,"button",6),D("click",function(){return t.onConfirm()}),m(11),c()()()),e&2&&(h(),R("success",t.data.type==="success"),h(2),S(t.data.icon||"help_outline"),h(2),S(t.data.title),h(2),S(t.data.message),h(2),I(t.data.type!=="success"?9:-1),h(2),ne(" ",t.data.confirmText||"Aceptar"," "))},dependencies:[Et,Ci],styles:[".dialog-container[_ngcontent-%COMP%]{padding:32px 24px;text-align:center;background:var(--bg-card);color:var(--text-primary);border-radius:var(--radius-lg)}.dialog-icon[_ngcontent-%COMP%]{width:64px;height:64px;background:#e11d481a;color:#e11d48;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px}.dialog-icon.success[_ngcontent-%COMP%]{background:#16a34a1a;color:#16a34a}.dialog-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:36px;width:36px;height:36px}.dialog-title[_ngcontent-%COMP%]{margin:0 0 12px;font-size:1.5rem;font-weight:800;color:var(--text-primary);letter-spacing:-.5px}.dialog-message[_ngcontent-%COMP%]{color:var(--text-secondary);margin-bottom:32px;line-height:1.6;font-size:1.05rem}.dialog-actions[_ngcontent-%COMP%]{display:flex;gap:16px;justify-content:center;align-items:center}.btn-cancel[_ngcontent-%COMP%]{font-weight:700;color:var(--text-primary)!important;border-color:var(--border)!important;background:#ffffff0d;border-radius:12px;height:48px;min-width:130px}.btn-cancel[_ngcontent-%COMP%]:hover{background:#ffffff1a;border-color:var(--brand)!important}.btn-confirm[_ngcontent-%COMP%]{padding:0 28px;font-weight:700;border-radius:12px;height:48px;min-width:140px;box-shadow:0 4px 12px #3d6fe833}"]})};var BD=(n,i)=>i.hora,VD=(n,i)=>i.nombre,zD=(n,i)=>i.titulo,jD=(n,i)=>i.texto,su=(n,i)=>i.id;function HD(n,i){n&1&&(d(0,"div",13),P(1,"mat-spinner",15),d(2,"p"),m(3,"Cargando informaci\xF3n del docente..."),c()())}function UD(n,i){n&1&&(d(0,"span",50),m(1,"En curso"),c())}function $D(n,i){if(n&1&&(d(0,"div",43),P(1,"div",44),d(2,"div",45)(3,"div",46)(4,"span",47),m(5),c(),d(6,"span",48),m(7),c(),d(8,"span",49),m(9),c()(),A(10,UD,2,0,"span",50),c()()),n&2){let e=i.$implicit;R("active",e.activa),h(5),S(e.hora),h(2),S(e.curso),h(2),S(e.asignatura),h(),I(e.activa?10:-1)}}function GD(n,i){n&1&&(d(0,"div",37)(1,"span",7),m(2,"info"),c(),d(3,"p"),m(4,"No tienes evaluaciones programadas."),c()())}function WD(n,i){if(n&1&&(d(0,"div",42)(1,"div",51)(2,"span",7),m(3,"description"),c()(),d(4,"div",52)(5,"span",48),m(6),c(),d(7,"span",49),m(8),Ee(9,"date"),c()()()),n&2){let e=i.$implicit;h(6),S(e.titulo),h(2),Ue("",e.curso," | ",Ie(9,3,e.fecha_evaluacion,"dd/MM/yyyy"))}}function YD(n,i){if(n&1&&ue(0,WD,10,6,"div",42,su),n&2){let e=C(3);he(e.evaluaciones().slice(0,3))}}function qD(n,i){if(n&1&&(d(0,"div",40)(1,"div",53),m(2),c(),d(3,"div",54)(4,"span",55),m(5),c(),d(6,"span",56),m(7),c()(),d(8,"div",57)(9,"span",58),m(10),Ee(11,"number"),c(),d(12,"span",59),m(13,"Prom."),c()()()),n&2){let e=i.$implicit;h(2),ne(" ",e.nombre.substring(0,1)," "),h(3),S(e.nombre),h(2),Ue("",e.curso," | ",e.alertas," alertas"),h(3),S(Ie(11,5,e.promedio,"1.1-1"))}}function KD(n,i){if(n&1&&(d(0,"div",60)(1,"span",61),m(2),c(),d(3,"span",62),m(4),c()()),n&2){let e=i.$implicit;Be(e.urgencia),h(2),S(e.titulo),h(2),S(e.curso)}}function QD(n,i){if(n&1&&(d(0,"div",42)(1,"div",63)(2,"span",7),m(3),c()(),d(4,"div",52)(5,"span",64),m(6),c(),d(7,"span",49),m(8),c()()()),n&2){let e=i.$implicit;h(3),ne(" ",e.tipo==="evaluacion"?"assignment":e.tipo==="anotacion"?"edit_note":"groups"," "),h(3),S(e.texto),h(2),S(e.fecha)}}function XD(n,i){if(n&1){let e=pe();d(0,"div",14)(1,"div",16)(2,"div",17)(3,"div",18)(4,"div",19)(5,"span",7),m(6,"assignment"),c()(),d(7,"div",20),m(8),c(),d(9,"div",21),m(10,"Evaluaciones"),c()(),d(11,"div",18)(12,"div",22)(13,"span",7),m(14,"edit_note"),c()(),d(15,"div",20),m(16),c(),d(17,"div",21),m(18,"Anotaciones"),c()(),d(19,"div",18)(20,"div",23)(21,"span",7),m(22,"groups"),c()(),d(23,"div",20),m(24),c(),d(25,"div",21),m(26,"Reuniones"),c()()(),d(27,"div",24)(28,"button",25),D("click",function(){J(e);let a=C(2);return ee(a.irANotas())}),d(29,"span",7),m(30,"edit_document"),c(),d(31,"span"),m(32,"Subir Notas"),c()(),d(33,"button",26)(34,"span",7),m(35,"how_to_reg"),c(),d(36,"span"),m(37,"Pasar Asistencia"),c()(),d(38,"button",27)(39,"span",7),m(40,"add_circle"),c(),d(41,"span"),m(42,"Crear Evaluaci\xF3n"),c()(),d(43,"button",28)(44,"span",7),m(45,"event_available"),c(),d(46,"span"),m(47,"Programar Reuni\xF3n"),c()()(),d(48,"div",29)(49,"div",30)(50,"h3",31)(51,"span",7),m(52,"schedule"),c(),m(53," Horario del D\xEDa "),c()(),d(54,"div",32),ue(55,$D,11,6,"div",33,BD),c()(),d(57,"div",34)(58,"div",35)(59,"div",30)(60,"h3",31)(61,"span",7),m(62,"assignment"),c(),m(63," Pr\xF3ximas Evaluaciones "),c()(),d(64,"div",36),A(65,GD,5,0,"div",37)(66,YD,2,0),c()()()(),d(67,"div",38)(68,"div",35)(69,"div",30)(70,"h3",39)(71,"span",7),m(72,"warning"),c(),m(73," Alumnos en Riesgo "),c()(),d(74,"div",36),ue(75,qD,14,8,"div",40,VD),c()(),d(77,"div",35)(78,"div",30)(79,"h3",31)(80,"span",7),m(81,"pending_actions"),c(),m(82," Pendientes "),c()(),d(83,"div",36),ue(84,KD,5,4,"div",41,zD),c()(),d(86,"div",35)(87,"div",30)(88,"h3",31)(89,"span",7),m(90,"history"),c(),m(91," Actividad Reciente "),c()(),d(92,"div",36),ue(93,QD,9,3,"div",42,jD),c()()()()}if(n&2){let e=C(2);h(8),S(e.evaluaciones().length),h(8),S(e.anotaciones().length),h(8),S(e.reuniones().length),h(31),he(e.clasesDelDia()),h(10),I(e.evaluaciones().length===0?65:66),h(10),he(e.alumnosEnRiesgo()),h(9),he(e.pendientes()),h(9),he(e.actividadReciente())}}function ZD(n,i){if(n&1&&A(0,HD,4,0,"div",13)(1,XD,95,4,"div",14),n&2){let e=C();I(e.isLoading()?0:1)}}function JD(n,i){if(n&1){let e=pe();d(0,"div",75),D("click",function(){let a=J(e).$implicit,r=C(2);return ee(r.seleccionarEvaluacion(a))}),d(1,"div",76)(2,"span",77),m(3),c(),d(4,"span",78),m(5),c()(),d(6,"span",79),m(7,"check_circle"),c()()}if(n&2){let e,t=i.$implicit,a=C(2);R("active",((e=a.evaluacionSeleccionada())==null?null:e.id)===t.id),h(3),S(t.titulo),h(2),Ue("",t.curso," | ",t.asignatura)}}function ek(n,i){if(n&1){let e=pe();d(0,"button",80),D("click",function(){J(e);let a=C(2);return ee(a.guardarNotas())}),d(1,"span",7),m(2,"save"),c(),m(3),c()}if(n&2){let e=C(2);F("disabled",e.isSubmitting()),h(3),ne(" ",e.isSubmitting()?"Guardando...":"Guardar Notas"," ")}}function tk(n,i){n&1&&(d(0,"div",37)(1,"span",7),m(2,"touch_app"),c(),d(3,"p"),m(4,"Seleccione una evaluaci\xF3n a la izquierda para cargar los alumnos."),c()())}function nk(n,i){n&1&&(d(0,"div",13),P(1,"mat-spinner",81),d(2,"p"),m(3,"Cargando lista de curso..."),c()())}function ik(n,i){if(n&1&&(d(0,"div",37)(1,"span",7),m(2,"warning"),c(),d(3,"p"),m(4),c()()),n&2){let e=C(2);h(4),ne("No se encontraron alumnos registrados en el curso ",e.evaluacionSeleccionada().curso,".")}}function ak(n,i){if(n&1){let e=pe();d(0,"div",82)(1,"div",83)(2,"span",7),m(3,"person"),c(),m(4),c(),d(5,"div",84)(6,"input",85,0),D("input",function(){let a=J(e).$implicit,r=ft(7),o=C(3);return ee(o.actualizarNotaInput(a.id,r.value,"input",r))})("blur",function(){let a=J(e).$implicit,r=ft(7),o=C(3);return ee(o.actualizarNotaInput(a.id,r.value,"blur",r))}),c()()()}if(n&2){let e=i.$implicit,t=C(3);h(4),ne(" ",e.nombre_completo," "),h(2),F("value",t.formatDisplayNota(e.id))}}function rk(n,i){if(n&1&&(d(0,"div",74),ue(1,ak,8,2,"div",82,su),c()),n&2){let e=C(2);h(),he(e.alumnosCurso())}}function ok(n,i){if(n&1){let e=pe();d(0,"div",65)(1,"button",66),D("click",function(){J(e);let a=C();return ee(a.volverAlDashboard())}),d(2,"span",7),m(3,"arrow_back"),c()(),d(4,"h2",67),m(5,"Gesti\xF3n de Calificaciones"),c()(),d(6,"div",68)(7,"div",35)(8,"div",30)(9,"h3",31)(10,"span",7),m(11,"fact_check"),c(),m(12," 1. Seleccione una Evaluaci\xF3n "),c()(),d(13,"div",36)(14,"p",69),m(15,"Seleccione la prueba para cargar la lista de estudiantes por curso:"),c(),d(16,"div",70),ue(17,JD,8,5,"div",71,su),c()()(),d(19,"div",35)(20,"div",30)(21,"div",72)(22,"h3",31)(23,"span",7),m(24,"list_alt"),c(),m(25," 2. Ingresar Calificaciones "),c()(),A(26,ek,4,2,"button",73),c(),d(27,"div",36),A(28,tk,5,0,"div",37)(29,nk,4,0,"div",13)(30,ik,5,1,"div",37)(31,rk,3,0,"div",74),c()()()}if(n&2){let e=C();h(17),he(e.evaluaciones()),h(9),I(e.alumnosCurso().length>0?26:-1),h(2),I(e.evaluacionSeleccionada()?e.isLoadingAlumnos()?29:e.alumnosCurso().length===0?30:31:28)}}var Jl=class n{authService=l(Ft);apiService=l(lt);snackBar=l(et);dialog=l(Im);themeService=l(Pt);evaluaciones=_([]);anotaciones=_([]);reuniones=_([]);isLoading=_(!0);isSubmitting=_(!1);view=_("dashboard");evaluacionSeleccionada=_(null);alumnosCurso=_([]);notasIngresadas=_({});isLoadingAlumnos=_(!1);clasesDelDia=_([]);alumnosEnRiesgo=_([]);pendientes=_([]);actividadReciente=_([]);ngOnInit(){this.cargarDashboard()}cargarDashboard(){this.isLoading.set(!0);let i=0,e=()=>{i++,i===3&&this.isLoading.set(!1)};this.apiService.getEvaluaciones().subscribe({next:t=>{this.evaluaciones.set(t),e()},error:()=>e()}),this.apiService.getAnotaciones().subscribe({next:t=>{this.anotaciones.set(t),e()},error:()=>e()}),this.apiService.getReuniones().subscribe({next:t=>{this.reuniones.set(t),e()},error:()=>e()}),this.cargarDatosPremium()}cargarDatosPremium(){this.clasesDelDia.set([{hora:"08:00",curso:"1\xB0 B\xE1sico A",asignatura:"Matem\xE1tica",activa:!1},{hora:"09:30",curso:"2\xB0 B\xE1sico B",asignatura:"Matem\xE1tica",activa:!0},{hora:"11:15",curso:"4\xB0 Medio C",asignatura:"\xC1lgebra",activa:!1},{hora:"14:00",curso:"3\xB0 Medio A",asignatura:"Geometr\xEDa",activa:!1}]),this.alumnosEnRiesgo.set([{nombre:"Juan P\xE9rez",curso:"1\xB0 B\xE1sico A",promedio:3.8,alertas:2},{nombre:"Mar\xEDa Garc\xEDa",curso:"4\xB0 Medio C",promedio:3.5,alertas:1},{nombre:"Carlos Soto",curso:"2\xB0 B\xE1sico B",promedio:3.9,alertas:3}]),this.pendientes.set([{titulo:"Subir notas: Prueba de Fracciones",curso:"1\xB0 B\xE1sico A",urgencia:"alta"},{titulo:"Revisar asistencia: 4\xB0 Medio C",curso:"4\xB0 Medio C",urgencia:"media"},{titulo:"Planificar reuni\xF3n: Apoderado Carlos",curso:"2\xB0 B\xE1sico B",urgencia:"baja"}]),this.actividadReciente.set([{tipo:"evaluacion",texto:"Nueva evaluaci\xF3n creada para 1\xB0 B\xE1sico A",fecha:"Hace 2 horas"},{tipo:"anotacion",texto:"Anotaci\xF3n positiva ingresada a Juan P\xE9rez",fecha:"Hace 5 horas"},{tipo:"reunion",texto:"Reuni\xF3n programada con 4\xB0 Medio C",fecha:"Ayer"}])}logout(){this.authService.logout()}get username(){return localStorage.getItem("username")||"Docente"}irANotas(){this.view.set("notas"),this.evaluacionSeleccionada.set(null),this.alumnosCurso.set([]),this.notasIngresadas.set({})}volverAlDashboard(){this.view.set("dashboard"),this.cargarDashboard()}seleccionarEvaluacion(i){this.evaluacionSeleccionada.set(i),this.cargarAlumnosPorCurso(i.nivel,i.seccion,i.id)}cargarAlumnosPorCurso(i,e,t){this.isLoadingAlumnos.set(!0),this.alumnosCurso.set([]),this.apiService.getEstudiantesPorNivelYSeccion(i,e).subscribe({next:a=>{this.alumnosCurso.set(a),this.apiService.getCalificaciones().subscribe({next:r=>{let o={};r.filter(u=>u.evaluacion===t).forEach(u=>{o[u.estudiante]={valor:u.valor,observacion:u.observacion}}),this.notasIngresadas.set(o),this.isLoadingAlumnos.set(!1)},error:()=>this.isLoadingAlumnos.set(!1)})},error:()=>{this.snackBar.open("Error al cargar la lista de alumnos","Cerrar",{duration:3e3}),this.isLoadingAlumnos.set(!1)}})}actualizarNotaInput(i,e,t,a){if(!e){let p=v({},this.notasIngresadas());p[i]&&(p[i].valor=null,this.notasIngresadas.set(p));return}let r=e.replace(/[^0-9]/g,""),o=r,s=0;if(r.length>=2){let p=parseInt(r.substring(0,2));p>70&&(p=70),p<10&&(p=10),o=(p/10).toFixed(1).replace(".",","),s=p/10,a&&(a.value=o)}else o=r,s=parseInt(r)||0;let u=v({},this.notasIngresadas());if(u[i]||(u[i]={valor:null,observacion:""}),r.length>=2)u[i].valor=s;else if(t==="blur"&&r.length===1){let p=parseInt(r);p>7&&(p=7),p<1&&(p=1),u[i].valor=p,a&&(a.value=p.toFixed(1).replace(".",","))}this.notasIngresadas.set(u)}formatDisplayNota(i){let e=this.notasIngresadas()[i]?.valor;return e==null?"":e.toString().replace(".",",")}guardarNotas(){let i=this.evaluacionSeleccionada();if(!i)return;let e=Object.keys(this.notasIngresadas()).map(a=>({estudiante:a,evaluacion:i.id,valor:this.notasIngresadas()[a].valor,observacion:this.notasIngresadas()[a].observacion})).filter(a=>a.valor!==null&&a.valor!=="");if(e.length===0){this.snackBar.open("No hay notas nuevas para guardar","Cerrar",{duration:3e3});return}this.dialog.open(Po,{width:"400px",disableClose:!0,data:{title:"\xBFGuardar Calificaciones?",message:`Est\xE1s a punto de guardar ${e.length} notas para "${i.titulo}". \xBFDeseas continuar?`,confirmText:"S\xED, guardar ahora",cancelText:"No, revisar",icon:"help_outline"}}).afterClosed().subscribe(a=>{a&&this.ejecutarGuardado(e)})}ejecutarGuardado(i){this.isSubmitting.set(!0),this.apiService.guardarCalificacionesMasivas(i).subscribe({next:()=>{this.isSubmitting.set(!1),this.dialog.open(Po,{width:"400px",data:{type:"success",title:"\xA1Todo listo!",message:"Las calificaciones se han guardado con \xE9xito en el registro escolar.",confirmText:"Genial",icon:"check_circle"}})},error:e=>{console.error(e),this.snackBar.open("Error al guardar las calificaciones","Cerrar",{duration:3e3}),this.isSubmitting.set(!1)}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-panel-docente"]],standalone:!1,decls:21,vars:5,consts:[["gradeInput",""],[1,"header-bar"],[1,"header-left"],[1,"material-icons","header-icon"],[1,"header-title"],[1,"header-right"],[1,"btn-theme-toggle",3,"click","title"],[1,"material-icons"],[1,"user-info",2,"display","block"],[1,"user-name"],[1,"btn-logout",3,"click"],[1,"btn-text"],[1,"page-container"],[1,"loading-container"],[1,"dashboard-grid"],["diameter","40"],[1,"main-column"],[1,"stats-grid"],[1,"stat-card"],[1,"stat-icon","evaluaciones"],[1,"stat-value"],[1,"stat-label"],[1,"stat-icon","anotaciones"],[1,"stat-icon","reuniones"],[1,"quick-actions-grid"],[1,"quick-action-btn",3,"click"],["routerLink","/asistencia",1,"quick-action-btn"],["routerLink","/evaluaciones",1,"quick-action-btn"],["routerLink","/reuniones",1,"quick-action-btn"],[1,"content-card","timeline-card"],[1,"card-header"],[1,"card-title"],[1,"timeline-list"],[1,"timeline-item",3,"active"],[1,"card-grid",2,"display","grid","grid-template-columns","1fr","gap","20px"],[1,"content-card"],[1,"card-body"],[1,"empty-state"],[1,"side-column"],[1,"card-title",2,"color","var(--danger)"],[1,"risk-item"],[1,"pending-item",3,"class"],[1,"list-item"],[1,"timeline-item"],[1,"timeline-dot"],[1,"timeline-content"],[1,"class-info"],[1,"time-label"],[1,"title"],[1,"subtitle"],[1,"active-badge"],[1,"list-icon"],[1,"list-content"],[1,"risk-avatar"],[1,"risk-info"],[1,"risk-name"],[1,"risk-meta"],[1,"risk-score"],[1,"score-val"],[1,"score-label"],[1,"pending-item"],[1,"pending-title"],[1,"pending-meta"],[1,"list-icon",2,"background","var(--bg-hover)","color","var(--brand)"],[1,"title",2,"font-size","0.85rem"],[1,"view-header"],[1,"btn-icon-back",3,"click"],[1,"view-title"],[1,"card-grid"],[1,"card-instruction"],[1,"eval-selection-list"],[1,"selectable-item",3,"active"],[1,"card-header-left"],[1,"btn","btn-primary",3,"disabled"],[1,"grades-table"],[1,"selectable-item",3,"click"],[1,"item-info"],[1,"item-title"],[1,"item-subtitle"],[1,"material-icons","icon-active"],[1,"btn","btn-primary",3,"click","disabled"],["diameter","30"],[1,"grade-row"],[1,"student-name"],[1,"grade-input-container"],["type","text","placeholder","7,0",1,"grade-input",3,"input","blur","value"]],template:function(e,t){e&1&&(d(0,"div",1)(1,"div",2)(2,"span",3),m(3,"school"),c(),d(4,"h1",4),m(5,"Panel del Docente"),c()(),d(6,"div",5)(7,"button",6),D("click",function(){return t.themeService.toggleTheme()}),d(8,"span",7),m(9),c()(),d(10,"div",8)(11,"span",9),m(12),c()(),d(13,"button",10),D("click",function(){return t.logout()}),d(14,"span",7),m(15,"logout"),c(),d(16,"span",11),m(17,"Cerrar"),c()()()(),d(18,"div",12),A(19,ZD,2,1),A(20,ok,32,2),c()),e&2&&(h(7),F("title",t.themeService.isDark?"Cambiar a modo claro":"Cambiar a modo oscuro"),h(2),S(t.themeService.isDark?"light_mode":"dark_mode"),h(3),S(t.username),h(7),I(t.view()==="dashboard"?19:-1),h(),I(t.view()==="notas"?20:-1))},dependencies:[on,st,ji,xt],styles:['.premium-toolbar[_ngcontent-%COMP%]{box-shadow:0 2px 4px #0000001a;position:relative;z-index:2}.dashboard-container[_ngcontent-%COMP%]{max-width:1200px}.welcome-header[_ngcontent-%COMP%]{margin-bottom:24px}.welcome-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:600;color:#1e293b}.welcome-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0;color:#64748b;font-size:14px}.dashboard-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 350px;gap:28px;align-items:start}@media(max-width:1100px){.dashboard-grid[_ngcontent-%COMP%]{grid-template-columns:1fr;width:100%;margin:0}}.side-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:28px;position:sticky;top:32px;animation:_ngcontent-%COMP%_slideInRight .5s ease-out}@keyframes _ngcontent-%COMP%_slideInRight{0%{opacity:0;transform:translate(20px)}to{opacity:1;transform:translate(0)}}.main-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:28px;animation:_ngcontent-%COMP%_slideInUp .5s ease-out}@keyframes _ngcontent-%COMP%_slideInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:16px}.stat-card[_ngcontent-%COMP%]{display:flex;flex-direction:column!important;align-items:center;justify-content:center;padding:32px 24px!important;gap:12px;transition:transform .2s,box-shadow .2s;text-align:center}.stat-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d!important}.stat-icon[_ngcontent-%COMP%]{width:64px;height:64px;border-radius:16px;display:flex;align-items:center;justify-content:center;margin-bottom:8px}.stat-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px;color:#fff}.stat-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.stat-value[_ngcontent-%COMP%]{font-size:32px;font-weight:800;line-height:1;color:var(--text-primary)}.stat-label[_ngcontent-%COMP%]{font-size:13px;color:#64748b;font-weight:500;text-transform:uppercase;letter-spacing:.5px}.section-divider[_ngcontent-%COMP%]{margin:32px 0}.section-title[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:#334155;margin-bottom:16px}.actions-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:24px}.action-btn[_ngcontent-%COMP%]{height:56px;font-size:15px;border-radius:12px;display:flex;align-items:center;justify-content:center;gap:8px;font-weight:500}.action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:4px}.recent-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:24px}.recent-card[_ngcontent-%COMP%]{height:100%}.recent-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{padding-bottom:8px;border-bottom:1px solid #f1f5f9;margin-bottom:8px}.recent-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:16px;display:flex;align-items:center;gap:8px;color:#334155}.recent-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;color:#64748b}.fade-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .4s ease-in}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.view-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-bottom:24px}.btn-icon-back[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);color:var(--text-primary);width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s}.btn-icon-back[_ngcontent-%COMP%]:hover{background:var(--bg-hover);color:var(--brand)}.view-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;margin:0;color:var(--text-primary)}.eval-selection-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;margin-top:15px}.selectable-item[_ngcontent-%COMP%]{padding:14px;border-radius:var(--radius-md);border:1px solid var(--border);background:var(--bg-card);cursor:pointer;display:flex;align-items:center;justify-content:space-between;transition:all .2s}.selectable-item[_ngcontent-%COMP%]:hover{border-color:var(--brand);background:var(--bg-hover)}.selectable-item.active[_ngcontent-%COMP%]{border-color:var(--brand);background:var(--brand-light)}.item-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.item-title[_ngcontent-%COMP%]{font-weight:600;color:var(--text-primary)}.item-subtitle[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-muted)}.icon-active[_ngcontent-%COMP%]{color:var(--brand);opacity:0;transform:scale(.5);transition:all .2s}.active[_ngcontent-%COMP%]   .icon-active[_ngcontent-%COMP%]{opacity:1;transform:scale(1)}.grades-table[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.grade-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:var(--bg-subtle);border-radius:var(--radius-md);border:1px solid var(--border-light)}.student-name[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-weight:500;color:var(--text-primary)}.grade-input[_ngcontent-%COMP%]{width:80px;padding:8px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);text-align:center;font-weight:600;font-size:1.1rem}.grade-input[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--brand);box-shadow:0 0 0 3px var(--brand-light)}.timeline-card[_ngcontent-%COMP%]{background:var(--bg-card);border-radius:var(--radius-lg);padding:24px}.timeline-list[_ngcontent-%COMP%]{position:relative;padding-left:32px;margin-top:16px}.timeline-list[_ngcontent-%COMP%]:before{content:"";position:absolute;left:11px;top:0;bottom:0;width:2px;background:var(--border-light)}.timeline-item[_ngcontent-%COMP%]{position:relative;margin-bottom:24px}.timeline-dot[_ngcontent-%COMP%]{position:absolute;left:-27px;top:4px;width:12px;height:12px;border-radius:50%;background:var(--border);border:2px solid var(--bg-card);z-index:1}.timeline-item.active[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%]{background:var(--brand);box-shadow:0 0 0 4px var(--brand-muted)}.timeline-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.time-label[_ngcontent-%COMP%]{font-weight:700;color:var(--brand);font-size:.9rem;margin-bottom:4px;display:block}.class-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:600;display:block}.class-info[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-muted)}.active-badge[_ngcontent-%COMP%]{background:var(--brand-light);color:var(--brand);padding:4px 10px;border-radius:20px;font-size:.75rem;font-weight:700;text-transform:uppercase}.risk-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:12px;border-radius:var(--radius-md);background:var(--bg-subtle);margin-bottom:10px;transition:all .2s}.risk-item[_ngcontent-%COMP%]:hover{background:var(--bg-hover);transform:translate(4px)}.risk-avatar[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;background:var(--danger);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700}.risk-info[_ngcontent-%COMP%]{flex:1}.risk-name[_ngcontent-%COMP%]{font-weight:600;display:block;font-size:.95rem}.risk-meta[_ngcontent-%COMP%]{font-size:.8rem;color:var(--text-muted)}.risk-score[_ngcontent-%COMP%]{text-align:right}.score-val[_ngcontent-%COMP%]{display:block;font-weight:800;color:var(--danger);font-size:1.1rem}.score-label[_ngcontent-%COMP%]{font-size:.7rem;color:var(--text-muted)}.pending-item[_ngcontent-%COMP%]{padding:12px;border-left:4px solid var(--border);background:var(--bg-subtle);border-radius:0 8px 8px 0;margin-bottom:12px}.pending-item.alta[_ngcontent-%COMP%]{border-left-color:var(--danger)}.pending-item.media[_ngcontent-%COMP%]{border-left-color:var(--warning)}.pending-item.baja[_ngcontent-%COMP%]{border-left-color:var(--info)}.pending-title[_ngcontent-%COMP%]{font-weight:600;font-size:.9rem;display:block}.pending-meta[_ngcontent-%COMP%]{font-size:.8rem;color:var(--text-muted)}.card-instruction[_ngcontent-%COMP%]{font-size:.9rem;color:var(--text-muted);margin-bottom:12px}']})};var lr=(n,i)=>i.id;function sk(n,i){n&1&&(d(0,"div",12),P(1,"mat-spinner",13),d(2,"p"),m(3,"Cargando informaci\xF3n familiar..."),c()())}function lk(n,i){if(n&1){let e=pe();d(0,"div",33),D("click",function(){let a=J(e).$implicit,r=C(2);return ee(r.seleccionarHijo(a))}),d(1,"div",34),m(2),c(),d(3,"div",35)(4,"span",36),m(5),c(),d(6,"span",37),m(7),c()()()}if(n&2){let e,t=i.$implicit,a=C(2);R("active",((e=a.hijoSeleccionado())==null?null:e.id)===t.id),h(2),S(t.nombre_completo.substring(0,1)),h(3),S(t.nombre_completo),h(2),Ue("",t.nivel," ",t.seccion)}}function ck(n,i){n&1&&(d(0,"div",12),P(1,"mat-spinner",38),c())}function dk(n,i){n&1&&(d(0,"div",29)(1,"span",6),m(2,"sentiment_neutral"),c(),d(3,"p"),m(4,"No hay notas registradas para este periodo."),c()())}function mk(n,i){if(n&1&&(d(0,"div",39)(1,"div",40)(2,"span",41),m(3),c(),d(4,"span",42),m(5),Ee(6,"date"),c()(),d(7,"div",43),m(8),Ee(9,"number"),c()()),n&2){let e=i.$implicit;h(3),S(e.evaluacion_nombre),h(2),S(Ie(6,5,e.fecha_registro,"shortDate")),h(2),R("rojo",e.valor<4),h(),ne(" ",Ie(9,8,e.valor,"1.1-1")," ")}}function uk(n,i){if(n&1&&(d(0,"div",30),ue(1,mk,10,11,"div",39,lr),c()),n&2){let e=C(2);h(),he(e.calificaciones().slice(0,4))}}function hk(n,i){n&1&&(d(0,"div",29)(1,"span",6),m(2,"check_circle_outline"),c(),d(3,"p"),m(4,"\xA1Todo al d\xEDa! No hay evaluaciones pendientes."),c()())}function pk(n,i){if(n&1&&(d(0,"div",32)(1,"div",44)(2,"span",6),m(3,"assignment"),c()(),d(4,"div",45)(5,"span",46),m(6),c(),d(7,"span",47),m(8),Ee(9,"date"),c()()()),n&2){let e=i.$implicit;h(6),S(e.titulo),h(2),Ue("",e.asignatura," | ",Ie(9,3,e.fecha_evaluacion,"fullDate"))}}function fk(n,i){if(n&1&&ue(0,pk,10,6,"div",32,lr),n&2){let e=C(2);he(e.evaluaciones())}}function gk(n,i){n&1&&(d(0,"div",29)(1,"p"),m(2,"No hay citaciones vigentes."),c()())}function _k(n,i){if(n&1&&(d(0,"a",53),m(1,"Enlace"),c()),n&2){let e=C().$implicit;F("href",e.link_virtual,jo)}}function bk(n,i){if(n&1&&(d(0,"div",48)(1,"div",49)(2,"span",6),m(3,"calendar_today"),c(),m(4),Ee(5,"date"),Ee(6,"date"),c(),d(7,"div",50)(8,"strong"),m(9),c(),d(10,"p"),m(11),c()(),d(12,"div",51)(13,"button",52),m(14,"Confirmar"),c(),A(15,_k,2,1,"a",53),c()()),n&2){let e=i.$implicit;h(4),Ue(" ",Ie(5,5,e.fecha_hora,"shortDate")," - ",Ie(6,8,e.fecha_hora,"shortTime")," "),h(5),S(e.titulo),h(2),S(e.descripcion),h(4),I(e.link_virtual?15:-1)}}function vk(n,i){if(n&1&&ue(0,bk,16,11,"div",48,lr),n&2){let e=C(2);he(e.reuniones())}}function yk(n,i){if(n&1&&(d(0,"div",32)(1,"div",54)(2,"span",6),m(3),c()(),d(4,"div",45)(5,"span",55),m(6),c(),d(7,"span",47),m(8),Ee(9,"date"),c()()()),n&2){let e=i.$implicit;h(),R("positiva",e.tipo==="positiva")("negativa",e.tipo==="negativa"),h(2),S(e.tipo==="positiva"?"star":"warning"),h(3),S(e.descripcion),h(2),S(Ie(9,7,e.fecha,"dd/MM/yyyy"))}}function Ck(n,i){n&1&&(d(0,"button",56)(1,"span",6),m(2,"edit_note"),c()())}function wk(n,i){if(n&1&&(d(0,"div",32)(1,"div",54)(2,"span",6),m(3),c()(),d(4,"div",45)(5,"span",46),m(6),Ee(7,"date"),c(),d(8,"span",47),m(9),c()(),A(10,Ck,3,0,"button",56),c()),n&2){let e=i.$implicit;h(),R("presente",e.presente)("falta",!e.presente),h(2),S(e.presente?"check_circle":"cancel"),h(3),S(Ie(7,8,e.fecha,"EEEE dd/MM")),h(3),S(e.presente?"Presente":"Ausente"),h(),I(e.presente?-1:10)}}function xk(n,i){if(n&1&&(d(0,"div",14),ue(1,lk,8,6,"div",15,lr),c(),d(3,"div",16)(4,"div",17)(5,"div",18)(6,"div",19)(7,"div",20)(8,"span",6),m(9,"grade"),c()(),d(10,"div",21),m(11),Ee(12,"number"),c(),d(13,"div",22),m(14,"Promedio Gral."),c()(),d(15,"div",19)(16,"div",23)(17,"span",6),m(18,"task_alt"),c()(),d(19,"div",21),m(20),Ee(21,"number"),c(),d(22,"div",22),m(23,"Asistencia"),c()(),d(24,"div",19)(25,"div",24)(26,"span",6),m(27,"assignment_late"),c()(),d(28,"div",21),m(29),c(),d(30,"div",22),m(31,"Pr\xF3ximas Eval."),c()()(),d(32,"div",25)(33,"div",26)(34,"h3",27)(35,"span",6),m(36,"analytics"),c(),m(37," Calificaciones Recientes "),c()(),d(38,"div",28),A(39,ck,2,0,"div",12)(40,dk,5,0,"div",29)(41,uk,3,0,"div",30),c()(),d(42,"div",25)(43,"div",26)(44,"h3",27)(45,"span",6),m(46,"event_note"),c(),m(47," Pr\xF3ximas Evaluaciones "),c()(),d(48,"div",28),A(49,hk,5,0,"div",29)(50,fk,2,0),c()()(),d(51,"div",31)(52,"div",25)(53,"div",26)(54,"h3",27)(55,"span",6),m(56,"groups"),c(),m(57," Citaciones "),c()(),d(58,"div",28),A(59,gk,3,0,"div",29)(60,vk,2,0),c()(),d(61,"div",25)(62,"div",26)(63,"h3",27)(64,"span",6),m(65,"history_edu"),c(),m(66," Observaciones "),c()(),d(67,"div",28),ue(68,yk,10,10,"div",32,lr),c()(),d(70,"div",25)(71,"div",26)(72,"h3",27)(73,"span",6),m(74,"how_to_reg"),c(),m(75," Asistencia Reciente "),c()(),d(76,"div",28),ue(77,wk,11,11,"div",32,lr),c()()()()),n&2){let e=C();h(),he(e.hijos()),h(10),ne(" ",e.calificaciones().length>0?Ie(12,6,e.promedioGeneral,"1.1-1"):"N/A"," "),h(9),ne("",Ie(21,9,e.asistenciaPorcentaje,"1.0-0"),"%"),h(9),S(e.evaluaciones().length),h(10),I(e.isLoadingData()?39:e.calificaciones().length===0?40:41),h(10),I(e.evaluaciones().length===0?49:50),h(10),I(e.reuniones().length===0?59:60),h(9),he(e.anotaciones().slice(0,3)),h(9),he(e.asistencias().slice(0,5))}}var ec=class n{authService=l(Ft);apiService=l(lt);snackBar=l(et);themeService=l(Pt);asistencias=_([]);evaluaciones=_([]);anotaciones=_([]);reuniones=_([]);calificaciones=_([]);hijos=_([]);hijoSeleccionado=_(null);isLoading=_(!0);isLoadingData=_(!1);displayedColumns=["fecha","estudiante","estado"];get username(){return localStorage.getItem("username")||"Apoderado"}ngOnInit(){this.cargarHijos()}cargarHijos(){this.isLoading.set(!0),this.apiService.getEstudiantes().subscribe({next:i=>{this.hijos.set(i),i.length>0&&this.seleccionarHijo(i[0]),this.isLoading.set(!1)},error:()=>{this.snackBar.open("Error al cargar informaci\xF3n de hijos","Cerrar",{duration:3e3}),this.isLoading.set(!1)}})}seleccionarHijo(i){this.hijoSeleccionado.set(i),this.cargarDatosHijo()}cargarDatosHijo(){let i=this.hijoSeleccionado();i&&(this.isLoadingData.set(!0),this.cargarAsistencias(i.id),this.cargarEvaluaciones(i.nivel,i.seccion),this.cargarAnotaciones(i.id),this.cargarReuniones(i.nivel,i.seccion),this.cargarCalificaciones(i.id))}cargarAsistencias(i){this.apiService.getAsistencias().subscribe({next:e=>{this.asistencias.set(e.filter(t=>t.estudiante===i))}})}cargarEvaluaciones(i,e){this.apiService.getEvaluaciones().subscribe({next:t=>{this.evaluaciones.set(t.filter(a=>a.nivel===i&&a.seccion===e))}})}cargarAnotaciones(i){this.apiService.getAnotaciones().subscribe({next:e=>{this.anotaciones.set(e.filter(t=>t.estudiante===i))}})}cargarReuniones(i,e){this.apiService.getReuniones().subscribe({next:t=>{this.reuniones.set(t.filter(a=>a.nivel===i&&a.seccion===e))}})}cargarCalificaciones(i){this.apiService.getCalificaciones().subscribe({next:e=>{this.calificaciones.set(e.filter(t=>t.estudiante===i)),this.isLoadingData.set(!1)},error:()=>this.isLoadingData.set(!1)})}get totalPresentes(){return this.asistencias().filter(i=>i.presente).length}get totalAusentes(){return this.asistencias().filter(i=>!i.presente).length}get anotacionesPositivas(){return this.anotaciones().filter(i=>i.tipo==="positiva").length}get anotacionesNegativas(){return this.anotaciones().filter(i=>i.tipo==="negativa").length}get promedioGeneral(){let i=this.calificaciones();return i.length===0?0:i.reduce((t,a)=>t+parseFloat(a.valor),0)/i.length}get asistenciaPorcentaje(){let i=this.asistencias().length;return i===0?100:this.asistencias().filter(t=>t.presente).length/i*100}logout(){this.authService.logout()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-panel-apoderado"]],standalone:!1,decls:21,vars:4,consts:[[1,"header-bar"],[1,"header-left"],[1,"material-icons","header-icon"],[1,"header-title"],[1,"header-right"],[1,"btn-theme-toggle",3,"click","title"],[1,"material-icons"],[1,"user-info",2,"display","block"],[1,"user-name"],[1,"btn-logout",3,"click"],[1,"btn-text"],[1,"page-container"],[1,"loading-container"],["diameter","40"],[1,"student-selector-bar"],[1,"student-chip",3,"active"],[1,"dashboard-grid"],[1,"main-column"],[1,"stats-grid"],[1,"stat-card"],[1,"stat-icon",2,"background","var(--brand-light)","color","var(--brand)"],[1,"stat-value"],[1,"stat-label"],[1,"stat-icon",2,"background","var(--success-light)","color","var(--success)"],[1,"stat-icon",2,"background","var(--warning-light)","color","var(--warning)"],[1,"content-card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"empty-state"],[1,"grades-grid"],[1,"side-column"],[1,"list-item"],[1,"student-chip",3,"click"],[1,"avatar-mini"],[1,"chip-info"],[1,"name"],[1,"course"],["diameter","30"],[1,"grade-item"],[1,"grade-info"],[1,"grade-title"],[1,"grade-date"],[1,"grade-badge"],[1,"list-icon","eval"],[1,"list-content"],[1,"title"],[1,"subtitle"],[1,"citacion-card"],[1,"citacion-header"],[1,"citacion-body"],[1,"citacion-actions"],["mat-flat-button","","color","primary"],["mat-button","","target","_blank",3,"href"],[1,"list-icon"],[1,"title",2,"font-size","0.9rem"],["mat-icon-button","","color","warn","title","Justificar"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"div",1)(2,"span",2),m(3,"family_restroom"),c(),d(4,"h1",3),m(5,"Panel del Apoderado"),c()(),d(6,"div",4)(7,"button",5),D("click",function(){return t.themeService.toggleTheme()}),d(8,"span",6),m(9),c()(),d(10,"div",7)(11,"span",8),m(12),c()(),d(13,"button",9),D("click",function(){return t.logout()}),d(14,"span",6),m(15,"logout"),c(),d(16,"span",10),m(17,"Cerrar"),c()()()(),d(18,"div",11),A(19,sk,4,0,"div",12)(20,xk,79,12),c()),e&2&&(h(7),F("title",t.themeService.isDark?"Cambiar a modo claro":"Cambiar a modo oscuro"),h(2),S(t.themeService.isDark?"light_mode":"dark_mode"),h(3),S(t.username),h(7),I(t.isLoading()?19:20))},dependencies:[Et,Zt,st,ji,xt],styles:[".student-selector-bar[_ngcontent-%COMP%]{display:flex;gap:16px;margin-bottom:32px;overflow-x:auto;padding:4px 4px 12px}.student-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:10px 20px;background:var(--bg-card);border:1px solid var(--border);border-radius:40px;cursor:pointer;transition:all .3s cubic-bezier(.4,0,.2,1);min-width:fit-content}.student-chip[_ngcontent-%COMP%]:hover{background:var(--bg-hover);transform:translateY(-2px);border-color:var(--brand)}.student-chip.active[_ngcontent-%COMP%]{background:var(--brand);border-color:var(--brand);box-shadow:0 8px 16px var(--brand-muted)}.avatar-mini[_ngcontent-%COMP%]{width:32px;height:32px;background:var(--brand-light);color:var(--brand);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.9rem}.student-chip.active[_ngcontent-%COMP%]   .avatar-mini[_ngcontent-%COMP%]{background:#fff;color:var(--brand)}.chip-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.chip-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-weight:600;font-size:.95rem;color:var(--text-primary)}.chip-info[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]{font-size:.75rem;color:var(--text-muted)}.student-chip.active[_ngcontent-%COMP%]   .chip-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .student-chip.active[_ngcontent-%COMP%]   .chip-info[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]{color:#fff}.grades-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px}.grade-item[_ngcontent-%COMP%]{background:var(--bg-subtle);padding:16px;border-radius:var(--radius-md);display:flex;justify-content:space-between;align-items:center;border-left:4px solid var(--brand)}.grade-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.grade-title[_ngcontent-%COMP%]{font-weight:600;font-size:.9rem;margin-bottom:2px}.grade-date[_ngcontent-%COMP%]{font-size:.75rem;color:var(--text-muted)}.grade-badge[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:800;color:var(--brand)}.grade-badge.rojo[_ngcontent-%COMP%]{color:var(--danger)}.citacion-card[_ngcontent-%COMP%]{background:var(--bg-subtle);border-radius:var(--radius-md);padding:16px;margin-bottom:16px;border:1px solid var(--border)}.citacion-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:.85rem;font-weight:700;color:var(--brand);margin-bottom:8px}.citacion-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:.95rem;margin-bottom:4px}.citacion-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-muted);margin-bottom:12px}.citacion-actions[_ngcontent-%COMP%]{display:flex;gap:8px}.dashboard-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 350px;gap:28px;align-items:start}@media(max-width:1100px){.dashboard-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.main-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:28px;animation:_ngcontent-%COMP%_slideInUp .5s ease-out}.side-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:28px;position:sticky;top:32px;animation:_ngcontent-%COMP%_slideInRight .5s ease-out}@keyframes _ngcontent-%COMP%_slideInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_slideInRight{0%{opacity:0;transform:translate(20px)}to{opacity:1;transform:translate(0)}}.page-container[_ngcontent-%COMP%]{padding:32px;max-width:1600px;margin:0 auto}"]})};var lu=(n,i)=>i.id;function Dk(n,i){if(n&1&&(d(0,"option",30),m(1),c()),n&2){let e=i.$implicit;F("value",e.id),h(),Ue("",e.first_name||e.username," ",e.last_name)}}function kk(n,i){if(n&1){let e=pe();d(0,"button",43),D("click",function(){J(e);let a=C();return ee(a.cancelarEdicion())}),d(1,"span",6),m(2,"cancel"),c(),m(3," Cancelar "),c()}}function Ek(n,i){n&1&&(d(0,"div",40),P(1,"mat-spinner",44),c())}function Sk(n,i){n&1&&(d(0,"div",41)(1,"span",6),m(2,"groups"),c(),d(3,"p"),m(4,"No hay estudiantes registrados."),c()())}function Mk(n,i){if(n&1){let e=pe();d(0,"div",45)(1,"div",46)(2,"span",47),m(3,"person"),c()(),d(4,"div",48)(5,"span",49),m(6),c(),d(7,"span",50),m(8),c()(),d(9,"div",51)(10,"button",52),D("click",function(){let a=J(e).$implicit,r=C(2);return ee(r.editarEstudiante(a))}),d(11,"span",6),m(12,"edit"),c()(),d(13,"button",53),D("click",function(){let a=J(e).$implicit,r=C(2);return ee(r.eliminarEstudiante(a.id))}),d(14,"span",6),m(15,"delete"),c()()()()}if(n&2){let e=i.$implicit;h(6),S(e.nombre_completo),h(2),Ue("Curso: ",e.curso," | Apoderado: ",e.apoderado_nombre)}}function Ak(n,i){if(n&1&&ue(0,Mk,16,3,"div",45,lu),n&2){let e=C();he(e.estudiantes())}}function Ik(n,i){n&1&&(d(0,"div",40),P(1,"mat-spinner",44),c())}function Rk(n,i){n&1&&(d(0,"div",41)(1,"span",6),m(2,"person_off"),c(),d(3,"p"),m(4,"No hay usuarios registrados."),c()())}function Tk(n,i){if(n&1&&(d(0,"div",45)(1,"div",54)(2,"span",6),m(3),c()(),d(4,"div",48)(5,"span",49),m(6),c(),d(7,"span",50),m(8),c()()()),n&2){let e=i.$implicit;h(),ot("background",e.is_active?"var(--success)":"var(--danger)"),h(2),S(e.is_active?"check_circle":"cancel"),h(3),Ue("",e.username," (",e.rol_display,")"),h(2),S(e.email||"Sin correo registrado")}}function Ok(n,i){if(n&1&&ue(0,Tk,9,6,"div",45,lu),n&2){let e=C();he(e.usuarios())}}var tc=class n{fb=l(Rn);authService=l(Ft);apiService=l(lt);snackBar=l(et);themeService=l(Pt);usuarios=_([]);estudiantes=_([]);apoderados=_([]);isLoadingUsers=_(!0);isLoadingStudents=_(!0);isSubmitting=_(!1);editingEstudiante=_(null);displayedColumnsUsers=["username","email","rol","estado"];displayedColumnsStudents=["nombre","apoderado","curso","acciones"];estudianteForm=this.fb.group({nombre_completo:["",[ke.required]],apoderado:["",[ke.required]],curso:["",[ke.required]]});ngOnInit(){this.cargarUsuarios(),this.cargarEstudiantes()}cargarUsuarios(){this.apiService.getUsuarios().subscribe({next:i=>{this.usuarios.set(i),this.apoderados.set(i.filter(e=>e.rol==="apoderado")),this.isLoadingUsers.set(!1)},error:()=>{this.snackBar.open("Error al cargar usuarios","Cerrar",{duration:3e3}),this.isLoadingUsers.set(!1)}})}cargarEstudiantes(){this.apiService.getEstudiantes().subscribe({next:i=>{this.estudiantes.set(i),this.isLoadingStudents.set(!1)},error:()=>{this.snackBar.open("Error al cargar estudiantes","Cerrar",{duration:3e3}),this.isLoadingStudents.set(!1)}})}onSubmitEstudiante(){if(this.estudianteForm.valid){this.isSubmitting.set(!0);let i=this.editingEstudiante();i?this.apiService.actualizarEstudiante(i.id,this.estudianteForm.value).subscribe({next:()=>{this.snackBar.open("Estudiante actualizado","Cerrar",{duration:3e3}),this.resetForm(),this.cargarEstudiantes()},error:()=>{this.snackBar.open("Error al actualizar estudiante","Cerrar",{duration:3e3}),this.isSubmitting.set(!1)}}):this.apiService.crearEstudiante(this.estudianteForm.value).subscribe({next:()=>{this.snackBar.open("Estudiante creado con \xE9xito","Cerrar",{duration:3e3}),this.resetForm(),this.cargarEstudiantes()},error:()=>{this.snackBar.open("Error al crear estudiante","Cerrar",{duration:3e3}),this.isSubmitting.set(!1)}})}}editarEstudiante(i){this.editingEstudiante.set(i),this.estudianteForm.patchValue({nombre_completo:i.nombre_completo,apoderado:i.apoderado,curso:i.curso})}eliminarEstudiante(i){confirm("\xBFEst\xE1s seguro de eliminar este estudiante?")&&this.apiService.eliminarEstudiante(i).subscribe({next:()=>{this.snackBar.open("Estudiante eliminado","Cerrar",{duration:3e3}),this.cargarEstudiantes()}})}resetForm(){this.estudianteForm.reset(),this.editingEstudiante.set(null),this.isSubmitting.set(!1)}cancelarEdicion(){this.resetForm()}logout(){this.authService.logout()}getResumenRoles(){let i=this.usuarios();return{docentes:i.filter(e=>e.rol==="docente").length,apoderados:i.filter(e=>e.rol==="apoderado").length,admins:i.filter(e=>e.rol==="admin").length}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-panel-admin"]],standalone:!1,decls:109,vars:14,consts:[[1,"header-bar"],[1,"header-left"],[1,"material-icons","header-icon"],[1,"header-title"],[1,"header-right"],[1,"btn-theme-toggle",3,"click","title"],[1,"material-icons"],[1,"user-info",2,"display","block"],[1,"user-name"],[1,"btn-logout",3,"click"],[1,"btn-text"],[1,"page-container"],[1,"stats-grid"],[1,"stat-card"],[1,"stat-icon",2,"background","var(--brand)"],[1,"stat-value"],[1,"stat-label"],[1,"stat-icon",2,"background","var(--success)"],[1,"stat-icon",2,"background","var(--warning)"],[1,"stat-icon",2,"background","var(--danger)"],[1,"card-grid"],[1,"content-card"],[1,"card-header"],[1,"card-title"],[1,"card-body",2,"padding","20px"],[1,"admin-form",3,"ngSubmit","formGroup"],[1,"form-group"],[1,"form-label"],["type","text","formControlName","nombre_completo","placeholder","Ej: Juan P\xE9rez Gonz\xE1lez","required","",1,"form-input"],["formControlName","apoderado","required","",1,"form-select"],[3,"value"],["formControlName","curso","required","",1,"form-select"],["value","1\xB0 B\xE1sico"],["value","2\xB0 B\xE1sico"],["value","3\xB0 B\xE1sico"],["value","4\xB0 B\xE1sico"],[1,"form-actions",2,"display","flex","gap","10px","margin-top","20px"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-secondary"],[1,"card-body"],[1,"loading-container"],[1,"empty-state"],[1,"content-card",2,"margin-top","22px"],["type","button",1,"btn","btn-secondary",3,"click"],["diameter","40"],[1,"list-item"],[1,"list-icon",2,"background","var(--brand-light)"],[1,"material-icons",2,"color","var(--brand)"],[1,"list-content"],[1,"title"],[1,"subtitle"],[1,"action-buttons",2,"display","flex","gap","8px"],["title","Editar",1,"btn-icon-small","edit",2,"color","var(--brand)",3,"click"],["title","Eliminar",1,"btn-icon-small","delete",2,"color","var(--danger)",3,"click"],[1,"list-icon"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"div",1)(2,"span",2),m(3,"admin_panel_settings"),c(),d(4,"h1",3),m(5,"Panel de Administraci\xF3n"),c()(),d(6,"div",4)(7,"button",5),D("click",function(){return t.themeService.toggleTheme()}),d(8,"span",6),m(9),c()(),d(10,"div",7)(11,"span",8),m(12,"Admin"),c()(),d(13,"button",9),D("click",function(){return t.logout()}),d(14,"span",6),m(15,"logout"),c(),d(16,"span",10),m(17,"Cerrar"),c()()()(),d(18,"div",11)(19,"div",12)(20,"div",13)(21,"div",14)(22,"span",6),m(23,"school"),c()(),d(24,"div",15),m(25),c(),d(26,"div",16),m(27,"Docentes"),c()(),d(28,"div",13)(29,"div",17)(30,"span",6),m(31,"family_restroom"),c()(),d(32,"div",15),m(33),c(),d(34,"div",16),m(35,"Apoderados"),c()(),d(36,"div",13)(37,"div",18)(38,"span",6),m(39,"groups"),c()(),d(40,"div",15),m(41),c(),d(42,"div",16),m(43,"Estudiantes"),c()(),d(44,"div",13)(45,"div",19)(46,"span",6),m(47,"shield"),c()(),d(48,"div",15),m(49),c(),d(50,"div",16),m(51,"Admins"),c()()(),d(52,"div",20)(53,"div",21)(54,"div",22)(55,"h3",23)(56,"span",6),m(57),c(),m(58),c()(),d(59,"div",24)(60,"form",25),D("ngSubmit",function(){return t.onSubmitEstudiante()}),d(61,"div",26)(62,"label",27),m(63,"Nombre Completo"),c(),P(64,"input",28),c(),d(65,"div",26)(66,"label",27),m(67,"Apoderado"),c(),d(68,"select",29),ue(69,Dk,2,3,"option",30,lu),c()(),d(71,"div",26)(72,"label",27),m(73,"Curso"),c(),d(74,"select",31)(75,"option",32),m(76,"1\xB0 B\xE1sico"),c(),d(77,"option",33),m(78,"2\xB0 B\xE1sico"),c(),d(79,"option",34),m(80,"3\xB0 B\xE1sico"),c(),d(81,"option",35),m(82,"4\xB0 B\xE1sico"),c()()(),d(83,"div",36)(84,"button",37)(85,"span",6),m(86,"save"),c(),m(87),c(),A(88,kk,4,0,"button",38),c()()()(),d(89,"div",21)(90,"div",22)(91,"h3",23)(92,"span",6),m(93,"list"),c(),m(94," Lista de Estudiantes "),c()(),d(95,"div",39),A(96,Ek,2,0,"div",40)(97,Sk,5,0,"div",41)(98,Ak,2,0),c()()(),d(99,"div",42)(100,"div",22)(101,"h3",23)(102,"span",6),m(103,"people"),c(),m(104," Usuarios del Sistema "),c()(),d(105,"div",39),A(106,Ik,2,0,"div",40)(107,Rk,5,0,"div",41)(108,Ok,2,0),c()()()),e&2&&(h(7),F("title",t.themeService.isDark?"Cambiar a modo claro":"Cambiar a modo oscuro"),h(2),S(t.themeService.isDark?"light_mode":"dark_mode"),h(16),S(t.getResumenRoles().docentes),h(8),S(t.getResumenRoles().apoderados),h(8),S(t.estudiantes().length),h(8),S(t.getResumenRoles().admins),h(8),S(t.editingEstudiante()?"edit":"person_add"),h(),ne(" ",t.editingEstudiante()?"Editar Estudiante":"Nuevo Estudiante"," "),h(2),F("formGroup",t.estudianteForm),h(9),he(t.apoderados()),h(15),F("disabled",!t.estudianteForm.valid||t.isSubmitting()),h(3),ne(" ",t.isSubmitting()?"Guardando...":t.editingEstudiante()?"Actualizar":"Crear Estudiante"," "),h(),I(t.editingEstudiante()?88:-1),h(8),I(t.isLoadingStudents()?96:t.estudiantes().length===0?97:98),h(10),I(t.isLoadingUsers()?106:t.usuarios().length===0?107:108))},dependencies:[In,mp,hp,Kt,Ts,Mn,An,mn,bt,dn,st],styles:[".stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:24px}.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:16px!important}.stat-icon[_ngcontent-%COMP%]{font-size:40px;width:40px;height:40px}.stat-icon.docentes[_ngcontent-%COMP%]{color:var(--info)}.stat-icon.apoderados[_ngcontent-%COMP%]{color:var(--accent)}.stat-icon.estudiantes[_ngcontent-%COMP%]{color:var(--success)}.stat-icon.admins[_ngcontent-%COMP%]{color:var(--warning)}.stat-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.stat-number[_ngcontent-%COMP%]{font-size:28px;font-weight:700;line-height:1}.stat-label[_ngcontent-%COMP%]{font-size:13px;color:var(--text-secondary);margin-top:2px}.tab-icon[_ngcontent-%COMP%]{margin-right:8px}.tab-content[_ngcontent-%COMP%]{padding:24px 0}.admin-form[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:0 16px}.admin-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:last-of-type{grid-column:1 / -1}.form-actions[_ngcontent-%COMP%]{grid-column:1 / -1;display:flex;gap:12px;margin-top:8px}.role-chip[_ngcontent-%COMP%]{font-size:12px;padding:4px 12px;border-radius:16px;font-weight:500;text-transform:capitalize}.role-chip.docente[_ngcontent-%COMP%]{background-color:var(--info);color:#fff}.role-chip.apoderado[_ngcontent-%COMP%]{background-color:var(--accent);color:#fff}.role-chip.admin[_ngcontent-%COMP%]{background-color:var(--warning);color:#fff}.loading-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:32px;gap:16px;color:#757575}.empty-state[_ngcontent-%COMP%]{text-align:center;color:#9e9e9e;padding:24px}.full-width[_ngcontent-%COMP%]{width:100%}.form-card[_ngcontent-%COMP%], .list-card[_ngcontent-%COMP%]{margin-bottom:24px}"]})};var Fk=(n,i)=>i.id;function Pk(n,i){if(n&1){let e=pe();d(0,"button",17),D("click",function(){J(e);let a=C();return ee(a.guardarAsistencia())}),d(1,"span",3),m(2,"save"),c(),m(3),c()}if(n&2){let e=C();F("disabled",e.isSaving()),h(3),ne(" ",e.isSaving()?"Guardando...":"Guardar Asistencia"," ")}}function Lk(n,i){n&1&&(d(0,"div",15),P(1,"mat-spinner",18),d(2,"p"),m(3,"Cargando alumnos..."),c()())}function Nk(n,i){if(n&1&&(d(0,"mat-option",24),m(1),c()),n&2){let e=i.$implicit;F("value",e),h(),S(e)}}function Bk(n,i){n&1&&(d(0,"div",29)(1,"span",3),m(2,"search_off"),c(),d(3,"p"),m(4,"No hay estudiantes para el curso seleccionado."),c()())}function Vk(n,i){if(n&1){let e=pe();d(0,"tr")(1,"td")(2,"div",34)(3,"div",35),m(4),c(),d(5,"span"),m(6),c()()(),d(7,"td")(8,"span",36),m(9),c()(),d(10,"td",32)(11,"div",37)(12,"span",38),m(13),c(),d(14,"mat-slide-toggle",39),D("change",function(){let a=J(e).$implicit,r=C(3);return ee(r.toggleAsistencia(a))}),c()()()()}if(n&2){let e=i.$implicit;R("ausente",!e.presente),h(4),ne(" ",e.nombre_completo.charAt(0)," "),h(2),S(e.nombre_completo),h(3),S(e.curso),h(3),R("active",e.presente),h(),ne(" ",e.presente?"Presente":"Ausente"," "),h(),F("checked",e.presente)}}function zk(n,i){if(n&1&&(d(0,"div",30)(1,"table",31)(2,"thead")(3,"tr")(4,"th"),m(5,"Estudiante"),c(),d(6,"th"),m(7,"Curso"),c(),d(8,"th",32),m(9,"Estado de Asistencia"),c()()(),d(10,"tbody"),ue(11,Vk,15,9,"tr",33,Fk),c()()()),n&2){let e=C(2);h(11),he(e.estudiantesFiltrados())}}function jk(n,i){if(n&1){let e=pe();d(0,"div",19)(1,"div",20)(2,"span",21),m(3,"filter_list"),c(),d(4,"mat-form-field",22)(5,"mat-label"),m(6,"Filtrar por curso"),c(),d(7,"mat-select",23),D("selectionChange",function(a){J(e);let r=C();return ee(r.cursoSeleccionado.set(a.value))}),ue(8,Nk,2,2,"mat-option",24,Dc),c()()(),d(10,"div",25)(11,"button",26),D("click",function(){J(e);let a=C();return ee(a.marcarTodos(!0))}),d(12,"span",27),m(13,"check_circle"),c(),m(14," Todos presentes "),c(),d(15,"button",26),D("click",function(){J(e);let a=C();return ee(a.marcarTodos(!1))}),d(16,"span",28),m(17,"cancel"),c(),m(18," Limpiar "),c()()(),A(19,Bk,5,0,"div",29)(20,zk,13,0,"div",30)}if(n&2){let e=C();h(7),F("value",e.cursoSeleccionado()),h(),he(e.cursosDisponibles()),h(11),I(e.estudiantesFiltrados().length===0?19:20)}}function Hk(n,i){n&1&&(d(0,"div",16),P(1,"mat-spinner",40),d(2,"p"),m(3,"Guardando registros de asistencia..."),c()())}var nc=class n{apiService=l(lt);snackBar=l(et);router=l(qe);todosEstudiantes=_([]);cursoSeleccionado=_("");isLoading=_(!0);isSaving=_(!1);displayedColumns=["nombre","curso","acciones"];today=new Date;cursosDisponibles=gt(()=>[...new Set(this.todosEstudiantes().map(e=>e.curso))].sort());estudiantesFiltrados=gt(()=>{let i=this.cursoSeleccionado();return i?this.todosEstudiantes().filter(e=>e.curso===i):[]});ngOnInit(){this.cargarEstudiantes()}cargarEstudiantes(){this.apiService.getEstudiantes().subscribe({next:i=>{this.todosEstudiantes.set(i.map(e=>me(v({},e),{presente:!1}))),this.isLoading.set(!1)},error:()=>{this.snackBar.open("Error al cargar estudiantes","Cerrar",{duration:3e3}),this.isLoading.set(!1)}})}guardarAsistencia(){let i=this.estudiantesFiltrados();if(i.length===0){this.snackBar.open("Selecciona un curso primero","Cerrar",{duration:3e3});return}this.isSaving.set(!0);let e=i.map(t=>({estudiante:t.id,presente:t.presente}));this.apiService.registrarAsistenciaMasiva(e).subscribe({next:()=>{this.snackBar.open("Asistencia guardada con \xE9xito","Cerrar",{duration:3e3}),this.isSaving.set(!1),this.router.navigate(["/docente"])},error:()=>{this.snackBar.open("Error al registrar la asistencia","Cerrar",{duration:3e3}),this.isSaving.set(!1)}})}toggleAsistencia(i){i.presente=!i.presente}marcarTodos(i){this.estudiantesFiltrados().forEach(e=>e.presente=i)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-asistencia"]],standalone:!1,decls:28,vars:7,consts:[[1,"header-bar"],[1,"header-left"],["routerLink","/docente","title","Volver al panel",1,"btn-icon"],[1,"material-icons"],[1,"header-title"],[1,"header-right"],[1,"date-pill"],[1,"page-container"],[1,"content-card"],[1,"card-header"],[1,"card-header-left"],[1,"card-title"],[1,"card-header-right"],[1,"btn","btn-primary",3,"disabled"],[1,"card-body"],[1,"loading-container"],[1,"save-overlay"],[1,"btn","btn-primary",3,"click","disabled"],["diameter","40"],[1,"filter-toolbar"],[1,"filter-group"],[1,"material-icons","filter-icon"],["appearance","outline",1,"premium-select"],[3,"selectionChange","value"],[3,"value"],[1,"action-group"],[1,"btn","btn-secondary",3,"click"],[1,"material-icons","color-success"],[1,"material-icons","color-danger"],[1,"empty-state"],[1,"table-container"],[1,"premium-table"],[1,"text-center"],[3,"ausente"],[1,"student-cell"],[1,"avatar"],[1,"badge-curso"],[1,"toggle-container"],[1,"toggle-label"],["color","primary",3,"change","checked"],["diameter","50"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"div",1)(2,"button",2)(3,"span",3),m(4,"arrow_back"),c()(),d(5,"h1",4),m(6,"Asistencia"),c()(),d(7,"div",5)(8,"div",6)(9,"span",3),m(10,"calendar_today"),c(),d(11,"span"),m(12),Ee(13,"date"),c()()()(),d(14,"div",7)(15,"div",8)(16,"div",9)(17,"div",10)(18,"h3",11)(19,"span",3),m(20,"groups"),c(),m(21," Lista de Estudiantes "),c()(),d(22,"div",12),A(23,Pk,4,2,"button",13),c()(),d(24,"div",14),A(25,Lk,4,0,"div",15)(26,jk,21,2),c()(),A(27,Hk,4,0,"div",16),c()),e&2&&(h(12),S(Ie(13,4,t.today,"dd/MM/yyyy")),h(11),I(t.isLoading()?-1:23),h(2),I(t.isLoading()?25:26),h(2),I(t.isSaving()?27:-1))},dependencies:[on,hn,Qt,am,Wa,Vn,st,xt],styles:[".filter-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:16px 22px;background:var(--bg-card-2);border-bottom:1px solid var(--border-light);gap:20px;flex-wrap:wrap}.date-pill[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:6px 14px;background:var(--bg-subtle);border:1px solid var(--border-light);border-radius:var(--radius-pill);color:var(--text-secondary);font-size:.85rem;font-weight:600}.date-pill[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:16px;color:var(--brand)}.filter-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.filter-icon[_ngcontent-%COMP%]{color:var(--text-muted)}.premium-select[_ngcontent-%COMP%]{width:240px;margin-bottom:-1.25em}.action-group[_ngcontent-%COMP%]{display:flex;gap:10px}.table-container[_ngcontent-%COMP%]{overflow-x:auto}.premium-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-top:10px}.premium-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;padding:16px 22px;font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--text-muted);border-bottom:1px solid var(--border)}.premium-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:14px 22px;border-bottom:1px solid var(--border-light);transition:background-color .2s}.premium-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background-color:var(--bg-hover)}.student-cell[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;font-weight:600;color:var(--text-primary)}.avatar[_ngcontent-%COMP%]{width:32px;height:32px;background:var(--brand-light);color:var(--brand);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:700}.badge-curso[_ngcontent-%COMP%]{display:inline-block;padding:4px 10px;background:var(--bg-subtle);border:1px solid var(--border);border-radius:6px;font-size:.75rem;font-weight:600;color:var(--text-secondary)}.text-center[_ngcontent-%COMP%]{text-align:center}.toggle-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:12px}.toggle-label[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;color:var(--text-muted);min-width:60px;text-align:right;transition:color .2s}.toggle-label.active[_ngcontent-%COMP%]{color:var(--success)}tr.ausente[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{opacity:.8}.color-success[_ngcontent-%COMP%]{color:var(--success)}.color-danger[_ngcontent-%COMP%]{color:var(--danger)}.save-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:#0003;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:1000;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;gap:16px}@media(max-width:768px){.filter-toolbar[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.premium-select[_ngcontent-%COMP%]{width:100%}}"]})};var Uk=(n,i)=>i.id;function $k(n,i){if(n&1){let e=pe();d(0,"button",20),D("click",function(){J(e);let a=C();return ee(a.cancelarEdicion())}),m(1," Cancelar "),c()}}function Gk(n,i){n&1&&(d(0,"div",18),P(1,"mat-spinner",21),d(2,"p"),m(3,"Cargando evaluaciones..."),c()())}function Wk(n,i){n&1&&(d(0,"p",19),m(1,"No hay evaluaciones registradas a\xFAn."),c())}function Yk(n,i){if(n&1){let e=pe();d(0,"mat-list-item")(1,"mat-icon",22),m(2,"event"),c(),d(3,"div",23),m(4),c(),d(5,"div",24),m(6),Ee(7,"date"),c(),d(8,"div",25)(9,"button",26),D("click",function(){let a=J(e).$implicit,r=C(2);return ee(r.editar(a))}),d(10,"mat-icon"),m(11,"edit"),c()(),d(12,"button",27),D("click",function(){let a=J(e).$implicit,r=C(2);return ee(r.eliminar(a.id))}),d(13,"mat-icon"),m(14,"delete"),c()()()()}if(n&2){let e=i.$implicit;h(4),Ue("",e.titulo," - ",e.asignatura),h(2),Ue("",e.curso," | ",Ie(7,4,e.fecha_evaluacion,"dd/MM/yyyy"))}}function qk(n,i){if(n&1&&(d(0,"mat-list"),ue(1,Yk,15,7,"mat-list-item",null,Uk),c()),n&2){let e=C();h(),he(e.evaluaciones())}}var ic=class n{fb=l(Rn);apiService=l(lt);snackBar=l(et);evaluaciones=_([]);isLoading=_(!0);isSubmitting=_(!1);editingItem=_(null);evaluacionForm=this.fb.group({titulo:["",[ke.required]],descripcion:["",[ke.required]],fecha_evaluacion:[new Date,[ke.required]],asignatura:["",[ke.required]],curso:["",[ke.required]]});ngOnInit(){this.cargarEvaluaciones()}cargarEvaluaciones(){this.apiService.getEvaluaciones().subscribe({next:i=>{this.evaluaciones.set(i),this.isLoading.set(!1)},error:()=>{this.snackBar.open("Error al cargar evaluaciones","Cerrar",{duration:3e3}),this.isLoading.set(!1)}})}onSubmit(){if(this.evaluacionForm.valid){this.isSubmitting.set(!0);let i=this.editingItem();i?this.apiService.actualizarEvaluacion(i.id,this.evaluacionForm.value).subscribe({next:()=>{this.snackBar.open("Evaluaci\xF3n actualizada","Cerrar",{duration:3e3}),this.resetForm(),this.cargarEvaluaciones()},error:()=>{this.snackBar.open("Error al actualizar la evaluaci\xF3n","Cerrar",{duration:3e3}),this.isSubmitting.set(!1)}}):this.apiService.crearEvaluacion(this.evaluacionForm.value).subscribe({next:()=>{this.snackBar.open("Evaluaci\xF3n creada con \xE9xito","Cerrar",{duration:3e3}),this.resetForm(),this.cargarEvaluaciones()},error:()=>{this.snackBar.open("Error al crear la evaluaci\xF3n","Cerrar",{duration:3e3}),this.isSubmitting.set(!1)}})}}editar(i){this.editingItem.set(i),this.evaluacionForm.patchValue({titulo:i.titulo,descripcion:i.descripcion,fecha_evaluacion:new Date(i.fecha_evaluacion),asignatura:i.asignatura,curso:i.curso})}cancelarEdicion(){this.resetForm()}resetForm(){this.evaluacionForm.reset({fecha_evaluacion:new Date}),this.editingItem.set(null),this.isSubmitting.set(!1)}eliminar(i){confirm("\xBFEst\xE1s seguro de eliminar esta evaluaci\xF3n?")&&this.apiService.eliminarEvaluacion(i).subscribe({next:()=>{this.snackBar.open("Evaluaci\xF3n eliminada","Cerrar",{duration:3e3}),this.cargarEvaluaciones()}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-evaluaciones"]],standalone:!1,decls:48,vars:8,consts:[["picker",""],["color","primary"],["mat-icon-button","","routerLink","/docente"],[1,"content"],[1,"form-card"],[1,"eval-form",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","titulo","placeholder","Ej: Prueba parcial 1","required",""],["matInput","","formControlName","asignatura","placeholder","Ej: Matem\xE1ticas","required",""],["matInput","","formControlName","curso","placeholder","Ej: 1\xB0 B\xE1sico A","required",""],["matInput","","formControlName","fecha_evaluacion","required","",3,"matDatepicker"],["matIconSuffix","",3,"for"],["appearance","outline",1,"full-width"],["matInput","","formControlName","descripcion","rows","3","placeholder","Detalles de la evaluaci\xF3n...","required",""],[1,"form-actions"],["mat-raised-button","","color","primary","type","submit",1,"full-width",3,"disabled"],["mat-stroked-button","","type","button",1,"full-width"],[1,"list-card"],[1,"loading-container"],[1,"empty-state"],["mat-stroked-button","","type","button",1,"full-width",3,"click"],["diameter","40"],["matListItemIcon",""],["matListItemTitle",""],["matListItemLine",""],["matListItemMeta",""],["mat-icon-button","","color","primary","matTooltip","Editar",3,"click"],["mat-icon-button","","color","warn","matTooltip","Eliminar",3,"click"]],template:function(e,t){if(e&1&&(d(0,"mat-toolbar",1)(1,"button",2)(2,"mat-icon"),m(3,"arrow_back"),c()(),d(4,"span"),m(5,"Gesti\xF3n de Evaluaciones"),c()(),d(6,"div",3)(7,"mat-card",4)(8,"mat-card-header")(9,"mat-card-title"),m(10),c()(),d(11,"mat-card-content")(12,"form",5),D("ngSubmit",function(){return t.onSubmit()}),d(13,"mat-form-field",6)(14,"mat-label"),m(15,"T\xEDtulo"),c(),P(16,"input",7),c(),d(17,"mat-form-field",6)(18,"mat-label"),m(19,"Asignatura"),c(),P(20,"input",8),c(),d(21,"mat-form-field",6)(22,"mat-label"),m(23,"Curso"),c(),P(24,"input",9),c(),d(25,"mat-form-field",6)(26,"mat-label"),m(27,"Fecha de Evaluaci\xF3n"),c(),P(28,"input",10)(29,"mat-datepicker-toggle",11)(30,"mat-datepicker",null,0),c(),d(32,"mat-form-field",12)(33,"mat-label"),m(34,"Descripci\xF3n"),c(),P(35,"textarea",13),c(),d(36,"div",14)(37,"button",15),m(38),c(),A(39,$k,2,0,"button",16),c()()()(),d(40,"mat-card",17)(41,"mat-card-header")(42,"mat-card-title"),m(43,"Evaluaciones Programadas"),c()(),d(44,"mat-card-content"),A(45,Gk,4,0,"div",18)(46,Wk,2,0,"p",19)(47,qk,3,0,"mat-list"),c()()()),e&2){let a=ft(31);h(10),ne(" ",t.editingItem()?"Editar Evaluaci\xF3n":"Nueva Evaluaci\xF3n"," "),h(2),F("formGroup",t.evaluacionForm),h(16),F("matDatepicker",a),h(),F("for",a),h(8),F("disabled",!t.evaluacionForm.valid||t.isSubmitting()),h(),ne(" ",t.isSubmitting()?"Guardando...":t.editingItem()?"Actualizar Evaluaci\xF3n":"Programar Evaluaci\xF3n"," "),h(),I(t.editingItem()?39:-1),h(6),I(t.isLoading()?45:t.evaluaciones().length===0?46:47)}},dependencies:[on,In,Kt,Mn,An,mn,bt,dn,Ca,xa,Da,wa,Fa,hn,Qt,Ia,Et,Zt,za,Ci,Rg,fl,pm,bl,vl,fo,ho,uo,po,st,ei,xt],styles:[".loading-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:32px;gap:16px}.empty-state[_ngcontent-%COMP%]{text-align:center;color:#9e9e9e;padding:24px}"]})};var ob=(n,i)=>i.id;function Kk(n,i){if(n&1&&(d(0,"mat-option",7),m(1),c()),n&2){let e=i.$implicit;F("value",e.id),h(),S(e.nombre_completo)}}function Qk(n,i){if(n&1){let e=pe();d(0,"button",19),D("click",function(){J(e);let a=C();return ee(a.cancelarEdicion())}),m(1,"Cancelar"),c()}}function Xk(n,i){n&1&&(d(0,"div",17),P(1,"mat-spinner",20),d(2,"p"),m(3,"Cargando..."),c()())}function Zk(n,i){n&1&&(d(0,"p",18),m(1,"No has registrado anotaciones recientemente."),c())}function Jk(n,i){if(n&1){let e=pe();d(0,"mat-list-item")(1,"mat-icon",21),m(2),c(),d(3,"div",22),m(4),c(),d(5,"div",23),m(6),c(),d(7,"div",24),m(8),Ee(9,"date"),c(),d(10,"div",25)(11,"button",26),D("click",function(){let a=J(e).$implicit,r=C(2);return ee(r.editar(a))}),d(12,"mat-icon"),m(13,"edit"),c()(),d(14,"button",27),D("click",function(){let a=J(e).$implicit,r=C(2);return ee(r.eliminar(a.id))}),d(15,"mat-icon"),m(16,"delete"),c()()()()}if(n&2){let e=i.$implicit;h(),ot("color",e.tipo==="positiva"?"#4caf50":"#f44336"),h(),ne(" ",e.tipo==="positiva"?"sentiment_satisfied":"sentiment_dissatisfied"," "),h(2),S(e.estudiante_nombre),h(2),S(e.descripcion),h(2),S(Ie(9,6,e.fecha,"dd/MM/yyyy HH:mm"))}}function eE(n,i){if(n&1&&(d(0,"mat-list"),ue(1,Jk,17,9,"mat-list-item",null,ob),c()),n&2){let e=C();h(),he(e.anotaciones())}}var ac=class n{fb=l(Rn);apiService=l(lt);snackBar=l(et);estudiantes=_([]);anotaciones=_([]);isLoading=_(!0);isSubmitting=_(!1);editingItem=_(null);anotacionForm=this.fb.group({estudiante:["",[ke.required]],tipo:["positiva",[ke.required]],descripcion:["",[ke.required]]});ngOnInit(){this.cargarEstudiantes(),this.cargarAnotaciones()}cargarEstudiantes(){this.apiService.getEstudiantes().subscribe({next:i=>this.estudiantes.set(i)})}cargarAnotaciones(){this.apiService.getAnotaciones().subscribe({next:i=>{this.anotaciones.set(i),this.isLoading.set(!1)},error:()=>{this.snackBar.open("Error al cargar anotaciones","Cerrar",{duration:3e3}),this.isLoading.set(!1)}})}onSubmit(){if(this.anotacionForm.valid){this.isSubmitting.set(!0);let i=this.editingItem();i?this.apiService.actualizarAnotacion(i.id,this.anotacionForm.value).subscribe({next:()=>{this.snackBar.open("Anotaci\xF3n actualizada","Cerrar",{duration:3e3}),this.resetForm(),this.cargarAnotaciones()},error:()=>{this.snackBar.open("Error al actualizar la anotaci\xF3n","Cerrar",{duration:3e3}),this.isSubmitting.set(!1)}}):this.apiService.crearAnotacion(this.anotacionForm.value).subscribe({next:()=>{this.snackBar.open("Anotaci\xF3n registrada con \xE9xito","Cerrar",{duration:3e3}),this.resetForm(),this.cargarAnotaciones()},error:()=>{this.snackBar.open("Error al registrar la anotaci\xF3n","Cerrar",{duration:3e3}),this.isSubmitting.set(!1)}})}}editar(i){this.editingItem.set(i),this.anotacionForm.patchValue({estudiante:i.estudiante,tipo:i.tipo,descripcion:i.descripcion})}cancelarEdicion(){this.resetForm()}resetForm(){this.anotacionForm.reset({tipo:"positiva"}),this.editingItem.set(null),this.isSubmitting.set(!1)}eliminar(i){confirm("\xBFEst\xE1s seguro de eliminar esta anotaci\xF3n?")&&this.apiService.eliminarAnotacion(i).subscribe({next:()=>{this.snackBar.open("Anotaci\xF3n eliminada","Cerrar",{duration:3e3}),this.cargarAnotaciones()}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-anotaciones"]],standalone:!1,decls:43,vars:6,consts:[["color","primary"],["mat-icon-button","","routerLink","/docente"],[1,"content"],[1,"form-card"],[1,"eval-form",3,"ngSubmit","formGroup"],["appearance","outline"],["formControlName","estudiante","required",""],[3,"value"],["formControlName","tipo","required",""],["value","positiva"],["value","negativa"],["appearance","outline",1,"full-width"],["matInput","","formControlName","descripcion","rows","3","required",""],[1,"form-actions"],["mat-raised-button","","color","accent","type","submit",1,"full-width",3,"disabled"],["mat-stroked-button","","type","button",1,"full-width"],[1,"list-card"],[1,"loading-container"],[1,"empty-state"],["mat-stroked-button","","type","button",1,"full-width",3,"click"],["diameter","40"],["matListItemIcon",""],["matListItemTitle",""],["matListItemLine",""],["matListItemLine","",1,"date-text"],["matListItemMeta",""],["mat-icon-button","","color","primary","matTooltip","Editar",3,"click"],["mat-icon-button","","color","warn","matTooltip","Eliminar",3,"click"]],template:function(e,t){e&1&&(d(0,"mat-toolbar",0)(1,"button",1)(2,"mat-icon"),m(3,"arrow_back"),c()(),d(4,"span"),m(5,"Registro Conductual"),c()(),d(6,"div",2)(7,"mat-card",3)(8,"mat-card-header")(9,"mat-card-title"),m(10),c()(),d(11,"mat-card-content")(12,"form",4),D("ngSubmit",function(){return t.onSubmit()}),d(13,"mat-form-field",5)(14,"mat-label"),m(15,"Seleccionar Estudiante"),c(),d(16,"mat-select",6),ue(17,Kk,2,2,"mat-option",7,ob),c()(),d(19,"mat-form-field",5)(20,"mat-label"),m(21,"Tipo"),c(),d(22,"mat-select",8)(23,"mat-option",9),m(24,"Positiva (+)"),c(),d(25,"mat-option",10),m(26,"Negativa (-)"),c()()(),d(27,"mat-form-field",11)(28,"mat-label"),m(29,"Descripci\xF3n / Observaci\xF3n"),c(),P(30,"textarea",12),c(),d(31,"div",13)(32,"button",14),m(33),c(),A(34,Qk,2,0,"button",15),c()()()(),d(35,"mat-card",16)(36,"mat-card-header")(37,"mat-card-title"),m(38,"Mis \xDAltimas Anotaciones"),c()(),d(39,"mat-card-content"),A(40,Xk,4,0,"div",17)(41,Zk,2,0,"p",18)(42,eE,3,0,"mat-list"),c()()()),e&2&&(h(10),ne(" ",t.editingItem()?"Editar Anotaci\xF3n":"Nueva Anotaci\xF3n"," "),h(2),F("formGroup",t.anotacionForm),h(5),he(t.estudiantes()),h(15),F("disabled",!t.anotacionForm.valid||t.isSubmitting()),h(),ne(" ",t.isSubmitting()?"Guardando...":t.editingItem()?"Actualizar":"Registrar Anotaci\xF3n"," "),h(),I(t.editingItem()?34:-1),h(6),I(t.isLoading()?40:t.anotaciones().length===0?41:42))},dependencies:[on,In,Kt,Mn,An,mn,bt,dn,Ca,xa,Da,wa,Fa,hn,Qt,Et,Zt,za,Ci,Wa,Vn,bl,vl,fo,ho,uo,po,st,ei,xt],styles:[".eval-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;margin-top:16px}.full-width[_ngcontent-%COMP%]{width:100%}.form-card[_ngcontent-%COMP%]{margin-bottom:24px}.date-text[_ngcontent-%COMP%]{font-size:.75rem;color:#757575}@media(min-width:600px){.eval-form[_ngcontent-%COMP%]{flex-direction:row;flex-wrap:wrap}.eval-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1 1 45%}.eval-form[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{flex:1 1 100%}}"]})};var sb=()=>["titulo","fecha","curso","acciones"];function tE(n,i){if(n&1){let e=pe();d(0,"button",24),D("click",function(){J(e);let a=C();return ee(a.cancelarEdicion())}),m(1,"Cancelar"),c()}}function nE(n,i){n&1&&(d(0,"div",21),P(1,"mat-spinner",25),d(2,"p"),m(3,"Cargando..."),c()())}function iE(n,i){n&1&&(d(0,"p",22),m(1,"No tienes reuniones programadas."),c())}function aE(n,i){n&1&&(d(0,"th",34),m(1," T\xEDtulo "),c())}function rE(n,i){if(n&1&&(d(0,"td",35),m(1),c()),n&2){let e=i.$implicit;h(),ne(" ",e.titulo," ")}}function oE(n,i){n&1&&(d(0,"th",34),m(1," Fecha y Hora "),c())}function sE(n,i){if(n&1&&(d(0,"td",35),m(1),Ee(2,"date"),c()),n&2){let e=i.$implicit;h(),ne(" ",Ie(2,1,e.fecha_hora,"dd/MM/yyyy HH:mm")," ")}}function lE(n,i){n&1&&(d(0,"th",34),m(1," Curso "),c())}function cE(n,i){if(n&1&&(d(0,"td",35),m(1),c()),n&2){let e=i.$implicit;h(),ne(" ",e.curso," ")}}function dE(n,i){n&1&&P(0,"th",34)}function mE(n,i){if(n&1){let e=pe();d(0,"td",35)(1,"button",36),D("click",function(){let a=J(e).$implicit,r=C(2);return ee(r.editar(a))}),d(2,"mat-icon"),m(3,"edit"),c()(),d(4,"button",37),D("click",function(){let a=J(e).$implicit,r=C(2);return ee(r.eliminar(a.id))}),d(5,"mat-icon"),m(6,"delete"),c()()()}}function uE(n,i){n&1&&P(0,"tr",38)}function hE(n,i){n&1&&P(0,"tr",39)}function pE(n,i){if(n&1&&(d(0,"table",23),Vi(1,26),Ae(2,aE,2,0,"th",27)(3,rE,2,1,"td",28),zi(),Vi(4,29),Ae(5,oE,2,0,"th",27)(6,sE,3,4,"td",28),zi(),Vi(7,30),Ae(8,lE,2,0,"th",27)(9,cE,2,1,"td",28),zi(),Vi(10,31),Ae(11,dE,1,0,"th",27)(12,mE,7,0,"td",28),zi(),Ae(13,uE,1,0,"tr",32)(14,hE,1,0,"tr",33),c()),n&2){let e=C();F("dataSource",e.reuniones()),h(13),F("matHeaderRowDef",Ec(3,sb)),h(),F("matRowDefColumns",Ec(4,sb))}}var rc=class n{fb=l(Rn);apiService=l(lt);snackBar=l(et);reuniones=_([]);isLoading=_(!0);isSubmitting=_(!1);editingItem=_(null);reunionForm=this.fb.group({titulo:["",[ke.required]],descripcion:["",[ke.required]],fecha_hora:["",[ke.required]],curso:["",[ke.required]],link_virtual:[""]});ngOnInit(){this.cargarReuniones()}cargarReuniones(){this.apiService.getReuniones().subscribe({next:i=>{this.reuniones.set(i),this.isLoading.set(!1)},error:()=>{this.snackBar.open("Error al cargar reuniones","Cerrar",{duration:3e3}),this.isLoading.set(!1)}})}onSubmit(){if(this.reunionForm.valid){this.isSubmitting.set(!0);let i=this.editingItem();i?this.apiService.actualizarReunion(i.id,this.reunionForm.value).subscribe({next:()=>{this.snackBar.open("Reuni\xF3n actualizada","Cerrar",{duration:3e3}),this.resetForm(),this.cargarReuniones()},error:()=>{this.snackBar.open("Error al actualizar la reuni\xF3n","Cerrar",{duration:3e3}),this.isSubmitting.set(!1)}}):this.apiService.crearReunion(this.reunionForm.value).subscribe({next:()=>{this.snackBar.open("Reuni\xF3n citada con \xE9xito","Cerrar",{duration:3e3}),this.resetForm(),this.cargarReuniones()},error:()=>{this.snackBar.open("Error al citar la reuni\xF3n","Cerrar",{duration:3e3}),this.isSubmitting.set(!1)}})}}editar(i){this.editingItem.set(i);let t=new Date(i.fecha_hora).toISOString().slice(0,16);this.reunionForm.patchValue({titulo:i.titulo,descripcion:i.descripcion,fecha_hora:t,curso:i.curso,link_virtual:i.link_virtual||""})}cancelarEdicion(){this.resetForm()}resetForm(){this.reunionForm.reset(),this.editingItem.set(null),this.isSubmitting.set(!1)}eliminar(i){confirm("\xBFEst\xE1s seguro de eliminar esta citaci\xF3n?")&&this.apiService.eliminarReunion(i).subscribe({next:()=>{this.snackBar.open("Reuni\xF3n eliminada","Cerrar",{duration:3e3}),this.cargarReuniones()}})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-reuniones"]],standalone:!1,decls:55,vars:6,consts:[["color","primary"],["mat-icon-button","","routerLink","/docente"],[1,"content"],[1,"form-card"],[1,"eval-form",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","titulo","placeholder","Ej: Reuni\xF3n de Apoderados","required",""],["matInput","","type","datetime-local","formControlName","fecha_hora","required",""],["formControlName","curso","required",""],["value","1\xB0 B\xE1sico"],["value","2\xB0 B\xE1sico"],["value","3\xB0 B\xE1sico"],["value","4\xB0 B\xE1sico"],["matInput","","formControlName","link_virtual","placeholder","https://meet.google.com/..."],["matSuffix",""],["appearance","outline",1,"full-width"],["matInput","","formControlName","descripcion","rows","4","required",""],[1,"form-actions"],["mat-raised-button","","color","accent","type","submit",1,"full-width",3,"disabled"],["mat-stroked-button","","type","button",1,"full-width"],[1,"list-card"],[1,"loading-container"],[1,"empty-state"],["mat-table","",1,"mat-elevation-z0","full-width",3,"dataSource"],["mat-stroked-button","","type","button",1,"full-width",3,"click"],["diameter","40"],["matColumnDef","titulo"],["mat-header-cell","",4,"matHeaderCell"],["mat-cell","",4,"matCell"],["matColumnDef","fecha"],["matColumnDef","curso"],["matColumnDef","acciones"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","color","primary","matTooltip","Editar",3,"click"],["mat-icon-button","","color","warn","matTooltip","Eliminar",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){e&1&&(d(0,"mat-toolbar",0)(1,"button",1)(2,"mat-icon"),m(3,"arrow_back"),c()(),d(4,"span"),m(5,"Gesti\xF3n de Reuniones"),c()(),d(6,"div",2)(7,"mat-card",3)(8,"mat-card-header")(9,"mat-card-title"),m(10),c()(),d(11,"mat-card-content")(12,"form",4),D("ngSubmit",function(){return t.onSubmit()}),d(13,"mat-form-field",5)(14,"mat-label"),m(15,"T\xEDtulo de la Reuni\xF3n"),c(),P(16,"input",6),c(),d(17,"mat-form-field",5)(18,"mat-label"),m(19,"Fecha y Hora"),c(),P(20,"input",7),c(),d(21,"mat-form-field",5)(22,"mat-label"),m(23,"Curso"),c(),d(24,"mat-select",8)(25,"mat-option",9),m(26,"1\xB0 B\xE1sico"),c(),d(27,"mat-option",10),m(28,"2\xB0 B\xE1sico"),c(),d(29,"mat-option",11),m(30,"3\xB0 B\xE1sico"),c(),d(31,"mat-option",12),m(32,"4\xB0 B\xE1sico"),c()()(),d(33,"mat-form-field",5)(34,"mat-label"),m(35,"Enlace Virtual (Opcional)"),c(),P(36,"input",13),d(37,"mat-icon",14),m(38,"link"),c()(),d(39,"mat-form-field",15)(40,"mat-label"),m(41,"Tabla de Temas / Descripci\xF3n"),c(),P(42,"textarea",16),c(),d(43,"div",17)(44,"button",18),m(45),c(),A(46,tE,2,0,"button",19),c()()()(),d(47,"mat-card",20)(48,"mat-card-header")(49,"mat-card-title"),m(50,"Reuniones Programadas"),c()(),d(51,"mat-card-content"),A(52,nE,4,0,"div",21)(53,iE,2,0,"p",22)(54,pE,15,5,"table",23),c()()()),e&2&&(h(10),S(t.editingItem()?"Editar Reuni\xF3n":"Citar Nueva Reuni\xF3n"),h(2),F("formGroup",t.reunionForm),h(32),F("disabled",!t.reunionForm.valid||t.isSubmitting()),h(),ne(" ",t.isSubmitting()?"Agendando...":t.editingItem()?"Actualizar Reuni\xF3n":"Programar Reuni\xF3n"," "),h(),I(t.editingItem()?46:-1),h(6),I(t.isLoading()?52:t.reuniones().length===0?53:54))},dependencies:[on,In,Kt,Mn,An,mn,bt,dn,Ca,xa,Da,wa,Fa,hn,Qt,Ia,Et,Zt,za,Ci,ag,lg,rg,cg,og,sg,dg,mg,Wa,Vn,st,ei,xt],styles:[".loading-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:32px;gap:16px}.empty-state[_ngcontent-%COMP%]{text-align:center;color:#9e9e9e;padding:24px}"]})};var cu=(n,i)=>i.id,fE=(n,i)=>i.nombre;function gE(n,i){n&1&&(d(0,"div",12),P(1,"mat-spinner",13),d(2,"p"),m(3,"Sincronizando tu historial acad\xE9mico..."),c()())}function _E(n,i){if(n&1&&P(0,"img",17),n&2){let e=C(2);F("src",e.perfil().foto_perfil,jo)}}function bE(n,i){if(n&1&&m(0),n&2){let e,t=C(2);Ue(" ",(e=t.perfil())==null||e.primer_nombre==null?null:e.primer_nombre.substring(0,1),"",(e=t.perfil())==null||e.apellido_paterno==null?null:e.apellido_paterno.substring(0,1)," ")}}function vE(n,i){n&1&&(d(0,"div",35),m(1,"No hay notas registradas a\xFAn."),c())}function yE(n,i){if(n&1&&(d(0,"div",41)(1,"div",42)(2,"strong"),m(3),c(),d(4,"span"),m(5),Ee(6,"date"),c()(),d(7,"div",43),m(8),Ee(9,"number"),c()()),n&2){let e=i.$implicit;h(3),S(e.evaluacion_titulo),h(2),ne("Registrado el ",Ie(6,5,e.fecha_registro,"dd/MM/yyyy")),h(2),R("rojo",e.valor<4),h(),ne(" ",Ie(9,8,e.valor,"1.1-1")," ")}}function CE(n,i){if(n&1&&(d(0,"div",36),ue(1,yE,10,11,"div",41,cu),c()),n&2){let e=C(2);h(),he(e.calificaciones().slice(0,5))}}function wE(n,i){n&1&&(d(0,"div",35),m(1,"\xA1Libre de evaluaciones por ahora! \u{1F389}"),c())}function xE(n,i){if(n&1&&(d(0,"div",44)(1,"div",45)(2,"span",6),m(3,"assignment"),c()(),d(4,"div",46)(5,"span",47),m(6),c(),d(7,"span",48),m(8),Ee(9,"date"),c()()()),n&2){let e=i.$implicit;h(6),S(e.titulo),h(2),Ue("",e.asignatura," \u2014 ",Ie(9,3,e.fecha_evaluacion,"fullDate"))}}function DE(n,i){if(n&1&&ue(0,xE,10,6,"div",44,cu),n&2){let e=C(2);he(e.proximasEvaluaciones)}}function kE(n,i){if(n&1&&(d(0,"div",49)(1,"span"),m(2),c(),d(3,"span",51),m(4),Ee(5,"number"),c()()),n&2){let e=i.$implicit;h(2),S(e.nombre),h(2),S(Ie(5,2,e.promedio,"1.1-1"))}}function EE(n,i){if(n&1&&(d(0,"div",38)(1,"div",32)(2,"h3",33)(3,"span",6),m(4,"warning"),c(),m(5," Materias Cr\xEDticas "),c()(),d(6,"div",34),ue(7,kE,6,5,"div",49,fE),d(9,"p",50),m(10,"\xA1Recomendamos reforzar estas materias!"),c()()()),n&2){let e=C(2);h(7),he(e.materiasCriticas)}}function SE(n,i){n&1&&(d(0,"p",35),m(1,"Sin observaciones recientes."),c())}function ME(n,i){if(n&1&&(d(0,"div",44)(1,"div",52)(2,"span",6),m(3),c()(),d(4,"div",46)(5,"span",47),m(6),Ee(7,"uppercase"),c(),d(8,"span",48),m(9),c()()()),n&2){let e=i.$implicit;h(),R("positiva",e.tipo==="positiva")("negativa",e.tipo==="negativa"),h(2),S(e.tipo==="positiva"?"stars":"report_problem"),h(3),S(Bu(7,7,e.tipo)),h(3),S(e.descripcion)}}function AE(n,i){if(n&1&&ue(0,ME,10,9,"div",44,cu),n&2){let e=C(2);he(e.anotacionesRecientes)}}function IE(n,i){if(n&1&&(d(0,"div",14)(1,"div",15)(2,"div",16),A(3,_E,1,1,"img",17)(4,bE,1,2),c(),d(5,"div",18)(6,"h2"),m(7),c(),d(8,"p"),m(9),c(),d(10,"div",19)(11,"span",6),m(12),c(),m(13),c()()(),d(14,"div",20)(15,"button",21)(16,"span",6),m(17,"download"),c(),m(18," Mi Ficha "),c()()(),d(19,"div",22)(20,"div",23)(21,"div",24)(22,"div",25)(23,"div",26)(24,"span",6),m(25,"star"),c()(),d(26,"div",27),m(27),Ee(28,"number"),c(),d(29,"div",28),m(30,"Promedio Gral."),c()(),d(31,"div",25)(32,"div",29)(33,"span",6),m(34,"event_available"),c()(),d(35,"div",27),m(36),Ee(37,"number"),c(),d(38,"div",28),m(39,"Asistencia"),c()(),d(40,"div",25)(41,"div",30)(42,"span",6),m(43,"pending_actions"),c()(),d(44,"div",27),m(45),c(),d(46,"div",28),m(47,"Eval. Pendientes"),c()()(),d(48,"div",31)(49,"div",32)(50,"h3",33)(51,"span",6),m(52,"trending_up"),c(),m(53," Rendimiento Reciente "),c()(),d(54,"div",34),A(55,vE,2,0,"div",35)(56,CE,3,0,"div",36),c()(),d(57,"div",31)(58,"div",32)(59,"h3",33)(60,"span",6),m(61,"event"),c(),m(62," Calendario de Pruebas "),c()(),d(63,"div",34),A(64,wE,2,0,"div",35)(65,DE,2,0),c()()(),d(66,"div",37),A(67,EE,11,0,"div",38),d(68,"div",31)(69,"div",32)(70,"h3",33)(71,"span",6),m(72,"description"),c(),m(73," Bit\xE1cora "),c()(),d(74,"div",34),A(75,SE,2,0,"p",35)(76,AE,2,0),c()(),d(77,"div",31)(78,"div",32)(79,"h3",33)(80,"span",6),m(81,"rocket_launch"),c(),m(82," Recursos "),c()(),d(83,"div",34)(84,"div",39)(85,"button",40)(86,"span",6),m(87,"library_books"),c(),m(88," Material de Clase"),c(),d(89,"button",40)(90,"span",6),m(91,"contact_mail"),c(),m(92," Mensaje al Docente"),c(),d(93,"button",40)(94,"span",6),m(95,"help_outline"),c(),m(96," Soporte Acad\xE9mico"),c()()()()()()),n&2){let e,t,a,r=C();h(3),I((e=r.perfil())!=null&&e.foto_perfil?3:4),h(4),ne("\xA1Hola, ",(t=r.perfil())==null?null:t.primer_nombre,"! \u{1F44B}"),h(2),Nu("",(a=r.perfil())==null?null:a.nivel_display," ",(a=r.perfil())==null?null:a.seccion," | RUT: ",(a=r.perfil())==null?null:a.rut),h(),R("warning",r.promedioGeneral<4.5),h(2),S(r.promedioGeneral>=4.5?"verified":"info"),h(),ne(" Estado Acad\xE9mico: ",r.promedioGeneral>=4.5?"Favorable":"Bajo Observaci\xF3n"," "),h(14),S(Ie(28,16,r.promedioGeneral,"1.1-1")),h(9),ne("",Ie(37,19,r.asistenciaPorcentaje,"1.0-0"),"%"),h(9),S(r.proximasEvaluaciones.length),h(10),I(r.calificaciones().length===0?55:56),h(9),I(r.proximasEvaluaciones.length===0?64:65),h(3),I(r.materiasCriticas.length>0?67:-1),h(8),I(r.anotacionesRecientes.length===0?75:76)}}var oc=class n{authService=l(Ft);apiService=l(lt);snackBar=l(et);themeService=l(Pt);perfil=_(null);asistencias=_([]);evaluaciones=_([]);anotaciones=_([]);calificaciones=_([]);reuniones=_([]);isLoading=_(!0);get username(){return localStorage.getItem("username")||"Alumno"}ngOnInit(){this.cargarTodo()}cargarTodo(){this.isLoading.set(!0),this.apiService.getEstudiantes().subscribe({next:i=>{i.length>0?(this.perfil.set(i[0]),this.cargarDatosRelacionados()):(this.isLoading.set(!1),this.snackBar.open("No se encontr\xF3 el perfil del estudiante","Cerrar",{duration:3e3}))},error:()=>{this.isLoading.set(!1),this.snackBar.open("Error al conectar con el servidor","Cerrar",{duration:3e3})}})}cargarDatosRelacionados(){this.apiService.getAsistencias().subscribe(i=>this.asistencias.set(i)),this.apiService.getEvaluaciones().subscribe(i=>this.evaluaciones.set(i)),this.apiService.getAnotaciones().subscribe(i=>this.anotaciones.set(i)),this.apiService.getReuniones().subscribe(i=>this.reuniones.set(i)),this.apiService.getCalificaciones().subscribe({next:i=>{this.calificaciones.set(i),this.isLoading.set(!1)},error:()=>this.isLoading.set(!1)})}get promedioGeneral(){let i=this.calificaciones();return i.length===0?0:i.reduce((t,a)=>t+parseFloat(a.valor),0)/i.length}get asistenciaPorcentaje(){let i=this.asistencias().length;return i===0?100:this.asistencias().filter(t=>t.presente).length/i*100}get materiasCriticas(){let i=this.calificaciones(),e={};i.forEach(a=>{let r=a.evaluacion_titulo.split(":")[0];e[r]||(e[r]=[]),e[r].push(parseFloat(a.valor))});let t=[];for(let a in e){let r=e[a].reduce((o,s)=>o+s,0)/e[a].length;r<4&&t.push({nombre:a,promedio:r})}return t}get proximasEvaluaciones(){return this.evaluaciones().filter(i=>new Date(i.fecha_evaluacion)>=new Date).sort((i,e)=>new Date(i.fecha_evaluacion).getTime()-new Date(e.fecha_evaluacion).getTime()).slice(0,3)}get anotacionesRecientes(){return this.anotaciones().slice(0,3)}logout(){this.authService.logout()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-panel-alumno"]],standalone:!1,decls:21,vars:4,consts:[[1,"header-bar"],[1,"header-left"],[1,"material-icons","header-icon"],[1,"header-title"],[1,"header-right"],[1,"btn-theme-toggle",3,"click","title"],[1,"material-icons"],[1,"user-info",2,"display","block"],[1,"user-name"],[1,"btn-logout",3,"click"],[1,"btn-text"],[1,"page-container"],[1,"loading-container"],["diameter","45"],[1,"hero-student"],[1,"hero-content"],[1,"student-avatar-large"],["alt","Perfil",3,"src"],[1,"hero-text"],[1,"academic-status"],[1,"hero-actions"],[1,"btn-premium"],[1,"dashboard-grid"],[1,"main-column"],[1,"stats-grid"],[1,"stat-card"],[1,"stat-icon",2,"background","rgba(0, 200, 150, 0.1)","color","var(--brand)"],[1,"stat-value"],[1,"stat-label"],[1,"stat-icon",2,"background","rgba(109, 72, 253, 0.1)","color","#6d48fd"],[1,"stat-icon",2,"background","rgba(245, 166, 35, 0.1)","color","var(--warning)"],[1,"content-card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"empty-state"],[1,"grades-list"],[1,"side-column"],[1,"content-card","alert-card"],[1,"quick-links"],[1,"link-btn"],[1,"grade-row"],[1,"grade-subject"],[1,"grade-value"],[1,"list-item"],[1,"list-icon","eval"],[1,"list-content"],[1,"title"],[1,"subtitle"],[1,"critical-item"],[1,"alert-footer"],[1,"badge-danger"],[1,"list-icon"]],template:function(e,t){e&1&&(d(0,"div",0)(1,"div",1)(2,"span",2),m(3,"school"),c(),d(4,"h1",3),m(5,"Centro Acad\xE9mico Personal"),c()(),d(6,"div",4)(7,"button",5),D("click",function(){return t.themeService.toggleTheme()}),d(8,"span",6),m(9),c()(),d(10,"div",7)(11,"span",8),m(12),c()(),d(13,"button",9),D("click",function(){return t.logout()}),d(14,"span",6),m(15,"logout"),c(),d(16,"span",10),m(17,"Salir"),c()()()(),d(18,"div",11),A(19,gE,4,0,"div",12)(20,IE,97,22),c()),e&2&&(h(7),F("title",t.themeService.isDark?"Cambiar a modo claro":"Cambiar a modo oscuro"),h(2),S(t.themeService.isDark?"light_mode":"dark_mode"),h(3),S(t.username),h(7),I(t.isLoading()?19:20))},dependencies:[st,Nc,ji,xt],styles:['.hero-student[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--brand) 0%,var(--accent) 100%);border-radius:var(--radius-lg);padding:40px;color:#fff;display:flex;justify-content:space-between;align-items:center;margin-bottom:32px;box-shadow:0 10px 30px #00c89633;position:relative;overflow:hidden;animation:_ngcontent-%COMP%_slideInUp .6s ease-out}.hero-student[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-50%;right:-10%;width:300px;height:300px;background:#ffffff1a;border-radius:50%}.hero-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:28px;position:relative;z-index:2}.student-avatar-large[_ngcontent-%COMP%]{width:100px;height:100px;background:#fff3;border:4px solid rgba(255,255,255,.3);border-radius:30px;display:flex;align-items:center;justify-content:center;font-size:2.5rem;font-weight:800;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.hero-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:800;margin:0 0 4px;text-shadow:0 2px 4px rgba(0,0,0,.1)}.hero-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1rem;opacity:.9;margin:0 0 16px}.academic-status[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;background:#ffffff26;border-radius:30px;font-weight:600;font-size:.9rem;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.academic-status.warning[_ngcontent-%COMP%]{background:#ff6b474d;border:1px solid rgba(255,255,255,.2)}.btn-premium[_ngcontent-%COMP%]{padding:12px 24px;background:#fff;color:var(--brand);border:none;border-radius:12px;font-weight:700;display:flex;align-items:center;gap:10px;cursor:pointer;transition:all .3s;box-shadow:0 4px 15px #0000001a}.btn-premium[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 6px 20px #00000026}.dashboard-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 360px;gap:28px;align-items:start}@media(max-width:1100px){.dashboard-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.main-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:28px}.side-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:28px;position:sticky;top:32px}.grades-list[_ngcontent-%COMP%]{padding:10px 0}.grade-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:16px;border-bottom:1px solid var(--border-light);transition:background .2s}.grade-row[_ngcontent-%COMP%]:last-child{border-bottom:none}.grade-row[_ngcontent-%COMP%]:hover{background:var(--bg-hover);border-radius:12px}.grade-subject[_ngcontent-%COMP%]{display:flex;flex-direction:column}.grade-subject[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:.95rem;color:var(--text-primary)}.grade-subject[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.75rem;color:var(--text-muted)}.grade-value[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:800;color:var(--brand)}.grade-value.rojo[_ngcontent-%COMP%]{color:var(--danger)}.alert-card[_ngcontent-%COMP%]{background:#e8344a08!important;border:1px solid rgba(232,52,74,.2)!important}.critical-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;font-weight:600;font-size:.9rem}.badge-danger[_ngcontent-%COMP%]{background:var(--danger);color:#fff;padding:4px 8px;border-radius:8px;font-size:.85rem}.alert-footer[_ngcontent-%COMP%]{margin-top:16px;font-size:.8rem;color:var(--danger);font-style:italic;text-align:center}.quick-links[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.link-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:14px;background:var(--bg-subtle);border:1px solid var(--border);border-radius:12px;color:var(--text-primary);font-weight:600;cursor:pointer;text-align:left;transition:all .2s}.link-btn[_ngcontent-%COMP%]:hover{background:var(--brand-light);border-color:var(--brand);color:var(--brand)}.link-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:20px}@keyframes _ngcontent-%COMP%_slideInUp{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}']})};var ri=(n,i)=>{let e=l(Ft),t=l(qe);if(!e.isAuthenticated())return t.createUrlTree(["/"]);let a=n.data?.rol;if(!a)return!0;let r=e.getRol(),o=Array.isArray(a)?a:[a];return r&&o.includes(r)?!0:r==="docente"?t.createUrlTree(["/docente"]):r==="apoderado"?t.createUrlTree(["/apoderado"]):t.createUrlTree(["/"])};var RE=[{path:"",component:Zl},{path:"docente",component:Jl,canActivate:[ri],data:{rol:["docente","admin"]}},{path:"asistencia",component:nc,canActivate:[ri],data:{rol:["docente","admin"]}},{path:"evaluaciones",component:ic,canActivate:[ri],data:{rol:["docente","admin"]}},{path:"anotaciones",component:ac,canActivate:[ri],data:{rol:["docente","admin"]}},{path:"reuniones",component:rc,canActivate:[ri],data:{rol:["docente","admin"]}},{path:"apoderado",component:ec,canActivate:[ri],data:{rol:["apoderado","admin"]}},{path:"admin",component:tc,canActivate:[ri],data:{rol:"admin"}},{path:"alumno",component:oc,canActivate:[ri],data:{rol:["alumno","admin"]}},{path:"**",redirectTo:""}],sc=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=E({type:n});static \u0275inj=k({imports:[Xl.forRoot(RE),Xl]})};var lc=class n{title=_("escolar-frontend");themeService=l(Pt);static \u0275fac=function(e){return new(e||n)};static \u0275cmp=x({type:n,selectors:[["app-root"]],standalone:!1,decls:1,vars:0,template:function(e,t){e&1&&P(0,"router-outlet")},dependencies:[Io],encapsulation:2})};var cc=class n{router=l(qe);http=l(En);isRefreshing=!1;refreshTokenSubject=new nt(null);intercept(i,e){if(i.url.includes("/token/")||i.url.includes("/token/refresh/"))return e.handle(i);let t=localStorage.getItem("token"),a=i;return t&&(a=this.addToken(i,t)),e.handle(a).pipe($n(r=>r.status===401?this.handle401Error(i,e):si(()=>r)))}addToken(i,e){return i.clone({setHeaders:{Authorization:`Bearer ${e}`}})}handle401Error(i,e){if(!this.isRefreshing){this.isRefreshing=!0,this.refreshTokenSubject.next(null);let t=localStorage.getItem("refresh_token");return t?this.http.post(`${sr.apiUrl}token/refresh/`,{refresh:t}).pipe(Ge(a=>(this.isRefreshing=!1,localStorage.setItem("token",a.access),this.refreshTokenSubject.next(a.access),e.handle(this.addToken(i,a.access)))),$n(a=>(this.isRefreshing=!1,this.forceLogout(),si(()=>a)))):(this.forceLogout(),si(()=>new Error("No refresh token disponible")))}return this.refreshTokenSubject.pipe(be(t=>t!==null),He(1),Ge(t=>e.handle(this.addToken(i,t))))}forceLogout(){localStorage.removeItem("token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("rol"),this.router.navigate(["/"])}static \u0275fac=function(e){return new(e||n)};static \u0275prov=y({token:n,factory:n.\u0275fac})};var dc=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=E({type:n,bootstrap:[lc]});static \u0275inj=k({providers:[bu(),_p(),{provide:bs,useClass:cc,multi:!0}],imports:[Kc,kr,sc,id,fp,gp,vp,uf,Pa,zf,jf,qf,ug,pg,Tg,Lg,Ng,Vg,jg,$g,Gg,Wg,Yg,_l,qg,Kg,Qg,n_]})};qc().bootstrapModule(dc,{}).catch(n=>console.error(n));
