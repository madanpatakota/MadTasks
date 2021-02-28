import { Component, OnInit, Input, ContentChild, ElementRef,AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.css']
})
export class ParentTwoComponent implements OnInit,AfterContentInit {

  constructor() { }
  
  StudentsStrength = 10;

  @Input('CollegeName') CollegeName:string;
  @Input('CollegeAddress') CollegeAddress :string;
  @ContentChild('CommentsCollege') CommentsCollege:ElementRef;

  ngOnInit(): void {
  }

  ngAfterContentInit(){
      const ef = this.CommentsCollege.nativeElement;
      console.log(ef);
  }

  

}
