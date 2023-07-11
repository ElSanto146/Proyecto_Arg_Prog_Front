import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  persona: persona = new persona("Carlos Exequiel","Cabrera");

  //dale:string = "cualquiera"

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    //this.personaService.getPersona().subscribe(data => {this.persona = data})
    
  }

}
