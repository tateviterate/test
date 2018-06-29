import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent, AdminLayoutComponent } from './layouts';
import { AuthLayoutGuard, AdminLayoutGuard } from './layouts';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [AuthLayoutGuard],
    children: [
      {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginModule',
        canLoad: [AuthLayoutGuard]
      },
      {
        path: "**",
        redirectTo: "login"
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AdminLayoutGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
        canLoad: [AdminLayoutGuard]
      },
      {
        path: 'players',
        loadChildren: './pages/players/players.module#PlayersModule',
        canLoad: [AdminLayoutGuard]
      },
      {
        path: "**",
        redirectTo: "dashboard"
      }
    ]
  },
  {
    path: "**",
    redirectTo: "admin"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
