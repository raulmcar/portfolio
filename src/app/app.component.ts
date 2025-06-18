import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaPresentacionComponent } from './components/tarjeta-presentacion/tarjeta-presentacion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactButtonsComponent } from './contact-buttons/contact-buttons.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { TecnologiasComponent } from "./tecnologias/tecnologias.component";
import { CinesKinoComponent } from './cines-kino/cines-kino.component';
import { ExperienciaComponent } from "./experiencia/experiencia.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarjetaPresentacionComponent, NavbarComponent, ContactButtonsComponent, SobreMiComponent,
    TecnologiasComponent, CinesKinoComponent, ExperienciaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio-angular';
}
