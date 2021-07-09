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
import { BlockquoteComponent } from './blockquote/blockquote.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { GoogleMapsModule } from '@angular/google-maps'

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
    HistoricViewComponent,
    BlockquoteComponent,
    ImageViewComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: '1', component: Stage1Component},
      {path: '2', component: Stage2Component},
      {path: '3', component: Stage3Component},
      {path: '4', component: Stage4Component},
      {path: '5', component: Stage5Component},
      {path: '6', component: Stage6Component},
    ]),
    NgbModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
