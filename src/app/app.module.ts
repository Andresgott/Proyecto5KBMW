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
import { SobreBmwComponent } from './sobre-bmw/sobre-bmw.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderSponsorsComponent } from './slider-sponsors/slider-sponsors.component';
import { PreparationComponent } from './preparation/preparation.component';
import { Location, HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderHomeComponent,
    RegistrationComponent,
    FooterComponent,
    AuspiciadoresComponent,
    TuCarreraComponent,
    SobreBmwComponent,
    SliderSponsorsComponent,
    PreparationComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    SlickCarouselModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'your-race', component: TuCarreraComponent },
      {path: 'sobreBmw', component: SobreBmwComponent},
      {path: "preparation", component: PreparationComponent},
      {path: 'auspiciadores', component:AuspiciadoresComponent}
    ],

    //Con estos dos permito ir a secciones de los componentes
    {
      scrollPositionRestoration: 'enabled',  // Restaura la posición del scroll
      anchorScrolling: 'enabled'             // Habilita el desplazamiento a los fragmentos
    })

  ],
  providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],

})
export class AppModule { }
