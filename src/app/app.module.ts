import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SermonsComponent } from './sermons/sermons.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DonationsComponent } from './donations/donations.component';
import { EventsComponent } from './events/events.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { FooterComponent } from './navigation/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SermonsComponent,
    GalleryComponent,
    DonationsComponent,
    EventsComponent,
    ContactUsComponent,
    NavigationComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
