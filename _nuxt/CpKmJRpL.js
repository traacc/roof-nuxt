import{s as t}from"./BDD0sHGd.js";import{B as n,c as s,o as l,a,G as o,J as r}from"./k5Gd4E38.js";var d=`
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`,p={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},i=n.extend({name:"toolbar",style:d,classes:p}),b={name:"BaseToolbar",extends:t,props:{ariaLabelledby:{type:String,default:null}},style:i,provide:function(){return{$pcToolbar:this,$parentInstance:this}}},c={name:"Toolbar",extends:b,inheritAttrs:!1},m=["aria-labelledby"];function u(e,y,v,f,$,g){return l(),s("div",r({class:e.cx("root"),role:"toolbar","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[a("div",r({class:e.cx("start")},e.ptm("start")),[o(e.$slots,"start")],16),a("div",r({class:e.cx("center")},e.ptm("center")),[o(e.$slots,"center")],16),a("div",r({class:e.cx("end")},e.ptm("end")),[o(e.$slots,"end")],16)],16,m)}c.render=u;export{c as default};
