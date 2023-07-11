import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicio/habilidad.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent {
form: FormGroup<any>;
habili!: Habilidad; 

porcentaje: 0 = 0;
habilidad?: Habilidad;


constructor(private sHabilidad: HabilidadService, private formBuilder: FormBuilder, private router: Router, private activatedRouter: ActivatedRoute){
  this.form = this.formBuilder.group({
    habilidad: ['',[Validators.required]],
    porcentaje: ['',[Validators.required, Validators.min(1), Validators.max(100)]],
  })
}

ngOnInit(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.sHabilidad.detalle(id).subscribe(
    data => {
      this.habilidad = data;
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    }
  )
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

onEdit(){
  const id = this.activatedRouter.snapshot.params['id'];
  this.sHabilidad.editar(id, this.habili).subscribe(
    data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar la Habilidad");
      this.router.navigate(['']);
    }
  )
}




}
