import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillsComponent } from './skills.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [SkillsComponent],
  exports: [SkillsComponent]
})
export class SkillsComponentModule {}
