import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormValue } from 'src/app/core/interfaces/formValue.interface';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  personData: any[] = [];

  constructor(private router: Router,
              private formService: FormService) { }

  ngOnInit(): void {
    this.personData = this.formService.getFormData();
    console.log(this.personData)
  }

  volver(){
    this.router.navigateByUrl('');
  }

  favortiteArtistTracks(artista: string){
    this.router.navigateByUrl('child-routes/track-list', { state: { artista: artista } });
  }

}
