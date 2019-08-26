import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'child',
    template: `
    <div>
        <p>I'm a child</p>
        <p>{{stuff.name}}</p>
        <p>{{stuff.description}}</p>
        <button (click)="handleClick()">Click</button>
    </div>
    `
})

export class ChildComponent{

    @Input() stuff:any

    @Output() myEventEmitterFromChild = new EventEmitter();

    handleClick(){
        this.myEventEmitterFromChild.emit('this is data emitted from child!');
    }

}