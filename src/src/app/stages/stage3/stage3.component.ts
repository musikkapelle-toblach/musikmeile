import { Component, OnInit } from '@angular/core';
import {IHistoryEntry} from '../../historic-view/historic-view.component';

@Component({
  selector: 'app-stage3',
  templateUrl: './stage3.component.html',
  styleUrls: ['./stage3.component.scss']
})
export class Stage3Component implements OnInit {

  constructor() { }

  obmaenner: IHistoryEntry[] = [
    {title: 'Franz Strobl',    from: 1947, to: 1962  },
    {title: 'Franz Troger',    from: 1963, to: 1968  },
    {title: 'Franz Strobl',    from: 1969, to: 1975  },
    {title: 'Andreas Walder',    from: 1975, to: 1987  },
    {title: 'Karl Stoll',    from: 1988, to: 1996  },
    {title: 'Felix Steinwandter',    from: 1997, to: 2006  },
    {title: 'Hermann Rienzner',    from: 2006, to: 2015  },
    {title: 'Stefan Taschler',    from: 1879, to: undefined  },
  ];
  ngOnInit(): void {
  }

}
