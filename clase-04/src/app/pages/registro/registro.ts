import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  // nombre = new FormControl('');
  // apellido = new FormControl('');
  // correo = new FormControl('');
  // contrasenia = new FormControl('');
  // repetirContrasenia = new FormControl('');



  
  formulario = new FormGroup({
    nombre : new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(3),]),
    apellido : new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(3)]),
    correo : new FormControl('',[Validators.required,Validators.email]),
    contrasenia : new FormControl('',[Validators.required,Validators.minLength(8)]),
    repetirContrasenia : new FormControl('',[Validators.required,Validators.minLength(8),this.validarContrasenias]),
  })

  ngOnInit(){
    this.formulario.valueChanges.subscribe((value)=>{
      console.log(value);
    })

    this.formulario.statusChanges.subscribe((algo) =>{
      console.log(algo);
    })

  }

  
  // login = new FormGroup({
  //   correo:  new FormGroup(''),
  //   contraseña: new FormGroup(''),


  // })

  enviarFormulario(){
    console.log(this.formulario);
    console.log(this.formulario.value);
    console.log(this.formulario.get("nombre"));
  }

  validarContrasenias(control: AbstractControl):ValidationErrors | null { 
    const error = {iguales:false}

    if(!control.value){
      return error;
    }
    //para obtener el dato de la contraseña para validar si son iguales
    const contrasenia = control.parent?.get('contrasenia')?.value;

    if(!contrasenia){
      return error;
    }

    if(control.value === contrasenia){
      return null;
    }else{
      return error;
    }
  }

}
