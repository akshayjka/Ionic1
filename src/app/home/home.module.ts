import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SkillsComponentModule } from '../skills/skills.module';

// import { HomeComponent } from './reachus.component'
import { HomeComponent } from './home.component';
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,
    SkillsComponentModule,
    ReactiveFormsModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeComponentModule {}
