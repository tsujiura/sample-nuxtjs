(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{250:function(t,e,n){"use strict";n.r(e);n(70);var o={name:"TestSpace",data:function(){return{inputData:"",outputData:""}},methods:{onBlur:function(){this.setOutput("onBlur")},onFocus:function(){this.setOutput("onFocus")},setOutput:function(t){this.outputData&&(this.outputData+="\n"),this.outputData+="".concat(t,": ").concat(this.inputData)}}},r=n(45),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"},[n("div",[n("label",[t._v("入力")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputData,expression:"inputData"}],attrs:{type:"number"},domProps:{value:t.inputData},on:{blur:t.onBlur,focus:t.onFocus,input:function(e){e.target.composing||(t.inputData=e.target.value)}}})]),t._v(" "),n("div",[n("label",[t._v("出力")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.outputData,expression:"outputData"}],staticStyle:{height:"500px",width:"200px"},attrs:{readonly:""},domProps:{value:t.outputData},on:{input:function(e){e.target.composing||(t.outputData=e.target.value)}}})])])}),[],!1,null,null,null);e.default=component.exports}}]);