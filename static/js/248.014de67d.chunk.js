"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[248],{701:function(n,e,t){t.r(e),t.d(e,{default:function(){return rn}});var r,i,a,s,o,l,c,d,p,x,u,h,f,m,g,b,j,Z,w,y,v,k=t(791),P=t(168),C=t(444),A=C.ZP.section(r||(r=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10px auto;\n  padding-top: 10px;\n"]))),F=t(184),_=function(n){var e=n.children;return(0,F.jsx)(A,{children:e})},z=t(885),L=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&t[n];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e},S=t(409),N=C.ZP.form(i||(i=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),B=C.ZP.div(a||(a=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),M=C.ZP.input(s||(s=(0,P.Z)(["\n  width: 300px;\n  height: 30px;\n  margin: 5px;\n  border-radius: 4px;\n  border: none;\n  background-color: white;\n"]))),U=C.ZP.button(o||(o=(0,P.Z)(["\n  text-decoration: none;\n  display: inline-block;\n  width: 220px;\n  height: 45px;\n  line-height: 45px;\n  border-radius: 45px;\n  margin: 20px 10px;\n  font-family: Montserrat, sans-serif;\n  font-size: 11px;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 3px;\n  font-weight: 600;\n  color: rgb(82, 79, 78);\n  background: white;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 15px;\n  transition: all 0.3s ease 0s;\n  border: none;\n  cursor: pointer;\n"]))),q=t(215),D=function(){var n=(0,k.useState)(""),e=(0,z.Z)(n,2),t=e[0],r=e[1],i=(0,k.useState)(""),a=(0,z.Z)(i,2),s=a[0],o=a[1],l=(0,q.wW)().data,c=(0,q.AA)(),d=(0,z.Z)(c,1)[0],p=l?l.filter((function(n){return n.name?n.name.toLowerCase().includes(t.toLowerCase()):l})):l,x=L(),u=L(),h=function(n){var e=n.currentTarget,t=e.name,i=e.value;switch(t){case"name":r(i);break;case"number":o(i)}};return(0,F.jsxs)(N,{onSubmit:function(n){if(n.preventDefault(),p.length>0)return S.Am.warn("\ud83d\udca9 There is already a contact with that name. Correct the entered name!");d({name:t,phoneNumber:s}),S.Am.success("\ud83d\udcaa Contact (".concat(t,") added successfully !")),r(""),o("")},children:[(0,F.jsx)("h2",{children:"Phone Book"}),(0,F.jsxs)(B,{children:[(0,F.jsx)("label",{htmlFor:x,children:"Name"}),(0,F.jsx)(M,{onChange:h,value:t,type:"text",name:"name",id:x,placeholder:"Aleksandr",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,F.jsxs)(B,{children:[(0,F.jsx)("label",{htmlFor:u,children:"Number"}),(0,F.jsx)(M,{onChange:h,value:s,type:"tel",name:"number",id:u,placeholder:"+380956888227",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,F.jsx)(U,{type:"submit",children:"Add contact"})]})},T=t(48),W=C.ZP.div(l||(l=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: flex-start;\n  margin: 10px auto;\n  padding: 10px;\n  max-width: 320px;\n"]))),I=C.ZP.input(c||(c=(0,P.Z)(["\n  width: 300px;\n  height: 30px;\n  margin: 5px;\n  border-radius: 4px;\n  border: none;\n  background-color: white;\n"]))),J=function(){var n=(0,T.I0)(),e=(0,T.v9)((function(n){return n.phoneBookFilter.filter})),t=L();return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(W,{children:[(0,F.jsx)("label",{htmlFor:t,children:"Find contacts by name"}),(0,F.jsx)(I,{onChange:function(e){return n((0,q.xO)(e.target.value.toLowerCase().trim()))},value:e,type:"text",id:t,placeholder:"Search contact"})]})})},O=t(243),R=function(){return(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(O.NB,{visible:!0,height:"30",width:"30",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})},V=(C.ZP.div(d||(d=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10px auto;\n  padding: 10px;\n"]))),C.ZP.ul(p||(p=(0,P.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style: none;\n"]))),C.ZP.li(x||(x=(0,P.Z)(["\n  display: flex;\n  justify-content: space-between;\n  min-width: 100px;\n  align-items: center;\n  width: 100%;\n"])))),$=C.ZP.span(u||(u=(0,P.Z)(["\n  font-size: 20px;\n"]))),E=C.ZP.button(h||(h=(0,P.Z)(["\n  text-decoration: none;\n  display: inline-block;\n  width: 100px;\n  height: 45px;\n  line-height: 45px;\n  border-radius: 45px;\n  margin: 10px 20px;\n  font-family: Montserrat, sans-serif;\n  font-size: 11px;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 3px;\n  font-weight: 600;\n  color: rgb(82, 79, 78);\n  background: rgb(100%, 100%, 100%, 1);\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 15px;\n  transition: all 0.3s ease 0s;\n  border: none;\n  cursor: pointer;\n  &:disabled {\n    background: rgb(58%, 58%, 58%, 1);\n  }\n"]))),G=C.ZP.span(f||(f=(0,P.Z)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n"]))),H=C.ZP.span(m||(m=(0,P.Z)(["\n  margin: 0 10px;\n"]))),K=function(n){var e=n.name,t=n.number,r=n.id,i=(0,q._U)(),a=(0,z.Z)(i,2),s=a[0],o=a[1].isLoading;return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(V,{children:[(0,F.jsx)(H,{id:r,children:(0,F.jsx)($,{children:e})}),(0,F.jsx)(H,{children:(0,F.jsx)($,{children:t})}),(0,F.jsx)(H,{children:(0,F.jsx)(E,{onClick:function(){return s(r)},disabled:o,children:(0,F.jsxs)(G,{children:[o&&(0,F.jsx)(R,{}),(0,F.jsx)("span",{children:"Delete"})]})})})]})})},Q=C.ZP.div(g||(g=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 10px auto;\n  padding: 10px;\n"]))),X=C.ZP.h2(b||(b=(0,P.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Y=C.ZP.span(j||(j=(0,P.Z)(["\n  width: 32px;\n  height: 32px;\n"]))),nn=C.ZP.ul(Z||(Z=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  list-style: none;\n  min-width: 450px;\n"]))),en=(C.ZP.li(w||(w=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  min-width: 100px;\n  align-items: center;\n"]))),C.ZP.span(y||(y=(0,P.Z)(["\n  font-size: 20px;\n"]))),C.ZP.button(v||(v=(0,P.Z)(["\n  text-decoration: none;\n  display: inline-block;\n  width: 100px;\n  height: 45px;\n  line-height: 45px;\n  border-radius: 45px;\n  margin: 10px 20px;\n  font-family: Montserrat, sans-serif;\n  font-size: 11px;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 3px;\n  font-weight: 600;\n  color: rgb(82, 79, 78);\n  background: white;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 15px;\n  transition: all 0.3s ease 0s;\n  border: none;\n  cursor: pointer;\n"]))),function(){var n=(0,q.wW)(),e=n.data,t=n.isFetching,r=(0,T.v9)((function(n){return n.phoneBookFilter.filter})),i=e?e.filter((function(n){return n.name?n.name.toLowerCase().includes(r):e})):e;return(0,F.jsxs)(Q,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)("span",{children:"List Contacts"}),(0,F.jsx)(Y,{children:t&&(0,F.jsx)(R,{})})]}),(0,F.jsx)(nn,{children:i&&i.map((function(n){var e=n.id,t=n.name,r=n.phoneNumber;return(0,F.jsx)(K,{id:e,name:t,number:r},e)}))})]})}),tn=function(){return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(_,{children:[(0,F.jsx)(D,{}),(0,F.jsx)(J,{}),(0,F.jsx)(en,{})]})})},rn=function(){return(0,F.jsx)("div",{children:(0,F.jsx)(tn,{})})}}}]);
//# sourceMappingURL=248.014de67d.chunk.js.map