import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  scrollToTopButton: any;
  isSmallScreen!: boolean;

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


  constructor(private animationController: AnimationController,private menuController: MenuController, private router: Router) {
    
   }
   toggleMenu() {
    this.menuController.toggle('main-menu');
  }

  // Function to close the side menu and navigate to a specific page
  closeMenuAndNavigate(url: string) {
    this.menuController.close('main-menu');
    this.router.navigateByUrl(url);
  }
  //  checkScreenWidth() {
  //   this.isSmallScreen = window.innerWidth < 768; 
  // }

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
