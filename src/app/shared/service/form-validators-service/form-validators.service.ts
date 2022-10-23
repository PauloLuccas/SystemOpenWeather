import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorsService {

  constructor() { }

  validadorEmail(value: string): boolean {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(value);
  }
}
