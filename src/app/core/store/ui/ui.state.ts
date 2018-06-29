import { State, StateContext, Selector, Action } from '@ngxs/store';
import { Observable, empty } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { UIStateModel } from './ui.model';
import { Language, LanguageSuccess, LanguageFailed} from './ui.actions';

export const initialState: UIStateModel = {
    isLoading: false,
    lang: null
};

@State<UIStateModel>({
    name: 'ui',
    defaults: initialState
})
export class UIState {

   

}