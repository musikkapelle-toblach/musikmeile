import {AfterViewInit, Component, Directive, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  title = 'src';

  links = [
    { title: 'Station 1', fragment: '1' },
    { title: 'Station 2', fragment: '2' },
    { title: 'Station 3', fragment: '3' },
    { title: 'Station 4', fragment: '4' },
    { title: 'Station 5', fragment: '5' },
    { title: 'Station 6', fragment: '6' },
  ];

  constructor(public router: Router, private elementRef: ElementRef) {
  }
}
