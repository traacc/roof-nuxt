import{s as h}from"./FzUR8Jto.js";import{s as v}from"./BkfLK7ur.js";import{R as w}from"./Dj9QQYaq.js";import{s as P}from"./CmknxUEu.js";import{K as O,W as k,x as g,y as a,z as s,B,$ as p,Z as c,a7 as u,a2 as r,A as f,a1 as S,X as j,a4 as D,C,ai as L,a5 as I}from"./xaUATo8g.js";import{f as K}from"./ZhWAdK_X.js";import"./1R4gKkkT.js";import"./BUJn7_9y.js";import"./jc0MLXVe.js";var $=`
    .p-fieldset {
        background: dt('fieldset.background');
        border: 1px solid dt('fieldset.border.color');
        border-radius: dt('fieldset.border.radius');
        color: dt('fieldset.color');
        padding: dt('fieldset.padding');
        margin: 0;
    }

    .p-fieldset-legend {
        background: dt('fieldset.legend.background');
        border-radius: dt('fieldset.legend.border.radius');
        border-width: dt('fieldset.legend.border.width');
        border-style: solid;
        border-color: dt('fieldset.legend.border.color');
        padding: dt('fieldset.legend.padding');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend {
        padding: 0;
    }

    .p-fieldset-toggle-button {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        display: flex;
        gap: dt('fieldset.legend.gap');
        align-items: center;
        justify-content: center;
        padding: dt('fieldset.legend.padding');
        background: transparent;
        border: 0 none;
        border-radius: dt('fieldset.legend.border.radius');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
        outline-color: transparent;
    }

    .p-fieldset-legend-label {
        font-weight: dt('fieldset.legend.font.weight');
    }

    .p-fieldset-toggle-button:focus-visible {
        box-shadow: dt('fieldset.legend.focus.ring.shadow');
        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');
        outline-offset: dt('fieldset.legend.focus.ring.offset');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover {
        color: dt('fieldset.legend.hover.color');
        background: dt('fieldset.legend.hover.background');
    }

    .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.color');
        transition: color dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.hover.color');
    }

    .p-fieldset .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`,E={root:function(t){var n=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},A=O.extend({name:"fieldset",style:$,classes:E}),N={name:"BaseFieldset",extends:P,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:A,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},F={name:"Fieldset",extends:N,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return K({toggleable:this.toggleable})}},directives:{ripple:w},components:{PlusIcon:v,MinusIcon:h}};function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(o){V(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function V(e,t,n){return(t=z(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){var t=M(e,"string");return d(t)=="symbol"?t:t+""}function M(e,t){if(d(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(d(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var R=["data-p"],T=["data-p"],W=["id"],X=["id","aria-controls","aria-expanded","aria-label"],Z=["id","aria-labelledby"];function q(e,t,n,o,i,l){var y=k("ripple");return a(),g("fieldset",r({class:e.cx("root"),"data-p":l.dataP},e.ptmi("root")),[s("legend",r({class:e.cx("legend"),"data-p":l.dataP},e.ptm("legend")),[p(e.$slots,"legend",{toggleCallback:l.toggle},function(){return[e.toggleable?c("",!0):(a(),g("span",r({key:0,id:e.$id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17,W)),e.toggleable?u((a(),g("button",r({key:1,id:e.$id+"_header",type:"button","aria-controls":e.$id+"_content","aria-expanded":!i.d_collapsed,"aria-label":l.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return l.toggle&&l.toggle.apply(l,arguments)}),onKeydown:t[1]||(t[1]=function(){return l.onKeyDown&&l.onKeyDown.apply(l,arguments)})},m(m({},e.toggleButtonProps),e.ptm("toggleButton"))),[p(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:i.d_collapsed,class:S(e.cx("toggleIcon"))},function(){return[(a(),j(D(i.d_collapsed?"PlusIcon":"MinusIcon"),r({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),s("span",r({class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17)],16,X)),[[y]]):c("",!0)]})],16,T),B(I,r({name:"p-toggleable-content"},e.ptm("transition")),{default:C(function(){return[u(s("div",r({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[s("div",r({class:e.cx("content")},e.ptm("content")),[p(e.$slots,"default")],16)],16,Z),[[L,!i.d_collapsed]])]}),_:3},16)],16,R)}F.render=q;export{F as default};
