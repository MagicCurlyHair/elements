(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{v1P6:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r("jrat");const n="@angular-extensions/elements";class i{constructor(e,t,r,n){this.vcr=e,this.template=t,this.elementsLoaderService=r,this.cfr=n}ngOnInit(){if(!this.tag||0===this.tag.length||!this.tag.includes("-"))throw new Error(`${n} - Valid tag has to be specified when using *axLazyElementDynamic directive (use *axLazyElementDynamic="'some-tag'"), got: "${this.tag}"`);const e=this.elementsLoaderService.getElementConfig(this.tag)||{},t=this.elementsLoaderService.options,r=e.loadingComponent||t.loadingComponent;if(this.loadingTemplateRef)this.vcr.createEmbeddedView(this.loadingTemplateRef);else if(r){const e=this.cfr.resolveComponentFactory(r);this.vcr.createComponent(e)}this.elementsLoaderService.loadElement(this.url,this.tag,this.isModule).then(()=>{this.template._def.element.template.nodes[0].element.name=this.tag,this.vcr.clear(),this.vcr.createEmbeddedView(this.template)}).catch(()=>{const r=e.errorComponent||t.errorComponent;if(this.vcr.clear(),this.errorTemplateRef)this.vcr.createEmbeddedView(this.errorTemplateRef);else if(r){const e=this.cfr.resolveComponentFactory(r);this.vcr.createComponent(e)}else console.error(`${n} - Loading of element <${this.tag}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElementDynamic="errorTemplate: error" to display customized error message in place of element`)})}}},wIh0:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r("jrat");const n="@angular-extensions/elements";class i{constructor(e,t,r,n){this.vcr=e,this.template=t,this.elementsLoaderService=r,this.cfr=n}ngOnInit(){const e=this.template._def.element.template.nodes[0].element.name,t=this.elementsLoaderService.getElementConfig(e)||{},r=this.elementsLoaderService.options,i=t.loadingComponent||r.loadingComponent;if(this.loadingTemplateRef)this.vcr.createEmbeddedView(this.loadingTemplateRef);else if(i){const e=this.cfr.resolveComponentFactory(i);this.vcr.createComponent(e)}this.elementsLoaderService.loadElement(this.url,e,this.isModule).then(()=>{this.vcr.clear(),this.vcr.createEmbeddedView(this.template)}).catch(()=>{this.vcr.clear();const i=t.errorComponent||r.errorComponent;if(this.errorTemplateRef)this.vcr.createEmbeddedView(this.errorTemplateRef);else if(i){const e=this.cfr.resolveComponentFactory(i);this.vcr.createComponent(e)}else console.error(`${n} - Loading of element <${e}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElement="errorTemplate: error" to display customized error message in place of element`)})}}}}]);