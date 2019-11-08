import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component implements OnInit {
v1:number=5;
v2:number=6;
somme(x:any,y:any){
let s=0;
s=x+y;
console.log(s);
}
  constructor() { }

  ngOnInit() {
  }

}
