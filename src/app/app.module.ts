import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LandingComponent } from './components/landing/landing.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { OrderComponent } from './components/order/order.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ForumsComponent } from './components/forums/forums.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
<<<<<<< HEAD
import { RegisterComponent } from './components/register/register.component';
=======
import { authInterceptor } from './custom/auth.interceptor';
>>>>>>> f3ac34a80a59aa09492576cd992b946afb9f26f4

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingComponent,
    CatalogComponent,
    OrderComponent,
    ProfileComponent,
    ForumsComponent,
    AboutComponent,
    LoaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
