import { Component, OnInit } from '@angular/core';
import { Swipe } from  '../../../assets/js/swipe.js';
import {  } from 'bootstrap';



@Component({
  selector: 'app-slieshow',
  templateUrl: './slieshow.component.html',
  styleUrls: ['./slieshow.component.css']
})
export class SlieshowComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

}
onload = function(){
console.log("aa");

console.log(Swipe);
console.log(document.getElementById('slider'));
console.log(Swipe(document.getElementById('slider')));
var mySwipe = Swipe(document.getElementById('slider'));
}