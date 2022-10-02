import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FirstAssignmentComponent } from './first-assignment/first-assignment.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgifElseComponent } from './ngif-else/ngif-else.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { SecondAssignmentComponent } from './second-assignment/second-assignment.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    StringinterpolationComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    FirstAssignmentComponent,
    NgIfComponent,
    NgifElseComponent,
    NgStyleComponent,
    NgClassComponent,
    NgForComponent,
    SecondAssignmentComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
