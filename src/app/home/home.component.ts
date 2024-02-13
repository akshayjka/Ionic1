import { Component, HostListener, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  scrollToTopButton: any;
  // animationController: any;
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


  constructor(private animationController: AnimationController) { }

  ngOnInit() {
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

}
