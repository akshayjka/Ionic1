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
    // Get the sender's email from the form
    const senderEmail = this.contactForm.value.email;
  
    // Construct the request body with the sender's email
    const reqBody = {
      from: senderEmail,
      to: "akshayjkrd@gmail.com",
      subject: "Thanks for subscribing",
      text: this.contactForm.value.text + '  ' + this.contactForm.value.email + '  ' + this.contactForm.value.phone, 
    };
  
    // Send the email using your API service
    this.api_service.sendMail(reqBody).subscribe(
      () => {
        // Email sent successfully, handle any further actions
        console.log("Email sent successfully");
        this.presentToast('top');
        this.contactForm.reset();
      },
      error => {
        // Error sending email, handle the error
        console.error("Error sending email:", error);
      }
    );
  }

}
