import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h2>Welcome to Parent Component</h2>
              <p>current count {{Counter}}</p>
              <app-child (countChanged) = "countChangedHandler($event)"></app-child>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'childToParent';

  Counter = 5;

  countChangedHandler(count:number) {
    this.Counter = count;
    console.log(this.Counter);
  }
}
