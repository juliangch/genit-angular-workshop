import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

type tokenResponse = {
  'access_token': string,
  'token_type': string,
  'expires_in': number
}

const credentials = {
  grant_type: 'client_credentials',
  client_id: '1a8b46cb2601451a89986c9d20e29b1f',
  client_secret: '229340a79da7465aadd475c3641cc571',
}

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private headers = {}

  constructor(private httpClient: HttpClient) {
    this.getToken()
  }

  private getToken() {
    this.httpClient.post<tokenResponse>('https://accounts.spotify.com/api/token',
    `grant_type=${credentials.grant_type}&client_id=${credentials.client_id}&client_secret=${credentials.client_secret}`,
    {
      headers: {
        ...this.headers,
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).subscribe({
      next: ({token_type, access_token}) => this.headers = {...this.headers,  'Authorization': `${token_type} ${access_token}` },
    })
  }

  public getGenres() {
    return this.httpClient.get<{genres: string[]}>('https://api.spotify.com/v1/recommendations/available-genre-seeds', {headers: this.headers})
  }

  public getTracksByArtistName(name: string) {
    return this.httpClient.get(`https://api.spotify.com/v1/search?q=${name}&type=track`, {headers: this.headers}).pipe(
      map(({ tracks }: any) => tracks.items.filter((item: any) => item.type === 'track').map(({external_urls, name}: any) => ({name, url: external_urls.spotify})))
      )
  }

}
