import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/global/header/header.component';
import { FooterComponent } from './pages/global/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';

import { AppRoutingModule } from './app-routing.module';
// place to import material
import {MdButtonModule, MdCardModule} from '@angular/material';
import 'hammerjs';
import { DetailComponent } from './pages/detail/detail.component';
import { MainComponent } from './pages/global/main/main.component';
import { CardComponent } from './pages/index/card/card.component';
import { RecommendComponent } from './pages/index/recommend/recommend.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AboutComponent,
    DetailComponent,
    MainComponent,
    CardComponent,
    RecommendComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
