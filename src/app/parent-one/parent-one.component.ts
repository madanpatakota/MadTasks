import {
  Component,
  OnInit,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  OnDestroy,
  DoCheck,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  ContentChild,
  Input,
  Output, EventEmitter
} from '@angular/core';


@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent implements AfterViewChecked, DoCheck, OnDestroy, AfterViewInit, OnInit, OnChanges,
  AfterContentChecked, AfterContentInit {

  //UserName = "Madan";
  @ViewChild('RUserName', { static: true }) RUserName: ElementRef
  // @ContentChild('contentSecondUserName') contentSecondUserName: ElementRef
  @Input('inputAddress') Address: string;
  @Output('outputLocation') Location: EventEmitter<string> = new EventEmitter<string>();
  @Input('PCUsername') PCUsername: string;


  FormLocation = "Bangolore";
  constructor() {
    //console.log(this.userName);

  }

  ngDoCheck() {
    console.log("====================ngDocheck is started====================");
    //console.log("********************ngDocheck is ended********************");
  }

  ngOnInit(): void {
    console.log("===================ngOnInit is started====================");
    //  console.log("********************ngOnInit is ended********************");
    this.Location.emit(this.FormLocation);


    //this.FormLocation
  }

  ngOnChanges() {
    console.log("==================ngOnChanges is started====================");
    // console.log("********************ngOnChanges is ended********************");
  }

  ngAfterViewChecked() {
    console.log("===================ngAfterViewChecked is started====================");
    //  console.log("********************ngAfterViewChecked is ended********************");
  }

  ngAfterContentChecked() {
    console.log("===================ngAfterContentChecked is started====================");
    //console.log("********************ngAfterContentChecked is ended********************");
  }

  ngAfterContentInit() {
    console.log("===================ngAfterContentInit is started====================");
    //  console.log("********************ngAfterContentInit is ended********************");
  }

  ngAfterViewInit() {
    console.log("===================ngAfterViewInit is started====================");
    //  console.log("********************ngAfterViewInit is ended********************");

  }
  ngOnDestroy() {
    console.log("===================ngOnDestroy is started===================");
    // console.log("********************ngOnDestroy is ended********************");

  }



}
