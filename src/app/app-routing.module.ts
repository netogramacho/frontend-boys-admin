import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UserModule),
  },
  {
    path: 'user/:id',
    loadChildren: () =>
      import('./pages/user-details/user-details.module').then((m) => m.UserDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
