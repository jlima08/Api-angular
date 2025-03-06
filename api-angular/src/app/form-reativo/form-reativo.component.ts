import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-form-reativo',
  templateUrl: './form-reativo.component.html',
  styleUrls: ['./form-reativo.component.scss']
})
export class FormReativoComponent implements OnInit {

  
  formulario!: FormGroup; 
  

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }
  
  ngOnInit() {
    
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(4)]],
      email: [null, [Validators.required, Validators.email]],
      idade: [null, [Validators.required, Validators.maxLength(2), Validators.pattern('^[0-9]*$')]]
    });
    
  }

  
  onSubmit(){
    if(this.formulario.valid){
      console.log(this.formulario)
      this.http.post('http://httpbin.org/post', this.formulario.value)
      .subscribe(() => {
        // this.formulario.reset(); // Reseta o formulário após o envio bem-sucedido
        
      },
      (_erro) => alert ('erradooooo'));
      
    }else{
      alert('invalido')
    }
    
  }
  
  resetar(){
    this.formulario.reset();
  }

  verificaValidTouched(campo: any){

    this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;
    
  }

  cssErro(campo: any){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

 
}
