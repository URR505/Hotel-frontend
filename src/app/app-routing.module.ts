import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CatalogComponent } from './catalog/catalog.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'order', component: OrderComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

