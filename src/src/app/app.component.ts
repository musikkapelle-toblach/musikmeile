import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'src';

  links = [
    { title: 'stage1', fragment: 'stage1' },
    { title: 'stage2', fragment: 'stage2' },
    { title: 'stage3', fragment: 'stage3' },
    { title: 'stage4', fragment: 'stage4' },
    { title: 'stage5', fragment: 'stage5' },
    { title: 'stage6', fragment: 'stage6' },
  ];

  constructor(public router: Router) {
  }
}
