(()=>{var xe=Object.create;var N=Object.defineProperty;var we=Object.getOwnPropertyDescriptor;var Ce=Object.getOwnPropertyNames,Y=Object.getOwnPropertySymbols,Pe=Object.getPrototypeOf,q=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var J=(e,t,a)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,K=(e,t)=>{for(var a in t||={})q.call(t,a)&&J(e,a,t[a]);if(Y)for(var a of Y(t))be.call(t,a)&&J(e,a,t[a]);return e};var je=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Ne=(e,t)=>{for(var a in t)N(e,a,{get:t[a],enumerable:!0})},Q=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Ce(t))!q.call(e,r)&&r!==a&&N(e,r,{get:()=>t[r],enumerable:!(n=we(t,r))||n.enumerable});return e};var g=(e,t,a)=>(a=e!=null?xe(Pe(e)):{},Q(t||!e||!e.__esModule?N(a,"default",{value:e,enumerable:!0}):a,e)),ke=e=>Q(N({},"__esModule",{value:!0}),e);var h=(e,t,a)=>new Promise((n,r)=>{var l=o=>{try{s(a.next(o))}catch(i){r(i)}},d=o=>{try{s(a.throw(o))}catch(i){r(i)}},s=o=>o.done?n(o.value):Promise.resolve(o.value).then(l,d);s((a=a.apply(e,t)).next())});var m=je((mt,X)=>{X.exports=shelter.solidWeb});var dt={};Ne(dt,{generateAssetId:()=>W,onLoad:()=>lt,onUnload:()=>st});var ye=g(m(),1),pe=g(m(),1),w=g(m(),1),u=g(m(),1);var b=g(m(),1),ne=g(m(),1),f=g(m(),1),k=g(m(),1),x=g(m(),1),I=g(m(),1);var ee=e=>{let a=Date.now()-e,n=Math.floor(a/1e3),r=Math.floor(n/60),l=Math.floor(r/60),d=Math.floor(l/24);return d>0?`${d} day${d>1?"s":""} ago`:l>0?`${l} hour${l>1?"s":""} ago`:r>0?`${r} minute${r>1?"s":""} ago`:"Just now"};var te="._gameCard_jydgh_1{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;height:72px;border-radius:5px;color:var(--text-normal);margin:12px 0}._gameCard_jydgh_1._cardNone_jydgh_1{background-color:var(--primary-400)}._gameCard_jydgh_1._cardPlaying_jydgh_1{background-color:var(--green-400)}._gameCard_jydgh_1._cardPlayed_jydgh_1{background:rgba(0,0,0,0);border-radius:0;border-bottom:1px solid var(--text-muted)}._gameCard_jydgh_1._cardPlayed_jydgh_1 ._gameCardLastPlayed_jydgh_1{color:var(--text-muted)}._gameCard_jydgh_1._cardPlayed_jydgh_1 ._lastPlayedTimestamp_jydgh_1{font-weight:bold}._gameCardInfo_jydgh_1{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;width:70%;height:100%;padding:0 20px}._gameCardName_jydgh_1{font-weight:bold}._gameCardIcons_jydgh_1{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;height:100%;padding:0 20px;color:var(--text-muted)}._gameCardIcons_jydgh_1 span{margin:4px;width:24px;height:24px;cursor:pointer}._gameCardIcons_jydgh_1 span:hover{color:var(--text-normal)}._gameCardIcons_jydgh_1 span svg{width:100%;height:100%}._trash_jydgh_1:hover{color:var(--text-danger) !important}",y={gameCard:"_gameCard_jydgh_1",cardNone:"_cardNone_jydgh_1",cardPlaying:"_cardPlaying_jydgh_1",cardPlayed:"_cardPlayed_jydgh_1",gameCardLastPlayed:"_gameCardLastPlayed_jydgh_1",lastPlayedTimestamp:"_lastPlayedTimestamp_jydgh_1",gameCardInfo:"_gameCardInfo_jydgh_1",gameCardName:"_gameCardName_jydgh_1",gameCardIcons:"_gameCardIcons_jydgh_1",trash:"_trash_jydgh_1"};var Ie=(0,b.template)('<svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"></path><path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"></path></svg>',6),Se=(0,b.template)('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"></path></svg>',4),Ae=(0,b.template)('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z"></path></svg>',4),Te=(0,b.template)("<div><div><span></span><span></span></div><div></div></div>",10),V=(0,b.template)("<span></span>",2),{ui:{injectCss:Le},plugin:{store:$},solid:{createSignal:Me}}=shelter,Re=()=>Ie.cloneNode(!0),He=()=>Se.cloneNode(!0),Ve=()=>Ae.cloneNode(!0),ae=!1,De=e=>{window.dorion&&window.__TAURI__.event.emit("remove_detectable",{name:e,exe:""});let t=Object.keys($.previouslyPlayed).find(a=>$.previouslyPlayed[a].name===e);delete $.previouslyPlayed[t],$.currentlyPlaying===e&&($.currentlyPlaying="")},A=e=>{var n;ae||(ae=!0,Le(te));let[t,a]=Me(e.name?(n=$.previouslyPlayed[e.name])==null?void 0:n.hide:!1);return(()=>{let r=Te.cloneNode(!0),l=r.firstChild,d=l.firstChild,s=d.nextSibling,o=l.nextSibling;return(0,x.insert)(d,()=>e.name||"No game detected"),(0,x.insert)(s,(()=>{let i=(0,I.memo)(()=>e.type==="played");return()=>i()?["Last played: ",(()=>{let c=V.cloneNode(!0);return(0,x.insert)(c,()=>ee(e.lastPlayed)),(0,k.effect)(()=>(0,f.className)(c,y.lastPlayedTimestamp)),c})()]:e.type==="playing"&&e.name?"Now playing!":"What are you playing?"})()),(0,x.insert)(o,(()=>{let i=(0,I.memo)(()=>!!e.local);return()=>i()&&(()=>{let c=V.cloneNode(!0);return c.$$click=()=>{De(e.name||"")},(0,x.insert)(c,Re),(0,k.effect)(()=>(0,f.className)(c,y.trash)),c})()})(),null),(0,x.insert)(o,(()=>{let i=(0,I.memo)(()=>!!(e.name&&e.type!=="playing"));return()=>i()&&(()=>{let c=V.cloneNode(!0);return c.$$click=()=>{if(!e.name)return;let v=Object.keys($.previouslyPlayed).find(P=>$.previouslyPlayed[P].name===e.name);$.previouslyPlayed[v].hide=!t(),a(!t())},(0,x.insert)(c,(()=>{let v=(0,I.memo)(()=>!!t());return()=>v()?Ve():He()})()),(0,k.effect)(()=>(0,f.className)(c,y.hide)),c})()})(),null),(0,k.effect)(i=>{let c=y.gameCard+" "+(e.type==="playing"&&e.name?y.cardPlaying:e.type==="played"?y.cardPlayed:y.cardNone),v=y.gameCardInfo,P=y.gameCardName,Z=y.gameCardLastPlayed,F=y.gameCardIcons;return c!==i._v$&&(0,f.className)(r,i._v$=c),v!==i._v$2&&(0,f.className)(l,i._v$2=v),P!==i._v$3&&(0,f.className)(d,i._v$3=P),Z!==i._v$4&&(0,f.className)(s,i._v$4=Z),F!==i._v$5&&(0,f.className)(o,i._v$5=F),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),r})()};(0,ne.delegateEvents)(["click"]);var U=g(m(),1),L=g(m(),1),D=g(m(),1),ce=g(m(),1),M=g(m(),1),me=g(m(),1),S=g(m(),1);var re="._ddown_1dg83_1{box-sizing:border-box;font-size:16px;width:100%;border-radius:3px;color:var(--text-normal);background-color:var(--input-background);border:none;transition:border-color .2s ease-in-out;padding:10px;appearance:none;cursor:pointer}._dcontainer_1dg83_1{position:relative;width:100%}._dsarrow_1dg83_1{position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none}._dsarrow_1dg83_1 path{fill:var(--header-secondary)}",T={ddown:"_ddown_1dg83_1",dcontainer:"_dcontainer_1dg83_1",dsarrow:"_dsarrow_1dg83_1"};var oe=g(m(),1),ie=g(m(),1),le=g(m(),1),Ue=(0,oe.template)('<svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"></path></svg>',4),se=e=>(()=>{let t=Ue.cloneNode(!0);return(0,le.effect)(()=>(0,ie.setAttribute)(t,"class",e.class)),t})();var Ee=(0,U.template)("<div><select></select></div>",4),Oe=(0,U.template)("<option></option>",2),{ui:{injectCss:ze}}=shelter,de=!1,_e=e=>(de||(de=!0,ze(re)),(()=>{let t=Ee.cloneNode(!0),a=t.firstChild;return(0,me.addEventListener)(a,"change",e.onChange),(0,M.insert)(a,()=>{var n;return(n=e.options)==null?void 0:n.map(r=>(()=>{let l=Oe.cloneNode(!0);return(0,M.insert)(l,()=>r.label),(0,S.effect)(()=>l.selected=r.value===(e==null?void 0:e.selected)),(0,S.effect)(()=>l.value=r.value),l})())}),(0,M.insert)(t,(0,ce.createComponent)(se,{get class(){return T.dsarrow}}),null),(0,S.effect)(n=>{let r=T.dcontainer,l=T.ddown,d=e.placeholder,s=e.id,o=e["aria-label"],i=e.disabled;return r!==n._v$&&(0,D.className)(t,n._v$=r),l!==n._v$2&&(0,D.className)(a,n._v$2=l),d!==n._v$3&&(0,L.setAttribute)(a,"placeholder",n._v$3=d),s!==n._v$4&&(0,L.setAttribute)(a,"id",n._v$4=s),o!==n._v$5&&(0,L.setAttribute)(a,"aria-label",n._v$5=o),i!==n._v$6&&(a.disabled=n._v$6=i),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),(0,S.effect)(()=>a.value=e.value),t})());var ge="._description_1kj0u_1{margin-top:8px;margin-bottom:8px}._addIt_1kj0u_1{margin-top:8px;margin-bottom:28px}._shead_1kj0u_1{margin-bottom:12px}._addhead_1kj0u_1{margin-top:42px;margin-bottom:12px}._modalhead_1kj0u_1{margin-top:12px}",j={description:"_description_1kj0u_1",addIt:"_addIt_1kj0u_1",shead:"_shead_1kj0u_1",addhead:"_addhead_1kj0u_1",modalhead:"_modalhead_1kj0u_1"};var Ge=(0,ye.template)('<a target="_blank">Add it!</a>',2),{ui:{Divider:Be,Header:E,HeaderTags:We,Text:O,TextBox:Ze,injectCss:Fe,openModal:Ye,ModalRoot:Je,ModalHeader:qe,ModalBody:Ke,ModalConfirmFooter:Qe},solid:{createSignal:C,createEffect:he},plugin:{store:R}}=shelter,{invoke:ve,event:Xe}=window.__TAURI__,ue=!1,fe=()=>{ue||(ue=!0,Fe(ge));let[e,t]=C(!1),[a,n]=C(""),[r,l]=C({}),[d,s]=C([]);return he(()=>h(void 0,null,function*(){var i;t((yield(i=window==null?void 0:window.__TAURI__)==null?void 0:i.app.getName())==="Dorion"),n(R.currentlyPlaying||""),l(R.previouslyPlayed||{}),s(e&&(yield ve("get_local_detectables")));let o=()=>{for(let c of d()){let v=Object.values(r()).findIndex(P=>P.name===c.name);v!==-1&&(r()[Object.keys(r())[v]].local=!0)}};o(),setInterval(()=>{n(R.currentlyPlaying||""),l(R.previouslyPlayed||{}),o()},2e3)})),[(0,u.createComponent)(E,{get tag(){return We.H1},get class(){return j.shead},children:"Registered Games"}),(0,u.createComponent)(O,{get class(){return j.description},children:"ShelteRPC will automatically update your status based on the game you're playing (if detectable). You can also manually add games to this list if it isn't being detected."}),(0,u.createComponent)(Be,{mt:20,mb:20}),(0,w.memo)((()=>{let o=(0,w.memo)(()=>!!a());return()=>o()?(0,u.createComponent)(A,{get name(){return a()},type:"playing",get local(){var i;return((i=Object.values(r()).find(c=>c.name===a()))==null?void 0:i.local)||!1}}):(0,u.createComponent)(A,{type:"none"})})()),(0,u.createComponent)(O,{get class(){return j.addIt},get children(){return["Not seeing your game? ",(0,w.memo)(()=>(0,w.memo)(()=>!!e())()?(()=>{let o=Ge.cloneNode(!0);return o.$$click=et,o})():"Adding it is unsupported.")]}}),(0,u.createComponent)(E,{get class(){return j.addhead},children:"Added Games"}),(0,w.memo)(()=>Object.values(r()).map(o=>o.name===a()?null:(0,u.createComponent)(A,{get name(){return o.name},get lastPlayed(){return o.lastPlayed},type:"played",get local(){return o==null?void 0:o.local}})))]};function et(){let[e,t]=C([]),[a,n]=C(0),[r,l]=C("");he(()=>h(this,null,function*(){let d=yield ve("get_windows");t(d)})),Ye(d=>(0,u.createComponent)(Je,{get children(){return[(0,u.createComponent)(qe,{get close(){return d.close},children:"Add a game"}),(0,u.createComponent)(Ke,{get children(){return(0,w.memo)(()=>e().length>0)()?[(0,u.createComponent)(_e,{get options(){return e().filter((s,o,i)=>i.findIndex(c=>c.process_name===s.process_name)===o).map(s=>({label:s.process_name,value:s.pid}))},placeholder:"Select process...",maxVisibleItems:5,closeOnSelect:!0,onChange:s=>n(Number(s.target.value))}),(0,u.createComponent)(E,{get class(){return j.modalhead},children:"Name to Display"}),(0,u.createComponent)(Ze,{get value(){return r()},onInput:s=>l(s),placeholder:"Enter the name to display..."})]:(0,u.createComponent)(O,{children:"Please wait..."})}}),(0,u.createComponent)(Qe,{onConfirm:()=>{var s;Xe.emit("add_detectable",{exe:(s=e().find(o=>o.pid===a()))==null?void 0:s.process_name,name:r()})},get onCancel(){return d.close},confirmText:"Add",cancelText:"Cancel",type:"neutral"})]}}))}(0,pe.delegateEvents)(["click"]);var{flux:{dispatcher:tt,stores:{GameStore:at}},settings:{registerSection:nt},ui:{showToast:z},plugin:{store:p},http:rt}=shelter,B=()=>{},G={},_,H={};p.currentlyPlaying="";function ot(e){return h(this,null,function*(){var t;return((t=at.getGameByName(e))==null?void 0:t.name)||"Unknown"})}var W=(e,t)=>h(void 0,null,function*(){var n;if(!G[e]){let r=yield rt.get(`/oauth2/applications/${e}/assets`);r.status!==200&&console.log("Failed to fetch assets"),G[e]=r.body}return(n=G[e].find(r=>r.name===t))==null?void 0:n.id});function it(e){return h(this,null,function*(){var n,r,l,d,s;let t=JSON.parse(e.data),a=(n=t.activity)==null?void 0:n.assets;if(a!=null&&a.large_image&&(a.large_image=yield W(t.activity.application_id,a.large_image)),a!=null&&a.small_image&&(a.small_image=yield W(t.activity.application_id,a.small_image)),t.activity){let o=t.activity.application_id;H[o]||(H[o]=yield ot(t.activity.name));let i=H[o];if(typeof i!="string"&&((r=t.activity).name||(r.name=i.name)),p.currentlyPlaying=t.activity.name,p.previouslyPlayed||(p.previouslyPlayed={}),!((l=t.activity)!=null&&l.name))return;t.activity.name in p.previouslyPlayed||(p.previouslyPlayed[t.activity.name]={}),p.previouslyPlayed[t.activity.name].name=t.activity.name,p.previouslyPlayed[t.activity.name].appid=t.activity.application_id,p.previouslyPlayed[t.activity.name].lastPlayed=Date.now(),p.previouslyPlayed[t.activity.name].local=t.activity.application_id==="1337"}else p.currentlyPlaying="";(s=p.previouslyPlayed[(d=t.activity)==null?void 0:d.name])!=null&&s.hide||tt.dispatch(K({type:"LOCAL_ACTIVITY_UPDATE"},t))})}var $e=(e,t=5,a=500)=>h(void 0,null,function*(){try{return yield new Promise(n=>setTimeout(n,a)),yield e(t)}catch(n){if(t===0)throw n;return $e(e,t-1)}}),lt=()=>h(void 0,null,function*(){_&&(_!=null&&_.close)&&_.close(),_=new WebSocket("ws://127.0.0.1:1337"),_.onmessage=it,_.onerror=t=>console.error(t);let e=yield new Promise(t=>setTimeout(()=>{$e(a=>{_.readyState!==WebSocket.OPEN&&(console.log(_),_==null||_.close(),_=null,z({title:"ShelteRPC",content:`Unable to connect to ShelteRPC server (${a})`,duration:3e3}),t(!1)),t(!0)},5,1e3)},1e3));B=nt("section","shelterpc","Registered Games",fe),e&&(_.onclose=()=>{z({title:"ShelteRPC",content:"ShelteRPC server disconnected",duration:3e3})},z({title:"ShelteRPC",content:"Connected to ShelteRPC server",duration:3e3}))}),st=()=>h(void 0,null,function*(){var e;_!=null&&_.close&&((e=_.close)==null||e.call(_)),B&&B()});return ke(dt);})();
