import{s as l}from"./BFpyWQIJ.js";import{B as u,c as i,o as s,C as g,E as c,G as p,J as o,K as y,a as f,t as b}from"./D0-M7R3Z.js";import{f as m}from"./ZhWAdK_X.js";var v=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,k={root:function(t){var r=t.props;return["p-tag p-component",{"p-tag-info":r.severity==="info","p-tag-success":r.severity==="success","p-tag-warn":r.severity==="warn","p-tag-danger":r.severity==="danger","p-tag-secondary":r.severity==="secondary","p-tag-contrast":r.severity==="contrast","p-tag-rounded":r.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},h=u.extend({name:"tag",style:v,classes:k}),S={name:"BaseTag",extends:l,props:{value:null,severity:null,rounded:Boolean,icon:String},style:h,provide:function(){return{$pcTag:this,$parentInstance:this}}};function e(n){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}function w(n,t,r){return(t=$(t))in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function $(n){var t=P(n,"string");return e(t)=="symbol"?t:t+""}function P(n,t){if(e(n)!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var a=r.call(n,t);if(e(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var B={name:"Tag",extends:S,inheritAttrs:!1,computed:{dataP:function(){return m(w({rounded:this.rounded},this.severity,this.severity))}}},z=["data-p"];function T(n,t,r,a,j,d){return s(),i("span",o({class:n.cx("root"),"data-p":d.dataP},n.ptmi("root")),[n.$slots.icon?(s(),g(y(n.$slots.icon),o({key:0,class:n.cx("icon")},n.ptm("icon")),null,16,["class"])):n.icon?(s(),i("span",o({key:1,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):c("",!0),n.value!=null||n.$slots.default?p(n.$slots,"default",{key:2},function(){return[f("span",o({class:n.cx("label")},n.ptm("label")),b(n.value),17)]}):c("",!0)],16,z)}B.render=T;export{B as default};
