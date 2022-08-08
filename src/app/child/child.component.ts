import { Component, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<style>
              button {
                margin-right: 40px;
              }
            </style>
  <h2>Child Component</h2>
  <button (click)="increment()">Increment</button>
  <button (click)="decrement()">Decrement</button>
  click count is {{count}}`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  count:number = 0;
  @Output() countChanged:EventEmitter<number> = new EventEmitter();

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChanged.emit(this.count);

  }

}
