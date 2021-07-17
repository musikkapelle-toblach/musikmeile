import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-stage5',
  templateUrl: './stage5.component.html',
  styleUrls: ['./stage5.component.scss']
})
export class Stage5Component implements OnInit {

  constructor(public translation: TranslateService) { }

  ngOnInit(): void {
  }

}
