import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReachusComponent } from './reachus.component'
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ReachusComponent],
  exports: [ReachusComponent]
})
export class ReachusComponentModule {}
