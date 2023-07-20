import { createReducer, on } from '@ngrx/store';
import { AboutUsStateInterface } from './about-us-state.interface';
import * as AdminAboutUsActions from './about-us.actions';

export const initialState: AboutUsStateInterface = {
  isLoading: false,
  aboutUs: null,
  error: null,
};

export const aboutUsReducer = createReducer(
  initialState,
  on(AdminAboutUsActions.getAboutUs, state => ({
    ...state,
    isLoading: true,
  })),
  on(AdminAboutUsActions.updateAboutUs, state => ({
    ...state,
    isLoading: true,
  })),
  on(AdminAboutUsActions.getAboutUsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    aboutUs: action.response,
  })),
  on(AdminAboutUsActions.getAboutUsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
