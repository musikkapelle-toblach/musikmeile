import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'src';

  links;

  isNavbarCollapsed = true;

  toggleNavbarCollapsed(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  constructor(public router: Router, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.translate.get([
      's1_header',
      's2_header',
      's3_header',
      's4_header',
      's5_header',
      's6_header',
    ]).toPromise().then(e => this.createLinks(e));
  }


  private createLinks(e: any) {
    this.links = [
      {title: e.s1_header, fragment: '1'},
      {title: e.s2_header, fragment: '2'},
      {title: e.s3_header, fragment: '3'},
      {title: e.s4_header, fragment: '4'},
      {title: e.s5_header, fragment: '5'},
      {title: e.s6_header, fragment: '6'},
    ];
  }
}
