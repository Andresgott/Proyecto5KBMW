import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-header-home></app-header-home>
      <router-outlet></router-outlet>
      <app-slider-sponsors></app-slider-sponsors>
      <app-footer></app-footer>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BMW RUNNING';
}
