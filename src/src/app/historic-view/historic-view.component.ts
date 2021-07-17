import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-historic-view',
  templateUrl: './historic-view.component.html',
  styleUrls: ['./historic-view.component.scss']
})
export class HistoricViewComponent {
  @Input() title: string;
  @Input() historicEntries: IHistoryEntry[];

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
