(()=>{var at=Object.create;var I=Object.defineProperty,st=Object.defineProperties,ot=Object.getOwnPropertyDescriptor,it=Object.getOwnPropertyDescriptors,lt=Object.getOwnPropertyNames,pe=Object.getOwnPropertySymbols,ct=Object.getPrototypeOf,he=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable;var fe=(e,t,n)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||={})he.call(t,n)&&fe(e,n,t[n]);if(pe)for(var n of pe(t))dt.call(t,n)&&fe(e,n,t[n]);return e},f=(e,t)=>st(e,it(t));var _t=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),ut=(e,t)=>{for(var n in t)I(e,n,{get:t[n],enumerable:!0})},ge=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let d of lt(t))!he.call(e,d)&&d!==n&&I(e,d,{get:()=>t[d],enumerable:!(s=ot(t,d))||s.enumerable});return e};var l=(e,t,n)=>(n=e!=null?at(ct(e)):{},ge(t||!e||!e.__esModule?I(n,"default",{value:e,enumerable:!0}):n,e)),mt=e=>ge(I({},"__esModule",{value:!0}),e);var h=(e,t,n)=>new Promise((s,d)=>{var r=m=>{try{_(n.next(m))}catch(a){d(a)}},i=m=>{try{_(n.throw(m))}catch(a){d(a)}},_=m=>m.done?s(m.value):Promise.resolve(m.value).then(r,i);_((n=n.apply(e,t)).next())});var o=_t((nn,ve)=>{ve.exports=shelter.solidWeb});var en={};ut(en,{onUnload:()=>Xt});var ee=l(o(),1),J=l(o(),1),Q=l(o(),1),X=l(o(),1),dn=l(o(),1),v=l(o(),1);var be="._tophead_2htb3_1{margin-bottom:16px}._shead_2htb3_1{margin-top:32px;margin-bottom:8px}._stext_2htb3_1{color:var(--header-secondary) !important;font-size:14px;margin:12px 0}._pbuttons_2htb3_1{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;margin-top:16px}",k={tophead:"_tophead_2htb3_1",shead:"_shead_2htb3_1",stext:"_stext_2htb3_1",pbuttons:"_pbuttons_2htb3_1"};var q=l(o(),1),U=l(o(),1),Y=l(o(),1),Ne=l(o(),1),M=l(o(),1),Pe=l(o(),1),z=l(o(),1);var we="._ddown_1dg83_1{box-sizing:border-box;font-size:16px;width:100%;border-radius:3px;color:var(--text-normal);background-color:var(--input-background);border:none;transition:border-color .2s ease-in-out;padding:10px;appearance:none;cursor:pointer}._dcontainer_1dg83_1{position:relative;width:100%}._dsarrow_1dg83_1{position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none}._dsarrow_1dg83_1 path{fill:var(--header-secondary)}",B={ddown:"_ddown_1dg83_1",dcontainer:"_dcontainer_1dg83_1",dsarrow:"_dsarrow_1dg83_1"};var ye=l(o(),1),xe=l(o(),1),$e=l(o(),1),pt=(0,ye.template)('<svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"></path></svg>',4),Ce=e=>(()=>{let t=pt.cloneNode(!0);return(0,$e.effect)(()=>(0,xe.setAttribute)(t,"class",e.class)),t})();var ft=(0,q.template)("<div><select></select></div>",4),ht=(0,q.template)("<option></option>",2),{ui:{injectCss:gt}}=shelter,Se=!1,T=e=>(Se||(Se=!0,gt(we)),(()=>{let t=ft.cloneNode(!0),n=t.firstChild;return(0,Pe.addEventListener)(n,"change",e.onChange),(0,M.insert)(n,()=>{var s;return(s=e.options)==null?void 0:s.map(d=>(()=>{let r=ht.cloneNode(!0);return(0,M.insert)(r,()=>d.label),(0,z.effect)(()=>r.selected=d.value===(e==null?void 0:e.selected)),(0,z.effect)(()=>r.value=d.value),r})())}),(0,M.insert)(t,(0,Ne.createComponent)(Ce,{get class(){return B.dsarrow}}),null),(0,z.effect)(s=>{let d=B.dcontainer,r=B.ddown,i=e.placeholder,_=e.id,m=e["aria-label"],a=e.disabled;return d!==s._v$&&(0,Y.className)(t,s._v$=d),r!==s._v$2&&(0,Y.className)(n,s._v$2=r),i!==s._v$3&&(0,U.setAttribute)(n,"placeholder",s._v$3=i),_!==s._v$4&&(0,U.setAttribute)(n,"id",s._v$4=_),m!==s._v$5&&(0,U.setAttribute)(n,"aria-label",s._v$5=m),a!==s._v$6&&(n.disabled=s._v$6=a),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),(0,z.effect)(()=>n.value=e.value),t})());var vt=(0,ee.template)('<div>The blurring effect can be unreliable, semi-broken, and extremely slow, depending on what OS and version you are on. For more context, see <a href="https://github.com/tauri-apps/window-vibrancy#available-functions" target="_blank">the window-vibrancy crate</a>.</div>',4),bt=(0,ee.template)("<div></div>",2),{ui:{injectCss:wt,openConfirmationModal:yt,SwitchItem:A,Button:Z,Header:F,HeaderTags:xt,showToast:$t},solid:{createSignal:K,createEffect:Ct}}=shelter,{invoke:D,process:St}=window.__TAURI__,ke=!1,Nt=e=>e.charAt(0).toUpperCase()+e.slice(1);function Te(){let[e,t]=K({cache_css:!1,streamer_mode_detection:!1,rpc_server:!1,auto_clear_cache:!1,disable_hardware_accel:!1,blur:"none",blur_css:!1}),[n,s]=K(""),[d,r]=K([]);ke||(ke=!0,wt(be)),Ct(()=>h(this,null,function*(){let a=yield D("read_config_file"),x=yield D("default_config");try{let w=yield D("available_blurs");r(w)}catch(w){}try{let w=yield D("get_platform");s(w)}catch(w){}try{t(JSON.parse(a))}catch(w){t(JSON.parse(x))}}));let i=()=>h(this,null,function*(){yield D("write_config_file",{contents:JSON.stringify(e())}),St.relaunch()}),_=()=>h(this,null,function*(){yield D("clear_css_cache"),$t({title:"CSS Cache Cleared",duration:3e3})}),m=()=>{yt({body:()=>`
      Clearing web cache will log you out and reset your settings, but can often help solve permission-based issues.
      


      Do you want to proceed?
      `,header:()=>"Are you sure?",type:"neutral",confirmText:"Confirm"}).then(()=>D("set_clear_cache"),()=>{})};return[(0,v.createComponent)(F,{get tag(){return xt.H1},get class(){return k.tophead},children:"Dorion Performance Settings"}),(0,v.createComponent)(F,{get class(){return k.shead},children:"Cache"}),(0,v.createComponent)(A,{get value(){return e().cache_css},onChange:a=>t(f(p({},e()),{cache_css:a})),note:"Save CSS to disk that would otherwise be loaded from the web, decreasing load times.",children:"Cache CSS"}),(0,v.createComponent)(A,{get value(){return e().auto_clear_cache},onChange:a=>t(f(p({},e()),{auto_clear_cache:a})),get disabled(){return n()!=="windows"},get tooltipNote(){return n()!=="windows"&&"This is only supported on Windows right now."},note:"Clean out the web-based cache every time you close Dorion. This is usually cached images, scripts, and other data, and it can build up!",children:"Auto Clear Cache"}),(0,v.createComponent)(F,{get class(){return k.shead},children:"Optional Features"}),(0,v.createComponent)(A,{get value(){return e().streamer_mode_detection},onChange:a=>t(f(p({},e()),{streamer_mode_detection:a})),note:"Detect OBS and Streamlabs OBS and automatically enable streamer mode when they are running.",children:"Streamer Mode detection"}),(0,v.createComponent)(A,{get value(){return e().rpc_server},onChange:a=>t(f(p({},e()),{rpc_server:a})),tooltipNote:"This is a work in progress, and won't do EVERYTHING arRPC does quite yet.",note:"Enable the integrated RPC server, eliminating the need for a separate arRPC server running. Remember to enable the shelteRPC/arRPC plugin!",children:"Integrated rich presence server"}),(0,v.createComponent)(A,{get value(){return e().disable_hardware_accel},onChange:a=>t(f(p({},e()),{disable_hardware_accel:a})),note:"Disable hardware acceleration, which may cause issues on some systems. Disabling this can also cause performance issues on some systems. Unsupported on macOS.",get disabled(){return n()==="macos"},children:"Disable Hardware Acceleration"}),(0,v.createComponent)(F,{get class(){return k.shead},children:"Blur"}),(0,v.createComponent)(T,{get value(){return e().blur},get selected(){return e().blur},onChange:a=>t(f(p({},e()),{blur:a.target.value})),get options(){return d().map(a=>({label:Nt(a),value:a}))},get disabled(){return n()==="linux"}}),(()=>{let a=vt.cloneNode(!0);return(0,X.effect)(()=>(0,Q.className)(a,k.stext)),a})(),(0,v.createComponent)(A,{get value(){return e().blur_css},onChange:a=>t(f(p({},e()),{blur_css:a})),note:"Enable this if you are not using a theme designed to take advantage of transparent windows.",get disabled(){return n()==="linux"||e().blur==="none"},children:"Enable builtin background transparency CSS"}),(()=>{let a=bt.cloneNode(!0);return(0,J.insert)(a,(0,v.createComponent)(Z,{onClick:i,style:{width:"30%",padding:"18px"},grow:!0,children:"Save and Restart"}),null),(0,J.insert)(a,(0,v.createComponent)(Z,{onClick:m,style:{width:"30%",padding:"18px"},grow:!0,children:"Wipe all web-based data"}),null),(0,J.insert)(a,(0,v.createComponent)(Z,{onClick:_,style:{width:"30%",padding:"18px"},s:!0,grow:!0,children:"Clear CSS Cache"}),null),(0,X.effect)(()=>(0,Q.className)(a,k.pbuttons)),a})()]}var Ee=l(o(),1),je=l(o(),1),Ie=l(o(),1),ne=l(o(),1),gn=l(o(),1),C=l(o(),1);var De="._shead_15ahn_1{margin-top:32px;margin-bottom:8px}._sbutton_15ahn_1{margin-top:16px;padding:18px;width:100%}._splitbutton_15ahn_1{width:45%}._pbuttons_15ahn_1{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;margin-top:16px}",E={shead:"_shead_15ahn_1",sbutton:"_sbutton_15ahn_1",splitbutton:"_splitbutton_15ahn_1",pbuttons:"_pbuttons_15ahn_1"};var Pt=(0,Ee.template)("<div></div>",2),{invoke:j,process:kt}=window.__TAURI__,{ui:{Header:Oe,Button:te,HeaderTags:Tt,TextBox:Dt,injectCss:Ot},solid:{createSignal:V,createEffect:At}}=shelter,Ae=!1;function ze(){let[e,t]=V([]),[n,s]=V(""),[d,r]=V(""),[i,_]=V("");Ae||(Ae=!0,Ot(De)),At(()=>h(this,null,function*(){let c=yield j("get_profile_list");t(c);let g=JSON.parse(yield j("read_config_file"));s(g.profile||"default"),r(g.profile||"default")}));let m=()=>h(this,null,function*(){let c=JSON.parse(yield j("read_config_file"));c.profile=n(),yield j("write_config_file",{contents:JSON.stringify(c)}),kt.relaunch()}),a=()=>h(this,null,function*(){yield j("delete_profile",{name:n()}),t(e().filter(c=>c!==n())),s(d())}),x=()=>h(this,null,function*(){yield j("create_profile",{name:i()}),e().includes(i())||t([...e(),i()]),s(i())}),w=c=>{_(c)};return[(0,C.createComponent)(Oe,{get tag(){return Tt.H1},children:"Profiles"}),(0,C.createComponent)(T,{get options(){return e().map(c=>({label:c,value:c}))},placeholder:"Select profile...",maxVisibleItems:5,closeOnSelect:!0,onChange:c=>s(c.target.value),get selected(){return n()}}),(0,C.createComponent)(Oe,{get class(){return E.shead},children:"Create Profile"}),(0,C.createComponent)(Dt,{type:"text",get value(){return i()},onInput:w,placeholder:"Enter a name for the new profile..."}),(0,C.createComponent)(te,{onClick:x,get class(){return E.sbutton},get disabled(){return i()===""||e().includes(i())},children:"Create Profile"}),(()=>{let c=Pt.cloneNode(!0);return(0,ne.insert)(c,(0,C.createComponent)(te,{onClick:m,get class(){return E.splitbutton},children:"Save and Restart"}),null),(0,ne.insert)(c,(0,C.createComponent)(te,{onClick:a,get class(){return E.splitbutton},get disabled(){return n()==="default"||d()===n},children:"Delete Selected Profile"}),null),(0,Ie.effect)(()=>(0,je.className)(c,E.pbuttons)),c})()]}var ce=l(o(),1),ie=l(o(),1),le=l(o(),1),L=l(o(),1),An=l(o(),1),u=l(o(),1);var Be=l(o(),1),Ue=l(o(),1),Me=l(o(),1),Fe=l(o(),1),Je=l(o(),1);var Le="._card_1uk2u_1{border:1px solid var(--background-tertiary);border-radius:4px}",Re={card:"_card_1uk2u_1"};var Et=(0,Be.template)("<div></div>",2),{ui:{injectCss:jt}}=shelter,He=!1,W=e=>(He||(He=!0,jt(Le)),(()=>{let t=Et.cloneNode(!0);return(0,Je.insert)(t,()=>e.children),(0,Fe.effect)(n=>{let s=Re.card,d=e.style;return s!==n._v$&&(0,Me.className)(t,n._v$=s),n._v$2=(0,Ue.style)(t,d,n._v$2),n},{_v$:void 0,_v$2:void 0}),t})());var se=l(o(),1),Ye=l(o(),1),$=l(o(),1),re=l(o(),1),S=l(o(),1),N=l(o(),1);var Ve="._plist_1n17i_1{display:flex;flex-direction:column;align-items:center;justify-content:space-between;font-size:16px}._pheader_1n17i_1{border-bottom:1px solid var(--background-tertiary);font-weight:bold;padding-bottom:16px}._pbuttons_1n17i_1{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;margin-top:16px}._pbuttons_1n17i_1 button{width:30%;padding:18px}._sbutton_1n17i_1{margin-top:16px;padding:18px;width:100%}._plistrow_1n17i_1{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;padding:16px}._plistrow_1n17i_1 ._scell_1n17i_1{display:flex;align-items:center;justify-content:center;width:30%}._plistrow_1n17i_1 ._mcell_1n17i_1{display:flex;align-items:center;justify-content:flex-start;width:50%}._left16_1n17i_1{margin-left:16px}._top16_1n17i_1{margin-top:16px}._top32_1n17i_1{margin-top:32px}",b={plist:"_plist_1n17i_1",pheader:"_pheader_1n17i_1",pbuttons:"_pbuttons_1n17i_1",sbutton:"_sbutton_1n17i_1",plistrow:"_plistrow_1n17i_1",scell:"_scell_1n17i_1",mcell:"_mcell_1n17i_1",left16:"_left16_1n17i_1",top16:"_top16_1n17i_1",top32:"_top32_1n17i_1"};var It=(0,se.template)("<div><div><div></div><div></div><div></div></div></div>",10),zt=(0,se.template)("<div><div></div><div></div><div></div></div>",8),{ui:{Switch:We,Text:G,injectCss:Lt},solid:{createSignal:Rt}}=shelter,{invoke:ae}=window.__TAURI__,Ge=!1,Ht=()=>h(void 0,null,function*(){return yield ae("get_plugin_list")});function qe(){Ge||(Ge=!0,Lt(Ve));let[e,t]=Rt([]);return h(this,null,function*(){t(yield Ht())}),(0,N.createComponent)(W,{style:{marginTop:"1rem"},get children(){let n=It.cloneNode(!0),s=n.firstChild,d=s.firstChild,r=d.nextSibling,i=r.nextSibling;return(0,S.insert)(d,(0,N.createComponent)(G,{get class(){return b.left16},children:"Plugin Name"})),(0,S.insert)(r,(0,N.createComponent)(G,{get class(){return b.left16},children:"Enabled?"})),(0,S.insert)(i,(0,N.createComponent)(G,{get class(){return b.left16},children:"Preload?"})),(0,S.insert)(n,()=>e().map(_=>(()=>{let m=zt.cloneNode(!0),a=m.firstChild,x=a.nextSibling,w=x.nextSibling;return(0,S.insert)(a,(0,N.createComponent)(G,{get class(){return b.left16},get children(){return _.name}})),(0,S.insert)(x,(0,N.createComponent)(We,{get checked(){return!_.disabled},onChange:c=>{ae("toggle_plugin",{name:_.name}),t(e().map(g=>(g.name===_.name&&(g.disabled=!g.disabled),g)))},style:{flexDirection:"column-reverse"}})),(0,S.insert)(w,(0,N.createComponent)(We,{get checked(){return _.preload},onChange:c=>{ae("toggle_preload",{name:_.name}),t(e().map(g=>(g.name===_.name&&(g.preload=!g.preload),g)))}})),(0,re.effect)(c=>{let g=_.name,de=b.plistrow,_e=b.mcell,ue=b.scell,me=b.scell;return g!==c._v$6&&(0,Ye.setAttribute)(m,"key",c._v$6=g),de!==c._v$7&&(0,$.className)(m,c._v$7=de),_e!==c._v$8&&(0,$.className)(a,c._v$8=_e),ue!==c._v$9&&(0,$.className)(x,c._v$9=ue),me!==c._v$10&&(0,$.className)(w,c._v$10=me),c},{_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),m})()),null),(0,re.effect)(_=>{let m=b.plist,a=b.pheader+" "+b.plistrow,x=b.mcell,w=b.scell,c=b.scell;return m!==_._v$&&(0,$.className)(n,_._v$=m),a!==_._v$2&&(0,$.className)(s,_._v$2=a),x!==_._v$3&&(0,$.className)(d,_._v$3=x),w!==_._v$4&&(0,$.className)(r,_._v$4=w),c!==_._v$5&&(0,$.className)(i,_._v$5=c),_},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),n}})}var Ze="._shead_1s6h6_1{margin-top:16px;margin-bottom:8px}._fcard_1s6h6_1{display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:var(--text-primary);padding:8px}._pcard_1s6h6_1{display:flex}._left16_1s6h6_1{margin-left:16px}",y={shead:"_shead_1s6h6_1",fcard:"_fcard_1s6h6_1",pcard:"_pcard_1s6h6_1",left16:"_left16_1s6h6_1"};var Ke=(0,ce.template)("<div></div>",2),Bt=(0,ce.template)('<a href="https://github.com/SpikeHD/shelter-plugins" target="_blank">SpikeHD/shelter-plugins</a>',2),{ui:{SwitchItem:P,Button:oe,Text:Qe,Header:O,HeaderTags:Ut,Slider:Mt,injectCss:Ft},solid:{createSignal:Xe,createEffect:Jt}}=shelter,{invoke:R,process:Vt}=window.__TAURI__,et=!1,Wt=()=>h(void 0,null,function*(){return(yield R("get_theme_names")).map(t=>({label:t.replace(/"/g,"").replace(".css","").replace(".theme",""),value:t.replace(/"/g,"")}))}),Gt=()=>{R("open_plugins")},Yt=()=>{R("open_themes")};function tt(){let[e,t]=Xe({zoom:"1.0",client_type:"default",sys_tray:!1,push_to_talk:!1,push_to_talk_keys:[],theme:"none",use_native_titlebar:!1,start_maximized:!1,open_on_startup:!1,startup_minimized:!1,autoupdate:!1,update_notify:!0,multi_instance:!1}),[n,s]=Xe([]);et||(et=!0,Ft(Ze)),Jt(()=>h(this,null,function*(){t(JSON.parse(yield R("read_config_file"))),s(yield Wt())}));let d=()=>h(this,null,function*(){yield R("write_config_file",{contents:JSON.stringify(e())}),Vt.relaunch()});return[(0,u.createComponent)(O,{get tag(){return Ut.H1},children:"Dorion Settings"}),(0,u.createComponent)(O,{get class(){return y.shead},children:"Theme"}),(0,u.createComponent)(T,{get value(){return e().theme},onChange:r=>{t(i=>f(p({},i),{theme:r.target.value}))},placeholder:"Select a theme...",get options(){return[{label:"None",value:"none"},...n()]},get selected(){return e().theme}}),(0,u.createComponent)(O,{get class(){return y.shead},children:"Client Type"}),(0,u.createComponent)(T,{options:[{label:"Default",value:"default"},{label:"Canary",value:"canary"},{label:"PTB",value:"ptb"}],placeholder:"Select a client type...",maxVisibleItems:5,closeOnSelect:!0,onChange:r=>{t(i=>f(p({},i),{client_type:r.target.value}))},get selected(){return e().client_type}}),(0,u.createComponent)(O,{get class(){return y.shead},children:"Window"}),(0,u.createComponent)(Mt,{min:50,max:125,get steps(){return Array.from(Array(16).keys()).map(r=>r*5+50+"%")},step:5,get value(){return parseFloat(e().zoom)*100},onInput:r=>{t(i=>f(p({},i),{zoom:(parseFloat(r)/100).toString()}))}}),(0,u.createComponent)(P,{get value(){return e().sys_tray},onChange:r=>{t(i=>f(p({},i),{sys_tray:r}))},note:"Instead of closing, Dorion will run in the background and will be accessible via the system tray.",children:"Minimize to System Tray"}),(0,u.createComponent)(P,{get value(){return e().start_maximized},onChange:r=>{t(i=>f(p({},i),{start_maximized:r}))},children:"Start Maximized"}),(0,u.createComponent)(O,{get class(){return y.shead},children:"Startup"}),(0,u.createComponent)(P,{get value(){return e().open_on_startup},onChange:r=>{t(i=>f(p({},i),{open_on_startup:r}))},note:"Open Dorion when your system starts.",children:"Open on Startup"}),(0,u.createComponent)(P,{get value(){return e().startup_minimized},get disabled(){return!e().open_on_startup},onChange:r=>{t(i=>f(p({},i),{startup_minimized:r}))},note:"Open in the background when your system starts.",children:"Start Minimized"}),(0,u.createComponent)(O,{get class(){return y.shead},children:"Misc."}),(0,u.createComponent)(P,{get value(){return e().multi_instance},onChange:r=>{t(i=>f(p({},i),{multi_instance:r}))},note:"Allow multiple instances of Dorion to be running at the same time.",children:"Allow Multiple Instances"}),(0,u.createComponent)(P,{get value(){return e().use_native_titlebar},onChange:r=>{t(i=>f(p({},i),{use_native_titlebar:r}))},note:"Disable the custom titlebar and use your systems native one instead.",children:"Use Native Titlebar"}),(0,u.createComponent)(P,{get value(){return e().autoupdate},onChange:r=>{t(i=>f(p({},i),{autoupdate:r}))},get note(){return["Automatically update various Dorion components, such as"," ",Bt.cloneNode(!0),"."]},children:"Autoupdate"}),(0,u.createComponent)(P,{get value(){return e().update_notify===void 0||e().update_notify},onChange:r=>{t(i=>f(p({},i),{update_notify:r}))},get disabled(){return e().autoupdate},children:"Notify me of updates"}),(0,u.createComponent)(W,{style:{marginTop:"1rem"},get children(){return[(()=>{let r=Ke.cloneNode(!0);return(0,L.insert)(r,(0,u.createComponent)(Qe,{get class(){return y.left16},children:"Plugins Folder"}),null),(0,L.insert)(r,(0,u.createComponent)(oe,{onClick:Gt,children:"Open"}),null),(0,le.effect)(()=>(0,ie.className)(r,y.fcard)),r})(),(()=>{let r=Ke.cloneNode(!0);return(0,L.insert)(r,(0,u.createComponent)(Qe,{get class(){return y.left16},children:"Themes Folder"}),null),(0,L.insert)(r,(0,u.createComponent)(oe,{onClick:Yt,children:"Open"}),null),(0,le.effect)(()=>(0,ie.className)(r,y.fcard)),r})()]}}),(0,u.createComponent)(O,{get class(){return y.shead},children:"Plugins"}),(0,u.createComponent)(qe,{}),(0,u.createComponent)(oe,{onClick:d,style:{"margin-top":"1rem",padding:"18px"},grow:!0,children:"Save & Restart"})]}var{settings:{registerSection:H},flux:{dispatcher:nt},util:{sleep:qt},observeDom:Zt}=shelter,{app:Kt}=window.__TAURI__,rt=()=>h(void 0,null,function*(){let t=Zt('div[class*="side_"] div[class*="info_"]',n=>h(void 0,null,function*(){let s=n==null?void 0:n.firstElementChild,d=document.createElement("span");s&&(d.innerHTML=`Dorion v${yield Kt.getVersion()}`,d.classList.add(...s.classList),d.style.color=s.style.color,n.appendChild(d),t())}));yield qt(5e3),t==null||t()});nt.subscribe("USER_SETTINGS_MODAL_OPEN",rt);var Qt=[H("divider"),H("header","Dorion"),H("section","dorion-settings","Dorion Settings",tt),H("section","dorion-performance","Performance & Extras",Te),H("section","dorion-profiles","Profiles",ze)],Xt=()=>{Qt.forEach(e=>e()),nt.unsubscribe("USER_SETTINGS_MODAL_OPEN",rt)};return mt(en);})();
