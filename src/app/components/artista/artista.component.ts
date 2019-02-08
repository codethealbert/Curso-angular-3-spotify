import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Para saber cual es la ruta activa
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;

  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) {
    this.router.params.subscribe( params => {
      // console.log(params); // Imprime todos los parametros recibidos
      // console.log(params['id']); // Imprime el parametro id recibido
      this.getArtista(params['id']);
    });
   }

   getArtista (id: string) {
     this.loading = true;
    this.spotifyService.getArtista(id)
      .subscribe( artista => {
        console.log(artista);
        this.artista = artista;
        this.loading = false;
      });
   }

}
