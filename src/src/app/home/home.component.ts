import { Component, ViewEncapsulation } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  constructor(public translate: TranslateService) { }

  mapOptions: google.maps.MapOptions = {
    center: { lat: 46.729534, lng: 12.223341 },
    zoom : 15,
    clickableIcons: false,
    styles: [
      {
        "featureType": "poi",
        "stylers": [
          { "visibility": "off" }
        ]
      }
    ]
  }

  markers = [
    {label: "1", position: {lat: 46.7348535, lng: 12.2223750}, title: "künstlerisch"},
    {label: "2", position: {lat: 46.7347030, lng: 12.2179040}, title: "geschichtlich"},
    {label: "3", position: {lat: 46.7356064, lng: 12.2228392}, title: "organisatorisch"},
    {label: "4", position: {lat: 46.7352774, lng: 12.2243213}, title: "klanglich"},
    {label: "5", position: {lat: 46.7285359, lng: 12.2237059}, title: "modisch"},
    {label: "6", position: {lat: 46.7239792, lng: 12.2253620}, title: "ausgebildet"}
  ];

}
