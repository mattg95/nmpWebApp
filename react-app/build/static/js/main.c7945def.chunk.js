(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{102:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n(20),i=n.n(a),s=n(23),o=n(3),l=n(18),d=n(51),j=n.n(d),b=n(52),m=n.n(b),u=n(112),p=n(113),h=n(114),O=n(33),f=function(e){var t=e.passDataUpstream,n=e.isMobile,a=Object(r.useRef)(null),i=Object(r.useRef)(null),s=Object(r.useState)(!0),o=Object(l.a)(s,2),d=o[0],j=o[1],b=O.makePopup("https://z8ivgb8lhnl.typeform.com/to/YbkRDwtc",{mode:"popup",openValue:50,autoClose:3,onSubmit:function(e){var n=e.response_id;t({responseId:n})}});return Object(r.useEffect)((function(){!n&&O.makeWidget(a.current,"https://z8ivgb8lhnl.typeform.com/to/YbkRDwtc",{hideScrollbars:!0,opacity:0,onSubmit:function(e){var n=e.response_id;t({responseId:n}),setTimeout((function(){j(!1)}),3e3)}})}),[a,t,n]),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"call-to-action text-center",children:[Object(c.jsxs)("button",{ref:i,onClick:function(){n?b.open():a.current.scrollIntoView({behavior:"smooth",block:"end"})},className:"btn btn-primary btn-lg main-cta",children:["Fill out the survey to email your MP"," "]}),Object(c.jsxs)("p",{className:"explanation",children:[Object(c.jsx)("strong",{children:"We will draft an email"})," based on your survey responses,"," ",Object(c.jsx)("strong",{children:"written to have the maximum impact on your MP."})," With your help we can safeguard the support so many need."]})]}),Object(c.jsx)("div",{ref:a,className:"typeform-widget ".concat(d?"":"closed"),id:"typeform"})]})},x=n(53),v=n(54),y=(n(98),function(e){var t=e.emailBody,n=e.passDataUpstream;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"secondary-header",children:"3.Edit your email"}),Object(c.jsx)(x.a,{viewContainerClassName:"emailBox",type:"textarea",inputProps:{placeholder:"your email will appear here",rows:10},saveButtonContent:"Apply",cancelButtonContent:Object(c.jsx)("strong",{children:"Cancel"}),editButtonContent:"Edit Your Email",value:t,onSave:function(e){n({generatedEmail:e})}}),Object(c.jsx)(v.a,{trigger:function(e){return Object(c.jsx)("button",{className:"btn btn-outline-primary copy-button",children:"Copy"})},closeOnDocumentClick:!0,onOpen:function(){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(e),n({copied:!0})},className:"copy-popup",children:Object(c.jsx)("span",{children:" Copied to clipboard "})})]})})}),g=n(34),w=n.n(g),E=n(55),N=n(26),D=function(e){var t=e.passDataUpstream,n=e.emailBoxRef,a=e.emailVisible,i=Object(r.useState)({dropDownOpen:!1,postcodeError:""}),s=Object(l.a)(i,2),d=s[0],j=s[1],b=d.dropDownOpen,m=d.postcodeError,u=Object(r.useRef)();Object(r.useEffect)((function(){var e=u.current;e&&e.scrollIntoView({behavior:"smooth",block:"end"}),window.scrollBy(0,100)}),[b]),Object(r.useEffect)((function(){var e=n.current;e&&e.scrollIntoView({behavior:"smooth",block:"start"})}),[a]);var p=function(){var e=Object(E.a)(w.a.mark((function e(n){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/postcode/".concat(n),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.error?j(Object(o.a)(Object(o.a)({},d),{},{postcodeError:e.error})):(t({mpData:e}),j(Object(o.a)(Object(o.a)({},d),{},{postcodeError:""})))}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.postcode;/([A-Z][A-HJ-Y]?[0-9][A-Z0-9]? ?[0-9][A-Z]{2}|GIR ?0A{2})$/.test(t.toUpperCase())?p(t):t.length>5&&j(Object(o.a)(Object(o.a)({},d),{},{postcodeError:"Invalid postcode"}))};return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"button-container",id:"postcodeDropdown",children:[Object(c.jsx)("button",{className:"btn btn-lg cta btn-outline-primary left-button",type:"submit",onClick:function(e){e.preventDefault(),j(Object(o.a)(Object(o.a)({},d),{},{dropDownOpen:!0}))},children:"Don't see your MP?"}),Object(c.jsx)("button",{className:"btn btn-lg cta btn-primary right-button ",type:"submit",onClick:function(e){e.preventDefault(),j(Object(o.a)(Object(o.a)({},d),{},{dropDownOpen:!1})),t({emailVisible:!0})},children:"Yes, continue with this MP"})]}),b&&Object(c.jsx)(N.c,{initialValues:{postcode:""},validate:h,onSubmit:h,children:function(e){return Object(c.jsxs)(N.b,{className:"get-MP-form",id:"postcodeDropdown",ref:u,children:[Object(c.jsx)("label",{htmlFor:"postcode",children:"Postcode:"}),Object(c.jsx)(N.a,{type:"text",name:"postcode"}),Object(c.jsx)("div",{className:"error postcode-error",children:m||""})]})}})]})},C=function(e){var t=e.mpData,n=t.constituency,r=t.full_name,a=t.party,i=t.name,s=t.error,o=e.mpEmailAddress;return Object(c.jsxs)("div",{className:"displayMP",id:"displayMP",children:[Object(c.jsx)("h2",{className:"secondary-header",children:"2. Find Your MP"}),Object(c.jsxs)("div",{className:"mpCard text-center",children:[Object(c.jsx)("div",{className:"error",children:s}),Object(c.jsx)("div",{children:n}),Object(c.jsx)("div",{children:i}),Object(c.jsx)("div",{children:r}),Object(c.jsx)("div",{children:a}),Object(c.jsx)("div",{className:"mpEmailAddress",children:o})]})]})},k=function(e){var t=e.subject,n=e.body,r=e.mpEmailAddress;return Object(c.jsxs)("div",{className:"send-email",children:[Object(c.jsx)("h2",{className:"secondary-header",children:"4. Send your email"}),Object(c.jsx)("p",{className:"explanation",children:"This will open your email service in a different window"}),Object(c.jsx)("a",{href:"mailto:"+r+"?Subject="+encodeURIComponent(t)+"&Body="+encodeURIComponent(n),className:"btn btn-primary btn-lg cta send-button",target:"_blank",rel:"noreferrer",children:"SEND EMAIL"})]})},A=function(){return Object(c.jsxs)("div",{className:"intro-content",children:[Object(c.jsx)("h1",{className:"title",children:"The 0.7% Campaign"}),Object(c.jsxs)("p",{className:"intro-para",children:["The 2019 Conservative Manifesto declared Britain would"," ",Object(c.jsx)("strong",{children:'"proudly maintain our commitment to spend 0.7 per cent of GNI on development"'}),". But just one year later, the government intends to cut foreign aid indefinitely.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{})," At a time of unprecedented international crisis, with millions at risk of extreme poverty,"," ",Object(c.jsx)("strong",{children:"Britain must show leadership - not break its commitments."})]})]})};n(102);n(103).config({path:"../.env"});var B=m()(),R=function(){var e=Object(r.useState)({width:window.innerWidth,responseId:"",mpData:{error:"Could not find MP",name:"",full_name:""},generatedEmailBody:"Your email will appear here",emailSubject:"",positiveTypeFormResponseReturned:!1,mpEmailAddress:"",greeting:"",emailWithGreeting:"",emailVisible:!1}),t=Object(l.a)(e,2),n=t[0],a=t[1],i=n.responseId,d=n.mpData,b=n.generatedEmailBody,m=n.emailSubject,O=n.mpEmailAddress,x=n.greeting,v=n.emailWithGreeting,g=n.positiveTypeFormResponseReturned,w=n.width,E=n.emailVisible,N=Object(r.useRef)(null),R=Object(r.useRef)(null),I=function(e){var t=e.name,n=e.full_name;return(n||t).toLowerCase().replace(" ",".").replace("'","")+".mp@parliament.uk"};Object(r.useEffect)((function(){B.on("typeform-incoming",(function(e){var t=e.formToken,c=e.generatedEmail;t===i&&a(Object(o.a)(Object(o.a)({},n),{},{generatedEmailBody:c.body,emailSubject:c.subject,mpData:c.mpData,greeting:c.greeting,mpEmailAddress:I(c.mpData),emailWithGreeting:c.greeting+c.body,positiveTypeFormResponseReturned:c.supportsAid}))}))}),[i]),Object(r.useEffect)((function(){if(d){var e=d.name,t=d.full_name,c=t||e;c&&a(Object(o.a)(Object(o.a)({},n),{},{mpEmailAddress:I(d),greeting:"Dear ".concat(c,",\n")}))}}),[d.name,d.full_name]),Object(r.useEffect)((function(){a(Object(o.a)(Object(o.a)({},n),{},{emailWithGreeting:x+b}))}),[b,x]);var S=function(){a(Object(o.a)(Object(o.a)({},n),{},{width:window.innerWidth}))};Object(r.useEffect)((function(){return window.addEventListener("resize",S),function(){window.removeEventListener("resize",S)}}),[]);var M=w&&w<=768;Object(r.useEffect)((function(){setTimeout((function(){var e=N.current;e&&M&&g&&e.scrollIntoView({behavior:"smooth",block:"start"})}),3e3)}),[N,g]);var T=function(e){Object.keys(e).forEach((function(t){a(Object(o.a)(Object(o.a)({},n),{},Object(s.a)({},t,e[t])))}))};return Object(c.jsx)(j.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(p.a,{children:Object(c.jsx)(h.a,{children:Object(c.jsx)(A,{})})}),Object(c.jsx)(p.a,{children:Object(c.jsx)(h.a,{children:Object(c.jsx)("div",{className:"typeform",children:Object(c.jsx)(f,{passDataUpstream:T,isMobile:M})})})}),g&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p.a,{children:Object(c.jsx)(h.a,{children:Object(c.jsx)("div",{ref:N,children:Object(c.jsx)(C,{mpData:d,mpEmailAddress:O})})})}),Object(c.jsx)(p.a,{children:Object(c.jsx)(h.a,{children:Object(c.jsx)("div",{id:"mpForm",className:"",children:Object(c.jsx)(D,{passDataUpstream:T,emailBoxRef:R,emailVisible:E})})})}),E&&Object(c.jsxs)("div",{children:[Object(c.jsx)(p.a,{children:Object(c.jsx)(h.a,{children:Object(c.jsx)("div",{ref:R,children:Object(c.jsx)(y,{passDataUpstream:T,emailBody:v,subject:m})})})}),Object(c.jsx)(p.a,{children:Object(c.jsx)(h.a,{children:Object(c.jsx)("div",{className:"",children:Object(c.jsx)(k,{mpEmailAddress:O,body:v,subject:m})})})})]})]})]})})})},I=n(58),S=n.n(I),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};n(109);S.a.initialize({gtmId:"GTM-MWBT83W"}),i.a.render(Object(c.jsx)(R,{}),document.getElementById("root")),M()}},[[110,1,2]]]);
//# sourceMappingURL=main.c7945def.chunk.js.map