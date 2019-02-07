import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  constructor( private spotifyservice: SpotifyService) {
    this.spotifyservice.getNewReleases()
      .subscribe( (data: any) => {
        console.log( data);
        this.nuevasCanciones = data;
      });
  }

  ngOnInit() {
  }

}
