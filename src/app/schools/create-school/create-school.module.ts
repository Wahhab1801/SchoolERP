import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateSchoolPageRoutingModule } from './create-school-routing.module';

import { CreateSchoolPage } from './create-school.page';

//import {ComponentsModule} from './../../components/components.module';
//import {LogoutButtonComponent} from './../../components/logout-button/logout-button.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  //  LogoutButtonComponent,
    CreateSchoolPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateSchoolPage
      }
    ])
  ],

  declarations: [CreateSchoolPage]
})
export class CreateSchoolPageModule {}
