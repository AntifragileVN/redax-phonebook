"use strict";(self.webpackChunkredax_phonebook=self.webpackChunkredax_phonebook||[]).push([[613],{8900:function(n,t,e){e.d(t,{CW:function(){return y},Fy:function(){return v},LQ:function(){return w},SP:function(){return j},W1:function(){return C},__:function(){return g},l0:function(){return Z},qW:function(){return k},tB:function(){return P}});var r,i,o,a,s,c,d,l,u,p,h=e(168),x=e(71),m=e(6856),f=e(3853),b=e(5867),Z=b.ZP.form(r||(r=(0,h.Z)(["\n\tbackground: #212832;\n"]))),g=b.ZP.label(i||(i=(0,h.Z)(["\n\tcolor: #8caab9;\n\tfont-size: 18px;\n\tmargin-bottom: 15px;\n"]))),j=b.ZP.div(o||(o=(0,h.Z)(["\n\tbackground: #455a64;\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-bottom: 25px;\n"]))),v=b.ZP.input(a||(a=(0,h.Z)(["\n\twidth: 100%;\n\tpadding-top: 17px;\n\tpadding-bottom: 17px;\n\tpadding-left: 40px;\n\tborder: none;\n\tbackground: #455a64;\n\n\tfont-size: 18px;\n\tcolor: inherit;\n"]))),P=(b.ZP.div(s||(s=(0,h.Z)(["\n\tposition: absolute;\n\tleft: 10px;\n\twidth: 25px;\n\theight: 25px;\n"]))),(0,b.ZP)(x.bq1)(c||(c=(0,h.Z)(["\n\tposition: absolute;\n\tleft: 10px;\n\twidth: 25px;\n\theight: 25px;\n"])))),w=(0,b.ZP)(m.yr3)(d||(d=(0,h.Z)(["\n\tposition: absolute;\n\tleft: 10px;\n\twidth: 25px;\n\theight: 25px;\n"]))),y=(0,b.ZP)(f.UIZ)(l||(l=(0,h.Z)(["\n\tposition: absolute;\n\tleft: 10px;\n\twidth: 25px;\n\theight: 25px;\n"]))),k=(0,b.ZP)(m.$QI)(u||(u=(0,h.Z)(["\n\tposition: absolute;\n\tleft: 10px;\n\twidth: 25px;\n\theight: 25px;\n"]))),C=(0,b.ZP)(x.xue)(p||(p=(0,h.Z)(["\n\tposition: absolute;\n\tleft: 10px;\n\twidth: 25px;\n\theight: 25px;\n"])))},4613:function(n,t,e){e.r(t),e.d(t,{default:function(){return H}});var r,i,o,a,s,c=e(9439),d=e(2791),l=e(9434),u=e(4208),p=function(n){return n.contacts.items},h=e(168),x=e(5867),m=x.ZP.li(r||(r=(0,h.Z)(["\n\tposition: relative;\n\tbackground: #263238;\n\tdisplay: flex;\n\talign-content: center;\n\tjustify-content: space-between;\n\n\t&:not(:last-child) {\n\t\tmargin-bottom: 20px;\n\t}\n\n\t&::before {\n\t\tcontent: '';\n\t\theight: 100%;\n\t\twidth: 10px;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tbackground: #fed36a;\n\t}\n"]))),f=(0,x.ZP)(m)(i||(i=(0,h.Z)(["\n\ttransition: opacity 500ms;\n\topacity: ",";\n"])),(function(n){var t=n.state;return"entered"===t||"entering"===t?1:0})),b=x.ZP.div(o||(o=(0,h.Z)(["\n\tpadding: 15px 20px;\n"]))),Z=x.ZP.p(a||(a=(0,h.Z)(["\n\tfont-size: 20px;\n\tfont-weight: 600;\n\tline-height: 1.2;\n\tmargin-bottom: 5px;\n"]))),g=x.ZP.p(s||(s=(0,h.Z)(["\n\tfont-size: 14px;\n\tline-height: 1.2;\n\tcolor: #c0bebe;\n"]))),j=e(6448),v=e(7425),P=e(3430),w=e(184);function y(n){var t=n.name,e=n.number,r=n.id,i=n.state,o=(0,l.I0)(),a=(0,d.useState)(!1),s=(0,c.Z)(a,2),p=s[0],h=s[1];return(0,w.jsxs)(f,{state:i,children:[(0,w.jsxs)(b,{children:[(0,w.jsx)(Z,{children:t}),(0,w.jsx)(g,{children:e})]}),(0,w.jsx)(j.z,{className:"contactDelete",onClick:function(){return function(n){h(!0),o((0,u.GK)(n))}(r)},disabled:p,children:p?(0,w.jsx)(P.gy,{color:"#000",width:25,height:25}):(0,w.jsx)(v.Ehm,{size:25})})]})}var k,C=e(9981),z=(0,x.ZP)(C.Z)(k||(k=(0,h.Z)([""]))),F=e(6752);function A(n){var t=n.filter,e=n.contacts.filter((function(n){return n.name.toLowerCase().includes(t)}));return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(z,{component:"ul",children:e.map((function(n){var t=n.id,e=n.name,r=n.number;return(0,w.jsx)(F.ZP,{timeout:500,mountOnEnter:!0,unmountOnExit:!0,children:function(n){return(0,w.jsx)(y,{id:t,name:e,number:r,state:n},t)}})}))})})}var q,N,S,B,L,_=e(8900),I=function(n){var t=n.filter,e=n.handleChange;return(0,w.jsxs)(_.SP,{children:[(0,w.jsx)(_.W1,{}),(0,w.jsx)(_.Fy,{type:"text",value:t,name:"filter",onChange:function(n){return e(n.target.value.toLocaleLowerCase())}})]})},W=e(2132),E=e(5705),O=e(6727),$=(0,x.ZP)(E.l0)(q||(q=(0,h.Z)(["\n\tbackground: #212832;\n"]))),J=x.ZP.div(N||(N=(0,h.Z)(["\n\tbackground: #455a64;\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n"]))),M=x.ZP.div(S||(S=(0,h.Z)(["\n\tpadding-bottom: 20px;\n"]))),R=x.ZP.label(B||(B=(0,h.Z)(["\n\tcolor: #8caab9;\n\tfont-size: 18px;\n\tmargin-bottom: 15px;\n"]))),K=(0,x.ZP)(E.gN)(L||(L=(0,h.Z)(["\n\twidth: 100%;\n\tpadding-top: 17px;\n\tpadding-bottom: 17px;\n\tpadding-left: 40px;\n\tborder: none;\n\tbackground: #455a64;\n\n\tfont-size: 18px;\n\tcolor: inherit;\n"]))),Q=e(9085),T={name:"",number:""},D=O.Ry().shape({name:O.Z_().max(15,"Must be 15 characters or less").required("Required").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:O.Z_().max(13,"Must be 13 characters or less").required("Required").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),G=function(){var n=(0,l.v9)(p),t=(0,l.I0)();return(0,w.jsx)(E.J9,{initialValues:T,validationSchema:D,onSubmit:function(e,r){var i=r.resetForm;n.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))&&(i(),Q.Am.error("Such name already exist",{position:"bottom-right",autoClose:4e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})),t((0,u.uK)(e)),Q.Am.success("New contact ".concat(e.name," created!")),i()},children:(0,w.jsxs)($,{children:[(0,w.jsxs)(M,{children:[(0,w.jsx)(R,{htmlFor:"name",children:"Name"}),(0,w.jsxs)(J,{children:[(0,w.jsx)(_.tB,{}),(0,w.jsx)(K,{type:"text",name:"name",autoComplete:"off",placeholder:"Tom Jhonson"})]}),(0,w.jsx)(E.Bc,{name:"name"})]}),(0,w.jsxs)(M,{children:[(0,w.jsx)(R,{htmlFor:"number",children:"Telephone"}),(0,w.jsxs)(J,{children:[(0,w.jsx)(_.qW,{}),(0,w.jsx)(K,{type:"tel",name:"number",placeholder:"+28023456724"})]}),(0,w.jsx)(E.Bc,{name:"number"})]}),(0,w.jsx)(j.z,{type:"submit",children:"Add contact"})]})})},H=function(){var n=(0,l.I0)(),t=(0,d.useState)(""),e=(0,c.Z)(t,2),r=e[0],i=e[1],o=(0,l.v9)(p);(0,d.useEffect)((function(){n((0,u.yF)())}),[n]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(W.$0,{children:[(0,w.jsx)(W.NZ,{children:"Phonebook"}),(0,w.jsx)(G,{})]}),(0,w.jsxs)(W.$0,{children:[(0,w.jsx)(W.NZ,{children:"Contacts"}),(0,w.jsx)(I,{filter:r,handleChange:function(n){i(n)}}),(0,w.jsx)(A,{filter:r,contacts:o})]})]})}}}]);
//# sourceMappingURL=613.346dafea.chunk.js.map