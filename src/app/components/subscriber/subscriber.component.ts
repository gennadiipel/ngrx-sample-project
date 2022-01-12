import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterSelectors } from 'src/app/store/selectors/counter.selectors';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.sass']
})
export class SubscriberComponent implements OnInit {

  counter$!: Observable<number>

  constructor(
    private _store$: Store
  ) { }

  ngOnInit(): void {
    this.counter$ = this._store$.select(CounterSelectors.selectFeatureCount)
  }

}
