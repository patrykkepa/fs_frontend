import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ForNotAuthGuard } from './core/guards/for-not-auth.guard';
import { ForAuthGuard } from './core/guards/for-auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/feature/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/feature/auth-shell/auth.module').then((m) => m.AuthModule),
    canActivate: [ForNotAuthGuard]
  },
  {
    path: 'example',
    loadChildren: () =>
      import('./example/features/example-shell/example.module').then((m) => m.ExampleModule),
    canActivate: [ForAuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
