import { Component } from '@angular/core';
import {MenuInfo} from "./calculator/components/header/MenuInfo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  availablePages = ["home","about","calc"]
  active = this.availablePages[0]
  menuData = [{header:"home",href:"home",isActive:true,icon:"fa-home"},
    {header:"calculator",href:"calc",icon:"fa-calculator"},{header:"about",href:"about"}]


  menuData2 = [
    {header:"calculator",href:"calc"}]

  HandleMenuChange($event: MenuInfo) {

    this.active = $event.href
    this.menuData.forEach(item =>{
      item.isActive = this.active == item.href
    })


  }
}
