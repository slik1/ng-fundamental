import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';




import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  // EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  EventResolver
} from './events/index'


import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component'

import { 
  JQ_TOKEN, 
  TOASTR_TOKEN, 
  Toastr, 
  CollapsibleWellComponent, 
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index'


import { appRoutes } from './routes'
import { Error404Component} from './errors/404.component'


import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';


import { AuthService } from './user/auth.service'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from './material-module';
import { CoolTableComponent } from './cool-table/cool-table.component'

import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {HttpClientModule} from '@angular/common/http';


import {CdkDetailRowDirective} from './cool-table/cdk-detail-row.directive';


let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    ParentComponent,
    ChildComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    CoolTableComponent,
    CdkDetailRowDirective,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  providers: [
    EventService, 
    { provide: TOASTR_TOKEN, useValue: toastr}, 
    { provide: JQ_TOKEN, useValue: jQuery}, 
    // EventRouteActivator,
    EventResolver,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event, are you sure you want to cancel?')
  }else{
    return true
  }
}