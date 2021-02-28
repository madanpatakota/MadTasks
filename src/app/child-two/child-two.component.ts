import { Component, OnInit, Type, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver, ContentChild, TemplateRef, Injector, Inject, ElementRef } from '@angular/core';

import { ChildOneComponent } from '../child-one/child-one.component';
import { R3FactoryDelegateType } from '@angular/compiler/src/render3/r3_factory';
import { DOCUMENT } from '@angular/common';

export type Content<T> = string | TemplateRef<T> | Type<T>;

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})

export class ChildTwoComponent implements OnInit, AfterViewInit {


  address = "";

  contentOne = "<div><p>ContentChild has appeared </p></div>"

  @ViewChild('childTwoContainer', { read: ViewContainerRef }) 
  vchildTwoContainer: ViewContainerRef;
  @ContentChild(TemplateRef) childContent

  constructor(private resolver: ComponentFactoryResolver, 
    private injector: Injector, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {

  }

  resolveNgContent<T>(content: Content<T>) {
    if (typeof content === 'string') {
      const element = this.document.createTextNode(content);
      return [[element]];
    }
  }

  ngAfterViewInit() {
    //const _content = strin;
    const _childOneComponent = this.resolver.resolveComponentFactory(ChildOneComponent);
    const _ngContent = this.resolveNgContent(this.contentOne);
    //  console.log("First is", this.childTwoContainer);
    // setTimeout(function(){
    //   this.vchildTwoContainer.createComponent(_childOneComponent);
    // },1000)
    setTimeout(() => {

      //=================================Case 1 ========================================
      // this.LoaddetailsComp.createComponent(component);
      this.vchildTwoContainer.createComponent(_childOneComponent, 0, this.injector, _ngContent);
      //this.vchildTwoContainer.createEmbeddedView(this.childContent);

      //if You are not apply Injectory in constructor you can get the error
	  
	  //============================================creating instance of component==========================================
	  //this.dynamicInsert.clear();
    //    const dyynamicComponent = 
      //<DynamicComponent>this.dynamicInsert.createComponent(componentFactory).instance;
       // dyynamicComponent.someProp = 'Hello World';

      //===============================Case 2 ============================================
      const componentRef = _childOneComponent.create(this.injector, _ngContent);
      componentRef.hostView.detectChanges();
      //const {view} = componentRef.hostView;
      //const  {nativeElement}  = componentRef.location
      const { nativeElement } = componentRef.location;
      this.document.body.appendChild(nativeElement);
      console.log("Component Reference " , componentRef);

    }, 1000);
  }



}
