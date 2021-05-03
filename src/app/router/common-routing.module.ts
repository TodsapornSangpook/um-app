import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { PrimengModule } from '../element/primeng/primeng.module';

const routes: Routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forRoot(routes), PrimengModule],
  exports: [RouterModule],
})
export class CommonRoutingModule {}
