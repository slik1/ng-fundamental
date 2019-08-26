import { Component, Output } from '@angular/core'

@Component({
    selector: 'parent',
    template: `
    <div>
        <h1>I'm the parent!</h1>
        <child (myEventEmitterFromChild)="handle($event)" [stuff]="dataStuff"></child>
    </div>
    `
})

export class ParentComponent{
    dataStuff = {
        id: 1,
        name: 'First data',
        description: 'This is the first data object'
    }

    handle(data){
        console.log(data);
    }



}



