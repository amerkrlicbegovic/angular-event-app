import { Component } from "@angular/core";
import {Router} from '@angular/router'
@Component({
    template:
    `
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
        <h3>[Create Event From will go here]</h3>
        <br>
        <br>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="submit" class="btn btn-default" (click)="cancle()">Cancel</button>
    </div>
    `
})

export class CreateEventComponent {
    isDirty:boolean =true
    constructor(private router: Router){

    }
    cancle(){
        this.router.navigate(['/events'])
    }
}