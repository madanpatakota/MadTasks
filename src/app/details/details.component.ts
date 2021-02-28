
import { Component, OnInit, ContentChild, AfterViewInit, AfterContentInit, AfterViewChecked, TemplateRef, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, AfterViewInit, AfterContentInit, AfterViewChecked {

  constructor() {
    console.log("constructor has loaded");
    //console.log("Constructor has " + this.emailPWd);
  }

  name = "Madan";

  @ViewChild("emailPwd", { read: ViewContainerRef }) emailPWd: ViewContainerRef;
  // @ViewChild("address") address: ElementRef;
  // @ViewChild("HostAddressContainer", { read: ViewContainerRef }) HostAddressContainer: ViewContainerRef;
  // @ViewChild("HostZipcontainer", { read: ViewContainerRef }) HostZipcontainer: ViewContainerRef;

  @ContentChild("temEmailPWDRef") temEmailPWDRef: TemplateRef<any>;
  // @ContentChild("containerAddress") containerAddress: TemplateRef<any>;
  // @ContentChild('ZipCode') zipCodeElemmentRef: TemplateRef<any>;

  ngOnInit(): void {
    //console.log(this.address)
  }

  ngAfterViewInit() {
    // console.log(" ngAfterViewInit Address is" , this.address);
    // console.log("ngAfterViewInit emailPWd is " , this.emailPWd);
    //console.log("Details Load Executed........");

    console.log("email pwd", this.emailPWd);
    //debugger;
    //this.emailPWd.createEmbeddedView(this.temEmailPWDRef);
    // setTimeout(function () {
    //   debugger;
    //   this.emailPWd.createEmbeddedView(this.temEmailPWDRef);
    //   //      this.HostAddressContainer.createEmbeddedView(this.containerAddress);
    //   //      this.HostZipcontainer.createEmbeddedView(this.zipCodeElemmentRef);
    // }, 1000);


    // setTimeout(function)()
    // <!---ngContainer> will be added to container class.......
  }



  ngAfterViewChecked() {
    // console.log("ngAfterContentInit" , this.address);
    // console.log(this.emailPWd);
    //  this.emailPWd.createEmbeddedView(this.temEmailPWDRef);

    // console.log("madan mohan");
    // this.emailPWd.createEmbeddedView(this.temEmailPWDRef);
    // this.HostAddressContainer.createEmbeddedView(this.containerAddress);
    // this.HostZipcontainer.createEmbeddedView(this.zipCodeElemmentRef);
  }

  ngAfterContentInit() {
    this.emailPWd.createEmbeddedView(this.temEmailPWDRef);

    //console.log("this.temEmailPWDRef", this.temEmailPWDRef);
  }






}
