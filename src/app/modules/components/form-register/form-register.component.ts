import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  
  registerForm!: FormGroup;
  submited = false;

  constructor(private fb: FormBuilder){
    this.myForm();
  }
  ngOnInit(): void {
    
  }
  myForm(){
    this.registerForm = this.fb.group({
      name: ['', Validators.compose([Validators.pattern('^[a-zA-Z]+$'), Validators.required, Validators.minLength(3), Validators.maxLength(16)])],
      pLastName: ['', Validators.compose([Validators.pattern('^[a-zA-Z]+$'), Validators.required, Validators.minLength(3), Validators.maxLength(16)])],
      mLastName: ['', Validators.compose([Validators.pattern('^[a-zA-Z]+$'), Validators.required, Validators.minLength(3), Validators.maxLength(16)])],
      fBorn: ['', Validators.required ],
      pEmail: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
      // pEmail: ['', Validators.email],
      // cPhone: ['', Validators.compose([Validators.pattern('^(+56[-]*(9)[0-9][-]*){8}+$'), Validators.required])],
      cPhone: ['', Validators.required ],
      landLine:['', Validators.required ],
      street: ['', Validators.compose([Validators.pattern('^[a-zA-Z]+$'), Validators.required, Validators.minLength(3), Validators.maxLength(16)])],
      eNumber: [null, Validators.required],
      iNumber: [null, Validators.required],
      city: ['', Validators.required],
      commune: ['', Validators.required],
      postal: ['', Validators.required],
      isCheked: [false, Validators.requiredTrue]
    });
    
  }

  form_validation_message = {
    name: [
      {type: 'required', message: 'Nombre es requerido'},
      {type: 'minlength', message: 'el nombre debe contener minimo 3 caracteres'},
      {type: 'maxlength', message: 'el nombre debe contener maximo 15 caracteres'},
      {type: 'pattern', message: 'tu nombre solo debe contener letras'}
    ],
    pLastName: [
      {type: 'required', message: 'El apellido paterno es requerido'},
      {type: 'minlength', message: 'El apellido paterno debe contener minimo 3 caracteres'},
      {type: 'maxlength', message: 'El apellido paterno debe contener maximo 15 caracteres'},
      {type: 'pattern', message: 'Tu apellido paterno solo debe contener letras'}
    ],
    mLastName: [
      {type: 'required', message: 'El apellido materno es requerido'},
      {type: 'minlength', message: 'El apellido materno nombre debe contener minimo 3 caracteres'},
      {type: 'maxlength', message: 'El apellido materno nombre debe contener maximo 15 caracteres'},
      {type: 'pattern', message: 'Tu apellido materno solo debe contener letras'}
    ],
    pEmail: [
      {type: 'required', message: 'el email es requerido'},
      {type: 'pattern', message: 'ingresa un email valido'}
    ],
    street: [
      {type: 'required', message: 'El nombre de la calle es requerido'},
      {type: 'minlength', message: 'El nombre de la calle contener minimo 3 caracteres'},
      {type: 'maxlength', message: 'El nombre de la calle debe contener maximo 15 caracteres'},
      {type: 'pattern', message: 'Solo se aceptan letras'}
    ],
  }
 
//
  onSubmit(){
    this.submited =true;
    if(this.registerForm.valid){
      alert('énvio exitoso');
      return console.table(this.registerForm.value);
      
    }
  }
}
