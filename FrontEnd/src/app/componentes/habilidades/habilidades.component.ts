
//Se van a implementar los métodos cargarHabilidad para que se vean en el html y el método delete
//Los otros se ejecutaran en otro componente que será llamado para editar o crear
//Cuarto: ir al HTML de este componente



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicio/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: Habilidad[] = [];

  constructor(private sHabilidad: HabilidadService, private router: Router) { }

  ngOnInit(): void {
    this.cargarHabilidad();
  }

  cargarHabilidad(): void {
    this.sHabilidad.ver().subscribe(data => { this.habilidades = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sHabilidad.delete(id).subscribe(data => {
        this.cargarHabilidad();
        //this.router.navigate(['']);
      }, err =>{
        alert("No se pudo eliminar la habilidad");
      });
    }
  }

  editar(id?:number){
    
  }



}
