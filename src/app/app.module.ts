import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';
//providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DeseosService } from '../services/deseos.service';

//Componentes
import { PendientesPage } from '../pages/Pendientes/pendientes.component';
import { TerminadosPage } from '../pages/Terminados/terminados.component';
import { AgregarPage } from '../pages/agregar/agregar.component';
//Pipes
import { FiltroCompletadoPipe } from '../pipes/filtro-completado/filtro-completado';
import { ListasComponent } from '../components/lista.component';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    FiltroCompletadoPipe,
    ListasComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
