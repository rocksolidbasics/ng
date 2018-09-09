import { Component, Input } from "@angular/core";

@Component(
    {
        selector : 'joke',
        template : `<h4 class="card-title">{{data.setup}}</h4>
        <p class="card-text" [hidden]="data.hide">{{data.punchline}}</p>
        <div style='display:inline-block;color:white;text-align:right;'>
            <a class="btn btn-primary" (click)="data.hide = !data.hide">Tell Me</a>
        </div>`
    }
)
export class JokeComponent {
    @Input('joke')
    data: Joke;
}

export class Joke {
    public setup: String;
    public punchline: String;
    public hide: boolean;

    constructor(setup: String, p:String) {
        this.setup = setup;
        this.punchline = p;
        this.hide = true;
    }
}