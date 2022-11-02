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
import { BetterDirectiveDirective } from './better-directive/better-directive.directive';
import { HostListnerDirective } from './host-listner/host-listner.directive';
import { HostBindingDirective } from './host-binding/host-binding.directive';
import { DynamicDirectiveBindingDirective } from './dynamic_directive-binding/dynamic-directive-binding.directive';
import { UnlessDirectiveDirective } from './unless-directive/unless-directive.directive';
import { TestingStructuralDirectiveComponent } from './testing-structural-directive/testing-structural-directive.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CounterService } from './counter.service';

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
    BasicHighlightDirective,
    BetterDirectiveDirective,
    HostListnerDirective,
    HostBindingDirective,
    DynamicDirectiveBindingDirective,
    UnlessDirectiveDirective,
    TestingStructuralDirectiveComponent,
    NgSwitchComponent,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //Now we can access these services application-wide even in another service
  providers: [AccountsService, LoggingService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
