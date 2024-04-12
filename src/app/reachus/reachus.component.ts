import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, Platform, ToastController } from '@ionic/angular';
import emailjs from 'emailjs-com';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reachus',
  templateUrl: './reachus.component.html',
  styleUrls: ['./reachus.component.scss'],
})
export class ReachusComponent  implements OnInit {
  showDropdown: boolean = false;
  isSmall:boolean = true;
  contactForm:FormGroup;
  usermail:any;


  constructor(private menuController: MenuController,
     private router: Router,
      private platform: Platform,
      private fb:FormBuilder,
      private toastController: ToastController,
      private http: HttpClient,
      private apiService : ApiService
      ) { 
    this.setScreenSize();
    this.contactForm = this.fb.group({
      email:['', Validators.required],
      name:['', Validators.required],
      phone:['', Validators.required],
      city:['', Validators.required],
      text:['', Validators.required]
    })
  }

  ngOnInit() {
 
  }
  private setScreenSize() {
    const width = this.platform.width();

    if (width <= 768) { // Adjust the breakpoint for medium screen size
      this.isSmall = true;
    } else {
      this.isSmall = false;
    }
  }
 
  // toggleDropdown(): void {
  //   this.showDropdown = !this.showDropdown;
  // }

  // isSmallScreen(): boolean {
  //   return this.platform.width() <= 576; // Adjust the breakpoint as needed
  // }

  goto(event:string){
    this.router.navigate([event]); 
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

  // submitForm() {

  //   const reqBody =   {from : this.contactForm.value.email, to:  "akshayjkrd@gmail.com", subject:"Thanks for subscribing",  text : this.contactForm.value.text }
  //   this.apiService.sendMail(reqBody).subscribe(res=>{
  //     console.log(res);
  //   },
  //     (error)=>{
  //       console.log("error",error)
  //     }
  //   )
  //   // emailjs.init('XwnxwBXp56Lfk9wGU')
  //   // emailjs.send("service_qcba45w","template_z942xkp",{
  //   //   from_name: this.contactForm.value.name,
  //   //   to_name: "Akshay",
  //   //   message: this.contactForm.value.text,
  //   //   });
  //   //   setTimeout(() => {
  //   //   this.presentToast('top');
  //   //   this.contactForm.reset();
        
  //   //   }, 3500);
  // }

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
    this.apiService.sendMail(reqBody).subscribe(
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
