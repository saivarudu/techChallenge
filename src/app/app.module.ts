import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ToasterModule } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FilterPipe } from './shared/pipe/filter.pipe';
import { ListingComponent } from './listing/listing.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './shared/components/card/card.component';
import { CardHoverDirective } from './shared/directives/card-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterPipe,
    ListingComponent,
    UpdateComponent,
    NotFoundComponent,
    HomeComponent,
    CardComponent,
    CardHoverDirective
  ],
  imports: [
    BrowserModule,
    ToasterModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
