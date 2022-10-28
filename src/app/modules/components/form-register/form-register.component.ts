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
      name: ['', Validators.required],
      pLastName: ['', Validators.required],
      mLastName: ['', Validators.required],
      fBorn: ['', Validators.required ],
      pEmail: ['', Validators.email],
      cPhone: ['', Validators.required],
      landLine:['', Validators.required ],
      street: ['', Validators.required],
      eNumber: ['', Validators.required],
      iNumber: ['', Validators.required],
      city: ['', Validators.required],
      commune: ['', Validators.required],
      postal: ['', Validators.required],
      isCheked: [false, Validators.requiredTrue]
    });
  }
//
  onSubmit(){
    this.submited =true;
    if(this.registerForm.valid){
      alert('énvio exitoso');
      console.table(this.registerForm.value);
    }
  }
}
