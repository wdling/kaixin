(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("login-top",{attrs:{Text:"登录bilibili"}},[n("div",{staticStyle:{"font-size":"3.611vw"},attrs:{slot:"left"},on:{click:function(e){return t.$router.push("/register")}},slot:"left"},[t._v(" 用户别注册，有毒 ")]),n("div",{staticStyle:{"font-size":"3.611vw"},attrs:{slot:"right"},on:{click:function(e){return t.$router.push("/register")}},slot:"right"},[t._v(" 用户注册 ")])]),n("login-text",{staticStyle:{margin:"4.167vw 0"},attrs:{label:"账号",placeholder:"请输入账号"},on:{contentWatch:function(e){return t.model.username=e}}}),n("login-text",{attrs:{label:"密码",placeholder:"请输入密码",type:"password"},on:{contentWatch:function(e){return t.model.password=e}}}),n("login-btn",{attrs:{BtnText:"登录"},on:{TextClick:t.AjaxInsert}})],1)},a=[],o=(n("96cf"),n("1da1")),s=n("4cc5"),i=n("f169"),l=n("0738"),c={data:function(){return{model:{}}},components:{LoginTop:s["a"],LoginText:i["a"],LoginBtn:l["a"]},methods:{AjaxInsert:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=/^.{6,16}$/,!n.test(t.model.username)||!n.test(t.model.password)){e.next=13;break}return e.next=4,t.$http.post("/login",t.model);case 4:if(r=e.sent,t.$msg.fail(r.data.msg),301!=r.data.code&&302!=r.data.code){e.next=8;break}return e.abrupt("return");case 8:localStorage.setItem("token",r.data.token),localStorage.setItem("id",r.data.id),setTimeout((function(){t.$router.push("/userinfo")}),1e3),e.next=14;break;case 13:t.$msg.fail("格式不正确,请重新输入!");case 14:case"end":return e.stop()}}),e)})))()}}},u=c,d=n("2877"),f=Object(d["a"])(u,r,a,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d2086b7.4fff0555.js.map