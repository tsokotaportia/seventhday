import { DonationsComponent } from './donations/donations.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { SermonsComponent } from './sermons/sermons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sermons' , component : SermonsComponent,

  },
  {
    path: 'home' , component : HomeComponent
  },
  {
    path: 'events' , component : EventsComponent
  },
  {
    path: 'gallery' , component : GalleryComponent
  },
  {
    path: 'donations' , component : DonationsComponent
  },

  {
    path: 'contact-us' , component :ContactUsComponent
  },
  {
    path: '' , component : HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
