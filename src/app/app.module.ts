import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SpinnerComponent } from './calculator/spinner/spinner.component';
import { HomeComponent } from './calculator/pages/home/home.component';
import { AboutComponent } from './calculator/pages/about/about.component';
import { CalcComponent } from './calculator/pages/calc/calc.component';
import { HeaderComponent } from './calculator/components/header/header.component';
import { FooterComponent } from './calculator/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    SpinnerComponent,
    HomeComponent,
    AboutComponent,
    CalcComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
