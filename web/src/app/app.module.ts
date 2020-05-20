import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SlieshowComponent } from './home/slieshow/slieshow.component';
import { ClassifyComponent } from './classify/classify/classify.component';
import { GoodsComponent } from './goods/goods.component';
import { GoodsListComponent } from './goods-list/goods-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PageNotFoundComponent,
    SlieshowComponent,
    ClassifyComponent,
    GoodsComponent,
    GoodsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
