import { Component } from "@angular/core";
import { Lista } from "../../models/index";
import { DeseosService } from "../../services/deseos.service";

@Component({
  selector:'pages-teminados',
  templateUrl:'terminados.component.html'
})
export class TerminadosPage{

  constructor(public deseosService: DeseosService) {

  }
  ListaSeleccionada(lista:Lista){
    console.log(lista);

  }

}
