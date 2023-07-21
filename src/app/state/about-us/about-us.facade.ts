import { Injectable } from '@angular/core';
import { AppStateInterface } from '@core/types/app-state.interface';
import { Store } from '@ngrx/store';
import { Html } from '@shared/interfaces';
import { getAboutUs, updateAboutUs } from '@state/about-us/about-us.actions';
import {
  selectAboutUs,
  selectAboutUsError,
  selectIsLoadingAboutUs,
} from './about-us.selector';

@Injectable()
export class AboutUsFacade {
  aboutUs$ = this.store.select(selectAboutUs);
  isLoading$ = this.store.select(selectIsLoadingAboutUs);
  error$ = this.store.select(selectAboutUsError);

  constructor(private store: Store<AppStateInterface>) {}

  dispatchGetAboutUs(): void {
    this.store.dispatch(getAboutUs());
  }

  dispatchEditAboutUs(dto: Html): void {
    this.store.dispatch(updateAboutUs({ dto }));
  }
}
