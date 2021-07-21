import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  links = [
    {title: 's1_header', fragment: '1'},
    {title: 's2_header', fragment: '2'},
    {title: 's3_header', fragment: '3'},
    {title: 's4_header', fragment: '4'},
    {title: 's5_header', fragment: '5'},
    {title: 's6_header', fragment: '6'},
  ];

  languages = [
    'de',
    'it'
  ]

  isNavbarCollapsed = true;

  toggleNavbarCollapsed(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  constructor(public router: Router, private translate: TranslateService) {
  }


  changeLanguage(culture: string) {
    this.translate.use(culture);
  }
}
