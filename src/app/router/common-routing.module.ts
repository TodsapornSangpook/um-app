import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { PrimengModule } from '../element/primeng/primeng.module';
import { MyHttpInterceptor } from '../interceptors/my-http-interceptor'
import { UserEffects } from '../store/effects/users.effect'

import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { Count1Component } from '../pages/count1/count1.component';
import { Count2Component } from '../pages/count2/count2.component';
import { ChatComponent } from '../pages/chat/chat.component';
import { UsersComponent } from '../pages/users/users.component';

import { UsersService } from '../pages/users/users.service'

import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../store/reducers/counter.reducer';
import { userReducer } from '../store/reducers/users.reducer'

import { NumberPipe } from '../pipe/number.pipe';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'count1', component: Count1Component },
  { path: 'verify', component: Count2Component },
  { path: 'chat', component: ChatComponent },
  { path: 'user', component: UsersComponent },
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
    HttpClientModule,
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot({ count: counterReducer, users: userReducer }),
  ],
  exports: [RouterModule],
  providers: [UsersService, { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },]
})
export class CommonRoutingModule { }
