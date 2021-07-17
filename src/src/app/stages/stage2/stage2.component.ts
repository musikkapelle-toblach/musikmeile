import {Component, OnInit} from '@angular/core';
import {IHistoryEntry} from '../../historic-view/historic-view.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-stage2',
  templateUrl: './stage2.component.html',
  styleUrls: ['./stage2.component.scss']
})
export class Stage2Component implements OnInit {

  constructor(private translation: TranslateService) {
  }

  historicEntries: IHistoryEntry[];

  ngOnInit(): void {

    this.translation.get([
        'history_1821',
        'history_1832',
        'history_1837',
        'history_1838',
        'history_1877',
        'history_1885',
        'history_1886',
        'history_1907',
        'history_1912',
        'history_1914-1918',
        'history_1920',
        'history_1939-1945',
        'history_1947',
        'history_1948',
        'history_1950',
        'history_1955',
        'history_1957',
        'history_1963',
        'history_1966',
        'history_1971',
        'history_1977',
        'history_1985',
        'history_1986',
        'history_1987',
        'history_1996',
        'history_1996_1',
        'history_1997',
        'history_2001',
        'history_2004',
        'history_2007',
        'history_2014',
        'history_2019',
        'history_2020',
      ]
    ).toPromise().then(e => this.loadHistoryEntries(e));
  }

  private loadHistoryEntries(e: any) {
    this.historicEntries = [
      {
        title: '1821',
        body: e.history_1821,
      },
      {
        title: '1832',
        body: e.history_1832
      },
      {
        title: '1837',
        body: e.history_1837
      },
      {
        title: '1838', body: e.history_1838
      },
      {
        title: '1877',
        body: e.history_1877,
        image: {
          url: '/assets/images/stage2/1877-scaled.png'
        }
      },
      {
        title: '1885',
        body: e.history_1885,
        image: {
          url: '/assets/images/stage2/1885-scaled.png'
        }
      },
      {
        title: '1886',
        body: e.history_1886,
        image: {
          url: '/assets/images/stage2/ZillertalerTracht-scaled.png'
        }
      },
      {
        title: '1907',
        body: e.history_1907
      },
      {
        title: '1912',
        body: e.history_1912
      },
      {
        title: '1914-1918',
        body: e['history_1914-1918']
      },
      {
        title: '1920er Jahre',
        body: e.history_1920,
        image: {
          url: '/assets/images/stage2/1926-scaled.png'
        }
      },
      {
        title: '1939-1945',
        body: e['history_1939-1945'],
        image: {
          url: '/assets/images/stage2/1944-scaled.png'
        }
      },
      {
        title: '1947',
        body: e.history_1947
      },
      {
        title: '1948', body: e.history_1948
      },
      {title: '1950', body: e.history_1950},
      {title: '1955', body: e.history_1955},
      {title: '1957', body: e.history_1957},
      {title: '1963', body: e.history_1963},
      {title: '1966', body: e.history_1966},
      {
        title: '1971',
        body: e.history_1971,
        image: {
          url: '/assets/images/stage2/1966-scaled.png'
        }
      },
      {title: '1977', body: e.history_1977},
      {
        title: '1985',
        body: e.history_1985
      },
      {title: '1986', body: e.history_1986},
      {
        title: '1987', body: e.history_1987
      },
      {title: '1996', body: e.history_1996},
      {
        title: '1996', body: e.history_1996_1
      },
      {
        title: '1997',
        body: e.history_1997
      },
      {
        title: '2001', body: e.history_2001,
        image: {
          url: '/assets/images/stage2/2001-scaled.png'
        }
      },
      {
        title: '2004',
        body: e.history_2004
      },
      {
        title: '2007', body: e.history_2007
      },
      {
        title: '2014',
        body: e.history_2014
      },
      {
        title: '2019',
        body: e.history_2019
      },
      {
        title: '2020', body: e.history_2020,
        image: {
          url: '/assets/images/stage2/2020-scaled.png'
        }
      },
    ];
  }
}
