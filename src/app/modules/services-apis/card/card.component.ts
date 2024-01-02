import { Component, Input, OnInit } from '@angular/core';
import { ServiceValue } from 'src/app/core/interfaces/serviceValue.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() artista!: string;
  @Input() serviceData!: ServiceValue;

  constructor() { }

  ngOnInit(): void {
  }

}
