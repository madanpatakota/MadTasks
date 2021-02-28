import { Component, OnInit, ContentChild, TemplateRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isValid = false;

  constructor() { }

  // @ContentChild("FormControls",{read: TemplateRef}) loginControls:TemplateRef<any>;
  //Cannot Read property incase if you are not provided or wrongly gives the read propety here
  @ViewChild("LoginChildControlsContainer", {read:ViewContainerRef}) Container:ViewContainerRef;
  @ViewChild("templateForm" ) templateForm:TemplateRef<any>;
  

  @ViewChild("conatiner1", {read:ViewContainerRef}) conatiner1:ViewContainerRef;
  @ViewChild("temp2" ) temp2:TemplateRef<any>;
  
  // @ViewChild("Password") pwd : ElementRef;

  ngOnInit(): void {
    console.log("ngOnInit" ,  this.Container);
    //console.log("Password is" , this.pwd);
    //this.Container.createEmbeddedView(this.templateForm);
    
  }

  ngAfterViewInit(){
   // console.log("ngAfterViewInit is " , this.loginControls);
    console.log("ngAfterViewInit LoginChildControlsContainer is " ,  this.Container);
    console.log("ngAfterViewInit templateForm is " ,  this.templateForm);
    this.Container.createEmbeddedView(this.templateForm);
    this.conatiner1.createEmbeddedView(this.temp2);

   // this.Container.createEmbeddedView(this.templateForm);
  //  this.Container.createEmbeddedView(this.loginControls)
  }
  
  // ngDoCheck(){
  //  // console.log("Password on ngDoCheck is " , this.pwd);
  //   console.log("ngDoCheck " ,  this.Container);
  // }

  // ngAfterContentInit(){
  //   console.log("ngAfterContentInit" ,  this.Container);
  //  // console.log("ngAfterContentInit" ,  this.loginControls);
  // }

  

  // ngAfterContentChecked(){
  //   console.log("ngAfterContentChecked" ,  this.Container);
  //  // console.log("ngAfterContentChecked" ,  this.loginControls);
  // }

}
