(()=>{var rt=Object.create;var O=Object.defineProperty,nt=Object.defineProperties,ot=Object.getOwnPropertyDescriptor,st=Object.getOwnPropertyDescriptors,at=Object.getOwnPropertyNames,me=Object.getOwnPropertySymbols,it=Object.getPrototypeOf,fe=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable;var pe=(e,t,n)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||={})fe.call(t,n)&&pe(e,n,t[n]);if(me)for(var n of me(t))lt.call(t,n)&&pe(e,n,t[n]);return e},h=(e,t)=>nt(e,st(t));var ct=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),dt=(e,t)=>{for(var n in t)O(e,n,{get:t[n],enumerable:!0})},ge=(e,t,n,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let d of at(t))!fe.call(e,d)&&d!==n&&O(e,d,{get:()=>t[d],enumerable:!(c=ot(t,d))||c.enumerable});return e};var a=(e,t,n)=>(n=e!=null?rt(it(e)):{},ge(t||!e||!e.__esModule?O(n,"default",{value:e,enumerable:!0}):n,e)),_t=e=>ge(O({},"__esModule",{value:!0}),e);var m=(e,t,n)=>new Promise((c,d)=>{var r=u=>{try{i(n.next(u))}catch($){d($)}},o=u=>{try{i(n.throw(u))}catch($){d($)}},i=u=>u.done?c(u.value):Promise.resolve(u.value).then(r,o);i((n=n.apply(e,t)).next())});var s=ct((rr,he)=>{he.exports=shelter.solidWeb});var er={};dt(er,{onUnload:()=>Xt});var M=a(s(),1),Z=a(s(),1),K=a(s(),1),T=a(s(),1),p=a(s(),1);var ve="._tophead_1u2ez_1{margin-bottom:16px}._shead_1u2ez_1{margin-top:16px;margin-bottom:8px}._pbuttons_1u2ez_1{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;margin-top:16px}",y={tophead:"_tophead_1u2ez_1",shead:"_shead_1u2ez_1",pbuttons:"_pbuttons_1u2ez_1"};var ut=(0,M.template)("<p>Clearing web cache will log you out and reset your settings, but can often help solve permission-based issues.</p>",2),mt=(0,M.template)("<p>Do you want to proceed?</p>",2),$e=(0,M.template)("<div></div>",2),{ui:{injectCss:pt,openModal:ft,ModalRoot:gt,ModalHeader:ht,ModalBody:vt,ModalFooter:$t,SwitchItem:Y,Button:q,ButtonLooks:bt,Header:G,HeaderTags:wt,showToast:xt},solid:{createSignal:yt,createEffect:Ct}}=shelter,{invoke:A,process:St}=window.__TAURI__,be=!1;function we(){let[e,t]=yt({cache_css:!1,streamer_mode_detection:!1,rpc_server:!1});be||(be=!0,pt(ve)),Ct(()=>m(this,null,function*(){let r=yield A("read_config_file"),o=yield A("default_config");try{t(JSON.parse(r))}catch(i){t(JSON.parse(o))}}));let n=()=>m(this,null,function*(){yield A("write_config_file",{contents:JSON.stringify(e())}),St.relaunch()}),c=()=>m(this,null,function*(){yield A("clear_css_cache"),xt({title:"CSS Cache Cleared",duration:3e3})}),d=()=>m(this,null,function*(){ft(o=>(0,p.createComponent)(gt,{get children(){return[(0,p.createComponent)(ht,{close:o,children:"Are you sure?"}),(0,p.createComponent)(vt,{get children(){return[ut.cloneNode(!0),mt.cloneNode(!0)]}}),(0,p.createComponent)($t,{get children(){let i=$e.cloneNode(!0);return(0,T.insert)(i,(0,p.createComponent)(q,{get look(){return bt.OUTLINED},get class(){return y.pbutton},onClick:o,children:"Cancel"}),null),(0,T.insert)(i,(0,p.createComponent)(q,{get class(){return y.pbutton},onClick:()=>{A("set_clear_cache"),o()},children:"Confirm"}),null),(0,K.effect)(()=>(0,Z.className)(i,y.pbuttons)),i}})]}}))()});return[(0,p.createComponent)(G,{get tag(){return wt.H1},get class(){return y.tophead},children:"Dorion Performance Settings"}),(0,p.createComponent)(G,{get class(){return y.shead},children:"Cache"}),(0,p.createComponent)(Y,{get value(){return e().cache_css},onChange:r=>t(h(g({},e()),{cache_css:r})),note:"Save CSS to disk that would otherwise be loaded from the web, decreasing load times.",children:"Cache CSS"}),(0,p.createComponent)(G,{get class(){return y.shead},children:"Optional Features"}),(0,p.createComponent)(Y,{get value(){return e().streamer_mode_detection},onChange:r=>t(h(g({},e()),{streamer_mode_detection:r})),note:"Detect OBS and Streamlabs OBS and automatically enable streamer mode when they are running.",children:"Streamer Mode detection"}),(0,p.createComponent)(Y,{get value(){return e().rpc_server},onChange:r=>t(h(g({},e()),{rpc_server:r})),tooltipNote:"This is a work in progress, and won't do EVERYTHING arRPC does quite yet.",note:"Enable the integrated RPC server, eliminating the need for a separate arRPC server running. Remember to enable the arRPC plugin!",children:"Integrated rich presence server"}),(()=>{let r=$e.cloneNode(!0);return(0,T.insert)(r,(0,p.createComponent)(q,{onClick:n,style:{width:"30%",padding:"18px"},grow:!0,children:"Save and Restart"}),null),(0,T.insert)(r,(0,p.createComponent)(q,{onClick:d,style:{width:"30%",padding:"18px"},grow:!0,children:"Clear WebData Cache"}),null),(0,T.insert)(r,(0,p.createComponent)(q,{onClick:c,style:{width:"30%",padding:"18px"},s:!0,grow:!0,children:"Clear CSS Cache"}),null),(0,K.effect)(()=>(0,Z.className)(r,y.pbuttons)),r})()]}var Oe=a(s(),1),qe=a(s(),1),Ae=a(s(),1),te=a(s(),1),mr=a(s(),1),C=a(s(),1);var X=a(s(),1),F=a(s(),1),Q=a(s(),1),ke=a(s(),1),J=a(s(),1),ze=a(s(),1),I=a(s(),1);var xe="._ddown_ccz23_1{box-sizing:border-box;font-size:16px;width:100%;border-radius:3px;color:var(--text-normal);background-color:var(--input-background);border:none;transition:border-color .2s ease-in-out;padding:10px;appearance:none;cursor:pointer}._dcontainer_ccz23_1{position:relative;width:100%}._dsarrow_ccz23_1{position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none}._dsarrow_ccz23_1 path{fill:var(--text-secondary)}",B={ddown:"_ddown_ccz23_1",dcontainer:"_dcontainer_ccz23_1",dsarrow:"_dsarrow_ccz23_1"};var ye=a(s(),1),Ce=a(s(),1),Se=a(s(),1),Nt=(0,ye.template)('<svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"></path></svg>',4),Ne=e=>(()=>{let t=Nt.cloneNode(!0);return(0,Se.effect)(()=>(0,Ce.setAttribute)(t,"class",e.class)),t})();var Pt=(0,X.template)("<div><select></select></div>",4),kt=(0,X.template)("<option></option>",2),{ui:{injectCss:zt}}=shelter,Pe=!1,L=e=>(Pe||(Pe=!0,zt(xe)),(()=>{let t=Pt.cloneNode(!0),n=t.firstChild;return(0,ze.addEventListener)(n,"change",e.onChange),(0,J.insert)(n,()=>{var c;return(c=e.options)==null?void 0:c.map(d=>(()=>{let r=kt.cloneNode(!0);return(0,J.insert)(r,()=>d.label),(0,I.effect)(()=>r.selected=d.value===(e==null?void 0:e.selected)),(0,I.effect)(()=>r.value=d.value),r})())}),(0,J.insert)(t,(0,ke.createComponent)(Ne,{get class(){return B.dsarrow}}),null),(0,I.effect)(c=>{let d=B.dcontainer,r=B.ddown,o=e.placeholder,i=e.id,u=e["aria-label"];return d!==c._v$&&(0,Q.className)(t,c._v$=d),r!==c._v$2&&(0,Q.className)(n,c._v$2=r),o!==c._v$3&&(0,F.setAttribute)(n,"placeholder",c._v$3=o),i!==c._v$4&&(0,F.setAttribute)(n,"id",c._v$4=i),u!==c._v$5&&(0,F.setAttribute)(n,"aria-label",c._v$5=u),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),(0,I.effect)(()=>n.value=e.value),t})());var Te="._shead_xdnpt_1{margin-top:16px;margin-bottom:8px}._sbutton_xdnpt_1{margin-top:16px;padding:18px;width:100%}._splitbutton_xdnpt_1{width:45%}._pbuttons_xdnpt_1{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;margin-top:16px}",j={shead:"_shead_xdnpt_1",sbutton:"_sbutton_xdnpt_1",splitbutton:"_splitbutton_xdnpt_1",pbuttons:"_pbuttons_xdnpt_1"};var Tt=(0,Oe.template)("<div></div>",2),{invoke:D,process:jt}=window.__TAURI__,{ui:{Header:je,Button:ee,HeaderTags:Dt,TextBox:Ot,injectCss:qt},solid:{createSignal:U,createEffect:At}}=shelter,De=!1;function Ie(){let[e,t]=U([]),[n,c]=U(""),[d,r]=U(""),[o,i]=U("");De||(De=!0,qt(Te)),At(()=>m(this,null,function*(){let l=yield D("get_profile_list");t(l);let f=JSON.parse(yield D("read_config_file"));c(f.profile||"default"),r(f.profile||"default")}));let u=()=>m(this,null,function*(){let l=JSON.parse(yield D("read_config_file"));l.profile=n(),yield D("write_config_file",{contents:JSON.stringify(l)}),jt.relaunch()}),$=()=>m(this,null,function*(){yield D("delete_profile",{name:n()}),t(e().filter(l=>l!==n())),c(d())}),x=()=>m(this,null,function*(){yield D("create_profile",{name:o()}),e().includes(o())||t([...e(),o()]),c(o())}),P=l=>{i(l)};return[(0,C.createComponent)(je,{get tag(){return Dt.H1},children:"Profiles"}),(0,C.createComponent)(L,{get options(){return e().map(l=>({label:l,value:l}))},placeholder:"Select profile...",maxVisibleItems:5,closeOnSelect:!0,onChange:l=>c(l),get selected(){return n()}}),(0,C.createComponent)(je,{get class(){return j.shead},children:"Create Profile"}),(0,C.createComponent)(Ot,{type:"text",get value(){return o()},onInput:P,placeholder:"Enter a name for the new profile..."}),(0,C.createComponent)(ee,{onClick:x,get class(){return j.sbutton},get disabled(){return o()===""||e().includes(o())},children:"Create Profile"}),(()=>{let l=Tt.cloneNode(!0);return(0,te.insert)(l,(0,C.createComponent)(ee,{onClick:u,get class(){return j.splitbutton},children:"Save and Restart"}),null),(0,te.insert)(l,(0,C.createComponent)(ee,{onClick:$,get class(){return j.splitbutton},get disabled(){return n()==="default"||d()===n},children:"Delete Selected Profile"}),null),(0,Ae.effect)(()=>(0,qe.className)(l,j.pbuttons)),l})()]}var le=a(s(),1),ae=a(s(),1),ie=a(s(),1),R=a(s(),1),kr=a(s(),1),_=a(s(),1);var He=a(s(),1),Me=a(s(),1),Be=a(s(),1),Fe=a(s(),1),Je=a(s(),1);var Le="._card_1uk2u_1{border:1px solid var(--background-tertiary);border-radius:4px}",Re={card:"_card_1uk2u_1"};var It=(0,He.template)("<div></div>",2),{ui:{injectCss:Lt}}=shelter,Ee=!1,V=e=>(Ee||(Ee=!0,Lt(Le)),(()=>{let t=It.cloneNode(!0);return(0,Je.insert)(t,()=>e.children),(0,Fe.effect)(n=>{let c=Re.card,d=e.style;return c!==n._v$&&(0,Be.className)(t,n._v$=c),n._v$2=(0,Me.style)(t,d,n._v$2),n},{_v$:void 0,_v$2:void 0}),t})());var oe=a(s(),1),Ye=a(s(),1),w=a(s(),1),re=a(s(),1),S=a(s(),1),N=a(s(),1);var Ue="._plist_6n8qv_1{display:flex;flex-direction:column;align-items:center;justify-content:space-between;font-size:16px}._pheader_6n8qv_1{border-bottom:1px solid var(--background-tertiary);font-weight:bold;padding-bottom:16px}._plistrow_6n8qv_1{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;padding:16px}._plistrow_6n8qv_1 ._scell_6n8qv_1{display:flex;align-items:center;justify-content:center;width:30%}._plistrow_6n8qv_1 ._mcell_6n8qv_1{display:flex;align-items:center;justify-content:flex-start;width:50%}._left16_6n8qv_1{margin-left:16px}._top16_6n8qv_1{margin-top:16px}",v={plist:"_plist_6n8qv_1",pheader:"_pheader_6n8qv_1",plistrow:"_plistrow_6n8qv_1",scell:"_scell_6n8qv_1",mcell:"_mcell_6n8qv_1",left16:"_left16_6n8qv_1",top16:"_top16_6n8qv_1"};var Rt=(0,oe.template)("<div><div><div></div><div></div><div></div></div></div>",10),Et=(0,oe.template)("<div><div></div><div></div><div></div></div>",8),{ui:{Switch:Ve,Text:W,injectCss:Ht},solid:{createSignal:Mt}}=shelter,{invoke:ne}=window.__TAURI__,We=!1,Bt=()=>m(void 0,null,function*(){return yield ne("get_plugin_list")});function Ge(){We||(We=!0,Ht(Ue));let[e,t]=Mt([]);return m(this,null,function*(){t(yield Bt())}),(0,N.createComponent)(V,{style:{marginTop:"1rem"},get children(){let n=Rt.cloneNode(!0),c=n.firstChild,d=c.firstChild,r=d.nextSibling,o=r.nextSibling;return(0,S.insert)(d,(0,N.createComponent)(W,{get class(){return v.left16},children:"Plugin Name"})),(0,S.insert)(r,(0,N.createComponent)(W,{get class(){return v.left16},children:"Enabled?"})),(0,S.insert)(o,(0,N.createComponent)(W,{get class(){return v.left16},children:"Preload?"})),(0,S.insert)(n,()=>e().map(i=>(()=>{let u=Et.cloneNode(!0),$=u.firstChild,x=$.nextSibling,P=x.nextSibling;return(0,S.insert)($,(0,N.createComponent)(W,{get class(){return v.left16},get children(){return i.name}})),(0,S.insert)(x,(0,N.createComponent)(Ve,{get value(){return!i.disabled},onChange:l=>{ne("toggle_plugin",{name:i.name}),t(e().map(f=>(f.name===i.name&&(f.disabled=!f.disabled),f)))},style:{flexDirection:"column-reverse"}})),(0,S.insert)(P,(0,N.createComponent)(Ve,{get checked(){return i.preload},onChange:l=>{ne("toggle_preload",{name:i.name}),t(e().map(f=>(f.name===i.name&&(f.preload=!f.preload),f)))}})),(0,re.effect)(l=>{let f=i.name,ce=v.plistrow,de=v.mcell,_e=v.scell,ue=v.scell;return f!==l._v$6&&(0,Ye.setAttribute)(u,"key",l._v$6=f),ce!==l._v$7&&(0,w.className)(u,l._v$7=ce),de!==l._v$8&&(0,w.className)($,l._v$8=de),_e!==l._v$9&&(0,w.className)(x,l._v$9=_e),ue!==l._v$10&&(0,w.className)(P,l._v$10=ue),l},{_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),u})()),null),(0,re.effect)(i=>{let u=v.plist,$=v.pheader+" "+v.plistrow,x=v.mcell,P=v.scell,l=v.scell;return u!==i._v$&&(0,w.className)(n,i._v$=u),$!==i._v$2&&(0,w.className)(c,i._v$2=$),x!==i._v$3&&(0,w.className)(d,i._v$3=x),P!==i._v$4&&(0,w.className)(r,i._v$4=P),l!==i._v$5&&(0,w.className)(o,i._v$5=l),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),n}})}var Ze="._shead_1s6h6_1{margin-top:16px;margin-bottom:8px}._fcard_1s6h6_1{display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:var(--text-primary);padding:8px}._pcard_1s6h6_1{display:flex}._left16_1s6h6_1{margin-left:16px}",b={shead:"_shead_1s6h6_1",fcard:"_fcard_1s6h6_1",pcard:"_pcard_1s6h6_1",left16:"_left16_1s6h6_1"};var Ke=(0,le.template)("<div></div>",2),Ft=(0,le.template)('<a href="https://github.com/SpikeHD/Vencordorion" target="_blank">Vencordorion</a>',2),{ui:{SwitchItem:k,Button:se,Text:Qe,Header:z,HeaderTags:Jt,Slider:Ut,injectCss:Vt},solid:{createSignal:Xe,createEffect:Wt}}=shelter,{invoke:E,process:Yt}=window.__TAURI__,et=!1;var Gt=()=>m(void 0,null,function*(){return(yield E("get_theme_names")).map(t=>({label:t.replace(/"/g,"").replace(".css","").replace(".theme",""),value:t.replace(/"/g,"")}))}),Zt=()=>{E("open_plugins")},Kt=()=>{E("open_themes")};function tt(){let[e,t]=Xe({zoom:"1.0",client_type:"default",sys_tray:!1,push_to_talk:!1,push_to_talk_keys:[],theme:"none",use_native_titlebar:!1,start_maximized:!1,open_on_startup:!1,startup_minimized:!1,autoupdate:!1,update_notify:!0}),[n,c]=Xe([]);et||(et=!0,Vt(Ze)),Wt(()=>m(this,null,function*(){t(JSON.parse(yield E("read_config_file"))),c(yield Gt())}));let d=()=>m(this,null,function*(){yield E("write_config_file",{contents:JSON.stringify(e())}),Yt.relaunch()});return[(0,_.createComponent)(z,{get tag(){return Jt.H1},children:"Dorion Settings"}),(0,_.createComponent)(z,{get class(){return b.shead},children:"Theme"}),(0,_.createComponent)(L,{get value(){return e().theme},onChange:r=>{t(o=>h(g({},o),{theme:r.target.value}))},get options(){return["none",...n()]},get selected(){return e().theme}}),(0,_.createComponent)(z,{get class(){return b.shead},children:"Client Type"}),(0,_.createComponent)(L,{options:[{label:"Default",value:"default"},{label:"Canary",value:"canary"},{label:"PTB",value:"ptb"}],placeholder:"Select a client type...",maxVisibleItems:5,closeOnSelect:!0,onChange:r=>{t(o=>h(g({},o),{client_type:r.target.value}))},get selected(){return e().client_type}}),(0,_.createComponent)(z,{get class(){return b.shead},children:"Window"}),(0,_.createComponent)(Ut,{min:50,max:125,get steps(){return Array.from(Array(16).keys()).map(r=>r*5+50+"%")},step:5,get value(){return parseFloat(e().zoom)*100},onInput:r=>{t(o=>h(g({},o),{zoom:(parseFloat(r)/100).toString()}))}}),(0,_.createComponent)(k,{get value(){return e().sys_tray},onChange:r=>{t(o=>h(g({},o),{sys_tray:r}))},note:"Instead of closing, Dorion will run in the background and will be accessible via the system tray.",children:"Minimize to System Tray"}),(0,_.createComponent)(k,{get value(){return e().start_maximized},onChange:r=>{t(o=>h(g({},o),{start_maximized:r}))},children:"Start Maximized"}),(0,_.createComponent)(z,{get class(){return b.shead},children:"Startup"}),(0,_.createComponent)(k,{get value(){return e().open_on_startup},onChange:r=>{t(o=>h(g({},o),{open_on_startup:r}))},note:"Open Dorion when your system starts.",children:"Open on Startup"}),(0,_.createComponent)(k,{get value(){return e().startup_minimized},get disabled(){return!e().open_on_startup},onChange:r=>{t(o=>h(g({},o),{startup_minimized:r}))},note:"Open in the background when your system starts.",children:"Start Minimized"}),(0,_.createComponent)(z,{get class(){return b.shead},children:"Misc."}),(0,_.createComponent)(k,{get value(){return e().use_native_titlebar},onChange:r=>{t(o=>h(g({},o),{use_native_titlebar:r}))},note:"Disable the custom titlebar and use your systems native one instead.",children:"Use Native Titlebar"}),(0,_.createComponent)(k,{get value(){return e().autoupdate},onChange:r=>{t(o=>h(g({},o),{autoupdate:r}))},get note(){return["Automatically update various Dorion components, such as"," ",Ft.cloneNode(!0),"."]},children:"Autoupdate"}),(0,_.createComponent)(k,{get value(){return e().update_notify===void 0||e().update_notify},onChange:r=>{t(o=>h(g({},o),{update_notify:r}))},get disabled(){return e().autoupdate},children:"Notify me of updates"}),(0,_.createComponent)(V,{style:{marginTop:"1rem"},get children(){return[(()=>{let r=Ke.cloneNode(!0);return(0,R.insert)(r,(0,_.createComponent)(Qe,{get class(){return b.left16},children:"Plugins Folder"}),null),(0,R.insert)(r,(0,_.createComponent)(se,{onClick:Zt,children:"Open"}),null),(0,ie.effect)(()=>(0,ae.className)(r,b.fcard)),r})(),(()=>{let r=Ke.cloneNode(!0);return(0,R.insert)(r,(0,_.createComponent)(Qe,{get class(){return b.left16},children:"Themes Folder"}),null),(0,R.insert)(r,(0,_.createComponent)(se,{onClick:Kt,children:"Open"}),null),(0,ie.effect)(()=>(0,ae.className)(r,b.fcard)),r})()]}}),(0,_.createComponent)(z,{get class(){return b.shead},children:"Plugins"}),(0,_.createComponent)(Ge,{}),(0,_.createComponent)(se,{onClick:d,style:{"margin-top":"1rem",padding:"18px"},grow:!0,children:"Save & Restart"})]}var{settings:{registerSection:H}}=shelter,Qt=[H("divider"),H("header","Dorion"),H("section","dorion-settings","Dorion Settings",tt),H("section","dorion-performance","Performance & Extras",we),H("section","dorion-profiles","Profiles",Ie)],Xt=()=>{Qt.forEach(e=>e())};return _t(er);})();
