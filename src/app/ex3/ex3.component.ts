import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {
titre="operation de calcul";

entrer(event:any){

console.log ((<HTMLInputElement>event.target).value);

}
carr( x:any){
let p:number=x*x;
return p;
}
valeur2(){
console.log((<HTMLInputElement>event.target).value);

}
somme(x:any,y:any){



 console.log(x+y);
}
  constructor() { }

  ngOnInit() {
  }

}
