(function(e){function t(t){for(var r,a,l=t[0],s=t[1],c=t[2],k=0,h=[];k<l.length;k++)a=l[k],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/HazelWiki/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1135:function(e,t,n){},1191:function(e,t,n){},"15b2":function(e,t,n){"use strict";n("e735")},"15f1":function(e,t,n){"use strict";n("7ef7")},1633:function(e,t,n){"use strict";n("1135")},"18bd":function(e,t,n){"use strict";n("bcf7")},"268f":function(e,t,n){"use strict";n("4322")},"2a72":function(e,t,n){"use strict";n("1191")},"2cb6":function(e,t,n){},"308f":function(e,t,n){e.exports={minScreenWidth:"720",width:"200"}},"37f0":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",["#"===e.element.token?n("markdown-header",{attrs:{element:e.element}}):e._e(),"p"===e.element.token?n("markdown-paragraph",{attrs:{element:e.element}}):e._e(),"\n"===e.element.token?n("markdown-newline",{attrs:{element:e.element}}):e._e(),"TXT"===e.element.token?n("markdown-text",{attrs:{element:e.element}}):e._e(),"**"===e.element.token?n("markdown-bold",{attrs:{element:e.element}}):e._e(),"*"===e.element.token?n("markdown-italic",{attrs:{element:e.element}}):e._e(),"`"===e.element.token?n("markdown-code",{attrs:{element:e.element}}):e._e(),"```"===e.element.token?n("markdown-codeblock",{attrs:{element:e.element}}):e._e(),"[]()"===e.element.token?n("markdown-link",{attrs:{element:e.element}}):e._e(),"![]()"===e.element.token?n("markdown-image",{attrs:{element:e.element}}):e._e(),"-"===e.element.token?n("markdown-list",{attrs:{element:e.element}}):e._e(),">"===e.element.token?n("markdown-quote",{attrs:{element:e.element}}):e._e()],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[1===e.element.content[0]?n("h1",e._l(e.contentElements,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1):e._e(),2===e.element.content[0]?n("h2",e._l(e.contentElements,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1):e._e(),3===e.element.content[0]?n("h3",e._l(e.contentElements,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1):e._e(),4===e.element.content[0]?n("h4",e._l(e.contentElements,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1):e._e(),5===e.element.content[0]?n("h5",e._l(e.contentElements,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1):e._e(),6===e.element.content[0]?n("h6",e._l(e.contentElements,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1):e._e()])},a=[],l=(n("fb6a"),n("d3b7"),{props:{element:{type:Object,required:!0}},components:{"markdown-element":function(){return Promise.resolve().then(n.bind(null,"37f0"))}},computed:{contentElements:function(){return"#"===this.element.token&&this.element.content.length>1?this.element.content.slice(1):[]}}}),s=l,c=(n("7694"),n("2877")),u=Object(c["a"])(s,i,a,!1,null,"331b16f3",null),k=u.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",e._l(e.element.content,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1)},f=[],m={props:{element:{type:Object,required:!0}},components:{"markdown-element":function(){return Promise.resolve().then(n.bind(null,"37f0"))}}},d=m,v=(n("15f1"),Object(c["a"])(d,h,f,!1,null,"1e64b8c4",null)),g=v.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("br",{attrs:{"v-repeat":e.element.content[0]}})},b=[],y={props:{element:{type:Object,required:!0}}},w=y,_=Object(c["a"])(w,p,b,!1,null,null,null),T=_.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(e._s(e.element.content))])},O=[],j={props:{element:{type:Object,required:!0}}},S=j,x=Object(c["a"])(S,E,O,!1,null,null,null),A=x.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("strong",e._l(e.element.content,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1)},$=[],q={props:{element:{type:Object,required:!0}},components:{"markdown-element":function(){return Promise.resolve().then(n.bind(null,"37f0"))}}},L=q,C=(n("82a4"),Object(c["a"])(L,R,$,!1,null,"0d545e6d",null)),P=C.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("em",e._l(e.element.content,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1)},B=[],N={props:{element:{type:Object,required:!0}},components:{"markdown-element":function(){return Promise.resolve().then(n.bind(null,"37f0"))}}},H=N,V=(n("4730"),Object(c["a"])(H,z,B,!1,null,"8db009b0",null)),W=V.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("code",e._l(e.element.content,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1)},I=[],Q={props:{element:{type:Object,required:!0}},components:{"markdown-element":function(){return Promise.resolve().then(n.bind(null,"37f0"))}}},M=Q,D=(n("a296"),Object(c["a"])(M,F,I,!1,null,"e65d4ed8",null)),G=D.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("code-styler",{attrs:{src:e.contentString,language:e.contentLanguage}})},J=[],U=(n("99af"),n("38cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code-styler"},[n("pre",[e._v("\t\t"),n("code-styler-line-number",{attrs:{amount:e.numberOfLines,visible:e.lineNumbers}}),e._v("\n\t\t"),n("code-styler-code",{attrs:{src:e.src,language:e.language}}),e._v("\n\t")],1)])}),K=[],Y=(n("ac1f"),n("1276"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"line-number"},e._l(e.amount,(function(t,r){return n("span",{key:r},[e._v(e._s(t))])})),0)}),Z=[],ee=(n("a9e3"),{props:{amount:{type:Number,required:!0,default:1},visible:{type:Boolean,required:!1,default:!0}}}),te=ee,ne=(n("d3b8"),Object(c["a"])(te,Y,Z,!1,null,"424a964c",null)),re=ne.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("code",[e._v(e._s(e.src))])},ie=[],ae={props:{src:{type:String,required:!0},language:{type:String,required:!1,default:""}}},le=ae,se=(n("2a72"),Object(c["a"])(le,oe,ie,!1,null,"07527280",null)),ce=se.exports,ue={props:{src:{type:String,required:!0},language:{type:String,required:!1,default:""},lineNumbers:{type:Boolean,required:!1,default:!0}},computed:{numberOfLines:function(){return this.src.split("\n").length}},components:{"code-styler-line-number":re,"code-styler-code":ce}},ke=ue,he=(n("cdcb"),Object(c["a"])(ke,U,K,!1,null,"92a309e6",null)),fe=he.exports,me={props:{element:{type:Object,required:!0}},computed:{contentLanguage:function(){return"```"===this.element.token?this.element.content[0]:""},contentString:function(){var e="";if("```"===this.element.token&&this.element.content.length>1)for(var t=1;t<this.element.content.length;t++)e="\n"===this.element.content[t].token?e.concat("\n".repeat(this.element.content[t].content[0])):e.concat(this.element.content[t].content);return e}},components:{"code-styler":fe}},de=me,ve=Object(c["a"])(de,X,J,!1,null,null,null),ge=ve.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:e.link}},e._l(e.contentElements,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1)},be=[],ye={props:{element:{type:Object,required:!0}},components:{"markdown-element":function(){return Promise.resolve().then(n.bind(null,"37f0"))}},computed:{link:function(){return"[]()"===this.element.token&&this.element.content.length>1&&"TXT"===this.element.content[0].token?this.element.content[0].content:""},contentElements:function(){return"[]()"===this.element.token&&this.element.content.length>1?this.element.content.slice(1):[]}}},we=ye,_e=Object(c["a"])(we,pe,be,!1,null,null,null),Te=_e.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("img",{attrs:{src:e.link,alt:e.txt}})},Oe=[],je={props:{element:{type:Object,required:!0}},computed:{link:function(){return"![]()"===this.element.token&&this.element.content.length>1&&"TXT"===this.element.content[0].token?this.element.content[0].content:""},txt:function(){return"![]()"===this.element.token&&this.element.content.length>1&&"TXT"===this.element.content[1].token?this.element.content[1].content:""}}},Se=je,xe=Object(c["a"])(Se,Ee,Oe,!1,null,null,null),Ae=xe.exports,Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.element.content,(function(t,r){return n("li",{key:r},[e._l(t[0],(function(e,t){return n("markdown-element",{key:"li"+r+","+t,attrs:{element:e}})})),null!==t[1]?n("markdown-element",{key:"li"+r+",lu",attrs:{element:t[1]}}):e._e()],2)})),0)},$e=[],qe={props:{element:{type:Object,required:!0}},components:{"markdown-element":function(){return Promise.resolve().then(n.bind(null,"37f0"))}}},Le=qe,Ce=(n("7c27"),Object(c["a"])(Le,Re,$e,!1,null,"c18749bc",null)),Pe=Ce.exports,ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("blockquote",e._l(e.element.content,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1)},Be=[],Ne={props:{element:{type:Object,required:!0}},components:{"markdown-element":function(){return Promise.resolve().then(n.bind(null,"37f0"))}}},He=Ne,Ve=(n("15b2"),Object(c["a"])(He,ze,Be,!1,null,"4c0b04f4",null)),We=Ve.exports,Fe={props:{element:{type:Object,required:!0}},components:{"markdown-header":k,"markdown-paragraph":g,"markdown-newline":T,"markdown-text":A,"markdown-bold":P,"markdown-italic":W,"markdown-code":G,"markdown-codeblock":ge,"markdown-link":Te,"markdown-image":Ae,"markdown-list":Pe,"markdown-quote":We}},Ie=Fe,Qe=Object(c["a"])(Ie,r,o,!1,null,null,null);t["default"]=Qe.exports},3938:function(e,t,n){},"41e6":function(e,t,n){},4322:function(e,t,n){},4730:function(e,t,n){"use strict";n("df7f")},"4ae2":function(e,t,n){},"4fcb":function(e,t,n){"use strict";n("2cb6")},5239:function(e,t,n){"use strict";n("8117")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"EventBus",(function(){return nt}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("navigation-bar",{attrs:{toc:e.HazelWikiLayout}}),n("overlay"),n("top-header"),n("router-view")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"navbar_fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"navbar"},e._l(e.externalLinkArray,(function(t,r){return n("navbar-section",{key:r,attrs:{label:t.label,icon:t.icon}},e._l(t.links,(function(e,t){return n("navbar-link",{key:t,attrs:{label:e.label,icon:e.icon,to:e.to,external:e.external,hidden:e.hidden}})})),1)})),1)])},l=[],s=n("b85c"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar_section"},[n("span",{staticClass:"navbar_section_header"},[""!==e.icon?n("span",{staticClass:"material-icons"},[e._v(e._s(e.icon))]):e._e(),e._v(e._s(e.label)+" ")]),e._t("default")],2)},u=[],k={props:{label:{type:String,required:!0},icon:{type:String,required:!1,default:""}}},h=k,f=(n("18bd"),n("2877")),m=Object(f["a"])(h,c,u,!1,null,"baf55ea8",null),d=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hidden||e.external?!e.hidden&&e.external?n("a",{staticClass:"navbar_link",attrs:{href:e.externalTo,target:"_blank",rel:"noopener noreferrer"},on:{click:e.closeNav}},[n("span",{staticClass:"material-icons"},[e._v(e._s(e.icon))]),e._v(e._s(e.label)+" ")]):e._e():n("router-link",e._b({staticClass:"navbar_link",nativeOn:{click:function(t){return e.closeNav(t)}}},"router-link",e.attrs,!1),[n("span",{staticClass:"material-icons"},[e._v(e._s(e.icon))]),e._v(e._s(e.label)+" ")])},g=[],p=n("d4ec"),b=n("bee2"),y=n("9a10"),w=n.n(y),_=function(){function e(){Object(p["a"])(this,e)}return Object(b["a"])(e,null,[{key:"isLayoutCompact",value:function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return!0;var e=window.innerWidth/window.innerHeight;return e<=1||window.innerWidth<=w.a.minScreenWidth}}]),e}(),T={props:{label:{type:String,required:!0},external:{type:Boolean,required:!1,default:!1},icon:{type:String,required:!1,default:""},hidden:{type:Boolean,required:!1,default:!1}},computed:{externalTo:function(){var e=this.$attrs.to||"/",t=/^https?:\/\//i;return t.test(e)?e:"https://"+e},to:function(){return this.$attrs.to||"/"},attrs:function(){var e=Object.assign({},this.$attrs);return e}},methods:{closeNav:function(){_.isLayoutCompact()?(nt.$emit("navbar-closeVisibile"),nt.$emit("overlay-closeVisibile")):nt.$emit("overlay-closeVisibile")}}},E=T,O=(n("8f49"),Object(f["a"])(E,v,g,!1,null,"0de0acf1",null)),j=O.exports,S={props:{toc:{type:Array,required:!0}},data:function(){return{visible:!1}},created:function(){var e=this;_.isLayoutCompact()||(this.visible=!0),nt.$on("navbar-toggleVisibile",(function(){e.visible=!e.visible,e.visible&&nt.$emit("overlay-openVisibile")})),nt.$on("navbar-closeVisibile",(function(){e.visible=!1,nt.$emit("overlay-closeVisibile")}))},mounted:function(){var e=this;this.$nextTick((function(){window.addEventListener("resize",e.onResize)}))},methods:{onResize:function(){_.isLayoutCompact()?(this.visible=!1,nt.$emit("overlay-closeVisibile")):this.visible=!0}},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},computed:{externalLinkArray:function(){var e,t=this.toc,n=Object(s["a"])(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(r.links){var o,i=Object(s["a"])(r.links);try{for(i.s();!(o=i.n()).done;){var a=o.value;if("ignore"==a.type){var l=/^\//;l.test(a.to)&&(a["external"]=!1),a["external"]=!0}else a["external"]=!1}}catch(c){i.e(c)}finally{i.f()}}}}catch(c){n.e(c)}finally{n.f()}return t}},components:{"navbar-section":d,"navbar-link":j}},x=S,A=(n("268f"),Object(f["a"])(x,a,l,!1,null,"27833d4c",null)),R=A.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("span",{staticClass:"left"},[n("header-button",{attrs:{eventName:"navbar-toggleVisibile",icon:"menu",label:""}})],1),e._m(0)])},q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"right"},[n("a",{staticClass:"github-button",attrs:{href:"https://github.com/thecherno/Hazel","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star thecherno/Hazel on GitHub"}},[e._v(" Star ")])])}],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"header_button",on:{click:function(t){return e.buttonAction(e.eventName)}}},[n("header-label",{attrs:{icon:e.icon,label:e.label}})],1)},C=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"header_label"},[""!==e.icon?n("span",{staticClass:"material-icons"},[e._v(e._s(e.icon))]):e._e(),""!==e.icon&&""!==e.label?n("span",{staticClass:"header_label_spacer"}):e._e(),""!==e.label?n("span",[e._v(e._s(e.label))]):e._e()])},z=[],B={props:{icon:{type:String,required:!1,default:""},label:{type:String,required:!1,default:""}}},N=B,H=(n("4fcb"),Object(f["a"])(N,P,z,!1,null,"77067a52",null)),V=H.exports,W={props:{eventName:{type:String,required:!0},icon:{type:String,required:!1,default:""},label:{type:String,required:!1,default:""}},methods:{buttonAction:function(e){nt.$emit(e)}},components:{"header-label":V}},F=W,I=(n("ee79"),Object(f["a"])(F,L,C,!1,null,"67b486eb",null)),Q=I.exports,M={components:{"header-button":Q}},D=M,G=(n("1633"),Object(f["a"])(D,$,q,!1,null,"6d14dd46",null)),X=G.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showOverlay?n("div",{attrs:{id:"overlay"},on:{click:e.closeNavBar}}):e._e()},U=[],K={data:function(){return{showOverlay:!1}},created:function(){var e=this;nt.$on("overlay-closeVisibile",(function(){e.showOverlay=!1})),nt.$on("overlay-openVisibile",(function(){e.showOverlay=!0}))},methods:{closeNavBar:function(){nt.$emit("navbar-closeVisibile")}}},Y=K,Z=(n("8768"),Object(f["a"])(Y,J,U,!1,null,"cf41b432",null)),ee=Z.exports,te=(n("dc53"),n("4d5c"),n("c1f7")),ne={name:"App",data:function(){return{HazelWikiLayout:te}},components:{overlay:ee,"top-header":X,"navigation-bar":R}},re=ne,oe=Object(f["a"])(re,o,i,!1,null,null,null),ie=oe.exports,ae=(n("ac1f"),n("5319"),n("8c4f")),le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",style:{paddingLeft:e.paddingLeft+"px"}},[n("markdown-interpreter",{attrs:{src:e.src}})],1)},se=[],ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown-body"},e._l(e.elements,(function(e,t){return n("markdown-element",{key:t,attrs:{element:e}})})),1)},ue=[],ke=n("bc3a"),he=n.n(ke),fe=(n("99af"),n("a15b"),n("fb6a"),n("a434"),n("2909")),me=function(){function e(t,n,r){Object(p["a"])(this,e),this.token=t,this.content=n,this.length=r}return Object(b["a"])(e,[{key:"isNull",value:function(){return this.token==e.nullToken().token}},{key:"isError",value:function(){return this.token==e.errorToken().token}},{key:"isValid",value:function(){return!(this.isNull()||this.isError())}},{key:"isEnd",value:function(){return this.token==e.endOfFileToken().token}}],[{key:"endOfFileToken",value:function(){return new e("EOF",null,0)}},{key:"nullToken",value:function(){return new e("NULL",null,0)}},{key:"errorToken",value:function(){return new e("ERROR",null,0)}}]),e}(),de=function(){function e(){Object(p["a"])(this,e),this.scanners=[],this.scannersAmount=0}return Object(b["a"])(e,[{key:"addScanner",value:function(e){this.scanners[this.scannersAmount++]=e}},{key:"scan",value:function(t){if(0==t.length)return me.endOfFileToken();for(var n=0;n<this.scannersAmount;n++){var r=this.scanners[n].scan(t);if(r.isValid())return r}return new me(e.getToken(),t.charAt(0),1)}},{key:"unscan",value:function(t){if(!t||!t.isValid())return"";if(t.token==e.getToken())return t.content;for(var n=0;n<this.scannersAmount;n++){var r=this.scanners[n].unscan(t);if(""!==r)return r}return""}}],[{key:"getToken",value:function(){return"TXT"}}]),e}(),ve=function(){function e(){Object(p["a"])(this,e),this.scanner=new de}return Object(b["a"])(e,[{key:"addScanner",value:function(e){this.scanner.addScanner(e)}},{key:"tokenize",value:function(e){var t=this.scanner.scan(e);return t.isEnd()?t:[t].concat(this.tokenize(e.substr(t.length)))}},{key:"untokenize",value:function(e){var t=this.untokenizeRecursive(e);return t}},{key:"untokenizeRecursive",value:function(e){return e.length<=1?this.scanner.unscan(e[0]):this.scanner.unscan(e[0]).concat(this.untokenizeRecursive(e.slice(1)))}}]),e}(),ge=n("262e"),pe=n("2caf"),be=function(e){Object(ge["a"])(n,e);var t=Object(pe["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.call(this),e.token=n.getToken(),e}return Object(b["a"])(n,[{key:"scan",value:function(e){if(e.charAt(0)==this.token){var t=0;while(e.charAt(++t)==this.token);return new me(this.token,null,t<3?1:3)}return me.nullToken()}},{key:"unscan",value:function(e){if(e.token==this.token){for(var t="",n=e.length;n>0;n--)t=t.concat(this.token);return t}return""}}],[{key:"getToken",value:function(){return"`"}}]),n}(de),ye=(n("38cf"),function(e){Object(ge["a"])(n,e);var t=Object(pe["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.call(this),e.token=n.getToken(),e}return Object(b["a"])(n,[{key:"scan",value:function(e){if(e.charAt(0)==this.token){var t=0;while(e.charAt(++t)==this.token);return new me(this.token,null,t)}return me.nullToken()}},{key:"unscan",value:function(e){return e.token==this.token?this.token.concat(this.token.repeat(e.length-1)):""}}],[{key:"getToken",value:function(){return"\n"}}]),n}(de)),we=function(e){Object(ge["a"])(n,e);var t=Object(pe["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.call(this),e.token=n.getToken(),e.tokenStage=0,e.srcStage=0,e}return Object(b["a"])(n,[{key:"scan",value:function(e){if(e.substr(0,this.token[this.tokenStage].length)==this.token[this.tokenStage]){var t=new me(this.token.join(""),null,this.token[this.tokenStage].length);return++this.tokenStage==this.token.length&&(this.tokenStage=0),t}return me.nullToken()}},{key:"unscan",value:function(e){if(e.token==this.token.join("")){var t=this.token[this.tokenStage];return++this.tokenStage==this.token.length&&(this.tokenStage=0),t}return""}}],[{key:"getToken",value:function(){return["![","](",")"]}}]),n}(de),_e=function(e){Object(ge["a"])(n,e);var t=Object(pe["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.call(this),e.token=n.getToken(),e.tokenStage=0,e.srcStage=0,e}return Object(b["a"])(n,[{key:"scan",value:function(e){if(e.substr(0,this.token[this.tokenStage].length)==this.token[this.tokenStage]){var t=new me(this.token.join(""),null,this.token[this.tokenStage].length);return++this.tokenStage==this.token.length&&(this.tokenStage=0),t}return me.nullToken()}},{key:"unscan",value:function(e){if(e.token==this.token.join("")){var t=this.token[this.tokenStage];return++this.tokenStage==this.token.length&&(this.tokenStage=0),t}return""}}],[{key:"getToken",value:function(){return["[","](",")"]}}]),n}(de),Te=function(e){Object(ge["a"])(n,e);var t=Object(pe["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.call(this),e.token=n.getToken(),e}return Object(b["a"])(n,[{key:"scan",value:function(e){if(e.charAt(0)==this.token){var t=0;while(e.charAt(++t)==this.token);return new me(this.token,null,t)}return me.nullToken()}},{key:"unscan",value:function(e){if(e.token==this.token){for(var t="",n=e.length;n>0;n--)t=t.concat(this.token);return t}return""}}],[{key:"getToken",value:function(){return"#"}}]),n}(de),Ee=function(e){Object(ge["a"])(n,e);var t=Object(pe["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.call(this),e.token=n.getToken(),e}return Object(b["a"])(n,[{key:"scan",value:function(e){return e.charAt(0)==this.token?new me(this.token,0,1):me.nullToken()}},{key:"unscan",value:function(e){return e.token==this.token?this.token:""}}],[{key:"getToken",value:function(){return"-"}}]),n}(de),Oe=function(e){Object(ge["a"])(n,e);var t=Object(pe["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.call(this),e.token=n.getToken(),e}return Object(b["a"])(n,[{key:"scan",value:function(e){if(e.charAt(0)==this.token){var t=0;while(e.charAt(++t)==this.token);return new me(this.token,null,t)}return me.nullToken()}},{key:"unscan",value:function(e){return e.token==this.token?this.token:""}}],[{key:"getToken",value:function(){return">"}}]),n}(de),je=function(e){Object(ge["a"])(n,e);var t=Object(pe["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.call(this),e.token=n.getToken(),e}return Object(b["a"])(n,[{key:"scan",value:function(e){return e.substr(0,this.token.length)==this.token?new me(this.token,null,this.token.length):me.nullToken()}},{key:"unscan",value:function(e){return e.token==this.token?this.token.concat(this.token):""}}],[{key:"getToken",value:function(){return"**"}}]),n}(de),Se=function(e){Object(ge["a"])(n,e);var t=Object(pe["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.call(this),e.token=n.getToken(),e}return Object(b["a"])(n,[{key:"scan",value:function(e){return e.charAt(0)==this.token?new me(this.token,null,this.token.length):me.nullToken()}},{key:"unscan",value:function(e){return e.token==this.token?this.token.concat(this.token):""}}],[{key:"getToken",value:function(){return"*"}}]),n}(de),xe=function(){function e(t,n){Object(p["a"])(this,e),this.token=t,this.content=n}return Object(b["a"])(e,null,[{key:"createParagraphElement",value:function(t){return new e("p",t instanceof Array?t:[t])}},{key:"createTextElement",value:function(t){return new e(de.getToken(),t)}},{key:"createBoldElement",value:function(t){return new e(je.getToken(),[t])}},{key:"createItalicElement",value:function(t){return new e(Se.getToken(),[t])}},{key:"createNewlineElement",value:function(t){return new e(ye.getToken(),[t])}},{key:"createHeaderElement",value:function(t,n){return new e(Te.getToken(),[t].concat(n))}},{key:"createImageElement",value:function(t,n){return new e(we.getToken().join(""),[t].concat(n))}},{key:"createLinkElement",value:function(t,n){return new e(_e.getToken().join(""),[t].concat(n))}},{key:"createListElement",value:function(t){return new e(Ee.getToken(),t)}},{key:"createCodeElement",value:function(t){return new e(be.getToken(),[t])}},{key:"createCodeBlockElement",value:function(t,n){return new e(be.getToken().repeat(3),[t].concat(n))}},{key:"createQuoteElement",value:function(t){return new e(Oe.getToken(),t instanceof Array?t:[t])}}]),e}(),Ae=function(){function e(){Object(p["a"])(this,e),this.lexer=new ve,this.lexer.addScanner(new be),this.lexer.addScanner(new ye),this.lexer.addScanner(new we),this.lexer.addScanner(new _e),this.lexer.addScanner(new Te),this.lexer.addScanner(new Ee),this.lexer.addScanner(new Oe),this.lexer.addScanner(new je),this.lexer.addScanner(new Se),this.codeScanner=new ve,this.codeBlockScanner=new ve,this.codeBlockScanner.addScanner(new ye),this.src="",this.tokenArray=[],this.elementArray=[],this.insideParagraph=!1,this.insideQuote=!1}return Object(b["a"])(e,[{key:"parse",value:function(e){return this.setSrc(e),this.createTokens(),this.cleanupTokens(),this.createElements(),this.getElements()}},{key:"setSrc",value:function(e){this.src=e}},{key:"createTokens",value:function(){this.tokenArray=this.lexer.tokenize(this.src)}},{key:"cleanupTokens",value:function(){this.untokenizeCodeTokens(),this.removeTokens(),this.mergeTokens()}},{key:"untokenizeCodeTokens",value:function(){var e=0;while(e<this.tokenArray.length-1){var t=this.tokenArray[e++];if(t.token==be.getToken()){var n,r=e--;while(++e<this.tokenArray.length-1&&(this.tokenArray[e].token!=t.token||this.tokenArray[e].length<t.length));var o=e++,i=this.lexer.untokenize(this.tokenArray.slice(r,o)),a=[];1==t.length?a=this.codeScanner.tokenize(i).slice(0,-1):3==t.length&&(a=this.codeBlockScanner.tokenize(i).slice(0,-1)),(n=this.tokenArray).splice.apply(n,[r,o-r].concat(Object(fe["a"])(a))),e=r+a.length+1}}}},{key:"removeTokens",value:function(){var e=0;while(e<this.tokenArray.length){var t=this.tokenArray[e++];if(t.token==de.getToken()&&"\r"===t.content)this.tokenArray.splice(--e,1);else if(t.isEnd())this.tokenArray.splice(--e,1);else if(t.token==Te.getToken()){var n=this.tokenArray[e];n.token==de.getToken()&&" "===n.content&&this.tokenArray.splice(e--,1)}else if(t.token==Ee.getToken()){var r=1;while(++r<=e&&this.tokenArray[e-r].token==de.getToken()&&" "===this.tokenArray[e-r].content);if(this.tokenArray[e-r].token===ye.getToken()){var o=this.tokenArray[e-2],i=this.tokenArray[e];o.token==de.getToken()&&" "===o.content?(t.content++,e--,this.tokenArray.splice(--e,1)):i.token==de.getToken()&&" "===i.content&&this.tokenArray.splice(e--,1)}else this.tokenArray[--e]=new me(de.getToken(),t.token,t.token.length)}else if(t.token==Oe.getToken()){var a=this.tokenArray[e-2],l=this.tokenArray[e];a.token===t.token||a.token===ye.getToken()?l.token==de.getToken()&&" "===l.content&&this.tokenArray.splice(e--,1):this.tokenArray[--e]=new me(de.getToken(),t.token,t.token.length)}}}},{key:"mergeTokens",value:function(){var e=0;while(e<this.tokenArray.length-1){var t=this.tokenArray[e++],n=this.tokenArray[e];t.token===de.getToken()&&n.token===t.token?(n.content=t.content.concat(n.content),n.length+=t.length,this.tokenArray.splice(--e,1)):(t.token===ye.getToken()&&n.token===t.token||t.token===Te.getToken()&&n.token===t.token||t.token==Oe.getToken()&&n.token===t.token)&&(n.length+=t.length,this.tokenArray.splice(--e,1))}}},{key:"isPagragraphToken",value:function(e){return this.insideQuote||!this.insideParagraph&&(e.token==de.getToken()||e.token==ye.getToken()||e.token==Se.getToken()||e.token==je.getToken()||e.token==Ee.getToken()||e.token==we.getToken().join("")||e.token==_e.getToken().join("")||e.token==be.getToken()&&e.length<3)}},{key:"isParagraphEnd",value:function(e){return e.token==ye.getToken()&&e.length>=2||e.token==Te.getToken()}},{key:"createRecursiveListItems",value:function(e){var t=e[0][0].content,n=[],r=-1;while(++r<e.length&&e[r][0].content<=t){var o=e[r].slice(1),i=r;while(++i<e.length&&e[i][0].content>t);var a=[];i-r>1&&(a=this.createRecursiveListItems(e.slice(r+1,i))),n.push([o,a]),r=i-1}return n}},{key:"createRecursiveListElements",value:function(e){var t=-1;while(++t<e.length){var n=this.createElementsRecursive(e[t][0]);void 0===n.length&&(n=[n]);var r=null;e[t][1].length>0&&(r=this.createRecursiveListElements(e[t][1])),e[t]=[n,r]}return xe.createListElement(e)}},{key:"createElements",value:function(){this.tokenArray&&this.tokenArray.length>0?this.elementArray=this.createElementsRecursive(this.tokenArray):this.elementArray=[]}},{key:"createElementsRecursive",value:function(e){if(0==e.length)return console.warn("Parser received an empty array!"),console.trace(),[];var t=e[0];if(t.token==Te.getToken()){var n=0;while(++n<e.length-1&&e[n].token!=ye.getToken());this.insideParagraph=!0;var r=xe.createHeaderElement(t.length,this.createElementsRecursive(e.slice(1,n)));return this.insideParagraph=!1,n==e.length-1?r:[r].concat(this.createElementsRecursive(e.slice(n+1)))}if(t.token==be.getToken()&&t.length>=3){var o=0;while(++o<e.length-1&&e[o].token!==t.token);var i=e.slice(1,o),a=null;i[0].token==de.getToken()&&(a=i.splice(0,1)[0].content);while(i[0].token==ye.getToken())i.splice(0,1);while(i[i.length-1].token==ye.getToken())i.splice(-1);this.insideParagraph=!0;var l=xe.createCodeBlockElement(a,this.createElementsRecursive(i));return this.insideParagraph=!1,o==e.length-1?l:[l].concat(this.createElementsRecursive(e.slice(o+1)))}if(t.token==Oe.getToken()){var s=-1;while(++s<e.length&&e[s].token===t.token){while(++s<e.length&&e[s].token!==ye.getToken());if(s<e.length&&e[s].length>1){++s;break}}var c=e.slice(0,s),u=-1;while(++u<c.length)c[u].token===t.token&&(c[u].length>1?c[u].length--:(c.splice(u--,1),u>=0&&u<c.length-1&&c[u].token===ye.getToken()&&c[u+1].token===ye.getToken()&&(c[u].length+=c[u+1].length,c.splice(u+1,1))));this.insideQuote=!0;var k=xe.createQuoteElement(this.createElementsRecursive(c));return this.insideQuote=!1,s>=e.length-1?k:[k].concat(this.createElementsRecursive(e.slice(s)))}if(this.isPagragraphToken(t)){var h=-1;while(++h<e.length-1&&e[h].token==ye.getToken());var f=h;while(++f<e.length-1&&!this.isParagraphEnd(e[f]));var m=this.insideQuote;this.insideQuote=!1,this.insideParagraph=!0;var d=xe.createParagraphElement(this.createElementsRecursive(e.slice(h,f)));return this.insideParagraph=!1,this.insideQuote=m,f>=e.length-1?d:[d].concat(this.createElementsRecursive(e.slice(f+1)))}if(t.token==ye.getToken()){var v=xe.createNewlineElement(t.length);return 1==e.length?v:[v].concat(this.createElementsRecursive(e.slice(1)))}if(t.token==de.getToken()){var g=xe.createTextElement(t.content);return 1==e.length?g:[g].concat(this.createElementsRecursive(e.slice(1)))}if(t.token==je.getToken()){var p=0;while(++p<e.length&&e[p].token!=t.token);var b=xe.createBoldElement(this.createElementsRecursive(e.slice(1,p)));return p==e.length-1?b:[b].concat(this.createElementsRecursive(e.slice(p+1)))}if(t.token==Se.getToken()){var y=0;while(++y<e.length&&e[y].token!=t.token);var w=xe.createItalicElement(this.createElementsRecursive(e.slice(1,y)));return y==e.length-1?w:[w].concat(this.createElementsRecursive(e.slice(y+1)))}if(t.token==we.getToken().join("")){var _,T=0;while(++T<e.length&&e[T].token!=t.token);_=T>1?this.createElementsRecursive(e.slice(1,T)):this.createElementsRecursive([new me(de.getToken(),"")]);var E,O=T;while(++O<e.length&&e[O].token!=t.token);E=O-T>1?this.createElementsRecursive(e.slice(T+1,O)):this.createElementsRecursive([new me(de.getToken(),"")]);var j=xe.createImageElement(E,_);return O==e.length-1?j:[j].concat(this.createElementsRecursive(e.slice(O+1)))}if(t.token==_e.getToken().join("")){var S,x=0;while(++x<e.length&&e[x].token!=t.token);S=x>1?this.createElementsRecursive(e.slice(1,x)):this.createElementsRecursive([new me(de.getToken(),"")]);var A,R=x;while(++R<e.length&&e[R].token!=t.token);A=R-x>1?this.createElementsRecursive(e.slice(x+1,R)):this.createElementsRecursive([new me(de.getToken(),"")]);var $=xe.createLinkElement(A,S);return R==e.length-1?$:[$].concat(this.createElementsRecursive(e.slice(R+1)))}if(t.token==Ee.getToken()){var q=[],L=0;while(L<e.length&&e[L].token==Ee.getToken()){var C=L;while(++C<e.length&&e[C].token!==ye.getToken());q.push(e.slice(L,C)),L=C+1}q=this.createRecursiveListItems(q);var P=this.createRecursiveListElements(q);return C==e.length?P:[P].concat(this.createElementsRecursive(e.slice(C+1)))}if(t.token==be.getToken()){var z=0;while(++z<e.length&&e[z].token!=t.token);var B=xe.createCodeElement(this.createElementsRecursive(e.slice(1,z)));return z==e.length-1?B:[B].concat(this.createElementsRecursive(e.slice(z+1)))}return console.warn("unknown token: ".concat(t.token)),e.length>1?this.createElementsRecursive(e.slice(1)):[]}},{key:"getElements",value:function(){return this.elementArray}},{key:"logTokens",value:function(){console.log(this.tokenArray)}},{key:"logElements",value:function(){console.log(this.elementArray)}}]),e}(),Re=n("37f0"),$e=new Ae,qe={props:{src:{type:String,required:!0}},data:function(){return{text:""}},mounted:function(){var e=this;he()({url:this.src,method:"GET"}).then((function(t){e.text=t.data})).catch((function(e){console.log(e)}))},watch:{src:function(){var e=this;he()({url:this.src,method:"GET"}).then((function(t){e.text=t.data})).catch((function(e){console.log(e)}))}},computed:{elements:function(){return $e.parse(this.text)}},components:{"markdown-element":Re["default"]}},Le=qe,Ce=(n("cd17"),Object(f["a"])(Le,ce,ue,!1,null,null,null)),Pe=Ce.exports,ze=n("308f"),Be=n.n(ze),Ne={props:{src:{type:String,required:!0}},data:function(){return{paddingLeft:0}},components:{"markdown-interpreter":Pe},created:function(){_.isLayoutCompact()||(this.paddingLeft=Be.a.width)},mounted:function(){var e=this;this.$nextTick((function(){window.addEventListener("resize",e.onResize)}))},methods:{onResize:function(){_.isLayoutCompact()?this.paddingLeft=0:this.paddingLeft=Be.a.width}},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},He=Ne,Ve=(n("eaef"),Object(f["a"])(He,le,se,!1,null,"59fb93a2",null)),We=Ve.exports,Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("markdown-page",{attrs:{src:"./content/Wiki Dev/Testfile.md"}})],1)},Ie=[],Qe={components:{"markdown-page":Pe}},Me=Qe,De=Object(f["a"])(Me,Fe,Ie,!1,null,null,null),Ge=De.exports,Xe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Je=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",[n("h3",[e._v("404: Page Not Found "),n("span",{staticClass:"material-icons"},[e._v("mood_bad")])])])])}],Ue=(n("5239"),{}),Ke=Object(f["a"])(Ue,Xe,Je,!1,null,"1f07239c",null),Ye=Ke.exports,Ze=n("c1f7");function et(){function e(e){var t=/^[^\w]*/,n=/\.{2}\//g,r=/\.{1}\//g,o=e.replace(t,"").replace(n,"").replace(r,"");return"./content/".concat(o)}function t(t){return"markdown"==t.type||"external-link"==t.type?{path:t.to,component:We,props:{src:e(t.src)}}:("ignore"==t.type||console.warn("unknown route type: ".concat(t.type)),null)}for(var n=[{path:"*",component:Ye},{path:"/testpage",component:Ge}],r=0;r<Ze.length;r++){var o=Ze[r].links;if(o)for(var i=0;i<o.length;i++){var a=t(o[i]);a&&n.push(a)}}return n}r["a"].use(ae["a"]);var tt=new ae["a"]({mode:"history",base:"/HazelWiki/",routes:et()}),nt=new r["a"];r["a"].config.productionTip=!1,new r["a"]({router:tt,render:function(e){return e(ie)}}).$mount("#app")},"628e":function(e,t,n){},"6c6c":function(e,t,n){},7051:function(e,t,n){},7694:function(e,t,n){"use strict";n("4ae2")},"7b67":function(e,t,n){},"7c27":function(e,t,n){"use strict";n("7b67")},"7ef7":function(e,t,n){},8117:function(e,t,n){},"82a4":function(e,t,n){"use strict";n("7051")},8768:function(e,t,n){"use strict";n("a3a5")},"8f49":function(e,t,n){"use strict";n("9752")},9752:function(e,t,n){},"9a10":function(e,t,n){e.exports={minScreenWidth:"720"}},a296:function(e,t,n){"use strict";n("3938")},a3a5:function(e,t,n){},bcf7:function(e,t,n){},c1f7:function(e){e.exports=JSON.parse('[{"label":"Navigation bar"},{"label":"Basics","icon":"info","links":[{"to":"/","label":"Home","type":"markdown","src":"Basics/Home.md"},{"to":"/Features","label":"Features","type":"markdown","src":"Basics/FutureFeatures.md"},{"to":"/GettingStarted","label":"Getting started","type":"markdown","src":"Basics/GettingStarted.md"},{"to":"/SystemRequirements","label":"System requirements","type":"markdown","src":"Basics/SystemRequirements.md"},{"to":"/BuildingHazel","label":"Building Hazel","type":"markdown","src":"Basics/BuildingHazel.md"},{"to":"/FirstProject","label":"First project","type":"markdown","src":"Basics/FirstProject.md"}]},{"label":"Engine","icon":"menu_book","links":[{"to":"/Benchmarking","label":"Benchmarking","type":"markdown","src":"Engine/Benchmarking.md"},{"to":"/LayerSystem","label":"Layer system","type":"markdown","src":"Engine/LayerSystem.md"},{"to":"/EventSystem","label":"Event system","type":"markdown","src":"Engine/EventSystem.md"},{"to":"/RenderingAPI","label":"Rendering API","type":"markdown","src":"Engine/RenderingAPI.md"}]},{"label":"Useful Links","links":[{"to":"https://thecherno.com","label":"TheCherno","icon":"info","type":"ignore"},{"to":"https://thecherno.com/engine","label":"Hazel","icon":"code","type":"ignore"},{"to":"https://thecherno.com/discord","label":"Discord","icon":"question_answer","type":"ignore"}]},{"label":"Wiki Dev","icon":"code","links":[{"to":"/ContributingMarkdown","label":"Contributing markdown","type":"markdown","src":"Wiki Dev/ContributingMarkdown.md"},{"to":"/testpage","label":"Testpage markdown","type":"markdown","src":"Wiki Dev/Testfile.md","hidden":true}]}]')},cd17:function(e,t,n){"use strict";n("d4ae")},cdcb:function(e,t,n){"use strict";n("e9e7")},d3b8:function(e,t,n){"use strict";n("628e")},d4ae:function(e,t,n){e.exports={minScreenWidth:"720"}},df7f:function(e,t,n){},e735:function(e,t,n){},e9e7:function(e,t,n){},eaef:function(e,t,n){"use strict";n("6c6c")},ee79:function(e,t,n){"use strict";n("41e6")}});
//# sourceMappingURL=app.fed15b80.js.map