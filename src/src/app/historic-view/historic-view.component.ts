import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-historic-view',
  templateUrl: './historic-view.component.html',
  styleUrls: ['./historic-view.component.scss']
})
export class HistoricViewComponent implements OnInit {

  constructor() {
  }

  @Input() title: string;
  @Input() historicEntries: IHistoryEntry[];

  ngOnInit(): void {
  }

}
export interface IImage{
  url: string;
  caption?: string;
}

export interface IHistoryEntry {
  from?: number;
  to?: number;
  title: string;
  body?: string;
  image?: IImage;
}
