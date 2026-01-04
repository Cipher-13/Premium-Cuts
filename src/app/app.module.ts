import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Shared/layouts/footer/footer.component';
import { MiniFooterComponent } from './Shared/layouts/mini-footer/mini-footer.component';
import { NavBarComponent } from './Shared/layouts/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { CategoryComponent } from './Components/category/category.component';
import { HomeNavComponent } from './Shared/layouts/home-nav/home-nav.component';
import { ShrimpsComponent } from './Components/shrimps/shrimps.component';
import { ChickensComponent } from './Components/chickens/chickens.component';
import { MeatComponent } from './Components/meat/meat.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MiniFooterComponent,
    NavBarComponent,
    HomeComponent,
    CategoryComponent,
    HomeNavComponent,
    ShrimpsComponent,
    ChickensComponent,
    MeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
