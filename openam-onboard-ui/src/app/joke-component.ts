import { Component } from "@angular/core";

@Component(
    {
        selector : 'joke',
        template : '<h1>A joke</h1>'
    }
)

export class JokeComponent {
    setup : string;
    puchline : string;
}