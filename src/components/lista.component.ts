import { Component, Input } from "@angular/core";
import { DeseosService } from "../services/deseos.service";
import { NavController, AlertController, ItemSliding } from "ionic-angular";
import { Lista } from "../models/index";
import { AgregarPage } from "../pages/agregar/agregar.component";

@Component({
  selector:'app-listas',
  templateUrl:'lista.component.html'
})
export class ListasComponent{
  @Input() terminada:boolean = false;

  constructor(public deseosService: DeseosService,
  private navCtrl:NavController,private alertCtrl:AlertController) {

  }
  ListaSeleccionada(lista:Lista){
    this.navCtrl.push(AgregarPage,{
      titulo: lista.titulo,
      lista : lista
    });

  }
  borrarLista(lista){
    this.deseosService.borrarLista(lista);
  }
  editarLista(lista:Lista,slidingItem:ItemSliding){
    slidingItem.close();
    const alerta = this.alertCtrl.create({
      title: 'Editar lista',
      message: 'Edite el nombre de la lista',
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Nombre de la lista',
          value: lista.titulo
        },
      ],
      buttons:[
        {
          text:'Cancelar'
        },
        {
          text:'Modificar',
          handler: data => {
            if(data.titulo.length===0){
              return;
            }
              lista.titulo = data.titulo
              this.deseosService.guardarStorage();
          }
        }
       ]
    });
    alerta.present();

  }

}
