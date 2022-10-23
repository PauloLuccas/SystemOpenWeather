import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminLoginService } from './services/admin-login.service';
import { AdminLoginRoutingModule } from './admin-login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    AdminLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AdminLoginComponent],
  providers: [AdminLoginService]
})
export class AdminLoginModule { }
