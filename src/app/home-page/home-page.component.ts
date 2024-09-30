import { Component,OnInit,OnDestroy } from '@angular/core';
import { HeaderHomeComponent } from '../header-home/header-home.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit,OnDestroy{
  countdownDate= new Date("2024-11-17T07:00:00").getTime();
  days:number=0;
  hours:number=0;
  minutes:number=0;
  seconds:number=0;
  intervalId:any;

  ngOnInit(){
    this.startCountDown();
  }

  ngOnDestroy(): void {
    if(this.intervalId)
      {
        clearInterval(this.intervalId);
      }
  }

  startCountDown()
  {
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.countdownDate - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Si la cuenta regresiva ha terminado
      if (distance < 0) {
        clearInterval(this.intervalId);
        this.days = this.hours = this.minutes = this.seconds = 0;
      }
    }, 1000); // Actualiza cada segundo

  }


}
