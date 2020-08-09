import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) 
    {
      let config = {
        'required': 'Required',
        'invalidEmailAddress': 'Invalid email address',
        'invalidName':'Invalid Name',
        'invalidPhone':'Invalid Phone',
        'invalidCity':'Invalid City',
        'invalidzipcode':'Invalid Zipcode',
        'minlength': `Minimum length ${validatorValue.requiredLength}`
      }; 
  
      return config[validatorName];
    }

  static emailValidator(control){
    if(control.value.match(/^([a-zA-z\d\.-]+)@([A-Za-z\d-]+)\.([a-z]{2,8})$/)){
      return null;
    }
    else{
      return {'invalidEmailAddress' : true}
    }
  }

  static nameValidator(control){
    if(control.value.match(/[A-Za-z]/)){
        return null;
    }
    else{
      return { 'invalidName' : true }
    }
  }

  static phoneValidator(control){
    if(control.value.match(/^[0-9]{10}$/)){
      return null;
    }
    else{
      return { 'invalidPhone' : true}
    }
  }

  static cityValidator(control){
    if(control.value.match(/[A-Za-z]{4}/)){
      return null
    }
    else{
      return { 'invalidCity': true}
    }
  }

  static zipcodeValidator(control){
    if(control.value.match(/[0-9]{5}/)){
        return null
    }
    else{
      return { 'invalidzipcode' : true}
    }
  }
}

