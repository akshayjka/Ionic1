import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationController, MenuController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';
import emailjs, { send } from 'emailjs-com';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  scrollToTopButton: any;
  isSmallScreen!: boolean;
  contactForm:FormGroup;

  // animationController: any;

  



  constructor(private animationController: AnimationController,
    private menuController: MenuController, 
    private router: Router, 
    private fb:FormBuilder,
    private api_service:ApiService,
    private toastController: ToastController
    ) {
    this.contactForm = this.fb.group({
      email:['', Validators.required],
      name:['', Validators.required],
      phone:['', Validators.required],
      city:['', Validators.required],
      text:['', Validators.required]
    })
   }
   async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Your Message has submitted Successfully!',
      duration: 2500,
      position: position,
      icon: 'checkmark-circle-outline'
    });

    await toast.present();
  }
   toggleMenu() {
    this.menuController.toggle('main-menu');
  }

  // Function to close the side menu and navigate to a specific page
  closeMenuAndNavigate(url: string) {
    this.menuController.close('main-menu');
    this.router.navigateByUrl(url);
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
  submitForm() {
    emailjs.init('XwnxwBXp56Lfk9wGU')
    emailjs.send("service_qcba45w","template_z942xkp",{
      from_name: this.contactForm.value.name,
      to_name: "Akshay",
      message: this.contactForm.value.text,
      });
      setTimeout(() => {
      this.presentToast('top');
      this.contactForm.reset();
        
      }, 3500);
  }

}
