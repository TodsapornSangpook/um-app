import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PrimengModule } from '../element/primeng/primeng.module';

import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { Count1Component } from '../pages/count1/count1.component';
import { Count2Component } from '../pages/count2/count2.component';
import { ChatComponent } from '../pages/chat/chat.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../store/reducers/counter.reducer';

import { NumberPipe } from '../pipe/number.pipe';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'count1', component: Count1Component },
  { path: 'verify', component: Count2Component },
  { path: 'chat', component: ChatComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Count1Component,
    Count2Component,
    ChatComponent,
    NumberPipe,
  ],
  imports: [
    RouterModule.forRoot(routes),
    PrimengModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  exports: [RouterModule],
})
export class CommonRoutingModule {}
