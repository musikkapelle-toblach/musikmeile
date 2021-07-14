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
    { title: 'künstlerisch', fragment: '1' },
    { title: 'geschichtlich', fragment: '2' },
    { title: 'organisatorisch', fragment: '3' },
    { title: 'klanglich', fragment: '4' },
    { title: 'modisch', fragment: '5' },
    { title: 'ausgebildet', fragment: '6' },
  ];

  constructor(public router: Router, private elementRef: ElementRef) {
  }
}
