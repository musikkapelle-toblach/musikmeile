import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {RouterModule} from '@angular/router';
import { Stage1Component } from './stages/stage1/stage1.component';
import { Stage2Component } from './stages/stage2/stage2.component';
import { Stage3Component } from './stages/stage3/stage3.component';
import { Stage4Component } from './stages/stage4/stage4.component';
import { Stage5Component } from './stages/stage5/stage5.component';
import { Stage6Component } from './stages/stage6/stage6.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HistoricViewComponent } from './historic-view/historic-view.component';

@NgModule({
  declarations: [
    AppComponent,
    Stage1Component,
    Stage2Component,
    Stage3Component,
    Stage4Component,
    Stage5Component,
    Stage6Component,
    HomeComponent,
    HistoricViewComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'stage1', component: Stage1Component},
      {path: 'stage2', component: Stage2Component},
      {path: 'stage3', component: Stage3Component},
      {path: 'stage4', component: Stage4Component},
      {path: 'stage5', component: Stage5Component},
      {path: 'stage6', component: Stage6Component},
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
