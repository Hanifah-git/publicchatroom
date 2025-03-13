(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const y of c)if(y.type==="childList")for(const E of y.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&a(E)}).observe(document,{childList:!0,subtree:!0});function r(c){const y={};return c.integrity&&(y.integrity=c.integrity),c.referrerPolicy&&(y.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?y.credentials="include":c.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function a(c){if(c.ep)return;c.ep=!0;const y=r(c);fetch(c.href,y)}})();const ws=()=>{};var ti={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=function(s){const n=[];let r=0;for(let a=0;a<s.length;a++){let c=s.charCodeAt(a);c<128?n[r++]=c:c<2048?(n[r++]=c>>6|192,n[r++]=c&63|128):(c&64512)===55296&&a+1<s.length&&(s.charCodeAt(a+1)&64512)===56320?(c=65536+((c&1023)<<10)+(s.charCodeAt(++a)&1023),n[r++]=c>>18|240,n[r++]=c>>12&63|128,n[r++]=c>>6&63|128,n[r++]=c&63|128):(n[r++]=c>>12|224,n[r++]=c>>6&63|128,n[r++]=c&63|128)}return n},As=function(s){const n=[];let r=0,a=0;for(;r<s.length;){const c=s[r++];if(c<128)n[a++]=String.fromCharCode(c);else if(c>191&&c<224){const y=s[r++];n[a++]=String.fromCharCode((c&31)<<6|y&63)}else if(c>239&&c<365){const y=s[r++],E=s[r++],_=s[r++],A=((c&7)<<18|(y&63)<<12|(E&63)<<6|_&63)-65536;n[a++]=String.fromCharCode(55296+(A>>10)),n[a++]=String.fromCharCode(56320+(A&1023))}else{const y=s[r++],E=s[r++];n[a++]=String.fromCharCode((c&15)<<12|(y&63)<<6|E&63)}}return n.join("")},Ti={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,n){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let c=0;c<s.length;c+=3){const y=s[c],E=c+1<s.length,_=E?s[c+1]:0,A=c+2<s.length,T=A?s[c+2]:0,G=y>>2,k=(y&3)<<4|_>>4;let P=(_&15)<<2|T>>6,X=T&63;A||(X=64,E||(P=64)),a.push(r[G],r[k],r[P],r[X])}return a.join("")},encodeString(s,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(s):this.encodeByteArray(Ai(s),n)},decodeString(s,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(s):As(this.decodeStringToByteArray(s,n))},decodeStringToByteArray(s,n){this.init_();const r=n?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let c=0;c<s.length;){const y=r[s.charAt(c++)],_=c<s.length?r[s.charAt(c)]:0;++c;const T=c<s.length?r[s.charAt(c)]:64;++c;const k=c<s.length?r[s.charAt(c)]:64;if(++c,y==null||_==null||T==null||k==null)throw new Ts;const P=y<<2|_>>4;if(a.push(P),T!==64){const X=_<<4&240|T>>2;if(a.push(X),k!==64){const b=T<<6&192|k;a.push(b)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Ts extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Is=function(s){const n=Ai(s);return Ti.encodeByteArray(n,!0)},le=function(s){return Is(s).replace(/\./g,"")},Ss=function(s){try{return Ti.decodeString(s,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=()=>bs().__FIREBASE_DEFAULTS__,Cs=()=>{if(typeof process>"u"||typeof ti>"u")return;const s=ti.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Rs=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=s&&Ss(s[1]);return n&&JSON.parse(n)},Ii=()=>{try{return ws()||Ds()||Cs()||Rs()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Ps=s=>{var n,r;return(r=(n=Ii())===null||n===void 0?void 0:n.emulatorHosts)===null||r===void 0?void 0:r[s]},Os=s=>{const n=Ps(s);if(!n)return;const r=n.lastIndexOf(":");if(r<=0||r+1===n.length)throw new Error(`Invalid host ${n} with no separate hostname and port!`);const a=parseInt(n.substring(r+1),10);return n[0]==="["?[n.substring(1,r-1),a]:[n.substring(0,r),a]},Si=()=>{var s;return(s=Ii())===null||s===void 0?void 0:s.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,r)=>{this.resolve=n,this.reject=r})}wrapCallback(n){return(r,a)=>{r?this.reject(r):this.resolve(a),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(r):n(r,a))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(s,n){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},a=n||"demo-project",c=s.iat||0,y=s.sub||s.user_id;if(!y)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const E=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:c,exp:c+3600,auth_time:c,sub:y,user_id:y,firebase:{sign_in_provider:"custom",identities:{}}},s);return[le(JSON.stringify(r)),le(JSON.stringify(E)),""].join(".")}function Ls(){try{return typeof indexedDB=="object"}catch{return!1}}function Ms(){return new Promise((s,n)=>{try{let r=!0;const a="validate-browser-context-for-indexeddb-analytics-module",c=self.indexedDB.open(a);c.onsuccess=()=>{c.result.close(),r||self.indexedDB.deleteDatabase(a),s(!0)},c.onupgradeneeded=()=>{r=!1},c.onerror=()=>{var y;n(((y=c.error)===null||y===void 0?void 0:y.message)||"")}}catch(r){n(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="FirebaseError";class At extends Error{constructor(n,r,a){super(r),this.code=n,this.customData=a,this.name=js,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bi.prototype.create)}}class bi{constructor(n,r,a){this.service=n,this.serviceName=r,this.errors=a}create(n,...r){const a=r[0]||{},c=`${this.service}/${n}`,y=this.errors[n],E=y?Bs(y,a):"Error",_=`${this.serviceName}: ${E} (${c}).`;return new At(c,_,a)}}function Bs(s,n){return s.replace(xs,(r,a)=>{const c=n[a];return c!=null?String(c):`<${a}?>`})}const xs=/\{\$([^}]+)}/g;function ue(s,n){if(s===n)return!0;const r=Object.keys(s),a=Object.keys(n);for(const c of r){if(!a.includes(c))return!1;const y=s[c],E=n[c];if(ei(y)&&ei(E)){if(!ue(y,E))return!1}else if(y!==E)return!1}for(const c of a)if(!r.includes(c))return!1;return!0}function ei(s){return s!==null&&typeof s=="object"}class Vt{constructor(n,r,a){this.name=n,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(n,r){this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const r=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(r)){const a=new Ns;if(this.instancesDeferred.set(r,a),this.isInitialized(r)||this.shouldAutoInitialize())try{const c=this.getOrInitializeService({instanceIdentifier:r});c&&a.resolve(c)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(n){var r;const a=this.normalizeInstanceIdentifier(n==null?void 0:n.identifier),c=(r=n==null?void 0:n.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(y){if(c)return null;throw y}else{if(c)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(Us(n))try{this.getOrInitializeService({instanceIdentifier:pt})}catch{}for(const[r,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);try{const y=this.getOrInitializeService({instanceIdentifier:c});a.resolve(y)}catch{}}}}clearInstance(n=pt){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...n.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=pt){return this.instances.has(n)}getOptions(n=pt){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:r={}}=n,a=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const c=this.getOrInitializeService({instanceIdentifier:a,options:r});for(const[y,E]of this.instancesDeferred.entries()){const _=this.normalizeInstanceIdentifier(y);a===_&&E.resolve(c)}return c}onInit(n,r){var a;const c=this.normalizeInstanceIdentifier(r),y=(a=this.onInitCallbacks.get(c))!==null&&a!==void 0?a:new Set;y.add(n),this.onInitCallbacks.set(c,y);const E=this.instances.get(c);return E&&n(E,c),()=>{y.delete(n)}}invokeOnInitCallbacks(n,r){const a=this.onInitCallbacks.get(r);if(a)for(const c of a)try{c(n,r)}catch{}}getOrInitializeService({instanceIdentifier:n,options:r={}}){let a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Hs(n),options:r}),this.instances.set(n,a),this.instancesOptions.set(n,r),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch{}return a||null}normalizeInstanceIdentifier(n=pt){return this.component?this.component.multipleInstances?n:pt:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hs(s){return s===pt?void 0:s}function Us(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const r=this.getProvider(n.name);if(r.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);r.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const r=new Fs(n,this);return this.providers.set(n,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(D||(D={}));const $s={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},zs=D.INFO,Gs={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Xs=(s,n,...r)=>{if(n<s.logLevel)return;const a=new Date().toISOString(),c=Gs[n];if(c)console[c](`[${a}]  ${s.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class Di{constructor(n){this.name=n,this._logLevel=zs,this._logHandler=Xs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in D))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?$s[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...n),this._logHandler(this,D.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...n),this._logHandler(this,D.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,D.INFO,...n),this._logHandler(this,D.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,D.WARN,...n),this._logHandler(this,D.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...n),this._logHandler(this,D.ERROR,...n)}}const Ks=(s,n)=>n.some(r=>s instanceof r);let ni,ii;function Ws(){return ni||(ni=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Js(){return ii||(ii=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ci=new WeakMap,Ge=new WeakMap,Ri=new WeakMap,He=new WeakMap,Ye=new WeakMap;function qs(s){const n=new Promise((r,a)=>{const c=()=>{s.removeEventListener("success",y),s.removeEventListener("error",E)},y=()=>{r(at(s.result)),c()},E=()=>{a(s.error),c()};s.addEventListener("success",y),s.addEventListener("error",E)});return n.then(r=>{r instanceof IDBCursor&&Ci.set(r,s)}).catch(()=>{}),Ye.set(n,s),n}function Ys(s){if(Ge.has(s))return;const n=new Promise((r,a)=>{const c=()=>{s.removeEventListener("complete",y),s.removeEventListener("error",E),s.removeEventListener("abort",E)},y=()=>{r(),c()},E=()=>{a(s.error||new DOMException("AbortError","AbortError")),c()};s.addEventListener("complete",y),s.addEventListener("error",E),s.addEventListener("abort",E)});Ge.set(s,n)}let Xe={get(s,n,r){if(s instanceof IDBTransaction){if(n==="done")return Ge.get(s);if(n==="objectStoreNames")return s.objectStoreNames||Ri.get(s);if(n==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return at(s[n])},set(s,n,r){return s[n]=r,!0},has(s,n){return s instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in s}};function Zs(s){Xe=s(Xe)}function Qs(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...r){const a=s.call(Ue(this),n,...r);return Ri.set(a,n.sort?n.sort():[n]),at(a)}:Js().includes(s)?function(...n){return s.apply(Ue(this),n),at(Ci.get(this))}:function(...n){return at(s.apply(Ue(this),n))}}function tr(s){return typeof s=="function"?Qs(s):(s instanceof IDBTransaction&&Ys(s),Ks(s,Ws())?new Proxy(s,Xe):s)}function at(s){if(s instanceof IDBRequest)return qs(s);if(He.has(s))return He.get(s);const n=tr(s);return n!==s&&(He.set(s,n),Ye.set(n,s)),n}const Ue=s=>Ye.get(s);function er(s,n,{blocked:r,upgrade:a,blocking:c,terminated:y}={}){const E=indexedDB.open(s,n),_=at(E);return a&&E.addEventListener("upgradeneeded",A=>{a(at(E.result),A.oldVersion,A.newVersion,at(E.transaction),A)}),r&&E.addEventListener("blocked",A=>r(A.oldVersion,A.newVersion,A)),_.then(A=>{y&&A.addEventListener("close",()=>y()),c&&A.addEventListener("versionchange",T=>c(T.oldVersion,T.newVersion,T))}).catch(()=>{}),_}const nr=["get","getKey","getAll","getAllKeys","count"],ir=["put","add","delete","clear"],Ve=new Map;function si(s,n){if(!(s instanceof IDBDatabase&&!(n in s)&&typeof n=="string"))return;if(Ve.get(n))return Ve.get(n);const r=n.replace(/FromIndex$/,""),a=n!==r,c=ir.includes(r);if(!(r in(a?IDBIndex:IDBObjectStore).prototype)||!(c||nr.includes(r)))return;const y=async function(E,..._){const A=this.transaction(E,c?"readwrite":"readonly");let T=A.store;return a&&(T=T.index(_.shift())),(await Promise.all([T[r](..._),c&&A.done]))[0]};return Ve.set(n,y),y}Zs(s=>({...s,get:(n,r,a)=>si(n,r)||s.get(n,r,a),has:(n,r)=>!!si(n,r)||s.has(n,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(rr(r)){const a=r.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(r=>r).join(" ")}}function rr(s){const n=s.getComponent();return(n==null?void 0:n.type)==="VERSION"}const Ke="@firebase/app",ri="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=new Di("@firebase/app"),or="@firebase/app-compat",hr="@firebase/analytics-compat",ar="@firebase/analytics",lr="@firebase/app-check-compat",ur="@firebase/app-check",cr="@firebase/auth",fr="@firebase/auth-compat",pr="@firebase/database",gr="@firebase/data-connect",dr="@firebase/database-compat",mr="@firebase/functions",yr="@firebase/functions-compat",vr="@firebase/installations",Er="@firebase/installations-compat",_r="@firebase/messaging",wr="@firebase/messaging-compat",Ar="@firebase/performance",Tr="@firebase/performance-compat",Ir="@firebase/remote-config",Sr="@firebase/remote-config-compat",br="@firebase/storage",Dr="@firebase/storage-compat",Cr="@firebase/firestore",Rr="@firebase/vertexai",Pr="@firebase/firestore-compat",Or="firebase",Nr="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="[DEFAULT]",kr={[Ke]:"fire-core",[or]:"fire-core-compat",[ar]:"fire-analytics",[hr]:"fire-analytics-compat",[ur]:"fire-app-check",[lr]:"fire-app-check-compat",[cr]:"fire-auth",[fr]:"fire-auth-compat",[pr]:"fire-rtdb",[gr]:"fire-data-connect",[dr]:"fire-rtdb-compat",[mr]:"fire-fn",[yr]:"fire-fn-compat",[vr]:"fire-iid",[Er]:"fire-iid-compat",[_r]:"fire-fcm",[wr]:"fire-fcm-compat",[Ar]:"fire-perf",[Tr]:"fire-perf-compat",[Ir]:"fire-rc",[Sr]:"fire-rc-compat",[br]:"fire-gcs",[Dr]:"fire-gcs-compat",[Cr]:"fire-fst",[Pr]:"fire-fst-compat",[Rr]:"fire-vertex","fire-js":"fire-js",[Or]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new Map,Lr=new Map,Je=new Map;function oi(s,n){try{s.container.addComponent(n)}catch(r){nt.debug(`Component ${n.name} failed to register with FirebaseApp ${s.name}`,r)}}function fe(s){const n=s.name;if(Je.has(n))return nt.debug(`There were multiple attempts to register component ${n}.`),!1;Je.set(n,s);for(const r of ce.values())oi(r,s);for(const r of Lr.values())oi(r,s);return!0}function Mr(s,n){const r=s.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),s.container.getProvider(n)}function jr(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lt=new bi("app","Firebase",Br);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(n,r,a){this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=Nr;function Pi(s,n={}){let r=s;typeof n!="object"&&(n={name:n});const a=Object.assign({name:We,automaticDataCollectionEnabled:!1},n),c=a.name;if(typeof c!="string"||!c)throw lt.create("bad-app-name",{appName:String(c)});if(r||(r=Si()),!r)throw lt.create("no-options");const y=ce.get(c);if(y){if(ue(r,y.options)&&ue(a,y.config))return y;throw lt.create("duplicate-app",{appName:c})}const E=new Vs(c);for(const A of Je.values())E.addComponent(A);const _=new xr(r,a,E);return ce.set(c,_),_}function Hr(s=We){const n=ce.get(s);if(!n&&s===We&&Si())return Pi();if(!n)throw lt.create("no-app",{appName:s});return n}function _t(s,n,r){var a;let c=(a=kr[s])!==null&&a!==void 0?a:s;r&&(c+=`-${r}`);const y=c.match(/\s|\//),E=n.match(/\s|\//);if(y||E){const _=[`Unable to register library "${c}" with version "${n}":`];y&&_.push(`library name "${c}" contains illegal characters (whitespace or "/")`),y&&E&&_.push("and"),E&&_.push(`version name "${n}" contains illegal characters (whitespace or "/")`),nt.warn(_.join(" "));return}fe(new Vt(`${c}-version`,()=>({library:c,version:n}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="firebase-heartbeat-database",Vr=1,$t="firebase-heartbeat-store";let $e=null;function Oi(){return $e||($e=er(Ur,Vr,{upgrade:(s,n)=>{switch(n){case 0:try{s.createObjectStore($t)}catch(r){console.warn(r)}}}}).catch(s=>{throw lt.create("idb-open",{originalErrorMessage:s.message})})),$e}async function $r(s){try{const r=(await Oi()).transaction($t),a=await r.objectStore($t).get(Ni(s));return await r.done,a}catch(n){if(n instanceof At)nt.warn(n.message);else{const r=lt.create("idb-get",{originalErrorMessage:n==null?void 0:n.message});nt.warn(r.message)}}}async function hi(s,n){try{const a=(await Oi()).transaction($t,"readwrite");await a.objectStore($t).put(n,Ni(s)),await a.done}catch(r){if(r instanceof At)nt.warn(r.message);else{const a=lt.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});nt.warn(a.message)}}}function Ni(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=1024,Gr=30;class Xr{constructor(n){this.container=n,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Wr(r),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var n,r;try{const c=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),y=ai();if(((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===y||this._heartbeatsCache.heartbeats.some(E=>E.date===y))return;if(this._heartbeatsCache.heartbeats.push({date:y,agent:c}),this._heartbeatsCache.heartbeats.length>Gr){const E=Jr(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(E,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){nt.warn(a)}}async getHeartbeatsHeader(){var n;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=ai(),{heartbeatsToSend:a,unsentEntries:c}=Kr(this._heartbeatsCache.heartbeats),y=le(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=r,c.length>0?(this._heartbeatsCache.heartbeats=c,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),y}catch(r){return nt.warn(r),""}}}function ai(){return new Date().toISOString().substring(0,10)}function Kr(s,n=zr){const r=[];let a=s.slice();for(const c of s){const y=r.find(E=>E.agent===c.agent);if(y){if(y.dates.push(c.date),li(r)>n){y.dates.pop();break}}else if(r.push({agent:c.agent,dates:[c.date]}),li(r)>n){r.pop();break}a=a.slice(1)}return{heartbeatsToSend:r,unsentEntries:a}}class Wr{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ls()?Ms().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await $r(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){var r;if(await this._canUseIndexedDBPromise){const c=await this.read();return hi(this.app,{lastSentHeartbeatDate:(r=n.lastSentHeartbeatDate)!==null&&r!==void 0?r:c.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){var r;if(await this._canUseIndexedDBPromise){const c=await this.read();return hi(this.app,{lastSentHeartbeatDate:(r=n.lastSentHeartbeatDate)!==null&&r!==void 0?r:c.lastSentHeartbeatDate,heartbeats:[...c.heartbeats,...n.heartbeats]})}else return}}function li(s){return le(JSON.stringify({version:2,heartbeats:s})).length}function Jr(s){if(s.length===0)return-1;let n=0,r=s[0].date;for(let a=1;a<s.length;a++)s[a].date<r&&(r=s[a].date,n=a);return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(s){fe(new Vt("platform-logger",n=>new sr(n),"PRIVATE")),fe(new Vt("heartbeat",n=>new Xr(n),"PRIVATE")),_t(Ke,ri,s),_t(Ke,ri,"esm2017"),_t("fire-js","")}qr("");var Yr="firebase",Zr="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t(Yr,Zr,"app");var ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ki;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function n(g,h){function u(){}u.prototype=h.prototype,g.D=h.prototype,g.prototype=new u,g.prototype.constructor=g,g.C=function(f,p,m){for(var l=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)l[Q-2]=arguments[Q];return h.prototype[p].apply(f,l)}}function r(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}n(a,r),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function c(g,h,u){u||(u=0);var f=Array(16);if(typeof h=="string")for(var p=0;16>p;++p)f[p]=h.charCodeAt(u++)|h.charCodeAt(u++)<<8|h.charCodeAt(u++)<<16|h.charCodeAt(u++)<<24;else for(p=0;16>p;++p)f[p]=h[u++]|h[u++]<<8|h[u++]<<16|h[u++]<<24;h=g.g[0],u=g.g[1],p=g.g[2];var m=g.g[3],l=h+(m^u&(p^m))+f[0]+3614090360&4294967295;h=u+(l<<7&4294967295|l>>>25),l=m+(p^h&(u^p))+f[1]+3905402710&4294967295,m=h+(l<<12&4294967295|l>>>20),l=p+(u^m&(h^u))+f[2]+606105819&4294967295,p=m+(l<<17&4294967295|l>>>15),l=u+(h^p&(m^h))+f[3]+3250441966&4294967295,u=p+(l<<22&4294967295|l>>>10),l=h+(m^u&(p^m))+f[4]+4118548399&4294967295,h=u+(l<<7&4294967295|l>>>25),l=m+(p^h&(u^p))+f[5]+1200080426&4294967295,m=h+(l<<12&4294967295|l>>>20),l=p+(u^m&(h^u))+f[6]+2821735955&4294967295,p=m+(l<<17&4294967295|l>>>15),l=u+(h^p&(m^h))+f[7]+4249261313&4294967295,u=p+(l<<22&4294967295|l>>>10),l=h+(m^u&(p^m))+f[8]+1770035416&4294967295,h=u+(l<<7&4294967295|l>>>25),l=m+(p^h&(u^p))+f[9]+2336552879&4294967295,m=h+(l<<12&4294967295|l>>>20),l=p+(u^m&(h^u))+f[10]+4294925233&4294967295,p=m+(l<<17&4294967295|l>>>15),l=u+(h^p&(m^h))+f[11]+2304563134&4294967295,u=p+(l<<22&4294967295|l>>>10),l=h+(m^u&(p^m))+f[12]+1804603682&4294967295,h=u+(l<<7&4294967295|l>>>25),l=m+(p^h&(u^p))+f[13]+4254626195&4294967295,m=h+(l<<12&4294967295|l>>>20),l=p+(u^m&(h^u))+f[14]+2792965006&4294967295,p=m+(l<<17&4294967295|l>>>15),l=u+(h^p&(m^h))+f[15]+1236535329&4294967295,u=p+(l<<22&4294967295|l>>>10),l=h+(p^m&(u^p))+f[1]+4129170786&4294967295,h=u+(l<<5&4294967295|l>>>27),l=m+(u^p&(h^u))+f[6]+3225465664&4294967295,m=h+(l<<9&4294967295|l>>>23),l=p+(h^u&(m^h))+f[11]+643717713&4294967295,p=m+(l<<14&4294967295|l>>>18),l=u+(m^h&(p^m))+f[0]+3921069994&4294967295,u=p+(l<<20&4294967295|l>>>12),l=h+(p^m&(u^p))+f[5]+3593408605&4294967295,h=u+(l<<5&4294967295|l>>>27),l=m+(u^p&(h^u))+f[10]+38016083&4294967295,m=h+(l<<9&4294967295|l>>>23),l=p+(h^u&(m^h))+f[15]+3634488961&4294967295,p=m+(l<<14&4294967295|l>>>18),l=u+(m^h&(p^m))+f[4]+3889429448&4294967295,u=p+(l<<20&4294967295|l>>>12),l=h+(p^m&(u^p))+f[9]+568446438&4294967295,h=u+(l<<5&4294967295|l>>>27),l=m+(u^p&(h^u))+f[14]+3275163606&4294967295,m=h+(l<<9&4294967295|l>>>23),l=p+(h^u&(m^h))+f[3]+4107603335&4294967295,p=m+(l<<14&4294967295|l>>>18),l=u+(m^h&(p^m))+f[8]+1163531501&4294967295,u=p+(l<<20&4294967295|l>>>12),l=h+(p^m&(u^p))+f[13]+2850285829&4294967295,h=u+(l<<5&4294967295|l>>>27),l=m+(u^p&(h^u))+f[2]+4243563512&4294967295,m=h+(l<<9&4294967295|l>>>23),l=p+(h^u&(m^h))+f[7]+1735328473&4294967295,p=m+(l<<14&4294967295|l>>>18),l=u+(m^h&(p^m))+f[12]+2368359562&4294967295,u=p+(l<<20&4294967295|l>>>12),l=h+(u^p^m)+f[5]+4294588738&4294967295,h=u+(l<<4&4294967295|l>>>28),l=m+(h^u^p)+f[8]+2272392833&4294967295,m=h+(l<<11&4294967295|l>>>21),l=p+(m^h^u)+f[11]+1839030562&4294967295,p=m+(l<<16&4294967295|l>>>16),l=u+(p^m^h)+f[14]+4259657740&4294967295,u=p+(l<<23&4294967295|l>>>9),l=h+(u^p^m)+f[1]+2763975236&4294967295,h=u+(l<<4&4294967295|l>>>28),l=m+(h^u^p)+f[4]+1272893353&4294967295,m=h+(l<<11&4294967295|l>>>21),l=p+(m^h^u)+f[7]+4139469664&4294967295,p=m+(l<<16&4294967295|l>>>16),l=u+(p^m^h)+f[10]+3200236656&4294967295,u=p+(l<<23&4294967295|l>>>9),l=h+(u^p^m)+f[13]+681279174&4294967295,h=u+(l<<4&4294967295|l>>>28),l=m+(h^u^p)+f[0]+3936430074&4294967295,m=h+(l<<11&4294967295|l>>>21),l=p+(m^h^u)+f[3]+3572445317&4294967295,p=m+(l<<16&4294967295|l>>>16),l=u+(p^m^h)+f[6]+76029189&4294967295,u=p+(l<<23&4294967295|l>>>9),l=h+(u^p^m)+f[9]+3654602809&4294967295,h=u+(l<<4&4294967295|l>>>28),l=m+(h^u^p)+f[12]+3873151461&4294967295,m=h+(l<<11&4294967295|l>>>21),l=p+(m^h^u)+f[15]+530742520&4294967295,p=m+(l<<16&4294967295|l>>>16),l=u+(p^m^h)+f[2]+3299628645&4294967295,u=p+(l<<23&4294967295|l>>>9),l=h+(p^(u|~m))+f[0]+4096336452&4294967295,h=u+(l<<6&4294967295|l>>>26),l=m+(u^(h|~p))+f[7]+1126891415&4294967295,m=h+(l<<10&4294967295|l>>>22),l=p+(h^(m|~u))+f[14]+2878612391&4294967295,p=m+(l<<15&4294967295|l>>>17),l=u+(m^(p|~h))+f[5]+4237533241&4294967295,u=p+(l<<21&4294967295|l>>>11),l=h+(p^(u|~m))+f[12]+1700485571&4294967295,h=u+(l<<6&4294967295|l>>>26),l=m+(u^(h|~p))+f[3]+2399980690&4294967295,m=h+(l<<10&4294967295|l>>>22),l=p+(h^(m|~u))+f[10]+4293915773&4294967295,p=m+(l<<15&4294967295|l>>>17),l=u+(m^(p|~h))+f[1]+2240044497&4294967295,u=p+(l<<21&4294967295|l>>>11),l=h+(p^(u|~m))+f[8]+1873313359&4294967295,h=u+(l<<6&4294967295|l>>>26),l=m+(u^(h|~p))+f[15]+4264355552&4294967295,m=h+(l<<10&4294967295|l>>>22),l=p+(h^(m|~u))+f[6]+2734768916&4294967295,p=m+(l<<15&4294967295|l>>>17),l=u+(m^(p|~h))+f[13]+1309151649&4294967295,u=p+(l<<21&4294967295|l>>>11),l=h+(p^(u|~m))+f[4]+4149444226&4294967295,h=u+(l<<6&4294967295|l>>>26),l=m+(u^(h|~p))+f[11]+3174756917&4294967295,m=h+(l<<10&4294967295|l>>>22),l=p+(h^(m|~u))+f[2]+718787259&4294967295,p=m+(l<<15&4294967295|l>>>17),l=u+(m^(p|~h))+f[9]+3951481745&4294967295,g.g[0]=g.g[0]+h&4294967295,g.g[1]=g.g[1]+(p+(l<<21&4294967295|l>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+m&4294967295}a.prototype.u=function(g,h){h===void 0&&(h=g.length);for(var u=h-this.blockSize,f=this.B,p=this.h,m=0;m<h;){if(p==0)for(;m<=u;)c(this,g,m),m+=this.blockSize;if(typeof g=="string"){for(;m<h;)if(f[p++]=g.charCodeAt(m++),p==this.blockSize){c(this,f),p=0;break}}else for(;m<h;)if(f[p++]=g[m++],p==this.blockSize){c(this,f),p=0;break}}this.h=p,this.o+=h},a.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var h=1;h<g.length-8;++h)g[h]=0;var u=8*this.o;for(h=g.length-8;h<g.length;++h)g[h]=u&255,u/=256;for(this.u(g),g=Array(16),h=u=0;4>h;++h)for(var f=0;32>f;f+=8)g[u++]=this.g[h]>>>f&255;return g};function y(g,h){var u=_;return Object.prototype.hasOwnProperty.call(u,g)?u[g]:u[g]=h(g)}function E(g,h){this.h=h;for(var u=[],f=!0,p=g.length-1;0<=p;p--){var m=g[p]|0;f&&m==h||(u[p]=m,f=!1)}this.g=u}var _={};function A(g){return-128<=g&&128>g?y(g,function(h){return new E([h|0],0>h?-1:0)}):new E([g|0],0>g?-1:0)}function T(g){if(isNaN(g)||!isFinite(g))return k;if(0>g)return N(T(-g));for(var h=[],u=1,f=0;g>=u;f++)h[f]=g/u|0,u*=4294967296;return new E(h,0)}function G(g,h){if(g.length==0)throw Error("number format error: empty string");if(h=h||10,2>h||36<h)throw Error("radix out of range: "+h);if(g.charAt(0)=="-")return N(G(g.substring(1),h));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var u=T(Math.pow(h,8)),f=k,p=0;p<g.length;p+=8){var m=Math.min(8,g.length-p),l=parseInt(g.substring(p,p+m),h);8>m?(m=T(Math.pow(h,m)),f=f.j(m).add(T(l))):(f=f.j(u),f=f.add(T(l)))}return f}var k=A(0),P=A(1),X=A(16777216);s=E.prototype,s.m=function(){if(M(this))return-N(this).m();for(var g=0,h=1,u=0;u<this.g.length;u++){var f=this.i(u);g+=(0<=f?f:4294967296+f)*h,h*=4294967296}return g},s.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(b(this))return"0";if(M(this))return"-"+N(this).toString(g);for(var h=T(Math.pow(g,6)),u=this,f="";;){var p=it(u,h).g;u=gt(u,p.j(h));var m=((0<u.g.length?u.g[0]:u.h)>>>0).toString(g);if(u=p,b(u))return m+f;for(;6>m.length;)m="0"+m;f=m+f}},s.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function b(g){if(g.h!=0)return!1;for(var h=0;h<g.g.length;h++)if(g.g[h]!=0)return!1;return!0}function M(g){return g.h==-1}s.l=function(g){return g=gt(this,g),M(g)?-1:b(g)?0:1};function N(g){for(var h=g.g.length,u=[],f=0;f<h;f++)u[f]=~g.g[f];return new E(u,~g.h).add(P)}s.abs=function(){return M(this)?N(this):this},s.add=function(g){for(var h=Math.max(this.g.length,g.g.length),u=[],f=0,p=0;p<=h;p++){var m=f+(this.i(p)&65535)+(g.i(p)&65535),l=(m>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);f=l>>>16,m&=65535,l&=65535,u[p]=l<<16|m}return new E(u,u[u.length-1]&-2147483648?-1:0)};function gt(g,h){return g.add(N(h))}s.j=function(g){if(b(this)||b(g))return k;if(M(this))return M(g)?N(this).j(N(g)):N(N(this).j(g));if(M(g))return N(this.j(N(g)));if(0>this.l(X)&&0>g.l(X))return T(this.m()*g.m());for(var h=this.g.length+g.g.length,u=[],f=0;f<2*h;f++)u[f]=0;for(f=0;f<this.g.length;f++)for(var p=0;p<g.g.length;p++){var m=this.i(f)>>>16,l=this.i(f)&65535,Q=g.i(p)>>>16,Tt=g.i(p)&65535;u[2*f+2*p]+=l*Tt,Y(u,2*f+2*p),u[2*f+2*p+1]+=m*Tt,Y(u,2*f+2*p+1),u[2*f+2*p+1]+=l*Q,Y(u,2*f+2*p+1),u[2*f+2*p+2]+=m*Q,Y(u,2*f+2*p+2)}for(f=0;f<h;f++)u[f]=u[2*f+1]<<16|u[2*f];for(f=h;f<2*h;f++)u[f]=0;return new E(u,0)};function Y(g,h){for(;(g[h]&65535)!=g[h];)g[h+1]+=g[h]>>>16,g[h]&=65535,h++}function K(g,h){this.g=g,this.h=h}function it(g,h){if(b(h))throw Error("division by zero");if(b(g))return new K(k,k);if(M(g))return h=it(N(g),h),new K(N(h.g),N(h.h));if(M(h))return h=it(g,N(h)),new K(N(h.g),h.h);if(30<g.g.length){if(M(g)||M(h))throw Error("slowDivide_ only works with positive integers.");for(var u=P,f=h;0>=f.l(g);)u=Gt(u),f=Gt(f);var p=Z(u,1),m=Z(f,1);for(f=Z(f,2),u=Z(u,2);!b(f);){var l=m.add(f);0>=l.l(g)&&(p=p.add(u),m=l),f=Z(f,1),u=Z(u,1)}return h=gt(g,p.j(h)),new K(p,h)}for(p=k;0<=g.l(h);){for(u=Math.max(1,Math.floor(g.m()/h.m())),f=Math.ceil(Math.log(u)/Math.LN2),f=48>=f?1:Math.pow(2,f-48),m=T(u),l=m.j(h);M(l)||0<l.l(g);)u-=f,m=T(u),l=m.j(h);b(m)&&(m=P),p=p.add(m),g=gt(g,l)}return new K(p,g)}s.A=function(g){return it(this,g).h},s.and=function(g){for(var h=Math.max(this.g.length,g.g.length),u=[],f=0;f<h;f++)u[f]=this.i(f)&g.i(f);return new E(u,this.h&g.h)},s.or=function(g){for(var h=Math.max(this.g.length,g.g.length),u=[],f=0;f<h;f++)u[f]=this.i(f)|g.i(f);return new E(u,this.h|g.h)},s.xor=function(g){for(var h=Math.max(this.g.length,g.g.length),u=[],f=0;f<h;f++)u[f]=this.i(f)^g.i(f);return new E(u,this.h^g.h)};function Gt(g){for(var h=g.g.length+1,u=[],f=0;f<h;f++)u[f]=g.i(f)<<1|g.i(f-1)>>>31;return new E(u,g.h)}function Z(g,h){var u=h>>5;h%=32;for(var f=g.g.length-u,p=[],m=0;m<f;m++)p[m]=0<h?g.i(m+u)>>>h|g.i(m+u+1)<<32-h:g.i(m+u);return new E(p,g.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,E.prototype.add=E.prototype.add,E.prototype.multiply=E.prototype.j,E.prototype.modulo=E.prototype.A,E.prototype.compare=E.prototype.l,E.prototype.toNumber=E.prototype.m,E.prototype.toString=E.prototype.toString,E.prototype.getBits=E.prototype.i,E.fromNumber=T,E.fromString=G,ki=E}).apply(typeof ui<"u"?ui:typeof self<"u"?self:typeof window<"u"?window:{});var ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var s,n=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,e,i){return t==Array.prototype||t==Object.prototype||(t[e]=i.value),t};function r(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof ae=="object"&&ae];for(var e=0;e<t.length;++e){var i=t[e];if(i&&i.Math==Math)return i}throw Error("Cannot find global object")}var a=r(this);function c(t,e){if(e)t:{var i=a;t=t.split(".");for(var o=0;o<t.length-1;o++){var d=t[o];if(!(d in i))break t;i=i[d]}t=t[t.length-1],o=i[t],e=e(o),e!=o&&e!=null&&n(i,t,{configurable:!0,writable:!0,value:e})}}function y(t,e){t instanceof String&&(t+="");var i=0,o=!1,d={next:function(){if(!o&&i<t.length){var v=i++;return{value:e(v,t[v]),done:!1}}return o=!0,{done:!0,value:void 0}}};return d[Symbol.iterator]=function(){return d},d}c("Array.prototype.values",function(t){return t||function(){return y(this,function(e,i){return i})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var E=E||{},_=this||self;function A(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function T(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function G(t,e,i){return t.call.apply(t.bind,arguments)}function k(t,e,i){if(!t)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(d,o),t.apply(e,d)}}return function(){return t.apply(e,arguments)}}function P(t,e,i){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?G:k,P.apply(null,arguments)}function X(t,e){var i=Array.prototype.slice.call(arguments,1);return function(){var o=i.slice();return o.push.apply(o,arguments),t.apply(this,o)}}function b(t,e){function i(){}i.prototype=e.prototype,t.aa=e.prototype,t.prototype=new i,t.prototype.constructor=t,t.Qb=function(o,d,v){for(var w=Array(arguments.length-2),C=2;C<arguments.length;C++)w[C-2]=arguments[C];return e.prototype[d].apply(o,w)}}function M(t){const e=t.length;if(0<e){const i=Array(e);for(let o=0;o<e;o++)i[o]=t[o];return i}return[]}function N(t,e){for(let i=1;i<arguments.length;i++){const o=arguments[i];if(A(o)){const d=t.length||0,v=o.length||0;t.length=d+v;for(let w=0;w<v;w++)t[d+w]=o[w]}else t.push(o)}}class gt{constructor(e,i){this.i=e,this.j=i,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Y(t){return/^[\s\xa0]*$/.test(t)}function K(){var t=_.navigator;return t&&(t=t.userAgent)?t:""}function it(t){return it[" "](t),t}it[" "]=function(){};var Gt=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function Z(t,e,i){for(const o in t)e.call(i,t[o],o,t)}function g(t,e){for(const i in t)e.call(void 0,t[i],i,t)}function h(t){const e={};for(const i in t)e[i]=t[i];return e}const u="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function f(t,e){let i,o;for(let d=1;d<arguments.length;d++){o=arguments[d];for(i in o)t[i]=o[i];for(let v=0;v<u.length;v++)i=u[v],Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}}function p(t){var e=1;t=t.split(":");const i=[];for(;0<e&&t.length;)i.push(t.shift()),e--;return t.length&&i.push(t.join(":")),i}function m(t){_.setTimeout(()=>{throw t},0)}function l(){var t=ge;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Q{constructor(){this.h=this.g=null}add(e,i){const o=Tt.get();o.set(e,i),this.h?this.h.next=o:this.g=o,this.h=o}}var Tt=new gt(()=>new xi,t=>t.reset());class xi{constructor(){this.next=this.g=this.h=null}set(e,i){this.h=e,this.g=i,this.next=null}reset(){this.next=this.g=this.h=null}}let It,St=!1,ge=new Q,en=()=>{const t=_.Promise.resolve(void 0);It=()=>{t.then(Fi)}};var Fi=()=>{for(var t;t=l();){try{t.h.call(t.g)}catch(i){m(i)}var e=Tt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}St=!1};function st(){this.s=this.s,this.C=this.C}st.prototype.s=!1,st.prototype.ma=function(){this.s||(this.s=!0,this.N())},st.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function j(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}j.prototype.h=function(){this.defaultPrevented=!0};var Hi=function(){if(!_.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const i=()=>{};_.addEventListener("test",i,e),_.removeEventListener("test",i,e)}catch{}return t}();function bt(t,e){if(j.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,o=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Gt){t:{try{it(e.nodeName);var d=!0;break t}catch{}d=!1}d||(e=null)}}else i=="mouseover"?e=t.fromElement:i=="mouseout"&&(e=t.toElement);this.relatedTarget=e,o?(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ui[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&bt.aa.h.call(this)}}b(bt,j);var Ui={2:"touch",3:"pen",4:"mouse"};bt.prototype.h=function(){bt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Xt="closure_listenable_"+(1e6*Math.random()|0),Vi=0;function $i(t,e,i,o,d){this.listener=t,this.proxy=null,this.src=e,this.type=i,this.capture=!!o,this.ha=d,this.key=++Vi,this.da=this.fa=!1}function Kt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Wt(t){this.src=t,this.g={},this.h=0}Wt.prototype.add=function(t,e,i,o,d){var v=t.toString();t=this.g[v],t||(t=this.g[v]=[],this.h++);var w=me(t,e,o,d);return-1<w?(e=t[w],i||(e.fa=!1)):(e=new $i(e,this.src,v,!!o,d),e.fa=i,t.push(e)),e};function de(t,e){var i=e.type;if(i in t.g){var o=t.g[i],d=Array.prototype.indexOf.call(o,e,void 0),v;(v=0<=d)&&Array.prototype.splice.call(o,d,1),v&&(Kt(e),t.g[i].length==0&&(delete t.g[i],t.h--))}}function me(t,e,i,o){for(var d=0;d<t.length;++d){var v=t[d];if(!v.da&&v.listener==e&&v.capture==!!i&&v.ha==o)return d}return-1}var ye="closure_lm_"+(1e6*Math.random()|0),ve={};function nn(t,e,i,o,d){if(Array.isArray(e)){for(var v=0;v<e.length;v++)nn(t,e[v],i,o,d);return null}return i=on(i),t&&t[Xt]?t.K(e,i,T(o)?!!o.capture:!1,d):zi(t,e,i,!1,o,d)}function zi(t,e,i,o,d,v){if(!e)throw Error("Invalid event type");var w=T(d)?!!d.capture:!!d,C=_e(t);if(C||(t[ye]=C=new Wt(t)),i=C.add(e,i,o,w,v),i.proxy)return i;if(o=Gi(),i.proxy=o,o.src=t,o.listener=i,t.addEventListener)Hi||(d=w),d===void 0&&(d=!1),t.addEventListener(e.toString(),o,d);else if(t.attachEvent)t.attachEvent(rn(e.toString()),o);else if(t.addListener&&t.removeListener)t.addListener(o);else throw Error("addEventListener and attachEvent are unavailable.");return i}function Gi(){function t(i){return e.call(t.src,t.listener,i)}const e=Xi;return t}function sn(t,e,i,o,d){if(Array.isArray(e))for(var v=0;v<e.length;v++)sn(t,e[v],i,o,d);else o=T(o)?!!o.capture:!!o,i=on(i),t&&t[Xt]?(t=t.i,e=String(e).toString(),e in t.g&&(v=t.g[e],i=me(v,i,o,d),-1<i&&(Kt(v[i]),Array.prototype.splice.call(v,i,1),v.length==0&&(delete t.g[e],t.h--)))):t&&(t=_e(t))&&(e=t.g[e.toString()],t=-1,e&&(t=me(e,i,o,d)),(i=-1<t?e[t]:null)&&Ee(i))}function Ee(t){if(typeof t!="number"&&t&&!t.da){var e=t.src;if(e&&e[Xt])de(e.i,t);else{var i=t.type,o=t.proxy;e.removeEventListener?e.removeEventListener(i,o,t.capture):e.detachEvent?e.detachEvent(rn(i),o):e.addListener&&e.removeListener&&e.removeListener(o),(i=_e(e))?(de(i,t),i.h==0&&(i.src=null,e[ye]=null)):Kt(t)}}}function rn(t){return t in ve?ve[t]:ve[t]="on"+t}function Xi(t,e){if(t.da)t=!0;else{e=new bt(e,this);var i=t.listener,o=t.ha||t.src;t.fa&&Ee(t),t=i.call(o,e)}return t}function _e(t){return t=t[ye],t instanceof Wt?t:null}var we="__closure_events_fn_"+(1e9*Math.random()>>>0);function on(t){return typeof t=="function"?t:(t[we]||(t[we]=function(e){return t.handleEvent(e)}),t[we])}function B(){st.call(this),this.i=new Wt(this),this.M=this,this.F=null}b(B,st),B.prototype[Xt]=!0,B.prototype.removeEventListener=function(t,e,i,o){sn(this,t,e,i,o)};function H(t,e){var i,o=t.F;if(o)for(i=[];o;o=o.F)i.push(o);if(t=t.M,o=e.type||e,typeof e=="string")e=new j(e,t);else if(e instanceof j)e.target=e.target||t;else{var d=e;e=new j(o,t),f(e,d)}if(d=!0,i)for(var v=i.length-1;0<=v;v--){var w=e.g=i[v];d=Jt(w,o,!0,e)&&d}if(w=e.g=t,d=Jt(w,o,!0,e)&&d,d=Jt(w,o,!1,e)&&d,i)for(v=0;v<i.length;v++)w=e.g=i[v],d=Jt(w,o,!1,e)&&d}B.prototype.N=function(){if(B.aa.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var i=t.g[e],o=0;o<i.length;o++)Kt(i[o]);delete t.g[e],t.h--}}this.F=null},B.prototype.K=function(t,e,i,o){return this.i.add(String(t),e,!1,i,o)},B.prototype.L=function(t,e,i,o){return this.i.add(String(t),e,!0,i,o)};function Jt(t,e,i,o){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var d=!0,v=0;v<e.length;++v){var w=e[v];if(w&&!w.da&&w.capture==i){var C=w.listener,L=w.ha||w.src;w.fa&&de(t.i,w),d=C.call(L,o)!==!1&&d}}return d&&!o.defaultPrevented}function hn(t,e,i){if(typeof t=="function")i&&(t=P(t,i));else if(t&&typeof t.handleEvent=="function")t=P(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:_.setTimeout(t,e||0)}function an(t){t.g=hn(()=>{t.g=null,t.i&&(t.i=!1,an(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}class Ki extends st{constructor(e,i){super(),this.m=e,this.l=i,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:an(this)}N(){super.N(),this.g&&(_.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dt(t){st.call(this),this.h=t,this.g={}}b(Dt,st);var ln=[];function un(t){Z(t.g,function(e,i){this.g.hasOwnProperty(i)&&Ee(e)},t),t.g={}}Dt.prototype.N=function(){Dt.aa.N.call(this),un(this)},Dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ae=_.JSON.stringify,Wi=_.JSON.parse,Ji=class{stringify(t){return _.JSON.stringify(t,void 0)}parse(t){return _.JSON.parse(t,void 0)}};function Te(){}Te.prototype.h=null;function cn(t){return t.h||(t.h=t.i())}function qi(){}var Ct={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ie(){j.call(this,"d")}b(Ie,j);function Se(){j.call(this,"c")}b(Se,j);var dt={},fn=null;function be(){return fn=fn||new B}dt.La="serverreachability";function pn(t){j.call(this,dt.La,t)}b(pn,j);function Rt(t){const e=be();H(e,new pn(e))}dt.STAT_EVENT="statevent";function gn(t,e){j.call(this,dt.STAT_EVENT,t),this.stat=e}b(gn,j);function U(t){const e=be();H(e,new gn(e,t))}dt.Ma="timingevent";function dn(t,e){j.call(this,dt.Ma,t),this.size=e}b(dn,j);function Pt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return _.setTimeout(function(){t()},e)}function Ot(){this.g=!0}Ot.prototype.xa=function(){this.g=!1};function Yi(t,e,i,o,d,v){t.info(function(){if(t.g)if(v)for(var w="",C=v.split("&"),L=0;L<C.length;L++){var S=C[L].split("=");if(1<S.length){var x=S[0];S=S[1];var F=x.split("_");w=2<=F.length&&F[1]=="type"?w+(x+"="+S+"&"):w+(x+"=redacted&")}}else w=null;else w=v;return"XMLHTTP REQ ("+o+") [attempt "+d+"]: "+e+`
`+i+`
`+w})}function Zi(t,e,i,o,d,v,w){t.info(function(){return"XMLHTTP RESP ("+o+") [ attempt "+d+"]: "+e+`
`+i+`
`+v+" "+w})}function mt(t,e,i,o){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ts(t,i)+(o?" "+o:"")})}function Qi(t,e){t.info(function(){return"TIMEOUT: "+e})}Ot.prototype.info=function(){};function ts(t,e){if(!t.g)return e;if(!e)return null;try{var i=JSON.parse(e);if(i){for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var o=i[t];if(!(2>o.length)){var d=o[1];if(Array.isArray(d)&&!(1>d.length)){var v=d[0];if(v!="noop"&&v!="stop"&&v!="close")for(var w=1;w<d.length;w++)d[w]=""}}}}return Ae(i)}catch{return e}}var De={NO_ERROR:0,TIMEOUT:8},es={},Ce;function qt(){}b(qt,Te),qt.prototype.g=function(){return new XMLHttpRequest},qt.prototype.i=function(){return{}},Ce=new qt;function rt(t,e,i,o){this.j=t,this.i=e,this.l=i,this.R=o||1,this.U=new Dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mn}function mn(){this.i=null,this.g="",this.h=!1}var yn={},Re={};function Pe(t,e,i){t.L=1,t.v=te(tt(e)),t.m=i,t.P=!0,vn(t,null)}function vn(t,e){t.F=Date.now(),Yt(t),t.A=tt(t.v);var i=t.A,o=t.R;Array.isArray(o)||(o=[String(o)]),Nn(i.i,"t",o),t.C=0,i=t.j.J,t.h=new mn,t.g=qn(t.j,i?e:null,!t.m),0<t.O&&(t.M=new Ki(P(t.Y,t,t.g),t.O)),e=t.U,i=t.g,o=t.ca;var d="readystatechange";Array.isArray(d)||(d&&(ln[0]=d.toString()),d=ln);for(var v=0;v<d.length;v++){var w=nn(i,d[v],o||e.handleEvent,!1,e.h||e);if(!w)break;e.g[w.key]=w}e=t.H?h(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Rt(),Yi(t.i,t.u,t.A,t.l,t.R,t.m)}rt.prototype.ca=function(t){t=t.target;const e=this.M;e&&et(t)==3?e.j():this.Y(t)},rt.prototype.Y=function(t){try{if(t==this.g)t:{const F=et(this.g);var e=this.g.Ba();const Et=this.g.Z();if(!(3>F)&&(F!=3||this.g&&(this.h.h||this.g.oa()||Fn(this.g)))){this.J||F!=4||e==7||(e==8||0>=Et?Rt(3):Rt(2)),Oe(this);var i=this.g.Z();this.X=i;e:if(En(this)){var o=Fn(this.g);t="";var d=o.length,v=et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ut(this),Nt(this);var w="";break e}this.h.i=new _.TextDecoder}for(e=0;e<d;e++)this.h.h=!0,t+=this.h.i.decode(o[e],{stream:!(v&&e==d-1)});o.length=0,this.h.g+=t,this.C=0,w=this.h.g}else w=this.g.oa();if(this.o=i==200,Zi(this.i,this.u,this.A,this.l,this.R,F,i),this.o){if(this.T&&!this.K){e:{if(this.g){var C,L=this.g;if((C=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(C)){var S=C;break e}}S=null}if(i=S)mt(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ne(this,i);else{this.o=!1,this.s=3,U(12),ut(this),Nt(this);break t}}if(this.P){i=!0;let J;for(;!this.J&&this.C<w.length;)if(J=ns(this,w),J==Re){F==4&&(this.s=4,U(14),i=!1),mt(this.i,this.l,null,"[Incomplete Response]");break}else if(J==yn){this.s=4,U(15),mt(this.i,this.l,w,"[Invalid Chunk]"),i=!1;break}else mt(this.i,this.l,J,null),Ne(this,J);if(En(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),F!=4||w.length!=0||this.h.h||(this.s=1,U(16),i=!1),this.o=this.o&&i,!i)mt(this.i,this.l,w,"[Invalid Chunked Response]"),ut(this),Nt(this);else if(0<w.length&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.ba&&!x.M&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+w.length),xe(x),x.M=!0,U(11))}}else mt(this.i,this.l,w,null),Ne(this,w);F==4&&ut(this),this.o&&!this.J&&(F==4?Xn(this.j,this):(this.o=!1,Yt(this)))}else Es(this.g),i==400&&0<w.indexOf("Unknown SID")?(this.s=3,U(12)):(this.s=0,U(13)),ut(this),Nt(this)}}}catch{}finally{}};function En(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function ns(t,e){var i=t.C,o=e.indexOf(`
`,i);return o==-1?Re:(i=Number(e.substring(i,o)),isNaN(i)?yn:(o+=1,o+i>e.length?Re:(e=e.slice(o,o+i),t.C=o+i,e)))}rt.prototype.cancel=function(){this.J=!0,ut(this)};function Yt(t){t.S=Date.now()+t.I,_n(t,t.I)}function _n(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Pt(P(t.ba,t),e)}function Oe(t){t.B&&(_.clearTimeout(t.B),t.B=null)}rt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Qi(this.i,this.A),this.L!=2&&(Rt(),U(17)),ut(this),this.s=2,Nt(this)):_n(this,this.S-t)};function Nt(t){t.j.G==0||t.J||Xn(t.j,t)}function ut(t){Oe(t);var e=t.M;e&&typeof e.ma=="function"&&e.ma(),t.M=null,un(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function Ne(t,e){try{var i=t.j;if(i.G!=0&&(i.g==t||ke(i.h,t))){if(!t.K&&ke(i.h,t)&&i.G==3){try{var o=i.Da.g.parse(e)}catch{o=null}if(Array.isArray(o)&&o.length==3){var d=o;if(d[0]==0){t:if(!i.u){if(i.g)if(i.g.F+3e3<t.F)oe(i),se(i);else break t;Be(i),U(18)}}else i.za=d[1],0<i.za-i.T&&37500>d[2]&&i.F&&i.v==0&&!i.C&&(i.C=Pt(P(i.Za,i),6e3));if(1>=Tn(i.h)&&i.ca){try{i.ca()}catch{}i.ca=void 0}}else ft(i,11)}else if((t.K||i.g==t)&&oe(i),!Y(e))for(d=i.Da.g.parse(e),e=0;e<d.length;e++){let S=d[e];if(i.T=S[0],S=S[1],i.G==2)if(S[0]=="c"){i.K=S[1],i.ia=S[2];const x=S[3];x!=null&&(i.la=x,i.j.info("VER="+i.la));const F=S[4];F!=null&&(i.Aa=F,i.j.info("SVER="+i.Aa));const Et=S[5];Et!=null&&typeof Et=="number"&&0<Et&&(o=1.5*Et,i.L=o,i.j.info("backChannelRequestTimeoutMs_="+o)),o=i;const J=t.g;if(J){const he=J.g?J.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(he){var v=o.h;v.g||he.indexOf("spdy")==-1&&he.indexOf("quic")==-1&&he.indexOf("h2")==-1||(v.j=v.l,v.g=new Set,v.h&&(Le(v,v.h),v.h=null))}if(o.D){const Fe=J.g?J.g.getResponseHeader("X-HTTP-Session-Id"):null;Fe&&(o.ya=Fe,R(o.I,o.D,Fe))}}i.G=3,i.l&&i.l.ua(),i.ba&&(i.R=Date.now()-t.F,i.j.info("Handshake RTT: "+i.R+"ms")),o=i;var w=t;if(o.qa=Jn(o,o.J?o.ia:null,o.W),w.K){In(o.h,w);var C=w,L=o.L;L&&(C.I=L),C.B&&(Oe(C),Yt(C)),o.g=w}else zn(o);0<i.i.length&&re(i)}else S[0]!="stop"&&S[0]!="close"||ft(i,7);else i.G==3&&(S[0]=="stop"||S[0]=="close"?S[0]=="stop"?ft(i,7):je(i):S[0]!="noop"&&i.l&&i.l.ta(S),i.v=0)}}Rt(4)}catch{}}var is=class{constructor(t,e){this.g=t,this.map=e}};function wn(t){this.l=t||10,_.PerformanceNavigationTiming?(t=_.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(_.chrome&&_.chrome.loadTimes&&_.chrome.loadTimes()&&_.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function An(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Tn(t){return t.h?1:t.g?t.g.size:0}function ke(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Le(t,e){t.g?t.g.add(e):t.h=e}function In(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}wn.prototype.cancel=function(){if(this.i=Sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Sn(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const i of t.g.values())e=e.concat(i.D);return e}return M(t.i)}function ss(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(A(t)){for(var e=[],i=t.length,o=0;o<i;o++)e.push(t[o]);return e}e=[],i=0;for(o in t)e[i++]=t[o];return e}function rs(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(A(t)||typeof t=="string"){var e=[];t=t.length;for(var i=0;i<t;i++)e.push(i);return e}e=[],i=0;for(const o in t)e[i++]=o;return e}}}function bn(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(A(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var i=rs(t),o=ss(t),d=o.length,v=0;v<d;v++)e.call(void 0,o[v],i&&i[v],t)}var Dn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function os(t,e){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var o=t[i].indexOf("="),d=null;if(0<=o){var v=t[i].substring(0,o);d=t[i].substring(o+1)}else v=t[i];e(v,d?decodeURIComponent(d.replace(/\+/g," ")):"")}}}function ct(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof ct){this.h=t.h,Zt(this,t.j),this.o=t.o,this.g=t.g,Qt(this,t.s),this.l=t.l;var e=t.i,i=new Mt;i.i=e.i,e.g&&(i.g=new Map(e.g),i.h=e.h),Cn(this,i),this.m=t.m}else t&&(e=String(t).match(Dn))?(this.h=!1,Zt(this,e[1]||"",!0),this.o=kt(e[2]||""),this.g=kt(e[3]||"",!0),Qt(this,e[4]),this.l=kt(e[5]||"",!0),Cn(this,e[6]||"",!0),this.m=kt(e[7]||"")):(this.h=!1,this.i=new Mt(null,this.h))}ct.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Lt(e,Rn,!0),":");var i=this.g;return(i||e=="file")&&(t.push("//"),(e=this.o)&&t.push(Lt(e,Rn,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i=this.s,i!=null&&t.push(":",String(i))),(i=this.l)&&(this.g&&i.charAt(0)!="/"&&t.push("/"),t.push(Lt(i,i.charAt(0)=="/"?ls:as,!0))),(i=this.i.toString())&&t.push("?",i),(i=this.m)&&t.push("#",Lt(i,cs)),t.join("")};function tt(t){return new ct(t)}function Zt(t,e,i){t.j=i?kt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qt(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Cn(t,e,i){e instanceof Mt?(t.i=e,fs(t.i,t.h)):(i||(e=Lt(e,us)),t.i=new Mt(e,t.h))}function R(t,e,i){t.i.set(e,i)}function te(t){return R(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function kt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Lt(t,e,i){return typeof t=="string"?(t=encodeURI(t).replace(e,hs),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hs(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Rn=/[#\/\?@]/g,as=/[#\?:]/g,ls=/[#\?]/g,us=/[#\?@]/g,cs=/#/g;function Mt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ot(t){t.g||(t.g=new Map,t.h=0,t.i&&os(t.i,function(e,i){t.add(decodeURIComponent(e.replace(/\+/g," ")),i)}))}s=Mt.prototype,s.add=function(t,e){ot(this),this.i=null,t=yt(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(e),this.h+=1,this};function Pn(t,e){ot(t),e=yt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function On(t,e){return ot(t),e=yt(t,e),t.g.has(e)}s.forEach=function(t,e){ot(this),this.g.forEach(function(i,o){i.forEach(function(d){t.call(e,d,o,this)},this)},this)},s.na=function(){ot(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),i=[];for(let o=0;o<e.length;o++){const d=t[o];for(let v=0;v<d.length;v++)i.push(e[o])}return i},s.V=function(t){ot(this);let e=[];if(typeof t=="string")On(this,t)&&(e=e.concat(this.g.get(yt(this,t))));else{t=Array.from(this.g.values());for(let i=0;i<t.length;i++)e=e.concat(t[i])}return e},s.set=function(t,e){return ot(this),this.i=null,t=yt(this,t),On(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e};function Nn(t,e,i){Pn(t,e),0<i.length&&(t.i=null,t.g.set(yt(t,e),M(i)),t.h+=i.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var i=0;i<e.length;i++){var o=e[i];const v=encodeURIComponent(String(o)),w=this.V(o);for(o=0;o<w.length;o++){var d=v;w[o]!==""&&(d+="="+encodeURIComponent(String(w[o]))),t.push(d)}}return this.i=t.join("&")};function yt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function fs(t,e){e&&!t.j&&(ot(t),t.i=null,t.g.forEach(function(i,o){var d=o.toLowerCase();o!=d&&(Pn(this,o),Nn(this,d,i))},t)),t.j=e}function ps(t,e){const i=new Ot;if(_.Image){const o=new Image;o.onload=X(ht,i,"TestLoadImage: loaded",!0,e,o),o.onerror=X(ht,i,"TestLoadImage: error",!1,e,o),o.onabort=X(ht,i,"TestLoadImage: abort",!1,e,o),o.ontimeout=X(ht,i,"TestLoadImage: timeout",!1,e,o),_.setTimeout(function(){o.ontimeout&&o.ontimeout()},1e4),o.src=t}else e(!1)}function gs(t,e){const i=new Ot,o=new AbortController,d=setTimeout(()=>{o.abort(),ht(i,"TestPingServer: timeout",!1,e)},1e4);fetch(t,{signal:o.signal}).then(v=>{clearTimeout(d),v.ok?ht(i,"TestPingServer: ok",!0,e):ht(i,"TestPingServer: server error",!1,e)}).catch(()=>{clearTimeout(d),ht(i,"TestPingServer: error",!1,e)})}function ht(t,e,i,o,d){try{d&&(d.onload=null,d.onerror=null,d.onabort=null,d.ontimeout=null),o(i)}catch{}}function ds(){this.g=new Ji}function ms(t,e,i){const o=i||"";try{bn(t,function(d,v){let w=d;T(d)&&(w=Ae(d)),e.push(o+v+"="+encodeURIComponent(w))})}catch(d){throw e.push(o+"type="+encodeURIComponent("_badmap")),d}}function ee(t){this.l=t.Ub||null,this.j=t.eb||!1}b(ee,Te),ee.prototype.g=function(){return new ne(this.l,this.j)},ee.prototype.i=function(t){return function(){return t}}({});function ne(t,e){B.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(ne,B),s=ne.prototype,s.open=function(t,e){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,Bt(this)},s.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||_).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jt(this)),this.readyState=0},s.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Bt(this)),this.g&&(this.readyState=3,Bt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof _.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kn(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function kn(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}s.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?jt(this):Bt(this),this.readyState==3&&kn(this)}},s.Ra=function(t){this.g&&(this.response=this.responseText=t,jt(this))},s.Qa=function(t){this.g&&(this.response=t,jt(this))},s.ga=function(){this.g&&jt(this)};function jt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Bt(t)}s.setRequestHeader=function(t,e){this.u.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var i=e.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=e.next();return t.join(`\r
`)};function Bt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ne.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Ln(t){let e="";return Z(t,function(i,o){e+=o,e+=":",e+=i,e+=`\r
`}),e}function Me(t,e,i){t:{for(o in i){var o=!1;break t}o=!0}o||(i=Ln(i),typeof t=="string"?i!=null&&encodeURIComponent(String(i)):R(t,e,i))}function O(t){B.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(O,B);var ys=/^https?$/i,vs=["POST","PUT"];s=O.prototype,s.Ha=function(t){this.J=t},s.ea=function(t,e,i,o){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ce.g(),this.v=this.o?cn(this.o):cn(Ce),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(v){Mn(this,v);return}if(t=i||"",i=new Map(this.headers),o)if(Object.getPrototypeOf(o)===Object.prototype)for(var d in o)i.set(d,o[d]);else if(typeof o.keys=="function"&&typeof o.get=="function")for(const v of o.keys())i.set(v,o.get(v));else throw Error("Unknown input type for opt_headers: "+String(o));o=Array.from(i.keys()).find(v=>v.toLowerCase()=="content-type"),d=_.FormData&&t instanceof _.FormData,!(0<=Array.prototype.indexOf.call(vs,e,void 0))||o||d||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[v,w]of i)this.g.setRequestHeader(v,w);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xn(this),this.u=!0,this.g.send(t),this.u=!1}catch(v){Mn(this,v)}};function Mn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,jn(t),ie(t)}function jn(t){t.A||(t.A=!0,H(t,"complete"),H(t,"error"))}s.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,H(this,"complete"),H(this,"abort"),ie(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ie(this,!0)),O.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?Bn(this):this.bb())},s.bb=function(){Bn(this)};function Bn(t){if(t.h&&typeof E<"u"&&(!t.v[1]||et(t)!=4||t.Z()!=2)){if(t.u&&et(t)==4)hn(t.Ea,0,t);else if(H(t,"readystatechange"),et(t)==4){t.h=!1;try{const w=t.Z();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var i;if(!(i=e)){var o;if(o=w===0){var d=String(t.D).match(Dn)[1]||null;!d&&_.self&&_.self.location&&(d=_.self.location.protocol.slice(0,-1)),o=!ys.test(d?d.toLowerCase():"")}i=o}if(i)H(t,"complete"),H(t,"success");else{t.m=6;try{var v=2<et(t)?t.g.statusText:""}catch{v=""}t.l=v+" ["+t.Z()+"]",jn(t)}}finally{ie(t)}}}}function ie(t,e){if(t.g){xn(t);const i=t.g,o=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||H(t,"ready");try{i.onreadystatechange=o}catch{}}}function xn(t){t.I&&(_.clearTimeout(t.I),t.I=null)}s.isActive=function(){return!!this.g};function et(t){return t.g?t.g.readyState:0}s.Z=function(){try{return 2<et(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Wi(e)}};function Fn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Es(t){const e={};t=(t.g&&2<=et(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let o=0;o<t.length;o++){if(Y(t[o]))continue;var i=p(t[o]);const d=i[0];if(i=i[1],typeof i!="string")continue;i=i.trim();const v=e[d]||[];e[d]=v,v.push(i)}g(e,function(o){return o.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xt(t,e,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||e}function Hn(t){this.Aa=0,this.i=[],this.j=new Ot,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xt("baseRetryDelayMs",5e3,t),this.cb=xt("retryDelaySeedMs",1e4,t),this.Wa=xt("forwardChannelMaxRetries",2,t),this.wa=xt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new wn(t&&t.concurrentRequestLimit),this.Da=new ds,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=Hn.prototype,s.la=8,s.G=1,s.connect=function(t,e,i,o){U(0),this.W=t,this.H=e||{},i&&o!==void 0&&(this.H.OSID=i,this.H.OAID=o),this.F=this.X,this.I=Jn(this,null,this.W),re(this)};function je(t){if(Un(t),t.G==3){var e=t.U++,i=tt(t.I);if(R(i,"SID",t.K),R(i,"RID",e),R(i,"TYPE","terminate"),Ft(t,i),e=new rt(t,t.j,e),e.L=2,e.v=te(tt(i)),i=!1,_.navigator&&_.navigator.sendBeacon)try{i=_.navigator.sendBeacon(e.v.toString(),"")}catch{}!i&&_.Image&&(new Image().src=e.v,i=!0),i||(e.g=qn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),Yt(e)}Wn(t)}function se(t){t.g&&(xe(t),t.g.cancel(),t.g=null)}function Un(t){se(t),t.u&&(_.clearTimeout(t.u),t.u=null),oe(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&_.clearTimeout(t.s),t.s=null)}function re(t){if(!An(t.h)&&!t.s){t.s=!0;var e=t.Ga;It||en(),St||(It(),St=!0),ge.add(e,t),t.B=0}}function _s(t,e){return Tn(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=Pt(P(t.Ga,t,e),Kn(t,t.B)),t.B++,!0)}s.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const d=new rt(this,this.j,t);let v=this.o;if(this.S&&(v?(v=h(v),f(v,this.S)):v=this.S),this.m!==null||this.O||(d.H=v,v=null),this.P)t:{for(var e=0,i=0;i<this.i.length;i++){e:{var o=this.i[i];if("__data__"in o.map&&(o=o.map.__data__,typeof o=="string")){o=o.length;break e}o=void 0}if(o===void 0)break;if(e+=o,4096<e){e=i;break t}if(e===4096||i===this.i.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=$n(this,d,e),i=tt(this.I),R(i,"RID",t),R(i,"CVER",22),this.D&&R(i,"X-HTTP-Session-Id",this.D),Ft(this,i),v&&(this.O?e="headers="+encodeURIComponent(String(Ln(v)))+"&"+e:this.m&&Me(i,this.m,v)),Le(this.h,d),this.Ua&&R(i,"TYPE","init"),this.P?(R(i,"$req",e),R(i,"SID","null"),d.T=!0,Pe(d,i,null)):Pe(d,i,e),this.G=2}}else this.G==3&&(t?Vn(this,t):this.i.length==0||An(this.h)||Vn(this))};function Vn(t,e){var i;e?i=e.l:i=t.U++;const o=tt(t.I);R(o,"SID",t.K),R(o,"RID",i),R(o,"AID",t.T),Ft(t,o),t.m&&t.o&&Me(o,t.m,t.o),i=new rt(t,t.j,i,t.B+1),t.m===null&&(i.H=t.o),e&&(t.i=e.D.concat(t.i)),e=$n(t,i,1e3),i.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Le(t.h,i),Pe(i,o,e)}function Ft(t,e){t.H&&Z(t.H,function(i,o){R(e,o,i)}),t.l&&bn({},function(i,o){R(e,o,i)})}function $n(t,e,i){i=Math.min(t.i.length,i);var o=t.l?P(t.l.Na,t.l,t):null;t:{var d=t.i;let v=-1;for(;;){const w=["count="+i];v==-1?0<i?(v=d[0].g,w.push("ofs="+v)):v=0:w.push("ofs="+v);let C=!0;for(let L=0;L<i;L++){let S=d[L].g;const x=d[L].map;if(S-=v,0>S)v=Math.max(0,d[L].g-100),C=!1;else try{ms(x,w,"req"+S+"_")}catch{o&&o(x)}}if(C){o=w.join("&");break t}}}return t=t.i.splice(0,i),e.D=t,o}function zn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;It||en(),St||(It(),St=!0),ge.add(e,t),t.v=0}}function Be(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=Pt(P(t.Fa,t),Kn(t,t.v)),t.v++,!0)}s.Fa=function(){if(this.u=null,Gn(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Pt(P(this.ab,this),t)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,U(10),se(this),Gn(this))};function xe(t){t.A!=null&&(_.clearTimeout(t.A),t.A=null)}function Gn(t){t.g=new rt(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var e=tt(t.qa);R(e,"RID","rpc"),R(e,"SID",t.K),R(e,"AID",t.T),R(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&R(e,"TO",t.ja),R(e,"TYPE","xmlhttp"),Ft(t,e),t.m&&t.o&&Me(e,t.m,t.o),t.L&&(t.g.I=t.L);var i=t.g;t=t.ia,i.L=1,i.v=te(tt(e)),i.m=null,i.P=!0,vn(i,t)}s.Za=function(){this.C!=null&&(this.C=null,se(this),Be(this),U(19))};function oe(t){t.C!=null&&(_.clearTimeout(t.C),t.C=null)}function Xn(t,e){var i=null;if(t.g==e){oe(t),xe(t),t.g=null;var o=2}else if(ke(t.h,e))i=e.D,In(t.h,e),o=1;else return;if(t.G!=0){if(e.o)if(o==1){i=e.m?e.m.length:0,e=Date.now()-e.F;var d=t.B;o=be(),H(o,new dn(o,i)),re(t)}else zn(t);else if(d=e.s,d==3||d==0&&0<e.X||!(o==1&&_s(t,e)||o==2&&Be(t)))switch(i&&0<i.length&&(e=t.h,e.i=e.i.concat(i)),d){case 1:ft(t,5);break;case 4:ft(t,10);break;case 3:ft(t,6);break;default:ft(t,2)}}}function Kn(t,e){let i=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(i*=2),i*e}function ft(t,e){if(t.j.info("Error code "+e),e==2){var i=P(t.fb,t),o=t.Xa;const d=!o;o=new ct(o||"//www.google.com/images/cleardot.gif"),_.location&&_.location.protocol=="http"||Zt(o,"https"),te(o),d?ps(o.toString(),i):gs(o.toString(),i)}else U(2);t.G=0,t.l&&t.l.sa(e),Wn(t),Un(t)}s.fb=function(t){t?(this.j.info("Successfully pinged google.com"),U(2)):(this.j.info("Failed to ping google.com"),U(1))};function Wn(t){if(t.G=0,t.ka=[],t.l){const e=Sn(t.h);(e.length!=0||t.i.length!=0)&&(N(t.ka,e),N(t.ka,t.i),t.h.i.length=0,M(t.i),t.i.length=0),t.l.ra()}}function Jn(t,e,i){var o=i instanceof ct?tt(i):new ct(i);if(o.g!="")e&&(o.g=e+"."+o.g),Qt(o,o.s);else{var d=_.location;o=d.protocol,e=e?e+"."+d.hostname:d.hostname,d=+d.port;var v=new ct(null);o&&Zt(v,o),e&&(v.g=e),d&&Qt(v,d),i&&(v.l=i),o=v}return i=t.D,e=t.ya,i&&e&&R(o,i,e),R(o,"VER",t.la),Ft(t,o),o}function qn(t,e,i){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new O(new ee({eb:i})):new O(t.pa),e.Ha(t.J),e}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yn(){}s=Yn.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function W(t,e){B.call(this),this.g=new Hn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!Y(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Y(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vt(this)}b(W,B),W.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},W.prototype.close=function(){je(this.g)},W.prototype.o=function(t){var e=this.g;if(typeof t=="string"){var i={};i.__data__=t,t=i}else this.u&&(i={},i.__data__=Ae(t),t=i);e.i.push(new is(e.Ya++,t)),e.G==3&&re(e)},W.prototype.N=function(){this.g.l=null,delete this.j,je(this.g),delete this.g,W.aa.N.call(this)};function Zn(t){Ie.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const i in e){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}b(Zn,Ie);function Qn(){Se.call(this),this.status=1}b(Qn,Se);function vt(t){this.g=t}b(vt,Yn),vt.prototype.ua=function(){H(this.g,"a")},vt.prototype.ta=function(t){H(this.g,new Zn(t))},vt.prototype.sa=function(t){H(this.g,new Qn)},vt.prototype.ra=function(){H(this.g,"b")},W.prototype.send=W.prototype.o,W.prototype.open=W.prototype.m,W.prototype.close=W.prototype.close,De.NO_ERROR=0,De.TIMEOUT=8,De.HTTP_ERROR=6,es.COMPLETE="complete",qi.EventType=Ct,Ct.OPEN="a",Ct.CLOSE="b",Ct.ERROR="c",Ct.MESSAGE="d",B.prototype.listen=B.prototype.K,O.prototype.listenOnce=O.prototype.L,O.prototype.getLastError=O.prototype.Ka,O.prototype.getLastErrorCode=O.prototype.Ba,O.prototype.getStatus=O.prototype.Z,O.prototype.getResponseJson=O.prototype.Oa,O.prototype.getResponseText=O.prototype.oa,O.prototype.send=O.prototype.ea,O.prototype.setWithCredentials=O.prototype.Ha}).apply(typeof ae<"u"?ae:typeof self<"u"?self:typeof window<"u"?window:{});const ci="@firebase/firestore",fi="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(n){this.uid=n}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(n){return n.uid===this.uid}}V.UNAUTHENTICATED=new V(null),V.GOOGLE_CREDENTIALS=new V("google-credentials-uid"),V.FIRST_PARTY=new V("first-party-uid"),V.MOCK_USER=new V("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new Di("@firebase/firestore");function q(s,...n){if(wt.logLevel<=D.DEBUG){const r=n.map(Ze);wt.debug(`Firestore (${zt}): ${s}`,...r)}}function Li(s,...n){if(wt.logLevel<=D.ERROR){const r=n.map(Ze);wt.error(`Firestore (${zt}): ${s}`,...r)}}function Qr(s,...n){if(wt.logLevel<=D.WARN){const r=n.map(Ze);wt.warn(`Firestore (${zt}): ${s}`,...r)}}function Ze(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(r){return JSON.stringify(r)}(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(s="Unexpected state"){const n=`FIRESTORE (${zt}) INTERNAL ASSERTION FAILED: `+s;throw Li(n),new Error(n)}function Ht(s,n){s||Qe()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class z extends At{constructor(n,r){super(n,r),this.code=n,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.promise=new Promise((n,r)=>{this.resolve=n,this.reject=r})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(n,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${n}`)}}class to{getToken(){return Promise.resolve(null)}invalidateToken(){}start(n,r){n.enqueueRetryable(()=>r(V.UNAUTHENTICATED))}shutdown(){}}class eo{constructor(n){this.token=n,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(n,r){this.changeListener=r,n.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class no{constructor(n){this.t=n,this.currentUser=V.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(n,r){Ht(this.o===void 0);let a=this.i;const c=A=>this.i!==a?(a=this.i,r(A)):Promise.resolve();let y=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),y.resolve(),y=new Ut,n.enqueueRetryable(()=>c(this.currentUser))};const E=()=>{const A=y;n.enqueueRetryable(async()=>{await A.promise,await c(this.currentUser)})},_=A=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=A,this.o&&(this.auth.addAuthTokenListener(this.o),E())};this.t.onInit(A=>_(A)),setTimeout(()=>{if(!this.auth){const A=this.t.getImmediate({optional:!0});A?_(A):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),y.resolve(),y=new Ut)}},0),E()}getToken(){const n=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(a=>this.i!==n?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Ht(typeof a.accessToken=="string"),new Mi(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const n=this.auth&&this.auth.getUid();return Ht(n===null||typeof n=="string"),new V(n)}}class io{constructor(n,r,a){this.l=n,this.h=r,this.P=a,this.type="FirstParty",this.user=V.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const n=this.I();return n&&this.T.set("Authorization",n),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class so{constructor(n,r,a){this.l=n,this.h=r,this.P=a}getToken(){return Promise.resolve(new io(this.l,this.h,this.P))}start(n,r){n.enqueueRetryable(()=>r(V.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pi{constructor(n){this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ro{constructor(n,r){this.A=r,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,jr(n)&&n.settings.appCheckToken&&(this.V=n.settings.appCheckToken)}start(n,r){Ht(this.o===void 0);const a=y=>{y.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${y.error.message}`);const E=y.token!==this.R;return this.R=y.token,q("FirebaseAppCheckTokenProvider",`Received ${E?"new":"existing"} token.`),E?r(y.token):Promise.resolve()};this.o=y=>{n.enqueueRetryable(()=>a(y))};const c=y=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=y,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(y=>c(y)),setTimeout(()=>{if(!this.appCheck){const y=this.A.getImmediate({optional:!0});y?c(y):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new pi(this.V));const n=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(n).then(r=>r?(Ht(typeof r.token=="string"),this.R=r.token,new pi(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function oo(s){return s.name==="IndexedDbTransactionError"}const qe="(default)";class pe{constructor(n,r){this.projectId=n,this.database=r||qe}static empty(){return new pe("","")}get isDefaultDatabase(){return this.database===qe}isEqual(n){return n instanceof pe&&n.projectId===this.projectId&&n.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gi,I;(I=gi||(gi={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ki([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=1048576;function ze(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(n,r,a=1e3,c=1.5,y=6e4){this.Ti=n,this.timerId=r,this.Go=a,this.zo=c,this.jo=y,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(n){this.cancel();const r=Math.floor(this.Ho+this.e_()),a=Math.max(0,Date.now()-this.Yo),c=Math.max(0,r-a);c>0&&q("ExponentialBackoff",`Backing off for ${c} ms (base delay: ${this.Ho} ms, delay with jitter: ${r} ms, last attempt: ${a} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,c,()=>(this.Yo=Date.now(),n())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(n,r,a,c,y){this.asyncQueue=n,this.timerId=r,this.targetTimeMs=a,this.op=c,this.removalCallback=y,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(E=>{})}get promise(){return this.deferred.promise}static createAndSchedule(n,r,a,c,y){const E=Date.now()+a,_=new tn(n,r,E,c,y);return _.start(a),_}start(n){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),n)}skipDelay(){return this.handleDelayElapsed()}cancel(n){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z($.CANCELLED,"Operation cancelled"+(n?": "+n:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(n=>this.deferred.resolve(n))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var di,mi;(mi=di||(di={}))._a="default",mi.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(s){const n={};return s.timeoutSeconds!==void 0&&(n.timeoutSeconds=s.timeoutSeconds),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new Map;function co(s,n,r,a){if(n===!0&&a===!0)throw new z($.INVALID_ARGUMENT,`${s} and ${r} cannot be used together.`)}function fo(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const n=function(a){return a.constructor?a.constructor.name:null}(s);return n?`a custom ${n} object`:"an object"}}return typeof s=="function"?"a function":Qe()}function po(s,n){if("_delegate"in s&&(s=s._delegate),!(s instanceof n)){if(n.name===s.constructor.name)throw new z($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=fo(s);throw new z($.INVALID_ARGUMENT,`Expected type '${n.name}', but it was: ${r}`)}}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="firestore.googleapis.com",vi=!0;class Ei{constructor(n){var r,a;if(n.host===void 0){if(n.ssl!==void 0)throw new z($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ji,this.ssl=vi}else this.host=n.host,this.ssl=(r=n.ssl)!==null&&r!==void 0?r:vi;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,this.localCache=n.localCache,n.cacheSizeBytes===void 0)this.cacheSizeBytes=ho;else{if(n.cacheSizeBytes!==-1&&n.cacheSizeBytes<ao)throw new z($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}co("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:n.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uo((a=n.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(y){if(y.timeoutSeconds!==void 0){if(isNaN(y.timeoutSeconds))throw new z($.INVALID_ARGUMENT,`invalid long polling timeout: ${y.timeoutSeconds} (must not be NaN)`);if(y.timeoutSeconds<5)throw new z($.INVALID_ARGUMENT,`invalid long polling timeout: ${y.timeoutSeconds} (minimum allowed value is 5)`);if(y.timeoutSeconds>30)throw new z($.INVALID_ARGUMENT,`invalid long polling timeout: ${y.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!n.useFetchStreams}isEqual(n){return this.host===n.host&&this.ssl===n.ssl&&this.credentials===n.credentials&&this.cacheSizeBytes===n.cacheSizeBytes&&this.experimentalForceLongPolling===n.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===n.experimentalAutoDetectLongPolling&&function(a,c){return a.timeoutSeconds===c.timeoutSeconds}(this.experimentalLongPollingOptions,n.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===n.ignoreUndefinedProperties&&this.useFetchStreams===n.useFetchStreams}}class Bi{constructor(n,r,a,c){this._authCredentials=n,this._appCheckCredentials=r,this._databaseId=a,this._app=c,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ei({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(n){if(this._settingsFrozen)throw new z($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ei(n),this._emulatorOptions=n.emulatorOptions||{},n.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new to;switch(a.type){case"firstParty":return new so(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new z($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(n.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){const a=yi.get(r);a&&(q("ComponentProvider","Removing Datastore"),yi.delete(r),a.terminate())}(this),Promise.resolve()}}function go(s,n,r,a={}){var c;const y=(s=po(s,Bi))._getSettings(),E=Object.assign(Object.assign({},y),{emulatorOptions:s._getEmulatorOptions()}),_=`${n}:${r}`;y.host!==ji&&y.host!==_&&Qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const A=Object.assign(Object.assign({},y),{host:_,ssl:!1,emulatorOptions:a});if(!ue(A,E)&&(s._setSettings(A),a.mockUserToken)){let T,G;if(typeof a.mockUserToken=="string")T=a.mockUserToken,G=V.MOCK_USER;else{T=ks(a.mockUserToken,(c=s._app)===null||c===void 0?void 0:c.options.projectId);const k=a.mockUserToken.sub||a.mockUserToken.user_id;if(!k)throw new z($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");G=new V(k)}s._authCredentials=new eo(new Mi(T,G))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="AsyncQueue";class wi{constructor(n=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new lo(this,"async_queue_retry"),this.bu=()=>{const a=ze();a&&q(_i,"Visibility state changed to "+a.visibilityState),this.a_.t_()},this.Su=n;const r=ze();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(n){this.enqueue(n)}enqueueAndForgetEvenWhileRestricted(n){this.Du(),this.vu(n)}enterRestrictedMode(n){if(!this.mu){this.mu=!0,this.yu=n||!1;const r=ze();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.bu)}}enqueue(n){if(this.Du(),this.mu)return new Promise(()=>{});const r=new Ut;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(n().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(n){this.enqueueAndForget(()=>(this.Vu.push(n),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(n){if(!oo(n))throw n;q(_i,"Operation failed with retryable error: "+n)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(n){const r=this.Su.then(()=>(this.pu=!0,n().catch(a=>{this.gu=a,this.pu=!1;const c=function(E){let _=E.message||"";return E.stack&&(_=E.stack.includes(E.message)?E.stack:E.message+`
`+E.stack),_}(a);throw Li("INTERNAL UNHANDLED ERROR: ",c),a}).then(a=>(this.pu=!1,a))));return this.Su=r,r}enqueueAfterDelay(n,r,a){this.Du(),this.wu.indexOf(n)>-1&&(r=0);const c=tn.createAndSchedule(this,n,r,a,y=>this.Fu(y));return this.fu.push(c),c}Du(){this.gu&&Qe()}verifyOperationInProgress(){}async Mu(){let n;do n=this.Su,await n;while(n!==this.Su)}xu(n){for(const r of this.fu)if(r.timerId===n)return!0;return!1}Ou(n){return this.Mu().then(()=>{this.fu.sort((r,a)=>r.targetTimeMs-a.targetTimeMs);for(const r of this.fu)if(r.skipDelay(),n!=="all"&&r.timerId===n)break;return this.Mu()})}Nu(n){this.wu.push(n)}Fu(n){const r=this.fu.indexOf(n);this.fu.splice(r,1)}}class mo extends Bi{constructor(n,r,a,c){super(n,r,a,c),this.type="firestore",this._queue=new wi,this._persistenceKey=(c==null?void 0:c.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const n=this._firestoreClient.terminate();this._queue=new wi(n),this._firestoreClient=void 0,await n}}}function yo(s,n){const r=typeof s=="object"?s:Hr(),a=typeof s=="string"?s:qe,c=Mr(r,"firestore").getImmediate({identifier:a});if(!c._initialized){const y=Os("firestore");y&&go(c,...y)}return c}(function(n,r=!0){(function(c){zt=c})(Fr),fe(new Vt("firestore",(a,{instanceIdentifier:c,options:y})=>{const E=a.getProvider("app").getImmediate(),_=new mo(new no(a.getProvider("auth-internal")),new ro(E,a.getProvider("app-check-internal")),function(T,G){if(!Object.prototype.hasOwnProperty.apply(T.options,["projectId"]))throw new z($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pe(T.options.projectId,G)}(E,c),E);return y=Object.assign({useFetchStreams:r},y),_._setSettings(y),_},"PUBLIC").setMultipleInstances(!0)),_t(ci,fi,n),_t(ci,fi,"esm2017")})();console.log("starting...");const vo={apiKey:"AIzaSyAfr5NqBog9pN3SnvHRYAJqnVI8eYUnMEo",authDomain:"my-first-project-8beea.firebaseapp.com",projectId:"my-first-project-8beea",storageBucket:"my-first-project-8beea.firebasestorage.app",messagingSenderId:"1094965830412",appId:"1:1094965830412:web:4c6320d520c53547a55f29"},Eo=Pi(vo);yo(Eo);document.querySelector(".chat-ul");document.querySelector(".chat-form");document.querySelector(".user-form");document.querySelector(".msg");
