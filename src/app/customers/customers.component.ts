import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    console.log("fired");
      this.http.get("https://localhost:44309/api/customer/10248").
      subscribe((response)=>{
         console.log(response)
      });
      
  }

}
