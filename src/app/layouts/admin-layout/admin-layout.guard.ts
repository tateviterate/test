import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Params } from '@angular/router';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import { Observable } from 'rxjs';
import { AuthState } from './../../core/store/auth';

@Injectable()

export class AdminLayoutGuard implements CanActivate, CanLoad {

    constructor(
        private store: Store
    ) { }

    private isTokenExist() : Observable<boolean> | boolean{
        const { Token } = this.store.selectSnapshot(AuthState.user);
        return Token != null;
    }

    private navigatePage() {
        this.store.dispatch(new Navigate(['auth/login']))
    }

    canActivate(): Observable<boolean> | boolean {

        if (this.isTokenExist()) {
            return true;
        }
        
        this.navigatePage();
        return false;
    }

    canLoad(): Observable<boolean> | boolean {

        if (this.isTokenExist()) {
            return true;
        }

        this.navigatePage();

        return false;
    }
}

// this.router.navigate(['login'], { queryParams: { returnTo: state.url } });