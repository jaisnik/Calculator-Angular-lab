import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  inputVal = 0;
  prevCal = 0;
  opr="";
  inVal(value:number){
    if(this.inputVal!=0){
      this.inputVal = this.inputVal*10+value;
    }else{
      this.inputVal = value;
      console.log(this.inputVal);
    }
  }

  clear(){
    this.inputVal = 0;
  }
  operate(operator:string){
    this.prevCal = this.inputVal;
    this.inputVal =0;
    this.opr = operator;
  }

  findAns(){
    if(this.opr == "+"){
      this.inputVal = this.inputVal + this.prevCal;
      this.prevCal = 0;
    }else if(this.opr =="-"){
      this.inputVal = this.inputVal - this.prevCal;
      this.prevCal = 0;
    }else if(this.opr=="*"){
      this.inputVal = this.inputVal * this.prevCal;
      this.prevCal = 0;
    }else if(this.opr == "/"){
      this.inputVal = this.inputVal / this.prevCal;
      this.prevCal = 0;
    }
  }

  calcFactorial(){
    var fact = 1;
    for(var i = this.inputVal;i>0;i--){
      fact=fact*i;
    }
    this.inputVal = fact;
  }

}
