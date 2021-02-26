import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stage4',
  templateUrl: './stage4.component.html',
  styleUrls: ['./stage4.component.scss']
})
export class Stage4Component implements OnInit {

  constructor() { }

  conductors = [
    {name: 'Sebastian Baur',    from: 1830, to: 1837  },
    {name: 'Johann Taschler',    from: 1837, to: 1867  },
    {name: 'Sebastian Baur jun.',    from: 1868, to: 1870  },
    {name: 'Michael Untergasser',    from: 1870, to: 1872  },
    {name: 'Paul Noggler',    from: 1872, to: 1874  },
    {name: 'Peter Hackhofer (Prosl)',    from: 1874, to: 1878  },
    {name: 'Matthias Außerhofer',    from: 1878, to: 1878  },
    {name: 'Josef Walch',    from: 1879, to: 1904  },
    {name: 'Andrä Mittich',    from: 1904, to: 1907  },
    {name: 'Sebastian Baur (Lehrer)',    from: 1907, to: 1910  },
    {name: 'Andrä Mittich',    from: 1911, to: 1912  },
    {name: 'Johann Baur',    from: 1913, to: 1957  },
    {name: 'Alois Strobl',    from: 1957, to: 1981  },
    {name: 'Alois Walder',    from: 1981, to: 1992  },
    {name: 'Alfred Gasser',    from: 1992, to: 1996  },
    {name: 'Pepi Fauster',    from: 1997, to: 2001, additionalInformation: 'Ehrenkapellmeister ab 2012'  },
    {name: 'Sigisbert Mutschlechner',    from: 2012, to: undefined  },
  ];

  ngOnInit(): void {
  }

}
