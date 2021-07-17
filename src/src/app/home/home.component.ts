import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
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
    {label: "1", position: {lat: 46.73487, lng: 12.22256}},
    {label: "2", position: {lat: 46.73494, lng: 12.21832}},
    {label: "3", position: {lat: 46.73544, lng: 12.2227}},
    {label: "4", position: {lat: 46.73551, lng: 12.2238}},
    {label: "5", position: {lat: 46.72844, lng: 12.22377}},
    {label: "6", position: {lat: 46.72335, lng: 12.2253}}
  ];

}
