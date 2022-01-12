import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CounterActions } from 'src/app/store/actions/counter.actions';
import { AppState } from 'src/app/store/app.state';
import { CounterSelectors } from 'src/app/store/selectors/counter.selectors';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.sass']
})
export class ActionComponent implements OnInit, OnDestroy {


  stepSubscription!: Subscription

  step: number = 1

  constructor(
    private _store$: Store<AppState>
  ) { }

  ngOnInit(): void {
    
    this.stepSubscription = this._store$.select(CounterSelectors.selectFeatureStep)
    .subscribe((step: number) => {
      this.step = step
    })
  }

  ngOnDestroy(): void {
      this.stepSubscription.unsubscribe()
  }

  increase(): void {
    this._store$.dispatch(CounterActions.increaseCount())
  }

  decrease(): void {
    this._store$.dispatch(CounterActions.decreaseCount())

  }

  updateStep() {
    this._store$.dispatch(CounterActions.setStep({step: this.step}))
  }

}
