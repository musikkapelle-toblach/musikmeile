import {Component, OnInit} from '@angular/core';
import {IHistoryEntry} from '../../historic-view/historic-view.component';

@Component({
  selector: 'app-stage2',
  templateUrl: './stage2.component.html',
  styleUrls: ['./stage2.component.scss']
})
export class Stage2Component implements OnInit {

  constructor() {
  }

  historicEntries: IHistoryEntry[];

  ngOnInit(): void {
    this.historicEntries = [
      {
        title: '1821',
        body: 'Der 14-jährige Bindter-Sohn Sebastian Baur gründet eine 10-köpfige „Musikbande“, deren Aufgabe es ist, die\n' +
          '          Schützenkompanie bei Prozessionen und beim Aufmarsch zum Schießstand zu begleiten. Die Besetzung umfasst\n' +
          '          wahrscheinlich zwei Trompeten, zwei Hörner und zwei Klarinetten. Bald darauf kommen drei Schlaginstrumente und\n' +
          '          ein Fagott dazu.'
      },
      {
        title: '1832',
        body: 'Das Instrumentarium der kleinen Kapelle wird durch persönlichen Einsatz von Sebastian Baur und weiteren Gönnern\n' +
          '        um eine Klappentrompete, später um zwei Zugposaunen, ein Paar Cinellen, ein Kontrafagott und Maschinen- bzw.\n' +
          '        Ventiltrompeten erweitert.'
      },
      {
        title: '1837',
        body: 'Kapellmeister Johann Taschler – Egarter übernimmt die Musikkapelle. Seine Jugendarbeit trägt schnell Früchte\n' +
          '        und macht die auf rund 20 Mann angewachsene Kapelle im Pustertal bekannt und gefragt.'
      },
      {
        title: '1838', body: 'Bei der Einweihung der Franzensfeste sehen zwei Toblacher Musikanten zum ersten Mal in ihrem Leben eine\n' +
          '        Regimentskapelle, die spielend im Gleichschritt marschiert. Ab sofort heißt es auch in Toblach: Im Schritt –\n' +
          '        Marsch!'
      },
      {
        title: '1877',
        body: 'Das Grand Hotel Toblach wird erbaut, vom Ehepaar Ignaz und Elise Überbacher gepachtet und nach zehn Jahren von\n' +
          '        ihnen gekauft. Es erarbeitet sich einen erstklassigen Ruf und lockt Gäste aus ganz Europa an. Bis 1914 werden in\n' +
          '        Neu-Toblach und dem Höhlensteintal verschiedene Hotels und Pensionen errichtet. Die Musikkapelle spielt häufig\n' +
          '        “Fremdenkonzerte” an verschiedensten Orten zur Unterhaltung der Gäste. '
      },
      {
        title: '1885',
        body: 'Das musikalische Repertoire der Kapelle wird um melodiöse Konzertmärsche, Walzer und Polkas sowie Bearbeitungen\n' +
          '        von Ouvertüren, Opernarien und Operetten erweitert. '
      },
      {
        title: '1886',
        body: 'initiiert Kapellmeister Josef Walch die Anschaffung der neuen “Zillertaler Tracht”. Walch schreibt die Chronik\n' +
          '        der Musikkapelle nach, führt diese weiter und legt Protokollbücher an. '
      },
      {
        title: '1907',
        body: 'Kapellmeister Sebastian Baur, Lehrer und Enkel des Gründers, übernimmt die Musikkapelle und setzt sich für die\n' +
          '        Anschaffung einer authentischen “Toblacher Nationaltracht” ein. Er befasst sich intensiv mit Kirchenmusik,\n' +
          '        komponiert weltliche und geistliche Werke. In Toblach entsteht ein 18 Mann starkes Streichorchester.'
      },
      {
        title: '1912',
        body: 'werden neue Instrumente mit der internationalen Stimmung eingeführt, sodass auf dem Kirchenchor und in der\n' +
          '        Kapelle dieselben Instrumente verwendet werden können.'
      },
      {
        title: '1914-1918',
        body: 'Die Musikanten, die in den Krieg einrücken müssen, werden mit klingendem Spiel zum Bahnhof geleitet und\n' +
          '        verabschiedet. Bis auf zwei kehren alle zurück. Die Tätigkeit der Kapelle wird in dieser Zeit auf ein Minimum\n' +
          '        beschränkt.'
      },
      {
        title: '1920er Jahre',
        body: 'Die Zwischenkriegszeit ist eine Zeit der Höhen und Tiefen: Durch den wieder aufkommenden Fremdenverkehr steigt\n' +
          '        die Tätigkeit und Nachfrage nach der Musikkapelle zwar an, die Bedingungen für Auftritte sind aber aufgrund von\n' +
          '        politischen Spannungen zunehmend schwieriger.'
      },
      {
        title: '1939-1945',
        body: 'Der Zweite Weltkrieg und die Option hinterlassen große Lücken in der Musikkapelle. Nur die notwendigsten\n' +
          '        Auftritte an kirchlichen Festtagen werden absolviert.'
      },
      {
        title: '1947',
        body: 'Erster ordentlicher Auftritt nach dem Krieg. Franz Strobl (Nantl) wird zum Obmann gewählt. Er kümmert sich um\n' +
          '        die Aufbesserung der Musikkasse, die Reparatur der Instrumente, der Trachten und Monturen. '
      },
      {
        title: '1948', body: 'Die Musikkapelle erhält den 3. Platz für ihre Tracht bei der Bozner Messe. Das Preisgeld beträgt 5.000\n' +
          '        Lire.'
      },
      {title: '1950', body: 'nimmt die Kapelle am ersten Wertungsspiel in Welsberg teil und erzielt den 1. Preis in der 1. Kategorie.'},
      {title: '1955', body: 'entsteht die erste Tonbandaufnahme der Kapelle auf dem Schulplatz.'},
      {title: '1957', body: 'findet das erste Frühjahrskonzert auf dem Postplatz unter Kapellmeister Alois Strobl statt.'},
      {title: '1963', body: 'wird das renovierte Musikzimmer hinter dem Haus Biedenegg eingeweiht. '},
      {title: '1966', body: 'entsteht auf dem Schulplatz ein Musikpavillon.'},
      {
        title: '1971',
        body: 'Die Kapelle feiert das 150-jährige Bestandsjubiläum. Es erscheint eine Festschrift, geschrieben von Obmann\n' +
          '        Andreas Walder.'
      },
      {title: '1977', body: 'Ausführliche Statuten sorgen für mehr Klarheit in organisatorischen Belangen.'},
      {
        title: '1985',
        body: 'Frauenpower jetzt auch in der Musikkapelle Toblach: Astrid Hell (Flöte) tritt als erste Frau in die bislang von\n' +
          '        Männern dominierte Kapelle ein.'
      },
      {title: '1986', body: 'Die Musikkapelle bezieht den Probenraum am jetzigen Standort in der Volksschule.'},
      {
        title: '1987', body: 'Im Musiksaal der Grundschule spielt die Musikkapelle unter Kapellmeister Alois Walder ihr erstes großes\n' +
          '        Saalkonzert.'
      },
      {title: '1996', body: 'Der Chronist erwähnt zum ersten Mal eine Marschierprobe.'},
      {
        title: '1996', body: 'Beim feierlichen Jubiläum zum 175-jährigen Bestehen wird die Festschrift verfasst von Christoph Walder\n' +
          '        vorgestellt. '
      },
      {
        title: '1997',
        body: 'Unter Kapellmeister Pepi Fauster wird zum ersten Mal die Position des Jugendleiters im Ausschuss besetzt, die\n' +
          '        JUKA (Jugendkapelle) Toblach wird gegründet. Die Wichtigkeit der Jugendarbeit zeigt auch das erste Konzert in\n' +
          '        Zusammenarbeit mit der Grundschule 1998. '
      },
      {title: '2001', body: 'Im Rahmen eines Festgottesdiensts wird die Musikfahne enthüllt.'},
      {
        title: '2004',
        body: 'Neue Technologien machen selbst vor traditionsbewussten Musikkapellen nicht halt. Die Musikant*innen werden nun\n' +
          '        via SMS über Ausrückungen, Proben usw. informiert'
      },
      {
        title: '2007', body: 'Nach längerer Pause nimmt die Musikkapelle am Bezirkswertungsspiel in Olang teil und erspielt die höchste\n' +
          '        Punktezahl in der Kunststufe (Kategorie D).'
      },
      {
        title: '2014',
        body: 'erhält die Musikkapelle Toblach unter Kapellmeister Sigisbert Mutschlechner und Obmann Hermann Rienzner den\n' +
          '        Blasmusikpreis des Landes Südtirol für besondere Verdienste in verschiedenen Bereichen der Tätigkeit einer\n' +
          '        Musikkapelle. Besonders hervorstechend ist das Projekt “Bläserklasse - jedem Kind ein Instrument” in\n' +
          '        Zusammenarbeit mit der Grundschule Toblach, welches im selben Jahr startet. '
      },
      {
        title: '2019',
        body: 'Modernisierung und akustische Sanierung des Probelokals im Grundschulgebäude - zeitgemäße Probenarbeit ist nun\n' +
          '        möglich.'
      },
      {
        title: '2020', body: 'Aufgrund der Corona-Pandemie legen viele Musikkapellen ihre Tätigkeiten still. Die Musikkapelle Toblach\n' +
          '        überrascht ihr Publikum mit einer Konzertreihe, gespielt von verschiedenen Kleingruppen an besonderen Orten im\n' +
          '        Dorf.'
      },
    ];
  }

}
