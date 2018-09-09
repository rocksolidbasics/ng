import { Component } from "@angular/core"

@Component ( {
    selector: 'joke-list',
    template: `
        <div class='card card-block' *ngFor = "let joke of jokes" 
            style='padding:10px;margin:10px;'>
            <h4 class="card-title">{{joke.setup}}</h4>
            <p class="card-text" [hidden]="joke.hide">{{joke.punchline}}</p>
            <div style='display:inline-block;color:white;text-align:right;'>
                <a class="btn btn-primary" (click)="joke.hide = !joke.hide">Tell Me</a>
            </div>
        </div>
    `
} )
export class JokeListComponent {
    jokes: Object[];

    constructor() {
        this.jokes = [
            {
                setup: "Joke 1",
                punchline: "P1",
                hide: true
            },
            {
                setup: "Joke 2",
                punchline: "P2",
                hide: true
            }
        ];
    }
}