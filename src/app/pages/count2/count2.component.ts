import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-count2',
  templateUrl: './count2.component.html',
  styleUrls: ['./count2.component.css'],
})
export class Count2Component implements OnInit {
  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {}
}
