import { Component } from '@angular/core';
import {SpinnerComponent} from "./spinner/spinner.component";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  metaData = [['1', '2', '3', '4'], ['5', '6', '7', '8'], ['9', '0', '+', '-'], ['/', '*', '.', '=']];
  constructor() {
    this.showCalc = false
    this.spin = false
    this.btnText = "show"
  }

  inputValue = ''
  spin:boolean
  showCalc:boolean
  btnText:string;

  f(){
    if(!this.showCalc)
      this.btnText = "hide"

    else
      this.btnText  = "show"

    this.showCalc = !this.showCalc
  }


  showUnShowCalculator(){

    if(!this.showCalc)
      this.btnText = "hide"

    else
      this.btnText  = "show"


    this.spin = true

    setTimeout(()=>{


      this.spin = false
      //this.f()
      this.showCalc = !this.showCalc

    },2000)


  }

  HandleButtonClick(cell: string, btn: HTMLButtonElement) {
    if (cell == '=') {
      this.inputValue = eval(this.inputValue);
    } else {
      this.inputValue += cell;

    }
    btn.style.backgroundColor='red';

    setTimeout(()=>{

      btn.style.backgroundColor='';

    },500);
  }


}
