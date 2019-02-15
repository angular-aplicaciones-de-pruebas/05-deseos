import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/index';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
  selector:'pages-pendientes',
  templateUrl:'pendientes.component.html'
})
export class PendientesPage{
  constructor(public deseosService: DeseosService,
              private navCtrl: NavController,
            public alertCtrl: AlertController) {

  }
  agregarLista(){
    const alerta = this.alertCtrl.create({
      title: 'Nueva lista',
      message: 'Ingrese el nombre de nueva lista',
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Nombre de la lista'
        },
      ],
      buttons:[
        {
          text:'Cancelar'
        },
        {
          text:'Agregar',
          handler: data => {
            if(data.titulo.length===0){
              return;
            }
            this.navCtrl.push(AgregarPage,{
              titulo: data.titulo
            });
          }
        }
       ]
    });
    alerta.present();
  }

}
