import { Component } from "@angular/core";

@Component(
    {
        selector : 'joke',
        template : `<h4 hidden>{{setup}}</h4><h5>{{punchline}}</h5>`
    }
)

export class JokeComponent {
    setup : string;
    punchline : string;

    constructor() {
        this.setup = "What did the cheese say when it looked in the mirror?";
        this.punchline = "Hello";
    }
}