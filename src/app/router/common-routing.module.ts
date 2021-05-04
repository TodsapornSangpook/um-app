import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from '../pages/login/login.component';
import { PrimengModule } from '../element/primeng/primeng.module';

const routes: Routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forRoot(routes), PrimengModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class CommonRoutingModule {}
