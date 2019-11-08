import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {
  age:number=16;
 mineur:string;
  agee(){
if (this.age<18){
return true;
return this.mineur="mineur";

}
else{return false;

}


  }

  constructor() { }

  ngOnInit() {
  }

}
