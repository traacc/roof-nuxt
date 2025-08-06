import{s as t}from"./B9V3dWZf.js";import{B as s,c as a,o as n,G as p,J as c}from"./DK9cVb_O.js";import{s as r}from"./jc0MLXVe.js";import"./BUtoevXL.js";var i=`
    .p-checkbox-group {
        display: inline-flex;
    }
`,u={root:"p-checkbox-group p-component"},m=s.extend({name:"checkboxgroup",style:i,classes:u}),l={name:"BaseCheckboxGroup",extends:t,style:m,provide:function(){return{$pcCheckboxGroup:this,$parentInstance:this}}},h={name:"CheckboxGroup",extends:l,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||r("checkbox-group-")}},mounted:function(){this.groupName=this.groupName||r("checkbox-group-")}};function d(e,o,x,f,k,g){return n(),a("div",c({class:e.cx("root")},e.ptmi("root")),[p(e.$slots,"default")],16)}h.render=d;export{h as default};
