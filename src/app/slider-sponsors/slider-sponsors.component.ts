import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider-sponsors',
  templateUrl: './slider-sponsors.component.html',
  styleUrls: ['./slider-sponsors.component.css']
})
export class SliderSponsorsComponent implements AfterViewInit {
  currentIndex: number = 0;

  ngAfterViewInit() {
    this.autoSlide('imgSlider5', 5000); // Inicia el slider automático
  }

  autoSlide(sliderId: string, delay: number) {
    const slider = document.getElementById(sliderId);
    if (slider) {
      const slides = slider.getElementsByClassName('slide');
      let index = 0;
      const slidesToShow = 2; // Mostrar dos slides a la vez
      const totalSlides = Math.ceil(slides.length / slidesToShow); // El número total de grupos de 2 slides

      setInterval(() => {
        index = (index + 1) % totalSlides; // Avanzar al siguiente conjunto de 2 slides
        const translateX = index * (100 / slidesToShow); // Calcular el porcentaje correcto para mover
        (slider as HTMLElement).style.transform = `translateX(-${translateX}%)`;
      }, delay);
    } else {
      console.error(`Slider with id ${sliderId} not found`);
    }
  }

  moveSlide(direction: number, sliderId: string) {
    const slider = document.getElementById(sliderId);
    if (slider) {
      const slides = slider.getElementsByClassName('slide');
      const totalSlides = slides.length;
      const slideWidth = slides[0].clientWidth;

      this.currentIndex += direction;

      if (this.currentIndex < 0) {
        this.currentIndex = totalSlides - 1; // Volver al último slide si se pasa del primero
      } else if (this.currentIndex >= totalSlides) {
        this.currentIndex = 0; // Volver al primer slide si se pasa del último
      }

      slider.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;
    } else {
      console.error(`Slider with id ${sliderId} not found`);
    }
  }
}
