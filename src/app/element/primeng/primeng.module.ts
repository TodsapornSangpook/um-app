import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

const moduleProvide = [
  ButtonModule,
  CardModule,
  InputTextModule,
  PasswordModule,
];

@NgModule({
  imports: [...moduleProvide],
  exports: [...moduleProvide],
})
export class PrimengModule {}
