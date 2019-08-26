import { Component, OnInit } from '@angular/core' //Import component decorator and OnInit
import { EventService } from './shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index'

declare let toastr
//Decorate our class with component decorator
@Component({
    
    template: `
    <div>
        <mat-menu #appMenu="matMenu">
            <button mat-menu-item>Settings</button>
            <button mat-menu-item>Help</button>
        </mat-menu>

        <button mat-icon-button [matMenuTriggerFor]="appMenu">
            <mat-icon>more_vert</mat-icon>
        </button>

        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `,
    styles: [`
        
    `]
})

//Class that contains all of our business logic

//For TypeScript compilation safety, let TypeScript know this component implements ngOnInit
export class EventsListComponent implements OnInit{
    
    events:IEvent[]

    // We still need this constructor even though it's not doing anything in the body, 
    // because this is where our service gets injected!
    constructor(private eventService: EventService, private route:ActivatedRoute){

    }

    // Use component lifecycle hook ngOnInit, 
    // which is called when the component is first being loaded.
    ngOnInit(){
        this.events = this.route.snapshot.data['events']
    }


}