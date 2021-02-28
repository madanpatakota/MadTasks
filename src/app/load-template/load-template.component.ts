import { Component, OnInit,ViewContainerRef,TemplateRef, ViewChild, 
  ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';


@Component({
  selector: 'app-load-template',
  templateUrl: './load-template.component.html',
  styleUrls: ['./load-template.component.css']
})
export class LoadTemplateComponent implements OnInit {



  @ViewChild('LoaddetailsComp',{read:ViewContainerRef}) LoaddetailsComp:ViewContainerRef ;
  //@ViewChild('LoaddetailsComp',{read:ViewContainerRef}) LoaddetailsComp:ViewContainerRef ;


  constructor(private resolver : ComponentFactoryResolver) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    //console.log(component);
    console.log("Load template Executed........");
    //const component = this.resolver.resolveComponentFactory(ContactUsComponent);

    //Here the matter is content absolutely is not expected......
    const component = this.resolver.resolveComponentFactory(DetailsComponent);
    //ExpressionChangedAfterItHasBeenCheckedError: would appear incase of settimeout
    setTimeout(() => {
      this.LoaddetailsComp.createComponent(component);
    }, 1000);
  }





}
