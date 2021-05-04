import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const moduleProvide = [
  ButtonModule,
  CardModule,
  InputTextModule,
  PasswordModule,
  ToastModule,
  BrowserAnimationsModule,
];

@NgModule({
  imports: [...moduleProvide],
  exports: [...moduleProvide],
})
export class PrimengModule {}
