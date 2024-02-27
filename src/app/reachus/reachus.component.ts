import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-reachus',
  templateUrl: './reachus.component.html',
  styleUrls: ['./reachus.component.scss'],
})
export class ReachusComponent  implements OnInit {
  showDropdown: boolean = false;
  isSmall:boolean = true;
  contactForm:FormGroup;


  constructor(private menuController: MenuController,
     private router: Router,
      private platform: Platform,
      private fb:FormBuilder,
      ) { 
    this.setScreenSize();
    this.contactForm = this.fb.group({
      email:[''],
      name:[''],
      phone:[''],
      city:[''],
      text:['']
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
 
  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  isSmallScreen(): boolean {
    return this.platform.width() <= 576; // Adjust the breakpoint as needed
  }



  // Function to close the side menu and navigate to a specific page
  // closeMenuAndNavigate(url: string) {
  //   this.menuController.close('main-menu');
  //   this.router.navigateByUrl(url);
  // }

  goto(event:string){
    this.router.navigate([event]); 
  }

  submitForm() {
    emailjs.init('XwnxwBXp56Lfk9wGU')
    emailjs.send("service_qcba45w","template_z942xkp",{
      from_name: this.contactForm.value.name,
      to_name: "Akshay",
      message: this.contactForm.value.text,
      });
  }
}
