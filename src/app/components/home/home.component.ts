import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  constructor( private spotifiservice: SpotifyService) {
    this.spotifiservice.getNewReleases()
      .subscribe( (data: any) => {
        console.log( data.albums.items);
        this.nuevasCanciones = data.albums.items;
      });
  }

  ngOnInit() {
  }

}
