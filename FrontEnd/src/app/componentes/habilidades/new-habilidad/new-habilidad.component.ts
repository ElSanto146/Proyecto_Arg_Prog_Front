import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicio/habilidad.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent {
  form: FormGroup;
  habilidad: "" = "";
  porcentaje: 0 = 0;

 

  constructor(private sHabilidad: HabilidadService, private formBuilder: FormBuilder,  private router: Router) {
    this.form = this.formBuilder.group({
      habilidad: ['',[Validators.required]],
      porcentaje:['',[Validators.required, Validators.min(1), Validators.max(100)]],
    })
  }

  //declarar validaciones
  get Habilidad(){
    return this.form.get("habilidad");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  //Validaciones
  get HabilidadValid(){
    return this.Habilidad?.touched && !this.Habilidad.valid; 
  }

  get PorcentajeValid(){
    return this.Porcentaje?.touched && !this.Porcentaje.valid; 
  }  


  onCreate(): void{
    const habi = new Habilidad(this.habilidad, this.porcentaje); //importa Habilidad del model
    this.sHabilidad.save(habi).subscribe(data=>{
      alert("Habilidad Creada");
      this.router.navigate(['/inicio']);
    }, err =>{
      alert("Falló la creación, intentenlo nuevamente");
      this.form.reset();
    })

  }

}



 /* constructor( ) {
    this.form = this.formBuilder.group({
      habilidad: ['',[Validators.required]],
      porcentaje:['',[Validators.required, Validators.min(0), Validators.max(100)]],
    })
  }


  //declarar validaciones
  get Habilidad(){
    return this.form.get("habilidad");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  //Validaciones
  get HabilidadValid(){
    return this.Habilidad?.touched && !this.Habilidad.valid; 
  }

  get PorcentajeValid(){
    return this.Porcentaje?.touched && !this.Porcentaje.valid; 
  }  
    

  onCreate1(): void{
    const habi = new Habilidad(this.habilidad, this.porcentaje);
    this.sHabilidad.save(habi).subscribe (info=>{
      alert("Habilidad Creada");
      window.location.reload();
    }, err =>{
      alert("Falló la creación de la nueva habilidad");
      this.form.reset();
    }); 
  }

}




}*/
