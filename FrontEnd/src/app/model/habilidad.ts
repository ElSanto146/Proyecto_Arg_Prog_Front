
//Primero crear una clase dentro de model (inicia con mayúscula) 
//Esto es el modelo, van los mismos campos que en la entity (entidad)
//Los campos que son fechas ponerlos como string, pero en la base de datos especificar que son date
//Segundo: crear el servicio

export class Habilidad {
    id?: number;
    habilidad : string;
    porcentaje : number;

    constructor(habilidad:string, porcentaje:number){
        this.habilidad = habilidad;
        this.porcentaje = porcentaje;
    }


}
