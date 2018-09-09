import { Component, Output } from '@angular/core'
import { EventEmitter } from '@angular/core';
import { Joke } from 'app/joke-component';

@Component( {
    selector: 'joke-form',
    template: `
        <div class="card card-block">
            <h4 class="card-title"></h4>
            <div class="form-group">
                <!-- Using 'Template reference variables (only available inside the template) -->
                <input type="text" class="form-control" placeholder="Enter the setup" #tSetup/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter the punchline" #tPunchline/>
            </div>
            <button type="button" class="btn btn-primary" (click)="createJoke(tSetup.value, tPunchline.value)">Create</button>
        </div>
    `
})
export class JokeFormComponent {
    //Declaration for output usage with this selector: (joke-created) = "addJoke($event)"
    @Output()
    jokeCreated = new EventEmitter<Joke>();

    createJoke(se:String, pl:String) {
        this.jokeCreated.emit(new Joke(se, pl));
    }
}