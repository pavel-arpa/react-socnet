(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={wrapper:"Nav_wrapper__3PMf4","buttons-wrapper":"Nav_buttons-wrapper__1lLt3",button:"Nav_button__1MWRX",button_active:"Nav_button_active__3p7Qa",topFriends:"Nav_topFriends__aX8nX",friendsTitle:"Nav_friendsTitle__1Zcqo",friendsWrapper:"Nav_friendsWrapper__1Ajig"}},,,function(e,t,a){e.exports={wrapper:"Dialogs_wrapper__2YNbk",dialogsWrapper:"Dialogs_dialogsWrapper__1RApy",messages:"Dialogs_messages__8XyKY",messagesWrapper:"Dialogs_messagesWrapper__vNxIq",messagesWrapperScrolled:"Dialogs_messagesWrapperScrolled__3ffFn",sendMessage:"Dialogs_sendMessage__2HFWo",startDialogPhrase:"Dialogs_startDialogPhrase__Uc-Lk"}},,function(e,t,a){e.exports={header:"Header_header__1n8n6",logo:"Header_logo__2aoqm",links:"Header_links__3Lbtd",link:"Header_link__-72xG"}},function(e,t,a){e.exports={info:"ProfileInfo_info__1EClF",avatar:"ProfileInfo_avatar__2kLev",description:"ProfileInfo_description__2BhwR",name:"ProfileInfo_name__utcql"}},function(e,t,a){e.exports={friend:"Friend_friend__1Ndzc"}},function(e,t,a){e.exports={wrapper:"PostsBlock_wrapper__7xu3h",addPost:"PostsBlock_addPost__2i4em"}},function(e,t,a){e.exports={wrapper:"Post_wrapper__1NW5K",avatar:"Post_avatar__1AzIL",text:"Post_text__35z6s"}},function(e,t,a){e.exports={message:"Message_message__3Yroj",message_me:"Message_message_me__1cKav"}},,,function(e,t,a){e.exports={content:"App_content__1fB6q","content-wrapper":"App_content-wrapper__1-7bP"}},,,function(e,t,a){e.exports={dialog:"Dialog_dialog__2DSRl",dialog_active:"Dialog_dialog_active__2RXXg"}},,,function(e,t,a){e.exports={cover:"Profile_cover__1mWaY"}},,,,,function(e,t,a){},,,,,,,,,,function(e,t,a){"use strict";a.r(t),a.d(t,"rerenderEntireTree",(function(){return $}));var s=a(1),n=a.n(s),i=a(24),r=a.n(i),c=(a(31),a(20)),o=a.n(c),d=a(8),l=a(2),p=a(12),j=a.n(p),_=a.p+"static/media/logo.6ce24c58.svg",x=a(0),u=function(){return Object(x.jsxs)("header",{className:j.a.header,children:[Object(x.jsx)("div",{className:j.a.logo,children:Object(x.jsx)("img",{src:_,alt:"logo"})}),Object(x.jsx)("div",{className:j.a.links,children:Object(x.jsx)("a",{href:"#",className:j.a.link,children:"Atom.net"})})]})},m=a(7),b=a.n(m),h=a(14),g=a.n(h);var f=function(e){return Object(x.jsxs)("div",{className:g.a.friend,children:[Object(x.jsx)("img",{src:"https://images.unsplash.com/photo-1604026289719-a60fd5374945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=661&q=80",alt:""}),Object(x.jsx)("span",{className:g.a.name,children:e.name}),Object(x.jsx)("span",{className:g.a.id,children:e.id})]})};var v=function(e){var t=e.state.topFriends.map((function(e){return Object(x.jsx)(f,{name:e.name,id:e.id})}));return Object(x.jsxs)("nav",{className:b.a.wrapper,children:[Object(x.jsxs)("div",{className:b.a["buttons-wrapper"],children:[Object(x.jsx)(d.b,{exact:!0,to:"/profile",className:b.a.button,activeClassName:b.a.button_active,children:Object(x.jsx)("span",{children:"Profile"})}),Object(x.jsx)(d.b,{to:"/dialogs",className:b.a.button,activeClassName:b.a.button_active,children:Object(x.jsx)("span",{children:"Dialogs"})}),Object(x.jsx)(d.b,{to:"/settings",className:b.a.button,activeClassName:b.a.button_active,children:Object(x.jsx)("span",{children:"Settings"})})]}),Object(x.jsxs)("div",{className:b.a.topFriends,children:[Object(x.jsx)("span",{className:b.a.friendsTitle,children:"Top Friends"}),Object(x.jsx)("div",{className:b.a.friendsWrapper,children:t})]})]})},O=a(26),N=a.n(O),w=a(13),P=a.n(w);var T=function(){return Object(x.jsxs)("div",{className:P.a.info,children:[Object(x.jsx)("div",{className:P.a.avatar,children:Object(x.jsx)("img",{src:_,alt:""})}),Object(x.jsxs)("div",{className:P.a.description,children:[Object(x.jsx)("span",{className:P.a.name,children:"Pavel Arepev"}),Object(x.jsx)("span",{children:"a programmer"})]})]})},D=a(15),k=a.n(D),y=a(16),S=a.n(y);var W=function(e){return Object(x.jsxs)("div",{className:S.a.wrapper,children:[Object(x.jsx)("img",{src:_,alt:"",className:S.a.avatar}),Object(x.jsx)("div",{className:S.a.text,children:e.text}),Object(x.jsx)("span",{children:e.likesCount})]})},E="ADD_POST",M="UPDATE_NEW_POST_TEXT",A=function(e,t){switch(e.type){case E:var a={id:3,text:t.newPostText.trim(),likesCount:145};return t.posts.push(a),t.newPostText="",t;case M:return t.newPostText=e.text,t;default:return t}};var C=function(e){var t=e.state.posts.map((function(e){if(""!==e.text)return Object(x.jsx)(W,{id:e.id,likesCount:e.likesCount,text:e.text})}));return Object(x.jsxs)("div",{className:k.a.wrapper,children:[Object(x.jsxs)("div",{className:k.a.addPost,children:[Object(x.jsx)("input",{onChange:function(t){var a=t.target.value;e.dispatch(function(e){return{type:M,text:e}}(a))},value:e.state.newPostText,placeholder:"Enter the text here"}),Object(x.jsx)("button",{onClick:function(){e.dispatch({type:E})},children:"add post"})]}),Object(x.jsx)("div",{className:k.a.postsWrapper,children:t})]})};var F=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:N.a.cover,children:Object(x.jsx)("img",{src:"https://img2.goodfon.ru/wallpaper/nbig/7/7f/priroda-panorama-vershina.jpg",alt:""})}),Object(x.jsx)(T,{}),Object(x.jsx)(C,{state:e.state,dispatch:e.dispatch})]})},H=a(10),I=a.n(H),B=a(23),X=a.n(B);var q=function(e){var t="/dialogs/"+e.id;return Object(x.jsx)(d.b,{className:X.a.dialog,to:t,activeClassName:X.a.dialog_active,children:Object(x.jsx)("span",{children:e.name})})},G=a(17),L=a.n(G);var R=function(e){return Object(x.jsx)("div",{className:0===e.id?L.a.message_me+" "+L.a.message:L.a.message,children:Object(x.jsx)("span",{children:e.text})})},Y="ADD_MESSAGE",z="UPDATE_NEW_MESSAGE_TEXT",J=function(e,t){switch(e.type){case Y:var a={id:0,text:t.newMessageText.trim()};return t.messages[0].history.push(a),t.newMessageText="",t;case z:return t.newMessageText=e.text,t;default:return t}};var K=function(e){var t=e.state.dialogs.map((function(e){return Object(x.jsx)(q,{id:e.id,name:e.name})})),a=e.state.messages[0].history.map((function(e){if(""!==e.text)return Object(x.jsx)(R,{id:e.id,text:e.text})}));return Object(x.jsxs)("div",{className:I.a.wrapper,children:[Object(x.jsx)("div",{className:I.a.dialogsWrapper,children:t}),Object(x.jsxs)("div",{className:I.a.messages,children:[Object(x.jsxs)("div",{className:I.a.messagesWrapper,children:[Object(x.jsx)("span",{className:I.a.startDialogPhrase,children:"Begin of your dialog"}),a]}),Object(x.jsxs)("div",{className:I.a.sendMessage,children:[Object(x.jsx)("input",{type:"text",value:e.state.newMessageText,onChange:function(t){var a=t.target.value;e.dispatch(function(e){return{type:z,text:e}}(a))},placeholder:"Enter the message"}),Object(x.jsx)("button",{onClick:function(){e.dispatch({type:Y})},children:"Send"})]})]})]})};var U=function(e){return Object(x.jsx)(d.a,{children:Object(x.jsxs)("div",{className:o.a.content,children:[Object(x.jsx)(u,{}),Object(x.jsx)(v,{state:e.state.sidebar}),Object(x.jsxs)("div",{className:o.a["content-wrapper"],children:[Object(x.jsx)(l.a,{path:["/profile"],render:function(){return Object(x.jsx)(F,{state:e.state.profilePage,dispatch:e.dispatch})}}),Object(x.jsx)(l.a,{path:"/dialogs",render:function(){return Object(x.jsx)(K,{state:e.state.dialogsPage,dispatch:e.dispatch})}})]})]})})},Q=function(e,t){return t},V={_state:{profilePage:{posts:[{id:1,text:"New empty post",likesCount:10},{id:2,text:"I was registered",likesCount:145}],newPostText:""},dialogsPage:{dialogs:[{id:1,name:"Sergey"},{id:2,name:"Ivan"},{id:3,name:"Fedor"},{id:4,name:"Andrew"},{id:5,name:"Igor"},{id:6,name:"John"},{id:7,name:"Anna"},{id:8,name:"Elena"}],messages:[{id:1,history:[{id:1,text:"Hello"},{id:1,text:"How are you?"},{id:0,text:"Hi"},{id:0,text:"I'm fine"},{id:1,text:"Excellent!"}]}],newMessageText:""},sidebar:{topFriends:[{id:1,name:"Sergey"},{id:2,name:"Fedor"},{id:8,name:"Elena"}]}},_callSubscriber:function(){console.log("State changed")},getState:function(){return this._state},subscribe:function(e){this._callSubscriber=e},dispatch:function(e){this._state.profilePage=A(e,this._state.profilePage),this._state.dialogsPage=J(e,this._state.dialogsPage),this._state.sidebar=Q(e,this._state.sidebar),this._callSubscriber(this)}};window.store=V;var Z=V,$=function(e){r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(U,{state:e.getState(),dispatch:e.dispatch.bind(e)})}),document.getElementById("root"))};$(Z),Z.subscribe($)}],[[41,1,2]]]);
//# sourceMappingURL=main.a9208dab.chunk.js.map