import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolsPage } from './schools.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolsPage
  },
  {
    path: 'create-school',
    loadChildren: () => import('./create-school/create-school.module').then( m => m.CreateSchoolPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolsPageRoutingModule {}
