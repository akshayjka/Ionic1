import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent  implements OnInit {
  contactForm:FormGroup;


  constructor(
    private animationController: AnimationController,private menuController: MenuController, 
    private router: Router,
    private fb:FormBuilder
  ) { 
    this.contactForm = this.fb.group({
      email:[''],
      name:[''],
      phone:[''],
      city:[''],
      text:['']
    })
  }

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
  toggleMenu() {
    this.menuController.toggle('main-menu');
  }

  // Function to close the side menu and navigate to a specific page
  closeMenuAndNavigate(url: string) {
    this.menuController.close('main-menu');
    this.router.navigateByUrl(url);
  }
  goto(event:string){
    this.router.navigateByUrl(event);
  }

  submitForm() {
    console.log("The service page submit form is working", this.contactForm.value)
  }

}
