import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgxParticlesjsModule } from "ngx-particlesjs";

import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { APP_INTERCEPTORS } from './core/providers';
import { ContainerModule } from './core/components';
import { AppComponent } from './app.component';
import { AuthLayoutComponent, AuthLayoutGuard, AdminLayoutComponent, AdminLayoutGuard } from './layouts';


import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AuthState } from './core/store/auth/auth.state';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule,
    NgxParticlesjsModule,
    NgxsModule.forRoot([
      AuthState
    ]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: 'auth.user'
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    ContainerModule
  ],
  providers: [
    AuthLayoutGuard,
    AdminLayoutGuard,
    ...APP_INTERCEPTORS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
