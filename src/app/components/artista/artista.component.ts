import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Para saber cual es la ruta activa


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe( params => {
      console.log(params); // Imprime todos los parametros recibidos
      console.log(params['id']); // Imprime el parametro id recibido
    });
   }

}
