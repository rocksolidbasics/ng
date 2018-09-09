import { Component } from "@angular/core"
import { Joke } from "app/joke-component";
import { JokeFormComponent } from './joke-form-component'

@Component ( {
    selector: 'joke-list',
    template: `
        <div style="width:50%;padding:10px;">
            <joke-form (jokeCreated) = "addJoke($event)"></joke-form>
        </div>
        <div class='card card-block' *ngFor = "let j of jokes" 
            style='padding:10px;margin:10px;'>
            <joke [joke]="j"></joke>
        </div>
    `
} )
export class JokeListComponent {
    jokes: Joke[];

    constructor() {
        this.jokes = [
            new Joke("Joke 1","P1"),
            new Joke("Joke 2", "P2")
        ];
    }

    addJoke(jokeEvent) {
        this.jokes.unshift(jokeEvent);
    }
}