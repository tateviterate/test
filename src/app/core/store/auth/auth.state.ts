import { State, StateContext, Selector, Action } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import { Observable, empty } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { AuthStateModel, LoginResponseModel } from './auth.model';
import { Login, LoginSuccess, LoginFailed, Logout, LogoutSuccess, LogoutFailed } from './auth.actions';
import { AuthService } from './auth.service';
import { ConfigService } from './../../services';

declare type ActionFailed = LoginFailed | LogoutFailed;

export const initialState: AuthStateModel = {
    isLoading: false,
    error: null,
    user: {
        CurrencyId: null,
        LanguageId: null,
        Description: null,
        LoginIp: null,
        PartnerId: null,
        ResponseCode: null,
        SessionId: null,
        Token: null,
        UserId: null,
        UserLogin: null,
        UserName: null,
    }
};

@State<AuthStateModel>({
    name: 'auth',
    defaults: initialState
})
export class AuthState {

    @Selector() static error(state: AuthStateModel) { return state.error; }
    @Selector() static isLoading(state: AuthStateModel) { return state.isLoading; }
    @Selector() static user(state: AuthStateModel) { return state.user; }

    constructor(
        private authService: AuthService,
        private config: ConfigService
    ) { }

    @Action(Login)
    login({ dispatch }: StateContext<AuthStateModel>, { payload }: Login) {

        payload.AdminSiteUrl = this.config.appHost;
        
        return this.authService.login(payload).pipe(
            tap(result => {
                dispatch(new LoginSuccess(result));
            }),
            catchError(error => {
                dispatch(new LoginFailed(error));
                return empty()
            })
        )
    }

    @Action(LoginSuccess)
    onLoginSuccess({ dispatch }: StateContext<AuthStateModel>, { user }: LoginSuccess) {
        dispatch(new Navigate(['/admin/dashboard']));
    }

    @Action(Logout)
    logout({ dispatch, patchState }: StateContext<AuthStateModel>, payload: Logout) {
        
        return this.authService.logout().pipe(
            tap(result => {
                dispatch(new LogoutSuccess());
            }),
            catchError(error => {
                dispatch(new LogoutFailed(error));
                return empty()
            })
        )
    }

    @Action(LogoutSuccess)
    onLogoutSuccess({ dispatch }: StateContext<AuthStateModel>) {
        dispatch(new Navigate(['/auth/login']));
    }

    @Action([Login, Logout])
    setLoadingBeforeAction({ patchState }: StateContext<AuthStateModel>) {
        patchState({
            isLoading: true
        })
    }

    @Action([LoginSuccess, LoginFailed, LogoutSuccess, LogoutFailed])
    setLoadingAfterAction({ patchState }: StateContext<AuthStateModel>) {
        patchState({
            isLoading: false
        })
    }

    @Action([LoginSuccess, LogoutSuccess])
    onActionSuccess({ patchState }: StateContext<AuthStateModel>) {
        patchState({ 
            error: initialState.error
        });
    }

    @Action([LoginFailed, LogoutFailed])
    onActionFailure({ patchState }: StateContext<AuthStateModel>, { error }: ActionFailed) {
        patchState({ error });
    }

    @Action(LoginSuccess)
    setUserStateOnSuccess({ patchState }: StateContext<AuthStateModel>, { user }: LoginSuccess) {
        patchState({ user });
    }

    @Action(LogoutSuccess)
    setUserStateOnFailue({ patchState }: StateContext<AuthStateModel>, { user }: LoginSuccess) {
        patchState({ 
            user: initialState.user
        });
    }

}