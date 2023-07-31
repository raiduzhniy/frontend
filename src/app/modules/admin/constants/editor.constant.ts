import { AngularEditorConfig } from '@kolkov/angular-editor';

export const TEXT_EDITOR_CONFIG: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: '15rem',
  minHeight: '5rem',
  defaultParagraphSeparator: 'p',
  defaultFontName: 'Roboto',
  toolbarHiddenButtons: [
    ['subscript', 'superscript'],
    ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
    ['insertImage', 'insertVideo'],
    ['toggleEditorMode'],
    ['fontName'],
  ],
};
