import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { ProfileGalleryComponent } from './profile-gallery/profile-gallery.component';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import { SetupDateComponent } from './date/setup-date/setup-date.component';
import { PopularityPipe } from './pipes/popularity.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileGalleryComponent,
    NameFilterPipe,
    SetupDateComponent,
    PopularityPipe,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
