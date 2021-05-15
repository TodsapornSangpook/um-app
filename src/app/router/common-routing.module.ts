import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from '../element/primeng/primeng.module';

import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { Count1Component } from '../pages/count1/count1.component';
import { Count2Component } from '../pages/count2/count2.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../store/reducers/counter.reducer';

import { NumberPipe } from '../pipe/number.pipe';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'count1', component: Count1Component },
  { path: 'count2', component: Count2Component },
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Count1Component,
    Count2Component,
    NumberPipe,
  ],
  imports: [
    RouterModule.forRoot(routes),
    PrimengModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  exports: [RouterModule],
})
export class CommonRoutingModule {}
