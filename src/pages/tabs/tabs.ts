import { Component } from '@angular/core';

import { PendientesPage } from '../Pendientes/pendientes.component';
import { TerminadosPage } from '../Terminados/terminados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesPage;
  tab2Root = TerminadosPage;

  constructor() {

  }
}
