import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperienceComponent } from './experience.component';
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExperienceComponent],
  exports: [ExperienceComponent]
})
export class ExperienceComponentModule {}
