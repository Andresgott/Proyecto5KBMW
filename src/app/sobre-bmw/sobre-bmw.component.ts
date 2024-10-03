import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-bmw',
  templateUrl: './sobre-bmw.component.html',
  styleUrls: ['./sobre-bmw.component.css']

})



export class SobreBmwComponent {
  currentIndex: number = 0;

  ngAfterViewInit() {
    this.autoSlide('podcastSlider', 5000);
    this.autoSlide('imgSlider1', 5000);
    this.autoSlide('imgSlider2', 5000);
    this.autoSlide('imgSlider3', 5000);
    this.autoSlide('imgSlider4', 5000);
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
}
