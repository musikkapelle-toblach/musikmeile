import { Component, OnInit } from '@angular/core';
import {IHistoryEntry} from '../../historic-view/historic-view.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-stage4',
  templateUrl: './stage4.component.html',
  styleUrls: ['./stage4.component.scss']
})
export class Stage4Component implements OnInit {

  constructor(public translation: TranslateService) { }

  conductors: IHistoryEntry[] = [
    {title: 'Sebastian Baur',    from: 1830, to: 1837  },
    {title: 'Johann Taschler',    from: 1837, to: 1867  },
    {title: 'Sebastian Baur jun.',    from: 1868, to: 1870  },
    {title: 'Michael Untergasser',    from: 1870, to: 1872  },
    {title: 'Paul Noggler',    from: 1872, to: 1874  },
    {title: 'Peter Hackhofer (Prosl)',    from: 1874, to: 1878  },
    {title: 'Matthias Außerhofer',    from: 1878, to: 1878  },
    {title: 'Josef Walch',    from: 1879, to: 1904  },
    {title: 'Andrä Mittich',    from: 1904, to: 1907  },
    {title: 'Sebastian Baur (Lehrer)',    from: 1907, to: 1910  },
    {title: 'Andrä Mittich',    from: 1911, to: 1912  },
    {title: 'Johann Baur',    from: 1913, to: 1957  },
    {title: 'Alois Strobl',    from: 1957, to: 1981  },
    {title: 'Alois Walder',    from: 1981, to: 1992  },
    {title: 'Alfred Gasser',    from: 1992, to: 1996  },
    {title: 'Pepi Fauster',    from: 1997, to: 2001, body: 'Ehrenkapellmeister ab 2012'  },
    {title: 'Sigisbert Mutschlechner',    from: 2012, to: undefined  },
  ];

  ngOnInit(): void {
  }

}
