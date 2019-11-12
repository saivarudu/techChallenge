import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { NotFoundComponent } from '../app/not-found/not-found.component';
import { HomeComponent } from '../app/home/home.component';
import { UpdateComponent } from '../app/update/update.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/listing', pathMatch: 'full'},
  { path: 'update/:id', component: UpdateComponent, pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    children: [{
      path: 'listing',
      component: ListingComponent
    }, {
      path: 'orders',
      component: NotFoundComponent
    }, {
      path: 'about',
      component: NotFoundComponent
    }, {
      path: 'login',
      component: NotFoundComponent
    }]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
