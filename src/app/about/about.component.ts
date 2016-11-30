import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class aboutComponent {
 
    constructor(private location: Location) { }
 
    goBack() {
        this.location.back();
    }
 
}