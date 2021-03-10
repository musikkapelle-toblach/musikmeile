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
    { title: 'Station 1', fragment: 'stage1' },
    { title: 'Station 2', fragment: 'stage2' },
    { title: 'Station 3', fragment: 'stage3' },
    { title: 'Station 4', fragment: 'stage4' },
    { title: 'Station 5', fragment: 'stage5' },
    { title: 'Station 6', fragment: 'stage6' },
  ];

  constructor(public router: Router, private elementRef: ElementRef) {
  }
}
