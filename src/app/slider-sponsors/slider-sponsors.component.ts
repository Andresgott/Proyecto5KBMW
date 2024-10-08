import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider-sponsors',
  templateUrl: './slider-sponsors.component.html',
  styleUrls: ['./slider-sponsors.component.css']
})
export class SliderSponsorsComponent implements AfterViewInit {
  currentIndex: number = 0;
  slideInterval: any;

  ngAfterViewInit() {
    this.autoSlide('imgSlider5', 5000); // Inicia el slider automático
  }

  autoSlide(sliderId: string, delay: number) {
    const slider = document.getElementById(sliderId);
    if (slider) {
      const slides = slider.getElementsByClassName('slide');
      const totalSlides = slides.length;
      const visibleSlides = 3; // Slides visibles a la vez

      this.slideInterval = setInterval(() => {
        this.currentIndex++;
        if (this.currentIndex >= totalSlides - visibleSlides) {
          this.resetSlider(sliderId, slides[0].clientWidth); // Reiniciar al primer slide
        } else {
          this.moveSlider(sliderId, slides[0].clientWidth);
        }
      }, delay);
    } else {
      console.error(`Slider with id ${sliderId} not found`);
    }
  }

  resetSlider(sliderId: string, slideWidth: number) {
    const slider = document.getElementById(sliderId);
    if (slider) {
      slider.style.transition = 'none'; // Sin transición al resetear
      this.currentIndex = 0; // Reinicia el índice
      slider.style.transform = `translateX(0px)`; // Vuelve al principio
      setTimeout(() => {
        slider.style.transition = 'transform 0.5s ease-in-out'; // Restablece la transición
      }, 50); // Pequeño retraso para que el cambio sea perceptible
    }
  }

  moveSlider(sliderId: string, slideWidth: number) {
    const slider = document.getElementById(sliderId);
    if (slider) {
      slider.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;
    }
  }

  moveSlide(direction: number, sliderId: string) {
    clearInterval(this.slideInterval); // Detiene el autoSlide mientras se navega manualmente
    const slider = document.getElementById(sliderId);
    if (slider) {
      const slides = slider.getElementsByClassName('slide');
      const totalSlides = slides.length;
      const visibleSlides = 2;

      this.currentIndex += direction;

      // Controlar los límites del índice
      if (this.currentIndex < 0) {
        this.currentIndex = totalSlides - visibleSlides; // Ir al último grupo de slides
      } else if (this.currentIndex >= totalSlides - visibleSlides) {
        this.currentIndex = 0; // Volver al primer slide
      }

      this.moveSlider(sliderId, slides[0].clientWidth);
      this.autoSlide(sliderId, 5000); // Reiniciar el autoSlide después del movimiento manual
    }
  }
}
