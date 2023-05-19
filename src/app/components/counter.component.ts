import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../ngrx/actions';
import { counterSelector } from '../ngrx/selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter: Observable<number>;

  constructor(public store: Store<{count:number}>){
this.counter = this.store.select(counterSelector)
  }

  increment(){
this.store.dispatch(increment())
  }

  decrement(){
this.store.dispatch(decrement())
  }

  reset(){
this.store.dispatch(reset())
  }

}
