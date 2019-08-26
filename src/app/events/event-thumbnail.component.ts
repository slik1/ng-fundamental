import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{event?.name | uppercase}}</h2>
            <div>Date: {{event?.date | date:'shortDate'}}</div>
            <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>

            <div>Price: {{event?.price | currency:'USD'}}</div>

            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>

            <div *ngIf="event?.onlineUrl">
                Online URL: {{event?.onlineUrl}}
            </div>

            <button class="btn btn-primary" (click)="handleClick()">Click me!</button>
        </div>`,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .pad-left { margin-left: 40px; }
        .well div { color: #bbb; }
        .thumbnail { min-height: 260px; }
    `]
})

export class EventThumbnailComponent{
    @Input() event:IEvent
    @Output() myClickEvent = new EventEmitter()


    someProperty:any = "a value from the child component!"

    coolData = {
        id: 1,
        name: 'Awesome data name',
        address: '420 Some Street'
    }

    handleClick(){
        this.myClickEvent.emit(this.coolData);
    }

    // getStartTimeClass(){
    //     const isEarlyStart = this.event && this.event.time === '8:00 am';
    //     return {green: isEarlyStart, bold: isEarlyStart}
    // }


    getStartTimeStyle():any{
        if(this.event && this.event.time === '8:00 am'){
            return {color: '#003300', 'font-weight':'bold'}
        }else{
            return {}
        }
        
        
    }


    logFoo(){
        console.log('Foo!');
    }
}