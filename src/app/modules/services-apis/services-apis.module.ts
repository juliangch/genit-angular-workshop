import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { TrackListComponent } from './track-list/track-list.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    TableComponent,
    TrackListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})

export class ServicesApisModule { }
