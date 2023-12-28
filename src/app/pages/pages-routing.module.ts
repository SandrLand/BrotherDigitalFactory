import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './abnormal/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [

      {
        path: 'abnormal',
        loadChildren: () =>
          import('./abnormal/abnormal.module').then((m) => m.AbnormalModule),
      },
      { path: 'systemset',
      loadChildren: () =>
        import('./systemset/systemset.module').then(m => m.SystemsetModule) },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },

    ],

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
