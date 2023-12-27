import { Injectable } from '@angular/core';
import { FormValue } from '../interfaces/formValue.interface';

@Injectable({
  providedIn: 'root'
})

export class FormService {
    personArray: FormValue[] = [];

    getFormData(){
      return this.personArray;
    }
    
    setFormData(formData: FormValue){
      this.personArray.push(formData)
    }
}
