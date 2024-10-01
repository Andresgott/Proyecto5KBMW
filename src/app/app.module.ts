import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { AuspiciadoresComponent } from './auspiciadores/auspiciadores.component';
import { TuCarreraComponent } from './tu-carrera/tu-carrera.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderHomeComponent,
    RegistrationComponent,
    FooterComponent,
    AuspiciadoresComponent,
    TuCarreraComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'your-race', component: TuCarreraComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
