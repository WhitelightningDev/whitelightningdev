import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideText', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('1s ease-in', style({ opacity: 0, transform: 'translateX(-100px)' }))
      ])
    ]),

    trigger('slideImage', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('1s ease-in', style({ opacity: 0, transform: 'translateX(100px)' }))
      ])
    ]),

    trigger('AboutText', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('1s ease-in', style({ opacity: 0, transform: 'translateX(-100px)' }))
      ])
    ]),

    trigger('slidecard', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('1s ease-in', style({ opacity: 0, transform: 'translateX(100px)' }))
      ])
    ]),
  ]
})
export class HomeComponent implements AfterViewInit {
  isVisible = false; // Controls animation for main section
  isAboutVisible = false; // Controls animation for About section
  isPortCardVisible = false;

  @ViewChild('mainSection', { static: false }) mainSection!: ElementRef;
  @ViewChild('aboutSection', { static: false }) aboutSection!: ElementRef;
  @ViewChild('servicesContainer') servicesContainer!: ElementRef;

  scrollLeft(){
    const container = this.servicesContainer.nativeElement;
    container.scrollLeft -= 200;
  }

  scrollRight(){
    const container = this.servicesContainer.nativeElement;
    container.scrollRight -= 200;
  }

  ngAfterViewInit() {
    const options = {
      root: null,
      threshold: 0.4 // When 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target === this.mainSection.nativeElement) {
          this.isVisible = entry.isIntersecting;
        }
        if (entry.target === this.aboutSection.nativeElement) {
          this.isAboutVisible = entry.isIntersecting;
        }
      });
    }, options);

    observer.observe(this.mainSection.nativeElement);
    observer.observe(this.aboutSection.nativeElement);
  }
}
