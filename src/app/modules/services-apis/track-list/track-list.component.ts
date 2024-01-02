import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceValue } from 'src/app/core/interfaces/serviceValue.interface';
import { SpotifyService } from 'src/app/core/services/spotify.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {

  

  serviceResponse: ServiceValue[] = [];

  artista: any;

  constructor(private router: Router,
              private spotifyService: SpotifyService) { 
                this.artista = this.router.getCurrentNavigation()?.extras.state;
              }

  ngOnInit(): void {
  }

  getTracks() {
    this.spotifyService.getTracksByArtistName(this.artista.artista).subscribe({
      next: (res) => {
        this.serviceResponse = res;
        console.log(res)
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  volver(){
    this.router.navigateByUrl('child-routes/table')
  }

}
