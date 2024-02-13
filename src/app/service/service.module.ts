import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceComponent } from './service.component'
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ServiceComponent],
  exports: [ServiceComponent]
})
export class ServiceComponentModule {}
