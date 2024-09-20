import { Component } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderHomeComponent } from './header-home/header-home.component';

@Component({
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home-page></app-home-page>
      <app-header-home></app-header-home>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BMW RUNNING';
}
