import { createAction, props } from '@ngrx/store';
import { Html } from '@shared/interfaces';

const IDENTIFIER = 'About Us';

export const getAboutUs = createAction(`[${IDENTIFIER}] Get About Us`);

export const updateAboutUs = createAction(
  `[${IDENTIFIER}] Update About Us`,
  props<{ dto: Html }>()
);

export const getAboutUsSuccess = createAction(
  `[${IDENTIFIER}] Get About Us Success`,
  props<{ response: Html }>()
);

export const getAboutUsFailure = createAction(
  `[${IDENTIFIER}] Get About Us Failure`,
  props<{ error: string }>()
);
