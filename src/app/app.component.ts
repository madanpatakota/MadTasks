import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifeCycleHooks';

  Address = "Kadpa";
  Location = "Bangolore"
  //SecondUserName = "";
  SecondUserName = "tester";

  CName = "";
  CAddress = "";

  CommentsOnCollege = "Its Very good";

  // constructor(){
  //   console.log();
  // }


  CollegeInformation = (CommentsOnCollege) => {
    console.log("CollegeInformation" + this.CommentsOnCollege );
    this.CommentsOnCollege = "very good good";
  }
  MyLocation(data) {
    console.log(data);
  }

  ngDoCheck() {
    console.log("====================appcomp - ngDocheck is started====================");
    //  console.log("********************appcomp - ngDocheck is ended********************");
  }

  ngOnInit(): void {
    console.log("===================appcomp - ngOnInit is started====================");
    // console.log("********************appcomp - ngOnInit is ended********************");

    setTimeout(() => {
      this.Address = "Proddatur";
    }, 10000);

  }

  ngOnChanges() {
    console.log("===================appcomp - ngOnChanges is started====================");
    //  console.log("********************appcomp - ngOnChanges is ended********************");
  }

  ngAfterViewChecked() {
    console.log("===================appcomp - ngAfterViewChecked is started====================");
    // console.log("********************appcomp - ngAfterViewChecked is ended********************");

  }

  ngAfterContentChecked() {
    //   this.SecondUserName = "ContentChecked from Appcomponent"
    console.log("===================appcomp - ngAfterContentChecked is started====================");
    //   console.log("********************appcomp - ngAfterContentChecked is ended********************");
  }

  ngAfterContentInit() {

    //  this.SecondUserName = "ContentChecked from Appcomponent"
    console.log("===================appcomp - ngAfterContentInit is started====================");
    // console.log("********************appcomp - ngAfterContentInit is ended********************");
    this.CName = "ada";
    this.CAddress = "ada";
  }

  ngAfterViewInit() {
    console.log("===================appcomp - ngAfterViewInit is started====================");
    // console.log("********************appcomp - ngAfterViewInit is ended********************");

  }
  ngOnDestroy() {
    console.log("===================appcomp - ngOnDestroy is started===================");
    // console.log("********************appcomp - ngOnDestroy is ended********************");

  }

}


