import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Servicio listo');
   }

  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCNPi5iY8m978_NLxqN8WW_yomSLWilj8wvewyDfTrbLGS7Zvt9rggppISIBxVQN5vzy2TyTt_kdheKkN8'
    });

    return this.http.get(url, {headers});
  }

   getNewReleases() {

    /* const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDX1D6eTrTg8zG1JW5zx-HKvklXM8v4XK9HHJ3VO3divU4Z2Taa9auRl6sgt-42yNc2Qfrx9orwZIRLSrg'
    }); */

    return  this.getQuery('browse/new-releases?limit=20')
              .pipe( map ( (data: any ) => data.albums.items ));
  }

  getArtista(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
            .pipe( map( (data: any ) => data.artists.items ));
  }
}
