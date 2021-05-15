import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {
  increment,
  decrement,
  reset,
} from '../../store/actions/counter.actions';

@Component({
  selector: 'app-count1',
  templateUrl: './count1.component.html',
  styleUrls: ['./count1.component.css'],
})
export class Count1Component implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>, private router: Router) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {}

  onClickIncrease() {
    console.log('increase');
    this.store.dispatch(increment({ value: 2 }));
  }

  onClickDecrease() {
    console.log('decrease');
    this.store.dispatch(decrement());
  }

  onClickReset() {
    console.log('reset');
    this.store.dispatch(reset());
  }

  onClickGoto() {
    this.router.navigate(['/count2']);
  }
}
