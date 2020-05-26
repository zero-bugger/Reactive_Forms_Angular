import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {
  
  @Input() control:FormControl;

  constructor() { }

   get errormessage(){
    for (let propertyName in this.control.errors) 
    {
      if (this.control.errors.hasOwnProperty(propertyName) &&  this.control.touched  ) 
      {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
   
}
