import { Component, HostListener, OnInit } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AnimationController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      transition(':enter', [
        animate('3000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class Tab1Page  implements OnInit{

  isDarkMode: boolean = false;
  showMenuIcon: boolean = false;
  isSmallScreen = false;

  cards = [1, 2, 3];

  constructor(private darkService:DarkModeService,
    private animationController: AnimationController,
    private platform: Platform
    ) {
      this.checkScreenSize();
    }

    toggleMenu() {
      // Implement the toggle menu functionality here
      this.showMenuIcon = !this.showMenuIcon; 
      console.log('Toggle menu clicked');
    }
  ngOnInit(): void {
    this.isDarkMode = this.darkService.isDarkModeSubject.value;
    const element = document.querySelector('.fadeInElement');

    if (element) {
      const fadeInAnimation = this.animationController.create()
        .addElement(element)
        .duration(3000)
        .fromTo('opacity', -10, 1)
        .fromTo('transform', 'translateY(-30px)', 'translateY(0)');
  
      fadeInAnimation.play();
    }
  
  }

  checkScreenSize() {
    this.isSmallScreen = this.platform.width() < 768;
  }

  openGit(){
    console.log("the view project is working");
    const url = 'https://github.com/akshayjka/';
    window.open(url, '_blank');
  }

  scrollToTopButton: any;
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 'smooth' for smooth scrolling
  }
  @HostListener('window:scroll', [])
  onScroll() {
    // Show the button when the user scrolls down a certain amount
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const showButtonThreshold = 200; // Adjust as needed
    this.scrollToTopButton = document.querySelector('.scroll-to-top');

    if (scrollY > showButtonThreshold) {
      this.scrollToTopButton.classList.add('show');
    } else {
      this.scrollToTopButton.classList.remove('show');
    }
  }


  }


