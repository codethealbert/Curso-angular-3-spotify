import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private hhtp: HttpClient) {
    console.log('Servicio listo');
   }

   getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAEzb7pHnCQGP2OBWHK97Ss3iQsosocbwi38tG50PcsO19L3HZGTLaNnZaGIQVNuxC0tAKF7Ukysr096yo'
    });

    return this.hhtp.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
}
