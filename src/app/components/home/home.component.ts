import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string;

  constructor( private spotifyservice: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotifyservice.getNewReleases()
      .subscribe( (data: any) => {
        console.log( data);
        this.nuevasCanciones = data;
        this.loading = false;
      }, ( errorServicio ) => {
        console.log(errorServicio);
        this.messageError = errorServicio.error.error.message;
        this.error = errorServicio;
        this.loading = false;
      });
  }

  ngOnInit() {
  }

}
