import { Component } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state:String[]=['Gujarat','UttarPradesh'];
    
  customerform:FormGroup;
  constructor(private formbuilder:FormBuilder){
        this.customerform=this.formbuilder.group(
        {
            name:['',[Validators.required,ValidationService.nameValidator]],
            email:['',[Validators.required,ValidationService.emailValidator]],
            phone:['',[Validators.required,ValidationService.phoneValidator]],
            city:['',[Validators.required,ValidationService.cityValidator]],
            zipcode:['',[Validators.required,ValidationService.zipcodeValidator]],
            state:['',[Validators.required]],
            comments:['',[Validators.minLength(30)]]



        }
        );
  }
 


}
