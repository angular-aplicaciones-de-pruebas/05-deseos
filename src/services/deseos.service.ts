import { Injectable } from "@angular/core";
import { Lista } from "../models/index";



@Injectable()
export class DeseosService{
  listas:Lista[] = [];

  constructor(){
    this.cargarStorage();

  }
  agregarLista(lista){
    this.listas.push(lista);
    this.guardarStorage();
  }
  guardarStorage(){
    localStorage.setItem('data',JSON.stringify(this.listas));

  }
  borrarLista(lista){
    this.listas = this.listas.filter(listaData =>{
      return listaData.id != lista.id;
    });
    this.guardarStorage();
  }
  cargarStorage(){
    if(localStorage.getItem('data')){
      this.listas =JSON.parse(localStorage.getItem('data'));
    }else{
      this.listas = [];
    }
  }

}
