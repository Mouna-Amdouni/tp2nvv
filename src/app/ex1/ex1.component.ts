import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {
 titre="operation sur un tableau"
  tabnb=[41,18,23,58];
  minimum:number;
  moyenne:number;
  tailletitre:number;
  min(){
for (let i=0;i<this.tabnb.length;i++){

  if(this.tabnb[i]<this.tabnb[i+1]){
   this.minimum=this.tabnb[i];

  }
  else{
    this.minimum=this.tabnb[i+1];
  }
return this.minimum;

}
}
  moy(){
    
let s=0;
for(let i=0;i<this.tabnb.length;i++){
   s+=this.tabnb[i];    
}
return  this.moyenne=s/this.tabnb.length;

}
taille(){
return this.titre.length;

}
actif="true";

  constructor() { }

  ngOnInit() {
  }

}
