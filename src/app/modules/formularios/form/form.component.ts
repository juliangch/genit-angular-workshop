import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form = new UntypedFormGroup({
    nombre: new UntypedFormControl(null, Validators.required),
    apellido: new UntypedFormControl(null, Validators.required),
    artista: new UntypedFormControl(null, Validators.required)
  });
  

  constructor(private formService: FormService,
              private router: Router) {}

  ngOnInit() {
  }

  agregarPersona(){
    this.formService.setFormData(this.form.value);
    this.form.reset();
  }

  volver(){
    this.router.navigateByUrl('');
  }

}
