import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-bmw',
  templateUrl: './sobre-bmw.component.html',
  styleUrls: ['./sobre-bmw.component.css']
})
export class SobreBmwComponent {
  currentIndices: { [key: string]: number } = {}; // Índices separados para cada slider

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
        this.currentIndices[sliderId] = index; // Actualizar el índice del slider actual
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

      // Asegúrate de que hay un índice inicial para el slider
      if (!this.currentIndices[sliderId]) {
        this.currentIndices[sliderId] = 0;
      }

      // Actualizar el índice de acuerdo a la dirección
      this.currentIndices[sliderId] += direction;

      // Controlar los límites del índice
      if (this.currentIndices[sliderId] < 0) {
        this.currentIndices[sliderId] = totalSlides - 1; // Volver al último slide si se pasa del primero
      } else if (this.currentIndices[sliderId] >= totalSlides) {
        this.currentIndices[sliderId] = 0; // Volver al primer slide si se pasa del último
      }

      // Obtener el ancho de un slide
      const slideWidth = slides[0].clientWidth;

      // Mover el slider en la dirección correcta
      slider.style.transform = `translateX(-${this.currentIndices[sliderId] * slideWidth}px)`;
    } else {
      console.error(`Slider with id ${sliderId} not found`);
    }
  }
}
