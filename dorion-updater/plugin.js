(()=>{var p=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var _=Object.prototype.hasOwnProperty;var b=(t,e)=>{for(var o in e)p(t,o,{get:e[o],enumerable:!0})},m=(t,e,o,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of y(e))!_.call(t,n)&&n!==o&&p(t,n,{get:()=>e[n],enumerable:!(i=f(e,n))||i.enumerable});return t};var T=t=>m(p({},"__esModule",{value:!0}),t);var c=(t,e,o)=>new Promise((i,n)=>{var u=a=>{try{d(o.next(a))}catch(r){n(r)}},h=a=>{try{d(o.throw(a))}catch(r){n(r)}},d=a=>a.done?i(a.value):Promise.resolve(a.value).then(u,h);d((o=o.apply(t,e)).next())});var k={};b(k,{onLoad:()=>D});var{ui:{openConfirmationModal:l}}=shelter,{invoke:s,process:U,event:g}=window.__TAURI__,D=()=>c(void 0,null,function*(){let t=JSON.parse(yield s("read_config_file")),e=yield s("update_check"),o=()=>{s("do_update",{toUpdate:e})};if(console.log(`[Updater] Dorion things to update: ${e}`),!(t.update_notify!==void 0&&!t.update_notify)){if(e.includes("vencordorion")||e.includes("dorion")){if(t.autoupdate){if(e.includes("dorion")){l({header:"Dorion Update",body:"A Dorion update has been fetched, and Dorion will restart momentarily.",confirmText:"Got it!",type:"neutral"}).then(()=>o(),()=>{});return}o();return}l({header:"Updates Available!",body:"There are Dorion updates available. Would you like to apply them? This notification can be disabled in Dorion Settings",confirmText:"Yes please!",cancelText:"Nope!",type:"neutral"}).then(()=>o(),()=>{})}g.listen("update_complete",()=>{l({header:"Update Complete!",body:"The update has been applied! Please restart to apply the changes.",confirmText:"Okay!",type:"neutral"}).then(()=>U.relaunch(),()=>{})})}});return T(k);})();
