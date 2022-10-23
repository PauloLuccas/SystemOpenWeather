import { Component, Input, OnInit } from '@angular/core';
import { FormValidatorsService } from 'src/app/shared/service/form-validators-service/form-validators.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html'
})
export class AdminLoginComponent implements OnInit {
  
  @Input() email: string;
  @Input() password: string;
  @Input() textErrorEmail: string;
  @Input() textErrorPassword: string;
  @Input() emailError: boolean = false;
  @Input() passwordError: boolean = false;

  constructor(private formValidatorsService: FormValidatorsService) { }

  ngOnInit(): void {
  }

  validateEmail(event: Event) {
    const input = event.target as HTMLInputElement;

    if(!this.formValidatorsService.validadorEmail(input.value)) {
      this.emailError = true;
      this.textErrorEmail = 'Email Inválido.';
    } else {
      this.emailError = false;
    }
  }

  authenticate() {
   if(!this.email) {
    this.emailError = true;
    this.textErrorEmail = 'O campo Email é obrigatório.';
   } else {
    this.emailError = false;
   }

   if(!this.password) {
    this.passwordError = true;
    this.textErrorPassword = 'O campo Senha é obrigatório.';
   } else {
    this.passwordError = false;
   }
  }

}
